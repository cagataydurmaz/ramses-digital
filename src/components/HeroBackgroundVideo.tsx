'use client'

import { useEffect, useRef } from 'react'

// Hero arka plan videosu — soyut, marka renklerinde döngü.
// autoPlay/muted/playsInline yeterli olmadığı durumlarda (ör. iOS Düşük Güç
// Modu, Veri Tasarrufu) bazı tarayıcılar otomatik oynatmayı engelleyip
// poster üzerine tıklanabilir bir "oynat" ikonu gösteriyor — bu sadece
// dekoratif bir arka plan olduğu için o buton kullanıcıya anlamsız görünüyor.
// play() reddedilirse videoyu tamamen gizleyip düz degrade arka plana
// düşüyoruz, böylece o buton hiçbir zaman görünmüyor.
export default function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    // "Hareketi azalt" ve Veri Tasarrufu kullanıcılarında videoyu hiç indirmiyoruz; sadece poster görünür.
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || conn?.saveData) return

    // Mobilde dikey kesilmiş küçük video (~630 KB) — sayfa tamamen yüklendikten sonra
    // atanır, böylece ilk açılış hızını (LCP) etkilemez. Masaüstünde 720p video.
    const mobil = !window.matchMedia('(min-width: 768px)').matches
    let io: IntersectionObserver | undefined
    const baslat = () => {
      video.src = mobil ? '/video/hero-bg-mobile.mp4' : '/video/hero-bg.mp4'
      video.muted = true
      video.play()?.catch(() => {
        video.style.display = 'none'
      })
      // Hero görünmüyorken videoyu durdur — aşağıda kaydırırken GPU/CPU boşa gitmesin.
      io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) video.play()?.catch(() => {})
        else video.pause()
      })
      io.observe(video)
    }
    let zamanlayici: number | undefined
    const yuklenince = () => {
      zamanlayici = window.setTimeout(baslat, mobil ? 1500 : 0)
    }
    if (document.readyState === 'complete') yuklenince()
    else window.addEventListener('load', yuklenince, { once: true })

    return () => {
      window.removeEventListener('load', yuklenince)
      window.clearTimeout(zamanlayici)
      io?.disconnect()
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="hero-bg-video absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none"
      muted
      loop
      playsInline
      preload="none"
      poster="/video/hero-bg-poster.jpg"
      aria-hidden="true"
    />
  )
}
