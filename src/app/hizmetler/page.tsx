'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import {
  Search,
  TrendingUp,
  Share2,
  Monitor,
  Mail,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const services = [
  {
    icon: Search,
    title: 'SEO & İçerik Optimizasyonu',
    tagline: "Google'da Üst Sıralar, Organik Trafik",
    desc: "Arama motorlarında üst sıralara çıkmak için teknik SEO, içerik stratejisi ve link building çalışmaları yapıyoruz. Markanızın online görünürlüğünü artırarak uzun vadeli organik büyüme sağlıyoruz.",
    features: [
      'Teknik SEO Denetimi & Optimizasyonu',
      'Anahtar Kelime Araştırması & Strateji',
      'İçerik Planlama & Üretim',
      'Link Building Kampanyaları',
      'Yerel SEO (Google My Business)',
      'Aylık Performans Raporları',
    ],
    color: 'blue',
  },
  {
    icon: TrendingUp,
    title: 'Google Ads & Performans Reklamları',
    tagline: 'YouTube, Remarketing, ROI Odaklı',
    desc: 'Veriye dayalı Google Ads kampanyalarıyla doğru kitleye ulaşıyor, bütçenizi en verimli şekilde kullanıyoruz. Search, Display, YouTube ve Remarketing kampanyalarıyla maksimum ROI elde ediyoruz.',
    features: [
      'Google Search Kampanyaları',
      'Google Display Network',
      'YouTube Reklamları',
      'Remarketing & Retargeting',
      'Shopping Kampanyaları',
      'Dönüşüm Takibi & Optimizasyon',
    ],
    color: 'violet',
  },
  {
    icon: Share2,
    title: 'Sosyal Medya Yönetimi',
    tagline: 'Instagram, Facebook, LinkedIn, TikTok',
    desc: 'Hedef kitlenizle gerçek bağlar kurmak için özgün içerikler üretiyor, topluluğunuzu büyütüyor ve sosyal medya reklamlarıyla erişiminizi genişletiyoruz.',
    features: [
      'İçerik Takvimi & Planlama',
      'Görsel İçerik Üretimi',
      'Topluluk Yönetimi',
      'Influencer İşbirlikleri',
      'Sosyal Medya Reklamları',
      'Performans Analizi & Raporlama',
    ],
    color: 'pink',
  },
  {
    icon: Monitor,
    title: 'Web Tasarımı & Geliştirme',
    tagline: 'Modern, Hızlı, Mobil Uyumlu',
    desc: 'Kullanıcı deneyimini ön plana alan, hızlı yüklenen ve mobil uyumlu web siteleri tasarlıyoruz. Dönüşüm odaklı tasarımlarımızla ziyaretçileri müşteriye dönüştürüyoruz.',
    features: [
      'UI/UX Tasarım',
      'Next.js & React Geliştirme',
      'WordPress & WooCommerce',
      'Mobil Responsive Tasarım',
      'E-Ticaret Çözümleri',
      'Hız & Performans Optimizasyonu',
    ],
    color: 'emerald',
  },
  {
    icon: Mail,
    title: 'E-Posta & Otomasyon Pazarlama',
    tagline: 'CRM Entegrasyonu, Otomatik Akışlar',
    desc: 'Kişiselleştirilmiş e-posta kampanyaları ve otomatik pazarlama akışlarıyla müşteri yaşam döngüsünüzü optimize ediyoruz. CRM entegrasyonlarıyla tüm süreçleri otomatikleştiriyoruz.',
    features: [
      'E-Posta Kampanya Tasarımı',
      'Otomasyon Akışları',
      'CRM Entegrasyonu',
      'Segmentasyon & Kişiselleştirme',
      'A/B Test & Optimizasyon',
      'Açılma & Tıklama Analizi',
    ],
    color: 'orange',
  },
  {
    icon: BarChart3,
    title: 'Veri Analizi & Stratejik Danışmanlık',
    tagline: 'Google Analytics, Data Studio',
    desc: 'Verilerinizi anlamlı içgörülere dönüştürüyor, büyüme fırsatlarını tespit ediyoruz. GA4 kurulumu, özel raporlar ve stratejik danışmanlıkla işletmenizi ileriye taşıyoruz.',
    features: [
      'GA4 Kurulum & Yapılandırma',
      'Özel Dashboard Tasarımı',
      'Kullanıcı Davranış Analizi',
      'Dönüşüm Huni Optimizasyonu',
      'Rekabet Analizi',
      'Büyüme Stratejisi Danışmanlığı',
    ],
    color: 'cyan',
  },
]

const colorMap: Record<string, { bg: string; border: string; icon: string; tag: string }> = {
  blue: {
    bg: 'from-blue-500/5 to-transparent',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    icon: 'bg-blue-500/10 text-blue-400',
    tag: 'bg-blue-500/10 text-blue-400',
  },
  violet: {
    bg: 'from-violet-500/5 to-transparent',
    border: 'border-violet-500/20 hover:border-violet-500/40',
    icon: 'bg-violet-500/10 text-violet-400',
    tag: 'bg-violet-500/10 text-violet-400',
  },
  pink: {
    bg: 'from-pink-500/5 to-transparent',
    border: 'border-pink-500/20 hover:border-pink-500/40',
    icon: 'bg-pink-500/10 text-pink-400',
    tag: 'bg-pink-500/10 text-pink-400',
  },
  emerald: {
    bg: 'from-emerald-500/5 to-transparent',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
    icon: 'bg-emerald-500/10 text-emerald-400',
    tag: 'bg-emerald-500/10 text-emerald-400',
  },
  orange: {
    bg: 'from-orange-500/5 to-transparent',
    border: 'border-orange-500/20 hover:border-orange-500/40',
    icon: 'bg-orange-500/10 text-orange-400',
    tag: 'bg-orange-500/10 text-orange-400',
  },
  cyan: {
    bg: 'from-cyan-500/5 to-transparent',
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
    icon: 'bg-cyan-500/10 text-cyan-400',
    tag: 'bg-cyan-500/10 text-cyan-400',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3"
          >
            Hizmetlerimiz
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Dijital Büyüme İçin
            <br />
            <span className="gradient-text">Kapsamlı Çözümler</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            SEO'dan Google Ads'e, sosyal medyadan web tasarımına kadar her alanda
            performans odaklı çözümler sunuyoruz.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {services.map((service, i) => {
            const Icon = service.icon
            const colors = colorMap[service.color]
            return (
              <FadeIn key={service.title} delay={i * 0.06}>
                <div
                  className={`bg-gradient-to-r ${colors.bg} bg-[#0D1225] border ${colors.border} rounded-2xl p-8 md:p-10 transition-all duration-300`}
                  style={{ background: '#0D1225' }}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center mb-5`}>
                        <Icon size={22} />
                      </div>
                      <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">
                        {service.tagline}
                      </p>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {service.title}
                      </h2>
                      <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
                      <CalendlyButton label="Teklif Al" variant="link" className="mt-6" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className={`${colors.tag.split(' ')[1]} mt-0.5 shrink-0`} />
                          <span className="text-zinc-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white mb-4">
              Hangi Hizmet Size Uygun?
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Ücretsiz danışmanlık seansımızda işletmenize özel strateji geliştirelim.
            </p>
            <CalendlyButton label="Ücretsiz Danışmanlık Al" variant="primary" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
