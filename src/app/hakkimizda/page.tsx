import { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import CallToActionBanner from '@/components/sections/CallToActionBanner';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Hakkımızda | Ankara PERT',
  description: 'Ankara PERT - Türkiye\'nin en güvenilir kazalı, hasarlı, pert ve hurda araç alım merkezi.',
};

export default function HakkimizdaPage() {
  return (
    <div className="hakkimizda-page">
      <PageHero
        title="Hakkımızda"
        subtitle="Türkiye'nin En Güvenilir Araç Alım Merkezi"
      />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Biz Kimiz?</h2>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Ankara PERT</strong>, yıllardır Türkiye genelinde kazalı, hasarlı, pert ve hurda araç alımı konusunda 
              güvenilir hizmet veren lider firmadır. Müşteri memnuniyetini ön planda tutarak, adil fiyatlandırma ve hızlı 
              işlem prensipleriyle sektörde öncü konumdayız.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Misyonumuz</h3>
            <p className="text-lg leading-relaxed mb-6">
              Araç sahiplerine en yüksek değeri sunarak, hızlı ve güvenilir bir şekilde kazalı, hasarlı, pert ve hurda 
              araçlarını nakde çevirmelerine yardımcı olmak. Tüm süreçleri şeffaf, yasal ve müşteri odaklı yönetmek.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Vizyonumuz</h3>
            <p className="text-lg leading-relaxed mb-6">
              Türkiye'nin her köşesinde, araç alım satımında ilk tercih edilen, en güvenilir ve profesyonel hizmet 
              sağlayıcısı olmak.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Neden Bizi Tercih Etmelisiniz?</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-orange-500 text-xl mt-1"></i>
                <span className="text-lg">
                  <strong>15+ Yıllık Tecrübe:</strong> Sektördeki uzun yılların deneyimi ile güvenilir hizmet.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-orange-500 text-xl mt-1"></i>
                <span className="text-lg">
                  <strong>En Yüksek Fiyat Garantisi:</strong> Piyasa araştırması ile en iyi teklifi sunuyoruz.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-orange-500 text-xl mt-1"></i>
                <span className="text-lg">
                  <strong>Ücretsiz Ekspertiz:</strong> Aracınızın değerini yerinde ücretsiz belirliyoruz.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-orange-500 text-xl mt-1"></i>
                <span className="text-lg">
                  <strong>Hızlı İşlem:</strong> 24 saat içinde tüm süreçleri tamamlıyoruz.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-orange-500 text-xl mt-1"></i>
                <span className="text-lg">
                  <strong>Yasal ve Güvenli:</strong> Noter onaylı, resmi evrak ile güvenli işlem.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-orange-500 text-xl mt-1"></i>
                <span className="text-lg">
                  <strong>7/24 Destek:</strong> Her zaman ulaşabileceğiniz müşteri hizmetleri.
                </span>
              </li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
              <p className="text-lg font-semibold text-primary mb-2">
                📞 Hemen Bizi Arayın!
              </p>
              <p className="text-lg">
                Aracınızın değerini öğrenmek ve en iyi teklifi almak için{' '}
                <a href={`tel:${siteConfig.phone}`} className="text-orange-500 font-bold hover:underline">
                  {siteConfig.phoneDisplay}
                </a>{' '}
                numaralı telefondan bizi arayabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-700">Yıllık Tecrübe</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">50K+</div>
              <div className="text-gray-700">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-700">Destek Hizmeti</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">%100</div>
              <div className="text-gray-700">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <CallToActionBanner
        title="Hemen Bizimle İletişime Geçin"
        description="Aracınızı en iyi fiyata satmak için şimdi arayın!"
      />
    </div>
  );
}