'use client'

import { useState } from 'react'
import { PhoneCall, CheckCircle2 } from 'lucide-react'
import { trackLead } from '@/lib/tracking'
import { waMesaj, whatsappAc } from '@/lib/whatsapp'

// WhatsApp yazmak istemeyenler için 2 alanlı geri arama formu.
export default function SiziArayalimFormu() {
  const [ad, setAd] = useState('')
  const [telefon, setTelefon] = useState('')
  const [tuzak, setTuzak] = useState('')
  const [durum, setDurum] = useState<'bos' | 'tamam'>('bos')

  function gonder(e: React.FormEvent) {
    e.preventDefault()
    if (tuzak) return
    trackLead('geri_arama')
    whatsappAc(waMesaj('Geri arama talebi', [`Ad: ${ad}`, `Telefon: ${telefon}`], 'Uygun olduğunuzda beni arayabilir misiniz?'), 'Sizi arayalım formu')
    setDurum('tamam')
  }

  return (
    <section aria-labelledby="sizi-arayalim" className="py-8 md:py-10 px-6">
      <div className="max-w-3xl mx-auto bg-[#0D1225] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
        {durum === 'tamam' ? (
          <div className="text-center py-4">
            <CheckCircle2 size={32} className="text-emerald-400 mx-auto mb-3" />
            <p className="text-white font-semibold text-lg">WhatsApp açıldı, mesajı göndermeniz yeterli.</p>
            <p className="text-zinc-400 text-sm mt-1">Ekibimiz sizi arayacak · Ortalama 2 saat içinde dönüş yapıyoruz.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center"><PhoneCall size={18} className="text-blue-400" /></span>
              <h2 id="sizi-arayalim" className="text-2xl font-bold text-white">Sizi Arayalım</h2>
            </div>
            <p className="text-zinc-400 text-sm mb-6">Adınızı ve telefonunuzu yazın, WhatsApp üzerinden bize iletin; sizi arayıp ihtiyacınızı dinleyelim. Ücretsiz, taahhüt yok.</p>
            <form onSubmit={gonder} className="grid sm:grid-cols-[1fr_1fr_auto] gap-3">
              <input aria-label="Adınız" required minLength={2} value={ad} onChange={(e) => setAd(e.target.value)} placeholder="Adınız" className="bg-[#080D18] border border-white/[0.1] focus:border-blue-500/60 outline-none rounded-xl px-4 py-3 text-white placeholder:text-zinc-500" />
              <input aria-label="Telefon numaranız" required type="tel" inputMode="tel" value={telefon} onChange={(e) => setTelefon(e.target.value)} placeholder="05xx xxx xx xx" className="bg-[#080D18] border border-white/[0.1] focus:border-blue-500/60 outline-none rounded-xl px-4 py-3 text-white placeholder:text-zinc-500" />
              <input tabIndex={-1} autoComplete="off" aria-hidden value={tuzak} onChange={(e) => setTuzak(e.target.value)} className="hidden" />
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-medium rounded-xl px-6 py-3 transition-colors">
                Beni Arayın
              </button>
            </form>
            <p className="text-zinc-500 text-xs mt-3">
              Ortalama 2 saat içinde dönüş yapıyoruz. Bilgileriniz yalnızca sizi aramak için kullanılır.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
