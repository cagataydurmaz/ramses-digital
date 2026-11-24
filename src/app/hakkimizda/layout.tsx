import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda | Ramses Digital — Mühendislik Temelli Dijital Ajans',
  description:
    '2019\'dan bu yana, bugün İzmit merkezli, kurucusu Çağatay Durmaz tarafından yönetilen Ramses Dijital\'in hikâyesi ve değerleri. 50+ tamamlanan proje, 5+ yıl deneyim.',
  openGraph: {
    title: 'Hakkımızda | Ramses Digital',
    description: 'Mühendislik disiplini ile dijital pazarlamayı birleştiren İzmit merkezli ajans. 5+ yıl deneyim, 50+ proje.',
    url: 'https://ramsesdigital.com/hakkimizda',
  },
  alternates: { canonical: 'https://ramsesdigital.com/hakkimizda' },
}

export default function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'Hakkımızda — Ramses Digital',
            url: 'https://ramsesdigital.com/hakkimizda',
            description:
              '2019\'dan bu yana dijital pazarlama ajansı; bugün İzmit merkezli. Mühendis kökenli kurucu Çağatay Durmaz tarafından yönetilen, veri odaklı ve şeffaf raporlayan ajans.',
            mainEntity: {
              '@type': 'Organization',
              name: 'Ramses Digital',
              url: 'https://ramsesdigital.com',
              foundingDate: '2019',
              foundingLocation: 'İstanbul, Türkiye',
              founder: {
                '@type': 'Person',
                name: 'Çağatay Durmaz',
                jobTitle: 'Kurucu',
                description: 'Elektrik-elektronik mühendisi. SEO, Google Ads, web tasarım ve otomasyon projeleri yürütüyor.',
                image: 'https://ramsesdigital.com/ekip/cagatay-durmaz.webp',
                url: 'https://ramsesdigital.com/hakkimizda',
              },
            },
          }),
        }}
      />
    </>
  )
}
