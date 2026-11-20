import { readFileSync } from 'fs'
import { join } from 'path'
import { posts } from '@/lib/posts'
import { projects } from '@/lib/portfolio'
import { ilSeo } from '@/lib/ilSeo'

// llms.txt — yapay zekâ araçları (ChatGPT, Claude, Perplexity vb.) için site özeti.
// Sabit kısım src/content/llms-temel.md'de; blog yazıları ve portföy her derlemede
// otomatik eklenir, böylece yeni içerik eklendikçe dosya kendiliğinden güncel kalır.
export const dynamic = 'force-static'

const SITE = 'https://ramsesdigital.com'

export function GET() {
  const temel = readFileSync(join(process.cwd(), 'src/content/llms-temel.md'), 'utf8').trimEnd()

  const portfoy = projects
    .map((p) => `- [${p.name}](${SITE}/portfolyo/${p.slug}): ${p.industry} — ${p.category}`)
    .join('\n')

  const iller = ilSeo
    .map((i) => `- [${i.ad} SEO](${SITE}/${i.slug}-seo): ${i.ozet}`)
    .join('\n')

  const blog = [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((p) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.excerpt.replace(/\s+/g, ' ').trim()}`)
    .join('\n')

  // "## Optional" bölümü llms.txt kuralına göre en sonda kalmalı; yeni bölümler onun önüne girer.
  const [ana, opsiyonel = ''] = temel.split('\n## Optional')
  const metin = `${ana.trimEnd()}

## Diğer İl ve İlçeler (uzaktan hizmet)

${iller}

## Portföy (canlı müşteri projeleri)

${portfoy}

## Blog Yazıları (en yeniden eskiye)

${blog}
${opsiyonel ? `\n## Optional${opsiyonel}\n` : ''}`
  return new Response(metin, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  })
}
