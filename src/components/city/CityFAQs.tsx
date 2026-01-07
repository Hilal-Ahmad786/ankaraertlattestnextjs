'use client';

import { useState } from 'react';

interface CityFAQsProps {
    cityName: string;
}

export default function CityFAQs({ cityName }: CityFAQsProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: `${cityName} ilinde hangi araçları satın alıyorsunuz?`,
            answer: `Ankara Pert olarak ${cityName} genelinde marka ve model fark etmeksizin her türlü hasarlı, kazalı, pert, hurda ve motor arızalı aracı değerinde satın alıyoruz.`
        },
        {
            question: `${cityName} bölgesinde ekspertiz ücretli mi?`,
            answer: `Hayır, ${cityName} ve tüm ilçelerinde sunduğumuz ekspertiz hizmeti tamamen ücretsizdir. Uzman ekibimiz aracınızın bulunduğu yere gelerek inceleme yapar.`
        },
        {
            question: `${cityName} dışından da araç alımı yapıyor musunuz?`,
            answer: `Evet, ${cityName} merkezli operasyonumuzun yanı sıra çevre illerden ve Türkiye'nin 81 ilinden araç alımı yapmaktayız.`
        },
        {
            question: `${cityName} noterlerinde satış işlemi ne kadar sürer?`,
            answer: `Evraklarınız tam ise ${cityName} noterlerinde satış işlemi ortalama 15-20 dakika sürmektedir. Satış anında ödemenizi banka havalesi veya nakit olarak alırsınız.`
        },
        {
            question: `Aracım ${cityName} içinde yolda kaldı, çekici hizmetiniz var mı?`,
            answer: `Evet, ${cityName} sınırları içerisindeki araçlarınızı kendi çekicilerimizle ücretsiz olarak teslim alıyoruz. Sizden ek bir nakliye ücreti talep etmiyoruz.`
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <i className="fas fa-question-circle text-orange-500"></i>
                {cityName} Hasarlı Araç Alımı SSS
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-orange-200' : 'hover:border-orange-200'}`}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-4 text-left bg-white focus:outline-none"
                        >
                            <span className={`font-semibold ${openIndex === index ? 'text-orange-600' : 'text-gray-700'}`}>
                                {faq.question}
                            </span>
                            <i className={`fas fa-chevron-down text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-orange-500' : ''}`}></i>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="p-4 pt-0 text-gray-600 border-t border-gray-100 bg-gray-50/50 text-sm leading-relaxed">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
