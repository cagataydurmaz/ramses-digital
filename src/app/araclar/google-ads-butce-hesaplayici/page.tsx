import type { Metadata } from 'next'
import AracSayfasi from '@/components/araclar/AracSayfasi'
import AdsButceAraci from '@/components/araclar/AdsButceAraci'

export const metadata: Metadata = {
  title: 'Google Ads Bütçe Hesaplayıcı (Ücretsiz) | Ramses Dijital',
  description: 'Hedef aday sayısı, dönüşüm oranı ve tıklama başı maliyetle Google Ads için gereken tıklamayı, aylık ve günlük reklam bütçesini hesaplayın.',
  alternates: { canonical: 'https://ramsesdigital.com/araclar/google-ads-butce-hesaplayici' },
  openGraph: { title: 'Google Ads Bütçe Hesaplayıcı (Ücretsiz) | Ramses Dijital', description: 'Hedef aday sayısı, dönüşüm oranı ve tıklama başı maliyetle Google Ads için gereken tıklamayı, aylık ve günlük reklam bütçesini hesaplayın.', url: 'https://ramsesdigital.com/araclar/google-ads-butce-hesaplayici', images: ['https://ramsesdigital.com/og-image.png'] },
}

const sss = [
  { q: 'Bu hesaplama nasıl yapılıyor?', a: 'Gereken tıklama = hedef aday ÷ dönüşüm oranı. Aylık bütçe = gereken tıklama × tıklama başı maliyet. Günlük bütçe = aylık bütçe ÷ 30,4 (Google’ın ay ortalaması).' },
  { q: 'Çıkan rakam sizin fiyatınız mı?', a: 'Hayır. Sonuç, yalnızca sizin girdiğiniz değerlerle hesaplanan tahmini reklam harcamasıdır ve doğrudan Google’a ödenir. Kampanya yönetimi ücretimiz ayrıdır; işletmenize özel tahmini teklif için AI teklif hesaplayıcıyı kullanabilirsiniz.' },
  { q: 'Tıklama başı maliyeti nereden bilebilirim?', a: 'Google Ads içindeki Anahtar Kelime Planlayıcı, hedeflediğiniz aramalar için tahmini maliyet aralığı gösterir. Gerçek maliyet rekabete, reklam kalitesine ve hedeflemeye göre değişir.' },
  { q: 'Dönüşüm oranı için hangi değeri girmeliyim?', a: 'Varsa kendi geçmiş verinizi kullanın. Yoksa düşük bir tahminle başlayıp kampanya verisi geldikçe hesabı güncellemek daha gerçekçi sonuç verir.' },
]

export default function Page() {
  return (
    <AracSayfasi slug="google-ads-butce-hesaplayici" baslik="Google Ads Bütçe Hesaplayıcı"
      aciklama="Ayda kaç müşteri adayı istediğinizi yazın; gereken tıklama sayısını ve aylık/günlük reklam bütçesini anında görün."
      sss={sss} hizmet={{ label: 'Google Ads Yönetimi', href: '/hizmetler/google-ads' }}
      blog={{ label: 'Google Ads Fiyatları 2026', href: '/blog/google-ads-fiyatlari-2026' }}>
      <AdsButceAraci />
    </AracSayfasi>
  )
}
