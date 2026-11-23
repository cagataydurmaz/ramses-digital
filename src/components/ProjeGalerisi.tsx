import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/lib/portfolio'
import TelefonCercevesi from './TelefonCercevesi'

// Şehir/hizmet sayfalarında gerçek proje görselleri (masaüstü + telefon).
export default function ProjeGalerisi({ baslik = 'Yaptığımız Web Sitelerinden Örnekler', adet = 6 }: { baslik?: string; adet?: number }) {
  const liste = projects.filter((p) => p.mobil).slice(0, adet)
  return (
    <section aria-label={baslik} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">{baslik}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Hepsi canlı ve ziyaret edilebilir. Bilgisayar ve telefon görünümü birlikte.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {liste.map((p) => (
            <Link key={p.slug} href={`/portfolyo/${p.slug}`} prefetch={false} className="group block bg-[#0D1225] border border-white/[0.08] hover:border-blue-500/30 hover:-translate-y-1 rounded-2xl overflow-hidden transition-all duration-300">
              <div className="relative aspect-[16/10] bg-[#080D18] overflow-hidden">
                <Image src={p.thumb} alt={`${p.name} web sitesi`} fill sizes="(max-width: 640px) 100vw, 380px" loading="lazy" className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500" />
                {p.mobil && <TelefonCercevesi src={p.mobil} alt={`${p.name} mobil görünüm`} sizes="80px" className="w-[58px] right-3 bottom-2" />}
              </div>
              <div className="p-5">
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1 truncate">{p.industry}</p>
                <h3 className="text-white font-semibold">{p.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/portfolyo" prefetch={false} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium">
            Tüm projeleri gör <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
