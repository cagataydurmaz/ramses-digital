import { NextRequest } from 'next/server'
import { Resend } from 'resend'

// Yedek talep bildirimi: ziyaretçi WhatsApp'ı açtığı anda (mesajı göndermese bile)
// hazırlanan mesajın bir kopyası işletme sahibine e-postayla iletilir. Hiçbir yerde saklanmaz.
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
// Ortam değişkeninin sonunda kalabilen satır sonu (\n) temizlenir.
const ALICI = (process.env.TALEP_EMAIL || process.env.NOTIFICATION_EMAIL || '').replace(/\\n/g, '').trim()

const sayac = new Map<string, { n: number; t: number }>()
function sinirAsildi(ip: string) {
  const simdi = Date.now()
  const k = sayac.get(ip)
  if (!k || simdi - k.t > 10 * 60_000) {
    sayac.set(ip, { n: 1, t: simdi })
    return false
  }
  k.n++
  return k.n > 8
}

const kacis = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!)

export async function POST(req: NextRequest) {
  try {
    const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'yerel'
    if (sinirAsildi(ip)) return new Response(null, { status: 429 })

    const govde = JSON.parse(await req.text())
    const metin = String(govde?.metin || '').slice(0, 2000).trim()
    const kaynak = String(govde?.kaynak || 'WhatsApp').slice(0, 60)
    const sayfa = String(govde?.sayfa || '/').slice(0, 200)
    if (metin.length < 10) return new Response(null, { status: 400 })
    if (!resend || !ALICI) return new Response(null, { status: 204 })

    const telefon = metin.match(/(?:\+?90|0)?\s*5\d{2}[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}/)?.[0]
    const ad = metin.match(/(?:Ad(?: Soyad)?):\s*([^\n]+)/)?.[1]?.trim()
    const zaman = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })

    const { error } = await resend.emails.send({
      from: 'Ramses Dijital Site <onboarding@resend.dev>',
      to: ALICI,
      subject: `Yeni talep (${kaynak})${ad ? ` – ${ad}` : ''}`,
      text: `${zaman}\nKaynak: ${kaynak}\nSayfa: https://ramsesdigital.com${sayfa}\n\nZiyaretçi WhatsApp'ı açtı; mesajı göndermemiş olabilir.${telefon ? ` Telefon: ${telefon}` : ''}\n\n---\n${metin}`,
      html: `<div style="font-family:system-ui,sans-serif;font-size:15px;color:#111">
        <p style="color:#666;margin:0 0 8px">${kacis(zaman)} · ${kacis(kaynak)}</p>
        <p style="margin:0 0 12px">Ziyaretçi WhatsApp'ı açtı; mesajı göndermemiş olabilir.${telefon ? ` <b>Telefon: <a href="tel:${kacis(telefon.replace(/\s/g, ''))}">${kacis(telefon)}</a></b>` : ''}</p>
        <pre style="white-space:pre-wrap;background:#f5f7fb;border-radius:8px;padding:12px;font-family:inherit">${kacis(metin)}</pre>
        <p style="color:#666;margin:12px 0 0">Sayfa: <a href="https://ramsesdigital.com${kacis(sayfa)}">ramsesdigital.com${kacis(sayfa)}</a></p>
      </div>`,
    })
    if (error) console.error('talep bildirimi gönderilemedi:', error.message)
    return new Response(null, { status: 204 })
  } catch {
    return new Response(null, { status: 204 })
  }
}
