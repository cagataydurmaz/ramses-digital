'use client'

import { useState } from 'react'
import { Search, TrendingUp, Share2, Monitor, MessageCircle, Store, Building, Landmark } from 'lucide-react'
import { estimateQuote, businessSizeLabels, type BusinessSize } from '@/lib/pricing'

const WHATSAPP_NUMBER = '905355601936'

const quickServices = [
  { id: 'SEO', label: 'SEO', icon: Search },
  { id: 'Google Ads', label: 'Google Ads', icon: TrendingUp },
  { id: 'Sosyal Medya', label: 'Sosyal Medya', icon: Share2 },
  { id: 'Web Tasarım', label: 'Web Tasarımı', icon: Monitor },
]

const sizes: { id: BusinessSize; icon: typeof Store; hint: string }[] = [
  { id: 'kucuk', icon: Store, hint: '1-10 çalışan' },
  { id: 'orta', icon: Building, hint: '10-50 çalışan' },
  { id: 'buyuk', icon: Landmark, hint: '50+ çalışan' },
]

export default function QuickPriceWidget() {
  const [services, setServices] = useState<string[]>([])
  const [size, setSize] = useState<BusinessSize | ''>('')

  const toggleService = (id: string) => {
    setServices((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  const est = size ? estimateQuote(services, size) : null
  const hasResult = !!est && (est.monthlyMax > 0 || est.oneTimeMax > 0)
  const fmt = (n: number) => n.toLocaleString('tr-TR')

  const whatsappHref = (() => {
    const svcText = services.length ? services.join(', ') : 'hizmetleriniz'
    const sizeText = size ? businessSizeLabels[size] : ''
    let priceText = ''
    if (hasResult && est) {
      if (est.monthlyMax > 0) priceText += ` (~${fmt(est.monthlyMin)}-${fmt(est.monthlyMax)}₺/ay)`
      if (est.oneTimeMax > 0) priceText += ` (~${fmt(est.oneTimeMin)}-${fmt(est.oneTimeMax)}₺ tek seferlik)`
    }
    const msg = `Merhaba! ${sizeText ? sizeText + ' ölçeğinde bir işletmeyim, ' : ''}${svcText} hizmeti almak istiyorum.${priceText} Detaylı bilgi almak istiyorum.`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
  })()

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-gradient-to-b from-white/[0.04] to-white/[0.02] border border-white/[0.08] rounded-3xl p-5 sm:p-7 backdrop-blur-sm overflow-hidden">
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[400px] h-[160px] bg-blue-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative flex items-center justify-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
        <p className="text-blue-400 text-xs font-medium uppercase tracking-wider">Hızlı Fiyat Al — 2 Tıkla</p>
      </div>

      {/* 1. Hizmet seçimi */}
      <div className="relative mb-6">
        <div className="flex items-center gap-2 justify-center mb-3">
          <span className="w-5 h-5 rounded-full bg-blue-500/15 text-blue-300 text-[11px] font-bold flex items-center justify-center shrink-0">1</span>
          <p className="text-zinc-400 text-xs sm:text-sm">Hangi hizmet(ler) ilginizi çekiyor?</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {quickServices.map((s) => {
            const Icon = s.icon
            const selected = services.includes(s.id)
            return (
              <button
                key={s.id}
                onClick={() => toggleService(s.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all ${
                  selected
                    ? 'bg-blue-500/15 border-blue-500/50 text-blue-300'
                    : 'bg-white/[0.02] border-white/[0.08] text-zinc-400 hover:border-white/20'
                }`}
              >
                <Icon size={14} /> {s.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* 2. Büyüklük seçimi */}
      <div className="relative mb-6">
        <div className="flex items-center gap-2 justify-center mb-3">
          <span className="w-5 h-5 rounded-full bg-violet-500/15 text-violet-300 text-[11px] font-bold flex items-center justify-center shrink-0">2</span>
          <p className="text-zinc-400 text-xs sm:text-sm">İşletmenizin büyüklüğü ne kadar?</p>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto">
          {sizes.map((s) => {
            const Icon = s.icon
            const selected = size === s.id
            return (
              <button
                key={s.id}
                onClick={() => setSize(s.id)}
                className={`flex flex-col items-center gap-1 px-2 py-3 rounded-xl border text-center transition-all ${
                  selected
                    ? 'bg-violet-500/15 border-violet-500/50'
                    : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20'
                }`}
              >
                <Icon size={18} className={selected ? 'text-violet-300' : 'text-zinc-500'} />
                <span className={`text-xs sm:text-sm font-medium ${selected ? 'text-violet-300' : 'text-zinc-300'}`}>
                  {businessSizeLabels[s.id].replace(' İşletme', '').replace(' / Kurumsal', '')}
                </span>
                <span className="text-zinc-600 text-[10px] sm:text-[11px]">({s.hint})</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Sonuç */}
      {hasResult && est ? (
        <div className="relative text-center bg-gradient-to-br from-blue-500/10 to-violet-500/5 border border-blue-500/20 rounded-2xl p-5 pt-4">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mb-3">
            {est.monthlyMax > 0 && (
              <p className="text-xl sm:text-2xl font-bold text-white">
                {fmt(est.monthlyMin)}–{fmt(est.monthlyMax)}₺<span className="text-sm font-normal text-zinc-500">/ay</span>
              </p>
            )}
            {est.oneTimeMax > 0 && (
              <p className="text-xl sm:text-2xl font-bold text-white">
                {fmt(est.oneTimeMin)}–{fmt(est.oneTimeMax)}₺<span className="text-sm font-normal text-zinc-500"> tek seferlik</span>
              </p>
            )}
          </div>
          {est.hasAdSpendShare && (
            <p className="text-zinc-500 text-xs mb-3">+ reklam bütçenizin %15&apos;i (yönetim payı)</p>
          )}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            <MessageCircle size={16} /> WhatsApp&apos;tan Netleştir
          </a>
          <p className="text-zinc-600 text-[11px] mt-3">Güncel piyasa ortalamasıdır, kesin teklif değildir.</p>
        </div>
      ) : (
        <p className="relative text-zinc-600 text-xs text-center">
          {services.length === 0 ? 'Önce yukarıdan hizmet seçin' : 'Şimdi işletme büyüklüğünüzü seçin'}
        </p>
      )}
    </div>
  )
}
