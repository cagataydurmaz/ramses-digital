import Link from 'next/link'
import { MapPin, ArrowRight, ChevronDown } from 'lucide-react'
import { ilSeo, type IlSeoVeri } from '@/lib/ilSeo'

// Şehir (üst) sayfası ile ilçe sayfaları arasında metin içi bağlantı kümesi.
// Doğal görünüm için ilk 6 ilçe açık, gerisi "Tüm ilçeleri göster" ile açılır.
// Kapalı kısımdaki bağlantılar da HTML'de bulunur; Google hepsini görür.
const ILK = 6

function Kart({ x }: { x: IlSeoVeri }) {
  return (
    <Link
      href={`/${x.slug}-seo`}
      prefetch={false}
      className="group flex items-start gap-3 rounded-xl bg-[#0D1225] border border-white/[0.08] hover:border-blue-500/40 p-4 transition-colors"
    >
      <span className="w-9 h-9 shrink-0 rounded-lg bg-blue-500/10 flex items-center justify-center mt-0.5">
        <MapPin size={16} className="text-blue-400" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5 text-white font-semibold text-sm">
          {x.ad} <ArrowRight size={13} className="text-blue-400 group-hover:translate-x-0.5 transition-transform" />
        </span>
        <span className="block text-zinc-500 text-xs mt-1 line-clamp-2">{x.bolgeler.slice(0, 4).join(' · ')}</span>
      </span>
    </Link>
  )
}

export default function IlceBaglantilari({
  ustSlug,
  ustAd,
  baslik,
  aciklama,
  haric,
  oncelik = [],
}: {
  ustSlug: string
  ustAd?: string
  baslik: string
  aciklama: string
  haric?: string
  oncelik?: string[] // önce gösterilecek ilçe slug'ları (ör. komşu ilçeler)
}) {
  const tumu = ilSeo.filter((x) => x.ust?.slug === ustSlug && x.slug !== haric)
  if (tumu.length === 0) return null
  // Sıra: önce öncelikli (komşu) ilçeler, sonra zengin ilçe sayfaları (semt haritalı), sonra diğerleri
  const puan = (x: IlSeoVeri) => {
    const i = oncelik.indexOf(x.slug)
    if (i >= 0) return i
    return x.mahalleler ? 100 : 200
  }
  const liste = [...tumu].sort((a, b) => puan(a) - puan(b))
  const ilk = liste.slice(0, ILK)
  const kalan = liste.slice(ILK)
  const ad = ustAd ?? tumu[0].ust?.ad ?? ''

  return (
    <section aria-label={baslik} className="py-12 md:py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{baslik}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">{aciklama}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ilk.map((x) => <Kart key={x.slug} x={x} />)}
        </div>
        {kalan.length > 0 && (
          <details className="group mt-3">
            <summary className="list-none [&::-webkit-details-marker]:hidden mx-auto w-fit cursor-pointer flex items-center gap-1.5 rounded-full border border-white/10 hover:border-blue-500/40 px-4 py-2 text-sm text-zinc-300 hover:text-white transition-colors">
              <span className="group-open:hidden">Tüm {ad} ilçelerini göster ({kalan.length} ilçe daha)</span>
              <span className="hidden group-open:inline">Daha az göster</span>
              <ChevronDown size={15} className="group-open:rotate-180 transition-transform" />
            </summary>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
              {kalan.map((x) => <Kart key={x.slug} x={x} />)}
            </div>
          </details>
        )}
      </div>
    </section>
  )
}
