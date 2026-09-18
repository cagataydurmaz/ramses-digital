import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Search, ArrowRight, CheckCircle2, FileText, Link2, BarChart3, Zap, Award, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Konya SEO Ajansı — Ramses Dijital',
  description:
    'Konya\'da SEO hizmeti. Yerel SEO, teknik SEO, GEO ve AEO ile Google\'da üst sıraya çıkın. Selçuklu, Meram, Karatay ve tüm Konya\'ya uzaktan hizmet. Ücretsiz SEO analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/konya-seo' },
  openGraph: {
    title: 'Konya SEO Ajansı | Ramses Dijital',
    description: 'Konya işletmeleri için yerel SEO, teknik SEO ve GEO/AEO optimizasyonu.',
    url: 'https://ramsesdigital.com/konya-seo',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Search, title: 'Konya Yerel SEO', desc: '"Selçuklu + hizmetiniz", "Meram + hizmetiniz" gibi ilçe bazlı aramalarda Google harita paketine girin. Tarım makineleri üreticisinden dini turizm işletmesine ilçe bazlı anahtar kelime stratejisi.' },
  { icon: FileText, title: 'Teknik SEO & Core Web Vitals', desc: 'Site hızı, mobil uyum, indexlenebilirlik ve Core Web Vitals optimizasyonu — Konya\'nın sanayi ve turizm sektöründeki rekabette teknik fark belirleyici.' },
  { icon: Zap, title: 'GEO & AEO', desc: 'ChatGPT, Gemini ve Perplexity\'de "Konya\'da güvenilir X" aramasında önerilmek için entity-based, otorite odaklı içerik.' },
  { icon: Link2, title: 'Sanayi Odaklı Backlink İnşası', desc: 'Konya\'nın tarım makineleri, gıda/tahıl işleme ve otomotiv yan sanayi sektörlerine özgü ticaret odaları, sektörel medya ve dizinlerden yüksek otoriteli link profili.' },
  { icon: BarChart3, title: 'Sektöre Özel İçerik Stratejisi', desc: 'Tarım makineleri üreticiniz için B2B içerik, Mevlana turizmi işletmeniz için ziyaretçi odaklı SEO — jenerik değil, sektöre özel mimari.' },
  { icon: Award, title: 'İlçe Bazlı Optimizasyon', desc: 'Selçuklu, Meram, Karatay, Ereğli, Akşehir, Beyşehir, Çumra — her ilçeye özel sayfa ve GBP stratejisi.' },
]

const ilceler = ['Selçuklu', 'Meram', 'Karatay', 'Ereğli', 'Akşehir', 'Beyşehir', 'Çumra', 'Seydişehir', 'Ilgın']

