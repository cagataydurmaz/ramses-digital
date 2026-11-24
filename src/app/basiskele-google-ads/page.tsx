import { Search, Target, Phone, Ban, MapPin, BarChart3 } from 'lucide-react'
import GebzeHizmetSayfasi, { gebzeMetadata, type GebzeHizmetVeri } from '@/components/GebzeHizmetSayfasi'

const v: GebzeHizmetVeri = {
  slug: 'basiskele-google-ads',
  yer: { ad: 'Başiskele', seoSlug: 'basiskele-seo' },
  baslik: 'Başiskele Google Ads',
  h1: 'Başiskele Google Ads',
  h1Vurgu: 'AdWords Danışmanı ve Reklam Yönetimi',
  giris: 'Başiskele’deki klinik, emlak, kafe ve hizmet işletmeleri için Google Ads (eski adıyla AdWords) kurulumu, reklam yönetimi ve ölçümü. İzmit merkezli ekip.',
  kisaOzet: 'Başiskele’de Google Ads, İzmit, Kartepe ve Gölcük’ten hizmet arayan kişiye o anda görünmenizi sağlar. Kampanyayı semt ve hizmet adlarıyla kuruyor, alakasız tıklamaları ayıklıyor, telefon ve WhatsApp taleplerini ölçüyoruz. 6 ay ve üzeri çalışmada yönetim ücretinde %10 indirim var. Fiyat için AI teklif hesaplayıcıyı kullanabilirsiniz.',
  metaTitle: 'Başiskele Google Ads – AdWords Danışmanı | Ramses Dijital',
  metaDesc: 'Başiskele’de Google Ads (AdWords) danışmanlığı ve reklam yönetimi: semt hedefli kampanya, ölçülen telefon ve WhatsApp talepleri. İzmit merkezli ekip.',
  hizmetAdi: 'Başiskele Google Ads Yönetimi',
  kartlar: [
    { icon: MapPin, title: 'Yakın bölge hedefi', desc: 'Başiskele, İzmit merkez, Kartepe ve Gölcük; hizmet verdiğiniz yarıçapın dışına gösterim yapılmaz.' },
    { icon: Search, title: 'Hizmet adıyla kelimeler', desc: 'Genel kelimeler yerine “başiskele diş kliniği”, “yuvacık emlak” gibi niyetli aramalar.' },
    { icon: Ban, title: 'Boşa tıklama ayıklama', desc: 'İş ilanı ve alakasız aramalar haftalık kontrolle hariç tutulur.' },
    { icon: Phone, title: 'Arama ve WhatsApp ölçümü', desc: 'Reklamdan gelen her arama ve mesaj ölçülür; hangi reklamın müşteri getirdiği görülür.' },
    { icon: Target, title: 'Reklam metni ve uzantılar', desc: 'Konum, arama butonu ve hizmet bağlantılarıyla güçlü reklam görünümü.' },
    { icon: BarChart3, title: 'Aylık şeffaf rapor', desc: 'Harcama, talep ve talep başı maliyet sade bir raporla.' },
  ],
  kutuBaslik: 'Başiskele’de küçük bütçeyle reklam verilir mi?',
  kutuMetin: 'Evet. Başiskele ve çevresi gibi dar bir bölgede, hizmet adlarıyla kurulmuş bir kampanya büyük şehirlere göre daha düşük rekabetle çalışır. Önemli olan ölçümün baştan kurulması ve boşa giden tıklamaların düzenli ayıklanmasıdır.',
  sss: [
    { q: 'Başiskele’de Google Ads için ne kadar bütçe gerekir?', a: 'Sektöre göre değişir. Küçük bir test bütçesiyle başlayıp talep başı maliyeti gördükten sonra karar vermek en güvenli yoldur. Tahmini yönetim ücretini AI teklif hesaplayıcıda görebilirsiniz.' },
    { q: 'AdWords ile Google Ads aynı şey mi?', a: 'Evet. Google’ın reklam platformunun eski adı AdWords’tü; bugün Google Ads olarak geçiyor.' },
    { q: 'Avukat veya eczane için reklam verilebilir mi?', a: 'Reklam kısıtı olan mesleklerde Google Ads önermiyoruz; bunun yerine SEO ve bilgilendirici içerikle görünürlük sağlıyoruz.' },
    { q: 'Taahhüt var mı?', a: 'En az 3 ay öneriyoruz; 6 ay ve üzeri taahhütte yönetim ücretine %10 indirim uyguluyoruz.' },
  ],
  ilgili: [
    { label: 'Başiskele Dijital Pazarlama', href: '/basiskele-dijital-pazarlama' },
    { label: 'Başiskele SEO', href: '/basiskele-seo' },
    { label: 'Kartepe Google Ads', href: '/kartepe-google-ads' },
    { label: 'İzmit Google Ads', href: '/izmit-google-ads' },
  ],
  cta: 'Başiskele’de Reklamı Ölçülebilir Kuralım',
}

export const metadata = gebzeMetadata(v)
export default function Page() {
  return <GebzeHizmetSayfasi v={v} />
}
