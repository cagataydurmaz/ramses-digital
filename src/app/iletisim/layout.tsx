import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim | Ücretsiz Danışmanlık Al — Ramses Dijital Reklam Ajansı',
  description:
    'Dijital pazarlama projeniz için ücretsiz danışmanlık alın. WhatsApp\'tan yazın veya formu doldurun — 24 saat içinde geri dönüyoruz.',
  openGraph: {
    title: 'İletişim | Ramses Digital',
    description: 'Ücretsiz danışmanlık için bize ulaşın. +90 (535) 560 19 36 · ramsesdigitalagency@gmail.com',
    url: 'https://ramsesdigital.com/iletisim',
  },
  alternates: { canonical: 'https://ramsesdigital.com/iletisim' },
  twitter: {
    card: 'summary_large_image',
    title: 'İletişim | Ramses Digital',
    description: 'Ücretsiz danışmanlık için bize ulaşın.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Ramses Digital İletişim',
            url: 'https://ramsesdigital.com/iletisim',
            description: 'Dijital pazarlama danışmanlığı için Ramses Digital ile iletişime geçin.',
            mainEntity: {
              '@type': 'Organization',
              name: 'Ramses Digital',
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
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}
