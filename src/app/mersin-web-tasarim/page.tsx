import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, ArrowRight, CheckCircle2, Zap, Smartphone, Search, ShieldCheck, BarChart3, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mersin Web Tasarım Ajansı — Ramses Dijital',
  description:
    'Mersin\'de profesyonel web tasarım hizmeti. Yenişehir, Akdeniz, Toroslar ve tüm Mersin ilçeleri için SEO uyumlu, mobil öncelikli kurumsal web siteleri. Ücretsiz teklif alın.',
  alternates: { canonical: 'https://ramsesdigital.com/mersin-web-tasarim' },
  openGraph: {
    title: 'Mersin Web Tasarım | Ramses Dijital',
    description: 'Mersin işletmeleri için dönüşüm odaklı, SEO hazır web siteleri.',
    url: 'https://ramsesdigital.com/mersin-web-tasarim',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Smartphone, title: 'Mobil Öncelikli', desc: 'Mobil trafik ağırlıklı bugünün pazarında responsive ve hızlı yüklenen bir tasarım artık zorunluluk.' },
  { icon: Search, title: 'SEO Hazır Altyapı', desc: 'Next.js ile oluşturulan siteler Mersin\'in yerel SEO ortamına hazır başlar. Schema markup, canonical, sitemap otomatik.' },
  { icon: Zap, title: 'Yüksek Performans', desc: 'Lighthouse 90+ puan. Mersin\'deki rakiplerinizden hızlı yüklenin — Google bu metriği sıralamada kullanıyor.' },
  { icon: Palette, title: 'Sektöre Özel Tasarım', desc: 'Lojistik/nakliye firmaları için kurumsal/kurumsal-güven odaklı; narenciye ihracatçıları için çok dilli ürün kataloğu odaklı tasarım.' },
  { icon: BarChart3, title: 'Dönüşüm Odaklı', desc: 'WhatsApp butonu, randevu formu ve Google Maps entegrasyonuyla müşteri sizi kolayca bulsun.' },
  { icon: ShieldCheck, title: 'Güvenli & Bakımlı', desc: 'SSL, güvenlik güncellemeleri, yedekleme ve teknik destek. Rekabetçi Mersin pazarında müşteri kaçırmayın.' },
]

const ilceler = ['Yenişehir', 'Akdeniz', 'Toroslar', 'Mezitli', 'Tarsus', 'Erdemli', 'Silifke', 'Anamur']

const faqs = [
  { q: 'Mersin\'de web sitesi yaptırmak ne kadar sürer?', a: 'Başlangıç kurumsal siteler 2-3 haftada teslim edilir. Orta ölçekli projeler 4-6 hafta, çok dilli/katalog ağırlıklı projeler (örn. narenciye ihracatçıları için) 6-10 hafta alır. Rekabetçi Mersin pazarında hızlı lansmanı öneriyoruz.' },
  { q: 'Mersin işletmem için web sitesinde yerel SEO nasıl kurulur?', a: 'İlçe bazlı anahtar kelimeler, Google Business Profile entegrasyonu, NAP (isim-adres-telefon) tutarlılığı, yerel schema markup ve "Yenişehir\'de X hizmeti" gibi sayfalar oluşturmak temel adımlardır. Mersin\'in ilçeleri arasından işinize en uygun olanlara öncelik veriyoruz.' },
  { q: 'Lojistik firmaları ve narenciye ihracatçıları için web sitesi farklı mı?', a: 'Evet. Lojistik firmaları için hizmet ağı haritası, filo/kapasite bilgisi ve B2B teklif formu ön planda olmalı. Narenciye ihracatçıları için çok dilli ürün kataloğu, sertifika bilgisi ve toptan/ihracat ayrımı kritik. Genel bir kurumsal şablon yerine sektöre özel bilgi mimarisi kuruyoruz.' },
  { q: 'Mevcut sitem var, yenileme mi yoksa sıfırdan mı yapmalıyım?', a: 'Mevcut sitenizin Google\'daki birikimi (backlink, sıralama) varsa taşıma yaparız — SEO değeri korunur. Yavaş, eski altyapılı veya mobil uyumsuz siteler için sıfırdan Next.js geçişi daha etkili. Ücretsiz danışmanlıkta sitenizi inceleyip öneri sunarız.' },
  { q: 'Mersin\'de web sitesi fiyatları ne kadar?', a: 'Sayfa sayısı, özel özellikler (katalog, çoklu dil, B2B form) ve sektöre göre kapsam değişir. Domain ve hosting ayrıca ücretlendirilir. Net fiyatı ücretsiz danışmanlıkta netleştiriyoruz.' },
  { q: 'Fiziksel olarak Mersin\'de ofisiniz var mı?', a: 'Hayır, merkezimiz Kocaeli\'de — Mersin\'e tamamen uzaktan hizmet veriyoruz. Keşif görüşmesi, tasarım onayı ve teslimat Google Meet/Zoom üzerinden yapılır. Türkiye genelinde canlı referanslarımızı portföyümüzde inceleyebilirsiniz.' },
  { q: 'Web sitem yapıldıktan sonra kim günceller?', a: 'İçerik güncellemeleri için basit panel kuruyoruz. Blog, ürün ve haber güncellemelerini kendiniz yapabilirsiniz. Tasarım ve teknik değişiklikler için aylık bakım paketi sunuyoruz. Projeyi teslim edip kaybolan bir ajans değiliz.' },
  { q: 'Mersin\'deki yerleşik ajanslara kıyasla neden sizi tercih etmeliyim?', a: 'Yerleşik ajanslarda küçük/orta ölçekli projeler genellikle düşük öncelik alır, iletişim yavaşlar. Biz her projeye mühendislik disipliniyle, doğrudan kurucu ortak seviyesinde ilgi gösteriyoruz — daha hızlı iletişim, daha esnek süreç, aynı kalite.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Mersin Web Tasarım Hizmeti',
      description: 'Mersin\'in tüm ilçeleri için profesyonel, SEO uyumlu ve dönüşüm odaklı web sitesi tasarım ve geliştirme.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: ilceler.map((name) => ({ '@type': 'City', name })),
      url: 'https://ramsesdigital.com/mersin-web-tasarim',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Mersin Web Tasarım', item: 'https://ramsesdigital.com/mersin-web-tasarim' },
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

export default function MersinWebTasarimPage() {
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
            Mersin Web Tasarım
            <br />
            <span className="gradient-text">Hızlı, Modern, SEO Hazır</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Mersin işletmeniz için hızlı, mobil uyumlu ve yerel SEO hazır web siteleri. Yenişehir&apos;den Tarsus&apos;a tüm ilçelere uzaktan hizmet.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mersin İşletmeniz İçin Neden Biz?</h2>
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
              Mersin&apos;e özel bir vaka çalışmamız henüz yok, ancak Türkiye genelinde canlı, ziyaret
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
          { label: 'Mersin Dijital Pazarlama', href: '/mersin-dijital-pazarlama' },
          { label: 'Mersin SEO', href: '/mersin-seo' },
          { label: 'Mersin Google Ads', href: '/mersin-google-ads' },
          { label: 'Mersin Yazılım Ajansı', href: '/mersin-yazilim-ajansi' },
          { label: 'Web Tasarım Ajansı (Türkiye Geneli)', href: '/web-tasarim-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Mersin&apos;de Web Siteniz Hazır Olsun</h2>
          <p className="text-zinc-400 text-lg mb-8">30 dakikalık ücretsiz görüşmede ihtiyaçlarınızı netleştirelim.</p>
          <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
