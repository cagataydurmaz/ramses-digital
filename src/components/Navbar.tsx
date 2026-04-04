'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'

const navLinks = [
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/portfolyo', label: 'Portföy' },
  { href: '/blog', label: 'Blog' },
  { href: '/iletisim', label: 'İletişim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0F1E]/95 md:bg-[#0A0F1E]/90 md:backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-blue-500 font-bold text-xl tracking-tight">RAMSES</span>
            <span className="text-white font-light text-xl tracking-tight">Digital</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <CalendlyButton label="Ücretsiz Danışmanlık" variant="primary" className="!px-5 !py-2 !text-sm !rounded-full !shadow-none hover:!shadow-md" showIcon={false} />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors p-2.5 -mr-1"
            aria-label="Menü"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#080D18] border-b border-white/[0.06] md:hidden"
            style={{ willChange: 'transform' }}
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {/* Ana Sayfa */}
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`text-base py-3 border-b border-white/[0.04] transition-colors ${
                  pathname === '/' ? 'text-white' : 'text-zinc-400'
                }`}
              >
                Ana Sayfa
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base py-3 border-b border-white/[0.04] transition-colors ${
                    pathname === link.href ? 'text-white' : 'text-zinc-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <CalendlyButton label="Ücretsiz Danışmanlık" variant="primary" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
