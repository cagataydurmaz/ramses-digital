'use client'
import { Eye, KeyRound, PhoneCall, Wrench, ListChecks, CalendarClock, FileBarChart, TrendingUp, ArrowUp, CheckCircle2, MessageCircle, Phone, FileText } from 'lucide-react'
import TelefonKasa from '@/components/telefon/TelefonKasa'
import { useSiraliAdim, BELIR_CSS } from '@/components/telefon/useSiraliAdim'

// "Aylık raporda neler var?" — müşteri verisi ve uydurma rakam içermeyen örnek rapor yapısı.
// Telefonda rapor bölüm bölüm açılır, sağdaki ilgili kart vurgulanır (temsili gösterim).
const bolumler = [
  { icon: Eye, baslik: 'Görünürlük', not: 'Google’da kaç kez göründünüz, kaç tıklama aldınız; önceki aya göre değişim.' },
  { icon: KeyRound, baslik: 'Anahtar kelimeler', not: 'Hedef aramalardaki sıranız ve yükselen/düşen kelimeler.' },
  { icon: PhoneCall, baslik: 'Gelen talepler', not: 'Telefon, WhatsApp ve form talepleri; hangi sayfadan geldikleri.' },
  { icon: Wrench, baslik: 'Teknik sağlık', not: 'Hız, indeksleme ve hata kontrolü; bulunan sorunlar ve çözümleri.' },
  { icon: ListChecks, baslik: 'Bu ay yapılanlar', not: 'Yazılan içerikler, düzeltilen sayfalar ve yapılan iyileştirmeler.' },
  { icon: CalendarClock, baslik: 'Gelecek ay planı', not: 'Öncelikli işler ve hedefler; sizin onayınıza sunulur.' },
]

const CUBUK = [30, 36, 34, 44, 48, 55, 60, 66, 72, 80]

function Ekran({ i }: { i: number }) {
  const kutu = 'rounded-2xl bg-white/[0.04] border border-white/10 p-3'
  if (i === 0)
    return (
      <div className={kutu}>
        <div className="flex items-center justify-between mb-2 text-xs text-zinc-400">
          Google’da görünme <span className="inline-flex items-center gap-1 text-emerald-400"><TrendingUp size={12} /> önceki aya göre</span>
        </div>
        <div className="flex items-end gap-1 h-28">
          {CUBUK.map((h, k) => (
            <div key={k} className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-blue-400 origin-bottom animate-[cubuk_.7s_cubic-bezier(.2,.8,.2,1)_both]" style={{ height: `${h}%`, animationDelay: `${k * 50}ms` }} />
          ))}
        </div>
      </div>
    )
  if (i === 1)
    return (
      <div className={`${kutu} space-y-2`}>
        {['kocaeli diş kliniği', 'izmit implant', 'diş beyazlatma izmit'].map((k, n) => (
          <div key={k} className="flex items-center justify-between bg-white/[0.03] rounded-lg px-2.5 py-2 animate-[belir_.4s_ease-out_both]" style={{ animationDelay: `${n * 150}ms` }}>
            <span className="text-[12px] text-zinc-200 truncate">{k}</span>
            <span className="inline-flex items-center gap-0.5 text-[11px] text-emerald-400 font-semibold"><ArrowUp size={12} /> yükseldi</span>
          </div>
        ))}
      </div>
    )
  if (i === 2)
    return (
      <div className={`${kutu} space-y-3`}>
        {[
          { ad: 'Telefon', icon: Phone, w: 70, r: 'bg-violet-500' },
          { ad: 'WhatsApp', icon: MessageCircle, w: 85, r: 'bg-emerald-500' },
          { ad: 'Form', icon: FileText, w: 45, r: 'bg-sky-500' },
        ].map((k, n) => {
          const I = k.icon
          return (
            <div key={k.ad}>
              <div className="flex items-center gap-2 text-[12px] text-zinc-300 mb-1"><I size={13} className="text-zinc-400" />{k.ad}</div>
              <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                <div className={`h-full rounded-full ${k.r} origin-left animate-[dolum_.8s_ease-out_both]`} style={{ width: `${k.w}%`, animationDelay: `${n * 120}ms` }} />
              </div>
            </div>
          )
        })}
      </div>
    )
  const liste =
    i === 3
      ? ['Sayfa hızı kontrol edildi', 'Mobil uyum sorunsuz', 'Yeni sayfalar indekslendi', '2 kırık bağlantı düzeltildi']
      : i === 4
        ? ['2 yeni hizmet sayfası yazıldı', 'İşletme profili güncellendi', 'Yorumlara cevap verildi', 'Başlıklar iyileştirildi']
        : ['Yeni ilçe sayfası', 'Sık sorulan sorular bölümü', 'Fotoğraf güncellemesi']
  return (
    <div className={`${kutu} space-y-2`}>
      {liste.map((m, n) => (
        <p key={m} className="flex items-start gap-2 text-[12px] text-zinc-200 animate-[belir_.4s_ease-out_both]" style={{ animationDelay: `${n * 150}ms` }}>
          <CheckCircle2 size={14} className={`${i === 5 ? 'text-amber-400' : 'text-emerald-400'} shrink-0 mt-px`} />
          {m}
        </p>
      ))}
      {i === 5 && <p className="mt-2 text-center text-[11px] text-amber-300 bg-amber-500/10 border border-amber-500/25 rounded-full py-1.5 animate-[belir_.4s_ease-out_.5s_both]">Onayınıza sunuldu</p>}
    </div>
  )
}

