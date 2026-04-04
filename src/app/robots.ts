import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      { userAgent: '*', disallow: '/', host: 'ramsesdigital.vercel.app' },
    ],
    sitemap: 'https://ramsesdigital.com/sitemap.xml',
  }
}
