// lib/blog-posts.ts
import { siteConfig } from '../config/site';

export interface BlogPost {
    title: string;
    subtitle: string;
    category: string;
    date: string;
    author: string;
    content: string;
  }
  
  export const blogPosts: Record<string, BlogPost> = {
    'kazali-arac-satarken-dikkat-edilmesi-gerekenler': {
      title: 'Kazalı Araç Satarken Dikkat Edilmesi Gerekenler',
      subtitle: 'En iyi fiyatı almak için bilmeniz gerekenler',
      category: 'Kazalı Araç',
      date: '15 Ocak 2025',
      author: 'Ankara PERT',
      content: `
        <div class="prose max-w-none">
          <p class="text-xl text-gray-600 mb-8">
            Kazalı aracınızı satarken en yüksek değeri elde etmek için dikkat etmeniz gereken kritik noktalar var. Bu rehberde, uzman ekibimizin önerilerini bulacaksınız.
          </p>
  
          <h2>1. Aracın Gerçek Durumunu Belirleyin</h2>
          <p>
            İlk adım, aracınızın hasarının tam kapsamını anlamaktır. Profesyonel bir ekspertiz yaptırmak, hem sizin hem de potansiyel alıcıların gerçekçi bir değerlendirme yapmasını sağlar.
          </p>
          <ul>
            <li><strong>Motor hasarı:</strong> Motor bloğu, şanzıman ve diğer mekanik parçalardaki hasarları tespit edin</li>
            <li><strong>Kaporta hasarı:</strong> Görünür ve gizli kaporta hasarlarını belirleyin</li>
            <li><strong>Elektronik sistemler:</strong> Hava yastıkları, sensörler ve diğer sistemlerin durumunu kontrol edin</li>
          </ul>
  
          <h2>2. Piyasa Araştırması Yapın</h2>
          <p>
            Benzer durumdaki araçların piyasa fiyatlarını araştırın. Ancak unutmayın ki, kazalı araç fiyatları çok değişkendir ve her hasar durumu benzersizdir.
          </p>
  
          <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
            <p class="font-semibold text-orange-800 mb-2">💡 Uzman Tavsiyesi</p>
            <p class="text-orange-700">
              Birden fazla firmadan teklif alın. Ankara PERT olarak, her zaman piyasadaki en yüksek fiyatı sunmayı garanti ediyoruz. Tek bir teklif ile yetinmeyin!
            </p>
          </div>
  
          <h2>3. Doğru Zamanlama Önemlidir</h2>
          <p>
            Kazalı araç değeri zamanla düşebilir. Özellikle açık havada bekletilen hasarlı araçlarda korozyon ve ek hasarlar oluşabilir.
          </p>
          <ul>
            <li>Hasarlı aracınızı mümkün olan en kısa sürede satmayı düşünün</li>
            <li>Aracı kapalı ve güvenli bir yerde saklayın</li>
            <li>Sigorta işlemlerinizi hızlıca tamamlayın</li>
          </ul>
  
          <h2>4. Gerekli Evrakları Hazırlayın</h2>
          <p>Satış sürecini hızlandırmak için şu belgeleri hazır bulundurun:</p>
          <ul>
            <li>Araç ruhsatı</li>
            <li>Sigorta poliçesi</li>
            <li>Hasar raporu (varsa)</li>
            <li>Ekspertiz raporu</li>
            <li>Kimlik belgesi</li>
          </ul>
  
          <h2>5. Güvenilir Bir Alıcı Seçin</h2>
          <p>
            Kazalı araç satışında en önemli nokta, güvenilir ve deneyimli bir firma ile çalışmaktır. Ankara PERT olarak:
          </p>
          <ul>
            <li>15+ yıllık tecrübemizle güvenilir hizmet</li>
            <li>Noter onaylı yasal işlemler</li>
            <li>Anında nakit ödeme</li>
            <li>Ücretsiz çekici hizmeti</li>
            <li>7/24 müşteri desteği</li>
          </ul>
  
          <h2>Sonuç</h2>
          <p>
            Kazalı aracınızı satmak stresli bir süreç olabilir, ancak doğru bilgi ve güvenilir bir partner ile sorunsuz ilerleyebilir. Ankara PERT olarak, sürecin her adımında yanınızdayız.
          </p>
  
          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <p class="font-semibold text-blue-800 mb-2">📞 Hemen Teklif Alın</p>
            <p class="text-blue-700">
              Kazalı aracınız için en yüksek teklifi almak ister misiniz? Hemen bizi arayın: <strong>${siteConfig.phoneDisplay}</strong>
            </p>
          </div>
        </div>
      `,
    },
    'pert-raporu-nedir': {
      title: 'Pert Raporu Nedir? Ne İşe Yarar?',
      subtitle: 'Pert belgesi hakkında bilmeniz gereken her şey',
      category: 'Pert Araç',
      date: '10 Ocak 2025',
      author: 'Ankara PERT Ekibi',
      content: `
        <div class="prose max-w-none">
          <p class="text-xl text-gray-600 mb-8">
            Pert raporu, bir aracın ekonomik olarak onarılamaz durumda olduğunu belirten resmi bir belgedir. Bu rehberde, pert raporu sürecini detaylı olarak açıklıyoruz.
          </p>
  
          <h2>Pert Raporu Nedir?</h2>
          <p>
            Pert raporu, sigorta şirketinin bir aracın hasar görmesi sonucunda, tamir maliyetinin aracın piyasa değerinin %70'ini aştığını tespit etmesi durumunda düzenlenen bir belgedir.
          </p>
  
          <h2>Pert Raporu Ne Zaman Alınır?</h2>
          <ul>
            <li>Trafik kazası sonrası ağır hasar</li>
            <li>Yangın hasarı</li>
            <li>Su baskını</li>
            <li>Doğal afet hasarları</li>
          </ul>
  
          <h2>Pert Raporu Süreci</h2>
          <p>Pert raporu almak için izlenmesi gereken adımlar:</p>
          <ol>
            <li><strong>Hasar Tespiti:</strong> Sigorta eksperi aracı inceler</li>
            <li><strong>Değerlendirme:</strong> Tamir maliyeti ve araç değeri karşılaştırılır</li>
            <li><strong>Rapor Düzenleme:</strong> Pert kararı verilirse rapor hazırlanır</li>
            <li><strong>Trafik Tescil:</strong> Araç pert kaydı işlenir</li>
          </ol>
  
          <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
            <p class="font-semibold text-orange-800 mb-2">⚠️ Önemli Bilgi</p>
            <p class="text-orange-700">
              Pert raporlu araçlar trafik sigortası yaptıramaz ve trafiğe çıkamaz. Bu araçlar sadece hurda veya yedek parça olarak değerlendirilebilir.
            </p>
          </div>
  
          <h2>Pert Aracın Değeri</h2>
          <p>
            Pert raporlu bir araç, normal değerinin yaklaşık %10-30'u kadar değere sahiptir. Değer, aracın markası, modeli ve hasarın boyutuna göre değişir.
          </p>
  
          <h2>Ankara PERT Avantajları</h2>
          <ul>
            <li>Pert araçlar için en yüksek fiyat garantisi</li>
            <li>Hızlı değerlendirme ve anında ödeme</li>
            <li>Tüm evrak işlemleri bizden</li>
            <li>Ücretsiz araç çekimi</li>
            <li>Profesyonel danışmanlık</li>
          </ul>
  
          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <p class="font-semibold text-blue-800 mb-2">📞 Pert Aracınız İçin Teklif Alın</p>
            <p class="text-blue-700">
              Pert raporlu aracınız için anında değerlendirme: <strong>${siteConfig.phoneDisplay}</strong>
            </p>
          </div>
        </div>
      `,
    },
    'hurda-arac-teslim-sureci': {
      title: 'Hurda Araç Teslim Süreci: Adım Adım Rehber',
      subtitle: 'Hurda aracınızı nasıl teslim edersiniz?',
      category: 'Hurda Araç',
      date: '5 Ocak 2025',
      author: 'Ankara PERT Ekibi',
      content: `
        <div class="prose max-w-none">
          <p class="text-xl text-gray-600 mb-8">
            Hurda aracınızı teslim etmek karmaşık görünebilir, ancak doğru bilgi ile oldukça basit bir süreçtir. Bu rehberde, adım adım süreci açıklıyoruz.
          </p>
  
          <h2>Hurda Araç Nedir?</h2>
          <p>
            Hurda araç, ekonomik ömrünü tamamlamış, tamir edilmesi mümkün olmayan veya kullanılamaz hale gelmiş araçlardır. Bu araçlar yasal olarak hurdaya ayrılmalıdır.
          </p>
  
          <h2>Gerekli Evraklar</h2>
          <p>Hurda araç teslimi için ihtiyacınız olan belgeler:</p>
          <ul>
            <li>Araç ruhsatı (aslı)</li>
            <li>T.C. Kimlik kartı (araç sahibi)</li>
            <li>İkametgah belgesi</li>
            <li>Vekâletname (vekil ile işlem yapılıyorsa)</li>
          </ul>
  
          <h2>Teslim Süreci - Adım Adım</h2>
          
          <h3>1. Araç Değerlendirmesi</h3>
          <p>İlk olarak aracınızın değerlendirilmesi yapılır. Ankara PERT olarak:</p>
          <ul>
            <li>Araç fotoğrafları üzerinden ön değerlendirme</li>
            <li>Yerinde ekspertiz hizmeti</li>
            <li>Anında fiyat teklifi</li>
          </ul>
  
          <h3>2. Fiyat Anlaşması</h3>
          <p>
            Teklifimizi beğenirseniz, fiyat üzerinde anlaşırız. Ödeme şekli konusunda esneklik sağlıyoruz:
          </p>
          <ul>
            <li>Nakit ödeme</li>
            <li>Havale/EFT</li>
            <li>Anında ödeme garantisi</li>
          </ul>
  
          <h3>3. Evrak İşlemleri</h3>
          <p>Tüm yasal işlemlerinizi biz hallederiz:</p>
          <ul>
            <li>Noterden alım-satım işlemleri</li>
            <li>Trafik tescil kaydının silinmesi</li>
            <li>Hurdaya ayırma belgesi</li>
          </ul>
  
          <h3>4. Araç Teslimi</h3>
          <p>Aracınızı teslim etmek için:</p>
          <ul>
            <li>Ücretsiz çekici hizmeti ile aracınızı alırız</li>
            <li>Size uygun tarih ve saatte</li>
            <li>Evraklarınızı teslim alırız</li>
          </ul>
  
          <div class="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <p class="font-semibold text-green-800 mb-2">✅ Avantajlarımız</p>
            <ul class="text-green-700 list-disc ml-5">
              <li>Tüm işlemler bizden - sıfır zahmet</li>
              <li>Aynı gün ödeme</li>
              <li>Ücretsiz çekici</li>
              <li>En yüksek hurda fiyatı</li>
              <li>Yasal garanti</li>
            </ul>
          </div>
  
          <h2>Sıkça Sorulan Sorular</h2>
          
          <h3>Hurdaya ayırma zorunlu mu?</h3>
          <p>
            Evet, kullanılamaz hale gelen araçların yasal olarak hurdaya ayrılması gerekir. Aksi takdirde MTV ve trafik cezaları devam eder.
          </p>
  
          <h3>Ne kadar sürer?</h3>
          <p>
            Tüm süreç genellikle 1-3 iş günü içinde tamamlanır. Acil durumlar için aynı gün hizmet de sunabiliyoruz.
          </p>
  
          <h3>Motorlu araç vergisi ne olacak?</h3>
          <p>
            Hurda işlemi tamamlandığında MTV yükümlülüğünüz sona erer.
          </p>
  
          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <p class="font-semibold text-blue-800 mb-2">📞 Hemen Başlayın</p>
            <p class="text-blue-700">
              Hurda aracınız için en yüksek fiyatı almak ve sorunsuz bir süreç için: <strong>${siteConfig.phoneDisplay}</strong>
            </p>
          </div>
        </div>
      `,
    },
  };
  
  // Helper function to get all blog slugs
  export function getAllBlogSlugs(): string[] {
    return Object.keys(blogPosts);
  }
  
  // Helper function to get a single post
  export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts[slug];
  }