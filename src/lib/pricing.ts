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
    kucuk: { min: 10000, max: 15000, unit: 'aylık' },
    orta: { min: 15000, max: 25000, unit: 'aylık' },
    buyuk: { min: 25000, max: 40000, unit: 'aylık' },
  },
  'Google Ads': {
    kucuk: { min: 5000, max: 8000, unit: 'aylık', note: '+ reklam bütçesinin %15\'i (yönetim ücreti)' },
    orta: { min: 8000, max: 15000, unit: 'aylık', note: '+ reklam bütçesinin %15\'i (yönetim ücreti)' },
    buyuk: { min: 15000, max: 30000, unit: 'aylık', note: '+ reklam bütçesinin %15\'i (yönetim ücreti)' },
  },
  'Sosyal Medya': {
    kucuk: { min: 8000, max: 14000, unit: 'aylık' },
    orta: { min: 14000, max: 22000, unit: 'aylık' },
    buyuk: { min: 22000, max: 35000, unit: 'aylık' },
  },
  'Web Tasarım': {
    kucuk: { min: 25000, max: 45000, unit: 'tek seferlik' },
    orta: { min: 60000, max: 110000, unit: 'tek seferlik' },
    buyuk: { min: 130000, max: 250000, unit: 'tek seferlik' },
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
