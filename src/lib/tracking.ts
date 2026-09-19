const ADS_ID = 'AW-18459249890'
// Google Ads > Goals > Conversions'daki dönüşüm eyleminin etiketi ("AW-.../ETIKET" içindeki ETIKET kısmı).
const LEAD_CONVERSION_LABEL = ''

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackLead() {
  if (!LEAD_CONVERSION_LABEL || typeof window === 'undefined') return
  window.gtag?.('event', 'conversion', { send_to: `${ADS_ID}/${LEAD_CONVERSION_LABEL}` })
}
