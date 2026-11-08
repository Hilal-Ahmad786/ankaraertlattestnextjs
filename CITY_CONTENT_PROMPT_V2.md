# City Page Content — v2 (ChatGPT → Codex → Claude verification)

## Why v2 exists

Search Console shows the city pages lost ~95% of impressions overnight on
**1 Sep 2026**, 12 days after all 30 city pages were rewritten (v1 prompt,
deployed 19 Aug). Pages are still indexed; Google stopped ranking them. The
main problem: the pages were too similar — Kayseri vs Bursa shared 43 of 67
text blocks once the city name was swapped, and the v1 text followed the same
structure in every city ("<Şehir>'da hasarlı araç piyasası…").

v2 fixes that by giving **every city its own angle** (table below). The angle
decides what the page is about, how it opens, and which questions the FAQ
answers — so two pages cannot come out with the same shape.

The JSON schema is **unchanged**, so Codex only swaps data.

> Tip: whenever you DO know something real about a city (a car you bought
> there, a tricky pickup), add it to the per-city message as a "BONUS FACT".
> One real sentence still beats any amount of generated text.

---

## Status

- [x] Template cleanup (Codex) — done. Company claims confirmed true by owner
      and restored: ücretsiz ekspertiz, ücretsiz çekici, noter masrafı bize
      ait, 30 dakikada teklif, aynı gün ödeme, piyasa üstü teklif.
- [ ] City copy — one city at a time, top 10 first.

---

## Order of work

Do these 10 first, deploy, wait 2–3 weeks, let Claude check results, then do
the rest.

| # | slug | File |
|---|---|---|
| 1 | kayseri | `src/data/city-content-3.json` |
| 2 | bursa | `src/data/city-content-1.json` |
| 3 | antalya | `src/data/city-content-1.json` |
| 4 | gaziantep | `src/data/city-content-2.json` |
| 5 | kocaeli | `src/data/city-content-2.json` |
| 6 | samsun | `src/data/city-content-4.json` |
| 7 | konya | `src/data/city-content-2.json` |
| 8 | van | `src/data/city-content-4.json` |
| 9 | istanbul | `src/data/city-content-1.json` |
| 10 | ankara | `src/data/city-content-1.json` |

All slugs → file: 1 = istanbul ankara izmir bursa antalya · 2 = adana konya
gaziantep sanliurfa kocaeli · 3 = mersin diyarbakir hatay manisa kayseri ·
4 = samsun balikesir kahramanmaras van aydin · 5 = tekirdag sakarya denizli
mugla eskisehir · 6 = mardin trabzon malatya ordu erzurum

---

## City angles (copy the row into the per-city message)

Each row: **main angle** · **secondary angle** · **how the intro must open**.

