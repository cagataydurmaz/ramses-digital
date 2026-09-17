import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import { MapPin, ArrowRight, TrendingUp, Search, Megaphone, Globe, Sparkles, Code2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hizmet Verdiğimiz Şehirler — Ramses Dijital',
  description:
    'Ramses Dijital, Türkiye genelinde 12 şehirde (İzmit, Kocaeli, İstanbul, Ankara, İzmir, Bursa, Antalya, Gaziantep, Konya, Mersin, Kayseri, Eskişehir) SEO, Google Ads, web tasarım ve yazılım hizmeti veriyor — tamamen uzaktan.',
  alternates: { canonical: 'https://ramsesdigital.com/sehirler' },
  openGraph: {
    title: 'Hizmet Verdiğimiz Şehirler | Ramses Dijital',
    description: 'Türkiye genelinde 12 şehirde SEO, Google Ads, web tasarım ve yazılım hizmeti — uzaktan çalışma modeliyle.',
    url: 'https://ramsesdigital.com/sehirler',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const serviceTypes = [
  { key: 'seo', label: 'SEO', icon: Search },
  { key: 'google-ads', label: 'Google Ads', icon: Megaphone },
  { key: 'web-tasarim', label: 'Web Tasarım', icon: Globe },
  { key: 'dijital-pazarlama', label: 'Dijital Pazarlama', icon: Sparkles },
  { key: 'reklam-ajansi', label: 'Reklam Ajansı', icon: TrendingUp },
  { key: 'yazilim-ajansi', label: 'Yazılım Ajansı', icon: Code2 },
] as const

const cities = [
  { slug: 'izmit', label: 'İzmit', note: 'Merkez ofisimiz' },
  { slug: 'kocaeli', label: 'Kocaeli', note: 'Merkez bölgesi' },
  { slug: 'istanbul', label: 'İstanbul' },
  { slug: 'ankara', label: 'Ankara' },
  { slug: 'izmir', label: 'İzmir' },
  { slug: 'bursa', label: 'Bursa' },
  { slug: 'antalya', label: 'Antalya' },
  { slug: 'gaziantep', label: 'Gaziantep' },
  { slug: 'konya', label: 'Konya' },
  { slug: 'mersin', label: 'Mersin' },
  { slug: 'kayseri', label: 'Kayseri' },
  { slug: 'eskisehir', label: 'Eskişehir' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Ramses Dijital — Hizmet Verilen Şehirler',
      description: 'Türkiye genelinde 12 şehirde SEO, Google Ads, web tasarım ve yazılım hizmeti.',
      url: 'https://ramsesdigital.com/sehirler',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Şehirler', item: 'https://ramsesdigital.com/sehirler' },
      ],
    },
    {
      '@type': 'ItemList',
      itemListElement: cities.map((city, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: city.label,
        url: `https://ramsesdigital.com/${city.slug}-dijital-pazarlama`,
      })),
    },
  ],
}

export default function SehirlerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Türkiye Geneli — 12 Şehir</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Hizmet Verdiğimiz
            <br />
            <span className="gradient-text">Şehirler</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Merkezimiz Kocaeli&apos;de olsa da tüm hizmetlerimizi tamamen uzaktan, Türkiye genelinde yürütüyoruz. Şehrinizi seçin, o şehre özel SEO, Google Ads, web tasarım ve yazılım sayfalarımızı görün.
          </p>
          <CalendlyButton label="Ücretsiz Danışmanlık Al" variant="primary" />
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cities.map((city) => (
              <div key={city.slug} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={16} className="text-blue-400 shrink-0" />
                  <h2 className="text-white font-semibold text-lg">{city.label}</h2>
                </div>
                {city.note && <p className="text-zinc-500 text-xs mb-3">{city.note}</p>}
                {!city.note && <div className="mb-3" />}
                <div className="flex flex-wrap gap-1.5">
                  {serviceTypes.map(({ key, label }) => (
                    <Link
                      key={key}
                      href={`/${city.slug}-${key}`}
                      prefetch={false}
                      className="text-xs bg-white/[0.04] hover:bg-blue-500/10 border border-white/[0.06] hover:border-blue-500/30 text-zinc-400 hover:text-blue-400 rounded-full px-3 py-1.5 transition-all"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Şehriniz Listede Yok mu?</h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto mb-6">
            Sorun değil — tüm hizmetlerimiz uzaktan yürütüldüğü için Türkiye&apos;nin her yerinden işletmelere hizmet veriyoruz. Ücretsiz danışmanlıkta işletmenize özel bir strateji çıkaralım.
          </p>
          <CalendlyButton label="Ücretsiz Danışmanlık Al" variant="primary" />
        </div>
      </section>

      <ReviewsMarquee />

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp size={40} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Nereden Başlamak İstersiniz?</h2>
          <p className="text-zinc-400 text-lg mb-8">İşletmenize özel fiyat aralığını 2 dakikada görün.</p>
          <Link
            href="/teklif-al"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full px-6 py-3 transition-all"
          >
            AI Teklif Hesaplayıcı <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
