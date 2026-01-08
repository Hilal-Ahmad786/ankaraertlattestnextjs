import { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactCTA from '@/components/sections/ContactCTA';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import { getTestimonialsByService } from '@/data/testimonials';
import { getFAQByCategory } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Hurda Araç Alan | Resmi Belgeli En İyi Fiyat • Ankara PERT',
  description: 'Hurda araç alan resmi belgeli firma. Çevre dostu, yasal süreçlerle hurda araç alımı.',
  keywords: ['hurda araç alan', 'hurda araç alan yerler', 'hurda araç alan firmalar'],
};

export default function HurdaAracPage() {
  const testimonials = getTestimonialsByService('hurda');
  const faqs = getFAQByCategory('hurda');

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

      <ContactCTA />
    </div>
  );
}