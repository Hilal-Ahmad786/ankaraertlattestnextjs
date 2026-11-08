'use client';

import { siteConfig } from '@/config/site';
import { trackCTAClick, trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';

type Variant = 'photo' | 'tow' | 'question';

/**
 * One consistent inline CTA strip used between city sections. Copy repeats
 * only existing commitments; each variant keeps its own tracking location.
 */
export default function CityCtaBanner({ variant, cityName }: { variant: Variant; cityName: string }) {
    const location = `city_${variant}_banner`;
    const phone = () => { trackPhoneClick(location); trackCTAClick(`City ${variant} banner phone`, location); };
    const whatsapp = () => { trackWhatsAppClick(location); trackCTAClick(`City ${variant} banner WhatsApp`, location); };
    const copy = {
        photo: ['Fotoğraflarla ön değerlendirme', 'Hasarlı bölgelerin, gösterge panelinin ve ruhsatın fotoğraflarını WhatsApp’tan gönderin. Kesin teklif ekspertizden sonra verilir.', 'Fotoğraf gönder'],
        tow: [`${cityName} içinde aracınız nerede olursa olsun`, 'Serviste, otoparkta veya iş yerinde bekleyen aracın konumunu paylaşın; çekiciyi bulunduğu yere planlayalım.', 'Konum gönder'],
        question: ['Sorunuzun yanıtını bulamadınız mı?', `Aracınızın durumunu anlatın; ${cityName} için ekspertiz, teklif ve devir adımlarını birlikte netleştirelim.`, 'WhatsApp’tan sor'],
    }[variant];
    return (
        <div className="cp-band cp-band--strip" role="region" aria-label={copy[0]}>
            <div className="cp-wrap">
                <div className="cp-strip">
                    <div>
                        <p className="cp-strip-title">{copy[0]}</p>
                        <p className="cp-strip-text">{copy[1]}</p>
                    </div>
                    <div className="cp-actions">
                        <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" onClick={whatsapp} className="cp-btn cp-btn--wa">{copy[2]}</a>
                        <a href={`tel:${siteConfig.phone}`} onClick={phone} className="cp-btn cp-btn--outline">Hemen Ara</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
