'use client'
import { FileText, Sparkles, Database, MessageCircle, CheckCircle2 } from 'lucide-react'
import TelefonKasa from './TelefonKasa'
import { useSiraliAdim, BELIR_CSS } from './useSiraliAdim'

// Bir otomasyon akışının adım adım çalışması (temsili): form → yapay zekâ özeti → CRM → WhatsApp bildirimi.
const ADIMLAR = [
  { icon: FileText, baslik: 'Siteden yeni form', detay: 'Ad, telefon, ihtiyaç alındı', renk: 'text-sky-300 bg-sky-500/15 ring-sky-400/40' },
  { icon: Sparkles, baslik: 'Yapay zekâ özetledi', detay: '“Acil, Gebze, kombi bakımı”', renk: 'text-fuchsia-300 bg-fuchsia-500/15 ring-fuchsia-400/40' },
  { icon: Database, baslik: 'Müşteri kaydı açıldı', detay: 'CRM ve tabloya eklendi', renk: 'text-amber-300 bg-amber-500/15 ring-amber-400/40' },
  { icon: MessageCircle, baslik: 'Ekibe WhatsApp bildirimi', detay: 'Sorumluya görev atandı', renk: 'text-emerald-300 bg-emerald-500/15 ring-emerald-400/40' },
]

export default function OtomasyonTelefon() {
  const { ref, adim } = useSiraliAdim(ADIMLAR.length + 1, 1000, 2600)

  return (
    <div ref={ref}>
      <TelefonKasa alt="Temsili gösterim: otomatik iş akışı">
        <div className="absolute inset-0 bg-[#0B1022] text-white pt-10 px-5">
          <p className="text-[11px] uppercase tracking-wider text-fuchsia-400 font-semibold">İş akışı</p>
          <p className="text-lg font-semibold mb-5">Yeni talep geldiğinde</p>
          <div className="relative">
            <div className="absolute left-[19px] top-5 bottom-5 w-[2px] bg-white/10" />
            <div
              className="absolute left-[19px] top-5 w-[2px] bg-gradient-to-b from-sky-400 via-fuchsia-400 to-emerald-400 transition-[height] duration-700 ease-out"
              style={{ height: `calc((100% - 2.5rem) * ${Math.min(Math.max(adim - 1, 0), ADIMLAR.length - 1) / (ADIMLAR.length - 1)})` }}
            />
            <ol className="space-y-4">
              {ADIMLAR.map((a, i) => {
                const Icon = a.icon
                const acik = adim > i
                return (
                  <li key={a.baslik} className={`relative flex items-start gap-3 transition-all duration-500 ${acik ? 'opacity-100' : 'opacity-35'}`}>
                    <span className={`relative z-10 w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ring-1 transition-all duration-500 ${acik ? a.renk + ' scale-105' : 'bg-[#11172b] ring-white/10 text-zinc-500'}`}>
                      <Icon size={17} />
                    </span>
                    <div className={`flex-1 rounded-xl border px-3 py-2 transition-colors duration-500 ${acik ? 'border-white/15 bg-white/[0.05]' : 'border-white/[0.06] bg-transparent'}`}>
                      <p className="text-[13px] font-semibold">{a.baslik}</p>
                      <p className="text-[11.5px] text-zinc-400">{a.detay}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
          {adim > ADIMLAR.length && (
            <p className="mt-6 flex items-center justify-center gap-2 text-[12px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 rounded-full py-2 animate-[belir_.4s_ease-out]">
              <CheckCircle2 size={14} /> Tamamlandı · kimse elle uğraşmadı
            </p>
          )}
        </div>
      </TelefonKasa>
      <style>{BELIR_CSS}</style>
    </div>
  )
}
