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
import CityRecentPurchases from '@/components/city/CityRecentPurchases';
import CityTestimonials from '@/components/city/CityTestimonials';
import TrustBadges from '@/components/sections/TrustBadges';
import UrgentCTABanner from '@/components/sections/UrgentCTABanner';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactCTA from '@/components/sections/ContactCTA';

export async function generateStaticParams() {
    const cities: City[] = citiesData as City[];
    return cities.map((city) => ({
        slug: city.slug,
    }));
}

import { siteConfig } from '@/config/site';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const cities: City[] = citiesData as City[];
    const city = cities.find((c) => c.slug === params.slug);

    if (!city) {
        return {
            title: 'Şehir Bulunamadı | Ankara Pert',
        };
    }

    return {
        title: city.metaTitle,
        description: city.metaDescription,
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

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Ankara Pert',
        image: 'https://ankarapert.com.tr/logo.png',
        telephone: siteConfig.phone,
        address: {
            '@type': 'PostalAddress',
            addressLocality: city.name,
            addressCountry: 'TR',
        },
        areaServed: {
            '@type': 'City',
            name: city.name,
        },
        description: city.metaDescription,
    };

    // City-Specific Data for Components
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

    return (
        <div className="min-h-screen bg-gray-50 pb-0">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* HERO SECTION - Full Width */}
            <HeroBanner
                variant="default"
                tagline={`${city.region} Bölgesi • ${city.plateCode}`}
                title={city.heroTitle}
                subtitle={city.heroSubtitle}
                highlight="30 Dakikada Nakit"
                backgroundImage={city.heroImage}
            />

            {/* TRUST BADGES - Full Width */}
            <TrustBadges />

            {/* MAIN CONTENT CONTAINER */}
            <div className="container mx-auto px-4 py-12 relative z-20">

                {/* Stats Bar - Full Width inside Container */}
                <div className="mb-12">
                    <CityStats cityName={city.name} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* LEFT COLUMN - Main Text & Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <CityContent content={city.content} cityName={city.name} />
                        <CityDistricts city={city} />
                        <CityRecentPurchases city={city} />
                        <CityFAQs cityName={city.name} />
                    </div>

                    {/* RIGHT COLUMN - Sticky Sidebar */}
                    <div className="lg:col-span-1">
                        <CitySidebar city={city} nearbyCities={nearbyCities} />
                    </div>

                </div>
            </div>

            {/* FULL WIDTH SECTIONS BELOW MAIN CONTENT */}

            {/* Process Timeline - Now Full Width and Centered */}
            <div className="bg-white border-t border-gray-100">
                <ProcessTimeline
                    title={`${city.name} Araç Alım Süreci`}
                    subtitle="4 Kolay Adımda Aracınızı Nakite Çevirin"
                    steps={processSteps}
                />
            </div>

            {/* Testimonials - Full Width */}
            <CityTestimonials cityName={city.name} />

            {/* Urgent CTA - Full Width */}
            <UrgentCTABanner />

            {/* Why Us - Full Width */}
            <WhyUs
                title={`Neden ${city.name} Bölgesinde Bizi Seçmelisiniz?`}
                subtitle="Güvenilir, Hızlı ve Profesyonel Hizmet"
                items={whyUsItems}
            />

            {/* Contact CTA - Full Width */}
            <ContactCTA />
        </div>
    );
}
