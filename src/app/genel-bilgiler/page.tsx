import { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import CallToActionBanner from '@/components/sections/CallToActionBanner';
import FAQ from '@/components/sections/FAQ';
import { getAllFAQ } from '@/data/faq';
import { howToSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://ankarapert.com.tr';
const PAGE_URL = `${BASE_URL}/genel-bilgiler`;

export const metadata: Metadata = {
  title: 'Genel Bilgiler & SSS | Ankara PERT',
  description: 'Kazalı, hasarlı, pert ve hurda araç alımı hakkında sık sorulan sorular ve detaylı bilgiler. Ankara PERT ile nasıl çalışır?',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Genel Bilgiler & SSS | Ankara PERT',
    description: 'Kazalı, hasarlı, pert ve hurda araç alımı hakkında sık sorulan sorular ve detaylı bilgiler.',
    url: PAGE_URL,
    locale: 'tr_TR',
    type: 'website',
    siteName: 'Ankara PERT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genel Bilgiler & SSS | Ankara PERT',
    description: 'Kazalı, hasarlı, pert ve hurda araç alımı hakkında sık sorulan sorular.',
  },
};

export default function GenelBilgilerPage() {
  const allFAQs = getAllFAQ();

  const howToJsonLd = howToSchema(
    'Hasarlı veya Pert Aracınızı Ankara PERT\'e Nasıl Satarsınız?',
    [
      {
        name: 'Bize Ulaşın',
        text: 'Telefon veya WhatsApp üzerinden bize ulaşın. Aracınızın markasını, modelini, yılını ve hasarının durumunu bildirin. İlk değerlendirmeyi telefonla yaparız.',
      },
      {
        name: 'Ücretsiz Ekspertiz',
        text: 'Ekibimiz aracınızın bulunduğu yere ücretsiz gelir. Profesyonel ekspertiz yapılır, hasar raporu çıkarılır. Bu hizmet tamamen ücretsizdir.',
      },
      {
        name: 'Fiyat Teklifi Alın',
        text: 'Ekspertiz sonrası 30 dakika içinde size en iyi fiyat teklifini sunuyoruz. Teklifi beğenirseniz işleme geçiyoruz.',
      },
      {
        name: 'Noter İşlemi ve Ödeme',
        text: 'Noter huzurunda resmi devir işlemi yapılır. Tüm evraklar tamamlandıktan sonra anında nakit veya EFT ile ödeme alırsınız.',
      },
    ]
  );

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Ana Sayfa', url: BASE_URL },
    { name: 'Genel Bilgiler', url: PAGE_URL },
  ]);

  return (
    <div className="genel-bilgiler-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        title="Genel Bilgiler"
        subtitle="Araç alım satımı hakkında merak ettikleriniz"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Nasıl Çalışıyoruz?</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">1. İletişim</h3>
              <p className="text-lg">
                Telefon veya WhatsApp üzerinden bize ulaşın. Aracınızın markasını, modelini, yılını ve hasarının
                durumunu bildirin. İlk değerlendirmeyi telefonla yaparız.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">2. Ücretsiz Ekspertiz</h3>
              <p className="text-lg">
                Ekibimiz aracınızın bulunduğu yere gelir. Profesyonel ekspertiz yapılır, hasar raporu çıkarılır.
                Bu hizmet tamamen ücretsizdir.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">3. Fiyat Teklifi</h3>
              <p className="text-lg">
                Ekspertiz sonrası 30 dakika içinde size en iyi fiyat teklifini sunuyoruz. Teklifi beğenirseniz
                işleme geçiyoruz.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">4. Noter İşlemi & Ödeme</h3>
              <p className="text-lg">
                Noter huzurunda resmi devir işlemi yapılır. Tüm evraklar tamamlandıktan sonra anında nakit veya
                EFT ile ödeme alırsınız.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Hangi Araçları Alıyoruz?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="fas fa-car-crash text-orange-500 text-xl mt-1"></i>
                <span className="text-lg">
                  <strong><a href="/kazali-arac-alim-satim" className="text-orange-600 hover:underline">Kazalı Araçlar:</a></strong>{' '}
                  Trafik kazası geçirmiş, çarpma, devrilme gibi hasarı olan araçlar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-tools text-orange-500 text-xl mt-1"></i>
                <span className="text-lg">
                  <strong><a href="/hasarli-arac-alim-satim" className="text-orange-600 hover:underline">Hasarlı Araçlar:</a></strong>{' '}
                  Mekanik veya kaporta hasarı bulunan araçlar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-exclamation-triangle text-orange-500 text-xl mt-1"></i>
                <span className="text-lg">
                  <strong><a href="/pert-arac-alim-satim" className="text-orange-600 hover:underline">Pert Araçlar:</a></strong>{' '}
                  Sigorta şirketi tarafından pert raporu çıkmış araçlar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-recycle text-orange-500 text-xl mt-1"></i>
                <span className="text-lg">
                  <strong><a href="/hurda-arac-alim-satim" className="text-orange-600 hover:underline">Hurda Araçlar:</a></strong>{' '}
                  Kullanım ömrünü tamamlamış, hurda belgesi alacak araçlar.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <FAQ title="Sık Sorulan Sorular" items={allFAQs} />

      <CallToActionBanner
        title="Başka Sorunuz mu Var?"
        description="Hemen bizi arayın, tüm sorularınızı cevaplayalım!"
        buttonText="Hemen Arayın"
      />
    </div>
  );
}
