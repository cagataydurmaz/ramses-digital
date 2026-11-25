// Site sahibine WhatsApp bildirimi (CallMeBot, ücretsiz kişisel bildirim servisi).
// Ortam değişkenleri Vercel'de tanımlanır: BILDIRIM_WA_TELEFON (ör. 905355601936) ve
// BILDIRIM_WA_ANAHTAR (CallMeBot'un WhatsApp'tan verdiği anahtar). Tanımlı değilse hiçbir şey yapmaz.
// Ziyaretçinin kişisel bilgisi (ad, telefon, mesaj) bu bildirime konmaz; ayrıntı e-postada/WhatsApp'ta.
// Yalnızca canlı sitede (Vercel production) çalışır; yerel testler ve önizlemeler bildirim atmaz.

const TELEFON = (process.env.BILDIRIM_WA_TELEFON || '').replace(/\D/g, '')
const ANAHTAR = (process.env.BILDIRIM_WA_ANAHTAR || '').trim()

// Telefona yağmur gibi mesaj gelmesin: saatte en fazla 40 bildirim.
let pencere = { t: 0, n: 0 }

export async function whatsappBildir(baslik: string, satirlar: (string | false | undefined | null)[] = []) {
  if (!TELEFON || !ANAHTAR || process.env.VERCEL_ENV !== 'production') return
  const simdi = Date.now()
  if (simdi - pencere.t > 60 * 60_000) pencere = { t: simdi, n: 0 }
  if (++pencere.n > 40) return

  const saat = new Date().toLocaleTimeString('tr-TR', { timeZone: 'Europe/Istanbul', hour: '2-digit', minute: '2-digit' })
  const metin = [`🔔 ${baslik}`, ...satirlar.filter(Boolean), `🕒 ${saat}`].join('\n').slice(0, 900)
  const url = `https://api.callmebot.com/whatsapp.php?phone=${TELEFON}&apikey=${encodeURIComponent(ANAHTAR)}&text=${encodeURIComponent(metin)}`
  try {
    await fetch(url, { signal: AbortSignal.timeout(6000) })
  } catch (e) {
    console.error('WhatsApp bildirimi gönderilemedi:', (e as Error).message)
  }
}

// Sayfa yolunu kısa ve güvenli hale getirir.
export const sayfaYolu = (s: unknown) => `ramsesdigital.com${String(s || '/').replace(/[^\w\-/.%çğıöşüÇĞİÖŞÜ]/g, '').slice(0, 80)}`
