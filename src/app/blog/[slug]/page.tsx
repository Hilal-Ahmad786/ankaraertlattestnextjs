// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/sections/PageHero';
import CallToActionBanner from '@/components/sections/CallToActionBanner';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog-posts';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://ankarapert.com.tr';

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return { title: 'Blog Yazısı Bulunamadı' };
  }

  const url = `${BASE_URL}/blog/${params.slug}`;

  return {
    title: `${post.title} | Ankara PERT`,
    description: post.subtitle,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.subtitle,
      type: 'article',
      url,
      publishedTime: post.datePublished,
      authors: [post.author],
      locale: 'tr_TR',
      siteName: 'Ankara PERT',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.subtitle,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${BASE_URL}/blog/${params.slug}`;

  const articleJsonLd = articleSchema({
    title: post.title,
    description: post.subtitle,
    slug: params.slug,
    datePublished: post.datePublished,
    author: post.author,
  });

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Ana Sayfa', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/blog` },
    { name: post.title, url: postUrl },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero title={post.title} subtitle={post.subtitle} />

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article metadata */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8 pb-8 border-b">
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              {post.category}
            </span>
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={post.datePublished}>{post.date}</time>
            </span>
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {post.author}
            </span>
          </div>

          {/* Article content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-6 prose-li:my-2
              prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Internal links to related services */}
          <div className="mt-12 p-6 bg-orange-50 rounded-xl border border-orange-200">
            <h3 className="font-bold text-gray-900 mb-4">İlgili Hizmetlerimiz</h3>
            <div className="flex flex-wrap gap-3">
              <a href="/kazali-arac-alim-satim" className="inline-flex items-center text-sm bg-white text-orange-600 border border-orange-300 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white transition">
                <i className="fas fa-car-crash mr-2"></i>Kazalı Araç Alımı
              </a>
              <a href="/hasarli-arac-alim-satim" className="inline-flex items-center text-sm bg-white text-orange-600 border border-orange-300 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white transition">
                <i className="fas fa-tools mr-2"></i>Hasarlı Araç Alımı
              </a>
              <a href="/pert-arac-alim-satim" className="inline-flex items-center text-sm bg-white text-orange-600 border border-orange-300 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white transition">
                <i className="fas fa-exclamation-triangle mr-2"></i>Pert Araç Alımı
              </a>
              <a href="/hurda-arac-alim-satim" className="inline-flex items-center text-sm bg-white text-orange-600 border border-orange-300 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white transition">
                <i className="fas fa-recycle mr-2"></i>Hurda Araç Alımı
              </a>
            </div>
          </div>
        </div>
      </article>

      <CallToActionBanner
        title="Aracınızı Satmak İster Misiniz?"
        description="Hemen arayın ve en yüksek teklifi alın!"
      />
    </div>
  );
}
