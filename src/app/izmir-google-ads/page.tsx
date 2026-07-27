import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Megaphone, ArrowRight, Target, BarChart3, Zap, TrendingUp, DollarSign, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İzmir Google Ads Yönetimi — Ramses Dijital',
  description:
    'İzmir\'de Google Ads yönetimi. Konak, Karşıyaka, Bornova ve tüm İzmir ilçelerinde hedefli arama reklamları. Bütçe israfı yok, ölçülebilir dönüşüm. Ücretsiz kampanya analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/izmir-google-ads' },
  openGraph: {
    title: 'İzmir Google Ads Yönetimi | Ramses Dijital',
    description: 'İzmir işletmeleri için Google Ads kampanyası. Doğru kitleye, doğru zamanda ulaşın.',
    url: 'https://ramsesdigital.com/izmir-google-ads',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  { icon: Target, title: 'İlçe Bazlı Arama Reklamları', desc: '"Konak diş hekimi", "Karşıyaka avukat" — her ilçe için özel kampanya yapısı.' },
  { icon: Megaphone, title: 'Google Haritalar Reklamları', desc: 'İzmir\'de konuma dayalı "yakınımdaki X" aramalarında öne çıkın. Turizm sektöründe özellikle etkili.' },
  { icon: TrendingUp, title: 'Sezonluk Kampanya Yönetimi', desc: 'Turizm ve tatil sezonuna göre bütçe ve hedefleme ayarları — İzmir\'in mevsimsel talep dalgalanmasına uygun.' },
  { icon: BarChart3, title: 'Dönüşüm İzleme', desc: 'Telefon araması, form gönderimi, rezervasyon, WhatsApp tıklaması — her aksiyonu izliyoruz.' },
  { icon: DollarSign, title: 'Bütçe Optimizasyonu', desc: 'İzmir\'in orta rekabet seviyesinde düşük CPA için Quality Score odaklı teklif stratejisi.' },
  { icon: Zap, title: 'A/B Reklam Testleri', desc: 'Hangi başlık İzmir müşterisine daha iyi dönüşüm veriyor? Sürekli test ve optimizasyon.' },
]

const faqs = [
  { q: 'İzmir\'de Google Ads için ne kadar bütçe gerekir?', a: 'Konak ve Karşıyaka gibi rekabetçi ilçelerde aylık minimum 4.000-8.000 TL reklam bütçesi öneriyoruz. Diğer ilçelerde 2.500-4.000 TL ile başlanabilir. Turizm sektöründe sezona göre bütçe artırımı öneriyoruz.' },
  { q: 'İzmir\'in farklı ilçeleri için ayrı kampanya gerekir mi?', a: 'Evet, önerilir. Konak\'taki (şehir merkezi) ile Urla\'daki (turizm, butik işletmeler) arama davranışı çok farklı. İlçe bazlı reklam grupları daha yüksek Quality Score ve daha düşük CPC sağlar.' },
  { q: 'İzmir\'de Google Ads ne zaman sonuç verir?', a: 'Kampanya aktifleşince 1-2 hafta içinde tıklama ve trafik başlar. İlk 30 gün öğrenme dönemi sayılır. Turizm işletmeleri için sezon öncesi 4-6 hafta kampanya başlatmanızı öneririz.' },
  { q: 'İzmir\'deki turizm işletmeleri için Google Ads özel bir strateji gerektiriyor mu?', a: 'Evet. Sezonluk bütçe planlaması, çok dilli reklam metinleri (özellikle Avrupa pazarı için), rezervasyon odaklı dönüşüm izleme ve Google Haritalar reklamları bu sektörde kritik.' },
  { q: 'Google Ads ile SEO\'yu birlikte mi yapmalıyım?', a: 'İzmir\'in rekabetçi sektörlerinde kesinlikle evet. Google Ads hemen trafik getirir; SEO 3-6 ayda organik sonuç verir ve sezon dışı dönemlerde de sürekli trafik sağlar.' },
  { q: 'Raporlama nasıl yapılıyor?', a: 'Aylık Google Ads performans raporu: gösterim, tıklama, CPC, dönüşüm, ROAS ve CPA metrikleri. Canlı dashboard erişimi veriyoruz.' },
  { q: 'İzmir\'de Google Ads yönetimi için sözleşme şartı var mı?', a: 'Minimum 3 ay öneriyoruz. Turizm işletmeleri için sezon boyunca (genellikle 6 ay) sürekli yönetim daha etkili sonuç verir.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'İzmir Google Ads Yönetimi',
      description: 'İzmir ve tüm ilçeleri için Google Ads kampanya kurulumu, yönetimi ve optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'İzmir' }, { '@type': 'City', name: 'Konak' },
        { '@type': 'City', name: 'Karşıyaka' }, { '@type': 'City', name: 'Bornova' },
      ],
      url: 'https://ramsesdigital.com/izmir-google-ads',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'İzmir Google Ads', item: 'https://ramsesdigital.com/izmir-google-ads' },
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

export default function IzmirGoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">İzmir — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            İzmir Google Ads
            <br />
            <span className="gradient-text">İlçe Bazlı Hedefleme</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Konak, Karşıyaka veya Urla — İzmir&apos;in hangi ilçesinde müşteri arıyorsanız, tam o noktada reklamınız çıksın.
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
            { value: '30', label: 'İzmir ilçesi — hedeflenebilir' },
            { value: '1-2 Hafta', label: 'Kampanya başlangıcı' },
            { value: 'Sezonluk', label: 'Bütçe optimizasyonu' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">İzmir İçin Google Ads Hizmetlerimiz</h2>
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
            <h2 className="text-xl font-bold text-white mb-3">İzmir&apos;de Sezonluk Planlama Neden Önemli?</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              İzmir&apos;in turizm ağırlıklı ekonomisinde talep yıl boyu sabit değil. Sezon öncesi başlayan, sezon içinde
              <strong className="text-white"> bütçesi artırılan ve sezon sonunda optimize edilen</strong> bir kampanya yapısı,
              sabit bütçeli kampanyalara göre çok daha verimli sonuç veriyor.
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
          { label: 'İzmir Dijital Pazarlama', href: '/izmir-dijital-pazarlama' },
          { label: 'İzmir SEO', href: '/izmir-seo' },
          { label: 'İzmir Web Tasarım', href: '/izmir-web-tasarim' },
          { label: 'Ankara Google Ads', href: '/ankara-google-ads' },
          { label: 'Google Ads Ajansı (Türkiye Geneli)', href: '/google-ads-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">İzmir&apos;de Reklamlarınız Bugün Başlasın</h2>
          <p className="text-zinc-400 text-lg mb-8">Mevcut kampanyanızı ücretsiz analiz edelim ya da sıfırdan kuralım.</p>
          <CalendlyButton label="Ücretsiz Kampanya Analizi" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
