'use client'
import { useEffect, useRef, useState } from 'react'

// Telefon animasyonları için ortak sayaç: görünür olunca 0..toplam adım ilerler, sonunda başa döner.
// Hareket azaltma tercihinde doğrudan son adımı gösterir.
export function useSiraliAdim(toplam: number, aralik = 1100, bekleme = 2600) {
  const ref = useRef<HTMLDivElement>(null)
  const [aktif, setAktif] = useState(false)
  const [adim, setAdim] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAdim(toplam)
      return
    }
    const io = new IntersectionObserver(([e]) => setAktif(e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [toplam])

  useEffect(() => {
    if (!aktif) return
    const t = setTimeout(() => setAdim((a) => (a >= toplam ? 0 : a + 1)), adim >= toplam ? bekleme : adim === 0 ? 500 : aralik)
    return () => clearTimeout(t)
  }, [aktif, adim, toplam, aralik, bekleme])

  return { ref, adim }
}

export const BELIR_CSS = `@keyframes belir{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}@keyframes pop{0%{transform:scale(.6);opacity:0}60%{transform:scale(1.15);opacity:1}100%{transform:scale(1)}}`
