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
    { path: '/izmit-dijital-pazarlama',    priority: 0.95, freq: 'monthly' },
    { path: '/kocaeli-dijital-pazarlama',  priority: 0.95, freq: 'monthly' },
    { path: '/kocaeli-reklam-ajansi',      priority: 0.95, freq: 'monthly' },
    { path: '/izmit-seo',                  priority: 0.95, freq: 'monthly' },
    { path: '/izmit-web-tasarim',          priority: 0.95, freq: 'monthly' },
    { path: '/izmit-google-ads',           priority: 0.95, freq: 'monthly' },
    { path: '/izmit-yazilim-ajansi',       priority: 0.95, freq: 'monthly' },
    { path: '/kocaeli-seo',               priority: 0.95, freq: 'monthly' },
    { path: '/kocaeli-web-tasarim',       priority: 0.95, freq: 'monthly' },
    { path: '/kocaeli-google-ads',        priority: 0.95, freq: 'monthly' },
    { path: '/kocaeli-yazilim-ajansi',    priority: 0.95, freq: 'monthly' },
    { path: '/istanbul-seo',               priority: 0.95, freq: 'monthly' },
    { path: '/istanbul-web-tasarim',       priority: 0.95, freq: 'monthly' },
    { path: '/istanbul-google-ads',        priority: 0.95, freq: 'monthly' },
    { path: '/istanbul-dijital-pazarlama', priority: 0.95, freq: 'monthly' },
    { path: '/istanbul-reklam-ajansi',     priority: 0.95, freq: 'monthly' },
    { path: '/istanbul-yazilim-ajansi',    priority: 0.95, freq: 'monthly' },
    { path: '/ankara-seo',                 priority: 0.95, freq: 'monthly' },
    { path: '/ankara-web-tasarim',         priority: 0.95, freq: 'monthly' },
    { path: '/ankara-google-ads',          priority: 0.95, freq: 'monthly' },
    { path: '/ankara-dijital-pazarlama',   priority: 0.95, freq: 'monthly' },
    { path: '/ankara-reklam-ajansi',       priority: 0.95, freq: 'monthly' },
    { path: '/ankara-yazilim-ajansi',      priority: 0.95, freq: 'monthly' },
    { path: '/izmir-seo',                  priority: 0.95, freq: 'monthly' },
    { path: '/izmir-web-tasarim',          priority: 0.95, freq: 'monthly' },
    { path: '/izmir-google-ads',           priority: 0.95, freq: 'monthly' },
    { path: '/izmir-dijital-pazarlama',    priority: 0.95, freq: 'monthly' },
    { path: '/izmir-reklam-ajansi',        priority: 0.95, freq: 'monthly' },
    { path: '/izmir-yazilim-ajansi',       priority: 0.95, freq: 'monthly' },
    { path: '/bursa-seo',                  priority: 0.95, freq: 'monthly' },
    { path: '/bursa-web-tasarim',          priority: 0.95, freq: 'monthly' },
    { path: '/bursa-google-ads',           priority: 0.95, freq: 'monthly' },
    { path: '/bursa-dijital-pazarlama',    priority: 0.95, freq: 'monthly' },
    { path: '/bursa-reklam-ajansi',        priority: 0.95, freq: 'monthly' },
    { path: '/bursa-yazilim-ajansi',       priority: 0.95, freq: 'monthly' },
    { path: '/antalya-seo',                priority: 0.95, freq: 'monthly' },
    { path: '/antalya-web-tasarim',        priority: 0.95, freq: 'monthly' },
    { path: '/antalya-google-ads',         priority: 0.95, freq: 'monthly' },
    { path: '/antalya-dijital-pazarlama',  priority: 0.95, freq: 'monthly' },
    { path: '/antalya-reklam-ajansi',      priority: 0.95, freq: 'monthly' },
    { path: '/antalya-yazilim-ajansi',     priority: 0.95, freq: 'monthly' },
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
