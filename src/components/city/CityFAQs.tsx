import { faqPageSchema } from '@/lib/schema';

interface CityFAQsProps {
    cityName: string;
    faqs?: { question: string; answer: string }[];
}

export default function CityFAQs({ cityName, faqs: customFaqs }: CityFAQsProps) {
    const defaultFaqs = [
        {
            question: `${cityName} ilinde hangi araçları değerlendiriyorsunuz?`,
            answer: `Ankara PERT, ${cityName} için hasarlı, kazalı, pert, hurda ve motor arızalı araç başvurularını değerlendirir. Teklif aracın durumu incelendikten sonra oluşturulur.`
        },
        {
            question: `${cityName} bölgesinde ekspertiz nasıl planlanır?`,
            answer: `Aracınızın fotoğraflarını, marka ve model bilgisini, hasar durumunu ve konumunu paylaşabilirsiniz. İnceleme koşullarını ekibimizle görüşerek netleştirebilirsiniz.`
        },
        {
            question: `${cityName} dışından da araç alımı yapıyor musunuz?`,
            answer: `Evet, Ankara merkezimiz üzerinden Türkiye genelinden araç başvurularını değerlendiriyoruz.`
        },
        {
            question: `${cityName} noterlerinde satış ve ödeme nasıl yapılır?`,
            answer: `Evrak kontrolü ve teklif üzerinde anlaşma sonrasında noter devri planlanır. Ödeme, devir işlemiyle birlikte gerçekleştirilir; işlem süresi evrak ve noter koşullarına bağlıdır.`
        },
        {
            question: `Aracım ${cityName} içinde yolda kaldı, çekici planlayabilir misiniz?`,
            answer: `Aracın hareket durumu, konumu ve erişim koşulları değerlendirilerek teslim planı oluşturulur. Çekici koşullarını satın alma görüşmesi sırasında netleştirebilirsiniz.`
        },
        {
            question: `${cityName} bölgesinde motor arızalı, çekme belgeli veya yanık araç değerlendiriyor musunuz?`,
            answer: `Motor arızalı, şanzıman arızalı, çekme belgeli ve yanık araçların hasar ve evrak durumunu inceleyerek satın alma başvurularını değerlendiriyoruz.`
        },
        {
            question: `${cityName} hasarlı araç satışında hangi adımlar izlenir?`,
            answer: `Araç bilgileri ve hasar durumu incelenir, teklif paylaşılır. Anlaşma sağlanırsa teslim, noter devri ve devirle birlikte ödeme planlanır.`
        }
    ];
    // City-specific FAQs are the sole visible and structured-data source when supplied.
    const faqs = customFaqs?.length ? customFaqs : defaultFaqs;

    return (
        <section className="city-faq bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-8">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)).replace(/</g, '\\u003c') }} />
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <i className="fas fa-question-circle text-orange-500" aria-hidden="true" />
                {cityName} Hasarlı Araç Alımı SSS
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <details key={faq.question} open={index === 0} className="border border-gray-200 rounded-2xl overflow-hidden open:border-orange-200">
                        <summary className="flex items-center justify-between gap-4 min-h-12 p-4 cursor-pointer text-gray-800 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-600 focus-visible:-outline-offset-4">
                            <span>{faq.question}</span>
                            <i className="city-faq-chevron fas fa-chevron-down shrink-0 text-gray-500" aria-hidden="true" />
                        </summary>
                        <div className="p-4 text-gray-600 border-t border-gray-100 bg-gray-50/50 text-sm leading-relaxed">{faq.answer}</div>
                    </details>
                ))}
            </div>
        </section>
    );
}
