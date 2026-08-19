import Link from 'next/link';
import citiesData from '@/data/cities.json';

type CityRecord = { slug: string; name: string };

/**
 * The twelve cities shown on the homepage. Names are resolved against
 * data/cities.json rather than hardcoded alongside it, so a tile can never
 * point at a city page that does not exist — if an entry is ever removed from
 * the data it stops rendering instead of shipping a dead link.
 */
const FEATURED = [
  'Ankara', 'İstanbul', 'İzmir', 'Bursa', 'Antalya', 'Adana',
  'Konya', 'Gaziantep', 'Mersin', 'Kayseri', 'Eskişehir', 'Diyarbakır',
];

export default function CoverageArea() {
  const all = citiesData as CityRecord[];
  const cities = FEATURED
    .map((name) => all.find((c) => c.name === name))
    .filter((c): c is CityRecord => Boolean(c));

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Hizmet Verdiğimiz Şehirler
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Türkiye&apos;nin her yerinde 7/24 hizmetinizdeyiz
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto rounded-3xl sm:rounded-[2rem] border border-white/70 bg-white/40 p-3 sm:p-5 shadow-glass backdrop-blur-2xl">
          {cities.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/sehirler/${city.slug}`}
                className="group flex min-h-[88px] flex-col items-center justify-center gap-1 rounded-2xl border border-white/60 bg-white/45 p-3 sm:p-4 text-center transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <i
                  className="fas fa-map-marker-alt text-orange-500 text-lg sm:text-xl transition-transform group-hover:scale-110"
                  aria-hidden="true"
                ></i>
                <span className="text-sm sm:text-base font-semibold text-gray-800">
                  {city.name}
                </span>
                <span className="text-xs leading-tight font-medium text-gray-500">
                  Hasarlı Araç Alımı
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-center mt-7 sm:mt-8">
          <Link
            href="/sehirler"
            className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/50 px-5 py-2.5 text-sm sm:text-base font-semibold text-accent-ink transition hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Türkiye&apos;nin tüm illeri ve ilçeleri
            <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
