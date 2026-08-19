'use client';

import { siteConfig } from '@/config/site';
import { trackCTAClick, trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';

interface CallToActionBannerProps {
  title: string;
  description: string;
  buttonText?: string;
  showWhatsApp?: boolean;
}

export default function CallToActionBanner({
  title,
  description,
  buttonText = 'Hemen Arayın',
  showWhatsApp = true,
}: CallToActionBannerProps) {
  const handlePhoneClick = () => {
    trackPhoneClick('cta_banner');
    trackCTAClick('CTA Banner Phone', 'cta-banner');
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('cta_banner');
    trackCTAClick('CTA Banner WhatsApp', 'cta-banner');
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 text-white text-center overflow-hidden">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#131A1E] via-[#2A3136] to-[#FC6704]"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          {description}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhoneClick}
            className="bg-white/80 text-orange-600 hover:bg-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl inline-flex items-center gap-2 backdrop-blur-xl"
          >
            <i className="fas fa-phone-alt"></i>
            {buttonText}
          </a>
          {showWhatsApp && (
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white hover:bg-green-600 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl inline-flex items-center gap-2"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
