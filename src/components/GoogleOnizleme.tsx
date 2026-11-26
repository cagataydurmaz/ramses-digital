'use client'
import { useRef, useState } from 'react'
import { Search, MapPin, Phone, Navigation, Globe, ArrowRight, Sparkles } from 'lucide-react'
import { trackEvent } from '@/lib/tracking'
import { waLink, waMesaj } from '@/lib/whatsapp'

// Ziyaretçi işletme adını yazar; Google aramada, Haritalar'da ve yapay zekâ asistanlarında
// nasıl görünebileceğini anında görür (masaüstünde üçü birlikte, mobilde sekmeli).
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
// Türkçe bulunma eki (İzmit'te, Kadıköy'de, Bursa'da). ilceler.ts'teki bulunma() ile aynı kural;
// istemci paketine büyük veri dosyası girmesin diye burada kısa hali.
function bulunmaEki(ad: string) {
  const kucuk = (ad.split(' ').pop() || ad).toLocaleLowerCase('tr-TR')
  const unluler = kucuk.match(/[aeıioöuü]/g) || []
  const kalin = 'aıou'.includes(unluler[unluler.length - 1] || 'e')
  const sert = 'fstkçşhp'.includes(kucuk[kucuk.length - 1])
  return `${ad}'${sert ? 't' : 'd'}${kalin ? 'a' : 'e'}`
}
const ilkHarfBuyuk = (s: string) => s.replace(/(^|\s)(\S)/g, (_, b, h) => b + h.toLocaleUpperCase('tr'))

