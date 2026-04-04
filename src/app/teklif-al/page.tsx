'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShoppingCart,
  MapPin,
  Building2,
  Rocket,
  Search,
  TrendingUp,
  Share2,
  Monitor,
  Mail,
  BarChart3,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Loader2,
  CheckCircle2,
  Calendar,
} from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'

const businessTypes = [
  { id: 'eticaret', label: 'E-Ticaret', icon: ShoppingCart, desc: 'Online mağaza veya marketplace' },
  { id: 'yerel', label: 'Yerel İşletme', icon: MapPin, desc: 'Restoran, klinik, mağaza vb.' },
  { id: 'kurumsal', label: 'Kurumsal', icon: Building2, desc: 'B2B veya büyük ölçekli firma' },
  { id: 'startup', label: 'Startup', icon: Rocket, desc: 'Yeni kurulan veya büyüyen girişim' },
]

const serviceOptions = [
  { id: 'SEO', label: 'SEO & İçerik', icon: Search },
  { id: 'Google Ads', label: 'Google Ads', icon: TrendingUp },
  { id: 'Sosyal Medya', label: 'Sosyal Medya', icon: Share2 },
  { id: 'Web Tasarım', label: 'Web Tasarımı', icon: Monitor },
  { id: 'E-posta', label: 'E-posta & Otomasyon', icon: Mail },
  { id: 'Danışmanlık', label: 'Veri & Danışmanlık', icon: BarChart3 },
]

const budgetOptions = [
  { id: '1000-3000', label: '1.000 – 3.000 ₺', desc: 'Başlangıç paketi' },
  { id: '3000-7000', label: '3.000 – 7.000 ₺', desc: 'Büyüme paketi' },
  { id: '7000-15000', label: '7.000 – 15.000 ₺', desc: 'Profesyonel paket' },
  { id: '15000+', label: '15.000 ₺+', desc: 'Kurumsal paket' },
]

function applyInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*([^*]+?)\*/g, '<em class="text-zinc-300 not-italic">$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-white/[0.06] px-1.5 py-0.5 rounded text-blue-300 text-xs font-mono">$1</code>')
}

function buildTable(rows: string[]): string {
  const isseparator = (r: string) => /^\|[\s\-|]+\|$/.test(r.replace(/\s/g, ''))
  const dataRows = rows.filter(r => !isseparator(r))
  if (dataRows.length === 0) return ''
  const parseRow = (row: string) => row.split('|').map(c => c.trim()).filter(Boolean)
  const headers = parseRow(dataRows[0])
  const bodyRows = dataRows.slice(1)
  const headerHtml = headers.map(h =>
    `<th class="text-left text-zinc-400 font-medium text-xs py-2.5 px-3 whitespace-nowrap">${applyInline(h)}</th>`
  ).join('')
  const bodyHtml = bodyRows.map(row => {
    const cells = parseRow(row)
    return `<tr class="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors">
      ${cells.map((c, idx) =>
        `<td class="py-2.5 px-3 text-xs ${idx === 0 ? 'text-zinc-200 font-medium' : 'text-zinc-400'}">${applyInline(c)}</td>`
      ).join('')}
    </tr>`
  }).join('')
  return `<div class="overflow-x-auto my-4 rounded-xl border border-white/[0.08] bg-white/[0.02]">
    <table class="w-full border-collapse">
      <thead><tr class="border-b border-white/[0.08]">${headerHtml}</tr></thead>
      <tbody>${bodyHtml}</tbody>
    </table>
  </div>`
}

