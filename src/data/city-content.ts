/**
 * Hand-written per-city content for /sehirler/[slug].
 *
 * Why: city pages carry most of the site's impressions and sit around
 * position 8 in Search Console. Each page previously had ~68 unique words
 * against ~620 of boilerplate shared across all 30 cities — enough to be
 * indexed, not enough to be ranked. This adds genuinely local substance
 * (geography, climate damage, local economy, parts market, transit traffic)
 * plus per-city FAQs so no two pages emit identical FAQPage nodes.
 *
 * Source of truth is the JSON batches, so new batches only need an import
 * line added to SOURCES below.
 */
import batch1 from "./city-content-1.json";
import batch2 from "./city-content-2.json";
import batch3 from "./city-content-3.json";
import batch4 from "./city-content-4.json";
import batch5 from "./city-content-5.json";
import batch6 from "./city-content-6.json";

export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityContent {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  /** Lead paragraph on how the damaged-car market works in this city. */
  intro: string;
  /** Two paragraphs of local detail. */
  body: string[];
  /** Four locally specific bullets. */
  localPoints: string[];
  /** District name -> 25–40 words specific to that district. */
  districtNotes: Record<string, string>;
  /** Three per-city questions; answers lead with a direct reply. */
  faqs: CityFaq[];
}

type Batch = { cities: Record<string, CityContent> };

const SOURCES: Batch[] = [
  batch1 as Batch,
  batch2 as Batch,
  batch3 as Batch,
  batch4 as Batch,
  batch5 as Batch,
  batch6 as Batch,
];

export const CITY_CONTENT: Record<string, CityContent> = Object.assign(
  {},
  ...SOURCES.map((b) => b.cities),
);

/**
 * Returns undefined for cities without written content yet, so the page falls
 * back to the generic copy in cities.json rather than rendering blanks.
 */
export function getCityContent(slug: string): CityContent | undefined {
  return CITY_CONTENT[slug];
}

/** Cities still awaiting written content — useful for progress checks. */
export function citiesMissingContent(allSlugs: string[]): string[] {
  return allSlugs.filter((s) => !CITY_CONTENT[s]);
}
