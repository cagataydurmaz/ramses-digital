'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'

const TEL_HREF = 'tel:+905355601936'
const WA_HREF = `https://wa.me/905355601936?text=${encodeURIComponent(
  'Merhaba Ramses Dijital,\n\n*Bilgi talebi*\nWeb sitenizden yazıyorum; hizmetleriniz hakkında bilgi almak istiyorum.'
)}`

// Sadece mobilde: sayfanın altında yan yana "Ara" ve "WhatsApp" butonları.
// Tıklamalar LeadTracker tarafından (tel: ve wa.me bağlantıları) otomatik ölçülür.
// Form alanına yazılırken (klavye açıkken) gizlenir, yazının üstünde kalmaz.
export default function MobileContactBar() {
  const [gizli, setGizli] = useState(false)

  useEffect(() => {
    const alan = (t: EventTarget | null) =>
      t instanceof HTMLElement && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)
    const odak = (e: FocusEvent) => alan(e.target) && setGizli(true)
    const cik = (e: FocusEvent) => alan(e.target) && setGizli(false)
    document.addEventListener('focusin', odak)
    document.addEventListener('focusout', cik)
    return () => {
      document.removeEventListener('focusin', odak)
      document.removeEventListener('focusout', cik)
    }
  }, [])

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 flex gap-2 px-3 pt-2 bg-[#0A0F1E]/95 backdrop-blur border-t border-white/10 transition-transform duration-200 ${gizli ? 'translate-y-full' : 'translate-y-0'}`}
      style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom))' }}
    >
      <a
        href={TEL_HREF}
        aria-label="Hemen ara"
        className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-blue-500 active:bg-blue-600 text-white text-sm font-semibold"
      >
        <Phone size={17} className="fill-white" />
        Ara
      </a>
      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl text-white text-sm font-semibold active:opacity-90"
        style={{ background: '#25D366' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18" height="18" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        WhatsApp
      </a>
    </div>
  )
}