function renderMarkdown(text: string): string {
  const lines = text.split('\n')
  let html = ''
  let i = 0

  while (i < lines.length) {
    const raw = lines[i]
    const trimmed = raw.trim()

    // Empty
    if (!trimmed) { i++; continue }

    // Divider ---
    if (trimmed === '---') {
      html += `<div class="my-5 border-t border-white/[0.06]"></div>`
      i++; continue
    }

    // Table block
    if (trimmed.startsWith('|')) {
      const rows: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('|')) { rows.push(lines[i].trim()); i++ }
      html += buildTable(rows)
      continue
    }

    // ### subheading
    if (trimmed.startsWith('### ')) {
      html += `<h4 class="text-white font-semibold text-sm mt-5 mb-2">${applyInline(trimmed.slice(4))}</h4>`
      i++; continue
    }

    // ## heading
    if (trimmed.startsWith('## ')) {
      html += `<h3 class="text-white font-bold text-base mt-6 mb-2">${applyInline(trimmed.slice(3))}</h3>`
      i++; continue
    }

    // Blockquote >
    if (trimmed.startsWith('> ')) {
      html += `<div class="bg-blue-500/8 border border-blue-500/20 rounded-xl px-4 py-3 my-4 text-sm text-zinc-300 leading-relaxed">${applyInline(trimmed.slice(2))}</div>`
      i++; continue
    }

    // ✅ list item (may be preceded by lone •)
    if (trimmed.startsWith('✅')) {
      const items: string[] = []
      while (i < lines.length) {
        const t = lines[i].trim()
        if (t === '•') { i++; continue }
        if (t.startsWith('✅')) {
          items.push(`<li class="flex items-start gap-2.5">
            <span class="text-green-400 shrink-0 mt-0.5 text-sm">✅</span>
            <span class="text-zinc-300 text-sm leading-relaxed">${applyInline(t.slice(1).trim())}</span>
          </li>`)
          i++
        } else break
      }
      if (items.length) html += `<ul class="space-y-2.5 my-3">${items.join('')}</ul>`
      continue
    }

    // Lone • (bullet placeholder before ✅)
    if (trimmed === '•') { i++; continue }

    // - or * list
    if (/^[-*] /.test(trimmed)) {
      const items: string[] = []
      while (i < lines.length && /^[-*] /.test(lines[i].trim())) {
        items.push(`<li class="flex items-start gap-2 text-sm text-zinc-300 leading-relaxed">
          <span class="text-blue-400 shrink-0 mt-2 w-1 h-1 rounded-full bg-blue-400 inline-block"></span>
          <span>${applyInline(lines[i].trim().slice(2))}</span>
        </li>`)
        i++
      }
      html += `<ul class="space-y-2 my-3">${items.join('')}</ul>`
      continue
    }

    // Emoji section title (🎯 📈 🚀 💡 etc.)
    const firstCode = trimmed.codePointAt(0) ?? 0
    if (firstCode > 0x1F000) {
      html += `<h3 class="text-white font-bold text-base mt-2 mb-2">${applyInline(trimmed)}</h3>`
      i++; continue
    }

    // Quoted package name
    if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
      html += `<div class="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 my-3 text-white font-semibold text-sm text-center">${trimmed.slice(1, -1)}</div>`
      i++; continue
    }

    // Regular paragraph
    html += `<p class="text-zinc-400 text-sm leading-relaxed mb-2">${applyInline(trimmed)}</p>`
    i++
  }

  return html
}

