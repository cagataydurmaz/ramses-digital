import { MapPin } from 'lucide-react'
import { sehirSeo } from '@/lib/sehirSeo'

export default function CitySeoSections({ city }: { city: string }) {
  const v = sehirSeo[city]
  if (!v) return null
  return (
    <>
      {v.ilceler.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">İlçelere Göre {v.sehir} SEO</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                {v.sehir} tek bir pazar değil. İlçelerin iş yapısı ve arama alışkanlıkları farklı; stratejiyi işletmenizin gerçekten hizmet verdiği bölgeye göre kuruyoruz.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {v.ilceler.map(({ ad, not }) => (
                <div key={ad} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={15} className="text-blue-400" />
                    <h3 className="text-white font-semibold">{ad}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{not}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{v.bulunma} Hangi Aramalarla Başlamalı?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Rekabetin en yüksek olduğu genel aramalar uzun vadeli hedeftir. Sonucu daha hızlı getiren, ilçe ve sektör odaklı aramalarla başlamak gerekir.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/[0.06] bg-[#0D1225]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] text-zinc-400">
                  <th className="p-4 font-medium">Arama türü</th>
                  <th className="p-4 font-medium">Örnek</th>
                  <th className="p-4 font-medium">Rekabet</th>
                  <th className="p-4 font-medium">Yaklaşım</th>
                </tr>
              </thead>
              <tbody>
                {v.aramalar.map((r) => (
                  <tr key={r.tur} className="border-b border-white/[0.04] last:border-0 align-top">
                    <td className="p-4 text-white font-medium">{r.tur}</td>
                    <td className="p-4 text-zinc-300">&ldquo;{r.ornek}&rdquo;</td>
                    <td className="p-4 text-zinc-300 whitespace-nowrap">{r.rekabet}</td>
                    <td className="p-4 text-zinc-400">{r.yaklasim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
