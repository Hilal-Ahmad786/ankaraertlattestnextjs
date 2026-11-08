import Link from 'next/link';
import type { ReactNode } from 'react';
import type { City } from '@/types';
import type { CityContent, CityDamageRow, CityFaq } from '@/data/city-content';
import { services } from '@/data/services';
import { faqPageSchema } from '@/lib/schema';
import { cityChecks } from '@/components/city/CityMotifs';

/**
 * City page body (2026-11 redesign). Plain, editorial sections: full-width
 * bands, left-aligned headings, readable line length, bordered tables and
 * lists instead of floating cards, icon chips and decorative motion.
 * Section wrappers are divs because a global `section { background:
 * transparent }` rule and `section h2::after` underline would override them.
 */

export function CityBand({ tone = 'white', id, children, labelledBy }: { tone?: 'white' | 'muted'; id?: string; children: ReactNode; labelledBy?: string }) {
  return (
    <div id={id} role={labelledBy ? 'region' : undefined} aria-labelledby={labelledBy} className={`cp-band cp-band--${tone}`}>
      <div className="cp-wrap">{children}</div>
    </div>
  );
}

function Heading({ id, eyebrow, children, intro }: { id: string; eyebrow?: string; children: ReactNode; intro?: ReactNode }) {
  return (
    <header className="cp-head">
      {eyebrow && <p className="cp-eyebrow">{eyebrow}</p>}
      <h2 id={id} className="cp-h2">{children}</h2>
      {intro && <p className="cp-intro">{intro}</p>}
    </header>
  );
}

/* ---------------------------------------------------------------- intro */

export function CityIntro({ city, written, summary }: { city: City; written?: CityContent; summary: ReactNode }) {
  const toc: [string, string][] = [
    ['hasar-turleri', 'Hasar türleri'],
    ['hazirlik', 'Satıştan önce'],
    ['ilceler', 'İlçeler'],
    ['surec', 'Süreç'],
    ['sss', 'Sık sorulanlar'],
  ];
  return (
    <CityBand>
      <div className="cp-intro-grid">
        <div>
          <p className="cp-eyebrow">{city.region} Bölgesi · {city.plateCode} plaka</p>
          <h2 className="cp-h2">{city.name}’de hasarlı aracınızı satmak</h2>
          <p className="cp-lead">
            {written?.intro ?? `${city.name} ve çevresinde kazalı, pert veya hasar kayıtlı aracınızı satın alıyoruz. Ekspertiz ve çekici planı aracınızın bulunduğu yere göre yapılır.`}
          </p>
          <p className="cp-text">
            Ekspertizden sonra <strong>30 dakika içinde teklif</strong> veriyoruz; anlaşma sağlanırsa ödeme <strong>aynı gün</strong>, noter devriyle birlikte yapılır.
            Çekici ve noter masrafları bize aittir.
          </p>
          <nav className="cp-toc" aria-label="Bu sayfada">
            <span>Bu sayfada:</span>
            {toc.map(([href, label]) => <a key={href} href={`#${href}`}>{label}</a>)}
          </nav>
        </div>
        {summary}
      </div>
    </CityBand>
  );
}

/* ----------------------------------------------------------------- body */

export function CityBody({ city, written }: { city: City; written?: CityContent }) {
  const paragraphs = written?.body?.length ? written.body : [city.content];
  const checks = cityChecks[city.slug];
  return (
    <CityBand tone="muted" labelledBy="cp-body-title">
      <div className="cp-body-grid">
        <div>
          <Heading id="cp-body-title">{city.name} hasarlı araç piyasası</Heading>
          <div className="cp-prose">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          {written?.seasonNote && (
            <p className="cp-note"><strong>Mevsime göre:</strong> {written.seasonNote}</p>
          )}
        </div>
        <aside className="cp-aside" aria-labelledby="cp-checks-title">
          {checks && <>
            <h3 id="cp-checks-title" className="cp-h3">Ekspertizde öne çıkan kontroller</h3>
            <ol className="cp-numbered">{checks.map((c) => <li key={c}>{c}</li>)}</ol>
          </>}
          {written?.localPoints?.length ? <>
            <h3 className="cp-h3 cp-h3--spaced">{city.name} için notlar</h3>
            <ul className="cp-plain-list">{written.localPoints.map((p) => <li key={p}>{p}</li>)}</ul>
          </> : null}
        </aside>
      </div>
    </CityBand>
  );
}

