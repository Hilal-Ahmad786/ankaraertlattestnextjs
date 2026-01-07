'use client';

import { City } from '@/types';

interface CityRecentPurchasesProps {
    city: City;
}

export default function CityRecentPurchases({ city }: CityRecentPurchasesProps) {
    // Use city districts to make it feel local. Fallback to generic if districts are empty (unlikely).
    const districts = city.districts.length > 0 ? city.districts : ['Merkez', 'Sanayi', 'İlçe'];

    // Generate some realistic-looking "recent" transactions
    const transactions = [
        {
            car: "2018 Fiat Egea",
            district: districts[0 % districts.length],
            status: "Önden Kazalı",
            time: "2 saat önce"
        },
        {
            car: "2015 Renault Clio",
            district: districts[1 % districts.length],
            status: "Ağır Hasarlı",
            time: "Dün"
        },
        {
            car: "2020 Ford Focus",
            district: districts[2 % districts.length],
            status: "Pert Kayıtlı",
            time: "Dün"
        },
        {
            car: "2012 Volkswagen Polo",
            district: districts[3 % districts.length],
            status: "Motor Arızalı",
            time: "2 gün önce"
        }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <i className="fas fa-history text-blue-500"></i>
                {city.name} Bölgesinde Son Alınan Araçlar
            </h2>
            <div className="space-y-4">
                {transactions.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-100 transition">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm border border-gray-100">
                                <i className="fas fa-car-crash"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm">{item.car}</h4>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <span><i className="fas fa-map-marker-alt mr-1"></i>{item.district}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span>{item.status}</span>
                                </div>
                            </div>
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                            {item.time} alındı
                        </span>
                    </div>
                ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500">
                    Siz de {city.name} ve çevresindeki hasarlı aracınızı hemen satın.
                </p>
            </div>
        </div>
    );
}
