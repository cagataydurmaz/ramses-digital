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
}

// Gerçek iletişim talebi: GA4'te generate_lead + Google Ads dönüşümü.
export function trackLead(yontem: LeadYontem) {
  if (typeof window === 'undefined') return
  trackEvent('generate_lead', { method: yontem })
  if (LEAD_CONVERSION_LABEL) {
    window.gtag?.('event', 'conversion', { send_to: `${ADS_ID}/${LEAD_CONVERSION_LABEL}` })
  }
}
