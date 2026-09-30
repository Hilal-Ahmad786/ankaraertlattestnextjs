import { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import DamageTypesGrid from '@/components/sections/DamageTypesGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import FAQ from '@/components/sections/FAQ';
import { getFAQByCategory } from '@/data/faq';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import citiesData from '@/data/cities.json';
import { City } from '@/types';

const BASE_URL = 'https://www.ankarapert.com.tr';
const PAGE_URL = `${BASE_URL}/hasarli-arac-alim-satim`;

export const metadata: Metadata = {
  title: 'Hasarlı Araç Alan | Anında Nakit Ödeme',
  description: 'Hasarlı araç alan güvenilir firma. Ücretsiz ekspertiz, en yüksek fiyat garantisi, 7/24 hizmet.',
  keywords: ['hasarlı araç alan', 'hasarlı araç alan yerler', 'hasarlı araç alan firmalar'],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Hasarlı Araç Alan | Anında Nakit Ödeme • Ankara PERT',
    description: 'Hasarlı araç alan güvenilir firma. Ücretsiz ekspertiz, en yüksek fiyat garantisi, 7/24 hizmet.',
    url: PAGE_URL,
    locale: 'tr_TR',
    type: 'website',
    siteName: 'Ankara PERT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hasarlı Araç Alan | Anında Nakit Ödeme • Ankara PERT',
    description: 'Hasarlı araç alan güvenilir firma. Ücretsiz ekspertiz, en yüksek fiyat garantisi, 7/24 hizmet.',
  },
};

export default function HasarliAracPage() {
  const faqs = getFAQByCategory('hasarli');

  const serviceJsonLd = serviceSchema({
    name: 'Hasarlı Araç Alımı',
    description:
      'Türkiye genelinde hasarlı araç alıyoruz. Mekanik veya kaporta hasarı ne olursa olsun, anında nakit teklif.',
    url: '/hasarli-arac-alim-satim',
  });

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Ana Sayfa', url: BASE_URL },
    { name: 'Hasarlı Araç Alımı', url: PAGE_URL },
  ]);

  const whyUsItems = [
    {
      icon: 'fas fa-user-shield',
      title: 'Güvenilir İşlem',
      description: 'Noter onaylı yasal süreç, %100 güvenli alım satım.',
    },
    {
      icon: 'fas fa-money-bill-wave',
      title: 'En Yüksek Fiyat',
      description: 'Piyasa araştırması ile en iyi teklifi sunuyoruz.',
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: 'Hızlı Süreç',
      description: 'Anlaşma sağlandığında ödeme aynı gün yapılır.',
    },
    {
      icon: 'fas fa-phone-volume',
      title: 'Anında İletişim',
      description: 'Tek aramayla işlem başlar, hemen teklif alın.',
    },
  ];

  const processSteps = [
    {
      icon: 'fas fa-phone-alt',
      title: 'Hemen Arayın',
      description: 'Ücretsiz danışma, anında fiyat bilgisi.',
    },
    {
      icon: 'fas fa-search-dollar',
      title: 'Ekspertiz',
      description: 'Profesyonel değerleme, şeffaf rapor.',
    },
    {
      icon: 'fas fa-handshake',
      title: 'Anlaşma',
      description: 'En iyi fiyat, noter onayı.',
    },
    {
      icon: 'fas fa-money-check-alt',
      title: 'Ödeme',
      description: 'Anında nakit veya EFT.',
    },
  ];

  const damageTypes = [
    {
      icon: 'fas fa-oil-can',
      title: 'Motor Arızalı',
      description: 'Motor arızası nedeniyle çalışmayan veya ağır yağ/su karışımı yaşamış araçları değerinde satın alıyoruz.',
    },
    {
      icon: 'fas fa-cogs',
      title: 'Şanzıman Arızalı',
      description: 'Şanzıman arızası, debriyaj veya vites sorunu olan araçları da ekspertiz sonrası değerlendiriyoruz.',
    },
    {
      icon: 'fas fa-car-side',
      title: 'Tavan Hasarlı',
      description: 'Takla, devrilme veya düşen cisim nedeniyle tavan hasarı almış araçları satın alıyoruz.',
    },
    {
      icon: 'fas fa-fire',
      title: 'Yanık / Yanmış',
      description: 'Kısmen veya tamamen yanmış araçları da hasar durumuna göre değerlendiriyoruz.',
    },
    {
      icon: 'fas fa-file-signature',
      title: 'Çekme Belgeli',
      description: 'Trafikten çekilmiş, çekme belgeli araçları resmi süreçle satın alıyoruz.',
    },
    {
      icon: 'fas fa-truck-pickup',
      title: 'Ticari Araç',
      description: 'Kamyonet, minibüs ve panelvan gibi hasarlı ticari araçları da alıyoruz.',
    },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroBanner
        variant="hasarli"
        tagline="Hasarlı Araç Alan Güvenilir Merkez"
        title="Hasarlı Araç Alımı"
        subtitle="En Yüksek Fiyat Garantisi"
        highlight="Hemen Arayın, Teklif Alın"
        backgroundImage="/images/backgrounds/hasarli-arac-hero.png"
      />

      <section className="intro-keyword px-4 py-12 bg-light">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            <strong className="text-primary">Hasarlı araç alan firmalar</strong> arasında
            en güvenilir çözümü sunuyoruz. <strong className="text-orange-500">Hasarlı aracımı
              satmak istiyorum</strong> diyorsanız, tek bir telefonla başlayın.{' '}
            <strong className="text-primary">Hasarlı araç alan yerler</strong> arasında en
            yüksek fiyatı garantiliyoruz. Ücretsiz ekspertiz, hızlı işlem, anında ödeme!
            Türkiye genelinde{' '}
            hasarlı araç alan{' '}
            uzman ekibimizle aracınıza en yüksek değeri veriyoruz.
          </p>
        </div>
      </section>

      <WhyUs
        title="Hasarlı Araç Alımında Neden Biz?"
        subtitle="Güvenilir işlem • En yüksek fiyat • Hızlı süreç • 7/24 destek"
        items={whyUsItems}
      />

      <ProcessTimeline
        title="Hasarlı Araç Satış Süreci"
        subtitle="4 adımda hasarlı aracınızı nakde çevirin"
        steps={processSteps}
      />

      <DamageTypesGrid
        title="Hangi Hasar Türlerini Satın Alıyoruz?"
        subtitle="Kaporta hasarından mekanik arızaya, her durumdaki aracı değerlendiriyoruz"
        items={damageTypes}
      />

      <FAQ title="Sık Sorulan Sorular" items={faqs} />

      {/* Internal links to all city pages */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Şehrinizde Hasarlı Araç Satmak İster Misiniz?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {(citiesData as City[]).map((city) => (
              <a
                key={city.slug}
                href={`/sehirler/${city.slug}`}
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-orange-500 hover:text-orange-600 transition"
              >
                <i className="fas fa-map-marker-alt text-orange-400 mr-2"></i>
                {city.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
