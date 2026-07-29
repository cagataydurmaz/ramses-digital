import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, CheckCircle2, ArrowRight, Megaphone, Globe, BarChart3, Search, Mail, Zap, Star, Users, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bursa Reklam Ajansı — Ramses Dijital',
  description:
    'Bursa\'nın dijital reklam ajansı. Google Ads, SEO, web tasarım, e-posta pazarlama ve otomasyon. Otomotiv yan sanayi, mobilya ve tekstil sektörüne özel strateji. Ücretsiz teklif alın.',
  alternates: { canonical: 'https://ramsesdigital.com/bursa-reklam-ajansi' },
  openGraph: {
    title: 'Bursa Reklam Ajansı | Ramses Dijital',
    description: 'Bursa\'da işletmenizi büyüten dijital reklam ajansı. Google Ads, SEO, web tasarım ve otomasyon.',
    url: 'https://ramsesdigital.com/bursa-reklam-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bursa Reklam Ajansı — Ramses Dijital',
    description: 'Bursa işletmeleri için dijital pazarlama, Google Ads, SEO.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  { icon: Search, title: 'SEO & Yerel SEO', desc: 'Google\'da "Bursa + sektörünüz" aramalarında üst sıralarda çıkın. Google Business Profile yönetimi dahil.', href: '/bursa-seo' },
  { icon: Megaphone, title: 'Google Ads', desc: 'Bursa\'da potansiyel müşterilere tam doğru anda ulaşın. Reklam bütçenizi boşa harcamayın.', href: '/bursa-google-ads' },
  { icon: Globe, title: 'Web Tasarım', desc: 'Dönüşüm odaklı, hızlı yüklenen web siteleri. Mobil uyumlu, SEO hazır.', href: '/bursa-web-tasarim' },
  { icon: Zap, title: 'Pazarlama Otomasyonu', desc: 'n8n ve e-posta otomasyonuyla müşteri süreçlerinizi otomatikleştirin. Uyurken satış yapın.', href: '/hizmetler/n8n-otomasyon' },
  { icon: Mail, title: 'E-posta Pazarlama', desc: 'Listenizi müşteriye dönüştüren e-posta serileri. B2B tedarikçi ilişkilerinde de etkili.', href: '/hizmetler/eposta-otomasyon' },
  { icon: BarChart3, title: 'Veri Analizi', desc: 'GA4 ve Looker Studio\'yla hangi kanalın işe yaradığını kesin olarak görün.', href: '/hizmetler/veri-analizi' },
]

const whyUs = [
  { icon: MapPin, title: 'Bursa\'nın Sektörel Kimliğini Biliyoruz', desc: 'Otomotiv yan sanayi, İnegöl mobilyacılığı ve tekstil sektörünün dinamiklerini anlayan bir ekiple çalışıyorsunuz. Genel şablon yok.' },
  { icon: Users, title: 'Türkiye Genelinde Kanıtlanmış Referanslar', desc: 'Bursa\'ya özel vaka çalışmamız henüz yok, ama Türkiye genelinde canlı, ziyaret edilebilir projelerimiz var.' },
  { icon: TrendingUp, title: 'ROI Odaklı', desc: 'Her kuruşun nereye gittiğini raporluyoruz. Gösteriş metrikleri değil, satış ve dönüşüm.' },
  { icon: Star, title: 'Uzun Vadeli Ortaklık', desc: 'Bir kere al-git değil, aylık takip ve sürekli optimizasyon. Büyüdükçe birlikte büyüyoruz.' },
]

