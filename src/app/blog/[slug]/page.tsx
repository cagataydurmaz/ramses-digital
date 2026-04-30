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
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

function BreadcrumbJsonLd({ post }: { post: (typeof posts)[0] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://ramsesdigital.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://ramsesdigital.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://ramsesdigital.com/blog/${post.slug}` },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
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
        url: 'https://ramsesdigital.com/logo.png',
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
      <BreadcrumbJsonLd post={post} />
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
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <CalendlyButton label="Ücretsiz Danışmanlık Al" variant="primary" />
            <a
              href={`https://wa.me/905355601936?text=${encodeURIComponent(`Merhaba! "${post.title}" yazınızı okudum, danışmanlık almak istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-7 py-3.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp'tan Yaz
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
