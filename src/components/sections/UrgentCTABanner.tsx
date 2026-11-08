'use client';

import { siteConfig } from '@/config/site';
import { trackCTAClick, trackPhoneClick } from '@/lib/gtm';

// Plain call prompt. The former "%10 bonus" offer and midnight countdown were
// removed sitewide (2026-11-08): the bonus was never a confirmed offer.
export default function UrgentCTABanner({ cityPage = false }: { cityPage?: boolean }) {
  const handleClick = () => {
    trackPhoneClick('urgent_banner');
    trackCTAClick('Urgent Banner CTA', 'urgent-banner');
  };

  return (
    <div className="sticky top-[88px] z-40 px-4 py-2">
      <div className={`container mx-auto rounded-[2rem] border border-white/70 bg-white/52 px-4 py-3 text-gray-900 shadow-glass backdrop-blur-2xl ${cityPage ? 'city-urgent-cta' : ''}`} data-city-reveal={cityPage ? '' : undefined}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-bold text-sm md:text-base">Aracınız İçin Teklif Alın</p>
              <p className="text-xs md:text-sm opacity-90">
                Araç bilgilerini paylaşın, değerlendirme sürecini görüşelim.
              </p>
            </div>
          </div>

          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handleClick}
            className={`city-cta-button bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg whitespace-nowrap flex items-center gap-2 ${cityPage ? 'city-urgent-button' : ''}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Hemen Ara
          </a>
        </div>
      </div>
    </div>
  );
}