export default function RaporOrnegi() {
  const { ref, adim } = useSiraliAdim(bolumler.length - 1, 2200, 2200)
  const aktif = Math.min(adim, bolumler.length - 1)
  const B = bolumler[aktif]
  const Icon = B.icon

  return (
    <section aria-labelledby="rapor-ornegi" className="py-10 md:py-14 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <FileBarChart size={26} className="text-blue-400 mx-auto mb-3" />
          <h2 id="rapor-ornegi" className="text-3xl font-bold text-white mb-3">Aylık SEO Raporunda Neler Var?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Her ay sade bir dille, PDF olarak ve kısa bir görüşmeyle anlatılan rapor. Google Search Console ve Analytics hesapları sizin adınıza kalır.</p>
        </div>
        <div ref={ref} className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-center">
          <TelefonKasa alt="Temsili gösterim: aylık SEO raporu">
            <div className="absolute inset-0 bg-[#0B1022] text-white pt-10 px-4">
              <div className="flex items-center justify-between mb-1">
                <p className="text-[11px] uppercase tracking-wider text-blue-400 font-semibold">Aylık SEO raporu</p>
                <p className="text-[10px] text-zinc-500">{aktif + 1}/{bolumler.length}</p>
              </div>
              <div className="flex gap-1 mb-4">
                {bolumler.map((_, n) => (
                  <span key={n} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${n <= aktif ? 'bg-blue-400' : 'bg-white/10'}`} />
                ))}
              </div>
              <div key={aktif} className="animate-[belir_.4s_ease-out]">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center"><Icon size={17} className="text-blue-300" /></span>
                  <p className="text-lg font-semibold">{B.baslik}</p>
                </div>
                <Ekran i={aktif} />
                <p className="text-[11.5px] text-zinc-400 leading-relaxed mt-3">{B.not}</p>
              </div>
            </div>
          </TelefonKasa>
          <div className="grid sm:grid-cols-2 gap-4">
            {bolumler.map(({ icon: I, baslik, not }, i) => (
              <div
                key={baslik}
                className={`rounded-xl p-5 border transition-all duration-500 ${i === aktif ? 'bg-blue-500/[0.08] border-blue-400/50 shadow-[0_0_24px_rgba(59,130,246,0.25)]' : 'bg-[#0D1225] border-white/[0.06]'}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-500 ${i === aktif ? 'bg-blue-500/25' : 'bg-blue-500/10'}`}><I size={18} className="text-blue-400" /></span>
                  <span className="text-zinc-600 text-xs font-mono">Bölüm {i + 1}</span>
                </div>
                <h3 className="text-white font-semibold mb-1.5">{baslik}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{not}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{BELIR_CSS + '@keyframes cubuk{from{transform:scaleY(.05)}to{transform:none}}@keyframes dolum{from{transform:scaleX(0)}to{transform:none}}'}</style>
    </section>
  )
}
