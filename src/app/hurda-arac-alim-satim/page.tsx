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
const PAGE_URL = `${BASE_URL}/hurda-arac-alim-satim`;

export const metadata: Metadata = {
  title: 'Hurda Araç Alan | Resmi Belgeli En İyi Fiyat • Ankara PERT',
  description: 'Hurda araç alan resmi belgeli firma. Çevre dostu, yasal süreçlerle hurda araç alımı.',
  keywords: ['hurda araç alan', 'hurda araç alan yerler', 'hurda araç alan firmalar'],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Hurda Araç Alan | Resmi Belgeli En İyi Fiyat • Ankara PERT',
    description: 'Hurda araç alan resmi belgeli firma. Çevre dostu, yasal süreçlerle hurda araç alımı.',
    url: PAGE_URL,
    locale: 'tr_TR',
    type: 'website',
    siteName: 'Ankara PERT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hurda Araç Alan | Resmi Belgeli En İyi Fiyat • Ankara PERT',
    description: 'Hurda araç alan resmi belgeli firma. Çevre dostu, yasal süreçlerle hurda araç alımı.',
  },
};

export default function HurdaAracPage() {
  const testimonials = getTestimonialsByService('hurda');
  const faqs = getFAQByCategory('hurda');

  const serviceJsonLd = serviceSchema({
    name: 'Hurda Araç Alımı',
    description:
      'Ekonomik ömrünü tamamlamış araçları resmi belgeli olarak alıyoruz. Ücretsiz çekici, anında ödeme.',
    url: '/hurda-arac-alim-satim',
  });

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Ana Sayfa', url: BASE_URL },
    { name: 'Hurda Araç Alımı', url: PAGE_URL },
  ]);

  const whyUsItems = [
    {
      icon: 'fas fa-file-alt',
      title: 'Resmi Belgeli',
      description: 'Yasal izinli, resmi belgeli hurda araç alımı.',
    },
    {
      icon: 'fas fa-recycle',
      title: 'Çevre Dostu',
      description: 'Çevreye duyarlı geri dönüşüm süreci.',
    },
    {
      icon: 'fas fa-weight',
      title: 'Adil Tartı',
      description: 'Kilo bazlı en adil fiyatlandırma.',
    },
    {
      icon: 'fas fa-truck',
      title: 'Ücretsiz Taşıma',
      description: 'Aracınızı ücretsiz çekiyoruz.',
    },
  ];

  const processSteps = [
    {
      icon: 'fas fa-phone',
      title: 'İletişim',
      description: 'Aracınızın bilgilerini iletin.',
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Tartım',
      description: 'Yerinde tartı ve değerleme.',
    },
    {
      icon: 'fas fa-file-invoice',
      title: 'Evrak',
      description: 'Resmi hurda belgesi düzenleme.',
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Ödeme',
      description: 'Anında nakit ödeme.',
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
        variant="hurda"
        tagline="Hurda Araç Alan Resmi Belgeli Firma"
        title="Hurda Araç Alımı"
        subtitle="Çevre Dostu Geri Dönüşüm"
        highlight="En İyi Fiyat Garantisi"
        backgroundImage="/images/backgrounds/hurda-arac-hero.png"
      />

      <section className="intro-keyword px-4 py-12 bg-light">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            <strong className="text-primary">Hurda araç alan</strong> resmi firmayız.{' '}
            <strong className="text-orange-500">Hurda aracımı satmak istiyorum</strong>{' '}
            diyorsanız, çevre dostu ve yasal süreçlerimizle hizmetinizdeyiz.{' '}
            <strong className="text-primary">Hurda araç alan yerler</strong> arasında
            en iyi fiyatı garantiliyoruz. Ücretsiz çekici, anında ödeme!
          </p>
        </div>
      </section>

      <WhyUs
        title="Hurda Araç Alımında Neden Biz?"
        subtitle="Resmi belgeli • Çevre dostu • Adil fiyat • Ücretsiz çekici"
        items={whyUsItems}
      />

      <ProcessTimeline
        title="Hurda Araç Satış Süreci"
        subtitle="Basit adımlarla hurda aracınızı değerlendirin"
        steps={processSteps}
      />

      {testimonials.length > 0 && (
        <Testimonials
          title="Hurda Araç Satan Müşterilerimiz"
          items={testimonials}
        />
      )}

      <FAQ title="Hurda Araç SSS" items={faqs} />

      {/* Internal links to related city pages */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Şehrinizde Hurda Araç Satmak İster Misiniz?
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
