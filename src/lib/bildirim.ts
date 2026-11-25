// Site sahibine telefon bildirimi. İki ücretsiz kanal:
// 1) ntfy (ntfy.sh): telefona "ntfy" uygulaması kurulup NTFY_KONU adlı kanala abone olunur.
// 2) WhatsApp (CallMeBot, ücretsiz kişisel bildirim servisi).
// Ortam değişkenleri Vercel'de tanımlanır: BILDIRIM_WA_TELEFON (ör. 905355601936) ve
// BILDIRIM_WA_ANAHTAR (CallMeBot'un WhatsApp'tan verdiği anahtar). Tanımlı değilse hiçbir şey yapmaz.
// Ziyaretçinin kişisel bilgisi (ad, telefon, mesaj) bu bildirime konmaz; ayrıntı e-postada/WhatsApp'ta.
// Yalnızca canlı sitede (Vercel production) çalışır; yerel testler ve önizlemeler bildirim atmaz.

const TELEFON = (process.env.BILDIRIM_WA_TELEFON || '').replace(/\D/g, '')
const ANAHTAR = (process.env.BILDIRIM_WA_ANAHTAR || '').trim()
const NTFY_KONU = (process.env.NTFY_KONU || '').trim()

// Telefona yağmur gibi mesaj gelmesin: saatte en fazla 40 bildirim.
let pencere = { t: 0, n: 0 }

export async function whatsappBildir(baslik: string, satirlar: (string | false | undefined | null)[] = []) {
  if ((!NTFY_KONU && !(TELEFON && ANAHTAR)) || process.env.VERCEL_ENV !== 'production') return
  const simdi = Date.now()
  if (simdi - pencere.t > 60 * 60_000) pencere = { t: simdi, n: 0 }
  if (++pencere.n > 40) return

  const govde = satirlar.filter(Boolean).join('\n').slice(0, 800)
  const isler: Promise<unknown>[] = []
  if (NTFY_KONU) {
    isler.push(
      fetch('https://ntfy.sh/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: NTFY_KONU, title: baslik.slice(0, 120), message: govde || ' ', tags: ['bell'] }),
        signal: AbortSignal.timeout(6000),
      }),
    )
  }
  if (TELEFON && ANAHTAR) {
    const saat = new Date().toLocaleTimeString('tr-TR', { timeZone: 'Europe/Istanbul', hour: '2-digit', minute: '2-digit' })
    const metin = [`🔔 ${baslik}`, govde, `🕒 ${saat}`].filter(Boolean).join('\n').slice(0, 900)
    isler.push(fetch(`https://api.callmebot.com/whatsapp.php?phone=${TELEFON}&apikey=${encodeURIComponent(ANAHTAR)}&text=${encodeURIComponent(metin)}`, { signal: AbortSignal.timeout(6000) }))
  }
  const sonuc = await Promise.allSettled(isler)
  for (const r of sonuc) if (r.status === 'rejected') console.error('Bildirim gönderilemedi:', (r.reason as Error)?.message)
}

// Sayfa yolunu kısa ve güvenli hale getirir.
export const sayfaYolu = (s: unknown) => `ramsesdigital.com${String(s || '/').replace(/[^\w\-/.%çğıöşüÇĞİÖŞÜ]/g, '').slice(0, 80)}`
