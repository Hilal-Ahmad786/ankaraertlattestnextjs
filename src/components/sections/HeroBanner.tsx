'use client';

import Image from 'next/image';

import { siteConfig } from '@/config/site';
import { trackCTAClick, trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';

interface HeroBannerProps {
  variant?: 'default' | 'kazali' | 'hasarli' | 'pert' | 'hurda';
  tagline: string;
  title: string;
  subtitle: string;
  highlight?: string;
  backgroundImage?: string; // New prop for custom background
}

export default function HeroBanner({
  variant = 'default',
  tagline,
  title,
  subtitle,
  highlight,
  backgroundImage,
}: HeroBannerProps) {
  const handlePhoneClick = () => {
    trackPhoneClick('hero');
    trackCTAClick('Hemen Teklif Al', 'hero');
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero');
    trackCTAClick('WhatsApp', 'hero');
  };

  // Map variant to background image (fallback if no custom image provided)
  const getBackgroundImage = () => {
    if (backgroundImage) return backgroundImage;

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
    <section className={`relative -mt-24 min-h-[600px] sm:min-h-[560px] md:min-h-[590px] flex items-center justify-center overflow-hidden px-3 sm:px-4 pt-24 md:pt-28`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={getBackgroundImage()}
          alt={title}
          fill
          // brightness is the key control: hero photos range from mid-tone wrecks
          // to bright hazy seascapes, and a fixed overlay that worked for one
          // failed the other (izmir measured 2.6:1). Scaling luminance
          // multiplicatively normalises them all before the scrim is applied.
          className="object-cover scale-105 blur-[2px] saturate-[0.8] brightness-[0.58]"
          sizes="100vw"
          priority
        />
      </div>

      {/* Scrim: one flat graphite layer (design system bans background
          gradients). Strong enough for the white h1 on the brightest city
          skyline; the blur below keeps busy photos from fighting the copy. */}
      <div className="absolute inset-0 bg-brand/55"></div>

      {/* Softens the photo without lifting its luminance. */}
      <div className="absolute inset-0 backdrop-blur-[5px]"></div>


      <div className="relative z-10 container mx-auto px-2 sm:px-4 text-center max-w-4xl py-6 md:py-8">
        {/* Tagline */}
        <p className="mx-auto mb-4 inline-flex max-w-full rounded-full border border-white/80 bg-[rgba(255,255,255,0.78)] px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide text-accent-ink shadow-glass-sm backdrop-blur-2xl animate-fade-in">
          {tagline}
        </p>

        {/* Main Title */}
        <h1 className="hero-heading text-2xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)] animate-slide-up">
          {title}
        </h1>

        {/* Highlight Box - MODERN STYLE */}
        {highlight && (
          <div className="mb-4 animate-scale-in">
            <span className="inline-block bg-accent text-white px-5 sm:px-6 py-3 rounded-full font-bold text-base sm:text-lg md:text-xl shadow-glow border border-white/40 hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
              {highlight}
            </span>
          </div>
        )}

        {/* Subtitle */}
        {/* Lead paragraph, not a heading — an <h2> here outranked the real
            section headings in the document outline. */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-5 sm:mb-6 text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] animate-fade-in">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-3 flex-wrap animate-slide-up">
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhoneClick}
            className={`bg-accent hover:bg-accent-deep text-white hover:text-white border border-white/45 px-5 sm:px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-glow text-sm sm:text-base hover:scale-105 backdrop-blur-xl`}
          >
            <i className="ph-bold ph-phone mr-2"></i> Hemen Teklif Al
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className={`bg-green-500 text-white hover:text-white px-5 sm:px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all duration-300 shadow-glass text-sm sm:text-base border border-white/40 hover:scale-105 backdrop-blur-xl`}
          >
            <i className="ph-bold ph-whatsapp-logo mr-2"></i> WhatsApp
          </a>
        </div>

        {/* Service commitments — owner-confirmed, deliberately not invented
            customer counts. Each carries an icon so the promise reads at a
            glance rather than as a wall of text. */}
        <div className="mt-6 sm:mt-7 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 rounded-[1.5rem] sm:rounded-[1.75rem] border border-white/45 bg-black/20 p-3 sm:p-4 shadow-glass backdrop-blur-2xl">
          {[
            { icon: 'ph-bold ph-magnifying-glass', value: 'Ücretsiz', label: 'Ekspertiz ve Değerlendirme' },
            { icon: 'ph-bold ph-truck', value: 'Ücretsiz', label: 'Çekici ile Yerinden Alım' },
            { icon: 'ph-bold ph-signature', value: 'Ücretsiz', label: 'Noter Masrafı Bize Ait' },
            { icon: 'ph-bold ph-money', value: 'Aynı Gün', label: 'Anlaşmada Nakit Ödeme' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <span
                className="mx-auto mb-2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/62 text-orange-500 ring-1 ring-white/70"
                aria-hidden="true"
              >
                <i className={`${item.icon} text-base`}></i>
              </span>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-500 mb-1">{item.value}</div>
              <div className="text-xs sm:text-sm text-white/75 leading-snug">{item.label}</div>
            </div>
          ))}
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
