'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import FeaturedWork from '@/components/FeaturedWork'
import AnaSayfaSss from '@/components/AnaSayfaSss'
import AnaSayfaSektorAraclar from '@/components/AnaSayfaSektorAraclar'
import MarkaSeridi from '@/components/MarkaSeridi'
import SurecCizgisi from '@/components/SurecCizgisi'
import KurucuKutusu from '@/components/KurucuKutusu'
import GoogleOnizleme from '@/components/GoogleOnizleme'
import GoogleAramaAnimasyonu from '@/components/GoogleAramaAnimasyonu'
import ArkaPlanVideo from '@/components/ArkaPlanVideo'
import { WebSitesiTelefonBolumu, WhatsAppTelefonBolumu, ChatbotTelefonBolumu } from '@/components/telefon/TelefonBolumleri'
import HeroBackgroundVideo from '@/components/HeroBackgroundVideo'
import {
  Sparkles,
  Search,
  TrendingUp,
  Monitor,
  Mail,
  BarChart3,
  Workflow,
  ArrowRight,
  ChevronDown,
  Trophy,
  Mic,
  Bot,
  Users,
  Clock,
  ThumbsUp,
  Share2,
  MapPin,
  MessageCircle,
  FileText,
  Rocket,
  Star, Megaphone } from 'lucide-react'

// Bileşen kodu ayrı chunk olarak lazy-load edilir (bundle boyutu için) ama
// ssr:false KULLANMIYORUZ — bu içerikler (hizmet açıklamaları, form etiketleri,
// adım başlıkları) Google/AI botları için de HTML'de görünür kalsın istiyoruz.
// ssr:false verirsek JS çalıştırmayan botlar (çoğu AI crawler dahil) bu metni hiç göremez.
const SmartIntake = dynamic(() => import('@/components/SmartIntake'), {
  loading: () => (
    <div className="w-full max-w-4xl mx-auto h-[150px] rounded-2xl bg-white/[0.03] border border-white/[0.06] animate-pulse" />
  ),
})

const TeklifAlCalculator = dynamic(() => import('@/components/TeklifAlCalculator'), {
  loading: () => (
    <div className="max-w-3xl mx-auto h-[420px] rounded-2xl bg-white/[0.03] border border-white/[0.06] animate-pulse" />
  ),
})

const WhatsAppLeadForm = dynamic(() => import('@/components/WhatsAppLeadForm'), {
  loading: () => (
    <div className="max-w-4xl mx-auto h-[520px] rounded-3xl bg-white/[0.03] border border-white/[0.06] animate-pulse" />
  ),
})

