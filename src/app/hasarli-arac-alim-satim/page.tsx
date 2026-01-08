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
  title: 'Hasarlı Araç Alan | Anında Nakit Ödeme • Ankara PERT',
  description: 'Hasarlı araç alan güvenilir firma. Ücretsiz ekspertiz, en yüksek fiyat garantisi, 7/24 hizmet.',
  keywords: ['hasarlı araç alan', 'hasarlı araç alan yerler', 'hasarlı araç alan firmalar'],
};

export default function HasarliAracPage() {
  const testimonials = getTestimonialsByService('hasarli');
  const faqs = getFAQByCategory('hasarli');

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
      description: '24 saat içinde tüm işlemler tamamlanır.',
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

  return (
    <div>
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

      {testimonials.length > 0 && (
        <Testimonials
          title="Hasarlı Araç Satan Müşterilerimiz"
          items={testimonials}
        />
      )}

      <FAQ title="Sık Sorulan Sorular" items={faqs} />

      <ContactCTA />
    </div>
  );
}