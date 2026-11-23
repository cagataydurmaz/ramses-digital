'use client'

import { useEffect, useRef, useState } from 'react'

// Bölüm arka planı için sessiz döngü video (Pexels, ücretsiz lisans).
// Bölüm ekrana yaklaşınca yüklenir; "hareketi azalt" / veri tasarrufunda yalnız poster görünür.
export default function ArkaPlanVideo({ src, mobilSrc, poster }: { src: string; mobilSrc: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [gorunur, setGorunur] = useState(false)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || conn?.saveData) return
    let yuklendi = false
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (!yuklendi) {
            yuklendi = true
            v.src = window.matchMedia('(min-width: 768px)').matches ? src : mobilSrc
            v.muted = true
            v.addEventListener('playing', () => setGorunur(true), { once: true })
          }
          v.play()?.catch(() => {})
        } else if (yuklendi) v.pause()
      },
      { rootMargin: '200px' },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [src, mobilSrc])

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <video ref={ref} muted loop playsInline preload="none" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${gorunur ? 'opacity-100' : 'opacity-0'}`} />
      <div className="absolute inset-0 bg-[#0A0F1E]/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-[#0A0F1E]/60" />
    </div>
  )
}
