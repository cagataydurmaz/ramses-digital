import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Teklif Hesaplayıcı | Dijital Pazarlama Fiyatları — Ramses Digital Kocaeli',
  description:
    'Dijital pazarlama paket fiyatını anında öğrenin. SEO, Google Ads, sosyal medya ve web tasarımı için AI destekli ücretsiz teklif hesaplayıcı.',
  openGraph: {
    title: 'Ücretsiz Dijital Pazarlama Teklifi | Ramses Digital',
    description: 'Bütçenize ve hedeflerinize göre kişiselleştirilmiş dijital pazarlama paketi oluşturun.',
    url: 'https://ramsesdigital.com/teklif-al',
  },
  alternates: { canonical: 'https://ramsesdigital.com/teklif-al' },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Teklif Hesaplayıcı | Ramses Digital',
    description: 'Bütçenize ve hedeflerinize göre kişiselleştirilmiş dijital pazarlama paketi.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

export default function TeklifAlLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Ramses Digital AI Teklif Hesaplayıcı',
            url: 'https://ramsesdigital.com/teklif-al',
            description: 'Dijital pazarlama hizmetleri için AI destekli ücretsiz teklif hesaplama aracı.',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'TRY',
              description: 'Ücretsiz teklif hesaplama',
            },
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
