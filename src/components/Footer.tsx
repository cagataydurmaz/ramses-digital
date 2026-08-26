import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram } from 'lucide-react'

const services = [
  { label: 'SEO & İçerik Optimizasyonu', href: '/hizmetler/seo-kocaeli', hoverClass: 'hover:text-blue-400' },
  { label: 'Google Ads & Performans', href: '/hizmetler/google-ads-kocaeli', hoverClass: 'hover:text-violet-400' },
  { label: 'Web Tasarımı & Geliştirme', href: '/hizmetler/web-tasarim-kocaeli', hoverClass: 'hover:text-emerald-400' },
  { label: 'Sosyal Medya İçerik Üretimi', href: '/hizmetler/sosyal-medya', hoverClass: 'hover:text-pink-400' },
  { label: 'E-Posta & Otomasyon', href: '/hizmetler/eposta-otomasyon', hoverClass: 'hover:text-orange-400' },
  { label: 'n8n İş Akışı Otomasyonu', href: '/hizmetler/n8n-otomasyon', hoverClass: 'hover:text-fuchsia-400' },
  { label: 'Veri Analizi & Danışmanlık', href: '/hizmetler/veri-analizi', hoverClass: 'hover:text-cyan-400' },
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
  { href: '/izmit-dijital-pazarlama', label: 'İzmit Dijital Pazarlama' },
  { href: '/izmit-seo', label: 'İzmit SEO' },
  { href: '/izmit-web-tasarim', label: 'İzmit Web Tasarım' },
  { href: '/izmit-google-ads', label: 'İzmit Google Ads' },
  { href: '/izmit-yazilim-ajansi', label: 'İzmit Yazılım Ajansı' },
  { href: '/kocaeli-dijital-pazarlama', label: 'Kocaeli Dijital Pazarlama' },
  { href: '/kocaeli-reklam-ajansi', label: 'Kocaeli Reklam Ajansı' },
  { href: '/kocaeli-seo', label: 'Kocaeli SEO' },
  { href: '/kocaeli-web-tasarim', label: 'Kocaeli Web Tasarım' },
  { href: '/kocaeli-google-ads', label: 'Kocaeli Google Ads' },
  { href: '/kocaeli-yazilim-ajansi', label: 'Kocaeli Yazılım Ajansı' },
  { href: '/istanbul-dijital-pazarlama', label: 'İstanbul Dijital Pazarlama' },
  { href: '/istanbul-reklam-ajansi', label: 'İstanbul Reklam Ajansı' },
  { href: '/istanbul-seo', label: 'İstanbul SEO' },
  { href: '/istanbul-web-tasarim', label: 'İstanbul Web Tasarım' },
  { href: '/istanbul-google-ads', label: 'İstanbul Google Ads' },
  { href: '/istanbul-yazilim-ajansi', label: 'İstanbul Yazılım Ajansı' },
  { href: '/ankara-dijital-pazarlama', label: 'Ankara Dijital Pazarlama' },
  { href: '/ankara-reklam-ajansi', label: 'Ankara Reklam Ajansı' },
  { href: '/ankara-seo', label: 'Ankara SEO' },
  { href: '/ankara-web-tasarim', label: 'Ankara Web Tasarım' },
  { href: '/ankara-google-ads', label: 'Ankara Google Ads' },
  { href: '/ankara-yazilim-ajansi', label: 'Ankara Yazılım Ajansı' },
  { href: '/izmir-dijital-pazarlama', label: 'İzmir Dijital Pazarlama' },
  { href: '/izmir-reklam-ajansi', label: 'İzmir Reklam Ajansı' },
  { href: '/izmir-seo', label: 'İzmir SEO' },
  { href: '/izmir-web-tasarim', label: 'İzmir Web Tasarım' },
  { href: '/izmir-google-ads', label: 'İzmir Google Ads' },
  { href: '/izmir-yazilim-ajansi', label: 'İzmir Yazılım Ajansı' },
  { href: '/bursa-dijital-pazarlama', label: 'Bursa Dijital Pazarlama' },
  { href: '/bursa-reklam-ajansi', label: 'Bursa Reklam Ajansı' },
  { href: '/bursa-seo', label: 'Bursa SEO' },
  { href: '/bursa-web-tasarim', label: 'Bursa Web Tasarım' },
  { href: '/bursa-google-ads', label: 'Bursa Google Ads' },
  { href: '/bursa-yazilim-ajansi', label: 'Bursa Yazılım Ajansı' },
  { href: '/antalya-dijital-pazarlama', label: 'Antalya Dijital Pazarlama' },
  { href: '/antalya-reklam-ajansi', label: 'Antalya Reklam Ajansı' },
  { href: '/antalya-seo', label: 'Antalya SEO' },
  { href: '/antalya-web-tasarim', label: 'Antalya Web Tasarım' },
  { href: '/antalya-google-ads', label: 'Antalya Google Ads' },
  { href: '/antalya-yazilim-ajansi', label: 'Antalya Yazılım Ajansı' },
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
                    prefetch={false}
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
                    prefetch={false}
                    className={`text-zinc-400 ${service.hoverClass} text-sm transition-colors py-2 block`}
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
                  Dolphin AVM Kat:2<br />
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
                prefetch={false}
                className="text-zinc-500 hover:text-white text-xs transition-colors"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm">
            © {foundingYear}{currentYear > foundingYear ? `–${currentYear}` : ''} Ramses Dijital Yazılım ve Dijital Pazarlama Ajansı. Tüm hakları saklıdır.
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
