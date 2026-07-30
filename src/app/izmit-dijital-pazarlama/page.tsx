import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, CheckCircle2, ArrowRight, BarChart3, Search, Zap, Globe, Mail, Megaphone, Clock, Users, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İzmit Dijital Pazarlama Ajansı | 100+ Proje — Ramses Dijital',
  description:
    'İzmit merkezli dijital pazarlama ajansı — 100+ proje deneyimi. SEO, Google Ads, web tasarım ve otomasyon ile işletmenizi büyütün. Ücretsiz danışmanlık alın.',
  alternates: { canonical: 'https://ramsesdigital.com/izmit-dijital-pazarlama' },
  openGraph: {
    title: 'İzmit Dijital Pazarlama Ajansı | Ramses Dijital',
    description: 'İzmit işletmeleri için ölçülebilir dijital pazarlama. SEO, Google Ads, web ve otomasyon.',
    url: 'https://ramsesdigital.com/izmit-dijital-pazarlama',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İzmit Dijital Pazarlama — Ramses Dijital',
    description: 'İzmit\'te SEO, Google Ads, web tasarım ve pazarlama otomasyonu.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const neighborhoods = [
  'Çarşı', 'Yahya Kaptan', 'Cedit', 'Alikahya', 'Sanayi Mahallesi', 'Bekirdere', 'Ömerağa', 'Kozluk',
]

const channels = [
  {
    icon: Search,
    title: 'Yerel SEO & Google Haritalar',
    desc: 'İzmit çarşı merkezinden Yahya Kaptan\'a kadar, "İzmit + hizmetiniz" araması yapan müşterinin karşısına Google Haritalar\'da ilk sıralarda çıkın.',
    tags: ['Yerel SEO', 'GBP Optimizasyonu', 'Harita Paketi'],
    href: '/hizmetler/seo-kocaeli',
  },
  {
    icon: Megaphone,
    title: 'Google Ads',
    desc: 'İzmit\'te arama yapan potansiyel müşteriye tam doğru anda reklam gösterin. Şehir merkezinde rekabet yoğun — bütçenizi doğru yerde harcarız.',
    tags: ['Search', 'Display', 'Retargeting'],
    href: '/hizmetler/google-ads-kocaeli',
  },
  {
    icon: Globe,
    title: 'Web Tasarım & Geliştirme',
    desc: 'İzmit\'teki işletmenizi doğru temsil eden, hızlı yüklenen, mobil öncelikli web sitesi. Next.js altyapısıyla kurumsal performans.',
    tags: ['Next.js', 'Mobil Öncelikli', 'Hızlı'],
    href: '/hizmetler/web-tasarim-kocaeli',
  },
  {
    icon: Zap,
    title: 'Pazarlama Otomasyonu',
    desc: 'Randevu hatırlatmaları, teklif takibi, lead yönlendirme — İzmit\'teki günlük operasyonunuzu otomatikleştirin.',
    tags: ['n8n', 'CRM Entegrasyonu', 'Otomatik Takip'],
    href: '/hizmetler/n8n-otomasyon',
  },
  {
    icon: Mail,
    title: 'E-posta Pazarlama',
    desc: 'Mevcut müşteri listenizi tekrar satışa dönüştüren e-posta serileri ve kampanyalar.',
    tags: ['E-posta Serisi', 'Segmentasyon', 'A/B Test'],
    href: '/hizmetler/eposta-otomasyon',
  },
  {
    icon: BarChart3,
    title: 'Veri Analizi & Raporlama',
    desc: 'GA4 ve Looker Studio ile İzmit\'teki kampanyalarınızın hangisinin gerçekten satış getirdiğini görün.',
    tags: ['GA4', 'Looker Studio', 'Dashboard'],
    href: '/hizmetler/veri-analizi',
  },
]

const advantages = [
  { icon: MapPin, title: 'Merkezimiz İzmit', desc: 'Kocaeli\'nin idari merkezinde yerleşik bir ekibiz — şehri, mahalleleri ve iş çevresini uzaktan değil, içeriden biliyoruz.' },
  { icon: Building, title: 'Merkez İlçe Rekabetini Biliyoruz', desc: 'İzmit, Kocaeli\'nin en yoğun rekabetli ilçesi. Kalabalık pazarda öne çıkmak için genel SEO şablonu yetmez, kesin hedefleme gerekir.' },
  { icon: Users, title: 'Yerel İş Ağına Erişim', desc: 'İzmit\'teki ticaret odası, esnaf ve meslek gruplarının dinamiklerini takip ediyor, stratejimizi buna göre kuruyoruz.' },
  { icon: Clock, title: 'Hızlı Yanıt Süresi', desc: 'Aynı şehirde olmanın avantajıyla soru ve taleplerinize hızlı dönüş yapıyoruz.' },
]

const sectors = [
  'Sağlık & Klinik', 'Hukuk Bürosu', 'E-ticaret', 'Perakende & Mağaza',
  'Restoran & Kafe', 'Güzellik & Estetik', 'Eğitim & Kurs', 'Emlak & İnşaat',
]

