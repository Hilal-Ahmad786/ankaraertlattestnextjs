import { redirect } from "next/navigation";
import { and, desc, eq, gte, lt, inArray, isNotNull, sql } from "drizzle-orm";
import { isDbConfigured, requireDb } from "@/db";
import { clickEvents } from "@/db/schema";
import { isAdminAuthed } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// robots.txt disallows /admin/ from crawling, but disallowed URLs can still be
// indexed URL-only — the meta tag keeps them out of the index entirely.
export const metadata = { robots: { index: false, follow: false } };

const EVENTS = ["phone_click", "whatsapp_click"] as const;

const LABELS: Record<string, string> = {
  phone_click: "Telefon",
  whatsapp_click: "WhatsApp",
};

const dateFmt = new Intl.DateTimeFormat("tr-TR", {
  dateStyle: "medium",
  timeStyle: "medium",
  timeZone: "Europe/Istanbul",
});

/**
 * 6 colors validated to be pairwise distinguishable (incl. for color-blind
 * viewers) — assigned to the 6 busiest IPs, never cycled. More colors would
 * inevitably produce look-alike tones, so every IP beyond the top 6 gets a
 * neutral gray badge; the "IP #n" number is always the definitive identifier.
 */
const IP_COLORS = ["#2a78d6", "#e34948", "#008300", "#eda100", "#4a3aa7", "#1baf7a"];
const IP_GRAY = "#9ca3af";

type SP = { period?: string; from?: string; to?: string };

/** Türkiye (UTC+3, no DST) is fixed — build day boundaries with a +03:00 offset. */
function resolveRange(sp: SP) {
  const now = new Date();
  const istToday = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul" }).format(now); // YYYY-MM-DD
  const todayStart = new Date(`${istToday}T00:00:00+03:00`);
  const period = sp.period ?? "30d";

  if (period === "today") return { period, from: todayStart, to: now, label: "Bugün", fromStr: istToday, toStr: istToday };
  if (period === "yesterday") {
    const y = new Date(todayStart.getTime() - 86400000);
    const yStr = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul" }).format(y);
    return { period, from: y, to: todayStart, label: "Dün", fromStr: yStr, toStr: yStr };
  }
  if (period === "custom" && sp.from && sp.to) {
    const from = new Date(`${sp.from}T00:00:00+03:00`);
    const to = new Date(new Date(`${sp.to}T00:00:00+03:00`).getTime() + 86400000); // include the whole "to" day
    if (!Number.isNaN(from.getTime()) && !Number.isNaN(to.getTime()) && from < to) {
      return { period, from, to, label: `${sp.from} – ${sp.to}`, fromStr: sp.from, toStr: sp.to };
    }
  }
  const days = period === "7d" ? 7 : period === "90d" ? 90 : 30;
  return {
    period: period === "7d" || period === "90d" ? period : "30d",
    from: new Date(now.getTime() - days * 86400000),
    to: now,
    label: `Son ${days} gün`,
    fromStr: istToday,
    toStr: istToday,
  };
}

const PRESETS: { key: string; label: string }[] = [
  { key: "today", label: "Bugün" },
  { key: "yesterday", label: "Dün" },
  { key: "7d", label: "7 Gün" },
  { key: "30d", label: "30 Gün" },
  { key: "90d", label: "90 Gün" },
];

