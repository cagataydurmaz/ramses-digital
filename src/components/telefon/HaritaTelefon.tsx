'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Search, Star, Navigation, Phone } from 'lucide-react'
import TelefonKasa from './TelefonKasa'

// Haritada iğneler düşer, işletmenin iğnesi öne çıkar ve bilgi kartı açılır (temsili).
const IGNELER = [
  { x: 22, y: 30 }, { x: 70, y: 24 }, { x: 38, y: 58 }, { x: 80, y: 62 }, { x: 15, y: 72 }, { x: 60, y: 44 },
]

export default function HaritaTelefon({ arama = 'yakınımdaki diş kliniği' }: { arama?: string }) {
  const kutu = useRef<HTMLDivElement>(null)
  const [adim, setAdim] = useState(0) // 0 boş, 1 iğneler, 2 bizim iğne, 3 kart

  useEffect(() => {
    const el = kutu.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAdim(3)
      return
    }
    let zaman: ReturnType<typeof setTimeout>[] = []
    const dongu = () => {
      setAdim(0)
      zaman = [setTimeout(() => setAdim(1), 200), setTimeout(() => setAdim(2), 650), setTimeout(() => setAdim(3), 1000), setTimeout(dongu, 3600)]
    }
    const io = new IntersectionObserver(([e]) => {
      zaman.forEach(clearTimeout)
      if (e.isIntersecting) dongu()
    }, { threshold: 0.3 })
    io.observe(el)
    return () => {
      io.disconnect()
      zaman.forEach(clearTimeout)
    }
  }, [])

  return (
    <div ref={kutu}>
      <TelefonKasa>
        <div className="absolute inset-0 bg-[#f1f3f4]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 180" preserveAspectRatio="none">
            <rect width="100" height="180" fill="#f1f3f4" />
            <path d="M0 40 H100 M0 95 H100 M0 140 H100 M25 0 V180 M55 0 V180 M82 0 V180" stroke="#ffffff" strokeWidth="3" />
            <path d="M0 120 L100 70" stroke="#fde293" strokeWidth="5" />
            <path d="M0 15 C30 25, 60 5, 100 20" stroke="#aadaff" strokeWidth="6" fill="none" />
            <rect x="60" y="100" width="18" height="30" fill="#c8e6c9" />
          </svg>

          <div className="absolute top-9 inset-x-3 z-20 flex items-center gap-2 bg-white rounded-full px-4 py-2.5 shadow-md">
            <Search size={14} className="text-[#5f6368]" />
            <span className="text-[#202124] text-[13px] truncate">{arama}</span>
          </div>

          {IGNELER.map((p, i) => (
            <MapPin
              key={i}
              size={22}
              className="absolute text-[#c5221f] fill-[#ea4335] transition-all duration-500"
              style={{ left: `${p.x}%`, top: `${p.y}%`, opacity: adim >= 1 ? 1 : 0, transform: `translate(-50%, ${adim >= 1 ? '-100%' : '-160%'})`, transitionDelay: `${i * 90}ms` }}
            />
          ))}

          <div
            className="absolute z-10 transition-all duration-500"
            style={{ left: '48%', top: '50%', opacity: adim >= 2 ? 1 : 0, transform: `translate(-50%, -100%) scale(${adim >= 2 ? 1 : 0.4})` }}
          >
            <span className="absolute left-1/2 top-[85%] -translate-x-1/2 w-10 h-10 rounded-full bg-blue-500/25 animate-ping" />
            <MapPin size={40} className="relative text-[#1a73e8] fill-[#4285f4] drop-shadow-[0_4px_8px_rgba(26,115,232,0.45)]" />
          </div>

          <div
            className="absolute inset-x-3 bottom-4 z-20 rounded-2xl bg-white p-4 shadow-[0_8px_24px_-6px_rgba(60,64,67,0.35)] transition-all duration-500"
            style={{ opacity: adim >= 3 ? 1 : 0, transform: `translateY(${adim >= 3 ? 0 : 24}px)` }}
          >
            <p className="text-[#202124] font-semibold">İşletmenizin Adı</p>
            <p className="flex items-center gap-1 text-[12px] text-[#f9ab00] mt-1">
              {[0, 1, 2, 3, 4].map((s) => <Star key={s} size={12} className="fill-[#fbbc04]" />)}
              <span className="text-[#5f6368] ml-1">Google yorumları · Açık</span>
            </p>
            <div className="flex gap-2 mt-3">
              <span className="flex-1 flex items-center justify-center gap-1.5 bg-[#1a73e8] text-white text-xs font-medium rounded-full py-2"><Navigation size={13} /> Yol tarifi</span>
              <span className="flex-1 flex items-center justify-center gap-1.5 border border-[#dadce0] text-[#1a73e8] text-xs font-medium rounded-full py-2"><Phone size={13} /> Ara</span>
            </div>
          </div>
        </div>
      </TelefonKasa>
    </div>
  )
}
