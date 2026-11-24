import { Eye, KeyRound, PhoneCall, Wrench, ListChecks, CalendarClock, FileBarChart } from 'lucide-react'

// "Aylık raporda neler var?" — müşteri verisi ve uydurma rakam içermeyen örnek rapor yapısı.
const bolumler = [
  { icon: Eye, baslik: 'Görünürlük', not: 'Google’da kaç kez göründünüz, kaç tıklama aldınız; önceki aya göre değişim.' },
  { icon: KeyRound, baslik: 'Anahtar kelimeler', not: 'Hedef aramalardaki sıranız ve yükselen/düşen kelimeler.' },
  { icon: PhoneCall, baslik: 'Gelen talepler', not: 'Telefon, WhatsApp ve form talepleri; hangi sayfadan geldikleri.' },
  { icon: Wrench, baslik: 'Teknik sağlık', not: 'Hız, indeksleme ve hata kontrolü; bulunan sorunlar ve çözümleri.' },
  { icon: ListChecks, baslik: 'Bu ay yapılanlar', not: 'Yazılan içerikler, düzeltilen sayfalar ve yapılan iyileştirmeler.' },
  { icon: CalendarClock, baslik: 'Gelecek ay planı', not: 'Öncelikli işler ve hedefler; sizin onayınıza sunulur.' },
]

export default function RaporOrnegi() {
  return (
    <section aria-labelledby="rapor-ornegi" className="py-10 md:py-14 px-6 bg-[#080D18]/55 border-y border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <FileBarChart size={26} className="text-blue-400 mx-auto mb-3" />
          <h2 id="rapor-ornegi" className="text-3xl font-bold text-white mb-3">Aylık SEO Raporunda Neler Var?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Her ay sade bir dille, PDF olarak ve kısa bir görüşmeyle anlatılan rapor. Google Search Console ve Analytics hesapları sizin adınıza kalır.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bolumler.map(({ icon: Icon, baslik, not }, i) => (
            <div key={baslik} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center"><Icon size={18} className="text-blue-400" /></span>
                <span className="text-zinc-600 text-xs font-mono">Bölüm {i + 1}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{baslik}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{not}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
