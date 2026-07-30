import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, CheckCircle2, ArrowRight, Megaphone, Globe, BarChart3, Search, Zap, Building2, Factory, ShieldCheck, LineChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kocaeli Reklam Ajansı | 100+ Proje — Ramses Dijital',
  description:
    'Kocaeli genelinde (İzmit, Gebze, Darıca, Körfez, Gölcük, Başiskele) dijital reklam ajansı — ücretsiz danışmanlık. Google Ads, SEO ve web tasarım ile işletmenizi büyütün.',
  alternates: { canonical: 'https://ramsesdigital.com/kocaeli-reklam-ajansi' },
  openGraph: {
    title: 'Kocaeli Reklam Ajansı | Ramses Dijital',
    description: 'Kocaeli\'nin tüm ilçelerinde işletmeleri büyüten dijital reklam ajansı.',
    url: 'https://ramsesdigital.com/kocaeli-reklam-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kocaeli Reklam Ajansı — Ramses Dijital',
    description: 'Kocaeli\'nin tüm ilçelerinde dijital reklam ve pazarlama.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const districts = [
  'İzmit', 'Gebze', 'Darıca', 'Körfez', 'Gölcük', 'Başiskele', 'Çayırova', 'Karamürsel', 'Kandıra', 'Dilovası',
]

const services = [
  { icon: Megaphone, title: 'Google Ads Yönetimi', desc: 'Kocaeli\'nin hangi ilçesinde faaliyet gösterirseniz gösterin, aramaya çıkan potansiyel müşteriye tam doğru anda ulaşırız.', href: '/hizmetler/google-ads-kocaeli' },
  { icon: Search, title: 'SEO & Google Haritalar', desc: 'İlçenize özel yerel arama sonuçlarında ve Google Haritalar paketinde üst sıralarda yer alın.', href: '/hizmetler/seo-kocaeli' },
  { icon: Globe, title: 'Web Tasarım', desc: 'Kocaeli sanayisinin B2B ihtiyaçlarından mahalle esnafının yerel müşteri arayışına kadar her ölçekte web sitesi.', href: '/hizmetler/web-tasarim-kocaeli' },
  { icon: Zap, title: 'Pazarlama Otomasyonu', desc: 'n8n tabanlı otomasyonlarla teklif takibi, lead yönlendirme ve müşteri iletişimini otomatikleştirin.', href: '/hizmetler/n8n-otomasyon' },
  { icon: BarChart3, title: 'Veri Analizi & Raporlama', desc: 'Hangi ilçeden, hangi kanaldan gelen trafiğin satışa döndüğünü net biçimde görün.', href: '/hizmetler/veri-analizi' },
  { icon: LineChart, title: 'Marka Bilinirliği Kampanyaları', desc: 'Kocaeli genelinde marka görünürlüğünü artıran display ve retargeting kampanyaları.', href: '/hizmetler/google-ads-kocaeli' },
]

const whyUs = [
  { icon: Factory, title: 'Sanayi Bölgesini Biliyoruz', desc: 'Kocaeli\'nin OSB\'leri ve B2B üretim işletmeleri için dijital pazarlamanın farklı çalıştığını biliyoruz — jenerik ajans şablonu kullanmıyoruz.' },
  { icon: Building2, title: 'Her İlçeye Özel Strateji', desc: 'Gebze\'deki bir fabrika ile Gölcük\'teki bir klinik aynı kampanyayla yönetilmez. İlçe ve sektöre göre ayrı strateji kurarız.' },
  { icon: ShieldCheck, title: 'Şeffaf Raporlama', desc: 'Reklam harcamasının nereye gittiğini, hangi ilçeden dönüşüm geldiğini her ay açık biçimde raporlarız.' },
  { icon: CheckCircle2, title: 'Kanıtlanmış Referanslar', desc: 'Kocaeli bölgesinden gerçek, canlı müşteri siteleri — istediğiniz zaman ziyaret edip inceleyebilirsiniz.' },
]

