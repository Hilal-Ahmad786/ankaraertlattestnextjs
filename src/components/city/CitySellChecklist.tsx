import type { CSSProperties } from 'react';

const standardItems = [
  'Ruhsatı veya araç kayıt bilgilerini hazırlayın.',
  'Araç sahibinin kimlik bilgisini hazır bulundurun.',
  'Anahtar ile varsa yedek anahtarın durumunu not edin.',
  'Bilinen borç ve ceza kayıtlarını ilgili kurumdan sorgulayın.',
  'Araç içindeki kişisel eşyaları teslimden önce alın.',
];

export default function CitySellChecklist({ cityItem }: { cityItem?: string }) {
  const items = cityItem ? [...standardItems, cityItem] : standardItems;
  return (
    <section className="city-detail-panel" data-city-reveal aria-labelledby="city-checklist-title">
      <h3 id="city-checklist-title" className="city-detail-heading">Satmadan önce hazırlayın</h3>
      <p className="city-detail-intro">Başvuru ve teslim görüşmesini kolaylaştırmak için temel bilgileri önceden toparlayabilirsiniz.</p>
      <ul className="city-sell-checklist">
        {items.map((item, index) => <li key={item} data-city-reveal style={{ '--city-item-index': index } as CSSProperties}>
          <span className="city-check-draw" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="m4 10 4 4 8-9" /></svg></span><span>{item}</span>
        </li>)}
      </ul>
    </section>
  );
}
