'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2, Star, ExternalLink } from 'lucide-react'

const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/xKzk4Q5VCeK4ePbz6'

function GoogleGIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className="shrink-0">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  )
}

const googleReviews = [
  {
    name: 'Furkan Arıkan',
    time: 'Bir hafta önce',
    rating: 5,
    text: 'Harika bir işletme, tüm süreçlerde çok yardımcı olan bir ekibe sahipler, her şey için teşekkürler!',
  },
  {
    name: 'furkan tanır',
    time: 'Bir hafta önce',
    rating: 5,
    text: 'İşletmemizin reklam faaliyetlerini başarıyla yürütüyorlar. Çağatay bey çok yardımcı oldu, ilgili ve işini titizlikle yapıyor.',
  },
  {
    name: 'Atalay Durmaz',
    time: '2 ay önce',
    rating: 5,
    text: 'İşini titizlikle yapan, vizyoner bir ekip.',
  },
  {
    name: 'Mert Anıl Güler',
    time: '2 gün önce',
    rating: 5,
    text: "Harika ötesi. Aldığım hizmetten çok memnun kaldım. Ramses'le yollarımızın kesişmesi büyük şans oldu. Kesinlikle tavsiye ediyorum. Çağatay Bey'e ne istediğinizi anlatmanız yeter. Tekrar teşekkürler.",
  },
  {
    name: 'Nur Çelen',
    time: '2 gün önce',
    rating: 5,
    text: 'Web sitemi ve reklam süreçlerimi profesyonel bir şekilde yönetti. Süreç boyunca her konuda hızlı geri dönüş aldı, isteklerimi dikkate aldı ve ortaya tam istediğim gibi bir çalışma çıktı. Emeğiniz ve ilginiz için çok teşekkür ederim.',
  },
]

