'use client'
import { useEffect, useRef, useState } from 'react'
import type { LucideIcon } from 'lucide-react'

type Adim = { icon: LucideIcon; baslik: string; aciklama: string }

// "Nasıl çalışıyoruz" adımları: sayfa kaydırıldıkça çizgi dolar, adımlar sırayla yanar.
export default function SurecCizgisi({ adimlar }: { adimlar: Adim[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [ilerleme, setIlerleme] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIlerleme(1)
      return
    }
    let kare = 0
    const hesapla = () => {
      kare = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      // Bölümün üstü ekranın %80'ine gelince başlar, altı %55'e gelince tamamlanır.
      const p = (vh * 0.8 - r.top) / (r.height + vh * 0.25)
      setIlerleme(Math.max(0, Math.min(1, p)))
    }
    const dinle = () => { if (!kare) kare = requestAnimationFrame(hesapla) }
    hesapla()
    window.addEventListener('scroll', dinle, { passive: true })
    window.addEventListener('resize', dinle)
    return () => {
      window.removeEventListener('scroll', dinle)
      window.removeEventListener('resize', dinle)
      if (kare) cancelAnimationFrame(kare)
    }
  }, [])

  const n = adimlar.length
  const yuzde = `${ilerleme * 100}%`

  return (
    <div ref={ref} className="relative">
      {/* Masaüstü: yatay çizgi (ikon hizasında) */}
      <div aria-hidden className="hidden lg:block absolute top-[25px] left-[12.5%] right-[12.5%] h-[2px] bg-white/[0.08] rounded-full">
        <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-[width] duration-150 ease-out" style={{ width: yuzde }} />
      </div>
      {/* Mobil/tablet: dikey çizgi */}
      <div aria-hidden className="lg:hidden absolute top-6 bottom-6 left-[27px] w-[2px] bg-white/[0.08] rounded-full">
        <div className="w-full rounded-full bg-gradient-to-b from-blue-500 to-violet-500 transition-[height] duration-150 ease-out" style={{ height: yuzde }} />
      </div>

      <ol className="relative grid lg:grid-cols-4 gap-4 sm:gap-5">
        {adimlar.map((a, i) => {
          const Icon = a.icon
          const aktif = ilerleme >= (i + 0.35) / n
          return (
            <li key={a.baslik} className="relative pl-16 lg:pl-0 lg:flex lg:flex-col">
              <div
                className={`absolute left-[8px] top-6 lg:static lg:mx-auto lg:mb-4 w-10 h-10 lg:w-[52px] lg:h-[52px] rounded-xl flex items-center justify-center border transition-all duration-500 ${
                  aktif
                    ? 'bg-blue-500/20 border-blue-400/60 shadow-[0_0_24px_rgba(59,130,246,0.45)] scale-105'
                    : 'bg-[#0B1120] border-white/[0.14]'
                }`}
              >
                <Icon size={18} className={`transition-colors duration-500 ${aktif ? 'text-blue-300' : 'text-zinc-500'}`} />
              </div>
              <div
                className={`h-full lg:h-auto lg:flex-1 rounded-2xl p-6 border transition-all duration-500 lg:text-center ${
                  aktif ? 'bg-white/[0.04] border-white/[0.18] opacity-100 translate-y-0' : 'bg-white/[0.02] border-white/[0.08] opacity-60 translate-y-1'
                }`}
              >
                <span className={`block text-xs font-semibold tracking-wider uppercase mb-1.5 transition-colors duration-500 ${aktif ? 'text-blue-400' : 'text-zinc-600'}`}>
                  Adım {i + 1}
                </span>
                <h3 className="text-white font-semibold text-lg mb-2">{a.baslik}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{a.aciklama}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
