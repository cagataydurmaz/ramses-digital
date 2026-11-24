// İl/ilçe SEO sayfalarına (IlSeoSayfasi) eklenen, o yere özgü "yakından bakış" bölümü.
// Amaç: şablon dışı, yalnızca o sayfada bulunan içerik. Bilgiler kamuya açık coğrafi ve
// ekonomik özelliklere dayanır; müşteri sonucu, istatistik veya ofis iddiası içermez.

export interface IlSeoYakindan {
  baslik: string
  paragraf: string
  ipuclari: { baslik: string; metin: string }[]
}

export const ilSeoYakindan: Record<string, IlSeoYakindan> = {
  // ── KOCAELİ ─────────────────────────────────────────────────────────────
  gebze: {
    baslik: 'Gebze’de Müşteri Sizi Nasıl Arıyor?',
    paragraf:
      'Gebze, İstanbul Anadolu yakasıyla iç içe bir ilçe. Darıca, Çayırova ya da Tuzla’dan arama yapan biri de Gebze sonuçlarını görür; bu yüzden rakibiniz yalnızca Gebze’deki işletmeler değildir. Fabrikalara mal ve hizmet satan firmalar için arama çoğu zaman ilçe adıyla değil, ürün adıyla yapılır. Esnaf ve klinikler içinse Pelitli, Kirazpınar, Beylikbağı gibi mahalle adları önemlidir.',
    ipuclari: [
      { baslik: 'Ürün adıyla sayfa', metin: 'Satın almacılar “paslanmaz sac kesim” gibi ürün adlarıyla arar. Her ana ürün ve hizmet için ayrı sayfa, Gebze adını doğal biçimde geçirir.' },
      { baslik: 'Mahalle adları', metin: 'Harita sonuçları yakınlığa bakar. Hizmet verdiğiniz mahalleleri sitede ve işletme profilinde açıkça yazmak doğru kişilere görünmenizi kolaylaştırır.' },
      { baslik: 'İstanbul tarafını unutmayın', metin: 'Osmangazi Köprüsü ve otoyol bağlantısı sayesinde Tuzla, Pendik ve Yalova’dan gelen müşteriyi de hedefleyen içerik planlanabilir.' },
    ],
  },
  darica: {
    baslik: 'Darıca’da Görünür Olmanın Püf Noktaları',
    paragraf:
      'Darıca, Gebze ile bitişik ve İstanbul sınırına çok yakın bir sahil ilçesi. Bayramoğlu sahili ve Darıca Hayvanat Bahçesi hafta sonu ziyaretçi çeker; Marmaray istasyonu da günlük İstanbul trafiğini ilçeye bağlar. Bu yüzden Darıca’da arama yapan kişi çoğu zaman ya yerel bir hizmet ya da sahil çevresinde yeme-içme, aktivite arıyordur.',
    ipuclari: [
      { baslik: 'Sahil ve hafta sonu aramaları', metin: 'Bayramoğlu’ndaki kafe, restoran ve aktivite işletmeleri için güncel fotoğraf, çalışma saati ve menü bilgisi harita sonuçlarında fark yaratır.' },
      { baslik: 'Gebze ile ortak pazar', metin: 'Darıca ile Gebze arasındaki geçiş günlük. Sitede iki ilçeye de hizmet verdiğinizi açıkça yazmak kapsama alanınızı genişletir.' },
      { baslik: 'Mahalle bazlı hizmet', metin: 'Bağlarbaşı, Osmangazi, Nenehatun gibi mahallelerde ev hizmetleri ve kurslar için kısa, net hizmet sayfaları hızlı sonuç verir.' },
    ],
  },
  korfez: {
    baslik: 'Körfez’de Sanayi ile Esnaf Aynı Haritada',
    paragraf:
      'Körfez; rafineri, liman ve sanayi tesisleriyle bilinir, ama Yarımca, Hereke ve Kirazlıyalı’da yoğun bir konut ve esnaf hayatı da vardır. Hereke, ipek halı geleneği ve tarihi köşküyle kendi adıyla aranan bir bölgedir. Sanayiye hizmet veren firmalarla mahalle esnafının hedeflediği aramalar çok farklı olduğu için tek bir genel sayfa yetmez.',
    ipuclari: [
      { baslik: 'Hereke ayrı bir arama', metin: 'Hereke’deki işletmeler için “Hereke” adıyla ayrı içerik; ilçe adının yanında beldenin kendi adı da aranır.' },
      { baslik: 'Tesislere yakın hizmetler', metin: 'Taşeron, bakım-onarım, iş güvenliği ve servis firmaları için hizmet bölgesi ve belge bilgisini öne çıkaran sayfalar.' },
      { baslik: 'Yarımca ve Kirazlıyalı', metin: 'Klinik, kurs ve ev hizmetleri için mahalle adlarını harita profilinde ve sitede birlikte kullanmak.' },
    ],
  },
  derince: {
    baslik: 'Derince’de Aramayı Kim, Neden Yapıyor?',
    paragraf:
      'Derince, İzmit’le neredeyse iç içe bir ilçe; limanı ve eğitim ve araştırma hastanesiyle her gün başka ilçelerden de insan çeker. Çenedağ, Sırrıpaşa ve Yenikent gibi mahallelerde konut yoğun, İbrikdere tarafında ise daha sakin bir yapı var. Müşteri çoğu zaman “Derince” ile “İzmit”i birlikte düşünür; aramalar da buna göre karışık gelir.',
    ipuclari: [
      { baslik: 'İzmit + Derince birlikte', metin: 'Sınırda çalışan işletmeler için iki ilçe adını da doğal biçimde içeren sayfalar, iki taraftan gelen aramayı yakalar.' },
      { baslik: 'Hastane çevresi', metin: 'Eczane dışındaki sağlık, refakatçi konaklama ve yeme-içme işletmeleri için yol tarifi ve çalışma saati bilgisi kritik.' },
      { baslik: 'Liman ve lojistik', metin: 'Gümrük, nakliye ve depolama firmaları için hizmet ve kapasite sayfaları, kurumsal iletişim formu.' },
    ],
  },
  golcuk: {
    baslik: 'Gölcük’te Yerel Aramanın Özellikleri',
    paragraf:
      'Gölcük; tersanesi, otomotiv üretimi ve bunlara bağlı yan sanayisiyle çalışan nüfusu yüksek bir ilçe. Değirmendere, Halıdere ve İhsaniye gibi bölgeler kendi adlarıyla aranır; sahil boyunca yeme-içme ve yaz aylarında hareketlenen işletmeler bulunur. Burada müşteri çoğunlukla telefondan, yakınındaki işletmeyi hızlıca bulmak için arar.',
    ipuclari: [
      { baslik: 'Belde adlarını kullanın', metin: 'Değirmendere veya Halıdere’de hizmet veriyorsanız bunu açıkça yazın; “Gölcük” kadar bu adlar da aranır.' },
      { baslik: 'Hızlı mobil site', metin: 'Arama telefondan ve acele yapılıyor. Tek dokunuşla arama ve WhatsApp butonu, hızlı açılan sayfa şart.' },
      { baslik: 'Sanayiye hizmet', metin: 'Fabrika ve tersanelere çalışan servis, bakım ve tedarik firmaları için referans ve belge odaklı sayfalar.' },
    ],
  },
  cayirova: {
    baslik: 'Çayırova’da Hangi Aramalar Öne Çıkıyor?',
    paragraf:
      'Çayırova, Tuzla sınırında; otoyol ve D-100 bağlantısı sayesinde lojistik depoları ve üretim tesisleriyle dolu bir ilçe. Akse, Özgürlük ve Emek gibi mahallelerde hızlı büyüyen bir konut nüfusu var. Bu ikili yapı, aynı ilçede hem şirketlere hem ailelere hizmet veren işletmeler için ayrı arama planı gerektiriyor.',
    ipuclari: [
      { baslik: 'Şekerpınar ayrı düşünülmeli', metin: 'Lojistik ve sanayi tarafında “Şekerpınar” adı tek başına aranıyor; o bölgeye hizmet veriyorsanız ayrıca belirtin.' },
      { baslik: 'Yeni konut bölgeleri', metin: 'Kreş, kurs, güzellik ve ev hizmetleri için mahalle adıyla sayfa ve harita profili; yeni taşınan aileler önce Google’a bakar.' },
      { baslik: 'Tuzla tarafı', metin: 'İstanbul sınırındaki işletmeler Tuzla’dan gelen müşteriyi de hedefleyebilir; sitede bu açıkça yazılmalı.' },
    ],
  },
  sekerpinar: {
    baslik: 'Şekerpınar’da B2B Aramalar Nasıl Çalışır?',
    paragraf:
      'Şekerpınar, Çayırova’ya bağlı ama kendi adıyla bilinen bir sanayi ve lojistik bölgesi. Büyük dağıtım depoları, fabrikalar ve bunlara hizmet veren firmalar burada yoğun. Bu bölgede müşteri çoğunlukla bir şirket: satın alma sorumlusu, lojistik müdürü ya da tesis yöneticisi. Aramalar da “Şekerpınar + hizmet” veya doğrudan hizmet adıyla yapılır.',
    ipuclari: [
      { baslik: 'Kurumsal güven unsurları', metin: 'Belgeler, referans logolarına izin varsa onlar, kapasite bilgisi ve kurumsal iletişim formu; karar verici hızlı bir kontrol yapar.' },
      { baslik: 'Personel ve servis', metin: 'Personel taşıma, yemek, temizlik ve güvenlik gibi hizmetler için “Şekerpınar” adını açıkça kullanan sayfalar.' },
      { baslik: 'Çevre bölgeler', metin: 'Gebze, Tuzla ve Dilovası’na da hizmet veriyorsanız tek sayfada değil, her biri için kısa bölümlerle belirtin.' },
    ],
  },
  dilovasi: {
    baslik: 'Dilovası’nda Müşteri Kimdir?',
    paragraf:
      'Dilovası, organize sanayi bölgesi ve kıyıdaki iskeleleriyle Kocaeli’nin en yoğun sanayi alanlarından biri. Kimya, metal ve makine tesisleri ile bunlara bağlı hizmet firmaları ilçenin iş hayatını belirler. Tavşancıl tarafında ise konut ve esnaf hayatı daha belirgindir. Kısacası Dilovası’nda iki ayrı müşteri kitlesi vardır: tesisler ve mahalle sakinleri.',
    ipuclari: [
      { baslik: 'OSB odaklı içerik', metin: 'OSB içindeki firmalara hizmet veriyorsanız hizmet alanınızı, belgelerinizi ve müdahale sürenizi net yazan sayfalar.' },
      { baslik: 'İngilizce özet', metin: 'Yabancı ortaklı tesislerde karar verici İngilizce arayabilir; kısa bir İngilizce sayfa fark yaratır.' },
      { baslik: 'Tavşancıl esnafı', metin: 'Mahalle işletmeleri için harita profili, gerçek fotoğraf ve yorum yönetimi en hızlı sonucu verir.' },
    ],
  },
  basiskele: {
    baslik: 'Başiskele’de Arama Alışkanlıkları',
    paragraf:
      'Başiskele, körfezin güney kıyısında, Kartepe ile komşu, yeşil alanı ve müstakil konutları bol bir ilçe. Yuvacık, Bahçecik, Kullar ve Seymen gibi bölgeler kendi adlarıyla aranır. Hafta sonu doğa ve kahvaltı için gelen ziyaretçiler ile ilçede yaşayan aileler, aynı haritada farklı şeyler arar.',
    ipuclari: [
      { baslik: 'Kahvaltı ve doğa mekânları', metin: 'Yuvacık çevresindeki mekânlar için güncel fotoğraf, menü ve yol tarifi; ziyaretçi yola çıkmadan haritadan kontrol eder.' },
      { baslik: 'Ev ve bahçe hizmetleri', metin: 'Müstakil konut yoğunluğu peyzaj, havuz, tadilat gibi hizmetlere talep yaratır; hizmet başına kısa sayfa önerilir.' },
      { baslik: 'İzmit’e yakınlık', metin: 'Başiskele’den İzmit merkeze hizmet veren işletmeler iki bölgeyi de sitede belirtmeli.' },
    ],
  },
  kartepe: {
    baslik: 'Kartepe’de Turizm ve Yerel Arama',
    paragraf:
      'Kartepe, kayak merkezi, Maşukiye’nin dere kenarı mekânları ve Sapanca Gölü kıyısıyla Kocaeli’nin turizm yüzü. Bungalov, otel, restoran ve aktivite işletmeleri İstanbul’dan gelen hafta sonu ziyaretçisine hitap eder. Köseköy, Uzuntarla ve Suadiye tarafında ise yerleşik nüfusa hizmet veren esnaf vardır.',
    ipuclari: [
      { baslik: 'Mevsime göre içerik', metin: 'Kışın kayak, yazın doğa ve göl; sezona göre güncellenen sayfa ve harita fotoğrafları ziyaretçiyi doğru zamanda yakalar.' },
      { baslik: 'Doğrudan rezervasyon', metin: 'Konaklama işletmeleri için fiyat aralığı yerine net iletişim, müsaitlik ve WhatsApp ile hızlı rezervasyon yolu.' },
      { baslik: 'Maşukiye ve Sapanca adları', metin: 'Ziyaretçi “Maşukiye kahvaltı” ya da “Sapanca bungalov” diye arar; bu adları dürüstçe ve doğru konumla kullanın.' },
    ],
  },
  karamursel: {
    baslik: 'Karamürsel’de Yerel SEO Nereden Başlar?',
    paragraf:
      'Karamürsel, Kocaeli’nin güney sahilinde, Yalova yoluna açılan sakin bir ilçe. Ereğli ve Kaytazdere gibi sahil bölgelerinde yazlık konutlar var; yaz aylarında nüfus ve yeme-içme talebi belirgin biçimde artar. Kış aylarında ise ilçede yaşayanlara hizmet veren esnaf ve sağlık işletmeleri öne çıkar.',
    ipuclari: [
      { baslik: 'Yaz sezonu hazırlığı', metin: 'Sezondan önce harita profilini, fotoğrafları ve çalışma saatlerini güncellemek; yazlıkçılar ilk günlerde Google’dan arar.' },
      { baslik: 'Yalova ve Gölcük yönü', metin: 'Komşu ilçelerden gelen müşteriyi hedefleyen işletmeler hizmet bölgesini sitede açıkça yazmalı.' },
      { baslik: 'Ev bakım hizmetleri', metin: 'Yazlıkların açılış-kapanış bakımı, tadilat ve temizlik için kısa ve net hizmet sayfaları.' },
    ],
  },
  kandira: {
    baslik: 'Kandıra’da Dijitalde Öne Çıkmak',
    paragraf:
      'Kandıra, Kocaeli’nin Karadeniz kıyısındaki en geniş ilçesi. Kerpe, Kefken ve Cebeci sahilleri yazın ziyaretçi çekerken iç kesimlerde tarım ve hayvancılık ağırlıklı bir yaşam sürer. Köy ürünleri, pansiyonlar ve sahil işletmeleri için Google’da görünmek, şehirden gelen ziyaretçiye ulaşmanın en kısa yoludur.',
    ipuclari: [
      { baslik: 'Sahil adlarıyla görünürlük', metin: 'Kerpe veya Kefken’deki işletmeler için bu adlar “Kandıra”dan daha çok aranır; harita kaydı doğru konumla yapılmalı.' },
      { baslik: 'Köy ürünleri satışı', metin: 'Süt ürünleri, bal ve yöresel ürün satan üreticiler için basit ürün sayfası ve WhatsApp ile sipariş.' },
      { baslik: 'Yol ve ulaşım bilgisi', metin: 'Ziyaretçi bölgeyi tanımıyor; yol tarifi, otopark ve sezon bilgisi sayfada açıkça yer almalı.' },
    ],
  },

  // ── İSTANBUL ────────────────────────────────────────────────────────────
  pendik: {
    baslik: 'Pendik’te Rekabet Nerede Az, Nerede Yoğun?',
    paragraf:
      'Pendik; Sabiha Gökçen Havalimanı, Marmaray ve hızlı tren durağıyla Anadolu yakasının ulaşım kapılarından biri. Bu da her gün ilçeye gelen, ilçeyi tanımayan bir kitle demek. Merkez ve sahilde rekabet yoğun; Kurtköy, Yenişehir ve Kaynarca gibi bölgelerde ise semt adıyla yapılan aramalarda daha hızlı öne çıkmak mümkün.',
    ipuclari: [
      { baslik: 'Semt adı stratejisi', metin: '“Pendik diş kliniği” yerine önce “Kurtköy diş kliniği” gibi dar aramalarla başlamak daha gerçekçi bir yol.' },
      { baslik: 'Tren ve havalimanı yolcusu', metin: 'Otel, transfer ve yeme-içme işletmeleri için istasyona ve havalimanına uzaklığı açıkça yazan sayfalar.' },
      { baslik: 'Kartal ve Tuzla ile sınır', metin: 'Sınır mahallelerinde çalışan işletmeler komşu ilçelerden gelen aramayı da hedeflemeli.' },
    ],
  },
  tuzla: {
    baslik: 'Tuzla’da İki Ayrı Pazar',
    paragraf:
      'Tuzla, tersaneleri, organize sanayi bölgeleri ve üniversiteleriyle İstanbul’un sanayi ve denizcilik merkezlerinden biri. Aynı zamanda Aydınlı, İçmeler ve sahil tarafında yoğun bir konut ve yeme-içme hayatı var. Bir yanda tersaneye ekipman satan firma, öbür yanda mahalle kliniği; ikisinin de Google’daki yol haritası farklı.',
    ipuclari: [
      { baslik: 'Denizcilik ve tersane hizmetleri', metin: 'Gemi bakım, ekipman ve teknik hizmet firmaları için İngilizce sayfa ve belge odaklı içerik; alıcı yurt dışından da olabilir.' },
      { baslik: 'Üniversite çevresi', metin: 'Öğrenci yoğun bölgelerde kurs, kafe, konaklama ve kırtasiye işletmeleri için mobil hız ve harita görünürlüğü.' },
      { baslik: 'Marina ve sahil', metin: 'Sahildeki restoran ve kafeler için fotoğraf, menü ve yorum yönetimi; ziyaretçi seçimini haritada yapar.' },
    ],
  },
  kadikoy: {
    baslik: 'Kadıköy’de Görünür Olmanın Gerçekçi Yolu',
    paragraf:
      'Kadıköy, İstanbul’un en rekabetçi ilçelerinden biri. Moda, Bağdat Caddesi’nin Caddebostan ve Suadiye kısmı, Acıbadem, Göztepe ve Kozyatağı gibi semtler kendi başına birer pazar. Çarşı bölgesi ise vapur, metro ve Marmaray’la her gün yüz binlerce kişiyi ağırlıyor. Burada “Kadıköy + hizmet” aramasında öne çıkmak zaman alır; semt ve uzmanlık adıyla başlamak daha hızlı sonuç verir.',
    ipuclari: [
      { baslik: 'Semt + uzmanlık', metin: '“Moda pilates”, “Göztepe çocuk diş hekimi” gibi dar aramalar, genel ilçe aramasından çok daha ulaşılabilir.' },
      { baslik: 'Yorum ve fotoğraf', metin: 'Rakip çok olduğunda harita sonucunda fark; gerçek fotoğraf, güncel bilgi ve yorumlara düzenli cevaptır.' },
      { baslik: 'Rehber içerikler', metin: 'Ziyaretçinin sorduğu sorulara net cevap veren yazılar, hem Google’da hem yapay zekâ aramalarında alıntılanma şansını artırır.' },
    ],
  },
  kucukcekmece: {
    baslik: 'Küçükçekmece’de Semtler Ayrı Ayrı Aranıyor',
    paragraf:
      'Küçükçekmece, İstanbul’un en kalabalık ilçelerinden biri ve Halkalı, Sefaköy, Atakent, Cennet, Kanarya gibi semtleri neredeyse ayrı birer ilçe gibi davranır. Halkalı, Marmaray’ın son durağı ve hızlı tren bağlantısıyla ayrıca bir ulaşım merkezi. Müşteri çoğu zaman ilçe adını değil, oturduğu semtin adını yazar.',
    ipuclari: [
      { baslik: 'Semt sayfaları', metin: 'Birden fazla semte hizmet veriyorsanız Halkalı, Sefaköy gibi her biri için kısa ve özgün bölümler.' },
      { baslik: 'Göl çevresi ve sahil', metin: 'Küçükçekmece Gölü kıyısındaki yeme-içme ve aktivite işletmeleri için harita kaydı ve fotoğraf.' },
      { baslik: 'Aile hizmetleri', metin: 'Kalabalık konut bölgelerinde kreş, kurs, klinik ve ev hizmetleri aramaları yoğun; tek dokunuşla iletişim şart.' },
    ],
  },
  bakirkoy: {
    baslik: 'Bakırköy’de Kim, Ne Arıyor?',
    paragraf:
      'Bakırköy; Ataköy, Yeşilköy ve Florya gibi gelir düzeyi yüksek semtleri, büyük adalet sarayı ve hastaneleriyle hizmet sektörünün yoğun olduğu bir ilçe. Hukuk bürolarından özel kliniklere, güzellik merkezlerinden restoranlara kadar rekabet güçlü. Müşteri burada seçici davranır; karar vermeden önce siteyi, yorumları ve uzmanlığı inceler.',
    ipuclari: [
      { baslik: 'Hukuk büroları', metin: 'Reklam kısıtı nedeniyle avukatlar için en doğru yol bilgilendirici içerik ve SEO; uzmanlık alanı başına sayfa önerilir.' },
      { baslik: 'Semt adı ile güven', metin: 'Ataköy, Yeşilköy, Florya gibi semt adları müşterinin aradığı yakınlık hissini verir; sitede açıkça kullanılmalı.' },
      { baslik: 'Kaliteli görsel ve içerik', metin: 'Seçici müşteri profilinde profesyonel fotoğraf, net hizmet açıklaması ve ekip bilgisi güveni belirler.' },
    ],
  },
  avcilar: {
    baslik: 'Avcılar’da Yerel Aramanın Dinamikleri',
    paragraf:
      'Avcılar, üniversite kampüsü ve öğrenci nüfusuyla genç, metrobüs ve E-5 hattıyla da hareketli bir ilçe. Ambarlı limanı çevresinde lojistik ve nakliye firmaları yoğun; Denizköşkler, Gümüşpala ve Firuzköy tarafında ise konut ve esnaf hayatı ağır basıyor. Arama yapanların büyük kısmı genç ve neredeyse tamamı telefondan.',
    ipuclari: [
      { baslik: 'Öğrenciye yönelik işletmeler', metin: 'Kurs, kafe, yurt ve kırtasiye gibi işletmeler için hızlı mobil site ve güncel harita bilgisi.' },
      { baslik: 'Liman ve nakliye', metin: 'Ambarlı çevresindeki lojistik firmaları için hizmet, güzergâh ve iletişim odaklı kurumsal sayfalar.' },
      { baslik: 'Metrobüs durakları', metin: 'Yakın durağı veya cadde adını sayfada belirtmek, “yakınımda” aramalarında yön bulmayı kolaylaştırır.' },
    ],
  },
  arnavutkoy: {
    baslik: 'Arnavutköy’de Hızla Büyüyen Bir Pazar',
    paragraf:
      'Arnavutköy, İstanbul Havalimanı’na ev sahipliği yapan ve son yıllarda en hızlı büyüyen ilçelerden biri. Hadımköy tarafında sanayi ve lojistik, Bolluca ve Taşoluk gibi bölgelerde yeni konut alanları var. Yeni yerleşilen bölgelerde insanlar yakınlarındaki hizmetleri henüz bilmez; ilk baktıkları yer Google haritalarıdır.',
    ipuclari: [
      { baslik: 'Erken davranan kazanır', metin: 'Rekabetin henüz oturmadığı yeni konut bölgelerinde harita profili ve basit bir site bile hızlı fark yaratabilir.' },
      { baslik: 'Havalimanı çevresi', metin: 'Konaklama, transfer, araç kiralama ve kargo işletmeleri için İngilizce sayfa ve net ulaşım bilgisi.' },
      { baslik: 'Sanayi tedarikçileri', metin: 'Hadımköy çevresine hizmet veren firmalar için ürün ve hizmet sayfaları, kurumsal teklif formu.' },
    ],
  },
  esenler: {
    baslik: 'Esenler’de Hangi İşletmeler Öne Çıkabilir?',
    paragraf:
      'Esenler, şehirlerarası otogarı ve tekstil atölyeleriyle hem bir ulaşım hem de bir üretim noktası. Davutpaşa tarafında üniversite kampüsü, Menderes ve Atışalanı gibi mahallelerde yoğun bir konut ve esnaf hayatı var. Otogar nedeniyle ilçeyi tanımayan, kısa süreliğine gelen bir kitle de sürekli arama yapar.',
    ipuclari: [
      { baslik: 'Otogar çevresi', metin: 'Yeme-içme, emanet, konaklama ve taksi gibi hizmetler için net konum, çalışma saati ve fotoğraf.' },
      { baslik: 'Tekstil ve fason üretim', metin: 'Atölyeler için kapasite, ürün türü ve iletişim bilgisini veren sade bir site; markalar tedarikçiyi Google’da arar.' },
      { baslik: 'Mahalle esnafı', metin: 'Kalabalık mahallelerde harita profili, yorumlar ve WhatsApp butonu en hızlı geri dönüşü sağlar.' },
    ],
  },
  kartal: {
    baslik: 'Kartal’da Hizmet Sektörü İçin SEO',
    paragraf:
      'Kartal, Anadolu yakasının adalet sarayına, büyük bir şehir hastanesine ve metro ile Marmaray bağlantısına ev sahipliği yapıyor. Bu da hukuk, sağlık ve bunlara bağlı hizmetlerde yoğun bir arama demek. Soğanlık, Yakacık ve sahil tarafı ise ayrı ayrı aranan, kendi esnaf yapısı olan bölgeler.',
    ipuclari: [
      { baslik: 'Adliye çevresi', metin: 'Avukatlar, arabulucular ve bilirkişi hizmetleri için uzmanlık başına bilgilendirici sayfa; reklam yerine içerik.' },
      { baslik: 'Hastane çevresi', metin: 'Refakatçi konaklama, yeme-içme ve medikal ürün işletmeleri için yol tarifi ve çalışma saati bilgisi.' },
      { baslik: 'Sahil ve meydan', metin: 'Sahildeki kafe ve restoranlar için güncel fotoğraf, menü ve yorum yönetimi.' },
    ],
  },
  maltepe: {
    baslik: 'Maltepe’de Semt ve Cadde Odaklı Strateji',
    paragraf:
      'Maltepe; geniş sahil parkı, Bağdat Caddesi’nin İdealtepe ve Küçükyalı’ya uzanan kısmı ve üniversitesiyle hem aileler hem gençler için hareketli bir ilçe. Cevizli ve Başıbüyük gibi bölgeler ise farklı bir esnaf yapısına sahip. Kadıköy ve Ataşehir’e komşu olduğu için rekabet sadece ilçe içinden gelmez.',
    ipuclari: [
      { baslik: 'Cadde adının gücü', metin: 'Bağdat Caddesi üzerindeki işletmeler için cadde ve semt adını birlikte kullanmak, aramada güçlü bir sinyaldir.' },
      { baslik: 'Sahil etkinlikleri', metin: 'Sahil parkındaki etkinlik dönemlerinde yeme-içme ve aktivite işletmeleri için güncel harita bilgisi.' },
      { baslik: 'Komşu ilçeler', metin: 'Kadıköy ve Kartal sınırında çalışanlar, hizmet bölgesini sitede açıkça belirterek iki taraftan da müşteri alabilir.' },
    ],
  },

  // ── SAKARYA ─────────────────────────────────────────────────────────────
  sakarya: {
    baslik: 'Sakarya’da Arama Haritası',
    paragraf:
      'Sakarya’da arama yalnızca “Adapazarı” ile sınırlı değil. Serdivan üniversite ve yeni konut bölgeleriyle, Sapanca göl turizmiyle, Karasu yaz sahiliyle, Hendek ve Akyazı ise sanayi ve tarımla kendi adlarıyla aranıyor. Otomotiv ve yan sanayi ilin ekonomisinde önemli bir yer tutuyor; fındık ve tarım ürünleri de öyle. Her ilçenin müşterisi farklı olduğu için strateji de ilçe bazında kurulmalı.',
    ipuclari: [
      { baslik: 'Sapanca ve Karasu sezonu', metin: 'Turizm işletmeleri için sezondan önce güncellenen fotoğraf, fiyat yerine net iletişim ve rezervasyon yolu.' },
      { baslik: 'Serdivan’da gençler', metin: 'Üniversite çevresindeki kafe, kurs ve konaklama işletmeleri için mobil hız ve harita profili belirleyici.' },
      { baslik: 'Yan sanayi tedarikçileri', metin: 'Otomotiv ve makine tedarikçileri için ürün, belge ve kapasite sayfaları; alıcılar ürün adıyla arar.' },
    ],
  },

  // ── ANKARA ──────────────────────────────────────────────────────────────
  etimesgut: {
    baslik: 'Etimesgut’ta Yerel Arama Nasıl Şekilleniyor?',
    paragraf:
      'Etimesgut, Eryaman ve Elvankent gibi büyük konut bölgeleri ve hızlı tren garıyla Ankara’nın batıya açılan kapılarından biri. Şaşmaz’daki oto sanayi sitesi, araç bakım ve yedek parça aramalarında ilçeyi öne çıkarıyor. Bağlıca gibi yeni gelişen bölgelerde ise aileler yakın hizmetleri haritadan bulmaya çalışıyor.',
    ipuclari: [
      { baslik: 'Oto sanayi', metin: 'Şaşmaz’daki servis ve yedek parça işletmeleri için marka ve işlem bazlı sayfalar; “Şaşmaz + marka servis” gibi aramalar yapılır.' },
      { baslik: 'Eryaman ve Elvankent', metin: 'Klinik, kurs ve güzellik işletmeleri için semt adını kullanan sayfa ve harita kaydı.' },
      { baslik: 'Yeni yerleşim alanları', metin: 'Bağlıca gibi bölgelerde rekabet henüz oturmadı; erken görünür olan işletme avantaj kazanır.' },
    ],
  },
  golbasi: {
    baslik: 'Gölbaşı’nda Göl, Villa ve Savunma Sanayi',
    paragraf:
      'Gölbaşı, Mogan ve Eymir gölleri çevresindeki yeme-içme ve doğa alanlarıyla Ankara’nın hafta sonu adreslerinden biri. İncek ve çevresindeki villa ve site yaşamı, ev hizmetlerine talep yaratır. İlçede savunma sanayi tesisleri ve bunlara hizmet veren tedarikçiler de bulunuyor.',
    ipuclari: [
      { baslik: 'Göl çevresi mekânlar', metin: 'Mogan kıyısındaki restoran ve kafeler için güncel fotoğraf, rezervasyon bilgisi ve yorum yönetimi.' },
      { baslik: 'Villa ve site hizmetleri', metin: 'Peyzaj, havuz bakımı, tadilat ve güvenlik hizmetleri için hizmet başına sayfa.' },
      { baslik: 'Savunma tedarikçileri', metin: 'Belge, kalite süreçleri ve kapasiteyi net anlatan kurumsal sayfalar; karar verici teknik bilgi arar.' },
    ],
  },
  altindag: {
    baslik: 'Altındağ’da Tarih, Ticaret ve Mobilya',
    paragraf:
      'Altındağ; Ulus, Ankara Kalesi ve Hamamönü ile şehrin tarihi merkezini, Siteler ile Türkiye’nin bilinen mobilya üretim bölgelerinden birini barındırıyor. Bu iki farklı yüz, iki farklı arama türü demek: ziyaretçinin yeme-içme ve gezi aramaları ile mobilya alıcılarının ürün aramaları.',
    ipuclari: [
      { baslik: 'Siteler mobilyacıları', metin: 'Ürün kataloğu, ölçü ve malzeme bilgisi olan bir site; alıcılar başka şehirlerden de Google’da “Siteler + ürün” diye arar.' },
      { baslik: 'Hamamönü ve kale çevresi', metin: 'Yeme-içme ve hediyelik işletmeleri için fotoğraf, menü ve yol tarifi; turist haritadan seçer.' },
      { baslik: 'Ulus esnafı', metin: 'Köklü işletmeler için güncel harita profili ve basit bir site, yeni nesil müşteriye ulaşmanın en kolay yolu.' },
    ],
  },
  yenimahalle: {
    baslik: 'Yenimahalle’de OSB’ler ve Konut Bölgeleri',
    paragraf:
      'Yenimahalle; OSTİM ve İvedik organize sanayi bölgeleriyle Ankara’nın sanayi kalbi, Batıkent ve Demetevler ile de en kalabalık konut alanlarından biri. Sanayi tarafında binlerce küçük ve orta ölçekli üretici var; bu firmaların müşterileri çoğu zaman başka şehirlerden, ürün adıyla arama yapıyor.',
    ipuclari: [
      { baslik: 'OSTİM ve İvedik üreticileri', metin: 'Ürün başına sayfa, teknik bilgi ve teklif formu; “OSTİM + ürün” ya da doğrudan ürün adıyla görünürlük.' },
      { baslik: 'Batıkent ve Demetevler', metin: 'Aile odaklı hizmetler için semt adıyla harita kaydı ve hızlı mobil site.' },
      { baslik: 'Başka şehirlere satış', metin: 'Üreticiler için sevkiyat ve teslim bilgisini açıkça veren sayfalar, şehir dışından gelen talebi artırır.' },
    ],
  },
  cankaya: {
    baslik: 'Çankaya’da Rekabetle Başa Çıkmak',
    paragraf:
      'Çankaya; Kızılay, Tunalı, Bahçelievler, Balgat, Çayyolu ve Ümitköy gibi semtleriyle Ankara’nın en kalabalık ve en rekabetçi hizmet pazarı. Bakanlıklar, büyük üniversiteler ve iş merkezleri burada. Genel “Çankaya + hizmet” aramalarında öne çıkmak uzun soluklu bir iş; semt ve uzmanlık adıyla başlamak daha gerçekçi.',
    ipuclari: [
      { baslik: 'Semt bazlı başlangıç', metin: '“Çayyolu ortodonti”, “Bahçelievler pilates” gibi aramalarla başlayıp zamanla genel ilçe aramasına genişlemek.' },
      { baslik: 'Kurumsal müşteriler', metin: 'Kamu ve kurumsal firmalara hizmet verenler için referans, süreç ve belge sayfaları.' },
      { baslik: 'Yapay zekâ aramaları', metin: 'Rekabetin yüksek olduğu yerde, sık sorulan sorulara net cevap veren içerik yapay zekâ önerilerinde de fark yaratabilir.' },
    ],
  },

  // ── İZMİR ───────────────────────────────────────────────────────────────
  buca: {
    baslik: 'Buca’da Yerel Arama Neye Göre Şekilleniyor?',
    paragraf:
      'Buca, İzmir’in en kalabalık ilçelerinden biri; büyük üniversite kampüsü nedeniyle de öğrenci nüfusu yüksek. Şirinyer, Kaynaklar ve Tınaztepe gibi bölgeler kendi adlarıyla aranıyor; tarihi Levanten köşkleri ve gölet çevresi ise ilçeye ayrı bir kimlik veriyor. Müşteri profili geniş: öğrenciden aileye, esnaftan küçük üreticiye.',
    ipuclari: [
      { baslik: 'Öğrenci yoğun bölgeler', metin: 'Kurs, kafe, yurt ve kırtasiye işletmeleri için hızlı mobil site ve güncel harita profili.' },
      { baslik: 'Şirinyer ve merkez', metin: 'Klinik, güzellik ve aile hizmetleri için semt adını kullanan sayfa ve yorum yönetimi.' },
      { baslik: 'Konak ve Bornova’ya yakınlık', metin: 'Komşu ilçelerden gelen müşteriyi hedefleyen işletmeler hizmet bölgesini sitede açıkça yazmalı.' },
    ],
  },

  // ── ZENGİN İLÇELER (24 Kasım 2026) ──────────────────────────────────────
  besiktas: {
    baslik: 'Beşiktaş’ta Müşteri Nasıl Karar Veriyor?',
    paragraf:
      'Beşiktaş’ta müşteri seçici ve araştırıcıdır. Etiler’de bir diş hekimi ya da Levent’te bir hukuk bürosu arayan kişi, karar vermeden önce birkaç sitenin hızına, fotoğraflarına, uzmanlık bilgisine ve yorumlarına bakar. Plazalarda çalışanlar öğle arasında telefondan, Boğaz kıyısına gelen ziyaretçi ise haritadan seçim yapar. Bu ilçede “ucuz” görünmek değil, güvenilir ve özenli görünmek kazandırır.',
    ipuclari: [
      { baslik: 'Uzmanlığı gösterin', metin: 'Hekim, avukat ya da uzman kim, hangi konuda deneyimli? Ekip ve uzmanlık sayfası seçici müşterinin ilk baktığı yerdir.' },
      { baslik: 'Semtle başlayın', metin: '“Beşiktaş + hizmet” uzun soluklu; Etiler, Levent, Bebek gibi semt adlarıyla başlamak daha hızlı sonuç verir.' },
      { baslik: 'Fotoğraf kalitesi', metin: 'Mekân ve ekip fotoğrafları profesyonel olmalı; harita profilinde düşük kaliteli görseller güveni düşürür.' },
    ],
  },
  sariyer: {
    baslik: 'Sarıyer’de Üç Ayrı Pazar',
    paragraf:
      'Sarıyer tek tip bir ilçe değil: Maslak’ta iş merkezleri ve üniversite, İstinye–Tarabya–Yeniköy hattında Boğaz kıyısında yüksek gelirli yaşam, Zekeriyaköy tarafında villa ve müstakil konutlar, Kilyos’ta ise yaz sezonu. Her bölgenin müşterisi farklı bir şey arar; tek bir genel sayfa yerine semt ve hizmet bazlı içerik daha verimli çalışır.',
    ipuclari: [
      { baslik: 'Villa hizmetleri', metin: 'Peyzaj, havuz, güvenlik ve tadilat için Zekeriyaköy gibi semt adlarını ve gerçek proje fotoğraflarını kullanın.' },
      { baslik: 'Boğaz mekânları', metin: 'Restoran ve kafelerde rezervasyon yolu, menü ve güncel fotoğraf harita profilinde eksiksiz olmalı.' },
      { baslik: 'Sezon hazırlığı', metin: 'Kilyos ve sahil işletmeleri için içerik ve reklam bütçesi yaz başlamadan hazırlanmalı.' },
    ],
  },
  sisli: {
    baslik: 'Şişli’de Marka Algısı ve Arama',
    paragraf:
      'Şişli’de Nişantaşı ve Teşvikiye moda, güzellik ve estetiğin; Mecidiyeköy ve Esentepe iş dünyasının; Osmanbey ise toptan tekstilin merkezi. Nişantaşı’nda müşteri markaya ve görsel kaliteye, plazalarda uzmanlığa, Osmanbey’de ise ürün çeşidine ve toptan koşullara bakar. Aynı ilçede üç farklı dil konuşmak gerekir.',
    ipuclari: [
      { baslik: 'Görsel kimlik', metin: 'Nişantaşı’ndaki işletmeler için site, Instagram ve harita profili aynı kalitede ve aynı tarzda olmalı.' },
      { baslik: 'Toptancılar için katalog', metin: 'Osmanbey üreticileri için kategori sayfaları, minimum sipariş bilgisi ve yabancı dilde kısa özet yeni alıcı getirir.' },
      { baslik: 'Sağlıkta dikkat', metin: 'Estetik ve güzellik işletmelerinde iddiasız, mevzuata uygun dil kullanılmalı; abartılı vaatler güveni de görünürlüğü de zedeler.' },
    ],
  },
  atasehir: {
    baslik: 'Ataşehir’de Kurumsal Güven Önce Gelir',
    paragraf:
      'Ataşehir, finans merkezi ve plazalarıyla Anadolu yakasının iş merkezlerinden biri; Batı Ataşehir’in rezidansları ise gelir düzeyi yüksek bir yerleşik kitle oluşturuyor. Burada müşteri hem bireysel hem kurumsal: bir rezidans sakini klinik ararken, bir şirket mali müşavir ya da hukuk danışmanı arıyor. İki kitlenin de ortak beklentisi net bilgi ve profesyonel görünüm.',
    ipuclari: [
      { baslik: 'Soru-cevap içerik', metin: 'Danışmanlık ve finans hizmetlerinde sık sorulan sorulara net cevaplar, yapay zekâ önerilerinde görünürlüğü de artırır.' },
      { baslik: 'Komşu ilçeler', metin: 'Kadıköy, Ümraniye ve Maltepe’den gelen müşteriyi hedefliyorsanız bunu sitede açıkça belirtin.' },
      { baslik: 'Rezidans sakinleri', metin: 'Bina ve proje adlarıyla aranan hizmetler (temizlik, bakım, kurs) için kısa, net sayfalar.' },
    ],
  },
  uskudar: {
    baslik: 'Üsküdar’da Boğaz ile Hastane Arasında',
    paragraf:
      'Üsküdar’ın bir yüzünde Çengelköy, Kuzguncuk ve Beylerbeyi’nin hafta sonu kalabalığı, öbür yüzünde Altunizade ve Acıbadem’in iş merkezleri ve hastaneleri var. Kahvaltı mekânı arayan ziyaretçi ile uzman hekim arayan hasta aynı ilçede ama bambaşka biçimlerde arama yapıyor. Strateji de bu iki yüze göre ayrılmalı.',
    ipuclari: [
      { baslik: 'Hafta sonu ziyaretçisi', metin: 'Çengelköy ve Kuzguncuk’taki mekânlar için güncel fotoğraf, menü ve çalışma saati; ziyaretçi yola çıkmadan haritaya bakar.' },
      { baslik: 'Sağlıkta semt adı', metin: 'Acıbadem ve Altunizade çevresindeki klinikler semt adıyla aranır; hekim ve bölüm sayfaları bu adları doğal biçimde içermeli.' },
      { baslik: 'Ulaşım bilgisi', metin: 'Marmaray, metro ve vapura yakınlığı belirtmek, ilçe dışından gelen müşterinin kararını kolaylaştırır.' },
    ],
  },
  beylikduzu: {
    baslik: 'Beylikdüzü’nde Aileler Nasıl Arıyor?',
    paragraf:
      'Beylikdüzü, kapalı siteleri ve genç aileleriyle İstanbul’un Avrupa yakasında hızla büyümüş bir yaşam alanı. Bu kitle hizmetleri çoğunlukla mahalle ya da site adıyla, telefondan arar: kreş, kurs, çocuk doktoru, güzellik merkezi, tadilat. Sahil şeridindeki işletmeler ve organize sanayi bölgesindeki üreticiler ise ilçenin diğer iki pazarını oluşturuyor.',
    ipuclari: [
      { baslik: 'Mahalle adları', metin: 'Adnan Kahveci, Barış, Yakuplu gibi mahalle adlarını hizmet sayfalarında ve harita profilinde kullanın.' },
      { baslik: 'Veli güveni', metin: 'Kreş ve kurslarda gerçek fotoğraf, eğitmen bilgisi ve veli yorumları kararı belirler.' },
      { baslik: 'Reklamda bölge ayarı', metin: 'Google Ads’te Esenyurt ve Büyükçekmece’yi bilinçli olarak dahil etmek veya dışarıda bırakmak bütçe verimini değiştirir.' },
    ],
  },
  karsiyaka: {
    baslik: 'Karşıyaka’da Sahil ve Semt Aramaları',
    paragraf:
      'Karşıyaka, İzmir’in en köklü ve gelir düzeyi yüksek ilçelerinden biri. Bostanlı sahili kafe ve restoranlarıyla, Mavişehir site ve rezidanslarıyla, çarşı ise yaya trafiğiyle öne çıkıyor. Müşteri hizmeti çoğunlukla semt adıyla arar; “bostanlı” ya da “mavişehir” kelimesi “karşıyaka” kadar değerlidir.',
    ipuclari: [
      { baslik: 'Sahil mekânları', metin: 'Bostanlı’daki mekânlar için akşam ve hafta sonu yoğunluğuna göre güncel fotoğraf ve çalışma saati.' },
      { baslik: 'Site yaşamı', metin: 'Mavişehir’de kreş, kurs, güzellik ve ev hizmetleri semt adıyla aranır; hizmet sayfalarında bunu kullanın.' },
      { baslik: 'Vapur ve ulaşım', metin: 'Konak ve Alsancak’tan gelecek müşteri için iskeleye yakınlığı belirtmek kararı kolaylaştırır.' },
    ],
  },
  bornova: {
    baslik: 'Bornova’da Öğrenci, Aile ve Üretici',
    paragraf:
      'Bornova’da büyük üniversite ve hastane, köklü konut bölgeleri ve Işıkkent–Pınarbaşı’ndaki üretim alanları bir arada. Öğrenci hızlı ve telefondan, aileler semt adıyla ve yorumlara bakarak, toptan alıcılar ise ürün adıyla arama yapıyor. Bu çeşitlilik, her işletmenin kendi kitlesine göre ayrı bir dil kullanmasını gerektiriyor.',
    ipuclari: [
      { baslik: 'Dönem takvimi', metin: 'Öğrenciye yönelik işletmeler için dönem başlangıcı öncesi içerik ve reklam hazırlığı.' },
      { baslik: 'Semt adıyla aile hizmetleri', metin: 'Kazımdirik, Özkanlar ve Evka 3’teki işletmeler semt adlarını sayfalarında kullanmalı.' },
      { baslik: 'Üreticiler için ürün sayfası', metin: 'Işıkkent ve Pınarbaşı’ndaki firmalar için ürün kategorisi ve toptan iletişim formu.' },
    ],
  },
  urla: {
    baslik: 'Urla’da Ziyaretçi Rotasına Girmek',
    paragraf:
      'Urla, bağ yolundaki üreticileri, İskele’deki restoranları ve butik konaklama işletmeleriyle İzmir’in gastronomi ve hafta sonu adreslerinden biri. Ziyaretçi rotasını çoğunlukla Google Haritalar’da kaydettiği yerlerle çizer. Haritada eksiksiz, güncel ve iyi fotoğraflı görünen işletme, rotaya giren işletmedir.',
    ipuclari: [
      { baslik: 'Harita profili önce', metin: 'Çalışma günleri ve saatleri (özellikle hafta içi kapalı günler) doğru olmalı; yanlış saat olumsuz yorum getirir.' },
      { baslik: 'Hikâye anlatın', metin: 'Üretici ve şef hikâyesi, ürünün nereden geldiği; gastronomi ziyaretçisi bunu arar.' },
      { baslik: 'Doğrudan rezervasyon', metin: 'Butik konaklama için kendi sitenizden WhatsApp ile hızlı rezervasyon yolu, aracı payını azaltır.' },
    ],
  },
  cesme: {
    baslik: 'Çeşme’de Sezon Erken Başlar',
    paragraf:
      'Çeşme’de, özellikle Alaçatı’da, ziyaretçi tatil planını aylar önceden yapar; bu yüzden dijital hazırlığın sezondan çok önce bitmesi gerekir. Butik oteller, restoranlar ve beach işletmeleri arasında rekabet yüksek; fark yaratan şey gerçek fotoğraflar, net iletişim ve doğrudan rezervasyon yolu. Yaz boyunca açılan yazlıklar ise villa bakımı, temizlik ve havuz gibi hizmetlere ayrı bir talep oluşturur.',
    ipuclari: [
      { baslik: 'Kış aylarında hazırlık', metin: 'Site, fotoğraf ve reklam planı ilkbahardan önce hazır olmalı; planlama dönemi kaçırılmamalı.' },
      { baslik: 'Konseptle daralın', metin: '“Alaçatı otel” yerine konsept ve konumla daralan aramalar (taş ev, havuzlu, merkeze yürüme mesafesi) daha ulaşılabilir.' },
      { baslik: 'Yazlık hizmetleri', metin: 'Sezon açılışı öncesi villa bakımı ve temizlik için hizmet sayfaları ve WhatsApp ile hızlı teklif.' },
    ],
  },
  nilufer: {
    baslik: 'Nilüfer’de Bursa Aramalarıyla Birlikte Düşünmek',
    paragraf:
      'Nilüfer, Bursa’nın gelir düzeyi yüksek ve hızla büyüyen ilçesi; Beşevler, Ataevler ve Fethiye köklü, Özlüce ve İhsaniye yeni site yaşamıyla öne çıkıyor. Ancak müşterilerin büyük kısmı “Nilüfer” değil “Bursa + hizmet” diye arıyor. Bu yüzden Nilüfer’deki işletmenin hem semt adlarıyla hem Bursa aramalarıyla görünür olacak şekilde kurgulanması gerekiyor.',
    ipuclari: [
      { baslik: 'İki katmanlı arama', metin: 'Sayfa başlıklarında Bursa, içerikte Nilüfer ve semt adları; harita profilinde doğru konum.' },
      { baslik: 'Yan sanayi tedarikçileri', metin: 'OSB’deki üreticiler için ürün, kalite belgesi ve İngilizce özet; alıcılar ürün adıyla arar.' },
      { baslik: 'Görükle’de öğrenci', metin: 'Üniversite çevresindeki işletmeler için hızlı mobil site ve dönem başı güncelleme.' },
    ],
  },
  konyaalti: {
    baslik: 'Konyaaltı’nda Çok Dilli Görünürlük',
    paragraf:
      'Konyaaltı, sahili ve yeni rezidanslarıyla hem turistin hem de yabancı uyruklu yerleşik sakinlerin yoğun olduğu bir ilçe. Aynı diş kliniğini bir gün Türkçe, ertesi gün İngilizce ya da Rusça arayan müşteriler bulabilir. Emlak, sağlık ve ev hizmetlerinde çok dilli sayfalar ve harita profilinde yabancı dilde açıklama belirgin bir avantaj sağlar.',
    ipuclari: [
      { baslik: 'Dil başına sayfa', metin: 'Hizmet verdiğiniz her dilde kısa, okunaklı ayrı sayfa; otomatik çeviri yerine düzgün metin güven verir.' },
      { baslik: 'Yıl boyu talep', metin: 'Yerleşik yabancı sakinlere yönelik hizmetler sezondan bağımsız; içerik bu kitleye göre de kurgulanmalı.' },
      { baslik: 'Uluslararası iletişim', metin: 'WhatsApp ve telefon butonu her sayfada; yabancı müşteri çoğunlukla mesajla iletişim kurar.' },
    ],
  },
  lara: {
    baslik: 'Lara’da Turizm ile Yerleşik Yaşam Yan Yana',
    paragraf:
      'Lara, sahil boyunca uzanan büyük otelleri ve havalimanına yakınlığıyla Antalya’nın turizm vitrinlerinden biri. Güzeloba ve Fener tarafında ise site ve villa yaşamı süren, gelir düzeyi yüksek aileler yaşıyor. Transfer ve tur işletmeleri yabancı dilde, klinik ve ev hizmetleri ise semt adıyla Türkçe aranıyor.',
    ipuclari: [
      { baslik: 'Havalimanı yakınlığı', metin: 'Transfer, rent a car ve konaklama işletmeleri havalimanına mesafeyi ve hızlı iletişimi öne çıkarmalı.' },
      { baslik: 'Semt adıyla hizmet', metin: 'Güzeloba ve Fener’deki klinik, kurs ve ev hizmetleri semt adlarını sayfalarda kullanmalı.' },
      { baslik: 'Antalya ile birlikte', metin: 'Lara’daki işletme “antalya + hizmet” aramalarında da görünmeli; başlıkta Antalya, içerikte Lara.' },
    ],
  },
  cayyolu: {
    baslik: 'Çayyolu’nda Aileler Nasıl Karar Veriyor?',
    paragraf:
      'Çayyolu ve Ümitköy, Ankara’nın batısında site ve villa yaşamının yoğunlaştığı, gelir düzeyi yüksek bir bölge. Buradaki aileler bir diş hekimi, kreş ya da kurs seçerken önce telefondan semt adıyla arar, sonra yorumları ve fotoğrafları karşılaştırır. Şehir merkezine gitmek yerine yakındaki kaliteli hizmeti tercih ettikleri için semt adıyla görünür olmak doğrudan müşteri demektir.',
    ipuclari: [
      { baslik: 'Semt adı her yerde', metin: 'Çayyolu, Ümitköy, Konutkent gibi adları hizmet sayfalarında ve harita profilinde doğal biçimde kullanın.' },
      { baslik: 'Veli ve hasta yorumları', metin: 'Aile hizmetlerinde karar yorumlarla verilir; memnun müşteriden düzenli yorum isteyin.' },
      { baslik: 'Villa hizmetleri', metin: 'Beysukent ve Alacaatlı’daki müstakil konutlar için peyzaj, havuz ve tadilat sayfaları gerçek proje fotoğraflarıyla.' },
    ],
  },
  oran: {
    baslik: 'Oran, GOP ve Kavaklıdere’de Marka Algısı',
    paragraf:
      'Gaziosmanpaşa ve Kavaklıdere, Ankara’nın en köklü ve gelir düzeyi yüksek semtleri; büyükelçilikler, butik mağazalar ve estetik klinikleriyle bilinir. Oran ise yeni siteleri ve alışveriş merkezi çevresiyle büyüyen bir yaşam alanı. Bu semtlerde müşteri seçicidir: fiyattan önce özen, uzmanlık ve güven arar. Dijitalde de aynı özeni göstermek gerekir.',
    ipuclari: [
      { baslik: 'Görsel kalite', metin: 'Site, Instagram ve harita profilindeki fotoğraflar aynı özende olmalı; düşük kaliteli görsel güveni düşürür.' },
      { baslik: 'Yabancı misyon çevresi', metin: 'GOP ve Kavaklıdere’de İngilizce kısa bir hizmet sayfası, yabancı uyruklu müşteriye ulaşmayı kolaylaştırır.' },
      { baslik: 'Kısaltmaları da kullanın', metin: 'Müşteriler “GOP” diye de arar; sayfada hem Gaziosmanpaşa hem GOP geçmeli.' },
    ],
  },
  guzelbahce: {
    baslik: 'Güzelbahçe’de Müşteri Nereden Geliyor?',
    paragraf:
      'Güzelbahçe, İzmir’in batısında körfez kıyısında, site ve müstakil konutların yoğun olduğu sakin bir ilçe. İşletmelerin müşterisi iki gruptan gelir: ilçede yaşayan aileler ve hafta sonu sahile, balık restoranlarına ya da kahvaltıya gelen İzmirliler. İlk grup semt adıyla ve yakınlığa göre, ikinci grup haritadaki fotoğraf ve yorumlara bakarak seçim yapar.',
    ipuclari: [
      { baslik: 'İki kitleye iki içerik', metin: 'İlçede yaşayanlar için hizmet sayfaları, dışarıdan gelenler için ulaşım, otopark ve menü bilgisi.' },
      { baslik: 'Hafta sonu saatleri', metin: 'Harita profilinde hafta sonu ve bayram saatlerini güncel tutun; yanlış saat en çok kaybettiren hatadır.' },
      { baslik: 'Semt adları', metin: 'Yelki, Siteler, Kahramandere gibi adları sayfalarda doğal biçimde kullanın.' },
    ],
  },
  narlidere: {
    baslik: 'Narlıdere’de Yakınlık Kazandırır',
    paragraf:
      'Narlıdere, Balçova ile Güzelbahçe arasında, körfeze bakan sahil konutlarıyla yamaçtaki siteleri bir arada barındıran bir ilçe. Burada müşteri çoğunlukla yakınındaki hizmeti arar: telefondan “narlıdere + hizmet” ya da semt adıyla arama yapar, haritada ilk gördüğü birkaç işletmeyi karşılaştırır. Komşu ilçelerle iç içe olduğu için hizmet bölgesini doğru tanımlamak önemlidir.',
    ipuclari: [
      { baslik: 'Hizmet bölgesini yazın', metin: 'Narlıdere, Balçova ve Güzelbahçe’ye hizmet veriyorsanız bunu sayfada ve harita profilinde açıkça belirtin.' },
      { baslik: 'Sahil mekânları', metin: 'Sahilevleri ve Limanreis’teki kafe ve restoranlar için manzara ve menü fotoğrafları öne çıkmalı.' },
      { baslik: 'Aile hizmetleri', metin: 'Kreş, kurs ve klinikte karar yorumlarla verilir; memnun müşteriden düzenli yorum isteyin.' },
    ],
  },
  beykoz: {
    baslik: 'Beykoz’da Üç Ayrı Müşteri',
    paragraf:
      'Beykoz; Kavacık’taki iş merkezleri, Boğaz kıyısındaki köklü semtler ve kuzeydeki doğa ile villa bölgeleri arasında geniş bir alana yayılır. Kavacık’ta çalışanlar öğle arası ve iş sonrası hizmet arar; Kanlıca ve Çubuklu’ya gelen ziyaretçi Boğaz manzaralı kahvaltı ve restoran seçer; Acarlar ve villa bölgelerindeki aileler ise ev ve eğitim hizmetlerini semt adıyla arar.',
    ipuclari: [
      { baslik: 'Hedefinizi seçin', metin: 'Her işletme tüm Beykoz’a hitap etmez; asıl müşterinizin olduğu semti sayfanın merkezine koyun.' },
      { baslik: 'Manzara fotoğrafı', metin: 'Boğaz kıyısındaki mekânlarda profesyonel manzara ve masa fotoğrafları harita tıklamasını doğrudan etkiler.' },
      { baslik: 'Mevsimsel içerik', metin: 'Riva ve Polonezköy’de yaz ve kış için farklı içerik ve çalışma saatleri yayınlayın.' },
    ],
  },
  mudanya: {
    baslik: 'Mudanya’da Ziyaretçi ve Yerleşik Müşteri',
    paragraf:
      'Mudanya, Bursa’nın denize açılan ilçesi; tarihi evleri, iskelesi ve Trilye gibi köyleriyle hafta sonu ziyaretçisi çeker. Güzelyalı ve merkezdeki konutlar ise yıl boyu yaşayan bir nüfusa ev sahipliği yapar. Restoran ve konaklama işletmeleri Bursa ve İstanbul’dan gelen ziyaretçiyi, hizmet işletmeleri ise ilçede yaşayanları hedeflemelidir.',
    ipuclari: [
      { baslik: 'Trilye ayrı aranır', metin: 'Trilye’deki işletmeler için “trilye + hizmet” aramalarına özel sayfa açın.' },
      { baslik: 'Ulaşım bilgisi', metin: 'Bursa merkezinden ve İstanbul’dan deniz yoluyla gelişe dair kısa bilgi, ziyaretçinin kararını kolaylaştırır.' },
      { baslik: 'Yerel ürün', metin: 'Zeytin ve zeytinyağı satan üreticiler için ürün sayfaları ve online sipariş yolu.' },
    ],
  },
}
