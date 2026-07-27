import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Search, ArrowRight, CheckCircle2, FileText, Link2, BarChart3, Zap, Award, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İzmir SEO Ajansı — Ramses Dijital',
  description:
    'İzmir\'de SEO hizmeti. Yerel SEO, teknik SEO, GEO ve AEO ile Google\'da üst sıraya çıkın. Konak, Karşıyaka, Bornova ve tüm İzmir\'e uzaktan hizmet. Ücretsiz SEO analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/izmir-seo' },
  openGraph: {
    title: 'İzmir SEO Ajansı | Ramses Dijital',
    description: 'İzmir işletmeleri için yerel SEO, teknik SEO ve GEO/AEO optimizasyonu.',
    url: 'https://ramsesdigital.com/izmir-seo',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Search, title: 'İzmir Yerel SEO', desc: '"Konak + hizmetiniz", "Karşıyaka + hizmetiniz" gibi ilçe bazlı aramalarda Google harita paketine girin.' },
  { icon: FileText, title: 'Teknik SEO & Core Web Vitals', desc: 'Site hızı, mobil uyum, indexlenebilirlik ve Core Web Vitals optimizasyonu — turizm sezonunda trafik artışını sorunsuz karşılar.' },
  { icon: Zap, title: 'GEO & AEO', desc: 'ChatGPT, Gemini ve Perplexity\'de "İzmir\'de güvenilir X" aramasında önerilmek için entity-based, otorite odaklı içerik.' },
  { icon: Link2, title: 'Yerel & İhracat Odaklı Backlink İnşası', desc: 'İzmir\'in ihracat ve dış ticaret ağırlıklı ekonomisine uygun, sektörel dizin ve ticaret odası linkleri.' },
  { icon: BarChart3, title: 'Turizm & E-ticaret İçerik Stratejisi', desc: 'İzmir\'in turizm ve e-ticaret potansiyeline uygun, mevsimsel arama trendlerini hesaba katan içerik takvimi.' },
  { icon: Award, title: 'İlçe Bazlı Optimizasyon', desc: 'Konak, Karşıyaka, Bornova, Buca, Çiğli, Bayraklı — her ilçeye özel sayfa ve GBP stratejisi.' },
]

const ilceler = ['Konak', 'Karşıyaka', 'Bornova', 'Buca', 'Çiğli', 'Bayraklı', 'Balçova', 'Gaziemir', 'Menemen', 'Urla']

