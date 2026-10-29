import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { pricing } from '@/lib/pricing'

const fmt = (n: number) => n.toLocaleString('tr-TR')
const range = (service: string, size: 'kucuk' | 'orta' | 'buyuk') => {
  const r = pricing[service][size]
  return `${fmt(r.min)}–${fmt(r.max)} ₺`
}

export default function SeoPriceTable({ place }: { place: string }) {
  const rows = [
    { paket: 'SEO Başlangıç Paketi', tur: 'Tek seferlik', kime: 'Küçük işletme, tek site', fiyat: range('SEO Başlangıç Paketi', 'kucuk'), icerik: 'Teknik SEO denetimi, sayfa içi düzenleme, Google profili, AEO/GEO şema kurulumu' },
    { paket: 'Aylık SEO — küçük işletme', tur: 'Aylık', kime: 'Yerel hizmet işletmeleri', fiyat: range('SEO', 'kucuk') + ' / ay', icerik: 'İçerik, yerel SEO, raporlama' },
    { paket: 'Aylık SEO — orta işletme', tur: 'Aylık', kime: 'Çok hizmetli ya da çok ilçeli işletmeler', fiyat: range('SEO', 'orta') + ' / ay', icerik: 'Daha yoğun içerik, bağlantı çalışması, ilçe bazlı strateji' },
  ]
  return (
    <section className="py-16 px-6 bg-[#080D18]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{place} SEO Paketleri ve Fiyat Aralıkları</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Fiyatlar işletme büyüklüğü ve kapsama göre tahmini aralıklardır; kesin teklif ücretsiz görüşmede netleşir.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] bg-[#0D1225]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/[0.06] text-zinc-400">
                <th className="p-4 font-medium">Paket</th>
                <th className="p-4 font-medium">Kime uygun</th>
                <th className="p-4 font-medium">Neler dahil</th>
                <th className="p-4 font-medium whitespace-nowrap">Fiyat aralığı</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.paket} className="border-b border-white/[0.04] last:border-0 align-top">
                  <td className="p-4 text-white font-medium">
                    {r.paket}
                    <span className="block text-xs text-zinc-500 font-normal mt-0.5">{r.tur}</span>
                  </td>
                  <td className="p-4 text-zinc-300">{r.kime}</td>
                  <td className="p-4 text-zinc-400">{r.icerik}</td>
                  <td className="p-4 text-white font-semibold whitespace-nowrap">{r.fiyat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-zinc-500 text-xs mt-4 text-center">
          Çoklu ilçe / şehir sayfası (pSEO) çalışmaları işletme büyüklüğünden bağımsız olduğu için ayrı teklif gerektirir.{' '}
          <Link href="/teklif-al" className="text-blue-400 hover:underline inline-flex items-center gap-1">
            Kendi aralığınızı hesaplayın <ArrowRight size={11} />
          </Link>
        </p>
      </div>
    </section>
  )
}
