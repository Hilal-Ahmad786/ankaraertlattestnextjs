'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { City } from '@/types';
import { trackCTAClick, trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';

/**
 * Full-width CTA band placed between city sections (formerly a sticky right
 * column). Tracking event names are unchanged so existing GTM triggers keep working.
 * A div, not a section: a global `section { background: transparent }` rule would erase the dark band.
 */
export default function CitySidebar({ city }: { city: City }) {
    const handlePhoneClick = () => {
        trackPhoneClick('city_sidebar');
        trackCTAClick('Sidebar Phone', 'city-sidebar');
    };
    const handleWhatsAppClick = () => {
        trackWhatsAppClick('city_sidebar');
        trackCTAClick('Sidebar WhatsApp', 'city-sidebar');
    };

    return (
        <div role="region" aria-label={`${city.name} için hemen fiyat alın`} className="city-sidebar-cta city-cta-band bg-[#131A1E] text-white rounded-3xl p-6 sm:p-8 shadow-xl" data-city-reveal>
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="text-center md:text-left">
                    <h2 className="text-xl sm:text-2xl font-bold">Hemen Fiyat Alın</h2>
                    <p className="mt-1 text-gray-300 text-sm sm:text-base">
                        {city.name} bölgesinde 30 dakikada ekspertiz ve nakit ödeme.
                    </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:shrink-0">
                    <a
                        href={`tel:${siteConfig.phone}`}
                        onClick={handlePhoneClick}
                        className="city-sidebar-action inline-flex min-h-12 items-center justify-center bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full font-bold transition shadow-lg"
                    >
                        <i className="fas fa-phone-alt mr-2" aria-hidden="true"></i>
                        HEMEN ARA
                    </a>
                    <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleWhatsAppClick}
                        className="city-sidebar-action inline-flex min-h-12 items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full font-bold transition shadow-lg"
                    >
                        <i className="fab fa-whatsapp mr-2" aria-hidden="true"></i>
                        WHATSAPP TEKLİF
                    </a>
                </div>
            </div>
        </div>
    );
}

/** Same-region city links, shown as a full-width strip after the FAQ. */
export function CityNearbyCities({ city, nearbyCities }: { city: City; nearbyCities: City[] }) {
    if (nearbyCities.length === 0) return null;
    return (
        <nav aria-label={`${city.region} bölgesindeki diğer iller`} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{city.region} Bölgesindeki Diğer İller</h2>
            <ul className="flex flex-wrap gap-2">
                {nearbyCities.map((nearbyCity) => (
                    <li key={nearbyCity.id}>
                        <Link
                            href={`/sehirler/${nearbyCity.slug}`}
                            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 transition hover:border-orange-400 hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-600"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true"></span>
                            {nearbyCity.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
