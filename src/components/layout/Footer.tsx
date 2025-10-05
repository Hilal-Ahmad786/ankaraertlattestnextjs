import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="font-bold text-warning mb-3">{siteConfig.name}</h4>
            <p className="text-sm mb-4">
              Ankara Pert Grup – Pert Araç Alım Merkezi olarak yıllardır sizlere hizmet etmenin gururunu yaşıyoruz.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-xl hover:text-orange-500 transition"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-xl hover:text-orange-500 transition"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-warning mb-3 font-semibold">İLETİŞİM</h5>
            <p className="text-sm mb-2">
              <strong>Telefon:</strong><br />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-orange-500">
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p className="text-sm">
              <strong>Çalışma:</strong><br />
              7 / 24 İletişim
            </p>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-warning mb-3 font-semibold">HİZMETLERİMİZ</h5>
            <ul className="service-list space-y-2">
              {siteConfig.services.map((service) => (
                <li key={service.slug} className="relative pl-6">
                  <i className="fas fa-circle-plus absolute left-0 top-1 text-red-500 text-xs"></i>
                  <Link
                    href={`/${service.slug}`}
                    className="text-sm hover:text-orange-500 transition"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h5 className="text-warning mb-3 font-semibold">GALERİ</h5>
            <div className="grid grid-cols-3 gap-2">
              {[
                'kazali-arac-alan-firmalar.webp',
                'hurda-arac-alan.webp',
                'pert-arac-alan.webp',
                'kazali-arac-alimi.webp',
                'hasarli-arac-alan.webp',
                'kazali-arac-alan-yerler.webp',
              ].map((img, idx) => (
                <div key={idx} className="relative aspect-square rounded overflow-hidden">
                  <Image
                    src={`/images/${img}`}
                    alt={`Galeri Görsel ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100px, 150px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-4 border-t border-gray-700">
          <p className="text-sm mb-2 md:mb-0">
            &copy; {currentYear} Ankara Pert Araç Alım Merkezi
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/genel-bilgiler" className="hover:text-orange-500 transition">
              SSS
            </Link>
            <Link href="/hakkimizda" className="hover:text-orange-500 transition">
              Biz Kimiz?
            </Link>
            <Link href="/kazali-arac-alim-satim" className="hover:text-orange-500 transition">
              Nasıl Çalışırız?
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}