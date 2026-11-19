'use client'

import { useEffect, useRef, type ReactNode } from 'react'

// Kendiliğinden kayan, ama elle (dokunma, fare tekerleği, trackpad, ok tuşları)
// de kaydırılabilen şerit. Kullanıcı bıraktıktan kısa süre sonra otomatik kayma
// kaldığı yerden devam eder. İçerik iki kez verilmeli (ikinci kopya aria-hidden):
// kaydırma yarı genişliğe gelince başa sarılır, böylece döngü kesintisiz görünür.
// "Hareketi azalt" tercihinde otomatik kayma kapanır, elle kaydırma kalır.
export default function KayanSerit({
  children,
  sure,
  ariaLabel,
}: {
  children: ReactNode
  /** Bir tam turun saniye cinsinden süresi (hız buna göre hesaplanır). */
  sure: number
  ariaLabel: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const BEKLEME = 1500 // elle kaydırma bittikten sonra otomatik kaymanın başlama gecikmesi (ms)
    let raf = 0
    let son = performance.now()
    let konum = el.scrollLeft
    let sonAtanan = el.scrollLeft
    let dokunuyor = false
    let fareUstunde = false
    let devamZamani = 0
    let gorunur = true

    const dongu = (t: number) => {
      const dt = Math.min(t - son, 50)
      son = t
      const yari = el.scrollWidth / 2

      // Kaydırma konumu bizim atadığımızdan farklıysa kullanıcı kaydırıyor
      // (dokunma, tekerlek, momentum, klavye) — otomatiği beklet.
      if (Math.abs(el.scrollLeft - sonAtanan) > 1.5) {
        konum = el.scrollLeft
        sonAtanan = el.scrollLeft
        devamZamani = t + BEKLEME
      }

      // Döngü: iki kopya arasında başa/sona sar.
      if (yari > 0 && !dokunuyor) {
        if (konum >= yari) konum -= yari
        else if (konum <= 0 && t < devamZamani) konum += yari
      }

      if (gorunur && !dokunuyor && !fareUstunde && t >= devamZamani && yari > 0) {
        konum += (yari / sure) * (dt / 1000)
        if (konum >= yari) konum -= yari
      }
      if (Math.abs(el.scrollLeft - konum) > 0.01 && !dokunuyor) {
        el.scrollLeft = konum
        sonAtanan = el.scrollLeft
      }
      raf = requestAnimationFrame(dongu)
    }
    raf = requestAnimationFrame(dongu)

    const basla = () => {
      dokunuyor = true
    }
    const bitir = () => {
      dokunuyor = false
      konum = el.scrollLeft
      sonAtanan = el.scrollLeft
      devamZamani = performance.now() + BEKLEME
    }
    // Fare ile üzerine gelince dur (dokunmatik "hover" taklidi sayılmaz).
    const girdi = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') fareUstunde = true
    }
    const cikti = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') fareUstunde = false
    }
    const io = new IntersectionObserver(([e]) => {
      gorunur = e.isIntersecting
    })
    io.observe(el)

    el.addEventListener('touchstart', basla, { passive: true })
    el.addEventListener('touchend', bitir, { passive: true })
    el.addEventListener('touchcancel', bitir, { passive: true })
    el.addEventListener('pointerenter', girdi)
    el.addEventListener('pointerleave', cikti)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      el.removeEventListener('touchstart', basla)
      el.removeEventListener('touchend', bitir)
      el.removeEventListener('touchcancel', bitir)
      el.removeEventListener('pointerenter', girdi)
      el.removeEventListener('pointerleave', cikti)
    }
  }, [sure])

  return (
    <div ref={ref} className="kayan-serit" tabIndex={0} role="region" aria-label={ariaLabel}>
      <div className="flex w-max">{children}</div>
    </div>
  )
}