export default function TeklifAlPage() {
  const [step, setStep] = useState(1)
  const [businessType, setBusinessType] = useState('')
  const [services, setServices] = useState<string[]>([])
  const [budget, setBudget] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isDone, setIsDone] = useState(false)

  const toggleService = (id: string) => {
    setServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const handleSubmit = async () => {
    if (!businessType || services.length === 0 || !budget) return
    setIsLoading(true)
    setStep(5)
    setResult('')
    setIsDone(false)

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessType, services, budget, websiteUrl }),
      })

      if (!response.body) throw new Error('No body')
      const reader = response.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        setResult((prev) => prev + decoder.decode(value))
      }
      setIsDone(true)
    } catch {
      setResult('Bir hata oluştu. Lütfen tekrar deneyin.')
      setIsDone(true)
    } finally {
      setIsLoading(false)
    }
  }

  const reset = () => {
    setStep(1)
    setBusinessType('')
    setServices([])
    setBudget('')
    setWebsiteUrl('')
    setResult('')
    setIsDone(false)
  }

  const canProceed =
    (step === 1 && businessType) ||
    (step === 2 && services.length > 0) ||
    (step === 3 && budget) ||
    step === 4

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-10 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5"
          >
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-medium">AI Destekli Teklif Hesaplayıcı</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Anında Ücretsiz Teklif Al
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg"
          >
            3 adımda işletmenize özel dijital pazarlama paketi önerisi alın.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          {step < 5 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                {['İşletme Tipi', 'Hizmetler', 'Bütçe', 'Web Sitesi'].map((label, i) => (
                  <div
                    key={label}
                    className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                      step > i + 1 ? 'text-blue-400' : step === i + 1 ? 'text-white' : 'text-zinc-600'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        step > i + 1
                          ? 'bg-blue-500 text-white'
                          : step === i + 1
                          ? 'bg-white text-black'
                          : 'bg-white/10 text-zinc-400'
                      }`}
                    >
                      {step > i + 1 ? '✓' : i + 1}
                    </span>
                    <span className="hidden sm:block">{label}</span>
                  </div>
                ))}
              </div>
              <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500 rounded-full"
                  animate={{ width: `${((step - 1) / 4) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          <div className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 md:p-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Business Type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <h2 className="text-white font-bold text-xl mb-2">İşletme Tipinizi Seçin</h2>
                  <p className="text-zinc-400 text-sm mb-6">Size en uygun paketi hazırlayabilmemiz için işletme tipinizi seçin.</p>
                  <div className="grid grid-cols-2 gap-3">
                    {businessTypes.map((bt) => {
                      const Icon = bt.icon
                      const selected = businessType === bt.id
                      return (
                        <button
                          key={bt.id}
                          onClick={() => setBusinessType(bt.id)}
                          className={`p-5 rounded-xl border text-left transition-all ${
                            selected
                              ? 'border-blue-500/60 bg-blue-500/10'
                              : 'border-white/[0.06] bg-white/[0.02] hover:border-white/20'
                          }`}
                        >
                          <Icon
                            size={20}
                            className={`mb-3 ${selected ? 'text-blue-400' : 'text-zinc-400'}`}
                          />
                          <p className={`font-semibold text-sm ${selected ? 'text-white' : 'text-zinc-300'}`}>
                            {bt.label}
                          </p>
                          <p className="text-zinc-600 text-xs mt-0.5">{bt.desc}</p>
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Services */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <h2 className="text-white font-bold text-xl mb-2">İhtiyacınız Olan Hizmetler</h2>
                  <p className="text-zinc-400 text-sm mb-6">Birden fazla seçebilirsiniz.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {serviceOptions.map((svc) => {
                      const Icon = svc.icon
                      const selected = services.includes(svc.id)
                      return (
                        <button
                          key={svc.id}
                          onClick={() => toggleService(svc.id)}
                          className={`p-4 rounded-xl border text-left transition-all relative ${
                            selected
                              ? 'border-blue-500/60 bg-blue-500/10'
                              : 'border-white/[0.06] bg-white/[0.02] hover:border-white/20'
                          }`}
                        >
                          {selected && (
                            <CheckCircle2
                              size={14}
                              className="absolute top-3 right-3 text-blue-400"
                            />
                          )}
                          <Icon size={18} className={`mb-2 ${selected ? 'text-blue-400' : 'text-zinc-400'}`} />
                          <p className={`text-xs font-medium ${selected ? 'text-white' : 'text-zinc-400'}`}>
                            {svc.label}
                          </p>
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Budget */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <h2 className="text-white font-bold text-xl mb-2">Aylık Bütçe Aralığınız</h2>
                  <p className="text-zinc-400 text-sm mb-6">Bütçenize göre en verimli stratejiyi öneriyoruz.</p>
                  <div className="grid grid-cols-2 gap-3">
                    {budgetOptions.map((b) => {
                      const selected = budget === b.id
                      return (
                        <button
                          key={b.id}
                          onClick={() => setBudget(b.id)}
                          className={`p-5 rounded-xl border text-left transition-all ${
                            selected
                              ? 'border-blue-500/60 bg-blue-500/10'
                              : 'border-white/[0.06] bg-white/[0.02] hover:border-white/20'
                          }`}
                        >
                          <p className={`font-bold text-base mb-0.5 ${selected ? 'text-blue-400' : 'text-white'}`}>
                            {b.label}
                          </p>
                          <p className="text-zinc-600 text-xs">{b.desc}</p>
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 4: URL */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <h2 className="text-white font-bold text-xl mb-2">Web Siteniz</h2>
                  <p className="text-zinc-400 text-sm mb-6">
                    Opsiyoneldir. Girmeniz durumunda daha kişiselleştirilmiş bir teklif alırsınız.
                  </p>
                  <input
                    type="url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://sirketiniz.com"
                    className="w-full bg-[#111827] border border-white/[0.06] rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500/50 transition-colors text-sm mb-4"
                  />
                  <div className="bg-blue-500/5 border border-blue-500/15 rounded-xl p-4">
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      <strong className="text-white">Özet:</strong> {businessType} işletmesi için{' '}
                      <strong className="text-blue-400">{services.join(', ')}</strong> hizmetleri,{' '}
                      <strong className="text-white">{budget} ₺/ay</strong> bütçeyle.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Result */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {isLoading && !result && (
                    <div className="py-12 flex flex-col items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                        <Sparkles size={22} className="text-blue-400 animate-pulse" />
                      </div>
                      <div className="text-center">
                        <p className="text-white font-semibold">AI teklifiniz hazırlanıyor...</p>
                        <p className="text-zinc-400 text-sm mt-1">Bu birkaç saniye sürebilir</p>
                      </div>
                      <div className="flex gap-1.5">
                        {[0, 150, 300].map((delay) => (
                          <span
                            key={delay}
                            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                            style={{ animationDelay: `${delay}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {result && (
                    <div>
                      {/* Report header */}
                      <div className="flex items-start justify-between gap-3 mb-5 pb-5 border-b border-white/[0.06]">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-violet-500/10 rounded-xl flex items-center justify-center shrink-0">
                            <Sparkles size={18} className="text-blue-400" />
                          </div>
                          <div>
                            <p className="text-white font-bold">AI Teklif Raporu</p>
                            <div className="flex flex-wrap items-center gap-1.5 mt-1">
                              <span className="bg-white/[0.06] text-zinc-400 text-[11px] px-2 py-0.5 rounded-full capitalize">{businessType}</span>
                              <span className="bg-blue-500/10 text-blue-400 text-[11px] px-2 py-0.5 rounded-full">{services.length} hizmet</span>
                              <span className="bg-white/[0.06] text-zinc-400 text-[11px] px-2 py-0.5 rounded-full">{budget} ₺/ay</span>
                              {websiteUrl && <span className="bg-white/[0.06] text-zinc-400 text-[11px] px-2 py-0.5 rounded-full truncate max-w-[120px]">{websiteUrl.replace(/https?:\/\//, '')}</span>}
                            </div>
                          </div>
                        </div>
                        <div className="shrink-0 mt-1">
                          {!isDone
                            ? <span className="flex items-center gap-1.5 text-blue-400 text-xs"><Loader2 size={12} className="animate-spin" />Hazırlanıyor</span>
                            : <span className="flex items-center gap-1.5 text-green-400 text-xs"><CheckCircle2 size={12} />Tamamlandı</span>
                          }
                        </div>
                      </div>

                      {/* Rendered content */}
                      <div
                        className="leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: renderMarkdown(result) }}
                      />

                      {isDone && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-8 pt-6 border-t border-white/[0.06]"
                        >
                          <p className="text-zinc-400 text-sm mb-4">
                            Teklifinizi beğendiniz mi? Hemen randevu alın, detayları konuşalım.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <CalendlyButton
                              label="Şimdi Randevu Al"
                              variant="primary"
                              className="justify-center"
                            />
                            <button
                              onClick={reset}
                              className="px-6 py-3.5 border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white rounded-full text-sm transition-all"
                            >
                              Yeni Teklif Hesapla
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            {step < 5 && (
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  disabled={step === 1}
                  className="flex items-center gap-2 text-zinc-400 hover:text-white disabled:opacity-0 disabled:pointer-events-none text-sm transition-colors"
                >
                  <ChevronLeft size={16} /> Geri
                </button>

                {step < 4 ? (
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canProceed}
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:bg-zinc-800 disabled:text-zinc-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all"
                  >
                    Devam <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all"
                  >
                    <Sparkles size={14} /> Teklif Oluştur
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Trust signals */}
          {step < 5 && (
            <div className="flex items-center justify-center gap-6 mt-6">
              {[
                { icon: CheckCircle2, label: 'Ücretsiz & bağlayıcı değil' },
                { icon: Calendar, label: 'Anında sonuç' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-1.5 text-zinc-600 text-xs">
                    <Icon size={12} className="text-blue-500" />
                    {item.label}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
