'use client'

import { useState } from 'react'
import { Search, Loader2, Zap, Smartphone, FileText, Settings, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface SeoResult {
  domain: string
  siteType: string
  scores: { hiz: number; mobil: number; icerik: number; teknik: number }
  overall: number
  issues: string[]
  summary: string
}

function MiniScore({ label, score, icon: Icon }: { label: string; score: number; icon: React.ElementType }) {
  const color = score >= 80 ? 'text-green-400' : score >= 60 ? 'text-yellow-400' : 'text-red-400'
  const bar = score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
  return (
    <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <Icon size={13} className="text-zinc-500" />
          <span className="text-zinc-400 text-[11px]">{label}</span>
        </div>
        <span className={`font-bold text-sm ${color}`}>{score}</span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <div className={`h-full ${bar} rounded-full`} style={{ width: `${score}%` }} />
      </div>
    </div>
  )
}

export default function QuickSeoWidget() {
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
      window.fbq?.('trackCustom', 'SeoAnaliziTamamlandi')
    } catch {
      setError('Analiz sırasında bir hata oluştu. Lütfen geçerli bir URL girin ve tekrar deneyin.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative bg-gradient-to-b from-white/[0.04] to-white/[0.02] border border-white/[0.08] rounded-3xl p-6 sm:p-7 overflow-hidden">
      <div className="absolute -top-16 right-0 w-[300px] h-[160px] bg-violet-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="relative flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-2">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
          placeholder="örn: ramsesdigital.com"
          className="flex-1 bg-[#111827] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-violet-500/50 transition-colors text-sm"
        />
        <button
          onClick={handleAnalyze}
          disabled={!url.trim() || isLoading}
          className="flex items-center justify-center gap-2 bg-violet-500 hover:bg-violet-600 disabled:bg-zinc-800 disabled:text-zinc-600 text-white px-5 py-3 rounded-xl text-sm font-medium transition-all shrink-0"
        >
          {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
          Analiz Et
        </button>
      </div>
      <p className="relative text-zinc-600 text-[11px] text-center mb-1">
        AI, URL yapısına ve domain bilgisine göre olası SEO sorunlarını analiz eder.
      </p>

      {isLoading && (
        <div className="relative text-center py-6">
          <div className="flex justify-center gap-1.5">
            {[0, 150, 300].map((delay) => (
              <span key={delay} className="w-2 h-2 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: `${delay}ms` }} />
            ))}
          </div>
          <p className="text-zinc-500 text-xs mt-3">10-20 saniye sürebilir</p>
        </div>
      )}

      {error && <p className="relative text-red-400 text-xs text-center mt-4">{error}</p>}

      {result && (
        <div className="relative mt-6 max-w-xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 shrink-0 rounded-full bg-violet-500/10 border border-violet-500/20 flex flex-col items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">{result.overall}</span>
              <span className="text-zinc-600 text-[9px]">/100</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{result.domain}</p>
              <p className="text-zinc-500 text-xs">{result.siteType}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            <MiniScore label="Hız" score={result.scores.hiz} icon={Zap} />
            <MiniScore label="Mobil" score={result.scores.mobil} icon={Smartphone} />
            <MiniScore label="İçerik" score={result.scores.icerik} icon={FileText} />
            <MiniScore label="Teknik" score={result.scores.teknik} icon={Settings} />
          </div>
          {result.issues.length > 0 && (
            <ul className="space-y-1.5 mb-5">
              {result.issues.slice(0, 2).map((issue, i) => (
                <li key={i} className="flex items-start gap-2 text-zinc-400 text-xs">
                  <span className="w-1 h-1 bg-yellow-400 rounded-full mt-1.5 shrink-0" />
                  {issue}
                </li>
              ))}
            </ul>
          )}
          <Link
            href="/seo-analiz"
            className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
          >
            Tam raporu gör <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  )
}
