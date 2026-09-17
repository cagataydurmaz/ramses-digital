import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Megaphone, ArrowRight, Target, BarChart3, Zap, TrendingUp, DollarSign, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Eskişehir Google Ads Yönetimi — Ramses Dijital',
  description:
    'Eskişehir\'de Google Ads yönetimi. Odunpazarı, Tepebaşı ve tüm Eskişehir ilçelerinde hedefli arama reklamları. Bütçe israfı yok, ölçülebilir dönüşüm. Ücretsiz kampanya analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/eskisehir-google-ads' },
  openGraph: {
    title: 'Eskişehir Google Ads Yönetimi | Ramses Dijital',
    description: 'Eskişehir işletmeleri için Google Ads kampanyası. Doğru kitleye, doğru zamanda ulaşın.',
    url: 'https://ramsesdigital.com/eskisehir-google-ads',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  { icon: Target, title: 'İlçe Bazlı Arama Reklamları', desc: '"Odunpazarı diş hekimi", "Tepebaşı kiralık daire", "öğrenciye özel kırtasiye" — her ilçe ve kitle için özel kampanya yapısı.' },
  { icon: Megaphone, title: 'Google Haritalar Reklamları', desc: 'Eskişehir\'de konuma dayalı "yakınımdaki X" aramalarında öne çıkın. En yüksek yerel dönüşüm.' },
  { icon: TrendingUp, title: 'Öğrenci & Sanayi Odaklı Kampanyalar', desc: 'Öğrenciye hitap eden işletmeler için genç kitle hedefleme, sanayi firmaları için B2B tedarikçi arayan işletmeleri hedefleyen özel kampanya yapısı.' },
  { icon: BarChart3, title: 'Dönüşüm İzleme', desc: 'Telefon araması, form gönderimi, WhatsApp tıklaması — her aksiyonu izliyoruz.' },
  { icon: DollarSign, title: 'Bütçe Optimizasyonu', desc: 'Eskişehir\'in rekabetçi sektörlerinde düşük CPA için Quality Score odaklı teklif stratejisi.' },
  { icon: Zap, title: 'A/B Reklam Testleri', desc: 'Hangi başlık Eskişehir müşterisine daha iyi dönüşüm veriyor? Sürekli test ve optimizasyon.' },
]

