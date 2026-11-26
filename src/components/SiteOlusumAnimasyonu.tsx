'use client'
import { useEffect, useRef, useState } from 'react'
import { LayoutTemplate, Palette, Type, MessageCircle, Search, Phone, Check, Lock } from 'lucide-react'

// "Siteniz parça parça böyle oluşur": masaüstünde sol taraftaki adımlar kaydırıldıkça sağdaki
// tarayıcı çerçevesinde site katman katman tamamlanır (yapışkan). Mobilde çerçeve üstte durur,
// bölüm ekrandayken adımlar kendiliğinden ilerler; adıma dokununca o aşamaya geçer.
// Hiçbir uydurma rakam (hız puanı, sıra vb.) gösterilmez.

const ADIMLAR = [
  { icon: LayoutTemplate, baslik: 'İskelet', ne: 'Sayfaların yerleşimi', aciklama: 'Hangi bilginin nerede duracağı önce gri kutularla planlanır. Ziyaretçi aradığını üç saniyede bulmalı.' },
  { icon: Palette, baslik: 'Tasarım', ne: 'Renk, yazı, düğmeler', aciklama: 'Markanıza ait renkler, yazı tipi ve düğmeler iskeletin üstüne giydirilir. Önce telefon ekranı tasarlanır.' },
  { icon: Type, baslik: 'İçerik', ne: 'Başlık, metin, fotoğraf', aciklama: 'İşinizi tek cümlede anlatan başlık, gerçek fotoğraflar ve hizmet kartları yerleşir. Metinler aranan kelimelerle yazılır.' },
  { icon: MessageCircle, baslik: 'İletişim', ne: 'WhatsApp, arama, form', aciklama: 'Ziyaretçiyi müşteriye çeviren parçalar: tek dokunuşla arama, hazır mesajlı WhatsApp ve kısa bir teklif formu.' },
  { icon: Search, baslik: 'Google’a hazır', ne: 'Arama ve yapay zekâ', aciklama: 'Sayfa başlıkları, açıklamalar ve yapılandırılmış veri hazırlanır; site Google’a ve yapay zekâ asistanlarına doğru tanıtılır.' },
]

