import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, ArrowRight, CheckCircle2, Search, Globe, Smartphone, Zap } from 'lucide-react'
import { ilceler, getIlce } from '@/lib/ilceler'

export function generateStaticParams() {
  return ilceler.map((i) => ({ slug: i.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const ilce = getIlce(params.slug)
  if (!ilce) return {}
  const url = `https://ramsesdigital.com/ilceler/${ilce.slug}`
  const title = `${ilce.name} Web Tasarım ve SEO | Ramses Dijital`
  const description = `${ilce.name} işletmeleri için web tasarım, yerel SEO ve Google görünürlüğü. ${ilce.name} ekonomisine göre hazırlanan sektör önerileri ve ücretsiz ön görüşme.`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: ['https://ramsesdigital.com/og-image.png'] },
  }
}

export default function IlcePage({ params }: { params: { slug: string } }) {
  const ilce = getIlce(params.slug)
  if (!ilce) notFound()

  const url = `https://ramsesdigital.com/ilceler/${ilce.slug}`
  const komsular = ilce.komsular.map((s) => getIlce(s)).filter((x): x is NonNullable<typeof x> => !!x)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${ilce.name} Web Tasarım ve SEO Hizmeti`,
        description: `${ilce.name} (${ilce.il}) işletmeleri için web tasarım, yerel SEO ve Google görünürlüğü hizmeti.`,
        provider: { '@type': 'ProfessionalService', name: 'Ramses Dijital', url: 'https://ramsesdigital.com', telephone: '+905355601936' },
        areaServed: { '@type': 'AdministrativeArea', name: `${ilce.name}, ${ilce.il}` },
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
          { '@type': 'ListItem', position: 2, name: 'Bölgeler', item: 'https://ramsesdigital.com/ilceler' },
          { '@type': 'ListItem', position: 3, name: ilce.name, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: ilce.sss.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">{ilce.tur}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {ilce.name} Web Tasarım
            <br />
            <span className="gradient-text">ve Yerel SEO</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">{ilce.intro}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Ön Görüşme" variant="primary" />
            <Link href="/portfolyo" prefetch={false} className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Örnek Çalışmalar <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{ilce.name} Ekonomisi ve Aramalar</h2>
          <p className="text-zinc-400 leading-relaxed">{ilce.ekonomi}</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">{ilce.name}&apos;de Sektöre Göre Yaklaşım</h2>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-10">Aynı site her sektöre uymaz. {ilce.name} için öncelik verdiğimiz alanlar:</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {ilce.sektorler.map(({ ad, oneri }) => (
              <div key={ad} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                  <h3 className="text-white font-semibold">{ad}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{oneri}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-3">
            <Search size={18} className="text-blue-400" />
            <h2 className="text-xl font-bold text-white">{ilce.name}&apos;de Aranan Örnek Sorgular</h2>
          </div>
          <p className="text-zinc-400 text-sm mb-4">Bu bölgedeki işletmelerin görünür olması gereken, rekabeti nispeten düşük arama örnekleri:</p>
          <div className="flex flex-wrap gap-2">
            {ilce.aramalar.map((a) => (
              <span key={a} className="text-sm bg-white/[0.04] border border-white/[0.06] text-zinc-300 rounded-full px-3 py-1">{a}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-5">
          {[
            { icon: Smartphone, title: 'Mobil öncelikli', desc: 'Yerel aramaların çoğu telefondan yapılıyor; site hızlı açılır, tek dokunuşla arama ve WhatsApp sağlar.' },
            { icon: Zap, title: 'Hızlı ve SEO hazır', desc: 'Sayfa hızı, başlık yapısı, schema ve sitemap baştan doğru kurulur.' },
            { icon: Globe, title: 'Uzaktan çalışma', desc: 'Tüm süreç video görüşme ve WhatsApp ile yürür; konumunuz fark yaratmaz.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <Icon size={20} className="text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">{ilce.name} İçin Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {ilce.sss.map(({ q, a }) => (
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
          ...komsular.map((k) => ({ label: `${k.name} Web Tasarım`, href: `/ilceler/${k.slug}` })),
          { label: 'Tüm Bölgeler', href: '/ilceler' },
          ...(ilce.il === 'Kocaeli'
            ? [
                { label: 'Kocaeli SEO', href: '/kocaeli-seo' },
                { label: 'Kocaeli Web Tasarım', href: '/kocaeli-web-tasarim' },
              ]
            : [{ label: 'Web Tasarım Hizmeti', href: '/hizmetler/web-tasarim' }]),
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{ilce.name}&apos;de Görünür Olmaya Başlayın</h2>
          <p className="text-zinc-400 text-lg mb-8">30 dakikalık ücretsiz görüşmede işletmenizi ve aramaları birlikte inceleyelim.</p>
          <CalendlyButton label="Ücretsiz Ön Görüşme" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
