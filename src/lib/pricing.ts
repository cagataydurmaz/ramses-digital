// Güncel piyasa ortalaması fiyat aralıkları — İşletme büyüklüğü × hizmet.
// Kesin teklif değildir, teklif-al aracında tahmini aralık göstermek için kullanılır.
export type BusinessSize = 'kucuk' | 'orta' | 'buyuk'

export interface PriceRange {
  min: number
  max: number
  unit: 'aylık' | 'tek seferlik'
  note?: string
}

// serviceOptions id'leri (teklif-al/page.tsx) ile eşleşir.
// E-posta ve Danışmanlık kapsamı projeye göre çok değiştiği için sabit aralığı yok —
// bu ikisi seçilirse "özel teklif" notu gösterilir.
export const pricing: Record<string, Record<BusinessSize, PriceRange>> = {
  'SEO': {
    kucuk: { min: 6000, max: 9000, unit: 'aylık' },
    orta: { min: 15000, max: 25000, unit: 'aylık' },
    buyuk: { min: 25000, max: 40000, unit: 'aylık' },
  },
  'Google Ads': {
    kucuk: { min: 3000, max: 5000, unit: 'aylık', note: '+ reklam bütçesinin %15\'i (yönetim ücreti)' },
    orta: { min: 8000, max: 15000, unit: 'aylık', note: '+ reklam bütçesinin %15\'i (yönetim ücreti)' },
    buyuk: { min: 15000, max: 30000, unit: 'aylık', note: '+ reklam bütçesinin %15\'i (yönetim ücreti)' },
  },
  // Google Ads seçilince aylık yönetim ücretinin YANINA otomatik eklenen tek seferlik
  // kurulum bedeli — hesap yapısı, dönüşüm izleme (conversion tracking), ilk kampanya
  // kurulumu için. İlk ay ayrılan müşteride bu emek karşılıksız kalmasın diye eklendi.
  // İlk ay için ayrıca aylık yönetim ücreti ALINMAZ — kurulum bedeli o ayın yerine geçer,
  // yönetim ücreti 2. aydan itibaren başlar. 'Google Ads' ile birlikte toplanır, alternatif
  // değil — bkz. effectiveServices.
  'Google Ads Kurulum': {
    kucuk: { min: 8000, max: 10000, unit: 'tek seferlik', note: 'tek seferlik — ilk ay yönetim ücreti alınmaz, yönetim ücreti 2. aydan başlar' },
    orta: { min: 15000, max: 20000, unit: 'tek seferlik', note: 'tek seferlik — ilk ay yönetim ücreti alınmaz, yönetim ücreti 2. aydan başlar' },
    buyuk: { min: 25000, max: 35000, unit: 'tek seferlik', note: 'tek seferlik — ilk ay yönetim ücreti alınmaz, yönetim ücreti 2. aydan başlar' },
  },
  // Instagram ve Facebook (Meta) reklam yönetimi — kullanıcı onaylı (25 Kasım 2026).
  // Google Ads ile aynı mantık: aylık yönetim + reklam bütçesinin %15'i; ayrıca tek seferlik
  // kurulum (Pixel/dönüşüm ölçümü, hesap yapısı, ilk kampanyalar), ilk ay yönetim ücreti alınmaz.
  'Meta Ads': {
    kucuk: { min: 3000, max: 5000, unit: 'aylık', note: '+ reklam bütçesinin %15\'i (yönetim ücreti)' },
    orta: { min: 8000, max: 15000, unit: 'aylık', note: '+ reklam bütçesinin %15\'i (yönetim ücreti)' },
    buyuk: { min: 15000, max: 30000, unit: 'aylık', note: '+ reklam bütçesinin %15\'i (yönetim ücreti)' },
  },
  'Meta Ads Kurulum': {
    kucuk: { min: 6000, max: 8000, unit: 'tek seferlik', note: 'tek seferlik — ilk ay yönetim ücreti alınmaz, yönetim ücreti 2. aydan başlar' },
    orta: { min: 12000, max: 16000, unit: 'tek seferlik', note: 'tek seferlik — ilk ay yönetim ücreti alınmaz, yönetim ücreti 2. aydan başlar' },
    buyuk: { min: 20000, max: 28000, unit: 'tek seferlik', note: 'tek seferlik — ilk ay yönetim ücreti alınmaz, yönetim ücreti 2. aydan başlar' },
  },
  // Sosyal medya yönetimi: hesap yönetimi + içerik üretimi + paylaşım ve yorum/mesaj takibi
  // (kullanıcı 25 Kasım 2026'da kapsamın hesap yönetimini de içerdiğini belirtti).
  'Sosyal Medya': {
    kucuk: { min: 8000, max: 14000, unit: 'aylık', note: 'haftada 3-4 içerik tasarımı, 1-2 platform formatı' },
    orta: { min: 15000, max: 24000, unit: 'aylık', note: 'haftada 5-6 içerik tasarımı + reels, 2-3 platform formatı' },
    buyuk: { min: 25000, max: 38000, unit: 'aylık', note: 'çoklu platform, video prodüksiyon desteği, yoğun içerik hacmi' },
  },
  'Web Tasarım': {
    kucuk: { min: 15000, max: 40000, unit: 'tek seferlik' },
    orta: { min: 60000, max: 110000, unit: 'tek seferlik' },
    buyuk: { min: 130000, max: 250000, unit: 'tek seferlik' },
  },
  // Aylık SEO/AEO/GEO yönetiminin tek seferlik alternatifi — devam eden takip
  // içermez, sadece denetim + kurulumdan oluşur. Bkz. estimateQuote çağrılarında
  // 'SEO' ile birlikte DEĞİL, onun yerine seçilir (ikisi aynı anda toplanmaz).
  // Bu fiyat TEK site içindir. Çoklu ilçe/şehir sayfası (pSEO) gibi geniş kapsamlı
  // talepler işletme büyüklüğünden bağımsızdır (küçük bir işletme de 39 ilçe için
  // sayfa isteyebilir) — bu yüzden aralığa dahil edilmiyor, ayrı özel teklif gerektiriyor.
  'SEO Başlangıç Paketi': {
    kucuk: { min: 7000, max: 12000, unit: 'tek seferlik', note: 'devam eden aylık takip dahil değil, tek site için — çoklu ilçe/pSEO talepleri kapsam dışı, özel teklif gerektirir' },
    orta: { min: 20000, max: 35000, unit: 'tek seferlik', note: 'devam eden aylık takip dahil değil, tek site için — çoklu ilçe/pSEO talepleri kapsam dışı, özel teklif gerektirir' },
    buyuk: { min: 35000, max: 55000, unit: 'tek seferlik', note: 'devam eden aylık takip dahil değil, tek site için — çoklu ilçe/pSEO talepleri kapsam dışı, özel teklif gerektirir' },
  },
}

