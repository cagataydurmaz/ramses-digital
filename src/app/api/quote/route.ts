import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(request: NextRequest) {
  try {
    const { businessType, services, budget, websiteUrl } = await request.json()

    const servicesList = services.join(', ')
    const urlInfo = websiteUrl ? `Web sitesi: ${websiteUrl}` : 'Web sitesi belirtilmedi'

    const stream = client.messages.stream({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: `Sen Ramses Digital'in uzman dijital pazarlama danışmanısın. Aşağıdaki bilgilere göre müşteriye özel bir teklif paketi hazırla.

Müşteri Bilgileri:
- İşletme Tipi: ${businessType}
- İstenen Hizmetler: ${servicesList}
- Aylık Bütçe: ${budget}
- ${urlInfo}

Lütfen aşağıdaki formatta Türkçe ve samimi bir teklif hazırla:

## 🎯 Önerilen Paket

[Pakete bir isim ver ve neden uygun olduğunu 2-3 cümleyle açıkla]

## 📈 3-6 Ayda Beklenen Sonuçlar

[Her seçilen hizmet için somut ve gerçekçi beklentiler listele. Yüzdeler ve rakamlar kullan.]

## 🚀 Önerilen İlk Adım

[En kritik ve hızlı sonuç verecek 2-3 aksiyonu öner]

## 💡 Özel Not

[Bu işletme tipine özel bir ipucu veya uyarı]

Yanıtın samimi, profesyonel ve motive edici olsun. Türkçe yaz.`,
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
