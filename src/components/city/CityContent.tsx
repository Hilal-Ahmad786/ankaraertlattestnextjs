interface CityContentProps {
    content: string;
    cityName: string;
    /** Hand-written paragraphs for this city; falls back to `content`. */
    body?: string[];
    /** Four locally specific bullets. */
    localPoints?: string[];
}

export default function CityContent({ content, cityName, body, localPoints }: CityContentProps) {
    // The second paragraph used to be identical on all 30 city pages. When
    // written content exists we render that instead of the shared boilerplate.
    const paragraphs = body?.length ? body : [content];

    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <i className="fas fa-info-circle text-orange-500"></i>
                {cityName} Hasarlı Araç Alım Hizmeti
            </h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
                {paragraphs.map((paragraph, i) => (
                    <p key={i} className={i === 0 ? "leading-relaxed" : "mt-4 leading-relaxed"}>
                        {paragraph}
                    </p>
                ))}
                {!body?.length && (
                    <p className="mt-4">
                        Ankara Pert olarak, <strong>{cityName}</strong> ve çevresindeki tüm ilçelerde, marka ve model fark etmeksizin hasarlı, kazalı, pert ve hurda araçlarınızı değerinde satın alıyoruz.
                    </p>
                )}
            </div>

            {localPoints && localPoints.length > 0 && (
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {localPoints.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                            <i className="fas fa-check-circle text-orange-500 mt-1 shrink-0" aria-hidden></i>
                            {point}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
