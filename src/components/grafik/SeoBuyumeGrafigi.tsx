'use client'
import { useEffect, useRef, useState } from 'react'
import { Wrench, TrendingUp, Rocket } from 'lucide-react'

// "SEO zamanla nasıl ilerler?" — rakamsız, temsili büyüme eğrisi. Eksenlerde sayı yok; sonuç garantisi verilmez.
const EVRELER = [
  { ay: '1–3. ay', baslik: 'Altyapı', not: 'Teknik düzeltmeler, hız, İşletme Profili ve temel sayfalar. Etkisi henüz az görünür.', icon: Wrench, x0: 0, x1: 25 },
  { ay: '4–6. ay', baslik: 'İlk yükseliş', not: 'Dar ve ulaşılabilir aramalarda ilk sıralar ve ilk talepler.', icon: TrendingUp, x0: 25, x1: 50 },
  { ay: '7–12. ay', baslik: 'Büyüme', not: 'İçerik ve güven arttıkça daha rekabetçi aramalarda görünürlük.', icon: Rocket, x0: 50, x1: 100 },
]

// 0–100 genişlik, 0–60 yükseklik; düz başlayan, sonra hızlanan eğri.
const EGRI = 'M2 54 C14 53 20 52 25 49 C32 45 38 40 50 33 C62 26 72 18 84 12 C90 9 94 7 98 5'
const ALAN = `${EGRI} L98 58 L2 58 Z`

export default function SeoBuyumeGrafigi() {
  const ref = useRef<HTMLDivElement>(null)
  const [goster, setGoster] = useState(false)
  const [evre, setEvre] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setGoster(true); setEvre(2); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGoster(true); io.disconnect() } }, { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!goster) return
    const t = setInterval(() => setEvre((n) => (n + 1) % EVRELER.length), 1800)
    return () => clearInterval(t)
  }, [goster])

  const E = EVRELER[evre]

  return (
    <section aria-labelledby="seo-zaman" className="py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">Gerçekçi beklenti</p>
          <h2 id="seo-zaman" className="text-3xl md:text-4xl font-bold text-white mb-4">SEO Zamanla Nasıl İlerler?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">SEO reklam gibi ertesi gün sonuç vermez; birikerek büyür. Tipik bir çalışmanın seyri aşağı yukarı böyledir.</p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-8 items-center">
          <div className="relative rounded-2xl bg-[#0B1022] border border-white/[0.08] p-4 sm:p-6">
            <svg viewBox="0 0 100 64" className="w-full h-auto overflow-visible" aria-hidden>
              <defs>
                <linearGradient id="seo-alan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="rgba(59,130,246,0.35)" />
                  <stop offset="1" stopColor="rgba(59,130,246,0)" />
                </linearGradient>
                <clipPath id="seo-kirp">
                  <rect x="0" y="0" height="64" width={goster ? 100 : 0} style={{ transition: 'width 2.2s cubic-bezier(.4,0,.2,1)' }} />
                </clipPath>
              </defs>
              {EVRELER.map((v, k) => (
                <rect key={v.ay} x={v.x0} y="0" width={v.x1 - v.x0} height="58" fill={k === evre ? 'rgba(59,130,246,0.08)' : 'transparent'} style={{ transition: 'fill .6s' }} />
              ))}
              {[25, 50].map((x) => <line key={x} x1={x} y1="0" x2={x} y2="58" stroke="rgba(255,255,255,0.08)" strokeWidth="0.3" strokeDasharray="1 1" />)}
              {[15, 30, 45].map((y) => <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.25" />)}
              <line x1="0" y1="58" x2="100" y2="58" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
              <g clipPath="url(#seo-kirp)">
                <path d={ALAN} fill="url(#seo-alan)" />
                <path d={EGRI} fill="none" stroke="#60A5FA" strokeWidth="0.9" strokeLinecap="round" />
              </g>
              <circle cx="98" cy="5" r="1.5" fill="#93C5FD" style={{ opacity: goster ? 1 : 0, transition: 'opacity .4s 2s' }} />
              <circle cx="98" cy="5" r="3" fill="none" stroke="#60A5FA" strokeWidth="0.3" className={goster ? 'animate-ping' : 'hidden'} style={{ transformOrigin: '98px 5px', animationDelay: '2.2s' }} />
              {EVRELER.map((v) => (
                <text key={v.ay} x={(v.x0 + v.x1) / 2} y="62.5" fill="rgba(161,161,170,0.9)" fontSize="2.6" textAnchor="middle">{v.ay}</text>
              ))}
              <text x="1" y="3" fill="rgba(161,161,170,0.7)" fontSize="2.4">Google&apos;da görünürlük</text>
            </svg>
            <p className="text-zinc-600 text-[11px] mt-2">Temsili gösterim; eksenlerde gerçek veri yoktur. Süre sektöre ve rekabete göre değişir.</p>
          </div>

          <div className="space-y-3">
            {EVRELER.map((v, k) => {
              const I = v.icon
              return (
                <button
                  type="button"
                  key={v.ay}
                  onClick={() => setEvre(k)}
                  className={`w-full text-left rounded-xl p-4 border transition-all duration-500 ${k === evre ? 'bg-blue-500/[0.08] border-blue-400/50 shadow-[0_0_24px_rgba(59,130,246,0.2)]' : 'bg-[#0D1225] border-white/[0.06]'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${k === evre ? 'bg-blue-500/25' : 'bg-blue-500/10'}`}><I size={17} className="text-blue-400" /></span>
                    <div>
                      <p className="text-white font-semibold text-sm">{v.baslik} <span className="text-zinc-500 font-normal">· {v.ay}</span></p>
                      <p className={`text-zinc-400 text-sm leading-relaxed transition-all duration-500 ${k === evre ? 'mt-1' : 'max-h-0 overflow-hidden lg:max-h-none lg:mt-1'}`}>{v.not}</p>
                    </div>
                  </div>
                </button>
              )
            })}
            <span className="sr-only">Şu an vurgulanan evre: {E.baslik}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
