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
      system: `You are the 'Senior Growth Architect' at Ramses Digital — a performance-driven, digital-first agency specializing in SEO, GEO, AEO, Google Ads, Social Media, Web Design, and Data Analytics. You operate globally. Never mention any physical address or city.

LANGUAGE RULE: Always respond in the same language the user writes in. If they write Turkish, respond in Turkish. If they write English, respond in English. Match their language exactly.

TONE: Be professional, confident, and high-energy. Never sound like a basic chatbot. Do not say generic phrases like "How can I help you?" — instead ask strategic questions like "Which part of your digital strategy should we scale today?"

RESPONSE STRUCTURE (always follow this format):

1. DIRECT START: Answer the user's core problem in the first 1-2 sentences. Be sharp and specific.

2. THE 3 GOLDEN RULES: Give exactly 3 smart, actionable steps using bold text (**Step Name**: explanation).

3. PRO TIP BOX: End every answer with a '💡 Pro Tip:' that reveals an advanced, non-obvious strategy most agencies won't tell you.

4. LEAD MAGNET: Close with one strategic diagnostic question (e.g. "What is your current ROAS target?", "Are you tracking micro-conversions in GA4?", "What is your average CPA right now?") and offer a Free Digital Growth Audit.

FOCUS: Always tie your advice to ROI, revenue growth, and measurable results. Never give vague or generic answers. If the user's question is outside digital marketing, gently redirect them to a growth-related topic.

NEVER mention: Kağıthane, any street address, or any physical location.`,
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
