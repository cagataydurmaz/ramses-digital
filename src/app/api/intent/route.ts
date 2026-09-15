import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { pricing } from '@/lib/pricing'

const client = new Anthropic()

// teklif-al hesaplayıcısıyla aynı kaynak veri (src/lib/pricing.ts) — burada da
// tek doğru fiyat kümesi bu olsun diye import ediyoruz, ayrı bir kopya tutmuyoruz.
function buildPricingBlock(lang: 'tr' | 'en'): string {
  const sizeLabels = lang === 'en'
    ? { kucuk: 'Small business', orta: 'Medium business', buyuk: 'Large / Enterprise' }
    : { kucuk: 'Küçük işletme', orta: 'Orta işletme', buyuk: 'Büyük/Kurumsal' }
  const locale = lang === 'en' ? 'en-US' : 'tr-TR'
  return Object.entries(pricing)
    .map(([service, sizes]) => {
      const lines = (['kucuk', 'orta', 'buyuk'] as const).map((size) => {
        const r = sizes[size]
        const noteText = r.note ? ` (${r.note})` : ''
        const unit = lang === 'en' ? (r.unit === 'aylık' ? 'monthly' : 'one-time') : r.unit
        return `  - ${sizeLabels[size]}: ${r.min.toLocaleString(locale)}-${r.max.toLocaleString(locale)}₺ ${unit}${noteText}`
      })
      return `${service}:\n${lines.join('\n')}`
    })
    .join('\n')
}

