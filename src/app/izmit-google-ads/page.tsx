import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Megaphone, ArrowRight, CheckCircle2, Target, BarChart3, Zap, TrendingUp, DollarSign, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İzmit Google Ads Yönetimi — Ramses Dijital',
  description:
    'İzmit\'te Google Ads yönetimi. Arama, display ve yerel reklam kampanyalarıyla doğru müşteriye ulaşın. Bütçe israfı yok, ölçülebilir dönüşüm. Ücretsiz kampanya analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/izmit-google-ads' },
  openGraph: {
    title: 'İzmit Google Ads Yönetimi | Ramses Dijital',
    description: 'İzmit işletmeleri için Google Ads kampanyası. Doğru kitleye, doğru zamanda, doğru mesajla ulaşın.',
    url: 'https://ramsesdigital.com/izmit-google-ads',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  { icon: Target, title: 'Arama Reklamları', desc: '"İzmit + hizmetiniz" arayanları yakalayın. En yüksek satın alma niyetiyle gelen trafik.' },
  { icon: Megaphone, title: 'Yerel Kampanyalar', desc: 'Google Haritalar\'da öne çıkın. İzmit çevresindeki müşterilere konum bazlı reklam.' },
  { icon: TrendingUp, title: 'Remarketing', desc: 'Sitenizi ziyaret edip ayrılanları yeniden yakalayın. Dönüşüm oranını 3-5x artırın.' },
  { icon: BarChart3, title: 'Performans Takibi', desc: 'Her tıklama, dönüşüm ve harcama izlenir. Hangi reklamın para kazandırdığını kesin olarak bilirsiniz.' },
  { icon: DollarSign, title: 'Bütçe Optimizasyonu', desc: 'Düşük kaliteli tıklamaları keseriz, yüksek dönüşümlü anahtar kelimelere yatırım yaparız.' },
  { icon: Zap, title: 'A/B Reklam Testleri', desc: 'Hangi başlık, açıklama ve CTA daha iyi dönüşüm veriyor? Test edip optimizasyon yapıyoruz.' },
]

const metrics = [
  { value: '1-2 Hafta', label: 'Kampanya başlangıcı' },
  { value: '%15-40', label: 'Ortalama CTR iyileştirmesi' },
  { value: '%30', label: 'Ortalama CPA düşüşü' },
  { value: '7/24', label: 'Reklam takibi' },
]

