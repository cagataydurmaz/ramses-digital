import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Lazy-load widget'lar — first paint'i engellemez
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), { ssr: false })
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), { ssr: false })
const CookieBanner = dynamic(() => import('@/components/CookieBanner'), { ssr: false })

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
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
        {/* dns-prefetch: 3rd party gecikmelerini azaltır */}
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
      </head>
      <body className="bg-[#0A0F1E] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <WhatsAppButton />
        <CookieBanner />
        {/* Calendly: lazyOnload — sayfayı bloklamaz */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': ['MarketingAgency', 'LocalBusiness'],
                '@id': 'https://ramsesdigital.com/#organization',
                name: 'Ramses Digital',
                url: 'https://ramsesdigital.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://ramsesdigital.com/favicon.ico',
                },
                description:
                  'Performans odaklı dijital pazarlama ajansı. SEO, Google Ads, sosyal medya yönetimi, web tasarımı ve veri analizinde uzman İstanbul ajansı.',
                telephone: '+905355601936',
                email: 'ramsesdigitalagency@gmail.com',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Telsizler Mah. Boğazkale Sok. No:2',
                  addressLocality: 'Kağıthane',
                  addressRegion: 'İstanbul',
                  postalCode: '34413',
                  addressCountry: 'TR',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 41.0729,
                  longitude: 28.9799,
                },
                openingHoursSpecification: [
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '09:00',
                    closes: '18:00',
                  },
                ],
                priceRange: '₺₺',
                areaServed: [
                  { '@type': 'Country', name: 'Turkey' },
                  { '@type': 'City', name: 'İstanbul' },
                ],
                sameAs: [
                  'https://instagram.com/ramsesdigital',
                  'https://linkedin.com/company/ramsesdigital',
                  'https://twitter.com/ramsesdigital',
                ],
                foundingDate: '2019',
                numberOfEmployees: { '@type': 'QuantitativeValue', value: 6 },
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Dijital Pazarlama Hizmetleri',
                  itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO & İçerik Optimizasyonu' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads & Performans Reklamcılığı' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sosyal Medya Yönetimi' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Tasarımı & Geliştirme' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Posta & Otomasyon' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Veri Analizi & Danışmanlık' } },
                  ],
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': 'https://ramsesdigital.com/#website',
                name: 'Ramses Digital',
                url: 'https://ramsesdigital.com',
                inLanguage: 'tr-TR',
                publisher: { '@id': 'https://ramsesdigital.com/#organization' },
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://ramsesdigital.com/blog?q={search_term_string}',
                  },
                  'query-input': 'required name=search_term_string',
                },
              },
            ]),
          }}
        />
      </body>
    </html>
  )
}
