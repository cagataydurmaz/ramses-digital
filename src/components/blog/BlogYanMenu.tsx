'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { List, Search, MessageCircle } from 'lucide-react'

// Masaüstünde yazının sağında sabit duran yan sütun: içindekiler (okunan bölüm vurgulanır),
// ücretsiz SEO analizi ve WhatsApp. Mobilde görünmez; orada yazı içi "Bu yazıda" kutusu var.
export default function BlogYanMenu({ basliklar, waLink }: { basliklar: { id: string; metin: string }[]; waLink: string }) {
  const [aktif, setAktif] = useState<string | null>(basliklar[0]?.id ?? null)

  useEffect(() => {
    const ogeler = basliklar.map((b) => document.getElementById(b.id)).filter(Boolean) as HTMLElement[]
    if (!ogeler.length) return
    const io = new IntersectionObserver(
      (girdiler) => {
        const gorunen = girdiler.filter((g) => g.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (gorunen[0]) setAktif(gorunen[0].target.id)
      },
      { rootMargin: '-90px 0px -65% 0px' },
    )
    ogeler.forEach((o) => io.observe(o))
    return () => io.disconnect()
  }, [basliklar])

  return (
    <div className="sticky top-28 space-y-4">
      {basliklar.length >= 3 && (
        <nav aria-label="Bu yazıda" className="rounded-2xl border border-white/[0.08] bg-[#0D1225] p-5">
          <p className="flex items-center gap-2 text-white font-semibold text-sm mb-3">
            <List size={15} className="text-blue-400" /> Bu yazıda
          </p>
          <ol className="space-y-0.5 max-h-[50vh] overflow-y-auto pr-1">
            {basliklar.map((b) => (
              <li key={b.id}>
                <a
                  href={`#${b.id}`}
                  className={`block border-l-2 pl-3 py-1.5 text-[13px] leading-snug transition-colors ${aktif === b.id ? 'border-blue-400 text-white' : 'border-white/[0.06] text-zinc-400 hover:text-zinc-200'}`}
                >
                  {b.metin}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="rounded-2xl border border-blue-500/25 bg-gradient-to-br from-blue-500/10 to-violet-500/5 p-5">
        <p className="text-white font-semibold text-sm mb-1.5">Sitenizin durumunu merak ediyor musunuz?</p>
        <p className="text-zinc-400 text-[13px] leading-relaxed mb-4">Ücretsiz SEO analiziyle eksikleri birkaç dakikada görün.</p>
        <Link href="/seo-analiz" prefetch={false} className="flex items-center justify-center gap-2 w-full rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2.5 transition-colors">
          <Search size={15} /> Ücretsiz SEO Analizi
        </Link>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center justify-center gap-2 w-full rounded-full border border-[#25D366]/40 hover:bg-[#25D366]/10 text-[#4ade80] text-sm font-medium py-2.5 transition-colors">
          <MessageCircle size={15} /> WhatsApp’tan Sorun
        </a>
      </div>
    </div>
  )
}
