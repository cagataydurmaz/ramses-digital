import type { Metadata } from 'next'
import KurucuKutusu from '@/components/KurucuKutusu'
import Link from 'next/link'
import { MapPin, ArrowRight, CheckCircle2, type LucideIcon } from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import KisaOzet from '@/components/KisaOzet'
import SehirTeklifBolumu from '@/components/SehirTeklifBolumu'
import HeroGuvenSatiri from '@/components/HeroGuvenSatiri'
import ReklamTelefon from '@/components/telefon/ReklamTelefon'
import HaritaTelefon from '@/components/telefon/HaritaTelefon'

// Kocaeli ilçelerine özel hizmet sayfaları (varsayılan Gebze) (Google Ads, dijital pazarlama). Görünüm mevcut
// şehir hizmet sayfalarıyla aynı sınıfları kullanır; açık fiyat yok, teklif hesaplayıcı var.
const SITE = 'https://ramsesdigital.com'

export interface GebzeHizmetVeri {
  slug: string // gebze-google-ads
  baslik: string // "Gebze Google Ads Yönetimi"
  h1: string
  h1Vurgu: string
  giris: string
  kisaOzet: string
  metaTitle: string
  metaDesc: string
  hizmetAdi: string // schema
  kartlar: { icon: LucideIcon; title: string; desc: string }[]
  kutuBaslik: string
  kutuMetin: string
  sss: { q: string; a: string }[]
  ilgili: { label: string; href: string }[]
  cta: string
  yer?: { ad: string; seoSlug: string } // varsayılan Gebze
  haritaArama?: string // harita animasyonundaki örnek arama
}

export function gebzeMetadata(v: GebzeHizmetVeri): Metadata {
  const url = `${SITE}/${v.slug}`
  return {
    title: v.metaTitle,
    description: v.metaDesc,
    alternates: { canonical: url },
    openGraph: { title: v.metaTitle, description: v.metaDesc, url, images: [`${SITE}/og-image.png`] },
  }
}

export default function GebzeHizmetSayfasi({ v }: { v: GebzeHizmetVeri }) {
  const url = `${SITE}/${v.slug}`
  const yer = v.yer ?? { ad: 'Gebze', seoSlug: 'gebze-seo' }
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: v.hizmetAdi,
        provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: SITE },
        areaServed: [{ '@type': 'Place', name: yer.ad }, { '@type': 'City', name: 'Kocaeli' }],
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE },
          { '@type': 'ListItem', position: 2, name: `${yer.ad} SEO`, item: `${SITE}/${yer.seoSlug}` },
          { '@type': 'ListItem', position: 3, name: v.baslik, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: v.sss.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="tema-koyu tema-hero relative pt-24 md:pt-32 pb-12 md:pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full pointer-events-none" />
        <div data-hero-bolunmus className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">{yer.ad}, Kocaeli</span>
          </div>
          <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {v.h1}
            <br />
            <span className="gradient-text">{v.h1Vurgu}</span>
          </h1>
          <p className="hidden sm:block text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">{v.giris}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <CalendlyButton label="Ücretsiz Ön Görüşme" variant="primary" />
            <Link href={`/${yer.seoSlug}`} className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              {yer.ad} SEO <ArrowRight size={14} />
            </Link>
          </div>
          <HeroGuvenSatiri />
          </div>
          <div className="mx-auto w-full max-w-[300px] lg:max-w-none">
            {v.slug.includes('google-ads') ? <ReklamTelefon aramalar={[`${yer.ad} oto servis`, `${yer.ad} nakliyat`].map((x) => x.toLocaleLowerCase('tr-TR'))} /> : <HaritaTelefon arama={(v.haritaArama ?? `${yer.ad} fabrika tedarikçisi`).toLocaleLowerCase('tr-TR')} />}
          </div>
        </div>
      </section>

      <KisaOzet>{v.kisaOzet}</KisaOzet>

      <section className="pb-14 md:pb-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {v.kartlar.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="kart-kompakt bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <Icon size={20} className="text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-14 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <CheckCircle2 size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">{v.kutuBaslik}</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">{v.kutuMetin}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {v.sss.map(({ q, a }) => (
              <div key={q} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2 text-sm md:text-base">{q}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsMarquee />

      <KurucuKutusu yerel />
      <SehirTeklifBolumu place={yer.ad} />

      <RelatedPages pages={v.ilgili} />

      <section className="py-12 md:py-16 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{v.cta}</h2>
          <p className="text-zinc-400 text-lg mb-8">İzmit merkezli ekibimizle ücretsiz ön görüşme yapalım.</p>
          <CalendlyButton label="Ücretsiz Ön Görüşme" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
