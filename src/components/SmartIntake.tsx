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

const colorMap: Record<string, { bg: string; border: string; badge: string; btn: string; glow: string; gradientBorder: string }> = {
  blue:    { bg: 'from-blue-500/8',    border: 'border-blue-500/25',    badge: 'bg-blue-500/10 text-blue-400',    btn: 'bg-blue-500 hover:bg-blue-600 shadow-blue-500/25',    glow: 'bg-blue-500/10',    gradientBorder: 'from-blue-500/60 via-blue-400/30 to-transparent' },
  violet:  { bg: 'from-violet-500/8',  border: 'border-violet-500/25',  badge: 'bg-violet-500/10 text-violet-400', btn: 'bg-violet-500 hover:bg-violet-600 shadow-violet-500/25', glow: 'bg-violet-500/10', gradientBorder: 'from-violet-500/60 via-violet-400/30 to-transparent' },
  pink:    { bg: 'from-pink-500/8',    border: 'border-pink-500/25',    badge: 'bg-pink-500/10 text-pink-400',    btn: 'bg-pink-500 hover:bg-pink-600 shadow-pink-500/25',    glow: 'bg-pink-500/10',    gradientBorder: 'from-pink-500/60 via-pink-400/30 to-transparent' },
  emerald: { bg: 'from-emerald-500/8', border: 'border-emerald-500/25', badge: 'bg-emerald-500/10 text-emerald-400', btn: 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/25', glow: 'bg-emerald-500/10', gradientBorder: 'from-emerald-500/60 via-emerald-400/30 to-transparent' },
  orange:  { bg: 'from-orange-500/8',  border: 'border-orange-500/25',  badge: 'bg-orange-500/10 text-orange-400', btn: 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/25', glow: 'bg-orange-500/10', gradientBorder: 'from-orange-500/60 via-orange-400/30 to-transparent' },
  cyan:    { bg: 'from-cyan-500/8',    border: 'border-cyan-500/25',    badge: 'bg-cyan-500/10 text-cyan-400',    btn: 'bg-cyan-500 hover:bg-cyan-600 shadow-cyan-500/25',    glow: 'bg-cyan-500/10',    gradientBorder: 'from-cyan-500/60 via-cyan-400/30 to-transparent' },
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

  // Rotate placeholder examples
  useEffect(() => {
    const interval = setInterval(() => {
      setExampleIndex(i => (i + 1) % EXAMPLES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Typewriter effect for AI message
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glow blob behind card */}
            <div className="relative">
              <div
                className="absolute inset-0 -z-10 blur-3xl opacity-50 rounded-3xl"
                style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.5) 0%, transparent 70%)' }}
              />

              {/* Gradient border wrapper */}
              <div
                className={`rounded-2xl p-[1px] transition-all duration-500 ${
                  isFocused
                    ? 'bg-gradient-to-br from-blue-500/80 via-violet-500/50 to-cyan-500/40 shadow-[0_0_60px_rgba(59,130,246,0.35)]'
                    : 'bg-gradient-to-br from-blue-500/30 via-white/10 to-white/[0.05]'
                }`}
              >
                <form onSubmit={handleSubmit}>
                  <div className="relative bg-[#111830] rounded-[15px] overflow-hidden">
                    {/* Top bar */}
                    <div className="flex items-center gap-2.5 px-4 pt-3 pb-2 sm:pt-4">
                      <div className="flex items-center gap-2 flex-1">
                        {/* Animated sparkle icon */}
                        <motion.div
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                          className="w-6 h-6 bg-blue-500/15 rounded-lg flex items-center justify-center shrink-0"
                        >
                          <Sparkles size={13} className="text-blue-400" />
                        </motion.div>
                        <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase">AI Asistan</span>
                      </div>
                      {/* Typing indicator dots */}
                      <div className="flex items-center gap-1 mr-1">
                        {[0, 1, 2].map(i => (
                          <motion.span
                            key={i}
                            className="w-1 h-1 rounded-full bg-blue-400/40"
                            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Textarea */}
                    <div className="px-4 pb-1">
                      <AnimatePresence mode="wait">
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
                          className="w-full bg-transparent text-white placeholder:text-zinc-400 text-sm sm:text-base resize-none outline-none leading-relaxed min-h-[44px]"
                        />
                      </AnimatePresence>
                    </div>

                    {/* Divider */}
                    <div className="h-px mx-4 bg-white/[0.10]" />

                    {/* Bottom bar */}
                    <div className="flex items-center justify-between px-4 py-3">
                      <span className="text-zinc-400 text-xs hidden sm:block">
                        <kbd className="bg-white/[0.08] border border-white/[0.15] rounded px-1.5 py-0.5 text-[10px] font-mono mr-1 text-zinc-300">Enter</kbd>
                        ile gönder
                      </span>
                      <button
                        type="submit"
                        disabled={loading || input.trim().length < 5}
                        className="ml-auto flex items-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:bg-white/[0.05] disabled:text-zinc-600 text-white text-sm px-5 py-2.5 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 disabled:hover:translate-y-0 disabled:hover:shadow-none"
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
                  </div>
                </form>
              </div>
            </div>

            {/* Example chips */}
            {!loading && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="hidden sm:flex flex-wrap gap-2 mt-4 justify-center"
              >
                <span className="text-zinc-700 text-xs self-center mr-1">Örnek:</span>
                {EXAMPLES.slice(0, 3).map((ex, i) => (
                  <motion.button
                    key={ex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    onClick={() => handleExample(ex)}
                    className="text-xs text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-blue-500/30 rounded-full px-3.5 py-1.5 transition-all"
                  >
                    {ex}
                  </motion.button>
                ))}
              </motion.div>
            )}

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm mt-3 text-center"
              >
                {error}
              </motion.p>
            )}

            {/* Loading state shimmer */}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 flex items-center justify-center gap-3 text-zinc-400 text-sm"
              >
                <Loader2 size={14} className="animate-spin text-blue-400" />
                <span>AI analiz ediyor...</span>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Glow blob */}
            <div className="relative">
              <div
                className={`absolute inset-0 -z-10 blur-3xl opacity-20 rounded-3xl ${colors!.glow}`}
              />

              {/* Gradient border wrapper */}
              <div className={`rounded-2xl p-[1px] bg-gradient-to-br ${colors!.gradientBorder} shadow-[0_0_40px_rgba(0,0,0,0.4)]`}>
                <div className={`bg-gradient-to-b ${colors!.bg} to-[#0D1225] rounded-[15px] p-4 sm:p-6`}>
                  {/* Service badge + reset */}
                  <div className="flex items-center justify-between mb-5">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className={`flex items-center gap-2 ${colors!.badge} rounded-full px-3.5 py-1.5 text-xs font-semibold`}
                    >
                      <span className="text-base">{result.icon}</span>
                      <span>{result.title}</span>
                    </motion.div>
                    <button
                      onClick={reset}
                      className="text-zinc-600 hover:text-zinc-400 transition-colors flex items-center gap-1.5 text-xs border border-white/[0.06] hover:border-white/[0.12] rounded-full px-3 py-1.5"
                    >
                      <RotateCcw size={11} />
                      <span>Tekrar sor</span>
                    </button>
                  </div>

                  {/* User message echo */}
                  <div className="bg-white/[0.04] rounded-xl px-4 py-3 mb-4 border border-white/[0.04]">
                    <p className="text-zinc-600 text-[11px] mb-1 uppercase tracking-wider font-medium">Siz sordunuz</p>
                    <p className="text-zinc-300 text-sm leading-relaxed">{input}</p>
                  </div>

                  {/* AI response with typewriter */}
                  <div className="flex gap-3 mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                      className="w-8 h-8 bg-white/[0.06] border border-white/[0.06] rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    >
                      <Sparkles size={14} className="text-blue-400" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-zinc-400 text-[11px] mb-1.5 uppercase tracking-wider font-medium">AI Analiz</p>
                      <p className="text-white text-sm leading-relaxed">
                        {displayed}
                        {displayed.length < result.message.length && (
                          <span className="inline-block w-0.5 h-4 bg-blue-400 ml-0.5 animate-pulse align-middle" />
                        )}
                      </p>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={openWhatsApp}
                      className={`flex-1 flex items-center justify-center gap-2.5 ${colors!.btn} text-white py-3.5 rounded-xl font-medium text-sm transition-colors shadow-lg`}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp&apos;tan Devam Et
                    </motion.button>
                    <Link
                      href={result.slug}
                      className="flex-1 flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white py-3.5 rounded-xl text-sm transition-all"
                    >
                      Detaylı Bilgi Al
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
