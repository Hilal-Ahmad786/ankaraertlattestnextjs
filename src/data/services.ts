export interface Service {
    id: string;
    title: string;
    slug: string;
    icon: string;
    description: string;
    shortDescription: string;
    keywords: string[];
    features: string[];
    benefits: string[];
  }
  
  export const services: Service[] = [
    {
      id: 'kazali',
      title: 'Kazalı Araç Alımı',
      slug: 'kazali-arac-alim-satim',
      icon: 'fas fa-car-crash',
      description:
        'Kazalı araç alan lider firma! Türkiye\'nin her yerinde 30 dakikada ücretsiz ekspertiz ve anında nakit ödeme.',
      shortDescription: 'Nakit ödeme ile anında alım',
      keywords: [
        'kazalı araç alan',
        'kazalı araç alan yerler',
        'kazalı araç alan firmalar',
        'kazalı aracımı satmak istiyorum',
        'kazalı oto alım satım',
      ],
      features: [
        '30 dakikada nakit teklif',
        'Ücretsiz ekspertiz',
        'Ücretsiz çekici hizmeti',
        '7/24 destek',
        'Noter onaylı işlem',
      ],
      benefits: [
        'Türkiye genelinde hizmet',
        'En yüksek piyasa fiyatı',
        'Hızlı ve güvenli işlem',
        'Tüm evrak işlemleri ücretsiz',
      ],
    },
    {
      id: 'hasarli',
      title: 'Hasarlı Araç Alımı',
      slug: 'hasarli-arac-alim-satim',
      icon: 'fas fa-tools',
      description:
        'Hasarlı araç alan güvenilir firma. Uzman ekspertiz ekibi ile hasarlı araç alımında profesyonel hizmet.',
      shortDescription: 'Uzman eksper onayıyla alım',
      keywords: [
        'hasarlı araç alan',
        'hasarlı araç alan yerler',
        'hasarlı araç alan firmalar',
        'hasarlı aracımı satmak istiyorum',
        'hasarlı oto alım satım',
      ],
      features: [
        'Profesyonel ekspertiz',
        'Anında değerleme',
        'Nakit ödeme',
        'Tüm Türkiye',
        'Ücretsiz çekici',
      ],
      benefits: [
        'Güvenilir işlem',
        'Hızlı ödeme',
        'Şeffaf fiyatlandırma',
        'Tam destek',
      ],
    },
    {
      id: 'pert',
      title: 'Pert Araç Alımı',
      slug: 'pert-arac-alim-satim',
      icon: 'fas fa-exclamation-triangle',
      description:
        'Pert araç alan firmalar arasında öncü. Kasko çıkışlı pert araç alımında en iyi fiyat garantisi.',
      shortDescription: 'Kasko çıkışlı pert alımı',
      keywords: [
        'pert araç alan',
        'pert araç alan yerler',
        'pert araç alan firmalar',
        'pert aracımı satmak istiyorum',
        'pert oto alım satım',
      ],
      features: [
        'Kasko çıkışlı alım',
        'En yüksek fiyat',
        'Hızlı işlem',
        'Yasal süreç',
        'Anında ödeme',
      ],
      benefits: [
        'Karlı satış',
        'Güvenli işlem',
        'Profesyonel ekip',
        'Tam destek',
      ],
    },
    {
      id: 'hurda',
      title: 'Hurda Araç Alımı',
      slug: 'hurda-arac-alim-satim',
      icon: 'fas fa-recycle',
      description:
        'Hurda araç alan resmi belgeli firma. Hurda araç alımında çevre dostu ve yasal süreçler.',
      shortDescription: 'Resmi belgeli hurda alımı',
      keywords: [
        'hurda araç alan',
        'hurda araç alan yerler',
        'hurda araç alan firmalar',
        'hurda aracımı satmak istiyorum',
        'hurda oto alım satım',
      ],
      features: [
        'Resmi belgeli',
        'Çevre dostu',
        'Kilo bazlı değerleme',
        'Anında ödeme',
        'Ücretsiz taşıma',
      ],
      benefits: [
        'Yasal işlem',
        'En iyi fiyat',
        'Hızlı hizmet',
        'Tam destek',
      ],
    },
  ];
  
  export const getServiceBySlug = (slug: string): Service | undefined => {
    return services.find((service) => service.slug === slug);
  };
  
  export const getServiceById = (id: string): Service | undefined => {
    return services.find((service) => service.id === id);
  };