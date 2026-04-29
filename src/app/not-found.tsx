import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Search, ArrowRight, Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı | Ramses Digital',
  description: 'Aradığınız sayfa bulunamadı. Anasayfaya dönebilir veya popüler sayfalarımıza göz atabilirsiniz.',
  robots: { index: false, follow: false },
}

const popularLinks = [
  { href: '/hizmetler', label: 'Hizmetlerimiz', desc: 'SEO, Google Ads, n8n otomasyon' },
  { href: '/blog', label: 'Blog', desc: 'Dijital pazarlama rehberleri' },
  { href: '/portfolyo', label: 'Portföy', desc: 'Başarı hikayeleri ve sonuçlar' },
  { href: '/iletisim', label: 'İletişim', desc: 'Ücretsiz danışmanlık alın' },
  { href: '/seo-analiz', label: 'Ücretsiz SEO Analizi', desc: 'Sitenizi anında analiz edin' },
  { href: '/teklif-al', label: 'AI Teklif Hesaplayıcı', desc: 'Kişisel paket fiyatınızı öğrenin' },
]

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-500/8 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Compass size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-medium tracking-wider uppercase">
              Sayfa Kayıp
            </span>
          </div>

          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold gradient-text mb-4 leading-none">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Aradığın Sayfa Kaybolmuş Gibi
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto mb-10">
            Belki yanlış yazıldı, belki taşındı, belki de hiç var olmadı. Ama merak etme — sitemizdeki en popüler sayfaları aşağıda toparladık.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-7 py-3.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Home size={16} />
              Anasayfaya Dön
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 px-7 py-3.5 rounded-full text-sm transition-all"
            >
              <Search size={16} />
              Yardım Al
            </Link>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-12">
          <p className="text-zinc-500 text-xs font-medium tracking-wider uppercase text-center mb-6">
            Popüler Sayfalar
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {popularLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-4 transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-white font-medium text-sm">{link.label}</h3>
                  <ArrowRight size={14} className="text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-zinc-500 text-xs">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
