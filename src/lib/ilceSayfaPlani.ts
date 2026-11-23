import type { IlceFaq } from './ilceler'

// /ilceler rehberlerinin "ilk sayfa planı" tablosu ve ek SSS.
// Her ilçe için ayrı yazıldı: hangi sayfa, hangi aramayı karşılar, içinde ne olmalı.
export interface IlceSayfaPlani {
  sayfalar: { sayfa: string; arama: string; icerik: string }[]
  sss: IlceFaq
}

export const ilceSayfaPlani: Record<string, IlceSayfaPlani> = {
  gebze: {
    sayfalar: [
      { sayfa: 'Ürün grubu sayfası', arama: 'gebze cnc işleme', icerik: 'Tezgâh parkı, tolerans, malzeme ve minimum sipariş bilgisi; teknik çizim yükleme alanlı teklif formu.' },
      { sayfa: 'Kalite ve belgeler', arama: 'gebze iso belgeli üretici', icerik: 'Belge listesi, denetim süreçleri ve satın alma ekibinin indirebileceği firma tanıtım dosyası.' },
      { sayfa: 'Klinik / hizmet sayfası', arama: 'gebze diş kliniği', icerik: 'Tedavi başına bölüm, hekim bilgisi, ulaşım ve otopark; tek dokunuşla arama düğmesi.' },
    ],
    sss: { q: 'Gebze OSB\'deki firmalar için İngilizce sayfa şart mı?', a: 'İhracat yapıyor veya yabancı ortaklı firmalara tedarik veriyorsanız evet. Ürün ve kalite sayfalarının İngilizce sürümü, yabancı satın almacıların firmanızı ilk elemede geçmesini kolaylaştırır.' },
  },
  darica: {
    sayfalar: [
      { sayfa: 'Tedavi / hizmet sayfası', arama: 'darıca implant', icerik: 'Sürecin adımları, süre, kimlere uygun olduğu ve sık sorulan sorular; iddiasız, bilgilendirici dil.' },
      { sayfa: 'Menü ve rezervasyon', arama: 'darıca sahil kahvaltı', icerik: 'Güncel menü, fotoğraflar, çalışma saatleri, yol tarifi ve WhatsApp rezervasyon.' },
      { sayfa: 'Mahalle rehberi', arama: 'darıca bayramoğlu satılık daire', icerik: 'Mahallenin ulaşımı, okulları ve sosyal alanları; aktif ilanlara bağlantı.' },
    ],
    sss: { q: 'Darıca\'daki işletmem İstanbul\'dan gelen müşteriyi de hedefleyebilir mi?', a: 'Evet. Özellikle sahil işletmeleri ve sağlık hizmetleri için "Darıca" adıyla birlikte ulaşım bilgisini (sahil yolu, Marmaray bağlantısı) anlatan içerik, ilçe dışından gelen ziyaretçinin karar vermesini kolaylaştırır.' },
  },
  dilovasi: {
    sayfalar: [
      { sayfa: 'Ürün kategori sayfası', arama: 'dilovası endüstriyel kimyasal tedarikçisi', icerik: 'Ürün listesi HTML tablo olarak (PDF değil), teknik veri föyleri ve stok/teslim bilgisi.' },
      { sayfa: 'Lojistik / depolama', arama: 'dilovası depolama hizmeti', icerik: 'Depo alanı, ekipman, sertifikalar ve hizmet verilen güzergâhlar.' },
      { sayfa: 'Teklif sayfası', arama: 'dilovası metal işleme teklif', icerik: 'Kısa form, dosya yükleme ve dönüş süresi bilgisi.' },
    ],
    sss: { q: 'Ürün listemiz çok uzun, hepsine sayfa açmak gerekir mi?', a: 'Hayır. Ürünleri anlamlı kategorilere ayırıp her kategoriye bir sayfa açmak çoğu firma için yeterlidir. Önemli olan, listenin PDF yerine sayfanın içinde aranabilir metin olarak durmasıdır.' },
  },
  korfez: {
    sayfalar: [
      { sayfa: 'Teknik servis sayfası', arama: 'körfez endüstriyel bakım firması', icerik: 'Hizmet verilen tesis türleri, ekip yetkinlikleri, iş güvenliği belgeleri.' },
      { sayfa: 'Hereke el sanatları', arama: 'hereke ipek halı', icerik: 'Dokuma süreci, malzeme, ölçüler ve sipariş yolu; ilçenin kendi marka hikâyesi.' },
      { sayfa: 'Yerel hizmet sayfası', arama: 'körfez nakliyat', icerik: 'Hizmet bölgeleri, araç tipleri ve hızlı fiyat sorma formu.' },
    ],
    sss: { q: 'Hereke adıyla mı Körfez adıyla mı sayfa açmalıyım?', a: 'İşletmeniz Hereke\'deyse ikisini de kullanın: sayfa başlığında Hereke, metin içinde Körfez/Kocaeli bilgisi. İnsanlar bu bölgeyi çoğu zaman Hereke adıyla arar.' },
  },
  derince: {
    sayfalar: [
      { sayfa: 'Liman / gümrük hizmeti', arama: 'derince gümrük müşavirliği', icerik: 'Verilen hizmetler, belge listesi, süreç adımları ve iletişim.' },
      { sayfa: 'Taşımacılık sayfası', arama: 'derince konteyner taşımacılığı', icerik: 'Araç filosu, güzergâhlar, takip ve teklif formu.' },
      { sayfa: 'Mahalle esnafı', arama: 'derince çenedağ veteriner', icerik: 'Hizmetler, çalışma saatleri, harita ve yorumlar.' },
    ],
    sss: { q: 'Derince İzmit\'e çok yakın, ayrı sayfa gerekir mi?', a: 'Müşterileriniz "Derince" yazarak arıyorsa evet. Mahalle adlarını (Çenedağ, Yenikent gibi) içerikte geçirmek, İzmit sonuçları arasında kaybolmayı önler.' },
  },
  golcuk: {
    sayfalar: [
      { sayfa: 'Yan sanayi sayfası', arama: 'gölcük tersane yan sanayi', icerik: 'Yapılan işler, kapasite, kalite belgeleri ve referans sektörler.' },
      { sayfa: 'Sahil işletmesi', arama: 'değirmendere balık restoranı', icerik: 'Menü, sezon saatleri, rezervasyon ve yol tarifi.' },
      { sayfa: 'Konaklama / yazlık', arama: 'gölcük kiralık yazlık', icerik: 'Fotoğraflar, müsaitlik bilgisi ve doğrudan iletişim.' },
    ],
    sss: { q: 'Sezonluk işletmeler kışın siteyi kapatmalı mı?', a: 'Hayır. Kapatmak yerine "sezon açılış tarihi" ve erken rezervasyon bilgisi eklemek daha iyidir; site açık kaldıkça Google\'daki görünürlüğü de korunur.' },
  },
  basiskele: {
    sayfalar: [
      { sayfa: 'Günübirlik doğa', arama: 'yuvacık kahvaltı mekanları', icerik: 'Mekân fotoğrafları, menü, ulaşım ve hafta sonu yoğunluk bilgisi.' },
      { sayfa: 'Yeni konut bölgesi', arama: 'başiskele satılık villa', icerik: 'Bölge rehberi, ulaşım süreleri ve ilan bağlantıları.' },
      { sayfa: 'Ev hizmetleri', arama: 'başiskele tesisatçı', icerik: 'Hizmet bölgesi (Seymen, Kullar, Yuvacık), çalışma saatleri ve tek dokunuşla arama.' },
    ],
    sss: { q: 'Başiskele\'de aramalar daha çok semt adıyla mı yapılıyor?', a: 'Çoğu zaman evet. Yuvacık, Seymen ve Kullar gibi semt adlarını sayfa içinde ve Google İşletme Profili\'nin hizmet bölgesinde belirtmek görünürlüğü artırır.' },
  },
  kartepe: {
    sayfalar: [
      { sayfa: 'Konaklama sayfası', arama: 'kartepe bungalov', icerik: 'Oda/ev tipleri, fotoğraflar, kayak merkezine mesafe ve doğrudan rezervasyon.' },
      { sayfa: 'Etkinlik / organizasyon', arama: 'maşukiye düğün mekanı', icerik: 'Kapasite, paket içerikleri, fotoğraf galerisi ve tarih sorgulama formu.' },
      { sayfa: 'Kış sezonu rehberi', arama: 'kartepe kayak ekipman kiralama', icerik: 'Sezon bilgisi, ekipman listesi ve ulaşım; her yıl güncellenen içerik.' },
    ],
    sss: { q: 'Rezervasyon platformlarındayım, ayrıca site gerekir mi?', a: 'Platformlar görünürlük sağlar ama her rezervasyondan komisyon alır. Kendi siteniz ve güçlü Google profiliniz, sizi doğrudan arayan misafiri komisyonsuz karşılar; ikisi birlikte kullanılabilir.' },
  },
  cayirova: {
    sayfalar: [
      { sayfa: 'Otomotiv tedarik', arama: 'tosb otomotiv yan sanayi', icerik: 'Üretilen parçalar, müşteri sektörleri, kalite belgeleri ve İngilizce sürüm.' },
      { sayfa: 'Teknik servis', arama: 'çayırova makine bakım servisi', icerik: 'Servis kapsamı, müdahale süresi ve bölge bilgisi.' },
      { sayfa: 'Yerel hizmet', arama: 'şekerpınar diyetisyen', icerik: 'Hizmetler, randevu formu ve harita.' },
    ],
    sss: { q: 'Çayırova\'daki bir firma Gebze aramalarında da görünebilir mi?', a: 'Hizmet bölgeniz Gebze\'yi kapsıyorsa bunu içerikte açıkça belirtin. Yine de en güçlü sonucu, işletmenin gerçekten bulunduğu ilçe ve semt adıyla yapılan aramalarda alırsınız.' },
  },
  karamursel: {
    sayfalar: [
      { sayfa: 'Yerel ürün satışı', arama: 'karamürsel köy ürünleri', icerik: 'Ürünler, üretim hikâyesi, sipariş ve kargo bilgisi.' },
      { sayfa: 'Sahil işletmesi', arama: 'karamürsel sahil restoran', icerik: 'Menü, sezon saatleri ve yol tarifi.' },
      { sayfa: 'Yazlık hizmetleri', arama: 'karamürsel yazlık bakım tadilat', icerik: 'Hizmet listesi, sezon öncesi bakım paketi ve iletişim.' },
    ],
    sss: { q: 'Yazlıkçı müşterilere kış aylarında nasıl ulaşırım?', a: 'Sezon öncesi (mart–mayıs) için bakım, tadilat ve temizlik sayfaları hazırlayın. Yazlık sahipleri genellikle sezondan önce, ilçe dışındayken arama yapar.' },
  },
  kandira: {
    sayfalar: [
      { sayfa: 'Doğa / kamp', arama: 'kandıra kerpe kamp alanı', icerik: 'Alan bilgisi, olanaklar, fotoğraflar ve rezervasyon.' },
      { sayfa: 'Gıda / tarım ürünü', arama: 'kandıra bezi / köy peyniri', icerik: 'Ürün tanıtımı, üretim yöntemi ve sipariş yolu.' },
      { sayfa: 'Pansiyon / konaklama', arama: 'kefken pansiyon', icerik: 'Odalar, sahile mesafe, sezon bilgisi ve doğrudan iletişim.' },
    ],
    sss: { q: 'Kandıra\'da internetten satış yapmak mantıklı mı?', a: 'Yöresel ürünlerde evet. Ürünün hikâyesini anlatan, siparişi WhatsApp ile kolaylaştıran sade bir site, büyük pazaryerlerinde kaybolmadan doğrudan müşteri bulmanızı sağlar.' },
  },
  sakarya: {
    sayfalar: [
      { sayfa: 'Sanayi tedarikçisi', arama: 'sakarya otomotiv yan sanayi', icerik: 'Ürünler, kapasite, kalite belgeleri ve teklif formu.' },
      { sayfa: 'İlçe hizmet sayfası', arama: 'serdivan diş kliniği', icerik: 'İlçe ve semt bazlı hizmet sayfası, harita ve randevu.' },
      { sayfa: 'Turizm sayfası', arama: 'sapanca göl evi', icerik: 'Konaklama tipleri, fotoğraflar ve doğrudan rezervasyon.' },
    ],
    sss: { q: 'Sakarya geneline mi, ilçeye mi sayfa açmalıyım?', a: 'Müşteriniz ilçe adıyla arıyorsa ilçe sayfası daha hızlı sonuç verir. Tüm ile hizmet veriyorsanız bir il sayfası ve önemli ilçeler için kısa, özgün alt sayfalar en dengeli yapıdır.' },
  },
  adapazari: {
    sayfalar: [
      { sayfa: 'Ticaret / perakende', arama: 'adapazarı toptan gıda', icerik: 'Ürün grupları, teslimat bölgesi ve sipariş yolu.' },
      { sayfa: 'Eğitim / kurs', arama: 'adapazarı lgs kursu', icerik: 'Program bilgisi, kayıt dönemi, ön kayıt formu.' },
      { sayfa: 'Sağlık hizmeti', arama: 'adapazarı fizik tedavi merkezi', icerik: 'Hizmetler, uzman bilgisi ve randevu; mevzuata uygun dil.' },
    ],
    sss: { q: 'Adapazarı\'nda kurs ve eğitim işletmeleri ne zaman görünür olmalı?', a: 'Kayıt dönemlerinden en az 1–2 ay önce. Arama hacmi kayıt dönemlerinde yükseldiği için sayfaların o tarihten önce hazır ve Google tarafından taranmış olması gerekir.' },
  },
  serdivan: {
    sayfalar: [
      { sayfa: 'Öğrenciye yönelik hizmet', arama: 'serdivan kafe ders çalışma', icerik: 'Mekân bilgisi, çalışma saatleri, priz/wi-fi gibi detaylar ve konum.' },
      { sayfa: 'Kurs / stüdyo', arama: 'serdivan pilates stüdyosu', icerik: 'Ders programı, paketler (fiyatsız), deneme dersi formu.' },
      { sayfa: 'Konut / kiralık', arama: 'serdivan kiralık öğrenci evi', icerik: 'Kampüse mesafe, eşyalı/eşyasız bilgisi ve iletişim.' },
    ],
    sss: { q: 'Serdivan\'da hedef kitle genç, sosyal medya yetmez mi?', a: 'Sosyal medya keşif sağlar ama "yakınımdaki" ve "serdivan + hizmet" aramaları Google\'da yapılır. Instagram ile Google İşletme Profili ve basit bir site birlikte çalıştığında sonuç daha istikrarlı olur.' },
  },
  sapanca: {
    sayfalar: [
      { sayfa: 'Konaklama', arama: 'sapanca jakuzili bungalov', icerik: 'Ev tipleri, fotoğraflar, olanaklar ve doğrudan rezervasyon.' },
      { sayfa: 'Kahvaltı / restoran', arama: 'sapanca göl manzaralı kahvaltı', icerik: 'Menü, fotoğraflar, hafta sonu yoğunluğu ve rezervasyon.' },
      { sayfa: 'Etkinlik', arama: 'sapanca kır düğünü', icerik: 'Kapasite, paket içeriği ve tarih sorgulama.' },
    ],
    sss: { q: 'Sapanca\'da rekabet çok yüksek, nasıl öne çıkılır?', a: 'Genel "Sapanca bungalov" yerine özelliği öne çıkaran aramalara odaklanın: jakuzili, evcil hayvan kabul eden, göl manzaralı gibi. Her özellik için gerçek fotoğraflı ayrı bölüm veya sayfa hazırlamak fark yaratır.' },
  },
  yalova: {
    sayfalar: [
      { sayfa: 'Çiçekçilik / fidancılık', arama: 'yalova fidan satışı', icerik: 'Ürün çeşitleri, sezon bilgisi, toptan/perakende sipariş yolu.' },
      { sayfa: 'Termal / otel', arama: 'yalova termal otel', icerik: 'Tesis olanakları, paket bilgisi ve doğrudan rezervasyon.' },
      { sayfa: 'Yerel hizmet', arama: 'yalova merkez diş hekimi', icerik: 'Hizmetler, randevu, harita ve yorumlar.' },
    ],
    sss: { q: 'Yalova\'ya İstanbul\'dan gelen müşteriyi nasıl hedeflerim?', a: 'Feribot ve karayolu ulaşım bilgisini, hafta sonu programlarını ve rezervasyon yolunu net anlatan içerik hazırlayın. İstanbul\'dan arama yapan kişi ulaşımı ve toplam süreyi bilmek ister.' },
  },
  cinarcik: {
    sayfalar: [
      { sayfa: 'Pansiyon / apart', arama: 'çınarcık denize sıfır pansiyon', icerik: 'Odalar, plaja mesafe, fotoğraflar ve doğrudan iletişim.' },
      { sayfa: 'Balık restoranı', arama: 'çınarcık balık restoranı', icerik: 'Menü, sezon saatleri, rezervasyon ve konum.' },
      { sayfa: 'Emlak', arama: 'çınarcık satılık yazlık', icerik: 'Bölge rehberi, ilanlar ve randevu formu.' },
    ],
    sss: { q: 'Çınarcık\'ta tatil aramaları ne zaman başlıyor?', a: 'Tatil kararları genellikle ilkbaharda verilir. Sayfalarınızın mart–nisan döneminde güncel fotoğraf ve sezon bilgisiyle hazır olması, rezervasyon döneminde görünür olmanızı sağlar.' },
  },
  armutlu: {
    sayfalar: [
      { sayfa: 'Kamp / doğa', arama: 'armutlu kamp yeri', icerik: 'Alan olanakları, kurallar, fotoğraflar ve rezervasyon.' },
      { sayfa: 'Termal / butik otel', arama: 'armutlu termal', icerik: 'Tesis bilgisi, olanaklar ve doğrudan rezervasyon.' },
      { sayfa: 'Yazlık hizmetleri', arama: 'armutlu yazlık kiralama', icerik: 'Ev bilgileri, müsaitlik ve iletişim.' },
    ],
    sss: { q: 'Armutlu\'da müşterinin çoğu dışarıdan geliyor, ne değişir?', a: 'Dışarıdan gelen ziyaretçi bölgeyi bilmez. Ulaşım, mesafeler, sezon bilgisi ve fotoğraflar sitede net olmalı; karar ve rezervasyon çoğunlukla telefondan yapıldığı için mobil hız da kritiktir.' },
  },
  altinova: {
    sayfalar: [
      { sayfa: 'Tersane yan sanayi', arama: 'altınova tersane taşeron', icerik: 'Yapılan işler, ekipman, belgeler ve referans projeler.' },
      { sayfa: 'Sera / tarım', arama: 'altınova sera ürünleri toptan', icerik: 'Ürünler, hasat dönemleri ve toptan sipariş yolu.' },
      { sayfa: 'Doğa turizmi', arama: 'hersek lagünü kuş gözlemi', icerik: 'Bölge rehberi, ulaşım ve yakın işletmeler.' },
    ],
    sss: { q: 'Tersane yan sanayisinde web sitesi iş getirir mi?', a: 'Ana tersaneler ve proje yöneticileri yeni taşeron araştırırken firma sitesine bakar. Yapılan işleri, ekipman ve belgeleri gösteren bir site, tanıtım yapılmadan önce güven oluşturur.' },
  },
  ciftlikkoy: {
    sayfalar: [
      { sayfa: 'Sağlık / eğitim', arama: 'çiftlikköy anaokulu', icerik: 'Program, kadro bilgisi, kayıt dönemi ve ön kayıt formu.' },
      { sayfa: 'Oto servis', arama: 'çiftlikköy oto servis', icerik: 'Hizmetler, marka uzmanlıkları ve randevu.' },
      { sayfa: 'Ev hizmetleri', arama: 'çiftlikköy temizlik şirketi', icerik: 'Hizmet bölgesi, hizmet türleri ve hızlı iletişim.' },
    ],
    sss: { q: 'Çiftlikköy gibi küçük bir ilçede site gerçekten gerekli mi?', a: 'Rekabet az olduğu için iyi hazırlanmış birkaç sayfa ve eksiksiz Google profili ile kısa sürede görünür olmak mümkündür. Rakipleriniz henüz dijitalde değilse ilk hazırlayan avantaj kazanır.' },
  },
  'yalova-termal': {
    sayfalar: [
      { sayfa: 'Termal otel', arama: 'termal hafta sonu paketi', icerik: 'Paket içerikleri (fiyatsız), olanaklar, fotoğraflar ve rezervasyon.' },
      { sayfa: 'Spa / kaplıca', arama: 'yalova kaplıca günübirlik', icerik: 'Günübirlik kullanım bilgisi, saatler ve ulaşım.' },
      { sayfa: 'Restoran', arama: 'termal gökçedere restoran', icerik: 'Menü, çalışma saatleri ve konum.' },
    ],
    sss: { q: 'Termal tesisler sağlık iddiasında bulunabilir mi?', a: 'Tedavi edici etki iddiasında dikkatli olunmalıdır. Tesis olanaklarını, suyun özelliklerini ve kullanım bilgisini nesnel biçimde anlatmak hem mevzuata uygun hem de güven verici bir yaklaşımdır.' },
  },
  tekirdag: {
    sayfalar: [
      { sayfa: 'OSB üretici', arama: 'tekirdağ tekstil fason üretim', icerik: 'Üretim kapasitesi, makine parkı, belgeler ve İngilizce sürüm.' },
      { sayfa: 'Merkez hizmet', arama: 'süleymanpaşa diş kliniği', icerik: 'Hizmetler, hekim bilgisi, randevu ve harita.' },
      { sayfa: 'Kıyı turizmi', arama: 'şarköy bağ evi', icerik: 'Konaklama/tadım bilgisi, fotoğraflar ve rezervasyon.' },
    ],
    sss: { q: 'Tekirdağ\'da hangi ilçe adıyla sayfa açmalıyım?', a: 'İşletmenin bulunduğu ilçe adıyla. Tekirdağ\'da aramalar çoğu zaman Çorlu, Çerkezköy, Süleymanpaşa gibi ilçe adlarıyla yapılır; sadece "Tekirdağ" demek yetmeyebilir.' },
  },
  corlu: {
    sayfalar: [
      { sayfa: 'Tekstil / imalat', arama: 'çorlu konfeksiyon atölyesi', icerik: 'Üretim türleri, kapasite, minimum adet ve teklif formu.' },
      { sayfa: 'Sağlık hizmeti', arama: 'çorlu göz doktoru', icerik: 'Hizmetler, uzman bilgisi, randevu; mevzuata uygun dil.' },
      { sayfa: 'Oto servis', arama: 'çorlu oto ekspertiz', icerik: 'Hizmet kapsamı, rapor örneği (kişisel veri olmadan) ve randevu.' },
    ],
    sss: { q: 'Çorlu\'da hem fabrika hem esnaf için aynı strateji olur mu?', a: 'Hayır. Fabrika ve atölyeler ürün ve kapasite sayfalarıyla satın almacılara, esnaf ise harita, yorum ve tek dokunuşla aramayla yerel müşteriye ulaşır. Hedef kitle farklı olduğu için sayfa yapısı da farklıdır.' },
  },
  cerkezkoy: {
    sayfalar: [
      { sayfa: 'OSB tedarikçi', arama: 'çerkezköy osb yedek parça', icerik: 'Ürün grupları, stok/teslim bilgisi ve teklif formu.' },
      { sayfa: 'Lojistik', arama: 'çerkezköy nakliye firması', icerik: 'Araç tipleri, güzergâhlar ve hızlı teklif.' },
      { sayfa: 'Yerel hizmet', arama: 'kapaklı kreş', icerik: 'Program bilgisi, kayıt dönemi ve iletişim.' },
    ],
    sss: { q: 'Kapaklı ile Çerkezköy için ayrı sayfa gerekir mi?', a: 'Her iki bölgeye de hizmet veriyorsanız ve insanlar iki adı ayrı ayrı arıyorsa, her biri için kısa ama özgün bir bölüm veya sayfa faydalı olur. Aynı metni kopyalamak yerine her bölgenin kendi bilgisini yazmak gerekir.' },
  },
  duzce: {
    sayfalar: [
      { sayfa: 'Mobilya / ahşap', arama: 'düzce mobilya imalatçısı', icerik: 'Ürün katalogu, malzeme bilgisi, toptan sipariş ve teklif formu.' },
      { sayfa: 'Fındık / tarım', arama: 'düzce fındık toptan', icerik: 'Ürün çeşitleri, hasat dönemi, paketleme ve sipariş yolu.' },
      { sayfa: 'Akçakoca turizm', arama: 'akçakoca denize yakın otel', icerik: 'Konaklama bilgisi, fotoğraflar, ulaşım ve rezervasyon.' },
    ],
    sss: { q: 'Düzce\'deki mobilya üreticisi il dışına nasıl satar?', a: 'Ürün sayfaları, gerçek fotoğraflar, ölçü ve malzeme bilgisi ve teslimat bölgelerini anlatan bir site, il dışındaki bayi ve son kullanıcının sizi bulmasını sağlar. "Düzce + ürün" aramaları başlangıç için iyi bir hedeftir.' },
  },
}
