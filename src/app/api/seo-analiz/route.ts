import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1500,
      messages: [
        {
          role: 'user',
          content: `Web sitesi URL'si: ${url}

Bu URL'ye bakarak kapsamlı bir SEO analizi yap. Domain adı, TLD, URL yapısı ve sektör tahminine göre bu tür bir site için tipik SEO durumunu değerlendir.

SADECE aşağıdaki JSON formatında yanıt ver, başka hiçbir metin ekleme:

{
  "domain": "sadece domain adı (www olmadan)",
  "siteType": "site tipini tahmin et (E-ticaret / Blog / Kurumsal / Hizmet vb.)",
  "scores": {
    "hiz": 45-90 arası gerçekçi puan,
    "mobil": 50-95 arası gerçekçi puan,
    "icerik": 35-85 arası gerçekçi puan,
    "teknik": 40-88 arası gerçekçi puan
  },
  "overall": skorların ortalaması,
  "issues": [
    "Kritik sorun 1 (spesifik ve teknik)",
    "Kritik sorun 2",
    "Kritik sorun 3",
    "Orta öncelikli sorun 4",
    "Orta öncelikli sorun 5"
  ],
  "strengths": [
    "Güçlü yan 1",
    "Güçlü yan 2"
  ],
  "recommendations": [
    "En öncelikli aksiyon 1 (spesifik)",
    "Öncelikli aksiyon 2",
    "Orta vadeli aksiyon 3",
    "Uzun vadeli aksiyon 4"
  ],
  "summary": "2-3 cümlelik Türkçe özet değerlendirme. Samimi ve profesyonel ol."
}`,
        },
      ],
    })

    const text =
      response.content[0].type === 'text' ? response.content[0].text : ''

    // Extract JSON from the response (handle possible markdown code blocks)
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      return Response.json({ error: 'Parse error' }, { status: 500 })
    }

    const data = JSON.parse(jsonMatch[0])
    return Response.json(data)
  } catch (error) {
    console.error('SEO API error:', error)
    return Response.json({ error: 'Analiz sırasında hata oluştu.' }, { status: 500 })
  }
}
