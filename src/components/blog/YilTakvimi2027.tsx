'use client'

import { useEffect, useRef, useState } from 'react'
import { CalendarDays } from 'lucide-react'

// Blog: 2027 pazarlama takvimi. Ay kartları sırayla belirir, önemli günler vurgulanır.
// Tarihler gerçek (dini bayramlar Diyanet 2027 takvimine göre); tahmini tarih yazılmaz.
type Gun = { t: string; ad: string; vurgu?: boolean }
const AYLAR: { ay: string; gunler: Gun[] }[] = [
  { ay: 'Ocak', gunler: [{ t: '1', ad: 'Yılbaşı' }, { t: 'Ocak ort.', ad: 'Yarıyıl tatili' }] },
  { ay: 'Şubat', gunler: [{ t: 'Şubat başı', ad: 'Ramazan başlıyor', vurgu: true }, { t: '14', ad: 'Sevgililer Günü' }] },
  { ay: 'Mart', gunler: [{ t: '8', ad: 'Kadınlar Günü · arefe' }, { t: '9–11', ad: 'Ramazan Bayramı', vurgu: true }] },
  { ay: 'Nisan', gunler: [{ t: '23', ad: 'Çocuk Bayramı' }] },
  { ay: 'Mayıs', gunler: [{ t: '9', ad: 'Anneler Günü', vurgu: true }, { t: '16–19', ad: 'Kurban Bayramı', vurgu: true }] },
  { ay: 'Haziran', gunler: [{ t: '20', ad: 'Babalar Günü' }, { t: 'Haziran', ad: 'Mezuniyet, yaz sezonu' }] },
  { ay: 'Temmuz', gunler: [{ t: 'Yaz', ad: 'Tatil sezonu' }] },
  { ay: 'Ağustos', gunler: [{ t: '30', ad: 'Zafer Bayramı' }, { t: 'Ay sonu', ad: 'Okula dönüş' }] },
  { ay: 'Eylül', gunler: [{ t: 'Eylül', ad: 'Okul ve kurs kayıtları', vurgu: true }] },
  { ay: 'Ekim', gunler: [{ t: '29', ad: 'Cumhuriyet Bayramı' }, { t: 'Ay sonu', ad: 'Kış sezonu hazırlığı' }] },
  { ay: 'Kasım', gunler: [{ t: '11', ad: '11.11 indirimleri' }, { t: '26', ad: 'Efsane Cuma', vurgu: true }] },
  { ay: 'Aralık', gunler: [{ t: 'Aralık', ad: 'Yılbaşı kampanyaları', vurgu: true }] },
]

export default function YilTakvimi2027() {
  const ref = useRef<HTMLDivElement>(null)
  const [goster, setGoster] = useState(false)
  const [odak, setOdak] = useState(-1)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setGoster(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGoster(true); io.disconnect() } }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!goster) return
    const t = setInterval(() => setOdak((n) => (n + 1) % AYLAR.length), 1400)
    return () => clearInterval(t)
  }, [goster])

  return (
    <div ref={ref} className="rounded-2xl border border-white/[0.08] bg-[#0D1225] p-4 sm:p-5">
      <p className="flex items-center gap-2 text-white font-semibold mb-4">
        <CalendarDays size={18} className="text-blue-400" /> 2027 pazarlama takvimi
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {AYLAR.map((m, i) => (
          <div
            key={m.ay}
            className={`rounded-xl border p-3 transition-all duration-500 ${goster ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'} ${odak === i ? 'border-blue-400/60 bg-blue-500/10 shadow-[0_0_24px_-8px_rgba(59,130,246,0.8)]' : 'border-white/[0.06] bg-white/[0.02]'}`}
            style={{ transitionDelay: goster && odak < 0 ? `${i * 60}ms` : '0ms' }}
          >
            <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${odak === i ? 'text-blue-300' : 'text-zinc-400'}`}>{m.ay}</p>
            <ul className="space-y-1.5">
              {m.gunler.map((g) => (
                <li key={g.ad} className="text-[12px] leading-snug">
                  <span className={`font-semibold ${g.vurgu ? 'text-blue-300' : 'text-zinc-300'}`}>{g.t}</span>{' '}
                  <span className="text-zinc-400">{g.ad}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-zinc-600 text-[11px] mt-3">Dini bayramlar Diyanet 2027 takvimine göre. Mavi: kampanya için en kritik dönemler.</p>
    </div>
  )
}
