import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ücretsiz SEO Analizi – Sitenizi Anında Test Edin | Ramses',
  description:
    'URL\'nizi girin, saniyeler içinde kapsamlı SEO raporunuzu alın. Hız skoru, mobil uyum ve teknik SEO analizi — tamamen ücretsiz, AI destekli.',
  openGraph: {
    title: 'Ücretsiz SEO Analiz Aracı | Ramses Dijital',
    description: 'Web sitenizin SEO puanını, hız skorunu ve teknik sorunlarını ücretsiz öğrenin.',
    url: 'https://ramsesdigital.com/seo-analiz',
  },
  alternates: { canonical: 'https://ramsesdigital.com/seo-analiz' },
  twitter: {
    card: 'summary_large_image',
    title: 'Ücretsiz SEO Analiz Aracı | Ramses Dijital',
    description: 'Web sitenizin SEO puanını, hız skorunu ve teknik sorunlarını ücretsiz öğrenin.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

export default function SeoAnalizLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Ramses Dijital Ücretsiz SEO Analiz Aracı',
            url: 'https://ramsesdigital.com/seo-analiz',
            description: 'Web sitenizin SEO performansını anında ölçün. Teknik SEO, hız ve mobil uyum raporu.',
            applicationCategory: 'SEOApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'TRY',
              description: 'Ücretsiz SEO analizi',
            },
            featureList: [
              'Teknik SEO analizi',
              'Sayfa hız skoru',
              'Mobil uyum kontrolü',
              'Meta tag analizi',
              'Backlink değerlendirmesi',
            ],
            provider: {
              '@type': 'Organization',
              name: 'Ramses Dijital',
              url: 'https://ramsesdigital.com',
            },
          }),
        }}
      />
    </>
  )
}
