'use client'

import { useEffect } from 'react'
import { trackEvent, trackLead } from '@/lib/tracking'
import { WHATSAPP_NO } from '@/lib/whatsapp'

// Sitedeki tüm WhatsApp, telefon ve e-posta bağlantılarını tek yerden ölçer.
export default function LeadTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const href = (e.target as HTMLElement | null)?.closest?.('a')?.getAttribute('href')
      if (!href) return
      // Yalnızca bizim numaramız talep sayılır (araçlarda ziyaretçinin kendi oluşturduğu linkler hariç).
      if (href.startsWith(`https://wa.me/${WHATSAPP_NO}`)) trackLead('whatsapp')
      else if (href.startsWith('tel:')) trackLead('telefon')
      else if (href.startsWith('mailto:')) trackEvent('eposta_tiklama')
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
