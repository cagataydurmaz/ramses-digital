import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { Globe2, Code2, ArrowRight, CheckCircle2, Zap, Globe, BarChart3, Shield, Layers, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Yazılım Ajansı — Ramses Dijital',
  description:
    'Türkiye genelinde yazılım ajansı. Web uygulaması, otomasyon, API entegrasyonu ve yapay zeka çözümleri. Türkiye\'nin her şehrindeki işletmeler için tamamen online süreç.',
  alternates: { canonical: 'https://ramsesdigital.com/yazilim-ajansi' },
  openGraph: {
    title: 'Yazılım Ajansı | Ramses Dijital',
    description: 'Türkiye genelinde online çalışan yazılım ajansı. Web, otomasyon ve AI çözümleri.',
    url: 'https://ramsesdigital.com/yazilim-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const solutions = [
  { icon: Globe, title: 'Web Uygulaması & Site', desc: 'Next.js ile yüksek performanslı web siteleri ve uygulamalar. KOBİ\'den kurumsal ölçeğe.' },
  { icon: Zap, title: 'İş Süreçleri Otomasyonu', desc: 'n8n ile CRM, e-posta, muhasebe ve raporlama süreçlerini otomatikleştirin.' },
  { icon: Layers, title: 'API & ERP Entegrasyonu', desc: 'Logo, SAP, Mikro, WooCommerce — kullandığınız sistemlerle sorunsuz entegrasyon.' },
  { icon: BarChart3, title: 'Veri & Raporlama', desc: 'GA4, Looker Studio ve özel dashboard\'larla verinizi görsel ve anlaşılır hale getirin.' },
  { icon: Cpu, title: 'Yapay Zeka Entegrasyonu', desc: 'Müşteri destek botu, belge analizi, öneri motorları. Claude & GPT-4 entegrasyonu.' },
  { icon: Shield, title: 'Güvenlik & Bakım', desc: 'SSL, yedekleme, güvenlik taraması ve uptime monitoring.' },
]

const stack = ['Next.js', 'TypeScript', 'React', 'Node.js', 'n8n', 'PostgreSQL', 'Vercel', 'Supabase', 'Claude API', 'Stripe']

const faqs = [
  { q: 'Farklı bir şehirdeyim, uzaktan yazılım projesi yürütebilir miyiz?', a: 'Evet. Yazılım geliştirme doğası gereği uzaktan yürütülebilir bir süreçtir. Şartname görüşmesinden teslimata kadar Zoom/Meet ve dijital dokümantasyon üzerinden ilerliyoruz. Türkiye\'nin her şehrinden müşterilerimiz var.' },
  { q: 'Özel yazılım mı, hazır SaaS mi kullanmalıyım?', a: 'Çoğu durumda ikisinin kombinasyonu en akıllıcasıdır. Muhasebe, CRM gibi alanlarda hazır SaaS araçları uygun maliyetli; operasyona özgü süreçler için özel yazılım veya otomasyon daha verimlidir. Brifing aşamasında birlikte karar veriyoruz.' },
  { q: 'Proje süresi ve teslim takvimi nasıl belirleniyor?', a: 'Basit web sitesi 2-3 hafta, orta ölçekli web uygulaması 6-10 hafta, karmaşık otomasyon veya platform projeleri 3-6 ay. Şartname onaylandıktan sonra net takvim sunuyor ve buna bağlı kalıyoruz.' },
  { q: 'Yapay zeka (AI) entegrasyonu yapıyor musunuz?', a: 'Evet. Müşteri destek chatbotu, içerik üretim asistanı, belge analizi ve öneri sistemi projeleri yapıyoruz. Claude API ve GPT-4 entegrasyonlarında deneyimli ekibimiz var.' },
  { q: 'Fiyatlandırma nasıl yapılıyor?', a: 'Proje bazlı sabit fiyat veya zaman & materyal modeli kullanıyoruz. Küçük otomasyon projeleri 5.000-15.000 TL, kurumsal web uygulamaları 30.000-100.000+ TL aralığında. Ücretsiz danışmanlıkta ihtiyaç analizi sonrası sabit fiyatlı teklif sunuyoruz.' },
  { q: 'Proje teslim edildikten sonra destek veriyor musunuz?', a: 'Evet. Proje sonrası 1-3 ay hata düzeltme garantisi veriyoruz. Uzun vadeli bakım için aylık destek paketi sunuyoruz: güncellemeler, küçük geliştirmeler ve teknik izleme.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Yazılım Ajansı Hizmetleri',
      description: 'Türkiye genelinde online web uygulaması, otomasyon, API entegrasyonu ve yapay zeka çözümleri.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: { '@type': 'Country', name: 'Türkiye' },
      url: 'https://ramsesdigital.com/yazilim-ajansi',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Yazılım Ajansı', item: 'https://ramsesdigital.com/yazilim-ajansi' },
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

export default function YazilimAjansiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Globe2 size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Türkiye Geneli — %100 Online</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Yazılım Ajansı
            <br />
            <span className="gradient-text">Uçtan Uca Teknoloji Çözümleri</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Türkiye&apos;nin her şehrindeki işletmelere web uygulaması, iş süreçleri otomasyonu ve yapay zeka çözümleri için tamamen uzaktan hizmet veriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Keşif Görüşmesi" variant="primary" />
            <Link href="/hizmetler/n8n-otomasyon" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Otomasyon Hizmetleri <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl px-6 py-4 text-center">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Ramses Dijital, reklam ajansı kimliğiyle başladı; bugün SEO ve Google Ads&apos;in yanında web ve yazılım geliştirme hizmetlerini de aynı mühendislik disipliniyle sunuyor.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Yazılım Çözümlerimiz</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
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

      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto text-center">
          <Code2 size={28} className="text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Kullandığımız Teknolojiler</h2>
          <p className="text-zinc-500 text-sm mb-8">Modern, ölçeklenebilir ve bakımı kolay tech stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((tech) => (
              <span key={tech} className="bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-sm rounded-full px-4 py-2 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <CheckCircle2 size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">Yazılım + Dijital Pazarlama — Tek Çatı</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Çoğu yazılım ajansı sitenizi kurar ve bırakır. Biz aynı zamanda SEO, Google Ads ve e-posta otomasyonu yapıyoruz.
              Teknik altyapı ile pazarlama stratejisi aynı ekipten çıkınca koordinasyon kaybı olmaz, dönüşüm optimizasyonu daha hızlı olur.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2 text-sm md:text-base">{q}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages
        pages={[
          { label: 'SEO Ajansı', href: '/seo-ajansi' },
          { label: 'Google Ads Ajansı', href: '/google-ads-ajansi' },
          { label: 'Web Tasarım Ajansı', href: '/web-tasarim-ajansi' },
          { label: 'İzmit Yazılım Ajansı', href: '/izmit-yazilim-ajansi' },
          { label: 'Kocaeli Yazılım Ajansı', href: '/kocaeli-yazilim-ajansi' },
        ]}
      />

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Yazılım Projenizi Konuşalım</h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz keşif görüşmesinde ihtiyaçlarınızı dinleyip çözüm önerisi sunuyoruz.</p>
          <CalendlyButton label="Ücretsiz Görüşme Ayarla" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