const faqs = [
  { q: 'Bursa\'da reklam ajansı seçerken nelere dikkat etmeliyim?', a: 'En önemli kriter gerçek referanslar ve şeffaf raporlamadır. Ajansın sektörünüze (örneğin otomotiv yan sanayi veya mobilya üretimi) daha önce çalışıp çalışmadığını, somut sonuçlar sunup sunamadığını ve aylık raporlama yapıp yapmadığını sormalısınız. Sözleşme imzalamadan önce canlı müşteri sitelerine mutlaka bakın.' },
  { q: 'Bursa\'da dijital reklamın maliyeti nedir?', a: 'Google Ads reklam bütçesi, SEO yönetim ücreti ve web sitesi maliyeti işletmenizin büyüklüğüne ve hedeflerinize göre değişir. Ücretsiz danışmanlık seansında size özel bilgi paylaşıyoruz.' },
  { q: 'Bursa\'daki işletmem için Google\'da nasıl üst sıralara çıkarım?', a: 'İki paralel strateji gerekli: Google Business Profile optimizasyonu (harita paketi için) ve web sitesi SEO\'su (organik arama için). GBP için işletme bilgilerini eksiksiz doldurmak, müşteri yorumları toplamak ve yerel dizinlere kayıt olmak kritiktir. Web sitesi için Bursa\'ya özel içerik üretmek şarttır.' },
  { q: 'Bursa\'da hangi sektörlere hizmet veriyorsunuz?', a: 'Bursa\'nın güçlü sektörleri olan otomotiv yan sanayi, mobilya üretimi (özellikle İnegöl) ve tekstilin yanında hukuk, diş hekimliği, psikoloji/terapi, güzellik & estetik ve gıda sanayii gibi alanlarda da çalışıyoruz. Sektöre özel strateji kuruyoruz, şablon uygulamıyoruz.' },
  { q: 'Sonuçları ne zaman görmeye başlarım?', a: 'Google Ads 1-2 hafta içinde trafik getirir. SEO için yerel sonuçlar (harita) 2-4 haftada görünür; organik sıralamalar 3-6 ay içinde belirginleşir. Web sitesi hemen yayına girer. Hızlı sonuç almak isteyenler için Google Ads\'i başlangıç stratejisi olarak öneriyoruz.' },
  { q: 'Bursa\'nın hangi ilçelerine hizmet veriyorsunuz?', a: 'Osmangazi, Nilüfer, Yıldırım, Gemlik, İnegöl, Mudanya, Gürsu, Kestel, Orhangazi ve Mustafakemalpaşa dahil Bursa\'nın tüm ilçelerine uzaktan hizmet veriyoruz.' },
  { q: 'Sözleşme şartlarınız nedir?', a: 'Google Ads ve SEO için minimum 3 ay, ideal olarak 6 ay öneriyoruz. Dijital pazarlama kısa vadede değil, birikimiyle sonuç verir. Web tasarım projeleri tek seferlik sözleşmeyle teslim edilir.' },
  { q: 'Yapay zeka (ChatGPT, Gemini) aramalarında da görünür olabilir miyim?', a: 'Evet, bu GEO (Generative Engine Optimization) olarak adlandırılıyor. Bursa\'da sektörünüzü araştıran birinin ChatGPT\'ye sorduğunda sizi önermesi için yapılandırılmış içerik, citation-worthy veriler ve otoriter backlink profili gerekiyor. Tüm SEO paketlerimize GEO stratejisi dahildir.' },
  { q: 'Fiziksel olarak Bursa\'da ofisiniz var mı?', a: 'Hayır, merkezimiz Kocaeli\'de — Bursa\'ya tamamen uzaktan hizmet veriyoruz. Keşif görüşmesi, strateji onayı ve raporlama Google Meet/Zoom üzerinden yürütülüyor.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://ramsesdigital.com/#business',
      name: 'Ramses Dijital',
      description: 'Bursa\'nın dijital reklam ve pazarlama ajansı — uzaktan hizmet',
      url: 'https://ramsesdigital.com',
      areaServed: [
        { '@type': 'City', name: 'Bursa' },
        { '@type': 'City', name: 'Osmangazi' },
        { '@type': 'City', name: 'Nilüfer' },
        { '@type': 'City', name: 'Yıldırım' },
        { '@type': 'City', name: 'İnegöl' },
        { '@type': 'City', name: 'Gemlik' },
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
        { '@type': 'ListItem', position: 2, name: 'Bursa Reklam Ajansı', item: 'https://ramsesdigital.com/bursa-reklam-ajansi' },
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

export default function BursaReklamAjansiPage() {
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
            <span className="text-blue-400 text-sm font-medium">Bursa — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Bursa&apos;nın Dijital
            <br />
            <span className="gradient-text">Reklam Ajansı</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Google Ads, SEO, web tasarım ve pazarlama otomasyonu ile Bursa işletmelerini dijitalde büyütüyoruz. Otomotiv yan sanayi, mobilya ve tekstil sektörüne özel strateji.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            Osmangazi · Nilüfer · Yıldırım · Gemlik · İnegöl · Mudanya · Gürsu · Kestel · Orhangazi · Mustafakemalpaşa
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
            <Link href="/portfolyo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Referanslarımızı Gör <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bursa İşletmeniz İçin Tüm Dijital Hizmetler
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
              Neden Bursa&apos;daki İşletmeler Bizi Seçiyor?
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

      {/* Portfolio pointer instead of fabricated local clients */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8 text-center">
            <CheckCircle2 size={32} className="text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Türkiye Genelinde Canlı Referanslarımız Var</h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Bursa&apos;ya özel bir vaka çalışmamız henüz yok — bunu saklamıyoruz. Ancak Türkiye genelinde
              ziyaret edilebilir, canlı SEO ve web tasarım projelerimiz var. Portföyümüzü inceleyip aynı
              mühendislik disipliniyle Bursa işletmeniz için nasıl çalışacağımızı görebilirsiniz.
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

      <RelatedPages
        pages={[
          { label: 'Bursa SEO', href: '/bursa-seo' },
          { label: 'Bursa Web Tasarım', href: '/bursa-web-tasarim' },
          { label: 'Bursa Google Ads', href: '/bursa-google-ads' },
          { label: 'Bursa Dijital Pazarlama', href: '/bursa-dijital-pazarlama' },
          { label: 'Bursa Yazılım Ajansı', href: '/bursa-yazilim-ajansi' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Bursa&apos;da Dijitalde Öne Çıkmaya Hazır mısınız?
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
