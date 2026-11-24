'use client'

import { useEffect } from 'react'
import { trackEvent, trackLead } from '@/lib/tracking'
import { WHATSAPP_NO, talepBildir, waSelam, waLink } from '@/lib/whatsapp'

// Sitedeki tüm WhatsApp, telefon ve e-posta bağlantılarını tek yerden ölçer.
export default function LeadTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a')
      let href = a?.getAttribute('href')
      if (!a || !href) return
      // Sunucuda hazırlanan mesajlarda genel selam yerine ziyaretçinin bulunduğu sayfayı anan doğal selam kullanılır.
      if (href.startsWith(`https://wa.me/${WHATSAPP_NO}`)) {
        const eski = new URL(href).searchParams.get('text') || ''
        if (eski.startsWith('Merhaba Ramses Dijital,')) {
          const yeni = waSelam()
          if (yeni !== 'Merhaba Ramses Dijital,') {
            href = waLink(yeni + eski.slice('Merhaba Ramses Dijital,'.length))
            a.setAttribute('href', href)
          }
        }
      }
      // Yalnızca bizim numaramız talep sayılır (araçlarda ziyaretçinin kendi oluşturduğu linkler hariç).
      if (href.startsWith(`https://wa.me/${WHATSAPP_NO}`)) {
        trackLead('whatsapp')
        // Ziyaretçinin doldurduğu bilgiler içeren hazır mesajlar (teklif hesaplayıcı, Google önizleme vb.) yedek olarak iletilir.
        const metin = new URL(href).searchParams.get('text') || ''
        talepBildir(metin, metin.match(/\*([^*]+)\*/)?.[1] || 'WhatsApp bağlantısı')
      }
      else if (href.startsWith('tel:')) trackLead('telefon')
      else if (href.startsWith('mailto:')) trackEvent('eposta_tiklama')
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
