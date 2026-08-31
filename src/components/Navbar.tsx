'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const navLinks = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/portfolyo', label: 'Portföy' },
  { href: '/blog', label: 'Blog' },
  { href: '/iletisim', label: 'İletişim' },
]

const cityLinks = [
  { href: '/istanbul-dijital-pazarlama', label: 'İstanbul' },
  { href: '/ankara-dijital-pazarlama', label: 'Ankara' },
  { href: '/izmir-dijital-pazarlama', label: 'İzmir' },
  { href: '/bursa-dijital-pazarlama', label: 'Bursa' },
  { href: '/antalya-dijital-pazarlama', label: 'Antalya' },
  { href: '/kocaeli-dijital-pazarlama', label: 'Kocaeli' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          scrolled
            ? 'bg-[#0A0F1E]/95 md:backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="Ramses Dijital Yazılım ve Dijital Pazarlama Ajansı">
            <Image
              src="/logo.png"
              alt="Ramses Dijital Yazılım ve Dijital Pazarlama Ajansı"
              width={36}
              height={36}
              priority
              className="rounded-md"
            />
            <div className="flex items-baseline gap-1.5">
              <span className="text-blue-500 font-bold text-xl tracking-tight">RAMSES</span>
              <span className="text-white font-light text-xl tracking-tight">Dijital</span>
              <span className="hidden lg:inline text-zinc-500 font-light text-xs tracking-tight">Yazılım & Pazarlama</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className={`text-sm transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Şehirler dropdown — hover ile açılır, CSS-only */}
            <div className="group relative py-2 -my-2">
              <button
                className={`flex items-center gap-1 text-sm transition-colors duration-200 ${
                  cityLinks.some((c) => c.href === pathname)
                    ? 'text-white'
                    : 'text-zinc-400 group-hover:text-white'
                }`}
              >
                Şehirler
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150">
                <div className="bg-[#0D1225] border border-white/[0.08] rounded-xl p-2 min-w-[160px] shadow-xl">
                  {cityLinks.map((city) => (
                    <Link
                      key={city.href}
                      href={city.href}
                      prefetch={false}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        pathname === city.href
                          ? 'text-white bg-white/[0.06]'
                          : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
                      }`}
                    >
                      {city.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <CalendlyButton
              label="Ücretsiz Danışmanlık"
              variant="primary"
              className="!px-5 !py-2 !text-sm !rounded-full !shadow-none hover:!shadow-md"
              showIcon={false}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-zinc-400 hover:text-white p-2.5 -mr-1"
            aria-label="Menü"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu — no Framer Motion, no opacity animation, instant render */}
      {menuOpen && (
        <div
          className="fixed top-16 left-0 right-0 bottom-0 z-40 bg-[#080D18] lg:hidden overflow-y-auto"
          style={{ contain: 'layout style paint' }}
        >
          <div className="px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                onClick={() => setMenuOpen(false)}
                className={`text-base py-3 border-b border-white/[0.04] ${
                  pathname === link.href ? 'text-white' : 'text-zinc-400'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <p className="text-zinc-600 text-xs uppercase tracking-wider pt-4 pb-1">Şehirler</p>
            <div className="grid grid-cols-2 gap-1 pb-3 border-b border-white/[0.04]">
              {cityLinks.map((city) => (
                <Link
                  key={city.href}
                  href={city.href}
                  prefetch={false}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm py-2 ${
                    pathname === city.href ? 'text-white' : 'text-zinc-400'
                  }`}
                >
                  {city.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3">
              <LanguageSwitcher />
              <CalendlyButton label="Ücretsiz Danışmanlık" variant="primary" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
