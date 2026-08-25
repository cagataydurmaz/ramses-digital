'use client'

import { useState } from 'react'
import { Search, TrendingUp, Share2, Monitor, MessageCircle } from 'lucide-react'
import { estimateQuote, businessSizeLabels, type BusinessSize } from '@/lib/pricing'

const WHATSAPP_NUMBER = '905355601936'

const quickServices = [
  { id: 'SEO', label: 'SEO', icon: Search },
  { id: 'Google Ads', label: 'Google Ads', icon: TrendingUp },
  { id: 'Sosyal Medya', label: 'Sosyal Medya', icon: Share2 },
  { id: 'Web Tasarım', label: 'Web Tasarımı', icon: Monitor },
]

const sizes: { id: BusinessSize; label: string }[] = [
  { id: 'kucuk', label: 'Küçük' },
  { id: 'orta', label: 'Orta' },
  { id: 'buyuk', label: 'Büyük' },
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
    <div className="w-full max-w-2xl mx-auto bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
      <p className="text-blue-400 text-xs font-medium uppercase tracking-wider mb-4 text-center">Hızlı Fiyat Al — 2 Tıkla</p>

      {/* 1. Hizmet seçimi */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
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

      {/* 2. Büyüklük seçimi */}
      <div className="flex justify-center gap-2 mb-5">
        {sizes.map((s) => {
          const selected = size === s.id
          return (
            <button
              key={s.id}
              onClick={() => setSize(s.id)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-all ${
                selected
                  ? 'bg-violet-500/15 border-violet-500/50 text-violet-300'
                  : 'bg-white/[0.02] border-white/[0.08] text-zinc-400 hover:border-white/20'
              }`}
            >
              {s.label}
            </button>
          )
        })}
      </div>

      {/* Sonuç */}
      {hasResult && est ? (
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mb-4">
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
        <p className="text-zinc-600 text-xs text-center">
          {services.length === 0 ? 'Önce hizmet seçin' : 'Sonra işletme büyüklüğünüzü seçin'}
        </p>
      )}
    </div>
  )
}
