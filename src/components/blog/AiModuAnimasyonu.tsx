'use client'

import { Sparkles, Star, Link2, MapPin } from 'lucide-react'
import TelefonKasa from '@/components/telefon/TelefonKasa'
import { useSiraliAdim } from '@/components/telefon/useSiraliAdim'

// Blog: Google AI Modu'nda bir sorunun yapay zekâ cevabına ve işletme önerisine dönüşmesi.
// Temsili gösterim; gerçek arama sonucu değildir, kodla çizilir.
const ISLETMELER = [
  { ad: 'İşletmenizin Adı', not: 'Randevu · 5.0 · yorumlara yanıt veriyor', siz: true },
  { ad: 'Örnek Klinik', not: 'Randevu · haftada 6 gün', siz: false },
  { ad: 'Örnek Ağız ve Diş Sağlığı', not: 'Ulaşım bilgisi eksik', siz: false },
]

export default function AiModuAnimasyonu() {
  const { ref, adim } = useSiraliAdim(5, 1000, 3200)
  const gor = (n: number) => (adim >= n ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3')

  return (
    <div ref={ref}>
      <TelefonKasa alt="Temsili gösterim · Google AI Modu">
        <div className="pt-10 px-4 h-full flex flex-col">
          <div className="flex items-center gap-1.5 text-violet-300 text-[11px] font-semibold mb-3">
            <Sparkles size={13} /> AI Modu
          </div>

          <div className={`self-end max-w-[88%] rounded-2xl rounded-br-md bg-blue-600 text-white text-[12px] leading-snug px-3 py-2 transition-all duration-500 ${gor(1)}`}>
            Beşiktaş’ta randevulu, çocuklarla ilgilenen bir diş kliniği önerir misin?
          </div>

          <div className={`mt-3 rounded-xl border border-violet-500/25 bg-violet-500/[0.07] p-3 transition-all duration-500 ${gor(2)}`}>
            <p className="text-zinc-200 text-[11.5px] leading-relaxed">
              Beşiktaş’ta randevu ile çalışan ve çocuk hastalara deneyimli kliniklerden bazıları şunlar. Yorumlarda en çok güler yüz ve zamanında randevu öne çıkıyor:
            </p>
          </div>

          <div className="mt-3 space-y-2">
            {ISLETMELER.map((x, i) => (
              <div
                key={x.ad}
                className={`relative rounded-xl p-2.5 transition-all duration-500 ${gor(3)} ${x.siz ? 'border border-blue-400/60 bg-blue-500/10 shadow-[0_0_24px_-6px_rgba(59,130,246,0.7)]' : 'border border-white/10 bg-white/[0.03]'}`}
                style={{ transitionDelay: adim >= 3 ? `${i * 150}ms` : '0ms' }}
              >
                {x.siz && <span className="absolute -top-2 right-2 text-[9.5px] font-semibold bg-blue-500 text-white rounded-full px-2 py-0.5">Sizin işletmeniz</span>}
                <p className={`text-[12px] font-semibold ${x.siz ? 'text-blue-300' : 'text-zinc-300'}`}>{x.ad}</p>
                <p className="flex items-center gap-1 text-[10.5px] text-zinc-400 mt-0.5">
                  {x.siz ? <Star size={10} className="fill-amber-400 text-amber-400" /> : <MapPin size={10} />} {x.not}
                </p>
              </div>
            ))}
          </div>

          <div className={`mt-3 flex flex-wrap gap-1.5 transition-all duration-500 ${gor(4)}`}>
            {['İşletme sitesi', 'Google yorumları', 'İşletme profili'].map((k) => (
              <span key={k} className="flex items-center gap-1 text-[10px] text-zinc-300 bg-white/[0.06] border border-white/10 rounded-full px-2 py-1">
                <Link2 size={10} className="text-blue-400" /> {k}
              </span>
            ))}
          </div>
          <p className={`mt-2 text-[10.5px] text-emerald-300 transition-all duration-500 ${gor(5)}`}>
            Net bilgi + yanıtlanmış yorumlar = önerilme şansı
          </p>
        </div>
      </TelefonKasa>
    </div>
  )
}
