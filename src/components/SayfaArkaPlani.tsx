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
          'radial-gradient(700px 480px at 88% 300px, rgba(139,92,246,0.18), transparent 70%)',
          'radial-gradient(800px 520px at 6% 1050px, rgba(59,130,246,0.18), transparent 70%)',
          'radial-gradient(640px 460px at 94% 1750px, rgba(16,185,129,0.12), transparent 70%)',
          'radial-gradient(600px 420px at 18% 2350px, rgba(217,70,239,0.10), transparent 70%)',
          'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)',
        ].join(','),
        backgroundSize: '100% 2800px, 100% 2800px, 100% 2800px, 100% 2800px, 28px 28px',
        backgroundRepeat: 'repeat-y, repeat-y, repeat-y, repeat-y, repeat',
      }}
    />
  )
}
