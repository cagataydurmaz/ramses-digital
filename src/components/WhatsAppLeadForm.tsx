'use client'

import { useState } from 'react'
import { trackLead } from '@/lib/tracking'
import { Search, TrendingUp, Share2, Monitor, Mail, BarChart3, Workflow, Send } from 'lucide-react'
import { waMesaj, whatsappAc } from '@/lib/whatsapp'

const WHATSAPP_NUMBER = '905355601936'

const interestOptions = [
  { id: 'SEO', label: 'SEO, AEO & GEO', icon: Search },
  { id: 'Google Ads', label: 'Google Ads', icon: TrendingUp },
  { id: 'Sosyal Medya', label: 'Sosyal Medya', icon: Share2 },
  { id: 'Web Tasarım', label: 'Web Sitesi Tasarımı', icon: Monitor },
  { id: 'E-posta', label: 'E-posta & Otomasyon', icon: Mail },
  { id: 'n8n Otomasyon', label: 'n8n Otomasyon', icon: Workflow },
  { id: 'Veri Analizi', label: 'Veri Analizi', icon: BarChart3 },
]

export default function WhatsAppLeadForm() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [note, setNote] = useState('')
  const [touched, setTouched] = useState(false)

  const toggleInterest = (id: string) => {
    setInterests((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const isValid = name.trim() && phone.trim() && interests.length > 0

  const handleSubmit = () => {
    setTouched(true)
    if (!isValid) return

    const metin = waMesaj('Hizmet talebi', [
      `Ad: ${name}`,
      company && `Firma: ${company}`,
      `Telefon: ${phone}`,
      `İlgilendiğim hizmetler: ${interests.join(', ')}`,
      note && `Not: ${note}`,
    ])
    window.fbq?.('track', 'Lead', { content_name: 'WhatsApp Lead Form' })
    trackLead('whatsapp_form')
    whatsappAc(metin, 'Hizmet formu')
  }

  return (
    <div className="relative bg-[#0D1225] border border-white/[0.08] rounded-3xl p-6 sm:p-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="relative z-10">
        <div className="text-center mb-8">
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-3">Bize Ulaşın</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Bilgilerinizi Bırakın, Biz Yazalım</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Formu doldurun, mesajınız WhatsApp&apos;ta hazır şekilde açılsın — tek tıkla gönderin.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2 block">Ad Soyad</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adınız Soyadınız"
                className="w-full bg-[#111827] border border-white/[0.06] rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
              />
              {touched && !name.trim() && <p className="text-red-400 text-xs mt-1.5">Ad soyad gerekli</p>}
            </div>
            <div>
              <label className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2 block">Firma <span className="text-zinc-700">(opsiyonel)</span></label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Firma Adı"
                className="w-full bg-[#111827] border border-white/[0.06] rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2 block">Telefon</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+90 5xx xxx xx xx"
              className="w-full bg-[#111827] border border-white/[0.06] rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
            />
            {touched && !phone.trim() && <p className="text-red-400 text-xs mt-1.5">Telefon gerekli</p>}
          </div>

          <div className="mb-5">
            <label className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2 block">İlgilendiğiniz Hizmetler <span className="text-zinc-700">(birden fazla seçebilirsiniz)</span></label>
            <div className="flex flex-wrap gap-2">
              {interestOptions.map((opt) => {
                const Icon = opt.icon
                const selected = interests.includes(opt.id)
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleInterest(opt.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all ${
                      selected
                        ? 'bg-blue-500/15 border-blue-500/50 text-blue-300'
                        : 'bg-white/[0.02] border-white/[0.08] text-zinc-400 hover:border-white/20'
                    }`}
                  >
                    <Icon size={13} /> {opt.label}
                  </button>
                )
              })}
            </div>
            {touched && interests.length === 0 && <p className="text-red-400 text-xs mt-1.5">En az bir hizmet seçin</p>}
          </div>

          <div className="mb-6">
            <label className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2 block">Notlar <span className="text-zinc-700">(opsiyonel)</span></label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Bütçe, zaman çizelgesi, özel ihtiyaçlar..."
              rows={3}
              className="w-full bg-[#111827] border border-white/[0.06] rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500/50 transition-colors text-sm resize-none"
            />
          </div>


          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-full text-sm font-semibold transition-colors"
          >
            <Send size={16} /> WhatsApp&apos;tan Gönder
          </button>
          <p className="text-zinc-500 text-xs text-center mt-2">Mesajınız doğrudan ekibimize ulaşır · Ortalama 2 saat içinde dönüş yapıyoruz.</p>
          <p className="text-zinc-600 text-xs text-center mt-3">
            Gönder&apos;e bastığınızda bilgileriniz WhatsApp&apos;ta hazır bir mesaj olarak açılır.
          </p>
        </div>
      </div>
    </div>
  )
}
