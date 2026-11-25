'use client'
import { useEffect, useRef, useState } from 'react'
import { Search, Lightbulb, BarChart3 } from 'lucide-react'
import type { VakaVerisi } from '@/lib/portfolio'

// Başarı hikâyesi: Search Console'dan alınmış gerçek verilerle özet, aylık grafik, önce/sonra ve aramalar.
export default function VakaSonuclari({ v }: { v: VakaVerisi }) {
  const ref = useRef<HTMLDivElement>(null)
  const [goster, setGoster] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setGoster(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGoster(true); io.disconnect() } }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const maxG = Math.max(...v.aylik.map((a) => a[2]))
  const maxT = Math.max(...v.aylik.map((a) => a[1]))
  const n = v.aylik.length
  // Tıklama çizgisi (0–100 genişlik, 0–40 yükseklik)
  const nokta = (i: number, t: number) => `${((i + 0.5) / n) * 100},${40 - (t / maxT) * 34}`
  const cizgi = v.aylik.map((a, i) => nokta(i, a[1])).join(' ')

  const { once, sonra } = v.dagilim
  const maxD = Math.max(once.ilk10, sonra.ilk10, 1)

  return (
    <div ref={ref} className="space-y-6 mb-12">
      <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
        <BarChart3 size={14} /> Rakamlarla sonuç · {v.aralik}
      </div>
      <p className="text-zinc-400 text-sm -mt-3">{v.baslangic}</p>

      {/* Özet kutuları */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {v.ozet.map((o, i) => (
          <div key={o.etiket} className="rounded-xl bg-[#0D1225] border border-white/[0.08] p-4" style={{ transition: `opacity .6s ${i * 120}ms, transform .6s ${i * 120}ms`, opacity: goster ? 1 : 0, transform: goster ? 'none' : 'translateY(8px)' }}>
            <p className="text-2xl md:text-3xl font-bold text-white tabular-nums">{o.deger}</p>
            <p className="text-zinc-400 text-xs mt-1 leading-snug">{o.etiket}</p>
          </div>
        ))}
      </div>

      {/* Aylık grafik */}
      <div className="rounded-2xl bg-[#0B1022] border border-white/[0.08] p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <p className="text-white font-semibold text-sm">Aylık Google görünürlüğü</p>
          <div className="flex items-center gap-4 text-[11px] text-zinc-400">
            <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-blue-500/70" /> Gösterim</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-3 h-0.5 bg-emerald-400" /> Tıklama</span>
          </div>
        </div>
        <div className="relative h-48 sm:h-56">
          <div className="absolute inset-0 flex items-end gap-1 sm:gap-1.5">
            {v.aylik.map(([ay, t, g], i) => (
              <div key={ay + i} className="flex-1 h-full flex flex-col justify-end items-center group">
                <div
                  className="w-full rounded-t bg-gradient-to-t from-blue-600/60 to-blue-400/80 relative"
                  style={{ height: goster ? `${Math.max((g / maxG) * 85, 1.5)}%` : '0%', transition: `height .9s cubic-bezier(.2,.8,.2,1) ${i * 60}ms` }}
                >
                  <span className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {g.toLocaleString('tr-TR')} gösterim · {t} tık
                  </span>
                </div>
              </div>
            ))}
          </div>
          <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
            <polyline points={cizgi} fill="none" stroke="#34D399" strokeWidth="0.8" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 2, opacity: goster ? 1 : 0, transition: 'opacity .8s .9s' }} />
          </svg>
        </div>
        <div className="flex gap-1 sm:gap-1.5 mt-2">
          {v.aylik.map(([ay], i) => <span key={ay + i} className="flex-1 text-center text-[9px] sm:text-[11px] text-zinc-500">{ay}</span>)}
        </div>
        <p className="text-zinc-600 text-[11px] mt-3">{v.notlar}</p>
      </div>

      {/* Önce / sonra */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-[#0D1225] border border-white/[0.08] p-5">
          <p className="text-white font-semibold text-sm mb-4">Google’da kaçıncı sıradaydı?</p>
          {([['ilk3', 'İlk 3 sırada', 'bg-emerald-500'], ['ilk10', 'İlk sayfada (1–10)', 'bg-blue-500']] as const).map(([k, etiket, renk]) => (
            <div key={k} className="mb-4 last:mb-0">
              <p className="text-zinc-400 text-xs mb-2">{etiket} çıkan arama sayısı</p>
              {([[v.dagilim.onceEtiket, once[k], 'opacity-50'], [v.dagilim.sonraEtiket, sonra[k], '']] as const).map(([d, sayi, op]) => (
                <div key={d} className="flex items-center gap-3 mb-1.5">
                  <span className="w-20 shrink-0 text-[11px] text-zinc-500">{d}</span>
                  <div className="flex-1 h-5 rounded bg-white/[0.04] overflow-hidden">
                    <div className={`h-full rounded ${renk} ${op}`} style={{ width: goster ? `${Math.max((sayi / maxD) * 100, 2)}%` : '0%', transition: 'width 1s cubic-bezier(.2,.8,.2,1)' }} />
                  </div>
                  <span className="w-10 text-right text-sm font-semibold text-white tabular-nums">{sayi}</span>
                </div>
              ))}
            </div>
          ))}
          <p className="text-zinc-600 text-[11px] mt-3">
            Toplam görünülen arama: {once.toplam} → {sonra.toplam.toLocaleString('tr-TR')}{sonra.toplamArti ? '+' : ''}
          </p>
        </div>

        <div className="rounded-2xl bg-[#0D1225] border border-white/[0.08] p-5">
          <p className="text-white font-semibold text-sm mb-4">Öne çıkan aramalar <span className="text-zinc-500 font-normal">· {v.aramaAraligi}</span></p>
          <div className="space-y-2">
            {v.aramalar.map((a) => (
              <div key={a.sorgu} className="flex items-center gap-3 rounded-lg bg-white/[0.03] px-3 py-2">
                <Search size={13} className="text-zinc-500 shrink-0" />
                <span className="flex-1 min-w-0 truncate text-[13px] text-zinc-200">{a.sorgu}</span>
                <span className="text-[11px] text-zinc-500 whitespace-nowrap">{a.gosterim} gös.</span>
                <span className="text-[12px] font-semibold text-emerald-400 whitespace-nowrap w-16 text-right">ort. {a.sira}</span>
              </div>
            ))}
          </div>
          <p className="text-zinc-600 text-[11px] mt-3">“ort.”: Google’daki ortalama sıra. Kaynak: Google Search Console.</p>
        </div>
      </div>

      {/* Dersler */}
      <div className="rounded-2xl bg-amber-500/[0.04] border border-amber-500/15 p-5">
        <p className="text-white font-semibold text-sm mb-3 flex items-center gap-2"><Lightbulb size={15} className="text-amber-400" /> Bu projeden çıkardıklarımız</p>
        <ul className="space-y-2">
          {v.dersler.map((d) => <li key={d} className="text-zinc-400 text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-amber-400/70">{d}</li>)}
        </ul>
      </div>
    </div>
  )
}
