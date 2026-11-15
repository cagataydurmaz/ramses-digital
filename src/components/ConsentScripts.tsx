'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export const CONSENT_KEY = 'ramses_cookie_consent'
export const CONSENT_EVENT = 'ramses-consent'

function okunanOnay(): boolean {
  try {
    return localStorage.getItem(CONSENT_KEY) === 'accepted'
  } catch {
    return false
  }
}

// Clarity ve Meta Pixel yalnızca kullanıcı çerezleri kabul ettikten sonra yüklenir.
export default function ConsentScripts() {
  const [onay, setOnay] = useState(false)

  useEffect(() => {
    setOnay(okunanOnay())
    const dinle = () => setOnay(okunanOnay())
    window.addEventListener(CONSENT_EVENT, dinle)
    return () => window.removeEventListener(CONSENT_EVENT, dinle)
  }, [])

  if (!onay) return null

  const clarity = process.env.NEXT_PUBLIC_CLARITY_ID
  const pixel = process.env.NEXT_PUBLIC_META_PIXEL_ID

  return (
    <>
      {clarity && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarity}");
          `}
        </Script>
      )}
      {pixel && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixel}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  )
}
