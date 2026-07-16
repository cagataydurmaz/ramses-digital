import { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'
import { projects } from '@/lib/portfolio'

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
    { path: '/izmit-reklam-ajansi',        priority: 0.95, freq: 'monthly' },
    { path: '/kocaeli-dijital-pazarlama',  priority: 0.95, freq: 'monthly' },
    { path: '/izmit-seo',                  priority: 0.95, freq: 'monthly' },
    { path: '/izmit-web-tasarim',          priority: 0.95, freq: 'monthly' },
    { path: '/izmit-google-ads',           priority: 0.95, freq: 'monthly' },
    { path: '/izmit-yazilim-ajansi',       priority: 0.95, freq: 'monthly' },
    { path: '/kocaeli-seo',               priority: 0.95, freq: 'monthly' },
    { path: '/kocaeli-web-tasarim',       priority: 0.95, freq: 'monthly' },
    { path: '/kocaeli-google-ads',        priority: 0.95, freq: 'monthly' },
    { path: '/kocaeli-yazilim-ajansi',    priority: 0.95, freq: 'monthly' },
    { path: '/seo-ajansi',                priority: 0.95, freq: 'monthly' },
    { path: '/google-ads-ajansi',         priority: 0.95, freq: 'monthly' },
    { path: '/web-tasarim-ajansi',        priority: 0.95, freq: 'monthly' },
    { path: '/yazilim-ajansi',            priority: 0.95, freq: 'monthly' },
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

  const caseStudyPages = projects.map(p => ({
    url: `${base}/portfolyo/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...statics, ...blogPages, ...caseStudyPages]
}
