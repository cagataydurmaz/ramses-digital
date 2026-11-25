import Link from 'next/link'
import { projects } from '@/lib/portfolio'
import KayanSerit from '@/components/KayanSerit'

// "Birlikte çalıştığımız markalar": kendiliğinden kayan logo şeridi (izinleri alındı).
// Logolar müşterilerin kendi sitelerinden alınıp koyu zemine uygun tek renk (beyaz) yapıldı:
// public/logolar/<slug>.png. Simge tipi logolarda marka adı yanında yazar; logosu
// olmayan markalar zarif yazı logosu (wordmark) olarak kalır.
type Logo = { src: string; w: number; ad?: boolean; h?: string }
const LOGO: Record<string, Logo> = {
  depodez: { src: '/logolar/depodez.png', w: 215, h: 'h-9 sm:h-11' },
  'nur-celen': { src: '/logolar/nur-celen.png', w: 174, h: 'h-10 sm:h-12' },
  'gamzeli-dermokozmetik': { src: '/logolar/gamzeli-dermokozmetik.png', w: 95, ad: true },
  'terapisti-bul': { src: '/logolar/terapisti-bul.png', w: 96, ad: true },
  'furkan-arikan': { src: '/logolar/furkan-arikan.png', w: 145, ad: true, h: 'h-6 sm:h-7' },
  'tenvor-springs': { src: '/logolar/tenvor-springs.png', w: 281, h: 'h-9 sm:h-10' },
  'ieyp-international': { src: '/logolar/ieyp-international.png', w: 266, h: 'h-9 sm:h-11' },
}
// Logosu olmayanlar: kısa ad + yazı stili
const YAZI: Record<string, { ad: string; stil: string }> = {
  'mert-anil-guler': { ad: 'Av. Mert Anıl Güler', stil: 'font-serif' },
  'veterineri-bul': { ad: 'Veterineri Bul', stil: 'font-semibold' },
}

function Marka({ slug, name, gizli = false }: { slug: string; name: string; gizli?: boolean }) {
  const l = LOGO[slug]
  return (
    <Link
      href={`/portfolyo/${slug}`}
      prefetch={false}
      tabIndex={gizli ? -1 : undefined}
      aria-label={name}
      className="group shrink-0 flex items-center gap-2.5 h-12 px-6 sm:px-9 opacity-55 hover:opacity-100 transition-opacity"
    >
      {l ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={l.src} alt="" width={l.w} height={96} loading="lazy" decoding="async" draggable={false} className={`${l.h ?? 'h-8 sm:h-9'} w-auto`} />
          {l.ad && <span className="text-white text-sm sm:text-base font-semibold whitespace-nowrap">{name}</span>}
        </>
      ) : (
        <span className={`text-white text-base sm:text-lg whitespace-nowrap ${YAZI[slug]?.stil ?? 'font-semibold'}`}>{YAZI[slug]?.ad ?? name}</span>
      )}
    </Link>
  )
}

export default function MarkaSeridi() {
  return (
    <section aria-label="Birlikte çalıştığımız markalar" className="pt-4 pb-2">
      <p className="text-center text-zinc-500 text-xs font-medium tracking-[0.2em] uppercase mb-4 px-6">Birlikte çalıştığımız markalar</p>
      <KayanSerit sure={projects.length * 4} ariaLabel="Birlikte çalıştığımız markalar">
        <div className="flex shrink-0 items-center">
          {projects.map((p) => (
            <Marka key={p.slug} slug={p.slug} name={p.name} />
          ))}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {projects.map((p) => (
            <Marka key={`dup-${p.slug}`} slug={p.slug} name={p.name} gizli />
          ))}
        </div>
      </KayanSerit>
    </section>
  )
}
