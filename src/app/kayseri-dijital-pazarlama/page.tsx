import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, CheckCircle2, ArrowRight, BarChart3, Search, Zap, Globe, Mail, Megaphone, TrendingUp, Shield, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kayseri Dijital Pazarlama Ajansı | 100+ Proje — Ramses Dijital',
  description:
    'Kayseri\'nin dijital pazarlama ajansı — 100+ proje deneyimi. SEO, Google Ads, web tasarım ve otomasyon ile mobilya, gıda ve tekstil sektörünü büyütün. Ücretsiz danışmanlık alın.',
  alternates: { canonical: 'https://ramsesdigital.com/kayseri-dijital-pazarlama' },
  openGraph: {
    title: 'Kayseri Dijital Pazarlama Ajansı | Ramses Dijital',
    description: 'Kayseri işletmeleri için ölçülebilir dijital pazarlama. SEO, Google Ads, web ve otomasyon.',
    url: 'https://ramsesdigital.com/kayseri-dijital-pazarlama',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kayseri Dijital Pazarlama — Ramses Dijital',
    description: 'Kayseri\'de SEO, Google Ads, web tasarım ve pazarlama otomasyonu.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const channels = [
  {
    icon: Search,
    title: 'Arama Motoru Optimizasyonu (SEO)',
    desc: 'Kayseri\'deki müşterileriniz Google\'da sizi bulsun. Yerel SEO, teknik SEO, GEO ve AEO stratejileriyle organik büyüme.',
    tags: ['Yerel SEO', 'Teknik SEO', 'GEO', 'AEO'],
    href: '/kayseri-seo',
  },
  {
    icon: Megaphone,
    title: 'Google & Meta Reklamları',
    desc: 'Kayseri\'nin rekabetçi sektörlerinde doğru kitleye hedefli reklam. Bütçenizi boşa harcamadan dönüşüm.',
    tags: ['Google Ads', 'Search', 'Display', 'Retargeting'],
    href: '/kayseri-google-ads',
  },
  {
    icon: Globe,
    title: 'Web Tasarım & Geliştirme',
    desc: 'Hızlı, mobil uyumlu, dönüşüm odaklı web siteleri. Mobilya üreticilerine özel katalog, gıda üreticilerine özel e-ticaret altyapısı da dahil.',
    tags: ['Next.js', 'SEO Hazır', 'Mobil', 'Hızlı'],
    href: '/kayseri-web-tasarim',
  },
  {
    icon: Zap,
    title: 'Pazarlama Otomasyonu (n8n)',
    desc: 'Tekrarlayan pazarlama süreçlerini otomatikleştirin. CRM entegrasyonu, lead nurturing, bildirim akışları.',
    tags: ['n8n', 'CRM', 'Lead Nurturing', 'Webhook'],
    href: '/hizmetler/n8n-otomasyon',
  },
  {
    icon: Mail,
    title: 'E-posta Pazarlama',
    desc: 'Listenizi satışa dönüştüren hoşgeldin serisi, kampanya ve drip akışları. B2B toptan ilişkilerinde de etkili.',
    tags: ['E-posta Serisi', 'Drip', 'Segmentasyon', 'A/B Test'],
    href: '/hizmetler/eposta-otomasyon',
  },
  {
    icon: BarChart3,
    title: 'Veri Analizi & Raporlama',
    desc: 'GA4, Looker Studio ve dönüşüm hunisi analiziyle hangi kanalın işe yaradığını kesin olarak görün.',
    tags: ['GA4', 'Looker Studio', 'Dönüşüm Hunisi', 'Dashboard'],
    href: '/hizmetler/veri-analizi',
  },
]