/* --------------------------------------------------------- damage table */

export function CityDamage({ cityName, rows }: { cityName: string; rows?: CityDamageRow[] }) {
  if (!rows?.length) return null;
  return (
    <CityBand id="hasar-turleri" labelledBy="cp-damage-title">
      <Heading id="cp-damage-title" intro="Her aracın durumu ayrı incelenir; tablo, bu ilde en sık gördüğümüz durumları ve ekspertizde neye baktığımızı özetler.">
        {cityName}’de sık karşılaşılan hasar türleri
      </Heading>
      <div className="cp-table-wrap">
        <table className="cp-table">
          <thead><tr><th scope="col">Hasar türü</th><th scope="col">Ekspertizde neye bakarız?</th><th scope="col">Teklife etkisi</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.type}>
                <th scope="row">{r.type}</th>
                <td data-label="Ekspertizde neye bakarız?">{r.whatWeCheck}</td>
                <td data-label="Teklife etkisi">{r.effectOnOffer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CityBand>
  );
}

/* ---------------------------------------------- preparation + example */

const standardPrep = [
  'Ruhsatı veya araç kayıt bilgilerini hazırlayın.',
  'Araç sahibinin kimlik bilgisini hazır bulundurun.',
  'Anahtarın ve varsa yedek anahtarın durumunu not edin.',
  'Bilinen borç ve ceza kayıtlarını ilgili kurumdan sorgulayın.',
  'Araçtaki kişisel eşyaları teslimden önce alın.',
];

export function CityPrep({ cityItem, example }: { cityItem?: string; example?: string }) {
  const items = cityItem ? [...standardPrep, cityItem] : standardPrep;
  return (
    <CityBand tone="muted" id="hazirlik" labelledBy="cp-prep-title">
      <div className="cp-two-col">
        <div>
          <Heading id="cp-prep-title">Satıştan önce hazırlayın</Heading>
          <ol className="cp-numbered cp-numbered--large">{items.map((i) => <li key={i}>{i}</li>)}</ol>
        </div>
        {example && (
          <div className="cp-example">
            <p className="cp-eyebrow">Örnek senaryo</p>
            <h3 className="cp-h3">Bir başvuru nasıl değerlendirilir?</h3>
            <p>{example}</p>
          </div>
        )}
      </div>
    </CityBand>
  );
}

/* ------------------------------------------------------------ districts */

export function CityDistrictList({ city, notes }: { city: City; notes?: Record<string, string> }) {
  const withNotes = notes && Object.keys(notes).length > 0;
  return (
    <CityBand id="ilceler" labelledBy="cp-districts-title">
      <Heading id="cp-districts-title" intro={`${city.name} merkezinde ve aşağıdaki ilçelerde aracınızı bulunduğu yerden teslim alıyoruz; çekici masrafı bize aittir.`}>
        Hizmet verdiğimiz ilçeler
      </Heading>
      <p className="cp-index">
        {city.districts.map((d, i) => (
          <span key={d}>{withNotes ? <a href={`#ilce-${city.slug}-${i}`}>{d}</a> : d}{i < city.districts.length - 1 ? <span aria-hidden="true"> · </span> : null}</span>
        ))}
      </p>
      {withNotes && (
        <dl className="cp-district-list">
          {city.districts.map((d, i) => notes?.[d] ? (
            <div key={d} id={`ilce-${city.slug}-${i}`} className="cp-district">
              <dt>{d}</dt>
              <dd>{notes[d]}</dd>
            </div>
          ) : null)}
        </dl>
      )}
    </CityBand>
  );
}

/* -------------------------------------------------------- vehicle types */

const vehicleText: Record<string, string> = {
  'kazali-arac-alim-satim': 'Trafik kazası geçirmiş, onarımı yapılmamış araçlar.',
  'hasarli-arac-alim-satim': 'Kaporta, mekanik veya elektronik hasarı olan araçlar.',
  'pert-arac-alim-satim': 'Sigorta tarafından pert kararı verilmiş araçlar.',
  'hurda-arac-alim-satim': 'Kullanım ömrünü tamamlamış, hurdaya ayrılacak araçlar.',
};

