import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Megaphone, ArrowRight, Target, BarChart3, Zap, TrendingUp, DollarSign, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bursa Google Ads Yönetimi — Ramses Dijital',
  description:
    'Bursa\'da Google Ads yönetimi. Osmangazi, Nilüfer, Yıldırım, İnegöl ve tüm Bursa ilçelerinde hedefli arama reklamları. Bütçe israfı yok, ölçülebilir dönüşüm. Ücretsiz kampanya analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/bursa-google-ads' },
  openGraph: {
    title: 'Bursa Google Ads Yönetimi | Ramses Dijital',
    description: 'Bursa işletmeleri için Google Ads kampanyası. Doğru kitleye, doğru zamanda ulaşın.',
    url: 'https://ramsesdigital.com/bursa-google-ads',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  { icon: Target, title: 'İlçe Bazlı Arama Reklamları', desc: '"Nilüfer diş hekimi", "Osmangazi avukat", "İnegöl mobilya" — her ilçe için özel kampanya yapısı.' },
  { icon: Megaphone, title: 'Google Haritalar Reklamları', desc: 'Bursa\'da konuma dayalı "yakınımdaki X" aramalarında öne çıkın. En yüksek yerel dönüşüm.' },
  { icon: TrendingUp, title: 'B2B Odaklı Kampanyalar', desc: 'Otomotiv yan sanayi ve tekstil firmaları için tedarikçi/toptan arayan işletmeleri hedefleyen özel kampanya yapısı.' },
  { icon: BarChart3, title: 'Dönüşüm İzleme', desc: 'Telefon araması, form gönderimi, WhatsApp tıklaması — her aksiyonu izliyoruz.' },
  { icon: DollarSign, title: 'Bütçe Optimizasyonu', desc: 'Bursa\'nın rekabetçi sektörlerinde düşük CPA için Quality Score odaklı teklif stratejisi.' },
  { icon: Zap, title: 'A/B Reklam Testleri', desc: 'Hangi başlık Bursa müşterisine daha iyi dönüşüm veriyor? Sürekli test ve optimizasyon.' },
]

