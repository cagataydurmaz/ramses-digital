'use client'

import { useEffect, useRef, useState } from 'react'
import { Route } from 'lucide-react'

// Blog: "1. …, 2. …" diye ilerleyen yazılar için hareketli yol haritası (telefonsuz infografik).
// Adımlar sırayla belirir, vurgu adım adım ilerler; her adım ilgili bölüme götürür.
export default function AdimHaritasi({ adimlar }: { adimlar: { id: string; no: string; metin: string }[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [goster, setGoster] = useState(false)
  const [odak, setOdak] = useState(-1)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setGoster(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGoster(true); io.disconnect() } }, { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!goster) return
    const t = setInterval(() => setOdak((n) => (n + 1) % adimlar.length), 1300)
    return () => clearInterval(t)
  }, [goster, adimlar.length])

  return (
    <nav ref={ref} aria-label="Yazının adımları" className="my-8 rounded-2xl border border-white/[0.08] bg-[#0D1225] p-5">
      <p className="flex items-center gap-2 text-white font-semibold text-sm mb-4">
        <Route size={17} className="text-blue-400" /> Yol haritası: {adimlar.length} adım
      </p>
      <ol className="relative space-y-2.5">
        <span aria-hidden className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />
        {adimlar.map((x, i) => (
          <li
            key={x.id}
            className={`relative transition-all duration-500 ${goster ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
            style={{ transitionDelay: goster && odak < 0 ? `${i * 90}ms` : '0ms' }}
          >
            <a href={`#${x.id}`} className="group flex items-center gap-3 no-underline">
              <span
                className={`relative z-10 w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${odak === i ? 'bg-blue-500 text-white shadow-[0_0_18px_rgba(59,130,246,0.8)] scale-110' : 'bg-[#141b33] text-blue-300 ring-1 ring-blue-500/30'}`}
              >
                {x.no}
              </span>
              <span className={`text-sm leading-snug transition-colors ${odak === i ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>{x.metin}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
