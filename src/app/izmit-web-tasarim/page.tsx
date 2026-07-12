import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Globe, ArrowRight, CheckCircle2, Zap, Smartphone, Search, ShieldCheck, BarChart3, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İzmit Web Tasarım Hizmeti — Ramses Dijital',
  description:
    'İzmit\'te profesyonel web tasarım hizmeti. SEO uyumlu, mobil öncelikli, hızlı yüklenen kurumsal web siteleri. Next.js ile modern altyapı. Ücretsiz teklif alın.',
  alternates: { canonical: 'https://ramsesdigital.com/izmit-web-tasarim' },
  openGraph: {
    title: 'İzmit Web Tasarım | Ramses Dijital',
    description: 'İzmit işletmeleri için dönüşüm odaklı, SEO hazır web siteleri.',
    url: 'https://ramsesdigital.com/izmit-web-tasarim',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Smartphone, title: 'Mobil Öncelikli Tasarım', desc: 'İzmit\'teki kullanıcıların %70\'i mobil cihazdan geliyor. Responsive, hızlı ve parmak dostu tasarım.' },
  { icon: Search, title: 'SEO Hazır Altyapı', desc: 'Teknik SEO, schema markup, hızlı yükleme ve Core Web Vitals\'ı geçen kod. Lansmanından itibaren Google\'a hazır.' },
  { icon: Zap, title: 'Yüksek Performans', desc: 'Next.js ile oluşturulan siteler Lighthouse\'da 90+ puan alır. Rakiplerinizden hızlı yüklenin.' },
  { icon: Palette, title: 'Kurumsal Tasarım', desc: 'Markanıza özel, profesyonel ve güven veren tasarım. Şablon değil, özgün.' },
  { icon: BarChart3, title: 'Dönüşüm Odaklı', desc: 'Randevu formu, WhatsApp entegrasyonu, CTA yerleşimi — ziyaretçiyi müşteriye çeviren yapı.' },
  { icon: ShieldCheck, title: 'Güvenli & Bakımlı', desc: 'SSL, düzenli güncellemeler, uptime takibi ve teknik destek. Siteniz hep çalışır durumda.' },
]

const packages = [
  {
    name: 'Başlangıç',
    price: '15.000',
    desc: 'Yerel hizmet işletmeleri için',
    items: ['5 sayfa', 'Mobil uyumlu', 'SEO temel kurulum', 'İletişim formu', 'Google Analytics', '1 ay destek'],
  },
  {
    name: 'Kurumsal',
    price: '25.000',
    desc: 'Büyüyen KOBİ\'ler için',
    items: ['10 sayfa', 'Blog sistemi', 'Gelişmiş SEO', 'WhatsApp entegrasyonu', 'Hız optimizasyonu', '3 ay destek'],
    highlight: true,
  },
  {
    name: 'Premium',
    price: 'Teklif Alın',
    desc: 'E-ticaret & platform',
    items: ['Sınırsız sayfa', 'E-ticaret altyapısı', 'Ödeme entegrasyonu', 'CRM bağlantısı', 'Otomasyon', '6 ay destek'],
  },
]

