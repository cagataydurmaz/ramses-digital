import type { Metadata } from 'next'
import SiziArayalimFormu from '@/components/SiziArayalimFormu'
import Link from 'next/link'
import CityServiceSections, { cityServiceFaqs } from '@/components/CityServiceSections'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Megaphone, ArrowRight, Target, BarChart3, Zap, TrendingUp, DollarSign, Clock } from 'lucide-react'
import HeroGuvenSatiri from '@/components/HeroGuvenSatiri'
import ReklamTelefon from '@/components/telefon/ReklamTelefon'

export const metadata: Metadata = {
  title: 'Mersin Google Ads Yönetimi — Ramses Dijital',
  description:
    'Mersin\'de Google Ads yönetimi. Yenişehir, Akdeniz, Toroslar ve tüm Mersin ilçelerinde hedefli arama reklamları. Bütçe israfı yok, ölçülebilir dönüşüm.',
  alternates: { canonical: 'https://ramsesdigital.com/mersin-google-ads' },
  openGraph: {
    title: 'Mersin Google Ads Yönetimi | Ramses Dijital',
    description: 'Mersin işletmeleri için Google Ads kampanyası. Doğru kitleye, doğru zamanda ulaşın.',
    url: 'https://ramsesdigital.com/mersin-google-ads',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  { icon: Target, title: 'İlçe Bazlı Arama Reklamları', desc: '"Yenişehir diş hekimi", "Akdeniz oto servis", "Erdemli narenciye ihracatçısı" — her ilçe için özel kampanya yapısı.' },
  { icon: Megaphone, title: 'Google Haritalar Reklamları', desc: 'Mersin\'de konuma dayalı "yakınımdaki X" aramalarında öne çıkın. En yüksek yerel dönüşüm.' },
  { icon: TrendingUp, title: 'Lojistik & İhracat Odaklı Kampanyalar', desc: 'Lojistik ve narenciye ihracatçı firmaları için gümrük/nakliye ortağı arayan işletmeleri hedefleyen özel kampanya yapısı.' },
  { icon: BarChart3, title: 'Dönüşüm İzleme', desc: 'Telefon araması, form gönderimi, WhatsApp tıklaması — her aksiyonu izliyoruz.' },
  { icon: DollarSign, title: 'Bütçe Optimizasyonu', desc: 'Mersin\'in rekabetçi sektörlerinde düşük CPA için Quality Score odaklı teklif stratejisi.' },
  { icon: Zap, title: 'A/B Reklam Testleri', desc: 'Hangi başlık Mersin müşterisine daha iyi dönüşüm veriyor? Sürekli test ve optimizasyon.' },
]

const faqs = [
  ...cityServiceFaqs('mersin', 'ads'),
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Mersin Google Ads Yönetimi',
      description: 'Mersin ve tüm ilçeleri için Google Ads kampanya kurulumu, yönetimi ve optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'Mersin' }, { '@type': 'City', name: 'Yenişehir' },
        { '@type': 'City', name: 'Akdeniz' }, { '@type': 'City', name: 'Toroslar' },
      ],
      url: 'https://ramsesdigital.com/mersin-google-ads',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Mersin Google Ads', item: 'https://ramsesdigital.com/mersin-google-ads' },
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

export default function MersinGoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full pointer-events-none" />
        <div data-hero-bolunmus className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Mersin — Tüm İlçeler</span>
          </div>
          <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Mersin Google Ads
            <br />
            <span className="gradient-text">İlçe Bazlı Hedefleme</span>
          </h1>
          <p className="line-clamp-3 sm:line-clamp-none text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Yenişehir, Akdeniz veya Tarsus — Mersin&apos;in hangi ilçesinde müşteri arıyorsanız, tam o noktada reklamınız çıksın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <CalendlyButton label="Ücretsiz Kampanya Analizi" variant="primary" />
            <Link href="/hizmetler/google-ads" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Detaylı Hizmet Bilgisi <ArrowRight size={14} />
            </Link>
          </div>
          <HeroGuvenSatiri />
          </div>
          <div className="mx-auto w-full max-w-[300px] lg:max-w-none">
            <ReklamTelefon aramalar={['mersin oto servis', 'mersin klima servisi', 'mersin nakliyat']} />
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: '9+', label: 'Mersin ilçesi — hedeflenebilir' },
            { value: '1-2 Hafta', label: 'Kampanya başlangıcı' },
            { value: 'B2B + Turizm', label: 'Lojistik ve sahil odaklı' },
            { value: 'Aylık', label: 'Şeffaf performans raporu' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mersin İçin Google Ads Hizmetlerimiz</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="kart-kompakt bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
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
            <Clock size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">Mersin&apos;de Quality Score Neden Kritik?</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Mersin&apos;de rekabetçi sektörlerde (diş kliniği, estetik, oto servis) en yüksek teklifi vermek üstte çıkmayı garantilemez.
              <strong className="text-white"> Quality Score</strong> belirleyicidir:
              reklam metni, açılış sayfası uyumu ve beklenen tıklama oranı yüksekse rakibinizden daha az ödeyip daha üstte çıkarsınız.
              B2B lojistik kampanyalarında ise doğru hedef kitle ve niş anahtar kelime seçimi daha da önemlidir.
            </p>
          </div>
        </div>
      </section>

      <CityServiceSections city="mersin" hizmet="ads" />

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

      <SiziArayalimFormu />
      <ReviewsMarquee />

      <RelatedPages
        pages={[
          { label: 'Mersin Dijital Pazarlama', href: '/mersin-dijital-pazarlama' },
          { label: 'Mersin SEO', href: '/mersin-seo' },
          { label: 'Mersin Web Tasarım', href: '/mersin-web-tasarim' },
          { label: 'Mersin Reklam Ajansı', href: '/mersin-reklam-ajansi' },
          { label: 'Google Ads Ajansı (Türkiye Geneli)', href: '/google-ads-ajansi' },
        ]}
      />

      <section className="py-12 md:py-16 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Mersin&apos;de Reklamlarınız Bugün Başlasın</h2>
          <p className="text-zinc-400 text-lg mb-8">Mevcut kampanyanızı ücretsiz analiz edelim ya da sıfırdan kuralım.</p>
          <CalendlyButton label="Ücretsiz Kampanya Analizi" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
