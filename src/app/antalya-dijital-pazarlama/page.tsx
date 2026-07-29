import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, CheckCircle2, ArrowRight, BarChart3, Search, Zap, Globe, Mail, Megaphone, TrendingUp, Shield, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Antalya Dijital Pazarlama Ajansı | 100+ Proje — Ramses Dijital',
  description:
    'Antalya\'nın dijital pazarlama ajansı — turizm, gayrimenkul ve tarım ihracatına özel strateji. SEO, Google Ads, web tasarım ve otomasyon. Ücretsiz danışmanlık alın.',
  alternates: { canonical: 'https://ramsesdigital.com/antalya-dijital-pazarlama' },
  openGraph: {
    title: 'Antalya Dijital Pazarlama Ajansı | Ramses Dijital',
    description: 'Antalya işletmeleri için ölçülebilir dijital pazarlama. SEO, Google Ads, web ve otomasyon.',
    url: 'https://ramsesdigital.com/antalya-dijital-pazarlama',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antalya Dijital Pazarlama — Ramses Dijital',
    description: 'Antalya\'da SEO, Google Ads, web tasarım ve pazarlama otomasyonu.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const channels = [
  {
    icon: Search,
    title: 'Arama Motoru Optimizasyonu (SEO)',
    desc: 'Otel, gayrimenkul ofisi veya tarım ihracatı işletmeniz Google\'da ve yapay zeka aramalarında görünsün. Çok dilli, yerel ve teknik SEO.',
    tags: ['Çok Dilli SEO', 'Yerel SEO', 'GEO', 'AEO'],
    href: '/antalya-seo',
  },
  {
    icon: Megaphone,
    title: 'Google & Meta Reklamları',
    desc: 'Sezonluk turizm talebine göre bütçe planlanmış, İngilizce/Rusça hedefli reklam kampanyaları.',
    tags: ['Google Ads', 'Search', 'Display', 'Retargeting'],
    href: '/antalya-google-ads',
  },
  {
    icon: Globe,
    title: 'Web Tasarım & Geliştirme',
    desc: 'Hızlı, mobil uyumlu, çok dilli web siteleri. Next.js ile kurumsal performans, otel ve gayrimenkul sektörüne uygun tasarım.',
    tags: ['Next.js', 'Çok Dilli', 'Mobil', 'Hızlı'],
    href: '/antalya-web-tasarim',
  },
  {
    icon: Zap,
    title: 'Pazarlama Otomasyonu (n8n)',
    desc: 'Rezervasyon takibi, lead nurturing ve CRM entegrasyonu — sezon yoğunluğunda manuel işi azaltın.',
    tags: ['n8n', 'CRM', 'Lead Nurturing', 'Webhook'],
    href: '/hizmetler/n8n-otomasyon',
  },
  {
    icon: Mail,
    title: 'E-posta Pazarlama',
    desc: 'Erken rezervasyon kampanyaları ve alıcı adayı listenizi satışa dönüştüren e-posta serileri.',
    tags: ['E-posta Serisi', 'Drip', 'Segmentasyon', 'A/B Test'],
    href: '/hizmetler/eposta-otomasyon',
  },
  {
    icon: BarChart3,
    title: 'Veri Analizi & Raporlama',
    desc: 'GA4, Looker Studio ve dönüşüm hunisi analiziyle hangi dilin, hangi kanalın işe yaradığını kesin olarak görün.',
    tags: ['GA4', 'Looker Studio', 'Dönüşüm Hunisi', 'Dashboard'],
    href: '/hizmetler/veri-analizi',
  },
]

const advantages = [
  { icon: MapPin, title: 'Uzaktan Çalışma Modeli', desc: 'Kocaeli merkezli olsak da tüm süreç uzaktan yürütülüyor — Antalya\'nın sezonluk yoğunluğunda toplantıya gitmenize gerek yok.' },
  { icon: TrendingUp, title: 'Sonuç Garantisi Değil, Şeffaflık', desc: 'Her ay gerçek verilerle raporlama. Trafik, sıralama, dönüşüm — hepsini göreceksiniz.' },
  { icon: Shield, title: 'Yalnızca White-Hat Yöntemler', desc: 'Google\'ın kurallarını çiğneyen kısa yol yok. Uzun vadeli, sürdürülebilir büyüme.' },
  { icon: Clock, title: 'Sezona Uygun Hızlı Başlangıç', desc: 'Anlaşma sonrası 5 iş günü içinde ilk çalışmalar başlar. Turizm sezonu öncesi kısıtlı zamanınızı boşa harcamayız.' },
]

