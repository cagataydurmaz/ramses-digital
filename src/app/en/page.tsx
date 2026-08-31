import { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import {
  Sparkles,
  TrendingUp,
  Monitor,
  Mail,
  BarChart3,
  Workflow,
  Share2,
  Trophy,
  Users,
  Clock,
  ThumbsUp,
  Search,
  Mic,
  Bot,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ramses Digital | Performance-Driven Digital Marketing & Software Agency',
  description:
    'Ramses Digital — SEO, GEO & AEO, Google Ads, web design and n8n automation. An engineering-led digital marketing agency delivering real, measurable results.',
  alternates: {
    canonical: 'https://ramsesdigital.com/en',
    languages: { 'tr-TR': 'https://ramsesdigital.com', en: 'https://ramsesdigital.com/en' },
  },
  openGraph: {
    title: 'Ramses Digital | Performance-Driven Digital Marketing & Software Agency',
    description: 'SEO, GEO & AEO, Google Ads, web design and n8n automation — grow your brand with real, measurable results.',
    locale: 'en_US',
    type: 'website',
    url: 'https://ramsesdigital.com/en',
    siteName: 'Ramses Digital',
  },
}

const WHATSAPP_EN_MESSAGE = 'Hello! I would like to get a free consultation.'

const services = [
  {
    icon: Sparkles,
    title: 'SEO, GEO & AEO',
    desc: 'We make your brand a trusted source not just on Google, but on ChatGPT, Gemini and Perplexity too.',
    tags: ['GEO & LLM Visibility', 'E-E-A-T & Authority', 'Schema Markup'],
    color: 'blue',
  },
  {
    icon: TrendingUp,
    title: 'Google Ads & Performance',
    desc: 'ROI-focused campaigns across Search, YouTube, Remarketing and Display.',
    tags: ['Search Ads', 'YouTube Ads', 'Remarketing'],
    color: 'violet',
  },
  {
    icon: Share2,
    title: 'Social Media Content',
    desc: 'Posts, stories and video content designed to match your brand identity, with a clear publishing strategy.',
    tags: ['Post & Story Design', 'Video Content', 'Content Calendar'],
    color: 'pink',
  },
  {
    icon: Monitor,
    title: 'Web Design & Development',
    desc: 'Modern, fast, mobile-friendly websites built to increase your conversion rate.',
    tags: ['UI/UX Design', 'Next.js', 'WordPress'],
    color: 'emerald',
  },
  {
    icon: Mail,
    title: 'Email & Marketing Automation',
    desc: 'Grow customer loyalty and revenue with CRM integration and automated flows.',
    tags: ['CRM Integration', 'Drip Campaigns', 'A/B Testing'],
    color: 'orange',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Consulting',
    desc: 'Make data-driven decisions with GA4 and Looker Studio reporting.',
    tags: ['GA4', 'Looker Studio', 'Strategy'],
    color: 'cyan',
  },
  {
    icon: Workflow,
    title: 'n8n Workflow Automation',
    desc: 'Connect your CRM, email and AI tools together to automate repetitive work — free your team to focus on what matters.',
    tags: ['AI Workflows', 'CRM Automation', 'Webhooks & APIs', 'Self-Hosted'],
    color: 'fuchsia',
  },
]

const serviceColorMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
  violet: { bg: 'bg-violet-500/10', text: 'text-violet-400' },
  pink: { bg: 'bg-pink-500/10', text: 'text-pink-400' },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-400' },
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
  fuchsia: { bg: 'bg-fuchsia-500/10', text: 'text-fuchsia-400' },
}

