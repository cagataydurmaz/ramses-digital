// Şehir × hizmet sayfaları için şehre özgü içerik. Genel ve kamuya açık
// bölgesel özelliklere dayanır; müşteri, sonuç veya istatistik iddiası içermez.
export type Hizmet = 'web' | 'ads' | 'pazarlama' | 'reklam' | 'yazilim'

export interface Sektor {
  ad: string
  web: string
  ads: string
  pazarlama: string
  reklam: string
  yazilim: string
}

export interface SehirHizmetVeri {
  sehir: string
  bulunma: string
  hedefBolgeler: string[]
  sezon: string
  sektorler: Sektor[]
}

export const sehirHizmet: Record<string, SehirHizmetVeri> = {
  istanbul: {
    sehir: 'İstanbul', bulunma: "İstanbul'da",
    hedefBolgeler: ['Kadıköy', 'Beşiktaş', 'Şişli', 'Bakırköy', 'Ataşehir', 'Üsküdar', 'Pendik', 'Beylikdüzü'],
    sezon: 'İstanbul\'da talep yıl boyunca yüksek; asıl fark, Anadolu ve Avrupa yakasında trafik ve ulaşım nedeniyle müşterinin yakın hizmeti tercih etmesidir. Reklam ve içerik yakaya ve ilçeye göre ayrılmalıdır.',
    sektorler: [
      { ad: 'Sağlık ve klinikler', web: 'Doktor ve uzman profilleri, branş sayfaları ve online randevu; Sağlık Bakanlığı reklam kurallarına uygun dil.', ads: 'İlçe ve branş bazlı dar kampanyalar; reklam metinlerinde mevzuata uygun, iddiasız anlatım.', pazarlama: 'Branş başına bilgilendirici içerik, Google İşletme Profili ve hasta yorumlarının düzenli yönetimi.', reklam: 'Arama reklamlarında ilçe hedefi, sosyal medyada bilgilendirici video içerik; agresif kampanya dili yerine güven.', yazilim: 'Randevu, hatırlatma ve hasta iletişimi için entegrasyonlar; kişisel veriler için KVKK uyumu.' },
      { ad: 'Hukuk ve danışmanlık', web: 'Uzmanlık alanı başına sayfalar, makale arşivi ve sade iletişim formu; Avukatlık Kanunu\'na uygun içerik.', ads: 'Avukatlar ücretli reklam veremez; danışmanlık firmalarında ise uzmanlık alanı odaklı, dar anahtar kelimeli kampanyalar.', pazarlama: 'Reklam yerine içerik otoritesi: soru-cevap makaleleri, LinkedIn ve SEO.', reklam: 'Mesleki kurallar izin verdiği ölçüde kurumsal görünürlük; çoğunlukla içerik ve organik kanallar.', yazilim: 'Dosya takibi, randevu ve müvekkil iletişimi için hafif, güvenli araçlar.' },
      { ad: 'E-ticaret ve markalar', web: 'Hızlı ürün sayfaları, filtreleme, güvenli ödeme ve kargo bilgisi; mobilde sorunsuz sepet.', ads: 'Alışveriş ve Performance Max kampanyaları, ürün feed\'i optimizasyonu ve doğru dönüşüm takibi.', pazarlama: 'E-posta, yeniden pazarlama ve sosyal medya ile tekrar satın alma.', reklam: 'Meta ve Google\'da ürün bazlı reklamlar; yaratıcı testleri ve bütçenin performansa göre dağıtımı.', yazilim: 'Stok, sipariş ve muhasebe entegrasyonları; tekrarlayan işler için otomasyon.' },
    ],
  },
  izmit: {
    sehir: 'İzmit', bulunma: "İzmit'te",
    hedefBolgeler: ['Merkez', 'Yahyakaptan', 'Kuruçeşme', 'Kartepe', 'Başiskele', 'Derince', 'Körfez', 'Gölcük'],
    sezon: 'İzmit\'te talep yıl içinde dengelidir; sanayi firmalarında bütçe dönemleri, hizmet işletmelerinde ise okul ve tatil takvimi belirleyicidir. Kartepe çevresinde kış sezonu ayrıca planlanmalıdır.',
    sektorler: [
      { ad: 'Sağlık ve kişisel hizmetler', web: 'Randevu odaklı, WhatsApp ile hızlı iletişim kuran, güven veren sade siteler.', ads: '"İzmit + hizmet" aramalarında dar konum hedefi; komşu ilçeler ayrı reklam gruplarında.', pazarlama: 'Google İşletme Profili, yorum yönetimi ve hizmet başına içerik.', reklam: 'Arama reklamı ve harita görünürlüğü; sosyal medyada yerel ve samimi içerik.', yazilim: 'Randevu ve hatırlatma sistemleri, form-WhatsApp entegrasyonu.' },
      { ad: 'Sanayi ve tedarik', web: 'Ürün grupları, kapasite, kalite belgeleri ve teklif formu içeren kurumsal siteler.', ads: 'Ürün ve hizmet adıyla arama yapan satın almacılara yönelik B2B kampanyalar; tüketici aramaları negatif listede.', pazarlama: 'Teknik içerik, LinkedIn ve fuar dönemi duyuruları.', reklam: 'Satın alma ekiplerini hedefleyen arama reklamları ve LinkedIn görünürlüğü.', yazilim: 'Teklif takibi, bayi portalı ve ERP ile entegre formlar.' },
      { ad: 'Yeme-içme ve perakende', web: 'Menü, konum, çalışma saatleri ve paket servis bilgisinin hızlı açıldığı mobil siteler.', ads: 'Kısa yarıçaplı konum hedefi ve yoğun saatlere göre reklam zamanlaması.', pazarlama: 'Instagram, Google İşletme Profili fotoğrafları ve yorum yanıtları.', reklam: 'Yakın çevreye sosyal medya reklamı ve harita görünürlüğü.', yazilim: 'Sipariş, rezervasyon ve sadakat uygulamaları için hazır çözümlerin entegrasyonu.' },
    ],
  },
  kocaeli: {
    sehir: 'Kocaeli', bulunma: "Kocaeli'de",
    hedefBolgeler: ['İzmit', 'Gebze', 'Darıca', 'Çayırova', 'Körfez', 'Derince', 'Gölcük', 'Kartepe'],
    sezon: 'Kocaeli\'de sanayi ağırlığı nedeniyle B2B talep iş günlerinde yoğunlaşır; Gebze-Darıca hattı İstanbul\'a yakınlığı ile ayrı bir pazar gibi davranır ve ayrı planlanmalıdır.',
    sektorler: [
      { ad: 'Organize sanayi ve üretim', web: 'Çok dilli kurumsal site, ürün katalogu, sertifikalar ve teknik doküman indirme alanı.', ads: 'Gebze ve Dilovası OSB çevresinde ürün adı odaklı B2B arama kampanyaları.', pazarlama: 'Teknik blog, vaka anlatımları ve LinkedIn ile satın alma ekiplerine ulaşma.', reklam: 'B2B arama reklamları ve sektör fuarları dönemi için yeniden pazarlama.', yazilim: 'Teklif, sipariş takibi ve tedarikçi portalı gibi iç süreç araçları.' },
      { ad: 'Lojistik ve liman hizmetleri', web: 'Hizmet ve rota sayfaları, belge listesi ve hızlı teklif formu.', ads: 'Hizmet + rota aramalarına odaklı kampanyalar; Körfez ve Derince çevresi için ayrı gruplar.', pazarlama: 'Süreç anlatan içerikler ve kurumsal güven unsurları.', reklam: 'Arama reklamları ve LinkedIn üzerinden karar vericilere görünürlük.', yazilim: 'Sevkiyat takip ekranları ve müşteri bilgilendirme otomasyonları.' },
      { ad: 'Yerel hizmet işletmeleri', web: 'İlçe bazlı hizmet sayfaları, WhatsApp butonu ve hızlı açılan mobil tasarım.', ads: 'İlçe bazlı konum hedefi; Gebze ve İzmit ayrı bütçelerle.', pazarlama: 'Google İşletme Profili ve gerçek müşteri yorumları.', reklam: 'Harita ve arama görünürlüğü, yerel sosyal medya içerikleri.', yazilim: 'Randevu ve teklif formu otomasyonları.' },
    ],
  },
  ankara: {
    sehir: 'Ankara', bulunma: "Ankara'da",
    hedefBolgeler: ['Çankaya', 'Yenimahalle', 'Keçiören', 'Etimesgut', 'Sincan', 'Gölbaşı', 'Mamak'],
    sezon: 'Ankara\'da kurumsal ve kamuya hizmet veren firmalarda bütçe ve ihale dönemleri, eğitim sektöründe ise akademik takvim talebi belirler. Üniversite kayıt dönemleri ayrı planlanmalıdır.',
    sektorler: [
      { ad: 'Savunma ve teknoloji tedarikçileri', web: 'Yetkinlik, belge ve referans odaklı, kurumsal dili güçlü, gizlilik hassasiyetine uygun siteler.', ads: 'Dar ve teknik anahtar kelimeler; geniş tüketici aramaları bütçeyi tüketmesin diye negatif listeler.', pazarlama: 'LinkedIn, teknik makaleler ve fuar odaklı iletişim.', reklam: 'Karar vericilere yönelik LinkedIn ve arama reklamları; düşük hacim, yüksek nitelik.', yazilim: 'Teklif, doküman ve proje takip araçları; güvenlik öncelikli altyapı.' },
      { ad: 'Eğitim ve kurslar', web: 'Program sayfaları, kayıt formu, sık sorulan sorular ve öğrenci deneyimi içerikleri.', ads: 'Kayıt dönemlerinde yoğunlaşan, ilçe ve program bazlı kampanyalar.', pazarlama: 'Instagram, e-posta ile aday takibi ve bilgilendirici içerik.', reklam: 'Kayıt dönemlerinde sosyal medya ve arama reklamlarının birlikte kullanımı.', yazilim: 'Ön kayıt, aday takip ve bilgilendirme otomasyonları.' },
      { ad: 'Sağlık ve danışmanlık', web: 'Uzman profilleri, hizmet sayfaları ve randevu akışı; mesleki kurallara uygun içerik.', ads: 'Çankaya ve çevresinde hizmet + semt odaklı dar kampanyalar.', pazarlama: 'Google İşletme Profili, yorumlar ve bilgilendirici blog.', reklam: 'Arama reklamı ağırlıklı, güven odaklı yaklaşım.', yazilim: 'Randevu ve hatırlatma entegrasyonları.' },
    ],
  },
  izmir: {
    sehir: 'İzmir', bulunma: "İzmir'de",
    hedefBolgeler: ['Konak', 'Karşıyaka', 'Bornova', 'Buca', 'Çiğli', 'Bayraklı', 'Urla', 'Çeşme'],
    sezon: 'İzmir\'de yaz aylarında Çeşme, Urla ve sahil ilçelerinde turizm talebi öne çıkar; şehir içi hizmetlerde ise talep dengelidir. Turizm işletmeleri için kampanyalar sezondan aylar önce başlamalıdır.',
    sektorler: [
      { ad: 'Turizm ve butik konaklama', web: 'Gerçek fotoğraflar, oda ve deneyim sayfaları, doğrudan rezervasyon ve yabancı dil sürümleri.', ads: 'Sezon öncesi başlayan, konum ve özellik odaklı ("denize sıfır", "butik") kampanyalar.', pazarlama: 'Instagram, misafir yorumları ve e-posta ile tekrar gelen misafir.', reklam: 'Sosyal medyada görsel ağırlıklı reklam, aramada doğrudan rezervasyon yolu.', yazilim: 'Rezervasyon motoru ve kanal yöneticisi entegrasyonları.' },
      { ad: 'Organize sanayi ve ihracat', web: 'Çiğli ve Kemalpaşa çevresindeki üreticiler için çok dilli katalog ve teklif formu.', ads: 'Yurt içi B2B ve gerekiyorsa yurt dışı hedefli ayrı kampanyalar.', pazarlama: 'LinkedIn, ürün içerikleri ve fuar iletişimi.', reklam: 'Arama ve LinkedIn ile satın alma ekiplerine görünürlük.', yazilim: 'Bayi ve sipariş portalları, ERP entegrasyonları.' },
      { ad: 'Yeme-içme ve perakende', web: 'Menü, konum ve rezervasyonun ilk ekranda olduğu hızlı mobil siteler.', ads: 'Alsancak, Karşıyaka gibi semtlere dar yarıçaplı konum hedefi.', pazarlama: 'Instagram ve Google İşletme Profili fotoğrafları, yorum yanıtları.', reklam: 'Yakın çevre sosyal medya reklamı ve etkinlik duyuruları.', yazilim: 'Rezervasyon ve sipariş araçlarının entegrasyonu.' },
    ],
  },
  bursa: {
    sehir: 'Bursa', bulunma: "Bursa'da",
    hedefBolgeler: ['Osmangazi', 'Nilüfer', 'Yıldırım', 'İnegöl', 'Gürsu', 'Kestel', 'Mudanya', 'Gemlik'],
    sezon: 'Bursa\'da sanayi talebi yıl boyu sürer; Uludağ çevresinde kış, Mudanya ve Gemlik kıyısında yaz sezonu ayrıca planlanmalıdır.',
    sektorler: [
      { ad: 'Otomotiv ve tekstil yan sanayi', web: 'Kapasite, makine parkuru, kalite belgeleri ve ürün grupları içeren kurumsal siteler.', ads: 'Parça ve proses adıyla arama yapan satın almacılara dar B2B kampanyalar.', pazarlama: 'Teknik içerik, LinkedIn ve müşteri denetimlerine hazır kurumsal anlatım.', reklam: 'B2B arama reklamları ve sektörel yeniden pazarlama.', yazilim: 'Teklif, numune ve sipariş takibi için iç araçlar.' },
      { ad: 'İnegöl mobilya üreticileri', web: 'Koleksiyon katalogu, ölçü ve malzeme bilgisi, toptan ve perakende ayrımı, ihracat için yabancı dil.', ads: 'Ürün ve koleksiyon odaklı alışveriş ve arama kampanyaları; bayi ve toptan aramaları ayrı gruplarda.', pazarlama: 'Instagram ve Pinterest\'te görsel katalog, bayi iletişimi.', reklam: 'Görsel ağırlıklı sosyal medya reklamları ve katalog yeniden pazarlaması.', yazilim: 'Bayi sipariş portalı ve stok entegrasyonu.' },
      { ad: 'Yerel hizmet ve sağlık', web: 'Nilüfer ve Osmangazi gibi ilçelere göre hizmet sayfaları, hızlı iletişim.', ads: 'İlçe bazlı konum hedefi ve hizmet başına reklam grupları.', pazarlama: 'Google İşletme Profili, yorum yönetimi ve yerel içerik.', reklam: 'Arama ve harita görünürlüğü ile yerel sosyal medya.', yazilim: 'Randevu ve teklif otomasyonları.' },
    ],
  },
  antalya: {
    sehir: 'Antalya', bulunma: "Antalya'da",
    hedefBolgeler: ['Muratpaşa', 'Konyaaltı', 'Kepez', 'Lara', 'Alanya', 'Manavgat', 'Kemer'],
    sezon: 'Antalya\'da turizm sezonu talebi belirler; rezervasyon kararları sezondan aylar önce verildiği için web, reklam ve içerik hazırlığı kışın tamamlanmalıdır. Şehir içi hizmetlerde talep daha dengelidir.',
    sektorler: [
      { ad: 'Otel ve tur işletmeleri', web: 'Çok dilli yapı, doğrudan rezervasyon, gerçek fotoğraf ve hızlı mobil deneyim.', ads: 'Hedef ülke ve dil bazlı ayrı kampanyalar; sezon öncesi erken rezervasyon dönemi.', pazarlama: 'Misafir yorumları, Instagram ve e-posta ile tekrar gelen misafir.', reklam: 'Yurt dışı hedefli sosyal medya reklamları ve aramada marka koruması.', yazilim: 'Rezervasyon motoru, kanal yöneticisi ve çok dilli içerik yönetimi.' },
      { ad: 'Emlak ve yabancıya satış', web: 'Çok dilli ilan sayfaları, filtreleme ve hızlı iletişim; yasal bilgilerin açık sunumu.', ads: 'Dil ve ülke bazlı kampanyalar; Alanya ve Konyaaltı gibi bölgeler ayrı gruplarda.', pazarlama: 'Video turlar, YouTube ve sosyal medya içerikleri.', reklam: 'Video ve görsel reklamlar, potansiyel alıcı formları.', yazilim: 'İlan yönetimi ve müşteri takip (CRM) entegrasyonları.' },
      { ad: 'Sağlık turizmi', web: 'Tedavi sayfaları, uzman bilgileri ve yabancı dilde iletişim; mevzuata uygun dil.', ads: 'Ülke bazlı, tedavi adı odaklı kampanyalar; reklam politikalarına dikkat.', pazarlama: 'Hasta deneyimi içerikleri ve çok dilli bilgilendirme.', reklam: 'Politika uyumlu, bilgilendirici sosyal medya ve arama reklamları.', yazilim: 'Hasta talep yönetimi ve çok dilli iletişim otomasyonları.' },
    ],
  },
  gaziantep: {
    sehir: 'Gaziantep', bulunma: "Gaziantep'te",
    hedefBolgeler: ['Şahinbey', 'Şehitkamil', 'Nizip', 'İslahiye', 'Organize Sanayi'],
    sezon: 'Gaziantep\'te üretim ve ihracat talebi yıl boyu sürer; gıda ve yöresel ürünlerde bayram ve hediye dönemleri ayrıca planlanmalıdır.',
    sektorler: [
      { ad: 'Halı, tekstil ve ihracat', web: 'Çok dilli ürün katalogu, üretim kapasitesi ve toptan talep formu.', ads: 'Yurt dışı pazarlara göre ayrı dil ve ülke kampanyaları.', pazarlama: 'LinkedIn, B2B platformları ve fuar iletişimi.', reklam: 'Hedef pazar odaklı arama ve sosyal medya reklamları.', yazilim: 'Bayi ve ihracat sipariş takibi araçları.' },
      { ad: 'Gıda ve yöresel ürünler', web: 'E-ticaret altyapısı, kargo ve paketleme bilgisi, ürün hikâyesi.', ads: 'Ürün adı odaklı alışveriş kampanyaları, bayram dönemlerinde bütçe artışı.', pazarlama: 'Instagram, e-posta ve tekrar satın alma kampanyaları.', reklam: 'Görsel ağırlıklı sosyal medya reklamları ve hediye dönemi kampanyaları.', yazilim: 'Sipariş, kargo ve stok entegrasyonları.' },
      { ad: 'Yerel hizmetler', web: 'Şahinbey ve Şehitkamil\'e göre hizmet sayfaları ve hızlı iletişim.', ads: 'İlçe bazlı konum hedefi.', pazarlama: 'Google İşletme Profili ve yorum yönetimi.', reklam: 'Arama ve harita görünürlüğü.', yazilim: 'Randevu ve teklif formu otomasyonları.' },
    ],
  },
  konya: {
    sehir: 'Konya', bulunma: "Konya'da",
    hedefBolgeler: ['Selçuklu', 'Meram', 'Karatay', 'Ereğli', 'Akşehir', 'Beyşehir'],
    sezon: 'Konya\'da tarım makineleri ve yedek parça talebi tarım takvimine göre dalgalanır; ekim ve hasat öncesi dönemler reklam bütçesinin yoğunlaştığı zamanlardır.',
    sektorler: [
      { ad: 'Tarım makineleri ve yedek parça', web: 'Model ve parça bazlı ürün sayfaları, teknik özellikler, bayi ve servis ağı.', ads: 'Parça ve model adıyla yapılan aramalara dar kampanyalar; tarım takvimine göre bütçe.', pazarlama: 'Kullanım videoları, bayi iletişimi ve teknik içerik.', reklam: 'Arama reklamları ve video içerikler; bölgesel bayi hedefleme.', yazilim: 'Bayi sipariş ve stok sorgulama araçları.' },
      { ad: 'Gıda üretimi ve un sanayi', web: 'Ürün katalogu, sertifikalar ve toptan talep formu.', ads: 'Toptan alıcılara yönelik B2B arama kampanyaları.', pazarlama: 'Kurumsal içerik ve LinkedIn.', reklam: 'B2B arama ve sektörel yeniden pazarlama.', yazilim: 'Sipariş ve sevkiyat takibi entegrasyonları.' },
      { ad: 'Sağlık, eğitim ve yerel hizmet', web: 'Selçuklu ve Meram\'a göre hizmet sayfaları, randevu ve iletişim.', ads: 'İlçe bazlı konum hedefi ve hizmet başına reklam grupları.', pazarlama: 'Google İşletme Profili ve yerel içerik.', reklam: 'Arama ve harita görünürlüğü.', yazilim: 'Randevu ve kayıt otomasyonları.' },
    ],
  },
  mersin: {
    sehir: 'Mersin', bulunma: "Mersin'de",
    hedefBolgeler: ['Yenişehir', 'Mezitli', 'Akdeniz', 'Toroslar', 'Tarsus', 'Erdemli', 'Silifke'],
    sezon: 'Mersin\'de narenciye ve tarım ürünlerinde hasat dönemi, kıyı ilçelerinde yaz sezonu talebi şekillendirir; lojistik ve dış ticarette ise talep yıl boyu sürer.',
    sektorler: [
      { ad: 'Lojistik, liman ve dış ticaret', web: 'Hizmet ve süreç sayfaları, belge listesi, İngilizce sürüm ve hızlı teklif formu.', ads: 'Hizmet ve rota odaklı B2B kampanyalar; yurt dışı müşteriler için ayrı dil.', pazarlama: 'Süreç anlatan içerik, LinkedIn ve kurumsal referanslar.', reklam: 'Karar vericilere yönelik arama ve LinkedIn reklamları.', yazilim: 'Sevkiyat takip ve müşteri bilgilendirme otomasyonları.' },
      { ad: 'Narenciye ve tarım ihracatı', web: 'Ürün ve sezon bilgisi, sertifikalar, çok dilli katalog.', ads: 'Hasat dönemine göre yoğunlaşan, ihracat pazarı odaklı kampanyalar.', pazarlama: 'Üretici hikâyesi, fuar ve B2B platform iletişimi.', reklam: 'Hedef pazar odaklı arama ve sosyal medya reklamları.', yazilim: 'Sipariş ve sevkiyat takip araçları.' },
      { ad: 'Emlak ve kıyı turizmi', web: 'İlan ve konaklama sayfaları, gerçek fotoğraflar, hızlı iletişim.', ads: 'Mezitli ve Erdemli gibi kıyı ilçelerinde konum hedefli kampanyalar.', pazarlama: 'Instagram, video tur ve yorum yönetimi.', reklam: 'Görsel ağırlıklı sosyal medya reklamları.', yazilim: 'İlan ve rezervasyon yönetimi entegrasyonları.' },
    ],
  },
  kayseri: {
    sehir: 'Kayseri', bulunma: "Kayseri'de",
    hedefBolgeler: ['Melikgazi', 'Kocasinan', 'Talas', 'Hacılar', 'İncesu', 'Erciyes'],
    sezon: 'Kayseri\'de mobilya ve metal sanayisinde talep yıl boyu sürer; Erciyes çevresinde kış sezonu, üniversite çevresinde ise akademik takvim ayrıca planlanmalıdır.',
    sektorler: [
      { ad: 'Mobilya ve yatak üreticileri', web: 'Koleksiyon katalogu, bayi bulucu, toptan talep formu ve ihracat için yabancı dil.', ads: 'Koleksiyon ve ürün odaklı kampanyalar; bayi ve son tüketici ayrı gruplarda.', pazarlama: 'Görsel katalog, Instagram ve bayi iletişimi.', reklam: 'Görsel ağırlıklı sosyal medya reklamları ve katalog yeniden pazarlaması.', yazilim: 'Bayi sipariş portalı ve stok entegrasyonu.' },
      { ad: 'Metal ve makine sanayi', web: 'Kapasite, makine parkuru, kalite belgeleri ve teklif formu.', ads: 'Proses ve ürün adıyla arama yapan satın almacılara B2B kampanyalar.', pazarlama: 'Teknik içerik ve LinkedIn.', reklam: 'B2B arama reklamları.', yazilim: 'Teklif ve iş emri takip araçları.' },
      { ad: 'Kış turizmi ve konaklama', web: 'Erciyes\'e yakın konaklama ve kayak hizmetleri için rezervasyon odaklı siteler.', ads: 'Kış sezonu öncesi başlayan, konum ve özellik odaklı kampanyalar.', pazarlama: 'Instagram, misafir yorumları ve sezon duyuruları.', reklam: 'Sezon odaklı sosyal medya ve arama reklamları.', yazilim: 'Rezervasyon motoru entegrasyonu.' },
    ],
  },
  eskisehir: {
    sehir: 'Eskişehir', bulunma: "Eskişehir'de",
    hedefBolgeler: ['Odunpazarı', 'Tepebaşı', 'Organize Sanayi', 'Sivrihisar'],
    sezon: 'Eskişehir\'de üniversite takvimi şehir ekonomisini belirgin şekilde etkiler; kayıt dönemleri ve yaz tatili, kurs, konaklama ve yeme-içme işletmeleri için ayrı planlanmalıdır.',
    sektorler: [
      { ad: 'Eğitim ve öğrenci hizmetleri', web: 'Program ve fiyat bilgisinin hızlı bulunduğu, mobil öncelikli siteler.', ads: 'Kayıt dönemlerinde yoğunlaşan, kampüs çevresine konum hedefli kampanyalar.', pazarlama: 'Instagram, TikTok ve öğrenci sorularına cevap veren içerik.', reklam: 'Genç kitleye yönelik kısa video reklamları.', yazilim: 'Ön kayıt ve bilgilendirme otomasyonları.' },
      { ad: 'Makine, seramik ve havacılık tedarikçileri', web: 'Kurumsal katalog, belge ve kapasite bilgisi, teklif formu.', ads: 'Teknik ve dar anahtar kelimeli B2B kampanyalar.', pazarlama: 'LinkedIn ve teknik içerik.', reklam: 'B2B arama ve LinkedIn reklamları.', yazilim: 'Teklif ve sipariş takip araçları.' },
      { ad: 'Kültür turizmi ve yeme-içme', web: 'Odunpazarı çevresindeki işletmeler için menü, konum ve rezervasyon odaklı siteler.', ads: 'Hafta sonu ve tatil dönemlerine göre zamanlanmış konum hedefli kampanyalar.', pazarlama: 'Instagram ve Google İşletme Profili fotoğrafları.', reklam: 'Ziyaretçilere yönelik sosyal medya reklamları.', yazilim: 'Rezervasyon ve sipariş entegrasyonları.' },
    ],
  },
}
