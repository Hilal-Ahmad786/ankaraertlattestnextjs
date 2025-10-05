export interface FAQItem {
    question: string;
    answer: string;
    category?: string;
  }
  
  export const faqData: Record<string, FAQItem[]> = {
    kazali: [
      {
        question: 'Kazalı araç alan yerler nerede bulunur?',
        answer:
          "Türkiye'nin her büyük şehrinde ve ilçesinde hizmet veriyoruz; 7/24 şube ve saha ekibimizle yanınızdayız.",
        category: 'genel',
      },
      {
        question: 'Kazalı araç alan firmalar hangileridir?',
        answer:
          'Ankara PERT başta olmak üzere, İstanbul, İzmir, Bursa gibi birçok ilde onaylı ekspertiz-ekiplerimiz hizmetinizde.',
        category: 'genel',
      },
      {
        question: '"Kazalı aracımı satmak istiyorum" ne yapmalıyım?',
        answer:
          'Hemen WhatsApp ile fotoğraf gönderin veya çağrı merkezimizi arayın; 30 dakika içinde teklif alırsınız.',
        category: 'islem',
      },
      {
        question: 'Kazalı oto alım satım nasıl yapılıyor?',
        answer:
          'Noter onaylı süreçle ekspertiz→teklif→noter→ödeme adımlarını izliyoruz; tüm evrak ve çekici ücretsiz.',
        category: 'islem',
      },
      {
        question: 'Kazalı araç alanlar nasıl çalışır?',
        answer:
          'Ekspertiz, fiyat teklif ve noter işlemlerini tek elden yönetiyor, anında nakit veya EFT yapıyoruz.',
        category: 'islem',
      },
    ],
    hasarli: [
      {
        question: 'Hasarlı araç alan yerler nerede bulunur?',
        answer:
          "Türkiye'nin her büyük şehrinde ve ilçesinde hizmet veriyoruz; 7/24 şube ve saha ekibimizle yanınızdayız.",
        category: 'genel',
      },
      {
        question: 'Hasarlı araç alan firmalar hangileridir?',
        answer:
          'Ankara PERT başta olmak üzere, İstanbul, İzmir, Bursa gibi birçok ilde onaylı ekspertiz-ekiplerimiz hizmetinizde.',
        category: 'genel',
      },
      {
        question: '"Hasarlı aracımı satmak istiyorum" ne yapmalıyım?',
        answer:
          'Hemen WhatsApp ile fotoğraf gönderin veya çağrı merkezimizi arayın; 30 dakika içinde teklif alırsınız.',
        category: 'islem',
      },
      {
        question: 'Hasarlı oto alım satım nasıl yapılıyor?',
        answer:
          'Noter onaylı süreçle ekspertiz→teklif→noter→ödeme adımlarını izliyoruz; tüm evrak ve çekici ücretsiz.',
        category: 'islem',
      },
    ],
    pert: [
      {
        question: 'Pert araç alan yerler nerede bulunur?',
        answer:
          "Türkiye'nin her büyük şehrinde ve ilçesinde hizmet veriyoruz; 7/24 şube ve saha ekibimizle yanınızdayız.",
        category: 'genel',
      },
      {
        question: 'Pert araç alan firmalar hangileridir?',
        answer:
          'Ankara PERT başta olmak üzere, İstanbul, İzmir, Bursa gibi birçok ilde onaylı ekspertiz-ekiplerimiz hizmetinizde.',
        category: 'genel',
      },
      {
        question: '"Pert aracımı satmak istiyorum" ne yapmalıyım?',
        answer:
          'Hemen WhatsApp ile fotoğraf gönderin veya çağrı merkezimizi arayın; 30 dakika içinde teklif alırsınız.',
        category: 'islem',
      },
      {
        question: 'Pert oto alım satım nasıl yapılıyor?',
        answer:
          'Noter onaylı süreçle ekspertiz→teklif→noter→ödeme adımlarını izliyoruz; tüm evrak ve çekici ücretsiz.',
        category: 'islem',
      },
    ],
    hurda: [
      {
        question: 'Hurda araç alan yerler nerede bulunur?',
        answer:
          "Türkiye'nin her büyük şehrinde ve ilçesinde hizmet veriyoruz; 7/24 şube ve saha ekibimizle yanınızdayız.",
        category: 'genel',
      },
      {
        question: 'Hurda araç alan firmalar hangileridir?',
        answer:
          'Ankara PERT başta olmak üzere, İstanbul, İzmir, Bursa gibi birçok ilde onaylı ekspertiz-ekiplerimiz hizmetinizde.',
        category: 'genel',
      },
      {
        question: '"Hurda aracımı satmak istiyorum" ne yapmalıyım?',
        answer:
          'Hemen WhatsApp ile fotoğraf gönderin veya çağrı merkezimizi arayın; 30 dakika içinde teklif alırsınız.',
        category: 'islem',
      },
      {
        question: 'Hurda oto alım satım nasıl yapılıyor?',
        answer:
          'Noter onaylı süreçle ekspertiz→teklif→noter→ödeme adımlarını izliyoruz; tüm evrak ve çekici ücretsiz.',
        category: 'islem',
      },
    ],
    genel: [
      {
        question: 'Ücretsiz ekspertiz hizmeti nedir?',
        answer:
          'Aracınızın bulunduğu yere gelerek veya noterhanede KVKK ve sigorta mevzuatına uygun olarak ücretsiz ekspertiz yapıyoruz.',
        category: 'hizmet',
      },
      {
        question: 'Çekici hizmeti ücretli mi?',
        answer:
          'Hayır, aracınızı bulunduğu yerden almak için çekici hizmetimiz tamamen ücretsizdir.',
        category: 'hizmet',
      },
      {
        question: 'Ödeme nasıl yapılıyor?',
        answer:
          'Noter huzurunda devir işlemi tamamlandıktan sonra anında nakit veya EFT ile ödeme yapıyoruz.',
        category: 'odeme',
      },
      {
        question: 'Hangi şehirlerde hizmet veriyorsunuz?',
        answer:
          "Türkiye'nin tüm şehirlerinde 7/24 hizmet veriyoruz. Size en yakın ekibimiz randevunuz için iletişime geçecektir.",
        category: 'hizmet',
      },
    ],
  };
  
  export const getFAQByCategory = (category: string): FAQItem[] => {
    return faqData[category] || [];
  };
  
  export const getAllFAQ = (): FAQItem[] => {
    return Object.values(faqData).flat();
  };