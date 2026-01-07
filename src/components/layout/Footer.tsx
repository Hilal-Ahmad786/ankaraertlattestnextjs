'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <i className="fas fa-car-crash text-orange-500"></i>
              Ankara PERT
            </h3>
            <p className="text-sm mb-4">
              Kazalı, hasarlı, pert ve hurda araç alımında Türkiye'nın en güvenilir adresi.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2">
              {siteConfig.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-sm hover:text-orange-500 transition flex items-center gap-2"
                  >
                    <i className={`fas ${service.icon} text-orange-500`}></i>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-orange-500 transition">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-sm hover:text-orange-500 transition">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-orange-500 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/genel-bilgiler" className="text-sm hover:text-orange-500 transition">
                  Genel Bilgiler
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="fas fa-phone text-orange-500 mt-1"></i>
                <div>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    onClick={() => trackPhoneClick()}
                    className="text-sm hover:text-orange-500 transition block"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fab fa-whatsapp text-orange-500 mt-1"></i>
                <div>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-orange-500 transition block"
                    onClick={() => trackWhatsAppClick()}
                  >
                    WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-orange-500 mt-1"></i>
                <div>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm hover:text-orange-500 transition block">
                    {siteConfig.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm pr-0 md:pr-32 lg:pr-40">
            <p className="text-gray-400">
              © {currentYear} Ankara PERT. Tüm hakları saklıdır.
            </p>

            {/* Developer Credit */}
            {/* Developer Credit */}
            <div className="flex items-center gap-2">
              <a
                href="https://paksoft.com.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <span className="text-gray-400 mr-2 group-hover:text-orange-500 transition-colors">Geliştiren:</span>
                <div className="flex items-center text-orange-500 group-hover:text-white transition-colors">
                  {/* Custom Crescent Icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -rotate-12">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.08-1.38-.7.13-1.42.21-2.16.21-5.52 0-10-4.48-10-10S9.42 2.83 14.92 2.83c.74 0 1.46.08 2.16.21C15.58 2.5 13.85 2 12 2z" />
                  </svg>
                  <span className="font-bold text-base tracking-wide ml-1">PakSoft</span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}