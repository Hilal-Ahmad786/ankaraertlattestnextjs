import type { CSSProperties } from 'react';
import type { CityDamageRow } from '@/data/city-content';

export default function CityDamageTable({ cityName, rows }: { cityName: string; rows: CityDamageRow[] }) {
  return (
    <section className="city-detail-panel" data-city-reveal aria-labelledby="city-damage-title">
      <h3 id="city-damage-title" className="city-detail-heading">{cityName}’de en sık karşılaşılan hasar türleri</h3>
      <p className="city-detail-intro">Aşağıdaki başlıklar temsili inceleme alanlarıdır; her aracın durumu ayrı değerlendirilir.</p>
      <div className="city-responsive-table-wrap">
        <table className="city-responsive-table">
          <thead><tr><th scope="col">Hasar türü</th><th scope="col">Ekspertizde neye bakarız?</th><th scope="col">Teklifteki etkisi</th></tr></thead>
          <tbody>{rows.map((row, index) => <tr key={row.type} data-city-reveal style={{ '--city-item-index': index } as CSSProperties}>
            <th scope="row">{row.type}</th>
            <td data-label="Ekspertizde neye bakarız?"><i className="city-damage-check-icon fas fa-search" aria-hidden="true"></i>{row.whatWeCheck}</td>
            <td data-label="Teklifteki etkisi">{row.effectOnOffer}</td>
          </tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}
