export default function CoverageArea() {
    const cities = [
      'Ankara', 'İstanbul', 'İzmir', 'Bursa', 'Antalya', 'Adana',
      'Konya', 'Gaziantep', 'Mersin', 'Kayseri', 'Eskişehir', 'Diyarbakır',
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Hizmet Verdiğimiz Şehirler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Türkiye'nin her yerinde 7/24 hizmetinizdeyiz
            </p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto rounded-[2rem] border border-white/70 bg-white/40 p-5 shadow-glass backdrop-blur-2xl">
            {cities.map((city, index) => (
              <div
                key={index}
                className="bg-white/45 p-4 rounded-2xl text-center hover:shadow-lg transition border border-white/60"
              >
                <i className="fas fa-map-marker-alt text-orange-500 text-xl mb-2"></i>
                <p className="font-semibold text-gray-800">{city}</p>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-8">
            <p className="text-gray-600">
              + Türkiye'nin tüm illeri ve ilçeleri
            </p>
          </div>
        </div>
      </section>
    );
  }
