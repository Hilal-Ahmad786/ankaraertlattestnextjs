interface CityStatsProps {
    cityName: string;
}

/**
 * Service commitments — deliberately NOT invented metrics.
 * (Previously this rendered a customer count derived from the city name's
 * length plus a "%100 memnuniyet" figure; both were fabricated and have been
 * removed. Only claims the business actually controls are shown here.)
 */
export default function CityStats({ cityName }: CityStatsProps) {
    const commitments = [
        { value: '30 Dakika', label: 'İçinde Nakit Teklif', color: 'text-accent-ink' },
        { value: 'Aynı Gün', label: 'Anlaşmada Nakit Ödeme', color: 'text-brand' },
        { value: 'Çekici', label: 'Masrafı Bize Ait', color: 'text-accent-ink' },
        { value: 'Noter', label: 'Masrafı Bize Ait', color: 'text-brand' },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {commitments.map((item) => (
                <div
                    key={item.label}
                    className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition"
                >
                    <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.value}</div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                        {item.label}
                    </div>
                </div>
            ))}
            <p className="sr-only">
                {cityName} için sunulan hizmet taahhütleri.
            </p>
        </div>
    );
}
