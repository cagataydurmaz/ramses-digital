import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim | Ramses Digital — Ücretsiz Danışmanlık Al',
  description:
    'Dijital pazarlama projeniz için ücretsiz danışmanlık alın. İstanbul Kağıthane\'deki ofisimizi arayın, WhatsApp\'tan yazın veya formu doldurun — 24 saat içinde dönüyoruz.',
  openGraph: {
    title: 'İletişim | Ramses Digital',
    description: 'Ücretsiz danışmanlık için bize ulaşın. +90 (535) 560 19 36 · ramsesdigitalagency@gmail.com',
    url: 'https://ramsesdigital.com/iletisim',
  },
  alternates: { canonical: 'https://ramsesdigital.com/iletisim' },
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
                streetAddress: 'Telsizler Mah. Boğazkale Sok. No:2',
                addressLocality: 'Kağıthane',
                addressRegion: 'İstanbul',
                postalCode: '34413',
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
