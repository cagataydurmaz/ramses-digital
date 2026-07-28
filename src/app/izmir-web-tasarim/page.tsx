import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Globe, ArrowRight, CheckCircle2, Zap, Smartphone, Search, ShieldCheck, BarChart3, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İzmir Web Tasarım Ajansı — Ramses Dijital',
  description:
    'İzmir\'de profesyonel web tasarım hizmeti. Konak, Karşıyaka, Bornova ve tüm İzmir ilçeleri için SEO uyumlu, mobil öncelikli kurumsal ve e-ticaret web siteleri. Ücretsiz teklif alın.',
  alternates: { canonical: 'https://ramsesdigital.com/izmir-web-tasarim' },
  openGraph: {
    title: 'İzmir Web Tasarım | Ramses Dijital',
    description: 'İzmir işletmeleri için dönüşüm odaklı, SEO hazır web siteleri.',
    url: 'https://ramsesdigital.com/izmir-web-tasarim',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Smartphone, title: 'Mobil Öncelikli', desc: 'İzmir\'deki kullanıcıların büyük çoğunluğu mobil cihazdan geliyor — turizm sezonunda bu oran daha da artıyor. Tam responsive tasarım.' },
  { icon: Search, title: 'SEO Hazır Altyapı', desc: 'Next.js ile oluşturulan siteler İzmir\'in yerel SEO ortamına hazır başlar. Schema markup, canonical, sitemap otomatik.' },
  { icon: Zap, title: 'Yüksek Performans', desc: 'Lighthouse 90+ puan. Turizm sezonunda artan ziyaretçi trafiğini sorunsuz karşılayan altyapı.' },
  { icon: Palette, title: 'Marka Kimliğine Uygun Tasarım', desc: 'Ege\'nin ticaret, turizm ve üretim kimliğine uygun, profesyonel ve güven veren görsel dil.' },
  { icon: BarChart3, title: 'Dönüşüm Odaklı', desc: 'Randevu formu, WhatsApp butonu, çok dilli destek (turizm/ihracat için), Google Maps entegrasyonu.' },
  { icon: ShieldCheck, title: 'Güvenli & Bakımlı', desc: 'SSL, güvenlik güncellemeleri, yedekleme ve teknik destek. Sezon yoğunluğunda kesinti yaşamayın.' },
]

const ilceler = ['Konak', 'Karşıyaka', 'Bornova', 'Buca', 'Çiğli', 'Bayraklı', 'Balçova', 'Urla']

const faqs = [
  { q: 'İzmir\'de web sitesi yaptırmak ne kadar sürer?', a: 'Başlangıç kurumsal siteler 2-3 haftada teslim edilir. Orta ölçekli projeler 4-6 hafta, e-ticaret ve platform projeleri 8-12 hafta alır. Turizm sektöründeyseniz sezon öncesi lansmanı öneriyoruz.' },
  { q: 'İzmir işletmem için web sitesinde yerel SEO nasıl kurulur?', a: 'İlçe bazlı anahtar kelimeler, Google Business Profile entegrasyonu, NAP (isim-adres-telefon) tutarlılığı ve yerel schema markup temel adımlardır. Turizm işletmeleri için ayrıca çok dilli SEO (İngilizce, Almanca) değerlendiriyoruz.' },
  { q: 'İzmir\'deki turizm ve konaklama işletmeleri için web sitesi farklı mı?', a: 'Evet. Rezervasyon sistemi entegrasyonu, çok dilli içerik, görsel ağırlıklı tasarım ve mobil öncelikli hız kritik. Sezonluk kampanya sayfaları ve hızlı içerik güncelleme paneli bu sektörde standart olarak kuruyoruz.' },
  { q: 'Mevcut sitem var, yenileme mi yoksa sıfırdan mı yapmalıyım?', a: 'Mevcut sitenizin Google\'daki birikimi varsa taşıma yaparız — SEO değeri korunur. Yavaş, eski altyapılı veya mobil uyumsuz siteler için sıfırdan Next.js geçişi çok daha etkili.' },
  { q: 'İzmir\'de web sitesi fiyatları ne kadar?', a: 'Sektör, sayfa sayısı ve özel özelliklere göre değişir. Domain ve hosting ayrıca ücretlendirilir. Ücretsiz danışmanlıkta net fiyat alırsınız.' },
  { q: 'Fiziksel olarak İzmir\'de ofisiniz var mı?', a: 'Hayır, merkezimiz Kocaeli\'de — tüm süreç uzaktan yönetiliyor. Keşif görüşmesi, tasarım onayı ve teslimat Google Meet/Zoom üzerinden yapılır. Uzaktan çalışma modelimiz portföyümüzdeki canlı projelerle kanıtlı.' },
  { q: 'Web sitem yapıldıktan sonra kim günceller?', a: 'İçerik güncellemeleri için basit panel kuruyoruz. Blog, ürün, kampanya ve haber güncellemelerini kendiniz yapabilirsiniz. Tasarım ve teknik değişiklikler için aylık bakım paketi sunuyoruz.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'İzmir Web Tasarım Hizmeti',
      description: 'İzmir\'in tüm ilçeleri için profesyonel, SEO uyumlu ve dönüşüm odaklı web sitesi tasarım ve geliştirme.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: ilceler.map((name) => ({ '@type': 'City', name })),
      url: 'https://ramsesdigital.com/izmir-web-tasarim',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'İzmir Web Tasarım', item: 'https://ramsesdigital.com/izmir-web-tasarim' },
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

export default function IzmirWebTasarimPage() {
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
            İzmir Web Tasarım
            <br />
            <span className="gradient-text">Hızlı, Modern, SEO Hazır</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            İzmir işletmeniz için hızlı, mobil uyumlu ve yerel SEO hazır web siteleri. Konak&apos;tan Karşıyaka&apos;ya tüm ilçelere uzaktan hizmet.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">İzmir İşletmeniz İçin Neden Biz?</h2>
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
            <h2 className="text-xl font-bold text-white mb-2">Referanslarımız Canlı</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Eczacı güvencesiyle ürün satan bir e-ticaret markası için geliştirdiğimiz cilt analizi aracı ve İstanbul Barosu
              avukatları için tasarladığımız kurumsal siteler hâlâ yayında. Farklı sektörlerdeki projelerimizi portföyden inceleyebilirsiniz.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['gamzelidermokozmetik.com', 'furkanarikan.av.tr'].map((url) => (
                <span key={url} className="flex items-center gap-1.5 text-xs bg-white/[0.04] border border-white/[0.06] text-zinc-400 rounded-full px-3 py-1">
                  <Globe size={10} className="text-blue-400" /> {url}
                </span>
              ))}
            </div>
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
          { label: 'İzmir SEO', href: '/izmir-seo' },
          { label: 'İzmir Google Ads', href: '/izmir-google-ads' },
          { label: 'Ankara Web Tasarım', href: '/ankara-web-tasarim' },
          { label: 'Web Tasarım Ajansı (Türkiye Geneli)', href: '/web-tasarim-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">İzmir&apos;de Web Siteniz Hazır Olsun</h2>
          <p className="text-zinc-400 text-lg mb-8">30 dakikalık ücretsiz görüşmede ihtiyaçlarınızı netleştirelim.</p>
          <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
