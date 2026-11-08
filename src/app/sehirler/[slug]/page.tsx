import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import citiesData from '@/data/cities.json';
import { City } from '@/types';
import { getCityMedia } from '@/data/city-media';
import HeroBanner from '@/components/sections/HeroBanner';
import CitySidebar, { CitySummaryBox } from '@/components/city/CitySidebar';
import { CityIntro, CityBody, CityDamage, CityPrep, CityDistrictList, CityVehicles, CityProcess, CityFaqList, CityNearby } from '@/components/city/CityPageSections';
import CityCtaBanner from '@/components/city/CityCtaBanner';
import { localBusinessSchema, breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { services } from '@/data/services';
import { getCityContent } from '@/data/city-content';

const BASE_URL = 'https://www.ankarapert.com.tr';

export async function generateStaticParams() {
  const cities: City[] = citiesData as City[];
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cities: City[] = citiesData as City[];
  const city = cities.find((c) => c.slug === params.slug);

  if (!city) {
    return { title: 'Şehir Bulunamadı' };
  }

  const url = `${BASE_URL}/sehirler/${city.slug}`;
  const written = getCityContent(city.slug);
  const metaTitle = written?.metaTitle ?? city.metaTitle;
  const metaDescription = written?.metaDescription ?? city.metaDescription;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      locale: 'tr_TR',
      type: 'website',
      siteName: 'Ankara PERT',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
    },
  };
}

export default function CityDetailPage({ params }: { params: { slug: string } }) {
  const cities: City[] = citiesData as City[];
  const city = cities.find((c) => c.slug === params.slug);

  if (!city) {
    notFound();
  }

  const nearbyCities = cities
    .filter((c) => c.region === city.region && c.slug !== city.slug)
    .slice(0, 5);

  const written = getCityContent(city.slug);
  const media = getCityMedia(city.slug);
  const writtenNearbyLinks = written?.nearbyNote?.citySlugs
    .map((slug) => cities.find((item) => item.slug === slug))
    .filter((item): item is City => Boolean(item))
    .map((item) => ({ name: item.name, slug: item.slug })) ?? [];

  // Enriched LocalBusiness schema per city
  const localBizJsonLd = {
    ...localBusinessSchema(city.name, city.slug),
    description: written?.metaDescription ?? city.metaDescription,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${city.name} Hasarlı Araç Alım Hizmetleri`,
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kazalı Araç Alımı' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hasarlı Araç Alımı' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pert Araç Alımı' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hurda Araç Alımı' } },
      ],
    },
  };

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Ana Sayfa', url: BASE_URL },
    { name: 'Şehirler', url: `${BASE_URL}/sehirler` },
    { name: city.name, url: `${BASE_URL}/sehirler/${city.slug}` },
  ]);



  // City-scoped Service entities. LocalBusiness alone says "we exist here";
  // Service says what is actually offered here, which is what the city query asks.
  const cityServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${city.name} Hasarlı Araç Alım Hizmetleri`,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        ...serviceSchema({
          name: `${city.name} ${service.title}`,
          description: `${city.name} ve ilçelerinde ${service.title.toLowerCase()} hizmeti.`,
          url: `/${service.slug}`,
        }),
        areaServed: {
          '@type': 'City',
          name: city.name,
          containedInPlace: { '@type': 'Country', name: 'Türkiye' },
        },
      },
    })),
  };

  return (
    <div className="city-page cp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityServiceJsonLd) }}
      />

      {/* Site-wide hero; the ten cities with their own photo use it as background. */}
      <HeroBanner
        variant="default"
        tagline={`${city.region} Bölgesi • ${city.plateCode}`}
        title={written?.heroTitle ?? city.heroTitle}
        subtitle={written?.heroSubtitle ?? city.heroSubtitle}
        highlight="30 Dakikada Nakit"
        backgroundImage={media?.src ?? city.heroImage}
      />

      <CityIntro city={city} written={written} summary={<CitySummaryBox city={city} districtCount={city.districts.length} />} />
      <CityBody city={city} written={written} />
      <CityDamage cityName={city.name} rows={written?.damageTable} />
      <CityCtaBanner variant="photo" cityName={city.name} />
      <CityPrep cityItem={written?.cityChecklistItem} example={written?.exampleCase} />
      <CitySidebar city={city} />
      <CityDistrictList city={city} notes={written?.districtNotes} />
      <CityCtaBanner variant="tow" cityName={city.name} />
      <CityVehicles cityName={city.name} />
      <CityProcess city={city} />
      <CityFaqList cityName={city.name} faqs={written?.faqs} />
      <CityCtaBanner variant="question" cityName={city.name} />
      <CityNearby city={city} nearby={written?.nearbyNote ? { text: written.nearbyNote.text, links: writtenNearbyLinks } : undefined} regionCities={nearbyCities} />

      <CitySidebar city={city} final />
    </div>
  );
}
