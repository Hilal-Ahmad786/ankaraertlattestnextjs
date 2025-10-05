'use client';

import { siteConfig } from '@/config/site';
import { trackCTAClick } from '@/lib/gtm';

export default function ContactCTA() {
  const handleWhatsAppClick = () => {
    trackCTAClick('WhatsApp CTA', 'contact-section');
  };

  return (
    <section className="py-16 contact-cta text-center text-white bg-gradient-to-r from-[#111c2f] to-[#3b5360]">
      <div className="container mx-auto px-4">
        <h5 className="text-orange-500 font-semibold mb-2 tracking-wide">
          7 / 24 BİZE ULAŞIN... FARKI KEŞFEDİN...
        </h5>
        <h2 className="text-4xl md:text-5xl font-bold mb-2">BİZE ULAŞIN</h2>
        <h1 className="text-5xl md:text-6xl font-bold text-red-500 mb-6">
          {siteConfig.phoneDisplay}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Sizlere hakkımızda pek çok bilgi verdik,{' '}
          <span className="font-bold text-orange-500">{siteConfig.phoneDisplay}</span>{' '}
          numaralı telefonumuzdan bizi aramadan kazalı, hasarlı, pert, hurda, arızalı aracınızı satmayın...{' '}
          <span className="text-red-500 font-bold">En iyi teklifi yakalayın…</span>
        </p>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="btn bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition shadow-lg inline-flex items-center gap-2"
        >
          <i className="fab fa-whatsapp text-2xl"></i> WHATSAPP
        </a>
      </div>
    </section>
  );
}