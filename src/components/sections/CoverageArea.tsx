export default function CoverageArea() {
    const cities = [
      'Ankara', 'İstanbul', 'İzmir', 'Bursa', 'Antalya', 'Adana',
      'Konya', 'Gaziantep', 'Mersin', 'Kayseri', 'Eskişehir', 'Diyarbakır',
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Hizmet Verdiğimiz Şehirler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Türkiye'nin her yerinde 7/24 hizmetinizdeyiz
            </p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {cities.map((city, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-orange-50 p-4 rounded-lg text-center hover:shadow-lg transition"
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