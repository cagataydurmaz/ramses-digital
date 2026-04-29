import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import { Monitor, Code2, Smartphone, Gauge, Search, ShoppingCart, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Tasarım Kocaeli | Performans Odaklı Modern Web Siteleri — Ramses Digital',
  description:
    'Kocaeli\'de modern, hızlı ve SEO uyumlu web tasarım hizmeti. Next.js, WordPress, Shopify. Mobil uyumlu, Core Web Vitals optimize, dönüşüm odaklı tasarım.',
  alternates: { canonical: 'https://ramsesdigital.com/hizmetler/web-tasarim-kocaeli' },
  openGraph: {
    title: 'Web Tasarım Kocaeli | Ramses Digital',
    description: 'Performans odaklı, modern, SEO uyumlu web siteleri. Next.js, WordPress, Shopify.',
    url: 'https://ramsesdigital.com/hizmetler/web-tasarim-kocaeli',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Tasarım Kocaeli — Ramses Digital',
    description: 'Modern, hızlı, SEO uyumlu web siteleri.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Gauge, title: 'Core Web Vitals Optimize', desc: 'LCP < 2.5s, INP < 200ms, CLS < 0.1. Google\'ın hız kriterlerini geçen siteler.' },
  { icon: Smartphone, title: 'Mobil Öncelikli Tasarım', desc: '%65 trafik mobilden geliyor. Önce mobil, sonra masaüstü tasarlanır.' },
  { icon: Search, title: 'SEO Hazır Altyapı', desc: 'Schema markup, semantic HTML, meta tag yapısı, sitemap, robots.txt — temelde mevcut.' },
  { icon: Code2, title: 'Modern Teknoloji', desc: 'Next.js 14, React 18, TypeScript, Tailwind. Geliştirilebilir, ölçeklenebilir altyapı.' },
  { icon: ShoppingCart, title: 'E-Ticaret Hazır', desc: 'Shopify, WooCommerce, Medusa veya Next.js Commerce ile özel e-ticaret çözümleri.' },
  { icon: Monitor, title: 'CMS Entegrasyonu', desc: 'Sanity, Strapi, WordPress headless. İçerik ekibinizin kolayca yönetebileceği panel.' },
]

const process = [
  { step: '01', title: 'Keşif & Strateji', desc: 'Hedef kitle araştırması, rakip analizi, marka kimliği değerlendirmesi ve site mimarisi planlaması.' },
  { step: '02', title: 'UX & Wireframe', desc: 'Figma üzerinde düşük ve yüksek detaylı tasarımlar. Kullanıcı yolculuğu (user journey) optimizasyonu.' },
  { step: '03', title: 'UI Tasarım', desc: 'Marka kimliğine uygun, modern ve dönüşüm odaklı görsel tasarım. Tüm sayfa türleri için.' },
  { step: '04', title: 'Geliştirme', desc: 'Next.js veya WordPress ile pixel-perfect kod yazımı. SEO, performans ve erişilebilirlik standartlarında.' },
  { step: '05', title: 'Test & Yayın', desc: 'Cross-browser test, hız testi, mobil test, form testleri. Vercel, Netlify veya kendi sunucunuza güvenli deploy.' },
]

const faqs = [
  { q: 'Web sitem ne kadar sürede hazır olur?', a: 'Tek sayfa landing: 1-2 hafta. Kurumsal site (5-10 sayfa): 3-5 hafta. Karmaşık e-ticaret veya özel sistem: 8-16 hafta. Süreyi içerik hazırlık hızı ve revizyon sayısı belirler.' },
  { q: 'Fiyatlandırma nasıl?', a: 'Landing sayfa: 8.000-25.000 TL. Kurumsal web sitesi: 25.000-80.000 TL. E-ticaret: 50.000-250.000 TL. Custom Next.js projeler: 80.000+ TL. Tüm paketler: SEO altyapı, mobil uyum, hosting kurulumu, 30 gün destek dahil.' },
  { q: 'Hangi teknolojiyi kullanıyorsunuz?', a: 'Next.js (React 18, TypeScript) ana tercihimiz — performans ve SEO için en iyisi. WordPress (Elementor/Bricks) bütçe sınırlı projeler için. Shopify ve WooCommerce e-ticaret için. Vercel ve Hetzner üzerinde deploy ediyoruz.' },
  { q: 'İçerik yönetimi (CMS) yapılabilir mi?', a: 'Evet. Headless CMS (Sanity, Strapi) veya WordPress üzerinden içerik yönetim paneli kuruyoruz. Yönetici girişi, blog yazısı ekleme, ürün güncelleme gibi işlemleri kolayca yapabilirsiniz. 1 saatlik eğitim videosu da pakete dahil.' },
  { q: 'SEO çalışması yapıyor musunuz?', a: 'Site yapımında SEO altyapısı (schema markup, meta tag, sitemap, hız) zorunlu olarak dahildir. İçerik üretimi, anahtar kelime stratejisi ve backlink çalışması için ayrı SEO hizmet paketimiz mevcut.' },
  { q: 'Hosting ve domain dahil mi?', a: 'İlk yıl Vercel hosting ücretsiz pakete dahildir. Domain alımında size yardımcı oluyoruz (yıllık 50-300 TL aralığında, sahipliği size ait). İkinci yıldan itibaren self-hosting veya bizim yönetimimizde devam edebilirsiniz.' },
  { q: 'Site sahipliği bende mi kalıyor?', a: 'Evet, %100. Tüm kod GitHub\'da size aktarılır, domain ve hosting hesapları sizin adınıza alınır. İstediğiniz an başka bir geliştiriciyle çalışabilirsiniz; teknoloji kilitli değildir.' },
  { q: 'Bakım ve güncelleme nasıl?', a: 'İlk 30 gün ücretsiz bug-fix desteği. Sonrası için aylık 1.500-5.000 TL aralığında bakım paketleri: küçük güncellemeler, içerik girişi, hız optimizasyonu, güvenlik yamaları, yedekleme. İhtiyaca göre saatlik (1.500 TL/saat) çalışma da mümkün.' },
]

