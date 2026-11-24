import type { Metadata } from 'next'
import ProjeGalerisi from '@/components/ProjeGalerisi'
import KurumsalSeoBolumu from '@/components/KurumsalSeoBolumu'
import RaporOrnegi from '@/components/RaporOrnegi'
import SehirSeoEkBolumu from '@/components/SehirSeoEkBolumu'
import { sehirSeoEk } from '@/lib/sehirSeoEk'
import KisaOzet from '@/components/KisaOzet'
import Link from 'next/link'
import CitySeoSections from '@/components/CitySeoSections'
import { sehirSeo } from '@/lib/sehirSeo'
import SehirTeklifBolumu from '@/components/SehirTeklifBolumu'
import SeoChecklist from '@/components/SeoChecklist'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Search, ArrowRight, CheckCircle2, FileText, Link2, BarChart3, Zap, Award, TrendingUp } from 'lucide-react'
import HeroGuvenSatiri from '@/components/HeroGuvenSatiri'
import GoogleAramaAnimasyonu from '@/components/GoogleAramaAnimasyonu'

export const metadata: Metadata = {
  title: 'Bursa SEO Ajansı – Ücretsiz Site Analizi | Ramses Dijital',
  description:
    "Bursa SEO ajansı, SEO uzmanı ve danışmanlığı: Nilüfer'den İnegöl'e yerel ve teknik SEO. Ücretsiz site analizi, aylık şeffaf rapor. Google'da 5.0 puan.",
  alternates: { canonical: 'https://ramsesdigital.com/bursa-seo' },
  openGraph: {
    title: 'Bursa SEO Ajansı – Ücretsiz Site Analizi | Ramses Dijital',
    description: 'Bursa işletmeleri için yerel SEO, teknik SEO ve GEO/AEO optimizasyonu.',
    url: 'https://ramsesdigital.com/bursa-seo',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Search, title: 'Bursa Yerel SEO', desc: '"Nilüfer + hizmetiniz", "Osmangazi + hizmetiniz" gibi ilçe bazlı aramalarda Google harita paketine girin. İnegöl\'den Gemlik\'e ilçe bazlı anahtar kelime stratejisi.' },
  { icon: FileText, title: 'Teknik SEO & Core Web Vitals', desc: 'Site hızı, mobil uyum, indexlenebilirlik ve Core Web Vitals optimizasyonu — Bursa\'nın sanayi ve hizmet sektöründeki rekabette teknik fark belirleyici.' },
  { icon: Zap, title: 'GEO & AEO', desc: 'Yapay zekâ araçlarının ve arama özetlerinin alıntılayabileceği net, yapılandırılmış içerik. Sonuç garanti edilmez.' },
  { icon: Link2, title: 'B2B Odaklı Backlink İnşası', desc: 'Bursa\'nın otomotiv yan sanayi, mobilya ve tekstil sektörlerine özgü ticaret odaları, sektörel medya ve dizinlerden yüksek otoriteli link profili.' },
  { icon: BarChart3, title: 'Sektöre Özel İçerik Stratejisi', desc: 'Otomotiv yan sanayi firmanız için B2B içerik, İnegöl mobilya üreticiniz için ürün odaklı SEO — jenerik değil, sektöre özel mimari.' },
  { icon: Award, title: 'İlçe Bazlı Optimizasyon', desc: 'Osmangazi, Nilüfer, Yıldırım, Gemlik, İnegöl, Mudanya — işletmenizin gerçekten hizmet verdiği ilçelere göre içerik ve işletme profili stratejisi.' },
]

const ilceler = ['Osmangazi', 'Nilüfer', 'Yıldırım', 'Gemlik', 'İnegöl', 'Mudanya', 'Gürsu', 'Kestel', 'Orhangazi', 'Mustafakemalpaşa']

