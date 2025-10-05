import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import CallToActionBanner from '@/components/sections/CallToActionBanner';

export const metadata: Metadata = {
  title: 'Blog | Ankara PERT',
  description: 'Araç alım satımı, kazalı araç, hasarlı araç hakkında faydalı bilgiler ve güncel haberler.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      slug: 'kazali-arac-satarken-dikkat-edilmesi-gerekenler',
      title: 'Kazalı Araç Satarken Dikkat Edilmesi Gerekenler',
      excerpt: 'Kazalı aracınızı satarken en iyi fiyatı almak için nelere dikkat etmelisiniz? İşte püf noktaları...',
      category: 'Kazalı Araç',
      date: '15 Ocak 2025',
    },
    {
      slug: 'pert-raporu-nedir',
      title: 'Pert Raporu Nedir? Ne İşe Yarar?',
      excerpt: 'Pert raporu hakkında merak ettiğiniz her şey. Pert raporu nasıl alınır, ne işe yarar?',
      category: 'Pert Araç',
      date: '10 Ocak 2025',
    },
    {
      slug: 'hurda-arac-teslim-sureci',
      title: 'Hurda Araç Teslim Süreci Nasıl İşler?',
      excerpt: 'Hurda araç teslim sürecinde izlenecek adımlar ve dikkat edilmesi gereken noktalar.',
      category: 'Hurda Araç',
      date: '5 Ocak 2025',
    },
  ];

  return (
    <div className="blog-page">
      <PageHero
        title="Blog"
        subtitle="Araç alım satımı hakkında faydalı bilgiler"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="p-6">
                  <div className="text-sm text-orange-500 font-semibold mb-2">
                    {post.category}
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-orange-500 hover:text-orange-600 font-semibold"
                    >
                      Devamını Oku →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">Daha fazla içerik yakında...</p>
          </div>
        </div>
      </section>

      <CallToActionBanner
        title="Aracınızı Satmak İster Misiniz?"
        description="Hemen arayın, en iyi teklifi alın!"
        buttonText="Teklif Alın"
      />
    </div>
  );
}