const advantages = [
  { icon: MapPin, title: 'Uzaktan Çalışma Modeli', desc: 'Kocaeli merkezli olsak da tüm süreç uzaktan yürütülüyor — Kayseri\'nin trafiğinde toplantıya gitmenize gerek yok.' },
  { icon: TrendingUp, title: 'Sonuç Garantisi Değil, Şeffaflık', desc: 'Her ay gerçek verilerle raporlama. Trafik, sıralama, dönüşüm — hepsini göreceksiniz.' },
  { icon: Shield, title: 'Yalnızca White-Hat Yöntemler', desc: 'Google\'ın kurallarını çiğneyen kısa yol yok. Uzun vadeli, sürdürülebilir büyüme.' },
  { icon: Clock, title: 'Sektöre Özel Hızlı Başlangıç', desc: 'Anlaşma sonrası 5 iş günü içinde ilk çalışmalar başlar. Kayseri\'nin mobilya, gıda ve tekstil sektörlerine hakim strateji kurgusu.' },
]

const sectors = [
  'Mobilya Üreticileri', 'Gıda Üreticileri (Pastırma, Sucuk)', 'Tekstil Firmaları', 'Hukuk Bürosu',
  'Diş Hekimi & Diş Kliniği', 'Güzellik Merkezi & Estetik', 'Toptan Ticaret', 'Esnaf & KOBİ',
]