const faqs = [
  { q: 'Bursa\'da SEO neden otomotiv ve mobilya sektörü için özellikle önemli?', a: 'Bursa, OYAK Renault, Fiat/Tofaş ve Bosch gibi büyük otomotiv üreticilerinin çevresinde yoğunlaşan bir yan sanayi ekosistemine sahip. Bu firmaların büyük çoğunluğu B2B arama yapıyor — tedarikçi, parça üreticisi, kalıp firması arıyor. Aynı şekilde İnegöl mobilya sektöründe de hem B2B hem B2C arama hacmi yüksek. Doğru kurgulanmış SEO, bu spesifik arama hacmini yakalar.' },
  { q: 'Bursa\'nın 10\'dan fazla ilçesinin hepsi için mi çalışma yapılır?', a: 'Hayır, işletmenizin gerçek hizmet alanına göre önceliklendirme yapıyoruz. Bir mobilya üreticisi için İnegöl odaklı strateji mantıklıyken, bir hukuk bürosu için Osmangazi veya Nilüfer\'deki adliyeye yakınlık önemli olabilir. Stratejiyi işinize göre kuruyoruz, şablon uygulamıyoruz.' },
  { q: 'Bursa\'da SEO sonuçları ne kadar sürede görülür?', a: 'Google Business Profile ve harita sonuçları 2-4 haftada görünür olabilir. Organik web sitesi sıralamaları rekabetin yoğunluğuna göre 3-6 ay arasında belirginleşir. Bursa\'nın sanayi/B2B ağırlıklı sektörlerinde niş anahtar kelimelerde daha hızlı, genel terimlerde daha uzun sürebilir.' },
  { q: 'Bursa\'da hangi sektörler SEO\'dan en çok fayda görüyor?', a: 'Otomotiv yan sanayi firmaları, mobilya üreticileri (özellikle İnegöl), tekstil firmaları, hukuk büroları, diş hekimleri ve diş klinikleri, psikolog/terapistler, güzellik merkezleri ve estetik klinikleri, gıda sanayii ve termal turizm işletmeleri (Uludağ çevresi) Bursa\'da yüksek arama hacmine sahip alanlar.' },
  { q: 'Bursa SEO paketi ne kadara mal olur?', a: 'Kapsam sektöre ve rekabet seviyesine göre değişir: teknik denetim, anahtar kelime araştırması, aylık içerik üretimi, GBP yönetimi, backlink stratejisi ve raporlama. Net fiyat bilgisini ücretsiz danışmanlıkta netleştiriyoruz.' },
  { q: 'Fiziksel olarak Bursa\'da mısınız?', a: 'Hayır, Kocaeli kökenliyiz — Bursa\'ya tamamen uzaktan hizmet veriyoruz. Keşif görüşmesi, strateji onayı ve raporlama Google Meet/Zoom üzerinden yürütülüyor. Türkiye genelinde canlı, ziyaret edilebilir referanslarımızı portföyümüzde inceleyebilirsiniz.' },
  { q: 'Bursa\'da SEO uzmanı veya SEO firması seçerken nelere bakmalıyım?', a: 'Ziyaret edebileceğiniz canlı referanslar, Search Console verisiyle aylık rapor, sıralama garantisi vermemesi, Google İşletme Profili yönetiminin pakete dahil olması ve sitenin, alan adının sizin adınıza kalması. Bir SEO danışmanından da ajanstan da bu beş şeyi isteyin.' },
  { q: 'Bursa SEO hizmeti neleri kapsar?', a: 'Teknik SEO (hız, mobil uyum, taranabilirlik), anahtar kelime ve rakip analizi, hizmet ve ilçe sayfaları, aylık içerik, Google İşletme Profili yönetimi, yapay zekâ aramaları için soru-cevap içerikleri ve aylık rapor. 12 ay taahhütte aylık ücrete %15 indirim uygulanır.' },
  { q: 'Nilüfer\'deki işletmeler için ayrı çalışma yapıyor musunuz?', a: 'Evet. Nilüfer Bursa\'nın gelir düzeyi yüksek ve hızla büyüyen ilçesi; semt adlarıyla (Beşevler, Ataevler, Özlüce, Görükle) yapılan aramalar için ayrı içerik kuruyoruz. Ayrıntılar Nilüfer SEO sayfamızda.' },
  { q: 'GEO (Yapay Zeka Optimizasyonu) Bursa işletmesi için neden kritik?', a: 'GEO, ChatGPT ve Gemini gibi araçlarda "Bursa\'da güvenilir X önerir misin?" sorusuna verilen cevaplarda kaynak olarak yer alma olasılığını artırmayı hedefler. Bu kanal henüz doymamış durumda — özellikle Bursa\'nın niş B2B sektörlerinde (otomotiv yan sanayi, mobilya üretimi) erken hareket edenler avantajlı.' },
  ...sehirSeo['bursa'].ekSss,
  ...sehirSeoEk['bursa'].sss,
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Bursa SEO Hizmeti',
      description: 'Bursa ve tüm ilçeleri için yerel SEO, teknik SEO, GEO ve AEO optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'Bursa' },
        { '@type': 'City', name: 'Osmangazi' },
        { '@type': 'City', name: 'Nilüfer' },
        { '@type': 'City', name: 'Yıldırım' },
        { '@type': 'City', name: 'İnegöl' },
      ],
      url: 'https://ramsesdigital.com/bursa-seo',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Bursa SEO', item: 'https://ramsesdigital.com/bursa-seo' },
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

