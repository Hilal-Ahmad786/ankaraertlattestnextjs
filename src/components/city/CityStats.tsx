'use client';

interface CityStatsProps {
    cityName: string;
}

export default function CityStats({ cityName }: CityStatsProps) {
    // Simulate some randomized but realistic stats based on city name length or hash
    // This is just to make them feel slightly different per city without a complex backend
    const baseCount = cityName.length * 150 + 1000;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
                <div className="text-3xl font-bold text-orange-500 mb-1">{baseCount}+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Mutlu Müşteri</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
                <div className="text-3xl font-bold text-blue-600 mb-1">30</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Dakikada Teklif</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
                <div className="text-3xl font-bold text-green-500 mb-1">%100</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Müşteri Memnuniyeti</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
                <div className="text-3xl font-bold text-purple-600 mb-1">7/24</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Kesintisiz Destek</div>
            </div>
        </div>
    );
}