const faqs = [
  { q: 'İzmit\'te web sitesi yaptırmak ne kadar sürer?', a: 'Başlangıç paketleri 2-3 haftada, kurumsal projeler 4-6 haftada teslim edilir. E-ticaret ve özel platform projeleri 8-12 hafta alabilir. Süreç: brifing → tasarım onayı → geliştirme → içerik entegrasyonu → test → yayın.' },
  { q: 'Web sitesi için hangi teknolojiyi kullanıyorsunuz?', a: 'Next.js (React tabanlı) kullanıyoruz. WordPress gibi eski sistemlere kıyasla 3-5 kat daha hızlı yüklenen, güvenlik açıklarına karşı çok daha dayanıklı ve SEO performansı çok daha yüksek siteler ortaya çıkıyor. Hosting olarak Vercel veya özel sunucu kullanıyoruz.' },
  { q: 'Web sitemi kendim güncelleyebilir miyim?', a: 'Evet. Blog ve içerik güncellemeleri için basit bir yönetim paneli kuruyoruz. Tasarım değişiklikleri için bizimle iletişime geçmeniz yeterli. Teknik bilgi gerekmeden içerik ekleyip düzenleyebilirsiniz.' },
  { q: 'SEO uyumlu web sitesi ne demek?', a: 'Teknik olarak doğru HTML yapısı, hızlı yükleme, schema markup, canonical URL\'ler, XML sitemap, robots.txt ve Core Web Vitals optimizasyonu demek. Tüm projelerimiz bu standartlarla teslim edilir. Ayrı bir SEO hizmeti almadan da Google\'a hazır başlarsınız.' },
  { q: 'Mevcut sitemin yeniden tasarımını yapabilir misiniz?', a: 'Evet. Mevcut sitenizin içeriğini, SEO değerini (backlink, sıralama) koruyarak modern bir platforma taşıyoruz. 301 yönlendirmeler, içerik migrasyonu ve Google Search Console doğrulamasıyla SEO kaybı olmadan geçiş sağlanır.' },
  { q: 'Hosting ve domain ayrı mı ücretlendirilir?', a: 'Domain (yıllık ~500-1.000 TL) müşteri üzerine kaydedilir; siz sahipsiniz. Hosting Vercel üzerinde ise temel plan ücretsiz; Pro plan gerekirse aylık ~20 USD. Özel sunucu tercih edilirse fiyat ayrıca belirlenir.' },
  { q: 'Web sitesi yapıldıktan sonra ne olur?', a: 'Yayına alımdan sonra 1-3 ay teknik destek veriyoruz. Sonrasında aylık bakım paketi (güncelleme, yedekleme, takip) talep üzerine sunulur. SEO ve dijital pazarlama hizmetleriyle birlikte alındığında siteniz sürekli optimize edilir.' },
  { q: 'İzmit dışındaki ilçeler için de web sitesi yapıyor musunuz?', a: 'Evet, tüm çalışmalar uzaktan yürütülüyor. Gebze, Darıca, Körfez, Gölcük, Başiskele ve Türkiye\'nin her şehrine hizmet veriyoruz. Fiziksel görüşme zorunluluğu yok.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'İzmit Web Tasarım Hizmeti',
      description: 'İzmit işletmeleri için profesyonel, SEO uyumlu ve dönüşüm odaklı web sitesi tasarım ve geliştirme.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: { '@type': 'City', name: 'İzmit' },
      url: 'https://ramsesdigital.com/izmit-web-tasarim',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'İzmit Web Tasarım', item: 'https://ramsesdigital.com/izmit-web-tasarim' },
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

export default function IzmitWebTasarimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">İzmit & Kocaeli</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            İzmit Web Tasarım
            <br />
            <span className="gradient-text">Dönüşüm Odaklı Siteler</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Hızlı, mobil uyumlu ve SEO hazır web siteleri. İzmit işletmenizi dijitalde profesyonelce temsil edin — ziyaretçiyi müşteriye çeviren tasarım.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
            <Link href="/portfolyo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Örnek Çalışmalar <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              İzmit İşletmeniz İçin Neden Biz?
            </h2>
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

      {/* Packages */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Paketler & Fiyatlar</h2>
            <p className="text-zinc-500 text-sm">Tüm paketler KDV hariç, tek seferlik ödeme</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {packages.map(({ name, price, desc, items, highlight }) => (
              <div key={name} className={`rounded-2xl p-6 border ${highlight ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/[0.02] border-white/[0.06]'}`}>
                {highlight && <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">En Çok Tercih Edilen</p>}
                <h3 className="text-white font-bold text-xl mb-1">{name}</h3>
                <p className="text-zinc-500 text-sm mb-4">{desc}</p>
                <p className="text-3xl font-bold text-white mb-1">{price === 'Teklif Alın' ? price : `${price} ₺`}</p>
                {price !== 'Teklif Alın' && <p className="text-zinc-500 text-xs mb-5">tek seferlik</p>}
                <ul className="space-y-2 mb-6 mt-4">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-zinc-400 text-sm">
                      <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <CalendlyButton label="Teklif Al" variant={highlight ? 'primary' : 'secondary'} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Yaptığımız Çalışmalar</h2>
          <p className="text-zinc-400 text-sm mb-8 max-w-xl mx-auto">
            Portföyümüzdeki her site canlı — ziyaret edip kendiniz görebilirsiniz.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { name: 'nurcelen.com', desc: 'Kocaeli psikolog sitesi' },
              { name: 'mertanilguler.av.tr', desc: 'Hukuk bürosu sitesi' },
              { name: 'gamzelidermokozmetik.com', desc: 'E-ticaret sitesi' },
            ].map(({ name, desc }) => (
              <div key={name} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-4 text-left">
                <Globe size={16} className="text-blue-400 mb-2" />
                <p className="text-white text-sm font-medium">{name}</p>
                <p className="text-zinc-500 text-xs">{desc}</p>
              </div>
            ))}
          </div>
          <Link href="/portfolyo" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
            Tüm Portföyü Gör <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2 text-sm md:text-base">{q}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages
        pages={[
          { label: 'İzmit Reklam Ajansı', href: '/izmit-reklam-ajansi' },
          { label: 'İzmit SEO', href: '/izmit-seo' },
          { label: 'İzmit Google Ads', href: '/izmit-google-ads' },
          { label: 'İzmit Yazılım Ajansı', href: '/izmit-yazilim-ajansi' },
          { label: 'Kocaeli Web Tasarım', href: '/kocaeli-web-tasarim' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            İzmit&apos;te Profesyonel Web Siteniz Hazır Olsun
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            30 dakikalık görüşmede ihtiyaçlarınızı netleştirelim ve size özel teklif suналım.
          </p>
          <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
