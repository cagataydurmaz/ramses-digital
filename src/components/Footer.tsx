import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react'

const services = [
  'SEO & İçerik Optimizasyonu',
  'Google Ads & Performans',
  'Sosyal Medya Yönetimi',
  'Web Tasarımı & Geliştirme',
  'E-Posta & Otomasyon',
  'Veri Analizi & Danışmanlık',
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
              Performans odaklı dijital pazarlama ajansı. Markanızı dijitalde büyütüyor, gerçek sonuçlar elde ediyoruz.
            </p>
            <div className="flex items-center gap-3">
              {/* Sosyal medya linkleri — aria-label ile ekran okuyucu desteği */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram sayfamızı ziyaret edin"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-blue-500/20 border border-white/[0.06] hover:border-blue-500/40 flex items-center justify-center text-zinc-400 hover:text-blue-400 transition-all"
              >
                <Instagram size={14} aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn sayfamızı ziyaret edin"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-blue-500/20 border border-white/[0.06] hover:border-blue-500/40 flex items-center justify-center text-zinc-400 hover:text-blue-400 transition-all"
              >
                <Linkedin size={14} aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X sayfamızı ziyaret edin"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-blue-500/20 border border-white/[0.06] hover:border-blue-500/40 flex items-center justify-center text-zinc-400 hover:text-blue-400 transition-all"
              >
                <Twitter size={14} aria-hidden="true" />
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
                <li key={service}>
                  <Link
                    href="/hizmetler"
                    className="text-zinc-400 hover:text-white text-sm transition-colors py-2 block"
                  >
                    {service}
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
                  Telsizler Mahallesi, Boğazkale Sokak, No:2,<br />
                  Kağıthane / İstanbul
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

        <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm">
            © 2019 Ramses Digital. Tüm hakları saklıdır.
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
