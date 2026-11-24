import { Search, Target, CalendarClock, Phone, Ban, BarChart3 } from 'lucide-react'
import GebzeHizmetSayfasi, { gebzeMetadata, type GebzeHizmetVeri } from '@/components/GebzeHizmetSayfasi'

const v: GebzeHizmetVeri = {
  slug: 'kartepe-google-ads',
  yer: { ad: 'Kartepe', seoSlug: 'kartepe-seo' },
  baslik: 'Kartepe Google Ads',
  h1: 'Kartepe Google Ads',
  h1Vurgu: 'AdWords Danışmanı ve Reklam Yönetimi',
  giris: 'Kartepe’deki otel, bungalov, restoran, emlak ve hizmet işletmeleri için Google Ads (eski adıyla AdWords) kurulumu, yönetimi ve ölçümü. İzmit merkezli ekip.',
  kisaOzet: 'Kartepe’de Google Ads, hafta sonu kaçamağı planlayan İstanbul ve Kocaeli’deki kişiye tam araştırma yaptığı anda görünmenizi sağlar. Kampanyaları sezon takvimine göre kuruyor, alakasız aramaları ayıklıyor, telefon ve WhatsApp taleplerini ölçüyoruz. 6 ay ve üzeri çalışmada yönetim ücretinde %10 indirim var. Fiyat için AI teklif hesaplayıcıyı kullanabilirsiniz.',
  metaTitle: 'Kartepe Google Ads – AdWords Danışmanı | Ramses Dijital',
  metaDesc: 'Kartepe’de Google Ads (AdWords) danışmanlığı ve reklam yönetimi: sezona göre kampanya, ölçülen telefon ve WhatsApp talepleri. İzmit merkezli ekip.',
  hizmetAdi: 'Kartepe Google Ads Yönetimi',
  kartlar: [
    { icon: CalendarClock, title: 'Sezon takvimli kampanya', desc: 'Kayak sezonu, bayram ve hafta sonlarına göre artıp azalan bütçe; boş haftalara para harcanmaz.' },
    { icon: Target, title: 'Doğru bölge hedefi', desc: 'İstanbul, Kocaeli ve Sakarya’dan Kartepe’ye gelmeyi planlayanlar; yanlış şehirlere gösterim kapatılır.' },
    { icon: Search, title: 'Niyetli kelimeler', desc: '“Kartepe bungalov”, “Maşukiye otel” gibi rezervasyon niyeti taşıyan aramalar.' },
    { icon: Ban, title: 'Boşa tıklama ayıklama', desc: 'İş ilanı, ücretsiz ve alakasız aramalar haftalık kontrolle hariç tutulur.' },
    { icon: Phone, title: 'Telefon ve WhatsApp ölçümü', desc: 'Reklamdan gelen arama ve mesajlar ayrı ayrı ölçülür; hangi kelimenin müşteri getirdiği görülür.' },
    { icon: BarChart3, title: 'Aylık şeffaf rapor', desc: 'Harcama, talep ve talep başı maliyet sade bir raporla.' },
  ],
  kutuBaslik: 'Kartepe’de reklam bütçesi neden boşa gidebilir?',
  kutuMetin: 'Turizm aramalarında rakipler büyük rezervasyon siteleridir. Genel kelimelerle ve tüm Türkiye’ye açık kurulan bir kampanya hızla bütçe tüketir. Dar, niyetli kelimeler ve doğru bölge hedefiyle küçük bütçe bile ölçülebilir talep getirebilir.',
  sss: [
    { q: 'Kartepe’de Google Ads için ne kadar bütçe gerekir?', a: 'İşletmeye ve sezona göre değişir. Küçük bir test bütçesiyle başlayıp talep başı maliyeti görünce artırmak en güvenli yoldur. Tahmini yönetim ücretini AI teklif hesaplayıcıda görebilirsiniz.' },
    { q: 'AdWords ile Google Ads aynı şey mi?', a: 'Evet. Google’ın reklam platformunun eski adı AdWords’tü; 2018’den beri Google Ads olarak geçiyor.' },
    { q: 'Reklam durunca ne olur?', a: 'Reklamdan gelen görünürlük de durur. Bu yüzden uzun vadede harita profili ve SEO ile birlikte yürütmeyi öneriyoruz.' },
    { q: 'Taahhüt var mı?', a: 'Algoritmanın öğrenmesi için en az 3 ay öneriyoruz; 6 ay ve üzeri taahhütte yönetim ücretine %10 indirim uyguluyoruz.' },
  ],
  ilgili: [
    { label: 'Kartepe Dijital Pazarlama', href: '/kartepe-dijital-pazarlama' },
    { label: 'Kartepe SEO', href: '/kartepe-seo' },
    { label: 'Başiskele Google Ads', href: '/basiskele-google-ads' },
    { label: 'Kocaeli Google Ads', href: '/kocaeli-google-ads' },
  ],
  cta: 'Kartepe’de Reklamı Doğru Kuralım',
}

export const metadata = gebzeMetadata(v)
export default function Page() {
  return <GebzeHizmetSayfasi v={v} />
}
