import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { pricing } from '@/lib/pricing'

const client = new Anthropic()

// teklif-al hesaplayıcısıyla aynı kaynak veri (src/lib/pricing.ts) — burada da
// tek doğru fiyat kümesi bu olsun diye import ediyoruz, ayrı bir kopya tutmuyoruz.
const PRICING_BLOCK = Object.entries(pricing)
  .map(([service, sizes]) => {
    const lines = (['kucuk', 'orta', 'buyuk'] as const).map((size) => {
      const r = sizes[size]
      const label = size === 'kucuk' ? 'Küçük işletme' : size === 'orta' ? 'Orta işletme' : 'Büyük/Kurumsal'
      const noteText = r.note ? ` (${r.note})` : ''
      return `  - ${label}: ${r.min.toLocaleString('tr-TR')}-${r.max.toLocaleString('tr-TR')}₺ ${r.unit}${noteText}`
    })
    return `${service}:\n${lines.join('\n')}`
  })
  .join('\n')

const SYSTEM_PROMPT = `Sen Ramses Digital'in AI asistanısın. Kullanıcının yazdığı mesajı analiz et ve en uygun hizmeti belirle.

Mevcut hizmetler:
- seo: SEO & İçerik Optimizasyonu (Google'da üst sıralar, organik trafik)
- ads: Google Ads & Performans Reklamları (anında görünürlük, ölçülebilir ROI)
- social: Sosyal Medya Yönetimi (Instagram, Facebook, LinkedIn, TikTok)
- web: Web Tasarımı & Geliştirme (modern, hızlı, dönüşüm odaklı site)
- email: E-Posta & Otomasyon Pazarlama (CRM, otomatik akışlar)
- analytics: Veri Analizi & Stratejik Danışmanlık (GA4, büyüme stratejisi)
- quote: Genel danışmanlık / birden fazla hizmet (teklif hesaplayıcıya yönlendir)

Güncel fiyat aralıklarımız (işletme büyüklüğüne göre, KDV hariç):
${PRICING_BLOCK}

Fiyat/ücret/ne kadar/bütçe/teklif gibi bir şey soruluyorsa:
- Kullanıcının mesajından işletme büyüklüğü belli değilse "Orta işletme" aralığını referans al ve bunun ortalama bir tahmin olduğunu, kesin teklifin ihtiyaca göre değişeceğini belirt.
- Yukarıdaki tabloda olmayan bir hizmet (email, analytics, quote) sorulursa kesin rakam uydurma; "kapsam projeye göre değiştiği için özel teklif" de.
- Google Ads özelinde MUTLAKA şunu netleştir: bizim aldığımız sabit bir yönetim ücreti vardır, reklam bütçesinin kendisi ise bize değil doğrudan Google'a ödenir; bizim payımız (%15) bu bütçenin üzerine eklenen ayrı bir yönetim ücretidir. Kim kime ne ödüyor karışmasın, açıkça yaz.
- Verdiğin rakam sadece örnek/ortalama olduğu ve işletme büyüklüğüne göre değişebileceği için, mesajın SONUNA mutlaka şunu ekle: kullanıcıyı, kendi işletme büyüklüğüne göre birebir doğru aralığı gösteren "AI Teklif Hesaplayıcı"ya (sayfanın hemen altında) yönlendir. Bunu "tam size özel rakamı görmek için aşağıdaki AI Teklif Hesaplayıcı'yı kullanın" gibi net, fark edilir bir cümleyle yap — üstünkörü geçme.

Şu JSON formatında yanıt ver, başka hiçbir şey yazma:
{
  "service": "<seo|ads|social|web|email|analytics|quote>",
  "title": "<hizmet başlığı>",
  "message": "<kullanıcının isteğine özel, samimi Türkçe yanıt. Fiyat sorulmadıysa 2 cümle. Fiyat sorulduysa 3 cümle: biri ihtiyacı özetlesin, biri güncel fiyat aralığını versin (Google Ads'te ödeme akışını netleştirerek), biri de AI Teklif Hesaplayıcı'ya yönlendirsin. 'Size özel' veya 'tam aradığınız' gibi kişisel bir dille yaz.>",
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
