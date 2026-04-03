import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import WhatsAppButton from '@/components/WhatsAppButton'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ramsesdigital.com'),
  title: 'Ramses Digital | Performans Odaklı Dijital Pazarlama Ajansı',
  description:
    'Ramses Digital – Markanızı dijitalde büyütün. SEO, Google Ads, sosyal medya yönetimi, web tasarımı ve veri analizinde uzman ekibimizle gerçek sonuçlar elde edin.',
  keywords:
    'dijital pazarlama, SEO, Google Ads, sosyal medya yönetimi, web tasarımı, İstanbul dijital ajans',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#0A0F1E',
  openGraph: {
    title: 'Ramses Digital | Dijital Pazarlama Ajansı',
    description: 'Markanızı Dijitalde Büyütün, Gerçek Sonuçlar Elde Edin',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <meta name="color-scheme" content="dark" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className="bg-[#0A0F1E] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <WhatsAppButton />
        <CookieBanner />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <Script
          defer
          data-domain="YOUR_PLAUSIBLE_DOMAIN"
          src="https://plausible.io/js/script.js"
          strategy="lazyOnload"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MarketingAgency',
              name: 'Ramses Digital',
              url: 'https://ramsesdigital.com',
              telephone: '+905355601936',
              email: 'ramsesdigitalagency@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Telsizler Mah. Boğazkale Sok. No:2',
                addressLocality: 'Kağıthane',
                addressRegion: 'İstanbul',
                addressCountry: 'TR',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
