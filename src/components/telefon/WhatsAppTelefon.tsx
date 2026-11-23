'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCheck } from 'lucide-react'
import TelefonKasa from './TelefonKasa'

// Web sitesinden gelen bir müşterinin WhatsApp'ta yazışması ve otomatik ilk cevap (temsili).
type Mesaj = { kim: 'musteri' | 'isletme' | 'sistem'; metin: string }
const AKIS: Mesaj[] = [
  { kim: 'musteri', metin: 'Merhaba, web sitenizden yazıyorum.' },
  { kim: 'musteri', metin: 'Yarın için randevu alabilir miyim?' },
  { kim: 'isletme', metin: 'Merhaba, mesajınız bize ulaştı. Yarın için uygun saatlerimiz: 14:00 ve 16:30.' },
  { kim: 'musteri', metin: '14:00 olsun, teşekkürler.' },
  { kim: 'isletme', metin: 'Randevunuz oluşturuldu. Bir gün önce hatırlatma mesajı göndereceğiz.' },
  { kim: 'sistem', metin: 'Randevu takvime eklendi · Müşteri kaydı oluşturuldu' },
]

export default function WhatsAppTelefon() {
  const kutu = useRef<HTMLDivElement>(null)
  const [aktif, setAktif] = useState(false)
  const [adet, setAdet] = useState(0)
  const [yaziyor, setYaziyor] = useState(false)

  useEffect(() => {
    const el = kutu.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAdet(AKIS.length)
      return
    }
    const io = new IntersectionObserver(([e]) => setAktif(e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!aktif) return
    if (adet >= AKIS.length) {
      const t = setTimeout(() => setAdet(0), 3500)
      return () => clearTimeout(t)
    }
    const sonraki = AKIS[adet]
    if (sonraki.kim === 'isletme') {
      setYaziyor(true)
      const t = setTimeout(() => {
        setYaziyor(false)
        setAdet((a) => a + 1)
      }, 1500)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setAdet((a) => a + 1), adet === 0 ? 600 : 1300)
    return () => clearTimeout(t)
  }, [aktif, adet])

  return (
    <div ref={kutu}>
      <TelefonKasa>
        <div className="absolute inset-0 flex flex-col bg-[#0b141a]">
          <div className="pt-9 pb-3 px-4 bg-[#1f2c34] flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-emerald-600/80 flex items-center justify-center text-white text-sm font-semibold">İ</span>
            <div>
              <p className="text-white text-sm font-semibold leading-tight">İşletmeniz</p>
              <p className="text-emerald-400 text-[11px]">{yaziyor ? 'yazıyor…' : 'çevrimiçi'}</p>
            </div>
          </div>
          <div className="flex-1 px-3 py-4 space-y-2 overflow-hidden flex flex-col justify-end">
            {AKIS.slice(0, adet).map((m, i) =>
              m.kim === 'sistem' ? (
                <p key={i} className="self-center text-[10.5px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 animate-[belir_.4s_ease-out]">
                  {m.metin}
                </p>
              ) : (
                <div
                  key={i}
                  className={`max-w-[82%] rounded-lg px-3 py-2 text-[13px] leading-snug animate-[belir_.35s_ease-out] ${
                    m.kim === 'musteri' ? 'self-end bg-[#005c4b] text-white rounded-tr-none' : 'self-start bg-[#1f2c34] text-zinc-100 rounded-tl-none'
                  }`}
                >
                  {m.metin}
                  {m.kim === 'musteri' && <CheckCheck size={13} className="inline ml-1.5 text-sky-300 align-[-2px]" />}
                </div>
              ),
            )}
            {yaziyor && (
              <div className="self-start bg-[#1f2c34] rounded-lg rounded-tl-none px-3 py-2.5 flex gap-1">
                {[0, 1, 2].map((d) => (
                  <span key={d} className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: `${d * 0.15}s` }} />
                ))}
              </div>
            )}
          </div>
          <div className="px-3 pb-4">
            <div className="bg-[#1f2c34] rounded-full px-4 py-2.5 text-zinc-500 text-sm">Mesaj</div>
          </div>
        </div>
      </TelefonKasa>
      <style>{`@keyframes belir{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
    </div>
  )
}
