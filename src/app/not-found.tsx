// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-brand">
      <div className="text-center text-white px-4">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4">Sayfa Bulunamadı</h2>
        <p className="text-xl mb-8 text-gray-200">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          href="/"
          className="inline-block bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg"
        >
          <i className="ph-bold ph-house mr-2"></i>
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}