import type { ReactNode } from 'react';

const heroLines: Record<string, string> = {
  kayseri: 'M8 105 46 67 67 80 104 37 145 78 176 54 221 104 258 68 324 105 M0 117h340',
  bursa: 'M4 103 44 72 75 82 112 43 150 68 184 35 220 72 253 55 336 104 M0 118h340',
  antalya: 'M12 108h316 M40 108 71 77 95 90 128 42 159 77 189 63 224 102 M265 39v69m0-69-29-18m29 18 27-17m-27 17-22 18m22-18 23 18',
  gaziantep: 'M12 108h316 M46 108V61h24V42h22v19h24v47m34 0V73l22-19 22 19v35m27 0V55h38v53m-197-27h12m-12 15h12m83-11h12',
  kocaeli: 'M4 103h66l22-25h36l25 25h61l20-25h35l25 25h42 M0 116h340 M84 58h171m-154-9 154 18m-109-26v41m66-41v41',
  samsun: 'M0 93c28-14 50-14 78 0s50 14 78 0 50-14 78 0 50 14 106 0M0 110h340M38 76l8-17m40 18 7-17m181 17 8-17',
  konya: 'M0 104h340M0 118h340M170 118V75m0 0-24 43m24-43 24 43m-64-20h128m-106-13h84m-65-10h46m-109 56h218',
  van: 'M6 105 43 78 71 83 111 35 151 79 185 58 225 100 261 64 334 106 M0 117h340 M0 92c33-12 65 12 98 0s65 12 98 0 65 12 144 0',
  istanbul: 'M0 103h340M33 101 74 63l40 38m-56-24h32m-30 12h28m131 12 36-39 36 39m-51-24h30m-28 12h26M110 43c23-20 97-20 120 0m-120 0v9m120-9v9m-120 0h120',
  ankara: 'M0 105c34-15 55-15 88 0s54 15 88 0 56-15 88 0 52 15 76 0 M35 104V68h32v36m18 0V54h44v50m16 0V73h36v31m18 0V62h34v42m18 0V78h38v26 M0 117h340',
};

export function CityHeroLineArt({ slug }: { slug: string }) {
  return (
    <svg viewBox="0 0 340 130" className="city-hero-line-art" aria-hidden="true" focusable="false" data-city-reveal>
      <path d={heroLines[slug] ?? heroLines.ankara} />
      <path d="M16 124h308" className="city-hero-line-accent" />
    </svg>
  );
}

const riskLabels: Record<string, string> = {
  kayseri: 'Kış koşullarında alt takım ve soğutma kontrolü', bursa: 'Motor, şanzıman ve parça durumunun ayrı incelenmesi',
  antalya: 'Hararet, su teması ve filo kullanımının incelenmesi', gaziantep: 'Ticari araçta kasa ve bağlantı noktalarının kontrolü',
  kocaeli: 'Darbe sonrası şasi doğrultusu ve yükleme koşulları', samsun: 'Su temasında motor ve elektronik kontrolü',
  konya: 'Uzun yol ve buzlanma sonrası araç kontrolü', van: 'Soğukta beklemiş araçta motor ve erişim koşulları',
  istanbul: 'Otopark, servis ve dar sokak teslim koşulları', ankara: 'Tekliften ekspertize ve noter devrine uzanan adımlar',
};

function CityRiskDrawing({ slug }: { slug: string }) {
  const detail: Record<string, ReactNode> = {
    kayseri: <><path d="M76 34 84 23l8 11m8-10 8-14 8 14m-52 1v-8m60 9v-8" /><path d="M78 68h27m-22 8h18" /></>,
    bursa: <><circle cx="88" cy="37" r="14" /><path d="m88 25 4 8 8 4-8 4-4 8-4-8-8-4 8-4 4-8Zm35 42h18m-9-9v18" /></>,
    antalya: <><path d="M80 18v34m0-34-10-8m10 8 11-8m-11 8-9 8m9-8 11 8" /><path d="M112 22c-8 8-8 16 0 24m10-27c-7 10-7 20 0 30" /></>,
    gaziantep: <><path d="M62 34h48v30H62zM70 34V25h12v9m7 0V25h12v9m-41 39h48m-39-4v8m29-8v8" /><path d="M115 39h16m-16 11h20m-20 11h16" /></>,
    kocaeli: <><path d="M68 29h54m-48-8v16m42-16v16M63 45h64" /><path d="M71 69h50m-42-8v16m34-16v16" /></>,
    samsun: <><path d="M64 53c8-5 16-5 24 0s16 5 24 0 16-5 24 0M64 64c8-5 16-5 24 0s16 5 24 0 16-5 24 0" /><path d="M80 34h44v22M80 34v-9h44v9" /></>,
    konya: <><path d="M72 20v48m-8-37h16m-16 16h16m-16 16h16m31-43v48m-8-37h16m-16 16h16m-16 16h16" /><path d="M118 22v44m-8-34h16m-16 15h16m-16 15h16" /></>,
    van: <><path d="M70 27h54v38H70zM96 27l-8 13 11 6-8 19" /><path d="m71 19 5-7 5 7m17 0 5-7 5 7m17 0 5-7 5 7" /></>,
    istanbul: <><path d="M72 25h38v39H72zM82 17h18m-14 18h10m-10 8h10m-10 8h10" /><path d="M119 32h24v33h-24m-4-10h28m-28-9h28" /></>,
    ankara: <><circle cx="74" cy="28" r="7" /><circle cx="105" cy="47" r="7" /><circle cx="138" cy="66" r="7" /><path d="M81 32 98 43m14 8 20 11" /></>,
  };

  return (
    <svg viewBox="0 0 240 112" className="city-risk-svg" aria-hidden="true" focusable="false">
      <g className="city-risk-detail">{detail[slug] ?? detail.ankara}</g>
      <path className="city-risk-car" d="M38 78h152l-8-20a12 12 0 0 0-11-7h-26l-16-18H90L74 51H54a12 12 0 0 0-11 8l-5 19Z" />
      <path className="city-risk-car" d="M82 51 95 38h28l13 13" />
      <circle className="city-risk-wheel" cx="74" cy="80" r="11" /><circle className="city-risk-wheel" cx="160" cy="80" r="11" />
      <path className="city-risk-road" d="M26 96h188" />
      <circle className="city-risk-mark" cx="178" cy="31" r="9" /><path className="city-risk-mark" d="M178 25v7l5 3" />
    </svg>
  );
}

export function CityRiskMotif({ slug }: { slug: string }) {
  return (
    <figure className="city-risk-motif" data-city-reveal>
      <CityRiskDrawing slug={slug} />
      <figcaption>{riskLabels[slug] ?? 'Araç durumunun temsili inceleme şeması'}</figcaption>
      <span className="city-motif-note">Şematik anlatım</span>
    </figure>
  );
}
