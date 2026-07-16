import { posts, PostMeta } from '@/lib/posts'
import BlogListClient from '@/components/BlogListClient'

export default function BlogPage() {
  // `content` HTML alanı listelemede kullanılmıyor — client bundle'a taşınmasın diye burada ayıklanıyor.
  const postsMeta: PostMeta[] = posts.map(({ content: _content, ...meta }) => meta)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': 'https://ramsesdigital.com/blog#page',
        name: 'Ramses Dijital Blog',
        url: 'https://ramsesdigital.com/blog',
        description: 'SEO, Google Ads, GEO, AEO, e-posta pazarlama ve dijital strateji üzerine içerikler.',
        publisher: { '@id': 'https://ramsesdigital.com/#organization' },
        inLanguage: 'tr-TR',
        blogPost: posts.map((p) => ({
          '@type': 'BlogPosting',
          headline: p.title,
          url: `https://ramsesdigital.com/blog/${p.slug}`,
          datePublished: p.date,
          author: { '@id': 'https://ramsesdigital.com/#organization' },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://ramsesdigital.com/blog' },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-[11px] font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-5 tracking-wider uppercase">
            Ramses Digital Blog
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Dijital Pazarlama{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Blogu
            </span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            SEO, Google Ads, sosyal medya ve dijital stratejide en güncel içgörüler, ipuçları ve
            vaka çalışmaları. Markanızı büyütmek için ihtiyacınız olan bilgi burada.
          </p>
        </div>
      </section>

      <BlogListClient posts={postsMeta} />
    </div>
  )
}
