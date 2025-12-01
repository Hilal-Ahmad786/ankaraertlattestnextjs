'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { trackCTAClick, trackPhoneClick } from '@/lib/gtm';

export default function UrgentCTABanner() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Reset countdown every day at midnight
    const calculateTimeLeft = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setHours(24, 0, 0, 0);

      const diff = tomorrow.getTime() - now.getTime();

      return {
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    trackPhoneClick();
    trackCTAClick('Urgent Banner CTA', 'urgent-banner');
  };

  return (
    <div className="sticky top-[72px] z-40 bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Urgency Message */}
          <div className="flex items-center gap-3">
            <div className="animate-pulse">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm md:text-base">
                🔥 Bugün İçin Özel Fırsat!
              </p>
              <p className="text-xs md:text-sm opacity-90">
                Bugün arayanlara ekstra %10 bonus fiyat
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
              <div className="text-center">
                <div className="text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs opacity-75">Saat</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center">
                <div className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs opacity-75">Dakika</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center">
                <div className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs opacity-75">Saniye</div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={handleClick}
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:scale-105 whitespace-nowrap flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}