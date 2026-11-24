import type { Metadata } from 'next'
import { HaritaTelefonBolumu } from '@/components/telefon/TelefonBolumleri'
import KapakGorseli from '@/components/KapakGorseli'
import Link from 'next/link'
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import SehirTeklifBolumu from '@/components/SehirTeklifBolumu'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import KisaOzet from '@/components/KisaOzet'
import GooglePuanSatiri from '@/components/GooglePuanSatiri'
import GoogleAramaAnimasyonu from '@/components/GoogleAramaAnimasyonu'
import { sektorler } from '@/lib/sektorler'
import { sektorSehir, sektorSehirBul, type SektorSehirVeri } from '@/lib/sektorSehir'

// Sektör × şehir sayfası (/istanbul-avukat-seo). Ortak sektör bilgisi sektorler.ts'den,
// şehre özgü içerik sektorSehir.ts'den gelir. Görsel dil SektorSayfasi ile aynı.
const SITE = 'https://ramsesdigital.com'

export function sektorSehirMetadata(slug: string): Metadata {
  const v = sektorSehirBul(slug)!
  const title = `${v.sehir.ad} ${v.meslek.baslik} ve Web Sitesi | Ramses Dijital`
  const description = v.kisaOzet.length > 160 ? v.kisaOzet.slice(0, v.kisaOzet.lastIndexOf(' ', 155)) + '…' : v.kisaOzet
  const url = `${SITE}/${v.slug}`
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url, images: [`${SITE}/og-image.png`] } }
}

