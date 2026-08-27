import { posts } from './posts'
import { projects } from './portfolio'

export interface SearchItem {
  title: string
  url: string
  category: string
}

const cities: Record<string, string> = {
  izmit: 'İzmit',
  kocaeli: 'Kocaeli',
  istanbul: 'İstanbul',
  ankara: 'Ankara',
  izmir: 'İzmir',
  bursa: 'Bursa',
  antalya: 'Antalya',
}

const cityServices: Record<string, string> = {
  'dijital-pazarlama': 'Dijital Pazarlama Ajansı',
  'google-ads': 'Google Ads Yönetimi',
  'reklam-ajansi': 'Reklam Ajansı',
  seo: 'SEO',
  'web-tasarim': 'Web Tasarım',
  'yazilim-ajansi': 'Yazılım Ajansı',
}

const cityPages: SearchItem[] = Object.entries(cities).flatMap(([citySlug, cityLabel]) =>
  Object.entries(cityServices).map(([serviceSlug, serviceLabel]) => ({
    title: `${cityLabel} ${serviceLabel}`,
    url: `/${citySlug}-${serviceSlug}`,
    category: 'Şehir Sayfası',
  }))
)

const servicePages: SearchItem[] = [
  { title: 'Hizmetler (genel bakış)', url: '/hizmetler', category: 'Hizmet' },
  { title: 'SEO, GEO & AEO Hizmeti', url: '/hizmetler/seo-kocaeli', category: 'Hizmet' },
  { title: 'Google Ads Yönetimi', url: '/hizmetler/google-ads-kocaeli', category: 'Hizmet' },
  { title: 'Web Tasarım', url: '/hizmetler/web-tasarim-kocaeli', category: 'Hizmet' },
  { title: 'Sosyal Medya İçerik Üretimi', url: '/hizmetler/sosyal-medya', category: 'Hizmet' },
  { title: 'E-Posta & Otomasyon Pazarlama', url: '/hizmetler/eposta-otomasyon', category: 'Hizmet' },
  { title: 'n8n İş Akışı Otomasyonu', url: '/hizmetler/n8n-otomasyon', category: 'Hizmet' },
  { title: 'Veri Analizi & Danışmanlık', url: '/hizmetler/veri-analizi', category: 'Hizmet' },
  { title: 'SEO Ajansı (Türkiye Geneli)', url: '/seo-ajansi', category: 'Hizmet' },
  { title: 'Google Ads Ajansı (Türkiye Geneli)', url: '/google-ads-ajansi', category: 'Hizmet' },
  { title: 'Web Tasarım Ajansı (Türkiye Geneli)', url: '/web-tasarim-ajansi', category: 'Hizmet' },
  { title: 'Yazılım Ajansı (Türkiye Geneli)', url: '/yazilim-ajansi', category: 'Hizmet' },
]

const corePages: SearchItem[] = [
  { title: 'Ana Sayfa', url: '/', category: 'Sayfa' },
  { title: 'Hakkımızda', url: '/hakkimizda', category: 'Sayfa' },
  { title: 'Portföy', url: '/portfolyo', category: 'Sayfa' },
  { title: 'Blog', url: '/blog', category: 'Sayfa' },
  { title: 'İletişim', url: '/iletisim', category: 'Sayfa' },
  { title: 'AI Teklif Hesaplayıcı', url: '/teklif-al', category: 'Sayfa' },
  { title: 'Ücretsiz SEO Analizi', url: '/seo-analiz', category: 'Sayfa' },
]

const blogPages: SearchItem[] = posts.map((p) => ({
  title: p.title,
  url: `/blog/${p.slug}`,
  category: 'Blog',
}))

const portfolioPages: SearchItem[] = projects.map((p) => ({
  title: p.name,
  url: `/portfolyo/${p.slug}`,
  category: 'Portföy',
}))

export const searchIndex: SearchItem[] = [
  ...corePages,
  ...servicePages,
  ...blogPages,
  ...portfolioPages,
  ...cityPages,
]

function normalize(s: string): string {
  return s
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
}

export function search(query: string, limit = 8): SearchItem[] {
  const q = normalize(query.trim())
  if (!q) return []
  const scored = searchIndex
    .map((item) => {
      const title = normalize(item.title)
      let score = 0
      if (title === q) score = 100
      else if (title.startsWith(q)) score = 80
      else if (title.includes(q)) score = 50
      else {
        const words = q.split(/\s+/)
        if (words.every((w) => title.includes(w))) score = 30
      }
      return { item, score }
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
  return scored.slice(0, limit).map((r) => r.item)
}
