'use client';

import { siteConfig } from '@/config/site';
import { trackCTAClick, trackWhatsAppClick } from '@/lib/gtm';

export default function ContactCTA() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('contact_cta');
    trackCTAClick('WhatsApp CTA', 'contact-section');
  };

  return (
    <section className="py-20 contact-cta text-center text-white">
      <div className="container mx-auto px-4">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#131A1E] to-[#131A1E] px-6 py-14 shadow-2xl">
        <p className="text-orange-500 font-semibold mb-2 tracking-wide">
          7 / 24 BİZE ULAŞIN... FARKI KEŞFEDİN...
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-2">BİZE ULAŞIN</h2>
        {/* Not a heading: this is a phone number. It was an <h1>, which gave
            every page a second H1 competing with the real one. */}
        <p className="text-5xl md:text-6xl font-bold text-accent mb-6">
          {siteConfig.phoneDisplay}
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Sizlere hakkımızda pek çok bilgi verdik,{' '}
          <span className="font-bold text-accent">{siteConfig.phoneDisplay}</span>{' '}
          numaralı telefonumuzdan bizi aramadan kazalı, hasarlı, pert, hurda, arızalı aracınızı satmayın...{' '}
          <span className="text-accent font-bold">En iyi teklifi yakalayın…</span>
        </p>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="btn bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition shadow-lg inline-flex items-center gap-2"
        >
          <i className="fab fa-whatsapp text-2xl"></i> WHATSAPP
        </a>
        </div>
      </div>
    </section>
  );
}
