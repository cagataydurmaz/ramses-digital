// Tüm WhatsApp mesajları tek biçimde: ziyaretçinin ağzından doğal bir selam (hangi sayfadan yazdığı dahil),
// *kalın* konu başlığı ve maddeler. Böylece gelen mesajda ne istendiği ve nereden gelindiği ilk bakışta görülür.
export const WHATSAPP_NO = '905355601936'

// Sayfa başlığından kısa ad: "Beşiktaş SEO Ajansı – Ücretsiz Site Analizi | Ramses Dijital" → "Beşiktaş SEO Ajansı"
function sayfaAdi() {
  if (typeof document === 'undefined') return ''
  return document.title.split(' | ')[0].split(' – ')[0].split(' — ')[0].trim()
}

export function waSelam() {
  if (typeof window === 'undefined') return 'Merhaba Ramses Dijital,'
  const yol = window.location.pathname
  const ad = sayfaAdi()
  if (!ad || yol === '/' || ad.startsWith('Ramses')) return 'Merhaba Ramses Dijital,'
  if (yol.startsWith('/blog/')) return `Merhaba, sitenizdeki “${ad}” yazısını okudum.`
  return `Merhaba, sitenizdeki “${ad}” sayfasından yazıyorum.`
}

export function waMesaj(konu: string, maddeler: (string | null | false | undefined)[] = [], kapanis?: string) {
  const satirlar = [
    waSelam(),
    '',
    `*${konu}*`,
    ...maddeler.filter(Boolean).map((m) => `• ${m}`),
    kapanis ? `\n${kapanis}` : null,
  ].filter((s) => s !== null)
  return satirlar.join('\n')
}

export function waLink(metin: string) {
  return `https://wa.me/${WHATSAPP_NO}?text=${encodeURIComponent(metin)}`
}

// Yedek bildirim: ziyaretçi WhatsApp'ta "gönder"e basmasa da bilgiler işletme sahibine e-postayla ulaşır.
// Yalnızca ziyaretçinin doldurduğu bilgileri içeren (maddeli) mesajlar için gönderilir.
export function talepBildir(metin: string, kaynak: string) {
  if (typeof window === 'undefined' || !metin.includes('• ')) return
  const govde = JSON.stringify({ metin, kaynak, sayfa: window.location.pathname })
  try {
    if (navigator.sendBeacon?.('/api/talep', new Blob([govde], { type: 'text/plain' }))) return
  } catch {}
  fetch('/api/talep', { method: 'POST', body: govde, keepalive: true }).catch(() => {})
}

// WhatsApp'ı hazır mesajla açar ve yedek bildirimi gönderir.
export function whatsappAc(metin: string, kaynak: string) {
  talepBildir(metin, kaynak)
  window.open(waLink(metin), '_blank')
}
