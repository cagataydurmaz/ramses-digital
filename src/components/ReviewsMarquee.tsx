import { Quote, Star, ExternalLink } from 'lucide-react'
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

export default function ReviewsMarquee({ title = 'Müşterilerimiz Ne Diyor?' }: { title?: string }) {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mobile-hide-blur absolute bottom-0 left-[15%] w-[600px] h-[350px] bg-emerald-500/5 rounded-full blur-[130px]" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
            Müşteri Yorumları
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"
          >
            Tüm Yorumları Gör
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="marquee-viewport">
          <div className="marquee-track">
            {[...reviews, ...reviews].map((r, i) => (
              <div
                key={`${r.name}-${i}`}
                className="group relative shrink-0 w-[300px] sm:w-[360px] mr-5 bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 card-hover overflow-hidden"
              >
                <Quote
                  size={64}
                  className="absolute -top-2 -right-2 text-blue-500/[0.06] group-hover:text-blue-500/10 transition-colors"
                  fill="currentColor"
                />
                <div className="relative flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  {r.source === 'google' && <GoogleGIcon size={18} />}
                </div>
                <p className="relative text-zinc-300 text-sm leading-relaxed mb-5 line-clamp-4">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="relative flex items-center gap-3">
                  <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{r.name}</p>
                    {r.subtitle && <p className="text-zinc-400 text-xs mt-0.5">{r.subtitle}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
