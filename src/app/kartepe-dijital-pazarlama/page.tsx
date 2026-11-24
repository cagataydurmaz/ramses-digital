import { Search, Megaphone, Monitor, MapPin, Share2, BarChart3 } from 'lucide-react'
import GebzeHizmetSayfasi, { gebzeMetadata, type GebzeHizmetVeri } from '@/components/GebzeHizmetSayfasi'

const v: GebzeHizmetVeri = {
  slug: 'kartepe-dijital-pazarlama',
  yer: { ad: 'Kartepe', seoSlug: 'kartepe-seo' },
  haritaArama: 'kartepe bungalov',
  baslik: 'Kartepe Dijital Pazarlama',
  h1: 'Kartepe Dijital Ajans',
  h1Vurgu: 'Turizm ve Yerel İşletmeler İçin',
  giris: 'Kartepe’deki otel, bungalov, restoran ve yerel işletmeler için web sitesi, yerel SEO, Google Ads ve sosyal medyayı tek planda yürüten İzmit merkezli dijital ajans.',
  kisaOzet: 'Kartepe’de dijital pazarlama iki ayrı kitleye ulaşmak demek: İstanbul ve çevreden hafta sonu gelen ziyaretçi ve ilçede yaşayan aileler. Ziyaretçi için sezona göre güncellenen harita profili, rezervasyon odaklı site ve Google Ads; yerel kitle için semt adıyla SEO kuruyoruz. İzmit merkezli olduğumuz için gerektiğinde yüz yüze görüşebiliriz. Fiyat için AI teklif hesaplayıcıyı kullanabilirsiniz; sıralama garantisi verilmez.',
  metaTitle: 'Kartepe Dijital Ajans – Dijital Pazarlama | Ramses Dijital',
  metaDesc: 'Kartepe’de otel, bungalov, restoran ve yerel işletmeler için web sitesi, yerel SEO, Google Ads ve sosyal medya. İzmit merkezli ekip, yüz yüze görüşme.',
  hizmetAdi: 'Kartepe Dijital Pazarlama Hizmeti',
  kartlar: [
    { icon: MapPin, title: 'Harita ve işletme profili', desc: 'Maşukiye, kayak merkezi ve göl çevresinde “yakınımdaki” aramalarında görünmek için eksiksiz profil, güncel fotoğraf ve yorum yönetimi.' },
    { icon: Monitor, title: 'Rezervasyon odaklı site', desc: 'Oda, bungalov veya masa için WhatsApp ve telefonla tek dokunuşta rezervasyon; hızlı açılan mobil site.' },
    { icon: Search, title: 'Yerel SEO', desc: '“Kartepe bungalov”, “Maşukiye kahvaltı” gibi aramalar için sezona göre güncellenen sayfalar.' },
    { icon: Megaphone, title: 'Google Ads (AdWords)', desc: 'Hafta sonu ve sezon öncesi yoğunlaşan, İstanbul ve Kocaeli’den arayanları hedefleyen kampanyalar.' },
    { icon: Share2, title: 'Sosyal medya içeriği', desc: 'Kar, göl ve doğa manzarasını öne çıkaran Reels ve gönderiler; içerik takvimi.' },
    { icon: BarChart3, title: 'Aylık rapor', desc: 'Hangi kanalın rezervasyon ve arama getirdiğini gösteren şeffaf rapor.' },
  ],
  kutuBaslik: 'Kartepe’de dijital pazarlama neden mevsime göre değişir?',
  kutuMetin: 'Kışın kayak, yazın doğa ve göl; ziyaretçinin aradığı şey sezona göre değişir. Harita fotoğrafları, sayfa başlıkları ve reklam metinleri sezondan önce güncellenmezse en yoğun haftalar kaçırılır. Plan bu takvime göre kurulur.',
  sss: [
    { q: 'Kartepe’deki bir bungalov veya otel için en önemli dijital kanal hangisi?', a: 'Çoğu zaman Google Haritalar. Ziyaretçi yola çıkmadan önce haritadan fotoğraflara, yorumlara ve yol tarifine bakar. Eksiksiz profil ve doğrudan rezervasyon yolu olan bir site birlikte çalışır.' },
    { q: 'Google Ads (AdWords) sezon dışında da açık kalmalı mı?', a: 'Bütçeyi sezon öncesi ve hafta sonlarına yoğunlaştırmak genelde daha verimli olur. Sezon dışında küçük bir bütçeyle marka aramalarını korumak yeterli olabilir.' },
    { q: 'Rezervasyon sitelerine komisyon ödüyorum, kendi sitem işe yarar mı?', a: 'Kendi siteniz ve harita profiliniz doğrudan rezervasyon getirirse komisyon payı azalır. İki kanal birlikte kullanılabilir; amaç doğrudan gelen müşteriyi artırmaktır.' },
    { q: 'Yüz yüze görüşebilir miyiz?', a: 'Evet. İzmit merkezli bir ekibiz; Kartepe’deki işletmelerle gerektiğinde yüz yüze görüşme ayarlayabiliyoruz.' },
  ],
  ilgili: [
    { label: 'Kartepe SEO', href: '/kartepe-seo' },
    { label: 'Kartepe Google Ads', href: '/kartepe-google-ads' },
    { label: 'Kartepe Web Tasarım', href: '/ilceler/kartepe' },
    { label: 'Başiskele Dijital Pazarlama', href: '/basiskele-dijital-pazarlama' },
    { label: 'Kocaeli Dijital Pazarlama', href: '/kocaeli-dijital-pazarlama' },
  ],
  cta: 'Kartepe’de Sezonu Dolu Geçirelim',
}

export const metadata = gebzeMetadata(v)
export default function Page() {
  return <GebzeHizmetSayfasi v={v} />
}
