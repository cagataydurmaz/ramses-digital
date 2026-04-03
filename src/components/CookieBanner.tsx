'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Cookie } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('ramses_cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('ramses_cookie_consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('ramses_cookie_consent', 'rejected')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4"
        >
          <div className="max-w-4xl mx-auto bg-[#0D1225] border border-white/[0.08] rounded-2xl p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-9 h-9 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
              <Cookie size={18} className="text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium mb-0.5">Çerez Politikası</p>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Web sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz.{' '}
                <Link href="/cerez-politikasi" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                  Çerez Politikamızı
                </Link>{' '}
                ve{' '}
                <Link href="/gizlilik-politikasi" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                  Gizlilik Politikamızı
                </Link>{' '}
                inceleyebilirsiniz.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={reject}
                className="px-4 py-2 text-zinc-400 hover:text-white text-sm border border-white/10 hover:border-white/20 rounded-full transition-all"
              >
                Reddet
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-full font-medium transition-all"
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
