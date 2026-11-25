const ADS_ID = 'AW-18459249890'
// Google Ads > Goals > Conversions'daki dönüşüm eyleminin etiketi ("AW-.../ETIKET" içindeki ETIKET kısmı).
const LEAD_CONVERSION_LABEL = '1AUUCOelqv0cEOKZh-JE'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// Müşterinin bize ulaştığı yol. GA4'te "method" parametresi olarak görünür.
export type LeadYontem =
  | 'whatsapp'
  | 'telefon'
  | 'whatsapp_form'
  | 'whatsapp_ai'
  | 'iletisim_formu'
  | 'geri_arama'

// GA4'e etkinlik gönderir (sayfa yolu eklenir; hangi sayfanın müşteri getirdiği görülsün).
export function trackEvent(ad: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  window.gtag?.('event', ad, { page_path: window.location.pathname, ...params })
  if (ad === 'arac_kullanildi') sahibeBildir(`arac:${params.arac}`)
  if (ad === 'generate_lead' && (params.method === 'telefon' || params.method === 'whatsapp')) sahibeBildir(`lead:${params.method}`)
}

// Site sahibine WhatsApp bildirimi (/api/bildirim). Yalnızca canlı sitede, aynı ziyarette aynı olay için bir kez.
function sahibeBildir(olay: string) {
  if (window.location.hostname !== 'ramsesdigital.com') return
  try {
    const k = `bildirim:${olay}`
    if (sessionStorage.getItem(k)) return
    sessionStorage.setItem(k, '1')
  } catch {}
  const govde = JSON.stringify({ olay, sayfa: window.location.pathname })
  try {
    if (navigator.sendBeacon?.('/api/bildirim', new Blob([govde], { type: 'text/plain' }))) return
  } catch {}
  fetch('/api/bildirim', { method: 'POST', body: govde, keepalive: true }).catch(() => {})
}

// Gerçek iletişim talebi: GA4'te generate_lead + Google Ads dönüşümü.
export function trackLead(yontem: LeadYontem) {
  if (typeof window === 'undefined') return
  trackEvent('generate_lead', { method: yontem })
  if (LEAD_CONVERSION_LABEL) {
    window.gtag?.('event', 'conversion', { send_to: `${ADS_ID}/${LEAD_CONVERSION_LABEL}` })
  }
}
