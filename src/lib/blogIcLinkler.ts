import type { Post } from './posts'
import { ilSeo } from './ilSeo'
import { sektorSehir } from './sektorSehir'
import { sektorler, blogSektor } from './sektorler'

// Her blog yazısının sonuna konusuna göre hizmet + şehir sayfası bağlantıları üretir.
// Amaç: (1) okuyanı ilgili hizmete yönlendirmek, (2) Google'ın şehir sayfalarını
// blogdan da bulması. Şehir bağlantıları aynı türdeki yazılar arasında sırayla
// bölüştürülür; böylece her şehir sayfası en az bir yazıdan bağlantı alır.

type Tur = 'seo' | 'google-ads' | 'web-tasarim' | 'dijital-pazarlama' | 'yazilim-ajansi'

const SEHIRLER: Record<string, string> = {
  istanbul: 'İstanbul', ankara: 'Ankara', izmir: 'İzmir', bursa: 'Bursa', antalya: 'Antalya',
  gaziantep: 'Gaziantep', konya: 'Konya', mersin: 'Mersin', kayseri: 'Kayseri', eskisehir: 'Eskişehir',
  kocaeli: 'Kocaeli', izmit: 'İzmit',
}
const HIZMET_AD: Record<string, string> = {
  seo: 'SEO', 'google-ads': 'Google Ads', 'web-tasarim': 'Web Tasarım',
  'dijital-pazarlama': 'Dijital Pazarlama', 'reklam-ajansi': 'Reklam Ajansı', 'yazilim-ajansi': 'Yazılım Ajansı',
}
const HUB: Record<Tur, { label: string; href: string }> = {
  seo: { label: 'SEO Hizmetimiz', href: '/hizmetler/seo' },
  'google-ads': { label: 'Google Ads Yönetimi', href: '/hizmetler/google-ads' },
  'web-tasarim': { label: 'Web Tasarım Hizmetimiz', href: '/hizmetler/web-tasarim' },
  'dijital-pazarlama': { label: 'Tüm Hizmetlerimiz', href: '/hizmetler' },
  'yazilim-ajansi': { label: 'n8n Otomasyon Hizmetimiz', href: '/hizmetler/n8n-otomasyon' },
}

function turBul(p: Post): Tur {
  const c = p.category
  if (c === 'Google Ads') return 'google-ads'
  if (c === 'Web Tasarım') return 'web-tasarim'
  if (c === 'Otomasyon') return 'yazilim-ajansi'
  if (c === 'SEO' || c === 'Teknik SEO' || c === 'AI & Strateji' || c === 'Vaka Analizi') return 'seo'
  return 'dijital-pazarlama'
}

function sehirSayfalari(tur: Tur): { label: string; href: string }[] {
  const hizmetler = tur === 'dijital-pazarlama' ? ['dijital-pazarlama', 'reklam-ajansi'] : [tur]
  const liste: { label: string; href: string }[] = []
  for (const h of hizmetler)
    for (const [slug, ad] of Object.entries(SEHIRLER)) liste.push({ label: `${ad} ${HIZMET_AD[h]}`, href: `/${slug}-${h}` })
  if (tur === 'seo') for (const il of ilSeo) liste.push({ label: `${il.ad} SEO`, href: `/${il.slug}-seo` })
  return liste
}

export function blogIcLinkler(post: Post, tumYazilar: Post[]) {
  const tur = turBul(post)
  const linkler: { label: string; href: string }[] = []

  // Sektör yazısıysa önce ilgili sektör sayfası
  const sektor = sektorler.find((s) => s.slug === blogSektor[post.slug])
  if (sektor) {
    linkler.push({ label: `${sektor.ad} İçin Dijital Pazarlama`, href: `/sektorler/${sektor.slug}` })
    for (const s of sektorSehir.filter((x) => x.meslek.sektorSlug === sektor.slug))
      linkler.push({ label: `${s.sehir.ad} ${s.meslek.baslik}`, href: `/${s.slug}` })
  }
  linkler.push(HUB[tur])

  // İlgili ücretsiz araç (konuya göre)
  const metin = `${post.slug} ${post.title} ${post.tags.join(' ')}`.toLocaleLowerCase('tr-TR')
  if (/yorum|haritalar|işletme profili|yerel/.test(metin)) linkler.push({ label: 'Ücretsiz Google Yorum Linki Aracı', href: '/araclar/google-yorum-linki' })
  if (/whatsapp|satış|instagram|sosyal/.test(metin)) linkler.push({ label: 'Ücretsiz WhatsApp Link Oluşturucu', href: '/araclar/whatsapp-link-olusturucu' })
  if (tur === 'google-ads' || /google ads|reklam|bütçe/.test(metin)) linkler.push({ label: 'Google Ads Bütçe Hesaplayıcı', href: '/araclar/google-ads-butce-hesaplayici' })
  if (/meta|başlık|serp|search console|seo/.test(metin) && tur === 'seo') linkler.push({ label: 'Meta Başlık ve Açıklama Kontrolü', href: '/araclar/meta-baslik-kontrol' })

  // Yazı belirli bir şehirle ilgiliyse önce o şehrin sayfaları
  const sehir = Object.keys(SEHIRLER).find((s) => post.slug.includes(s))
  if (sehir)
    for (const h of Object.keys(HIZMET_AD))
      linkler.push({ label: `${SEHIRLER[sehir]} ${HIZMET_AD[h]}`, href: `/${sehir}-${h}` })

  // Aynı türdeki yazılar arasında şehir sayfalarını sırayla bölüştür
  const ayniTur = tumYazilar.filter((p) => turBul(p) === tur)
  const sira = ayniTur.findIndex((p) => p.slug === post.slug)
  const havuz = sehirSayfalari(tur)
  const adet = Math.max(4, Math.ceil(havuz.length / Math.max(ayniTur.length, 1)))
  for (let k = 0; k < adet; k++) linkler.push(havuz[(sira * adet + k) % havuz.length])

  const goruldu = new Set<string>()
  return linkler.filter((l) => (goruldu.has(l.href) ? false : (goruldu.add(l.href), true))).slice(0, 12)
}