const faqs = [
  { q: 'İzmir\'de SEO hizmeti diğer şehirlerden farklı mı?', a: 'İzmir\'in ekonomisi ihracat/dış ticaret, turizm ve büyüyen bir e-ticaret sektörü etrafında şekilleniyor. Bu, mevsimsel arama trendlerini (özellikle turizm sektöründe) ve uluslararası pazara açık işletmeler için çok dilli SEO ihtiyaçlarını hesaba katan bir strateji gerektiriyor.' },
  { q: 'İzmir\'in farklı ilçeleri için ayrı SEO çalışması gerekiyor mu?', a: 'Evet. Konak (şehir merkezi, kurumsal), Karşıyaka (yerleşik yerel işletmeler) ve Urla (turizm, butik işletmeler) çok farklı arama davranışlarına sahip. İşinizin hedef kitlesine göre öncelikli ilçeleri belirleyip stratejiyi ona göre kuruyoruz.' },
  { q: 'İzmir\'de SEO sonuçları ne kadar sürede görülür?', a: 'Google Business Profile ve harita sonuçları 2-4 haftada görünür olabilir. Organik sıralamalar genellikle 3-6 ayda belirginleşir — İzmir\'in rekabet seviyesi İstanbul\'a göre daha yönetilebilir.' },
  { q: 'İzmir\'de hangi sektörler SEO\'dan en çok fayda görüyor?', a: 'Turizm ve konaklama, restoran & kafe, e-ticaret (özellikle yerel üretim/zeytinyağı, tekstil gibi ihracat kalemleri), sağlık ve güzellik sektörü İzmir\'de yüksek arama hacmine sahip. Sezon öncesi içerik hazırlığı turizm sektöründe belirleyici.' },
  { q: 'İzmir SEO paketi ne kadara mal olur?', a: 'Aylık 6.000-15.000 TL aralığında paketler sunuyoruz — sektöre ve ilçe kapsamına göre değişir. Kapsam: teknik audit, anahtar kelime araştırması, aylık içerik üretimi, GBP yönetimi, backlink stratejisi ve raporlama.' },
  { q: 'Fiziksel olarak İzmir\'de misiniz?', a: 'Hayır, merkezimiz Kocaeli\'de — tüm çalışmalar uzaktan yürütülüyor. İstanbul Barosu\'na kayıtlı avukatlar için yürüttüğümüz canlı projeler, uzaktan çalışma modelimizin gerçek sonuç verdiğinin kanıtı. İzmir işletmeleri için de aynı süreç ve kalite geçerli.' },
  { q: 'GEO (Yapay Zeka Optimizasyonu) İzmir işletmesi için gerekli mi?', a: 'Evet, özellikle turizm ve e-ticaret sektöründe. ChatGPT veya Gemini\'ye "İzmir\'de en iyi X" diye sorulduğunda önerilmek için yapılandırılmış içerik ve otorite sinyalleri gerekiyor — turistlerin ve yeni müşterilerin AI araçlarına giderek daha çok başvurduğu bir dönemdeyiz.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'İzmir SEO Hizmeti',
      description: 'İzmir ve tüm ilçeleri için yerel SEO, teknik SEO, GEO ve AEO optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'İzmir' },
        { '@type': 'City', name: 'Konak' },
        { '@type': 'City', name: 'Karşıyaka' },
        { '@type': 'City', name: 'Bornova' },
      ],
      url: 'https://ramsesdigital.com/izmir-seo',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'İzmir SEO', item: 'https://ramsesdigital.com/izmir-seo' },
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

export default function IzmirSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">İzmir — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            İzmir SEO Ajansı
            <br />
            <span className="gradient-text">Organik Trafiğinizi Büyütün</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Konak&apos;tan Karşıyaka&apos;ya, Bornova&apos;dan Urla&apos;ya İzmir&apos;in her ilçesinde yerel SEO. GEO ve AEO ile yapay zeka aramalarında da görünün.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            {ilceler.join(' · ')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz SEO Analizi" variant="primary" />
            <Link href="/hizmetler/seo-kocaeli" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              SEO Hizmet Detayları <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: '30', label: 'İzmir ilçesi — hedeflenebilir' },
            { value: '3-6 Ay', label: 'Organik sıralama için süre' },
            { value: 'Turizm', label: '& ihracat odaklı ekonomi' },
            { value: '0 TL', label: 'Reklam bütçesi — organik' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
              <p className="text-3xl font-bold text-white mb-1">{value}</p>
              <p className="text-zinc-500 text-xs leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">İzmir İçin Kapsamlı SEO</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Ege&apos;nin ticaret ve turizm merkezine uygun, ilçe bazlı farklılaştırılmış strateji.</p>
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
            <h2 className="text-xl font-bold text-white mb-2">Uzaktan Çalışma Kanıtımız</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              İstanbul Barosu&apos;na kayıtlı Av. Mert Anıl Güler için tamamen uzaktan yürüttüğümüz SEO ve web tasarım çalışması,
              fiziksel varlık olmadan da gerçek sonuç aldığımızın kanıtı. Aynı süreç İzmir işletmeleri için de geçerli.
              Canlı görün: <a href="https://mertanilguler.av.tr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">mertanilguler.av.tr</a>
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
          { label: 'İzmir Dijital Pazarlama', href: '/izmir-dijital-pazarlama' },
          { label: 'İzmir Web Tasarım', href: '/izmir-web-tasarim' },
          { label: 'İzmir Google Ads', href: '/izmir-google-ads' },
          { label: 'Ankara SEO', href: '/ankara-seo' },
          { label: 'SEO Ajansı (Türkiye Geneli)', href: '/seo-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp size={40} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">İzmir&apos;de Google&apos;ın Zirvesine Çıkın</h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz SEO analiziyle başlayalım.</p>
          <CalendlyButton label="Ücretsiz SEO Analizi Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
