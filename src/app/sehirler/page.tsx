import Link from 'next/link';
import { Metadata } from 'next';
import citiesData from '@/data/cities.json';
import { City } from '@/types';

// Force static rendering
export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'Hizmet Bölgelerimiz | Ankara Pert',
    description: 'Türkiye genelinde hizmet verdiğimiz şehirler. İstanbul, Ankara, İzmir ve diğer illerde hasarlı araç alımı yapıyoruz.',
};

export default function CitiesListingPage() {
    const cities: City[] = citiesData as City[];

    // Filter popular cities
    const popularCities = cities.filter((city) => city.isPopular);

    // Group cities by region
    const citiesByRegion = cities.reduce((acc, city) => {
        if (!acc[city.region]) {
            acc[city.region] = [];
        }
        acc[city.region].push(city);
        return acc;
    }, {} as Record<string, City[]>);

    // Get distinct regions sorted alphabetically
    const regions = Object.keys(citiesByRegion).sort();

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black opacity-90 z-0"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Hizmet Bölgelerimiz</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Türkiye'nin dört bir yanında hasarlı, kazalı ve pert araçlarınızı yerinde ve değerinde alıyoruz.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 mt-12 space-y-16">
                {/* Popular Cities Section */}
                {popularCities.length > 0 && (
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                            <i className="fas fa-star text-orange-500"></i>
                            Popüler Şehirler
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {popularCities.map((city) => (
                                <Link
                                    key={city.id}
                                    href={`/sehirler/${city.slug}`}
                                    className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    {/* Background Image Placeholder since real images might be missing */}
                                    <div className="absolute inset-0 bg-gray-800" />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:via-black/40 transition-all"></div>

                                    <div className="absolute bottom-0 left-0 p-6 w-full">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <span className="text-orange-400 font-semibold text-sm mb-1 block uppercase tracking-wider">
                                                    {city.plateCode}
                                                </span>
                                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                                                    {city.name}
                                                </h3>
                                                <p className="text-gray-300 text-sm line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                                    {city.heroSubtitle}
                                                </p>
                                            </div>
                                            <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                                <i className="fas fa-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* All Cities by Region */}
                <section>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-4">
                            Bölge Bölge Hizmet Noktalarımız
                        </h2>

                        <div className="space-y-12">
                            {regions.map((region) => (
                                <div key={region} className="border-l-4 border-orange-500 pl-6">
                                    <h3 className="text-xl font-bold text-gray-700 mb-4">{region} Bölgesi</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {citiesByRegion[region].map((city) => (
                                            <Link
                                                key={city.id}
                                                href={`/sehirler/${city.slug}`}
                                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 group"
                                            >
                                                <span className="bg-gray-100 text-gray-600 font-mono text-sm font-bold w-8 h-8 flex items-center justify-center rounded group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                                                    {city.plateCode}
                                                </span>
                                                <span className="font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                                                    {city.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
