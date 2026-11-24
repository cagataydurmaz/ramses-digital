'use client'

import { usePathname } from 'next/navigation'

// Ana sayfa dışındaki sayfalarda düz lacivert yerine yumuşak renk geçişleri ve çok hafif nokta deseni.
// Yalnızca CSS gradyanı (bulanıklık filtresi yok) — telefonda da hızlı.
export default function SayfaArkaPlani() {
  const yol = usePathname()
  if (yol === '/' || yol === '/en') return null
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        backgroundImage: [
          'radial-gradient(620px 420px at 88% 320px, rgba(139,92,246,0.11), transparent 70%)',
          'radial-gradient(720px 460px at 8% 1150px, rgba(59,130,246,0.11), transparent 70%)',
          'radial-gradient(560px 400px at 92% 1900px, rgba(16,185,129,0.07), transparent 70%)',
          'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
        ].join(','),
        backgroundSize: '100% 2400px, 100% 2400px, 100% 2400px, 28px 28px',
        backgroundRepeat: 'repeat-y, repeat-y, repeat-y, repeat',
      }}
    />
  )
}
