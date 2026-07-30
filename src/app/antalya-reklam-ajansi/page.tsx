import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, CheckCircle2, ArrowRight, Megaphone, Globe, BarChart3, Search, Mail, Zap, Star, Compass, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Antalya Reklam Ajansı | 100+ Proje — Ramses Dijital',
  description:
    'Antalya\'nın dijital reklam ajansı — otelcilik, gayrimenkul ve tarım ihracatına özel strateji. Google Ads, SEO ve pazarlama otomasyonu. Ücretsiz teklif alın.',
  alternates: { canonical: 'https://ramsesdigital.com/antalya-reklam-ajansi' },
  openGraph: {
    title: 'Antalya Reklam Ajansı | Ramses Dijital',
    description: 'Antalya\'da işletmenizi büyüten dijital reklam ajansı. Google Ads, SEO, web tasarım ve otomasyon.',
    url: 'https://ramsesdigital.com/antalya-reklam-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antalya Reklam Ajansı — Ramses Dijital',
    description: 'Antalya işletmeleri için dijital pazarlama, Google Ads, SEO.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  { icon: Search, title: 'SEO & Yerel SEO', desc: 'Google\'da "Antalya + sektörünüz" aramalarında üst sıralarda çıkın. Çok dilli içerik ve Google Business Profile yönetimi dahil.', href: '/antalya-seo' },
  { icon: Megaphone, title: 'Google Ads', desc: 'Antalya\'da ve yurt dışında potansiyel müşterilere tam doğru anda ulaşın. Reklam bütçenizi boşa harcamayın.', href: '/antalya-google-ads' },
  { icon: Globe, title: 'Web Tasarım', desc: 'Dönüşüm odaklı, çok dilli ve hızlı yüklenen web siteleri. Mobil uyumlu, SEO hazır.', href: '/antalya-web-tasarim' },
  { icon: Zap, title: 'Pazarlama Otomasyonu', desc: 'n8n ve e-posta otomasyonuyla rezervasyon ve lead süreçlerinizi otomatikleştirin.', href: '/hizmetler/n8n-otomasyon' },
  { icon: Mail, title: 'E-posta Pazarlama', desc: 'Erken rezervasyon kampanyaları ve alıcı adayı listenizi müşteriye dönüştüren e-posta serileri.', href: '/hizmetler/eposta-otomasyon' },
  { icon: BarChart3, title: 'Veri Analizi', desc: 'GA4 ve Looker Studio\'yla hangi kanalın ve dilin işe yaradığını kesin olarak görün.', href: '/hizmetler/veri-analizi' },
]

const whyUs = [
  { icon: Compass, title: 'Antalya\'nın Ekonomisini Anlıyoruz', desc: 'Turizm sezonu dalgalanmalarını, gayrimenkulde yabancı alıcı dinamiklerini ve tarım ihracatının ihtiyaçlarını biliyoruz. Genel şablon yok.' },
  { icon: Star, title: 'Sektöre Özel Strateji', desc: 'Otel, gayrimenkul, sera ihracatı ve yerel hizmet sektörlerinin her biri farklı dil, farklı kanal ve farklı zamanlama gerektiriyor.' },
  { icon: TrendingUp, title: 'ROI Odaklı', desc: 'Her kuruşun nereye gittiğini raporluyoruz. Gösteriş metrikleri değil, rezervasyon, satış ve dönüşüm.' },
  { icon: CheckCircle2, title: 'Şeffaf ve Dürüst İletişim', desc: 'Sahte referans veya abartılı vaat yok — ücretsiz danışmanlıkta gerçekçi beklenti ve net kapsam sunuyoruz.' },
]

