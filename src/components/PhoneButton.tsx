'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function PhoneButton() {
  return (
    <motion.a
      href="tel:+905355601936"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 transition-colors"
      aria-label="Hemen ara"
    >
      <Phone size={24} className="text-white fill-white" />
    </motion.a>
  )
}
