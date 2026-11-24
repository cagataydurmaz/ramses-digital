# Ramses Dijital — ramsesdigital.com

Türkçe dijital pazarlama ajansı sitesi. Next.js 14 App Router + Tailwind + TypeScript. Sahibi teknik değil: cevaplar kısa, sade Türkçe.

## Çalıştırma / yayın
- Node: `export PATH="/opt/homebrew/bin:$PATH"`. Derleme: `npx next build`. Yerel test: `npx next start -p 3001` (bitince `lsof -ti tcp:3001 | xargs kill`).
- Vercel GitHub'a bağlı: `main`'e push = canlı yayın (~1,5 dk). Başka branch = Vercel önizleme (giriş ister).
- Commit mesajları Türkçe; sonunda istenen `Co-Authored-By` satırı.
- Yayından sonra yeni/değişen URL'leri IndexNow'a bildir: anahtar dosyası `public/76cf6c771437ad1a07a713cf4e3fe877.txt`, POST `https://api.indexnow.org/indexnow` (host, key, keyLocation, urlList).

## Kesin kurallar (kullanıcı kararları)
- **Tasarım/renk değişikliği önce onay.** Hero'ya dokunma. Yeni sayfalar mevcut bileşen ve sınıflarla yapılır.
- **Sitede açık fiyat yok** (₺ rakamı yazma). Fiyat için AI teklif hesaplayıcı: `SehirTeklifBolumu` / `/teklif-al`. Fiyat verisi sadece `src/lib/pricing.ts` (hesaplayıcı kullanır).
- **Uydurma yok:** istatistik, müşteri sonucu, sıralama garantisi, "orada ofisimiz var" yazma. Doğrulanmış: 50+ proje, 50+ müşteri, 5+ yıl, %96 memnuniyet, Google 5.0/5 (yorum sayısı yazılmaz). Ofis: İzmit (Kocaeli'de "yüz yüze görüşebiliriz" denebilir; diğer illerde "uzaktan").
- Avukat, eczane gibi reklam yasağı olan mesleklerde Google Ads önerilmez. Sağlıkta mevzuata uygun, iddiasız dil.
- Başka sitelerden metin kopyalanmaz (fikir/yapı serbest).
- Formlarda "Ortalama 2 saat içinde dönüş yapıyoruz" notu onaylı.

## pSEO yapısı (veri odaklı)
| Tür | Veri | Bileşen / rota |
|---|---|---|
| Büyük şehir × 6 hizmet (12 şehir, el yazımı) | `sehirSeo.ts`, `sehirHizmet.ts` | `src/app/{sehir}-{seo,google-ads,web-tasarim,dijital-pazarlama,reklam-ajansi,yazilim-ajansi}/page.tsx` |
| İl/ilçe SEO sayfaları (tek sayfa) | `src/lib/ilSeo.ts` (`yerel: true` = Kocaeli ilçeleri, `rehber` = /ilceler eşi; zengin ilçelerde `mahalleler`+`su` = semt haritası, Google önizleme ve video; sektörde `arama`/`slug` = telefonlu sektör vitrini) | `IlSeoSayfasi.tsx`, `src/app/{slug}-seo/page.tsx` (2 satır) |
| Marmara ilçe web tasarım rehberleri | `ilceler.ts`, `ilceDetay.ts` | `src/app/ilceler/[slug]` |
| Gebze ek hizmetler | sayfa içinde | `GebzeHizmetSayfasi.tsx` |
| Sektörler (12) | `src/lib/sektorler.ts` | `SektorSayfasi.tsx`, `/sektorler/[slug]` |
| Ücretsiz araçlar | `src/lib/araclar.ts` | `src/components/araclar/*`, `/araclar/*` |
| Blog | `posts.ts` + `postsKasim2026.ts`; Google başlığı ≤60: `blogSeoBasliklari.ts` | `/blog/[slug]`; yazı altı otomatik bağlantılar: `blogIcLinkler.ts` |

Yeni il eklemek: `ilSeo.ts`'e kayıt + 2 satırlık `page.tsx`. Site haritası (`sitemap.ts`), footer (`Footer.tsx`), `/sehirler`, `llms.txt` (`src/app/llms.txt/route.ts` + `src/content/llms-temel.md`) ve blog bağlantıları listeyi otomatik alır.
**Öncelik: zengin ilçeler/muhitler** (kullanıcı kararı, 24 Kasım 2026). Her ilde önce varlıklı ilçeler; ileride 81 ilin zengin ilçeleri. Veri yoksa önce tek özgün SEO sayfası.
Kural: bir yerde hangi hizmet aranıyorsa (Search Console'da gösterim) ona ayrı sayfa; aranmıyorsa tek sayfa. Toplu, kopya içerikli sayfa açılmaz.

## Ortak bileşenler
`KisaOzet` (sayfa başı özet), `GooglePuanSatiri` (5.0 rozeti), `SehirTeklifBolumu`, `RelatedPages`, `ReviewsMarquee`, `SeoChecklist`, `CalendlyButton` (WhatsApp'a yönlendirir), `MobileContactBar` (mobil alt Ara/WhatsApp çubuğu), `KayanSerit` (sürüklenebilir şerit).

## Ölçüm
- GA4 `G-JQWD80KVTJ` (mülk p531200144, oturum ramsesdigitalagency@gmail.com, authuser=2). Talep etkinliği `generate_lead` (method: whatsapp/telefon/whatsapp_form/whatsapp_ai/iletisim_formu) + Google Ads dönüşümü; `src/lib/tracking.ts`, `LeadTracker.tsx`. 18 Kasım 2026'dan itibaren ölçülüyor.
- Search Console: sc-domain:ramsesdigital.com (durmazcagatay@gmail.com). Bing Webmaster ve IndexNow kurulu.
- Zamanlanmış görevler: günlük indeksleme isteği (`~/.claude/scheduled-tasks/ramses-gunluk-indeksleme`), aylık il raporu (her ayın 1'i).

## Bekleyen işler (24 Kasım 2026)
- Derinleşme sırası: Kocaeli → İstanbul → Sakarya → İzmir → Ankara (24 Kasım'da hepsinin ilk turu yapıldı). Yeni ilçe/sektör sayfası yalnızca Search Console'da o ilçe/hizmet adıyla ~10+ gösterim varsa açılır.
- Sektör × şehir: `sektorSehir.ts`'de içerik yazılan şehir+meslek kombinasyonu otomatik sayfa olur (Kocaeli'de 10 sektör).
- Üst alan (hero) düzeni: solda başlık, sağda sayfaya özel telefon animasyonu (`src/components/telefon/*`, `GoogleAramaAnimasyonu`).
- Formlar ve asistan e-posta değil WhatsApp'a gönderir (`src/lib/whatsapp.ts`); Gmail görünür yerlerde kullanılmaz.
- 1 Aralık aylık raporundan sonra İç Anadolu + Karadeniz için veri bazlı karar.