const faqs = [
  { q: 'Kayseri\'de dijital pazarlamaya ne zaman başlamalıyım?', a: 'SEO otorite kazanmak zaman aldığı için erken başlamak avantaj sağlar; Kayseri\'deki rakiplerinizin bir kısmı zaten dijitale yatırım yapıyor. Küçük bir bütçeyle Google Ads ile kısa vadede trafik almak, SEO ile de uzun vadeli bir varlık inşa etmek mümkün.' },
  { q: 'Kayseri\'deki hangi dijital kanal en hızlı sonuç verir?', a: 'Hızlı sonuç için Google Ads: 1-2 hafta içinde potansiyel müşteriler arar ve reklamınızı görür. Uzun vadeli ve düşük maliyetli büyüme için SEO: 3-6 ayda organik trafik birikmeye başlar. İkisini birlikte yürütmek en akıllıca stratejidir.' },
  { q: 'Mobilya üreticisi veya gıda firması olarak dijital pazarlamadan nasıl fayda görürüm?', a: 'B2B alıcılar arama motorunda toptan/bayi araştırması yapıyor — "mobilya üretici Kayseri" veya "pastırma toptan üretici" gibi aramalar. SEO ve LinkedIn/Google Ads kombinasyonuyla bu talebi yakalamak mümkün. Gıda üreticileri için ise hem B2B toptan hem B2C e-ticaret talebi ayrı stratejiler gerektiriyor.' },
  { q: 'Kayseri\'de dijital pazarlama için aylık ne kadar bütçe ayırmalıyım?', a: 'Hedeflediğiniz kanal kombinasyonuna (SEO, Google Ads, web tasarım) ve sektörünüze göre değişir. Ücretsiz danışmanlıkta işletmenize özel bir bütçe planı netleştirebiliriz.' },
  { q: 'Sosyal medya yönetimi de yapıyor musunuz?', a: 'Post, story ve video içerikleri üretiyor, içerik takvimi ve strateji kuruyoruz — ancak hesap yönetimi ve günlük yorum/DM moderasyonu hizmetlerimiz arasında değil. Odak noktamız ölçülebilir ROI getiren kanallar: Google arama, SEO ve e-posta pazarlama.' },
  { q: 'Kayseri\'deki hukuk büroları, klinikler ve estetik merkezleri için özel bir yaklaşımınız var mı?', a: 'Evet. Hukuk büroları için Avukatlık Kanunu\'nun reklam yasağı nedeniyle SEO ve içerik otoritesine dayalı strateji uyguluyoruz. Diş hekimi ve estetik merkezleri için ise güven inşa eden içerik ve yerel SEO ağırlıklı bir yaklaşım kuruyoruz.' },
  { q: 'Uzaktan çalışıyor musunuz, yoksa Kayseri\'de yerinde mi?', a: 'Tüm hizmetlerimiz uzaktan yürütülüyor. Merkezimiz Kocaeli\'de, fiziksel ofisimiz Kayseri\'de yok. Toplantılar Google Meet/Zoom üzerinden, raporlar dijital dashboard ve PDF ile paylaşılıyor.' },
  { q: 'Yapay zeka reklamcılığı ve GEO nedir, Kayseri işletmesi için gerekli mi?', a: 'GEO (Generative Engine Optimization), ChatGPT veya Gemini\'de "Kayseri\'de [sektörünüz]" aramasında önerilmek için yapılan optimizasyondur. Bu henüz doymamış bir kanal — erken hareket eden işletmeler önemli bir avantaj kazanıyor.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://ramsesdigital.com/#business',
      name: 'Ramses Dijital',
      description: 'Kayseri dahil Türkiye genelinde hizmet veren dijital pazarlama ajansı. SEO, Google Ads, web tasarım ve otomasyon.',
      url: 'https://ramsesdigital.com',
      areaServed: [
        { '@type': 'City', name: 'Kayseri' },
        { '@type': 'City', name: 'Melikgazi' },
        { '@type': 'City', name: 'Kocasinan' },
        { '@type': 'City', name: 'Talas' },
        { '@type': 'City', name: 'Develi' },
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
        { '@type': 'ListItem', position: 2, name: 'Kayseri Dijital Pazarlama', item: 'https://ramsesdigital.com/kayseri-dijital-pazarlama' },
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

export default function KayseriDijitalPazarlamaPage() {
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
            <span className="text-blue-400 text-sm font-medium">Kayseri&apos;ye Uzaktan Hizmet</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Kayseri Dijital
            <br />
            <span className="gradient-text">Pazarlama Ajansı</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Kayseri&apos;nin mobilya üreticilerine ve gıda üreticilerine özel SEO, Google Ads, web tasarım ve otomasyon — B2B ve B2C satış huninize uygun kurgu.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            Melikgazi · Kocasinan · Talas · Develi · Yahyalı · İncesu
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Strateji Görüşmesi" variant="primary" />
            <Link href="/portfolyo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Müşteri Referansları <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kayseri İşletmenizi Büyütecek Kanallar
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Üretim ve esnaf ağırlıklı Kayseri pazarında doğru kanal kombinasyonu satış döngüsünü kısaltır.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {channels.map(({ icon: Icon, title, desc, tags, href }) => (
              <Link
                key={title}
                href={href} prefetch={false}
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
          <h2 className="text-2xl font-bold text-white mb-3">Kayseri&apos;de Hizmet Verdiğimiz Sektörler</h2>
          <p className="text-zinc-500 text-sm mb-8">Mobilya üretiminin ve gıda sanayinin operasyonel diliyle konuşuyoruz, jenerik pazarlama kalıplarıyla değil.</p>
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

      {/* Local proof */}
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8 text-center">
            <CheckCircle2 size={32} className="text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">
              Türkiye Genelinde Canlı Referanslarımız Var
            </h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Kayseri&apos;ye özel bir vaka çalışmamız henüz yok, ancak Türkiye genelinde ziyaret edilebilir,
              canlı SEO ve web tasarım projelerimiz mevcut. Portföyümüzü inceleyip aynı mühendislik
              disipliniyle Kayseri işletmeniz için nasıl çalışacağımızı görebilirsiniz.
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

      <ReviewsMarquee />

      <RelatedPages
        pages={[
          { label: 'Kayseri SEO', href: '/kayseri-seo' },
          { label: 'Kayseri Web Tasarım', href: '/kayseri-web-tasarim' },
          { label: 'Kayseri Google Ads', href: '/kayseri-google-ads' },
          { label: 'Kayseri Reklam Ajansı', href: '/kayseri-reklam-ajansi' },
          { label: 'Kayseri Yazılım Ajansı', href: '/kayseri-yazilim-ajansi' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Kayseri&apos;de Dijital Büyümeye Başlayın
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
