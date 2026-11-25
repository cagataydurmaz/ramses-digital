'use client'
import { useEffect, useRef, useState } from 'react'
import { XCircle, CheckCircle2, AlertTriangle } from 'lucide-react'

// "Reklam bütçeniz nereye gidiyor?" — kontrolsüz ve düzenlenmiş hesabı karşılaştıran temsili halka grafik.
// Yüzde yazılmaz; oranlar yalnızca fikri anlatmak içindir.
const DILIMLER = [
  { ad: 'Alakasız aramalar', ornek: '“ücretsiz”, “nasıl yapılır”, rakip adları', renk: '#F87171', icon: XCircle },
  { ad: 'İş ilanı ve bilgi aramaları', ornek: '“iş ilanı”, “maaş”, “staj”', renk: '#FBBF24', icon: AlertTriangle },
  { ad: 'Satın alma niyetli aramalar', ornek: '“izmit diş kliniği randevu”, “fiyat al”', renk: '#34D399', icon: CheckCircle2 },
]
const ORAN = { kontrolsuz: [38, 22, 40], duzenli: [6, 4, 90] } as const
type Durum = keyof typeof ORAN

const R = 40
const CEVRE = 2 * Math.PI * R

export default function AdsButceGrafigi() {
  const ref = useRef<HTMLDivElement>(null)
  const [durum, setDurum] = useState<Durum>('kontrolsuz')
  const [aktif, setAktif] = useState(false)
  const [durdu, setDurdu] = useState(false)
  const [goster, setGoster] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setGoster(true); return }
    const io = new IntersectionObserver(([e]) => { setAktif(e.isIntersecting); if (e.isIntersecting) setGoster(true) }, { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!aktif || durdu) return
    const t = setTimeout(() => setDurum((d) => (d === 'kontrolsuz' ? 'duzenli' : 'kontrolsuz')), 2600)
    return () => clearTimeout(t)
  }, [aktif, durdu, durum])

  const oranlar = ORAN[durum]
  let birikim = 0

  return (
    <section aria-labelledby="ads-butce" className="py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-wider mb-2">Bütçe nereye gidiyor?</p>
          <h2 id="ads-butce" className="text-3xl md:text-4xl font-bold text-white mb-4">Aynı Bütçe, Çok Farklı Sonuç</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Kontrol edilmeyen bir hesapta tıklamaların önemli bölümü müşteri olmayacak kişilerden gelir. Doğru ayarlarla bütçe, satın almaya hazır aramalara yönelir.</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-white/[0.04] border border-white/10 p-1">
            {([['kontrolsuz', 'Kontrolsüz hesap'], ['duzenli', 'Düzenlenmiş hesap']] as [Durum, string][]).map(([d, t]) => (
              <button
                key={d}
                type="button"
                onClick={() => { setDurum(d); setDurdu(true) }}
                className={`rounded-full px-4 sm:px-5 py-2 text-sm font-medium transition-colors ${durum === d ? (d === 'duzenli' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/15 text-red-300') : 'text-zinc-400 hover:text-white'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div ref={ref} className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-12 items-center max-w-4xl mx-auto">
          <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90" aria-hidden>
              <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12" />
              {DILIMLER.map((d, k) => {
                const uz = goster ? (oranlar[k] / 100) * CEVRE : 0
                const bas = (birikim / 100) * CEVRE
                birikim += oranlar[k]
                return (
                  <circle
                    key={d.ad}
                    cx="50" cy="50" r={R} fill="none" stroke={d.renk} strokeWidth="12"
                    strokeDasharray={`${Math.max(uz - 0.8, 0)} ${CEVRE}`}
                    strokeDashoffset={-bas}
                    style={{ transition: 'stroke-dasharray 1.1s cubic-bezier(.4,0,.2,1), stroke-dashoffset 1.1s cubic-bezier(.4,0,.2,1)' }}
                  />
                )
              })}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
              <p className="text-zinc-500 text-xs">Reklam bütçesi</p>
              <p key={durum} className={`text-lg font-bold mt-1 animate-[belir_.4s_ease-out] ${durum === 'duzenli' ? 'text-emerald-300' : 'text-red-300'}`}>
                {durum === 'duzenli' ? 'Doğru müşteriye' : 'Büyük kısmı boşa'}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {DILIMLER.map((d, k) => {
              const I = d.icon
              const pay = oranlar[k]
              return (
                <div key={d.ad} className="rounded-xl bg-[#0D1225] border border-white/[0.06] p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <I size={18} style={{ color: d.renk }} className="shrink-0" />
                    <p className="text-white font-semibold text-sm flex-1">{d.ad}</p>
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: goster ? `${pay}%` : '0%', background: d.renk, transition: 'width 1.1s cubic-bezier(.4,0,.2,1)' }} />
                  </div>
                  <p className="text-zinc-500 text-xs mt-2">Örnek: {d.ornek}</p>
                </div>
              )
            })}
            <p className="text-zinc-600 text-[11px]">Temsili gösterim; oranlar her hesapta farklıdır. Ücretsiz hesap denetiminde sizin hesabınıza bakarız.</p>
          </div>
        </div>
      </div>
      <style>{'@keyframes belir{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}'}</style>
    </section>
  )
}
