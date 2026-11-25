// Blog yazılarını konusuna uygun görsel öğelerle zenginleştirir (BlogIcerik bileşeni uygular):
// - kisa: Yazının başına "Kısa cevap" kutusu (Google cevap kutuları ve yapay zekâ özetleri için)
// - bilesen: Konuya uygun animasyon/grafik (ör. 'harita|izmit kahvaltı', 'ads-butce')
// - video: Kendi kısa bilgi videolarımızdan konuya uyan (public/video/bilgi/<ad>.mp4)
// Yazının içinde zaten "Kısa cevap", bileşen veya video varsa tekrar eklenmez.
// Rakam, müşteri sonucu veya garanti içermez.

export type Zengin = { kisa?: string; bilesen?: string; video?: string }

export const ZENGIN_TARIH = '2026-11-25'

export const blogZenginlestirme: Record<string, Zengin> = {
  // ─── SEO ─────────────────────────────────────────────────────────────
  'googleda-zirveye-cikmanin-7-sirri': {
    kisa: 'Google’da üst sıralara çıkmanın tek bir sırrı yok; doğru anahtar kelimeler, sağlam teknik altyapı, gerçekten faydalı içerik, kaliteli bağlantılar, yerel görünürlük, iyi kullanıcı deneyimi ve veriye dayalı düzenli iyileştirme birlikte çalışır. Sonuç genellikle aylar içinde birikerek gelir.',
    bilesen: 'seo-buyume', video: 'seo-nedir',
  },
  'google-search-console-rehberi': {
    kisa: 'Google Search Console, sitenizin Google’da hangi aramalarda göründüğünü, kaç kez tıklandığını ve hangi sayfaların dizinde olduğunu gösteren ücretsiz araçtır. Mülkü doğrulayıp site haritasını gönderdikten sonra en çok Performans, URL Denetleme ve Sayfalar raporlarını kullanırsınız.',
    bilesen: 'rapor', video: 'seo-nedir',
  },
  'schema-markup-jsonld-rehberi': {
    kisa: 'Schema markup, sayfanızdaki bilginin (işletme, makale, ürün, SSS) arama motorlarına makinenin okuyacağı biçimde anlatılmasıdır. Google’ın önerdiği format JSON-LD’dir; doğru kullanıldığında zengin sonuçlara ve yapay zekâ cevaplarında doğru anlaşılmaya yardımcı olur.',
    bilesen: 'google-arama|izmit diş kliniği;kocaeli web tasarım;bursa veteriner',
  },
  'kaliteli-backlink-alma-yontemleri': {
    kisa: 'Backlink, başka bir sitenin sizin sitenize verdiği bağlantıdır ve Google için bir güven işaretidir. Önemli olan sayı değil kalitedir: sektörünüzle ilgili, gerçek ve güvenilir sitelerden doğal yollarla alınan birkaç bağlantı, toplu satın alınan yüzlerce bağlantıdan değerlidir.',
    bilesen: 'seo-buyume', video: 'seo-nedir',
  },
  'meta-aciklama-yazma-rehberi': {
    kisa: 'Meta açıklama, arama sonuçlarında başlığın altında görünen kısa özettir. Sıralamayı doğrudan etkilemez ama tıklanıp tıklanmayacağınızı etkiler; 150–160 karakter içinde, aranan kelimeyi ve net bir faydayı içeren, eyleme çağıran bir cümle idealdir.',
    bilesen: 'google-arama|izmit web tasarım;kocaeli seo ajansı;gebze diş kliniği',
  },
  'kocaeli-seo-yerel-isletmeler-rehberi': {
    kisa: 'Kocaeli’de yerel SEO’nun temeli eksiksiz bir Google İşletme Profili, her yerde aynı ad-adres-telefon bilgisi, “ilçe + hizmet” aramalarına cevap veren sayfalar ve düzenli gerçek yorumlardır. İzmit ve Gebze gibi farklı pazarlar ayrı ele alınmalıdır.',
    bilesen: 'harita|izmit diş kliniği', video: 'isletme-profili',
  },
  'eeat-yazar-kimligi-icerik-kim-yazdi': {
    kisa: 'E-E-A-T; deneyim, uzmanlık, otorite ve güvenilirlik demektir. Doğrudan bir sıralama puanı değildir ama Google’ın kaliteli içeriği ayırt ederken baktığı çerçevedir; içeriği kimin yazdığını, neden bu konuda yetkin olduğunu açıkça göstermek hem Google’da hem yapay zekâ aramalarında güveni artırır.',
    video: 'seo-nedir',
  },
  'ilce-bazli-seo-sablon-sayfa-mi-gercek-icerik-mi': {
    kisa: 'İlçe bazlı SEO işe yarar, ama yalnızca her sayfa o ilçeye özgü gerçek bilgi taşıdığında. İsmi değiştirilmiş kopya sayfalar Google’da değer görmez ve güveni düşürür; az sayıda, özgün ve gerçekten hizmet verdiğiniz ilçelerle başlamak doğru yoldur.',
    bilesen: 'google-arama|başiskele web tasarım;kartepe diş kliniği;gebze oto servis', video: 'seo-nedir',
  },
  'kayseri-yerel-isletmeler-google-haritalar-rehberi': {
    kisa: 'Kayseri’de “yakınımdaki” ve “ilçe + hizmet” aramalarında Google önce haritayı gösterir. Haritada öne çıkmak için doğru kategori, eksiksiz bilgi, güncel fotoğraflar, düzenli yanıtlanan gerçek yorumlar ve hizmetleri anlatan bir web sitesi birlikte gerekir.',
    bilesen: 'harita|talas diş hekimi', video: 'isletme-profili',
  },
  'kayseri-mobilya-ve-sanayi-firmalari-icin-seo-google-ads': {
    kisa: 'Kayseri’deki mobilya ve sanayi firmalarını bayi, toptancı, mimar ve son tüketici farklı kelimelerle arar. Bu yüzden sitede her müşteri tipine ayrı sayfa, Google Ads’te ise ürün ve teknik terimlere dar kampanyalar kurmak bütçeyi doğru kişiye harcatır.',
    bilesen: 'reklam-telefon|kayseri mobilya üreticisi;yatak toptan;kayseri cnc lazer kesim', video: 'google-ads',
  },
  'core-web-vitals-donusum-orani': {
    kisa: 'Core Web Vitals; sayfanın ne kadar hızlı göründüğünü (LCP), tıklamalara ne kadar hızlı tepki verdiğini (INP) ve yüklenirken kayıp kayıp kaymadığını (CLS) ölçen üç metriktir. Bu değerleri iyileştirmek hem Google deneyimini hem ziyaretçinin form doldurma veya arama yapma ihtimalini artırır.',
    bilesen: 'site-kaydirma', video: 'web-sitesi-5-soru',
  },

  // ─── YAPAY ZEKÂ / GEO / AEO ─────────────────────────────────────────
  'geo-nedir-chatgpt-yapay-zeka-aramalarda-gorunurluk': {
    kisa: 'GEO (Generative Engine Optimization), işletmenizin ChatGPT, Gemini ve Google AI Modu gibi yapay zekâ cevaplarında kaynak gösterilmesi veya önerilmesi için yapılan çalışmadır. Net cevap veren içerik, tutarlı işletme bilgisi, güvenilir kaynaklarda anılmak ve gerçek yorumlar temel taşlarıdır.',
    bilesen: 'ai-modu', video: 'chatgpt-oneri',
  },
  'seo-geo-aeo-arama-motorundan-yanit-motoruna': {
    kisa: 'SEO Google’da sıralanmayı, AEO arama sonuçlarındaki cevap kutularında görünmeyi, GEO ise yapay zekâ araçlarının cevaplarında kaynak olmayı hedefler. Üçünün temeli aynıdır: soruya net cevap veren, iyi yapılandırılmış ve güvenilir içerik.',
    bilesen: 'ai-modu', video: 'chatgpt-oneri',
  },
  'yerel-isletme-aeo-geo-kontrol-listesi': {
    kisa: 'Yerel bir işletmenin Google cevaplarında ve yapay zekâ önerilerinde görünmesi için önce eksiksiz bir Google İşletme Profili, her yerde aynı işletme bilgisi, müşterinin sorularını cevaplayan sayfalar ve düzenli yanıtlanan yorumlar gerekir. Bu liste, bunları sırayla kontrol etmenizi sağlar.',
    bilesen: 'ai-modu', video: 'isletme-profili',
  },
  'yapay-zeka-ile-rakip-analizi': {
    kisa: 'Yapay zekâ, rakiplerin sitelerini, reklamlarını, yorumlarını ve sosyal medya içeriklerini çok daha hızlı özetlemenizi sağlar. Doğru kullanımı: veriyi kendiniz toplayıp yapay zekâya yorumlatmak ve çıkan sonuçları gerçek arama verisiyle doğrulamaktır.',
    bilesen: 'rapor',
  },
  'ieyp-vaka-analizi-egitim-platformu-geo-aeo': {
    kisa: 'Bu vaka, çok dilli bir eğitim platformunun hem Google aramalarında hem yapay zekâ cevaplarında aynı anda görünür olması için içerik, teknik yapı ve güven unsurlarının birlikte nasıl kurulduğunu anlatıyor.',
    video: 'chatgpt-oneri',
  },
  'google-ai-overviews-nasil-gorunulur': { bilesen: 'google-arama|ataşehir diş kliniği;kocaeli seo ajansı;bursa veteriner', video: 'chatgpt-oneri' },
  'chatgpt-claude-gemini-isletmeler-icin-karsilastirma': { bilesen: 'chatbot', video: 'chatgpt-oneri' },
  'claude-ile-isletme-icin-10-pratik-kullanim': { bilesen: 'otomasyon' },
  'web-sitesine-yapay-zeka-asistani-chatbot': { bilesen: 'chatbot' },
  'yapay-zeka-ile-google-yorumlarina-cevap': { bilesen: 'harita|yakınımdaki kuaför', video: 'isletme-profili' },

  // ─── GOOGLE ADS ──────────────────────────────────────────────────────
  'google-ads-tam-rehberi-2024': {
    kisa: 'Google Ads’te başarı; doğru kampanya türünü seçmek, satın alma niyeti taşıyan anahtar kelimelere odaklanıp alakasız aramaları engellemek, telefon-form-WhatsApp dönüşümlerini ölçmek ve haftalık düzenli iyileştirme yapmakla gelir. 2026’da AI Max ve Performance Max ayarlarını kontrol etmek de bu listeye eklendi.',
    bilesen: 'ads-butce', video: 'google-ads',
  },
  'google-ads-ajansi-secerken-sorulacak-sorular': {
    kisa: 'Google Ads ajansı seçerken; hesabın kimin adına açılacağını, dönüşüm ölçümünün nasıl kurulacağını, alakasız aramaların ne sıklıkla engelleneceğini, raporlara nasıl erişeceğinizi ve ücretin nasıl hesaplandığını mutlaka sorun. Net cevap veremeyen ajans bütçenizi riske atar.',
    bilesen: 'ads-butce', video: 'google-ads',
  },
  'google-ads-fiyatlari-2026': { bilesen: 'ads-butce', video: 'google-ads' },

  // ─── SEKTÖREL ────────────────────────────────────────────────────────
  'avukatlar-icin-dijital-pazarlama-seo-rehberi': {
    kisa: 'Avukatlık mevzuatı ücretli reklamı yasakladığı için avukatlar Google Ads veya sosyal medya reklamı kullanamaz. Görünürlük; çalışma alanı sayfaları, bilgilendirici makaleler, Google İşletme Profili ve kurallara uygun bir web sitesiyle, yani organik SEO ile kurulur.',
    bilesen: 'google-arama|kadıköy boşanma avukatı;şişli iş hukuku avukatı;ankara idare hukuku avukatı', video: 'seo-nedir',
  },
  'dis-hekimleri-icin-dijital-pazarlama-rehberi': {
    kisa: 'Diş kliniklerinde en iyi sonuç, haritada görünürlük ve tedavi sayfalarıyla kurulan SEO ile acil ve yüksek değerli aramalarda (implant, acil diş hekimi gibi) mevzuata uygun Google Ads’in birlikte kullanılmasından gelir. Reklam ve içerik dili iddiasız ve bilgilendirici olmalıdır.',
    bilesen: 'reklam-telefon|izmit diş kliniği;acil diş hekimi;implant tedavisi', video: 'google-ads',
  },
  'psikologlar-icin-dijital-pazarlama-rehberi': {
    kisa: 'Danışan arayan kişi önce Google’a bakar; psikologlar için en etkili adımlar eksiksiz bir Google İşletme Profili, uzmanlık alanlarını anlatan sade sayfalar ve etik kurallara uygun bilgilendirici içeriktir. Gizlilik ve güven her adımda öncelik olmalıdır.',
    bilesen: 'google-arama|kocaeli psikolog;online terapi;çift terapisi izmit', video: 'isletme-profili',
  },
  'veteriner-klinikleri-icin-dijital-pazarlama-rehberi': {
    kisa: 'Veteriner aramalarının önemli kısmı acil ve “en yakın” aramalarıdır. Haritada görünmek, çalışma ve nöbet saatlerini güncel tutmak, tek dokunuşla arama ve kolay online randevu bu anlarda kliniği seçtirir.',
    bilesen: 'harita|en yakın veteriner', video: 'isletme-profili',
  },
  'mali-musavirler-icin-dijital-pazarlama-rehberi': {
    kisa: 'Mali müşavir seçimi uzun süreli bir güven ilişkisidir; işletmeler “şehir + mali müşavir” ve mevzuat sorularıyla arama yapar. Yerel SEO, güncel mevzuat içerikleri ve LinkedIn birlikte kullanıldığında B2B karar vericiye en doğal yoldan ulaşılır.',
    bilesen: 'google-arama|kocaeli mali müşavir;şirket kuruluşu muhasebe;e-fatura geçişi', video: 'seo-nedir',
  },
  'izmit-restoran-dijital-pazarlama-rehberi': {
    kisa: 'İzmit’te restoran arayan müşterilerin çoğu önce Google Haritalar’a ve yorumlara bakar. Eksiksiz bir işletme profili, iştah açan güncel fotoğraflar, yanıtlanan yorumlar ve Instagram’da düzenli içerik; gerektiğinde dar konumlu reklamla birlikte en hızlı sonucu verir.',
    bilesen: 'harita|izmit kahvaltı', video: 'isletme-profili',
  },
  'e-ticaret-icin-dijital-pazarlama-rehberi': {
    kisa: 'E-ticarette tek kanal yetmez: ürün ve kategori sayfalarında SEO, Google Alışveriş ve arama reklamları, Instagram-Facebook reklamları ve terk edilmiş sepet e-postaları birlikte çalışmalıdır. Hepsinin ortak noktası doğru dönüşüm ölçümüdür.',
    bilesen: 'meta-reklam', video: 'google-ads',
  },

  // ─── WEB TASARIM ─────────────────────────────────────────────────────
  'donusum-odakli-web-tasarimi-ilkeleri': {
    kisa: 'Dönüşüm odaklı web tasarımı, ziyaretçinin ilk bakışta ne yaptığınızı anlamasını ve kolayca aramasını, yazmasını veya form doldurmasını sağlar. Netlik, güven unsurları, kısa formlar, mobil öncelik ve hız, güzel görünümden daha belirleyicidir.',
    bilesen: 'site-kaydirma', video: 'web-sitesi-5-soru',
  },
  'web-sitesi-fiyatlari-2026': { bilesen: 'site-kaydirma', video: 'web-sitesi-5-soru' },
  'internet-sitesi-yaptirmak': { bilesen: 'site-kaydirma', video: 'web-sitesi-5-soru' },
  'google-da-neden-cikmiyorum': { bilesen: 'google-arama|izmit oto servis;kocaeli diş kliniği;bursa kuaför', video: 'seo-nedir' },
  'google-isletme-profili-nasil-acilir': { bilesen: 'harita|yakınımdaki diş kliniği', video: 'isletme-profili' },
  'google-yorumlari-nasil-artirilir': { bilesen: 'harita|yakınımdaki kafe', video: 'isletme-profili' },
  'seo-fiyatlari-2026': { bilesen: 'seo-buyume', video: 'seo-nedir' },

  // ─── STRATEJİ / AJANS SEÇİMİ ─────────────────────────────────────────
  'izmit-reklam-ajansi-nasil-secilir': {
    kisa: 'İzmit’te reklam ajansı seçerken önce hedefinizi netleştirin, sonra ajansın bu hedefe uygun uzmanlığına, canlı ve ziyaret edilebilir işlerine, raporlama şeffaflığına ve sözleşme şartlarına bakın. Yüz yüze görüşebilmek artı, ama asıl ölçüt düzenli ve anlaşılır raporlamadır.',
    bilesen: 'rapor', video: 'aylik-rapor',
  },
  'uzaktan-calisan-dijital-pazarlama-ajansi-rehberi': {
    kisa: 'SEO, Google Ads, web tasarım ve sosyal medya yönetimi uzaktan çok iyi yürütülebilir; önemli olan iletişimin hızlı, raporların düzenli ve hesapların sizin adınıza olmasıdır. İlk görüşmede bu üç noktayı netleştirin.',
    bilesen: 'whatsapp', video: 'aylik-rapor',
  },
  'seo-ajansi-mi-freelancer-mi': {
    kisa: 'Küçük ve tek alanlı işler için deneyimli bir freelancer yeterli olabilir; birden fazla kanal, düzenli içerik ve süreklilik gerekiyorsa ajans daha güvenlidir. Hangisini seçerseniz seçin, hesapların sizin adınıza olması ve aylık raporlama şarttır.',
    bilesen: 'rapor', video: 'seo-nedir',
  },
  'muhendislik-tabanli-dijital-pazarlama': {
    kisa: 'Mühendislik temelli pazarlama; kararları tahmine değil ölçüme, teste ve otomasyona dayandırır. Doğru dönüşüm takibi, düzenli A/B testleri, hızlı ve sağlam teknik altyapı ve tekrarlayan işlerin otomasyonu bu yaklaşımın temelidir.',
    bilesen: 'rapor', video: 'aylik-rapor',
  },
  'dijital-pazarlama-ajansi-fiyatlari-2026': { bilesen: 'rapor', video: 'aylik-rapor' },
  'whatsapp-ile-satis-rehberi': { bilesen: 'whatsapp' },

  // ─── SOSYAL MEDYA / E-POSTA / OTOMASYON ─────────────────────────────
  'instagram-algoritmasi-organik-buyume': {
    kisa: 'Instagram, kullanıcının daha önce etkileşime girdiği hesapları ve uzun izlenen, kaydedilen, paylaşılan içerikleri öne çıkarır. Organik büyüme için düzenli Reels, ilk saniyede konuyu söyleyen kancalar, tutarlı paylaşım takvimi ve yorumlara hızlı dönüş en etkili yollardır.',
    bilesen: 'sosyal-medya',
  },
  'linkedin-b2b-icerik-stratejisi': {
    kisa: 'LinkedIn’de B2B içerik; satış diliyle değil, uzmanlık, süreç ve gerçek deneyim paylaşımıyla işler. Kurucu veya uzmanın kişisel profili çoğu zaman şirket sayfasından daha fazla erişir; haftada birkaç düzenli ve değerli paylaşım yeterlidir.',
  },
  'sifirdan-instagram-isletme-hesabi-buyutme': { bilesen: 'sosyal-medya' },
  'yapay-zeka-ile-reels-hazirlama': { bilesen: 'sosyal-medya' },
  'influencer-ile-calismak-2026': { bilesen: 'reklam-etiketi' },
  'email-pazarlama-acilma-orani': {
    kisa: 'E-posta açılma oranını artırmanın yolu kısa ve merak uyandıran konu satırları, listeyi ilgi alanına göre bölmek, doğru gönderim saati, temiz ve izinli bir liste ve düzenli A/B testidir. Hedefinizi sektörünüzün gerçekçi ortalamasına göre koyun.',
    bilesen: 'eposta',
  },
  'n8n-vs-zapier-vs-make-karsilastirmasi': {
    kisa: 'Hızlı ve kolay başlangıç için Zapier, görsel ve esnek akışlar için Make, veri kontrolü, kendi sunucunuzda çalıştırma ve karmaşık iş akışları için n8n öne çıkar. Seçimi akış sayısı, bütçe ve verinin nerede tutulması gerektiğine göre yapın.',
    bilesen: 'otomasyon',
  },
  'e-ticaret-icin-n8n-otomasyon-ornekleri': {
    kisa: 'E-ticarette terk edilmiş sepet hatırlatması, sipariş durumu bildirimi, çoklu kanal stok eşitleme, müşteri etiketleme, fatura ve yorum talebi gibi tekrarlayan işler n8n ile otomatikleştirilebilir. Önce en çok zaman alan işle başlamak en hızlı faydayı sağlar.',
    bilesen: 'otomasyon',
  },
}
