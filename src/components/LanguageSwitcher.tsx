'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Sadece anasayfada (/ ve /en) görünür — sitenin geri kalanının (blog,
// hizmetler, şehir sayfaları) henüz İngilizce versiyonu yok.
export default function LanguageSwitcher() {
  const pathname = usePathname()
  if (pathname !== '/' && pathname !== '/en') return null

  const isEn = pathname === '/en'

  return (
    <div className="flex items-center gap-0.5 bg-white/[0.04] border border-white/[0.1] rounded-full p-1" role="group" aria-label="Dil seçimi">
      <Link
        href="/"
        prefetch={false}
        aria-current={!isEn ? 'page' : undefined}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
          !isEn ? 'bg-blue-500 text-white' : 'text-zinc-400 hover:text-white'
        }`}
      >
        <span aria-hidden="true">🇹🇷</span> TR
      </Link>
      <Link
        href="/en"
        prefetch={false}
        aria-current={isEn ? 'page' : undefined}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
          isEn ? 'bg-blue-500 text-white' : 'text-zinc-400 hover:text-white'
        }`}
      >
        <span aria-hidden="true">🇬🇧</span> EN
      </Link>
    </div>
  )
}
