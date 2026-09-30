import { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import DamageTypesGrid from '@/components/sections/DamageTypesGrid';
import ContactCTA from '@/components/sections/ContactCTA';
import { serviceSchema, breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import { getFAQByCategory } from '@/data/faq';
import FAQ from '@/components/sections/FAQ';
import citiesData from '@/data/cities.json';
import { City } from '@/types';

const BASE_URL = 'https://www.ankarapert.com.tr';
const PAGE_URL = `${BASE_URL}/kazali-arac-alim-satim`;

export const metadata: Metadata = {
  title: 'Kazalı Araç Alan | 30 Dakikada Nakit Teklif',
  description:
    'Kazalı araç alan lider firma! Türkiye\'nin her yerinde 30 dakikada ücretsiz ekspertiz ve anında nakit ödeme.',
  keywords: [
    'kazalı araç alan',
    'kazalı araç alan yerler',
    'kazalı araç alan firmalar',
    'kazalı aracımı satmak istiyorum',
    'kazalı oto alım satım',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Kazalı Araç Alan | 30 Dakikada Nakit Teklif • Ankara PERT',
    description:
      'Türkiye genelinde kazalı araç alan, ücretsiz ekspertiz yapan ve anında nakit ödeyen firma.',
    url: PAGE_URL,
    locale: 'tr_TR',
    type: 'website',
    siteName: 'Ankara PERT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kazalı Araç Alan | 30 Dakikada Nakit Teklif • Ankara PERT',
    description: 'Türkiye genelinde kazalı araç alan, ücretsiz ekspertiz yapan ve anında nakit ödeyen firma.',
  },
};

export default function KazaliAracPage() {
  const faqs = getFAQByCategory('kazali');

  const serviceJsonLd = serviceSchema({
    name: 'Kazalı Araç Alımı',
    description:
      'Türkiye genelinde kazalı araç alıyoruz. Ücretsiz ekspertiz, 30 dakikada nakit teklif, ücretsiz çekici hizmeti.',
    url: '/kazali-arac-alim-satim',
  });

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Ana Sayfa', url: BASE_URL },
    { name: 'Kazalı Araç Alımı', url: PAGE_URL },
  ]);

  const whyUsItems = [
    {
      icon: 'fas fa-clock',
      title: '30 Dakikada Teklif',
      description: 'Ekspertiz sonrası 30 dakika içinde nakit teklif alın.',
    },
    {
      icon: 'fas fa-search',
      title: 'Ücretsiz Ekspertiz',
      description: 'Yerinde veya noter yanında ekspertiz—KVKK ve sigorta mevzuatına %100 uygun.',
    },
    {
      icon: 'fas fa-truck-moving',
      title: 'Ücretsiz Çekici',
      description: 'Aracınızı yerinden alırız—ekspertiz, çekici ve evrak masrafları 0 TL.',
    },
    {
      icon: 'fas fa-headset',
      title: '7/24 Destek',
      description: 'Her adımda yanınızdayız—çağrı merkezi ve WhatsApp desteğiyle anında yanıt alın.',
    },
  ];

  const processSteps = [
    {
      icon: 'fas fa-phone-volume',
      title: 'Bize Ulaşın',
      description: '7/24 çağrı merkezi | WhatsApp fotoğraf gönder.',
    },
    {
      icon: 'fas fa-search-location',
      title: 'Ücretsiz Ekspertiz',
      description: 'Yerinde inceleme + pert/hasar raporu hazırlığı.',
    },
    {
      icon: 'fas fa-file-signature',
      title: 'Teklif & Onay',
      description: 'Piyasa üstü en iyi fiyat; onayınızla süreç başlar.',
    },
    {
      icon: 'fas fa-hand-holding-usd',
      title: 'Noter Satışı & Nakit',
      description: 'Noter huzurunda devir → anında nakit/EFT.',
    },
  ];

  const damageTypes = [
    {
      icon: 'fas fa-car-crash',
      title: 'Ön/Arka Çarpışma',
      description: 'Ön veya arkadan çarpışma sonucu hasar almış kazalı araçları değerinde satın alıyoruz.',
    },
    {
      icon: 'fas fa-compress-arrows-alt',
      title: 'Yan Darbe',
      description: 'Yandan darbe alan, kapı ve şasi hasarlı kazalı araçları da ekspertiz sonrası değerlendiriyoruz.',
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'Takla / Devrilme',
      description: 'Takla atmış veya devrilmiş araçları, tavan ve şasi hasarına bakılmaksızın satın alıyoruz.',
    },
    {
      icon: 'fas fa-exclamation-circle',
      title: 'Airbag Patlamış',
      description: "Airbag'i patlamış, iç donanımı hasar görmüş kazalı araçları da alıyoruz.",
    },
    {
      icon: 'fas fa-ban',
      title: 'Yürümez Durumda',
      description: 'Kaza sonrası hareket edemeyen araçları ücretsiz çekici ile yerinden teslim alıyoruz.',
    },
    {
      icon: 'fas fa-truck-pickup',
      title: 'Ticari Araç',
      description: 'Kazalı kamyonet, panelvan ve diğer ticari araçları da değerinde satın alıyoruz.',
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
        variant="kazali"
        tagline="Türkiye'de Kazalı Araç Alan Güvenilir Merkez"
        title="Kazalı Araç Alan"
        subtitle="Hasarlı • Pert • Hurda Araç Alımında #1"
        highlight="30 Dakikada Nakit Teklif"
        backgroundImage="/images/backgrounds/kazali-arac-hero.png"
      />

      <section className="intro-keyword px-4 py-12 bg-light">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            Ankara PERT olarak Türkiye genelinde{' '}
            <strong className="text-primary">7/24 kazalı araç alan yerler</strong> ve{' '}
            <strong className="text-primary">kazalı araç alan firmalar</strong> arasında öne çıkıyoruz.
            Ücretsiz ekspertiz, noter onaylı işlem ve{' '}
            <strong className="text-orange-500">30 dakikada nakit teklif</strong> garantisiyle
            "<em>Kazalı aracımı satmak istiyorum</em>" diyen herkesi hemen yönlendiriyoruz.
            Türkiye'nin her bölgesinde{' '}
            hasarlı araç alan{' '}
            ekibimizle aynı gün ödeme yapıyoruz.
          </p>
        </div>
      </section>

      <WhyUs
        title="Neden Kazalı Araç Alan Yerler & Firmalar Ankara PERT?"
        subtitle="30 dakikada teklif • 7/24 nakit ödeme garantisi"
        items={whyUsItems}
      />

      <ProcessTimeline
        title="Kazalı Araç Alım Satımı Sürecimiz — 4 Adımda Tamam!"
        subtitle="Başvurudan nakit ödemeye kadar tüm aşamalar burada."
        steps={processSteps}
      />

      <DamageTypesGrid
        title="Hangi Kazalı Araç Türlerini Satın Alıyoruz?"
        subtitle="Çarpışma yönü ve hasar derecesi fark etmeksizin değerlendiriyoruz"
        items={damageTypes}
      />

      <FAQ title="Kazalı Araç Hakkında Sorular" items={faqs} />

      {/* Internal links to all city pages */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Şehrinizde Kazalı Araç Satmak İster Misiniz?
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
