'use client'
import { useState } from 'react'
import { trackEvent } from '@/lib/tracking'

export default function GoogleYorumAraci() {
  const [placeId, setPlaceId] = useState('')
  const [kopyalandi, setKopyalandi] = useState(false)
  const id = placeId.trim()
  const gecerli = /^[A-Za-z0-9_-]{15,}$/.test(id)
  const link = gecerli ? `https://search.google.com/local/writereview?placeid=${encodeURIComponent(id)}` : ''

  const kopyala = async () => {
    if (!link) return
    try { await navigator.clipboard.writeText(link); setKopyalandi(true); setTimeout(() => setKopyalandi(false), 2000) } catch { /* sessizce geç */ }
    trackEvent('arac_kullanildi', { arac: 'google-yorum-linki' })
  }

  return (
    <div className="space-y-6">
      <div className="bg-blue-500/[0.06] border border-blue-500/25 rounded-xl p-5">
        <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">Place ID nasıl bulunur?</p>
        <ol className="list-decimal list-inside text-zinc-300 text-sm leading-relaxed space-y-1">
          <li>Google&apos;ın resmi <a className="text-blue-300 underline underline-offset-2" href="https://developers.google.com/maps/documentation/places/web-service/place-id" target="_blank" rel="noopener noreferrer">Place ID Finder</a> sayfasını açın.</li>
          <li>Haritadaki arama kutusuna işletmenizin adını yazın ve çıkan kayıtlardan kendi işletmenizi seçin.</li>
          <li>Haritada açılan kutuda &quot;Place ID&quot; satırını bulun ve değeri kopyalayın (genellikle ChIJ ile başlar).</li>
          <li>Aşağıdaki kutuya yapıştırın.</li>
        </ol>
      </div>
      <div>
        <label htmlFor="place-id" className="block text-white text-sm font-medium mb-2">Place ID</label>
        <input id="place-id" value={placeId} onChange={(e) => setPlaceId(e.target.value)} placeholder="ChIJ..."
          className="w-full bg-[#080D18] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <p className="text-white text-sm font-medium mb-2">Yorum bağlantınız</p>
        <div className="bg-[#080D18] border border-white/10 rounded-lg px-4 py-3 text-sm break-all min-h-[48px]">
          {link ? <span className="text-blue-300">{link}</span> : <span className="text-zinc-600">Place ID girildiğinde bağlantı burada görünür.</span>}
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={kopyala} disabled={!link}
          className="bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-lg px-5 py-2.5 text-sm transition-colors">
          {kopyalandi ? 'Kopyalandı ✓' : 'Bağlantıyı kopyala'}
        </button>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('arac_kullanildi', { arac: 'google-yorum-linki' })}
            className="border border-white/15 hover:border-white/30 text-zinc-300 hover:text-white rounded-lg px-5 py-2.5 text-sm transition-colors">
            Bağlantıyı dene
          </a>
        )}
      </div>
    </div>
  )
}
