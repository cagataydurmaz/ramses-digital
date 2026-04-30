import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Dijital Pazarlama & SEO Rehberleri — Ramses Digital Kocaeli',
  description:
    'SEO, Google Ads, sosyal medya ve yapay zeka üzerine güncel rehberler ve uzman içerikleri. Dijital pazarlama dünyasından en iyi kaynaklar.',
  openGraph: {
    title: 'Dijital Pazarlama Blogu | Ramses Digital',
    description: 'SEO, Google Ads ve sosyal medya üzerine uzman içerikleri. Markanızı büyütmek için ücretsiz kaynaklar.',
    url: 'https://ramsesdigital.com/blog',
    type: 'website',
  },
  alternates: { canonical: 'https://ramsesdigital.com/blog' },
  twitter: {
    card: 'summary_large_image',
    title: 'Dijital Pazarlama Blogu | Ramses Digital',
    description: 'SEO, Google Ads ve sosyal medya üzerine uzman içerikleri.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Ramses Digital Blog',
            url: 'https://ramsesdigital.com/blog',
            description: 'Dijital pazarlama, SEO, Google Ads ve sosyal medya üzerine uzman içerikleri.',
            publisher: {
              '@type': 'Organization',
              name: 'Ramses Digital',
              url: 'https://ramsesdigital.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://ramsesdigital.com/logo.png',
              },
            },
            inLanguage: 'tr-TR',
          }),
        }}
      />
    </>
  )
}
