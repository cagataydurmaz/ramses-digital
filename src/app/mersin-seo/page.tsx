import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Search, ArrowRight, CheckCircle2, FileText, Link2, BarChart3, Zap, Award, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mersin SEO Ajansı — Ramses Dijital',
  description:
    'Mersin\'de SEO hizmeti. Yerel SEO, teknik SEO, GEO ve AEO ile Google\'da üst sıraya çıkın. Yenişehir, Akdeniz, Toroslar ve tüm Mersin\'e uzaktan hizmet. Ücretsiz SEO analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/mersin-seo' },
  openGraph: {
    title: 'Mersin SEO Ajansı | Ramses Dijital',
    description: 'Mersin işletmeleri için yerel SEO, teknik SEO ve GEO/AEO optimizasyonu.',
    url: 'https://ramsesdigital.com/mersin-seo',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Search, title: 'Mersin Yerel SEO', desc: '"Yenişehir + hizmetiniz", "Akdeniz + hizmetiniz" gibi ilçe bazlı aramalarda Google harita paketine girin. Lojistik firmalarından narenciye ihracatçılarına ilçe bazlı anahtar kelime stratejisi.' },
  { icon: FileText, title: 'Teknik SEO & Core Web Vitals', desc: 'Site hızı, mobil uyum, indexlenebilirlik ve Core Web Vitals optimizasyonu — Mersin\'in liman ve lojistik ağırlıklı rekabetinde teknik fark belirleyici.' },
  { icon: Zap, title: 'GEO & AEO', desc: 'ChatGPT, Gemini ve Perplexity\'de "Mersin\'de güvenilir X" aramasında önerilmek için entity-based, otorite odaklı içerik.' },
  { icon: Link2, title: 'Lojistik & İhracat Odaklı Backlink İnşası', desc: 'Mersin\'in liman/lojistik ve narenciye ihracatı sektörlerine özgü ticaret odaları, sektörel medya ve dizinlerden yüksek otoriteli link profili.' },
  { icon: BarChart3, title: 'Sektöre Özel İçerik Stratejisi', desc: 'Lojistik/nakliye firmanız için B2B içerik, narenciye ihracatçınız için ürün odaklı SEO — jenerik değil, sektöre özel mimari.' },
  { icon: Award, title: 'İlçe Bazlı Optimizasyon', desc: 'Yenişehir, Akdeniz, Toroslar, Mezitli, Tarsus, Erdemli, Silifke — her ilçeye özel sayfa ve GBP stratejisi.' },
]

const ilceler = ['Yenişehir', 'Akdeniz', 'Toroslar', 'Mezitli', 'Tarsus', 'Erdemli', 'Silifke', 'Anamur', 'Mut']

