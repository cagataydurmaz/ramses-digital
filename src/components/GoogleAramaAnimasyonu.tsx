'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, MapPin, Star, Sparkles } from 'lucide-react'

// Ana sayfa: telefonda kendiliğinden yazılan Google araması ve öne çıkan "Sizin İşletmeniz" sonucu.
// Temsili bir gösterimdir (gerçek arama sonucu değil); kodla çizilir, dış görsel/telif yok.
const ARAMALAR = ['izmit web tasarım', 'kocaeli diş kliniği', 'gebze oto servis', 'bursa veteriner']

export default function GoogleAramaAnimasyonu() {
  const kutu = useRef<HTMLDivElement>(null)
  const [aktif, setAktif] = useState(false)
  const [sira, setSira] = useState(0)
  const [yazi, setYazi] = useState('')
  const [sonuc, setSonuc] = useState(false)

  useEffect(() => {
    const el = kutu.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setYazi(ARAMALAR[0])
      setSonuc(true)
      return
    }
    const io = new IntersectionObserver(([e]) => setAktif(e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!aktif) return
    const hedef = ARAMALAR[sira]
    let i = 0
    setYazi('')
    setSonuc(false)
    const zamanlayicilar: ReturnType<typeof setTimeout>[] = []
    const yaz = setInterval(() => {
      i++
      setYazi(hedef.slice(0, i))
      if (i >= hedef.length) {
        clearInterval(yaz)
        zamanlayicilar.push(setTimeout(() => setSonuc(true), 450))
        zamanlayicilar.push(setTimeout(() => setSira((s) => (s + 1) % ARAMALAR.length), 4200))
      }
    }, 75)
    return () => {
      clearInterval(yaz)
      zamanlayicilar.forEach(clearTimeout)
    }
  }, [aktif, sira])

  return (
    <div ref={kutu} className="relative mx-auto w-[300px] sm:w-[320px]" aria-hidden>
      <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_65%)] pointer-events-none" />
      <div className="relative rounded-[2.4rem] bg-[#05070d] p-2.5 ring-1 ring-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        <div className="relative rounded-[2rem] bg-[#0B1022] overflow-hidden h-[540px]">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black z-10" />
          <div className="pt-10 px-4">
            <div className="flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-2.5">
              <Search size={15} className="text-zinc-400 shrink-0" />
              <span className="text-white text-sm truncate">
                {yazi}
                <span className="inline-block w-[2px] h-4 bg-blue-400 align-middle ml-0.5 animate-pulse" />
              </span>
            </div>

            <div className={`mt-4 space-y-3 transition-all duration-500 ${sonuc ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <div className="rounded-xl border border-violet-500/25 bg-violet-500/[0.07] p-3">
                <p className="flex items-center gap-1.5 text-violet-300 text-[11px] font-semibold mb-1.5"><Sparkles size={12} /> Yapay zekâ özeti</p>
                <div className="h-2 rounded bg-white/15 w-11/12 mb-1.5" />
                <div className="h-2 rounded bg-white/10 w-3/4" />
              </div>

              <div className="relative rounded-xl border border-blue-400/60 bg-blue-500/10 p-3 shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)]">
                <span className="absolute -top-2 right-3 text-[10px] font-semibold bg-blue-500 text-white rounded-full px-2 py-0.5">Sizin İşletmeniz</span>
                <p className="text-blue-300 text-sm font-semibold">İşletmenizin Adı</p>
                <p className="flex items-center gap-1 text-amber-400 text-[11px] mt-0.5">
                  <Star size={11} className="fill-amber-400" /><Star size={11} className="fill-amber-400" /><Star size={11} className="fill-amber-400" /><Star size={11} className="fill-amber-400" /><Star size={11} className="fill-amber-400" />
                  <span className="text-zinc-400 ml-1">Google yorumları</span>
                </p>
                <p className="flex items-center gap-1 text-zinc-400 text-[11px] mt-1"><MapPin size={11} /> Haritada, aramada ve yapay zekâda</p>
              </div>

              {[0, 1, 2].map((n) => (
                <div key={n} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                  <div className="h-2.5 rounded bg-white/15 w-1/2 mb-2" />
                  <div className="h-2 rounded bg-white/[0.08] w-11/12 mb-1.5" />
                  <div className="h-2 rounded bg-white/[0.06] w-2/3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-zinc-600 text-[11px] mt-3">Temsili gösterim</p>
    </div>
  )
}
