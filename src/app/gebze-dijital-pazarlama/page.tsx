import { Search, Megaphone, Monitor, MapPin, BarChart3, Bot } from 'lucide-react'
import GebzeHizmetSayfasi, { gebzeMetadata, type GebzeHizmetVeri } from '@/components/GebzeHizmetSayfasi'

const v: GebzeHizmetVeri = {
  slug: 'gebze-dijital-pazarlama',
  baslik: 'Gebze Dijital Pazarlama',
  h1: 'Gebze Dijital Pazarlama Ajansı',
  h1Vurgu: 'Site, SEO ve Reklam Tek Elde',
  giris: "Gebze'deki üretici, tedarikçi ve yerel işletmeler için web sitesi, SEO, Google Ads ve Google İşletme Profili'ni birlikte planlayan, İzmit merkezli dijital pazarlama ekibi.",
  kisaOzet: "Gebze'de dijital pazarlamayı tek bir plan olarak yürütüyoruz: hızlı ve güven veren bir web sitesi, 'gebze + hizmet' aramaları için SEO, gerekiyorsa Google Ads ve haritada görünürlük. Her ay hangi kanalın talep getirdiğini raporluyoruz. Fiyat için aşağıdaki AI teklif hesaplayıcıyı kullanabilirsiniz; sıralama garantisi verilmez.",
  metaTitle: 'Gebze Dijital Pazarlama Ajansı – SEO, Reklam, Web | Ramses Dijital',
  metaDesc: "Gebze'de dijital pazarlama ajansı: web sitesi, SEO, Google Ads ve Google İşletme Profili tek planda. İzmit merkezli ekip, taahhüt yok. Google'da 5.0 puan.",
  hizmetAdi: 'Gebze Dijital Pazarlama Hizmeti',
  kartlar: [
    { icon: Monitor, title: 'Web sitesi', desc: 'Hızlı, mobil uyumlu, ürün/hizmet başına sayfası olan ve teklif toplayan kurumsal site.' },
    { icon: Search, title: 'SEO', desc: "'Gebze + ürün/hizmet' aramalarında görünürlük; teknik SEO ve içerik planı." },
    { icon: Megaphone, title: 'Google Ads', desc: 'Gerektiğinde, ölçülebilir ve bölge hedefli reklam kampanyaları.' },
    { icon: MapPin, title: 'Google İşletme Profili', desc: 'Haritada doğru kayıt, hizmet bölgeleri ve gerçek müşteri yorumları.' },
    { icon: Bot, title: 'Yapay zekâ aramaları', desc: 'ChatGPT ve Gemini gibi araçların alıntılayabileceği net içerik yapısı (GEO/AEO); sonuç garanti edilmez.' },
    { icon: BarChart3, title: 'Aylık rapor', desc: 'Ziyaret, arama, telefon ve WhatsApp talepleri; hangi kanalın işe yaradığı şeffaf biçimde.' },
  ],
  kutuBaslik: 'Neden tek plan?',
  kutuMetin: 'Site, SEO ve reklam ayrı ayrı yönetildiğinde birbirini desteklemez: reklam zayıf bir sayfaya trafik gönderir, SEO ölçülmeden ilerler. Tek planda hepsi aynı hedefe, yani telefon ve teklif talebine göre kurulur ve her ay ölçülür.',
  sss: [
    { q: "Gebze'deki bir işletme dijital pazarlamaya nereden başlamalı?", a: 'Önce temeller: hızlı bir web sitesi, eksiksiz Google İşletme Profili ve talep ölçümü. Ardından hizmet/ürün başına SEO sayfaları; hızlı sonuç gerekiyorsa küçük bir Google Ads bütçesiyle test.' },
    { q: 'Fiyatlandırma nasıl?', a: 'İşletmenizin büyüklüğüne ve seçtiğiniz hizmetlere göre değişir. Aşağıdaki AI teklif hesaplayıcı ile 4 adımda tahmini teklifi görebilir, kesin kapsamı ücretsiz ön görüşmede netleştirebilirsiniz.' },
    { q: 'Sözleşme veya taahhüt var mı?', a: 'Hayır, uzun dönem taahhüt istemiyoruz. Site, hesaplar ve tüm veriler sizin adınıza kalır.' },
    { q: 'Yüz yüze görüşebilir miyiz?', a: "Evet. İzmit merkezli bir ekibiz; Gebze'deki işletmelerle gerektiğinde yüz yüze görüşme ayarlayabiliyoruz." },
  ],
  ilgili: [
    { label: 'Gebze SEO', href: '/gebze-seo' },
    { label: 'Gebze Google Ads', href: '/gebze-google-ads' },
    { label: 'Gebze Web Tasarım', href: '/ilceler/gebze' },
    { label: 'Kocaeli Dijital Pazarlama', href: '/kocaeli-dijital-pazarlama' },
    { label: 'Dijital Pazarlama Ajansı Fiyatları', href: '/blog/dijital-pazarlama-ajansi-fiyatlari-2026' },
  ],
  cta: "Gebze'de Dijital Büyümeyi Birlikte Planlayalım",
}

export const metadata = gebzeMetadata(v)
export default function Page() {
  return <GebzeHizmetSayfasi v={v} />
}
