'use client'

import { useEffect, useRef, useState, type ComponentType } from 'react'
import dynamic from 'next/dynamic'

// Blog içi animasyon, grafik ve videolar ekrana yaklaşınca yüklenir; ilk açılışta
// sayfanın JavaScript yükü ve kapak görselinin gecikmesi azalır. Bunlar görsel
// öğelerdir (aria-hidden); metin ve bağlantılar sunucuda üretilmeye devam eder.
const B = {
  'ai-modu': dynamic(() => import('./AiModuAnimasyonu'), { ssr: false }),
  'chatgpt-reklam': dynamic(() => import('./ChatgptReklamAnimasyonu'), { ssr: false }),
  'reklam-etiketi': dynamic(() => import('./ReklamEtiketiAnimasyonu'), { ssr: false }),
  'takvim-2027': dynamic(() => import('./YilTakvimi2027'), { ssr: false }),
  'google-arama': dynamic(() => import('@/components/GoogleAramaAnimasyonu'), { ssr: false }),
  harita: dynamic(() => import('@/components/telefon/HaritaTelefon'), { ssr: false }),
  'reklam-telefon': dynamic(() => import('@/components/telefon/ReklamTelefon'), { ssr: false }),
  chatbot: dynamic(() => import('@/components/telefon/ChatbotTelefon'), { ssr: false }),
  eposta: dynamic(() => import('@/components/telefon/EpostaTelefon'), { ssr: false }),
  'meta-reklam': dynamic(() => import('@/components/telefon/MetaReklamTelefon'), { ssr: false }),
  otomasyon: dynamic(() => import('@/components/telefon/OtomasyonTelefon'), { ssr: false }),
  rapor: dynamic(() => import('@/components/telefon/RaporTelefon'), { ssr: false }),
  'site-kaydirma': dynamic(() => import('@/components/telefon/SiteKaydirmaTelefon'), { ssr: false }),
  'sosyal-medya': dynamic(() => import('@/components/telefon/SosyalMedyaTelefon'), { ssr: false }),
  whatsapp: dynamic(() => import('@/components/telefon/WhatsAppTelefon'), { ssr: false }),
  'ads-butce': dynamic(() => import('@/components/grafik/AdsButceGrafigi'), { ssr: false }),
  'seo-buyume': dynamic(() => import('@/components/grafik/SeoBuyumeGrafigi'), { ssr: false }),
  video: dynamic(() => import('@/components/BilgiVideosu'), { ssr: false }),
} as const

export type TembelAd = keyof typeof B

const YUKSEKLIK: Partial<Record<TembelAd, string>> = {
  'takvim-2027': 'min-h-[720px] sm:min-h-[460px]',
  'ads-butce': 'min-h-[620px]',
  'seo-buyume': 'min-h-[620px]',
}

export default function TembelGomulu({ ad, props = {} }: { ad: TembelAd; props?: Record<string, unknown> }) {
  const ref = useRef<HTMLDivElement>(null)
  const [goster, setGoster] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGoster(true); io.disconnect() } }, { rootMargin: '600px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Bilesen = B[ad] as ComponentType<Record<string, unknown>>
  return (
    <div ref={ref} className={goster ? '' : YUKSEKLIK[ad] ?? 'min-h-[580px]'}>
      {goster && <Bilesen {...props} />}
    </div>
  )
}
