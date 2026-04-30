import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import { Sparkles, CheckCircle2, ArrowRight, Search, FileText, Link2, BarChart3, Zap, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SEO Hizmeti | Yerel & Teknik SEO, GEO, AEO — Ramses Dijital Reklam Ajansı',
  description:
    'İşletmenize özel SEO hizmeti. Yerel SEO, teknik SEO, GEO, AEO ve içerik stratejisi. Online çalışıyoruz, tüm Türkiye\'ye hizmet veriyoruz. Ücretsiz analiz.',
  alternates: { canonical: 'https://ramsesdigital.com/hizmetler/seo-kocaeli' },
  openGraph: {
    title: 'SEO Kocaeli | Ramses Digital',
    description: 'Kocaeli\'deki işletmeler için ROI odaklı SEO hizmeti. Google\'da 1. sayfaya çıkın.',
    url: 'https://ramsesdigital.com/hizmetler/seo-kocaeli',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Kocaeli — Ramses Digital',
    description: 'Kocaeli\'de yerel SEO, teknik SEO, içerik stratejisi.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Search, title: 'Anahtar Kelime Araştırması', desc: 'Sektörünüze özel, dönüşüm odaklı yerel ve uzun kuyruklu anahtar kelime stratejisi.' },
  { icon: FileText, title: 'Teknik SEO Auditi', desc: 'Site hızı, mobil uyum, schema markup, indexlenebilirlik ve Core Web Vitals optimizasyonu.' },
  { icon: Sparkles, title: 'GEO & AEO Optimizasyonu', desc: 'ChatGPT, Gemini, Perplexity ve sesli aramalarda görünür olun.' },
  { icon: Link2, title: 'Backlink İnşası', desc: 'Sektörel ve yerel kaliteli backlink stratejisi. Spam yok, sadece organik otorite.' },
  { icon: BarChart3, title: 'İçerik Stratejisi', desc: 'Aylık 4-8 SEO uyumlu blog yazısı. Pillar content ve cluster yapısı.' },
  { icon: Award, title: 'Yerel SEO (GBP)', desc: 'Google Business Profile yönetimi, NAP tutarlılığı, yerel dizin kayıtları.' },
]

const process = [
  { step: '01', title: 'Keşif & Audit', desc: 'Sitenizin teknik durumu, mevcut sıralamalar, rakip analizi ve hedef kitle araştırması. Tam SEO sağlık raporu.' },
  { step: '02', title: 'Strateji', desc: 'Hedef anahtar kelimeler, içerik takvimi, teknik öncelikler ve link inşa planı. 30/60/90 günlük yol haritası.' },
  { step: '03', title: 'Uygulama', desc: 'Teknik düzeltmeler, içerik üretimi, on-page optimizasyon, schema markup, GBP optimizasyonu.' },
  { step: '04', title: 'Backlink & Otorite', desc: 'Misafir yazılar, dijital PR, kırık bağlantı inşası, yerel rehber kayıtları.' },
  { step: '05', title: 'Ölçüm & İyileştirme', desc: 'Aylık detaylı rapor, canlı dashboard erişimi, sürekli optimizasyon ve A/B testler.' },
]

const faqs = [
  { q: 'Kocaeli\'de SEO sonuçları ne kadar sürede görülür?', a: 'Yerel SEO için 2-4 haftada Google Business Profile ve Local Pack sonuçları görünmeye başlar. Web sitesi sıralamaları için 3-6 ay gerçekçi bir bekleme süresidir. Rekabetçi anahtar kelimelerde tam etki 6-12 ayda ortaya çıkar.' },
  { q: 'SEO paketleriniz ne kadar?', a: 'KOBİ paketlerimiz aylık 6.000-15.000 TL aralığında. Kurumsal paketler 20.000+ TL\'den başlar. Her paket: teknik audit, anahtar kelime stratejisi, aylık içerik üretimi, backlink çalışması ve detaylı raporlama içerir. Ücretsiz danışmanlık seansında işletmenize özel teklif sunarız.' },
  { q: 'Sözleşme süresi ne kadar?', a: 'Minimum 6 ay öneriyoruz. SEO uzun vadeli bir yatırımdır; 1-2 aylık çalışmalar gerçek sonuç vermez. 12 aylık sözleşmelerde %15 indirim sağlıyoruz.' },
  { q: 'Hangi sektörlerde uzmanlığınız var?', a: 'E-ticaret, B2B SaaS, fintech, sanayi/üretim, sağlık hizmetleri ve profesyonel hizmetlerde derin tecrübemiz var. Kocaeli\'deki yerel işletmelerde özellikle güçlü vaka çalışmalarımız bulunuyor.' },
  { q: 'Backlink satın alıyor musunuz?', a: 'Hayır. Sadece organik ve kaliteli backlink stratejileri uyguluyoruz: misafir yazılar, dijital PR, sektörel rehberler, kırık bağlantı inşası ve değer odaklı outreach. Satın alınmış backlinkler Google manuel cezası getirir.' },
  { q: 'Raporlama nasıl yapılıyor?', a: 'Aylık detaylı performans raporu (PDF) + canlı Looker Studio dashboard erişimi. Organik trafik, sıralamalar, dönüşümler, backlink kazanımları ve teknik SEO sağlığı şeffaf şekilde takip edilir.' },
  { q: 'Yerel SEO ile klasik SEO farkı nedir?', a: 'Yerel SEO, Google Maps ve "Local Pack" alanında öne çıkmaya odaklanır. Google Business Profile, yerel anahtar kelimeler, müşteri yorumları ve NAP tutarlılığı kritiktir. Klasik SEO ise organik arama sonuçlarındaki sıralamayı hedefler. Kocaeli işletmeleri için ikisi birlikte uygulanmalıdır.' },
  { q: 'GEO ve AEO nedir, neden önemli?', a: 'GEO (Generative Engine Optimization) ChatGPT, Gemini ve Perplexity gibi AI motorlarında görünür olmayı sağlar. AEO (Answer Engine Optimization) sesli arama ve öne çıkan snippet alanlarına odaklanır. Kullanıcıların %30\'u artık AI motorlarını kullanıyor — geleneksel SEO\'ya ek olarak ikisi de zorunlu.' },
]

export default function SeoKocaeliPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-medium tracking-wider uppercase">SEO · GEO · AEO</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
            Google&apos;da
            <br />
            <span className="gradient-text">1. Sayfaya Çıkın</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            İşletmenize özel, performans odaklı SEO hizmeti. Yerel SEO&apos;dan teknik optimizasyona,
            GEO&apos;dan içerik stratejisine kadar tek çatı altında.
          </p>
          <CalendlyButton label="Ücretsiz SEO Analizi Al" variant="primary" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><div className="text-3xl md:text-4xl font-bold text-white">100+</div><div className="text-zinc-400 text-sm mt-1">Başarılı Proje</div></div>
          <div><div className="text-3xl md:text-4xl font-bold text-white">%340</div><div className="text-zinc-400 text-sm mt-1">Ortalama Trafik Artışı</div></div>
          <div><div className="text-3xl md:text-4xl font-bold text-white">6 ay</div><div className="text-zinc-400 text-sm mt-1">Ortalama Sonuç Süresi</div></div>
          <div><div className="text-3xl md:text-4xl font-bold text-white">5+</div><div className="text-zinc-400 text-sm mt-1">Yıl Tecrübe</div></div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">Hizmet Kapsamı</p>
            <h2 className="text-4xl font-bold text-white mb-4">SEO Paketinizde Neler Var?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Tüm SEO çalışmalarımız, modern algoritma ve AI motorlarına uyumlu şekilde tasarlandı.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-blue-500/30 transition-colors">
                  <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">Süreç</p>
            <h2 className="text-4xl font-bold text-white mb-4">5 Adımda SEO Yolculuğu</h2>
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

      {/* Why SEO Matters */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">SEO Neden Kritik?</h2>
          <div className="space-y-5 text-zinc-300 leading-relaxed">
            <p><strong className="text-white">Tüketicilerin %93&apos;ü</strong> bir hizmet veya ürün ararken önce Google&apos;a yöneliyor. Hedef anahtar kelimelerinizde ilk üçte yer almak, web sitenize gelen organik trafiğin <strong className="text-white">%75&apos;ini</strong> bir anda kazanmanız anlamına geliyor.</p>
            <p>SEO, sadece teknik değil; <strong className="text-white">strateji + içerik + otorite</strong> üçgenidir. Doğru anahtar kelime seçimi, kullanıcı niyetine uygun içerik üretimi ve sektörel backlink stratejileri bir araya gelmediğinde sıralama yarısında kalırsınız.</p>
            <p>2026&apos;da SEO artık sadece Google demek değil. ChatGPT, Gemini, Perplexity gibi yapay zeka motorları kullanıcının %30&apos;una hizmet veriyor. Bu yüzden modern SEO &ldquo;GEO&rdquo; (Generative Engine Optimization) ve &ldquo;AEO&rdquo; (Answer Engine Optimization) olmadan eksik kalır.</p>
            <p>Ramses Dijital Reklam Ajansı olarak ekibimizle, klasik SEO&apos;dan AI motorlarına kadar tüm arama ekosistemini kapsayan stratejiler kuruyoruz. NAP tutarlılığı, Google Business Profile optimizasyonu, yerel ve global anahtar kelime stratejileri uzmanlık alanımızdır.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">SSS</p>
            <h2 className="text-4xl font-bold text-white mb-4">Sık Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] transition-colors">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <h3 className="text-white font-semibold text-base">{item.q}</h3>
                  <span className="text-blue-400 text-2xl leading-none group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="text-zinc-400 text-sm leading-relaxed mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">İlgili Rehberler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/blog/kocaeli-seo-yerel-isletmeler-rehberi" className="group bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-5 transition-all">
              <p className="text-blue-400 text-xs font-medium uppercase tracking-wider mb-2">Yerel SEO</p>
              <h3 className="text-white font-medium text-sm leading-snug group-hover:text-blue-300 transition-colors">Kocaeli&apos;de SEO: Yerel İşletmeler İçin 2026 Tam Rehberi</h3>
            </Link>
            <Link href="/blog/google-search-console-rehberi" className="group bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-5 transition-all">
              <p className="text-blue-400 text-xs font-medium uppercase tracking-wider mb-2">Araç</p>
              <h3 className="text-white font-medium text-sm leading-snug group-hover:text-blue-300 transition-colors">Google Search Console Kullanım Rehberi</h3>
            </Link>
            <Link href="/blog/schema-markup-jsonld-rehberi" className="group bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-5 transition-all">
              <p className="text-blue-400 text-xs font-medium uppercase tracking-wider mb-2">Teknik</p>
              <h3 className="text-white font-medium text-sm leading-snug group-hover:text-blue-300 transition-colors">Schema Markup Nedir? JSON-LD Rehberi</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 rounded-3xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">SEO Yolculuğunuza Bugün Başlayın</h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz SEO analizi ve özel teklif için bize ulaşın.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton label="Ücretsiz Analiz Al" variant="primary" />
            <Link href="/seo-analiz" className="inline-flex items-center justify-center gap-2 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 px-7 py-3.5 rounded-full text-sm transition-all">
              Sitenizi Anında Test Edin <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'SEO Hizmeti — Kocaeli',
        description: 'Kocaeli ve İzmit işletmeleri için yerel SEO, GEO, AEO ve teknik SEO hizmetleri.',
        provider: { '@type': 'Organization', name: 'Ramses Digital', url: 'https://ramsesdigital.com' },
        areaServed: [{ '@type': 'City', name: 'İzmit' }, { '@type': 'City', name: 'Kocaeli' }, { '@type': 'Country', name: 'Türkiye' }],
        serviceType: 'Search Engine Optimization',
        url: 'https://ramsesdigital.com/hizmetler/seo-kocaeli',
      })}} />

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      })}} />

      {/* Breadcrumb */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://ramsesdigital.com' },
          { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: 'https://ramsesdigital.com/hizmetler' },
          { '@type': 'ListItem', position: 3, name: 'SEO Kocaeli', item: 'https://ramsesdigital.com/hizmetler/seo-kocaeli' },
        ],
      })}} />
    </>
  )
}
