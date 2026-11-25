'use client'
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, ChevronLeft, CheckCheck } from 'lucide-react'
import TelefonKasa from './TelefonKasa'
import { useSiraliAdim, BELIR_CSS } from './useSiraliAdim'

// Instagram reklamının temsili gösterimi: akışta "Sponsorlu" gönderi belirir, "Mesaj gönder"e
// dokunulur ve işletmeye WhatsApp'tan hazır mesaj düşer. Rakam/beğeni sayısı gösterilmez.
export default function MetaReklamTelefon() {
  const { ref, adim } = useSiraliAdim(4, 900, 2200)
  // 0: akış · 1: sponsorlu gönderi · 2: düğmeye dokunma · 3-4: WhatsApp sohbeti

  return (
    <div ref={ref}>
      <TelefonKasa alt="Temsili gösterim: Instagram reklamından WhatsApp talebine">
        {adim < 3 ? (
          <div className="absolute inset-0 bg-white text-zinc-900 pt-9">
            <div className="flex items-center justify-between px-4 pb-2 border-b border-zinc-100">
              <span className="font-semibold text-[17px] tracking-tight" style={{ fontFamily: 'cursive' }}>Instagram</span>
              <div className="flex gap-3 text-zinc-800"><Heart size={18} /><Send size={18} /></div>
            </div>
            {/* Önceki gönderi (gri) */}
            <div className={`transition-all duration-700 ${adim >= 1 ? '-translate-y-40 opacity-0' : ''}`}>
              <div className="flex items-center gap-2 px-3 py-2">
                <span className="w-7 h-7 rounded-full bg-zinc-200" />
                <span className="h-2.5 w-20 rounded bg-zinc-200" />
              </div>
              <div className="h-56 bg-gradient-to-br from-zinc-100 to-zinc-200" />
            </div>
            {/* Sponsorlu gönderi */}
            <div className={`absolute inset-x-0 top-[4.25rem] transition-all duration-700 ${adim >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
              <div className="flex items-center gap-2 px-3 py-2">
                <span className="w-7 h-7 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-pink-500 to-violet-500">
                  <span className="block w-full h-full rounded-full bg-white text-[10px] font-bold flex items-center justify-center">İ</span>
                </span>
                <div className="flex-1 leading-tight">
                  <p className="text-[12px] font-semibold">isletmeniz</p>
                  <p className="text-[10px] text-zinc-500">Sponsorlu</p>
                </div>
                <MoreHorizontal size={16} className="text-zinc-500" />
              </div>
              <div className="relative h-60 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 flex flex-col items-center justify-center text-white text-center px-6">
                <p className="text-[11px] uppercase tracking-widest opacity-80 mb-1">İzmit · Kocaeli</p>
                <p className="text-xl font-bold leading-tight">Bu hafta ücretsiz<br />ön görüşme</p>
                <p className="text-[11px] mt-2 opacity-85">Size en yakın şubemizde</p>
              </div>
              <div className={`mx-3 -mt-px flex items-center justify-between rounded-b-md px-3 py-2.5 text-[13px] font-semibold transition-colors duration-300 ${adim >= 2 ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-900'}`}>
                Mesaj gönder
                <ChevronLeft size={15} className="rotate-180" />
              </div>
              {adim === 2 && <span className="absolute left-1/2 bottom-[4.6rem] w-9 h-9 -translate-x-1/2 rounded-full bg-blue-400/40 animate-ping" />}
              <div className="flex items-center gap-3 px-3 pt-2.5 text-zinc-800">
                <Heart size={20} /><MessageCircle size={20} /><Send size={20} />
                <Bookmark size={20} className="ml-auto" />
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-[#0b141a] text-white pt-9 animate-[belir_.4s_ease-out]">
            <div className="flex items-center gap-2 px-3 py-2.5 bg-[#1f2c34]">
              <ChevronLeft size={18} />
              <span className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-sm font-bold">İ</span>
              <div className="leading-tight">
                <p className="text-[13px] font-semibold">İşletmeniz</p>
                <p className="text-[10px] text-emerald-300">çevrimiçi</p>
              </div>
            </div>
            <div className="px-3 pt-4 space-y-2">
              <p className="mx-auto w-fit text-[10px] text-zinc-400 bg-[#1f2c34] rounded-md px-2 py-0.5">Instagram reklamından</p>
              <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-[#005c4b] px-3 py-2 text-[13px] animate-[belir_.4s_ease-out]">
                Merhaba, ücretsiz ön görüşme için bu hafta uygun saatiniz var mı?
                <span className="flex justify-end items-center gap-1 text-[10px] text-zinc-300 mt-0.5">şimdi <CheckCheck size={12} className="text-sky-400" /></span>
              </div>
              {adim >= 4 && (
                <div className="max-w-[80%] rounded-lg rounded-tl-none bg-[#1f2c34] px-3 py-2 text-[13px] animate-[belir_.4s_ease-out]">
                  Merhaba, elbette! Perşembe 14:00 uygun mu?
                </div>
              )}
            </div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] bg-white/10 border border-white/15 rounded-full px-3 py-1">Reklamdan gelen talep ölçülür</p>
          </div>
        )}
      </TelefonKasa>
      <style>{BELIR_CSS}</style>
    </div>
  )
}
