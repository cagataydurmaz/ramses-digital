import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, ArrowRight, CheckCircle2, Zap, Smartphone, Search, ShieldCheck, BarChart3, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Eskişehir Web Tasarım Ajansı — Ramses Dijital',
  description:
    'Eskişehir\'de profesyonel web tasarım hizmeti. Odunpazarı, Tepebaşı ve tüm Eskişehir ilçeleri için SEO uyumlu, mobil öncelikli kurumsal web siteleri. Ücretsiz teklif alın.',
  alternates: { canonical: 'https://ramsesdigital.com/eskisehir-web-tasarim' },
  openGraph: {
    title: 'Eskişehir Web Tasarım | Ramses Dijital',
    description: 'Eskişehir işletmeleri için dönüşüm odaklı, SEO hazır web siteleri.',
    url: 'https://ramsesdigital.com/eskisehir-web-tasarim',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Smartphone, title: 'Mobil Öncelikli', desc: 'Eskişehir\'in öğrenci ağırlıklı nüfusu neredeyse tamamen mobilden geziniyor — responsive ve hızlı yüklenen bir tasarım artık zorunluluk.' },
  { icon: Search, title: 'SEO Hazır Altyapı', desc: 'Next.js ile oluşturulan siteler Eskişehir\'in yerel SEO ortamına hazır başlar. Schema markup, canonical, sitemap otomatik.' },
  { icon: Zap, title: 'Yüksek Performans', desc: 'Lighthouse 90+ puan. Eskişehir\'deki rakiplerinizden hızlı yüklenin — Google bu metriği sıralamada kullanıyor.' },
  { icon: Palette, title: 'Sektöre Özel Tasarım', desc: 'Öğrenciye hitap eden işletmeler için genç, dinamik tasarım; sanayi/kurumsal firmalar için güven veren, sade tasarım.' },
  { icon: BarChart3, title: 'Dönüşüm Odaklı', desc: 'WhatsApp butonu, randevu formu ve Google Maps entegrasyonuyla müşteri sizi kolayca bulsun.' },
  { icon: ShieldCheck, title: 'Güvenli & Bakımlı', desc: 'SSL, güvenlik güncellemeleri, yedekleme ve teknik destek. Rekabetçi Eskişehir pazarında müşteri kaçırmayın.' },
]

const ilceler = ['Odunpazarı', 'Tepebaşı', 'Sivrihisar', 'Mihalıççık', 'Çifteler', 'Sarıcakaya', 'Alpu']

