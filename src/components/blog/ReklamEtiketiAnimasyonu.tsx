'use client'

import Image from 'next/image'
import { Heart, MessageCircle, Send, XCircle, CheckCircle2 } from 'lucide-react'
import TelefonKasa from '@/components/telefon/TelefonKasa'
import { useSiraliAdim } from '@/components/telefon/useSiraliAdim'

// Blog (reklam yönetmeliği): Menfaat karşılığı paylaşımda "Reklam" ibaresinin olmaması ve olması.
// Temsili gösterim; hesap ve işletme adları örnektir.
export default function ReklamEtiketiAnimasyonu() {
  const { ref, adim } = useSiraliAdim(2, 1100, 2000)
  const etiketli = adim >= 2

  return (
    <div ref={ref}>
      <TelefonKasa alt="Temsili gösterim · influencer paylaşımında reklam ibaresi">
        <div className="absolute inset-0 bg-black pt-10 flex flex-col">
          <div className="flex items-center gap-2 px-3 pb-2.5">
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-violet-600 p-[2px]">
              <span className="block w-full h-full rounded-full bg-zinc-800" />
            </span>
            <div className="leading-tight">
              <p className="text-white text-[12px] font-semibold">ornek.icerikuretici</p>
              <p className={`text-[10.5px] transition-[opacity,transform] duration-300 ease-out ${etiketli ? 'text-zinc-300 opacity-100' : 'text-transparent opacity-0'}`}>
                <span className="font-semibold text-white">Reklam</span> · Örnek Kafe ile iş birliği
              </p>
            </div>
          </div>

          <div className="relative aspect-square w-full overflow-hidden">
            <Image src="/gorseller/blog/reklam-yonetmeligi-influencer.webp" alt="" fill sizes="320px" className="object-cover" />
          </div>

          <div className="flex items-center gap-3 px-3 pt-2.5 text-white">
            <Heart size={18} /><MessageCircle size={18} /><Send size={18} />
          </div>
          <p className="px-3 pt-1.5 text-[11px] text-zinc-200 leading-snug">
            <span className="font-semibold">ornek.icerikuretici</span> Haftanın kahve durağı burası ☕
          </p>

          <div className="mt-auto mb-4 mx-3">
            {etiketli ? (
              <p key="ok" className="flex items-center gap-1.5 text-[11px] text-emerald-300 bg-emerald-500/10 border border-emerald-400/30 rounded-full px-3 py-1.5 animate-[etBelir_.4s_ease-out]">
                <CheckCircle2 size={13} /> “Reklam” ibaresi var: kurala uygun
              </p>
            ) : (
              <p key="yok" className={`flex items-center gap-1.5 text-[11px] text-rose-300 bg-rose-500/10 border border-rose-400/30 rounded-full px-3 py-1.5 transition-opacity duration-500 ${adim >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                <XCircle size={13} /> Hediye karşılığı paylaşım, ibare yok
              </p>
            )}
          </div>
        </div>
      </TelefonKasa>
      <style>{`@keyframes etBelir{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:none}}`}</style>
    </div>
  )
}