const faqs = [
  { q: 'Bursa\'da Google Ads için ne kadar bütçe gerekir?', a: 'Sektöre göre değişir — hukuk, diş hekimliği ve estetik gibi alanlarda rekabet daha yüksek, otomotiv yan sanayi gibi B2B alanlarda arama hacmi daha düşük ama dönüşüm değeri daha yüksek olabilir. Ajans yönetim ücreti reklam bütçesinden ayrıdır. Ücretsiz danışmanlıkta işletmenize özel bütçe önerisi sunuyoruz.' },
  { q: 'Bursa\'nın farklı ilçeleri için ayrı kampanya gerekir mi?', a: 'Kesinlikle önerilir. "Nilüfer diş hekimi" ile "Osmangazi diş hekimi" farklı kullanıcılar ve farklı rekabet seviyeleri demek. İlçe bazlı reklam grupları daha yüksek Quality Score, daha düşük CPC ve daha yüksek dönüşüm sağlar.' },
  { q: 'Bursa\'da Google Ads ne zaman sonuç verir?', a: 'Kampanya aktifleşince 1-2 hafta içinde tıklama ve trafik başlar. İlk 30 gün Google algoritmasının öğrenme dönemi sayılır. B2B odaklı kampanyalarda (örn. otomotiv yan sanayi) satış döngüsü daha uzun olduğu için dönüşüm değerlendirmesi biraz daha zaman alabilir.' },
  { q: 'Otomotiv yan sanayi veya mobilya üreticisi olarak Google Ads işe yarar mı?', a: 'Evet, ancak strateji farklı kurgulanır. B2B alıcılar genellikle "üretici", "toptan", "OEM tedarikçi" gibi terimlerle arama yapar. Bu terimlere özel, düşük hacimli ama yüksek niyetli anahtar kelime kampanyaları daha etkili sonuç verir.' },
  { q: 'Google Ads ile SEO\'yu birlikte mi yapmalıyım?', a: 'Bursa\'nın rekabetçi pazarında evet. Google Ads hemen trafik getirir; SEO 3-6 ayda organik sonuç verir. İkisini birlikte yürütmek hem kısa vadeli hem uzun vadeli büyümeyi destekler.' },
  { q: 'Bursa\'da mevcut Google Ads kampanyam var ama sonuç almıyorum, ne yapmalıyım?', a: 'En yaygın sorunlar: geniş eşleme anahtar kelimeler, eksik negatif anahtar kelime listesi, düşük Quality Score, zayıf açılış sayfası ve dönüşüm izlemenin kurulmamış olması. Mevcut hesabınızı ücretsiz analiz edip sorunları tespit ediyoruz.' },
  { q: 'Raporlama nasıl yapılıyor?', a: 'Aylık Google Ads performans raporu: gösterim, tıklama, CPC, dönüşüm, ROAS ve CPA metrikleri. Canlı Google Ads dashboard erişimi veriyoruz. Her kuruşun nereye gittiğini görürsünüz.' },
  { q: 'Bursa\'da Google Ads yönetimi için sözleşme şartı var mı?', a: 'Minimum 3 ay öneriyoruz. Google Ads öğrenme dönemi 30 gün, optimizasyon için en az 60-90 gün gerekiyor. 3 ay sonunda net ROI tablonuz netleşir ve devam kararını veri bazlı alırsınız.' },
  { q: 'Hesap kimin adına açılıyor, bizim mi ajansın mı?', a: 'Sizin adınıza. Google Ads hesabını siz sahiplenirsiniz, biz yönetici erişimiyle çalışırız — B2B tedarikçi ilişkilerinde bu, hesap üzerinde her zaman söz sahibi olduğunuz anlamına gelir.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Bursa Google Ads Yönetimi',
      description: 'Bursa ve tüm ilçeleri için Google Ads kampanya kurulumu, yönetimi ve optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'Bursa' }, { '@type': 'City', name: 'Osmangazi' },
        { '@type': 'City', name: 'Nilüfer' }, { '@type': 'City', name: 'Yıldırım' },
      ],
      url: 'https://ramsesdigital.com/bursa-google-ads',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Bursa Google Ads', item: 'https://ramsesdigital.com/bursa-google-ads' },
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

export default function BursaGoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Bursa — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Bursa Google Ads
            <br />
            <span className="gradient-text">İlçe Bazlı Hedefleme</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Nilüfer, Osmangazi, İnegöl veya Gemlik — Bursa&apos;nın hangi ilçesinde müşteri arıyorsanız, tam o noktada reklamınız çıksın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Kampanya Analizi" variant="primary" />
            <Link href="/hizmetler/google-ads-kocaeli" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Detaylı Hizmet Bilgisi <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: '10+', label: 'Bursa ilçesi — hedeflenebilir' },
            { value: '1-2 Hafta', label: 'Kampanya başlangıcı' },
            { value: 'B2B + B2C', label: 'Otomotiv ve mobilya odaklı' },
            { value: '7/24', label: 'Reklam izleme' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
              <p className="text-3xl font-bold text-white mb-1">{value}</p>
              <p className="text-zinc-500 text-xs leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bursa İçin Google Ads Hizmetlerimiz</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
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
            <Clock size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">Bursa&apos;da Quality Score Neden Kritik?</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Bursa&apos;da rekabetçi sektörlerde (avukat, diş hekimi, estetik) en yüksek teklifi vermek üstte çıkmayı garantilemez.
              <strong className="text-white"> Quality Score</strong> belirleyicidir:
              reklam metni, açılış sayfası uyumu ve beklenen tıklama oranı yüksekse rakibinizden daha az ödeyip daha üstte çıkarsınız.
              B2B kampanyalarda ise doğru hedef kitle ve niş anahtar kelime seçimi daha da önemlidir.
            </p>
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

      <ReviewsMarquee />

      <RelatedPages
        pages={[
          { label: 'Bursa Dijital Pazarlama', href: '/bursa-dijital-pazarlama' },
          { label: 'Bursa SEO', href: '/bursa-seo' },
          { label: 'Bursa Web Tasarım', href: '/bursa-web-tasarim' },
          { label: 'Bursa Reklam Ajansı', href: '/bursa-reklam-ajansi' },
          { label: 'Google Ads Ajansı (Türkiye Geneli)', href: '/google-ads-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Bursa&apos;da Reklamlarınız Bugün Başlasın</h2>
          <p className="text-zinc-400 text-lg mb-8">Mevcut kampanyanızı ücretsiz analiz edelim ya da sıfırdan kuralım.</p>
          <CalendlyButton label="Ücretsiz Kampanya Analizi" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
