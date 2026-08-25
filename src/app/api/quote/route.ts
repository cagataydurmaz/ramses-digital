import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(request: NextRequest) {
  try {
    const { businessType, businessSize, services, websiteUrl } = await request.json()

    const servicesList = services.join(', ')
    const urlInfo = websiteUrl ? `Web sitesi: ${websiteUrl}` : 'Web sitesi belirtilmedi'
    const sizeInfo = businessSize ? `\n- İşletme Büyüklüğü: ${businessSize}` : ''

    const stream = client.messages.stream({
      model: 'claude-sonnet-4-6',
      max_tokens: 400,
      messages: [
        {
          role: 'user',
          content: `Sen Ramses Digital'in uzman dijital pazarlama danışmanısın. Aşağıdaki bilgilere göre müşteriye özel, KISA bir strateji önerisi hazırla.

Müşteri Bilgileri:
- İşletme Tipi: ${businessType}${sizeInfo}
- İstenen Hizmetler: ${servicesList}
- ${urlInfo}

Lütfen aşağıdaki formatta, KISA ve öz Türkçe bir öneri hazırla (toplam 120-150 kelimeyi geçme):

## 🎯 Önerilen Paket

[Pakete bir isim ver, tek cümlede neden uygun olduğunu açıkla]

## 📈 Beklenen Sonuçlar

[En fazla 3 madde, her biri tek satır, nitel ifadelerle (örn. "organik trafikte belirgin artış")]

## 🚀 İlk Adım

[Tek cümlede en kritik aksiyon]

ÖNEMLİ KURALLAR:
- Yanıtta HİÇBİR ŞEKİLDE fiyat, tutar, TL, ₺ veya sayısal yüzde/oran verme.
- Kesin fiyat ve paket detaylarının WhatsApp'ta netleştirileceğini son cümlede belirt.
- Samimi, profesyonel ol ama laf kalabalığı yapma — direkt ve kısa yaz. Türkçe yaz.`,
        },
      ],
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text))
            }
          }
          controller.close()
        } catch {
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    console.error('Quote API error:', error)
    return new Response('Bir hata oluştu.', { status: 500 })
  }
}
