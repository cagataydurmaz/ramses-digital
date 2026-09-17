import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Search, ArrowRight, CheckCircle2, FileText, Link2, BarChart3, Zap, Award, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gaziantep SEO Ajansı — Ramses Dijital',
  description:
    'Gaziantep\'te SEO hizmeti. Yerel SEO, teknik SEO, GEO ve AEO ile Google\'da üst sıraya çıkın. Şahinbey, Şehitkamil, Nizip ve tüm Gaziantep\'e uzaktan hizmet. Ücretsiz SEO analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/gaziantep-seo' },
  openGraph: {
    title: 'Gaziantep SEO Ajansı | Ramses Dijital',
    description: 'Gaziantep işletmeleri için yerel SEO, teknik SEO ve GEO/AEO optimizasyonu.',
    url: 'https://ramsesdigital.com/gaziantep-seo',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Search, title: 'Gaziantep Yerel SEO', desc: '"Şahinbey + hizmetiniz", "Şehitkamil + hizmetiniz" gibi ilçe bazlı aramalarda Google harita paketine girin. İhracatçı firmalardan gıda üreticilerine ilçe bazlı anahtar kelime stratejisi.' },
  { icon: FileText, title: 'Teknik SEO & Core Web Vitals', desc: 'Site hızı, mobil uyum, indexlenebilirlik ve Core Web Vitals optimizasyonu — Gaziantep\'in ihracat ağırlıklı rekabetinde teknik fark belirleyici.' },
  { icon: Zap, title: 'GEO & AEO', desc: 'ChatGPT, Gemini ve Perplexity\'de "Gaziantep\'te güvenilir X" aramasında önerilmek için entity-based, otorite odaklı içerik.' },
  { icon: Link2, title: 'İhracat Odaklı Backlink İnşası', desc: 'Gaziantep\'in tekstil/halıcılık, gıda sanayii ve plastik/ambalaj sektörlerine özgü ticaret odaları, sektörel medya ve dizinlerden yüksek otoriteli link profili.' },
  { icon: BarChart3, title: 'Sektöre Özel İçerik Stratejisi', desc: 'Tekstil ihracatçınız için B2B içerik, baklava/gıda üreticiniz için ürün odaklı SEO — jenerik değil, sektöre özel mimari.' },
  { icon: Award, title: 'İlçe Bazlı Optimizasyon', desc: 'Şahinbey, Şehitkamil, Nizip, İslahiye, Oğuzeli, Nurdağı — her ilçeye özel sayfa ve GBP stratejisi.' },
]

const ilceler = ['Şahinbey', 'Şehitkamil', 'Nizip', 'İslahiye', 'Oğuzeli', 'Nurdağı', 'Araban', 'Karkamış', 'Yavuzeli']

