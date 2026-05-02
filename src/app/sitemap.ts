import { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ramsesdigital.com'

  const statics = [
    { path: '',             priority: 1.0, freq: 'weekly'  },
    { path: '/hizmetler',  priority: 0.9, freq: 'monthly' },
    { path: '/hizmetler/seo-kocaeli',         priority: 0.95, freq: 'monthly' },
    { path: '/hizmetler/google-ads-kocaeli',  priority: 0.95, freq: 'monthly' },
    { path: '/hizmetler/n8n-otomasyon',        priority: 0.9,  freq: 'monthly' },
    { path: '/hizmetler/web-tasarim-kocaeli', priority: 0.9,  freq: 'monthly' },
    { path: '/hizmetler/eposta-otomasyon',    priority: 0.9,  freq: 'monthly' },
    { path: '/hizmetler/veri-analizi',        priority: 0.9,  freq: 'monthly' },
    { path: '/hakkimizda', priority: 0.8, freq: 'monthly' },
    { path: '/portfolyo',  priority: 0.8, freq: 'monthly' },
    { path: '/blog',       priority: 0.9, freq: 'weekly'  },
    { path: '/iletisim',   priority: 0.8, freq: 'monthly' },
    { path: '/teklif-al',  priority: 0.7, freq: 'monthly' },
    { path: '/seo-analiz', priority: 0.7, freq: 'monthly' },
  ].map(({ path, priority, freq }) => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: freq as 'weekly' | 'monthly',
    priority,
  }))

  const blogPages = posts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...statics, ...blogPages]
}
