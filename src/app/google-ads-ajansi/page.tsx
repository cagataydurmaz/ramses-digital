import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { Globe2, Megaphone, ArrowRight, CheckCircle2, Target, BarChart3, TrendingUp, DollarSign, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Google Ads Ajansı — Ramses Dijital',
  description:
    'Türkiye genelinde Google Ads yönetimi. Türkiye\'nin her şehrindeki işletmeler için doğru kitleye ulaşan arama, display ve remarketing kampanyaları. Tamamen online çalışıyoruz. Ücretsiz kampanya analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/google-ads-ajansi' },
  openGraph: {
    title: 'Google Ads Ajansı | Ramses Dijital',
    description: 'Türkiye genelinde online çalışan Google Ads ajansı. ROI odaklı kampanya yönetimi.',
    url: 'https://ramsesdigital.com/google-ads-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  { icon: Target, title: 'Arama Reklamları', desc: 'Hedef kitlenizin aktif olarak aradığı anahtar kelimelerde, bulunduğunuz şehirden bağımsız olarak görünür olun.' },
  { icon: Megaphone, title: 'Display & YouTube', desc: 'Görsel ve video reklamlarla marka bilinirliğinizi Türkiye genelinde artırın.' },
  { icon: TrendingUp, title: 'Remarketing', desc: 'Sitenizi ziyaret edip ayrılan kullanıcıları geri getirin. En yüksek dönüşüm oranına sahip segment.' },
  { icon: BarChart3, title: 'Dönüşüm Takibi', desc: 'Telefon araması, form gönderimi, satın alma — her aksiyon izlenir, hiçbir şey tahmine bırakılmaz.' },
  { icon: DollarSign, title: 'Bütçe Optimizasyonu', desc: 'Quality Score odaklı yönetimle düşük maliyetli, yüksek dönüşümlü kampanya yapısı.' },
  { icon: Clock, title: 'Sürekli Optimizasyon', desc: 'A/B testleri, negatif anahtar kelime yönetimi ve teklif stratejisi ile kampanyalar sürekli iyileştirilir.' },
]

const faqs = [
  { q: 'İzmit/Kocaeli dışında bir şehirdeyim, Google Ads yönetimi alabilir miyim?', a: 'Evet. Google Ads yönetimi tamamen dijital bir hizmettir — fiziksel konum önemli değil. İstanbul, Ankara, İzmir, Antalya dahil Türkiye\'nin her yerinden müşterilerimize aynı kalitede hizmet veriyoruz. Kampanya kurulumu, raporlama ve optimizasyon tamamen uzaktan yürütülür.' },
  { q: 'Google Ads için ne kadar bütçe ayırmalıyım?', a: 'Sektöre ve rekabet düzeyine göre değişir. Yerel hizmet işletmeleri için aylık 3.000-8.000 TL, ulusal ölçekte rekabetçi sektörler için 15.000+ TL reklam bütçesi öneriyoruz. Ajans yönetim ücreti reklam bütçesinden ayrıdır. Ücretsiz danışmanlıkta sektörünüze özel öneri sunuyoruz.' },
  { q: 'Google Ads ile SEO\'yu birlikte mi yapmalıyım?', a: 'Rekabetçi sektörlerde ikisini birlikte yürütmek en akıllıca stratejidir. Google Ads anlık trafik getirirken, SEO 3-6 ayda organik büyüme sağlar. Reklam durduğunda SEO organik trafiği sürdürür, sadece reklam bütçesine bağımlı kalmazsınız.' },
  { q: 'Mevcut Google Ads hesabım var ama sonuç almıyorum, ne yapmalıyım?', a: 'En yaygın sorunlar: geniş eşleme anahtar kelimeler, eksik negatif anahtar kelime listesi, düşük Quality Score ve zayıf açılış sayfası uyumu. Mevcut hesabınızı ücretsiz analiz edip somut iyileştirme önerileri sunuyoruz.' },
  { q: 'Hangi sektörlerde Google Ads deneyiminiz var?', a: 'E-ticaret, sağlık, hukuk, B2B sanayi, eğitim ve profesyonel hizmetler dahil geniş bir yelpazede kampanya yönetiyoruz. Her sektörün kendine özgü teklif stratejisi ve hedef kitle davranışı vardır — buna göre kampanya kuruyoruz.' },
  { q: 'Raporlama nasıl yapılıyor?', a: 'Aylık detaylı performans raporu: gösterim, tıklama, CPC, dönüşüm, ROAS metrikleri. Canlı Google Ads dashboard erişimi de sağlıyoruz — her kuruşun nereye gittiğini görürsünüz.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Google Ads Ajansı Hizmeti',
      description: 'Türkiye genelinde online Google Ads kampanya yönetimi ve optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: { '@type': 'Country', name: 'Türkiye' },
      url: 'https://ramsesdigital.com/google-ads-ajansi',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Google Ads Ajansı', item: 'https://ramsesdigital.com/google-ads-ajansi' },
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

export default function GoogleAdsAjansiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Globe2 size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Türkiye Geneli — %100 Online</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Google Ads Ajansı
            <br />
            <span className="gradient-text">Türkiye Genelinde Kampanya Yönetimi</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Kampanya kurulumu, optimizasyon ve raporlama tamamen uzaktan yürütülür. Türkiye&apos;nin her şehrinden işletmelere ROI odaklı Google Ads yönetimi sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Kampanya Analizi" variant="primary" />
            <Link href="/portfolyo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Referanslarımızı Gör <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Google Ads Hizmetlerimiz</h2>
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
            <h2 className="text-xl font-bold text-white mb-3">Quality Score Neden Kritik?</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              En yüksek teklifi vermek üstte çıkmayı garantilemez. <strong className="text-white">Quality Score</strong> belirleyicidir:
              reklam metni ile açılış sayfası uyumu yüksekse, rakibinizden daha az ödeyip daha üstte çıkarsınız.
              Tüm kampanyalarımızda açılış sayfası optimizasyonu önceliklidir.
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
          { label: 'SEO Ajansı', href: '/seo-ajansi' },
          { label: 'Web Tasarım Ajansı', href: '/web-tasarim-ajansi' },
          { label: 'Yazılım Ajansı', href: '/yazilim-ajansi' },
          { label: 'İzmit Google Ads', href: '/izmit-google-ads' },
          { label: 'Kocaeli Google Ads', href: '/kocaeli-google-ads' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Reklamlarınız Bugün Başlasın
          </h2>
          <p className="text-zinc-400 text-lg mb-8">Mevcut kampanyanızı ücretsiz analiz edelim ya da sıfırdan kuralım.</p>
          <CalendlyButton label="Ücretsiz Kampanya Analizi" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
