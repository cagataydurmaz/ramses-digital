import { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ramsesdigital.com'
  const statics = ['', '/hizmetler', '/hakkimizda', '/blog', '/iletisim', '/portfolyo', '/teklif-al', '/seo-analiz'].map((path, i) => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: i === 0 ? 1 : 0.8,
  }))
  const blogPages = posts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  return [...statics, ...blogPages]
}
