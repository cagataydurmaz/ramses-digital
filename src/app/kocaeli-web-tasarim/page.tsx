import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Globe, ArrowRight, CheckCircle2, Zap, Smartphone, Search, ShieldCheck, BarChart3, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kocaeli Web Tasarım Hizmeti — Ramses Dijital',
  description:
    'Kocaeli\'de profesyonel web tasarım hizmeti. İzmit, Gebze, Darıca ve tüm Kocaeli ilçeleri için SEO uyumlu, mobil öncelikli kurumsal web siteleri. Ücretsiz teklif alın.',
  alternates: { canonical: 'https://ramsesdigital.com/kocaeli-web-tasarim' },
  openGraph: {
    title: 'Kocaeli Web Tasarım | Ramses Dijital',
    description: 'Kocaeli işletmeleri için dönüşüm odaklı, SEO hazır web siteleri.',
    url: 'https://ramsesdigital.com/kocaeli-web-tasarim',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Smartphone, title: 'Mobil Öncelikli', desc: 'Kocaeli\'deki kullanıcıların büyük çoğunluğu mobil cihazdan geliyor. Tam responsive, hızlı ve parmak dostu tasarım.' },
  { icon: Search, title: 'SEO Hazır Altyapı', desc: 'Next.js ile oluşturulan siteler Kocaeli yerel SEO\'ya hazır başlar. Schema markup, canonical, sitemap otomatik.' },
  { icon: Zap, title: 'Yüksek Performans', desc: 'Lighthouse 90+ puan. Kocaeli\'deki rakiplerinizden hızlı yüklenin — Google bu metriği sıralamada kullanıyor.' },
  { icon: Palette, title: 'Kurumsal Tasarım', desc: 'Markanıza özgü, güven veren tasarım. Kocaeli\'nin sanayi ve ticaret kimliğine uygun profesyonel sunum.' },
  { icon: BarChart3, title: 'Dönüşüm Odaklı', desc: 'Randevu formu, WhatsApp butonu, Google Maps entegrasyonu — Kocaeli müşterisi kolayca ulaşsın.' },
  { icon: ShieldCheck, title: 'Güvenli & Bakımlı', desc: 'SSL, güvenlik güncellemeleri, yedekleme ve teknik destek. Kocaeli\'den müşteri kaçırmayın.' },
]

const ilceler = ['İzmit', 'Gebze', 'Darıca', 'Körfez', 'Gölcük', 'Başiskele', 'Çayırova', 'Karamürsel']

