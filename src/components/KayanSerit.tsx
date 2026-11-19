'use client'

import { useEffect, useRef, type ReactNode } from 'react'

// Kendiliğinden kayan, parmakla / fareyle sürüklenebilen şerit.
// Tarayıcının yerel kaydırmasına güvenmeden konumu kendimiz yönetiyoruz
// (transform), böylece iOS Safari dahil her yerde aynı davranır:
// - Sürükle → şerit parmağı takip eder; bırakınca hızına göre kayarak yavaşlar
// - Durduktan kısa süre sonra otomatik kayma TAM BIRAKILDIĞI YERDEN devam eder
// - İçerik iki kez verilir (ikinci kopya aria-hidden); konum yarı genişlikte
//   başa sarılır, döngü kesintisiz görünür
// - Dikey sayfa kaydırması engellenmez (touch-action: pan-y)
// - Masaüstünde fare üzerindeyken durur; yatay tekerlek/trackpad ve ok tuşları çalışır
// - "Hareketi azalt" tercihinde otomatik kayma kapalı, sürükleme açık
export default function KayanSerit({
  children,
  sure,
  ariaLabel,
}: {
  children: ReactNode
  /** Bir tam turun saniye cinsinden süresi (otomatik hız buna göre). */
  sure: number
  ariaLabel: string
}) {
  const kapRef = useRef<HTMLDivElement>(null)
  const izRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const kap = kapRef.current
    const iz = izRef.current
    if (!kap || !iz) return

    const hareketAzalt = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const BEKLEME = 1200 // elle hareket bittikten sonra otomatiğin başlama gecikmesi (ms)
    const ESIK = 6 // bu kadar px yatay hareketten sonra sürükleme sayılır

    let yari = iz.scrollWidth / 2
    let konum = 0 // px, sola kaydırma miktarı
    let hiz = 0 // atalet hızı, px/ms
    let surukluyor = false
    let basili = false
    let baslangicX = 0
    let baslangicY = 0
    let baslangicKonum = 0
    let sonX = 0
    let sonZaman = 0
    let fareUstunde = false
    let gorunur = true
    let devamZamani = 0
    let tiklamayiEngelle = false
    let isaretciId = -1
    let raf = 0
    let son = performance.now()

    const sar = (x: number) => (yari > 0 ? ((x % yari) + yari) % yari : x)
    const ciz = () => {
      iz.style.transform = `translate3d(${-konum}px,0,0)`
    }

    const dongu = (t: number) => {
      const dt = Math.min(t - son, 50)
      son = t
      if (!surukluyor) {
        if (Math.abs(hiz) > 0.01) {
          // Atalet: bırakılan hızla devam edip yavaşla
          konum = sar(konum + hiz * dt)
          hiz *= Math.pow(0.94, dt / 16.67)
          devamZamani = t + BEKLEME
          ciz()
        } else if (!hareketAzalt && gorunur && !fareUstunde && t >= devamZamani && yari > 0) {
          konum = sar(konum + (yari / sure) * (dt / 1000))
          ciz()
        }
      }
      raf = requestAnimationFrame(dongu)
    }
    raf = requestAnimationFrame(dongu)

    const bas = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return
      basili = true
      surukluyor = false
      isaretciId = e.pointerId
      baslangicX = sonX = e.clientX
      baslangicY = e.clientY
      baslangicKonum = konum
      sonZaman = performance.now()
      hiz = 0 // kayan şeride dokununca anında dur
    }
    const hareket = (e: PointerEvent) => {
      if (!basili || e.pointerId !== isaretciId) return
      const dx = e.clientX - baslangicX
      const dy = e.clientY - baslangicY
      if (!surukluyor) {
        if (Math.abs(dx) < ESIK || Math.abs(dx) < Math.abs(dy)) return
        surukluyor = true
        kap.setPointerCapture?.(e.pointerId)
        kap.classList.add('surukleniyor')
      }
      const simdi = performance.now()
      const ara = simdi - sonZaman
      if (ara > 0) {
        // Hızı yumuşatarak ölç (son hareketlere ağırlık ver)
        const anlik = -(e.clientX - sonX) / ara
        hiz = hiz * 0.6 + anlik * 0.4
      }
      sonX = e.clientX
      sonZaman = simdi
      konum = sar(baslangicKonum - dx)
      ciz()
    }
    const birak = (e: PointerEvent) => {
      if (e.pointerId !== isaretciId) return
      basili = false
      if (surukluyor) {
        surukluyor = false
        tiklamayiEngelle = true
        // Click olayı (geldiyse) bırakmadan hemen sonra gelir; gelmezse bayrak kalmasın
        window.setTimeout(() => {
          tiklamayiEngelle = false
        }, 0)
        kap.classList.remove('surukleniyor')
        // Parmak bir süre durup öyle bırakıldıysa kayma olmasın
        if (performance.now() - sonZaman > 80) hiz = 0
        hiz = Math.max(-4, Math.min(4, hiz))
      }
      devamZamani = performance.now() + BEKLEME
    }
    // Sürükleme sonrası kart bağlantısı açılmasın
    const tikla = (e: MouseEvent) => {
      if (tiklamayiEngelle) {
        e.preventDefault()
        e.stopPropagation()
        tiklamayiEngelle = false
      }
    }
    // Fareyle sürüklerken tarayıcının resim/bağlantı sürükleme davranışı devreye girmesin
    const surukBaslat = (e: DragEvent) => e.preventDefault()
    const tekerlek = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return // dikey: sayfa kaysın
      e.preventDefault()
      hiz = 0
      konum = sar(konum + e.deltaX)
      devamZamani = performance.now() + BEKLEME
      ciz()
    }
    const tus = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
      e.preventDefault()
      hiz = e.key === 'ArrowRight' ? 1.2 : -1.2
    }
    const girdi = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') fareUstunde = true
    }
    const cikti = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') fareUstunde = false
    }

    const ro = new ResizeObserver(() => {
      yari = iz.scrollWidth / 2
      konum = sar(konum)
      ciz()
    })
    ro.observe(iz)
    const io = new IntersectionObserver(([g]) => {
      gorunur = g.isIntersecting
    })
    io.observe(kap)

    kap.addEventListener('pointerdown', bas)
    kap.addEventListener('pointermove', hareket)
    kap.addEventListener('pointerup', birak)
    kap.addEventListener('pointercancel', birak)
    kap.addEventListener('click', tikla, true)
    kap.addEventListener('dragstart', surukBaslat)
    kap.addEventListener('wheel', tekerlek, { passive: false })
    kap.addEventListener('keydown', tus)
    kap.addEventListener('pointerenter', girdi)
    kap.addEventListener('pointerleave', cikti)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      kap.removeEventListener('pointerdown', bas)
      kap.removeEventListener('pointermove', hareket)
      kap.removeEventListener('pointerup', birak)
      kap.removeEventListener('pointercancel', birak)
      kap.removeEventListener('click', tikla, true)
      kap.removeEventListener('dragstart', surukBaslat)
      kap.removeEventListener('wheel', tekerlek)
      kap.removeEventListener('keydown', tus)
      kap.removeEventListener('pointerenter', girdi)
      kap.removeEventListener('pointerleave', cikti)
    }
  }, [sure])

  return (
    <div ref={kapRef} className="kayan-serit" tabIndex={0} role="region" aria-label={ariaLabel}>
      <div ref={izRef} className="kayan-serit-iz flex w-max">
        {children}
      </div>
    </div>
  )
}
