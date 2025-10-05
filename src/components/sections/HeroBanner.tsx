'use client';

import { siteConfig } from '@/config/site';
import { trackCTAClick } from '@/lib/gtm';

interface HeroBannerProps {
  variant?: 'default' | 'kazali' | 'hasarli' | 'pert' | 'hurda';
  tagline: string;
  title: string;
  subtitle: string;
  highlight?: string;
}

export default function HeroBanner({
  variant = 'default',
  tagline,
  title,
  subtitle,
  highlight,
}: HeroBannerProps) {
  const handlePhoneClick = () => {
    trackCTAClick('Hemen Teklif Al', 'hero');
  };

  const handleWhatsAppClick = () => {
    trackCTAClick('WhatsApp', 'hero');
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-800 to-orange-600">
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-white text-center max-w-4xl">
        <p className="text-orange-400 uppercase tracking-widest font-bold text-sm mb-4">
          {tagline}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>
        {highlight && (
          <div className="mb-4">
            <span className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-bold text-xl shadow-lg">
              {highlight}
            </span>
          </div>
        )}
        <h2 className="text-2xl md:text-3xl mb-8">
          {subtitle}
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhoneClick}
            className="bg-white text-orange-600 border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition shadow-lg text-lg"
          >
            <i className="fas fa-phone-alt mr-2"></i> Hemen Teklif Al
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition shadow-lg text-lg"
          >
            <i className="fab fa-whatsapp mr-2"></i> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}