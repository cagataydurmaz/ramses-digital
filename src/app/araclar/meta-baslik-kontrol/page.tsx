import type { Metadata } from 'next'
import AracSayfasi from '@/components/araclar/AracSayfasi'
import MetaBaslikAraci from '@/components/araclar/MetaBaslikAraci'

export const metadata: Metadata = {
  title: 'Meta Başlık ve Açıklama Uzunluk Kontrolü | Ramses Dijital',
  description: 'SEO başlığınızın ve meta açıklamanızın uzunluğunu ölçün, Google arama sonucunda nasıl görüneceğini önizleyin. Ücretsiz, anında, kayıtsız.',
  alternates: { canonical: 'https://ramsesdigital.com/araclar/meta-baslik-kontrol' },
  openGraph: { title: 'Meta Başlık ve Açıklama Uzunluk Kontrolü | Ramses Dijital', description: 'SEO başlığınızın ve meta açıklamanızın uzunluğunu ölçün, Google arama sonucunda nasıl görüneceğini önizleyin. Ücretsiz, anında, kayıtsız.', url: 'https://ramsesdigital.com/araclar/meta-baslik-kontrol', images: ['https://ramsesdigital.com/og-image.png'] },
}

const sss = [
  { q: 'Başlık kaç karakter olmalı?', a: 'Google genişliğe göre keser; pratikte 60 karakter civarı başlıklar çoğunlukla tam görünür. Önemli kelimeleri başa yazmak her durumda daha güvenlidir.' },
  { q: 'Meta açıklama kaç karakter olmalı?', a: '155–160 karakter civarı açıklamalar çoğu zaman tam görünür. Daha uzun yazılanlar mobilde ve masaüstünde kısaltılabilir.' },
  { q: 'Meta açıklama sıralamayı etkiler mi?', a: 'Doğrudan bir sıralama etkeni değildir; ancak aramada tıklanma olasılığını etkiler. Net, sayfaya özel ve davet eden bir açıklama yazmak önerilir.' },
  { q: 'Google neden benim yazdığım açıklamayı göstermiyor?', a: 'Google, aramaya daha uygun bulduğu bir metni sayfa içeriğinden seçebilir. Açıklamanın sayfa içeriğini doğru özetlemesi bu olasılığı azaltır.' },
]

export default function Page() {
  return (
    <AracSayfasi slug="meta-baslik-kontrol" baslik="Meta Başlık ve Açıklama Kontrol"
      aciklama="Başlık ve açıklamanızı yazın; uzunluğunu ölçelim ve Google arama sonucunda yaklaşık nasıl görüneceğini gösterelim."
      sss={sss} hizmet={{ label: 'SEO Hizmetimiz', href: '/hizmetler/seo' }}
      blog={{ label: 'Ücretsiz SEO Analizi', href: '/seo-analiz' }}>
      <MetaBaslikAraci />
    </AracSayfasi>
  )
}
