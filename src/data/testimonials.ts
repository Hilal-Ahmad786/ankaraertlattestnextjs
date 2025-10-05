export interface Testimonial {
    id: number;
    name: string;
    location: string;
    rating: number;
    comment: string;
    service: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ali Y.',
      location: 'Çankaya / Ankara',
      rating: 5,
      comment:
        "30 dakikada fiyat verdiler, noterde anında ödeme aldım. Ankara'da kazalı araç alan en güvenilir ekip!",
      service: 'kazali',
    },
    {
      id: 2,
      name: 'Zeynep K.',
      location: 'Kadıköy / İstanbul',
      rating: 5,
      comment:
        'Pert aracımı İstanbul\'dan sattım; çekici ücreti yok, 24 saat içinde hesabıma EFT geldi.',
      service: 'pert',
    },
    {
      id: 3,
      name: 'Serkan D.',
      location: 'Yenişehir / Mersin',
      rating: 5,
      comment:
        'Hasarlı arabamı Mersin\'den sattım, rakipsiz fiyat verdiler. Tek kelimeyle süper hizmet!',
      service: 'hasarli',
    },
    {
      id: 4,
      name: 'Mehmet A.',
      location: 'Konak / İzmir',
      rating: 5,
      comment:
        'Hurda aracım için en iyi fiyatı verdiler. İşlemler çok hızlı oldu, teşekkürler!',
      service: 'hurda',
    },
    {
      id: 5,
      name: 'Ayşe S.',
      location: 'Çankaya / Ankara',
      rating: 5,
      comment:
        'Profesyonel ekip, güler yüzlü hizmet. Kazalı aracımı çok iyi fiyata sattım.',
      service: 'kazali',
    },
    {
      id: 6,
      name: 'Burak T.',
      location: 'Maltepe / İstanbul',
      rating: 5,
      comment:
        'Hasarlı aracım için birçok yer gezdim, en iyi teklifi Ankara PERT verdi. Memnun kaldım.',
      service: 'hasarli',
    },
  ];
  
  export const getTestimonialsByService = (service: string): Testimonial[] => {
    return testimonials.filter((t) => t.service === service);
  };
  
  export const getRandomTestimonials = (count: number = 3): Testimonial[] => {
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };