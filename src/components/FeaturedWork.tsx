import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/portfolio'

const ONE_CIKANLAR: { slug: string; ozet: string }[] = [
  { slug: 'depodez', ozet: 'Web tasarım, SEO, 16 ilçe sayfası ve Google Ads bakımı' },
  { slug: 'nur-celen', ozet: 'Yerel SEO ile Google\'da 1. sayfaya taşındı' },
  { slug: 'mert-anil-guler', ozet: 'Reklamsız, içerik ve SEO ile görünürlük' },
]

export default function FeaturedWork() {
  const items = ONE_CIKANLAR.map((o) => ({ ...o, p: projects.find((p) => p.slug === o.slug) })).filter(
    (x): x is { slug: string; ozet: string; p: (typeof projects)[number] } => Boolean(x.p),
  )
  return (
    <section aria-labelledby="canli-projeler" className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">Canlı Projeler</p>
          <h2 id="canli-projeler" className="text-2xl sm:text-3xl font-bold text-white">
            Yaptığımız işleri kendiniz ziyaret edin
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ slug, ozet, p }) => (
            <article
              key={slug}
              className="group bg-[#0D1225] border border-white/[0.08] hover:border-blue-500/30 rounded-2xl overflow-hidden transition-colors"
            >
              <Link href={`/portfolyo/${slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#080D18]">
                  <Image
                    src={p.thumb}
                    alt={`${p.name} web sitesi ekran görüntüsü`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
              </Link>
              <div className="p-5">
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">{p.industry}</p>
                <h3 className="text-white font-semibold text-lg mb-1.5">
                  <Link href={`/portfolyo/${slug}`} className="hover:text-blue-300 transition-colors">
                    {p.name}
                  </Link>
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{ozet}</p>
                <div className="flex items-center justify-between text-sm">
                  <Link href={`/portfolyo/${slug}`} className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1">
                    Projeyi incele <ArrowRight size={13} />
                  </Link>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white inline-flex items-center gap-1"
                  >
                    {p.displayUrl} <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/portfolyo"
            className="group inline-flex items-center gap-2 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-blue-300 text-sm font-medium rounded-full px-6 py-3 transition-all"
          >
            Tüm portföyü görüntüle
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
