import type { ReactNode } from 'react'
import { CheckCircle2 } from 'lucide-react'

// Bir telefon animasyonu + yanında kısa açıklama. `ters` ile telefon sağa geçer.
export default function TelefonBolumu({
  ust,
  baslik,
  metin,
  maddeler = [],
  ters = false,
  children,
}: {
  ust: string
  baslik: string
  metin: string
  maddeler?: string[]
  ters?: boolean
  children: ReactNode
}) {
  return (
    <section className="py-16 px-6">
      <div className={`max-w-6xl mx-auto grid grid-cols-1 gap-10 lg:gap-16 items-center ${ters ? 'lg:grid-cols-[1fr_340px]' : 'lg:grid-cols-[340px_1fr]'}`}>
        <div className={ters ? 'lg:order-2' : ''}>{children}</div>
        <div className={ters ? 'lg:order-1' : ''}>
          <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">{ust}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{baslik}</h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">{metin}</p>
          <ul className="space-y-3">
            {maddeler.map((m) => (
              <li key={m} className="flex gap-2.5 text-zinc-300 leading-relaxed">
                <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
