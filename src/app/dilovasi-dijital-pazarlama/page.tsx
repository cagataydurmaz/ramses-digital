import { Search, Megaphone, Monitor, Globe2, FileText, BarChart3 } from 'lucide-react'
import GebzeHizmetSayfasi, { gebzeMetadata, type GebzeHizmetVeri } from '@/components/GebzeHizmetSayfasi'

const v: GebzeHizmetVeri = {
  slug: 'dilovasi-dijital-pazarlama',
  yer: { ad: 'Dilovası', seoSlug: 'dilovasi-seo' },
  baslik: 'Dilovası Dijital Pazarlama',
  h1: 'Dilovası Dijital Pazarlama',
  h1Vurgu: 'Sanayi Firmaları İçin Dijital Ajans',
  giris: "Dilovası OSB ve liman çevresindeki üretici, tedarikçi ve lojistik firmaları için kurumsal web sitesi, SEO, Google Ads ve İngilizce tedarikçi sayfalarını tek planda yürüten İzmit merkezli ekip.",
  kisaOzet: "Dilovası'nda dijital pazarlama, büyük ölçüde satın alma ekiplerine ulaşmak demektir. Ürün ve kapasite bilgisini net veren kurumsal bir site, 'dilovası + ürün' aramaları için SEO, gerekiyorsa ölçülebilir Google Ads ve yabancı alıcılar için İngilizce sayfalar kuruyoruz. Fiyat için AI teklif hesaplayıcıyı kullanabilirsiniz; sıralama garantisi verilmez.",
  metaTitle: 'Dilovası Dijital Pazarlama Ajansı – Sanayi ve B2B | Ramses',
  metaDesc: "Dilovası OSB'deki sanayi ve lojistik firmaları için kurumsal web sitesi, SEO, Google Ads ve İngilizce tedarikçi sayfaları. İzmit merkezli ekip, taahhüt yok.",
  hizmetAdi: 'Dilovası Dijital Pazarlama Hizmeti',
  kartlar: [
    { icon: Monitor, title: 'Kurumsal web sitesi', desc: 'Ürün grupları, kapasite, makine parkı ve kalite belgeleri; satın almacının aradığı bilgi tek yerde.' },
    { icon: Search, title: 'Kurumsal SEO', desc: "'Dilovası + ürün/hizmet' ve tedarikçi aramalarında görünürlük; teknik SEO ve içerik planı." },
    { icon: Globe2, title: 'İngilizce tedarikçi sayfaları', desc: 'İhracat yapan firmalar için yabancı alıcıların bulabileceği İngilizce ürün ve teklif sayfaları.' },
    { icon: Megaphone, title: 'Google Ads (AdWords)', desc: 'Gerektiğinde ürün adlarıyla kurulan, bölge ve sektör hedefli ölçülebilir kampanyalar.' },
    { icon: FileText, title: 'Teklif formu ve ölçüm', desc: 'Teknik çizim yüklenebilen teklif formu; telefon, WhatsApp ve form talepleri ölçülür.' },
    { icon: BarChart3, title: 'Aylık rapor', desc: 'Hangi ürün sayfasının ve hangi kanalın talep getirdiğini gösteren şeffaf rapor.' },
  ],
  kutuBaslik: 'Sanayi firmasında dijital pazarlama neden farklı?',
  kutuMetin: 'Sanayi firmalarında karar uzun sürer ve birden fazla kişi siteye bakar: satın alma, kalite ve teknik ekip. Bu yüzden genel tanıtım yerine ürün, kapasite ve belge bilgisini net veren sayfalar gerekir. Reklam genel kelimelerle değil, ürün ve hizmet adlarıyla kurulduğunda verimli olur.',
  sss: [
    { q: "Dilovası'ndaki bir sanayi firması dijital pazarlamaya nereden başlamalı?", a: 'Önce ürün ve hizmetleri anlatan kurumsal bir site ve doğru Google İşletme Profili. Ardından ürün başına SEO sayfaları; ihracat varsa İngilizce sürüm. Hızlı talep gerekiyorsa küçük bütçeli, ürün adlarıyla kurulmuş bir Google Ads testi.' },
    { q: 'Google Ads (AdWords) sanayi firmasına müşteri getirir mi?', a: 'Ürün ve hizmet adlarıyla, doğru bölge hedeflemesiyle kurulduğunda teklif talebi getirebilir. Genel kelimeler ve iş ilanı gibi alakasız aramalar ayıklanmazsa bütçe boşa gider; bu yüzden ölçüm baştan kurulur.' },
    { q: 'Fiyatlandırma nasıl?', a: 'Seçtiğiniz hizmetlere ve sayfa sayısına göre değişir. AI teklif hesaplayıcı ile tahmini teklifi görebilir, kesin kapsamı ücretsiz ön görüşmede netleştirebilirsiniz.' },
    { q: 'Yüz yüze görüşebilir miyiz?', a: "Evet. İzmit merkezli bir ekibiz; Dilovası'ndaki firmalarla gerektiğinde yüz yüze görüşme ayarlayabiliyoruz." },
  ],
  ilgili: [
    { label: 'Dilovası SEO', href: '/dilovasi-seo' },
    { label: 'Dilovası Web Tasarım', href: '/ilceler/dilovasi' },
    { label: 'Gebze Dijital Pazarlama', href: '/gebze-dijital-pazarlama' },
    { label: 'Şekerpınar SEO', href: '/sekerpinar-seo' },
    { label: 'Kocaeli Google Ads', href: '/kocaeli-google-ads' },
  ],
  cta: "Dilovası'nda Dijital Büyümeyi Birlikte Planlayalım",
}

export const metadata = gebzeMetadata(v)
export default function Page() {
  return <GebzeHizmetSayfasi v={v} />
}
