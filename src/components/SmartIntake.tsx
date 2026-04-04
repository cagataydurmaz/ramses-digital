'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Loader2, Sparkles, RotateCcw, Send } from 'lucide-react'

const WHATSAPP_NUMBER = '905355601936'

const EXAMPLES = [
  'Google\'da üst sıralara çıkmak istiyorum',
  'Instagram hesabımı büyütmek istiyorum',
  'Web sitem çok yavaş, yenileyelim',
  'Google Ads ile satış artırmak istiyorum',
  'Rakiplerimden neden geride kalıyoruz?',
]

const colorMap: Record<string, { badge: string; btn: string; accent: string }> = {
  blue:    { badge: 'bg-blue-500/10 text-blue-400 border border-blue-500/15',    btn: 'bg-blue-600 hover:bg-blue-700',    accent: 'text-blue-400' },
  violet:  { badge: 'bg-violet-500/10 text-violet-400 border border-violet-500/15', btn: 'bg-violet-600 hover:bg-violet-700', accent: 'text-violet-400' },
  pink:    { badge: 'bg-pink-500/10 text-pink-400 border border-pink-500/15',    btn: 'bg-pink-600 hover:bg-pink-700',    accent: 'text-pink-400' },
  emerald: { badge: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/15', btn: 'bg-emerald-600 hover:bg-emerald-700', accent: 'text-emerald-400' },
  orange:  { badge: 'bg-orange-500/10 text-orange-400 border border-orange-500/15', btn: 'bg-orange-600 hover:bg-orange-700', accent: 'text-orange-400' },
  cyan:    { badge: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/15',    btn: 'bg-cyan-600 hover:bg-cyan-700',    accent: 'text-cyan-400' },
}

interface IntentResult {
  service: string
  title: string
  message: string
  whatsappHint: string
  icon: string
  slug: string
  color: string
}

export default function SmartIntake() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<IntentResult | null>(null)
  const [error, setError] = useState('')
  const [exampleIndex, setExampleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setExampleIndex(i => (i + 1) % EXAMPLES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!result) { setDisplayed(''); return }
    setDisplayed('')
    let i = 0
    const msg = result.message
    const timer = setInterval(() => {
      setDisplayed(msg.slice(0, i + 1))
      i++
      if (i >= msg.length) clearInterval(timer)
    }, 18)
    return () => clearInterval(timer)
  }, [result])

  const analyze = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || trimmed.length < 5) return
    setLoading(true)
    setResult(null)
    setError('')
    try {
      const res = await fetch('/api/intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      })
      if (!res.ok) throw new Error()
      const data = await res.json()
      setResult(data)
    } catch {
      setError('Bir hata oluştu, tekrar deneyin.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    analyze(input)
  }

  const handleExample = (ex: string) => {
    setInput(ex)
    analyze(ex)
    inputRef.current?.focus()
  }

  const reset = () => {
    setResult(null)
    setInput('')
    setError('')
    inputRef.current?.focus()
  }

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Merhaba! Web sitenizdeki asistan şunları söyledi:\n"${result?.message}"\n\nBenim ihtiyacım: ${input}\n\nBenimle iletişime geçebilir misiniz?`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
  }

  const colors = result ? (colorMap[result.color] ?? colorMap.blue) : null

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div
            key="input"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Input card */}
            <div
              className={`rounded-2xl border transition-colors duration-300 ${
                isFocused
                  ? 'border-blue-500/30 shadow-[0_0_24px_rgba(59,130,246,0.08)]'
                  : 'border-white/[0.07]'
              } bg-[#0D1525]`}
            >
              <form onSubmit={handleSubmit}>
                {/* Top bar */}
                <div className="flex items-center gap-2.5 px-4 pt-4 pb-2">
                  <div className="w-6 h-6 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <Sparkles size={13} className="text-blue-400" />
                  </div>
                  <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase">AI Asistan</span>
                  <div className="flex items-center gap-1 ml-auto">
                    {[0, 1, 2].map(i => (
                      <motion.span
                        key={i}
                        className="w-1 h-1 rounded-full bg-blue-400/30"
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Textarea */}
                <div className="px-4 pb-1">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); analyze(input) }
                    }}
                    placeholder={EXAMPLES[exampleIndex]}
                    rows={2}
                    className="w-full bg-transparent text-white placeholder:text-zinc-500 text-sm sm:text-base resize-none outline-none leading-relaxed min-h-[44px]"
                  />
                </div>

                <div className="h-px mx-4 bg-white/[0.06]" />

                {/* Bottom bar */}
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-zinc-500 text-xs hidden sm:block">
                    <kbd className="bg-white/[0.05] border border-white/[0.10] rounded px-1.5 py-0.5 text-[10px] font-mono mr-1 text-zinc-400">Enter</kbd>
                    ile gönder
                  </span>
                  <button
                    type="submit"
                    disabled={loading || input.trim().length < 5}
                    className="ml-auto flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-white/[0.04] disabled:text-zinc-600 text-white text-sm px-5 py-2.5 rounded-xl font-medium transition-colors"
                  >
                    {loading ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <>
                        <span>Analiz Et</span>
                        <Send size={13} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Example chips */}
            {!loading && (
              <div className="hidden sm:flex flex-wrap gap-2 mt-3 justify-center">
                <span className="text-zinc-600 text-xs self-center mr-1">Örnek:</span>
                {EXAMPLES.slice(0, 3).map((ex) => (
                  <button
                    key={ex}
                    onClick={() => handleExample(ex)}
                    className="text-xs text-zinc-500 hover:text-zinc-300 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.10] rounded-full px-3.5 py-1.5 transition-all"
                  >
                    {ex}
                  </button>
                ))}
              </div>
            )}

            {error && (
              <p className="text-red-400 text-sm mt-3 text-center">{error}</p>
            )}

            {loading && (
              <div className="mt-4 flex items-center justify-center gap-3 text-zinc-500 text-sm">
                <Loader2 size={14} className="animate-spin text-blue-400" />
                <span>AI analiz ediyor...</span>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="rounded-2xl border border-white/[0.07] bg-[#0D1525]">
              <div className="p-5 sm:p-6">
                {/* Service badge + reset */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`flex items-center gap-2 ${colors!.badge} rounded-full px-3.5 py-1.5 text-xs font-semibold`}>
                    <span className="text-base">{result.icon}</span>
                    <span>{result.title}</span>
                  </div>
                  <button
                    onClick={reset}
                    className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1.5 text-xs border border-white/[0.06] hover:border-white/[0.12] rounded-full px-3 py-1.5"
                  >
                    <RotateCcw size={11} />
                    <span>Tekrar sor</span>
                  </button>
                </div>

                {/* User message echo */}
                <div className="bg-white/[0.03] rounded-xl px-4 py-3 mb-4 border border-white/[0.05]">
                  <p className="text-zinc-500 text-[11px] mb-1 uppercase tracking-wider font-medium">Siz sordunuz</p>
                  <p className="text-zinc-300 text-sm leading-relaxed">{input}</p>
                </div>

                {/* AI response with typewriter */}
                <div className="flex gap-3 mb-6">
                  <div className="w-8 h-8 bg-white/[0.04] border border-white/[0.06] rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles size={14} className={colors!.accent} />
                  </div>
                  <div className="flex-1">
                    <p className="text-zinc-500 text-[11px] mb-1.5 uppercase tracking-wider font-medium">AI Analiz</p>
                    <p className="text-zinc-100 text-sm leading-relaxed">
                      {displayed}
                      {displayed.length < result.message.length && (
                        <span className="inline-block w-0.5 h-4 bg-blue-400 ml-0.5 animate-pulse align-middle" />
                      )}
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={openWhatsApp}
                    className={`flex-1 flex items-center justify-center gap-2.5 ${colors!.btn} text-white py-3 rounded-xl font-medium text-sm transition-colors`}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp&apos;tan Devam Et
                  </button>
                  <Link
                    href={result.slug}
                    className="flex-1 flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.07] hover:border-white/[0.14] text-zinc-400 hover:text-white py-3 rounded-xl text-sm transition-all"
                  >
                    Detaylı Bilgi Al
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