const faqs = [
  { q: 'Kocaeli\'de web sitesi yaptırmak ne kadar sürer?', a: 'Başlangıç kurumsal siteler 2-3 haftada teslim edilir. Orta ölçekli projeler 4-6 hafta, e-ticaret ve platform projeleri 8-12 hafta alır. Gebze veya İzmit\'te yoğun rekabet varsa hızlı lansmanı öneriyoruz — her geçen hafta rakibiniz sizdeki müşteriyi alıyor olabilir.' },
  { q: 'Kocaeli işletmem için web sitesinde yerel SEO nasıl kurulur?', a: 'İlçe bazlı anahtar kelimeler, Google Business Profile entegrasyonu, NAP (isim-adres-telefon) tutarlılığı, yerel schema markup ve "Gebze\'de X hizmeti" gibi sayfalar oluşturmak temel adımlardır. Tüm projelerimizde bu yapı standart olarak kurulur.' },
  { q: 'Kocaeli\'deki sanayi ve B2B firmaları için web sitesi farklı mı?', a: 'Evet. B2B firmalar için ürün kataloğu, teknik özellik sayfaları, PDF indirme, talep formu ve LinkedIn entegrasyonu kritiktir. B2C işletmelere kıyasla içerik mimarisi ve CTA yapısı farklı kurulur. Kocaeli\'nin sanayi kimliğini iyi tanıdığımız için bu ayrımı yapabiliyoruz.' },
  { q: 'Mevcut sitem var, yenileme mi yoksa sıfırdan mı yapmalıyım?', a: 'Mevcut sitenizin Google\'daki birikimi (backlink, sıralama) varsa taşıma yaparız — SEO değeri korunur. Yavaş, eski altyapılı (WordPress 5+ yıl) veya mobil uyumsuz siteler için sıfırdan Next.js geçişi çok daha etkili. Ücretsiz danışmanlıkta sitenizi inceleyip öneri sunarız.' },
  { q: 'Kocaeli\'de web sitesi fiyatları ne kadar?', a: 'Başlangıç paketleri 15.000 TL\'den, kurumsal 25.000 TL\'den, e-ticaret 40.000 TL\'den başlıyor. Domain ve hosting ayrıdır (yıllık ~1.000-2.500 TL). Sektör, sayfa sayısı ve özel özelliklere göre değişir — ücretsiz danışmanlıkta net fiyat alırsınız.' },
  { q: 'Gebze\'de web sitesi için de hizmet veriyor musunuz?', a: 'Evet. Gebze, Darıca, Körfez, Gölcük, Başiskele, Çayırova ve tüm Kocaeli ilçelerine hizmet veriyoruz. Tüm çalışmalar uzaktan yürütülür; fiziksel görüşme zorunluluğu yok.' },
  { q: 'Web sitem yapıldıktan sonra kim günceller?', a: 'İçerik güncellemeleri için basit panel kuruyoruz. Blog, ürün ve haber güncellemelerini kendiniz yapabilirsiniz. Tasarım ve teknik değişiklikler için aylık bakım paketi sunuyoruz. Projeyi teslim edip kaybolan bir ajans değiliz.' },
  { q: 'Kocaeli\'deki rakiplerimden nasıl öne çıkarız?', a: 'Çoğu Kocaeli işletmesinin sitesi eski, yavaş veya mobil uyumsuz. Modern Next.js altyapı, yerel SEO optimizasyonu ve dönüşüm odaklı tasarım kombinasyonu sizi rakiplerinizden belirgin şekilde ayırır. Hız farkı bile Google sıralamalarında anlamlı avantaj sağlıyor.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Kocaeli Web Tasarım Hizmeti',
      description: 'Kocaeli\'nin tüm ilçeleri için profesyonel, SEO uyumlu ve dönüşüm odaklı web sitesi tasarım ve geliştirme.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: ilceler.map((name) => ({ '@type': 'City', name })),
      url: 'https://ramsesdigital.com/kocaeli-web-tasarim',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Kocaeli Web Tasarım', item: 'https://ramsesdigital.com/kocaeli-web-tasarim' },
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

export default function KocaeliWebTasarimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Kocaeli — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Kocaeli Web Tasarım
            <br />
            <span className="gradient-text">Dönüşüm Odaklı Siteler</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Kocaeli işletmeniz için hızlı, mobil uyumlu ve yerel SEO hazır web siteleri. İzmit&apos;ten Gebze&apos;ye tüm ilçelere hizmet.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kocaeli İşletmeniz İçin Neden Biz?</h2>
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
            <h2 className="text-xl font-bold text-white mb-2">Kocaeli Referanslarımız Canlı</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Kocaeli psikolog Psk. Nur Çelen için tasarladığımız site SEO odaklı yapısıyla Google&apos;da üst sıralara çıktı.
              Hukuk bürosu, e-ticaret ve platform projelerimizi portföyden inceleyebilirsiniz.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['nurcelen.com', 'mertanilguler.av.tr', 'gamzelidermokozmetik.com'].map((url) => (
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
          { label: 'Kocaeli Dijital Pazarlama', href: '/kocaeli-dijital-pazarlama' },
          { label: 'Kocaeli SEO', href: '/kocaeli-seo' },
          { label: 'Kocaeli Google Ads', href: '/kocaeli-google-ads' },
          { label: 'Kocaeli Yazılım Ajansı', href: '/kocaeli-yazilim-ajansi' },
          { label: 'İzmit Web Tasarım', href: '/izmit-web-tasarim' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Kocaeli&apos;de Web Siteniz Hazır Olsun</h2>
          <p className="text-zinc-400 text-lg mb-8">30 dakikalık ücretsiz görüşmede ihtiyaçlarınızı netleştirelim.</p>
          <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
