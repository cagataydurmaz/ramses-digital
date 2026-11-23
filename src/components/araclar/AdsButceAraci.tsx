'use client'
import { useRef, useState } from 'react'
import { trackEvent } from '@/lib/tracking'

const fmt = (n: number, d = 0) => n.toLocaleString('tr-TR', { maximumFractionDigits: d, minimumFractionDigits: d })

export default function AdsButceAraci() {
  const [aday, setAday] = useState('')
  const [oran, setOran] = useState('')
  const [tbm, setTbm] = useState('')
  const izlendi = useRef(false)

  const a = parseFloat(aday.replace(',', '.'))
  const o = parseFloat(oran.replace(',', '.'))
  const c = parseFloat(tbm.replace(',', '.'))
  const gecerli = a > 0 && o > 0 && o <= 100 && c > 0
  const tiklama = gecerli ? Math.ceil(a / (o / 100)) : 0
  const aylik = gecerli ? tiklama * c : 0
  const gunluk = aylik / 30.4

  const izle = () => {
    if (!izlendi.current) { izlendi.current = true; trackEvent('arac_kullanildi', { arac: 'google-ads-butce-hesaplayici' }) }
  }
  const girdi = 'w-full bg-[#080D18] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500'

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="b-aday" className="block text-white text-sm font-medium mb-2">Aylık hedef aday sayısı</label>
          <input id="b-aday" inputMode="decimal" placeholder="ör. 20" value={aday} onChange={(e) => { setAday(e.target.value); izle() }} className={girdi} />
        </div>
        <div>
          <label htmlFor="b-oran" className="block text-white text-sm font-medium mb-2">Dönüşüm oranı (%)</label>
          <input id="b-oran" inputMode="decimal" placeholder="ör. 3" value={oran} onChange={(e) => { setOran(e.target.value); izle() }} className={girdi} />
        </div>
        <div>
          <label htmlFor="b-tbm" className="block text-white text-sm font-medium mb-2">Tıklama başı maliyet (₺)</label>
          <input id="b-tbm" inputMode="decimal" placeholder="kendi tahmininiz" value={tbm} onChange={(e) => { setTbm(e.target.value); izle() }} className={girdi} />
        </div>
      </div>
      <p className="text-zinc-500 text-xs">Dönüşüm oranı: sitenize gelen 100 kişiden kaçı sizi arıyor, form dolduruyor veya mesaj atıyor. Tıklama başı maliyeti Google Ads Anahtar Kelime Planlayıcı&apos;dan tahmin edebilir ya da kendi öngörünüzü girebilirsiniz.</p>

      <div className="grid sm:grid-cols-3 gap-4" aria-live="polite">
        {[
          { l: 'Gereken tıklama', v: gecerli ? fmt(tiklama) : '—' },
          { l: 'Aylık bütçe', v: gecerli ? `₺${fmt(aylik)}` : '—' },
          { l: 'Günlük bütçe', v: gecerli ? `₺${fmt(gunluk, 2)}` : '—' },
        ].map(({ l, v }) => (
          <div key={l} className="text-center bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
            <p className="text-2xl font-bold text-white mb-1">{v}</p>
            <p className="text-zinc-500 text-xs">{l}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-blue-500/25 bg-blue-500/[0.06] px-5 py-4">
        <p className="text-zinc-300 text-sm leading-relaxed">
          <strong className="text-blue-400">Önemli:</strong> Bu sonuçlar yalnızca sizin girdiğiniz değerlerden hesaplanır; Ramses Dijital&apos;in fiyatı ya da bir performans vaadi değildir. Reklam bütçesi Google&apos;a ödenir, yönetim hizmeti ayrıdır. Gerçek dönüşüm oranı ve tıklama maliyeti sektöre ve kampanyaya göre değişir.
        </p>
      </div>
    </div>
  )
}
