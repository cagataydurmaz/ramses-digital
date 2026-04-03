import { NextRequest, NextResponse } from 'next/server'

const RESEND_API_KEY = process.env.RESEND_API_KEY!
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'durmazcagatay@gmail.com'

export async function POST(req: NextRequest) {
  try {
    const { name, phone, service } = await req.json()

    if (!name || !phone || !service) {
      return NextResponse.json({ error: 'Eksik bilgi' }, { status: 400 })
    }

    const now = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; background: #0D1225; border-radius: 16px; overflow: hidden; border: 1px solid #222;">
        <div style="background: linear-gradient(135deg, #1d4ed8, #2563eb); padding: 24px 28px;">
          <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Yeni Lead</p>
          <h1 style="margin: 0; color: white; font-size: 22px; font-weight: 700;">Danışmanlık Talebi</h1>
        </div>
        <div style="padding: 28px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #71717a; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; width: 40%;">Ad Soyad</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #ffffff; font-size: 15px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #71717a; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Telefon</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f;">
                <a href="tel:${phone}" style="color: #3b82f6; font-size: 15px; font-weight: 600; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #71717a; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Hizmet</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #ffffff; font-size: 15px;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #71717a; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Tarih</td>
              <td style="padding: 12px 0; color: #a1a1aa; font-size: 14px;">${now}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <a href="https://wa.me/905355601936?text=${encodeURIComponent(`Merhaba ${name}! Ramses Digital olarak danışmanlık talebinizi aldık. ${service} konusunda size yardımcı olmak isteriz. Sizi ne zaman arayabiliriz?`)}"
              style="display: inline-block; background: #25D366; color: white; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-size: 14px; font-weight: 600;">
              📱 WhatsApp ile Hemen Ulaş
            </a>
          </div>
        </div>
        <div style="padding: 16px 28px; border-top: 1px solid #1f1f1f; background: #080D18;">
          <p style="margin: 0; color: #3f3f46; font-size: 12px;">Bu email ramsesdigital.com üzerinden otomatik olarak gönderilmiştir.</p>
        </div>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Ramses Digital <onboarding@resend.dev>',
        to: [NOTIFICATION_EMAIL],
        subject: `🔔 Yeni Lead: ${name} — ${service}`,
        html,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Email gönderilemedi' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Consultation API error:', err)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