const faqs = [
  { q: 'Konya\'da SEO neden tarım makineleri sektörü için özellikle önemli?', a: 'Konya, Türkiye\'nin en büyük tarım makineleri üretim merkezi ve aynı zamanda geniş tahıl/gıda sanayii üssü. Bu firmaların büyük çoğunluğu B2B arama yapıyor — tedarikçi, yedek parça üreticisi, bayi arıyor. Doğru kurgulanmış SEO, bu spesifik arama hacmini yakalar, aynı zamanda Mevlana dini turizmi işletmeleri için de ziyaretçi odaklı organik trafik sağlar.' },
  { q: 'Konya\'nın büyük ilçelerinin hepsi için mi çalışma yapılır?', a: 'Hayır, işletmenizin gerçek hizmet alanına göre önceliklendirme yapıyoruz. Bir tarım makineleri üreticisi için sanayi bölgelerine yakın ilçeler mantıklıyken, dini turizm işletmesi için Selçuklu merkez (Mevlana Müzesi çevresi) önemli olabilir. Stratejiyi işinize göre kuruyoruz, şablon uygulamıyoruz.' },
  { q: 'Konya\'da SEO sonuçları ne kadar sürede görülür?', a: 'Google Business Profile ve harita sonuçları 2-4 haftada görünür olabilir. Organik web sitesi sıralamaları rekabetin yoğunluğuna göre 3-6 ay arasında belirginleşir. Konya\'nın sanayi/B2B ağırlıklı sektörlerinde niş anahtar kelimelerde daha hızlı, turizm gibi genel terimlerde daha uzun sürebilir.' },
  { q: 'Konya\'da hangi sektörler SEO\'dan en çok fayda görüyor?', a: 'Tarım makineleri üreticileri, gıda/tahıl işleme firmaları, otomotiv yan sanayi, dini turizm işletmeleri (otel, tur operatörü, restoran), hukuk büroları, diş hekimleri ve diş klinikleri, eğitim kurumları Konya\'da yüksek arama hacmine sahip alanlar.' },
  { q: 'Konya SEO paketi ne kadara mal olur?', a: 'Kapsam sektöre ve rekabet seviyesine göre değişir: teknik audit, anahtar kelime araştırması, aylık içerik üretimi, GBP yönetimi, backlink stratejisi ve raporlama. Net fiyat bilgisini ücretsiz danışmanlıkta netleştiriyoruz.' },
  { q: 'Fiziksel olarak Konya\'da mısınız?', a: 'Hayır, merkezimiz Kocaeli\'de — Konya\'ya tamamen uzaktan hizmet veriyoruz. Keşif görüşmesi, strateji onayı ve raporlama Google Meet/Zoom üzerinden yürütülüyor. Türkiye genelinde canlı, ziyaret edilebilir referanslarımızı portföyümüzde inceleyebilirsiniz.' },
  { q: 'Konya\'daki yerleşik ajanslarla nasıl rekabet edebilirim?', a: 'Yerleşik ajansların çoğu şablon strateji uyguluyor ve tarım makineleri/turizm gibi sektörlere jenerik içerikle yaklaşıyor. Biz her müşteriye sektörüne özel strateji kuran, mühendislik disipliniyle çalışan bir ekibiz — bu da daha hızlı iletişim ve daha isabetli anahtar kelime hedeflemesi anlamına geliyor.' },
  { q: 'GEO (Yapay Zeka Optimizasyonu) Konya işletmesi için neden kritik?', a: 'GEO, ChatGPT ve Gemini gibi araçlarda "Konya\'da güvenilir X önerir misin?" sorusuna cevap olarak çıkmayı hedefliyor. Bu kanal henüz doymamış durumda — özellikle Konya\'nın niş B2B sektörlerinde (tarım makineleri, gıda işleme) erken hareket edenler avantajlı.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Konya SEO Hizmeti',
      description: 'Konya ve tüm ilçeleri için yerel SEO, teknik SEO, GEO ve AEO optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'Konya' },
        { '@type': 'City', name: 'Selçuklu' },
        { '@type': 'City', name: 'Meram' },
        { '@type': 'City', name: 'Karatay' },
      ],
      url: 'https://ramsesdigital.com/konya-seo',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Konya SEO', item: 'https://ramsesdigital.com/konya-seo' },
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

export default function KonyaSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Konya — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Konya SEO Ajansı
            <br />
            <span className="gradient-text">Organik Trafiğinizi Büyütün</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Selçuklu&apos;dan Meram&apos;a, Ereğli&apos;den Akşehir&apos;e Konya&apos;nın her ilçesinde yerel SEO. Tarım makineleri üretimi ve dini turizm sektörüne özel içerik stratejisi.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            {ilceler.join(' · ')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz SEO Analizi" variant="primary" />
            <Link href="/hizmetler/seo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              SEO Hizmet Detayları <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: '9+', label: 'Konya ilçesi — hedeflenebilir' },
            { value: '3-6 Ay', label: 'Organik sıralama için süre' },
            { value: 'Tarım Makinesi', label: 'B2B üretim odağı' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Konya İçin Kapsamlı SEO</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Tarım makineleri, gıda/tahıl sanayii ve dini turizme özel, ilçe bazlı farklılaştırılmış strateji.</p>
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
              Konya&apos;ya özel bir vaka çalışmamız henüz yok, ancak Türkiye genelinde ziyaret edilebilir,
              canlı SEO ve web tasarım projelerimiz mevcut. Portföyümüzü inceleyip aynı mühendislik
              disipliniyle Konya işletmeniz için nasıl çalışacağımızı görebilirsiniz.
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
          { label: 'Konya Dijital Pazarlama', href: '/konya-dijital-pazarlama' },
          { label: 'Konya Web Tasarım', href: '/konya-web-tasarim' },
          { label: 'Konya Google Ads', href: '/konya-google-ads' },
          { label: 'Konya Reklam Ajansı', href: '/konya-reklam-ajansi' },
          { label: 'Konya Yazılım Ajansı', href: '/konya-yazilim-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp size={40} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Konya&apos;da Google&apos;ın Zirvesine Çıkın</h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz SEO analiziyle başlayalım.</p>
          <CalendlyButton label="Ücretsiz SEO Analizi Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
