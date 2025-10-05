'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { trackCTAClick, trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';
import { trackPhoneConversion, trackWhatsAppConversion } from '@/lib/analytics';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePhoneClick = () => {
    trackPhoneClick();
    trackPhoneConversion();
    trackCTAClick('Header Phone', 'header');
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    trackWhatsAppConversion();
    trackCTAClick('Header WhatsApp', 'header');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo - Left (20% width on desktop) */}
          <Link href="/" className="flex items-center gap-2 text-blue-700 font-bold text-xl lg:w-1/5">
            <i className="fas fa-car-crash text-2xl text-orange-500"></i>
            <span className="hidden sm:inline whitespace-nowrap">Ankara PERT</span>
          </Link>

          {/* Navigation - Center (60% width on desktop) */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium transition whitespace-nowrap">
              Ana Sayfa
            </Link>

            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-500 font-medium transition flex items-center gap-1 whitespace-nowrap">
                Hizmetler
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[240px] border border-gray-100 overflow-hidden">
                <Link
                  href="/kazali-arac-alim-satim"
                  className="block px-5 py-3 hover:bg-orange-500 hover:text-white transition text-sm whitespace-nowrap"
                >
                  <i className="fas fa-car-crash mr-3"></i>
                  Kazalı Araç Alımı
                </Link>
                <Link
                  href="/hasarli-arac-alim-satim"
                  className="block px-5 py-3 hover:bg-orange-500 hover:text-white transition text-sm whitespace-nowrap"
                >
                  <i className="fas fa-tools mr-3"></i>
                  Hasarlı Araç Alımı
                </Link>
                <Link
                  href="/pert-arac-alim-satim"
                  className="block px-5 py-3 hover:bg-orange-500 hover:text-white transition text-sm whitespace-nowrap"
                >
                  <i className="fas fa-exclamation-triangle mr-3"></i>
                  Pert Araç Alımı
                </Link>
                <Link
                  href="/hurda-arac-alim-satim"
                  className="block px-5 py-3 hover:bg-orange-500 hover:text-white transition text-sm whitespace-nowrap"
                >
                  <i className="fas fa-recycle mr-3"></i>
                  Hurda Araç Alımı
                </Link>
              </div>
            </div>

            <Link href="/genel-bilgiler" className="text-gray-700 hover:text-orange-500 font-medium transition whitespace-nowrap">
              Bilgiler
            </Link>

            <Link href="/blog" className="text-gray-700 hover:text-orange-500 font-medium transition whitespace-nowrap">
              Blog
            </Link>

            <Link href="/hakkimizda" className="text-gray-700 hover:text-orange-500 font-medium transition whitespace-nowrap">
              Hakkımızda
            </Link>
          </nav>

          {/* Buttons - Right (20% width on desktop) */}
          <div className="hidden lg:flex items-center gap-2  justify-end">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg font-semibold transition flex items-center gap-2 shadow-md text-sm whitespace-nowrap"
            >
              <i className="fab fa-whatsapp text-lg"></i>
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={handlePhoneClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg font-bold transition flex items-center gap-1 shadow-lg text-sm whitespace-nowrap"
              style={{ animation: 'pulse 2s infinite' }}
            >
              <i className="fas fa-phone-alt"></i>
              <span className="hidden xl:inline">{siteConfig.phoneDisplay}</span>
              <span className="xl:hidden text-xs">ARA</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl text-gray-700`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="py-2 px-3 hover:bg-gray-50 rounded font-medium">
                Ana Sayfa
              </Link>
              
              <div className="border-t pt-3">
                <p className="px-3 text-sm font-bold text-gray-500 mb-2">HİZMETLER</p>
                {siteConfig.services.map((service) => (
  <Link
    key={service.slug}
    href={`/${service.slug}`}
    onClick={() => setIsMenuOpen(false)}
    className="py-2 px-3 hover:bg-gray-50 rounded block"
  >
    <i className={`fas ${service.icon} text-orange-500 mr-2`}></i>
    {service.title}
  </Link>
))}
              </div>

              <Link href="/genel-bilgiler" onClick={() => setIsMenuOpen(false)} className="py-2 px-3 hover:bg-gray-50 rounded font-medium">
                Genel Bilgiler
              </Link>

              <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="py-2 px-3 hover:bg-gray-50 rounded font-medium">
                Blog
              </Link>

              <Link href="/hakkimizda" onClick={() => setIsMenuOpen(false)} className="py-2 px-3 hover:bg-gray-50 rounded font-medium">
                Hakkımızda
              </Link>

              <div className="flex gap-2 pt-3">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold text-center hover:bg-green-600 transition"
                >
                  <i className="fab fa-whatsapp mr-2"></i>WhatsApp
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  onClick={handlePhoneClick}
                  className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-bold text-center hover:bg-orange-600 transition"
                >
                  <i className="fas fa-phone-alt mr-2"></i>ARA
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
      `}</style>
    </header>
  );
}