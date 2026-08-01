'use client'

import dynamic from 'next/dynamic'

// Ekran altı, tüm sayfalarda birebir aynı içerik — ilk yükleme JS paketine
// dahil etmek yerine client-side lazy load ediyoruz (ssr:false Server
// Component'lerden doğrudan çağrılamadığı için bu ince client wrapper'a
// alındı). Sayfayı çağıran 40+ dosyanın hiçbirini değiştirmeye gerek yok.
const ReviewsMarqueeInner = dynamic(() => import('./ReviewsMarqueeInner'), {
  ssr: false,
  loading: () => <div className="h-[520px]" aria-hidden="true" />,
})

export default function ReviewsMarquee(props: { title?: string }) {
  return <ReviewsMarqueeInner {...props} />
}
