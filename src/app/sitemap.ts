import { MetadataRoute } from 'next';
import { getAllBlogSlugs, blogPosts } from '@/lib/blog-posts';
import citiesData from '@/data/cities.json';
import { City } from '@/types';

const BASE_URL = 'https://ankarapert.com.tr';

export default function sitemap(): MetadataRoute.Sitemap {
  const cities: City[] = citiesData as City[];

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/kazali-arac-alim-satim`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/hasarli-arac-alim-satim`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pert-arac-alim-satim`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/hurda-arac-alim-satim`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sehirler`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/genel-bilgiler`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Blog posts
  const blogSlugs = getAllBlogSlugs();
  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => {
    const post = blogPosts[slug];
    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: post.datePublished ? new Date(post.datePublished) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  // City pages — popular cities get higher priority
  const cityEntries: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/sehirler/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: city.isPopular ? 0.8 : 0.6,
  }));

  return [...staticPages, ...blogEntries, ...cityEntries];
}
