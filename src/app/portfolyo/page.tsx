import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import { ArrowRight, Globe } from 'lucide-react'
import { projects as liveProjects, type ProjectColor } from '@/lib/portfolio'

const colorMap: Record<ProjectColor, { border: string; shadow: string; badge: string; badgeHover: string; iconHover: string }> = {
  blue: { border: 'hover:border-blue-500/30', shadow: 'hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)]', badge: 'text-blue-400 bg-blue-500/10 border-blue-500/20', badgeHover: 'group-hover:text-blue-300 group-hover:bg-blue-500/20', iconHover: 'group-hover:text-blue-400' },
  violet: { border: 'hover:border-violet-500/30', shadow: 'hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.2)]', badge: 'text-violet-400 bg-violet-500/10 border-violet-500/20', badgeHover: 'group-hover:text-violet-300 group-hover:bg-violet-500/20', iconHover: 'group-hover:text-violet-400' },
  pink: { border: 'hover:border-pink-500/30', shadow: 'hover:shadow-[0_0_40px_-10px_rgba(236,72,153,0.2)]', badge: 'text-pink-400 bg-pink-500/10 border-pink-500/20', badgeHover: 'group-hover:text-pink-300 group-hover:bg-pink-500/20', iconHover: 'group-hover:text-pink-400' },
  emerald: { border: 'hover:border-emerald-500/30', shadow: 'hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)]', badge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', badgeHover: 'group-hover:text-emerald-300 group-hover:bg-emerald-500/20', iconHover: 'group-hover:text-emerald-400' },
  orange: { border: 'hover:border-orange-500/30', shadow: 'hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.2)]', badge: 'text-orange-400 bg-orange-500/10 border-orange-500/20', badgeHover: 'group-hover:text-orange-300 group-hover:bg-orange-500/20', iconHover: 'group-hover:text-orange-400' },
  cyan: { border: 'hover:border-cyan-500/30', shadow: 'hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.2)]', badge: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20', badgeHover: 'group-hover:text-cyan-300 group-hover:bg-cyan-500/20', iconHover: 'group-hover:text-cyan-400' },
  fuchsia: { border: 'hover:border-fuchsia-500/30', shadow: 'hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.2)]', badge: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20', badgeHover: 'group-hover:text-fuchsia-300 group-hover:bg-fuchsia-500/20', iconHover: 'group-hover:text-fuchsia-400' },
}

export const metadata: Metadata = {
  title: 'Portföy | Gerçek Projeler, Gerçek Sonuçlar — Ramses Dijital',
  description: 'Ramses Dijital\'in gerçek müşteri projeleri. Kocaeli psikolog, İstanbul avukat, e-ticaret ve platform projelerimizi inceleyin. Canlı siteler, doğrulanabilir sonuçlar.',
  alternates: { canonical: 'https://ramsesdigital.com/portfolyo' },
  openGraph: {
    title: 'Portföy — Ramses Dijital',
    description: 'Tasarladığımız ve büyüttüğümüz gerçek projeler. Ziyaret edebilirsiniz.',
    url: 'https://ramsesdigital.com/portfolyo',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}


const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://ramsesdigital.com/portfolyo#page',
      name: 'Ramses Dijital Portföy',
      description: 'Ramses Dijital tarafından tasarlanan ve büyütülen gerçek müşteri projeleri.',
      url: 'https://ramsesdigital.com/portfolyo',
      publisher: { '@id': 'https://ramsesdigital.com/#organization' },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: liveProjects.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: p.name,
          description: p.desc,
          url: `https://ramsesdigital.com/portfolyo/${p.slug}`,
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Portföy', item: 'https://ramsesdigital.com/portfolyo' },
      ],
    },
  ],
}

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
            Portföy
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Gerçek Projeler,
            <br />
            <span className="gradient-text">Gerçek Sonuçlar</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Tasarladığımız ve büyüttüğümüz siteler — canlı olarak ziyaret edebilirsiniz.
          </p>
        </div>
      </section>

      {/* Live Projects */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {liveProjects.map((project) => {
              const c = colorMap[project.color]
              return (
              <Link
                key={project.name}
                href={`/portfolyo/${project.slug}`}
                prefetch={false}
                className={`group block bg-[#0D1225] border border-white/[0.06] ${c.border} rounded-2xl overflow-hidden transition-all duration-300 ${c.shadow}`}
              >
                {/* Browser Chrome */}
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
                  <ArrowRight size={13} className={`text-zinc-500 ${c.iconHover} group-hover:translate-x-0.5 transition-all shrink-0`} />
                </div>

                {/* Screenshot */}
                <div className="relative overflow-hidden" style={{ height: '260px' }}>
                  <Image
                    src={project.thumb}
                    alt={`${project.name} web sitesi ekran görüntüsü`}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1225]/80 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">{project.industry} · {project.category}</p>
                      <h3 className="text-white font-bold text-lg leading-snug">{project.name}</h3>
                      <p className="text-zinc-400 text-sm">{project.title}</p>
                    </div>
                    <span className={`shrink-0 inline-flex items-center gap-1.5 text-xs font-medium border rounded-full px-3 py-1.5 transition-all ${c.badge} ${c.badgeHover}`}>
                      Vakayı İncele <ArrowRight size={11} />
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white/[0.04] border border-white/[0.08] text-zinc-400 rounded-full px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Sıradaki Proje Sizin Olsun
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Markanız için ne yapabileceğimizi konuşalım.
          </p>
          <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
        </div>
      </section>
    </>
  )
}
