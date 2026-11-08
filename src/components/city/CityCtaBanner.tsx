'use client';

import { siteConfig } from '@/config/site';
import { trackCTAClick, trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';

type Variant = 'photo' | 'tow' | 'question';

/**
 * Extra CTA banners placed between city sections. Copy repeats only existing
 * commitments (WhatsApp teklif, çekici masrafı bize ait); it makes no new claims.
 * Rendered as a div: the global `section { background: transparent }` rule
 * would otherwise erase the banner background.
 */
export default function CityCtaBanner({ variant, cityName }: { variant: Variant; cityName: string }) {
    const location = `city_${variant}_banner`;
    const phone = () => { trackPhoneClick(location); trackCTAClick(`City ${variant} banner phone`, location); };
    const whatsapp = () => { trackWhatsAppClick(location); trackCTAClick(`City ${variant} banner WhatsApp`, location); };

    const copy = {
        photo: {
            icon: 'fas fa-camera',
            title: 'Aracınızın fotoğraflarını WhatsApp’tan gönderin',
            text: 'Hasarlı bölgelerin, gösterge panelinin ve ruhsatın fotoğraflarıyla ön değerlendirme yapalım. Kesin teklif ekspertizden sonra verilir.',
        },
        tow: {
            icon: 'fas fa-truck-moving',
            title: `${cityName} içinde aracınız nerede olursa olsun`,
            text: 'Serviste, otoparkta veya iş yerinizde bekleyen aracın konumunu paylaşın; çekiciyi bulunduğu yere planlayalım. Çekici masrafı bize aittir.',
        },
        question: {
            icon: 'fas fa-headset',
            title: 'Sorunuzun cevabını bulamadınız mı?',
            text: `Aracınızın durumunu anlatın; ${cityName} için ekspertiz, teklif ve devir adımlarını birlikte netleştirelim.`,
        },
    }[variant];

    const phoneBtn = (
        <a href={`tel:${siteConfig.phone}`} onClick={phone} className="city-banner-btn city-banner-btn-phone">
            <i className="fas fa-phone-alt" aria-hidden="true"></i> Hemen Ara
        </a>
    );
    const waBtn = (
        <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" onClick={whatsapp} className="city-banner-btn city-banner-btn-wa">
            <i className="fab fa-whatsapp" aria-hidden="true"></i> {variant === 'photo' ? 'Fotoğraf Gönder' : 'WhatsApp'}
        </a>
    );

    return (
        <div role="region" aria-label={copy.title} className={`city-banner city-banner-${variant}`} data-city-reveal>
            <span className="city-banner-icon" aria-hidden="true"><i className={copy.icon}></i></span>
            <div className="city-banner-copy">
                <p className="city-banner-title">{copy.title}</p>
                <p className="city-banner-text">{copy.text}</p>
            </div>
            <div className="city-banner-actions">
                {variant === 'photo' ? <>{waBtn}{phoneBtn}</> : <>{phoneBtn}{waBtn}</>}
            </div>
        </div>
    );
}