const faqs = [
  { q: 'Eskişehir\'de Google Ads için ne kadar bütçe gerekir?', a: 'Sektöre göre değişir — hukuk, diş hekimliği ve estetik gibi alanlarda rekabet daha yüksek, öğrenciye hitap eden işletmelerde (kafe, kırtasiye) düşük bütçeyle bile yüksek görünürlük mümkün. Reklam bütçeniz doğrudan Google\'a gider, bize ödenmez — bizim ücretimiz ayrı bir kalem: sabit aylık ücret + bütçenizin %15\'i (örnek: 20.000₺ bütçede +3.000₺). Ücretsiz danışmanlıkta işletmenize özel bütçe önerisi sunuyoruz.' },
  { q: 'Eskişehir\'in farklı ilçeleri için ayrı kampanya gerekir mi?', a: 'Kesinlikle önerilir. "Odunpazarı diş hekimi" ile "Tepebaşı diş hekimi" farklı kullanıcılar ve farklı rekabet seviyeleri demek. İlçe bazlı reklam grupları daha yüksek Quality Score, daha düşük CPC ve daha yüksek dönüşüm sağlar.' },
  { q: 'Eskişehir\'de Google Ads ne zaman sonuç verir?', a: 'Kampanya aktifleşince 1-2 hafta içinde tıklama ve trafik başlar. İlk 30 gün Google algoritmasının öğrenme dönemi sayılır. Öğrenciye hitap eden işletmelerde (kafe, kırtasiye) hızlı sonuç alınırken, B2B sanayi kampanyalarında satış döngüsü daha uzun sürer.' },
  { q: 'Öğrenciye hitap eden bir işletme veya sanayi firması olarak Google Ads işe yarar mı?', a: 'Evet, ancak strateji tamamen farklı kurgulanır. Öğrenci pazarı için mobil-öncelikli, hızlı dönüşümlü kampanyalar (kafe, kırtasiye, özel ders) etkili olurken, sanayi firmaları için "tedarikçi", "bayi", "üretici firma" gibi B2B terimlere özel, düşük hacimli ama yüksek niyetli kampanyalar daha etkili sonuç verir.' },
  { q: 'Google Ads ile SEO\'yu birlikte mi yapmalıyım?', a: 'Eskişehir\'in rekabetçi pazarında evet. Google Ads hemen trafik getirir; SEO 3-6 ayda organik sonuç verir. İkisini birlikte yürütmek hem kısa vadeli hem uzun vadeli büyümeyi destekler.' },
  { q: 'Eskişehir\'de mevcut Google Ads kampanyam var ama sonuç almıyorum, ne yapmalıyım?', a: 'En yaygın sorunlar: geniş eşleme anahtar kelimeler, eksik negatif anahtar kelime listesi, düşük Quality Score, zayıf açılış sayfası ve dönüşüm izlemenin kurulmamış olması. Mevcut hesabınızı ücretsiz analiz edip sorunları tespit ediyoruz.' },
  { q: 'Raporlama nasıl yapılıyor?', a: 'Aylık Google Ads performans raporu: gösterim, tıklama, CPC, dönüşüm, ROAS ve CPA metrikleri. Canlı Google Ads dashboard erişimi veriyoruz. Her kuruşun nereye gittiğini görürsünüz.' },
  { q: 'Eskişehir\'de Google Ads yönetimi için sözleşme şartı var mı?', a: 'Minimum 3 ay öneriyoruz. Google Ads öğrenme dönemi 30 gün, optimizasyon için en az 60-90 gün gerekiyor. 3 ay sonunda net ROI tablonuz netleşir ve devam kararını veri bazlı alırsınız.' },
  { q: 'Hesap kimin adına açılıyor, bizim mi ajansın mı?', a: 'Sizin adınıza. Google Ads hesabını siz sahiplenirsiniz, biz yönetici erişimiyle çalışırız — hesap üzerinde her zaman söz sahibi olduğunuz anlamına gelir.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Eskişehir Google Ads Yönetimi',
      description: 'Eskişehir ve tüm ilçeleri için Google Ads kampanya kurulumu, yönetimi ve optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'Eskişehir' }, { '@type': 'City', name: 'Odunpazarı' },
        { '@type': 'City', name: 'Tepebaşı' },
      ],
      url: 'https://ramsesdigital.com/eskisehir-google-ads',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Eskişehir Google Ads', item: 'https://ramsesdigital.com/eskisehir-google-ads' },
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

export default function EskisehirGoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Eskişehir — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Eskişehir Google Ads
            <br />
            <span className="gradient-text">İlçe Bazlı Hedefleme</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Odunpazarı veya Tepebaşı — Eskişehir&apos;in hangi ilçesinde ve hangi kitlede müşteri arıyorsanız, tam o noktada reklamınız çıksın.
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
            { value: '8+', label: 'Eskişehir ilçesi — hedeflenebilir' },
            { value: '1-2 Hafta', label: 'Kampanya başlangıcı' },
            { value: 'Öğrenci + B2B', label: 'Genç kitle ve sanayi odaklı' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Eskişehir İçin Google Ads Hizmetlerimiz</h2>
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
            <h2 className="text-xl font-bold text-white mb-3">Eskişehir&apos;de Quality Score Neden Kritik?</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Eskişehir&apos;de rekabetçi sektörlerde (avukat, diş hekimi, estetik) en yüksek teklifi vermek üstte çıkmayı garantilemez.
              <strong className="text-white"> Quality Score</strong> belirleyicidir:
              reklam metni, açılış sayfası uyumu ve beklenen tıklama oranı yüksekse rakibinizden daha az ödeyip daha üstte çıkarsınız.
              Öğrenci pazarında mobil uyumluluk özellikle önemlidir — bu kitle neredeyse tamamen telefondan arama yapıyor.
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
          { label: 'Eskişehir Dijital Pazarlama', href: '/eskisehir-dijital-pazarlama' },
          { label: 'Eskişehir SEO', href: '/eskisehir-seo' },
          { label: 'Eskişehir Web Tasarım', href: '/eskisehir-web-tasarim' },
          { label: 'Eskişehir Reklam Ajansı', href: '/eskisehir-reklam-ajansi' },
          { label: 'Google Ads Ajansı (Türkiye Geneli)', href: '/google-ads-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Eskişehir&apos;de Reklamlarınız Bugün Başlasın</h2>
          <p className="text-zinc-400 text-lg mb-8">Mevcut kampanyanızı ücretsiz analiz edelim ya da sıfırdan kuralım.</p>
          <CalendlyButton label="Ücretsiz Kampanya Analizi" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
