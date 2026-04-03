import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Dijital Pazarlama Rehberleri ve SEO İpuçları — Ramses Digital',
  description:
    'SEO, Google Ads, sosyal medya ve yapay zeka ile dijital pazarlama üzerine güncel rehberler, vaka analizleri ve uzman içerikleri. Ücretsiz okuyun.',
  openGraph: {
    title: 'Dijital Pazarlama Blogu | Ramses Digital',
    description: 'SEO, Google Ads ve sosyal medya üzerine uzman içerikleri. Markanızı büyütmek için ücretsiz kaynaklar.',
    url: 'https://ramsesdigital.com/blog',
    type: 'website',
  },
  alternates: { canonical: 'https://ramsesdigital.com/blog' },
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
                url: 'https://ramsesdigital.com/favicon.ico',
              },
            },
            inLanguage: 'tr-TR',
          }),
        }}
      />
    </>
  )
}