const stats = [
  { icon: Trophy, value: '50+', label: 'Successful Projects', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { icon: Users, value: '50+', label: 'Happy Clients', color: 'text-violet-400', bg: 'bg-violet-500/10' },
  { icon: Clock, value: '5+', label: 'Years of Experience', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { icon: ThumbsUp, value: '94%', label: 'Client Satisfaction', color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10' },
]

export default function EnglishHomePage() {
  return (
    // lang="en" — kök layout'ta html lang="tr" tanımlı; bu olmadan CSS
    // text-transform:uppercase Türkçe İ/i kurallarını uygulayıp İngilizce
    // metinlerde "DRİVEN" gibi hatalı büyük harfe çeviriyor.
    <div lang="en">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center overflow-hidden px-4 sm:px-6 pt-24 sm:pt-32 md:pt-44 pb-12 sm:pb-16">
        <video
          className="hero-bg-video absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/video/hero-bg-poster.jpg"
          aria-hidden="true"
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080D18]/20 via-transparent to-[#080D18] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6 sm:mb-10">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 text-xs font-medium tracking-wider uppercase">
              Performance-Driven Digital Marketing
            </span>
          </div>

          <h1 className="text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6 sm:mb-8">
            Grow Your Brand{' '}
            <span className="gradient-text">Digitally</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-8 sm:mb-10 font-light">
            A silent brand is a lost brand.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Get a Free Consultation" variant="primary" message={WHATSAPP_EN_MESSAGE} />
            <Link
              href="/portfolyo"
              prefetch={false}
              className="flex items-center gap-2 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-all hover:-translate-y-0.5"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="relative py-12 sm:py-20 border-y border-white/[0.04] bg-[#080D18]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-white/[0.02] border border-white/[0.14] rounded-2xl py-6 sm:py-8 px-3">
              <div className={`w-11 h-11 ${s.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <s.icon size={20} className={s.color} />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-zinc-500 text-xs sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Digital Growth Tools</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Everything your business needs to grow online, under one roof.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const c = serviceColorMap[s.color]
              return (
                <div key={s.title} className="relative bg-[#0D1225] border border-white/[0.14] rounded-2xl p-6 overflow-hidden">
                  <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <s.icon size={20} className={c.text} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-[11px] text-zinc-500 bg-white/[0.04] border border-white/[0.06] rounded-full px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SEO / AEO / GEO EXPLAINER ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-6 bg-[#080D18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">What Do These Mean?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">SEO, AEO and GEO, Simply</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">People now look for your brand in three different places — we work to get you found in all three.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="h-full bg-[#0D1225] border border-white/[0.14] rounded-2xl p-6">
              <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <Search size={20} className="text-blue-400" />
              </div>
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">SEO</p>
              <h3 className="text-white font-semibold text-lg mb-2">Being Found on Google</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Your brand appearing on the first page, in the top results, when a potential customer searches on Google.</p>
            </div>
            <div className="h-full bg-[#0D1225] border border-white/[0.14] rounded-2xl p-6">
              <div className="w-11 h-11 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4">
                <Mic size={20} className="text-violet-400" />
              </div>
              <p className="text-violet-400 text-xs font-semibold uppercase tracking-wider mb-1">AEO</p>
              <h3 className="text-white font-semibold text-lg mb-2">Being the Direct Answer</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Your brand being cited by voice assistants or featured in Google's answer box.</p>
            </div>
            <div className="h-full bg-[#0D1225] border border-white/[0.14] rounded-2xl p-6">
              <div className="w-11 h-11 bg-fuchsia-500/10 rounded-xl flex items-center justify-center mb-4">
                <Bot size={20} className="text-fuchsia-400" />
              </div>
              <p className="text-fuchsia-400 text-xs font-semibold uppercase tracking-wider mb-1">GEO</p>
              <h3 className="text-white font-semibold text-lg mb-2">Being the AI's Recommendation</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Being among the brands ChatGPT or Gemini recommends when users ask for a suggestion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 rounded-3xl p-6 sm:p-10 md:p-16 overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">Free Consultation</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                Start Your Digital
                <br />
                <span className="gradient-text">Transformation Today</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
                Book a free consultation to explore your business's digital potential.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CalendlyButton label="Let's Get Started" variant="primary" message={WHATSAPP_EN_MESSAGE} />
                <a href="tel:+905355601936" className="text-zinc-400 hover:text-white text-base transition-colors py-4">
                  +90 (535) 560 19 36
                </a>
              </div>
              <p className="text-zinc-600 text-xs mt-6">
                Prefer Turkish? <Link href="/" prefetch={false} className="text-zinc-400 hover:text-white underline">View the Turkish site</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
