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
  title: 'Ramses Dijital Reklam Ajansı | İzmit Kocaeli — SEO, Google Ads, n8n Otomasyon',
  description:
    'Ramses Dijital Reklam Ajansı — İzmit Kocaeli\'nin performans odaklı dijital pazarlama ajansı. SEO, Google Ads, n8n otomasyon ve web tasarımında uzman. Ücretsiz danışmanlık.',
  keywords:
    'dijital pazarlama Kocaeli, dijital pazarlama İzmit, SEO Kocaeli, SEO İzmit, Google Ads Kocaeli, Google Ads İzmit, web tasarım Kocaeli, web tasarım İzmit, sosyal medya yönetimi Kocaeli, n8n otomasyon, dijital ajans Kocaeli, reklam ajansı İzmit, Gebze SEO, Körfez SEO, Darıca dijital pazarlama',
  applicationName: 'Ramses Dijital Reklam Ajansı',
  authors: [{ name: 'Ramses Dijital Reklam Ajansı', url: 'https://ramsesdigital.com' }],
  creator: 'Ramses Dijital Reklam Ajansı',
  publisher: 'Ramses Dijital Reklam Ajansı',
  category: 'Marketing & Advertising',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#0A0F1E',
  openGraph: {
    title: 'Ramses Dijital Reklam Ajansı | İzmit Kocaeli',
    description: 'İzmit & Kocaeli merkezli reklam ajansı — SEO, Google Ads, n8n otomasyon, web tasarım. Markanızı dijitalde büyütün.',
    locale: 'tr_TR',
    type: 'website',
    url: 'https://ramsesdigital.com',
    siteName: 'Ramses Dijital Reklam Ajansı',
    images: [
      {
        url: 'https://ramsesdigital.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ramses Dijital Reklam Ajansı — İzmit Kocaeli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramses Dijital Reklam Ajansı | İzmit Kocaeli',
    description: 'İzmit & Kocaeli\'de SEO, Google Ads, n8n otomasyon ve web tasarımı.',
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
        {/* Microsoft Clarity — heatmap & session recording */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': ['MarketingAgency', 'LocalBusiness'],
                '@id': 'https://ramsesdigital.com/#organization',
                name: 'Ramses Dijital Reklam Ajansı',
                alternateName: ['Ramses Digital', 'Ramses Dijital', 'Ramses Reklam Ajansı'],
                legalName: 'Ramses Dijital Reklam Ajansı',
                url: 'https://ramsesdigital.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://ramsesdigital.com/logo.png',
                  width: 512,
                  height: 512,
                },
                description:
                  'İzmit Kocaeli merkezli performans odaklı dijital pazarlama ajansı. SEO, Google Ads, n8n otomasyon, web tasarımı ve veri analizinde uzman. Türkiye geneli ve uluslararası hizmet.',
                slogan: 'Markanızı Dijitalde Büyütün, Gerçek Sonuçlar Elde Edin',
                image: 'https://ramsesdigital.com/og-image.png',
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
                hasMap: 'https://www.google.com/maps?q=Dolphin+AVM+Sanayi+Cad+Berk+Sk+%C4%B0zmit+Kocaeli',
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
                  { '@type': 'Country', name: 'Türkiye' },
                  { '@type': 'City', name: 'İzmit' },
                  { '@type': 'City', name: 'Kocaeli' },
                  { '@type': 'City', name: 'Gebze' },
                  { '@type': 'City', name: 'Körfez' },
                  { '@type': 'City', name: 'Darıca' },
                  { '@type': 'City', name: 'Çayırova' },
                  { '@type': 'City', name: 'Kartepe' },
                  { '@type': 'City', name: 'Gölcük' },
                  { '@type': 'City', name: 'İstanbul' },
                  { '@type': 'City', name: 'Sakarya' },
                  { '@type': 'City', name: 'Yalova' },
                ],
                knowsAbout: [
                  'Search Engine Optimization (SEO)',
                  'Generative Engine Optimization (GEO)',
                  'Answer Engine Optimization (AEO)',
                  'Google Ads',
                  'Google Analytics 4',
                  'n8n Workflow Automation',
                  'Web Design and Development',
                  'Social Media Marketing',
                  'Content Marketing',
                  'Local SEO Kocaeli',
                ],
                knowsLanguage: ['tr', 'en'],
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
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Kocaeli', url: 'https://ramsesdigital.com/hizmetler/seo-kocaeli', areaServed: 'Kocaeli' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads Kocaeli', url: 'https://ramsesdigital.com/hizmetler/google-ads-kocaeli', areaServed: 'Kocaeli' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'n8n İş Akışı Otomasyonu', url: 'https://ramsesdigital.com/hizmetler/n8n-otomasyon' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Tasarım Kocaeli', url: 'https://ramsesdigital.com/hizmetler/web-tasarim-kocaeli', areaServed: 'Kocaeli' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GEO & AEO Optimizasyonu' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sosyal Medya Yönetimi' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Posta & Otomasyon' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Veri Analizi & Danışmanlık' } },
                  ],
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': 'https://ramsesdigital.com/#website',
                name: 'Ramses Dijital Reklam Ajansı',
                alternateName: 'Ramses Digital',
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
