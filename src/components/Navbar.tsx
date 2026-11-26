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
  { href: '/izmit-dijital-pazarlama', label: 'İzmit' },
  { href: '/kocaeli-dijital-pazarlama', label: 'Kocaeli' },
  { href: '/istanbul-dijital-pazarlama', label: 'İstanbul' },
  { href: '/ankara-dijital-pazarlama', label: 'Ankara' },
  { href: '/izmir-dijital-pazarlama', label: 'İzmir' },
  { href: '/bursa-dijital-pazarlama', label: 'Bursa' },
  { href: '/antalya-dijital-pazarlama', label: 'Antalya' },
  { href: '/gaziantep-dijital-pazarlama', label: 'Gaziantep' },
  { href: '/konya-dijital-pazarlama', label: 'Konya' },
  { href: '/mersin-dijital-pazarlama', label: 'Mersin' },
  { href: '/kayseri-dijital-pazarlama', label: 'Kayseri' },
  { href: '/eskisehir-dijital-pazarlama', label: 'Eskişehir' },
]

// Sektör menüsü (sektorler.ts'teki 12 sayfa; istemci paketine tüm sektör metni girmesin diye ad/slug burada).
const sektorLinks = [
  { href: '/sektorler/avukat-hukuk-burolari', label: 'Avukatlar ve Hukuk Büroları' },
  { href: '/sektorler/dis-hekimleri-klinikler', label: 'Diş Hekimleri ve Klinikler' },
  { href: '/sektorler/psikolog-terapistler', label: 'Psikologlar ve Terapistler' },
  { href: '/sektorler/veteriner-klinikleri', label: 'Veteriner Klinikleri' },
  { href: '/sektorler/mali-musavirler', label: 'Mali Müşavirler' },
  { href: '/sektorler/e-ticaret', label: 'E-Ticaret İşletmeleri' },
  { href: '/sektorler/restoran-kafe', label: 'Restoran ve Kafeler' },
  { href: '/sektorler/ozel-hastane-poliklinik', label: 'Özel Hastane ve Poliklinikler' },
  { href: '/sektorler/agiz-dis-sagligi-merkezleri', label: 'Ağız ve Diş Sağlığı Merkezleri' },
  { href: '/sektorler/guzellik-merkezleri', label: 'Güzellik ve Estetik Merkezleri' },
  { href: '/sektorler/emlak-ofisleri', label: 'Emlak ve İnşaat Firmaları' },
  { href: '/sektorler/oto-servis', label: 'Oto Servis ve Ekspertiz' },
]
const populerLinks = [
  { href: '/hizmetler/seo', label: 'SEO Hizmeti' },
  { href: '/hizmetler/web-tasarim', label: 'Web Tasarım' },
  { href: '/hizmetler/google-ads', label: 'Google Ads Yönetimi' },
  { href: '/geo-ajansi', label: 'Yapay Zekâ Görünürlüğü (GEO)' },
  { href: '/teklif-al', label: 'Ücretsiz Teklif Al' },
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
            ? 'bg-[#0A0F1E] md:bg-[#0A0F1E]/95 md:backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-16 flex items-center justify-between gap-4 xl:gap-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Ramses Dijital Yazılım ve Dijital Pazarlama Ajansı">
            <Image
              src="/amblem.png"
              alt="Ramses Dijital Yazılım ve Dijital Pazarlama Ajansı"
              width={38}
              height={38}
              priority
            />
            <div className="flex items-baseline gap-1.5 whitespace-nowrap">
              <span className="text-blue-500 font-bold text-xl tracking-tight">RAMSES</span>
              <span className="text-white font-light text-xl tracking-tight">Dijital</span>
              <span className="hidden 2xl:inline text-zinc-500 font-light text-xs tracking-tight">Yazılım & Pazarlama</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-7">
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

            {/* Sektörler mega menü — hover ile açılır, CSS-only */}
            <div className="group relative py-2 -my-2">
              <button
                className={`flex items-center gap-1 text-sm transition-colors duration-200 ${
                  pathname.startsWith('/sektorler') ? 'text-white' : 'text-zinc-400 group-hover:text-white'
                }`}
              >
                Sektörler
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150">
                <div className="bg-[#0D1225] border border-white/[0.08] rounded-2xl p-3 w-[720px] shadow-xl flex gap-3">
                  <div className="w-[210px] shrink-0 rounded-xl bg-white/[0.04] p-4 flex flex-col">
                    <p className="text-white font-semibold text-[15px] leading-snug">Sektörünüze özel dijital pazarlama</p>
                    <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed">Her mesleğin kuralı ve müşterisinin arama alışkanlığı farklı.</p>
                    <p className="text-zinc-500 text-[11px] uppercase tracking-wider mt-auto pt-5 pb-1.5">Popüler sayfalar</p>
                    {populerLinks.map((l) => (
                      <Link key={l.href} href={l.href} prefetch={false} className="text-zinc-400 hover:text-white text-[13px] py-1 transition-colors">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                  <div className="flex-1 py-1">
                    <p className="text-zinc-500 text-[11px] uppercase tracking-wider px-3 pb-1.5">Sektöre özel çözümler</p>
                    <div className="grid grid-cols-2 gap-0.5">
                      {sektorLinks.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          prefetch={false}
                          className={`block px-3 py-1.5 rounded-lg text-[13px] transition-colors ${
                            pathname === l.href ? 'text-white bg-white/[0.06]' : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
                          }`}
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                    <Link href="/sektorler" prefetch={false} className="block mt-1 px-3 py-2 text-[13px] text-blue-400 hover:text-blue-300 transition-colors">
                      Tüm sektörler →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

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
                <div className="bg-[#0D1225] border border-white/[0.08] rounded-xl p-2 min-w-[280px] shadow-xl">
                  <div className="grid grid-cols-2 gap-0.5">
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
                  <Link
                    href="/sehirler"
                    prefetch={false}
                    className="block mt-1 px-3 py-2 rounded-lg text-sm text-center text-blue-400 hover:text-blue-300 hover:bg-white/[0.06] border-t border-white/[0.06] transition-colors"
                  >
                    Tüm Şehirler & Hizmetler →
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
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
            className="xl:hidden text-zinc-400 hover:text-white p-2.5 -mr-1"
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
          className="fixed top-16 left-0 right-0 bottom-0 z-40 bg-[#080D18] xl:hidden overflow-y-auto"
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

            <details className="border-b border-white/[0.04]">
              <summary className="text-base py-3 text-zinc-400 cursor-pointer list-none flex items-center justify-between">
                Sektörler <ChevronDown size={16} />
              </summary>
              <div className="grid grid-cols-1 gap-0.5 pb-3">
                {sektorLinks.map((l) => (
                  <Link key={l.href} href={l.href} prefetch={false} onClick={() => setMenuOpen(false)} className={`text-sm py-2 ${pathname === l.href ? 'text-white' : 'text-zinc-400'}`}>
                    {l.label}
                  </Link>
                ))}
                <Link href="/sektorler" prefetch={false} onClick={() => setMenuOpen(false)} className="text-sm py-2 text-blue-400">
                  Tüm sektörler →
                </Link>
              </div>
            </details>

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
            <Link
              href="/sehirler"
              prefetch={false}
              onClick={() => setMenuOpen(false)}
              className="text-sm py-2 text-blue-400 border-b border-white/[0.04]"
            >
              Tüm Şehirler & Hizmetler →
            </Link>

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
