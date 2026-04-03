'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Calendar, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

const WHATSAPP_NUMBER = '905355601936'
const CALENDLY_URL = 'YOUR_CALENDLY_URL'

const services = [
  'SEO & İçerik Optimizasyonu',
  'Google Ads & Performans Reklamları',
  'Sosyal Medya Yönetimi',
  'Web Tasarımı & Geliştirme',
  'E-Posta & Otomasyon',
  'Veri Analizi & Danışmanlık',
  'Henüz karar vermedim',
]

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: '' })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setTimeout(() => {
        setStep('form')
        setForm({ name: '', phone: '', service: '' })
      }, 300)
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const isValid = form.name.trim().length > 1 && form.phone.trim().length > 9 && form.service

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    setIsSubmitting(true)
    try {
      await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, phone: form.phone, service: form.service }),
      })
    } catch {
      // fail silently
    }
    setIsSubmitting(false)
    setStep('success')
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Merhaba! Ramses Digital web sitesinden danışmanlık talebi gönderdim.\n\n` +
      `Ad Soyad: ${form.name}\n` +
      `Telefon: ${form.phone}\n` +
      `İlgilenilen Hizmet: ${form.service}\n\n` +
      `Benimle iletişime geçebilirsiniz.`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
  }

  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly && CALENDLY_URL !== 'YOUR_CALENDLY_URL') {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    }
  }

  const hasCalendly = CALENDLY_URL !== 'YOUR_CALENDLY_URL'

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            style={{ zIndex: 9998 }}
          />

          {/* Centering wrapper — pointer-events-none so clicks fall through to backdrop */}
          <div
            className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none"
            style={{ zIndex: 9999 }}
          >
            {/* Modal card — pointer-events-auto to capture its own clicks */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto w-full max-w-md bg-[#0D1225] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden"
              style={{ maxHeight: 'calc(100dvh - 2rem)', overflowY: 'auto' }}
            >
              {/* Header */}
              <div className="relative px-6 pt-6 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <MessageCircle size={16} className="text-blue-400" />
                  </div>
                  <h2 className="text-white font-bold text-lg">Ücretsiz Danışmanlık Al</h2>
                </div>
                <p className="text-zinc-500 text-xs pl-11">Bilgilerinizi bırakın, sizi arayalım.</p>
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 text-zinc-600 hover:text-white transition-colors p-1"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <AnimatePresence mode="wait">
                  {step === 'form' ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-zinc-400 text-xs font-medium mb-1.5">Ad Soyad</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          placeholder="Ahmet Yılmaz"
                          className="w-full bg-[#111827] border border-white/[0.06] focus:border-blue-500/50 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 text-sm outline-none transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-zinc-400 text-xs font-medium mb-1.5">Telefon Numarası</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => {
                            const val = e.target.value.replace(/\D/g, '').slice(0, 11)
                            setForm(f => ({ ...f, phone: val }))
                          }}
                          placeholder="0532 000 00 00"
                          maxLength={11}
                          className="w-full bg-[#111827] border border-white/[0.06] focus:border-blue-500/50 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 text-sm outline-none transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-zinc-400 text-xs font-medium mb-1.5">İlgilendiğiniz Hizmet</label>
                        <select
                          value={form.service}
                          onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                          className="w-full bg-[#111827] border border-white/[0.06] focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm outline-none transition-colors appearance-none cursor-pointer"
                          style={{ color: form.service ? 'white' : '#3f3f46' }}
                          required
                        >
                          <option value="" disabled>Seçiniz...</option>
                          {services.map(s => (
                            <option key={s} value={s} className="text-white bg-[#111827]">{s}</option>
                          ))}
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:bg-zinc-800 disabled:text-zinc-600 text-white py-3.5 rounded-xl font-medium text-sm transition-all mt-2"
                      >
                        {isSubmitting ? (
                          <Loader2 size={16} className="animate-spin" />
                        ) : (
                          <>Gönder <ArrowRight size={15} /></>
                        )}
                      </button>

                      <p className="text-zinc-700 text-[11px] text-center">
                        Bilgileriniz yalnızca sizinle iletişim amacıyla kullanılır.{' '}
                        <a href="/gizlilik-politikasi" className="underline hover:text-zinc-500" onClick={onClose}>
                          Gizlilik Politikası
                        </a>
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-2"
                    >
                      <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 size={28} className="text-green-400" />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">Talebiniz Alındı!</h3>
                      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                        En geç <span className="text-white font-medium">2 saat içinde</span> sizi arayacağız.
                        Dilerseniz şimdi WhatsApp&apos;tan da ulaşabilirsiniz.
                      </p>

                      <div className="space-y-3">
                        <button
                          onClick={openWhatsApp}
                          className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-3.5 rounded-xl font-medium text-sm transition-all"
                        >
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          WhatsApp&apos;tan Yaz
                        </button>

                        {hasCalendly && (
                          <button
                            onClick={openCalendly}
                            className="w-full flex items-center justify-center gap-2 border border-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white py-3.5 rounded-xl text-sm transition-all"
                          >
                            <Calendar size={15} />
                            Takvimden Randevu Al
                          </button>
                        )}

                        <button
                          onClick={onClose}
                          className="w-full text-zinc-600 hover:text-zinc-400 text-sm py-2 transition-colors"
                        >
                          Kapat
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
