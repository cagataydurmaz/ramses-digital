import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hizmetler | SEO, Google Ads, Sosyal Medya & Web Tasarımı — Ramses Digital',
  description:
    'SEO, Google Ads, sosyal medya yönetimi, web tasarımı, e-posta otomasyonu ve veri analizinde uzman dijital pazarlama hizmetleri. Ölçülebilir sonuçlar, gerçek büyüme.',
  openGraph: {
    title: 'Dijital Pazarlama Hizmetleri | Ramses Digital',
    description: 'SEO\'dan Google Ads\'e, sosyal medyadan web tasarımına — tüm dijital pazarlama çözümleri tek çatı altında.',
    url: 'https://ramsesdigital.com/hizmetler',
  },
  alternates: { canonical: 'https://ramsesdigital.com/hizmetler' },
}

export default function HizmetlerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Ramses Digital Hizmetleri',
            url: 'https://ramsesdigital.com/hizmetler',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@type': 'Service',
                  name: 'SEO & İçerik Optimizasyonu',
                  description: 'Teknik SEO, anahtar kelime stratejisi ve içerik optimizasyonuyla Google\'da üst sıralara çıkın.',
                  provider: { '@type': 'Organization', name: 'Ramses Digital' },
                  areaServed: 'TR',
                  url: 'https://ramsesdigital.com/hizmetler',
                },
              },
              {
                '@type': 'ListItem',
                position: 2,
                item: {
                  '@type': 'Service',
                  name: 'Google Ads & Performans Reklamcılığı',
                  description: 'Search, YouTube, Display ve Remarketing kampanyalarıyla ROI odaklı büyüme.',
                  provider: { '@type': 'Organization', name: 'Ramses Digital' },
                  areaServed: 'TR',
                },
              },
              {
                '@type': 'ListItem',
                position: 3,
                item: {
                  '@type': 'Service',
                  name: 'Sosyal Medya Yönetimi',
                  description: 'Instagram, LinkedIn, TikTok ve Twitter\'da organik büyüme ve içerik stratejisi.',
                  provider: { '@type': 'Organization', name: 'Ramses Digital' },
                  areaServed: 'TR',
                },
              },
              {
                '@type': 'ListItem',
                position: 4,
                item: {
                  '@type': 'Service',
                  name: 'Web Tasarımı & Geliştirme',
                  description: 'Hızlı, dönüşüm odaklı ve modern web siteleri. Next.js ve WordPress uzmanlığı.',
                  provider: { '@type': 'Organization', name: 'Ramses Digital' },
                  areaServed: 'TR',
                },
              },
              {
                '@type': 'ListItem',
                position: 5,
                item: {
                  '@type': 'Service',
                  name: 'E-Posta & Otomasyon',
                  description: 'CRM entegrasyonu, drip kampanyalar ve A/B testlerle müşteri sadakati artırın.',
                  provider: { '@type': 'Organization', name: 'Ramses Digital' },
                  areaServed: 'TR',
                },
              },
              {
                '@type': 'ListItem',
                position: 6,
                item: {
                  '@type': 'Service',
                  name: 'Veri Analizi & Danışmanlık',
                  description: 'GA4, Data Studio ve Hotjar ile veriye dayalı kararlar alın.',
                  provider: { '@type': 'Organization', name: 'Ramses Digital' },
                  areaServed: 'TR',
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
