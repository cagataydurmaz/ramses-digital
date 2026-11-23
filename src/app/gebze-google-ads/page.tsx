import { Target, MapPin, BarChart3, Filter, Clock, ShieldCheck } from 'lucide-react'
import GebzeHizmetSayfasi, { gebzeMetadata, type GebzeHizmetVeri } from '@/components/GebzeHizmetSayfasi'

const v: GebzeHizmetVeri = {
  slug: 'gebze-google-ads',
  baslik: 'Gebze Google Ads',
  h1: 'Gebze Google Ads',
  h1Vurgu: 'Ölçülebilir Reklam Yönetimi',
  giris: "Gebze'de hizmetinizi ya da ürününüzü arayan müşteriye tam o anda ulaşın. Yerel hizmetlerden sanayi tedarikçilerine, her tıklamanın neye dönüştüğünü ölçen Google Ads yönetimi.",
  kisaOzet: "Gebze'deki işletmeler için Google Ads kampanyalarını kuruyor ve yönetiyoruz: arama reklamları, mobilde arama butonu ve yalnızca hizmet verdiğiniz bölgeye konum hedeflemesi. Telefon, WhatsApp ve form talepleri ölçülür; reklam bütçesi doğrudan Google'a ödenir. Fiyat için aşağıdaki AI teklif hesaplayıcıyı kullanabilirsiniz.",
  metaTitle: 'Gebze Google Ads (AdWords) Yönetimi | Ramses Dijital',
  metaDesc: "Gebze'de Google Ads yönetimi: arama reklamları, konum hedefleme ve ölçülebilir dönüşüm. İzmit merkezli ekip, taahhüt yok. Google'da 5.0 puan.",
  hizmetAdi: 'Gebze Google Ads Yönetimi',
  kartlar: [
    { icon: Target, title: 'Arama reklamları', desc: "'Gebze + hizmet/ürün' arayanlara görünün; satın alma niyeti en yüksek trafik." },
    { icon: MapPin, title: 'Konum hedefleme', desc: 'Reklamlar yalnızca hizmet verdiğiniz bölgelere gösterilir: Gebze, Darıca, Çayırova, Dilovası gibi.' },
    { icon: BarChart3, title: 'Dönüşüm ölçümü', desc: 'Telefon, WhatsApp ve form talepleri ölçülür; hangi reklamın iş getirdiği görülür.' },
    { icon: Filter, title: 'Gereksiz tıklama ayıklama', desc: "İş ilanı, 'ücretsiz' ve alakasız aramalar negatif kelimelerle dışarıda bırakılır." },
    { icon: Clock, title: 'Saat ve gün ayarı', desc: 'Telefona bakamadığınız saatlerde reklam kapatılır, yoğun saatlerde öne çıkarılır.' },
    { icon: ShieldCheck, title: 'Hesap sizin adınıza', desc: 'Google Ads hesabı size ait olur; ayrılsanız bile veriler ve kampanya geçmişi sizde kalır.' },
  ],
  kutuBaslik: 'Sanayi firmaları için Google Ads',
  kutuMetin: "Gebze'deki üretici ve tedarikçiler için reklam, genel kelimeler yerine ürün ve hizmet adlarıyla kurulduğunda verimli olur. Satın almacıların aradığı terimler, teklif formu ve gerekiyorsa İngilizce açılış sayfasıyla birlikte planlanır. Avukatlık gibi reklam kısıtı olan meslekler için reklam yerine SEO öneriyoruz.",
  sss: [
    { q: "Gebze'de Google Ads ne kadar bütçe gerektirir?", a: "Sektöre, rekabete ve hedeflediğiniz müşteri sayısına göre değişir. Reklam bütçesi doğrudan sizin hesabınızdan Google'a ödenir; yönetim ücretimiz ayrı bir kalemdir. İşletmenize özel tahmini teklifi AI teklif hesaplayıcı ile görebilir, bütçe önerisini ücretsiz ön görüşmede netleştirebilirsiniz." },
    { q: 'Reklam ne zaman sonuç verir?', a: 'Reklamlar onaylandığı gün yayına girer. Kampanyanın verimli hale gelmesi, yani alakasız aramaların ayıklanıp en iyi çalışan kelimelerin bulunması, genellikle ilk birkaç haftalık veriyle olur.' },
    { q: 'Google Ads mi, SEO mu?', a: 'Reklam hemen görünürlük sağlar ama bütçe durunca trafik de durur. SEO zamanla birikir. Gebze gibi rekabetin yüksek olduğu yerlerde çoğu işletme için en iyi sonuç ikisinin birlikte kullanılmasıdır.' },
    { q: 'Yüz yüze görüşebilir miyiz?', a: "Evet. İzmit merkezli bir ekibiz; Gebze'deki işletmelerle gerektiğinde yüz yüze görüşme ayarlayabiliyoruz." },
  ],
  ilgili: [
    { label: 'Gebze SEO', href: '/gebze-seo' },
    { label: 'Gebze Dijital Pazarlama', href: '/gebze-dijital-pazarlama' },
    { label: 'Gebze Web Tasarım', href: '/ilceler/gebze' },
    { label: 'Kocaeli Google Ads', href: '/kocaeli-google-ads' },
    { label: 'Google Ads Fiyatları 2026', href: '/blog/google-ads-fiyatlari-2026' },
  ],
  cta: "Gebze'de Reklamlarınızı Ölçülebilir Hale Getirelim",
}

export const metadata = gebzeMetadata(v)
export default function Page() {
  return <GebzeHizmetSayfasi v={v} />
}
