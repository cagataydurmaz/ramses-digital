import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { ilSeo } from '@/lib/ilSeo'

// Şehir (üst) sayfası ile ilçe sayfaları arasında metin içi bağlantı kümesi.
// Şehir sayfasında: o ilin tüm ilçe sayfaları. İlçe sayfasında: aynı ildeki diğer ilçeler.
// Google yeni ilçe sayfalarını güçlü şehir sayfalarından bulur; ziyaretçi de kendi semtine ulaşır.
export default function IlceBaglantilari({ ustSlug, baslik, aciklama, haric }: { ustSlug: string; baslik: string; aciklama: string; haric?: string }) {
  const liste = ilSeo.filter((x) => x.ust?.slug === ustSlug && x.slug !== haric)
  if (liste.length === 0) return null
  return (
    <section aria-label={baslik} className="py-12 md:py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{baslik}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">{aciklama}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {liste.map((x) => (
            <Link
              key={x.slug}
              href={`/${x.slug}-seo`}
              prefetch={false}
              className="group flex items-start gap-3 rounded-xl bg-[#0D1225] border border-white/[0.08] hover:border-blue-500/40 p-4 transition-colors"
            >
              <span className="w-9 h-9 shrink-0 rounded-lg bg-blue-500/10 flex items-center justify-center mt-0.5">
                <MapPin size={16} className="text-blue-400" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1.5 text-white font-semibold text-sm">
                  {x.ad} SEO <ArrowRight size={13} className="text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <span className="block text-zinc-500 text-xs mt-1 line-clamp-2">{x.bolgeler.slice(0, 4).join(' · ')}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
