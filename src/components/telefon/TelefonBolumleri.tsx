import TelefonBolumu from './TelefonBolumu'
import BilgiVideosu from '@/components/BilgiVideosu'
import SiteKaydirmaTelefon from './SiteKaydirmaTelefon'
import WhatsAppTelefon from './WhatsAppTelefon'
import ChatbotTelefon from './ChatbotTelefon'
import AsistaniDeneButonu from './AsistaniDeneButonu'

// Hazır telefon animasyonlu bölümler; sayfalara tek satırla eklenir.
export function WebSitesiTelefonBolumu({ ters = false }: { ters?: boolean }) {
  return (
    <TelefonBolumu
      ters={ters}
      ust="Gerçek Projeler"
      baslik="Telefonda Kusursuz Görünen Siteler"
      metin="Ziyaretçilerin çoğu sitenize telefondan girer. Yaptığımız sitelerin gerçek telefon görünümleri: hızlı açılır, kolay okunur, tek dokunuşla arama ve WhatsApp sunar."
      maddeler={['Mobil öncelikli tasarım ve hızlı açılış', 'Görünür arama ve WhatsApp düğmeleri', 'Her sayfada net bir sonraki adım: teklif, randevu, iletişim']}
    >
      <SiteKaydirmaTelefon />
    </TelefonBolumu>
  )
}

export function WhatsAppTelefonBolumu({ ters = false }: { ters?: boolean }) {
  return (
    <TelefonBolumu
      ters={ters}
      ust="Müşteri Akışı"
      baslik="Siteden Gelen Müşteri Doğrudan WhatsApp'ınızda"
      metin="Ziyaretçi sitenizde bir düğmeye bastığında konu ve sayfa bilgisiyle hazır bir mesaj açılır. İsterseniz ilk cevap, randevu ve hatırlatma da otomatik yürür."
      maddeler={['Hangi sayfadan, hangi hizmet için yazdığı mesajda görünür', 'Mesai dışında otomatik ilk cevap', 'Randevu, hatırlatma ve müşteri kaydı otomasyonu (n8n)']}
    >
      <WhatsAppTelefon />
    </TelefonBolumu>
  )
}

export function HaritaTelefonBolumu({ arama, yer, ters = false }: { arama?: string; yer?: string; ters?: boolean }) {
  return (
    <TelefonBolumu
      ters={ters}
      ust="Yerel SEO"
      baslik={yer ? `${yer} Haritasında Öne Çıkın` : 'Google Haritalar’da Öne Çıkın'}
      metin="Yakınındaki işletmeyi arayan müşteri önce haritaya bakar. Eksiksiz bir Google İşletme Profili, gerçek yorumlar ve güçlü bir web sitesi, haritada görünürlüğü birlikte artırır."
      maddeler={['Doğru kategori, hizmet bölgesi ve çalışma saatleri', 'Teşviksiz, düzenli müşteri yorumu düzeni', 'Profil ile web sitesinin birbirini desteklemesi']}
    >
      <BilgiVideosu ad="isletme-profili" baslik="Google İşletme Profili neden önemli? (kısa video)" />
    </TelefonBolumu>
  )
}

export function ChatbotTelefonBolumu({ ters = false }: { ters?: boolean }) {
  return (
    <TelefonBolumu
      ters={ters}
      ust="Yeni Hizmet · Yapay Zekâ"
      baslik="Sitenize Yapay Zekâ Asistanı Kuruyoruz"
      metin="Sitenizi ziyaret eden müşterinin sorularını gece gündüz yanıtlayan, işletmenizi tanıyan bir asistan. Randevu ve teklif taleplerini toplayıp doğrudan WhatsApp'ınıza iletir; siz sadece dönüş yaparsınız."
      maddeler={[
        'İşletmenizin hizmetlerini, çalışma saatlerini ve sık sorulan sorularını bilir',
        'Ad, telefon ve ihtiyacı toplayıp onayla WhatsApp’ınıza özet gönderir',
        'Sizin kurallarınıza göre konuşur: fiyat vermez, söz vermez, uydurmaz',
        'Sağlık, hukuk gibi kurallı sektörlerde iddiasız, mevzuata uygun dil',
      ]}
      ek={<AsistaniDeneButonu />}
    >
      <ChatbotTelefon />
    </TelefonBolumu>
  )
}

// "SEO nedir?" kısa video bölümü
export function SeoVideoBolumu({ ters = false }: { ters?: boolean }) {
  return (
    <TelefonBolumu
      ters={ters}
      ust="25 saniyede SEO"
      baslik="SEO Nedir, İşletmenize Ne Kazandırır?"
      metin="Müşterileriniz bir hizmeti çoğunlukla Google’da arayarak bulur ve ilk sayfadaki sonuçlardan birini seçer. SEO, reklam vermeden bu sonuçlarda yer almanızı sağlayan çalışmaların bütünüdür."
      maddeler={['Hızlı ve mobil uyumlu bir web sitesi', 'Müşterinin aradığı sorulara net cevap veren içerik', 'Google Haritalar’da eksiksiz bir işletme profili']}
    >
      <BilgiVideosu ad="seo-nedir" baslik="SEO nedir? (kısa video)" />
    </TelefonBolumu>
  )
}
