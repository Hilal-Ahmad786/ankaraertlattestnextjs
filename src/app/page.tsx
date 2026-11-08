import { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactCTA from '@/components/sections/ContactCTA';
import TrustBadges from '@/components/sections/TrustBadges';
import ServicesComparison from '@/components/sections/ServicesComparison';
import CoverageArea from '@/components/sections/CoverageArea';
import UrgentCTABanner from '@/components/sections/UrgentCTABanner';


export const metadata: Metadata = {
  title: 'Ankara PERT - Kazalı, Hasarlı, Pert & Hurda Araç Alımı',
  description:
    'Türkiye\'nin En Güvenilir Araç Alım Merkezi. 30 dakikada nakit teklif, ücretsiz ekspertiz, 7/24 hizmet.',
  alternates: {
    canonical: 'https://www.ankarapert.com.tr',
  },
  openGraph: {
    title: 'Ankara PERT - Kazalı, Hasarlı, Pert & Hurda Araç Alımı',
    description:
      'Türkiye\'nin En Güvenilir Araç Alım Merkezi. 30 dakikada nakit teklif, ücretsiz ekspertiz, 7/24 hizmet.',
    url: 'https://www.ankarapert.com.tr',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara PERT - Kazalı, Hasarlı, Pert & Hurda Araç Alımı',
    description: 'Türkiye\'nin En Güvenilir Araç Alım Merkezi. 30 dakikada nakit teklif, ücretsiz ekspertiz, 7/24 hizmet.',
  },
};

export default function HomePage() {
  const whyUsItems = [
    {
      icon: 'ph-bold ph-clock',
      title: '30 Dakikada Teklif',
      description: 'Ekspertiz sonrası 30 dakika içinde nakit teklif alın.',
    },
    {
      icon: 'ph-bold ph-magnifying-glass',
      title: 'Ücretsiz Ekspertiz',
      description: 'Yerinde veya noter yanında ekspertiz—%100 ücretsiz ve yasal.',
    },
    {
      icon: 'ph-bold ph-truck',
      title: 'Ücretsiz Çekici',
      description: 'Aracınızı ücretsiz çekiciyle alırız—ekspertiz ve evrak masrafsız.',
    },
    {
      icon: 'ph-bold ph-headset',
      title: '7/24 Destek',
      description: 'Her adımda yanınızdayız—çağrı merkezi ve WhatsApp ile anında yanıt.',
    },
  ];

  const processSteps = [
    {
      icon: 'ph-bold ph-phone-call',
      title: 'Bize Ulaşın',
      description: '7/24 çağrı merkezi | WhatsApp fotoğraf gönder.',
    },
    {
      icon: 'ph-bold ph-map-pin-area',
      title: 'Ücretsiz Ekspertiz',
      description: 'Yerinde inceleme + pert/hasar raporu hazırlığı.',
    },
    {
      icon: 'ph-bold ph-signature',
      title: 'Teklif & Onay',
      description: 'Piyasa üstü en iyi fiyat; onayınızla süreç başlar.',
    },
    {
      icon: 'ph-bold ph-hand-coins',
      title: 'Noter Satışı & Nakit',
      description: 'Noter huzurunda devir → anında nakit/EFT.',
    },
  ];

  return (
    <div className="home-page">
      <HeroBanner
        variant="default"
        tagline="Türkiye'nin En Güvenilir Araç Alım Merkezi"
        title="Hasarlı | Kazalı | Pert | Hurda Araç Alımı"
        subtitle="Hasarlı | Kazalı | Pert | Hurda Araç Alımında #1"
        highlight="30 Dakikada Anında Teklif"
      />
      <UrgentCTABanner/>
<TrustBadges />
      <section className="intro-keyword px-4 py-12 bg-light">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-lg leading-relaxed">
            <strong className="text-primary">Ankara PERT</strong> olarak Türkiye
            genelinde kazalı, pert ve hurda araçlarınızı yerinde değerlendiriyoruz.{' '}
            Hasarlı araç alan{' '}
            uzman ekibimizle 30 dakikada nakit teklif, ücretsiz ekspertiz ve çekici
            hizmeti sunuyoruz.
          </p>
        </div>
      </section>
      <WhyUs
        title="Neden Ankara PERT?"
        subtitle="30 Dakikada Teklif • Ücretsiz Ekspertiz • Ücretsiz Çekici • 7/24 Destek"
        items={whyUsItems}
      />
<ServicesComparison />
      <ProcessTimeline
        title="Araç Alım Satımı Sürecimiz — 4 Adımda Tamam!"
        subtitle="Kazalı, Hasarlı, Pert & Hurda araçlar için başvurudan nakit ödemeye kadar tüm aşamalar burada."
        steps={processSteps}
      />
<CoverageArea /> 
      <ContactCTA />
    </div>
  );
}