import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda | Ramses Digital — Mühendislik Temelli Dijital Ajans',
  description:
    '2019\'dan bu yana İstanbul merkezli, iki mühendis kurucu tarafından yönetilen Ramses Digital\'in hikayesi, değerleri ve uzman ekibini tanıyın. 200+ başarılı proje.',
  openGraph: {
    title: 'Hakkımızda | Ramses Digital',
    description: 'Mühendislik disiplini ile dijital pazarlamayı birleştiren İstanbul ajansı. 5+ yıl deneyim, 200+ proje.',
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
              '2019\'dan bu yana İstanbul merkezli dijital pazarlama ajansı. İki mühendis kurucu tarafından yönetilen, veri odaklı ve sonuç garantili ekip.',
            mainEntity: {
              '@type': 'Organization',
              name: 'Ramses Digital',
              url: 'https://ramsesdigital.com',
              foundingDate: '2019',
              foundingLocation: 'İstanbul, Türkiye',
              numberOfEmployees: { '@type': 'QuantitativeValue', value: 6 },
              member: [
                {
                  '@type': 'Person',
                  name: 'Çağatay Durmaz',
                  jobTitle: 'Co-Founder & CEO',
                  description: 'Elektrik-Elektronik Mühendisi. Dijital pazarlama stratejisi ve performans reklamcılığı uzmanı.',
                },
                {
                  '@type': 'Person',
                  name: 'Atalay Durmaz',
                  jobTitle: 'Co-Founder & CTO',
                  description: 'Yazılım Mühendisi ve AI uzmanı. Teknoloji altyapısı ve otomasyon sistemleri.',
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}