const QuickSeoWidget = dynamic(() => import('@/components/QuickSeoWidget'), {
  loading: () => (
    <div className="max-w-2xl mx-auto h-[200px] rounded-3xl bg-white/[0.03] border border-white/[0.06] animate-pulse" />
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
    title: 'SEO & Yapay Zekâ Görünürlüğü',
    href: '/hizmetler/seo',
    desc: "Google'da üst sıralar için çalışıyor; ChatGPT ve Gemini gibi yapay zekâ araçlarında da alıntılanma olasılığınızı artırıyoruz.",
    tags: ['Google\'da Üst Sıralar', 'Yapay Zekâ Görünürlüğü', 'Yerel SEO'],
    color: 'blue',
  },
  {
    icon: TrendingUp,
    title: 'Google Ads & Performans',
    href: '/hizmetler/google-ads',
    desc: 'YouTube, Remarketing ve Display reklamlarıyla ROI odaklı kampanyalar yürütün.',
    tags: ['Search Ads', 'YouTube Ads', 'Remarketing'],
    color: 'violet',
  },
  {
    icon: Megaphone,
    title: 'Instagram & Facebook Reklamları',
    href: '/hizmetler/meta-reklam',
    desc: 'Hizmet bölgenizdeki doğru kişilere ulaşın; reklamı gören müşteri tek dokunuşla WhatsApp’tan yazsın.',
    tags: ['WhatsApp Reklamları', 'Form Reklamları', 'Yeniden Hedefleme'],
    color: 'pink',
  },
  {
    icon: Share2,
    title: 'Sosyal Medya Yönetimi',
    href: '/hizmetler/sosyal-medya',
    desc: 'Hesaplarınızı yönetiyor; içerik üretiyor, paylaşıyor, yorum ve mesajları takip ediyoruz.',
    tags: ['Hesap Yönetimi', 'Post & Reels', 'İçerik Takvimi'],
    color: 'pink',
  },
  {
    icon: Monitor,
    title: 'Web Tasarımı & Geliştirme',
    href: '/hizmetler/web-tasarim',
    desc: 'Modern, hızlı ve mobil uyumlu web siteleri ile dönüşüm oranlarınızı artırın.',
    tags: ['UI/UX Tasarım', 'Next.js', 'WordPress'],
    color: 'emerald',
  },
  {
    icon: Mail,
    title: 'E-Posta & Otomasyon',
    href: '/hizmetler/eposta-otomasyon',
    desc: 'CRM entegrasyonu ve otomatik akışlarla müşteri sadakatini ve geliri artırın.',
    tags: ['CRM Entegrasyonu', 'Drip Kampanyalar', 'A/B Test'],
    color: 'orange',
  },
  {
    icon: BarChart3,
    title: 'Veri Analizi & Danışmanlık',
    href: '/hizmetler/veri-analizi',
    desc: 'Google Analytics ve Data Studio raporlarıyla veriye dayalı kararlar alın.',
    tags: ['GA4', 'Data Studio', 'Strateji'],
    color: 'cyan',
  },
  {
    icon: Workflow,
    title: 'n8n İş Akışı Otomasyonu',
    href: '/hizmetler/n8n-otomasyon',
    desc: 'CRM, e-posta ve yapay zeka araçlarını birbirine bağlayıp tekrar eden işleri otomatize edin — manuel süreçlerden kurtulun, ekibiniz asıl işe odaklansın.',
    tags: ['AI İş Akışları', 'CRM Otomasyonu', 'Webhook & API', 'Self-Hosted', 'Çoklu Platform Senkronizasyonu'],
    color: 'fuchsia',
  },
]

const serviceColorMap: Record<string, { bg: string; bgHover: string; text: string; glow: string; bar: string }> = {
  blue: { bg: 'bg-blue-500/10', bgHover: 'group-hover:bg-blue-500/20', text: 'text-blue-400', glow: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]', bar: 'from-blue-500 to-blue-400' },
  violet: { bg: 'bg-violet-500/10', bgHover: 'group-hover:bg-violet-500/20', text: 'text-violet-400', glow: 'group-hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]', bar: 'from-violet-500 to-violet-400' },
  pink: { bg: 'bg-pink-500/10', bgHover: 'group-hover:bg-pink-500/20', text: 'text-pink-400', glow: 'group-hover:shadow-[0_0_20px_rgba(236,72,153,0.35)]', bar: 'from-pink-500 to-pink-400' },
  emerald: { bg: 'bg-emerald-500/10', bgHover: 'group-hover:bg-emerald-500/20', text: 'text-emerald-400', glow: 'group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]', bar: 'from-emerald-500 to-emerald-400' },
  orange: { bg: 'bg-orange-500/10', bgHover: 'group-hover:bg-orange-500/20', text: 'text-orange-400', glow: 'group-hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]', bar: 'from-orange-500 to-orange-400' },
  cyan: { bg: 'bg-cyan-500/10', bgHover: 'group-hover:bg-cyan-500/20', text: 'text-cyan-400', glow: 'group-hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]', bar: 'from-cyan-500 to-cyan-400' },
  fuchsia: { bg: 'bg-fuchsia-500/10', bgHover: 'group-hover:bg-fuchsia-500/20', text: 'text-fuchsia-400', glow: 'group-hover:shadow-[0_0_20px_rgba(217,70,239,0.35)]', bar: 'from-fuchsia-500 to-fuchsia-400' },
}

const stats = [
  { icon: Trophy, value: 50, suffix: '+', label: 'Başarılı Proje', color: 'blue' },
  { icon: Users, value: 50, suffix: '+', label: 'Mutlu Müşteri', color: 'violet' },
  { icon: Clock, value: 5, suffix: '+', label: 'Yıl Deneyim', color: 'emerald' },
  { icon: ThumbsUp, value: 96, suffix: '%', label: 'Müşteri Memnuniyeti', color: 'fuchsia' },
]

const statColorMap: Record<string, { bg: string; bgHover: string; text: string }> = {
  blue: { bg: 'bg-blue-500/10', bgHover: 'group-hover:bg-blue-500/20', text: 'text-blue-400' },
  violet: { bg: 'bg-violet-500/10', bgHover: 'group-hover:bg-violet-500/20', text: 'text-violet-400' },
  emerald: { bg: 'bg-emerald-500/10', bgHover: 'group-hover:bg-emerald-500/20', text: 'text-emerald-400' },
  fuchsia: { bg: 'bg-fuchsia-500/10', bgHover: 'group-hover:bg-fuchsia-500/20', text: 'text-fuchsia-400' },
}


// Yorum verisi src/lib/reviews.ts'te; görünür yorum şeridi ReviewsMarquee'de.
// Yorumlar için makine okunabilir şema (Review/AggregateRating) kullanılmaz.

// Google İşletme Profili puanı — Google'da değiştikçe elle güncellenir (18 Kasım 2026: 5.0).
const GOOGLE_PUAN = '5.0'
const GOOGLE_YORUMLAR_URL = 'https://maps.app.goo.gl/xKzk4Q5VCeK4ePbz6'

const surecAdimlari = [
  {
    icon: MessageCircle,
    baslik: 'Ücretsiz görüşme',
    aciklama: 'İşinizi ve hedefinizi 30 dakikada dinliyoruz. Taahhüt yok.',
  },
  {
    icon: FileText,
    baslik: 'Net teklif',
    aciklama: 'Ne yapılacağı, süresi ve fiyatı yazılı olarak elinizde.',
  },
  {
    icon: Rocket,
    baslik: 'Kurulum ve yayın',
    aciklama: 'Siteniz, SEO veya reklamlarınız kurulur, onayınızla yayına alınır.',
  },
  {
    icon: BarChart3,
    baslik: 'Aylık şeffaf rapor',
    aciklama: 'Ziyaretçi, arama ve iletişim sayılarını her ay açıkça görürsünüz.',
  },
]

// ─── Main Component ────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="tema-koyu bg-[#0A0F1E] relative min-h-screen flex flex-col items-center overflow-hidden px-4 sm:px-6 pt-24 sm:pt-32 md:pt-44 pb-8 sm:pb-10">
        <HeroBackgroundVideo />
        <div className="absolute inset-0 bg-gradient-to-b from-[#13284F]/20 via-transparent to-[#13284F] pointer-events-none" />

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="mobile-hide-blur absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full"
            style={{ animationDelay: '0s' }}
          />
          <div
            className="mobile-hide-blur absolute top-[10%] right-[8%] w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.144)_0%,rgba(139,92,246,0.048)_40%,transparent_70%)] rounded-full"
            style={{ animationDelay: '4s' }}
          />
          <div
            className="mobile-hide-blur absolute bottom-[5%] left-[5%] w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.108)_0%,rgba(16,185,129,0.036)_40%,transparent_70%)] rounded-full"
            style={{ animationDelay: '8s' }}
          />
        </div>

        {/* Statik grid deseni kaldırıldı — arka plan videosu kendi hareketli grid'ini taşıyor, ikisi üst üste redundanttı. */}

        {/* Mısır motifi — Horus Gözü, marka renklerinde çok düşük opasiteli arka plan süsü */}
        <div
          className="hidden lg:block absolute -right-16 top-[26%] w-[380px] h-[260px] pointer-events-none opacity-[0.07]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 240 160" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="horusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93C5FD" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#A78BFA" />
              </linearGradient>
            </defs>
            <path d="M28,48 C55,10 150,6 196,32" stroke="url(#horusGradient)" strokeWidth="3" strokeLinecap="round" />
            <path
              d="M18,78 C50,52 150,50 198,74 C150,96 50,100 18,78 Z"
              stroke="url(#horusGradient)"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <circle cx="108" cy="76" r="20" stroke="url(#horusGradient)" strokeWidth="3" />
            <path
              d="M18,78 L34,118 C34,130 22,132 22,120 C22,110 36,108 34,118"
              stroke="url(#horusGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M108,96 C108,115 100,120 100,140" stroke="url(#horusGradient)" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* Yüzen hizmet rozetleri — sadece geniş ekranlarda, içerikle çakışmaz; her biri hizmet sayfasına gider */}
        <div className="hidden xl:block absolute inset-0 pointer-events-none">
          {[
            { href: '/hizmetler/seo', ad: 'SEO', Ikon: Search, renk: 'text-blue-400', yer: 'top-[22%] left-[6%]', gecikme: '0s' },
            { href: '/hizmetler/google-ads', ad: 'Google Ads', Ikon: TrendingUp, renk: 'text-violet-400', yer: 'top-[15%] right-[7%]', gecikme: '1.2s' },
            { href: '/geo-ajansi', ad: 'Yapay Zekâ', Ikon: Sparkles, renk: 'text-emerald-400', yer: 'top-[56%] left-[7%]', gecikme: '0.6s' },
            { href: '/hizmetler/n8n-otomasyon', ad: 'n8n Otomasyon', Ikon: Workflow, renk: 'text-fuchsia-400', yer: 'top-[48%] right-[6%]', gecikme: '1.8s' },
          ].map(({ href, ad, Ikon, renk, yer, gecikme }) => (
            <Link
              key={href}
              href={href}
              prefetch={false}
              className={`hero-chip pointer-events-auto absolute ${yer} flex items-center gap-2 bg-[#0d1424]/80 border border-white/[0.08] hover:border-white/25 hover:bg-[#13284F]/90 rounded-full px-4 py-2 shadow-lg shadow-black/20 transition-colors`}
              style={{ animationDelay: gecikme }}
            >
              <Ikon size={14} className={renk} />
              <span className="text-xs font-medium text-zinc-300">{ad}</span>
            </Link>
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Yazı bloğu: arkasında yumuşak koyu hale — video ışıkları yazının üstüne
              gelince başlık/alt yazı okunur kalsın (mobil, tablet, masaüstü). */}
          <div className="relative">
            <div aria-hidden="true" className="hero-yazi-hale absolute -inset-x-6 -inset-y-12 sm:-inset-x-20 lg:-inset-x-32 -z-10 pointer-events-none" />
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6 sm:mb-10">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-400 text-xs font-medium tracking-wider uppercase">
                Performans Odaklı Dijital Pazarlama
              </span>
            </div>

            <h1
              className="text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6 sm:mb-8"
              style={{ animationDelay: '0.05s' }}
            >
              Markanızı{' '}
              <span className="gradient-text">Dijitalde</span>
              <br />
              Büyütün
            </h1>

            <p
              className="text-base sm:text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-8 sm:mb-10 font-light"
              style={{ animationDelay: '0.1s' }}
            >
              Sessiz kalan marka, kaybolan markadır.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              style={{ animationDelay: '0.15s' }}
            >
              <a
                href="#teklif-hesapla"
                className="group inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                30 Saniyede Fiyat Teklifi Al
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/portfolyo"
                className="flex items-center gap-2 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-all hover:-translate-y-0.5"
              >
                Projelerimizi İncele
              </Link>
            </div>

            {/* Google puanı — gerçek İşletme Profili verisi, tıklayınca yorumlar açılır */}
            <a
              href={GOOGLE_YORUMLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              aria-label={`Google yorumlarında ${GOOGLE_PUAN}/5 puan — yorumları gör`}
            >
              <span className="flex gap-0.5" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="font-semibold text-white">{GOOGLE_PUAN}/5</span>
              <span>· Google Yorumu</span>
            </a>
          </div>

          {/* ── AI Smart Intake ── */}
          <div
            className="mt-8 sm:mt-14 w-full"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Section label */}
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/20 max-w-[80px]" />
              <div className="flex items-center gap-2.5 bg-blue-500/10 border border-blue-500/25 rounded-full px-5 py-2 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-400" />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-blue-300 tracking-wide">Hedefinizi yazın, saniyeler içinde size özel yönlendirme alın</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/20 max-w-[80px]" />
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

      {/* Hero altı: tek parça arka plan — renk ışıkları bölüm sınırlarının üzerinden
          geçer, bölümler arasında keskin çizgi oluşmaz (globals.css .home-flow-bg). */}
      <div className="relative home-flow-bg">

      {/* ── CANLI PROJELER (güven: hero'nun hemen altında) ─────────── */}
      {/* Açık tema denemesi: hero'dan sonra açık bölümler, rakamlar koyu bant */}
      <div className="tema-acik">
      <div className="tema-gecis-ust" aria-hidden="true" />
      <MarkaSeridi />
      <FeaturedWork />

      {/* ── AI TEKLİF HESAPLAYICI (inline, hero'nun hemen altında) ─────────── */}
      <section id="teklif-hesapla" className="py-12 sm:py-16 px-6 scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-2">AI Destekli Teklif Hesaplayıcı</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Anında Ücretsiz Teklif Alın</h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">4 adımda işletmenize özel dijital pazarlama paketi ve tahmini fiyat aralığı görün.</p>
        </div>
        <TeklifAlCalculator />
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="tema-bant relative py-10 sm:py-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="mobile-hide-blur absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.09)_0%,rgba(59,130,246,0.03)_40%,transparent_70%)] rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              const c = statColorMap[stat.color]
              return (
                <FadeIn key={stat.label} delay={i * 0.1}>
                  {/* Mobilde yatay ve kısa: ikon solda, rakam ve etiket yanında */}
                  <div className="group flex items-center gap-2.5 sm:block sm:text-center bg-white/[0.02] border border-white/[0.14] rounded-2xl p-3 sm:py-6 sm:px-3 card-hover">
                    <div className={`w-9 h-9 sm:w-11 sm:h-11 shrink-0 sm:mx-auto sm:mb-3 rounded-xl ${c.bg} flex items-center justify-center ${c.bgHover} transition-colors`}>
                      <Icon size={17} className={c.text} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xl sm:text-3xl md:text-4xl font-bold text-white leading-none sm:leading-tight sm:mb-1">
                        <Counter target={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-zinc-400 text-[11px] sm:text-sm leading-tight mt-1 sm:mt-0">{stat.label}</div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="relative py-12 sm:py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="mobile-hide-blur absolute top-0 right-[10%] w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.09)_0%,rgba(139,92,246,0.03)_40%,transparent_70%)] rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {services.map((service, i) => {
              const Icon = service.icon
              const c = serviceColorMap[service.color]
              return (
                <FadeIn key={service.title} delay={i * 0.06}>
                  <Link href={service.href} prefetch={false} aria-label={`${service.title} hizmeti hakkında bilgi al`} className="group relative flex flex-col h-full bg-[#0D1225] border border-white/[0.14] rounded-2xl p-4 sm:p-6 card-hover overflow-hidden">
                    <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${c.bar} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                    {/* Mobilde ikon ve başlık yan yana, kart kısa; geniş ekranda dikey düzen */}
                    <div className="flex items-center gap-3 sm:block">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 shrink-0 ${c.bg} rounded-xl flex items-center justify-center sm:mb-5 transition-all ${c.bgHover} ${c.glow}`}>
                        <Icon size={20} className={c.text} />
                      </div>
                      <h3 className="text-white font-semibold text-base sm:text-lg sm:mb-2 flex-1">{service.title}</h3>
                      <ArrowRight size={16} className={`${c.text} shrink-0 sm:hidden`} />
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mt-2 sm:mt-0 sm:mb-4 line-clamp-2 sm:line-clamp-none">{service.desc}</p>
                    <div className="hidden sm:flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-zinc-400 bg-white/[0.04] px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className={`hidden sm:inline-flex mt-auto pt-5 items-center gap-1.5 text-sm font-medium ${c.text}`}>
                      Detaylı bilgi <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </FadeIn>
              )
            })}
          </div>

          <FadeIn className="text-center mt-10">
            <Link
              href="/hizmetler"
              className="group inline-flex items-center gap-2 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-blue-300 text-sm font-medium rounded-full px-6 py-3 transition-all"
            >
              Tüm hizmetleri görüntüle
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── SEKTÖRLER + ÜCRETSİZ ARAÇLAR ─────────────────────────────────── */}
      <AnaSayfaSektorAraclar />

      <WebSitesiTelefonBolumu ters />
      {/* ── NASIL ÇALIŞIYORUZ (güven: süreç baştan belli) ────────────────── */}
      <section aria-labelledby="nasil-calisiyoruz" className="py-12 sm:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-10 sm:mb-12">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">Nasıl Çalışıyoruz</p>
            <h2 id="nasil-calisiyoruz" className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Projeniz Nasıl İlerler?
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Kapsam, süre ve ücret çalışmaya başlamadan önce yazılı olarak netleşir.</p>
          </FadeIn>
          <SurecCizgisi adimlar={surecAdimlari} />
        </div>
      </section>

      <KurucuKutusu yerel />

      <WhatsAppTelefonBolumu />
      <ChatbotTelefonBolumu ters />

      {/* ── SEO / AEO / GEO — EN BASİT ANLATIM ──────────────────────────────── */}
      <section className="py-12 sm:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">Bunlar Ne Anlama Geliyor?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Google&apos;da ve Yapay Zekâda Görünürlük, Basitçe</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">İnsanlar artık markanızı üç farklı yerde arıyor — üçünde de bulunmanız için çalışıyoruz.</p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-14 items-center">
          <GoogleAramaAnimasyonu />
          <div className="grid grid-cols-1 gap-5">
            <FadeIn delay={0}>
              <div className="kart-kompakt h-full bg-[#0D1225] border border-white/[0.14] rounded-2xl p-6">
                <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Search size={20} className="text-blue-400" />
                </div>
                <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">SEO</p>
                <h3 className="text-white font-semibold text-lg mb-2">Google&apos;da Bulunmak</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Potansiyel müşteriniz Google&apos;da arama yaptığında markanızın ilk sayfada, üst sıralarda görünmesi.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="kart-kompakt h-full bg-[#0D1225] border border-white/[0.14] rounded-2xl p-6">
                <div className="w-11 h-11 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Mic size={20} className="text-violet-400" />
                </div>
                <p className="text-violet-400 text-xs font-semibold uppercase tracking-wider mb-1">AEO</p>
                <h3 className="text-white font-semibold text-lg mb-2">Doğrudan Cevap Olmak</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Sesli asistanlara yöneltilen sorularda veya Google&apos;ın öne çıkan cevap kutusunda markanızın referans gösterilmesi.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="kart-kompakt h-full bg-[#0D1225] border border-white/[0.14] rounded-2xl p-6">
                <div className="w-11 h-11 bg-fuchsia-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Bot size={20} className="text-fuchsia-400" />
                </div>
                <p className="text-fuchsia-400 text-xs font-semibold uppercase tracking-wider mb-1">GEO</p>
                <h3 className="text-white font-semibold text-lg mb-2">Yapay Zekânın Önerisi Olmak</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Yapay zekâ araçlarının ve arama özetlerinin sizi kaynak olarak alıntılama olasılığının artması (garanti edilmez).</p>
              </div>
            </FadeIn>
          </div>
          </div>
        </div>
      </section>

      {/* ── CANLI GOOGLE ÖNİZLEMESİ (etkileşimli) ──────────────────────────── */}
      <section aria-labelledby="google-onizleme" className="py-12 sm:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">Deneyin</p>
            <h2 id="google-onizleme" className="text-3xl sm:text-4xl font-bold text-white mb-4">İşletmeniz Google&apos;da Nasıl Görünür?</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">İşletmenizin adını yazın, müşterinin aramada göreceği görünümü anında izleyin.</p>
          </FadeIn>
          <GoogleOnizleme />
        </div>
      </section>

      {/* ── MÜŞTERİ YORUMLARI ────────────────────────────────────────────── */}
      <ReviewsMarquee />

      {/* ── ÜCRETSİZ SEO ANALİZİ (inline) ──────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-violet-500 text-sm font-medium tracking-wider uppercase mb-3">Ücretsiz Araç</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Sitenizin SEO Puanını Öğrenin</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">URL&apos;nizi girin, yapay zeka anında hız, mobil uyum, içerik ve teknik SEO puanlarınızı çıkarsın.</p>
          </div>
          <FadeIn>
            <QuickSeoWidget />
          </FadeIn>
        </div>
      </section>

      {/* ── WHATSAPP LEAD FORM ──────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <WhatsAppLeadForm />
        </div>
      </section>

      {/* ── ŞEHİRLER (iç link — ana sayfadan şehir kümesine gerçek içerik linki) ── */}
      <section className="py-12 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Türkiye Geneli — 12 Şehir</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Türkiye Genelinde Hizmet Veriyoruz</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8">
            Tüm hizmetlerimizi tamamen uzaktan, Türkiye genelinde yürütüyoruz.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 mb-8">
            {[
              { href: '/istanbul-dijital-pazarlama', label: 'İstanbul' },
              { href: '/ankara-dijital-pazarlama', label: 'Ankara' },
              { href: '/izmir-dijital-pazarlama', label: 'İzmir' },
              { href: '/bursa-dijital-pazarlama', label: 'Bursa' },
              { href: '/antalya-dijital-pazarlama', label: 'Antalya' },
              { href: '/gaziantep-dijital-pazarlama', label: 'Gaziantep' },
              { href: '/konya-dijital-pazarlama', label: 'Konya' },
              { href: '/mersin-dijital-pazarlama', label: 'Mersin' },
              { href: '/kayseri-dijital-pazarlama', label: 'Kayseri' },
              { href: '/eskisehir-dijital-pazarlama', label: 'Eskişehir' },
              { href: '/kocaeli-dijital-pazarlama', label: 'Kocaeli' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                prefetch={false}
                className="text-sm bg-white/[0.03] hover:bg-blue-500/10 border border-white/[0.06] hover:border-blue-500/30 text-zinc-400 hover:text-blue-400 rounded-full px-4 py-2 transition-all"
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            href="/sehirler"
            prefetch={false}
            className="group inline-flex items-center gap-2 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-blue-300 text-sm font-medium rounded-full px-6 py-3 transition-all"
          >
            Tüm Şehirleri Gör <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="mt-10 pt-8 border-t border-white/[0.06]">
            <details className="group">
            <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer mx-auto w-fit flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 text-xs font-medium uppercase tracking-wider mb-4">
              Kocaeli, Sakarya ve Çevresi — İlçe Rehberleri
              <ChevronDown size={14} className="group-open:rotate-180 transition-transform" />
            </summary>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                ['Gebze', 'gebze'], ['Darıca', 'darica'], ['Körfez', 'korfez'], ['Gölcük', 'golcuk'],
                ['Başiskele', 'basiskele'], ['Kartepe', 'kartepe'], ['Çayırova', 'cayirova'], ['Dilovası', 'dilovasi'],
                ['Adapazarı', 'adapazari'], ['Serdivan', 'serdivan'], ['Sapanca', 'sapanca'], ['Yalova', 'yalova'], ['Düzce', 'duzce'],
              ].map(([label, slug]) => (
                <Link
                  key={slug}
                  href={`/ilceler/${slug}`}
                  prefetch={false}
                  className="text-xs bg-white/[0.03] hover:bg-blue-500/10 border border-white/[0.06] hover:border-blue-500/30 text-zinc-500 hover:text-blue-400 rounded-full px-3 py-1.5 transition-all"
                >
                  {label}
                </Link>
              ))}
              <Link href="/ilceler" prefetch={false} className="text-xs text-blue-400 hover:text-blue-300 px-3 py-1.5">Tümünü gör →</Link>
            </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── SSS ──────────────────────────────────────────────────────────── */}
      <AnaSayfaSss />

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="tema-koyu relative bg-[#0A0F1E] bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 rounded-3xl p-6 sm:p-10 md:p-16 overflow-hidden text-center">
              <ArkaPlanVideo src="/video/cta-sehir.mp4" mobilSrc="/video/cta-sehir-mobil.mp4" poster="/video/cta-sehir-poster.jpg" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18)_0%,rgba(59,130,246,0.06)_40%,transparent_70%)] rounded-full pointer-events-none" />
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
      </div>
      </div>
    </>
  )
}
