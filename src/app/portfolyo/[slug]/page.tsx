import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { ExternalLink, Globe, CheckCircle2 } from 'lucide-react'
import { projects } from '@/lib/portfolio'
import CalendlyButton from '@/components/CalendlyButton'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Vaka Çalışması Bulunamadı' }
  return {
    title: `${project.name} Vaka Çalışması — ${project.industry} | Ramses Digital`,
    description: project.desc,
    alternates: { canonical: `https://ramsesdigital.com/portfolyo/${project.slug}` },
    openGraph: {
      title: `${project.name} — ${project.title}`,
      description: project.desc,
      type: 'article',
      images: ['https://ramsesdigital.com/og-image.png'],
    },
  }
}

function JsonLd({ project }: { project: (typeof projects)[0] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: `${project.name} Vaka Çalışması`,
        description: project.desc,
        about: project.industry,
        author: { '@id': 'https://ramsesdigital.com/#organization' },
        publisher: { '@id': 'https://ramsesdigital.com/#organization' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://ramsesdigital.com/portfolyo/${project.slug}` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
          { '@type': 'ListItem', position: 2, name: 'Portföy', item: 'https://ramsesdigital.com/portfolyo' },
          { '@type': 'ListItem', position: 3, name: project.name, item: `https://ramsesdigital.com/portfolyo/${project.slug}` },
        ],
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function CaseStudyPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2)

  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <JsonLd project={project} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-10 flex-wrap">
          <Link href="/" className="hover:text-zinc-300 transition-colors">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/portfolyo" className="hover:text-zinc-300 transition-colors">Portföy</Link>
          <span>/</span>
          <span className="text-zinc-400">{project.name}</span>
        </nav>

        {/* Browser chrome + screenshot */}
        <div className="rounded-2xl overflow-hidden border border-white/[0.06] mb-10">
          <div className="bg-[#080D18] border-b border-white/[0.06] px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 bg-white/[0.05] rounded-md px-3 py-1 flex items-center gap-2">
              <Globe size={10} className="text-zinc-500 shrink-0" />
              <span className="text-zinc-400 text-xs font-mono truncate">{project.displayUrl}</span>
            </div>
          </div>
          <div className="relative h-64 sm:h-96">
            <Image
              src={project.thumb}
              alt={`${project.name} web sitesi ekran görüntüsü`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>
        </div>

        {/* Header */}
        <header className="mb-12">
          <p className="text-blue-400 text-xs uppercase tracking-wider mb-2">{project.industry} · {project.category}</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">{project.name}</h1>
          <p className="text-zinc-400 text-lg mb-6">{project.title}</p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-full px-4 py-2 transition-all"
            >
              Canlı Siteyi Ziyaret Et <ExternalLink size={13} />
            </a>
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs bg-white/[0.04] border border-white/[0.08] text-zinc-400 rounded-full px-2.5 py-1">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Zorluk */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-3">Zorluk</h2>
          <p className="text-zinc-400 leading-relaxed">{project.challenge}</p>
        </section>

        {/* Yaklaşım */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4">Yaklaşımımız</h2>
          <ul className="space-y-3">
            {project.approach.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
                <span className="text-zinc-400 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Sonuç */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-3">Sonuç</h2>
          <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-5">
            <p className="text-zinc-300 leading-relaxed">{project.outcome}</p>
          </div>
        </section>

        {/* Testimonial */}
        {project.testimonial && (
          <section className="mb-16">
            <blockquote className="border-l-2 border-blue-500 bg-blue-500/[0.04] rounded-r-xl px-6 py-5">
              <p className="text-zinc-200 text-lg leading-relaxed italic mb-4">&ldquo;{project.testimonial.quote}&rdquo;</p>
              <footer className="text-sm">
                <span className="text-white font-medium">{project.testimonial.author}</span>
                <span className="text-zinc-500"> — {project.testimonial.role}</span>
              </footer>
            </blockquote>
          </section>
        )}

        {/* Related */}
        {related.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-bold text-white mb-6">Diğer Projeler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/portfolyo/${rp.slug}`}
                  className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-all group"
                >
                  <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">{rp.industry}</p>
                  <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-blue-300 transition-colors mb-2">
                    {rp.name}
                  </h3>
                  <p className="text-zinc-400 text-xs line-clamp-2">{rp.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-gradient-to-br from-blue-500/10 to-violet-500/5 border border-blue-500/20 rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Sıradaki Proje Sizin Olsun</h2>
          <p className="text-zinc-400 mb-7 max-w-md mx-auto leading-relaxed">
            {project.industry} sektöründe veya farklı bir alanda, markanız için ne yapabileceğimizi konuşalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <CalendlyButton label="Ücretsiz Danışmanlık Al" variant="primary" />
            <a
              href={`https://wa.me/905355601936?text=${encodeURIComponent(`Merhaba! ${project.name} vaka çalışmanızı inceledim, benzer bir proje için görüşmek istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-7 py-3.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
