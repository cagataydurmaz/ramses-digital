import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { posts } from '@/lib/posts'
import CalendlyButton from '@/components/CalendlyButton'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Yazı Bulunamadı' }
  return {
    title: `${post.title} | Ramses Digital Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://ramsesdigital.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.coverImage, width: 800, alt: post.title }],
    },
  }
}

function ArticleJsonLd({ post }: { post: (typeof posts)[0] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
      url: 'https://ramsesdigital.com/hakkimizda',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ramses Digital',
      url: 'https://ramsesdigital.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ramsesdigital.com/favicon.ico',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ramsesdigital.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    inLanguage: 'tr-TR',
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function categoryBadgeClass(color: string): string {
  switch (color) {
    case 'blue':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    case 'orange':
      return 'bg-orange-500/10 text-orange-400 border-orange-500/20'
    case 'pink':
      return 'bg-pink-500/10 text-pink-400 border-pink-500/20'
    case 'violet':
      return 'bg-violet-500/10 text-violet-400 border-violet-500/20'
    case 'cyan':
      return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    case 'emerald':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    default:
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  // Related posts: same category first, then fill with others
  const related = posts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : b.category === post.category ? 1 : 0))
    .slice(0, 2)

  const formattedDate = new Date(post.date).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <ArticleJsonLd post={post} />
      <style>{`
        .post-content h2 {
          color: #60a5fa;
          font-size: 1.375rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.4;
        }
        .post-content h3 {
          color: #ffffff;
          font-size: 1.125rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        .post-content p {
          color: #a1a1aa;
          font-size: 1rem;
          line-height: 1.85;
          margin-bottom: 1.25rem;
        }
        .post-content ul {
          margin-bottom: 1.25rem;
          padding-left: 0;
          list-style: none;
        }
        .post-content li {
          color: #a1a1aa;
          font-size: 1rem;
          line-height: 1.85;
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
        }
        .post-content li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.65em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #3b82f6;
        }
        .post-content strong {
          color: #e4e4e7;
          font-weight: 600;
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-10 flex-wrap">
          <Link href="/" className="hover:text-zinc-300 transition-colors">
            Ana Sayfa
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-zinc-300 transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-zinc-400 line-clamp-1">{post.title}</span>
        </nav>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${post.coverGradient} opacity-50`} />
          <span className="absolute bottom-4 left-4 text-5xl drop-shadow-xl">{post.emoji}</span>
        </div>

        {/* Article Header */}
        <header className="mb-12">

          {/* Category badge */}
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-medium border mb-5 ${categoryBadgeClass(post.categoryColor)}`}
          >
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 border-t border-white/[0.06] pt-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                R
              </div>
              <div>
                <div className="text-zinc-300 font-medium text-sm">{post.author}</div>
                <div className="text-zinc-400 text-xs">{post.authorRole}</div>
              </div>
            </div>
            <span className="hidden sm:block text-zinc-700">·</span>
            <span>{formattedDate}</span>
            <span className="text-zinc-700">·</span>
            <span>{post.readTime} dk okuma</span>
          </div>
        </header>

        {/* Article Content */}
        <article
          className="post-content mb-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-16 pt-8 border-t border-white/[0.06]">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.08]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-bold text-white mb-6">İlgili Yazılar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-all group"
                >
                  <div className="text-3xl mb-3">{rp.emoji}</div>
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium border mb-2 ${categoryBadgeClass(rp.categoryColor)}`}
                  >
                    {rp.category}
                  </span>
                  <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-blue-300 transition-colors mb-2">
                    {rp.title}
                  </h3>
                  <p className="text-zinc-400 text-xs line-clamp-2">{rp.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-500/10 to-violet-500/5 border border-blue-500/20 rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Projenizi Konuşalım
          </h2>
          <p className="text-zinc-400 mb-7 max-w-md mx-auto leading-relaxed">
            Bu yazıda bahsedilen stratejileri işletmenize nasıl uygulayabileceğinizi öğrenmek için
            ücretsiz danışmanlık seansı ayırtın.
          </p>
          <CalendlyButton label="Ücretsiz Danışmanlık Al" variant="primary" />
        </section>
      </div>
    </div>
  )
}
