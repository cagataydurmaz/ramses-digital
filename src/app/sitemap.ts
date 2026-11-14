import { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'
import { projects } from '@/lib/portfolio'
import { ilceler } from '@/lib/ilceler'

// Google lastmod'u yalnızca tutarlı ve doğrulanabilir biçimde doğruysa kullanır;
// priority/changefreq yok sayılır. Gerçek değişiklik tarihi bilinmeyen sayfalara
// lastmod yazmıyoruz (blog yazıları kendi tarihini taşır).
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ramsesdigital.com'

  const statics = [
    { path: '' },
    { path: '/en' },
    { path: '/hizmetler' },
    { path: '/sehirler' },
    { path: '/hizmetler/seo' },
    { path: '/hizmetler/google-ads' },
    { path: '/hizmetler/n8n-otomasyon' },
    { path: '/hizmetler/web-tasarim' },
    { path: '/hizmetler/eposta-otomasyon' },
    { path: '/hizmetler/veri-analizi' },
    { path: '/hizmetler/sosyal-medya' },
    { path: '/izmit-reklam-ajansi' },
    { path: '/izmit-dijital-pazarlama' },
    { path: '/kocaeli-dijital-pazarlama' },
    { path: '/kocaeli-reklam-ajansi' },
    { path: '/izmit-seo' },
    { path: '/izmit-web-tasarim' },
    { path: '/izmit-google-ads' },
    { path: '/izmit-yazilim-ajansi' },
    { path: '/kocaeli-seo' },
    { path: '/kocaeli-web-tasarim' },
    { path: '/kocaeli-google-ads' },
    { path: '/kocaeli-yazilim-ajansi' },
    { path: '/istanbul-seo' },
    { path: '/istanbul-web-tasarim' },
    { path: '/istanbul-google-ads' },
    { path: '/istanbul-dijital-pazarlama' },
    { path: '/istanbul-reklam-ajansi' },
    { path: '/istanbul-yazilim-ajansi' },
    { path: '/ankara-seo' },
    { path: '/ankara-web-tasarim' },
    { path: '/ankara-google-ads' },
    { path: '/ankara-dijital-pazarlama' },
    { path: '/ankara-reklam-ajansi' },
    { path: '/ankara-yazilim-ajansi' },
    { path: '/izmir-seo' },
    { path: '/izmir-web-tasarim' },
    { path: '/izmir-google-ads' },
    { path: '/izmir-dijital-pazarlama' },
    { path: '/izmir-reklam-ajansi' },
    { path: '/izmir-yazilim-ajansi' },
    { path: '/bursa-seo' },
    { path: '/bursa-web-tasarim' },
    { path: '/bursa-google-ads' },
    { path: '/bursa-dijital-pazarlama' },
    { path: '/bursa-reklam-ajansi' },
    { path: '/bursa-yazilim-ajansi' },
    { path: '/antalya-seo' },
    { path: '/antalya-web-tasarim' },
    { path: '/antalya-google-ads' },
    { path: '/antalya-dijital-pazarlama' },
    { path: '/antalya-reklam-ajansi' },
    { path: '/antalya-yazilim-ajansi' },
    { path: '/gaziantep-seo' },
    { path: '/gaziantep-web-tasarim' },
    { path: '/gaziantep-google-ads' },
    { path: '/gaziantep-dijital-pazarlama' },
    { path: '/gaziantep-reklam-ajansi' },
    { path: '/gaziantep-yazilim-ajansi' },
    { path: '/konya-seo' },
    { path: '/konya-web-tasarim' },
    { path: '/konya-google-ads' },
    { path: '/konya-dijital-pazarlama' },
    { path: '/konya-reklam-ajansi' },
    { path: '/konya-yazilim-ajansi' },
    { path: '/mersin-seo' },
    { path: '/mersin-web-tasarim' },
    { path: '/mersin-google-ads' },
    { path: '/mersin-dijital-pazarlama' },
    { path: '/mersin-reklam-ajansi' },
    { path: '/mersin-yazilim-ajansi' },
    { path: '/kayseri-seo' },
    { path: '/kayseri-web-tasarim' },
    { path: '/kayseri-google-ads' },
    { path: '/kayseri-dijital-pazarlama' },
    { path: '/kayseri-reklam-ajansi' },
    { path: '/kayseri-yazilim-ajansi' },
    { path: '/eskisehir-seo' },
    { path: '/eskisehir-web-tasarim' },
    { path: '/eskisehir-google-ads' },
    { path: '/eskisehir-dijital-pazarlama' },
    { path: '/eskisehir-reklam-ajansi' },
    { path: '/eskisehir-yazilim-ajansi' },
    { path: '/seo-ajansi' },
    { path: '/geo-ajansi' },
    { path: '/aeo-hizmeti' },
    { path: '/google-ads-ajansi' },
    { path: '/web-tasarim-ajansi' },
    { path: '/yazilim-ajansi' },
    { path: '/hakkimizda' },
    { path: '/portfolyo' },
    { path: '/blog' },
    { path: '/iletisim' },
    { path: '/teklif-al' },
    { path: '/seo-analiz' },
    { path: '/gizlilik-politikasi' },
    { path: '/cerez-politikasi' },
  ].map(({ path }) => ({
    url: base + path,
  }))

  const ilcePages = [
    { url: `${base}/ilceler` },
    ...ilceler.map(i => ({
      url: `${base}/ilceler/${i.slug}`,
    })),
  ]

  const blogPages = posts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }))

  const caseStudyPages = projects.map(p => ({
    url: `${base}/portfolyo/${p.slug}`,
  }))

  return [...statics, ...ilcePages, ...blogPages, ...caseStudyPages]
}