const faqs = [
  { q: 'Mersin\'de SEO neden lojistik ve narenciye sektörü için özellikle önemli?', a: 'Mersin, Türkiye\'nin en büyük konteyner limanına ve geniş bir serbest bölgeye sahip; aynı zamanda narenciye (limon, portakal) üretim ve ihracatında öncü. Bu firmaların büyük çoğunluğu B2B arama yapıyor — nakliye, gümrükleme, ihracat ortağı arıyor. Doğru kurgulanmış SEO, bu spesifik arama hacmini yakalar.' },
  { q: 'Mersin\'in ilçelerinin hepsi için mi çalışma yapılır?', a: 'Hayır, işletmenizin gerçek hizmet alanına göre önceliklendirme yapıyoruz. Bir lojistik firması için Akdeniz ilçesindeki liman bölgesi odaklı strateji mantıklıyken, bir narenciye üreticisi için Erdemli/Silifke çevresi önemli olabilir. Stratejiyi işinize göre kuruyoruz, şablon uygulamıyoruz.' },
  { q: 'Mersin\'de SEO sonuçları ne kadar sürede görülür?', a: 'Google Business Profile ve harita sonuçları 2-4 haftada görünür olabilir. Organik web sitesi sıralamaları rekabetin yoğunluğuna göre 3-6 ay arasında belirginleşir. Mersin\'in lojistik/ihracat ağırlıklı sektörlerinde niş anahtar kelimelerde daha hızlı, turizm gibi genel terimlerde daha uzun sürebilir.' },
  { q: 'Mersin\'de hangi sektörler SEO\'dan en çok fayda görüyor?', a: 'Lojistik ve nakliye firmaları, narenciye/tarım ihracatçıları, gümrük müşavirlik firmaları, sahil turizmi işletmeleri (otel, restoran), hukuk büroları, diş hekimleri ve diş klinikleri Mersin\'de yüksek arama hacmine sahip alanlar.' },
  { q: 'Mersin SEO paketi ne kadara mal olur?', a: 'Kapsam sektöre ve rekabet seviyesine göre değişir: teknik audit, anahtar kelime araştırması, aylık içerik üretimi, GBP yönetimi, backlink stratejisi ve raporlama. Net fiyat bilgisini ücretsiz danışmanlıkta netleştiriyoruz.' },
  { q: 'Fiziksel olarak Mersin\'de misiniz?', a: 'Hayır, merkezimiz Kocaeli\'de — Mersin\'e tamamen uzaktan hizmet veriyoruz. Keşif görüşmesi, strateji onayı ve raporlama Google Meet/Zoom üzerinden yürütülüyor. Türkiye genelinde canlı, ziyaret edilebilir referanslarımızı portföyümüzde inceleyebilirsiniz.' },
  { q: 'Mersin\'deki yerleşik ajanslarla nasıl rekabet edebilirim?', a: 'Yerleşik ajansların çoğu şablon strateji uyguluyor ve lojistik/ihracat gibi sektörlere jenerik içerikle yaklaşıyor. Biz her müşteriye sektörüne özel strateji kuran, mühendislik disipliniyle çalışan bir ekibiz — bu da daha hızlı iletişim ve daha isabetli anahtar kelime hedeflemesi anlamına geliyor.' },
  { q: 'GEO (Yapay Zeka Optimizasyonu) Mersin işletmesi için neden kritik?', a: 'GEO, ChatGPT ve Gemini gibi araçlarda "Mersin\'de güvenilir X önerir misin?" sorusuna cevap olarak çıkmayı hedefliyor. Bu kanal henüz doymamış durumda — özellikle Mersin\'in niş B2B sektörlerinde (lojistik, ihracat) erken hareket edenler avantajlı.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Mersin SEO Hizmeti',
      description: 'Mersin ve tüm ilçeleri için yerel SEO, teknik SEO, GEO ve AEO optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'Mersin' },
        { '@type': 'City', name: 'Yenişehir' },
        { '@type': 'City', name: 'Akdeniz' },
        { '@type': 'City', name: 'Toroslar' },
      ],
      url: 'https://ramsesdigital.com/mersin-seo',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Mersin SEO', item: 'https://ramsesdigital.com/mersin-seo' },
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

export default function MersinSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Mersin — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Mersin SEO Ajansı
            <br />
            <span className="gradient-text">Organik Trafiğinizi Büyütün</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Yenişehir&apos;den Akdeniz&apos;e, Tarsus&apos;tan Silifke&apos;ye Mersin&apos;in her ilçesinde yerel SEO. Liman/lojistik ve narenciye ihracatı sektörüne özel B2B içerik stratejisi.
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
            { value: '9+', label: 'Mersin ilçesi — hedeflenebilir' },
            { value: '3-6 Ay', label: 'Organik sıralama için süre' },
            { value: 'Liman & Lojistik', label: 'İhracat odaklı B2B' },
            { value: 'Organik', label: 'Reklam bütçesi gerektirmez' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mersin İçin Kapsamlı SEO</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Liman/lojistik, narenciye ihracatı ve sahil turizmine özel, ilçe bazlı farklılaştırılmış strateji.</p>
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
            <h2 className="text-xl font-bold text-white mb-2">Türkiye Genelinde Canlı Referanslarımız Var</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Mersin&apos;e özel bir vaka çalışmamız henüz yok, ancak Türkiye genelinde ziyaret edilebilir,
              canlı SEO ve web tasarım projelerimiz mevcut. Portföyümüzü inceleyip aynı mühendislik
              disipliniyle Mersin işletmeniz için nasıl çalışacağımızı görebilirsiniz.
            </p>
            <Link href="/portfolyo" className="text-blue-400 text-sm font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all">
              Portföyü İncele <ArrowRight size={13} />
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

      <ReviewsMarquee />

      <RelatedPages
        pages={[
          { label: 'Mersin Dijital Pazarlama', href: '/mersin-dijital-pazarlama' },
          { label: 'Mersin Web Tasarım', href: '/mersin-web-tasarim' },
          { label: 'Mersin Google Ads', href: '/mersin-google-ads' },
          { label: 'Mersin Reklam Ajansı', href: '/mersin-reklam-ajansi' },
          { label: 'Mersin Yazılım Ajansı', href: '/mersin-yazilim-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp size={40} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Mersin&apos;de Google&apos;ın Zirvesine Çıkın</h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz SEO analiziyle başlayalım.</p>
          <CalendlyButton label="Ücretsiz SEO Analizi Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
