import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portföy | Gerçek Sonuçlar ve Başarı Hikayeleri — Ramses Digital',
  description:
    'SEO\'da %340 trafik artışı, Google Ads\'de 4.2x ROAS, sosyal medyada 120K yeni takipçi. Farklı sektörlerden 200+ başarılı proje ve ölçülebilir sonuçlar.',
  openGraph: {
    title: 'Portföy | Ramses Digital Başarı Hikayeleri',
    description: 'E-ticaret, turizm, fintech ve daha fazlasında elde ettiğimiz somut dijital pazarlama sonuçları.',
    url: 'https://ramsesdigital.com/portfolyo',
  },
  alternates: { canonical: 'https://ramsesdigital.com/portfolyo' },
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