| slug | Districts (exact) | Main angle | Secondary angle | Intro opens with |
|---|---|---|---|---|
| kayseri | Melikgazi, Kocasinan, Talas, Develi | Industrial city: OSB, commercial vans & light trucks | Hard winters, Erciyes road icing | A question a Kayseri van/truck owner asks |
| bursa | Osmangazi, Nilüfer, Yıldırım, Mudanya, Kestel, Gürsu | Automotive industry → strong parts market raises value of wrecks | Uludağ road winter, Mudanya coast | Why a non-repairable car still has value in Bursa |
| antalya | Muratpaşa, Kepez, Konyaaltı, Alanya, Manavgat, Serik | Tourism: rental fleets, seasonal traffic on the coast road | Heat-related engine/cooling failures | The summer season and what it does to cars |
| gaziantep | Şehitkamil, Şahinbey, Nizip, Oğuzeli | Trade & industry hub, commercial vehicles, OSB | 2023 earthquake-damaged vehicles & paperwork | A shopkeeper/tradesman whose work vehicle is damaged |
| kocaeli | İzmit, Gebze, Darıca, Gölcük, Körfez, Derince | Industrial corridor, TEM & D-100, heavy truck traffic | Gebze logistics, commuter cars to İstanbul | A crash on the D-100/TEM and what happens next |
| samsun | İlkadım, Atakum, Canik, Çarşamba, Bafra | Black Sea rain, fog, flooding & water-damaged cars | Çarşamba/Bafra plains: farm pickups | Water/flood damage: what it does to a car |
| konya | Selçuklu, Meram, Karatay, Ereğli, Akşehir | Huge province, long straight roads → high-speed crashes | Farming: pickups, tractors; Konya's parts/sanayi trade | Distance: how a car in Ereğli or Akşehir is still collected |
| van | İpekyolu, Tuşba, Edremit, Erciş | High altitude, long harsh winters, ice & snow damage | Distance from the west — remote sale process | Selling a car in Van without travelling anywhere |
| istanbul | Kadıköy, Beşiktaş, Üsküdar, Maltepe, Kartal, Pendik, Beyoğlu, Şişli, Fatih, Bakırköy, Bahçelievler, Ümraniye | Cars stuck in yediemin/otopark/servis after a crash | Two sides of the city, bridges, traffic planning for the tow | A car sitting in a service or impound lot |
| ankara | Çankaya, Keçiören, Yenimahalle, Mamak, Etimesgut, Sincan, Altındağ, Balgat, Çayyolu | Head-office city: face-to-face process, own team | Ostim/İvedik/Sincan sanayi & parts; winter icing | Being able to come to the office in person |
| izmir | Konak, Karşıyaka, Bornova, Buca, Çiğli, Gaziemir, Balçova, Narlıdere | Salt air & humidity: corrosion on older cars | Çiğli/Atatürk OSB industry, port traffic | Rust and corrosion on a long-used İzmir car |
| adana | Seyhan, Çukurova, Yüreğir, Sarıçam, Ceyhan, Kozan | Extreme heat: engine, AC, cooling failures | Çukurova farming pickups, highway junction | A car that failed in the summer heat |
| sanliurfa | Haliliye, Eyyübiye, Karaköprü, Siverek, Viranşehir | Agriculture (GAP): pickups, field use, dust | Long distances to Siverek/Viranşehir | A farmer's pickup damaged in the field |
| mersin | Akdeniz, Mezitli, Yenişehir, Toroslar, Tarsus, Erdemli | Port city: transit trucks, logistics vehicles | Citrus farming, flash floods | Transit traffic and port logistics |
| diyarbakir | Bağlar, Kayapınar, Sur, Yenişehir, Ergani | Regional hub: long intercity trips, highway crashes | Heat, old city narrow streets for the tow | Cars from neighbouring provinces ending up in Diyarbakır |
| hatay | Antakya, İskenderun, Defne, Dörtyol, Samandağ | 2023 earthquake: debris-damaged cars, missing documents | İskenderun port & industry | What to do with a car damaged in the earthquake |
| manisa | Yunusemre, Şehzadeler, Akhisar, Turgutlu, Salihli | OSB factories, daily commuting to İzmir | Vineyard/farm vehicles | A commuter car damaged on the İzmir road |
| balikesir | Altıeylül, Karesi, Bandırma, Edremit, Gönen | Two coasts (Marmara & Ege), summer holiday traffic | Bandırma port, long distances inside the province | A holiday-traffic accident on the way to Edremit |
| kahramanmaras | Onikişubat, Dulkadiroğlu, Elbistan, Afşin | 2023 earthquake epicentre: damaged & abandoned cars | Textile industry; Elbistan/Afşin distance | Clearing a car left damaged since the earthquake |
| aydin | Efeler, Nazilli, Söke, Kuşadası, Didim | Coast (tourism) vs inland (farming) — two different car profiles | Rental cars in Kuşadası/Didim | The difference between a Didim car and a Nazilli car |
| tekirdag | Süleymanpaşa, Çorlu, Çerkezköy, Kapaklı, Ergene | Çorlu/Çerkezköy factories, shift-worker cars | TEM/D-100 truck traffic to İstanbul | A shift worker's car damaged on the way to work |
| sakarya | Adapazarı, Serdivan, Erenler, Hendek, Akyazı | TEM/D-100 junction, heavy transit crashes | Flood risk, automotive production in the province | Highway junction crashes |
| denizli | Pamukkale, Merkezefendi, Çivril, Acıpayam | Textile industry: commercial vans & delivery vehicles | Inland heat, Pamukkale tourism traffic | A textile business's van |
| mugla | Menteşe, Bodrum, Fethiye, Marmaris, Milas | Steep, winding coastal roads; tourism rentals | Salt air, seasonal population | A crash on a winding coastal road |
| eskisehir | Odunpazarı, Tepebaşı, Sivrihisar, Çifteler | Student city: older, high-mileage cars | Close to Ankara; rail/aviation industry | An old student car that failed its inspection |
| mardin | Artuklu, Kızıltepe, Midyat, Nusaybin | Kızıltepe plain farming, pickups | Border-region distances, heat | Selling a pickup from Kızıltepe or Midyat |
| trabzon | Ortahisar, Akçaabat, Araklı, Of, Yomra | Coastal road + steep mountain roads, rain, landslides | Port, narrow streets | A car damaged on a steep wet road |
| malatya | Battalgazi, Yeşilyurt, Doğanşehir, Akçadağ | 2023 earthquake impact on vehicles | Apricot farming, winter | An earthquake-damaged car still in the garage |
| ordu | Altınordu, Fatsa, Ünye, Perşembe | Narrow coastal strip, hazelnut farming vehicles | Rain, slippery roads | A hazelnut-season pickup |
| erzurum | Yakutiye, Palandöken, Aziziye, Horasan | Coldest city: ice, snow, frozen-engine damage | Long winter, Palandöken traffic | What extreme cold does to a car |

