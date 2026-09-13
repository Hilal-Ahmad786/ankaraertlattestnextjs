import { MetadataRoute } from 'next';
import { execFileSync } from 'child_process';
import { statSync } from 'fs';
import { getAllBlogSlugs, blogPosts } from '@/lib/blog-posts';
import citiesData from '@/data/cities.json';
import cityContentBatch1 from '@/data/city-content-1.json';
import cityContentBatch2 from '@/data/city-content-2.json';
import cityContentBatch3 from '@/data/city-content-3.json';
import cityContentBatch4 from '@/data/city-content-4.json';
import cityContentBatch5 from '@/data/city-content-5.json';
import cityContentBatch6 from '@/data/city-content-6.json';
import { City } from '@/types';

const BASE_URL = 'https://www.ankarapert.com.tr';

/**
 * Real per-page lastmod so Google can tell which URLs actually changed,
 * instead of every entry rewriting to the build timestamp on each deploy.
 * Git history is the source of truth (Vercel checks out full history at
 * build time); file mtime only covers the rare case git isn't available.
 */
const lastModifiedCache = new Map<string, Date>();

function getLastModified(relativePath: string): Date {
  const cached = lastModifiedCache.get(relativePath);
  if (cached) return cached;

  let result: Date;
  try {
    const iso = execFileSync(
      'git',
      ['log', '-1', '--format=%cI', '--', relativePath],
      { cwd: process.cwd(), encoding: 'utf-8' },
    ).trim();
    if (!iso) throw new Error('no git history for file');
    result = new Date(iso);
  } catch {
    result = statSync(relativePath).mtime;
  }

  lastModifiedCache.set(relativePath, result);
  return result;
}

type CityContentBatch = { cities: Record<string, unknown> };

const CITY_BATCHES: [string, CityContentBatch][] = [
  ['src/data/city-content-1.json', cityContentBatch1 as CityContentBatch],
  ['src/data/city-content-2.json', cityContentBatch2 as CityContentBatch],
  ['src/data/city-content-3.json', cityContentBatch3 as CityContentBatch],
  ['src/data/city-content-4.json', cityContentBatch4 as CityContentBatch],
  ['src/data/city-content-5.json', cityContentBatch5 as CityContentBatch],
  ['src/data/city-content-6.json', cityContentBatch6 as CityContentBatch],
];

// Maps a city slug to the JSON batch file its written content lives in, so
// lastmod reflects when that city's actual copy last changed.
const CITY_SOURCE_FILE: Record<string, string> = {};
for (const [file, batch] of CITY_BATCHES) {
  for (const slug of Object.keys(batch.cities)) {
    CITY_SOURCE_FILE[slug] = file;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const cities: City[] = citiesData as City[];

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: getLastModified('src/app/page.tsx') },
    {
      url: `${BASE_URL}/kazali-arac-alim-satim`,
      lastModified: getLastModified('src/app/kazali-arac-alim-satim/page.tsx'),
    },
    {
      url: `${BASE_URL}/hasarli-arac-alim-satim`,
      lastModified: getLastModified('src/app/hasarli-arac-alim-satim/page.tsx'),
    },
    {
      url: `${BASE_URL}/pert-arac-alim-satim`,
      lastModified: getLastModified('src/app/pert-arac-alim-satim/page.tsx'),
    },
    {
      url: `${BASE_URL}/hurda-arac-alim-satim`,
      lastModified: getLastModified('src/app/hurda-arac-alim-satim/page.tsx'),
    },
    { url: `${BASE_URL}/sehirler`, lastModified: getLastModified('src/app/sehirler/page.tsx') },
    { url: `${BASE_URL}/blog`, lastModified: getLastModified('src/app/blog/page.tsx') },
    { url: `${BASE_URL}/hakkimizda`, lastModified: getLastModified('src/app/hakkimizda/page.tsx') },
    {
      url: `${BASE_URL}/genel-bilgiler`,
      lastModified: getLastModified('src/app/genel-bilgiler/page.tsx'),
    },
  ];

  // Blog posts already carry a real per-post publish date.
  const blogSlugs = getAllBlogSlugs();
  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => {
    const post = blogPosts[slug];
    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: post.datePublished
        ? new Date(post.datePublished)
        : getLastModified('src/lib/blog-posts.ts'),
    };
  });

  const cityEntries: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/sehirler/${city.slug}`,
    lastModified: getLastModified(CITY_SOURCE_FILE[city.slug] ?? 'src/data/cities.json'),
  }));

  return [...staticPages, ...blogEntries, ...cityEntries];
}
