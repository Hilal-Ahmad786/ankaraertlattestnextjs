export default function TrustBadges() {
    const badges = [
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli İşlem',
        description: 'Noter onaylı yasal süreç',
      },
      {
        icon: 'fas fa-medal',
        title: '15+ Yıl Tecrübe',
        description: 'Sektörde uzman ekip',
      },
      {
        icon: 'fas fa-users',
        title: '50K+ Müşteri',
        description: 'Mutlu müşteri portföyü',
      },
      {
        icon: 'fas fa-hand-holding-usd',
        title: 'En Yüksek Fiyat',
        description: 'Piyasa üstü teklif garantisi',
      },
    ];
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-3 shadow-lg">
                  <i className={`${badge.icon} text-2xl`}></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{badge.title}</h3>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }