import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { Globe2, Search, ArrowRight, CheckCircle2, FileText, Link2, BarChart3, Zap, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SEO Ajansı — Ramses Dijital',
  description:
    'Türkiye genelinde SEO ajansı. Teknik SEO, içerik stratejisi, GEO ve AEO ile hangi şehirde olursanız olun Google\'da üst sıraya çıkın. Tamamen online çalışıyoruz. Ücretsiz SEO analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/seo-ajansi' },
  openGraph: {
    title: 'SEO Ajansı | Ramses Dijital',
    description: 'Türkiye genelinde online çalışan SEO ajansı. Teknik SEO, GEO, AEO ve içerik stratejisi.',
    url: 'https://ramsesdigital.com/seo-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Search, title: 'Anahtar Kelime Stratejisi', desc: 'Sektörünüze ve hedef kitlenize özel, dönüşüm odaklı anahtar kelime araştırması — hangi şehirde olursanız olun.' },
  { icon: FileText, title: 'Teknik SEO Audit', desc: 'Site hızı, Core Web Vitals, mobil uyum ve indexlenebilirlik. Teknik engeller Google\'ın önündeki en büyük bariyerdir.' },
  { icon: Zap, title: 'GEO & AEO Optimizasyonu', desc: 'ChatGPT, Gemini ve Perplexity\'de markanızın referans kaynağı olmasını sağlıyoruz — coğrafi sınır tanımayan bir görünürlük.' },
  { icon: Link2, title: 'Backlink İnşası', desc: 'Sektörel otorite sitelerden, dijital PR ve misafir yazılarla kaliteli backlink profili.' },
  { icon: BarChart3, title: 'İçerik Stratejisi', desc: 'Hedef kitlenizin arama davranışına uygun, pillar-cluster yapıda aylık içerik üretimi.' },
  { icon: Award, title: 'Şeffaf Raporlama', desc: 'Aylık detaylı rapor + canlı dashboard. Trafik, sıralama, dönüşüm — her şey görünür.' },
]

const faqs = [
  { q: 'Fiziksel olarak İzmit/Kocaeli\'de değilim, yine de çalışabilir miyiz?', a: 'Kesinlikle. Merkezimiz Kocaeli\'de olsa da tüm SEO çalışmalarımız uzaktan yürütülüyor. İstanbul, Ankara, İzmir, Antalya, Bursa — Türkiye\'nin her şehrinden müşterimiz var. Görüşmeler Google Meet/Zoom üzerinden yapılıyor, raporlar dijital olarak paylaşılıyor.' },
  { q: 'SEO ajansı seçerken nelere dikkat etmeliyim?', a: 'Canlı referansları olan, backlink satın almayan (yalnızca organik stratejiler kullanan), şeffaf raporlama yapan ve minimum 3-6 aylık gerçekçi süre veren bir ajans seçin. "1 haftada 1. sayfa" gibi vaatler genellikle Google cezasıyla sonuçlanan riskli tekniklere işaret eder.' },
  { q: 'SEO sonuçları ne kadar sürede görülür?', a: 'Yerel/harita sonuçları 2-4 haftada, organik web sitesi sıralamaları 3-6 ayda belirginleşir. Rekabetçi ulusal anahtar kelimelerde tam etki 6-12 ay alabilir. Süreç boyunca aylık ilerleme raporlarıyla takip edersiniz.' },
  { q: 'SEO paketleriniz ne kadar?', a: 'KOBİ paketleri aylık 6.000-15.000 TL, kurumsal/içerik ağırlıklı paketler 20.000 TL\'den başlıyor. Sektör, rekabet düzeyi ve hedef şehir sayısına göre değişir. Ücretsiz danışmanlıkta işletmenize özel teklif sunuyoruz.' },
  { q: 'Hangi sektörlerde deneyiminiz var?', a: 'Sağlık, hukuk, e-ticaret, B2B sanayi, güzellik & estetik, eğitim ve profesyonel hizmetler dahil geniş bir yelpazede çalışıyoruz. Portföyümüzde farklı şehirlerden ve sektörlerden canlı, doğrulanabilir projeler var.' },
  { q: 'GEO ve AEO neden ulusal SEO için de önemli?', a: 'ChatGPT veya Gemini\'ye "İstanbul\'da güvenilir bir SEO ajansı önerir misin?" sorulduğunda, coğrafi sınır olmadan yapılandırılmış içerik ve otorite sinyalleri olan markalar öneriliyor. GEO çalışması, hangi şehirden arama gelirse gelsin sizi görünür kılıyor.' },
  { q: 'Sözleşme süresi ne kadar?', a: 'Minimum 3 ay, ideal olarak 6 ay öneriyoruz — SEO birikimli çalışır, 1-2 aylık taahhütlerde anlamlı sonuç almak zordur. 12 aylık sözleşmelerde indirim sağlıyoruz.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'SEO Ajansı Hizmeti',
      description: 'Türkiye genelinde online SEO danışmanlığı: teknik SEO, GEO, AEO ve içerik stratejisi.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: { '@type': 'Country', name: 'Türkiye' },
      url: 'https://ramsesdigital.com/seo-ajansi',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'SEO Ajansı', item: 'https://ramsesdigital.com/seo-ajansi' },
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

export default function SeoAjansiPage() {
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
            SEO Ajansı
            <br />
            <span className="gradient-text">Hangi Şehirde Olursanız Olun</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            İstanbul, Ankara, İzmir, Antalya, Bursa fark etmez — tüm çalışmalarımız uzaktan yürütülüyor. Teknik SEO, GEO ve AEO ile Google&apos;da ve yapay zeka motorlarında görünür olun.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz SEO Analizi" variant="primary" />
            <Link href="/portfolyo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Referanslarımızı Gör <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kapsamlı SEO Stratejisi</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Tek bir teknik düzeltme değil, uçtan uca büyüme stratejisi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <CheckCircle2 size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Türkiye&apos;nin Her Yerinden Gerçek Referanslar</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Kocaeli\'den İstanbul\'a farklı şehirlerden müşterilerimiz var — hepsi canlı, hepsi ziyaret edilebilir.
              Boş vaat değil, doğrulanabilir sonuç.
            </p>
            <Link href="/portfolyo" className="text-blue-400 text-sm font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all">
              Tüm Portföyü Gör <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
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

      <RelatedPages
        pages={[
          { label: 'Google Ads Ajansı', href: '/google-ads-ajansi' },
          { label: 'Web Tasarım Ajansı', href: '/web-tasarim-ajansi' },
          { label: 'Yazılım Ajansı', href: '/yazilim-ajansi' },
          { label: 'İzmit SEO', href: '/izmit-seo' },
          { label: 'Kocaeli SEO', href: '/kocaeli-seo' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nerede Olursanız Olun, Google&apos;da Zirveye Çıkalım
          </h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz SEO analiziyle başlayalım.</p>
          <CalendlyButton label="Ücretsiz SEO Analizi Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
