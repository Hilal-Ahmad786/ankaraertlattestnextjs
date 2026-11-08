import type { CSSProperties } from 'react';

export default function TrustBadges({ cityPage = false }: { cityPage?: boolean }) {
    const badges = [
      {
        icon: 'ph-bold ph-shield-check',
        title: 'Güvenli İşlem',
        description: 'Noter onaylı yasal süreç',
      },
      {
        icon: 'ph-bold ph-medal',
        title: '15+ Yıl Tecrübe',
        description: 'Sektörde uzman ekip',
      },
      {
        icon: 'ph-bold ph-truck',
        title: 'Çekici ve Noter Masrafı Bize Ait',
        description: 'Aracınız bulunduğu yerden alınır',
      },
      {
        icon: 'ph-bold ph-hand-coins',
        title: 'En Yüksek Fiyat',
        description: 'Piyasa üstü teklif garantisi',
      },
    ];
  
    return (
      <section className="py-10 sm:py-14 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge, index) => (
              <div key={index} className={`text-center rounded-3xl border border-white/70 bg-white/45 p-6 shadow-glass backdrop-blur-2xl ${cityPage ? 'city-trust-card' : ''}`} data-city-reveal={cityPage ? '' : undefined} style={cityPage ? { '--city-item-index': index } as CSSProperties : undefined}>
                <div className="city-trust-icon inline-flex items-center justify-center w-16 h-16 bg-white/60 text-orange-500 rounded-2xl mb-3 shadow-glass-sm border border-white/70">
                  <i className={`${badge.icon} text-2xl`}></i>
                </div>
                <p className="font-bold text-gray-800 mb-1">{badge.title}</p>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
