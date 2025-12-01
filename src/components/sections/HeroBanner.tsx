'use client';

import { siteConfig } from '@/config/site';
import { trackCTAClick, trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';

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
    trackPhoneClick();
    trackCTAClick('Hemen Teklif Al', 'hero');
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    trackCTAClick('WhatsApp', 'hero');
  };

  // Map variant to background image
  const getBackgroundImage = () => {
    switch (variant) {
      case 'kazali':
        return '/kazali.webp';
      case 'hasarli':
        return '/hasarli.webp';
      case 'pert':
        return '/pert.webp';
      case 'hurda':
        return '/hurda.webp';
      default:
        return '/hurda.webp'; // Default fallback
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${getBackgroundImage()}')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-800/70 to-orange-600/60"></div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 container mx-auto px-4 text-white text-center max-w-4xl py-20">
        {/* Tagline */}
        <p className="text-orange-400 uppercase tracking-widest font-bold text-sm mb-6 animate-fade-in">
          {tagline}
        </p>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
          {title}
        </h1>

        {/* Highlight Box - MODERN STYLE */}
        {highlight && (
          <div className="mb-6 animate-scale-in">
            <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-xl md:text-2xl shadow-2xl border-2 border-orange-400/30 hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
              {highlight}
            </span>
          </div>
        )}

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-10 text-gray-100 animate-fade-in">
          {subtitle}
        </h2>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap animate-slide-up">
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhoneClick}
            className="bg-white text-orange-600 border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-orange-500 hover:text-white hover:border-orange-400 transition-all duration-300 shadow-2xl text-lg hover:scale-105 hover:shadow-orange-500/50"
          >
            <i className="fas fa-phone-alt mr-2"></i> Hemen Teklif Al
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all duration-300 shadow-2xl text-lg border-2 border-transparent hover:border-green-300 hover:scale-105 hover:shadow-green-500/50"
          >
            <i className="fab fa-whatsapp mr-2"></i> WhatsApp
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">15+</div>
            <div className="text-sm text-gray-300">Yıllık Tecrübe</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">7/24</div>
            <div className="text-sm text-gray-300">Hızlı Destek</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">%100</div>
            <div className="text-sm text-gray-300">Güvenli İşlem</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">5000+</div>
            <div className="text-sm text-gray-300">Mutlu Müşteri</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}