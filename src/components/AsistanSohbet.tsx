'use client'

import { useEffect, useRef, useState } from 'react'
import { Sparkles, X, Send, Loader2, MessageCircle } from 'lucide-react'
import { trackEvent, trackLead } from '@/lib/tracking'
import { waLink, waMesaj } from '@/lib/whatsapp'

// Yapay zekâ sohbet asistanı: soruları cevaplar, bilgileri toplar, onay alınca WhatsApp'a özet açar.
// Sohbet sunucuda saklanmaz; sayfa geçişlerinde kaybolmasın diye yalnızca bu sekmenin sessionStorage'ında tutulur.
type Mesaj = { rol: 'kullanici' | 'asistan'; metin: string }
type Talep = { ad?: string; telefon?: string; isletme?: string; sehir?: string; ihtiyac?: string; not?: string }

const KARSILAMA: Mesaj = {
  rol: 'asistan',
  metin: 'Merhaba! Size nasıl yardımcı olabilirim? İşletmeniz ne iş yapıyor?',
}
const ONERILER = ['Web sitem yok, yaptırmak istiyorum', 'Google’da görünmüyorum', 'Google Ads hakkında bilgi', 'Fiyat almak istiyorum']
const AZAMI = 20
const ANAHTAR = 'ramses-asistan'

function ayikla(metin: string): { gorunen: string; talep: Talep | null } {
  const i = metin.indexOf('<<TALEP>>')
  if (i === -1) return { gorunen: metin, talep: null }
  const gorunen = metin.slice(0, i).trim()
  const m = metin.slice(i).match(/<<TALEP>>(\{[\s\S]*?\})<<SON>>/)
  if (!m) return { gorunen, talep: null }
  try {
    return { gorunen, talep: JSON.parse(m[1]) }
  } catch {
    return { gorunen, talep: null }
  }
}

