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
    video.muted = true
    video.play()?.catch(() => {
      video.style.display = 'none'
    })
  }, [])

  return (
    <video
      ref={videoRef}
      className="hero-bg-video absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/video/hero-bg-poster.jpg"
      aria-hidden="true"
    >
      <source src="/video/hero-bg.mp4" type="video/mp4" />
    </video>
  )
}