const faqs = [
  { q: 'İzmit\'te Google Ads ne kadar bütçe gerektirir?', a: 'Yerel hizmet işletmeleri için minimum aylık 3.000-5.000 TL reklam bütçesi öneriyoruz. Gebze veya İzmit merkez gibi rekabetçi bölgeler için 8.000-15.000 TL daha etkili. Ajans yönetim ücreti reklam bütçesinden ayrıdır. Ücretsiz danışmanlıkta sektörünüze özel bütçe önerisi sunarız.' },
  { q: 'Google Ads\'in SEO\'dan farkı nedir?', a: 'Google Ads anlık sonuç verir: bugün kampanya kursanız yarın trafik gelir. SEO ise 3-6 ayda sonuç verir ama uzun vadede reklam bütçesi ödemeden trafik sağlar. İzmit\'te en iyi strateji ikisini birlikte yürütmek: Google Ads hızlı satış getirirken SEO uzun vadeli büyüme inşa eder.' },
  { q: 'Kendi Google Ads hesabımı neden yönetemiyorum?', a: 'Teknik olarak yönetebilirsiniz. Ancak Quality Score optimizasyonu, negatif anahtar kelime yönetimi, teklif stratejisi ve A/B testi uzmanlık gerektiriyor. Deneyimsiz yönetimde aynı bütçeyle %40-60 daha az dönüşüm alınması çok yaygın. Profesyonel yönetim kendini genellikle ilk 2-3 ayda çıkarıyor.' },
  { q: 'İzmit\'te hangi sektörler Google Ads\'ten en çok fayda görür?', a: 'Aciliyet taşıyan hizmetler en yüksek ROI alır: oto servis, çilingir, su tesisatçısı, klima servisi. Bunun yanı sıra yüksek değerli hizmetler (avukat, muhasebe, estetik klinik) ve yerel e-ticaret Google Ads\'den çok iyi sonuç alır. B2B sanayi için LinkedIn Ads veya arama kampanyaları değerlendirilir.' },
  { q: 'Google Ads kampanyası ne zaman sonuç verir?', a: 'Kampanya aktifleştirmeden 1-2 hafta sonra tıklama ve trafik başlar. Anlamlı dönüşüm verisi için 4-6 hafta, optimizasyon için 2-3 ay gerekmektedir. İlk ay öğrenme dönemi sayılır — Google algoritması hedef kitleyi öğrenirken CPA yüksek olabilir, sonra stabilize olur.' },
  { q: 'Rakiplerim de Google Ads yapıyor, nasıl öne çıkabilirim?', a: 'Quality Score (Kalite Puanı) belirleyici. Reklam metni, açılış sayfası uyumu ve beklenen tıklama oranı yüksekse rakibinizden daha az ödeyerek üstte çıkarsınız. Ayrıca rakiplerinizin ihmal ettiği uzun kuyruklu anahtar kelimeleri ve negatif keyword yönetimini iyi yapmak büyük fark yaratır.' },
  { q: 'Raporlama nasıl yapılıyor?', a: 'Aylık detaylı kampanya raporu: gösterim, tıklama, dönüşüm, CPC, CPA ve ROAS metrikleri. Canlı Google Ads dashboard erişimi de veriyoruz. Şeffaf: her kuruşun nereye gittiğini görürsünüz.' },
  { q: 'Google Ads ile Google Haritalar reklamı aynı mı?', a: 'Hayır. Google Arama Reklamları web sitenize tıklama getirir. Google Haritalar\'da öne çıkmak için önce Google Business Profile optimizasyonu, ardından Google Local Services Ads veya Location Extension kullanılır. İzmit\'te harita paketine girmek için GBP çalışması şarttır.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'İzmit Google Ads Yönetimi',
      description: 'İzmit işletmeleri için Google Ads kampanya kurulumu, yönetimi ve optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: { '@type': 'City', name: 'İzmit' },
      url: 'https://ramsesdigital.com/izmit-google-ads',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'İzmit Google Ads', item: 'https://ramsesdigital.com/izmit-google-ads' },
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

export default function IzmitGoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">İzmit & Kocaeli</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            İzmit Google Ads
            <br />
            <span className="gradient-text">Doğru Müşteri, Doğru An</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            İzmit&apos;te hizmetinizi arayan müşterilere tam o anda ulaşın. Bütçe israfı değil, ölçülebilir dönüşüm odaklı Google Ads yönetimi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Kampanya Analizi" variant="primary" />
            <Link href="/hizmetler/google-ads-kocaeli" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Detaylı Hizmet Bilgisi <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {metrics.map(({ value, label }) => (
            <div key={label} className="text-center bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
              <p className="text-3xl font-bold text-white mb-1">{value}</p>
              <p className="text-zinc-500 text-xs leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              İzmit İçin Google Ads Hizmetlerimiz
            </h2>
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

      {/* Quality Score box */}
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <Clock size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">Quality Score Neden Kritik?</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Google Ads&apos;de üst sıraya çıkmak için sadece en yüksek teklifi vermek yetmez — <strong className="text-white">Quality Score</strong> belirleyicidir.
              Reklam metni ile açılış sayfası arasındaki uyum yüksekse, rakibinizden <strong className="text-white">daha az ödeyerek</strong> daha üstte çıkarsınız.
              Tüm kampanyalarımızda açılış sayfası optimizasyonu ve reklam-içerik uyumu öncelikli odağımızdır.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Reklam Alaka Düzeyi', 'Açılış Sayfası Deneyimi', 'Beklenen TO', 'Dönüşüm İzleme'].map((item) => (
                <span key={item} className="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
          { label: 'İzmit Reklam Ajansı', href: '/izmit-reklam-ajansi' },
          { label: 'İzmit SEO', href: '/izmit-seo' },
          { label: 'İzmit Web Tasarım', href: '/izmit-web-tasarim' },
          { label: 'İzmit Yazılım Ajansı', href: '/izmit-yazilim-ajansi' },
          { label: 'Kocaeli Google Ads', href: '/kocaeli-google-ads' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            İzmit&apos;te Reklamlarınız Bugün Başlasın
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Mevcut kampanyanızı ücretsiz analiz edelim ya da sıfırdan kuralım.
          </p>
          <CalendlyButton label="Ücretsiz Kampanya Analizi" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
