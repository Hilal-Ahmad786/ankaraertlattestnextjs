import { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactCTA from '@/components/sections/ContactCTA';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import { getTestimonialsByService } from '@/data/testimonials';
import { getFAQByCategory } from '@/data/faq';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://ankarapert.com.tr';
const PAGE_URL = `${BASE_URL}/pert-arac-alim-satim`;

export const metadata: Metadata = {
  title: 'Pert Araç Alan | Kasko Çıkışlı En Yüksek Fiyat • Ankara PERT',
  description: 'Pert araç alan firmalar arasında lider. Kasko çıkışlı pert araç alımında en iyi fiyat garantisi.',
  keywords: ['pert araç alan', 'pert araç alan yerler', 'pert araç alan firmalar', 'pert araç fiyatları'],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Pert Araç Alan | Kasko Çıkışlı En Yüksek Fiyat • Ankara PERT',
    description: 'Pert araç alan firmalar arasında lider. Kasko çıkışlı pert araç alımında en iyi fiyat garantisi.',
    url: PAGE_URL,
    locale: 'tr_TR',
    type: 'website',
    siteName: 'Ankara PERT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pert Araç Alan | Kasko Çıkışlı En Yüksek Fiyat • Ankara PERT',
    description: 'Pert araç alan firmalar arasında lider. Kasko çıkışlı pert araç alımında en iyi fiyat garantisi.',
  },
};

export default function PertAracPage() {
  const testimonials = getTestimonialsByService('pert');
  const faqs = getFAQByCategory('pert');

  const serviceJsonLd = serviceSchema({
    name: 'Pert Araç Alımı',
    description:
      'Kasko şirketi tarafından pert çıkmış araçları Türkiye genelinde alıyoruz. En yüksek pert araç fiyatı garantisi.',
    url: '/pert-arac-alim-satim',
  });

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Ana Sayfa', url: BASE_URL },
    { name: 'Pert Araç Alımı', url: PAGE_URL },
  ]);

  const whyUsItems = [
    {
      icon: 'fas fa-certificate',
      title: 'Kasko Çıkışlı',
      description: 'Sigorta çıkışlı pert araçlar için özel hizmet.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'En İyi Fiyat',
      description: 'Pert araç değerinin en üst seviyesini ödüyoruz.',
    },
    {
      icon: 'fas fa-file-contract',
      title: 'Yasal Süreç',
      description: 'Noter onaylı, resmi evrakla güvenli işlem.',
    },
    {
      icon: 'fas fa-headphones-alt',
      title: '7/24 Destek',
      description: 'Her an ulaşabileceğiniz müşteri hizmetleri.',
    },
  ];

  const processSteps = [
    {
      icon: 'fas fa-mobile-alt',
      title: 'Bizi Arayın',
      description: 'Pert belgesi ile hemen başvuru yapın.',
    },
    {
      icon: 'fas fa-calculator',
      title: 'Değerleme',
      description: 'Kasko raporu üzerinden fiyat belirleme.',
    },
    {
      icon: 'fas fa-file-signature',
      title: 'Noter İşlemi',
      description: 'Resmi devir ve evrak tamamlama.',
    },
    {
      icon: 'fas fa-hand-holding-usd',
      title: 'Anında Ödeme',
      description: 'Nakit veya EFT ile ödeme.',
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
        variant="pert"
        tagline="Pert Araç Alan Güvenilir Firma"
        title="Pert Araç Alımı"
        subtitle="Kasko Çıkışlı En Yüksek Fiyat"
        highlight="Tek Aramayla Teklif Alın"
        backgroundImage="/images/backgrounds/pert-arac-hero.png"
      />

      <section className="intro-keyword px-4 py-12 bg-light">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            <strong className="text-primary">Pert araç alan</strong> konusunda uzmanız.{' '}
            <strong className="text-orange-500">Pert aracımı satmak istiyorum</strong>{' '}
            diyorsanız doğru yerdesiniz. <strong className="text-primary">Pert araç alan
              firmalar</strong> arasında en yüksek fiyat garantisi veriyoruz. Kasko çıkışlı
            araçlar için özel değerleme!
          </p>
        </div>
      </section>

      <WhyUs
        title="Pert Araç Alımında Neden Biz?"
        subtitle="Kasko çıkışlı • En yüksek fiyat • Yasal süreç • Hızlı ödeme"
        items={whyUsItems}
      />

      <ProcessTimeline
        title="Pert Araç Satış Adımları"
        subtitle="4 basit adımda pert aracınızı satın"
        steps={processSteps}
      />

      {testimonials.length > 0 && (
        <Testimonials
          title="Pert Araç Satan Müşterilerimiz"
          items={testimonials}
        />
      )}

      <FAQ title="Pert Araç Hakkında Sorular" items={faqs} />

      {/* Internal links to related city pages */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Şehrinizde Pert Araç Satmak İster Misiniz?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['istanbul', 'ankara', 'izmir', 'bursa', 'antalya', 'adana', 'konya', 'gaziantep', 'kayseri', 'mersin'].map((slug) => (
              <a
                key={slug}
                href={`/sehirler/${slug}`}
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-orange-500 hover:text-orange-600 transition capitalize"
              >
                <i className="fas fa-map-marker-alt text-orange-400 mr-2"></i>
                {slug.charAt(0).toUpperCase() + slug.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
