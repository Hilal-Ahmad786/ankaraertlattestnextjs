'use client';

import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import citiesData from '@/data/cities.json';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <Image
                src="/logo-footer-dark.png"
                alt="Ankara PERT — kazalı, hasarlı, pert ve hurda araç alımı"
                width={709}
                height={102}
                className="h-10 w-auto max-w-full object-contain"
              />
            </h3>
            <p className="text-sm mb-4">
              Kazalı, hasarlı, pert ve hurda araç alımında Türkiye'nın en güvenilir adresi.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition border border-white/10"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition border border-white/10"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hizmetlerimiz</h3>
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

          {/* Popular cities — city pages previously had no footer link at all,
              so their only inbound links were the header mega-menu. */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hizmet Bölgeleri</h3>
            <ul className="space-y-2">
              {citiesData
                .filter((c: { isPopular?: boolean }) => c.isPopular)
                .slice(0, 12)
                .map((city: { slug: string; name: string }) => (
                  <li key={city.slug}>
                    <Link
                      href={`/sehirler/${city.slug}`}
                      className="text-sm hover:text-orange-500 transition"
                    >
                      {city.name} Hasarlı Araç Alımı
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/sehirler" className="text-sm text-orange-500 hover:text-orange-400 transition font-medium">
                  Tüm Şehirler →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Linkler</h3>
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
              <li>
                <a
                  href="https://hasarliaracalan.com/"
                  target="_blank"
                  rel="noopener"
                  title="Hasarlı Araç Alan - Hasarlı Araç Alım Satım"
                  className="text-sm hover:text-orange-500 transition"
                >
                  Hasarlı Araç Alan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="fas fa-phone text-orange-500 mt-1"></i>
                <div>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    onClick={() => trackPhoneClick('footer')}
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
                    onClick={() => trackWhatsAppClick('footer')}
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
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-sm text-center md:text-left">
            <p className="text-gray-400">
              © {currentYear} Ankara PERT. Tüm hakları saklıdır.
            </p>

            {/* Developer Credit */}
            <div className="flex justify-center">
              <a
                href="https://paksofts.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[15px] shadow-[0_0_18px_rgba(255,94,58,0.18)] transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_28px_rgba(255,94,58,0.35)] hover:scale-105 backdrop-blur-xl"
              >
                <span className="text-white/80">Geliştiren</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[19px] w-[19px] -rotate-12 text-orange-500 transition-transform duration-300 group-hover:rotate-0"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.08-1.38-.7.13-1.42.21-2.16.21-5.52 0-10-4.48-10-10S9.42 2.83 14.92 2.83c.74 0 1.46.08 2.16.21C15.58 2.5 13.85 2 12 2z" />
                </svg>
                <span className="text-base font-extrabold tracking-wide text-orange-500 group-hover:text-orange-400">
                  PakSoft
                </span>
              </a>
            </div>

            {/* Spacer keeps the credit truly centered on desktop */}
            <div className="hidden md:block" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
