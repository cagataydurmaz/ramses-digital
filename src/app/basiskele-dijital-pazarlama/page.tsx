import { Search, Megaphone, Monitor, MapPin, Home, BarChart3 } from 'lucide-react'
import GebzeHizmetSayfasi, { gebzeMetadata, type GebzeHizmetVeri } from '@/components/GebzeHizmetSayfasi'

const v: GebzeHizmetVeri = {
  slug: 'basiskele-dijital-pazarlama',
  yer: { ad: 'Başiskele', seoSlug: 'basiskele-seo' },
  haritaArama: 'başiskele kahvaltı',
  baslik: 'Başiskele Dijital Pazarlama',
  h1: 'Başiskele Dijital Ajans',
  h1Vurgu: 'Yerel İşletmeler İçin Dijital Pazarlama',
  giris: 'Başiskele’deki kafe, kahvaltı mekânı, klinik, emlak ve ev hizmeti işletmeleri için web sitesi, yerel SEO, Google Ads ve sosyal medyayı birlikte yürüten İzmit merkezli dijital ajans.',
  kisaOzet: 'Başiskele’de müşteri iki yerden gelir: hafta sonu doğa ve kahvaltı için gelen ziyaretçi ile Yuvacık, Bahçecik, Kullar ve Seymen’de yaşayan aileler. Ziyaretçi için harita profili ve fotoğraf; yerleşik kitle için semt adıyla SEO ve hizmet sayfaları kuruyoruz. İzmit merkezli olduğumuz için yüz yüze görüşebiliriz. Fiyat için AI teklif hesaplayıcıyı kullanabilirsiniz; sıralama garantisi verilmez.',
  metaTitle: 'Başiskele Dijital Ajans – Dijital Pazarlama | Ramses Dijital',
  metaDesc: 'Başiskele’de kafe, klinik, emlak ve ev hizmetleri için web sitesi, yerel SEO, Google Ads ve sosyal medya. İzmit merkezli ekip, yüz yüze görüşme.',
  hizmetAdi: 'Başiskele Dijital Pazarlama Hizmeti',
  kartlar: [
    { icon: MapPin, title: 'Harita görünürlüğü', desc: 'Yuvacık ve sahil çevresindeki mekânlar için eksiksiz işletme profili, güncel fotoğraf ve yorum yönetimi.' },
    { icon: Home, title: 'Ev ve bahçe hizmetleri', desc: 'Müstakil konut ve site yaşamına yönelik peyzaj, havuz, tadilat ve temizlik işleri için hizmet sayfaları.' },
    { icon: Search, title: 'Semt bazlı SEO', desc: 'Bahçecik, Kullar, Seymen gibi semt adlarıyla yapılan aramalarda görünürlük.' },
    { icon: Monitor, title: 'Hızlı mobil site', desc: 'Tek dokunuşla arama, WhatsApp ve yol tarifi; telefonda hızlı açılan sayfalar.' },
    { icon: Megaphone, title: 'Google Ads (AdWords)', desc: 'İzmit ve Gölcük’ü de kapsayan, bölgeye göre ayarlanmış ölçülebilir kampanyalar.' },
    { icon: BarChart3, title: 'Aylık rapor', desc: 'Hangi kanaldan arama, mesaj ve yol tarifi geldiğini gösteren sade rapor.' },
  ],
  kutuBaslik: 'Başiskele’de işletmeler neden İzmit aramalarında da görünmeli?',
  kutuMetin: 'Başiskele ile İzmit merkez arası kısa bir yol; pek çok müşteri “izmit + hizmet” diye arayıp Başiskele’deki işletmeye gelir. Sitede ve profilde hizmet verdiğiniz bölgeyi doğru tanımlamak iki tarafın müşterisini de yakalamanızı sağlar.',
  sss: [
    { q: 'Başiskele’deki küçük bir işletme dijital pazarlamaya nereden başlamalı?', a: 'Google İşletme Profili ve basit, hızlı bir siteyle. Ardından en çok aranan hizmetiniz için semt adını da içeren bir sayfa ve düzenli yorum toplama.' },
    { q: 'Google Ads (AdWords) gerekli mi?', a: 'Hemen talep gerekiyorsa evet; küçük ve ölçülen bir bütçeyle başlanır. Uzun vadede harita profili ve SEO reklama olan bağımlılığı azaltır.' },
    { q: 'Sosyal medya da yapıyor musunuz?', a: 'Evet; mekân ve hizmetinizi gösteren gönderi ve Reels içerikleri hazırlıyoruz.' },
    { q: 'Yüz yüze görüşebilir miyiz?', a: 'Evet. İzmit merkezli bir ekibiz; Başiskele’deki işletmelerle gerektiğinde yüz yüze görüşme ayarlayabiliyoruz.' },
  ],
  ilgili: [
    { label: 'Başiskele SEO', href: '/basiskele-seo' },
    { label: 'Başiskele Google Ads', href: '/basiskele-google-ads' },
    { label: 'Başiskele Web Tasarım', href: '/ilceler/basiskele' },
    { label: 'Kartepe Dijital Pazarlama', href: '/kartepe-dijital-pazarlama' },
    { label: 'İzmit Dijital Pazarlama', href: '/izmit-dijital-pazarlama' },
  ],
  cta: 'Başiskele’de Daha Çok Müşteriye Ulaşalım',
}

export const metadata = gebzeMetadata(v)
export default function Page() {
  return <GebzeHizmetSayfasi v={v} />
}