---

## Part 1 — ChatGPT setup prompt (paste ONCE per chat)

Use one chat for 5 cities so ChatGPT can see its earlier answers and avoid
repeating them. Then start a new chat.

```text
You are writing city landing-page content in TURKISH for Ankara PERT
(ankarapert.com.tr), a company that directly BUYS damaged, accident-damaged,
"pert" (insurance total-loss), scrap and engine-failed vehicles across Turkey.
Head office: Ankara. It is a buyer, not a listing site or marketplace.

Company facts (all true, you may use them — but use them at most ONCE in the
whole page, because the page template already repeats them):
- ücretsiz ekspertiz, ücretsiz çekici, noter masrafı firmaya ait
- ekspertiz sonrası 30 dakika içinde teklif; anlaşmada aynı gün ödeme
- noterde devir, ödeme devirle eş zamanlı
- Türkiye geneli alım

I will send you ONE city at a time with an ANGLE. The angle is the topic of
the page. Every section must serve that angle.

HARD RULES:
1. UNIQUENESS. Each page must read as if written by a different person about
   a different problem. If a sentence could be pasted onto another city's
   page by changing the city name, delete it. Do not reuse opening phrases,
   sentence structures, paragraph order or FAQ questions from earlier cities
   in this chat.
2. The intro must open exactly the way the "Intro opens with" instruction
   says. Never open with "<Şehir>'da hasarlı araç piyasası…" or any sentence
   that starts with the city name.
3. Local facts must be real and well known (roads, climate, industry,
   agriculture, geography, the 2023 earthquake where relevant). If you are
   not sure a fact is true, leave it out. No street-level details you cannot
   verify.
4. NEVER invent statistics, prices, customer names, reviews, ratings,
   purchase counts, or years in business.
5. Natural Turkish, correct characters (ı ğ ş İ ç ö ü). The phrase
   "<şehir> hasarlı araç alımı" at most twice in the whole page. No keyword
   stuffing.
6. FAQs: 3 questions a seller in THIS city with THIS problem would ask.
   Generic questions ("Ekspertiz ücretli mi?", "Hangi evraklar gerekli?")
   are forbidden — the site already has those.
7. districtNotes: each district gets something specific (what is there,
   what kind of vehicles, how pickup works). If you know little about a
   district, keep it short and factual rather than generic.
8. If I give a BONUS FACT, it must appear in the intro or the first body
   paragraph.

OUTPUT — return ONLY this JSON, no explanation, no markdown fences:

{
  "<slug>": {
    "metaTitle": "50–60 characters, city + service. Do NOT add 'Ankara PERT'.",
    "metaDescription": "145–158 characters, mentions the city's angle.",
    "heroTitle": "6–10 words, contains the city name. This is the H1.",
    "heroSubtitle": "15–25 words, about the angle.",
    "intro": "60–90 words.",
    "body": ["paragraph 1 (main angle), 90–130 words", "paragraph 2 (secondary angle), 90–130 words"],
    "localPoints": ["4 items, 5–9 words each, specific to this city"],
    "districtNotes": { "<exact district name>": "25–40 words" },
    "faqs": [
      { "question": "8–14 words", "answer": "45–75 words, first sentence answers directly" },
      { "question": "...", "answer": "..." },
      { "question": "...", "answer": "..." }
    ]
  }
}

districtNotes keys must be EXACTLY the district names I give, same spelling,
one per district, no extras.

Reply "Hazırım" and wait for the first city.
```

