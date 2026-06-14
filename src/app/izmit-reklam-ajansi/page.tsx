import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import { MapPin, CheckCircle2, ArrowRight, Megaphone, Globe, BarChart3, Search, Mail, Zap, Star, Users, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İzmit Reklam Ajansı | Dijital Pazarlama & Google Ads — Ramses Dijital',
  description:
    'İzmit ve Kocaeli\'nin dijital reklam ajansı. Google Ads, SEO, web tasarım, sosyal medya ve e-posta pazarlama. Gerçek müşteri, gerçek sonuç. Ücretsiz teklif alın.',
  alternates: { canonical: 'https://ramsesdigital.com/izmit-reklam-ajansi' },
  openGraph: {
    title: 'İzmit Reklam Ajansı | Ramses Dijital',
    description: 'İzmit\'te işletmenizi büyüten dijital reklam ajansı. Google Ads, SEO, web tasarım ve otomasyon.',
    url: 'https://ramsesdigital.com/izmit-reklam-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İzmit Reklam Ajansı — Ramses Dijital',
    description: 'İzmit ve Kocaeli işletmeleri için dijital pazarlama, Google Ads, SEO.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  { icon: Search, title: 'SEO & Yerel SEO', desc: 'Google\'da "İzmit + sektörünüz" aramalarında üst sıralarda çıkın. Google Business Profile yönetimi dahil.', href: '/hizmetler/seo-kocaeli' },
  { icon: Megaphone, title: 'Google Ads', desc: 'İzmit ve Kocaeli\'de potansiyel müşterilere tam doğru anda ulaşın. Reklam bütçenizi boşa harcamayın.', href: '/hizmetler/google-ads-kocaeli' },
  { icon: Globe, title: 'Web Tasarım', desc: 'Dönüşüm odaklı, hızlı yüklenen web siteleri. Mobil uyumlu, SEO hazır.', href: '/hizmetler/web-tasarim-kocaeli' },
  { icon: Zap, title: 'Pazarlama Otomasyonu', desc: 'n8n ve e-posta otomasyonuyla müşteri süreçlerinizi otomatikleştirin. Uyurken satış yapın.', href: '/hizmetler/n8n-otomasyon' },
  { icon: Mail, title: 'E-posta Pazarlama', desc: 'Listenizi müşteriye dönüştüren e-posta serileri. Ortalama %42 ROI.', href: '/hizmetler/eposta-otomasyon' },
  { icon: BarChart3, title: 'Veri Analizi', desc: 'GA4 ve Looker Studio\'yla hangi kanalın işe yaradığını kesin olarak görün.', href: '/hizmetler/veri-analizi' },
]

const whyUs = [
  { icon: MapPin, title: 'İzmit\'i Tanıyoruz', desc: 'Kocaeli\'nin dinamiklerini, rakiplerinizi ve yerel müşteri alışkanlıklarını biliyoruz. Genel şablon yok.' },
  { icon: Users, title: 'Kanıtlanmış Referanslar', desc: 'Kocaeli\'den gerçek müşteriler, canlı siteler. İstediğiniz zaman ziyaret edebilirsiniz.' },
  { icon: TrendingUp, title: 'ROI Odaklı', desc: 'Her kuruşun nereye gittiğini raporluyoruz. Gösteriş metrikleri değil, satış ve dönüşüm.' },
  { icon: Star, title: 'Uzun Vadeli Ortaklık', desc: 'Bir kere al-git değil, aylık takip ve sürekli optimizasyon. Büyüdükçe birlikte büyüyoruz.' },
]

const clients = [
  { name: 'Psk. Nur Çelen', detail: 'Kocaeli psikolog — Yerel SEO & Web', url: 'https://nurcelen.com' },
  { name: 'Av. Mert Anıl Güler', detail: 'İstanbul avukat — Web & Google Ads', url: 'https://www.mertanilguler.av.tr' },
  { name: 'Gamzeli Dermokozmetik', detail: 'E-ticaret & SEO', url: 'https://gamzelidermokozmetik.com' },
  { name: 'Veterineri Bul', detail: 'Platform & Yapay Zeka', url: 'https://www.veterineribul.com' },
  { name: 'TerapistiBul', detail: 'Platform & YZ Eşleştirme', url: 'https://terapistibul.com' },
]