const faqs = [
  { q: 'Gaziantep\'te SEO neden tekstil ve gıda sektörü için özellikle önemli?', a: 'Gaziantep, Türkiye\'nin en büyük tekstil/halıcılık ihracat merkezlerinden biri ve aynı zamanda baklava/antep fıstığı gibi gıda ürünleriyle küresel tanınırlığa sahip. Bu firmaların büyük çoğunluğu hem B2B ihracat müşterisi hem de yurt içi/yurt dışı B2C talep arıyor. Doğru kurgulanmış SEO, hem "Gaziantep tekstil ihracatçı" gibi B2B aramaları hem "orijinal Antep baklavası" gibi B2C aramaları yakalar.' },
  { q: 'Gaziantep\'in ilçelerinin hepsi için mi çalışma yapılır?', a: 'Hayır, işletmenizin gerçek hizmet alanına göre önceliklendirme yapıyoruz. Bir tekstil üreticisi için Şehitkamil\'deki sanayi bölgesi odaklı strateji mantıklıyken, bir hukuk bürosu için Şahinbey merkezdeki adliyeye yakınlık önemli olabilir. Stratejiyi işinize göre kuruyoruz, şablon uygulamıyoruz.' },
  { q: 'Gaziantep\'te SEO sonuçları ne kadar sürede görülür?', a: 'Google Business Profile ve harita sonuçları 2-4 haftada görünür olabilir. Organik web sitesi sıralamaları rekabetin yoğunluğuna göre 3-6 ay arasında belirginleşir. Gaziantep\'in ihracat ağırlıklı B2B sektörlerinde niş anahtar kelimelerde daha hızlı, genel gıda/turizm terimlerinde daha uzun sürebilir.' },
  { q: 'Gaziantep\'te hangi sektörler SEO\'dan en çok fayda görüyor?', a: 'Tekstil ve halı ihracatçıları, gıda üreticileri (baklava, antep fıstığı, kuruyemiş), plastik/ambalaj sanayii firmaları, hukuk büroları, diş hekimleri ve diş klinikleri, güzellik merkezleri ve estetik klinikleri, gastronomi turizmi işletmeleri (restoran, otel) Gaziantep\'te yüksek arama hacmine sahip alanlar.' },
  { q: 'Gaziantep SEO paketi ne kadara mal olur?', a: 'Kapsam sektöre ve rekabet seviyesine göre değişir: teknik audit, anahtar kelime araştırması, aylık içerik üretimi, GBP yönetimi, backlink stratejisi ve raporlama. Net fiyat bilgisini ücretsiz danışmanlıkta netleştiriyoruz.' },
  { q: 'Fiziksel olarak Gaziantep\'te misiniz?', a: 'Hayır, merkezimiz Kocaeli\'de — Gaziantep\'e tamamen uzaktan hizmet veriyoruz. Keşif görüşmesi, strateji onayı ve raporlama Google Meet/Zoom üzerinden yürütülüyor. Türkiye genelinde canlı, ziyaret edilebilir referanslarımızı portföyümüzde inceleyebilirsiniz.' },
  { q: 'Gaziantep\'teki yerleşik ajanslarla nasıl rekabet edebilirim?', a: 'Yerleşik ajansların çoğu şablon strateji uyguluyor ve ihracat/gıda gibi sektörlere jenerik içerikle yaklaşıyor. Biz her müşteriye sektörüne özel strateji kuran, mühendislik disipliniyle çalışan bir ekibiz — bu da daha hızlı iletişim ve daha isabetli anahtar kelime hedeflemesi anlamına geliyor.' },
  { q: 'GEO (Yapay Zeka Optimizasyonu) Gaziantep işletmesi için neden kritik?', a: 'GEO, ChatGPT ve Gemini gibi araçlarda "Gaziantep\'te güvenilir X önerir misin?" sorusuna cevap olarak çıkmayı hedefliyor. Bu kanal henüz doymamış durumda — özellikle Gaziantep\'in niş B2B sektörlerinde (tekstil ihracatı, gıda üretimi) erken hareket edenler avantajlı.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Gaziantep SEO Hizmeti',
      description: 'Gaziantep ve tüm ilçeleri için yerel SEO, teknik SEO, GEO ve AEO optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'Gaziantep' },
        { '@type': 'City', name: 'Şahinbey' },
        { '@type': 'City', name: 'Şehitkamil' },
        { '@type': 'City', name: 'Nizip' },
      ],
      url: 'https://ramsesdigital.com/gaziantep-seo',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Gaziantep SEO', item: 'https://ramsesdigital.com/gaziantep-seo' },
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

export default function GaziantepSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Gaziantep — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Gaziantep SEO Ajansı
            <br />
            <span className="gradient-text">Organik Trafiğinizi Büyütün</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Şahinbey&apos;den Şehitkamil&apos;e, Nizip&apos;ten İslahiye&apos;ye Gaziantep&apos;in her ilçesinde yerel SEO. Tekstil/halı ihracatı ve gıda sanayii sektörüne özel B2B içerik stratejisi.
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
            { value: '9+', label: 'Gaziantep ilçesi — hedeflenebilir' },
            { value: '3-6 Ay', label: 'Organik sıralama için süre' },
            { value: 'Tekstil & Gıda', label: 'İhracat odaklı B2B' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Gaziantep İçin Kapsamlı SEO</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Tekstil, gıda ve plastik/ambalaj sanayine özel, ilçe bazlı farklılaştırılmış strateji.</p>
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
              Gaziantep&apos;e özel bir vaka çalışmamız henüz yok, ancak Türkiye genelinde ziyaret edilebilir,
              canlı SEO ve web tasarım projelerimiz mevcut. Portföyümüzü inceleyip aynı mühendislik
              disipliniyle Gaziantep işletmeniz için nasıl çalışacağımızı görebilirsiniz.
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
          { label: 'Gaziantep Dijital Pazarlama', href: '/gaziantep-dijital-pazarlama' },
          { label: 'Gaziantep Web Tasarım', href: '/gaziantep-web-tasarim' },
          { label: 'Gaziantep Google Ads', href: '/gaziantep-google-ads' },
          { label: 'Gaziantep Reklam Ajansı', href: '/gaziantep-reklam-ajansi' },
          { label: 'Gaziantep Yazılım Ajansı', href: '/gaziantep-yazilim-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp size={40} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Gaziantep&apos;te Google&apos;ın Zirvesine Çıkın</h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz SEO analiziyle başlayalım.</p>
          <CalendlyButton label="Ücretsiz SEO Analizi Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