export default function GoogleOnizleme({ varsayilanYer = 'İzmit' }: { varsayilanYer?: string } = {}) {
  const [ad, setAd] = useState('')
  const [is, setIs] = useState('')
  const [yer, setYer] = useState('')
  const [sekme, setSekme] = useState<'arama' | 'harita' | 'ai'>('arama')
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

      {/* Görünüm: Google arama + Haritalar + yapay zekâ asistanı */}
      <div className="order-first lg:order-none" aria-live="polite">
        {/* Mobil sekmeler */}
        <div className="lg:hidden grid grid-cols-3 gap-1 p-1 mb-3 rounded-xl bg-white border border-zinc-200 text-[13px] font-medium" role="tablist">
          {([['arama', 'Google arama'], ['harita', 'Haritalar'], ['ai', 'Yapay zekâ']] as const).map(([k, t]) => (
            <button key={k} role="tab" aria-selected={sekme === k} onClick={() => setSekme(k)}
              className={`rounded-lg py-2 transition-colors ${sekme === k ? 'bg-[#1a73e8] !text-white' : 'text-zinc-600'}`}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-3 lg:gap-4">
          {/* 1) Google arama sonucu */}
          <div className={`${sekme === 'arama' ? 'block' : 'hidden'} lg:block lg:col-span-2 bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-[0_20px_60px_-24px_rgba(37,99,235,0.35)]`}>
            <div className="px-4 sm:px-5 pt-4 pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-3">
                <span className="hidden sm:block text-[22px] font-semibold tracking-tight select-none">
                  <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
                </span>
                <div className="flex-1 min-w-0 flex items-center gap-2 rounded-full border border-zinc-200 shadow-sm px-4 py-2">
                  <span className="flex-1 min-w-0 truncate text-[15px] text-[#202124]">{sorgu}</span>
                  <Search size={16} className="text-[#4285F4] shrink-0" />
                </div>
              </div>
            </div>
            <div className="px-4 sm:px-5 py-4">
              <div className="flex items-center gap-2.5 mb-1">
                <span className="w-7 h-7 rounded-full bg-[#1a73e8] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {gAd.charAt(0).toLocaleUpperCase('tr')}
                </span>
                <div className="min-w-0 leading-tight">
                  <p className="text-[13px] text-[#202124] truncate">{gAd}</p>
                  <p className="text-xs text-[#4d5156] truncate">https://{alan}</p>
                </div>
              </div>
              <p key={`${gAd}${gIs}${gYer}`} className="text-[#1a0dab] text-lg sm:text-xl leading-snug break-words onizleme-yaz">
                {ilkHarfBuyuk(gYer)} {ilkHarfBuyuk(gIs)} | {gAd}
              </p>
              <p className="text-[#4d5156] text-sm leading-relaxed break-words">
                {ilkHarfBuyuk(gYer)} bölgesinde {gIs.toLocaleLowerCase('tr')} arıyorsanız {gAd} yanınızda. Hizmetlerimizi inceleyin, hemen arayın veya WhatsApp&apos;tan yazın.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mt-3 pl-1 text-sm text-[#1a0dab]">
                {['Hizmetlerimiz', 'İletişim', 'Hakkımızda', 'Randevu'].map((t) => <span key={t} className="truncate">{t}</span>)}
              </div>
            </div>
          </div>

          {/* 2) Google Haritalar */}
          <div className={`${sekme === 'harita' ? 'block' : 'hidden'} lg:block bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-[0_16px_40px_-24px_rgba(37,99,235,0.35)]`}>
            <div className="flex items-center gap-1.5 px-4 pt-3 pb-2 text-xs text-[#5f6368]"><MapPin size={13} className="text-[#EA4335]" /> Google Haritalar</div>
            <div className="relative h-24 bg-[#e8f0e5] overflow-hidden" aria-hidden>
              <div className="absolute inset-0 opacity-70" style={{ backgroundImage: 'linear-gradient(90deg,#fff 2px,transparent 2px),linear-gradient(0deg,#fff 2px,transparent 2px)', backgroundSize: '46px 34px' }} />
              <div className="absolute -left-6 top-10 w-[140%] h-3 bg-[#fde293] rotate-[-8deg]" />
              <div className="absolute left-[18%] top-0 h-full w-10 bg-[#aadaff]/70 skew-x-[-18deg]" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                <MapPin size={30} className="text-[#EA4335] fill-[#EA4335] drop-shadow onizleme-pin" />
              </span>
            </div>
            <div className="p-4">
              <p key={gAd} className="text-[#202124] text-base font-medium leading-snug onizleme-yaz">{gAd}</p>
              <p className="text-[#5f6368] text-sm">{ilkHarfBuyuk(gIs)} · {ilkHarfBuyuk(gYer)}</p>
              <p className="text-sm"><span className="text-[#188038] font-medium">Açık</span> <span className="text-[#5f6368]">· WhatsApp ile iletişim</span></p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {[
                  { i: Globe, t: 'Web sitesi' },
                  { i: Navigation, t: 'Yol tarifi' },
                  { i: Phone, t: 'Ara' },
                ].map(({ i: I, t }) => (
                  <span key={t} className="inline-flex items-center gap-1 rounded-full border border-[#dadce0] px-2.5 py-1 text-[12px] text-[#1a73e8]">
                    <I size={12} /> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3) Yapay zekâ asistanı (ChatGPT, Gemini vb.) */}
          <div className={`${sekme === 'ai' ? 'flex' : 'hidden'} lg:flex flex-col bg-gradient-to-br from-white to-[#EEF4FF] rounded-2xl overflow-hidden border border-[#d6e2fb] shadow-[0_16px_40px_-24px_rgba(37,99,235,0.35)]`}>
            <div className="flex items-center justify-between gap-2 px-4 pt-3 pb-2">
              <span className="flex items-center gap-1.5 text-xs text-[#5f6368]"><Sparkles size={13} className="text-[#7c3aed]" /> Yapay zekâ asistanı</span>
              <span className="text-[10.5px] text-[#5f6368] truncate">ChatGPT · Gemini</span>
            </div>
            <div className="px-4 pb-4 flex flex-col gap-2.5 flex-1">
              <p className="self-end max-w-[88%] rounded-2xl rounded-br-md bg-[#1a73e8] !text-white text-[13px] leading-snug px-3 py-2">
                {bulunmaEki(ilkHarfBuyuk(gYer))} iyi bir {gIs.toLocaleLowerCase('tr')} önerir misin?
              </p>
              <div className="self-start max-w-[95%] rounded-2xl rounded-bl-md bg-white border border-[#e3e8ef] text-[13px] leading-relaxed text-[#202124] px-3 py-2.5">
                <p key={`ai${gAd}${gIs}${gYer}`} className="onizleme-yaz">
                  {ilkHarfBuyuk(gYer)} bölgesinde bakabileceğin yerlerden biri <strong className="text-[#1a0dab]">{gAd}</strong>. Sitesinde hizmetleri, çalışma saatleri ve iletişim bilgileri açıkça yer alıyor; WhatsApp&apos;tan hızlıca ulaşabilirsin.
                </p>
                <span className="inline-flex items-center gap-1 mt-2 rounded-full bg-[#F1F5FB] border border-[#e3e8ef] px-2 py-0.5 text-[11px] text-[#5f6368]">
                  <Globe size={11} /> Kaynak: {alan}
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-[12px] text-zinc-500">Aramada, haritada ve yapay zekâ cevaplarında: üçünde de görünür olmanız için çalışırız.</p>
      </div>
    </div>
  )
}
