import type { ReactNode } from 'react'

// Animasyonlu telefon gösterimleri için ortak telefon kasası (300–320px genişlik, 540px ekran).
export default function TelefonKasa({ children, alt = 'Temsili gösterim' }: { children: ReactNode; alt?: string }) {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[320px]" aria-hidden>
      <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_65%)] pointer-events-none" />
      <div className="relative rounded-[2.4rem] bg-[#05070d] p-2.5 ring-1 ring-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        <div className="relative rounded-[2rem] bg-[#0B1022] overflow-hidden h-[540px]">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black z-30" />
          {children}
        </div>
      </div>
      {alt && <p className="text-center text-zinc-600 text-[11px] mt-3">{alt}</p>}
    </div>
  )
}
