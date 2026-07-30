import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, ArrowRight, CheckCircle2, Zap, Smartphone, Search, ShieldCheck, BarChart3, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bursa Web Tasarım Ajansı — Ramses Dijital',
  description:
    'Bursa\'da profesyonel web tasarım hizmeti. Osmangazi, Nilüfer, Yıldırım, İnegöl ve tüm Bursa ilçeleri için SEO uyumlu, mobil öncelikli kurumsal web siteleri. Ücretsiz teklif alın.',
  alternates: { canonical: 'https://ramsesdigital.com/bursa-web-tasarim' },
  openGraph: {
    title: 'Bursa Web Tasarım | Ramses Dijital',
    description: 'Bursa işletmeleri için dönüşüm odaklı, SEO hazır web siteleri.',
    url: 'https://ramsesdigital.com/bursa-web-tasarim',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Smartphone, title: 'Mobil Öncelikli', desc: 'Bursa\'daki kullanıcıların büyük çoğunluğu mobil cihazdan geliyor. Tam responsive, hızlı ve parmak dostu tasarım.' },
  { icon: Search, title: 'SEO Hazır Altyapı', desc: 'Next.js ile oluşturulan siteler Bursa\'nın yerel SEO ortamına hazır başlar. Schema markup, canonical, sitemap otomatik.' },
  { icon: Zap, title: 'Yüksek Performans', desc: 'Lighthouse 90+ puan. Bursa\'daki rakiplerinizden hızlı yüklenin — Google bu metriği sıralamada kullanıyor.' },
  { icon: Palette, title: 'Sektöre Özel Tasarım', desc: 'Otomotiv yan sanayi ve mobilya üreticileri için kurumsal/katalog odaklı; klinik ve hukuk büroları için güven veren, sade tasarım.' },
  { icon: BarChart3, title: 'Dönüşüm Odaklı', desc: 'Randevu formu, WhatsApp butonu, Google Maps entegrasyonu — Bursa müşterisi kolayca ulaşsın.' },
  { icon: ShieldCheck, title: 'Güvenli & Bakımlı', desc: 'SSL, güvenlik güncellemeleri, yedekleme ve teknik destek. Rekabetçi Bursa pazarında müşteri kaçırmayın.' },
]

const ilceler = ['Osmangazi', 'Nilüfer', 'Yıldırım', 'Gemlik', 'İnegöl', 'Mudanya', 'Gürsu', 'Kestel']