export default async function AdminClicksPage({
  searchParams,
}: {
  searchParams: SP;
}) {
  if (!isAdminAuthed()) redirect("/admin/login");

  if (!isDbConfigured) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
          <h1 className="text-xl font-bold text-gray-900">Veritabanı yapılandırılmamış</h1>
          <p className="mt-2 text-sm text-gray-600">
            Tıklama raporunu görüntülemek için sunucu ortam değişkeni{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono">
              DATABASE_URL
            </code>{" "}
            tanımlanmalıdır.
          </p>
        </div>
      </main>
    );
  }

  const range = resolveRange(searchParams);
  const db = requireDb();
  const baseWhere = and(
    inArray(clickEvents.name, [...EVENTS]),
    gte(clickEvents.occurredAt, range.from),
    lt(clickEvents.occurredAt, range.to),
  );

  const visitWhere = and(
    eq(clickEvents.name, "page_view"),
    gte(clickEvents.occurredAt, range.from),
    lt(clickEvents.occurredAt, range.to),
  );

  const [byName, agg, ipGroups, rows, visitAgg] = await Promise.all([
    db
      .select({
        name: clickEvents.name,
        c: sql<number>`count(*)::int`,
        ips: sql<number>`count(distinct ${clickEvents.ipHash})::int`,
        sessions: sql<number>`count(distinct ${clickEvents.sessionId})::int`,
      })
      .from(clickEvents)
      .where(baseWhere)
      .groupBy(clickEvents.name),
    db
      .select({
        total: sql<number>`count(*)::int`,
        uniqueIps: sql<number>`count(distinct ${clickEvents.ipHash})::int`,
      })
      .from(clickEvents)
      .where(baseWhere),
    db
      .select({ ip: clickEvents.ipHash, c: sql<number>`count(*)::int` })
      .from(clickEvents)
      .where(and(baseWhere, isNotNull(clickEvents.ipHash)))
      .groupBy(clickEvents.ipHash)
      .orderBy(desc(sql`count(*)`)),
    db.select().from(clickEvents).where(baseWhere).orderBy(desc(clickEvents.occurredAt)).limit(200),
    db
      .select({
        visits: sql<number>`count(*)::int`,
        visitors: sql<number>`count(distinct ${clickEvents.sessionId})::int`,
        ips: sql<number>`count(distinct ${clickEvents.ipHash})::int`,
      })
      .from(clickEvents)
      .where(visitWhere),
  ]);

  const visits = Number(visitAgg[0]?.visits ?? 0);
  const visitVisitors = Number(visitAgg[0]?.visitors ?? 0);
  const visitIps = Number(visitAgg[0]?.ips ?? 0);

  const counts: Record<string, { total: number; ips: number; sessions: number }> = {};
  for (const ev of EVENTS) counts[ev] = { total: 0, ips: 0, sessions: 0 };
  for (const r of byName)
    counts[r.name] = { total: Number(r.c), ips: Number(r.ips), sessions: Number(r.sessions) };

  const total = Number(agg[0]?.total ?? 0);
  const uniqueIps = Number(agg[0]?.uniqueIps ?? 0);
  const repeatIps = ipGroups.filter((g) => Number(g.c) > 1).length;

  // Map each distinct IP hash to a stable label/color/count (busiest = #1).
  // Only the 6 busiest get a color — no cycling, so no two IPs ever share one.
  const ipInfo = new Map<string, { label: string; color: string | null; count: number }>();
  ipGroups.forEach((g, i) => {
    if (!g.ip) return;
    ipInfo.set(g.ip, { label: `IP #${i + 1}`, color: i < IP_COLORS.length ? IP_COLORS[i] : null, count: Number(g.c) });
  });

  const presetHref = (key: string) =>
    key === "custom"
      ? `/admin/clicks?period=custom&from=${range.fromStr}&to=${range.toStr}`
      : `/admin/clicks?period=${key}`;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tıklama Raporu</h1>
          <p className="mt-1 text-sm text-gray-600">Seçili dönem: {range.label} · Türkiye saati</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <a
              key={p.key}
              href={presetHref(p.key)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                p.key === range.period
                  ? "bg-emerald-600 text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-emerald-600"
              }`}
            >
              {p.label}
            </a>
          ))}
        </div>
      </div>

      {/* Custom date range */}
      <form method="get" className="mt-6 flex flex-wrap items-end gap-3 rounded-2xl border border-gray-200 bg-white p-5">
        <input type="hidden" name="period" value="custom" />
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-600">Başlangıç</label>
          <input type="date" name="from" defaultValue={range.fromStr} className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-600">Bitiş</label>
          <input type="date" name="to" defaultValue={range.toStr} className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900" />
        </div>
        <button type="submit" className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white">
          Tarih aralığını uygula
        </button>
      </form>

      {/* Visit summary (everyone — including people who don't call) */}
      <h2 className="mt-8 text-lg font-bold text-gray-900">Ziyaret Özeti</h2>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
          <p className="text-sm text-gray-600">Toplam ziyaret</p>
          <p className="mt-1 text-3xl font-bold text-gray-900">{visits}</p>
          <p className="mt-1 text-xs text-gray-400">sayfa görüntüleme</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
          <p className="text-sm text-gray-600">Benzersiz ziyaretçi</p>
          <p className="mt-1 text-3xl font-bold text-gray-900">{visitVisitors}</p>
          <p className="mt-1 text-xs text-gray-400">farklı oturum</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
          <p className="text-sm text-gray-600">Benzersiz IP</p>
          <p className="mt-1 text-3xl font-bold text-gray-900">{visitIps}</p>
          <p className="mt-1 text-xs text-gray-400">farklı IP adresi</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-gray-600">
        Siteyi ziyaret eden herkes sayılır (arama yapmasa bile).{" "}
        {visits > 0
          ? `Bu dönemde ${visits} ziyaretin ${total} tanesi bir butona tıklamayla sonuçlandı (≈%${Math.round(
              (total / visits) * 100,
            )} dönüşüm).`
          : "Ziyaret verisi bu özellik yayına alındıktan sonraki ziyaretler için birikir."}
      </p>

      {/* KPI cards */}
      <h2 className="mt-8 text-lg font-bold text-gray-900">Buton Tıklamaları</h2>
      <div className="mt-3 grid grid-cols-2 gap-4">
        {EVENTS.map((ev) => (
          <div key={ev} className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-600">{LABELS[ev]}</p>
            <div className="mt-1 flex items-baseline gap-2">
              <p className="text-3xl font-bold text-gray-900">{counts[ev].total}</p>
              <p className="text-sm text-gray-400">tıklama</p>
            </div>
            <div className="mt-3 flex gap-4 border-t border-gray-100 pt-3">
              <div>
                <p className="text-xl font-bold text-emerald-700">{counts[ev].ips}</p>
                <p className="text-xs text-gray-500">farklı kişi (IP)</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-700">{counts[ev].sessions}</p>
                <p className="text-xs text-gray-500">farklı oturum</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-600">
        <strong>Tıklama</strong> her butona basışı sayar (aynı kişi 5 kez tıklarsa 5).{" "}
        <strong>Farklı kişi (IP)</strong> aynı dönemde kaç ayrı IP&apos;den tıklama geldiğini
        gösterir — gerçek kişi sayısına en yakın ölçüdür. <strong>Farklı oturum</strong> ayrı
        tarayıcı/cihaz sayısıdır; aynı Wi-Fi&apos;ı paylaşan iki kişi tek IP ama iki oturum görünür.
      </p>

      {/* IP signal */}
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-600">Toplam tıklama</p>
          <p className="mt-1 text-3xl font-bold text-gray-900">{total}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-600">Farklı IP</p>
          <p className="mt-1 text-3xl font-bold text-gray-900">{uniqueIps}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-600">Tekrar eden IP</p>
          <p className="mt-1 text-3xl font-bold text-gray-900">{repeatIps}</p>
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-400">
        Her farklı IP&apos;ye kalıcı bir numara verilir (IP #1 = en çok tıklayan). Kesin ayırt edici
        olan numaradır; en yoğun 6 IP ayrıca birbirinden net ayrılan birer renk taşır, diğerleri
        gri görünür. Aynı numara = aynı kişi/cihaz. IP&apos;ler gizlilik için geri döndürülemez
        şekilde özetlenir (ham IP saklanmaz).
      </p>

      {/* Recent clicks table */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 px-5 py-4">
          <h2 className="font-semibold text-gray-900">Son Tıklamalar</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-5 py-3 font-medium">Zaman</th>
                <th className="px-5 py-3 font-medium">Buton</th>
                <th className="px-5 py-3 font-medium">Yer</th>
                <th className="px-5 py-3 font-medium">Sayfa</th>
                <th className="px-5 py-3 font-medium">IP</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-gray-400">
                    Bu aralıkta tıklama kaydı yok.
                  </td>
                </tr>
              ) : (
                rows.map((r) => {
                  const info = r.ipHash ? ipInfo.get(r.ipHash) : undefined;
                  return (
                    <tr key={r.id} className="border-t border-gray-200">
                      <td className="px-5 py-3 text-gray-900">{dateFmt.format(r.occurredAt)}</td>
                      <td className="px-5 py-3 text-gray-900">{LABELS[r.name] ?? r.name}</td>
                      <td className="px-5 py-3 text-gray-600">{r.location ?? "—"}</td>
                      <td className="px-5 py-3 text-gray-600">{r.pageUrl ?? "—"}</td>
                      <td className="px-5 py-3">
                        {info ? (
                          <span
                            title={`${info.count} tıklama bu IP'den`}
                            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2 py-0.5 text-xs font-semibold text-gray-900"
                            style={{
                              borderColor: info.color ?? "#d1d5db",
                              backgroundColor: info.color ? `${info.color}14` : "#f3f4f6",
                            }}
                          >
                            <span
                              className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                              style={{ backgroundColor: info.color ?? IP_GRAY }}
                              aria-hidden="true"
                            />
                            {info.label}
                            {info.count > 1 && <span className="font-normal text-gray-400">×{info.count}</span>}
                          </span>
                        ) : (
                          <span className="text-xs text-gray-400">IP yok</span>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