const faqs = [
  { q: 'Antalya\'da reklam ajansı seçerken nelere dikkat etmeliyim?', a: 'En önemli kriter sektörünüze özel strateji sunup sunmadığıdır. Turizm, gayrimenkul ve tarım ihracatı çok farklı dinamiklere sahip — genel bir "reklam paketi" satan ajanslardan kaçının. Şeffaf raporlama yapıp yapmadığını da mutlaka sorun.' },
  { q: 'Antalya\'da dijital reklamın maliyeti nedir?', a: 'Google Ads reklam bütçesi, SEO yönetim ücreti ve web sitesi maliyeti işletmenizin büyüklüğüne, hedef dile ve sezonluk yoğunluğa göre değişir. Ücretsiz danışmanlık seansında size özel net fiyat sunuyoruz.' },
  { q: 'Antalya\'daki işletmem için Google\'da nasıl üst sıralara çıkarım?', a: 'İki paralel strateji gerekli: Google Business Profile optimizasyonu (harita paketi için) ve web sitesi SEO\'su (organik arama için). Turizm ve gayrimenkul işletmeleri için buna çok dilli içerik üretimi de eklenmeli.' },
  { q: 'Antalya\'da hangi sektörlere hizmet veriyorsunuz?', a: 'Otelcilik ve tatil köyü işletmeciliği, tur operatörleri ve transfer/rent a car firmaları, yabancıya gayrimenkul satışı yapan ofisler, seracılık/tarım ihracatı (özellikle Kumluca ve Finike bölgesi), ayrıca hukuk bürosu, diş hekimi/diş kliniği, psikolog/terapist ve güzellik merkezi gibi yerel hizmet sektörleri.' },
  { q: 'Sonuçları ne zaman görmeye başlarım?', a: 'Google Ads 1-2 hafta içinde trafik getirir. SEO için yerel sonuçlar (harita) 2-4 haftada görünür; çok dilli organik sıralamalar genellikle 4-6 ay içinde belirginleşir. Web sitesi hemen yayına girer.' },
  { q: 'Antalya\'daki tüm ilçelere hizmet veriyor musunuz?', a: 'Evet. Muratpaşa, Konyaaltı, Kepez, Alanya, Manavgat, Serik, Döşemealtı, Aksu, Kaş, Side dahil tüm Antalya ilçelerine ve çevre ilçelere hizmet veriyoruz. Çalışmalarımızın tamamı uzaktan yürütülüyor.' },
  { q: 'Sözleşme şartlarınız nedir?', a: 'Google Ads ve SEO için minimum 3 ay öneriyoruz — turizm sektöründe sezonluk dalgalanmayı doğru değerlendirmek için bir sezon geçişini görmek faydalı olur. Web tasarım projeleri tek seferlik sözleşmeyle teslim edilir.' },
  { q: 'Fiziksel olarak Antalya\'da ofisiniz var mı?', a: 'Hayır, merkezimiz Kocaeli\'de — Antalya\'ya tamamen uzaktan hizmet veriyoruz. Keşif görüşmesi, strateji sunumu ve aylık raporlama Google Meet/Zoom üzerinden yapılıyor.' },
  { q: 'Reklam hesabı kimin üzerine açılıyor?', a: 'Sizin üzerinize. Hesap size ait olur, biz yönetici erişimiyle çalışırız — sezon başı-sonu ajans değişikliği düşünüyorsanız bile geçmiş kampanya verileriniz ve öğrenmeleriniz sizde kalır.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://ramsesdigital.com/#business',
      name: 'Ramses Dijital',
      description: 'Antalya\'nın dijital reklam ve pazarlama ajansı',
      url: 'https://ramsesdigital.com',
      areaServed: [
        { '@type': 'City', name: 'Antalya' },
        { '@type': 'City', name: 'Muratpaşa' },
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
      knowsAbout: ['SEO', 'Google Ads', 'Web Tasarım', 'Dijital Pazarlama', 'E-posta Pazarlama', 'Pazarlama Otomasyonu'],
      sameAs: ['https://ramsesdigital.com'],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Antalya Reklam Ajansı', item: 'https://ramsesdigital.com/antalya-reklam-ajansi' },
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

export default function AntalyaReklamAjansiPage() {
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
            <span className="text-blue-400 text-sm font-medium">Antalya — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Antalya&apos;nın Dijital
            <br />
            <span className="gradient-text">Reklam Ajansı</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Google Ads, SEO, web tasarım ve pazarlama otomasyonu ile Antalya&apos;nın turizm, gayrimenkul ve tarım ihracatı işletmelerini dijitalde büyütüyoruz.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            Muratpaşa · Konyaaltı · Kepez · Alanya · Manavgat · Serik ve tüm Antalya&apos;ya hizmet veriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
            <Link href="/portfolyo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Portföyümüzü Gör <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10+', label: 'Antalya İlçesi' },
            { value: '3', label: 'Dil Desteği — TR/EN/RU' },
            { value: '4', label: 'Sektöre Özel Strateji' },
            { value: '6+', label: 'Hizmet Kategorisi' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
              <p className="text-3xl font-bold text-white mb-1">{value}</p>
              <p className="text-zinc-500 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Antalya İşletmeniz İçin Tüm Dijital Hizmetler
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Tek çatı altında her ihtiyacınız — parçaları bir araya getiren strateji bizde.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-6 transition-all hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3">{desc}</p>
                <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Detaylı İncele <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Neden Antalya&apos;daki İşletmeler Bizi Seçiyor?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
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

      {/* Honest portfolio note instead of fake local clients */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8 text-center">
            <CheckCircle2 size={32} className="text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Portföyümüzü İnceleyin</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Antalya&apos;da henüz canlı bir referansımız yok — bunu gizlemek yerine açıkça söylüyoruz.
              Türkiye genelinde ziyaret edilebilir, gerçek müşteri çalışmalarımız var; portföyümüzü inceleyip
              kendi kararınızı verebilirsiniz.
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
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Sık Sorulan Sorular
          </h2>
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

      <ReviewsMarquee />

      <RelatedPages
        pages={[
          { label: 'Antalya SEO', href: '/antalya-seo' },
          { label: 'Antalya Web Tasarım', href: '/antalya-web-tasarim' },
          { label: 'Antalya Google Ads', href: '/antalya-google-ads' },
          { label: 'Antalya Yazılım Ajansı', href: '/antalya-yazilim-ajansi' },
          { label: 'Antalya Dijital Pazarlama', href: '/antalya-dijital-pazarlama' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Antalya&apos;da Dijitalde Öne Çıkmaya Hazır mısınız?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            30 dakikalık ücretsiz danışmanlık seansında işletmenize özel yol haritası çıkaralım.
          </p>
          <CalendlyButton label="Ücretsiz Danışmanlık Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
