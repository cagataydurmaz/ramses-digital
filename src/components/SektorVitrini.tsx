'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Briefcase, Search, MapPin, ArrowRight, Globe, Phone, Navigation } from 'lucide-react'
import TelefonKasa from '@/components/telefon/TelefonKasa'

export type VitrinSektor = { ad: string; not: string; arama?: string; slug?: string }

// İlçenin öne çıkan sektörleri: kart seçildikçe telefonda o sektörün örnek araması yazılır
// ve "İşletmeniz" sonucu öne çıkar. Temsili; puan, yorum sayısı veya rakip adı gösterilmez.
export default function SektorVitrini({ sektorler }: { sektorler: VitrinSektor[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [aktif, setAktif] = useState(false)
  const [i, setI] = useState(0)
  const [durdu, setDurdu] = useState(false)
  const [yazi, setYazi] = useState('')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setYazi(sektorler[0].arama ?? '')
      return
    }
    const io = new IntersectionObserver(([e]) => setAktif(e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [sektorler])

  // Seçili sektörün araması harf harf yazılır.
  useEffect(() => {
    const hedef = sektorler[i].arama ?? ''
    if (!aktif) { setYazi(hedef); return }
    let k = 0
    setYazi('')
    const t = setInterval(() => {
      k++
      setYazi(hedef.slice(0, k))
      if (k >= hedef.length) clearInterval(t)
    }, 55)
    return () => clearInterval(t)
  }, [i, aktif, sektorler])

  useEffect(() => {
    if (!aktif || durdu) return
    const t = setTimeout(() => setI((n) => (n + 1) % sektorler.length), 4200)
    return () => clearTimeout(t)
  }, [i, aktif, durdu, sektorler.length])

  const s = sektorler[i]
  const yazildi = yazi === (s.arama ?? '')

  return (
    <div ref={ref} className="grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 items-center">
      <div className="grid sm:grid-cols-2 gap-4">
        {sektorler.map((x, k) => (
          <div
            key={x.ad}
            role="button"
            tabIndex={0}
            onClick={() => { setI(k); setDurdu(true) }}
            onKeyDown={(e) => { if (e.key === 'Enter') { setI(k); setDurdu(true) } }}
            className={`cursor-pointer rounded-xl p-5 border transition-all duration-500 ${k === i ? 'bg-blue-500/[0.08] border-blue-400/50 shadow-[0_0_24px_rgba(59,130,246,0.25)]' : 'bg-[#0D1225] border-white/[0.06] hover:border-white/20'}`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors duration-500 ${k === i ? 'bg-blue-500/25' : 'bg-blue-500/10'}`}>
              <Briefcase size={19} className="text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-1.5">{x.ad}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{x.not}</p>
            {x.slug && (
              <Link href={`/sektorler/${x.slug}`} onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium mt-3">
                Sektör rehberi <ArrowRight size={13} />
              </Link>
            )}
          </div>
        ))}
      </div>

      <TelefonKasa alt="Temsili gösterim: sektöre göre örnek arama">
        <div className="absolute inset-0 bg-white pt-10 px-3.5">
          <div className="flex items-center gap-2 rounded-full border border-zinc-200 shadow-sm px-3.5 py-2">
            <Search size={14} className="text-[#4285F4] shrink-0" />
            <span className="text-[13px] text-zinc-800 truncate">{yazi}<span className="inline-block w-px h-3.5 bg-zinc-800 align-middle ml-px animate-pulse" /></span>
          </div>
          <div className="relative h-28 mt-3 rounded-xl bg-[#e8f0e5] overflow-hidden" aria-hidden>
            <div className="absolute inset-0 opacity-70" style={{ backgroundImage: 'linear-gradient(90deg,#fff 2px,transparent 2px),linear-gradient(0deg,#fff 2px,transparent 2px)', backgroundSize: '40px 30px' }} />
            <div className="absolute -left-6 top-12 w-[140%] h-2.5 bg-[#fde293] rotate-[-8deg]" />
            {[22, 58, 76].map((x, n) => (
              <MapPin key={x} size={n === 0 ? 26 : 18} className={`absolute -translate-x-1/2 ${n === 0 ? 'text-[#EA4335] fill-[#EA4335]' : 'text-zinc-400 fill-zinc-300'} ${n === 0 && yazildi ? 'animate-[pop_.6s_ease-out]' : ''}`} style={{ left: `${x}%`, top: n === 0 ? '30%' : `${40 + n * 8}%` }} />
            ))}
          </div>
          <div key={i} className={`mt-3 rounded-xl border-2 p-3 transition-all duration-500 ${yazildi ? 'border-blue-500 bg-blue-50 opacity-100' : 'border-zinc-200 opacity-40'}`}>
            <p className="text-[#1a0dab] font-medium text-[15px]">İşletmenizin Adı</p>
            <p className="text-zinc-600 text-xs">{s.ad}</p>
            <p className="text-xs mt-0.5"><span className="text-[#188038] font-medium">Açık</span> <span className="text-[#70757a]">· WhatsApp ile iletişim</span></p>
            <div className="flex gap-1.5 mt-2">
              {[{ I: Globe, t: 'Site' }, { I: Navigation, t: 'Yol' }, { I: Phone, t: 'Ara' }].map(({ I, t }) => (
                <span key={t} className="inline-flex items-center gap-1 rounded-full border border-zinc-300 px-2 py-0.5 text-[11px] text-[#1a73e8]"><I size={11} /> {t}</span>
              ))}
            </div>
          </div>
          <div className="mt-2 space-y-2" aria-hidden>
            <div className="h-14 rounded-xl bg-zinc-100" />
            <div className="h-14 rounded-xl bg-zinc-100" />
          </div>
        </div>
      </TelefonKasa>
      <style>{'@keyframes pop{0%{transform:translateX(-50%) scale(.6)}60%{transform:translateX(-50%) scale(1.2)}100%{transform:translateX(-50%) scale(1)}}'}</style>
    </div>
  )
}
