'use client';

interface CityTestimonialsProps {
    cityName: string;
}

export default function CityTestimonials({ cityName }: CityTestimonialsProps) {
    const reviews = [
        {
            name: "Ahmet Y.",
            role: "Müşteri",
            text: `${cityName} içinde aracımı satmak için çok yer gezdim, en iyi fiyatı burada buldum. 30 dakikada param hesabımdaydı.`,
            stars: 5
        },
        {
            name: "Mehmet K.",
            role: "Esnaf",
            text: `Kazalı ticari aracım için ${cityName} bölgesinde çekici bulmak zordu, arkadaşlar kendi çekicileriyle geldiler. Teşekkürler.`,
            stars: 5
        },
        {
            name: "Ayşe S.",
            role: "Öğretmen",
            text: `Güvenilirlik benim için önemliydi. Noter işlemleri şeffaf bir şekilde yapıldı. ${cityName} ekibine selamlar.`,
            stars: 5
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">{cityName} Müşteri Yorumları</h2>
                    <p className="text-gray-500">
                        {cityName} ve çevresinde yüzlerce mutlu araç sahibi aracını bize sattı.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-2xl relative">
                            <div className="text-orange-400 mb-4 text-sm">
                                {[...Array(review.stars)].map((_, i) => (
                                    <i key={i} className="fas fa-star mr-1"></i>
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6 leading-relaxed">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                                    <span className="text-xs text-gray-500 block">{review.role} - {cityName}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
