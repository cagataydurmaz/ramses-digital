import type { Metadata } from 'next'
import BolgeMenusu from '@/components/BolgeMenusu'
import SiziArayalimFormu from '@/components/SiziArayalimFormu'
import ProjeGalerisi from '@/components/ProjeGalerisi'
import Link from 'next/link'
import CityServiceSections, { cityServiceFaqs } from '@/components/CityServiceSections'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, ArrowRight, CheckCircle2, Zap, Smartphone, Search, ShieldCheck, BarChart3, Palette } from 'lucide-react'
import HeroGuvenSatiri from '@/components/HeroGuvenSatiri'
import SiteKaydirmaTelefon from '@/components/telefon/SiteKaydirmaTelefon'

export const metadata: Metadata = {
  title: 'Gaziantep Web Tasarım Ajansı — Ramses Dijital',
  description:
    'Gaziantep\'te web tasarım ve internet sitesi yapımı. Şahinbey, Şehitkamil, Nizip ve tüm Gaziantep ilçeleri için SEO uyumlu, mobil öncelikli kurumsal web siteleri.',
  alternates: { canonical: 'https://ramsesdigital.com/gaziantep-web-tasarim' },
  openGraph: {
    title: 'Gaziantep Web Tasarım | Ramses Dijital',
    description: 'Gaziantep işletmeleri için dönüşüm odaklı, SEO hazır web siteleri.',
    url: 'https://ramsesdigital.com/gaziantep-web-tasarim',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Smartphone, title: 'Mobil Öncelikli', desc: 'Mobil trafik ağırlıklı bugünün pazarında responsive ve hızlı yüklenen bir tasarım artık zorunluluk.' },
  { icon: Search, title: 'SEO Hazır Altyapı', desc: 'Next.js ile oluşturulan siteler Gaziantep\'in yerel SEO ortamına hazır başlar. Schema markup, canonical, sitemap otomatik.' },
  { icon: Zap, title: 'Yüksek Performans', desc: 'Lighthouse 90+ puan. Gaziantep\'teki rakiplerinizden hızlı yüklenin — Google bu metriği sıralamada kullanıyor.' },
  { icon: Palette, title: 'Sektöre Özel Tasarım', desc: 'Tekstil ihracatçıları ve gıda üreticileri için katalog/vitrin odaklı; klinik ve hukuk büroları için güven veren, sade tasarım.' },
  { icon: BarChart3, title: 'Dönüşüm Odaklı', desc: 'WhatsApp butonu, randevu formu ve Google Maps entegrasyonuyla müşteri sizi kolayca bulsun.' },
  { icon: ShieldCheck, title: 'Güvenli & Bakımlı', desc: 'SSL, güvenlik güncellemeleri, yedekleme ve teknik destek. Rekabetçi Gaziantep pazarında müşteri kaçırmayın.' },
]

const ilceler = ['Şahinbey', 'Şehitkamil', 'Nizip', 'İslahiye', 'Oğuzeli', 'Nurdağı', 'Araban', 'Karkamış']

const faqs = [
  { q: 'Fiziksel olarak Gaziantep\'te ofisiniz var mı?', a: 'Hayır, Kocaeli kökenliyiz — Gaziantep\'e tamamen uzaktan hizmet veriyoruz. Keşif görüşmesi, tasarım onayı ve teslimat Google Meet/Zoom üzerinden yapılır. Türkiye genelinde canlı referanslarımızı portföyümüzde inceleyebilirsiniz.' },
  ...cityServiceFaqs('gaziantep', 'web'),
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Gaziantep Web Tasarım Hizmeti',
      description: 'Gaziantep\'in tüm ilçeleri için profesyonel, SEO uyumlu ve dönüşüm odaklı web sitesi tasarım ve geliştirme.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: ilceler.map((name) => ({ '@type': 'City', name })),
      url: 'https://ramsesdigital.com/gaziantep-web-tasarim',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Gaziantep Web Tasarım', item: 'https://ramsesdigital.com/gaziantep-web-tasarim' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
}

export default function GaziantepWebTasarimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full pointer-events-none" />
        <div data-hero-bolunmus className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Gaziantep — Tüm İlçeler</span>
          </div>
          <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Gaziantep Web Tasarım
            <br />
            <span className="gradient-text">Hızlı, Modern, SEO Hazır</span>
          </h1>
          <p className="line-clamp-3 sm:line-clamp-none text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-4 leading-relaxed">
            Gaziantep işletmeniz için hızlı, mobil uyumlu ve yerel SEO hazır web siteleri. Şahinbey&apos;den Nizip&apos;e tüm ilçelere uzaktan hizmet.
          </p>
          <div className="mb-10"><BolgeMenusu liste={ilceler} /></div>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
            <Link href="/portfolyo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Örnek Çalışmalar <ArrowRight size={14} />
            </Link>
          </div>
          <HeroGuvenSatiri />
          </div>
          <div className="mx-auto w-full max-w-[300px] lg:max-w-none">
            <SiteKaydirmaTelefon />
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Gaziantep İşletmeniz İçin Neden Biz?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="kart-kompakt bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <CheckCircle2 size={24} className="text-blue-400 mb-3" />
            <h2 className="text-xl font-bold text-white mb-2">Portföyümüzü İnceleyin</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Gaziantep&apos;e özel bir vaka çalışmamız henüz yok, ancak Türkiye genelinde canlı, ziyaret
              edilebilir web tasarım referanslarımız var. Hukuk bürosu, e-ticaret ve platform
              projelerimizi portföyden inceleyebilirsiniz.
            </p>
            <Link href="/portfolyo" className="text-blue-400 text-sm font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all">
              Tüm Portföyü Gör <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <CityServiceSections city="gaziantep" hizmet="web" />

      <section className="py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2 text-sm md:text-base">{q}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjeGalerisi />
      <SiziArayalimFormu />
      <ReviewsMarquee />

      <RelatedPages
        pages={[
          { label: 'Gaziantep Dijital Pazarlama', href: '/gaziantep-dijital-pazarlama' },
          { label: 'Gaziantep SEO', href: '/gaziantep-seo' },
          { label: 'Gaziantep Google Ads', href: '/gaziantep-google-ads' },
          { label: 'Gaziantep Yazılım Ajansı', href: '/gaziantep-yazilim-ajansi' },
          { label: 'Web Tasarım Ajansı (Türkiye Geneli)', href: '/web-tasarim-ajansi' },
        ]}
      />

      <section className="py-12 md:py-16 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Gaziantep&apos;te Web Siteniz Hazır Olsun</h2>
          <p className="text-zinc-400 text-lg mb-8">30 dakikalık ücretsiz görüşmede ihtiyaçlarınızı netleştirelim.</p>
          <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
