import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram } from 'lucide-react'

const services = [
  { label: 'SEO & İçerik Optimizasyonu', href: '/hizmetler/seo-kocaeli' },
  { label: 'Google Ads & Performans', href: '/hizmetler/google-ads-kocaeli' },
  { label: 'Web Tasarımı & Geliştirme', href: '/hizmetler/web-tasarim-kocaeli' },
  { label: 'E-Posta & Otomasyon', href: '/hizmetler/eposta-otomasyon' },
  { label: 'n8n İş Akışı Otomasyonu', href: '/hizmetler/n8n-otomasyon' },
  { label: 'Veri Analizi & Danışmanlık', href: '/hizmetler/veri-analizi' },
]

const quickLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/portfolyo', label: 'Portföy' },
  { href: '/blog', label: 'Blog' },
  { href: '/iletisim', label: 'İletişim' },
  { href: '/teklif-al', label: 'AI Teklif Al' },
  { href: '/seo-analiz', label: 'Ücretsiz SEO Analizi' },
]

const localPages = [
  { href: '/seo-ajansi', label: 'SEO Ajansı (Türkiye Geneli)' },
  { href: '/google-ads-ajansi', label: 'Google Ads Ajansı (Türkiye Geneli)' },
  { href: '/web-tasarim-ajansi', label: 'Web Tasarım Ajansı (Türkiye Geneli)' },
  { href: '/yazilim-ajansi', label: 'Yazılım Ajansı (Türkiye Geneli)' },
  { href: '/izmit-reklam-ajansi', label: 'İzmit Reklam Ajansı' },
  { href: '/izmit-seo', label: 'İzmit SEO' },
  { href: '/izmit-web-tasarim', label: 'İzmit Web Tasarım' },
  { href: '/izmit-google-ads', label: 'İzmit Google Ads' },
  { href: '/izmit-yazilim-ajansi', label: 'İzmit Yazılım Ajansı' },
  { href: '/kocaeli-dijital-pazarlama', label: 'Kocaeli Dijital Pazarlama' },
  { href: '/kocaeli-seo', label: 'Kocaeli SEO' },
  { href: '/kocaeli-web-tasarim', label: 'Kocaeli Web Tasarım' },
  { href: '/kocaeli-google-ads', label: 'Kocaeli Google Ads' },
  { href: '/kocaeli-yazilim-ajansi', label: 'Kocaeli Yazılım Ajansı' },
]

const foundingYear = 2019
const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-[#080D18] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="text-blue-500 font-bold text-xl tracking-tight">RAMSES</span>
              <span className="text-white font-light text-xl tracking-tight">Digital</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Performans odaklı dijital pazarlama ajansı. SEO, Google Ads ve n8n otomasyon ile markanızı dijitalde büyütüyoruz.
            </p>
            <div className="flex items-center gap-3">
              {/* Sosyal medya linkleri — aria-label ile ekran okuyucu desteği */}
              <a
                href="https://instagram.com/ramses.digital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram sayfamızı ziyaret edin"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-blue-500/20 border border-white/[0.06] hover:border-blue-500/40 flex items-center justify-center text-zinc-400 hover:text-blue-400 transition-all"
              >
                <Instagram size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links — h3 kullan (h4 heading hiyerarşisini bozar) */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Hızlı Linkler</h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors py-2 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-1">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors py-2 block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-blue-500 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-zinc-400 text-sm">
                  Körfez Mah. Sanayi Cd. Berk Sk.<br />
                  Dolphin AVM Kat:2 No:224<br />
                  41050 İzmit / Kocaeli
                </span>
              </li>
              <li>
                <a
                  href="tel:+905355601936"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white text-sm transition-colors"
                >
                  <Phone size={14} className="text-blue-500 shrink-0" aria-hidden="true" />
                  +90 (535) 560 19 36
                </a>
              </li>
              <li>
                <a
                  href="mailto:ramsesdigitalagency@gmail.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white text-sm transition-colors"
                >
                  <Mail size={14} className="text-blue-500 shrink-0" aria-hidden="true" />
                  ramsesdigitalagency@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Local SEO — İzmit/Kocaeli sayfalarına sitewide iç link */}
        <div className="mt-12 pt-8 border-t border-white/[0.05]">
          <h3 className="text-white font-semibold text-sm mb-4">Türkiye Geneli & İzmit/Kocaeli&apos;de Hizmetlerimiz</h3>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {localPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="text-zinc-500 hover:text-white text-xs transition-colors"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm">
            © {foundingYear}{currentYear > foundingYear ? `–${currentYear}` : ''} Ramses Dijital Reklam Ajansı. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/gizlilik-politikasi" className="text-zinc-400 hover:text-white text-xs transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/cerez-politikasi" className="text-zinc-400 hover:text-white text-xs transition-colors">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