const clients = [
  { name: 'Psk. Nur Çelen', detail: 'Kocaeli psikolog — Yerel SEO & Web', url: 'https://nurcelen.com' },
  { name: 'Av. Mert Anıl Güler', detail: 'İstanbul avukat — Web & SEO', url: 'https://www.mertanilguler.av.tr' },
  { name: 'Av. Furkan Arıkan', detail: 'İstanbul avukat — Web & SEO', url: 'https://www.furkanarikan.av.tr' },
  { name: 'Gamzeli Dermokozmetik', detail: 'E-ticaret & SEO', url: 'https://gamzelidermokozmetik.com' },
  { name: 'Veterineri Bul', detail: 'Platform & Yapay Zeka', url: 'https://www.veterineribul.com' },
  { name: 'TerapistiBul', detail: 'Platform & YZ Eşleştirme', url: 'https://terapistibul.com' },
]

const faqs = [
  { q: 'Kocaeli\'nin hangi ilçelerinde hizmet veriyorsunuz?', a: 'Kocaeli\'nin tamamına hizmet veriyoruz: İzmit, Gebze, Darıca, Körfez, Gölcük, Başiskele, Çayırova, Karamürsel, Kandıra ve Dilovası. Çalışmalarımız uzaktan yürütüldüğü için ilçe farkı sonuçları etkilemiyor, yalnızca strateji o ilçenin dinamiklerine göre şekilleniyor.' },
  { q: 'Kocaeli\'de sanayi ve üretim firmaları için reklam çalışıyor musunuz?', a: 'Evet. Kocaeli\'nin güçlü sanayi altyapısı nedeniyle B2B üretim firmaları için LinkedIn ve Google Ads kampanyaları, tedarikçi/distribütör bulma amaçlı SEO çalışmaları yürütüyoruz. B2B satış döngüsü B2C\'den farklı olduğu için ayrı bir hunide raporluyoruz.' },
  { q: 'Reklam ajansı seçerken Kocaeli\'ye özel nelere dikkat etmeliyim?', a: 'Ajansın Kocaeli\'nin ilçe yapısını (sanayi ağırlıklı Gebze-Dilovası, sahil turizmi olan Gölcük-Körfez, merkez İzmit gibi) ayırt edip etmediğine bakın. Tüm ilçeleri aynı jenerik metinle geçen ajanslardan kaçının; gerçek referans ve canlı site isteyin.' },
  { q: 'Kocaeli genelinde reklam bütçesi nasıl belirleniyor?', a: 'İlçenizdeki rekabet yoğunluğuna, sektörünüze ve hedeflerinize göre değişir. Sanayi bölgelerinde B2B kampanya maliyeti farklı, merkez ilçelerde yerel hizmet reklamı maliyeti farklıdır. Ücretsiz danışmanlıkta işletmenize özel bütçeyi netleştiriyoruz.' },
  { q: 'Google Haritalar\'da ilçeme özel nasıl görünür olurum?', a: 'Google Business Profile\'ı doğru ilçe ve mahalle bilgisiyle kurmak, hizmet alanınızı doğru tanımlamak ve o bölgeden gerçek müşteri yorumları toplamak gerekir. Kocaeli\'nin her ilçesinde ayrı bir yerel SEO çalışması yürütebiliyoruz.' },
  { q: 'Birden fazla Kocaeli ilçesinde şubem var, tek kampanyada yönetebilir misiniz?', a: 'Evet, çoklu şube/lokasyon yönetimi konusunda deneyimliyiz. Her şube için ayrı Google Business Profile ve lokasyon bazlı reklam grupları kurarak, hangi şubenin hangi ilçeden performans aldığını ayrı ayrı raporlarız.' },
  { q: 'Sonuçları görmem ne kadar sürer?', a: 'Google Ads genelde 1-2 hafta içinde trafik getirmeye başlar. SEO\'da yerel (harita) sonuçlar 2-4 hafta, organik sıralama iyileşmesi 3-6 ay sürer. Kocaeli\'nin rekabet yoğun ilçelerinde (İzmit, Gebze merkez) süre biraz uzayabilir.' },
  { q: 'Yapay zeka arama motorlarında (ChatGPT, Gemini) Kocaeli işletmesi olarak görünebilir miyim?', a: 'Evet. GEO (Generative Engine Optimization) stratejimizle, birisi ChatGPT\'ye "Kocaeli\'de [hizmetiniz]" diye sorduğunda önerilme ihtimalinizi artıran yapılandırılmış içerik ve otoriter kaynak bağlantıları oluşturuyoruz. Bu çalışma SEO paketlerimize dahildir.' },
  { q: 'Google Ads hesabı bizim adımıza mı açılıyor?', a: 'Evet, hesap sizin adınıza açılır, biz sadece yönetici olarak bağlanırız. "İlk sırada çıkmayı garanti ediyoruz" diyen ajanslara dikkat edin — Google Ads sıralaması gerçek zamanlı açık artırmadır, hiç kimse bunu garanti edemez.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://ramsesdigital.com/#business',
      name: 'Ramses Dijital',
      description: 'Kocaeli\'nin tüm ilçelerine hizmet veren dijital reklam ajansı',
      url: 'https://ramsesdigital.com',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Kocaeli' },
        { '@type': 'City', name: 'İzmit' },
        { '@type': 'City', name: 'Gebze' },
        { '@type': 'City', name: 'Darıca' },
        { '@type': 'City', name: 'Körfez' },
        { '@type': 'City', name: 'Gölcük' },
        { '@type': 'City', name: 'Başiskele' },
        { '@type': 'City', name: 'Çayırova' },
        { '@type': 'City', name: 'Karamürsel' },
        { '@type': 'City', name: 'Kandıra' },
        { '@type': 'City', name: 'Dilovası' },
      ],
      telephone: '+905355601936',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'İzmit',
        addressRegion: 'Kocaeli',
        addressCountry: 'TR',
      },
      knowsAbout: ['SEO', 'Google Ads', 'Web Tasarım', 'Dijital Pazarlama', 'Pazarlama Otomasyonu', 'B2B Pazarlama'],
      sameAs: ['https://ramsesdigital.com'],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Kocaeli Reklam Ajansı', item: 'https://ramsesdigital.com/kocaeli-reklam-ajansi' },
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

