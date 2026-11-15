'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Cookie } from 'lucide-react'
import { CONSENT_KEY, CONSENT_EVENT } from '@/components/ConsentScripts'

type Gtag = (...args: unknown[]) => void

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const kaydet = (deger: 'accepted' | 'rejected') => {
    try {
      localStorage.setItem(CONSENT_KEY, deger)
    } catch {}
    if (deger === 'accepted') {
      const gtag = (window as unknown as { gtag?: Gtag }).gtag
      gtag?.('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
      })
    }
    window.dispatchEvent(new Event(CONSENT_EVENT))
    setVisible(false)
  }

  const accept = () => kaydet('accepted')
  const reject = () => kaydet('rejected')

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-[76px] sm:bottom-[84px] lg:bottom-0 left-0 right-0 z-[60] px-3 sm:px-4 lg:p-4"
        >
          <div className="max-w-2xl mx-auto bg-[#0D1225] border border-white/[0.08] rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3">
            <Cookie size={14} className="text-blue-400 shrink-0" />
            <p className="text-zinc-400 text-xs leading-relaxed flex-1 min-w-0">
              Çerez kullanıyoruz.{' '}
              <Link href="/cerez-politikasi" className="text-blue-400 underline underline-offset-2">
                Detay
              </Link>
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={reject}
                className="text-zinc-400 hover:text-white text-xs transition-colors px-2 py-1"
              >
                Reddet
              </button>
              <button
                onClick={accept}
                className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-lg font-medium transition-all"
              >
                Kabul Et
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
