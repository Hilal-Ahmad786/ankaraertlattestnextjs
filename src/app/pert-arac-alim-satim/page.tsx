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
  title: 'Pert Araç Alan | Kasko Çıkışlı En Yüksek Fiyat • Ankara PERT',
  description: 'Pert araç alan firmalar arasında lider. Kasko çıkışlı pert araç alımında en iyi fiyat garantisi.',
  keywords: ['pert araç alan', 'pert araç alan yerler', 'pert araç alan firmalar'],
};

export default function PertAracPage() {
  const testimonials = getTestimonialsByService('pert');
  const faqs = getFAQByCategory('pert');

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

      <ContactCTA />
    </div>
  );
}