export const businessSizeLabels: Record<BusinessSize, string> = {
  kucuk: 'Küçük İşletme',
  orta: 'Orta İşletme',
  buyuk: 'Büyük / Kurumsal',
}

export interface QuoteEstimate {
  monthlyMin: number
  monthlyMax: number
  oneTimeMin: number
  oneTimeMax: number
  hasAdSpendShare: boolean
  unpriced: string[]
}

export function estimateQuote(services: string[], size: BusinessSize): QuoteEstimate {
  let monthlyMin = 0
  let monthlyMax = 0
  let oneTimeMin = 0
  let oneTimeMax = 0
  let hasAdSpendShare = false
  const unpriced: string[] = []

  for (const service of services) {
    const range = pricing[service]?.[size]
    if (!range) {
      unpriced.push(service)
      continue
    }
    if (range.unit === 'aylık') {
      monthlyMin += range.min
      monthlyMax += range.max
    } else {
      oneTimeMin += range.min
      oneTimeMax += range.max
    }
    // Sadece Google Ads/Google Ads Kurulum "+ reklam bütçesinin %15'i" notuna sahip —
    // diğer hizmetlerin (Sosyal Medya, SEO Başlangıç Paketi vb.) notları farklı bir
    // konuda (kapsam/istisna); "herhangi bir not var mı" kontrolü onları da yanlışlıkla
    // reklam bütçesi paylı gösterirdi.
    if (['Google Ads', 'Google Ads Kurulum', 'Meta Ads', 'Meta Ads Kurulum'].includes(service) && range.note) hasAdSpendShare = true
  }

  return { monthlyMin, monthlyMax, oneTimeMin, oneTimeMax, hasAdSpendShare, unpriced }
}