const faqs = [
  { q: 'İzmit\'te dijital pazarlama neden özellikle önemli?', a: 'İzmit, Kocaeli\'nin idari ve ticari merkezi olduğu için hem işletme yoğunluğu hem de arama hacmi en yüksek ilçe. Bu da rekabetin sert olduğu, ama doğru stratejiyle en çok potansiyel müşterinin de bulunduğu anlamına geliyor.' },
  { q: 'İzmit çarşı merkezindeki bir işletme ile mahalle esnafının stratejisi farklı mı?', a: 'Evet. Çarşı merkezindeki işletmeler için rekabet yoğun anahtar kelimelerde öne çıkmak ve Google Haritalar\'da net konum bilgisi önemli. Mahalle işletmeleri içinse dar bir yarıçapta hedeflenmiş yerel SEO ve komşu mahallelere yönelik reklam daha verimli sonuç veriyor.' },
  { q: 'İzmit\'te hangi hizmetle başlamalıyım: SEO mu, Google Ads mi?', a: 'Hemen sonuç istiyorsanız Google Ads 1-2 hafta içinde trafik getirir. Uzun vadeli ve sürdürülebilir büyüme istiyorsanız SEO\'ya paralel yatırım yapın; 3-6 ay içinde organik trafik reklam bütçesi olmadan gelmeye başlar. Çoğu İzmit müşterimiz ikisini birlikte yürütüyor.' },
  { q: 'İzmit\'te dijital pazarlama bütçesi ne kadar olmalı?', a: 'Sektörünüze ve İzmit merkezdeki rekabet düzeyine göre değişir. Ücretsiz danışmanlık seansında işletmenize özel bütçe planını netleştiriyoruz.' },
  { q: 'İzmit dışındaki Kocaeli ilçelerine de hizmet veriyor musunuz?', a: 'Evet, Gebze, Darıca, Körfez, Gölcük, Başiskele, Çayırova, Kandıra, Karamürsel ve Dilovası dahil Kocaeli\'nin tamamına hizmet veriyoruz. İzmit\'te yerleşik olmamız yalnızca merkez ilçeye özel avantaj sağlıyor, hizmet alanımızı sınırlamıyor.' },
  { q: 'İzmit\'teki müşteri referanslarınız var mı?', a: 'Evet, portföyümüzdeki Psk. Nur Çelen Kocaeli\'de faaliyet gösteren gerçek bir müşterimiz; SEO ve web çalışması sonrası organik aramadan randevu almaya başladı. Sitesini doğrudan ziyaret edebilirsiniz.' },
  { q: 'Yerinde toplantı yapabiliyor musunuz, yoksa yalnızca uzaktan mı çalışıyorsunuz?', a: 'İzmit\'te yerleşik olduğumuz için talep halinde yüz yüze görüşme mümkün. Ancak sürecin büyük kısmı — raporlama, güncelleme, iletişim — dijital ortamda hızlı biçimde yürütülüyor.' },
  { q: 'İzmit\'teki işletmem yapay zeka aramalarında (ChatGPT, Gemini) çıkabilir mi?', a: 'Evet. GEO (Generative Engine Optimization) çalışmasıyla, biri ChatGPT\'ye "İzmit\'te [hizmetiniz]" diye sorduğunda önerilme ihtimalinizi artırıyoruz. Bu, yapılandırılmış içerik ve güvenilir kaynak bağlantılarıyla oluşturuluyor ve SEO paketlerimize dahil.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://ramsesdigital.com/#business',
      name: 'Ramses Dijital',
      description: 'İzmit merkezli dijital pazarlama ajansı. SEO, Google Ads, web tasarım ve otomasyon.',
      url: 'https://ramsesdigital.com',
      areaServed: [
        { '@type': 'City', name: 'İzmit' },
        { '@type': 'City', name: 'Kocaeli' },
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
        { '@type': 'ListItem', position: 2, name: 'İzmit Dijital Pazarlama', item: 'https://ramsesdigital.com/izmit-dijital-pazarlama' },
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

export default function IzmitDijitalPazarlamaPage() {
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
            <span className="text-blue-400 text-sm font-medium">İzmit Merkezli</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            İzmit Dijital
            <br />
            <span className="gradient-text">Pazarlama Ajansı</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Kocaeli&apos;nin idari merkezinde yerleşik ekibimizle, İzmit&apos;teki işletmenizi SEO, Google Ads, web tasarım ve otomasyonla büyütüyoruz.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            {neighborhoods.join(' · ')} ve İzmit&apos;in tüm mahalleleri
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
              İzmit İşletmenizi Büyütecek Kanallar
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Şehir merkezinin rekabet yoğunluğunda öne çıkmak için doğru kanal kombinasyonu şart.
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
          <h2 className="text-2xl font-bold text-white mb-3">İzmit&apos;te Hizmet Verdiğimiz Sektörler</h2>
          <p className="text-zinc-500 text-sm mb-8">Şehir merkezinin sektör çeşitliliğine göre uzmanlaşmış stratejiler kuruyoruz.</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Neden İzmit&apos;te Ramses Dijital?</h2>
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
              İzmit ve Kocaeli&apos;den Gerçek Müşterilerimiz Var
            </h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Portföyümüzdeki Psk. Nur Çelen (Kocaeli psikolog) SEO ve web çalışması sonrası Google&apos;da
              üst sıralara çıkarak organik randevu almaya başladı. Boş söz değil, canlı referans.
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
          { label: 'İzmit SEO', href: '/izmit-seo' },
          { label: 'İzmit Web Tasarım', href: '/izmit-web-tasarim' },
          { label: 'İzmit Google Ads', href: '/izmit-google-ads' },
          { label: 'İzmit Yazılım Ajansı', href: '/izmit-yazilim-ajansi' },
          { label: 'İzmit Reklam Ajansı', href: '/izmit-reklam-ajansi' },
          { label: 'Kocaeli Dijital Pazarlama', href: '/kocaeli-dijital-pazarlama' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            İzmit&apos;te Dijital Büyümeye Başlayın
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