export default function AsistanSohbet() {
  const [acik, setAcik] = useState(false)
  const [balon, setBalon] = useState(false)
  const [mesajlar, setMesajlar] = useState<Mesaj[]>([KARSILAMA])
  const [girdi, setGirdi] = useState('')
  const [bekliyor, setBekliyor] = useState(false)
  const [talep, setTalep] = useState<Talep | null>(null)
  const liste = useRef<HTMLDivElement>(null)

  // sekme içinde sohbeti koru
  useEffect(() => {
    try {
      const k = sessionStorage.getItem(ANAHTAR)
      if (k) {
        const v = JSON.parse(k)
        if (Array.isArray(v.mesajlar)) setMesajlar(v.mesajlar)
        if (v.talep) setTalep(v.talep)
      }
    } catch {}
  }, [])
  useEffect(() => {
    try {
      sessionStorage.setItem(ANAHTAR, JSON.stringify({ mesajlar, talep }))
    } catch {}
  }, [mesajlar, talep])

  // oturum başına bir kez davet balonu
  useEffect(() => {
    try {
      if (sessionStorage.getItem('asistan-balon')) return
      sessionStorage.setItem('asistan-balon', '1')
    } catch {}
    const a = setTimeout(() => setBalon(true), 2500)
    const k = setTimeout(() => setBalon(false), 9000)
    return () => {
      clearTimeout(a)
      clearTimeout(k)
    }
  }, [])

  // Sayfadaki "Bu sitedeki asistanı deneyin" düğmesi
  useEffect(() => {
    const ac = () => {
      setAcik(true)
      setBalon(false)
      trackEvent('asistan_demo_acildi')
    }
    window.addEventListener('asistan-ac', ac)
    return () => window.removeEventListener('asistan-ac', ac)
  }, [])

  useEffect(() => {
    liste.current?.scrollTo({ top: liste.current.scrollHeight, behavior: 'smooth' })
  }, [mesajlar, bekliyor, talep, acik])

  const kullaniciSayisi = mesajlar.filter((m) => m.rol === 'kullanici').length

  async function gonder(metin: string) {
    const t = metin.trim()
    if (!t || bekliyor) return
    if (kullaniciSayisi >= AZAMI) return
    const yeni: Mesaj[] = [...mesajlar, { rol: 'kullanici', metin: t }]
    setMesajlar([...yeni, { rol: 'asistan', metin: '' }])
    setGirdi('')
    setBekliyor(true)
    if (kullaniciSayisi === 0) trackEvent('asistan_baslatildi')
    try {
      const r = await fetch('/api/asistan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mesajlar: yeni, sayfa: window.location.pathname }),
      })
      if (!r.body) throw new Error()
      if (!r.ok) {
        const hata = await r.text()
        setMesajlar([...yeni, { rol: 'asistan', metin: hata || 'Şu an cevap veremiyorum. WhatsApp üzerinden yazabilirsiniz: 0535 560 19 36' }])
        return
      }
      const okuyucu = r.body.getReader()
      const coz = new TextDecoder()
      let tam = ''
      while (true) {
        const { done, value } = await okuyucu.read()
        if (done) break
        tam += coz.decode(value, { stream: true })
        const { gorunen } = ayikla(tam)
        setMesajlar([...yeni, { rol: 'asistan', metin: gorunen }])
      }
      const { gorunen, talep: bulunan } = ayikla(tam)
      setMesajlar([...yeni, { rol: 'asistan', metin: gorunen || 'Teşekkürler.' }])
      if (bulunan) setTalep(bulunan)
    } catch {
      setMesajlar([...yeni, { rol: 'asistan', metin: 'Şu an cevap veremiyorum. WhatsApp üzerinden yazabilirsiniz: 0535 560 19 36' }])
    } finally {
      setBekliyor(false)
    }
  }

  function whatsappaGonder() {
    if (!talep) return
    trackLead('whatsapp_ai')
    window.open(
      waLink(
        waMesaj('Yapay zekâ asistanı', [
          talep.ad && `Ad: ${talep.ad}`,
          talep.telefon && `Telefon: ${talep.telefon}`,
          talep.isletme && `İşletme: ${talep.isletme}`,
          talep.sehir && `Şehir: ${talep.sehir}`,
          talep.ihtiyac && `İhtiyaç: ${talep.ihtiyac}`,
          talep.not && `Not: ${talep.not}`,
        ]),
      ),
      '_blank',
    )
  }

  function ac() {
    setAcik(true)
    setBalon(false)
    trackEvent('asistan_acildi')
  }

  return (
    <>
      {/* Davet balonu (masaüstü) */}
      {balon && !acik && (
        <button
          onClick={ac}
          className="hidden md:block fixed bottom-[108px] right-[92px] z-40 bg-white text-[#0A0F1E] text-sm font-semibold rounded-2xl px-4 py-2.5 shadow-2xl whitespace-nowrap animate-[asistanBelir_.3s_ease-out]"
        >
          Sorunuz mu var? Hemen yazın
          <span aria-hidden className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white rotate-45" />
        </button>
      )}

      {/* Açma düğmesi */}
      {!acik && (
        <button
          onClick={ac}
          aria-label="Yapay zekâ asistanıyla sohbet et"
          className="fixed z-40 right-4 bottom-[calc(76px+env(safe-area-inset-bottom))] md:right-6 md:bottom-[92px] w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        >
          <Sparkles size={24} />
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-2 ring-[#0A0F1E]" />
        </button>
      )}

      {/* Sohbet penceresi */}
      {acik && (
        <div
          role="dialog"
          aria-label="Yapay zekâ asistanı"
          className="fixed z-50 inset-x-2 top-16 bottom-2 md:inset-auto md:right-6 md:bottom-6 md:w-[380px] md:h-[580px] flex flex-col bg-[#0B1022] border border-white/10 rounded-2xl shadow-[0_30px_80px_-10px_rgba(0,0,0,0.9)] overflow-hidden animate-[asistanBelir_.25s_ease-out]"
        >
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-[#0D1225]">
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
              <Sparkles size={17} className="text-white" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold leading-tight">Ramses Dijital Asistan</p>
              <p className="text-emerald-400 text-[11px]">Yapay zekâ asistanı · çevrimiçi</p>
            </div>
            <a href={waLink(waMesaj('Bilgi talebi', [], 'Web sitenizden yazıyorum.'))} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp'tan yazın" className="p-2 rounded-lg text-zinc-400 hover:text-emerald-400">
              <MessageCircle size={18} />
            </a>
            <button onClick={() => setAcik(false)} aria-label="Kapat" className="p-2 rounded-lg text-zinc-400 hover:text-white">
              <X size={18} />
            </button>
          </div>

          <div ref={liste} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {mesajlar.map((m, i) =>
              m.metin || bekliyor ? (
                <div key={i} className={`flex ${m.rol === 'kullanici' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                      m.rol === 'kullanici' ? 'bg-blue-500 text-white rounded-br-md' : 'bg-white/[0.06] text-zinc-100 rounded-bl-md'
                    }`}
                  >
                    {m.metin || (
                      <span className="flex gap-1 py-1">
                        {[0, 1, 2].map((d) => (
                          <span key={d} className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: `${d * 0.15}s` }} />
                        ))}
                      </span>
                    )}
                  </div>
                </div>
              ) : null,
            )}

            {kullaniciSayisi === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {ONERILER.map((o) => (
                  <button key={o} onClick={() => gonder(o)} className="text-xs text-blue-300 border border-blue-500/30 hover:bg-blue-500/10 rounded-full px-3 py-1.5">
                    {o}
                  </button>
                ))}
              </div>
            )}

            {talep && (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.07] p-4">
                <p className="text-white text-sm font-semibold mb-2">Ekibe iletilecek bilgiler</p>
                <ul className="text-zinc-300 text-xs space-y-1 mb-3">
                  {talep.ad && <li>Ad: {talep.ad}</li>}
                  {talep.telefon && <li>Telefon: {talep.telefon}</li>}
                  {talep.isletme && <li>İşletme: {talep.isletme}</li>}
                  {talep.sehir && <li>Şehir: {talep.sehir}</li>}
                  {talep.ihtiyac && <li>İhtiyaç: {talep.ihtiyac}</li>}
                </ul>
                <button onClick={whatsappaGonder} className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold rounded-xl py-2.5">
                  WhatsApp ile Gönder
                </button>
                <p className="text-zinc-500 text-[11px] mt-2 text-center">WhatsApp açılır, mesajı göndermeniz yeterli.</p>
              </div>
            )}

            {kullaniciSayisi >= AZAMI && (
              <p className="text-center text-zinc-400 text-xs">
                Sohbet sınırına ulaşıldı. Devam etmek için{' '}
                <a className="text-emerald-400 underline" href={waLink(waMesaj('Bilgi talebi'))} target="_blank" rel="noopener noreferrer">WhatsApp’tan yazın</a>.
              </p>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              gonder(girdi)
            }}
            className="border-t border-white/10 p-3"
          >
            <div className="flex items-end gap-2">
              <textarea
                value={girdi}
                onChange={(e) => setGirdi(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    gonder(girdi)
                  }
                }}
                rows={1}
                maxLength={800}
                placeholder="Mesajınızı yazın…"
                aria-label="Mesajınız"
                className="flex-1 resize-none max-h-28 bg-white/[0.05] border border-white/10 focus:border-blue-500/50 outline-none rounded-xl px-3 py-2.5 text-white text-[16px] md:text-sm placeholder:text-zinc-500"
              />
              <button type="submit" disabled={bekliyor || !girdi.trim() || kullaniciSayisi >= AZAMI} aria-label="Gönder" className="h-11 w-11 shrink-0 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-40 text-white flex items-center justify-center">
                {bekliyor ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </div>
            <p className="text-zinc-600 text-[10.5px] mt-2 leading-snug">
              Sohbet kaydedilmez. Bilgileriniz yalnızca siz onaylayıp WhatsApp’ta gönderirseniz bize ulaşır. Asistan yapay zekâdır, hata yapabilir.
            </p>
          </form>
        </div>
      )}
      <style>{`@keyframes asistanBelir{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}`}</style>
    </>
  )
}
