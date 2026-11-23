import type { Metadata } from 'next'
import AracSayfasi from '@/components/araclar/AracSayfasi'
import GoogleYorumAraci from '@/components/araclar/GoogleYorumAraci'

export const metadata: Metadata = {
  title: 'Google Yorum Linki Oluşturucu (Ücretsiz) | Ramses Dijital',
  description: 'Place ID ile müşterilerinizi doğrudan Google yorum ekranına götüren bağlantıyı oluşturun. Place ID nasıl bulunur, adım adım anlatım. Ücretsiz.',
  alternates: { canonical: 'https://ramsesdigital.com/araclar/google-yorum-linki' },
  openGraph: { title: 'Google Yorum Linki Oluşturucu (Ücretsiz) | Ramses Dijital', description: 'Place ID ile müşterilerinizi doğrudan Google yorum ekranına götüren bağlantıyı oluşturun. Place ID nasıl bulunur, adım adım anlatım. Ücretsiz.', url: 'https://ramsesdigital.com/araclar/google-yorum-linki', images: ['https://ramsesdigital.com/og-image.png'] },
}

const sss = [
  { q: 'Place ID nedir?', a: 'Place ID, Google Haritalar’daki her işletmeye verilen benzersiz kimliktir. Yorum bağlantısı bu kimlikle doğru işletmeyi açar.' },
  { q: 'Bağlantıyı müşterilere nasıl gönderebilirim?', a: 'Hizmet sonrası WhatsApp veya SMS mesajına, e-posta imzasına, faturanıza ya da kasadaki bir karta ekleyebilirsiniz. Bağlantıya tıklayan müşteri doğrudan yıldız verme ekranına ulaşır.' },
  { q: 'Yorum karşılığında indirim verebilir miyim?', a: 'Google, yorum karşılığında teşvik sunulmasına izin vermez ve sahte yorumları kaldırır. Memnun müşterilerden dürüst yorum istemek en güvenli yoldur.' },
  { q: 'Bilgilerim kaydediliyor mu?', a: 'Hayır. Araç tarayıcınızda çalışır; girdiğiniz Place ID hiçbir yere gönderilmez.' },
]

export default function Page() {
  return (
    <AracSayfasi slug="google-yorum-linki" baslik="Google Yorum Linki Oluşturucu"
      aciklama="Müşterilerinizi tek tıkla Google yorum ekranına götüren bağlantıyı oluşturun; daha fazla yorum, haritada daha güçlü görünürlük demektir."
      sss={sss} hizmet={{ label: 'SEO Hizmetimiz', href: '/hizmetler/seo' }}
      blog={{ label: 'Google Yorumları Nasıl Artırılır?', href: '/blog/google-yorumlari-nasil-artirilir' }}>
      <GoogleYorumAraci />
    </AracSayfasi>
  )
}
