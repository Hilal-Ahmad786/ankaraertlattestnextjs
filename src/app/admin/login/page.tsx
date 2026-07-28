import LoginForm from "./LoginForm";

export const dynamic = "force-dynamic";

// robots.txt disallows /admin/ from crawling, but disallowed URLs can still be
// indexed URL-only — the meta tag keeps them out of the index entirely.
export const metadata = { robots: { index: false, follow: false } };

export default function AdminLoginPage() {
  const passwordConfigured = Boolean(process.env.ADMIN_CLICKS_PASSWORD);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-bold text-gray-900">Yönetim Girişi</h1>
        <p className="mt-1 text-sm text-gray-600">
          Tıklama raporunu görüntülemek için şifrenizi girin.
        </p>

        {passwordConfigured ? (
          <LoginForm />
        ) : (
          <div className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-gray-800">
            <p className="font-semibold">Şifre ayarlanmamış</p>
            <p className="mt-1 text-gray-600">
              Giriş yapabilmek için sunucu ortam değişkeni{" "}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono">
                ADMIN_CLICKS_PASSWORD
              </code>{" "}
              tanımlanmalıdır.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
