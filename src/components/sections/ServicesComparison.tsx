import Link from 'next/link';

export default function ServicesComparison() {
  const services = [
    {
      title: 'Kazalı Araç',
      icon: 'fas fa-car-crash',
      description: 'Kaza geçirmiş tüm araçlar',
      features: ['Çarpma hasarı', 'Devrilme', 'Ön/Arka hasar'],
      link: '/kazali-arac-alim-satim',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Hasarlı Araç',
      icon: 'fas fa-tools',
      description: 'Mekanik/Kaporta hasarlı',
      features: ['Motor arızası', 'Şanzıman', 'Kaporta'],
      link: '/hasarli-arac-alim-satim',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Pert Araç',
      icon: 'fas fa-exclamation-triangle',
      description: 'Sigorta pert raporlu',
      features: ['Kasko çıkışlı', 'Pert belgeli', 'Yasal süreç'],
      link: '/pert-arac-alim-satim',
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Hurda Araç',
      icon: 'fas fa-recycle',
      description: 'Kullanım ömrü bitmiş',
      features: ['Hurda belgesi', 'Kilo bazlı', 'Çevre dostu'],
      link: '/hurda-arac-alim-satim',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hangi Araçları Alıyoruz?
          </h2>
          <p className="text-lg text-gray-600">
            Her türlü araç için en iyi fiyat teklifi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all p-6 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} text-white rounded-full mb-4 group-hover:scale-110 transition`}>
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                    <i className="fas fa-check text-green-500 text-xs"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-orange-500 font-semibold text-sm group-hover:text-orange-600">
                Detaylı Bilgi →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}