'use client';

import { siteConfig } from '@/config/site';
import { City } from '@/types';
import { trackCTAClick, trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';

const phoneHref = `tel:${siteConfig.phone}`;
const waHref = `https://wa.me/${siteConfig.whatsapp}`;

/**
 * Full-width price band between sections. Tracking names are unchanged
 * ("city_sidebar") so existing GTM triggers keep working.
 */
export default function CitySidebar({ city, final = false }: { city: City; final?: boolean }) {
    const where = final ? 'city_final' : 'city_sidebar';
    const phone = () => { trackPhoneClick(where); trackCTAClick(final ? 'City final phone' : 'Sidebar Phone', final ? 'city_final' : 'city-sidebar'); };
    const whatsapp = () => { trackWhatsAppClick(where); trackCTAClick(final ? 'City final WhatsApp' : 'Sidebar WhatsApp', final ? 'city_final' : 'city-sidebar'); };
    return (
        <div className="cp-band cp-band--dark" role="region" aria-label={`${city.name} için fiyat alın`}>
            <div className="cp-wrap cp-price">
                {final ? (
                    <div>
                        <p className="cp-price-title">Aracınızı satmaya hazır olduğunuzda bize ulaşın</p>
                        <p className="cp-price-text">Başvurunuzu 7/24 telefon veya WhatsApp üzerinden alıyoruz.</p>
                        <a href={phoneHref} onClick={phone} className="cp-price-phone">{siteConfig.phoneDisplay}</a>
                    </div>
                ) : (
                    <div>
                        <p className="cp-price-title">{city.name}’deki aracınız için fiyat alın</p>
                        <p className="cp-price-text">Ekspertizden sonra 30 dakika içinde teklif. Çekici ve noter masrafları bize aittir.</p>
                    </div>
                )}
                <div className="cp-actions">
                    <a href={phoneHref} onClick={phone} className="cp-btn cp-btn--primary">Hemen Ara</a>
                    <a href={waHref} target="_blank" rel="noopener noreferrer" onClick={whatsapp} className="cp-btn cp-btn--wa">WhatsApp’tan Yaz</a>
                </div>
            </div>
        </div>
    );
}

/** Intro "Özet" box: plain facts plus the first call to action. */
export function CitySummaryBox({ city, districtCount }: { city: City; districtCount: number }) {
    const phone = () => { trackPhoneClick('city_summary'); trackCTAClick('City summary phone', 'city_summary'); };
    const whatsapp = () => { trackWhatsAppClick('city_summary'); trackCTAClick('City summary WhatsApp', 'city_summary'); };
    const rows: [string, string][] = [
        ['Bölge', `${city.region} · ${city.plateCode} plaka`],
        ['Hizmet verilen ilçe', `${districtCount} ilçe ve merkez`],
        ['Teklif', 'Ekspertizden sonra 30 dakika içinde'],
        ['Ödeme', 'Anlaşmada aynı gün, noter devriyle'],
        ['Çekici ve noter', 'Masrafı bize ait'],
    ];
    return (
        <aside className="cp-summary" aria-labelledby="cp-summary-title">
            <h2 id="cp-summary-title" className="cp-summary-title">Özet</h2>
            <dl>
                {rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
            <div className="cp-actions cp-actions--stack">
                <a href={phoneHref} onClick={phone} className="cp-btn cp-btn--primary">Hemen Ara</a>
                <a href={waHref} target="_blank" rel="noopener noreferrer" onClick={whatsapp} className="cp-btn cp-btn--ghost">WhatsApp’tan fotoğraf gönderin</a>
            </div>
        </aside>
    );
}
