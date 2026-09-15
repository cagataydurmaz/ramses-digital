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
  'Sosyal Medya': {
    kucuk: { min: 5000, max: 8000, unit: 'aylık' },
    orta: { min: 14000, max: 22000, unit: 'aylık' },
    buyuk: { min: 22000, max: 35000, unit: 'aylık' },
  },
  'Web Tasarım': {
    kucuk: { min: 15000, max: 40000, unit: 'tek seferlik' },
    orta: { min: 60000, max: 110000, unit: 'tek seferlik' },
    buyuk: { min: 130000, max: 250000, unit: 'tek seferlik' },
  },
  // Aylık SEO/AEO/GEO yönetiminin tek seferlik alternatifi — devam eden takip
  // içermez, sadece denetim + kurulumdan oluşur. Bkz. estimateQuote çağrılarında
  // 'SEO' ile birlikte DEĞİL, onun yerine seçilir (ikisi aynı anda toplanmaz).
  'SEO Başlangıç Paketi': {
    kucuk: { min: 7000, max: 12000, unit: 'tek seferlik', note: 'devam eden aylık takip dahil değil' },
    orta: { min: 20000, max: 35000, unit: 'tek seferlik', note: 'devam eden aylık takip dahil değil' },
    buyuk: { min: 35000, max: 55000, unit: 'tek seferlik', note: 'devam eden aylık takip dahil değil' },
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
    if (range.note) hasAdSpendShare = true
  }

  return { monthlyMin, monthlyMax, oneTimeMin, oneTimeMax, hasAdSpendShare, unpriced }
}