function Cerceve({ a }: { a: number }) {
  const tasarim = a >= 1
  const icerik = a >= 2
  const iletisim = a >= 3
  const google = a >= 4
  const gecis = 'transition-all duration-500 ease-out'
  return (
    <div className="relative">
      <div className={`rounded-2xl overflow-hidden border bg-white ${gecis} ${tasarim ? 'border-[#bcd0f3] shadow-[0_24px_60px_-28px_rgba(37,99,235,0.55)]' : 'border-[#dfe5ee] shadow-[0_16px_40px_-28px_rgba(15,27,45,0.35)]'}`}>
        {/* Tarayıcı çubuğu */}
        <div className="flex items-center gap-2 px-3 py-2.5 bg-[#F3F5F8] border-b border-[#e3e8ef]">
          <span className="flex gap-1.5" aria-hidden>
            <i className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" /><i className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" /><i className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="flex-1 flex items-center gap-1.5 rounded-md bg-white border border-[#e3e8ef] px-2.5 py-1 text-[11px] text-[#5f6368]">
            <Lock size={10} className="text-[#188038]" /> isletmeniz.com
          </span>
        </div>

        {/* Site */}
        <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
          {/* Üst menü */}
          <div className="flex items-center justify-between px-4 sm:px-5 py-3">
            <span className={`h-3.5 rounded ${gecis} ${tasarim ? 'w-20 bg-[#13284F]' : 'w-16 bg-[#e5e9f0]'}`} aria-hidden />
            <div className="flex items-center gap-2.5">
              {[0, 1, 2].map((i) => <span key={i} className={`hidden sm:block h-2 w-10 rounded ${gecis} ${tasarim ? 'bg-[#cbd5e1]' : 'bg-[#eef1f5]'}`} />)}
              <span className={`h-6 rounded-full ${gecis} ${tasarim ? 'w-16 bg-[#2563EB]' : 'w-14 bg-[#e5e9f0]'}`} />
            </div>
          </div>

          {/* Hero */}
          <div className={`mx-4 sm:mx-5 rounded-xl p-4 sm:p-5 grid grid-cols-[1.15fr_1fr] gap-4 ${gecis} ${tasarim ? 'bg-gradient-to-br from-[#13284F] to-[#1d3f7a]' : 'bg-[#f4f6f9]'}`}>
            <div className="flex flex-col justify-center gap-2">
              {icerik ? (
                <>
                  <p className="text-[13px] sm:text-[17px] font-bold leading-tight !text-white">İşinizi anlatan<br />net bir başlık</p>
                  <p className="text-[10px] sm:text-[11px] leading-snug text-[#c7d4ec]">Ne yaptığınızı ve neden siz olduğunuzu tek bakışta anlatır.</p>
                </>
              ) : (
                <>
                  <span className={`h-3 sm:h-4 rounded w-[90%] ${gecis} ${tasarim ? 'bg-white/80' : 'bg-[#e1e6ee]'}`} />
                  <span className={`h-3 sm:h-4 rounded w-[65%] ${gecis} ${tasarim ? 'bg-white/80' : 'bg-[#e1e6ee]'}`} />
                  <span className={`h-2 rounded w-[80%] ${gecis} ${tasarim ? 'bg-white/35' : 'bg-[#eaeef3]'}`} />
                </>
              )}
              <span className={`mt-1 h-6 sm:h-7 rounded-full flex items-center justify-center text-[10px] font-semibold ${gecis} ${tasarim ? 'w-24 bg-[#3B82F6] !text-white' : 'w-20 bg-[#e1e6ee] text-transparent'}`}>
                {icerik ? 'Hemen ulaşın' : ''}
              </span>
            </div>
            <div className={`rounded-lg overflow-hidden ${gecis} ${icerik ? 'bg-[url(/gorseller/web-tasarim.webp)] bg-cover bg-center' : tasarim ? 'bg-white/10 border border-white/20' : 'bg-[#e9edf3] border border-dashed border-[#cfd6e1]'}`} aria-hidden />
          </div>

          {/* Kartlar */}
          <div className="grid grid-cols-3 gap-2.5 px-4 sm:px-5 pt-3">
            {['Hizmetlerimiz', 'Hakkımızda', 'İletişim'].map((t) => (
              <div key={t} className={`rounded-lg p-2.5 ${gecis} ${tasarim ? 'bg-white border border-[#e3e8ef] shadow-sm' : 'bg-[#f4f6f9]'}`}>
                {icerik ? (
                  <>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-[#0F1B2D]">{t}</p>
                    <span className="block mt-1 h-1.5 rounded bg-[#e5e9f0] w-[85%]" />
                  </>
                ) : (
                  <>
                    <span className={`block h-2 rounded w-[60%] ${tasarim ? 'bg-[#cbd5e1]' : 'bg-[#e5e9f0]'}`} />
                    <span className="block mt-1.5 h-1.5 rounded bg-[#eceff4] w-[85%]" />
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Alt bilgi şeridi */}
          <div className={`absolute inset-x-0 bottom-0 h-7 flex items-center gap-3 px-4 sm:px-5 transition-all duration-500 ${tasarim ? 'bg-[#0F2143]' : 'bg-[#eef1f5]'}`} aria-hidden>
            {[0, 1, 2].map((i) => <span key={i} className={`h-1.5 w-12 rounded ${tasarim ? 'bg-white/25' : 'bg-[#dde3eb]'}`} />)}
          </div>

          {/* İletişim: WhatsApp ve form */}
          <div className={`absolute right-3 bottom-9 flex items-end gap-2 ${gecis} ${iletisim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`} aria-hidden={!iletisim}>
            <div className="hidden sm:block w-40 rounded-lg bg-white border border-[#e3e8ef] shadow-lg p-2.5">
              <p className="text-[10px] font-semibold text-[#0F1B2D] mb-1.5">Teklif isteyin</p>
              <span className="block h-4 rounded bg-[#f4f6f9] border border-[#e3e8ef] mb-1.5" />
              <span className="block h-5 rounded bg-[#2563EB]" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center shadow-lg"><Phone size={15} className="!text-white" /></span>
              <span className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg"><MessageCircle size={16} className="!text-white" /></span>
            </div>
          </div>
        </div>
      </div>

      {/* Google'a hazır: arama sonucu kartı */}
      <div className={`absolute -left-2 sm:-left-6 -bottom-6 sm:-bottom-8 w-[78%] sm:w-[62%] rounded-xl bg-white border border-[#dfe5ee] shadow-[0_18px_40px_-18px_rgba(15,27,45,0.45)] p-3 ${gecis} ${google ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`} aria-hidden={!google}>
        <p className="flex items-center gap-1.5 text-[10px] text-[#5f6368] mb-1"><Search size={11} className="text-[#4285F4]" /> Google</p>
        <p className="text-[11px] text-[#4d5156] truncate">isletmeniz.com</p>
        <p className="text-[13px] sm:text-[14px] text-[#1a0dab] leading-snug truncate">İşletmenizin Adı | Şehrinizde Hizmetiniz</p>
        <p className="text-[10.5px] text-[#4d5156] leading-snug line-clamp-2">Hizmetlerinizi, çalışma saatlerinizi ve iletişim bilgilerinizi net anlatan açıklama.</p>
      </div>
    </div>
  )
}

export default function SiteOlusumAnimasyonu() {
  const [aktif, setAktif] = useState(0)
  const [mobilOtomatik, setMobilOtomatik] = useState(true)
  const adimRef = useRef<(HTMLDivElement | null)[]>([])
  const kutuRef = useRef<HTMLDivElement>(null)

  // Masaüstü: hangi adım ekranın ortasındaysa o aktif.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    if (!mq.matches) return
    const io = new IntersectionObserver(
      (girdiler) => {
        for (const g of girdiler) {
          if (g.isIntersecting) {
            const i = Number((g.target as HTMLElement).dataset.adim)
            setAktif(i)
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    adimRef.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  // Mobil: bölüm görünürken kendiliğinden ilerler (dokununca durur).
  useEffect(() => {
    const el = kutuRef.current
    if (!el || window.matchMedia('(min-width: 1024px)').matches || !mobilOtomatik) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setAktif(ADIMLAR.length - 1); return }
    let zaman: ReturnType<typeof setInterval> | undefined
    const io = new IntersectionObserver(([g]) => {
      if (g.isIntersecting && !zaman) zaman = setInterval(() => setAktif((a) => (a + 1) % ADIMLAR.length), 2200)
      if (!g.isIntersecting && zaman) { clearInterval(zaman); zaman = undefined }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); if (zaman) clearInterval(zaman) }
  }, [mobilOtomatik])

  return (
    <div ref={kutuRef} className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 lg:gap-14">
      {/* Çerçeve: mobilde üstte, masaüstünde sağda yapışkan */}
      <div className="lg:order-2">
        <div className="lg:sticky lg:top-28 pb-2 lg:pb-8">
          <Cerceve a={aktif} />
          <p className="mt-9 sm:mt-14 text-center text-xs text-[#667085]">
            <span className="font-semibold text-[#1D4ED8]">{aktif + 1}</span> / {ADIMLAR.length} · {ADIMLAR[aktif].baslik}
          </p>
        </div>
      </div>

      {/* Adımlar */}
      <div className="lg:order-1">
        {/* Mobil: kompakt sekmeler */}
        <div className="lg:hidden flex gap-1.5 overflow-x-auto pb-2 -mx-1 px-1" role="tablist">
          {ADIMLAR.map((s, i) => (
            <button key={s.baslik} role="tab" aria-selected={aktif === i}
              onClick={() => { setMobilOtomatik(false); setAktif(i) }}
              className={`shrink-0 rounded-full px-3 py-1.5 text-[13px] border transition-colors ${aktif === i ? 'bg-[#2563EB] border-[#2563EB] !text-white' : 'bg-white border-[#dfe5ee] text-[#475467]'}`}>
              {i + 1}. {s.baslik}
            </button>
          ))}
        </div>
        <div className="lg:hidden mt-3 rounded-xl bg-white border border-[#e3e8ef] p-4">
          <p className="text-sm font-semibold text-[#0F1B2D]">{ADIMLAR[aktif].ne}</p>
          <p className="text-sm text-[#475467] leading-relaxed mt-1">{ADIMLAR[aktif].aciklama}</p>
        </div>

        {/* Masaüstü: kaydırmalı adımlar */}
        {ADIMLAR.map((s, i) => {
          const Icon = s.icon
          const on = aktif === i
          const gecti = aktif > i
          return (
            <div key={s.baslik} data-adim={i} ref={(el) => { adimRef.current[i] = el }}
              className="hidden lg:flex min-h-[42vh] items-center">
              <div className={`w-full rounded-2xl border p-6 transition-all duration-500 ${on ? 'bg-white border-[#cfdcf3] shadow-[0_16px_40px_-24px_rgba(37,99,235,0.5)]' : 'bg-white/60 border-[#e3e8ef] opacity-60'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-500 ${on ? 'bg-[#2563EB]' : gecti ? 'bg-[#dbeafe]' : 'bg-[#f1f4f8]'}`}>
                    {gecti ? <Check size={16} className="text-[#2563EB]" /> : <Icon size={16} className={on ? '!text-white' : 'text-[#667085]'} />}
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#1D4ED8]">Adım {i + 1} · {s.ne}</p>
                    <h3 className="text-lg font-semibold text-[#0F1B2D] leading-tight">{s.baslik}</h3>
                  </div>
                </div>
                <p className="text-sm text-[#475467] leading-relaxed">{s.aciklama}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
