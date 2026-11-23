// Ücretsiz araçlar listesi: /araclar sayfası, sitemap, footer ve llms.txt buradan beslenir.
export interface Arac {
  slug: string
  ad: string
  kisa: string
  hizmet: string
}

export const araclar: Arac[] = [
  { slug: 'whatsapp-link-olusturucu', ad: 'WhatsApp Link Oluşturucu', kisa: 'Telefon numaranız ve hazır mesajınızla tek tıkla WhatsApp sohbeti açan bağlantı üretin.', hizmet: 'Web Tasarım' },
  { slug: 'google-yorum-linki', ad: 'Google Yorum Linki Oluşturucu', kisa: 'Müşterilerinizi doğrudan Google yorum ekranına götüren bağlantıyı Place ID ile oluşturun.', hizmet: 'Yerel SEO' },
  { slug: 'google-ads-butce-hesaplayici', ad: 'Google Ads Bütçe Hesaplayıcı', kisa: 'Hedef aday sayınıza göre gereken tıklama, aylık ve günlük reklam bütçesini hesaplayın.', hizmet: 'Google Ads' },
  { slug: 'meta-baslik-kontrol', ad: 'Meta Başlık ve Açıklama Kontrol', kisa: 'Başlık ve açıklama uzunluğunuzu sayın, Google sonuç önizlemesini görün.', hizmet: 'SEO' },
]
