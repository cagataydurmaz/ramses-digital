'use client'

import { Sparkles } from 'lucide-react'

// Sitedeki canlı yapay zekâ asistanını açar (AsistanSohbet 'asistan-ac' olayını dinler).
export default function AsistaniDeneButonu() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('asistan-ac'))}
      className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 hover:opacity-90 text-white font-semibold px-6 py-3 transition-opacity"
    >
      <Sparkles size={18} /> Bu sitedeki asistanı deneyin
    </button>
  )
}
