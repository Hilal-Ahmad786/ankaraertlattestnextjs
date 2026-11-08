import type { CSSProperties } from 'react';

/**
 * Per-city "what we check" card shown beside the main city copy (pilot cities).
 * Replaces the earlier abstract line drawings: concrete checkpoints read better
 * than decoration and repeat what the page text already says about this city.
 */
const checks: Record<string, [string, string, string]> = {
  kayseri: ['Rot, aks ve salıncak', 'Soğutma sistemi ve radyatör', 'Kasa ve yük bölümü'],
  bursa: ['Motor ve şanzıman çalışması', 'Kaporta ve parça durumu', 'Sahil kaynaklı korozyon'],
  antalya: ['Hararet ve motor soğutması', 'Su teması ve elektronik', 'Filo kullanım geçmişi'],
  gaziantep: ['Kasa ve bağlantı noktaları', 'Makas ve debriyaj grubu', 'Şasi ve alt takım'],
  kocaeli: ['Şasi doğrultusu', 'Bagaj tabanı ve arka panel', 'Yük bölümü ve süspansiyon'],
  samsun: ['Su çizgisi ve döşeme', 'Motor ve elektronik aksam', 'Nem kaynaklı korozyon'],
  konya: ['Ön darbe ve şasi', 'Motor ve soğutma sistemi', 'Uzun yol yıpranması'],
  van: ['Motor bloğu ve soğutma suyu', 'Akü ve marş sistemi', 'Yol tuzu ve korozyon'],
  istanbul: ['Bulunduğu yer ve erişim izni', 'Kaporta ve mekanik durum', 'Teslim ve devir belgeleri'],
  ankara: ['Ekspertiz bulguları', 'Bakım ve kullanım geçmişi', 'Noter devri hazırlığı'],
};

export function CityRiskMotif({ slug, cityName }: { slug: string; cityName?: string }) {
  const items = checks[slug];
  if (!items) return null;
  return (
    <aside className="city-check-card" data-city-reveal aria-label={`${cityName ?? ''} ekspertizinde öne çıkan kontroller`.trim()}>
      <div className="city-check-card-head">
        <span className="city-check-card-icon" aria-hidden="true"><i className="fas fa-clipboard-check"></i></span>
        <div>
          <p className="city-check-card-title">Ekspertizde öne çıkan kontroller</p>
          <p className="city-check-card-sub">{cityName ? `${cityName} için temsili liste` : 'Temsili liste'}</p>
        </div>
      </div>
      <ol className="city-check-card-list">
        {items.map((item, index) => (
          <li key={item} style={{ '--city-item-index': index } as CSSProperties}>
            <span className="city-check-card-tick" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="m4 10 4 4 8-9" /></svg></span>
            {item}
          </li>
        ))}
      </ol>
    </aside>
  );
}
