import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Megaphone, ArrowRight, Target, BarChart3, Zap, TrendingUp, DollarSign, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ankara Google Ads Yönetimi — Ramses Dijital',
  description:
    'Ankara\'da Google Ads yönetimi. Çankaya, Keçiören, Yenimahalle ve tüm Ankara ilçelerinde hedefli arama reklamları. Bütçe israfı yok, ölçülebilir dönüşüm. Ücretsiz kampanya analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/ankara-google-ads' },
  openGraph: {
    title: 'Ankara Google Ads Yönetimi | Ramses Dijital',
    description: 'Ankara işletmeleri için Google Ads kampanyası. Doğru kitleye, doğru zamanda ulaşın.',
    url: 'https://ramsesdigital.com/ankara-google-ads',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  { icon: Target, title: 'İlçe Bazlı Arama Reklamları', desc: '"Çankaya avukat", "Keçiören diş hekimi" — her ilçe için özel kampanya yapısı.' },
  { icon: Megaphone, title: 'Google Haritalar Reklamları', desc: 'Ankara\'da konuma dayalı "yakınımdaki X" aramalarında öne çıkın.' },
  { icon: TrendingUp, title: 'Remarketing', desc: 'Ankara\'dan sitenizi ziyaret edip ayrılanları geri getirin. Satın alma niyeti en yüksek kitle.' },
  { icon: BarChart3, title: 'Dönüşüm İzleme', desc: 'Telefon araması, form gönderimi, WhatsApp tıklaması — her aksiyonu izliyoruz.' },
  { icon: DollarSign, title: 'Bütçe Optimizasyonu', desc: 'Ankara\'nın kurumsal ve profesyonel hizmet sektörlerinde Quality Score odaklı teklif stratejisi.' },
  { icon: Zap, title: 'A/B Reklam Testleri', desc: 'Hangi başlık Ankara müşterisine daha iyi dönüşüm veriyor? Sürekli test ve optimizasyon.' },
]

const faqs = [
  { q: 'Ankara\'da Google Ads için ne kadar bütçe gerekir?', a: 'Çankaya gibi rekabetçi ilçelerde diğer ilçelere göre daha yüksek bütçe gerekir. Hukuk ve danışmanlık gibi sektörler genellikle daha yüksek CPC\'ye sahip. Ücretsiz danışmanlıkta işletmenize özel bütçe önerisi sunuyoruz.' },
  { q: 'Ankara\'nın farklı ilçeleri için ayrı kampanya gerekir mi?', a: 'Evet, önerilir. Çankaya\'daki iş merkezi odaklı arama davranışı, Mamak veya Sincan\'daki daha yerel/perakende odaklı davranıştan farklı. İlçe bazlı reklam grupları daha yüksek Quality Score ve daha düşük CPC sağlar.' },
  { q: 'Ankara\'da Google Ads ne zaman sonuç verir?', a: 'Kampanya aktifleşince 1-2 hafta içinde tıklama ve trafik başlar. İlk 30 gün Google algoritmasının öğrenme dönemi sayılır. 6-8 haftadan sonra optimizasyon verimli şekilde yapılabilir.' },
  { q: 'Ankara\'daki B2B ve kurumsal firmalar için Google Ads işe yarıyor mu?', a: 'Evet, ancak strateji farklıdır. Uzun kuyruklu B2B aramalar ("Ankara endüstriyel ekipman tedarikçisi" gibi) düşük hacimli ama yüksek değerli. LinkedIn ile Google Ads kombinasyonu bu segmentte etkili olabilir.' },
  { q: 'Google Ads ile SEO\'yu birlikte mi yapmalıyım?', a: 'Kurumsal/B2B ağırlıklı Ankara pazarında kesinlikle evet. Google Ads hemen trafik getirir; SEO 3-6 ayda organik sonuç verir ve uzun vadede reklam bağımlılığını azaltır.' },
  { q: 'Raporlama nasıl yapılıyor?', a: 'Aylık Google Ads performans raporu: gösterim, tıklama, CPC, dönüşüm, ROAS ve CPA metrikleri. Canlı dashboard erişimi veriyoruz.' },
  { q: 'Ankara\'da Google Ads yönetimi için sözleşme şartı var mı?', a: 'Minimum 3 ay öneriyoruz. Google Ads öğrenme dönemi 30 gün, optimizasyon için en az 60-90 gün gerekiyor.' },
  { q: 'Hesabın mülkiyeti kimde olur?', a: 'Sizde. Google Ads hesabı kendi adınıza açılır, biz yönetici erişimiyle bağlanırız — kamu ve kurumsal müşterilerimiz için hesap üzerinde tam şeffaflık ve denetim her zaman sizdedir.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Ankara Google Ads Yönetimi',
      description: 'Ankara ve tüm ilçeleri için Google Ads kampanya kurulumu, yönetimi ve optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'Ankara' }, { '@type': 'City', name: 'Çankaya' },
        { '@type': 'City', name: 'Keçiören' }, { '@type': 'City', name: 'Yenimahalle' },
      ],
      url: 'https://ramsesdigital.com/ankara-google-ads',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Ankara Google Ads', item: 'https://ramsesdigital.com/ankara-google-ads' },
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

export default function AnkaraGoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Ankara — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ankara Google Ads
            <br />
            <span className="gradient-text">İlçe Bazlı Hedefleme</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Çankaya, Keçiören veya Yenimahalle — Ankara&apos;nın hangi ilçesinde müşteri arıyorsanız, tam o noktada reklamınız çıksın.
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
            { value: '25', label: 'Ankara ilçesi — hedeflenebilir' },
            { value: '1-2 Hafta', label: 'Kampanya başlangıcı' },
            { value: '%30', label: 'Ortalama CPA düşüşü' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ankara İçin Google Ads Hizmetlerimiz</h2>
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
            <h2 className="text-xl font-bold text-white mb-3">Ankara&apos;da Quality Score Neden Kritik?</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Ankara&apos;nın kurumsal ve profesyonel hizmet ağırlıklı sektörlerinde en yüksek teklifi vermek üstte çıkmayı garantilemez.
              <strong className="text-white"> Quality Score</strong> belirleyicidir: reklam metni, açılış sayfası uyumu ve beklenen tıklama oranı yüksekse
              rakibinizden daha az ödeyip daha üstte çıkarsınız.
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

      <RelatedPages
        pages={[
          { label: 'Ankara Dijital Pazarlama', href: '/ankara-dijital-pazarlama' },
          { label: 'Ankara SEO', href: '/ankara-seo' },
          { label: 'Ankara Web Tasarım', href: '/ankara-web-tasarim' },
          { label: 'İstanbul Google Ads', href: '/istanbul-google-ads' },
          { label: 'Google Ads Ajansı (Türkiye Geneli)', href: '/google-ads-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ankara&apos;da Reklamlarınız Bugün Başlasın</h2>
          <p className="text-zinc-400 text-lg mb-8">Mevcut kampanyanızı ücretsiz analiz edelim ya da sıfırdan kuralım.</p>
          <CalendlyButton label="Ücretsiz Kampanya Analizi" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