const faqs = [
  { q: 'İzmit\'te reklam ajansı seçerken nelere dikkat etmeliyim?', a: 'En önemli kriter gerçek referanslar ve şeffaf raporlamadır. Ajansın daha önce İzmit veya Kocaeli\'de çalışıp çalışmadığını, somut sonuçlar sunup sunamadığını ve aylık raporlama yapıp yapmadığını sormalısınız. Sözleşme imzalamadan önce canlı müşteri sitelerine mutlaka bakın.' },
  { q: 'İzmit\'te dijital reklamın maliyeti nedir?', a: 'Google Ads için aylık minimum 3.000-5.000 TL reklam bütçesi öneriyoruz. Yönetim ücreti ayrıca belirlenir. SEO çalışması aylık 6.000-15.000 TL arasında değişir. Web sitesi tek seferlik 15.000-50.000 TL aralığında. İşletmenizin büyüklüğüne göre ücretsiz danışmanlık seansında size özel fiyat sunuyoruz.' },
  { q: 'Kocaeli\'deki işletmem için Google\'da nasıl üst sıralara çıkarım?', a: 'İki paralel strateji gerekli: Google Business Profile optimizasyonu (harita paketi için) ve web sitesi SEO\'su (organik arama için). GBP için işletme bilgilerini eksiksiz doldurmak, müşteri yorumları toplamak ve yerel dizinlere kayıt olmak kritiktir. Web sitesi için İzmit ve Kocaeli\'ye özel içerik üretmek şarttır.' },
  { q: 'İzmit\'te hangi sektörlere hizmet veriyorsunuz?', a: 'Sağlık (psikolog, diş hekimi, veteriner), hukuk, e-ticaret, sanayi/üretim B2B, restoran & kafe, güzellik & estetik, inşaat ve gayrimenkul sektörlerinde aktif referanslarımız var. İzmit\'in sanayi ağırlıklı yapısı nedeniyle B2B dijital pazarlamada güçlü deneyimimiz bulunuyor.' },
  { q: 'Sonuçları ne zaman görmeye başlarım?', a: 'Google Ads 1-2 hafta içinde trafik getirir. SEO için yerel sonuçlar (harita) 2-4 haftada görünür; organik sıralamalar 3-6 ay içinde belirginleşir. Web sitesi hemen yayına girer. Sabırsız olanlar için hızlı sonuç almak amacıyla Google Ads\'i başlangıç stratejisi olarak öneriyoruz.' },
  { q: 'İzmit dışındaki Kocaeli ilçelerine de hizmet veriyor musunuz?', a: 'Evet. Gebze, Darıca, Körfez, Gölcük, Başiskele, Çayırova ve tüm Kocaeli ilçelerine hizmet veriyoruz. Aynı zamanda İstanbul, Ankara ve diğer büyük şehirlerdeki müşterilerimiz de var; çalışmalarımızın tamamı uzaktan yürütülüyor.' },
  { q: 'Sözleşme şartlarınız nedir?', a: 'Google Ads ve SEO için minimum 3 ay, ideal olarak 6 ay öneriyoruz. Dijital pazarlama kısa vadede değil, birikimiyle sonuç verir. Web tasarım projeleri tek seferlik sözleşmeyle teslim edilir. Uzun vadeli sözleşmelerde anlamlı indirimler sunuyoruz.' },
  { q: 'Yapay zeka (ChatGPT, Gemini) aramalarında da görünür olabilir miyim?', a: 'Evet, bu GEO (Generative Engine Optimization) olarak adlandırılıyor. İzmit veya Kocaeli\'de sektörünüzü araştıran birinin ChatGPT\'ye sorduğunda sizi önermesi için yapılandırılmış içerik, citation-worthy veriler ve otoriter backlink profili gerekiyor. Tüm SEO paketlerimize GEO stratejisi dahildir.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://ramsesdigital.com/#business',
      name: 'Ramses Dijital',
      description: 'İzmit ve Kocaeli\'nin dijital reklam ve pazarlama ajansı',
      url: 'https://ramsesdigital.com',
      areaServed: [
        { '@type': 'City', name: 'İzmit' },
        { '@type': 'City', name: 'Kocaeli' },
        { '@type': 'City', name: 'Gebze' },
        { '@type': 'City', name: 'Darıca' },
        { '@type': 'City', name: 'Körfez' },
        { '@type': 'City', name: 'Gölcük' },
      ],
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
        { '@type': 'ListItem', position: 2, name: 'İzmit Reklam Ajansı', item: 'https://ramsesdigital.com/izmit-reklam-ajansi' },
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

export default function IzmitReklamAjansiPage() {
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
            <span className="text-blue-400 text-sm font-medium">İzmit & Kocaeli</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            İzmit&apos;in Dijital
            <br />
            <span className="gradient-text">Reklam Ajansı</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Google Ads, SEO, web tasarım ve pazarlama otomasyonu ile İzmit ve Kocaeli işletmelerini dijitalde büyütüyoruz. Gerçek müşteriler, ölçülebilir sonuçlar.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            Gebze · Darıca · Körfez · Gölcük · Başiskele ve tüm Kocaeli&apos;ye hizmet veriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
            <Link href="/portfolyo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Referanslarımızı Gör <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '5+', label: 'Canlı Referans' },
            { value: '%300+', label: 'Ortalama Trafik Artışı' },
            { value: '3x', label: 'Dönüşüm İyileştirmesi' },
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
              İzmit İşletmeniz İçin Tüm Dijital Hizmetler
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
              Neden İzmit&apos;teki İşletmeler Bizi Seçiyor?
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

      {/* Real Clients */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Gerçek Müşteriler, Canlı Siteler</h2>
            <p className="text-zinc-400 text-sm">Boş iddia yok — her birini ziyaret edebilirsiniz.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map(({ name, detail, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/25 rounded-xl p-4 transition-all"
              >
                <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                <div className="min-w-0">
                  <p className="text-white text-sm font-medium truncate">{name}</p>
                  <p className="text-zinc-500 text-xs">{detail}</p>
                </div>
                <ArrowRight size={13} className="text-zinc-600 group-hover:text-blue-400 ml-auto shrink-0 transition-colors" />
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portfolyo" className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center justify-center gap-1.5 transition-colors">
              Tüm Portföyü Gör <ArrowRight size={13} />
            </Link>
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

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            İzmit&apos;te Dijitalde Öne Çıkmaya Hazır mısınız?
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
