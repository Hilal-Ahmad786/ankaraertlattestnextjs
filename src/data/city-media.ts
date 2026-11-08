/** Supplied city pilot assets. Adding a file alone never activates the treatment. */
export const APPROVED_CITY_MEDIA_SLUGS = [
  'kayseri', 'bursa', 'antalya', 'gaziantep', 'kocaeli',
  'samsun', 'konya', 'van', 'istanbul', 'ankara',
] as const;

type MediaSlug = typeof APPROVED_CITY_MEDIA_SLUGS[number];
interface CityMedia { src: string; alt: string; objectPosition: string }
const descriptions: Record<MediaSlug, string> = {
  kayseri: 'Karlı dağların önünde, çekici rampasının yanında duran hasarlı gümüş renkli sedan ve trafik konileri.',
  bursa: 'Yeşil tepelerin önünde bir çekicinin platformuna yüklenmiş mavi otomobil.',
  antalya: 'Palmiye ağaçları ve dağların önünde, çekici rampasının yanında duran beyaz SUV.',
  gaziantep: 'Taş yapıların yakınında, açık çekici rampasının yanında duran hasarlı beyaz hafif ticari araç.',
  kocaeli: 'Islak zeminde, çekici platformuna yüklenmiş ön kısmı hasarlı koyu renkli otomobil.',
  samsun: 'Yağmurlu sahil yolunda, çekici rampasının yanında duran arka kısmı hasarlı beyaz otomobil.',
  konya: 'Açık arazide bir çekici platformunun üzerinde duran ön kısmı hasarlı beyaz hafif ticari araç.',
  van: 'Göl ve karlı dağların önünde, çekici rampasının yanında duran bordo otomobil.',
  istanbul: 'Kent silüeti önünde, çekici rampasının yanında duran yan kısmı hasarlı koyu renkli SUV.',
  ankara: 'Kuru tepeler ve kent yapıları önünde, çekici rampasının yanında duran yan kısmı hasarlı mavi sedan.',
};
export function getCityMedia(slug: string): CityMedia | undefined {
  if (!APPROVED_CITY_MEDIA_SLUGS.includes(slug as MediaSlug)) return undefined;
  return { src: `/images/cities/${slug}/hero.webp`, alt: descriptions[slug as MediaSlug], objectPosition: '50% 50%' };
}
