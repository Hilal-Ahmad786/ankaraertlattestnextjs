import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import citiesData from '@/data/cities.json';
import { City } from '@/types';
import HeroBanner from '@/components/sections/HeroBanner';
import CityContent from '@/components/city/CityContent';
import CitySidebar from '@/components/city/CitySidebar';
import CityDistricts from '@/components/city/CityDistricts';
import CityFAQs from '@/components/city/CityFAQs';
import CityStats from '@/components/city/CityStats';
import CityVehicleTypes from '@/components/city/CityVehicleTypes';
import TrustBadges from '@/components/sections/TrustBadges';
import UrgentCTABanner from '@/components/sections/UrgentCTABanner';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactCTA from '@/components/sections/ContactCTA';
import { localBusinessSchema, breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { siteConfig } from '@/config/site';
import { services } from '@/data/services';
import { getCityContent } from '@/data/city-content';

const BASE_URL = 'https://ankarapert.com.tr';

export async function generateStaticParams() {
  const cities: City[] = citiesData as City[];
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cities: City[] = citiesData as City[];
  const city = cities.find((c) => c.slug === params.slug);

  if (!city) {
    return { title: 'Şehir Bulunamadı | Ankara Pert' };
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
      title: city.metaTitle,
      description: city.metaDescription,
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

  // Enriched LocalBusiness schema per city
  const localBizJsonLd = {
    ...localBusinessSchema(city.name, city.slug),
    description: city.metaDescription,
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

  const whyUsItems = [
    {
      icon: 'fas fa-clock',
      title: '30 Dakikada Teklif',
      description: `${city.name} genelinde ekspertiz sonrası 30 dakika içinde nakit teklif.`,
    },
    {
      icon: 'fas fa-search',
      title: 'Ücretsiz Ekspertiz',
      description: `${city.name} adresinizde ücretsiz ve detaylı araç incelemesi.`,
    },
    {
      icon: 'fas fa-truck-moving',
      title: 'Ücretsiz Çekici',
      description: `Aracınızı ${city.name} içindeki konumundan ücretsiz teslim alıyoruz.`,
    },
    {
      icon: 'fas fa-headset',
      title: '7/24 Destek',
      description: `${city.region} bölgesi için özel müşteri temsilcisi desteği.`,
    },
  ];

  const processSteps = [
    {
      icon: 'fas fa-phone-volume',
      title: 'Bize Ulaşın',
      description: `${city.name} için 7/24 çağrı merkezi veya WhatsApp hattımız.`,
    },
    {
      icon: 'fas fa-search-location',
      title: 'Yerinde Ekspertiz',
      description: `${city.name} ili sınırları içinde adresinize geliyoruz.`,
    },
    {
      icon: 'fas fa-file-signature',
      title: 'Anında Teklif',
      description: `${city.plateCode} plakalı araçlar için özel fiyatlandırma.`,
    },
    {
      icon: 'fas fa-hand-holding-usd',
      title: 'Nakit Ödeme',
      description: `${city.name} noterlerinde anında satış ve ödeme.`,
    },
  ];

  // City-scoped Service entities. LocalBusiness alone says "we exist here";
  // Service says what is actually offered here, which is what the city query asks.
  const written = getCityContent(city.slug);

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
    <div className="min-h-screen bg-gray-50 pb-0">
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

      <HeroBanner
        variant="default"
        tagline={`${city.region} Bölgesi • ${city.plateCode}`}
        title={written?.heroTitle ?? city.heroTitle}
        subtitle={written?.heroSubtitle ?? city.heroSubtitle}
        highlight="30 Dakikada Nakit"
        backgroundImage={city.heroImage}
      />

      <TrustBadges />

      <section className="container mx-auto px-4 pt-10 relative z-20">
        <p className="text-lg leading-relaxed text-center text-gray-700 max-w-4xl mx-auto">
          {written?.intro ?? (
            <>
              {city.name} ve çevresinde kazalı, pert veya hasar kayıtlı aracınızı
              değerinde satın alıyoruz. Ücretsiz ekspertiz ve çekici hizmetiyle
              aracınız bulunduğu yerden teslim alınır.
            </>
          )}
        </p>
        <p className="mt-4 text-base leading-relaxed text-center text-gray-600 max-w-3xl mx-auto">
          <strong className="text-gray-800">30 dakikada nakit teklif</strong>, anlaşma
          sağlandığında <strong className="text-gray-800">aynı gün ödeme</strong>.
          Çekici ve noter masrafları bize aittir; {city.name} içinde aracınız
          bulunduğu yerden teslim alınır.
        </p>
      </section>

      <div className="container mx-auto px-4 py-12 relative z-20">
        <div className="mb-12">
          <CityStats cityName={city.name} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <CityContent
              content={city.content}
              cityName={city.name}
              body={written?.body}
              localPoints={written?.localPoints}
            />
            <CityDistricts city={city} districtNotes={written?.districtNotes} />
            <CityVehicleTypes city={city} />
            <CityFAQs cityName={city.name} faqs={written?.faqs} />
          </div>

          <div className="lg:col-span-1">
            <CitySidebar city={city} nearbyCities={nearbyCities} />
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-100">
        <ProcessTimeline
          title={`${city.name} Araç Alım Süreci`}
          subtitle="4 Kolay Adımda Aracınızı Nakite Çevirin"
          steps={processSteps}
        />
      </div>

      <UrgentCTABanner />

      <WhyUs
        title={`Neden ${city.name} Bölgesinde Bizi Seçmelisiniz?`}
        subtitle="Güvenilir, Hızlı ve Profesyonel Hizmet"
        items={whyUsItems}
      />

      <ContactCTA />
    </div>
  );
}