// ─── Kampanyalar (kullanıcı onaylı, 24 Kasım 2026) ──────────────────────────
// Hesaplayıcıda seçilen hizmetlere göre gösterilir. Yeni kampanya eklemeden önce
// işletme sahibinin onayı alınmalı (sitede doğrulanmamış vaat olmaz).
export interface Kampanya {
  baslik: string
  detay: string
  // Aylık ücrete uygulanan indirimli aralık (varsa)
  indirimli?: { min: number; max: number; birim: string }
}

const yuvarla = (n: number) => Math.round(n / 100) * 100

export const KAMPANYA_KURALI = 'İndirimler birleştirilmez; size en avantajlı olanı uygulanır. Taahhütlü kampanyalarda süre sözleşmeyle belirlenir.'

export function kampanyalar(services: string[], size: BusinessSize): Kampanya[] {
  const liste: Kampanya[] = []
  const seo = pricing['SEO'][size]
  const ads = pricing['Google Ads'][size]
  const aylikSeo = services.includes('SEO')
  const web = services.includes('Web Tasarım')
  const tekSeferlik = web || services.includes('SEO Başlangıç Paketi')
  if (aylikSeo) {
    liste.push({
      baslik: '12 ay taahhütle SEO’da %15 indirim',
      detay: 'SEO kalıcı sonuç için zaman ister; 12 aylık taahhütte aylık ücrete %15 indirim uygulanır.',
      indirimli: { min: yuvarla(seo.min * 0.85), max: yuvarla(seo.max * 0.85), birim: '/ay' },
    })
  }
  if (aylikSeo && web) {
    liste.push({
      baslik: 'Web sitesi + aylık SEO: ilk ay SEO ücretsiz',
      detay: 'Web sitesiyle birlikte 12 ay taahhütlü aylık SEO alırsanız SEO’nun ilk ayı bizden. Tek seferlik SEO paketinde geçerli değildir.',
    })
  }
  if (services.includes('Google Ads')) {
    liste.push({
      baslik: '6 ay taahhütle Google Ads’te %10 indirim',
      detay: '6 ay veya daha uzun taahhütte sabit aylık yönetim ücretine %10 indirim uygulanır.',
      indirimli: { min: yuvarla(ads.min * 0.9), max: yuvarla(ads.max * 0.9), birim: '/ay' },
    })
  }
  if (services.includes('Meta Ads')) {
    const meta = pricing['Meta Ads'][size]
    liste.push({
      baslik: '6 ay taahhütle Instagram & Facebook reklamlarında %10 indirim',
      detay: '6 ay veya daha uzun taahhütte sabit aylık yönetim ücretine %10 indirim uygulanır.',
      indirimli: { min: yuvarla(meta.min * 0.9), max: yuvarla(meta.max * 0.9), birim: '/ay' },
    })
  }
  if (web || aylikSeo) {
    liste.push({
      baslik: 'Google İşletme Profili kurulumu hediye',
      detay: 'Web sitesi yaptırana veya 12 ay taahhütlü aylık SEO alana; haritada görünmeniz için profil kurulumu ve doğrulama desteği.',
    })
  }
  if (web) {
    liste.push({
      baslik: 'İlk yıl barındırma ücretsiz',
      detay: 'İlk yıl barındırma (hosting) bizden; ayrıca 30 gün ücretsiz destek ve siteyi kendiniz güncelleyebilmeniz için 1 saatlik eğitim videosu.',
    })
    liste.push({
      baslik: 'Eski siteden ücretsiz taşıma',
      detay: 'Mevcut siteniz varsa içerikleri ve Google’daki sıralamanızı koruyacak yönlendirmelerle yeni siteye ücretsiz taşıyoruz.',
    })
  }
  if (tekSeferlik) {
    liste.push({
      baslik: 'Peşin ödemeye %5 indirim',
      detay: 'Tek seferlik işlerde (web sitesi, SEO başlangıç paketi) tutarın tamamını peşin ödemenize %5 indirim.',
    })
  }
  liste.push({
    baslik: 'Referansla gelene %10 indirim',
    detay: 'Bir müşterimizin tavsiyesiyle geldiyseniz toplam tutarda %10 referans indirimi; görüşmede belirtmeniz yeterli.',
  })
  liste.push({
    baslik: 'Kocaeli’de ilk görüşme yüz yüze',
    detay: 'Kocaeli’deki işletmelerle ilk tanışma görüşmesini ücretsiz ve yüz yüze yapabiliyoruz.',
  })
  return liste
}
