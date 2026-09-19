'use client'

import { useEffect } from 'react'
import { trackLead } from '@/lib/tracking'

export default function LeadTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const href = (e.target as HTMLElement | null)?.closest?.('a')?.getAttribute('href')
      if (href && (href.startsWith('https://wa.me/') || href.startsWith('tel:'))) trackLead()
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
