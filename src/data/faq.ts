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
          "Merkezimiz Ankara'dadır ve Türkiye genelinde hizmet veriyoruz. Başvurunuzu 7/24 telefon veya WhatsApp üzerinden alıyor, ekspertiz ve çekiciyi aracınızın bulunduğu yere göre planlıyoruz.",
        category: 'genel',
      },
      {
        question: 'Kazalı araç alan firmalar hangileridir?',
        answer:
          'Ankara PERT, hasarlı ve kazalı araçları aracı olmadan doğrudan satın alan bir firmadır. Merkezimiz Ankara\'dadır; İstanbul, İzmir ve Bursa başta olmak üzere birçok ilde aracınızı bulunduğu yerde değerlendiriyoruz.',
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
      {
        question: 'Motor veya şanzıman arızası olan kazalı araçları alıyor musunuz?',
        answer:
          'Evet, kaza hasarının yanı sıra motor ve şanzıman arızası olan araçları da satın alıyoruz; hasar türü fark etmeksizin ekspertiz sonrası teklif veriyoruz.',
        category: 'kapsam',
      },
      {
        question: 'Ağır hasarlı veya yanmış kazalı araç alıyor musunuz?',
        answer:
          'Evet, ağır hasarlı, tavan hasarlı ve yanık kazalı araçları da değerlendiriyoruz; aracın durumu ne olursa olsun teklif sunuyoruz.',
        category: 'kapsam',
      },
      {
        question: 'Kazalı araçlar hangi kanaldan en iyi fiyata satılır?',
        answer:
          'En güvenilir yol, ekspertiz raporuyla aracın gerçek değerini bilerek doğrudan alıcı firmaya satmaktır; Ankara PERT olarak ücretsiz ekspertiz ve anında ödeme ile bu süreci tek adımda tamamlıyoruz.',
        category: 'genel',
      },
    ],
    hasarli: [
      {
        question: 'Hasarlı araç alan yerler nerede bulunur?',
        answer:
          "Merkezimiz Ankara'dadır ve Türkiye genelinde hizmet veriyoruz. Başvurunuzu 7/24 telefon veya WhatsApp üzerinden alıyor, ekspertiz ve çekiciyi aracınızın bulunduğu yere göre planlıyoruz.",
        category: 'genel',
      },
      {
        question: 'Hasarlı araç alan firmalar hangileridir?',
        answer:
          'Ankara PERT, hasarlı ve kazalı araçları aracı olmadan doğrudan satın alan bir firmadır. Merkezimiz Ankara\'dadır; İstanbul, İzmir ve Bursa başta olmak üzere birçok ilde aracınızı bulunduğu yerde değerlendiriyoruz.',
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
      {
        question: 'Motor arızalı, şanzıman arızalı veya tavan hasarlı araçları da alıyor musunuz?',
        answer:
          'Evet, mekanik arızadan kaza hasarına kadar her türlü hasarlı aracı değerlendiriyoruz; motor, şanzıman, tavan ve yanık hasarlı araçlar da kapsamımızdadır.',
        category: 'kapsam',
      },
      {
        question: 'Çekme belgeli veya ruhsatsız hasarlı araç alıyor musunuz?',
        answer:
          'Evet, çekme belgeli araçları ve eksik evraklı hasarlı araçları da satın alıyoruz; evrak sürecinde noter işlemlerinde size destek oluyoruz.',
        category: 'kapsam',
      },
      {
        question: 'Hasarlı araçlar nereden satılır, en güvenilir yol nedir?',
        answer:
          'Hasarlı araçlar için en güvenilir satış yolu, ekspertiz raporuyla değerini bilerek doğrudan alıcı firmaya satmaktır; ücretsiz ekspertiz ve anında ödeme ile bu süreci tek adımda tamamlıyoruz.',
        category: 'genel',
      },
    ],
    pert: [
      {
        question: 'Pert araç alan yerler nerede bulunur?',
        answer:
          "Merkezimiz Ankara'dadır ve Türkiye genelinde hizmet veriyoruz. Başvurunuzu 7/24 telefon veya WhatsApp üzerinden alıyor, ekspertiz ve çekiciyi aracınızın bulunduğu yere göre planlıyoruz.",
        category: 'genel',
      },
      {
        question: 'Pert araç alan firmalar hangileridir?',
        answer:
          'Ankara PERT, hasarlı ve kazalı araçları aracı olmadan doğrudan satın alan bir firmadır. Merkezimiz Ankara\'dadır; İstanbul, İzmir ve Bursa başta olmak üzere birçok ilde aracınızı bulunduğu yerde değerlendiriyoruz.',
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
      {
        question: 'Sigorta şirketinden pert kayıtlı araç alıyor musunuz?',
        answer:
          'Evet, sigorta şirketleri tarafından pert kayıtlı ilan edilen araçları da satın alıyoruz; pert oranı ve hasar raporu ne olursa olsun teklif veriyoruz.',
        category: 'kapsam',
      },
      {
        question: 'Motor arızalı veya yanık pert araç alıyor musunuz?',
        answer:
          'Evet, motor arızalı, şanzıman arızalı ve yanık pert araçları da değerlendiriyoruz.',
        category: 'kapsam',
      },
      {
        question: 'Pert araçlar nasıl değerlendirilir, fiyatı neye göre belirlenir?',
        answer:
          'Pert araç fiyatı; markaya, modele, hasar oranına ve piyasa parça değerine göre belirlenir. Ekspertiz sonrası size şeffaf bir teklif sunuyoruz.',
        category: 'genel',
      },
    ],
    hurda: [
      {
        question: 'Hurda araç alan yerler nerede bulunur?',
        answer:
          "Merkezimiz Ankara'dadır ve Türkiye genelinde hizmet veriyoruz. Başvurunuzu 7/24 telefon veya WhatsApp üzerinden alıyor, ekspertiz ve çekiciyi aracınızın bulunduğu yere göre planlıyoruz.",
        category: 'genel',
      },
      {
        question: 'Hurda araç alan firmalar hangileridir?',
        answer:
          'Ankara PERT, hasarlı ve kazalı araçları aracı olmadan doğrudan satın alan bir firmadır. Merkezimiz Ankara\'dadır; İstanbul, İzmir ve Bursa başta olmak üzere birçok ilde aracınızı bulunduğu yerde değerlendiriyoruz.',
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
      {
        question: 'Çekme belgeli hurda araç alıyor musunuz?',
        answer:
          'Evet, çekme belgeli, ruhsatsız veya hurdaya ayrılmış araçları resmi belgeli olarak satın alıyor, işlemlerinizi noterde tamamlıyoruz.',
        category: 'kapsam',
      },
      {
        question: 'Yanmış veya ağır hasarlı hurda araç alıyor musunuz?',
        answer:
          'Evet, yanık, ağır hasarlı ve yürümez durumdaki hurda araçları da değerlendiriyoruz.',
        category: 'kapsam',
      },
      {
        question: 'Hurda araçlar kilogram üzerinden mi, araç değeri üzerinden mi alınır?',
        answer:
          'Hem hurda metal değeri hem de aracın marka/model/parça değeri birlikte değerlendirilir; bu nedenle yalnızca kilogram fiyatına göre değil, aracın tam durumuna göre teklif veriyoruz.',
        category: 'genel',
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
          "Türkiye genelinde hizmet veriyoruz; merkezimiz Ankara'dadır. Başvurunuzu 7/24 alıyoruz; ekspertiz randevusu aracınızın bulunduğu ile ve adrese göre sizinle birlikte planlanır.",
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