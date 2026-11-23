import type { Metadata } from 'next'
import KapakGorseli from '@/components/KapakGorseli'
import { seoBaslik } from '@/lib/seoBaslik'
import Link from 'next/link'
import { Briefcase, ArrowRight, ShieldCheck, BookOpen, ExternalLink, TrendingUp } from 'lucide-react'
import SehirTeklifBolumu from '@/components/SehirTeklifBolumu'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import KisaOzet from '@/components/KisaOzet'
import { projects } from '@/lib/portfolio'
import type { SektorVeri } from '@/lib/sektorler'
import { sektorSehir } from '@/lib/sektorSehir'

// Veri odaklı sektör sayfası (src/lib/sektorler.ts). IlSeoSayfasi ile aynı görsel dil.
const SITE = 'https://ramsesdigital.com'

export function sektorMetadata(v: SektorVeri): Metadata {
  const title = seoBaslik(`${v.ad} İçin SEO ve Dijital Pazarlama`.length > 52 ? `${v.kisaAd} İçin SEO ve Dijital Pazarlama` : `${v.ad} İçin SEO ve Dijital Pazarlama`)
  const url = `${SITE}/sektorler/${v.slug}`
  return {
    title,
    description: v.aciklama,
    alternates: { canonical: url },
    openGraph: { title, description: v.aciklama, url, images: [`${SITE}/og-image.png`] },
  }
}

export default function SektorSayfasi({ v }: { v: SektorVeri }) {
  const url = `${SITE}/sektorler/${v.slug}`
  const isler = v.portfoy.map((s) => projects.find((p) => p.slug === s)).filter((p): p is (typeof projects)[number] => !!p)
  const genelSss = [
    { q: 'Hizmeti nasıl veriyorsunuz?', a: 'Tamamen uzaktan çalışıyoruz. Görüşmeler, strateji onayı ve raporlama çevrim içi yürütülür; Türkiye’nin her yerindeki işletmelerle çalışabiliyoruz.' },
  ]
  const faqs = [...v.sss, ...genelSss]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${v.ad} İçin Dijital Pazarlama`,
        description: v.aciklama,
        provider: { '@type': 'Organization', name: 'Ramses Dijital', url: SITE },
        areaServed: { '@type': 'Country', name: 'Türkiye' },
        audience: { '@type': 'BusinessAudience', name: v.ad },
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Sektörler', item: `${SITE}/sektorler` },
          { '@type': 'ListItem', position: 3, name: v.ad, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  }

  const ilgili = [
    ...sektorSehir.filter((x) => x.meslek.sektorSlug === v.slug).map((x) => ({ label: `${x.sehir.ad} ${x.meslek.baslik}`, href: `/${x.slug}` })),
    ...v.hizmetler.map((h) => ({ label: h.ad.replace(' (uygunsa)', ''), href: h.href })),
    ...v.bloglar,
    { label: 'Ücretsiz Araçlar', href: '/araclar' },
    { label: 'Tüm Sektörler', href: '/sektorler' },
  ].filter((l, i, a) => a.findIndex((x) => x.href === l.href) === i)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-14 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Link href="/sektorler" className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Briefcase size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Sektörler · {v.kisaAd}</span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {v.ad} İçin Dijital Pazarlama
            <br />
            <span className="gradient-text">{v.baslikVurgu}</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">{v.ozet}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Görüşme" variant="primary" />
            <Link href="/teklif-al" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              AI Teklif Hesaplayıcı <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <KisaOzet>{v.kisaOzet}</KisaOzet>

      <KapakGorseli src={`/gorseller/${v.slug}.webp`} alt={`${v.ad} için dijital pazarlama`} />

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{v.kisaAd} İçin Dijitalde Neler Önemli?</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Şablon değil, sektörün gerçek arama ve karar alışkanlıklarına göre kurulan plan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {v.ihtiyaclar.map(({ baslik, not }) => (
              <div key={baslik} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">{baslik}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{not}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <ShieldCheck size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{v.kurallar.baslik}</h2>
            <ul className="space-y-3">
              {v.kurallar.maddeler.map((m) => (
                <li key={m} className="text-zinc-400 text-sm leading-relaxed flex gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Önerdiğimiz Hizmetler</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Sektörünüzün kurallarına ve hedeflerinize uyan kanallar.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {v.hizmetler.map((h) => (
              <Link key={h.ad} href={h.href} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] group bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-6 transition-colors">
                <h3 className="text-white font-semibold mb-2">{h.ad}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{h.not}</p>
                <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">Detaylar <ArrowRight size={13} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">İlgili Portföy Projeleri</h2>
            {v.portfoyNot && <p className="text-zinc-500 text-sm mb-4">{v.portfoyNot}</p>}
            <div className="space-y-3 mt-4">
              {isler.map((p) => (
                <Link key={p.slug} href={`/portfolyo/${p.slug}`} className="block bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-5 transition-colors">
                  <p className="text-zinc-500 text-xs mb-1">{p.industry} · {p.category}</p>
                  <p className="text-white font-semibold flex items-center gap-1.5">{p.name} <ExternalLink size={12} className="text-zinc-500" /></p>
                </Link>
              ))}
              <Link href="/portfolyo" className="text-blue-400 text-sm font-medium inline-flex items-center gap-1.5">Tüm portföy <ArrowRight size={13} /></Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Sektörünüz İçin Rehberler</h2>
            <p className="text-zinc-500 text-sm mb-4">Blogumuzda bu sektöre özel hazırladığımız yazılar.</p>
            <div className="space-y-3">
              {v.bloglar.map((b) => (
                <Link key={b.href} href={b.href} className="flex items-start gap-3 bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-5 transition-colors">
                  <BookOpen size={18} className="text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-white text-sm font-medium">{b.label}</span>
                </Link>
              ))}
              <Link href="/araclar" className="flex items-start gap-3 bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-5 transition-colors">
                <TrendingUp size={18} className="text-blue-400 shrink-0 mt-0.5" />
                <span className="text-white text-sm font-medium">Ücretsiz araçlar: WhatsApp linki, Google yorum linki, bütçe hesaplayıcı</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#080D18]">
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

      <SehirTeklifBolumu place={v.teklifAd} />

      <RelatedPages pages={ilgili} />
    </>
  )
}