export default function SektorSehirSayfasi({ slug }: { slug: string }) {
  const v = sektorSehirBul(slug) as SektorSehirVeri
  const s = sektorler.find((x) => x.slug === v.meslek.sektorSlug)!
  const url = `${SITE}/${v.slug}`
  const calisma = v.sehir.yerel
    ? { q: 'Yüz yüze görüşebilir miyiz?', a: `Evet. İzmit merkezli bir ekibiz; ${v.sehir.de} gerektiğinde yüz yüze görüşebiliyor, süreci WhatsApp ve video görüşmeyle de yürütebiliyoruz.` }
    : { q: 'Hizmeti nasıl veriyorsunuz?', a: `${v.sehir.deki} ${s.kisaAd.toLocaleLowerCase('tr-TR')} ile uzaktan çalışıyoruz. Görüşmeler, içerik onayı ve aylık raporlama çevrim içi yürütülür.` }
  const faqs = [...v.sss, ...s.sss.slice(0, 2), ...(v.sss.some((f) => /yüz yüze|dışından çalışmanız/.test(f.q)) ? [] : [calisma])]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${v.sehir.ad} ${v.meslek.ad} SEO ve Web Sitesi`,
        description: v.kisaOzet,
        provider: { '@type': 'ProfessionalService', name: 'Ramses Dijital', url: SITE, telephone: '+905355601936' },
        areaServed: { '@type': 'City', name: v.sehir.ad },
        audience: { '@type': 'BusinessAudience', name: s.ad },
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE },
          { '@type': 'ListItem', position: 2, name: s.ad, item: `${SITE}/sektorler/${s.slug}` },
          { '@type': 'ListItem', position: 3, name: `${v.sehir.ad} ${v.meslek.baslik}`, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  }

  const digerSehirler = sektorSehir.filter((x) => x.meslek.key === v.meslek.key && x.slug !== v.slug)
  const digerMeslekler = sektorSehir.filter((x) => x.sehir.key === v.sehir.key && x.slug !== v.slug)
  const ilgili = [
    { label: `${s.ad} İçin Dijital Pazarlama`, href: `/sektorler/${s.slug}` },
    { label: `${v.sehir.ad} SEO`, href: `/${v.sehir.seoSlug}` },
    ...digerSehirler.map((x) => ({ label: `${x.sehir.ad} ${x.meslek.baslik}`, href: `/${x.slug}` })),
    ...digerMeslekler.map((x) => ({ label: `${x.sehir.ad} ${x.meslek.baslik}`, href: `/${x.slug}` })),
    ...s.bloglar,
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-24 md:pt-32 pb-10 md:pb-14 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
            <Link href={`/sektorler/${s.slug}`} className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
              <MapPin size={13} className="text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">{v.sehir.ad} · {s.kisaAd}</span>
            </Link>
            <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              {v.sehir.ad} {v.meslek.baslik}
              <br />
              <span className="gradient-text">{v.vurgu}</span>
            </h1>
            <p className="hidden sm:block text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed">{s.ozet}</p>
            <div className="flex justify-center lg:justify-start"><GooglePuanSatiri /></div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
              <CalendlyButton label="Ücretsiz Ön Görüşme" variant="primary" />
              <Link href="/teklif-al" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
                AI Teklif Hesaplayıcı <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[300px] lg:max-w-none">
            <GoogleAramaAnimasyonu aramalar={[`${v.sehir.ad} ${v.meslek.ad}`.toLocaleLowerCase('tr-TR'), `${v.sehir.ad} ${v.meslek.ad} önerisi`.toLocaleLowerCase('tr-TR'), `en yakın ${v.meslek.ad}`.toLocaleLowerCase('tr-TR')]} />
          </div>
        </div>
      </section>

      <KisaOzet>{v.kisaOzet}</KisaOzet>

      <KapakGorseli src={`/gorseller/${s.slug}.webp`} alt={`${v.sehir.ad} ${s.ad.toLocaleLowerCase('tr-TR')} için SEO`} />

      <section className="pb-10 md:pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{v.yerelBaslik}</h2>
          <p className="text-zinc-400 leading-relaxed">{v.yerelMetin}</p>
        </div>
      </section>

      <section className="pb-12 md:pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">{v.sehir.de} {v.meslek.ad} Aramaları: Bölge, Arama, Sayfa</h2>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-8">Hangi bölgede, hangi arama yapılıyor ve o aramayı hangi sayfa karşılar?</p>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table className="w-full text-sm text-left min-w-[640px]">
              <thead className="bg-[#0D1225] text-white">
                <tr>
                  <th className="p-4 font-semibold">Bölge</th>
                  <th className="p-4 font-semibold">Örnek arama</th>
                  <th className="p-4 font-semibold">Önerdiğimiz sayfa / içerik</th>
                </tr>
              </thead>
              <tbody>
                {v.tablo.map((t) => (
                  <tr key={t.bolge} className="border-t border-white/[0.06]">
                    <td className="p-4 text-white font-medium align-top">{t.bolge}</td>
                    <td className="p-4 text-blue-400 align-top">&ldquo;{t.arama}&rdquo;</td>
                    <td className="p-4 text-zinc-400 align-top leading-relaxed">{t.oneri}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">{s.kisaAd} İçin Neler Yapıyoruz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {s.ihtiyaclar.map(({ baslik, not }) => (
              <div key={baslik} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                  <h3 className="text-white font-semibold">{baslik}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{not}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 px-6 bg-gradient-to-br from-blue-950/30 via-[#080D18]/60 to-violet-950/30 border-y border-white/[0.08]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <ShieldCheck size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{s.kurallar.baslik}</h2>
            <ul className="space-y-3">
              {s.kurallar.maddeler.map((m) => (
                <li key={m} className="text-zinc-400 text-sm leading-relaxed flex gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Önerdiğimiz Hizmetler</h2>
          <div className="flex flex-wrap justify-center gap-5">
            {s.hizmetler.map((h) => (
              <Link key={h.ad} href={h.href} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33%-14px)] group bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-6 transition-colors">
                <h3 className="text-white font-semibold mb-2">{h.ad}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{h.not}</p>
                <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">Detaylar <ArrowRight size={13} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6 bg-gradient-to-br from-blue-950/30 via-[#080D18]/60 to-violet-950/30 border-y border-white/[0.08]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">{v.sehir.ad} {v.meslek.ad} SEO: Sık Sorulan Sorular</h2>
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

      <HaritaTelefonBolumu yer={v.sehir.ad} arama={`${v.sehir.ad} ${v.meslek.ad}`.toLocaleLowerCase('tr-TR')} />
      <ReviewsMarquee />

      <SehirTeklifBolumu place={s.teklifAd} />

      <RelatedPages pages={ilgili} />
    </>
  )
}
