import Link from 'next/link'
import { Gift, ArrowRight } from 'lucide-react'
import { kampanyalar, KAMPANYA_KURALI } from '@/lib/pricing'

// Hizmet sayfalarında kampanyalar (₺ yok; indirimli tutar yalnızca teklif hesaplayıcıda görünür).
export default function KampanyaSeridi({ hizmetler, basliklar }: { hizmetler: string[]; basliklar: string[] }) {
  const liste = kampanyalar(hizmetler, 'kucuk').filter((k) => basliklar.some((b) => k.baslik.includes(b)))
  if (!liste.length) return null
  return (
    <section aria-labelledby="kampanyalar" className="py-10 md:py-12 px-6">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-emerald-500/[0.08] to-blue-500/[0.05] border border-emerald-500/25 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-3 mb-4 md:mb-6">
          <div>
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Gift size={14} /> Kampanyalar
            </p>
            <h2 id="kampanyalar" className="text-xl md:text-3xl font-bold text-white">Taahhüde Özel Avantajlar</h2>
          </div>
          <Link href="/teklif-al" className="group inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 text-sm font-semibold">
            İndirimli fiyatınızı hesaplayın <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className={`grid gap-2 sm:gap-3 sm:grid-cols-2 ${liste.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {liste.map((k) => (
            <div key={k.baslik} className="bg-[#0B1022]/70 border border-white/[0.08] rounded-xl p-3 sm:p-4">
              <p className="text-white text-sm font-semibold mb-1 sm:mb-1.5">{k.baslik}</p>
              <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2 sm:line-clamp-none">{k.detay}</p>
            </div>
          ))}
        </div>
        <p className="text-zinc-500 text-[11px] mt-3 sm:mt-4">{KAMPANYA_KURALI}</p>
      </div>
    </section>
  )
}
