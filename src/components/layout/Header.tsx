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

            {/* Cities Mega Menu */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-500 font-medium transition flex items-center gap-1 whitespace-nowrap py-4">
                Şehirler
                <i className="fas fa-chevron-down text-xs ml-1 transition-transform group-hover:rotate-180"></i>
              </button>

              {/* Desktop Dropdown - Mega Menu Style */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-[600px] border border-gray-100 overflow-hidden z-50 transform origin-top scale-95 group-hover:scale-100">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4 border-b pb-3">
                    <h3 className="font-bold text-gray-800 text-lg">Hizmet Bölgelerimiz</h3>
                    <Link href="/sehirler" className="text-sm text-orange-500 hover:text-orange-600 font-medium flex items-center">
                      Tüm Şehirleri Gör <i className="fas fa-arrow-right ml-1"></i>
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-x-8 gap-y-3">
                    {/* Column 1 - Top Major Cities */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Büyükşehirler</span>
                      {['istanbul', 'ankara', 'izmir', 'bursa', 'antalya', 'adana', 'konya', 'gaziantep'].map(city => (
                        <Link
                          key={city}
                          href={`/sehirler/${city}`}
                          className="flex items-center text-gray-600 hover:text-orange-500 transition-colors text-sm py-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2"></span>
                          <span className="capitalize">{city}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Column 2 - More Major Cities */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Anadolu</span>
                      {['sanliurfa', 'kocaeli', 'mersin', 'diyarbakir', 'hatay', 'manisa', 'kayseri', 'samsun'].map(city => (
                        <Link
                          key={city}
                          href={`/sehirler/${city}`}
                          className="flex items-center text-gray-600 hover:text-orange-500 transition-colors text-sm py-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-orange-400 mr-2 transition-colors"></span>
                          <span className="capitalize">{city === 'sanliurfa' ? 'Şanlıurfa' : city === 'diyarbakir' ? 'Diyarbakır' : city}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Column 3 - Other Important Cities */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Diğer Bölgeler</span>
                      {['balikesir', 'kahramanmaras', 'van', 'aydin', 'tekirdag', 'sakarya', 'denizli', 'mugla'].map(city => (
                        <Link
                          key={city}
                          href={`/sehirler/${city}`}
                          className="flex items-center text-gray-600 hover:text-orange-500 transition-colors text-sm py-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-orange-400 mr-2 transition-colors"></span>
                          <span className="capitalize">{city === 'kahramanmaras' ? 'Kahramanmaraş' : city === 'tekirdag' ? 'Tekirdağ' : city === 'aydin' ? 'Aydın' : city === 'mugla' ? 'Muğla' : city}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 p-4 border-t border-orange-100 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Aracınızı hemen satmak mı istiyorsunuz?</p>
                    <p className="text-gray-500 text-xs mt-0.5">81 ilde hizmet veriyoruz.</p>
                  </div>
                  <Link
                    href="/sehirler"
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-bold hover:bg-orange-600 transition shadow-sm"
                  >
                    Bölgeleri İncele
                  </Link>
                </div>
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

              <div className="border-t pt-3">
                <div className="flex items-center justify-between px-3 mb-2">
                  <p className="text-sm font-bold text-gray-500">POPÜLER ŞEHİRLER</p>
                  <Link href="/sehirler" className="text-xs text-orange-500 font-semibold" onClick={() => setIsMenuOpen(false)}>Tümü</Link>
                </div>
                <div className="grid grid-cols-2 gap-2 px-3">
                  {['istanbul', 'ankara', 'izmir', 'bursa', 'antalya', 'adana', 'konya', 'gaziantep'].map(city => (
                    <Link
                      key={city}
                      href={`/sehirler/${city}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="py-2 px-2 hover:bg-gray-50 rounded flex items-center text-sm capitalize border border-gray-100"
                    >
                      <i className="fas fa-map-marker-alt text-orange-400 mr-1.5 text-xs"></i>
                      {city}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/sehirler"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mx-3 mt-3 text-center py-2 bg-orange-50 text-orange-600 text-sm font-bold rounded hover:bg-orange-100 transition"
                >
                  Tüm 30+ Şehri Görüntüle
                </Link>
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