const faqs = [
  { q: 'Eskişehir\'de web sitesi yaptırmak ne kadar sürer?', a: 'Başlangıç kurumsal siteler 2-3 haftada teslim edilir. Orta ölçekli projeler 4-6 hafta, özel özellikli (rezervasyon sistemi, e-ticaret) projeler 6-10 hafta alır. Rekabetçi Eskişehir pazarında hızlı lansmanı öneriyoruz.' },
  { q: 'Eskişehir işletmem için web sitesinde yerel SEO nasıl kurulur?', a: 'İlçe bazlı anahtar kelimeler, Google Business Profile entegrasyonu, NAP (isim-adres-telefon) tutarlılığı, yerel schema markup ve "Odunpazarı\'nda X hizmeti" gibi sayfalar oluşturmak temel adımlardır. Eskişehir\'in ilçeleri arasından işinize en uygun olanlara öncelik veriyoruz.' },
  { q: 'Öğrenciye hitap eden işletmeler ve sanayi firmaları için web sitesi farklı mı?', a: 'Evet. Öğrenciye hitap eden işletmeler (kafe, kırtasiye, kurs merkezi) için hızlı yüklenen, mobil-öncelikli, sosyal medya entegre bir tasarım gerekir. Sanayi/kurumsal firmalar için teknik özellik tabloları ve B2B iletişim formu ön planda olmalı. Genel bir kurumsal şablon yerine sektöre özel bilgi mimarisi kuruyoruz.' },
  { q: 'Mevcut sitem var, yenileme mi yoksa sıfırdan mı yapmalıyım?', a: 'Mevcut sitenizin Google\'daki birikimi (backlink, sıralama) varsa taşıma yaparız — SEO değeri korunur. Yavaş, eski altyapılı veya mobil uyumsuz siteler için sıfırdan Next.js geçişi daha etkili. Ücretsiz danışmanlıkta sitenizi inceleyip öneri sunarız.' },
  { q: 'Eskişehir\'de web sitesi fiyatları ne kadar?', a: 'Sayfa sayısı, özel özellikler (rezervasyon, e-ticaret, çoklu dil) ve sektöre göre kapsam değişir. Domain ve hosting ayrıca ücretlendirilir. Net fiyatı ücretsiz danışmanlıkta netleştiriyoruz.' },
  { q: 'Fiziksel olarak Eskişehir\'de ofisiniz var mı?', a: 'Hayır, merkezimiz Kocaeli\'de — Eskişehir\'e tamamen uzaktan hizmet veriyoruz. Keşif görüşmesi, tasarım onayı ve teslimat Google Meet/Zoom üzerinden yapılır. Türkiye genelinde canlı referanslarımızı portföyümüzde inceleyebilirsiniz.' },
  { q: 'Web sitem yapıldıktan sonra kim günceller?', a: 'İçerik güncellemeleri için basit panel kuruyoruz. Blog, ürün ve haber güncellemelerini kendiniz yapabilirsiniz. Tasarım ve teknik değişiklikler için aylık bakım paketi sunuyoruz. Projeyi teslim edip kaybolan bir ajans değiliz.' },
  { q: 'Eskişehir\'deki yerleşik ajanslara kıyasla neden sizi tercih etmeliyim?', a: 'Yerleşik ajanslarda küçük/orta ölçekli projeler genellikle düşük öncelik alır, iletişim yavaşlar. Biz her projeye mühendislik disipliniyle, doğrudan kurucu ortak seviyesinde ilgi gösteriyoruz — daha hızlı iletişim, daha esnek süreç, aynı kalite.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Eskişehir Web Tasarım Hizmeti',
      description: 'Eskişehir\'in tüm ilçeleri için profesyonel, SEO uyumlu ve dönüşüm odaklı web sitesi tasarım ve geliştirme.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: ilceler.map((name) => ({ '@type': 'City', name })),
      url: 'https://ramsesdigital.com/eskisehir-web-tasarim',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Eskişehir Web Tasarım', item: 'https://ramsesdigital.com/eskisehir-web-tasarim' },
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

export default function EskisehirWebTasarimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Eskişehir — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Eskişehir Web Tasarım
            <br />
            <span className="gradient-text">Hızlı, Modern, SEO Hazır</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Eskişehir işletmeniz için hızlı, mobil uyumlu ve yerel SEO hazır web siteleri. Odunpazarı&apos;dan Tepebaşı&apos;na tüm ilçelere uzaktan hizmet.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Eskişehir İşletmeniz İçin Neden Biz?</h2>
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
              Eskişehir&apos;e özel bir vaka çalışmamız henüz yok, ancak Türkiye genelinde canlı, ziyaret
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
          { label: 'Eskişehir Dijital Pazarlama', href: '/eskisehir-dijital-pazarlama' },
          { label: 'Eskişehir SEO', href: '/eskisehir-seo' },
          { label: 'Eskişehir Google Ads', href: '/eskisehir-google-ads' },
          { label: 'Eskişehir Yazılım Ajansı', href: '/eskisehir-yazilim-ajansi' },
          { label: 'Web Tasarım Ajansı (Türkiye Geneli)', href: '/web-tasarim-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Eskişehir&apos;de Web Siteniz Hazır Olsun</h2>
          <p className="text-zinc-400 text-lg mb-8">30 dakikalık ücretsiz görüşmede ihtiyaçlarınızı netleştirelim.</p>
          <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
