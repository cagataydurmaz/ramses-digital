'use client'
import { useRef, useState } from 'react'
import { Search, MapPin, Phone, Navigation, Globe, ArrowRight } from 'lucide-react'
import { trackEvent } from '@/lib/tracking'
import { waLink, waMesaj } from '@/lib/whatsapp'

// Ziyaretçi işletme adını yazar; Google'da (harita + normal sonuç) nasıl görünebileceğini anında görür.
// Puan/yorum sayısı gibi uydurulmuş bilgi gösterilmez.

const harfler: Record<string, string> = { ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u', â: 'a', î: 'i', û: 'u' }
function alanAdi(ad: string) {
  const s = ad
    .toLocaleLowerCase('tr')
    .replace(/[çğıöşüâîû]/g, (h) => harfler[h] || h)
    .replace(/[^a-z0-9]+/g, '')
    .slice(0, 24)
  return (s || 'isletmeniz') + '.com'
}
const ilkHarfBuyuk = (s: string) => s.replace(/(^|\s)(\S)/g, (_, b, h) => b + h.toLocaleUpperCase('tr'))

export default function GoogleOnizleme({ varsayilanYer = 'İzmit' }: { varsayilanYer?: string } = {}) {
  const [ad, setAd] = useState('')
  const [is, setIs] = useState('')
  const [yer, setYer] = useState('')
  const izlendi = useRef(false)
  const izle = () => {
    if (!izlendi.current) {
      izlendi.current = true
      trackEvent('arac_kullanildi', { arac: 'google-onizleme' })
    }
  }

  const gAd = ad.trim() || 'İşletmenizin Adı'
  const gIs = is.trim() || 'Diş Kliniği'
  const gYer = yer.trim() || varsayilanYer
  const sorgu = `${gYer} ${gIs}`.toLocaleLowerCase('tr')
  const alan = alanAdi(ad.trim())
  const doldu = ad.trim().length > 1

  const girdi =
    'w-full bg-[#080D18] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors'

  const mesaj = waMesaj('Google’da görünmek istiyorum', [
    doldu && `İşletme: ${ad.trim()}`,
    is.trim() && `Sektör: ${is.trim()}`,
    yer.trim() && `Şehir/ilçe: ${yer.trim()}`,
  ], 'Önizlemedeki gibi görünmek için ne yapmamız gerektiğini konuşabilir miyiz?')

  return (
    <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 lg:gap-8 items-start">
      {/* Girdiler */}
      <div className="bg-white/[0.02] border border-white/[0.14] rounded-2xl p-5 sm:p-6 space-y-4">
        <div>
          <label htmlFor="go-ad" className="block text-white text-sm font-medium mb-2">İşletmenizin adı</label>
          <input id="go-ad" value={ad} maxLength={40} placeholder="Örn. Yıldız Diş Kliniği" onChange={(e) => { setAd(e.target.value); izle() }} className={girdi} />
        </div>
        <div>
          <label htmlFor="go-is" className="block text-white text-sm font-medium mb-2">Ne iş yapıyorsunuz?</label>
          <input id="go-is" value={is} maxLength={30} placeholder="Örn. diş kliniği, kuaför, avukat" onChange={(e) => { setIs(e.target.value); izle() }} className={girdi} />
        </div>
        <div>
          <label htmlFor="go-yer" className="block text-white text-sm font-medium mb-2">Şehir veya ilçe</label>
          <input id="go-yer" value={yer} maxLength={24} placeholder={`Örn. ${varsayilanYer}`} onChange={(e) => { setYer(e.target.value); izle() }} className={girdi} />
        </div>
        <a
          href={waLink(mesaj)}
          target="_blank"
          rel="noopener noreferrer"
          className={`group w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold transition-all ${
            doldu ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_24px_rgba(59,130,246,0.35)]' : 'bg-white/[0.06] text-zinc-300 hover:bg-white/[0.1]'
          }`}
        >
          Böyle görünmek istiyorum
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <p className="text-zinc-500 text-xs leading-relaxed">Önizleme temsilidir. Gerçek sıralama rekabete ve çalışmaya göre değişir.</p>
      </div>

      {/* Google görünümü */}
      <div className="order-first lg:order-none bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(59,130,246,0.35)]" aria-live="polite">
        {/* Arama çubuğu */}
        <div className="px-4 sm:px-5 pt-4 pb-3 border-b border-zinc-200">
          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-[22px] font-semibold tracking-tight select-none">
              <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
            </span>
            <div className="flex-1 min-w-0 flex items-center gap-2 rounded-full border border-zinc-200 shadow-sm px-4 py-2">
              <span className="flex-1 min-w-0 truncate text-[15px] text-zinc-800">{sorgu}</span>
              <Search size={16} className="text-[#4285F4] shrink-0" />
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-5 py-4 space-y-4">
          {/* Harita sonucu */}
          <div className="rounded-xl border border-zinc-200 overflow-hidden">
            <div className="relative h-20 sm:h-24 bg-[#e8f0e5] overflow-hidden" aria-hidden>
              <div className="absolute inset-0 opacity-70" style={{ backgroundImage: 'linear-gradient(90deg,#fff 2px,transparent 2px),linear-gradient(0deg,#fff 2px,transparent 2px)', backgroundSize: '46px 34px' }} />
              <div className="absolute -left-6 top-8 w-[140%] h-3 bg-[#fde293] rotate-[-8deg]" />
              <div className="absolute left-[18%] top-0 h-full w-10 bg-[#aadaff]/70 skew-x-[-18deg]" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                <MapPin size={30} className="text-[#EA4335] fill-[#EA4335] drop-shadow onizleme-pin" />
              </span>
            </div>
            <div className="p-3 sm:p-4">
              <p key={gAd} className="text-[#1a0dab] text-base sm:text-lg font-medium leading-snug onizleme-yaz">{gAd}</p>
              <p className="text-zinc-600 text-sm">{ilkHarfBuyuk(gIs)} · {ilkHarfBuyuk(gYer)}</p>
              <p className="text-sm"><span className="text-[#188038] font-medium">Açık</span> <span className="text-zinc-500">· WhatsApp ile iletişim</span></p>
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  { i: Globe, t: 'Web sitesi' },
                  { i: Navigation, t: 'Yol tarifi' },
                  { i: Phone, t: 'Ara' },
                ].map(({ i: I, t }) => (
                  <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 px-3 py-1 text-[13px] text-[#1a73e8]">
                    <I size={13} /> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Normal arama sonucu */}
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                {gAd.charAt(0).toLocaleUpperCase('tr')}
              </span>
              <div className="min-w-0 leading-tight">
                <p className="text-[13px] text-zinc-800 truncate">{gAd}</p>
                <p className="text-xs text-zinc-500 truncate">https://{alan}</p>
              </div>
            </div>
            <p key={`${gAd}${gIs}${gYer}`} className="text-[#1a0dab] text-lg sm:text-xl leading-snug break-words onizleme-yaz">
              {ilkHarfBuyuk(gYer)} {ilkHarfBuyuk(gIs)} | {gAd}
            </p>
            <p className="text-[#4d5156] text-sm leading-relaxed break-words">
              {ilkHarfBuyuk(gYer)} bölgesinde {gIs.toLocaleLowerCase('tr')} arıyorsanız {gAd} yanınızda. Hizmetlerimizi inceleyin, hemen arayın veya WhatsApp&apos;tan yazın.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