const services = [
  'SEO & İçerik Optimizasyonu',
  'Google Ads & Performans Reklamları',
  'Web Tasarımı & Geliştirme',
  'E-Posta & Otomasyon Pazarlama',
  'n8n İş Akışı Otomasyonu',
  'Veri Analizi & Stratejik Danışmanlık',
  'Tüm Hizmetler',
  'Diğer',
]

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = 'Ad Soyad gereklidir'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Geçerli bir e-posta adresi girin'
    if (!form.message.trim()) newErrors.message = 'Mesaj gereklidir'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      })
      if (res.ok) {
        setIsSubmitted(true)
      } else {
        alert('Mesaj gönderilemedi, lütfen tekrar deneyin.')
      }
    } catch {
      alert('Bir hata oluştu, lütfen tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': 'https://ramsesdigital.com/iletisim#page',
        name: 'Ramses Dijital İletişim',
        url: 'https://ramsesdigital.com/iletisim',
        description: 'Ramses Dijital Reklam Ajansı ile iletişime geçin. İzmit / Kocaeli\'de dijital pazarlama danışmanlığı için ücretsiz görüşme ayarlayın.',
        publisher: { '@id': 'https://ramsesdigital.com/#organization' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
          { '@type': 'ListItem', position: 2, name: 'İletişim', item: 'https://ramsesdigital.com/iletisim' },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
            İletişim
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sizinle Tanışmak İsteriz
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Projenizi anlatın, size özel bir strateji geliştirelim. İlk görüşme tamamen ücretsiz.
          </p>
        </div>
      </section>

      {/* Google Yorumları */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 px-1">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GoogleGIcon size={20} />
                <p className="text-blue-500 text-sm font-medium tracking-wider uppercase">
                  Google Yorumları
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Müşterilerimiz Google&apos;da Ne Diyor?
              </h2>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 shrink-0 w-fit"
            >
              Tüm Yorumları Gör
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="marquee-viewport">
            <div className="marquee-track">
              {[...googleReviews, ...googleReviews].map((r, i) => (
                <div
                  key={`${r.name}-${i}`}
                  className="shrink-0 w-[300px] sm:w-[360px] mr-5 bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 card-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <GoogleGIcon size={18} />
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-5 line-clamp-4">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{r.name}</p>
                      <p className="text-zinc-400 text-xs mt-0.5">{r.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-6">İletişim Bilgileri</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium mb-0.5">Adres</p>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Körfez Mah. Sanayi Cd. Berk Sk.
                        <br />
                        Dolphin AVM Kat:2 No:224
                        <br />
                        41050 İzmit / Kocaeli
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium mb-0.5">Telefon</p>
                      <a href="tel:+905355601936" className="text-zinc-400 hover:text-white text-sm transition-colors">
                        +90 (535) 560 19 36
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium mb-0.5">E-Posta</p>
                      <a href="mailto:ramsesdigitalagency@gmail.com" className="text-zinc-400 hover:text-white text-sm transition-colors">
                        ramsesdigitalagency@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium mb-0.5">Çalışma Saatleri</p>
                      <p className="text-zinc-400 text-sm">
                        Pazartesi – Cuma: 09:00 – 18:00
                        <br />
                        Cumartesi: 10:00 – 14:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-2">Ücretsiz Danışmanlık</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  İlk görüşmemiz tamamen ücretsiz. İşletmenizin ihtiyaçlarını
                  dinleyip, size özel bir dijital pazarlama stratejisi sunacağız.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <CheckCircle2 size={14} className="text-blue-400" />
                  <span className="text-zinc-400 text-sm">Bağlayıcı olmayan görüşme</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <CheckCircle2 size={14} className="text-blue-400" />
                  <span className="text-zinc-400 text-sm">Ücretsiz rekabet analizi</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <CheckCircle2 size={14} className="text-blue-400" />
                  <span className="text-zinc-400 text-sm">Özelleştirilmiş strateji önerisi</span>
                </div>
              </div>

              <a
                href="https://wa.me/905355601936"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 hover:border-[#25D366]/40 rounded-2xl p-5 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" width="24" height="24" className="shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <p className="text-white text-sm font-medium">WhatsApp&apos;tan Ulaşın</p>
                  <p className="text-zinc-400 text-xs">Hızlı yanıt garantisi</p>
                </div>
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="py-16 text-center">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={28} className="text-green-400" />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">Mesajınız Ulaştı!</h3>
                    <p className="text-zinc-400 text-sm max-w-sm mx-auto">
                      En kısa sürede size dönüş yapacağız. Ortalama yanıt süremiz 2 saattir.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-white font-semibold mb-6">Bize Yazın</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-zinc-400 text-xs font-medium mb-1.5">
                            Ad Soyad <span className="text-red-400">*</span>
                          </label>
                          <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Adınız Soyadınız"
                            className={`w-full bg-[#111827] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none transition-colors ${
                              errors.name ? 'border-red-500/50' : 'border-white/[0.06] focus:border-blue-500/50'
                            }`}
                          />
                          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-zinc-400 text-xs font-medium mb-1.5">
                            E-Posta <span className="text-red-400">*</span>
                          </label>
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="ornek@sirket.com"
                            className={`w-full bg-[#111827] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none transition-colors ${
                              errors.email ? 'border-red-500/50' : 'border-white/[0.06] focus:border-blue-500/50'
                            }`}
                          />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-zinc-400 text-xs font-medium mb-1.5">Telefon</label>
                          <input
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+90 5xx xxx xx xx"
                            className="w-full bg-[#111827] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500/50 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-zinc-400 text-xs font-medium mb-1.5">İlgilendiğiniz Hizmet</label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full bg-[#111827] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none"
                          >
                            <option value="" className="bg-[#111827] text-zinc-400">Seçiniz...</option>
                            {services.map((s) => (
                              <option key={s} value={s} className="bg-[#111827]">{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-zinc-400 text-xs font-medium mb-1.5">
                          Mesajınız <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Projeniz veya ihtiyaçlarınız hakkında bize bilgi verin..."
                          className={`w-full bg-[#111827] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none transition-colors resize-none ${
                            errors.message ? 'border-red-500/50' : 'border-white/[0.06] focus:border-blue-500/50'
                          }`}
                        />
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:bg-zinc-800 disabled:text-zinc-600 text-white py-3.5 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        {isSubmitting ? (
                          <><Loader2 size={16} className="animate-spin" />Gönderiliyor...</>
                        ) : (
                          <><Send size={16} />Mesaj Gönder</>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0D1225] border border-white/[0.06] rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/[0.06]">
              <h2 className="text-white font-semibold text-lg mb-1">Konumumuz</h2>
              <p className="text-zinc-400 text-sm">
                Kocaeli&apos;deyiz. Online çalışıyoruz; tüm Türkiye ve uluslararası pazarda hizmet veriyoruz.
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps?q=Dolphin+AVM+Sanayi+Cad+Berk+Sk+%C4%B0zmit+Kocaeli&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ramses Digital Konum"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  )
}
