import { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactCTA from '@/components/sections/ContactCTA';
import { getServiceBySlug } from '@/data/services';

export const metadata: Metadata = {
  title: 'Kazalı Araç Alan | 30 Dakikada Nakit Teklif • Ankara PERT',
  description:
    'Kazalı araç alan lider firma! Türkiye\'nin her yerinde 30 dakikada ücretsiz ekspertiz ve anında nakit ödeme.',
  keywords: [
    'kazalı araç alan',
    'kazalı araç alan yerler',
    'kazalı araç alan firmalar',
    'kazalı aracımı satmak istiyorum',
    'kazalı oto alım satım',
  ],
  openGraph: {
    title: 'Kazalı Araç Alan | 30 Dakikada Nakit Teklif • Ankara PERT',
    description:
      'Türkiye genelinde kazalı araç alan, ücretsiz ekspertiz yapan ve anında nakit ödeyen firma.',
    images: ['/kazali.webp'],
  },
};

export default function KazaliAracPage() {
  const service = getServiceBySlug('kazali-arac-alim-satim');

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

  return (
    <div>
      <HeroBanner
        variant="kazali"
        tagline="Türkiye'de Kazalı Araç Alan Güvenilir Merkez"
        title="Kazalı Araç Alan"
        subtitle="Hasarlı • Pert • Hurda Araç Alımında #1"
        highlight="30 Dakikada Nakit Teklif"
        backgroundImage="/images/backgrounds/kazali-arac-hero.png"
      />

      {/* Intro Section */}
      <section className="intro-keyword px-4 py-12 bg-light">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            Ankara PERT olarak Türkiye genelinde{' '}
            <strong className="text-primary">7/24 kazalı araç alan yerler</strong> ve{' '}
            <strong className="text-primary">kazalı araç alan firmalar</strong> arasında öne çıkıyoruz.
            Ücretsiz ekspertiz, noter onaylı işlem ve{' '}
            <strong className="text-orange-500">30 dakikada nakit teklif</strong> garantisiyle
            "<em>Kazalı aracımı satmak istiyorum</em>" diyen herkesi hemen yönlendiriyoruz.
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

      <ContactCTA />
    </div>
  );
}