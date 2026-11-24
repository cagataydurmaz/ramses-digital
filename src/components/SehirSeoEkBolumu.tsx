import { sehirSeoEk } from '@/lib/sehirSeoEk'

// Büyük şehir SEO sayfaları: bölge × sektör × örnek arama tablosu.
export default function SehirSeoEkBolumu({ sehir }: { sehir: string }) {
  const v = sehirSeoEk[sehir]
  if (!v) return null
  return (
    <section className="py-10 md:py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-3 text-center">{v.tabloBaslik}</h2>
        <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-8">Her bölgenin sektörü ve arama alışkanlığı farklı. Sayfa yapısını buna göre kuruyoruz.</p>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
          <table className="w-full text-sm text-left min-w-[640px]">
            <thead className="bg-[#0D1225] text-white">
              <tr>
                <th className="p-4 font-semibold">Bölge</th>
                <th className="p-4 font-semibold">Öne çıkan sektörler</th>
                <th className="p-4 font-semibold">Örnek arama</th>
              </tr>
            </thead>
            <tbody>
              {v.satirlar.map((s) => (
                <tr key={s.bolge} className="border-t border-white/[0.06]">
                  <td className="p-4 text-white font-medium align-top">{s.bolge}</td>
                  <td className="p-4 text-zinc-400 align-top leading-relaxed">{s.sektor}</td>
                  <td className="p-4 text-blue-400 align-top">&ldquo;{s.arama}&rdquo;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
