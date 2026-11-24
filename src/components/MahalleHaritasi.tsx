'use client'
import { useEffect, useRef, useState } from 'react'
import { Search, MapPin } from 'lucide-react'

export type Mahalle = { ad: string; x: number; y: number; arama: string }

// İlçenin semtleri sade bir haritada sırayla yanar; her semtte müşterinin yapabileceği örnek arama gösterilir.
// Temsili, ölçeksiz bir krokidir; arama hacmi veya müşteri iddiası içermez.
export default function MahalleHaritasi({ ilce, bulunma, mahalleler, su, suAd, suKonum = [95, 60, -72] }: { ilce: string; bulunma: string; mahalleler: Mahalle[]; su?: string; suAd?: string; suKonum?: number[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [aktif, setAktif] = useState(false)
  const [i, setI] = useState(0)
  const [durdu, setDurdu] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(([e]) => setAktif(e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!aktif || durdu) return
    const t = setInterval(() => setI((n) => (n + 1) % mahalleler.length), 2200)
    return () => clearInterval(t)
  }, [aktif, durdu, mahalleler.length])

  const m = mahalleler[i]

  return (
    <section aria-labelledby="semt-haritasi" className="py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">Semt semt görünürlük</p>
          <h2 id="semt-haritasi" className="text-3xl md:text-4xl font-bold text-white mb-4">{ilce} Müşterisi Semt Adıyla Arar</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">{bulunma} aramaların önemli bir kısmı semt adıyla yapılır. Her semt için ayrı hedef belirleyip işletmenizi o aramalarda görünür kılmayı amaçlıyoruz.</p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-center">
          <div className="relative mx-auto w-full max-w-[520px] aspect-square rounded-3xl bg-[#0B1022] border border-white/[0.08] overflow-hidden">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
              <defs>
                <pattern id="izgara" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M8 0H0V8" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.3" />
                </pattern>
                <linearGradient id="deniz" x1="0" x2="1">
                  <stop offset="0" stopColor="rgba(59,130,246,0.22)" />
                  <stop offset="1" stopColor="rgba(59,130,246,0.08)" />
                </linearGradient>
              </defs>
              <rect width="100" height="100" fill="url(#izgara)" />
              {su && <path d={su} fill="url(#deniz)" stroke="rgba(96,165,250,0.35)" strokeWidth="0.4" />}
              {suAd && <text x={suKonum[0]} y={suKonum[1]} fill="rgba(147,197,253,0.55)" fontSize="3" fontWeight="600" letterSpacing="0.6" transform={`rotate(${suKonum[2]} ${suKonum[0]} ${suKonum[1]})`} textAnchor="middle">{suAd.toLocaleUpperCase('tr-TR')}</text>}
              {mahalleler.map((n, k) => (
                <line key={`c${k}`} x1={n.x} y1={n.y} x2={m.x} y2={m.y} stroke="rgba(96,165,250,0.12)" strokeWidth="0.3" />
              ))}
            </svg>

            {mahalleler.map((n, k) => {
              const secili = k === i
              return (
                <button
                  key={n.ad}
                  type="button"
                  onClick={() => { setI(k); setDurdu(true) }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                  aria-label={`${n.ad}: ${n.arama}`}
                >
                  <span className="relative flex items-center justify-center">
                    {secili && <span className="absolute w-8 h-8 rounded-full bg-blue-400/30 animate-ping" />}
                    <span className={`relative w-3 h-3 rounded-full ring-2 transition-all duration-500 ${secili ? 'bg-blue-400 ring-blue-200 scale-125 shadow-[0_0_16px_rgba(96,165,250,0.9)]' : 'bg-zinc-500 ring-white/10 group-hover:bg-blue-300'}`} />
                    <span className={`absolute left-1/2 -translate-x-1/2 top-full mt-1.5 whitespace-nowrap text-[10px] sm:text-[11px] font-medium transition-colors duration-500 ${secili ? 'text-white' : 'text-zinc-500'}`}>{n.ad}</span>
                  </span>
                </button>
              )
            })}
            <p className="absolute bottom-2 left-3 text-[10px] text-zinc-600">Temsili, ölçeksiz kroki</p>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-4 shadow-[0_20px_60px_-20px_rgba(59,130,246,0.35)]">
              <div className="flex items-center gap-2 rounded-full border border-zinc-200 shadow-sm px-4 py-2.5">
                <Search size={16} className="text-[#4285F4] shrink-0" />
                <span key={m.arama} className="text-[15px] text-zinc-800 truncate animate-[belir_.4s_ease-out]">{m.arama}</span>
              </div>
              <div key={m.ad} className="mt-3 rounded-xl border-2 border-blue-500/70 bg-blue-50 p-3 animate-[belir_.5s_ease-out]">
                <p className="text-[#1a0dab] font-medium">İşletmenizin Adı</p>
                <p className="text-zinc-600 text-sm flex items-center gap-1"><MapPin size={13} className="text-[#EA4335]" /> {m.ad}, {ilce}</p>
                <p className="text-xs text-blue-700 font-semibold mt-1">Hedef: haritada ilk sonuçlar</p>
              </div>
              <div className="mt-2 space-y-2" aria-hidden>
                <div className="h-10 rounded-lg bg-zinc-100" />
                <div className="h-10 rounded-lg bg-zinc-100" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {mahalleler.map((n, k) => (
                <button
                  key={n.ad}
                  type="button"
                  onClick={() => { setI(k); setDurdu(true) }}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium border transition-colors ${k === i ? 'bg-blue-500/15 border-blue-400/60 text-blue-200' : 'bg-white/[0.03] border-white/10 text-zinc-400 hover:text-white'}`}
                >
                  {n.ad}
                </button>
              ))}
            </div>
            <p className="text-zinc-500 text-xs mt-4">Örnek aramalardır; temsili gösterim. Sıralama garantisi verilmez.</p>
          </div>
        </div>
      </div>
      <style>{'@keyframes belir{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}'}</style>
    </section>
  )
}
