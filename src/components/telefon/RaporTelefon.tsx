'use client'
import { TrendingUp, MessageCircle, Phone, Search } from 'lucide-react'
import TelefonKasa from './TelefonKasa'
import { useSiraliAdim, BELIR_CSS } from './useSiraliAdim'

// Aylık performans panosunun telefonda açılışı (temsili; rakamlar gösterilmez, eğilimler canlandırılır).
const CUBUK = [38, 46, 42, 55, 61, 58, 70, 76, 72, 84, 90, 96]
const KANAL = [
  { ad: 'Google arama', renk: 'bg-blue-500', oran: 82, icon: Search },
  { ad: 'WhatsApp tıklama', renk: 'bg-emerald-500', oran: 64, icon: MessageCircle },
  { ad: 'Telefon araması', renk: 'bg-violet-500', oran: 47, icon: Phone },
]

export default function RaporTelefon() {
  const { ref, adim } = useSiraliAdim(3, 1400, 3000)

  return (
    <div ref={ref}>
      <TelefonKasa alt="Temsili gösterim: aylık rapor panosu">
        <div className="absolute inset-0 bg-[#0B1022] text-white pt-10 px-4">
          <p className="text-[11px] uppercase tracking-wider text-cyan-400 font-semibold">Aylık rapor</p>
          <p className="text-lg font-semibold mb-4">Bu ay nereden müşteri geldi?</p>

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-3 mb-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-zinc-400">Siteye gelen ziyaretçi</p>
              <span className={`inline-flex items-center gap-1 text-[11px] text-emerald-400 transition-opacity duration-500 ${adim >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                <TrendingUp size={12} /> yükselişte
              </span>
            </div>
            <div className="flex items-end gap-1 h-24">
              {CUBUK.map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-cyan-600 to-cyan-400" style={{ height: adim >= 1 ? `${h}%` : '6%', transition: `height .7s cubic-bezier(.2,.8,.2,1) ${i * 45}ms` }} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-3 space-y-3 mb-3">
            <p className="text-xs text-zinc-400">Talep kanalları</p>
            {KANAL.map((k, i) => {
              const Icon = k.icon
              return (
                <div key={k.ad}>
                  <div className="flex items-center gap-2 text-[12px] mb-1"><Icon size={13} className="text-zinc-400" />{k.ad}</div>
                  <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className={`h-full rounded-full ${k.renk}`} style={{ width: adim >= 2 ? `${k.oran}%` : '0%', transition: `width .8s ease-out ${i * 120}ms` }} />
                  </div>
                </div>
              )
            })}
          </div>

          {adim >= 3 && (
            <div className="rounded-xl bg-cyan-500/10 border border-cyan-400/30 p-3 text-[12px] leading-snug animate-[belir_.45s_ease-out]">
              <p className="font-semibold text-cyan-300 mb-0.5">Öneri</p>
              WhatsApp’tan gelen talepler artıyor; butonu ürün sayfalarına da ekleyelim.
            </div>
          )}
        </div>
      </TelefonKasa>
      <style>{BELIR_CSS}</style>
    </div>
  )
}
