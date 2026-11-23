import { Star } from 'lucide-react'

// Google İşletme Profili puanı — ana sayfadaki rozetin aynısı. Puan değişirse
// burayı ve src/app/page.tsx'teki GOOGLE_PUAN'ı güncelleyin (21 Kasım 2026: 5.0).
const GOOGLE_PUAN = '5.0'
const GOOGLE_YORUMLAR_URL = 'https://maps.app.goo.gl/xKzk4Q5VCeK4ePbz6'

export default function GooglePuanSatiri() {
  return (
    <a
      href={GOOGLE_YORUMLAR_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
      aria-label={`Google yorumlarında ${GOOGLE_PUAN}/5 puan — yorumları gör`}
    >
      <span className="flex gap-0.5" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
        ))}
      </span>
      <span className="font-semibold text-white">{GOOGLE_PUAN}/5</span>
      <span>· Google Yorumu</span>
    </a>
  )
}
