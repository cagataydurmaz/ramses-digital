'use client'
import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { trackEvent } from '@/lib/tracking'

// Dikey bilgilendirici video (telefon çerçevesinde). Ekrana gelince sessiz oynar,
// dosya ancak görünür olunca yüklenir; "Sesi aç" ile kurucunun anlatımı duyulur.
export default function BilgiVideosu({ ad, baslik }: { ad: string; baslik: string }) {
  const kutu = useRef<HTMLDivElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const [yukle, setYukle] = useState(false)
  const [sesli, setSesli] = useState(false)
  const izlendi = useRef(false)

  useEffect(() => {
    const el = kutu.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !izlendi.current) {
          izlendi.current = true
          trackEvent('video_goruntulendi', { video: ad })
        }
        if (e.isIntersecting) setYukle(true)
        const v = video.current
        if (!v) return
        if (e.isIntersecting) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [yukle])

  const sesDegistir = () => {
    const v = video.current
    if (!v) return
    const yeni = !sesli
    v.muted = !yeni
    if (yeni) {
      trackEvent('video_sesi_acildi', { video: ad })
      v.currentTime = 0
      v.play().catch(() => {})
    }
    setSesli(yeni)
  }

  return (
    <div ref={kutu} className="relative mx-auto w-full max-w-[300px] sm:max-w-[320px]">
      <div className="absolute -inset-y-10 inset-x-0 bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_65%)] pointer-events-none" aria-hidden />
      <div className="relative rounded-[2.4rem] bg-[#05070d] p-2.5 ring-1 ring-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        <div className="relative rounded-[2rem] overflow-hidden aspect-[9/16] bg-[#0B1022]">
          <video
            ref={video}
            src={yukle ? `/video/bilgi/${ad}.mp4` : undefined}
            poster={`/video/bilgi/${ad}-kapak.jpg`}
            muted
            loop
            playsInline
            preload="none"
            aria-label={baslik}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={sesDegistir}
            className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/20 hover:bg-black/75 transition-colors"
            aria-label={sesli ? 'Sesi kapat' : 'Sesi aç'}
          >
            {sesli ? <Volume2 size={14} /> : <VolumeX size={14} />}
            {sesli ? 'Sesi kapat' : 'Sesi aç'}
          </button>
        </div>
      </div>
    </div>
  )
}
