import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | SEO, Google Ads, Web Tasarım & n8n Otomasyon — Ramses Dijital',
  description:
    'SEO/GEO/AEO, Google Ads, web tasarımı, e-posta otomasyonu, n8n iş akışı ve veri analizi. Performans odaklı dijital pazarlama hizmetleri.',
  alternates: { canonical: 'https://ramsesdigital.com/hizmetler' },
  openGraph: {
    title: 'Dijital Pazarlama Hizmetleri | Ramses Dijital',
    description: 'SEO/GEO/AEO, Google Ads, web tasarımı, e-posta otomasyonu, n8n iş akışı ve veri analizi — tüm dijital büyüme araçları tek çatı altında.',
    url: 'https://ramsesdigital.com/hizmetler',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dijital Pazarlama Hizmetleri | Ramses Digital',
    description: 'SEO, GEO, Google Ads, n8n otomasyon — tüm dijital büyüme araçları.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}
import {
  Sparkles,
  TrendingUp,
  Monitor,
  Mail,
  BarChart3,
  CheckCircle2,
  Workflow,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'SEO, GEO ve Yanıt Motoru Optimizasyonu (AEO)',
    tagline: 'AI-Native Görünürlük & Organik Otorite',
    desc: "Markanızı sadece Google'da değil; ChatGPT, Gemini ve Perplexity gibi yapay zeka motorlarının \"güvenilir kaynağı\" haline getiriyoruz. Veri odaklı içerik stratejileriyle, yapay zekanın kullanıcıya önerdiği ilk marka olun.",
    features: [
      'LLM & Chatbot Görünürlüğü (GEO)',
      'Semantic Content Architecture',
      'Structured Data & Schema Markup (JSON-LD)',
      'EEAT Odaklı Otorite İnşası',
      'Niyet Odaklı (Intent-Based) Strateji',
      'AI Performans Analitiği',
    ],
    color: 'blue',
    href: '/hizmetler/seo-kocaeli',
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
    href: '/hizmetler/google-ads-kocaeli',
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
    href: '/hizmetler/web-tasarim-kocaeli',
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
    href: '/hizmetler/eposta-otomasyon',
  },
  {
    icon: Workflow,
    title: 'n8n İş Akışı Otomasyonu',
    tagline: 'No-Code / Low-Code · AI Entegrasyonlu İş Akışları',
    desc: 'n8n ile CRM, e-posta, sosyal medya, muhasebe ve yapay zeka araçlarını birbirine bağlıyoruz. Tekrar eden manuel işleri tamamen otomatize ediyor; ekibinizin zamanını ve enerjisini asıl işe harcamasını sağlıyoruz.',
    features: [
      'CRM & Satış Pipeline Otomasyonu',
      'AI Destekli İçerik & Raporlama Akışları',
      'Webhook & API Entegrasyonları',
      'Lead Yakalama & Nurturing Otomasyonu',
      'Çoklu Platform Senkronizasyonu',
      'Self-Hosted & Güvenli Altyapı',
    ],
    color: 'fuchsia',
    href: '/hizmetler/n8n-otomasyon',
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
    href: '/hizmetler/veri-analizi',
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
  fuchsia: {
    bg: 'from-fuchsia-500/5 to-transparent',
    border: 'border-fuchsia-500/20 hover:border-fuchsia-500/40',
    icon: 'bg-fuchsia-500/10 text-fuchsia-400',
    tag: 'bg-fuchsia-500/10 text-fuchsia-400',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
            Hizmetlerimiz
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Dijital Büyüme İçin
            <br />
            <span className="gradient-text">Kapsamlı Çözümler</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            SEO, Google Ads, n8n otomasyon ve web tasarımında performans odaklı çözümler.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {services.map((service) => {
            const Icon = service.icon
            const colors = colorMap[service.color]
            return (
              <div
                key={service.title}
                className={`bg-[#0D1225] border ${colors.border} rounded-2xl p-8 md:p-10 transition-all duration-300`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center mb-5`}>
                      <Icon size={22} />
                    </div>
                    <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2">
                      {service.tagline}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-6">
                      <CalendlyButton label="Teklif Al" variant="link" />
                      {service.href && (
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Detayları İncele
                          <ArrowRight size={14} />
                        </Link>
                      )}
                    </div>
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
            )
          })}
        </div>
      </section>

      {/* Definitions / Glossary — GEO/AEO Optimized */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
              Kavramlar
            </p>
            <h2 className="text-4xl font-bold text-white mb-4">Dijital Pazarlama Sözlüğü</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Hizmetlerimizde sıkça geçen terimlerin kısa ve net açıklamaları.
            </p>
          </div>
          <div className="space-y-5">
            {definitions.map((item) => (
              <div key={item.term} className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-2">{item.term} nedir?</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
              Sık Sorulan Sorular
            </p>
            <h2 className="text-4xl font-bold text-white mb-4">Aklınızdaki Sorular</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Hizmetlerimiz, süreçler ve fiyatlandırma hakkında en çok sorulan soruların cevapları.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] transition-colors"
              >
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

      {/* CTA */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Hangi Hizmet Size Uygun?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Ücretsiz danışmanlık seansımızda işletmenize özel strateji geliştirelim.
          </p>
          <CalendlyButton label="Ücretsiz Danışmanlık Al" variant="primary" />
        </div>
      </section>

      {/* FAQ Schema — GEO/AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: services.map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Service',
                name: s.title,
                description: s.desc,
                provider: {
                  '@type': 'Organization',
                  name: 'Ramses Digital',
                  url: 'https://ramsesdigital.com',
                },
                areaServed: ['Kocaeli', 'İstanbul', 'Türkiye'],
              },
            })),
          }),
        }}
      />
    </>
  )
}

const definitions = [
  {
    term: 'SEO (Arama Motoru Optimizasyonu)',
    definition:
      'SEO, web sitenizin Google, Bing gibi arama motorlarında daha üst sıralarda çıkmasını sağlayan teknik ve içerik optimizasyon sürecidir. Anahtar kelime araştırması, teknik düzenlemeler, içerik üretimi ve backlink stratejilerini içerir.',
  },
  {
    term: 'GEO (Generative Engine Optimization)',
    definition:
      'GEO, ChatGPT, Gemini ve Perplexity gibi yapay zeka destekli arama motorlarında markanızın güvenilir kaynak olarak gösterilmesini sağlayan optimizasyon türüdür. Yapılandırılmış veri, EEAT prensipleri ve semantik içerik mimarisi temelinde çalışır.',
  },
  {
    term: 'AEO (Answer Engine Optimization)',
    definition:
      'AEO, kullanıcıların doğrudan yanıt aradığı sorularda (sesli arama, öne çıkan snippet\'lar) markanızın cevap kaynağı olarak görünmesini sağlar. Soru-cevap formatı, FAQ schema ve net tanımlar AEO\'nun temelidir.',
  },
  {
    term: 'Google Ads',
    definition:
      'Google Ads, Google\'ın arama sonuçlarında, YouTube\'da ve Display Network\'te ücretli reklam vermenizi sağlayan platformdur. Tıklama başı ödeme (CPC) modeliyle çalışır ve doğru kurgulandığında yüksek ROI getirebilir.',
  },
  {
    term: 'n8n İş Akışı Otomasyonu',
    definition:
      'n8n, kod yazmadan veya minimum kodla farklı uygulamaları (CRM, e-posta, sosyal medya, AI araçları) birbirine bağlayıp tekrarlanan iş akışlarını otomatize etmenizi sağlayan açık kaynak bir platformdur.',
  },
  {
    term: 'ROAS (Reklam Harcamasının Geri Dönüşü)',
    definition:
      'ROAS, reklam harcaması başına elde edilen gelirdir. Formülü: Gelir / Reklam Harcaması. 4x ROAS, harcadığınız her 1 TL\'nin 4 TL gelir getirdiği anlamına gelir.',
  },
]

const faqs = [
  {
    q: 'SEO çalışması ne kadar sürede sonuç verir?',
    a: 'Genellikle ilk anlamlı sonuçları 3-6 ay içinde görüyoruz. Rekabetçi sektörlerde bu süre 6-12 aya çıkabilir. Teknik düzeltmeler ve içerik üretimi ilk haftalardan itibaren etki etmeye başlar; ancak Google\'ın yeni siteyi tanıması ve sıralamaları stabilize etmesi zaman alır.',
  },
  {
    q: 'Google Ads bütçem ne kadar olmalı?',
    a: 'B2B ve nişe özel sektörler için aylık 5.000-15.000 TL test bütçesiyle başlamayı öneriyoruz. E-ticaret ve geniş kitleli işletmeler için 15.000-50.000 TL arası bir başlangıç bütçesi sağlıklı sonuç verir. Optimal bütçe sektör, ürün marjı ve hedef kitleye göre değişir.',
  },
  {
    q: 'Hizmetlerinizden hangisi benim için uygun?',
    a: 'Hızlı sonuç istiyorsanız Google Ads, uzun vadeli organik büyüme için SEO/GEO, otomasyon ve operasyonel verimlilik için n8n otomasyon önerilir. Ücretsiz danışmanlık seansımızda işletmenize özel önceliklendirme yapıyoruz.',
  },
  {
    q: 'Sözleşme süresi ne kadar?',
    a: 'Minimum 3 ay, ortalama 6-12 ay arasında çalışıyoruz. SEO\'da kısa süreli (1-2 ay) sözleşmeler önerilmez çünkü sonuç almak için zaman gerekir. Google Ads\'de aylık esnek modelimiz de mevcuttur.',
  },
  {
    q: 'Kocaeli dışından çalışıyor musunuz?',
    a: 'Evet, tüm Türkiye ve uluslararası pazarda online çalışıyoruz. Merkezimiz Kocaeli\'de olmakla birlikte İstanbul, Ankara, İzmir başta olmak üzere her şehirden müşteri kabul ediyoruz. Görüşmeleri Google Meet veya Zoom üzerinden yapıyoruz.',
  },
  {
    q: 'Raporlama nasıl yapılıyor?',
    a: 'Aylık detaylı performans raporu + canlı dashboard erişimi sağlıyoruz. Google Analytics, Search Console ve özel dashboard\'larımızdan tüm KPI\'ları (trafik, dönüşüm, ROAS, organik sıralamalar) gerçek zamanlı görebilirsiniz.',
  },
  {
    q: 'GEO ve AEO neden önemli?',
    a: 'Kullanıcıların %30\'u artık ChatGPT, Perplexity gibi AI motorları üzerinden arama yapıyor. GEO, bu yeni platformlarda görünür olmanızı sağlar. AEO ise sesli arama ve "öne çıkan yanıt" kutucuklarında markanızı ön plana çıkarır.',
  },
  {
    q: 'n8n otomasyonu ile ne tür süreçler otomatize edilebilir?',
    a: 'Lead yakalama → CRM\'e kayıt → otomatik e-posta, sosyal medya paylaşım otomasyonu, fatura/sipariş senkronizasyonu, müşteri destek bildirimleri, rapor oluşturma ve AI destekli içerik akışları gibi 200+ farklı senaryo otomatize edilebilir.',
  },
]
