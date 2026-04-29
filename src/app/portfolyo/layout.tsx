import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portföy | Gerçek Başarı Hikayeleri — Ramses Digital Kocaeli & İstanbul',
  description:
    'SEO\'da %340 trafik artışı, Google Ads\'de 4.2x ROAS, 120K yeni takipçi. Kocaeli ve İstanbul\'daki işletmeler için 100+ başarılı dijital pazarlama projesi.',
  openGraph: {
    title: 'Portföy | Ramses Digital Başarı Hikayeleri',
    description: 'E-ticaret, turizm, fintech ve daha fazlasında elde ettiğimiz somut dijital pazarlama sonuçları.',
    url: 'https://ramsesdigital.com/portfolyo',
  },
  alternates: { canonical: 'https://ramsesdigital.com/portfolyo' },
  twitter: {
    card: 'summary_large_image',
    title: 'Portföy | Ramses Digital Başarı Hikayeleri',
    description: 'E-ticaret, turizm, fintech ve daha fazlasında somut dijital pazarlama sonuçları.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

export default function PortfoyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Ramses Digital Portföy',
            description: 'Dijital pazarlama projelerinde elde edilen gerçek sonuçlar ve başarı hikayeleri.',
            url: 'https://ramsesdigital.com/portfolyo',
            provider: {
              '@type': 'Organization',
              name: 'Ramses Digital',
              url: 'https://ramsesdigital.com',
            },
          }),
        }}
      />
    </>
  )
}
