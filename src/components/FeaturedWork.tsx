import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/portfolio'
import KayanSerit from './KayanSerit'
import TelefonCercevesi from './TelefonCercevesi'

// Öne çıkan projeler için özel kısa özet; diğerlerinde portföydeki kategori yazılır.
const OZET: Record<string, string> = {
  depodez: 'Web tasarım, SEO, 16 ilçe sayfası ve Google Ads bakımı',
  'nur-celen': "Yerel SEO ile Google'da 1. sayfaya taşındı",
  'mert-anil-guler': 'Reklamsız, içerik ve SEO ile görünürlük',
}

type Proje = (typeof projects)[number]

function Kart({ p, gizli }: { p: Proje; gizli?: boolean }) {
  const tab = gizli ? -1 : undefined
  return (
    <article className="group w-[290px] sm:w-[340px] shrink-0 mx-2.5 bg-[#0D1225] border border-white/[0.08] hover:border-blue-500/30 rounded-2xl overflow-hidden transition-colors">
      <Link href={`/portfolyo/${p.slug}`} tabIndex={tab} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#080D18]">
          <Image
            src={p.thumb}
            alt={gizli ? '' : `${p.name} web sitesi ekran görüntüsü`}
            fill
            sizes="340px"
            className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          />
          {p.mobil && (
            <TelefonCercevesi src={p.mobil} alt={gizli ? '' : `${p.name} mobil görünüm`} sizes="80px" className="w-[58px] sm:w-[66px] right-3 bottom-2 group-hover:-translate-y-1 transition-transform duration-500" />
          )}
        </div>
      </Link>
      <div className="p-5">
        <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1 truncate">{p.industry}</p>
        <h3 className="text-white font-semibold text-lg mb-1.5 truncate">
          <Link href={`/portfolyo/${p.slug}`} tabIndex={tab} className="hover:text-blue-300 transition-colors">
            {p.name}
          </Link>
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 min-h-[2.75rem] line-clamp-2">{OZET[p.slug] ?? p.category}</p>
        <div className="flex items-center justify-between gap-3 text-sm">
          <Link
            href={`/portfolyo/${p.slug}`}
            tabIndex={tab}
            className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 shrink-0"
          >
            Projeyi incele <ArrowRight size={13} />
          </Link>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={tab}
            className="text-zinc-400 hover:text-white inline-flex items-center gap-1 min-w-0"
          >
            <span className="truncate">{p.displayUrl}</span> <ExternalLink size={12} className="shrink-0" />
          </a>
        </div>
      </div>
    </article>
  )
}

// Kendiliğinden kayan, dokunarak/kaydırarak da gezilebilen şerit (bkz. KayanSerit).
export default function FeaturedWork() {
  return (
    <section aria-labelledby="canli-projeler" className="py-10 sm:py-14">
      <div className="text-center mb-8 sm:mb-10 px-4">
        <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">Canlı Projeler</p>
        <h2 id="canli-projeler" className="text-2xl sm:text-3xl font-bold text-white">
          Yaptığımız işleri kendiniz ziyaret edin
        </h2>
      </div>

      <KayanSerit sure={projects.length * 7} ariaLabel="Canlı projeler">
        <div className="flex shrink-0">
          {projects.map((p) => (
            <Kart key={p.slug} p={p} />
          ))}
        </div>
        <div className="flex shrink-0" aria-hidden="true">
          {projects.map((p) => (
            <Kart key={`dup-${p.slug}`} p={p} gizli />
          ))}
        </div>
      </KayanSerit>

      <div className="text-center mt-8 sm:mt-10 px-4">
        <Link
          href="/portfolyo"
          className="group inline-flex items-center gap-2 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-blue-300 text-sm font-medium rounded-full px-6 py-3 transition-all"
        >
          Tüm portföyü görüntüle
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