export default function WebTasarimKocaeliPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <Monitor size={14} className="text-emerald-400" />
            <span className="text-emerald-400 text-xs font-medium tracking-wider uppercase">Next.js · WordPress · Shopify</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
            Kocaeli&apos;de Modern
            <br />
            <span className="gradient-text">Web Tasarım & Geliştirme</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Sadece güzel değil, hızlı ve dönüşüm odaklı web siteleri. Core Web Vitals optimize,
            mobil öncelikli, SEO uyumlu altyapı.
          </p>
          <CalendlyButton label="Tasarım Görüşmesi Al" variant="primary" />
        </div>
      </section>

      <section className="py-12 px-6 border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><div className="text-3xl md:text-4xl font-bold text-white">95+</div><div className="text-zinc-400 text-sm mt-1">Lighthouse Skoru</div></div>
          <div><div className="text-3xl md:text-4xl font-bold text-white">&lt;2s</div><div className="text-zinc-400 text-sm mt-1">Sayfa Yüklenme</div></div>
          <div><div className="text-3xl md:text-4xl font-bold text-white">%50</div><div className="text-zinc-400 text-sm mt-1">Dönüşüm Artışı</div></div>
          <div><div className="text-3xl md:text-4xl font-bold text-white">3-5 hf</div><div className="text-zinc-400 text-sm mt-1">Ortalama Teslim</div></div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-emerald-500 text-sm font-medium tracking-wider uppercase mb-3">Neler Sunuyoruz</p>
            <h2 className="text-4xl font-bold text-white mb-4">Web Sitenizde Neler Olacak?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">2026 standartlarında, modern ve performans odaklı web çözümleri.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
                  <div className="w-11 h-11 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-emerald-500 text-sm font-medium tracking-wider uppercase mb-3">Süreç</p>
            <h2 className="text-4xl font-bold text-white mb-4">5 Adımda Web Tasarım</h2>
          </div>
          <div className="space-y-4">
            {process.map((p) => (
              <div key={p.step} className="flex gap-6 items-start bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6">
                <div className="text-3xl font-bold gradient-text shrink-0">{p.step}</div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{p.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Neden Modern Stack?</h2>
          <div className="space-y-5 text-zinc-300 leading-relaxed">
            <p>Web sitesi sadece &ldquo;güzel görünmeli&rdquo; değil, <strong className="text-white">hızlı, SEO uyumlu, ölçeklenebilir ve güvenli</strong> olmalı. Bu tek bir teknoloji ile değil, doğru kombinasyonla mümkün.</p>
            <p><strong className="text-white">Next.js</strong> tercihimiz, çünkü:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>Server-side rendering (SSR) sayesinde Google daha hızlı indexler</li>
              <li>Image optimization yerleşik gelir; sayfa hızı maksimum</li>
              <li>React tabanlı; geliştirici bulmak kolay</li>
              <li>Vercel deploy ile global CDN ücretsiz</li>
              <li>Schema markup, OG image, sitemap otomatik üretilebilir</li>
            </ul>
            <p>WordPress hâlâ %43 pazar payına sahip ama yavaş kalıyor. Modern alternatif olarak Next.js ile <strong className="text-white">3-5x daha hızlı</strong> siteler kuruyoruz. Ama içerik girişi WordPress kadar kolay olsun derseniz, headless CMS (Sanity, Strapi) entegrasyonu yapıyoruz.</p>
            <p>Kocaeli&apos;deki KOBİ&apos;ler için en yaygın hata: ucuz tema satın alıp özelleştirmek. Bu ilk başta hızlı görünür ama performans, güvenlik ve özel özellik eklemede sorun yaratır. Custom kod ilk yatırımda biraz daha yüksek; ancak 3-5 yıllık ömründe çok daha karlı çıkar.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-emerald-500 text-sm font-medium tracking-wider uppercase mb-3">SSS</p>
            <h2 className="text-4xl font-bold text-white mb-4">Sık Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] transition-colors">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <h3 className="text-white font-semibold text-base">{item.q}</h3>
                  <span className="text-emerald-400 text-2xl leading-none group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="text-zinc-400 text-sm leading-relaxed mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">İlgili Rehberler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/core-web-vitals-donusum-orani" className="group bg-[#0D1225] border border-white/[0.06] hover:border-emerald-500/30 rounded-xl p-5 transition-all">
              <p className="text-emerald-400 text-xs font-medium uppercase tracking-wider mb-2">Performans</p>
              <h3 className="text-white font-medium leading-snug group-hover:text-emerald-300 transition-colors">Core Web Vitals ile Dönüşüm Oranınızı Artırın</h3>
            </Link>
            <Link href="/blog/schema-markup-jsonld-rehberi" className="group bg-[#0D1225] border border-white/[0.06] hover:border-emerald-500/30 rounded-xl p-5 transition-all">
              <p className="text-emerald-400 text-xs font-medium uppercase tracking-wider mb-2">SEO</p>
              <h3 className="text-white font-medium leading-snug group-hover:text-emerald-300 transition-colors">Schema Markup Nedir? JSON-LD Rehberi</h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-3xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Web Sitenizi Birlikte Tasarlayalım</h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz keşif görüşmesinde projenizi konuşalım, size özel teklif çıkartalım.</p>
          <CalendlyButton label="Tasarım Görüşmesi Al" variant="primary" />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Web Tasarım & Geliştirme — Kocaeli',
        description: 'Kocaeli işletmeleri için modern, hızlı ve SEO uyumlu web tasarım hizmeti.',
        provider: { '@type': 'Organization', name: 'Ramses Digital', url: 'https://ramsesdigital.com' },
        areaServed: [{ '@type': 'City', name: 'Kocaeli' }, { '@type': 'City', name: 'İzmit' }, { '@type': 'City', name: 'İstanbul' }],
        serviceType: 'Web Design and Development',
        url: 'https://ramsesdigital.com/hizmetler/web-tasarim-kocaeli',
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://ramsesdigital.com' },
          { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: 'https://ramsesdigital.com/hizmetler' },
          { '@type': 'ListItem', position: 3, name: 'Web Tasarım Kocaeli', item: 'https://ramsesdigital.com/hizmetler/web-tasarim-kocaeli' },
        ],
      })}} />
    </>
  )
}
