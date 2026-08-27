'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { search, type SearchItem } from '@/lib/searchIndex'

export default function SearchWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchItem[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100)
    else {
      setQuery('')
      setResults([])
    }
  }, [isOpen])

  useEffect(() => {
    setResults(search(query))
  }, [query])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  const go = (url: string) => {
    setIsOpen(false)
    router.push(url)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Sitede ara"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 transition-colors"
      >
        <Search size={22} className="text-white" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 sm:pt-32 px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-[#0D1225] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
              <Search size={18} className="text-blue-400 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Blog, hizmet veya şehir sayfası ara..."
                className="flex-1 bg-transparent text-white placeholder:text-zinc-500 outline-none text-sm sm:text-base"
              />
              <button onClick={() => setIsOpen(false)} aria-label="Kapat" className="text-zinc-500 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {query.trim() !== '' && (
              <div className="max-h-[60vh] overflow-y-auto">
                {results.length === 0 ? (
                  <p className="text-zinc-500 text-sm px-5 py-8 text-center">Sonuç bulunamadı.</p>
                ) : (
                  <ul className="py-2">
                    {results.map((r) => (
                      <li key={r.url}>
                        <button
                          onClick={() => go(r.url)}
                          className="w-full text-left px-5 py-3 hover:bg-white/[0.04] transition-colors flex items-center justify-between gap-3"
                        >
                          <span className="text-white text-sm truncate">{r.title}</span>
                          <span className="text-zinc-500 text-xs shrink-0">{r.category}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
