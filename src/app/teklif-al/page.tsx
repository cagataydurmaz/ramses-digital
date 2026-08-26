'use client'

import { Sparkles } from 'lucide-react'
import TeklifAlCalculator from '@/components/TeklifAlCalculator'

export default function TeklifAlPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-10 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-medium">AI Destekli Teklif Hesaplayıcı</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Anında Ücretsiz Teklif Al
          </h1>
          <p className="text-zinc-400 text-lg">
            4 adımda işletmenize özel dijital pazarlama paketi ve tahmini fiyat aralığı alın.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-24 px-6">
        <TeklifAlCalculator />
      </section>
    </>
  )
}