const faqs = [
  { q: 'Bursa\'da web sitesi yaptırmak ne kadar sürer?', a: 'Başlangıç kurumsal siteler 2-3 haftada teslim edilir. Orta ölçekli projeler 4-6 hafta, e-ticaret ve katalog ağırlıklı projeler (örn. mobilya üreticileri için) 6-10 hafta alır. Rekabetçi Bursa pazarında hızlı lansmanı öneriyoruz.' },
  { q: 'Bursa işletmem için web sitesinde yerel SEO nasıl kurulur?', a: 'İlçe bazlı anahtar kelimeler, Google Business Profile entegrasyonu, NAP (isim-adres-telefon) tutarlılığı, yerel schema markup ve "Nilüfer\'de X hizmeti" gibi sayfalar oluşturmak temel adımlardır. Bursa\'nın 10\'dan fazla ilçesi arasından işinize en uygun olanlara öncelik veriyoruz.' },
  { q: 'Otomotiv yan sanayi ve mobilya üreticileri için web sitesi farklı mı?', a: 'Evet. Otomotiv yan sanayi firmaları için teknik yeterlilik belgeleri, üretim kapasitesi ve B2B iletişim formu ön planda olmalı. İnegöl mobilya üreticileri için ürün kataloğu, galeri ve toptan/perakende ayrımı kritik. Genel bir kurumsal şablon yerine sektöre özel bilgi mimarisi kuruyoruz.' },
  { q: 'Mevcut sitem var, yenileme mi yoksa sıfırdan mı yapmalıyım?', a: 'Mevcut sitenizin Google\'daki birikimi (backlink, sıralama) varsa taşıma yaparız — SEO değeri korunur. Yavaş, eski altyapılı veya mobil uyumsuz siteler için sıfırdan Next.js geçişi daha etkili. Ücretsiz danışmanlıkta sitenizi inceleyip öneri sunarız.' },
  { q: 'Bursa\'da web sitesi fiyatları ne kadar?', a: 'Sayfa sayısı, özel özellikler (katalog, çoklu dil, B2B form) ve sektöre göre kapsam değişir. Domain ve hosting ayrıca ücretlendirilir. Net fiyatı ücretsiz danışmanlıkta netleştiriyoruz.' },
  { q: 'Fiziksel olarak Bursa\'da ofisiniz var mı?', a: 'Hayır, merkezimiz Kocaeli\'de — Bursa\'ya tamamen uzaktan hizmet veriyoruz. Keşif görüşmesi, tasarım onayı ve teslimat Google Meet/Zoom üzerinden yapılır. Türkiye genelinde canlı referanslarımızı portföyümüzde inceleyebilirsiniz.' },
  { q: 'Web sitem yapıldıktan sonra kim günceller?', a: 'İçerik güncellemeleri için basit panel kuruyoruz. Blog, ürün ve haber güncellemelerini kendiniz yapabilirsiniz. Tasarım ve teknik değişiklikler için aylık bakım paketi sunuyoruz. Projeyi teslim edip kaybolan bir ajans değiliz.' },
  { q: 'Bursa\'daki yerleşik ajanslara kıyasla neden sizi tercih etmeliyim?', a: 'Yerleşik ajanslarda küçük/orta ölçekli projeler genellikle düşük öncelik alır, iletişim yavaşlar. Biz her projeye mühendislik disipliniyle, doğrudan kurucu ortak seviyesinde ilgi gösteriyoruz — daha hızlı iletişim, daha esnek süreç, aynı kalite.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Bursa Web Tasarım Hizmeti',
      description: 'Bursa\'nın tüm ilçeleri için profesyonel, SEO uyumlu ve dönüşüm odaklı web sitesi tasarım ve geliştirme.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: ilceler.map((name) => ({ '@type': 'City', name })),
      url: 'https://ramsesdigital.com/bursa-web-tasarim',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Bursa Web Tasarım', item: 'https://ramsesdigital.com/bursa-web-tasarim' },
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

export default function BursaWebTasarimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Bursa — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Bursa Web Tasarım
            <br />
            <span className="gradient-text">Hızlı, Modern, SEO Hazır</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Bursa işletmeniz için hızlı, mobil uyumlu ve yerel SEO hazır web siteleri. Osmangazi&apos;den İnegöl&apos;e tüm ilçelere uzaktan hizmet.
          </p>
          <p className="text-zinc-500 text-sm mb-10">{ilceler.join(' · ')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
            <Link href="/portfolyo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Örnek Çalışmalar <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bursa İşletmeniz İçin Neden Biz?</h2>
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
            <CheckCircle2 size={24} className="text-blue-400 mb-3" />
            <h2 className="text-xl font-bold text-white mb-2">Portföyümüzü İnceleyin</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Bursa&apos;ya özel bir vaka çalışmamız henüz yok, ancak Türkiye genelinde canlı, ziyaret
              edilebilir web tasarım referanslarımız var. Hukuk bürosu, e-ticaret ve platform
              projelerimizi portföyden inceleyebilirsiniz.
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

      <ReviewsMarquee />

      <RelatedPages
        pages={[
          { label: 'Bursa Dijital Pazarlama', href: '/bursa-dijital-pazarlama' },
          { label: 'Bursa SEO', href: '/bursa-seo' },
          { label: 'Bursa Google Ads', href: '/bursa-google-ads' },
          { label: 'Bursa Yazılım Ajansı', href: '/bursa-yazilim-ajansi' },
          { label: 'Web Tasarım Ajansı (Türkiye Geneli)', href: '/web-tasarim-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Bursa&apos;da Web Siteniz Hazır Olsun</h2>
          <p className="text-zinc-400 text-lg mb-8">30 dakikalık ücretsiz görüşmede ihtiyaçlarınızı netleştirelim.</p>
          <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
