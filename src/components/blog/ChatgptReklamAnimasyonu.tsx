'use client'

import { Sparkles, ExternalLink } from 'lucide-react'
import TelefonKasa from '@/components/telefon/TelefonKasa'
import { useSiraliAdim } from '@/components/telefon/useSiraliAdim'

// Blog: Yapay zekâ sohbetinde cevabın altında çıkan "Sponsorlu" reklamın temsili gösterimi.
// Marka logosu kullanılmaz; örnek işletme adı uydurma değil "Örnek" olarak işaretlidir.
export default function ChatgptReklamAnimasyonu() {
  const { ref, adim } = useSiraliAdim(4, 600, 2600)
  const gor = (n: number) => (adim >= n ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3')

  return (
    <div ref={ref}>
      <TelefonKasa alt="Temsili gösterim · yapay zekâ sohbetinde sponsorlu reklam">
        <div className="absolute inset-0 bg-[#212121] pt-10 px-4 flex flex-col">
          <p className="text-zinc-300 text-[12px] font-semibold text-center mb-4">Sohbet</p>

          <div className={`self-end max-w-[85%] rounded-2xl bg-[#303030] text-zinc-100 text-[12px] leading-snug px-3 py-2 transition-[opacity,transform] duration-300 ease-out ${gor(1)}`}>
            Hafta sonu için İstanbul’da Boğaz kıyısında sakin bir butik otel önerir misin?
          </div>

          <div className={`mt-3 flex gap-2 transition-[opacity,transform] duration-300 ease-out ${gor(2)}`}>
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Sparkles size={12} className="text-zinc-200" /></span>
            <div className="text-zinc-200 text-[11.5px] leading-relaxed space-y-1.5">
              <p>Sakin bir hafta sonu için Boğaz’ın Avrupa yakasındaki Bebek–Tarabya hattı ve Anadolu yakasındaki Kandilli çevresi iyi seçenekler.</p>
              <p className="text-zinc-400">Seçerken ulaşım, kahvaltı ve oda manzarasına bakmanızı öneririm.</p>
            </div>
          </div>

          <div className={`mt-4 rounded-xl border border-white/15 bg-[#2a2a2a] p-3 transition-[opacity,transform] duration-300 ease-out ${gor(3)}`}>
            <p className="text-[9.5px] uppercase tracking-wider text-zinc-400 mb-1.5">Sponsorlu</p>
            <div className="flex gap-2.5">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-700 to-blue-900 shrink-0" />
              <div className="min-w-0">
                <p className="text-zinc-100 text-[12px] font-semibold">Örnek Butik Otel</p>
                <p className="text-zinc-400 text-[10.5px] leading-snug">Boğaz manzaralı odalar · Hafta sonu rezervasyonu</p>
              </div>
            </div>
            <span className="mt-2.5 inline-flex items-center gap-1 text-[10.5px] font-semibold text-white bg-white/10 rounded-full px-3 py-1">
              Siteye git <ExternalLink size={10} />
            </span>
          </div>

          <p className={`mt-3 text-[10.5px] text-blue-300 transition-[opacity,transform] duration-300 ease-out ${gor(4)}`}>
            Reklam cevabın içinde değil, altında ve etiketli
          </p>
        </div>
      </TelefonKasa>
    </div>
  )
}
