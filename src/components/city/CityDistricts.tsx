import type { CSSProperties } from 'react';
import { City } from '@/types';

interface CityDistrictsProps {
    city: City;
    pilot?: boolean;
    /**
     * District name -> a sentence or two specific to that district. Turns the
     * chip list into indexable content and gives long-tail queries like
     * "kecioren hasarli arac alan" something to match.
     */
    districtNotes?: Record<string, string>;
}

export default function CityDistricts({ city, districtNotes, pilot = false }: CityDistrictsProps) {
    const hasNotes = districtNotes && Object.keys(districtNotes).length > 0;
    return (
        <div className="space-y-8">
            {/* Advantages Section - Card Style */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-6 border border-orange-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <i className="fas fa-certificate text-orange-500"></i>
                    Neden {city.name} Bölgesinde Biz?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {city.advantages.map((advantage, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-orange-50/50 hover:border-orange-200 transition">
                            <div className="bg-orange-100 text-orange-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i className="fas fa-check text-xs"></i>
                            </div>
                            <span className="text-gray-700 font-medium text-sm leading-snug pt-1">{advantage}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Districts Section - Grid Style */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <i className="fas fa-map-marked-alt text-accent-ink"></i>
                        Hizmet Verdiğimiz İlçeler
                    </h3>
                    <span className="text-xs bg-accent-tint text-accent-ink px-3 py-1 rounded-full font-bold">
                        {city.districts.length} İlçe
                    </span>
                </div>

                {hasNotes ? (
                    <div className="grid gap-4 lg:grid-cols-2">
                        {pilot && <nav className="city-district-map" aria-label={`${city.name} ilçelerine git`}>
                            <p className="city-district-map-label">İlçe açıklamasına gitmek için seçin</p>
                            <div className="city-district-map-dots">
                                {city.districts.map((district, index) => <a key={district} href={`#district-${city.slug}-${index}`} aria-label={`${district} ilçe açıklamasına git`}>
                                    <span aria-hidden="true" />{district}
                                </a>)}
                            </div>
                        </nav>}
                        {city.districts.map((district, index) => (
                            <div key={district} id={pilot ? `district-${city.slug}-${index}` : undefined} tabIndex={pilot ? -1 : undefined} data-city-reveal={pilot ? '' : undefined} style={pilot ? { '--city-item-index': index } as CSSProperties : undefined} className={`city-district-card p-4 rounded-2xl bg-gray-50 border border-gray-100 ${pilot ? 'city-district-entry' : ''}`}>
                                <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2 mb-1">
                                    <i className="fas fa-map-pin text-accent-ink text-xs" aria-hidden></i>
                                    {district}
                                </h4>
                                {districtNotes?.[district] && (
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {districtNotes[district]}
                                    </p>
                                )}
                                {pilot && <span className="city-district-entry-dot" aria-hidden="true" />}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {city.districts.map((district, index) => (
                            <div
                                key={index}
                                className="city-district-card group flex items-center gap-2 p-3 rounded-full bg-gray-50 border border-transparent hover:bg-white hover:border-accent hover:shadow-md transition-all cursor-default"
                            >
                                <i className="fas fa-map-pin text-gray-400 text-xs group-hover:text-accent-ink transition-colors"></i>
                                <span className="text-gray-600 text-sm font-medium group-hover:text-gray-900">{district}</span>
                            </div>
                        ))}
                        <div className="flex items-center justify-center p-3 rounded-full bg-gray-50 border border-gray-100 border-dashed text-gray-400 text-sm italic">
                            + Tüm mahalleler
                        </div>
                    </div>
                )}
                <p className="text-xs text-gray-400 mt-4 text-center">
                    {city.name} genelinde 7/24 ücretsiz çekici hizmetimiz bulunmaktadır.
                </p>
            </div>
        </div>
    );
}
