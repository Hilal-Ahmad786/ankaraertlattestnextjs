import { blogPosts } from '@/lib/blog-posts';

const BASE_URL = 'https://www.ankarapert.com.tr';

export const revalidate = 3600;

/** Escapes the five XML entities so titles with & or quotes can't break the feed. */
function xml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  // blogPosts is keyed by slug, so entries carry the slug as the record key.
  const items = Object.entries(blogPosts)
    .sort(([, a], [, b]) => (b.datePublished ?? '').localeCompare(a.datePublished ?? ''))
    .map(([slug, post]) => {
      const url = `${BASE_URL}/blog/${slug}`;
      const parsed = new Date(post.datePublished);
      const date = (isNaN(parsed.getTime()) ? new Date() : parsed).toUTCString();
      return `    <item>
      <title>${xml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${date}</pubDate>
      <category>${xml(post.category ?? '')}</category>
      <description>${xml(post.subtitle ?? '')}</description>
    </item>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ankara PERT Blog</title>
    <link>${BASE_URL}/blog</link>
    <description>Hasarlı, kazalı, pert ve hurda araç satışı üzerine rehberler.</description>
    <language>tr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
