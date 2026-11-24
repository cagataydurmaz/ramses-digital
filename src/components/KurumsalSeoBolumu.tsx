import { CheckCircle2, XCircle } from 'lucide-react'

// "Kurumsal SEO" aramaları için kısa, maddeli bölüm + kaçınılması gereken yanlışlar.
const icerik = [
  'Teknik SEO denetimi: hız, taranabilirlik, indeksleme ve yönlendirme hataları',
  'Ürün, hizmet ve sektör sayfalarından oluşan net site yapısı',
  'Kurumsal güven bilgisi: belgeler, referanslar, ekip ve iletişim',
  'Schema (yapılandırılmış veri) ve yapay zekâ aramalarına uygun soru-cevap içerikleri',
  'Gerekiyorsa İngilizce sayfalar ve yurt dışı alıcılar için tedarikçi içerikleri',
  'Aylık rapor: görünürlük, tıklama ve gelen talepler',
]
const yanlislar = [
  'Toplu, ucuz link paketleri: Google tarafından cezalandırılma riski taşır',
  'Kopya veya şablon içerikle onlarca şehir sayfası açmak',
  '"İlk sıra garantisi" veren teklifler: hiçbir ajans bunu garanti edemez',
  'Sitenin ve hesapların ajans adına açılması: veriler her zaman işletmede kalmalı',
]

export default function KurumsalSeoBolumu({ yer }: { yer: string }) {
  return (
    <section aria-labelledby="kurumsal-seo" className="py-10 md:py-14 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-[#0D1225] border border-white/[0.08] rounded-2xl p-7">
          <h2 id="kurumsal-seo" className="text-2xl font-bold text-white mb-2">{yer} Kurumsal SEO</h2>
          <p className="text-zinc-400 text-sm mb-5">Firmalar, üreticiler ve çok şubeli işletmeler için kurumsal SEO çalışmasının kapsamı:</p>
          <ul className="space-y-3">
            {icerik.map((m) => (
              <li key={m} className="flex gap-2.5 text-zinc-300 text-sm leading-relaxed">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#0D1225] border border-white/[0.08] rounded-2xl p-7">
          <h2 className="text-2xl font-bold text-white mb-2">SEO&apos;da Kaçınılması Gereken Yanlışlar</h2>
          <p className="text-zinc-400 text-sm mb-5">Ajans seçerken bu tekliflere dikkat edin:</p>
          <ul className="space-y-3">
            {yanlislar.map((m) => (
              <li key={m} className="flex gap-2.5 text-zinc-300 text-sm leading-relaxed">
                <XCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
