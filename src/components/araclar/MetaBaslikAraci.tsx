'use client'
import { useRef, useState } from 'react'
import { trackEvent } from '@/lib/tracking'

function Sayac({ n, limit, ad }: { n: number; limit: number; ad: string }) {
  const durum = n === 0 ? 'text-zinc-500' : n <= limit ? 'text-emerald-400' : 'text-amber-400'
  const not = n === 0 ? 'Henüz yazılmadı' : n <= limit ? 'Uygun uzunluk' : 'Google sonucu kısaltabilir'
  return <p className={`text-xs mt-1.5 ${durum}`}>{n} karakter · {ad} önerilen en fazla {limit} · {not}</p>
}

export default function MetaBaslikAraci() {
  const [baslik, setBaslik] = useState('İzmit SEO Ajansı – Ücretsiz Site Analizi')
  const [aciklama, setAciklama] = useState('İzmit’te Google’da müşteri bulmak isteyen işletmeler için yerel SEO. Ücretsiz analiz, aylık rapor, taahhüt yok.')
  const [alan, setAlan] = useState('www.ornek.com › sayfa')
  const izlendi = useRef(false)
  const izle = () => { if (!izlendi.current) { izlendi.current = true; trackEvent('arac_kullanildi', { arac: 'meta-baslik-kontrol' }) } }
  const girdi = 'w-full bg-[#080D18] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500'
  const kes = (s: string, n: number) => (s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s)

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="m-baslik" className="block text-white text-sm font-medium mb-2">Sayfa başlığı (title)</label>
        <input id="m-baslik" value={baslik} onChange={(e) => { setBaslik(e.target.value); izle() }} className={girdi} />
        <Sayac n={baslik.length} limit={60} ad="başlık" />
      </div>
      <div>
        <label htmlFor="m-acik" className="block text-white text-sm font-medium mb-2">Meta açıklama</label>
        <textarea id="m-acik" rows={3} value={aciklama} onChange={(e) => { setAciklama(e.target.value); izle() }} className={girdi} />
        <Sayac n={aciklama.length} limit={160} ad="açıklama" />
      </div>
      <div>
        <label htmlFor="m-alan" className="block text-white text-sm font-medium mb-2">Adres (önizleme için)</label>
        <input id="m-alan" value={alan} onChange={(e) => setAlan(e.target.value)} className={girdi} />
      </div>
      <div>
        <p className="text-white text-sm font-medium mb-2">Google sonuç önizlemesi (yaklaşık)</p>
        <div className="bg-white rounded-xl p-5">
          <p className="text-[#4d5156] text-xs mb-1 truncate">{alan || 'www.ornek.com'}</p>
          <p className="text-[#1a0dab] text-xl leading-snug mb-1 break-words">{kes(baslik, 60) || 'Sayfa başlığınız burada görünür'}</p>
          <p className="text-[#4d5156] text-sm leading-relaxed break-words">{kes(aciklama, 160) || 'Meta açıklamanız burada görünür.'}</p>
        </div>
        <p className="text-zinc-500 text-xs mt-2">Google bazen başlığı ve açıklamayı kendi seçtiği biçimde gösterir; önizleme yaklaşık bir görünümdür.</p>
      </div>
    </div>
  )
}
