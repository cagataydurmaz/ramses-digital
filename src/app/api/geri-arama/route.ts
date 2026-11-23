import { Resend } from 'resend'
import { NextResponse } from 'next/server'

// "Sizi arayalım" formu: ad + telefon alır, ajans e-postasına iletir.
const resend = new Resend(process.env.RESEND_API_KEY)
const kacis = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export async function POST(req: Request) {
  try {
    const { ad, telefon, sayfa, tuzak } = await req.json()
    if (tuzak) return NextResponse.json({ ok: true }) // bot
    const a = String(ad ?? '').trim().slice(0, 80)
    const t = String(telefon ?? '').replace(/[^\d+ ()-]/g, '').trim().slice(0, 20)
    if (a.length < 2 || t.replace(/\D/g, '').length < 10) return NextResponse.json({ ok: false, hata: 'gecersiz' }, { status: 400 })
    const s = String(sayfa ?? '').slice(0, 200)
    await resend.emails.send({
      from: 'Ramses Digital <onboarding@resend.dev>',
      to: 'ramsesdigitalagency@gmail.com',
      subject: `Sizi Arayalım talebi: ${a}`,
      html: `<div style="font-family:sans-serif"><h2 style="color:#3b82f6">Geri arama talebi</h2>
        <p><b>Ad:</b> ${kacis(a)}</p><p><b>Telefon:</b> <a href="tel:${kacis(t)}">${kacis(t)}</a></p>
        <p><b>Sayfa:</b> ${kacis(s)}</p></div>`,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
