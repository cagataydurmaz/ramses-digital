import type { Metadata } from 'next'
import AracSayfasi from '@/components/araclar/AracSayfasi'
import WhatsappLinkAraci from '@/components/araclar/WhatsappLinkAraci'

export const metadata: Metadata = {
  title: 'WhatsApp Link Oluşturucu (Ücretsiz) | Ramses Dijital',
  description: 'Telefon numaranız ve hazır mesajınızla wa.me WhatsApp bağlantısı oluşturun, tek tıkla kopyalayın. Ücretsiz, kayıt gerektirmez, veri saklamaz.',
  alternates: { canonical: 'https://ramsesdigital.com/araclar/whatsapp-link-olusturucu' },
  openGraph: { title: 'WhatsApp Link Oluşturucu (Ücretsiz) | Ramses Dijital', description: 'Telefon numaranız ve hazır mesajınızla wa.me WhatsApp bağlantısı oluşturun, tek tıkla kopyalayın. Ücretsiz, kayıt gerektirmez, veri saklamaz.', url: 'https://ramsesdigital.com/araclar/whatsapp-link-olusturucu', images: ['https://ramsesdigital.com/og-image.png'] },
}

const sss = [
  { q: 'WhatsApp bağlantısı ne işe yarar?', a: 'Bağlantıya tıklayan kişi, numaranızı rehbere kaydetmeden doğrudan sizinle WhatsApp sohbeti açar. Hazır mesaj eklerseniz yazacağı ilk mesaj da otomatik dolar.' },
  { q: 'Bu bağlantıyı nerede kullanabilirim?', a: 'Web sitenizdeki butonlarda, Instagram biyografisinde, Google İşletme Profilinizde, e-posta imzanızda veya reklamlarda kullanabilirsiniz.' },
  { q: 'Numaramı neden 90 ile başlatıyorsunuz?', a: 'WhatsApp bağlantıları numarayı ülke koduyla ve başında sıfır olmadan ister. 0535 ile yazdığınız numarayı otomatik olarak 90535 biçimine çeviriyoruz.' },
  { q: 'Bilgilerim kaydediliyor mu?', a: 'Hayır. Araç tamamen tarayıcınızda çalışır; numaranız ve mesajınız hiçbir sunucuya gönderilmez.' },
]

export default function Page() {
  return (
    <AracSayfasi slug="whatsapp-link-olusturucu" baslik="WhatsApp Link Oluşturucu"
      aciklama="Numaranızı ve hazır mesajınızı yazın; müşterilerinizin tek tıkla size yazabileceği WhatsApp bağlantısı hazır olsun."
      sss={sss} hizmet={{ label: 'Web Tasarım Hizmetimiz', href: '/hizmetler/web-tasarim' }}>
      <WhatsappLinkAraci />
    </AracSayfasi>
  )
}
