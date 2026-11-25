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
const ESKI = ['from-zinc-200 to-zinc-300', 'from-slate-200 to-slate-300', 'from-stone-200 to-stone-300', 'from-zinc-100 to-zinc-300', 'from-neutral-200 to-neutral-300']

export default function SosyalMedyaTelefon() {
  const { ref, adim } = useSiraliAdim(YENI.length, 800, 2200)
  const gorunen = YENI.slice(0, adim).reverse()

  return (
    <div ref={ref}>
      <TelefonKasa alt="Temsili gösterim: içerik takvimine göre paylaşımlar">
        <div className="absolute inset-0 bg-white text-[#0a0a0a] pt-9">
          <div className="px-4 flex items-center gap-3">
            <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-pink-500 to-violet-500">
              <div className="w-full h-full rounded-full bg-white border-2 border-white flex items-center justify-center text-lg font-bold">İ</div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">isletmeniz</p>
              <p className="text-gray-500 text-xs">İzmit · Kafe & Kahvaltı</p>
              <span className="inline-block mt-1.5 text-[11px] text-white bg-[#0095f6] rounded-md px-3 py-0.5 font-medium">Takip et</span>
            </div>
          </div>
          <div className="flex gap-3 px-4 mt-4">
            {['Menü', 'Ekip', 'Yorumlar', 'Konum'].map((s) => (
              <div key={s} className="text-center">
                <div className="w-12 h-12 rounded-full border border-zinc-300 bg-zinc-100" />
                <p className="text-[10px] text-gray-600 mt-1">{s}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-around border-t border-zinc-200 mt-4 py-2 text-gray-400">
            <Grid3x3 size={18} className="text-[#0a0a0a]" />
            <Clapperboard size={18} />
          </div>
          <div className="grid grid-cols-3 gap-[2px]">
            {Array.from({ length: 9 }).map((_, i) => {
              const g = gorunen[i]
              return (
                // Kutular sabit; yalnızca içerik değişir (sayfa kayması olmaz).
                <div key={i} className="relative aspect-[4/5] overflow-hidden">
                  {g ? (
                    <div key={`${g.yazi}-${adim}`} className={`absolute inset-0 bg-gradient-to-br ${g.renk} text-white flex items-end p-1.5 ${i === 0 ? 'animate-[belir_.45s_ease-out]' : ''}`}>
                      {g.tur === 'reels' && <Play size={12} className="absolute top-1.5 right-1.5 fill-white" />}
                      {g.tur === 'karusel' && <Layers size={12} className="absolute top-1.5 right-1.5" />}
                      <span className="text-[10px] font-semibold leading-tight drop-shadow">{g.yazi}</span>
                      {i === 0 && <Heart size={26} className="absolute inset-0 m-auto fill-white text-white animate-[pop_.6s_ease-out_.3s_both]" />}
                    </div>
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${ESKI[i % ESKI.length]}`} />
                  )}
                </div>
              )
            })}
          </div>
          {adim > 0 && adim <= YENI.length && (
            <p key={adim} className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] text-white bg-[#0a0a0a]/75 backdrop-blur rounded-full px-3 py-1 animate-[belir_.4s_ease-out]">
              Takvime göre paylaşıldı
            </p>
          )}
        </div>
      </TelefonKasa>
      <style>{BELIR_CSS}</style>
    </div>
  )
}
