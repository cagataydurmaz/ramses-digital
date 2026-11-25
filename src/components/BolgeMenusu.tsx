import { MapPin, ChevronDown } from 'lucide-react'

// İlçe/semt adları hiçbir zaman sıra sıra yazılmaz: kapalı bir menü, tıklayınca açılır.
// Adlar HTML'de durduğu için Google yine görür.
export default function BolgeMenusu({ liste, etiket = 'Hizmet verdiğimiz bölgeler', ek }: { liste: string[]; etiket?: string; ek?: string }) {
  if (liste.length === 0) return null
  return (
    <details className="group inline-block text-left max-w-full">
      <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer inline-flex items-center gap-1.5 rounded-full border border-white/10 hover:border-blue-500/40 bg-white/[0.02] px-3.5 py-1.5 text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors">
        <MapPin size={13} className="text-blue-400" />
        {etiket} <span className="text-zinc-500">({liste.length})</span>
        <ChevronDown size={14} className="group-open:rotate-180 transition-transform" />
      </summary>
      <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-xl">
        {liste.map((b) => (
          <span key={b} className="text-xs text-zinc-300 bg-white/[0.04] border border-white/[0.08] rounded-full px-2.5 py-1">{b}</span>
        ))}
        {ek && <span className="text-xs text-zinc-500 px-1 py-1">{ek}</span>}
      </div>
    </details>
  )
}
