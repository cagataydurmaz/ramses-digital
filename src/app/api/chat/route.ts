import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    const stream = client.messages.stream({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system:
        "Sen Ramses Digital'in AI asistanısın. Türkçe yanıt ver. Dijital pazarlama hizmetleri hakkında bilgi ver ve kullanıcıları ücretsiz danışmanlık almaya yönlendir. Ramses Digital İstanbul Kağıthane'de bulunan, SEO, Google Ads, Sosyal Medya Yönetimi, Web Tasarımı, E-Posta Pazarlama ve Veri Analizinde uzman bir dijital pazarlama ajansıdır. Kısa, anlaşılır ve yardımcı yanıtlar ver.",
      messages: messages.map(
        (m: { role: string; content: string }) => ({
          role: m.role as 'user' | 'assistant',
          content: m.content,
        })
      ),
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
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response('Bir hata oluştu. Lütfen tekrar deneyin.', {
      status: 500,
    })
  }
}
