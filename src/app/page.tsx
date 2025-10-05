import { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactCTA from '@/components/sections/ContactCTA';
import TrustBadges from '@/components/sections/TrustBadges';
import ServicesComparison from '@/components/sections/ServicesComparison';
import CoverageArea from '@/components/sections/CoverageArea';

export const metadata: Metadata = {
  title: 'Ankara PERT - Kazalı, Hasarlı, Pert & Hurda Araç Alımı',
  description:
    'Türkiye\'nin En Güvenilir Araç Alım Merkezi. 30 dakikada nakit teklif, ücretsiz ekspertiz, 7/24 hizmet.',
  openGraph: {
    title: 'Ankara PERT - Kazalı, Hasarlı, Pert & Hurda Araç Alımı',
    description:
      'Türkiye\'nin En Güvenilir Araç Alım Merkezi. 30 dakikada nakit teklif, ücretsiz ekspertiz, 7/24 hizmet.',
    url: 'https://ankarapert.com.tr',
    images: ['/banner.webp'],
  },
};

export default function HomePage() {
  const whyUsItems = [
    {
      icon: 'fas fa-clock',
      title: '30 Dakikada Teklif',
      description: 'Ekspertiz sonrası 30 dakika içinde nakit teklif alın.',
    },
    {
      icon: 'fas fa-search',
      title: 'Ücretsiz Ekspertiz',
      description: 'Yerinde veya noter yanında ekspertiz—%100 ücretsiz ve yasal.',
    },
    {
      icon: 'fas fa-truck-moving',
      title: 'Ücretsiz Çekici',
      description: 'Aracınızı ücretsiz çekiciyle alırız—ekspertiz ve evrak masrafsız.',
    },
    {
      icon: 'fas fa-headset',
      title: '7/24 Destek',
      description: 'Her adımda yanınızdayız—çağrı merkezi ve WhatsApp ile anında yanıt.',
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
    <div className="home-page">
      <HeroBanner
        variant="default"
        tagline="Türkiye'nin En Güvenilir Araç Alım Merkezi"
        title="Hasarlı | Kazalı | Pert | Hurda Araç Alımı"
        subtitle="Hasarlı | Kazalı | Pert | Hurda Araç Alımında #1"
        highlight="30 Dakikada Anında Teklif"
      />
<TrustBadges /> 
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