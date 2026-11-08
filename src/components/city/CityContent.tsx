import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { CityDamageRow } from '@/data/city-content';
import CityDamageTable from '@/components/city/CityDamageTable';
import CitySellChecklist from '@/components/city/CitySellChecklist';
import CityExampleCase from '@/components/city/CityExampleCase';
import { CityRiskMotif } from '@/components/city/CityMotifs';

interface CityContentProps {
    content: string;
    cityName: string;
    citySlug?: string;
    body?: string[];
    localPoints?: string[];
    damageTable?: CityDamageRow[];
    cityChecklistItem?: string;
    exampleCase?: string;
    seasonNote?: string;
    nearbyNote?: { text: string; citySlugs: [string, string] };
    nearbyCityLinks?: { name: string; slug: string }[];
}

export default function CityContent({
    content, cityName, citySlug, body, localPoints, damageTable, cityChecklistItem,
    exampleCase, seasonNote, nearbyNote, nearbyCityLinks = [],
}: CityContentProps) {
    const paragraphs = body?.length ? body : [content];

    return (
        <section className="city-content-card bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <i className="fas fa-info-circle text-orange-500" aria-hidden="true"></i>
                {cityName} Hasarlı Araç Alım Hizmeti
            </h2>
            <div className={citySlug ? 'city-content-intro-grid' : undefined}>
                <div className="prose prose-lg text-gray-600 max-w-none">
                    {paragraphs.map((paragraph, i) => (
                        <p key={i} className={i === 0 ? 'leading-relaxed' : 'mt-4 leading-relaxed'}>{paragraph}</p>
                    ))}
                    {!body?.length && (
                        <p className="mt-4">
                            Ankara Pert olarak, <strong>{cityName}</strong> ve çevresindeki tüm ilçelerde, marka ve model fark etmeksizin hasarlı, kazalı, pert ve hurda araçlarınızı değerlendiriyoruz.
                        </p>
                    )}
                    {seasonNote && <aside className="city-season-note"><strong>Mevsime göre dikkat:</strong> {seasonNote}</aside>}
                </div>
                {citySlug && <CityRiskMotif slug={citySlug} />}
            </div>

            {localPoints && localPoints.length > 0 && (
                damageTable ? (
                    <ul className="city-local-checklist mt-8 grid gap-3 sm:grid-cols-2">
                        {localPoints.map((point, index) => (
                            <li key={point} data-city-reveal style={{ '--city-item-index': index } as CSSProperties}>
                                <span className="city-check-draw" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="m4 10 4 4 8-9" /></svg></span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                        {localPoints.map((point) => <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                            <i className="fas fa-check-circle text-orange-500 mt-1 shrink-0" aria-hidden="true"></i>{point}
                        </li>)}
                    </ul>
                )
            )}

            {damageTable?.length ? <CityDamageTable cityName={cityName} rows={damageTable} /> : null}
            {damageTable?.length ? <CitySellChecklist cityItem={cityChecklistItem} /> : null}
            {exampleCase && <CityExampleCase text={exampleCase} />}

            {nearbyNote && nearbyCityLinks.length === 2 && (
                <p className="city-nearby-note" data-city-reveal>
                    {nearbyNote.text}{' '}
                    {nearbyCityLinks.map((item, index) => <span key={item.slug}>
                        {index === 1 ? ' ve ' : ' '}
                        <Link href={`/sehirler/${item.slug}`}>{item.name}</Link>
                    </span>)}.
                </p>
            )}
        </section>
    );
}
