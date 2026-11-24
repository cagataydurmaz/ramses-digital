'use client'
import { Heart, Play, Layers, Grid3x3, Clapperboard } from 'lucide-react'
import TelefonKasa from './TelefonKasa'
import { useSiraliAdim, BELIR_CSS } from './useSiraliAdim'

// İşletme hesabına içerik takvimine göre yeni gönderilerin eklenmesi (temsili, rakam yok).
const YENI = [
  { tur: 'reels', renk: 'from-pink-500 to-orange-400', yazi: 'Günün ürünü' },
  { tur: 'karusel', renk: 'from-violet-500 to-fuchsia-500', yazi: '3 ipucu' },
  { tur: 'reels', renk: 'from-sky-500 to-indigo-500', yazi: 'Ekibimiz' },
  { tur: 'gonderi', renk: 'from-emerald-500 to-teal-500', yazi: 'Kampanya' },
]
const ESKI = ['from-zinc-700 to-zinc-800', 'from-slate-700 to-slate-800', 'from-stone-700 to-stone-800', 'from-zinc-600 to-zinc-800', 'from-neutral-700 to-neutral-800']

export default function SosyalMedyaTelefon() {
  const { ref, adim } = useSiraliAdim(YENI.length, 1300)
  const gorunen = YENI.slice(0, adim).reverse()

  return (
    <div ref={ref}>
      <TelefonKasa alt="Temsili gösterim: içerik takvimine göre paylaşımlar">
        <div className="absolute inset-0 bg-[#0a0a0a] text-white pt-9">
          <div className="px-4 flex items-center gap-3">
            <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-pink-500 to-violet-500">
              <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center text-lg font-bold">İ</div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">isletmeniz</p>
              <p className="text-zinc-400 text-xs">İzmit · Kafe & Kahvaltı</p>
              <span className="inline-block mt-1.5 text-[11px] bg-blue-500 rounded-md px-3 py-0.5 font-medium">Takip et</span>
            </div>
          </div>
          <div className="flex gap-3 px-4 mt-4">
            {['Menü', 'Ekip', 'Yorumlar', 'Konum'].map((s) => (
              <div key={s} className="text-center">
                <div className="w-12 h-12 rounded-full border border-zinc-700 bg-zinc-900" />
                <p className="text-[10px] text-zinc-400 mt-1">{s}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-around border-t border-zinc-800 mt-4 py-2 text-zinc-500">
            <Grid3x3 size={18} className="text-white" />
            <Clapperboard size={18} />
          </div>
          <div className="grid grid-cols-3 gap-[2px]">
            {gorunen.map((g, i) => (
              <div
                key={`${g.yazi}-${adim}-${i}`}
                className={`relative aspect-[4/5] bg-gradient-to-br ${g.renk} flex items-end p-1.5 ${i === 0 ? 'animate-[belir_.45s_ease-out]' : ''}`}
              >
                {g.tur === 'reels' && <Play size={12} className="absolute top-1.5 right-1.5 fill-white" />}
                {g.tur === 'karusel' && <Layers size={12} className="absolute top-1.5 right-1.5" />}
                <span className="text-[10px] font-semibold leading-tight drop-shadow">{g.yazi}</span>
                {i === 0 && <Heart size={26} className="absolute inset-0 m-auto fill-white text-white animate-[pop_.6s_ease-out_.3s_both]" />}
              </div>
            ))}
            {ESKI.concat(ESKI).slice(0, 9 - gorunen.length).map((r, i) => (
              <div key={`eski-${i}`} className={`aspect-[4/5] bg-gradient-to-br ${r}`} />
            ))}
          </div>
          {adim > 0 && adim <= YENI.length && (
            <p key={adim} className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] bg-white/10 backdrop-blur border border-white/15 rounded-full px-3 py-1 animate-[belir_.4s_ease-out]">
              Takvime göre paylaşıldı
            </p>
          )}
        </div>
      </TelefonKasa>
      <style>{BELIR_CSS}</style>
    </div>
  )
}
