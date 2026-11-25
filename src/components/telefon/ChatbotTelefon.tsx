'use client'

import { useEffect, useRef, useState } from 'react'
import { Sparkles, Send } from 'lucide-react'
import TelefonKasa from './TelefonKasa'

// Bir müşteri sitesinde (örnek diş kliniği) çalışan yapay zekâ asistanının temsili gösterimi:
// site açık, asistan balonu açılır, ziyaretçi sorar, asistan cevaplar ve talebi işletmeye iletir.
type Satir = { kim: 'ziyaretci' | 'asistan' | 'sistem'; metin: string }
const AKIS: Satir[] = [
  { kim: 'asistan', metin: 'Merhaba, size nasıl yardımcı olabilirim?' },
  { kim: 'ziyaretci', metin: 'İmplant tedavisi kaç seans sürüyor?' },
  { kim: 'asistan', metin: 'Genellikle muayene sonrası planlanır ve birkaç seans sürer. Kesin süreyi hekimimiz değerlendirir. Ön muayene randevusu ister misiniz?' },
  { kim: 'ziyaretci', metin: 'Evet, yarın öğleden sonra olur mu?' },
  { kim: 'asistan', metin: 'Adınızı ve telefonunuzu alabilir miyim? Talebinizi hemen kliniğe iletiyorum.' },
  { kim: 'ziyaretci', metin: 'Elif, 0532 … … ..' },
  { kim: 'sistem', metin: 'Randevu talebi kliniğin WhatsApp’ına iletildi' },
]

export default function ChatbotTelefon() {
  const kutu = useRef<HTMLDivElement>(null)
  const [aktif, setAktif] = useState(false)
  const [acik, setAcik] = useState(false)
  const [adet, setAdet] = useState(0)
  const [yaziyor, setYaziyor] = useState(false)

  useEffect(() => {
    const el = kutu.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAcik(true)
      setAdet(AKIS.length)
      return
    }
    const io = new IntersectionObserver(([e]) => setAktif(e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!aktif) return
    if (!acik) {
      const t = setTimeout(() => setAcik(true), 400)
      return () => clearTimeout(t)
    }
    if (adet >= AKIS.length) {
      const t = setTimeout(() => {
        setAdet(0)
        setAcik(false)
      }, 2200)
      return () => clearTimeout(t)
    }
    const s = AKIS[adet]
    if (s.kim === 'asistan') {
      setYaziyor(true)
      const t = setTimeout(() => {
        setYaziyor(false)
        setAdet((a) => a + 1)
      }, adet === 0 ? 300 : 550)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setAdet((a) => a + 1), 550)
    return () => clearTimeout(t)
  }, [aktif, acik, adet])

  return (
    <div ref={kutu}>
      <TelefonKasa alt="Temsili gösterim · örnek diş kliniği sitesi">
        <div className="absolute inset-0 bg-white">
          {/* Örnek müşteri sitesi */}
          <div className="pt-9 px-4 pb-3 flex items-center justify-between border-b border-zinc-100">
            <span className="text-[13px] font-bold text-teal-700">Örnek Diş Kliniği</span>
            <span className="text-[10px] bg-teal-600 text-white rounded-full px-2.5 py-1">Randevu</span>
          </div>
          <div className="px-4 pt-5">
            <div className="h-24 rounded-xl bg-gradient-to-br from-teal-100 to-sky-100 mb-4 flex items-end p-3">
              <span className="text-teal-900 text-sm font-semibold leading-tight">Sağlıklı gülüşler için<br />modern klinik</span>
            </div>
            {[0, 1, 2].map((n) => (
              <div key={n} className="flex gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-100 shrink-0" />
                <div className="flex-1">
                  <div className="h-2.5 rounded bg-zinc-200 w-1/2 mb-1.5" />
                  <div className="h-2 rounded bg-zinc-100 w-5/6" />
                </div>
              </div>
            ))}
          </div>

          {/* Asistan düğmesi */}
          <div className={`absolute right-3 bottom-4 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-sky-600 shadow-lg flex items-center justify-center transition-all duration-300 ${acik ? 'scale-0 opacity-0' : 'scale-100 opacity-100 animate-pulse'}`}>
            <Sparkles size={20} className="text-white" />
          </div>

          {/* Asistan penceresi */}
          <div className={`absolute inset-x-2 bottom-2 top-16 rounded-2xl bg-white border border-zinc-200 shadow-[0_10px_40px_-5px_rgba(0,0,0,0.35)] flex flex-col overflow-hidden transition-all duration-500 ${acik ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
            <div className="flex items-center gap-2 px-3 py-2.5 bg-gradient-to-r from-teal-600 to-sky-600">
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center"><Sparkles size={14} className="text-white" /></span>
              <div>
                <p className="text-white text-[12px] font-semibold leading-tight">Klinik Asistanı</p>
                <p className="text-teal-100 text-[10px]">{yaziyor ? 'yazıyor…' : 'Yapay zekâ · her an yanıtlar'}</p>
              </div>
            </div>
            <div className="flex-1 px-3 py-3 space-y-2 flex flex-col justify-end overflow-hidden bg-zinc-50">
              {AKIS.slice(0, adet).map((s, i) =>
                s.kim === 'sistem' ? (
                  <p key={i} className="self-center text-[10.5px] text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 animate-[cbBelir_.4s_ease-out]">
                    ✓ {s.metin}
                  </p>
                ) : (
                  <div key={i} className={`max-w-[85%] rounded-2xl px-3 py-2 text-[12px] leading-snug animate-[cbBelir_.35s_ease-out] ${s.kim === 'ziyaretci' ? 'self-end bg-sky-600 text-white rounded-br-md' : 'self-start bg-white border border-zinc-200 text-zinc-800 rounded-bl-md'}`}>
                    {s.metin}
                  </div>
                ),
              )}
              {yaziyor && (
                <div className="self-start bg-white border border-zinc-200 rounded-2xl rounded-bl-md px-3 py-2.5 flex gap-1">
                  {[0, 1, 2].map((d) => (
                    <span key={d} className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: `${d * 0.15}s` }} />
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 px-3 py-2.5 border-t border-zinc-200 bg-white">
              <span className="flex-1 text-gray-400 text-[12px]">Mesajınızı yazın…</span>
              <Send size={15} className="text-sky-600" />
            </div>
          </div>
        </div>
      </TelefonKasa>
      <style>{`@keyframes cbBelir{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
    </div>
  )
}