---

## Part 2 — Per-city message (one per city)

Copy the city's row from the angle table:

```text
CITY: Kayseri
SLUG: kayseri
DISTRICTS (use exactly): Melikgazi, Kocasinan, Talas, Develi
MAIN ANGLE: Industrial city: OSB, commercial vans & light trucks
SECONDARY ANGLE: Hard winters, Erciyes road icing
INTRO OPENS WITH: A question a Kayseri van/truck owner asks
BONUS FACT (optional): ...
```

After ChatGPT answers, send this check message:

```text
Check your answer against the rules: list any sentence that could appear on
another city's page, any repeated opening from earlier cities, and any fact
you are not sure about. Fix them and return the corrected JSON only.
```

Save the final JSON as `content-drafts/<slug>.json` in the project root.

---

## Part 3 — Codex instruction (one per city)

```text
Replace the content for city "<slug>" with the JSON in
content-drafts/<slug>.json.

- The city lives in src/data/city-content-<N>.json under
  "cities" → "<slug>". Replace ONLY that object; do not touch other cities.
- Do NOT change any other text or claims on the site. Company claims
  (ücretsiz ekspertiz, ücretsiz çekici, noter masrafı bize ait, 30 dakikada
  teklif, aynı gün ödeme, piyasa üstü teklif) are confirmed true by the
  owner — do not soften or remove them anywhere.
- Keep valid JSON (2-space indent, UTF-8, Turkish characters as-is).
- Validate against CityContent in src/data/city-content.ts: body = 2
  strings, localPoints = 4, faqs = 3.
- districtNotes keys must exactly match "districts" for this slug in
  src/data/cities.json. If not, stop and list the mismatch.
- Report metaTitle (50–60) and metaDescription (145–158) character counts.
- Run `npm run build`. Commit: "Content: rewrite <slug> city page".
```

---

## Part 4 — Verification (Claude, after deploy)

Tell Claude which slugs went live. Claude will:

1. Fetch each live `https://www.ankarapert.com.tr/sehirler/<slug>` and confirm
   the new text is served.
2. Compare every updated page against the others: shared text blocks and
   repeated sentence patterns (target under 25% shared, from ~64%).
3. Check title, meta description, H1, canonical, robots, FAQ JSON-LD matches
   visible FAQ.
4. Request indexing in Search Console, then compare impressions per city
   after 2–3 weeks.
