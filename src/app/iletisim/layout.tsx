import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim – Ücretsiz Danışmanlık | Ramses Dijital',
  description:
    'Dijital pazarlama projeniz için ücretsiz danışmanlık alın. WhatsApp\'tan yazın veya formu doldurun — 24 saat içinde geri dönüyoruz.',
  openGraph: {
    title: 'İletişim | Ramses Dijital',
    description: 'Ücretsiz danışmanlık için bize ulaşın. +90 (535) 560 19 36 · WhatsApp ile hızlı dönüş',
    url: 'https://ramsesdigital.com/iletisim',
  },
  alternates: { canonical: 'https://ramsesdigital.com/iletisim' },
  twitter: {
    card: 'summary_large_image',
    title: 'İletişim | Ramses Dijital',
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
            name: 'Ramses Dijital İletişim',
            url: 'https://ramsesdigital.com/iletisim',
            description: 'Dijital pazarlama danışmanlığı için Ramses Dijital ile iletişime geçin.',
            mainEntity: {
              '@type': 'Organization',
              name: 'Ramses Dijital',
              telephone: '+905355601936',
              email: 'ramsesdigitalagency@gmail.com',
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
