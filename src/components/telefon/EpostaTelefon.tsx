'use client'
import { Mail, Zap } from 'lucide-react'
import TelefonKasa from './TelefonKasa'
import { useSiraliAdim, BELIR_CSS } from './useSiraliAdim'

// Müşterinin gelen kutusuna, davranışına göre otomatik giden e-postalar (temsili).
const POSTALAR = [
  { konu: 'Hoş geldiniz! Size özel ilk adım', ozet: 'Kaydolduğunuz için teşekkürler. Sizin için hazırladığımız rehber…', tetik: 'Kayıt olunca' },
  { konu: 'Sepetinizde ürün kaldı', ozet: 'Seçtiğiniz ürün hâlâ sizi bekliyor. Siparişi tamamlamak için…', tetik: 'Sepet terk edilince' },
  { konu: 'Randevunuz yarın 14:00', ozet: 'Hatırlatma: Yarın görüşmek üzere. Konum ve yol tarifi…', tetik: 'Randevudan 1 gün önce' },
  { konu: 'Deneyiminizi merak ediyoruz', ozet: 'Bize Google’da yorum bırakmak 1 dakikanızı alır…', tetik: 'Hizmetten sonra' },
]

export default function EpostaTelefon() {
  const { ref, adim } = useSiraliAdim(POSTALAR.length, 1500)
  const gelen = POSTALAR.slice(0, adim).reverse()

  return (
    <div ref={ref}>
      <TelefonKasa alt="Temsili gösterim: davranışa göre otomatik e-postalar">
        <div className="absolute inset-0 bg-[#f6f8fc] text-zinc-900 pt-9 flex flex-col">
          <div className="px-4 pb-3 flex items-center justify-between">
            <p className="text-lg font-semibold">Gelen kutusu</p>
            <span className="w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-semibold flex items-center justify-center">M</span>
          </div>
          <div className="flex-1 overflow-hidden px-2 space-y-1.5">
            {gelen.map((p, i) => (
              <div
                key={`${p.konu}-${adim}`}
                className={`rounded-xl px-3 py-2.5 ${i === 0 ? 'bg-white shadow-md ring-1 ring-orange-200 animate-[belir_.45s_ease-out]' : 'bg-white/70'}`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0"><Mail size={14} /></span>
                  <p className={`text-[13px] truncate ${i === 0 ? 'font-semibold' : 'font-medium text-zinc-700'}`}>İşletmeniz</p>
                  {i === 0 && <span className="ml-auto w-2 h-2 rounded-full bg-blue-600 shrink-0" />}
                </div>
                <p className={`text-[13px] mt-1 truncate ${i === 0 ? 'font-semibold' : 'text-zinc-700'}`}>{p.konu}</p>
                <p className="text-[11.5px] text-zinc-500 truncate">{p.ozet}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-[10px] text-orange-600 bg-orange-50 rounded-full px-2 py-0.5">
                  <Zap size={10} /> Otomatik · {p.tetik}
                </p>
              </div>
            ))}
            {[0, 1, 2].slice(0, Math.max(0, 4 - gelen.length)).map((i) => (
              <div key={`bos-${i}`} className="rounded-xl px-3 py-3 bg-white/50 space-y-1.5">
                <div className="h-2.5 w-24 rounded bg-zinc-200" />
                <div className="h-2 w-40 rounded bg-zinc-200/80" />
              </div>
            ))}
          </div>
        </div>
      </TelefonKasa>
      <style>{BELIR_CSS}</style>
    </div>
  )
}
