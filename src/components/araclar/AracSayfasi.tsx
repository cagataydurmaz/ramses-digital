import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'

export interface AracSss { q: string; a: string }

interface Props {
  slug: string
  baslik: string
  aciklama: string
  sss: AracSss[]
  hizmet: { label: string; href: string }
  blog?: { label: string; href: string }
  children: React.ReactNode
}

const SITE = 'https://ramsesdigital.com'

// Tüm ücretsiz araç sayfaları için ortak şablon: başlık, araç, SSS (JSON-LD), hizmet yönlendirmesi.
export default function AracSayfasi({ slug, baslik, aciklama, sss, hizmet, blog, children }: Props) {
  const url = `${SITE}/araclar/${slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebApplication', name: baslik, description: aciklama, url, applicationCategory: 'BusinessApplication', operatingSystem: 'Web', inLanguage: 'tr', offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' }, publisher: { '@type': 'Organization', name: 'Ramses Dijital', url: SITE } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Ücretsiz Araçlar', item: `${SITE}/araclar` },
        { '@type': 'ListItem', position: 3, name: baslik, item: url },
      ] },
      { '@type': 'FAQPage', mainEntity: sss.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  }
  const ilgili = [hizmet, ...(blog ? [blog] : []), { label: 'Tüm Ücretsiz Araçlar', href: '/araclar' }]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="tema-koyu tema-hero relative pt-32 pb-10 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Link href="/araclar" className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6 text-blue-400 text-sm font-medium">
            Ücretsiz Araçlar
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">{baslik}</h1>
          <p className="text-zinc-400 text-lg leading-relaxed">{aciklama}</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto bg-[#0D1225] border border-white/[0.06] rounded-xl p-6 md:p-8">{children}</div>
        <p className="max-w-3xl mx-auto text-zinc-500 text-xs mt-4 text-center">Bu araç tamamen tarayıcınızda çalışır; yazdığınız hiçbir bilgi sunucuya gönderilmez veya kaydedilmez.</p>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {sss.map(({ q, a }) => (
              <div key={q} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2 text-sm md:text-base">{q}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Bu İşi Bizimle Yürütmek İster misiniz?</h2>
          <p className="text-zinc-400 mb-6">Araç size yol gösterir; uygulamayı ve takibi biz üstlenebiliriz. İşletmenize özel tahmini teklifi AI teklif hesaplayıcıdan hemen görebilirsiniz.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/teklif-al" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg px-6 py-3 transition-colors">
              AI Teklif Hesaplayıcı <ArrowRight size={16} />
            </Link>
            <CalendlyButton label="Ücretsiz Görüşme" variant="secondary" />
          </div>
        </div>
      </section>
      <RelatedPages pages={ilgili} />
    </>
  )
}
