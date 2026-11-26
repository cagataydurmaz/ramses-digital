'use client'

import { useEffect, useRef, useState } from 'react'
import * as ReactDOM from 'react-dom'
import TelefonKasa from './TelefonKasa'

// Gerçek müşteri sitelerinin telefon görünümü ekranda yavaşça aşağı kayar, sonra sıradaki siteye geçer.
const SITELER = [
  { src: '/portfolio/uzun/depodez.webp', ad: 'DepoDez', alan: 'depodez.com' },
  { src: '/portfolio/uzun/nur-celen.webp', ad: 'Psk. Nur Çelen', alan: 'nurcelen.com' },
  { src: '/portfolio/uzun/tenvor-springs.webp', ad: 'Tenvor Springs', alan: 'tenvorsprings.com.tr' },
  { src: '/portfolio/uzun/mert-anil-guler.webp', ad: 'Av. Mert Anıl Güler', alan: 'mertanilguler.av.tr' },
  { src: '/portfolio/uzun/gamzeli-dermokozmetik.webp', ad: 'Gamzeli Eczanem', alan: 'gamzelidermokozmetik.com' },
  { src: '/portfolio/uzun/furkan-arikan.webp', ad: 'Av. Furkan Arıkan', alan: 'furkanarikan.av.tr' },
]
const SURE = 6000 // her site için ms

// oncelikli: telefon sayfanın üst alanındaysa ilk görsel hemen ve öncelikli yüklenir (hız; görünüm aynı).
export default function SiteKaydirmaTelefon({ oncelikli = false }: { oncelikli?: boolean }) {
  // Üst alandaysa ilk görsel <head>'de önceden yüklenir; tarayıcı yazı tiplerinden önce indirir.
  if (oncelikli) (ReactDOM as unknown as { preload?: (h: string, o: object) => void }).preload?.(SITELER[0].src, { as: 'image', fetchPriority: 'high' })
  const kutu = useRef<HTMLDivElement>(null)
  const [aktif, setAktif] = useState(false)
  const [sira, setSira] = useState(0)

  useEffect(() => {
    const el = kutu.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(([e]) => setAktif(e.isIntersecting), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!aktif) return
    const t = setInterval(() => setSira((s) => (s + 1) % SITELER.length), SURE)
    return () => clearInterval(t)
  }, [aktif])

  // Hız: görseller hep birlikte değil, sırası gelmeden birkaç saniye önce tek tek iner
  // (ilk görüntü öteki 5 görselle yarışmaz). Görünüm ve geçiş aynı.
  const [ust, setUst] = useState(0)
  useEffect(() => {
    if (!aktif) return
    const t = setTimeout(() => setUst((u) => Math.max(u, sira + 1)), 2500)
    return () => clearTimeout(t)
  }, [aktif, sira])

  const s = SITELER[sira]
  return (
    <div ref={kutu}>
      <TelefonKasa alt="">
        <div className="absolute top-0 inset-x-0 h-9 bg-[#0B1022] z-20" />
        <div className="absolute top-9 inset-x-0 bottom-0 overflow-hidden">
          {SITELER.map((x, i) => i > ust ? null : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={x.src}
              src={x.src}
              alt=""
              loading={i === 0 ? (oncelikli ? 'eager' : 'lazy') : 'eager'}
              {...(i === 0 && oncelikli ? { fetchpriority: 'high' } : {})}
              decoding="async"
              className={`absolute top-0 left-0 w-full transition-opacity duration-700 ${i === sira ? 'opacity-100' : 'opacity-0'}`}
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                transform: 'translate3d(0,0,0)',
                ...(i === sira && aktif ? { animation: `siteKaydir ${SURE}ms cubic-bezier(.45,.05,.55,.95) forwards` } : {}),
              }}
            />
          ))}
        </div>
      </TelefonKasa>
      <p className="text-center text-sm mt-3">
        <span className="text-white font-medium">{s.ad}</span>
        <span className="text-zinc-500"> · {s.alan}</span>
      </p>
      <style>{`@keyframes siteKaydir{0%,8%{transform:translate3d(0,0,0)}92%,100%{transform:translate3d(0,calc(-100% + 495px),0)}}`}</style>
    </div>
  )
}
