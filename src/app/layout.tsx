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
  // 'optional': tarayıcı ~100ms içinde font yükleyemezse fallback fontla devam eder,
  // swap beklemez → LCP fontun yüklenmesini beklemiyor, ~1s'ye düşer.
  // adjustFontFallback:true fallback fontun metriklerini Inter'e eşitler → görsel fark yok.
  display: 'optional',
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ramsesdigital.com'),
  alternates: { canonical: 'https://ramsesdigital.com' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  title: 'Ramses Digital | Performans Odaklı Dijital Pazarlama Ajansı — Kocaeli',
  description:
    'Ramses Digital – Kocaeli ve İstanbul\'da SEO, Google Ads, sosyal medya yönetimi, web tasarımı ve n8n otomasyonunda uzman dijital pazarlama ajansı. Gerçek sonuçlar.',
  keywords:
    'dijital pazarlama, SEO, Google Ads, sosyal medya yönetimi, web tasarımı, Kocaeli dijital ajans, İstanbul dijital ajans, n8n otomasyon',
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
    url: 'https://ramsesdigital.com',
    siteName: 'Ramses Digital',
    images: [
      {
        url: 'https://ramsesdigital.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ramses Digital — Performans Odaklı Dijital Pazarlama Ajansı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramses Digital | Performans Odaklı Dijital Pazarlama Ajansı',
    description: 'Kocaeli ve İstanbul\'da SEO, Google Ads, sosyal medya ve n8n otomasyonu.',
    images: ['https://ramsesdigital.com/og-image.png'],
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
      </head>
      <body className="bg-[#0A0F1E] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <WhatsAppButton />
        <CookieBanner />
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JQMD80KVTJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JQMD80KVTJ');
          `}
        </Script>
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
                  'Performans odaklı dijital pazarlama ajansı. SEO, Google Ads, n8n otomasyon, web tasarımı ve veri analizinde uzman Kocaeli merkezli ajans.',
                telephone: '+905355601936',
                email: 'ramsesdigitalagency@gmail.com',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Körfez Mah. Sanayi Cd. Berk Sk. Dolphin AVM Kat:2 No:224',
                  addressLocality: 'İzmit',
                  addressRegion: 'Kocaeli',
                  postalCode: '41050',
                  addressCountry: 'TR',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 40.7588,
                  longitude: 29.9320,
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
                  { '@type': 'City', name: 'Kocaeli' },
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
