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
  // Bu hizmet ÜRETİM odaklıdır — hesap yönetimi, paylaşım ve topluluk moderasyonu
  // kapsam dışıdır (bkz. /hizmetler/sosyal-medya SSS). 2026 piyasa karşılaştırması
  // (sadece tasarım/üretim hizmeti veren sağlayıcılar) sonrası güncellendi — en alt
  // tier piyasanın belirgin altındaydı, orta/üst tier'lar zaten makuldü.
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
    if ((service === 'Google Ads' || service === 'Google Ads Kurulum') && range.note) hasAdSpendShare = true
  }

  return { monthlyMin, monthlyMax, oneTimeMin, oneTimeMax, hasAdSpendShare, unpriced }
}
