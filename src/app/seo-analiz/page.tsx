'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Zap,
  Smartphone,
  FileText,
  Settings,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Loader2,
  TrendingUp,
} from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'

interface SeoResult {
  domain: string
  siteType: string
  scores: { hiz: number; mobil: number; icerik: number; teknik: number }
  overall: number
  issues: string[]
  strengths: string[]
  recommendations: string[]
  summary: string
}

function ScoreBar({ label, score, icon: Icon, color }: { label: string; score: number; icon: React.ElementType; color: string }) {
  const getColor = () => {
    if (score >= 80) return 'bg-green-500'
    if (score >= 60) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getTextColor = () => {
    if (score >= 80) return 'text-green-400'
    if (score >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="bg-[#111827] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon size={15} className={color} />
          <span className="text-zinc-300 text-sm font-medium">{label}</span>
        </div>
        <span className={`font-bold text-lg ${getTextColor()}`}>{score}</span>
      </div>
      <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${getColor()} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

function OverallScore({ score }: { score: number }) {
  const getColor = () => {
    if (score >= 80) return '#22c55e'
    if (score >= 60) return '#eab308'
    return '#ef4444'
  }

  const getLabel = () => {
    if (score >= 80) return 'İyi'
    if (score >= 60) return 'Orta'
    return 'Geliştirilmeli'
  }

  const circumference = 2 * Math.PI * 40
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={getColor()}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-white font-bold text-2xl">{score}</span>
          <span className="text-zinc-500 text-[10px]">/ 100</span>
        </div>
      </div>
      <span className="text-sm font-semibold" style={{ color: getColor() }}>{getLabel()}</span>
    </div>
  )
}

export default function SeoAnalizPage() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<SeoResult | null>(null)
  const [error, setError] = useState('')

  const handleAnalyze = async () => {
    if (!url.trim()) return
    const cleanUrl = url.startsWith('http') ? url : `https://${url}`

    setIsLoading(true)
    setResult(null)
    setError('')

    try {
      const response = await fetch('/api/seo-analiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: cleanUrl }),
      })

      const data = await response.json()
      if (data.error) throw new Error(data.error)
      setResult(data)
    } catch {
      setError('Analiz sırasında bir hata oluştu. Lütfen geçerli bir URL girin ve tekrar deneyin.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-10 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5"
          >
            <TrendingUp size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-medium">AI Destekli SEO Analizi</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Ücretsiz SEO Analizi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg"
          >
            Web sitenizin URL'sini girin, AI destekli SEO raporunuzu anında alın.
          </motion.p>
        </div>
      </section>

      {/* URL Input */}
      <section className="pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6">
            <label className="block text-zinc-400 text-xs font-medium mb-2">
              Web Sitesi URL&apos;si
            </label>
            <div className="flex gap-3">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                placeholder="örn: ramsesdigital.com"
                className="flex-1 bg-[#111827] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
              />
              <button
                onClick={handleAnalyze}
                disabled={!url.trim() || isLoading}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:bg-zinc-800 disabled:text-zinc-600 text-white px-5 py-3 rounded-xl text-sm font-medium transition-all shrink-0"
              >
                {isLoading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Search size={16} />
                )}
                Analiz Et
              </button>
            </div>
            <p className="text-zinc-700 text-xs mt-2">
              AI, URL yapısına ve domain bilgisine göre olası SEO sorunlarını analiz eder.
            </p>
          </div>

          {/* Loading */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 bg-[#0D1225] border border-white/[0.06] rounded-2xl p-8 text-center"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search size={20} className="text-blue-400 animate-pulse" />
                </div>
                <p className="text-white font-semibold mb-1">SEO analizi yapılıyor...</p>
                <p className="text-zinc-500 text-sm">Bu 10-20 saniye sürebilir</p>
                <div className="flex justify-center gap-1.5 mt-4">
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error */}
          {error && (
            <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-red-400 text-sm">
              {error}
            </div>
          )}
        </div>

        {/* Results */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto mt-8 space-y-5"
            >
              {/* Header */}
              <div className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <OverallScore score={result.overall} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-white font-bold text-xl">{result.domain}</h2>
                      <span className="text-xs bg-white/[0.06] text-zinc-400 px-2 py-0.5 rounded-full">
                        {result.siteType}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">{result.summary}</p>
                  </div>
                </div>
              </div>

              {/* Score Cards */}
              <div>
                <h3 className="text-white font-semibold mb-3 px-1">Detaylı Puanlar</h3>
                <div className="grid grid-cols-2 gap-3">
                  <ScoreBar label="Hız" score={result.scores.hiz} icon={Zap} color="text-yellow-400" />
                  <ScoreBar label="Mobil" score={result.scores.mobil} icon={Smartphone} color="text-blue-400" />
                  <ScoreBar label="İçerik" score={result.scores.icerik} icon={FileText} color="text-green-400" />
                  <ScoreBar label="Teknik SEO" score={result.scores.teknik} icon={Settings} color="text-violet-400" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Issues */}
                <div className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle size={15} className="text-yellow-400" />
                    <h3 className="text-white font-semibold text-sm">Tespit Edilen Sorunlar</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {result.issues.map((issue, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 shrink-0" />
                        <span className="text-zinc-400 text-xs leading-relaxed">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Strengths + Recommendations */}
                <div className="space-y-4">
                  {result.strengths.length > 0 && (
                    <div className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 size={15} className="text-green-400" />
                        <h3 className="text-white font-semibold text-sm">Güçlü Yanlar</h3>
                      </div>
                      <ul className="space-y-2">
                        {result.strengths.map((s, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 shrink-0" />
                            <span className="text-zinc-400 text-xs">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <ArrowRight size={15} className="text-blue-400" />
                      <h3 className="text-white font-semibold text-sm">Önerilen Aksiyonlar</h3>
                    </div>
                    <ul className="space-y-2">
                      {result.recommendations.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 text-xs font-bold shrink-0">{i + 1}.</span>
                          <span className="text-zinc-400 text-xs">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-6 text-center">
                <h3 className="text-white font-bold text-lg mb-2">Detaylı SEO Raporu İster misiniz?</h3>
                <p className="text-zinc-400 text-sm mb-5">
                  Bu analiz genel bir değerlendirmedir. Uzman ekibimiz sitenizi derinlemesine inceleyerek
                  kapsamlı bir rapor hazırlasın.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <CalendlyButton label="Detaylı Rapor İçin Bize Ulaşın" variant="primary" />
                  <button
                    onClick={() => { setResult(null); setUrl('') }}
                    className="text-zinc-500 hover:text-white text-sm transition-colors"
                  >
                    Yeni analiz yap
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}
