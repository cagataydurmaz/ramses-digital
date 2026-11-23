import Link from 'next/link'
import { projects } from '@/lib/portfolio'

// "Birlikte çalıştığımız markalar" şeridi. Müşterilerin çoğunda görsel logo olmadığı için
// marka adları sade, gri tonlu yazı logosu (wordmark) olarak gösterilir; izinleri alındı.
const stil: Record<string, string> = {
  depodez: 'font-extrabold italic tracking-tight',
  'nur-celen': 'font-serif italic',
  'mert-anil-guler': 'font-serif uppercase tracking-[0.18em] text-[0.8em]',
  'gamzeli-dermokozmetik': 'font-bold uppercase tracking-wide',
  'veterineri-bul': 'font-semibold',
  'terapisti-bul': 'font-semibold tracking-tight',
  'furkan-arikan': 'font-serif',
  'tenvor-springs': 'font-black uppercase tracking-wider',
  'ieyp-international': 'font-extrabold tracking-wide',
}

export default function MarkaSeridi() {
  return (
    <section aria-label="Birlikte çalıştığımız markalar" className="px-6 pt-4 pb-2">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-zinc-500 text-xs font-medium tracking-[0.2em] uppercase mb-5">Birlikte çalıştığımız markalar</p>
        <ul className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-4">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/portfolyo/${p.slug}`} prefetch={false} className={`text-zinc-500 hover:text-white text-base sm:text-lg transition-colors whitespace-nowrap ${stil[p.slug] ?? 'font-semibold'}`}>
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
