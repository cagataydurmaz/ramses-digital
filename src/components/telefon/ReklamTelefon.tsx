'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, Phone, PhoneCall } from 'lucide-react'
import TelefonKasa from './TelefonKasa'

// Google arama reklamının temsili gösterimi: arama yazılır, üstte "Sponsorlu" reklam çıkar,
// "Ara" düğmesine dokunulur ve işletmenin telefonu çalar.
export default function ReklamTelefon({ aramalar = ['izmit oto servis'] }: { aramalar?: string[] }) {
  const kutu = useRef<HTMLDivElement>(null)
  const [aktif, setAktif] = useState(false)
  const [sira, setSira] = useState(0)
  const [yazi, setYazi] = useState('')
  const [adim, setAdim] = useState(0) // 0 yazılıyor, 1 reklam, 2 dokunma, 3 arama

  useEffect(() => {
    const el = kutu.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setYazi(aramalar[0])
      setAdim(1)
      return
    }
    const io = new IntersectionObserver(([e]) => setAktif(e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [aramalar])

  useEffect(() => {
    if (!aktif) return
    const hedef = aramalar[sira % aramalar.length]
    let i = 0
    setYazi('')
    setAdim(0)
    const z: ReturnType<typeof setTimeout>[] = []
    const yaz = setInterval(() => {
      i++
      setYazi(hedef.slice(0, i))
      if (i >= hedef.length) {
        clearInterval(yaz)
        z.push(setTimeout(() => setAdim(1), 180))
        z.push(setTimeout(() => setAdim(2), 850))
        z.push(setTimeout(() => setAdim(3), 1150))
        z.push(setTimeout(() => setSira((s) => s + 1), 3000))
      }
    }, 32)
    return () => {
      clearInterval(yaz)
      z.forEach(clearTimeout)
    }
  }, [aktif, sira, aramalar])

  return (
    <div ref={kutu}>
      <TelefonKasa>
        <div className="pt-10 px-4">
          <div className="flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-2.5">
            <Search size={15} className="text-gray-400 shrink-0" />
            <span className="text-white text-sm truncate">
              {yazi}
              <span className="inline-block w-[2px] h-4 bg-blue-400 align-middle ml-0.5 animate-pulse" />
            </span>
          </div>

          <div className={`mt-4 space-y-3 transition-all duration-500 ${adim >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div className="relative rounded-xl border border-amber-400/50 bg-amber-400/[0.06] p-3 shadow-[0_0_30px_-8px_rgba(251,191,36,0.6)]">
              <p className="text-[10px] font-bold text-zinc-300 mb-1">Sponsorlu</p>
              <p className="text-blue-300 text-sm font-semibold leading-snug">İşletmenizin Adı – Hemen Arayın</p>
              <p className="text-gray-400 text-[11px] mt-1 leading-snug">Aynı gün hizmet · Ücretsiz keşif · Bölgenize özel</p>
              <div className="flex gap-2 mt-3">
                <span className={`flex-1 flex items-center justify-center gap-1.5 text-white text-xs font-semibold rounded-full py-2 transition-all duration-300 ${adim >= 2 ? 'bg-emerald-500 scale-95' : 'bg-blue-500'}`}>
                  <Phone size={13} /> Ara
                </span>
                <span className="flex-1 flex items-center justify-center text-zinc-300 text-xs border border-white/15 rounded-full py-2">Web sitesi</span>
              </div>
              {adim === 2 && <span className="absolute left-[22%] bottom-4 w-8 h-8 rounded-full bg-white/40 animate-ping" />}
            </div>
            {[0, 1, 2].map((n) => (
              <div key={n} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                <div className="h-2.5 rounded bg-white/15 w-1/2 mb-2" />
                <div className="h-2 rounded bg-white/[0.08] w-11/12 mb-1.5" />
                <div className="h-2 rounded bg-white/[0.06] w-2/3" />
              </div>
            ))}
          </div>

          <div className={`absolute inset-x-3 bottom-4 rounded-2xl bg-emerald-600 p-4 flex items-center gap-3 shadow-2xl transition-all duration-500 ${adim >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><PhoneCall size={18} className="text-white animate-pulse" /></span>
            <div>
              <p className="text-white text-sm font-semibold">Gelen arama</p>
              <p className="text-emerald-100 text-[11px]">Reklamdan gelen müşteri · ölçülüyor</p>
            </div>
          </div>
        </div>
      </TelefonKasa>
    </div>
  )
}
