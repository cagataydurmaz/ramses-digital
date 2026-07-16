import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portföy | Gerçek Vaka Çalışmaları — Ramses Dijital Reklam Ajansı',
  description:
    'Sağlık, hukuk, e-ticaret ve yapay zeka platformlarında tasarladığımız ve büyüttüğümüz gerçek müşteri projeleri. Canlı siteler, doğrulanabilir vaka çalışmaları.',
  openGraph: {
    title: 'Portföy | Ramses Digital Vaka Çalışmaları',
    description: 'Sağlık, hukuk, e-ticaret ve yapay zeka platformlarında elde ettiğimiz somut sonuçlar.',
    url: 'https://ramsesdigital.com/portfolyo',
  },
  alternates: { canonical: 'https://ramsesdigital.com/portfolyo' },
  twitter: {
    card: 'summary_large_image',
    title: 'Portföy | Ramses Digital Vaka Çalışmaları',
    description: 'Sağlık, hukuk, e-ticaret ve yapay zeka platformlarında somut dijital pazarlama sonuçları.',
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
