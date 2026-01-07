'use client';

interface CityContentProps {
    content: string;
    cityName: string;
}

export default function CityContent({ content, cityName }: CityContentProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <i className="fas fa-info-circle text-orange-500"></i>
                {cityName} Hasarlı Araç Alım Hizmeti
            </h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="leading-relaxed">
                    {content}
                </p>
                <p className="mt-4">
                    Ankara Pert olarak, <strong>{cityName}</strong> ve çevresindeki tüm ilçelerde, marka ve model fark etmeksizin hasarlı, kazalı, pert ve hurda araçlarınızı piyasa değerinin üzerinde fiyatlarla satın alıyoruz. Uzman ekibimizle hızlı ve güvenilir bir satış süreci sunuyoruz.
                </p>
            </div>
        </div>
    );
}
