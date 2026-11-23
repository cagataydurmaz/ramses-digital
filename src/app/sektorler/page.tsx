import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Scale, Stethoscope, Brain, PawPrint, Calculator, ShoppingCart, Coffee, Briefcase } from 'lucide-react'
import { sektorler } from '@/lib/sektorler'
import RelatedPages from '@/components/RelatedPages'
import KisaOzet from '@/components/KisaOzet'
import CalendlyButton from '@/components/CalendlyButton'

const SITE = 'https://ramsesdigital.com'
const title = 'Sektörlere Göre SEO ve Dijital Pazarlama | Ramses Dijital'
const description = 'Avukatlar, diş hekimleri, psikologlar, veteriner klinikleri, mali müşavirler, e-ticaret, restoran ve kafeler için sektöre özel SEO, web tasarım ve Google Ads.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE}/sektorler` },
  openGraph: { title, description, url: `${SITE}/sektorler`, images: [`${SITE}/og-image.png`] },
}

const ikon: Record<string, typeof Briefcase> = {
  'avukat-hukuk-burolari': Scale,
  'dis-hekimleri-klinikler': Stethoscope,
  'psikolog-terapistler': Brain,
  'veteriner-klinikleri': PawPrint,
  'mali-musavirler': Calculator,
  'e-ticaret': ShoppingCart,
  'restoran-kafe': Coffee,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'CollectionPage', name: 'Sektörlere Göre Dijital Pazarlama', description, url: `${SITE}/sektorler`,
      hasPart: sektorler.map((s) => ({ '@type': 'WebPage', name: s.ad, url: `${SITE}/sektorler/${s.slug}` })) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Sektörler', item: `${SITE}/sektorler` },
    ] },
  ],
}

export default function SektorlerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">Sektörler</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Sektörünüze Özel<br /><span className="gradient-text">SEO ve Dijital Pazarlama</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Her sektörün kuralları, müşteri davranışı ve rekabeti farklı. Stratejiyi buna göre kuruyoruz.</p>
        </div>
      </section>
      <KisaOzet>Avukatlık ve mali müşavirlik gibi mesleklerde reklam yasak, sağlıkta ise tanıtım kurallarla sınırlı; bu yüzden her sektörde aynı plan işe yaramaz. Aşağıdan sektörünüzü seçerek hangi kanalları önerdiğimizi, dikkat edilmesi gereken kuralları ve ilgili rehberlerimizi görebilirsiniz.</KisaOzet>
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sektorler.map((s) => {
            const Icon = ikon[s.slug] ?? Briefcase
            return (
              <Link key={s.slug} href={`/sektorler/${s.slug}`} className="group bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-6 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h2 className="text-white font-semibold text-lg mb-2">{s.ad}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{s.baslikVurgu}</p>
                <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">İncele <ArrowRight size={13} /></span>
              </Link>
            )
          })}
        </div>
      </section>
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Sektörünüz Listede Yok mu?</h2>
          <p className="text-zinc-400 mb-6">Farklı sektörlerden işletmelerle de çalışıyoruz. Ücretsiz görüşmede ihtiyacınızı konuşalım ya da AI teklif hesaplayıcıyla tahmini teklifi görün.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Görüşme" variant="primary" />
            <Link href="/teklif-al" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">AI Teklif Hesaplayıcı <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
      <RelatedPages pages={[{ label: 'Hizmetler', href: '/hizmetler' }, { label: 'Şehirler', href: '/sehirler' }, { label: 'Ücretsiz Araçlar', href: '/araclar' }, { label: 'Portföy', href: '/portfolyo' }]} />
    </>
  )
}
