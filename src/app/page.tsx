'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import CalendlyButton from '@/components/CalendlyButton'
import {
  Sparkles,
  Search,
  TrendingUp,
  Share2,
  Monitor,
  Mail,
  BarChart3,
  Workflow,
  ArrowRight,
  ChevronDown,
  Star,
  CheckCircle2,
} from 'lucide-react'

// SmartIntake lazy load — hero render'ı beklemez, sonradan gelir
const SmartIntake = dynamic(() => import('@/components/SmartIntake'), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-2xl mx-auto h-[120px] rounded-2xl bg-white/[0.03] border border-white/[0.06] animate-pulse" />
  ),
})

// ─── Fade-in wrapper — CSS only, no Framer Motion ─────────────────────────
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
    <div
      className={`animate-fadein ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

// ─── Animated counter ──────────────────────────────────────────────────────
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    const steps = 50
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

// ─── Data ──────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Sparkles,
    title: 'SEO, GEO & AEO',
    desc: "Markanızı Google'da değil; ChatGPT, Gemini ve Perplexity'de de güvenilir kaynak yapıyoruz.",
    tags: ['GEO & LLM Görünürlüğü', 'EEAT & Otorite', 'Schema Markup'],
  },
  {
    icon: TrendingUp,
    title: 'Google Ads & Performans',
    desc: 'YouTube, Remarketing ve Display reklamlarıyla ROI odaklı kampanyalar yürütün.',
    tags: ['Search Ads', 'YouTube Ads', 'Remarketing'],
  },
  {
    icon: Share2,
    title: 'Sosyal Medya Yönetimi',
    desc: 'Instagram, Facebook, LinkedIn ve TikTok platformlarında markanızı güçlendirin.',
    tags: ['İçerik Üretimi', 'Topluluk Yönetimi', 'Reklam'],
  },
  {
    icon: Monitor,
    title: 'Web Tasarımı & Geliştirme',
    desc: 'Modern, hızlı ve mobil uyumlu web siteleri ile dönüşüm oranlarınızı artırın.',
    tags: ['UI/UX Tasarım', 'Next.js', 'WordPress'],
  },
  {
    icon: Mail,
    title: 'E-Posta & Otomasyon',
    desc: 'CRM entegrasyonu ve otomatik akışlarla müşteri sadakatini ve geliri artırın.',
    tags: ['CRM Entegrasyonu', 'Drip Kampanyalar', 'A/B Test'],
  },
  {
    icon: BarChart3,
    title: 'Veri Analizi & Danışmanlık',
    desc: 'Google Analytics ve Data Studio raporlarıyla veriye dayalı kararlar alın.',
    tags: ['GA4', 'Data Studio', 'Strateji'],
  },
]

const n8nService = {
  icon: Workflow,
  title: 'n8n İş Akışı Otomasyonu',
  tagline: 'No-Code / Low-Code · AI Entegrasyonlu İş Akışları',
  desc: 'n8n ile CRM, e-posta, sosyal medya, muhasebe ve yapay zeka araçlarını birbirine bağlıyoruz. Tekrar eden manuel işleri tamamen otomatize ediyor; ekibinizin zamanını ve enerjisini asıl işe harcamasını sağlıyoruz.',
  tags: ['CRM & Satış Pipeline Otomasyonu', 'AI Destekli İş Akışları', 'Webhook & API Entegrasyonları', 'Lead Yakalama Otomasyonu', 'Çoklu Platform Senkronizasyonu', 'Self-Hosted & Güvenli Altyapı'],
}

const stats = [
  { value: 100, suffix: '+', label: 'Başarılı Proje' },
  { value: 50, suffix: '+', label: 'Mutlu Müşteri' },
  { value: 5, suffix: '+', label: 'Yıl Deneyim' },
  { value: 94, suffix: '%', label: 'Müşteri Memnuniyeti' },
]

const portfolio = [
  {
    title: 'Global Elektronik Pazaryeri',
    category: 'E-Ticaret SEO',
    result: '%340 Organik Trafik Artışı',
    color: 'from-blue-600/20 to-blue-900/20',
  },
  {
    title: 'Lüks Otel Zinciri (Konaklama)',
    category: 'Google Ads',
    result: '4.2x ROAS Başarısı',
    color: 'from-violet-600/20 to-violet-900/20',
  },
  {
    title: 'Yeni Nesil Ödeme Sistemleri',
    category: 'Sosyal Medya',
    result: '120K Yeni Takipçi',
    color: 'from-emerald-600/20 to-emerald-900/20',
  },
  {
    title: 'SaaS & Kurumsal Yazılım Çözümleri',
    category: 'Web & SEO',
    result: '%280 Lead Artışı',
    color: 'from-orange-600/20 to-orange-900/20',
  },
]

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    role: 'CEO, Global Elektronik Pazaryeri',
    content:
      'Ramses Digital ile çalışmaya başladığımızdan beri organik trafiğimiz 3 katına çıktı. Gerçekten sonuç odaklı bir ekip.',
    rating: 5,
  },
  {
    name: 'Elif Kaya',
    role: 'Pazarlama Direktörü, Lüks Otel Zinciri',
    content:
      'Google Ads kampanyalarımızda elde ettiğimiz 4.2x ROAS sonucu beklentilerimizin çok üzerindeydi. Harika bir iş çıkardılar.',
    rating: 5,
  },
  {
    name: 'Mehmet Arslan',
    role: 'Kurucu, FinTech App',
    content:
      'Sosyal medya stratejimizi komple yeniden yapılandırdılar. 6 ayda 120.000 yeni gerçek takipçi kazandık.',
    rating: 5,
  },
]

// ─── Main Component ────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center overflow-hidden px-4 sm:px-6 pt-24 sm:pt-32 md:pt-44 pb-12 sm:pb-16">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="mobile-hide-blur absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-500/8 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        {/* Grid overlay */}
        <div
          className="hidden sm:block absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="animate-fadein inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6 sm:mb-10">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 text-xs font-medium tracking-wider uppercase">
              Performans Odaklı Dijital Pazarlama
            </span>
          </div>

          <h1
            className="animate-fadein text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6 sm:mb-8"
            style={{ animationDelay: '0.05s' }}
          >
            Markanızı{' '}
            <span className="gradient-text">Dijitalde</span>
            <br />
            Büyütün
          </h1>

          <p
            className="animate-fadein text-base sm:text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-8 sm:mb-10 font-light"
            style={{ animationDelay: '0.1s' }}
          >
            Gerçek Sonuçlar Elde Edin
          </p>

          <div
            className="animate-fadein flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: '0.15s' }}
          >
            <CalendlyButton label="Ücretsiz Danışmanlık Al" variant="primary" />
            <Link
              href="/portfolyo"
              className="flex items-center gap-2 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-all hover:-translate-y-0.5"
            >
              Projelerimizi İncele
            </Link>
          </div>

          {/* ── AI Smart Intake ── */}
          <div
            className="animate-fadein mt-8 sm:mt-14 w-full"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Section label */}
            <div className="flex items-center justify-center gap-3 mb-3 sm:mb-5">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10 max-w-[80px]" />
              <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-zinc-400 tracking-wide">AI Asistan — Hedefini yaz, seni yönlendirelim</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10 max-w-[80px]" />
            </div>
            <SmartIntake />
          </div>
        </div>

        {/* Scroll indicator — masaüstünde göster */}
        <div className="hidden sm:flex flex-col items-center gap-2 mt-10 opacity-60">
          <span className="text-zinc-600 text-xs tracking-widest uppercase">Keşfet</span>
          <ChevronDown size={18} className="text-zinc-600 animate-bounce" />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-20 border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1.5">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-zinc-400 text-xs sm:text-sm">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
              Hizmetlerimiz
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Dijital Büyüme Araçları
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              İşletmenizi dijitalde büyütmek için ihtiyacınız olan her şey tek çatı altında.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <FadeIn key={service.title} delay={i * 0.08}>
                  <div className="group h-full bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 card-hover cursor-default">
                    <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                      <Icon size={20} className="text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-zinc-400 bg-white/[0.04] px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )
            })}

            {/* n8n — full-width featured card */}
            <FadeIn delay={0.5} className="md:col-span-2 lg:col-span-3">
              <div className="group bg-[#0D1225] border border-fuchsia-500/20 hover:border-fuchsia-500/40 rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-default">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                  <div className="md:w-[45%]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 bg-fuchsia-500/10 rounded-xl flex items-center justify-center group-hover:bg-fuchsia-500/20 transition-colors shrink-0">
                        <Workflow size={20} className="text-fuchsia-400" />
                      </div>
                      <span className="text-fuchsia-400 text-xs font-medium uppercase tracking-wider bg-fuchsia-500/10 px-3 py-1 rounded-full">
                        {n8nService.tagline}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl md:text-2xl mb-3">{n8nService.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{n8nService.desc}</p>
                  </div>
                  <div className="md:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {n8nService.tags.map((tag) => (
                      <div key={tag} className="flex items-center gap-2.5">
                        <CheckCircle2 size={14} className="text-fuchsia-400 shrink-0" />
                        <span className="text-zinc-400 text-sm">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center mt-10">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              Tüm hizmetleri görüntüle
              <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#080D18]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
              Portföy
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Başarı Hikayelerimiz
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Müşterilerimiz için elde ettiğimiz somut sonuçlar.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {portfolio.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.1}>
                <div
                  className={`group relative bg-gradient-to-br ${project.color} border border-white/[0.06] rounded-2xl p-8 overflow-hidden card-hover cursor-default`}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.02] rounded-full -translate-y-20 translate-x-20" />
                  <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-white font-bold text-2xl mt-2 mb-4">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue-400" />
                    <span className="text-blue-300 font-semibold">{project.result}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <Link
              href="/portfolyo"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              Tüm projeleri görüntüle
              <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
              Müşteri Yorumları
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Müşterilerimiz Ne Diyor?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 h-full">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-zinc-400 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI TOOLS TEASER ──────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-5">
              <Link
                href="/teklif-al"
                className="group bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">AI Teklif Hesaplayıcı</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  İşletmenize özel dijital pazarlama paketini saniyeler içinde oluşturun. Bütçenize ve hedeflerinize göre AI destekli öneri alın.
                </p>
                <span className="inline-flex items-center gap-1.5 text-blue-400 text-sm font-medium group-hover:gap-2.5 transition-all">
                  Teklif Al <ArrowRight size={14} />
                </span>
              </Link>
              <Link
                href="/seo-analiz"
                className="group bg-[#0D1225] border border-white/[0.06] hover:border-violet-500/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Search size={20} className="text-violet-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Ücretsiz SEO Analizi</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Web sitenizin URL'sini girin, AI destekli kapsamlı SEO raporunuzu anında alın. Hız, mobil uyum, teknik SEO puanlarınızı görün.
                </p>
                <span className="inline-flex items-center gap-1.5 text-violet-400 text-sm font-medium group-hover:gap-2.5 transition-all">
                  Siteyi Analiz Et <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="relative bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 rounded-3xl p-6 sm:p-10 md:p-16 overflow-hidden text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
                  Ücretsiz Danışmanlık
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                  Dijital Dönüşümünüzü
                  <br />
                  <span className="gradient-text">Bugün Başlatın</span>
                </h2>
                <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
                  İşletmenizin dijital potansiyelini keşfetmek için ücretsiz danışmanlık seansı alın.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <CalendlyButton label="Hemen Başlayalım" variant="primary" />
                  <a
                    href="tel:+905355601936"
                    className="text-zinc-400 hover:text-white text-base transition-colors py-4"
                  >
                    +90 (535) 560 19 36
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