export default function KocaeliReklamAjansiPage() {
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
            <span className="text-blue-400 text-sm font-medium">Kocaeli&apos;nin Tüm İlçeleri</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Kocaeli&apos;nin Dijital
            <br />
            <span className="gradient-text">Reklam Ajansı</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Sanayi bölgesinden sahil ilçelerine, Kocaeli&apos;nin her köşesindeki işletmeler için Google Ads, SEO ve web tasarımla ölçülebilir büyüme.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            {districts.join(' · ')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Danışmanlık Al" variant="primary" />
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
            { value: '10', label: 'Kocaeli İlçesine Hizmet' },
            { value: '%300+', label: 'Ortalama Trafik Artışı' },
            { value: '6+', label: 'Gerçek Referans' },
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
              Kocaeli&apos;nin Her İlçesine Uygun Dijital Hizmetler
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Sanayi işletmesinden yerel esnafa, ihtiyacınız ne olursa olsun uygun strateji kurarız.
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

      {/* Districts */}
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Kocaeli&apos;nin Tüm İlçelerine Hizmet Veriyoruz</h2>
          <p className="text-zinc-500 text-sm mb-8">İzmit merkez bölgesinden sanayi ilçelerine, her bölgenin dinamiği farklı — uzmanlık önemli.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {districts.map((district) => (
              <span key={district} className="bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-sm rounded-full px-4 py-2">
                {district}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kocaeli İşletmeleri Neden Bizi Tercih Ediyor?
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
      <section className="py-20 px-6 bg-[#080D18]">
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
      <section className="py-20 px-6">
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
          { label: 'Kocaeli SEO', href: '/kocaeli-seo' },
          { label: 'Kocaeli Web Tasarım', href: '/kocaeli-web-tasarim' },
          { label: 'Kocaeli Google Ads', href: '/kocaeli-google-ads' },
          { label: 'Kocaeli Yazılım Ajansı', href: '/kocaeli-yazilim-ajansi' },
          { label: 'İzmit Reklam Ajansı', href: '/izmit-reklam-ajansi' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Kocaeli&apos;nin Neresinde Olursanız Olun, Birlikte Büyüyelim
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            30 dakikalık ücretsiz danışmanlık seansında ilçenize ve sektörünüze özel yol haritası çıkaralım.
          </p>
          <CalendlyButton label="Ücretsiz Danışmanlık Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
