import { Star, ExternalLink } from 'lucide-react'
import { reviews } from '@/lib/reviews'

const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/xKzk4Q5VCeK4ePbz6'

function GoogleGIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className="shrink-0">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  )
}

// Saf CSS kaydırma: içerik iki kez yinelenir, track translateX(-50%) ile kesintisiz
// döngü yapar (bkz. globals.css.reviews-marquee*). JavaScript gerektirmez.
// Fare/odak üzerine gelince durur; "prefers-reduced-motion" tercihinde animasyon
// kapanır ve şerit yatay kaydırılabilir hale gelir.
function ReviewCards({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className={`flex shrink-0 ${hidden ? 'reviews-marquee-dup' : ''}`} aria-hidden={hidden || undefined}>
      {reviews.map((r) => (
        <figure
          key={r.name}
          className="shrink-0 w-[280px] sm:w-[300px] mr-4 bg-[#0D1225] border border-white/[0.06] rounded-xl px-4 py-4 text-center"
        >
          <div className="flex items-center justify-center gap-1.5 mb-2.5">
            <div className="flex gap-0.5">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} size={11} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            {r.source === 'google' && <GoogleGIcon size={13} />}
          </div>
          <blockquote className="text-zinc-300 text-[12.5px] leading-relaxed mb-3">
            &ldquo;{r.text}&rdquo;
          </blockquote>
          <figcaption>
            <p className="text-white font-semibold text-xs">{r.name}</p>
            {r.subtitle && <p className="text-zinc-500 text-[11px] mt-0.5 leading-snug">{r.subtitle}</p>}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export default function ReviewsMarqueeInner({ title = 'Müşterilerimiz Ne Diyor?' }: { title?: string }) {
  return (
    <section className="relative py-14 sm:py-20 px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="flex items-center justify-center gap-2 text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
            <GoogleGIcon size={16} />
            Google Yorumları
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            {title}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-zinc-300 text-sm">
              Google&apos;dan müşteri yorumları
            </span>
          </div>
        </div>

        <div className="reviews-marquee" tabIndex={0} role="region" aria-label="Müşteri yorumları">
          <div className="reviews-marquee-track">
            <ReviewCards />
            <ReviewCards hidden />
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-blue-300 px-6 py-3 rounded-full text-sm font-medium transition-all"
          >
            <GoogleGIcon size={15} />
            Google&apos;daki tüm yorumlar
            <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
