import Link from 'next/link'
import { MapPin } from 'lucide-react'

// Genel hizmet sayfaları (/web-tasarim-ajansi vb.) için: karşılaştırma tablosu,
// süreç adımları ve şehir sayfalarına bağlantılar.
const SEHIRLER: [string, string][] = [
  ['izmit', 'İzmit'], ['kocaeli', 'Kocaeli'], ['istanbul', 'İstanbul'], ['ankara', 'Ankara'], ['izmir', 'İzmir'], ['bursa', 'Bursa'],
  ['antalya', 'Antalya'], ['konya', 'Konya'], ['gaziantep', 'Gaziantep'], ['mersin', 'Mersin'], ['kayseri', 'Kayseri'], ['eskisehir', 'Eskişehir'],
]

export interface AjansDetay {
  tabloBaslik: string
  tabloAciklama: string
  sutunlar: [string, string, string]
  satirlar: [string, string, string][]
  surecBaslik: string
  adimlar: { baslik: string; not: string }[]
  sehirHizmet: string // url eki: web-tasarim, google-ads, yazilim-ajansi
  sehirEtiket: string // "Web Tasarım"
}

export default function AjansDetayBolumu({ d }: { d: AjansDetay }) {
  return (
    <>
      <section className="py-10 md:py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-3 text-center">{d.tabloBaslik}</h2>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-8">{d.tabloAciklama}</p>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table className="w-full text-sm text-left min-w-[640px]">
              <thead className="bg-[#0D1225] text-white">
                <tr>{d.sutunlar.map((s) => <th key={s} className="p-4 font-semibold">{s}</th>)}</tr>
              </thead>
              <tbody>
                {d.satirlar.map(([a, b, c]) => (
                  <tr key={a} className="border-t border-white/[0.06]">
                    <td className="p-4 text-white font-medium align-top">{a}</td>
                    <td className="p-4 text-zinc-400 align-top leading-relaxed">{b}</td>
                    <td className="p-4 text-zinc-300 align-top leading-relaxed">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">{d.surecBaslik}</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {d.adimlar.map((a, i) => (
              <li key={a.baslik} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <span className="text-blue-400 text-sm font-semibold">0{i + 1}</span>
                <h3 className="text-white font-semibold mt-1 mb-2">{a.baslik}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{a.not}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-10 md:py-14 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Şehirlere Göre {d.sehirEtiket}</h2>
          <p className="text-zinc-400 mb-6">Bulunduğunuz şehre özel arama alışkanlıkları ve sektör yapısıyla hazırlanmış sayfalar:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {SEHIRLER.map(([slug, ad]) => (
              <Link key={slug} href={`/${slug}-${d.sehirHizmet}`} prefetch={false} className="inline-flex items-center gap-1.5 text-sm bg-white/[0.04] border border-white/[0.08] hover:border-blue-500/40 text-zinc-300 hover:text-white rounded-full px-4 py-2 transition-colors">
                <MapPin size={12} className="text-blue-400" /> {ad} {d.sehirEtiket}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
