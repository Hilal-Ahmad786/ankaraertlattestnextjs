'use client';

import { siteConfig } from '@/config/site';
import { trackCTAClick, trackWhatsAppClick } from '@/lib/gtm';

export default function ContactCTA({ cityPage = false }: { cityPage?: boolean }) {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('contact_cta');
    trackCTAClick('WhatsApp CTA', 'contact-section');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 contact-cta text-center text-white">
      <div className="container mx-auto px-4">
        <div className={`rounded-[2rem] border border-white/10 bg-brand px-6 py-14 shadow-2xl ${cityPage ? 'city-contact-cta' : ''}`} data-city-reveal={cityPage ? '' : undefined}>
        <p className="text-orange-500 font-semibold mb-2 tracking-wide">
          7 / 24 BİZE ULAŞIN... FARKI KEŞFEDİN...
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-2">BİZE ULAŞIN</h2>
        {/* Not a heading: this is a phone number. It was an <h1>, which gave
            every page a second H1 competing with the real one. */}
        <p className={`${cityPage ? 'text-3xl sm:text-5xl break-words' : 'text-5xl'} md:text-6xl font-bold text-accent mb-6`}>
          {siteConfig.phoneDisplay}
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          {cityPage ? 'Aracınızın hasar durumu ve satış süreci hakkında görüşmek için bize ulaşın.' : <>Sizlere hakkımızda pek çok bilgi verdik,{' '}
          <span className="font-bold text-accent">{siteConfig.phoneDisplay}</span>{' '}
          numaralı telefonumuzdan bizi aramadan kazalı, hasarlı, pert, hurda, arızalı aracınızı satmayın...{' '}
          <span className="text-accent font-bold">En iyi teklifi yakalayın…</span></>}
        </p>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className={`btn bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition shadow-lg inline-flex items-center gap-2 ${cityPage ? 'city-cta-button' : ''}`}
        >
          <i className="ph-bold ph-whatsapp-logo text-2xl"></i> WHATSAPP
        </a>
        </div>
      </div>
    </section>
  );
}
