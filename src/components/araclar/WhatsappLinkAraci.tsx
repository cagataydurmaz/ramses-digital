'use client'
import { useState } from 'react'
import { trackEvent } from '@/lib/tracking'

// Türkiye numarasını wa.me biçimine çevirir: 0535 123 45 67 → 905351234567
function normalize(tel: string) {
  let d = tel.replace(/\D/g, '')
  if (d.startsWith('00')) d = d.slice(2)
  if (d.startsWith('0')) d = '90' + d.slice(1)
  else if (d.length === 10 && d.startsWith('5')) d = '90' + d
  return d
}

export default function WhatsappLinkAraci() {
  const [tel, setTel] = useState('')
  const [mesaj, setMesaj] = useState('Merhaba, bilgi almak istiyorum.')
  const [kopyalandi, setKopyalandi] = useState(false)
  const no = normalize(tel)
  const gecerli = no.length >= 11 && no.length <= 15
  const link = gecerli ? `https://wa.me/${no}${mesaj.trim() ? `?text=${encodeURIComponent(mesaj.trim())}` : ''}` : ''

  const kopyala = async () => {
    if (!link) return
    try { await navigator.clipboard.writeText(link); setKopyalandi(true); setTimeout(() => setKopyalandi(false), 2000) } catch { /* sessizce geç */ }
    trackEvent('arac_kullanildi', { arac: 'whatsapp-link-olusturucu' })
  }

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="wa-tel" className="block text-white text-sm font-medium mb-2">Telefon numaranız</label>
        <input id="wa-tel" inputMode="tel" value={tel} onChange={(e) => setTel(e.target.value)} placeholder="0535 123 45 67"
          className="w-full bg-[#080D18] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500" />
        <p className="text-zinc-500 text-xs mt-1.5">Başında 0 ile ya da +90 ile yazabilirsiniz; biz uygun biçime çeviririz.</p>
      </div>
      <div>
        <label htmlFor="wa-mesaj" className="block text-white text-sm font-medium mb-2">Hazır mesaj (isteğe bağlı)</label>
        <textarea id="wa-mesaj" rows={3} value={mesaj} onChange={(e) => setMesaj(e.target.value)}
          className="w-full bg-[#080D18] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <p className="text-white text-sm font-medium mb-2">Oluşan bağlantı</p>
        <div className="bg-[#080D18] border border-white/10 rounded-lg px-4 py-3 text-sm break-all min-h-[48px]">
          {link ? <span className="text-blue-300">{link}</span> : <span className="text-zinc-600">Geçerli bir telefon numarası yazın.</span>}
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={kopyala} disabled={!link}
          className="bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-lg px-5 py-2.5 text-sm transition-colors">
          {kopyalandi ? 'Kopyalandı ✓' : 'Bağlantıyı kopyala'}
        </button>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('arac_kullanildi', { arac: 'whatsapp-link-olusturucu' })}
            className="border border-white/15 hover:border-white/30 text-zinc-300 hover:text-white rounded-lg px-5 py-2.5 text-sm transition-colors">
            Bağlantıyı dene
          </a>
        )}
      </div>
    </div>
  )
}