export default function BursaSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full pointer-events-none" />
        <div data-hero-bolunmus className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Bursa — Tüm İlçeler</span>
          </div>
          <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Bursa SEO Ajansı
            <br />
            <span className="gradient-text">Organik Trafiğinizi Büyütün</span>
          </h1>
          <p className="hidden sm:block text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-4 leading-relaxed">
            Osmangazi&apos;den <Link href="/nilufer-seo" className="text-zinc-300 underline decoration-white/20 hover:text-white">Nilüfer</Link>&apos;e, İnegöl&apos;den Gemlik&apos;e Bursa&apos;da SEO uzmanı ve danışmanlığı. Otomotiv yan sanayi ve mobilya sektörüne özel B2B içerik stratejisi.
          </p>
          <p className="hidden sm:block text-zinc-500 text-sm mb-10">
            {ilceler.join(' · ')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <CalendlyButton label="Ücretsiz SEO Analizi" variant="primary" />
            <Link href="/hizmetler/seo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              SEO Hizmet Detayları <ArrowRight size={14} />
            </Link>
          </div>
          <HeroGuvenSatiri />
          </div>
          <div className="mx-auto w-full max-w-[300px] lg:max-w-none">
            <GoogleAramaAnimasyonu aramalar={['bursa diş kliniği', 'bursa oto servis', 'bursa emlak ofisi']} />
          </div>
        </div>
      </section>

      <KisaOzet>
        Bursa’da otomotiv yan sanayi, tekstil ve mobilya firmaları için B2B aramalar, Nilüfer ve Osmangazi’deki hizmet işletmeleri için harita sonuçları öne çıkar. İkisine de ayrı strateji kuruyor, hizmeti uzaktan veriyoruz.
      </KisaOzet>

      <section className="pb-10 md:pb-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: '10+', label: 'Bursa ilçesi — hedeflenebilir' },
            { value: '3-6 Ay', label: 'Organik sıralama için süre' },
            { value: 'Otomotiv', label: 'Yan sanayi B2B odağı' },
            { value: 'Organik', label: 'Reklam bütçesi gerektirmez' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
              <p className="text-3xl font-bold text-white mb-1">{value}</p>
              <p className="text-zinc-500 text-xs leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-14 md:pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bursa İçin Kapsamlı SEO</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Otomotiv, mobilya ve tekstil sektörüne özel, ilçe bazlı farklılaştırılmış strateji.</p>
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

      <section className="py-10 md:py-14 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <CheckCircle2 size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Türkiye Genelinde Canlı Referanslarımız Var</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Bursa&apos;ya özel bir vaka çalışmamız henüz yok, ancak Türkiye genelinde ziyaret edilebilir,
              canlı SEO ve web tasarım projelerimiz mevcut. Portföyümüzü inceleyip aynı mühendislik
              disipliniyle Bursa işletmeniz için nasıl çalışacağımızı görebilirsiniz.
            </p>
            <Link href="/portfolyo" className="text-blue-400 text-sm font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all">
              Portföyü İncele <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <CitySeoSections city="bursa" />

      <section className="py-12 md:py-16 px-6">
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

      <SehirSeoEkBolumu sehir="bursa" />
      <RaporOrnegi />
      <KurumsalSeoBolumu yer="Bursa" />
      <ProjeGalerisi baslik="SEO Çalıştığımız Sitelerden Örnekler" />
      <ReviewsMarquee />

      <SehirTeklifBolumu place="Bursa" />

      <SeoChecklist
        title="Bursa'da SEO Firması Seçerken Neye Bakmalı?"
        intro="Uzaktan çalışan ya da yerel bir ajansla görüşürken şu kriterleri sorun."
        rows={[
          { kriter: 'Gerçek referans', bakin: 'Canlı sitesini ziyaret edebileceğiniz örnek işler var mı', dikkat: 'Ekran görüntüsü yerine canlı site ve ölçülebilir çıktı isteyin' },
          { kriter: 'Harita görünürlüğü', bakin: 'Google İşletme Profili yönetimi pakete dahil mi', dikkat: 'Yerel aramalarda harita sonuçları belirleyicidir' },
          { kriter: 'İlçe hedefi', bakin: 'Sadece "Bursa" değil, ilçe ve sektör aramalarını da planlıyor mu', dikkat: 'Dar ve ulaşılabilir aramalar daha hızlı sonuç verir' },
          { kriter: 'Garanti iddiası', bakin: 'Sıralama garantisi veriyor mu', dikkat: 'Google, sıralama garantisi verilemeyeceğini açıkça belirtir' },
          { kriter: 'Raporlama', bakin: 'Search Console verisiyle düzenli rapor sunuyor mu', dikkat: 'Raporlar gösterim, tıklama ve dönüşüm içermeli' },
        ]}
      />

      <RelatedPages
        pages={[
          { label: 'Nilüfer SEO', href: '/nilufer-seo' },
          { label: 'Bursa Dijital Pazarlama', href: '/bursa-dijital-pazarlama' },
          { label: 'Bursa Web Tasarım', href: '/bursa-web-tasarim' },
          { label: 'Bursa Google Ads', href: '/bursa-google-ads' },
          { label: 'Bursa Reklam Ajansı', href: '/bursa-reklam-ajansi' },
          { label: 'Bursa Yazılım Ajansı', href: '/bursa-yazilim-ajansi' },
        ]}
      />

      <section className="py-12 md:py-16 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp size={40} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Bursa&apos;da Google&apos;ın Zirvesine Çıkın</h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz SEO analiziyle başlayalım.</p>
          <CalendlyButton label="Ücretsiz SEO Analizi Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