export function CityVehicles({ cityName }: { cityName: string }) {
  return (
    <CityBand tone="muted" labelledBy="cp-vehicles-title">
      <Heading id="cp-vehicles-title" intro={`${cityName} ve çevre ilçelerinden aşağıdaki durumlardaki araçlar için başvuru alıyoruz. Aracınızın durumu listede yoksa da yazabilirsiniz.`}>
        Aldığımız araçlar
      </Heading>
      <ul className="cp-link-grid">
        {services.map((s) => (
          <li key={s.id}>
            <Link href={`/${s.slug}`}>
              <span className="cp-link-title">{s.title}</span>
              <span className="cp-link-text">{vehicleText[s.slug] ?? s.shortDescription}</span>
              <span className="cp-link-more" aria-hidden="true">İncele →</span>
            </Link>
          </li>
        ))}
      </ul>
    </CityBand>
  );
}

/* -------------------------------------------------------------- process */

export function CityProcess({ city }: { city: City }) {
  const steps: [string, string][] = [
    ['Bize ulaşın', `Telefon veya WhatsApp ile aracınızın bilgilerini ve ${city.name} içindeki konumunu paylaşın.`],
    ['Yerinde ekspertiz', 'Aracınızı bulunduğu yerde inceliyor, hasar ve mekanik durumu sizinle konuşuyoruz.'],
    ['Teklif', 'Ekspertizden sonra 30 dakika içinde teklifimizi iletiyoruz.'],
    ['Noter ve ödeme', 'Anlaşma sağlanırsa noter devriyle birlikte ödeme aynı gün yapılır.'],
  ];
  return (
    <CityBand id="surec" labelledBy="cp-process-title">
      <Heading id="cp-process-title">{city.name}’de satış nasıl ilerler?</Heading>
      <ol className="cp-steps">
        {steps.map(([title, text], i) => (
          <li key={title}>
            <span className="cp-step-no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="cp-h3">{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </CityBand>
  );
}

/* ------------------------------------------------------------------ FAQ */

export function CityFaqList({ cityName, faqs }: { cityName: string; faqs?: CityFaq[] }) {
  const items = faqs?.length ? faqs : [
    { question: `${cityName} ilinde hangi araçları değerlendiriyorsunuz?`, answer: `${cityName} için hasarlı, kazalı, pert, hurda ve motor arızalı araç başvurularını değerlendiriyoruz. Teklif, aracın durumu incelendikten sonra oluşturulur.` },
    { question: `${cityName} noterlerinde satış ve ödeme nasıl yapılır?`, answer: 'Evrak kontrolü ve teklif üzerinde anlaşmadan sonra noter devri planlanır. Ödeme devir işlemiyle birlikte yapılır.' },
  ];
  return (
    <CityBand tone="muted" id="sss" labelledBy="cp-faq-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(items)).replace(/</g, '\\u003c') }} />
      <div className="cp-faq-grid">
        <Heading id="cp-faq-title" intro="Sorunuzun yanıtı burada yoksa bizi arayabilir veya WhatsApp’tan yazabilirsiniz.">Sık sorulan sorular</Heading>
        <div className="cp-faq">
          {items.map((f, i) => (
            <details key={f.question} open={i === 0}>
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </CityBand>
  );
}

/* --------------------------------------------------------------- nearby */

export function CityNearby({ city, nearby, regionCities }: { city: City; nearby?: { text: string; links: { name: string; slug: string }[] }; regionCities: City[] }) {
  const links = [...(nearby?.links ?? []), ...regionCities.map((c) => ({ name: c.name, slug: c.slug }))]
    .filter((v, i, a) => a.findIndex((x) => x.slug === v.slug) === i && v.slug !== city.slug);
  if (!links.length) return null;
  return (
    <CityBand labelledBy="cp-nearby-title">
      <h2 id="cp-nearby-title" className="cp-h3">Yakındaki diğer şehirler</h2>
      <p className="cp-index cp-index--plain">
        {links.map((l, i) => (
          <span key={l.slug}><Link href={`/sehirler/${l.slug}`}>{l.name}</Link>{i < links.length - 1 ? <span aria-hidden="true"> · </span> : null}</span>
        ))}
      </p>
    </CityBand>
  );
}
