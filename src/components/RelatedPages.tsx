import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface RelatedPage {
  label: string
  href: string
}

export default function RelatedPages({ pages }: { pages: RelatedPage[] }) {
  return (
    <section className="py-16 px-6 border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-5">İlgili Sayfalar</p>
        <div className="flex flex-wrap justify-center gap-3">
          {pages.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-1.5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-blue-500/30 text-zinc-400 hover:text-white text-sm rounded-full px-4 py-2 transition-all"
            >
              {label} <ArrowRight size={12} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
