import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic()

const SYSTEM_PROMPT = `Sen Ramses Digital'in AI asistanısın. Kullanıcının yazdığı mesajı analiz et ve en uygun hizmeti belirle.

Mevcut hizmetler:
- seo: SEO & İçerik Optimizasyonu (Google'da üst sıralar, organik trafik)
- ads: Google Ads & Performans Reklamları (anında görünürlük, ölçülebilir ROI)
- social: Sosyal Medya Yönetimi (Instagram, Facebook, LinkedIn, TikTok)
- web: Web Tasarımı & Geliştirme (modern, hızlı, dönüşüm odaklı site)
- email: E-Posta & Otomasyon Pazarlama (CRM, otomatik akışlar)
- analytics: Veri Analizi & Stratejik Danışmanlık (GA4, büyüme stratejisi)
- quote: Genel danışmanlık / birden fazla hizmet (teklif hesaplayıcıya yönlendir)

Şu JSON formatında yanıt ver, başka hiçbir şey yazma:
{
  "service": "<seo|ads|social|web|email|analytics|quote>",
  "title": "<hizmet başlığı>",
  "message": "<kullanıcının isteğine özel, samimi, 2 cümlelik Türkçe yanıt. 'Size özel' veya 'tam aradığınız' gibi kişisel bir dille yaz.>",
  "whatsappHint": "<WhatsApp mesajında ne söyleyeceğini özetle, 1 kısa cümle>"
}`

const serviceMap: Record<string, { icon: string; slug: string; color: string }> = {
  seo:       { icon: '🔍', slug: '/hizmetler', color: 'blue' },
  ads:       { icon: '📈', slug: '/hizmetler', color: 'violet' },
  social:    { icon: '📱', slug: '/hizmetler', color: 'pink' },
  web:       { icon: '💻', slug: '/hizmetler', color: 'emerald' },
  email:     { icon: '✉️', slug: '/hizmetler', color: 'orange' },
  analytics: { icon: '📊', slug: '/hizmetler', color: 'cyan' },
  quote:     { icon: '✨', slug: '/teklif-al', color: 'blue' },
}

// Model bazen açıklama metni veya ```json kod bloğuyla sarmalanmış yanıt döndürebiliyor —
// ayrıştırma bunu tolere etmeli, aksi halde tüm istek sessizce başarısız oluyordu.
function extractJson(raw: string): unknown {
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i)
  const candidate = fenced ? fenced[1] : raw
  const jsonMatch = candidate.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error('Invalid response format')
  return JSON.parse(jsonMatch[0])
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()
    if (!message || message.trim().length < 3) {
      return NextResponse.json({ error: 'Mesaj çok kısa' }, { status: 400 })
    }

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: message.trim() }],
    })

    const raw = response.content[0].type === 'text' ? response.content[0].text : ''
    const parsed = extractJson(raw) as { service?: string; title?: string; message?: string; whatsappHint?: string }
    const meta = serviceMap[parsed.service ?? ''] ?? serviceMap.quote

    return NextResponse.json({
      service: parsed.service ?? 'quote',
      title: parsed.title ?? 'Ücretsiz Danışmanlık',
      message: parsed.message ?? 'İhtiyacınızı en iyi bir görüşmede netleştirebiliriz — hemen WhatsApp\'tan yazın.',
      whatsappHint: parsed.whatsappHint ?? 'Web sitesinden yazıyorum, danışmanlık almak istiyorum.',
      icon: meta.icon,
      slug: meta.slug,
      color: meta.color,
    })
  } catch (err) {
    console.error('api/intent error:', err)
    return NextResponse.json({ error: 'Analiz yapılamadı' }, { status: 500 })
  }
}
