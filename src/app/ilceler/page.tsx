import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import { MapPin, ArrowRight } from 'lucide-react'
import { ilceler } from '@/lib/ilceler'

export const metadata: Metadata = {
  title: 'Kocaeli, Sakarya, Yalova ve Düzce Bölgeleri | Ramses Dijital',
  description:
    'Gebze, Darıca, Körfez, Gölcük, Başiskele, Adapazarı, Sapanca ve çevresi için web tasarım ve yerel SEO. Her bölgenin ekonomisine göre hazırlanmış rehber sayfalar.',
  alternates: { canonical: 'https://ramsesdigital.com/ilceler' },
}

const iller = ['Kocaeli', 'Sakarya', 'Yalova', 'Düzce'] as const

export default function IlcelerPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Marmara ve Batı Karadeniz</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Bölgenize Özel
            <br />
            <span className="gradient-text">Web Tasarım ve Yerel SEO</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Her bölgenin ekonomisi ve arama alışkanlığı farklı. İşletmenizin bulunduğu yere göre hazırladığımız rehber sayfaları inceleyin.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {iller.map((il) => {
            const liste = ilceler.filter((i) => i.il === il)
            if (!liste.length) return null
            return (
              <div key={il}>
                <h2 className="text-2xl font-bold text-white mb-5">{il}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {liste.map((i) => (
                    <Link
                      key={i.slug}
                      href={`/ilceler/${i.slug}`}
                      className="group bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-5 transition-all"
                    >
                      <p className="text-white font-semibold mb-1">{i.name} Web Tasarım</p>
                      <p className="text-zinc-500 text-sm mb-3">{i.tur}</p>
                      <span className="text-blue-400 text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        Sayfayı Gör <ArrowRight size={13} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
          <p className="text-zinc-500 text-sm">
            İzmit için <Link href="/izmit-web-tasarim" className="text-blue-400 hover:underline">İzmit Web Tasarım</Link>, tüm Kocaeli için{' '}
            <Link href="/kocaeli-seo" className="text-blue-400 hover:underline">Kocaeli SEO</Link> sayfalarına bakabilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Bölgeniz Listede Yok mu?</h2>
          <p className="text-zinc-400 text-lg mb-8">Tüm çalışma uzaktan yürüyor, Türkiye genelinde hizmet veriyoruz.</p>
          <CalendlyButton label="Ücretsiz Ön Görüşme" variant="primary" />
        </div>
      </section>
    </>
  )
}
