'use client';

import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { trackCTAClick, trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';

interface CityHeroProps {
  title: string;
  subtitle: string;
  tagline: string;
  media: { src: string; alt: string; objectPosition: string };
}

export default function CityHero({ title, subtitle, tagline, media }: CityHeroProps) {
  return (
    <section className="city-hero text-brand py-10 sm:py-14">
      <div className="container mx-auto px-4 grid items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-accent-ink mb-4">{tagline}</p>
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight mb-5">{title}</h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">{subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${siteConfig.phone}`} className="city-hero-cta rounded-full bg-orange-700 text-white font-bold px-6 py-3"
              onClick={() => { trackPhoneClick('hero'); trackCTAClick('Hemen Teklif Al', 'hero'); }}>
              <i className="fas fa-phone-alt mr-2" aria-hidden="true" /> Teklif Alın
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="city-hero-cta rounded-full bg-green-700 text-white font-bold px-6 py-3"
              onClick={() => { trackWhatsAppClick('hero'); trackCTAClick('WhatsApp', 'hero'); }}>
              <i className="fab fa-whatsapp mr-2" aria-hidden="true" /> WhatsApp
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {[
              { value: 'Ücretsiz', label: 'Ekspertiz ve Değerlendirme' },
              { value: 'Ücretsiz', label: 'Çekici ile Yerinden Alım' },
              { value: 'Ücretsiz', label: 'Noter Masrafı Bize Ait' },
              { value: 'Aynı Gün', label: 'Anlaşmada Nakit Ödeme' },
            ].map((item) => (
              <li key={item.label} className="rounded-2xl border border-gray-200 bg-white/70 px-3 py-2">
                <span className="block font-bold text-accent-ink">{item.value}</span>
                <span className="text-gray-600">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="m-0 min-w-0">
          <div className="city-photo-frame relative overflow-hidden rounded-3xl border border-white/20">
            <Image src={media.src} alt={media.alt} width={1536} height={1024} priority
              sizes="(min-width: 1536px) 736px, (min-width: 1280px) 608px, (min-width: 1024px) 480px, calc(100vw - 32px)"
              className="w-full h-auto aspect-[3/2] object-cover" style={{ objectPosition: media.objectPosition }} />
          </div>
          <figcaption className="mt-2 text-xs text-gray-600">Temsili görsel</figcaption>
        </figure>
      </div>
    </section>
  );
}
