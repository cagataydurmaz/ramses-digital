import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json()

    await resend.emails.send({
      from: 'Ramses Digital <onboarding@resend.dev>',
      to: 'ramsesdigitalagency@gmail.com',
      replyTo: email,
      subject: `Yeni İletişim Formu: ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#3b82f6;">Yeni Form Mesajı</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6b7280;width:140px;">Ad Soyad</td><td style="padding:8px 0;color:#111827;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">E-Posta</td><td style="padding:8px 0;color:#111827;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Telefon</td><td style="padding:8px 0;color:#111827;">${phone || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">İlgilenilen Hizmet</td><td style="padding:8px 0;color:#111827;">${service || '—'}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
          <p style="color:#6b7280;margin-bottom:4px;">Mesaj</p>
          <p style="color:#111827;white-space:pre-wrap;">${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
