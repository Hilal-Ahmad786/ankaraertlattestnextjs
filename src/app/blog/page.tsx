// app/blog/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import CallToActionBanner from '@/components/sections/CallToActionBanner';
import { blogPosts, getAllBlogSlugs } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Blog | Ankara PERT - Kazalı, Hurda ve Pert Araç Rehberi',
  description: 'Kazalı araç, pert raporu ve hurda araç hakkında bilmeniz gereken her şey. Uzman tavsiyeleri ve rehberler.',
};

export default function BlogPage() {
  const slugs = getAllBlogSlugs();
  const posts = slugs.map(slug => ({
    slug,
    ...blogPosts[slug]
  }));

  return (
    <div>
      <PageHero 
        title="Blog & Rehberler" 
        subtitle="Kazalı, hurda ve pert araçlar hakkında bilmeniz gereken her şey"
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Category Badge */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3">
                  <span className="text-white text-sm font-semibold">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Subtitle */}
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.subtitle}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {post.author}
                    </span>
                  </div>

                  {/* Read More Button */}
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                  >
                    Devamını Oku
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBanner
        title="Aracınız İçin Hemen Teklif Alın"
        description="Kazalı, hurda veya pert aracınız için en yüksek teklifi almak için bize ulaşın!"
      />
    </div>
  );
}