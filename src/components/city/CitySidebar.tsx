'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { City } from '@/types';
import { trackCTAClick, trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';

interface CitySidebarProps {
    city: City;
    nearbyCities: City[];
}

export default function CitySidebar({ city, nearbyCities }: CitySidebarProps) {
    const handlePhoneClick = () => {
        trackPhoneClick();
        trackCTAClick('Sidebar Phone', 'city-sidebar');
    };

    const handleWhatsAppClick = () => {
        trackWhatsAppClick();
        trackCTAClick('Sidebar WhatsApp', 'city-sidebar');
    };

    return (
        <div className="space-y-6 sticky top-24">
            {/* Contact CTA Box */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-2 text-center">Hemen Fiyat Alın</h3>
                <p className="text-gray-400 text-sm text-center mb-6">
                    {city.name} bölgesinde 30 dakikada ekspertiz ve nakit ödeme.
                </p>

                <div className="space-y-3">
                    <a
                        href={`tel:${siteConfig.phone}`}
                        onClick={handlePhoneClick}
                        className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-xl font-bold text-center transition shadow-lg animate-pulse"
                    >
                        <i className="fas fa-phone-alt mr-2"></i>
                        HEMEN ARA
                    </a>
                    <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleWhatsAppClick}
                        className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-bold text-center transition shadow-lg"
                    >
                        <i className="fab fa-whatsapp mr-2"></i>
                        WHATSAPP TEKLİF
                    </a>
                </div>
            </div>

            {/* Nearby Cities Navigation */}
            {nearbyCities.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b">
                        {city.region} Bölgesindeki Diğer İller
                    </h3>
                    <ul className="space-y-2">
                        {nearbyCities.map((nearbyCity) => (
                            <li key={nearbyCity.id}>
                                <Link
                                    href={`/sehirler/${nearbyCity.slug}`}
                                    className="flex items-center text-gray-600 hover:text-orange-500 transition group p-2 rounded hover:bg-gray-50"
                                >
                                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-orange-500 transition"></span>
                                    {nearbyCity.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