function buildSystemPrompt(lang: 'tr' | 'en'): string {
  if (lang === 'en') {
    return `You are Ramses Digital's AI assistant. Analyze the user's message and determine the most relevant service.

Available services:
- seo: SEO & Content Optimization (top Google rankings, organic traffic)
- ads: Google Ads & Performance Advertising (instant visibility, measurable ROI)
- social: Social Media Management (Instagram, Facebook, LinkedIn, TikTok)
- web: Web Design & Development (modern, fast, conversion-focused site)
- email: Email & Marketing Automation (CRM, automated flows)
- analytics: Data Analytics & Strategic Consulting (GA4, growth strategy)
- quote: General consulting / multiple services (point to the quote calculator)

Our current price ranges (by business size, excluding VAT):
${buildPricingBlock('en')}

If the message asks about price/cost/budget/quote:
- If business size isn't clear from the message, reference the "Medium business" range and state this is an average estimate — the exact quote depends on the specific need.
- If a service without a table entry is asked about (email, analytics, quote), don't invent a number; say "scope varies by project, so this needs a custom quote."
- For Google Ads specifically, you MUST clarify: we charge a fixed management fee, and the ad budget itself is paid directly to Google, not to us; our share (15%) is a separate management fee added on top of that budget. Be explicit about who pays whom.
- SEO is normally a monthly retainer ("SEO" in the table) because it's ongoing work — rankings need continuous maintenance. If the user specifically asks for a ONE-TIME payment instead of monthly for SEO/AEO/GEO, offer "SEO Başlangıç Paketi" (SEO Starter Package) instead — it's a one-time technical audit + keyword strategy + on-page setup, and does NOT include ongoing monthly tracking. Say this clearly: it's a different, narrower scope than the monthly service, not a substitute that gets the same ongoing results.
- Since any number you give is only an example/average that varies by business size, ALWAYS end the message by pointing the user to the "AI Quote Calculator" (right below on the page) for their exact, size-matched range. Do this with a clear, noticeable sentence like "use the AI Quote Calculator below to see your exact number" — don't just mention it in passing.

Respond ONLY in this JSON format, nothing else:
{
  "service": "<seo|ads|social|web|email|analytics|quote>",
  "title": "<service title, in English>",
  "message": "<a warm, personal English reply tailored to the user's request. If no price was asked, 2 sentences. If a price was asked, 3 sentences: one summarizing the need, one giving the current price range (clarifying the Google Ads payment flow if relevant), one pointing to the AI Quote Calculator. Write in a personal tone like 'tailored for you'.>",
  "whatsappHint": "<a 1-sentence summary of what to say in the WhatsApp message, in English>"
}`
  }

  return `Sen Ramses Digital'in AI asistanısın. Kullanıcının yazdığı mesajı analiz et ve en uygun hizmeti belirle.

Mevcut hizmetler:
- seo: SEO & İçerik Optimizasyonu (Google'da üst sıralar, organik trafik)
- ads: Google Ads & Performans Reklamları (anında görünürlük, ölçülebilir ROI)
- social: Sosyal Medya Yönetimi (Instagram, Facebook, LinkedIn, TikTok)
- web: Web Tasarımı & Geliştirme (modern, hızlı, dönüşüm odaklı site)
- email: E-Posta & Otomasyon Pazarlama (CRM, otomatik akışlar)
- analytics: Veri Analizi & Stratejik Danışmanlık (GA4, büyüme stratejisi)
- quote: Genel danışmanlık / birden fazla hizmet (teklif hesaplayıcıya yönlendir)

Güncel fiyat aralıklarımız (işletme büyüklüğüne göre, KDV hariç):
${buildPricingBlock('tr')}

Fiyat/ücret/ne kadar/bütçe/teklif gibi bir şey soruluyorsa:
- Kullanıcının mesajından işletme büyüklüğü belli değilse "Orta işletme" aralığını referans al ve bunun ortalama bir tahmin olduğunu, kesin teklifin ihtiyaca göre değişeceğini belirt.
- Yukarıdaki tabloda olmayan bir hizmet (email, analytics, quote) sorulursa kesin rakam uydurma; "kapsam projeye göre değiştiği için özel teklif" de.
- Google Ads özelinde MUTLAKA şunu netleştir: bizim aldığımız sabit bir yönetim ücreti vardır, reklam bütçesinin kendisi ise bize değil doğrudan Google'a ödenir; bizim payımız (%15) bu bütçenin üzerine eklenen ayrı bir yönetim ücretidir. Kim kime ne ödüyor karışmasın, açıkça yaz.
- SEO normalde aylık bir hizmettir (tablodaki "SEO") çünkü sürekli emek gerektirir — sıralamalar sürekli bakım ister. Kullanıcı SEO/AEO/GEO için özellikle TEK SEFERLİK ödeme isterse, aylık yerine "SEO Başlangıç Paketi"ni öner — bu tek seferlik bir teknik denetim + anahtar kelime stratejisi + kurulumdur, devam eden aylık takibi İÇERMEZ. Bunu net söyle: aylık hizmetin daha dar kapsamlı, farklı bir alternatifi — aynı sürekli sonucu vermeyen bir ikame değil.
- Verdiğin rakam sadece örnek/ortalama olduğu ve işletme büyüklüğüne göre değişebileceği için, mesajın SONUNA mutlaka şunu ekle: kullanıcıyı, kendi işletme büyüklüğüne göre birebir doğru aralığı gösteren "AI Teklif Hesaplayıcı"ya (sayfanın hemen altında) yönlendir. Bunu "tam size özel rakamı görmek için aşağıdaki AI Teklif Hesaplayıcı'yı kullanın" gibi net, fark edilir bir cümleyle yap — üstünkörü geçme.

Şu JSON formatında yanıt ver, başka hiçbir şey yazma:
{
  "service": "<seo|ads|social|web|email|analytics|quote>",
  "title": "<hizmet başlığı>",
  "message": "<kullanıcının isteğine özel, samimi Türkçe yanıt. Fiyat sorulmadıysa 2 cümle. Fiyat sorulduysa 3 cümle: biri ihtiyacı özetlesin, biri güncel fiyat aralığını versin (Google Ads'te ödeme akışını netleştirerek), biri de AI Teklif Hesaplayıcı'ya yönlendirsin. 'Size özel' veya 'tam aradığınız' gibi kişisel bir dille yaz.>",
  "whatsappHint": "<WhatsApp mesajında ne söyleyeceğini özetle, 1 kısa cümle>"
}`
}

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
    const { message, lang: rawLang } = await req.json()
    const lang: 'tr' | 'en' = rawLang === 'en' ? 'en' : 'tr'
    if (!message || message.trim().length < 3) {
      return NextResponse.json({ error: lang === 'en' ? 'Message too short' : 'Mesaj çok kısa' }, { status: 400 })
    }

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 500,
      system: buildSystemPrompt(lang),
      messages: [{ role: 'user', content: message.trim() }],
    })

    const raw = response.content[0].type === 'text' ? response.content[0].text : ''
    const parsed = extractJson(raw) as { service?: string; title?: string; message?: string; whatsappHint?: string }
    const meta = serviceMap[parsed.service ?? ''] ?? serviceMap.quote

    return NextResponse.json({
      service: parsed.service ?? 'quote',
      title: parsed.title ?? (lang === 'en' ? 'Free Consultation' : 'Ücretsiz Danışmanlık'),
      message: parsed.message ?? (lang === 'en'
        ? 'We can clarify your needs best in a conversation — message us on WhatsApp now.'
        : 'İhtiyacınızı en iyi bir görüşmede netleştirebiliriz — hemen WhatsApp\'tan yazın.'),
      whatsappHint: parsed.whatsappHint ?? (lang === 'en'
        ? 'I\'m messaging from your website, I\'d like a consultation.'
        : 'Web sitesinden yazıyorum, danışmanlık almak istiyorum.'),
      icon: meta.icon,
      slug: meta.slug,
      color: meta.color,
    })
  } catch (err) {
    console.error('api/intent error:', err)
    return NextResponse.json({ error: 'Analiz yapılamadı' }, { status: 500 })
  }
}
