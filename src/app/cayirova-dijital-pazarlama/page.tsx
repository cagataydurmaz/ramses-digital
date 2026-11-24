import { Search, Megaphone, Monitor, Truck, MapPin, BarChart3 } from 'lucide-react'
import GebzeHizmetSayfasi, { gebzeMetadata, type GebzeHizmetVeri } from '@/components/GebzeHizmetSayfasi'

const v: GebzeHizmetVeri = {
  slug: 'cayirova-dijital-pazarlama',
  yer: { ad: 'Çayırova', seoSlug: 'cayirova-seo' },
  baslik: 'Çayırova Dijital Pazarlama',
  h1: 'Çayırova Dijital Pazarlama',
  h1Vurgu: 'Tedarikçi ve Yerel İşletmeler İçin',
  giris: "Şekerpınar, Akse ve TOSB çevresindeki otomotiv tedarikçileri, lojistik firmaları ve Çayırova'daki yerel işletmeler için web sitesi, SEO, Google Ads ve Google İşletme Profili'ni tek planda yürüten İzmit merkezli ekip.",
  kisaOzet: "Çayırova'da dijital pazarlama iki farklı kitleye hitap eder: tedarikçi arayan satın alma ekipleri ve hizmet arayan yerel müşteriler. Birincisi için ürün ve kapasite sayfaları, ikincisi için harita görünürlüğü ve hızlı iletişim kuruyoruz. Fiyat için AI teklif hesaplayıcıyı kullanabilirsiniz; sıralama garantisi verilmez.",
  metaTitle: 'Çayırova Dijital Pazarlama – Web, SEO, Reklam | Ramses',
  metaDesc: "Çayırova ve Şekerpınar'daki tedarikçi, lojistik ve yerel işletmeler için web sitesi, SEO, Google Ads ve Google İşletme Profili. İzmit merkezli ekip.",
  hizmetAdi: 'Çayırova Dijital Pazarlama Hizmeti',
  kartlar: [
    { icon: Monitor, title: 'Kurumsal web sitesi', desc: 'Ürün, kapasite ve belgeleri net anlatan, teklif formu olan site.' },
    { icon: Search, title: 'SEO', desc: "'Çayırova / Şekerpınar + ürün ya da hizmet' aramalarında görünürlük." },
    { icon: Truck, title: 'Lojistik ve tedarik sayfaları', desc: 'Depo, nakliye ve tedarik hizmetleri için kapasite ve güzergâh sayfaları.' },
    { icon: MapPin, title: 'Google İşletme Profili', desc: 'Akse ve Çayırova merkezdeki yerel işletmeler için harita görünürlüğü.' },
    { icon: Megaphone, title: 'Google Ads (AdWords)', desc: 'Gerektiğinde ürün adlarıyla, bölge hedefli ve ölçülebilir kampanyalar.' },
    { icon: BarChart3, title: 'Aylık rapor', desc: 'Hangi sayfa ve kanalın talep getirdiğini gösteren şeffaf rapor.' },
  ],
  kutuBaslik: 'İki kitle, iki yaklaşım',
  kutuMetin: 'Tedarikçi firmalar için karar uzun sürer ve teknik bilgi önemlidir; yerel işletmeler için ise hız, harita ve tek dokunuşla iletişim belirleyicidir. Çayırova planı bu iki yaklaşımı ayrı sayfalarla kurar ve her ay ölçer.',
  sss: [
    { q: "Çayırova'daki bir tedarikçi dijital pazarlamaya nereden başlamalı?", a: 'Ürün ve kapasiteyi anlatan kurumsal bir site, doğru Google İşletme Profili ve teklif formu. Ardından ürün başına SEO sayfaları; ihracat varsa İngilizce sürüm.' },
    { q: 'Şekerpınar için ayrı çalışma yapıyor musunuz?', a: "Evet. Şekerpınar aramaları ayrı yapıldığı için Şekerpınar SEO sayfamız ve bölgeye özel içerik planımız var; Çayırova genelindeki çalışmayla birlikte yürütülür." },
    { q: 'Fiyatlandırma nasıl?', a: 'Seçtiğiniz hizmetlere ve sayfa sayısına göre değişir. AI teklif hesaplayıcı ile tahmini teklifi görebilir, kesin kapsamı ücretsiz ön görüşmede netleştirebilirsiniz.' },
    { q: 'Yüz yüze görüşebilir miyiz?', a: "Evet. İzmit merkezli bir ekibiz; Çayırova'daki firmalarla gerektiğinde yüz yüze görüşme ayarlayabiliyoruz." },
  ],
  ilgili: [
    { label: 'Çayırova SEO', href: '/cayirova-seo' },
    { label: 'Şekerpınar SEO', href: '/sekerpinar-seo' },
    { label: 'Çayırova Web Tasarım', href: '/ilceler/cayirova' },
    { label: 'Gebze Dijital Pazarlama', href: '/gebze-dijital-pazarlama' },
    { label: 'Dilovası Dijital Pazarlama', href: '/dilovasi-dijital-pazarlama' },
  ],
  cta: "Çayırova'da Dijital Büyümeyi Birlikte Planlayalım",
}

export const metadata = gebzeMetadata(v)
export default function Page() {
  return <GebzeHizmetSayfasi v={v} />
}
