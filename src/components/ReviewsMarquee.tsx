'use client'

import dynamic from 'next/dynamic'

// Ekran altı, tüm sayfalarda birebir aynı içerik — ilk yükleme JS paketine
// dahil etmek yerine ayrı chunk olarak lazy load ediyoruz. ssr:false VERMİYORUZ:
// bu bileşen 40+ sayfada müşteri yorumu (E-E-A-T sinyali) taşıyor — ssr:false
// olsaydı bu metin hiçbir sayfada JS çalıştırmayan bot/crawler'a görünmezdi.
const ReviewsMarqueeInner = dynamic(() => import('./ReviewsMarqueeInner'), {
  loading: () => <div className="h-[520px]" aria-hidden="true" />,
})

export default function ReviewsMarquee(props: { title?: string }) {
  return <ReviewsMarqueeInner {...props} />
}