const sectors = [
  'Otelcilik & Tatil Köyü', 'Tur Operatörü & Transfer', 'Gayrimenkul (Yabancıya Satış)', 'Seracılık & Tarım İhracatı',
  'Hukuk Bürosu', 'Diş Hekimi & Diş Kliniği', 'Psikolog & Terapist', 'Güzellik Merkezi & Estetik',
]

const faqs = [
  { q: 'Antalya\'da dijital pazarlamaya ne zaman başlamalıyım?', a: 'Turizm işletmeleri için en iyi zaman sezon başlamadan 2-3 ay öncesi — içerik ve kampanya altyapısı sezon başladığında hazır olmalı. Gayrimenkul ve tarım ihracatı gibi yıl boyu istikrarlı talep gören sektörlerde ise başlangıç zamanı daha esnek, önemli olan geciktirmemek.' },
  { q: 'Antalya\'da hangi dijital kanal en hızlı sonuç verir?', a: 'Hızlı sonuç için Google Ads: 1-2 hafta içinde potansiyel müşteriler reklamınızı görür. Uzun vadeli ve düşük maliyetli büyüme için SEO: çok dilli sayfalar için genellikle 4-6 ayda organik trafik birikmeye başlar. Sezonluk işletmeler için ikisini birlikte yürütmek en akıllıca stratejidir.' },
  { q: 'Antalya\'daki rakiplerime karşı nasıl öne çıkabilirim?', a: 'Üç odak noktası: (1) Dil bazlı niş konumlanma — "Antalya\'da otel" yerine "boutique hotel in Kaş" gibi daha spesifik, hedef kitleye uygun aramalarda üstünlük kurmak. (2) Google Haritalar\'da üst sıra — küçük işletmeler genellikle GBP\'yi eksik dolduruyor. (3) Çok dilli kullanıcı yorumları — yabancı turist ve alıcı kararlarında en belirleyici faktörlerden biri.' },
  { q: 'Antalya\'da dijital pazarlama için bütçe nasıl belirlenir?', a: 'Hedeflediğiniz kanal kombinasyonuna (SEO, Google Ads, web tasarım), dil sayısına ve sezonluk yoğunluğa göre değişir. Sektöre göre ücretsiz danışmanlıkta işletmenize özel bir bütçe planı netleştirebiliriz.' },
  { q: 'Sosyal medya yönetimi de yapıyor musunuz?', a: 'Stratejik danışmanlık ve içerik planlaması yapıyoruz, ancak günlük sosyal medya yönetimi (gönderi hazırlama, moderasyon) hizmetlerimiz arasında değil. Odak noktamız ölçülebilir ROI getiren kanallar: Google arama, SEO ve e-posta pazarlama.' },
  { q: 'Antalya\'da referanslarınız var mı?', a: 'Antalya\'da henüz canlı bir referansımız yok — sahte veya abartılı iddialarda bulunmak istemiyoruz. Türkiye genelinde ziyaret edilebilir, gerçek müşteri çalışmalarımızı portföyümüzde görebilirsiniz; hukuk bürosundan e-ticarete, platform projelerinden yerel hizmet işletmelerine kadar.' },
  { q: 'Uzaktan çalışıyor musunuz, yoksa Antalya\'da yerinde mi?', a: 'Tüm hizmetlerimiz uzaktan yürütülüyor. Merkezimiz Kocaeli\'de, fiziksel ofisimiz Antalya\'da yok. Toplantılar Google Meet/Zoom üzerinden, raporlar dijital dashboard ve PDF ile paylaşılıyor.' },
  { q: 'Yapay zeka reklamcılığı ve GEO nedir, Antalya turizm işletmesi için gerekli mi?', a: 'GEO (Generative Engine Optimization), yabancı turistlerin ChatGPT veya Gemini\'ye "best hotel in Antalya" gibi sorular sorduğunda önerilmek için yapılan optimizasyondur. Bu kanal henüz doymamış — erken hareket eden işletmeler önemli bir avantaj kazanıyor.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://ramsesdigital.com/#business',
      name: 'Ramses Dijital',
      description: 'Antalya dahil Türkiye genelinde hizmet veren dijital pazarlama ajansı. SEO, Google Ads, web tasarım ve otomasyon.',
      url: 'https://ramsesdigital.com',
      areaServed: [
        { '@type': 'City', name: 'Antalya' },
        { '@type': 'City', name: 'Muratpaşa' },
        { '@type': 'City', name: 'Konyaaltı' },
        { '@type': 'City', name: 'Kepez' },
        { '@type': 'City', name: 'Alanya' },
        { '@type': 'City', name: 'Manavgat' },
        { '@type': 'City', name: 'Serik' },
        { '@type': 'City', name: 'Kaş' },
      ],
      telephone: '+905355601936',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'İzmit',
        addressRegion: 'Kocaeli',
        addressCountry: 'TR',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Dijital Pazarlama Hizmetleri',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Hizmeti' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads Yönetimi' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Tasarım' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-posta Pazarlama' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pazarlama Otomasyonu' } },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Antalya Dijital Pazarlama', item: 'https://ramsesdigital.com/antalya-dijital-pazarlama' },
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

export default function AntalyaDijitalPazarlamaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Antalya&apos;ya Uzaktan Hizmet</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Antalya Dijital
            <br />
            <span className="gradient-text">Pazarlama Ajansı</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Turizm, gayrimenkul ve tarım ihracatı sektörlerine özel SEO, Google Ads, web tasarım ve pazarlama otomasyonu — Antalya işletmelerini dijitalde büyüten tam kapsamlı ajans.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            Muratpaşa · Konyaaltı · Kepez · Alanya · Manavgat · Serik · Kaş · Side
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Strateji Görüşmesi" variant="primary" />
            <Link href="/portfolyo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Portföyümüzü İncele <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Antalya İşletmenizi Büyütecek Kanallar
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Her kanal kendi başına güçlü — doğru kombinasyon sektörünüze ve sezonunuza göre belirlenir.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {channels.map(({ icon: Icon, title, desc, tags, href }) => (
              <Link
                key={title}
                href={href}
                className="group bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-6 transition-all hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/[0.04] border border-white/[0.06] text-zinc-500 rounded-full px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Detaylar <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Antalya&apos;da Hizmet Verdiğimiz Sektörler</h2>
          <p className="text-zinc-500 text-sm mb-8">Antalya ekonomisinin taşıyıcı sektörlerinde uzmanlık — jenerik strateji değil.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <span key={sector} className="bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-sm rounded-full px-4 py-2">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Neden Ramses Dijital?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest proof */}
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8 text-center">
            <CheckCircle2 size={32} className="text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">
              Portföyümüzü İnceleyin
            </h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Antalya&apos;da henüz canlı bir referansımız yok — ama Türkiye genelinde ziyaret edilebilir, gerçek
              müşteri çalışmalarımız var. Hukuk bürosundan e-ticarete, platform projelerinden yerel hizmet
              işletmelerine kadar portföyümüzü inceleyebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/portfolyo" className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:text-blue-300 text-sm font-medium rounded-full px-5 py-2.5 transition-all">
                Portföyü Gör <ArrowRight size={13} />
              </Link>
              <CalendlyButton label="Görüşme Ayarla" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
          { label: 'Antalya SEO', href: '/antalya-seo' },
          { label: 'Antalya Web Tasarım', href: '/antalya-web-tasarim' },
          { label: 'Antalya Google Ads', href: '/antalya-google-ads' },
          { label: 'Antalya Reklam Ajansı', href: '/antalya-reklam-ajansi' },
          { label: 'SEO Ajansı (Türkiye Geneli)', href: '/seo-ajansi' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Antalya&apos;da Dijital Büyümeye Başlayın
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            İşletmenize özel strateji için 30 dakikalık ücretsiz görüşme ayarlayalım.
          </p>
          <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
