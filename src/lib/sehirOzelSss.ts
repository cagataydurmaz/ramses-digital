// Şehir × hizmet sayfaları için şehre özgü SSS ve yazılım metinleri.
// Bursa, Eskişehir, Gaziantep, Kayseri, Konya ve Mersin sayfaları aynı şablondan
// türediği için ortak kalıp sorular yerine her şehrin sektörüne, ilçelerine ve
// takvimine göre ayrı yazıldı. Müşteri, sonuç, istatistik veya ofis iddiası yok.
import type { Hizmet } from './sehirHizmet'

type Sss = { q: string; a: string }

export const sehirOzelSss: Record<string, Partial<Record<Hizmet, Sss[]>>> = {
  kayseri: {
    ads: [
      { q: 'Erciyes’teki konaklama ve kayak işletmeleri Google Ads’e ne zaman başlamalı?', a: 'Kayak, otel ve ekipman kiralama aramaları ilk kar haberleriyle birlikte hareketlenir. Kampanyayı sezon açılmadan kurup anahtar kelimeleri ve reklam metinlerini hazır tutmak, ilk yoğunluğu kaçırmamanızı sağlar. Sezon bittiğinde hesap kapatılmaz; bütçe düşürülerek birikmiş veri korunur.' },
      { q: 'Kayseri OSB’deki metal ve makine firmaları hangi aramalarda görünmeli?', a: 'Satın almacılar çoğunlukla iş tanımıyla arar: “lazer kesim fason”, “sac büküm hizmeti”, “CNC torna parça imalatı” gibi. Kampanyayı bu teknik aramalara kuruyor, “iş ilanı”, “maaş”, “staj” gibi sorguları engelliyor ve reklamları mesai saatlerine yoğunlaştırıyoruz.' },
      { q: 'Melikgazi, Kocasinan ve Talas için ayrı kampanya gerekir mi?', a: 'Hizmet verdiğiniz alan şehrin tamamı değilse evet. Talas’taki bir klinik için üniversite çevresi ve Talas merkez, Kocasinan’daki bir oto servis için sanayi bölgesine yakın semtler önceliklidir. Ayrı reklam grupları bütçeyi gerçekten gelebilecek müşteriye yönlendirir.' },
    ],
    reklam: [
      { q: 'Kayseri’de mobilya veya yatak markası hangi reklam kanallarını birlikte kullanmalı?', a: 'Ürünün görselliği güçlü olduğu için Instagram ve Facebook reklamları tanıtımı üstlenir; “yatak fiyatları”, “koltuk takımı” gibi aramalarda Google reklamı satın almaya yakın kişiyi yakalar. Bayi arayan firmalar için ayrı, B2B dilli bir kampanya kurulur.' },
      { q: 'Pastırma ve sucuk gibi yöresel ürünleri şehir dışına satmak için reklam nasıl kurgulanır?', a: 'Önce kargo, soğuk zincir ve teslim süresini net anlatan bir satış sayfası gerekir. Ardından Google Alışveriş ve Instagram reklamları gelir; bayram ve yılbaşı gibi hediye dönemlerinde bütçe artırılır. Kayseri dışından gelen siparişler ayrıca ölçülür.' },
      { q: 'Kayseri’deki işletmemin sosyal medya hesaplarını da yönetiyor musunuz?', a: 'Evet. Hesap yönetimi, içerik planı, çekim ve tasarım, paylaşım ve reklam yönetimini birlikte yürütüyoruz. Erciyes kışı, okulların açılışı gibi şehre özgü dönemler içerik takvimine baştan işlenir.' },
    ],
    web: [
      { q: 'Mobilya üreticisinin sitesinde bayi ve son kullanıcı nasıl ayrılır?', a: 'İki ayrı yol kuruyoruz: son kullanıcı için ürün koleksiyonları ve satış noktası bilgisi; bayiler için başvuru formu, katalog indirme ve gerekirse şifreli bayi alanı. Böylece toptan fiyat bilgisi herkese açık olmaz.' },
      { q: 'Metal ve makine firmasının kurumsal sitesinde neler bulunmalı?', a: 'Makine parkuru, işlenebilen malzeme ve ölçüler, kalite belgeleri ve örnek parçalar. Satın almacı teknik çizimini yükleyip teklif isteyebilmeli. İhracat yapan firmalar için İngilizce sürüm baştan planlanır.' },
      { q: 'Erciyes çevresindeki otel veya apart için web sitesi nasıl olmalı?', a: 'Odalar, kayak merkezine ulaşım, sezon bilgisi ve hızlı iletişim öne çıkmalı. Rezervasyon talebini WhatsApp’a veya kullandığınız rezervasyon sistemine bağlıyoruz; yabancı misafir alıyorsanız İngilizce sayfalar ekleniyor.' },
    ],
    pazarlama: [
      { q: 'Kayseri’de dijital pazarlama bütçesi kanallara nasıl dağıtılmalı?', a: 'Sektöre göre değişir. Üretici firmada ağırlık SEO, LinkedIn ve B2B arama reklamındadır; kış turizminde sezon öncesi reklam ve Instagram’da; mahalle esnafında ise Google İşletme Profili ve yorumlarda. İlk ayın verisine göre dağılım güncellenir.' },
      { q: 'Kayseri’de Google Haritalar’da görünmek neden önemli?', a: 'Melikgazi ve Kocasinan gibi merkez ilçelerde “yakınımdaki” aramalarının önemli kısmı harita sonuçlarında karşılanır. Doğru kategori, güncel fotoğraflar, çalışma saatleri ve yanıtlanmış yorumlar haritada öne çıkmanın temelidir.' },
    ],
    yazilim: [
      { q: 'Mobilya üreticisi için bayi sipariş portalı nasıl çalışır?', a: 'Bayiler kendi hesaplarıyla ürünleri ve stok durumunu görür, sipariş verir; sipariş muhasebe programınıza aktarılır ve ilgili kişiye bildirim gider. Telefonla ve Excel’le yürüyen sipariş trafiği tek ekranda toplanır.' },
      { q: 'Atölyede iş emri ve termin takibini yazılıma taşımak zor mu?', a: 'Genellikle hayır. İş emri, makine, sorumlu ve termin bilgisini tutan sade bir panel çoğu metal ve makine atölyesi için yeterlidir. Müşteriye “siparişiniz hazır” bildirimi de otomatik gönderilebilir.' },
      { q: 'Kullandığımız muhasebe programıyla bağlantı kurulabilir mi?', a: 'Logo, Mikro, Netsis gibi programların çoğu dışarıyla veri alışverişine izin verir. Bağlantının hangi yolla kurulacağını (API, dosya aktarımı) ilk görüşmede programınızın sürümüne bakarak netleştiriyoruz.' },
    ],
  },

  bursa: {
    ads: [
      { q: 'Otomotiv yan sanayi firması Google Ads’te nasıl hedeflenmeli?', a: 'Parça tedarikçisi arayan satın almacılar ürün, malzeme ve proses adıyla arar: “plastik enjeksiyon parça üretimi”, “kataforez kaplama Bursa” gibi. Kampanya bu sorgulara dar kurulur; Nilüfer ve Demirtaş OSB çevresinden gelen talepler ayrıca izlenir.' },
      { q: 'İnegöl’deki mobilya firması reklamını yalnızca İnegöl’e mi göstermeli?', a: 'Genellikle hayır. İnegöl mobilyasını arayan alıcı çoğu zaman başka bir şehirdedir; “İnegöl mobilya”, “İnegöl koltuk takımı” aramaları Türkiye geneline gösterilir. Mağaza ziyareti hedefleyen ayrı bir kampanya ise İnegöl ve Bursa merkezle sınırlanır.' },
      { q: 'Uludağ ve Mudanya gibi sezonluk bölgelerde bütçe nasıl ayarlanır?', a: 'Uludağ’da kış, Mudanya ve Gemlik kıyısında yaz talebi yükselir. Bu işletmelerde bütçe sezondan birkaç hafta önce artırılır, sezon dışında düşürülür; şehir merkezindeki hizmet işletmelerinde ise yıl boyu dengeli bir bütçe yeterlidir.' },
    ],
    reklam: [
      { q: 'Bursa’da tekstil ve havlu üreticisi için hangi reklam kanalları uygun?', a: 'Toptan alıcıya ulaşmak için B2B arama reklamları ve LinkedIn; markalı perakende satış yapıyorsanız Instagram reklamları ve Google Alışveriş. Yurt dışı alıcılar için İngilizce reklam grupları ayrı kurulur.' },
      { q: 'Nilüfer ve Osmangazi’deki işletmeler aynı reklamı kullanabilir mi?', a: 'Kullanabilir ama verim düşer. Nilüfer’deki bir klinik ile Osmangazi çarşısındaki bir dükkânın müşterisi farklı arar, farklı saatlerde gelir. Reklam metni ve hedef bölge ilçeye göre ayrıldığında aynı bütçe daha doğru kişiye ulaşır.' },
      { q: 'Bursa’da sosyal medya yönetimine neler dahil?', a: 'Hesap yönetimi, aylık içerik planı, fotoğraf-video ve tasarım, paylaşım takvimi, mesaj ve yorum takibi ile reklam yönetimi. Uludağ sezonu, kestane şekeri ve hediye dönemleri gibi yerel zamanlamalar içerik takvimine eklenir.' },
    ],
    web: [
      { q: 'Otomotiv tedarikçisinin sitesi neden çok dilli olmalı?', a: 'Bursa’daki yan sanayi firmalarının müşterileri arasında yabancı üreticiler ve ihracat alıcıları da bulunur. İngilizce (gerekirse Almanca) sürüm, kalite belgeleri ve proses sayfaları, satın alma ekiplerinin firmayı hızlıca değerlendirmesini sağlar.' },
      { q: 'İnegöl mobilya firmasının sitesinde katalog nasıl sunulmalı?', a: 'PDF katalog yerine her ürünün ayrı sayfası olmalı: ölçüler, kumaş ve renk seçenekleri, fotoğraflar. Böylece ürünler Google’da tek tek bulunur; bayi ve toptan talepleri için ayrı bir form eklenir.' },
      { q: 'Bursa’daki klinik veya danışmanlık ofisi için site nasıl kurgulanır?', a: 'Hizmet sayfaları, uzman bilgisi, konum ve ulaşım, WhatsApp ve randevu butonu. Sağlık alanında mevzuata uygun, iddiasız bir dil kullanıyoruz; site Nilüfer, Osmangazi gibi bulunduğunuz ilçeyi açıkça belirtir.' },
    ],
    pazarlama: [
      { q: 'Bursa’da hem toptan hem perakende satan firma pazarlamayı nasıl ayırmalı?', a: 'İki ayrı akış kuruyoruz: toptan alıcı için SEO, LinkedIn ve teklif formu; son tüketici için Instagram, Google Alışveriş ve kampanyalar. Ölçüm de ayrılır; hangi kanalın bayi, hangisinin perakende satış getirdiği karışmaz.' },
      { q: 'Bursa’da Google yorumları gerçekten fark yaratır mı?', a: 'Özellikle sağlık, oto servis ve yeme-içme gibi yerel hizmetlerde evet. İnsanlar haritada yakındaki işletmeleri karşılaştırırken yorumları okur. Memnun müşteriden yorum istemeyi düzenli bir alışkanlığa dönüştürmek ve her yoruma yanıt vermek bu yüzden önemlidir.' },
    ],
    yazilim: [
      { q: 'Yan sanayi firmasında teklif ve numune takibi yazılımla nasıl kolaylaşır?', a: 'Gelen talep, teknik çizim, teklif sürümleri ve numune durumu tek kayıtta tutulur. Satış ve üretim aynı bilgiyi görür; teklifin hangi aşamada beklediği ve kimden cevap beklendiği takip edilir.' },
      { q: 'İnegöl’deki mobilya firması bayi siparişlerini nasıl dijitalleştirebilir?', a: 'Bayilerin ürün, kumaş-renk seçeneği ve stok bilgisini görüp sipariş girebildiği bir portal kurulabilir. Siparişler üretim listesine düşer, sevkiyat tarihi bayiye otomatik bildirilir.' },
      { q: 'Fabrikamızın kullandığı ERP ile entegrasyon mümkün mü?', a: 'Çoğu ERP dışarıya veri aktarmaya izin verir. Önce hangi verinin (sipariş, stok, fatura) nereye akması gerektiğini belirliyor, ardından ERP’nizin desteklediği yöntemle bağlantıyı kuruyoruz.' },
    ],
  },

  konya: {
    ads: [
      { q: 'Tarım makinesi ve yedek parça satan firma reklamı hangi dönemlerde artırmalı?', a: 'Ekim ve hasat öncesi haftalarda parça ve makine aramaları yükselir. Bu dönemlerde bütçeyi artırıp ürün ve model adıyla yapılan aramalara (“pulluk yedek parça”, “mibzer modelleri” gibi) odaklanıyoruz; sezon dışında bütçe düşürülür.' },
      { q: 'Konya dışındaki çiftçilere de reklam gösterilmeli mi?', a: 'Parça ve makine satışında evet; Türkiye geneline kargo yapan firmalar için tarımın yoğun olduğu iller ayrıca hedeflenir. Mağaza ziyareti bekleyen işletmelerde ise reklam Selçuklu, Meram, Karatay ve yakın ilçelerle sınırlı tutulur.' },
      { q: 'Konya’da eğitim ve sağlık işletmeleri Google Ads’i nasıl kullanmalı?', a: 'Kurslar ve özel eğitim kurumları bütçeyi kayıt dönemlerinde yoğunlaştırır. Sağlık işletmelerinde mevzuata uygun, iddiasız reklam metni ve dar konum hedefi esastır; reklam yasağı olan meslekler için ücretli reklam önermiyoruz.' },
    ],
    reklam: [
      { q: 'Un ve gıda üreticisi için hangi reklam kanalları anlamlı?', a: 'Toptan alıcılara ve fırınlara ulaşmak için B2B arama reklamları ve sektörel içerik; markalı ürünler için Instagram ve raftaki ürünü destekleyen tanıtım videoları. Kanal seçimi, müşterinin işletme mi tüketici mi olduğuna göre yapılır.' },
      { q: 'Konya’da reklamlarda yerel dil ve değerler önemli mi?', a: 'Evet. Konya’da aile ve güven vurgusu, abartısız ve samimi bir anlatım daha iyi karşılık bulur. Şeb-i Arus gibi şehrin öne çıktığı dönemler, turizm ve yeme-içme işletmeleri için ayrıca planlanabilir.' },
      { q: 'Sosyal medya hesap yönetimini de üstleniyor musunuz?', a: 'Evet. Konya’daki işletmeniz için hesap yönetimi, içerik üretimi, tasarım, paylaşım takvimi ve reklam yönetimini birlikte yapıyoruz. Tarım takvimi veya kayıt dönemi gibi sektörünüze özgü zamanlamalar plana işlenir.' },
    ],
    web: [
      { q: 'Yedek parça firması için kurumsal site mi, e-ticaret mi?', a: 'Parça çeşidi fazlaysa ve kargoyla satış yapıyorsanız e-ticaret; parça kodu, uyumlu makine modeli ve stok bilgisi aranabilir olmalı. Daha çok teklif usulü çalışıyorsanız ürün kataloğu ve hızlı WhatsApp iletişimi yeterlidir.' },
      { q: 'Tarım makinesi üreticisinin sitesinde neler olmalı?', a: 'Makine modelleri, teknik özellikler, kullanım videoları, bayi ve servis noktaları. İhracat yapılıyorsa İngilizce ve Arapça sürümler planlanır; bayilerin güncel broşürü kolayca indirebileceği bir alan eklenir.' },
      { q: 'Selçuklu veya Meram’daki bir kurs için site nasıl kurgulanmalı?', a: 'Program sayfaları, dönem ve kayıt tarihleri, ön kayıt formu ve veli sorularını yanıtlayan bir sık sorulanlar bölümü. Kayıt dönemi yaklaşırken öne çıkan bir duyuru alanı ve WhatsApp butonu kritik hâle gelir.' },
    ],
    pazarlama: [
      { q: 'Konya’da tarım takvimi pazarlama planını nasıl etkiler?', a: 'Makine, parça, tohum ve gübre gibi ürünlerde talep ekim ve hasat öncesinde yoğunlaşır. İçerik ve reklamlar bu haftalardan önce hazırlanır; sezon arasında ise SEO, bakım rehberleri ve mevcut müşterilere yönelik iletişim öne çıkar.' },
      { q: 'Konya’daki bir üretici dijital pazarlamaya nereden başlamalı?', a: 'Önce ürünleri ve iletişim bilgisi net olan hızlı bir site ile eksiksiz bir Google İşletme Profili. Ardından en çok satan ürün grubu için arama reklamı ve SEO. Kanallar sonuç verdikçe sosyal medya ve e-posta eklenir.' },
    ],
    yazilim: [
      { q: 'Yedek parça stokunu ve siparişleri tek ekranda toplayabilir miyiz?', a: 'Evet. Parça kodu, uyumlu modeller ve depo bilgisini tutan bir stok paneli kurulabilir; web sitesi, pazar yerleri ve telefon siparişleri buraya düşer. Kritik stok seviyesinde uyarı gönderilir.' },
      { q: 'Un veya gıda üretiminde parti takibi yazılımla yapılabilir mi?', a: 'Hammadde girişi, üretim partisi ve sevkiyatı birbirine bağlayan sade bir takip sistemiyle bir ürünün hangi partiden çıktığı ve kime gittiği hızlıca bulunur. Mevcut muhasebe programınızla bağlantı kurulabilir.' },
      { q: 'Bayilerimiz için servis ve garanti kaydı uygulaması yapılabilir mi?', a: 'Tarım makinesi bayileri için satış, garanti başlangıcı ve servis kaydının girildiği bir web uygulaması yapılabilir. Böylece hangi makinenin ne zaman bakıma geleceği izlenir ve çiftçiye hatırlatma gönderilir.' },
    ],
  },

  eskisehir: {
    ads: [
      { q: 'Eskişehir’de kurs ve öğrenci hizmetleri reklamı ne zaman yoğunlaştırmalı?', a: 'Üniversitelerin takvimi talebi belirler: kayıt dönemi, sınav haftaları öncesi ve yaz tatili. Kurs, yurt ve apart işletmeleri bütçeyi bu haftalarda artırır, mezuniyet ve tatil döneminde düşürür.' },
      { q: 'Havacılık ve raylı sistem tedarikçileri için Google Ads uygun mu?', a: 'Arama hacmi düşük ama nitelik yüksek. Proses ve sertifika içeren dar anahtar kelimelerle (“hassas talaşlı imalat”, “AS9100 tedarikçi” gibi) çok kontrollü bir kampanya kurulabilir; bu firmalarda LinkedIn ve SEO genellikle daha belirleyicidir.' },
      { q: 'Odunpazarı ve Tepebaşı için ayrı reklam grubu gerekir mi?', a: 'Yeme-içme ve hizmet işletmelerinde faydalıdır. Odunpazarı’nda turist ve hafta sonu ziyaretçisi, Tepebaşı’nda ise öğrenci ve şehir içi müşteri ağırlıktadır; reklam metni ve gösterim saatleri buna göre ayrılır.' },
    ],
    reklam: [
      { q: 'Eskişehir’de öğrenciye hitap eden işletme hangi kanalları kullanmalı?', a: 'Instagram ve TikTok görünürlüğü ile Google Haritalar öne çıkar. Öğrenciler yakınlığa, menüye ve yorumlara bakar; kampanya ve konumun net olduğu kısa videolar ve güncel bir işletme profili çoğu zaman iyi bir başlangıçtır.' },
      { q: 'Odunpazarı’ndaki butik otel ve kafeler şehir dışından gelenlere nasıl ulaşır?', a: 'Hafta sonu gezisi planlayanlar Eskişehir’e gelmeden önce arama yapar. Google İşletme Profili, harita görünürlüğü ve İstanbul–Ankara çıkışlı kullanıcıları hedefleyen sosyal medya reklamları bu ziyaretçiyi yakalamak için uygundur.' },
      { q: 'Sosyal medya içeriklerini siz mi üretiyorsunuz?', a: 'Evet; hesap yönetimi, içerik planı, çekim, tasarım, paylaşım ve reklam yönetimi hizmete dahil. Eskişehir’de dönem başı, sınav haftaları ve festivaller gibi şehir takvimi içerik planında ayrıca yer alır.' },
    ],
    web: [
      { q: 'Eskişehir’deki bir kurs veya dershanenin sitesinde neler olmalı?', a: 'Program ve dönem sayfaları, ders saatleri, eğitmen bilgisi, ön kayıt formu ve WhatsApp. Kayıt dönemine yaklaşırken sınav takvimi, çalışma rehberi gibi bilgilendirici içerikler siteye ziyaretçi getirir.' },
      { q: 'Seramik veya makine üreticisinin sitesi nasıl kurgulanmalı?', a: 'Ürün grupları, teknik özellikler, üretim kapasitesi ve belgeler; ihracat yapılıyorsa İngilizce sürüm. Teknik çizim veya numune talebinin kolayca iletildiği bir teklif formu satın almacının işini hızlandırır.' },
      { q: 'Öğrenci apartı veya yurt için site gerekli mi?', a: 'Evet; oda fotoğrafları, üniversitelere mesafe, ulaşım ve dahil olan hizmetler tek yerde görünmeli. Aileler de araştırdığı için güven veren bilgiler ve hızlı bir iletişim kanalı önemlidir.' },
    ],
    pazarlama: [
      { q: 'Eskişehir’de akademik takvim dijital pazarlamayı nasıl etkiler?', a: 'Şehir nüfusunun önemli bir kısmı dönemle birlikte değişir. Eylül ve şubat başlangıçları yeni müşteri kazanmak için, yaz ayları ise kalıcı şehir sakinlerine ve turizme yönelik iletişim için kullanılır.' },
      { q: 'Eskişehir’deki B2B üreticiler hangi kanallara öncelik vermeli?', a: 'LinkedIn, teknik içerikli SEO ve fuar dönemleri. Havacılık, raylı sistem ve seramik tedarik zincirinde alıcı sayısı sınırlı olduğundan geniş kitleli reklam yerine doğru kişilere ulaşan içerik ve iletişim daha verimlidir.' },
    ],
    yazilim: [
      { q: 'Kurs veya eğitim kurumu için ön kayıt ve aday takibi kurulabilir mi?', a: 'Evet. Web formundan gelen adaylar tek listede toplanır; arama durumu, ilgilendiği program ve kayıt aşaması işaretlenir. Hatırlatma mesajları otomatik gider, hiçbir aday unutulmaz.' },
      { q: 'Apart ve yurt işletmeleri için rezervasyon sistemi gerekir mi?', a: 'Oda sayısı fazlaysa evet. Doluluk takvimi, depozito ve sözleşme bilgisini tutan sade bir panel, dönem başındaki yoğun talepte telefon trafiğini azaltır.' },
      { q: 'Büyük bir üreticinin tedarikçi portalına veri göndermemiz gerekiyor, yardımcı olur musunuz?', a: 'Tedarikçi portalları genellikle belirli formatlarda veri ister. Kendi sisteminizdeki sipariş ve sevkiyat bilgisini bu formata otomatik dönüştüren bir ara katman kurulabilir; elle tekrar giriş ortadan kalkar.' },
    ],
  },

  gaziantep: {
    ads: [
      { q: 'Halı ve tekstil ihracatçısı Google Ads’i yurt dışı için nasıl kullanmalı?', a: 'Hedef ülkelerin dilinde (İngilizce, Arapça vb.) ayrı kampanyalar kurulur ve “machine made carpet manufacturer” gibi toptan alıcı aramalarına odaklanılır. Reklam saatleri hedef ülkenin mesai saatine göre ayarlanır, talepler ülke bazında ölçülür.' },
      { q: 'Baklava ve fıstık satan firma reklamı hangi dönemlerde artırmalı?', a: 'Bayramlar öncesi, yılbaşı ve özel günlerde hediye aramaları yükselir. Bu dönemlerden birkaç hafta önce Google Alışveriş ve arama reklamları güçlendirilir; kargo süresi ve son sipariş tarihi reklam metninde açıkça yazılır.' },
      { q: 'Şahinbey ve Şehitkamil’deki yerel işletmeler için konum hedefi nasıl olmalı?', a: 'Şehrin tamamı yerine gerçekten hizmet verdiğiniz bölgeler hedeflenir. Şehitkamil’deki bir klinik ile Şahinbey’deki bir esnafın müşterisi farklı semtlerden gelir; ayrı reklam grupları bütçeyi doğru semte yönlendirir.' },
    ],
    reklam: [
      { q: 'Gaziantep’in gastronomi kimliği reklamda nasıl kullanılabilir?', a: 'Gaziantep, UNESCO Yaratıcı Şehirler Ağı’nda gastronomi alanında yer alır. Yeme-içme ve yöresel ürün firmaları için üretimi, ustalığı ve tazeliği gösteren kısa videolar sosyal medya reklamlarında güçlü bir içerik kaynağıdır.' },
      { q: 'İhracat yapan firma için hangi reklam kanalları birlikte çalışır?', a: 'Yabancı alıcılar için çok dilli site, Google arama reklamları ve LinkedIn; fuar öncesi ve sonrasında yeniden pazarlama reklamları. Yurt içi bayi ağı için ayrı, Türkçe kampanyalar yürütülür.' },
      { q: 'Sosyal medya hesabımızı tamamen size devredebilir miyiz?', a: 'Evet. Gaziantep’teki işletmeniz için hesap yönetimi, içerik üretimi, tasarım, paylaşım ve reklamları birlikte yürütüyoruz. Bayram, hasat ve hediye dönemleri gibi şehre özgü zamanlamalar içerik takvimine işlenir.' },
    ],
    web: [
      { q: 'İhracatçı halı firmasının sitesi nasıl olmalı?', a: 'Koleksiyon sayfaları, ölçü ve malzeme seçenekleri, üretim kapasitesi ve sertifikalar; İngilizce ve Arapça başta olmak üzere hedef pazarın dilleri. Fiyat listesi yerine numune ve teklif talebi formu öne çıkar.' },
      { q: 'Baklava veya fıstık için e-ticaret sitesinde nelere dikkat edilmeli?', a: 'Tazelik ve kargo süresi, paketleme fotoğrafları, saklama koşulları ve son sipariş saati net yazılmalı. Bayram yoğunluğunu kaldıracak hızlı bir altyapı ve kurumsal hediye siparişleri için ayrı bir form eklenir.' },
      { q: 'Gaziantep’teki bir klinik veya ofis için tek sayfa yeterli mi?', a: 'Başlangıç için hızlı ve net bir tek sayfa yeterli olabilir. Ancak her hizmetin ayrı sayfası, Google’da o hizmetin adıyla bulunmanızı kolaylaştırır; bu yüzden siteyi sonradan büyümeye uygun kuruyoruz.' },
    ],
    pazarlama: [
      { q: 'Gaziantep’te ihracat ve iç pazar pazarlaması nasıl ayrılır?', a: 'İç pazarda Türkçe içerik, Google İşletme Profili ve yerel reklamlar; ihracatta çok dilli SEO, LinkedIn ve fuar odaklı iletişim. İki taraf ayrı ölçülür ki hangi pazarın büyüdüğü net görülsün.' },
      { q: 'Yöresel ürün satan firma için içerik pazarlaması nasıl yapılır?', a: 'Üretim aşamaları, ustalar, hasat ve paketleme gibi gerçek içerikler ile “gerçek Antep fıstığı nasıl anlaşılır” gibi soru-cevap yazıları. Bu içerikler hem Google’da hem yapay zekâ aramalarında kaynak olarak öne çıkma şansı taşır.' },
    ],
    yazilim: [
      { q: 'İhracat sipariş ve evrak takibi tek sistemde toplanabilir mi?', a: 'Evet. Proforma, sipariş, üretim durumu, yükleme ve evrak bilgisi tek kayıtta izlenir; alıcıya sevkiyat aşamaları otomatik bildirilebilir. Muhasebe programınızla bağlantı kurularak çift giriş önlenir.' },
      { q: 'Bayram dönemindeki sipariş yoğunluğu otomasyonla nasıl yönetilir?', a: 'Web sitesinden ve WhatsApp’tan gelen siparişler tek listeye düşer; kargo etiketi ve müşteri bildirimi otomatik hazırlanır. Kurumsal toplu siparişler ayrı bir akışla takip edilir.' },
      { q: 'Çok dilli ürün açıklamalarını yapay zekâ ile üretebilir miyiz?', a: 'Taslak üretmek için evet; ancak teknik ve ticari terimlerin doğru olması için her metin kontrol edilir. Ürün bilgisi tek yerden yönetilir ve tüm dillere aynı anda yansır.' },
    ],
  },

  mersin: {
    ads: [
      { q: 'Lojistik ve gümrük firması Google Ads’te hangi aramaları hedeflemeli?', a: 'Hizmet, güzergâh ve yük tipini birlikte içeren aramalar: “Mersin limanı konteyner taşımacılığı”, “gümrük müşavirliği Mersin”, “parsiyel yük Irak” gibi. Bireysel ve iş ilanı aramaları engellenir, reklamlar mesai saatlerine yoğunlaştırılır.' },
      { q: 'Narenciye ve tarım ihracatçıları reklamı ne zaman başlatmalı?', a: 'Alıcılar hasattan önce tedarikçi arar. Kampanyalar ve çok dilli açılış sayfaları sezondan birkaç hafta önce hazır olmalı; hasat süresince talepler ülke ve ürün bazında izlenir.' },
      { q: 'Mezitli ve Erdemli’de yabancıya konut satışı için reklam nasıl kurgulanır?', a: 'Hedef ülkenin dilinde ayrı kampanyalar, proje sayfaları ve WhatsApp ile hızlı iletişim. Reklamlar alıcının bulunduğu ülkeye ve oradaki saat dilimine göre gösterilir; yerel alıcı kampanyası ayrı tutulur.' },
    ],
    reklam: [
      { q: 'Mersin’de kıyı turizmi işletmeleri sosyal medyayı nasıl kullanmalı?', a: 'Kızkalesi, Erdemli ve Silifke gibi kıyı bölgelerinde yaz planı yapanlar fotoğraf ve videoya bakar. Sezon öncesinde Instagram reklamları ve güncel Google İşletme Profili, sezon içinde ise anlık içerik ve yorum yanıtları öne çıkar.' },
      { q: 'Mersin’deki emlak ofisi hangi reklam kanallarını birlikte kullanmalı?', a: 'Yerel alıcı için Google arama ve ilan portalları; yabancı alıcı için çok dilli sosyal medya reklamları ve proje videoları. Her kanalın getirdiği talep ayrı ölçülür.' },
      { q: 'Sosyal medya yönetiminiz neleri kapsıyor?', a: 'Hesap yönetimi, içerik planlama, fotoğraf-video, tasarım, paylaşım, yorum ve mesaj takibi ile reklam yönetimi. Mersin’de yaz sezonu, hasat ve fuar dönemleri içerik takvimine ayrıca işlenir.' },
    ],
    web: [
      { q: 'Lojistik firmasının web sitesinde neler bulunmalı?', a: 'Hizmet ve güzergâh sayfaları, araç ve depo kapasitesi, belgeler, hızlı teklif formu ve yük takibi bilgisi. Yabancı müşteri ve acentelerle çalışıyorsanız İngilizce sürüm baştan planlanır.' },
      { q: 'Tarım ihracatçısının sitesi alıcıya güven vermek için ne içermeli?', a: 'Ürün ve sezon takvimi, paketleme seçenekleri, sertifikalar, depolama ve soğuk zincir bilgisi, tesis fotoğrafları. Hedef pazarın dilinde içerik ve kolay numune-teklif talebi alıcının işini kolaylaştırır.' },
      { q: 'Yabancıya satış yapan emlak ofisi için çok dilli site nasıl kurulur?', a: 'Her dil için gerçekten çevrilmiş ayrı sayfalar, proje ve bölge anlatımları, oturum ve tapu süreçleri hakkında bilgilendirici içerik. Formlar ve WhatsApp mesajları dile göre doğru kişiye yönlendirilir.' },
    ],
    pazarlama: [
      { q: 'Mersin’de lojistik ve tarım firmaları dijital pazarlamaya nereden başlamalı?', a: 'Önce hizmetleri ve belgeleri net anlatan bir site ve LinkedIn sayfası. Ardından hizmet ve güzergâh aramalarında SEO ile kontrollü arama reklamı. Fuarlar ve hasat dönemleri için önceden hazırlanmış e-posta ve içerik planı eklenir.' },
      { q: 'Mersin’de yaz sezonu yerel işletmeleri nasıl etkiler?', a: 'Kıyı ilçelerinde nüfus ve talep yazın artar. Yeme-içme, konaklama ve hizmet işletmeleri sezondan önce Google İşletme Profili, fotoğraf ve yorumlarını günceller; reklam bütçesi sezonla birlikte artırılır.' },
    ],
    yazilim: [
      { q: 'Lojistik firmasının müşterisine yük takibi ekranı sunabilir miyiz?', a: 'Evet. Sevkiyatın aşamalarını (yükleme, gümrük, yolda, teslim) gösteren basit bir müşteri ekranı kurulabilir; durum değiştikçe müşteriye otomatik bildirim gider ve “yük nerede” telefonları azalır.' },
      { q: 'Narenciye paketleme tesisinde sipariş ve palet takibi nasıl dijitalleşir?', a: 'Sipariş, ürün çeşidi, kalibre, palet ve konteyner bilgisi tek sistemde tutulur. Yükleme planı ve sevk evrakları bu kayıttan hazırlanır; alıcıya durum bilgisi gönderilebilir.' },
      { q: 'Emlak ofisinde müşteri ve portföy takibi için ne önerirsiniz?', a: 'Portföy, alıcı adayı ve görüşme notlarını tutan sade bir müşteri takip sistemi. Web sitesinden ve WhatsApp’tan gelen talepler otomatik olarak buraya düşer; uygun ilan çıktığında adaya hatırlatma gider.' },
    ],
  },
}

// Yazılım sayfalarındaki altı çözüm kartının (web, otomasyon, entegrasyon, veri,
// yapay zekâ, güvenlik) şehre göre açıklamaları ve giriş/neden metinleri.
export const yazilimSehir: Record<string, { cozumler: string[]; giris: string; neden: string }> = {
  kayseri: {
    cozumler: [
      'Mobilya koleksiyonlarından makine kataloğuna, hızlı açılan ve kolay güncellenen web siteleri ve uygulamalar.',
      'Bayi siparişi, teklif takibi ve fatura hatırlatmaları gibi tekrarlayan işler n8n ile kendiliğinden yürür.',
      'Muhasebe programı, pazar yerleri ve kargo firması arasındaki veri, elle girmeye gerek kalmadan akar.',
      'Hangi bayinin, hangi ürünün ve hangi reklamın satış getirdiği tek bir panoda görünür.',
      'Ürün sorularını yanıtlayan asistan, katalog açıklaması üretimi ve gelen talepleri sınıflandırma.',
      'SSL, düzenli yedek, güncelleme ve kesinti takibi; kampanya ve sezon dönemlerinde siteniz ayakta kalır.',
    ],
    giris: 'Kayseri’nin mobilya, yatak, metal ve makine sanayisinde siparişler çoğu zaman telefon, Excel ve mesajlarla yürür. Yazılımı bu dağınıklığı toplamak için kuruyor; SEO ve reklamla aynı ekipte, aynı hedefe bakarak yürütüyoruz.',
    neden: 'Kayseri’de bir bayi portalı ya da katalog sitesi kurulduktan sonra bulunur olmalı ve gelen talep ölçülmeli. Yazılımı ve pazarlamayı birlikte yürüttüğümüz için site, reklam ve ölçüm aynı plana bağlı kalır; parçalar arasında bilgi kaybolmaz.',
  },
  bursa: {
    cozumler: [
      'Yan sanayi kurumsal sitesinden İnegöl mobilya kataloğuna, çok dilli ve hızlı açılan web siteleri.',
      'Teklif, numune ve bayi siparişi gibi akışlar n8n ile kendiliğinden ilerler; kimse aynı bilgiyi iki kez girmez.',
      'ERP, muhasebe, pazar yeri ve kargo sistemleri birbirine bağlanır; stok ve sipariş her yerde aynı görünür.',
      'Hangi ürün grubunun, hangi bayinin ve hangi kanalın satış getirdiğini aylık panoda görürsünüz.',
      'Teknik soruları yanıtlayan asistan, çok dilli ürün metni üretimi ve gelen talepleri sınıflandırma.',
      'SSL, yedekleme, güncelleme ve kesinti takibi; yabancı alıcının ziyaret ettiği site her an ayakta.',
    ],
    giris: 'Bursa’da otomotiv yan sanayi, tekstil ve İnegöl mobilyası farklı iş akışlarıyla çalışır: teklif ve numune, toptan sipariş, bayi ağı. Yazılımı bu akışlara göre kuruyor, SEO ve reklamla aynı ekipte yürütüyoruz.',
    neden: 'Bursa’da yeni bir bayi portalı ya da çok dilli site, bulunmadıkça ve talepler ölçülmedikçe yarım kalır. Yazılım, SEO ve reklamı birlikte yürüttüğümüz için kurulan sistem aynı zamanda müşteri getiren bir kanala dönüşür.',
  },
  konya: {
    cozumler: [
      'Tarım makinesi kataloğundan yedek parça mağazasına, hızlı açılan ve kolay güncellenen siteler.',
      'Sipariş onayı, kargo bildirimi ve sezon öncesi müşteri hatırlatmaları n8n ile kendiliğinden gider.',
      'Muhasebe programı, pazar yerleri ve kargo firmaları bağlanır; stok her satış kanalında aynı kalır.',
      'Hangi parça grubunun, hangi bölgenin ve hangi sezonun satış getirdiğini tek panoda görürsünüz.',
      'Parça kodu ve model sorularını yanıtlayan asistan, ürün açıklaması üretimi ve talep sınıflandırma.',
      'SSL, yedek ve güncelleme takibi; ekim ve hasat öncesi yoğunlukta site ve mağaza kesintisiz çalışır.',
    ],
    giris: 'Konya’da tarım makineleri, yedek parça ve gıda üretimi; sezon, stok ve bayi ağı etrafında döner. Yazılımı bu takvimi ve iş akışını dikkate alarak kuruyor, SEO ve reklamla aynı ekipte yürütüyoruz.',
    neden: 'Konya’da bir yedek parça mağazası ya da bayi uygulaması, sezon geldiğinde bulunur ve satış yapar durumda olmalı. Yazılım ve pazarlamayı birlikte yürüttüğümüz için altyapı, reklam ve ölçüm aynı takvime göre hazırlanır.',
  },
  eskisehir: {
    cozumler: [
      'Kurs ve apart sitelerinden seramik ve makine kataloglarına, hızlı ve kolay güncellenen web siteleri.',
      'Ön kayıt, randevu, fatura ve hatırlatma akışları n8n ile kendiliğinden ilerler.',
      'Muhasebe, rezervasyon, ödeme ve tedarikçi portalı gibi sistemler arasında veri elle taşınmaz.',
      'Dönem başına kayıt, doluluk ve satış verisini anlaşılır bir panoda izlersiniz.',
      'Öğrenci ve veli sorularını yanıtlayan asistan, teknik doküman özetleme ve talep sınıflandırma.',
      'SSL, yedekleme ve güncelleme takibi; kayıt döneminin yoğunluğunda site ve formlar sorunsuz çalışır.',
    ],
    giris: 'Eskişehir’de bir yanda üniversite takvimine göre çalışan kurs, apart ve yeme-içme işletmeleri, diğer yanda havacılık, raylı sistem ve seramik tedarikçileri var. Yazılımı her iki tarafın iş akışına göre kuruyor, SEO ve reklamla birlikte yürütüyoruz.',
    neden: 'Eskişehir’de kayıt dönemi ya da yeni bir tedarik anlaşması geldiğinde sistemin hem çalışması hem bulunması gerekir. Yazılım ve pazarlamayı aynı ekip yürüttüğü için form, reklam ve ölçüm birbirinden kopmaz.',
  },
  gaziantep: {
    cozumler: [
      'Halı koleksiyonlarından baklava mağazasına, çok dilli ve hızlı açılan web siteleri ve uygulamalar.',
      'Sipariş, kargo etiketi, müşteri bildirimi ve ihracat evrakı hatırlatmaları n8n ile kendiliğinden ilerler.',
      'Muhasebe, ERP, pazar yeri ve kargo süreçlerinde veri tek kaynaktan akar, çift giriş ortadan kalkar.',
      'Hangi ülkenin, hangi ürünün ve hangi dönemin satış getirdiğini tek panoda görürsünüz.',
      'Arapça ve İngilizce soruları yanıtlayan asistan, çok dilli ürün metni taslağı ve talep sınıflandırma.',
      'SSL, yedekleme ve kesinti takibi; bayram yoğunluğunda ve fuar dönemlerinde siteniz ayakta kalır.',
    ],
    giris: 'Gaziantep’te halı, tekstil ve gıda firmaları hem iç pazara hem ihracata çalışır; sipariş, evrak ve dil yükü bu yüzden ikiye katlanır. Yazılımı bu yükü azaltacak şekilde kuruyor, SEO ve reklamla aynı ekipte yürütüyoruz.',
    neden: 'Gaziantep’te çok dilli bir site ya da sipariş sistemi, yabancı alıcı ve yurt içi müşteri tarafından bulunduğunda değer üretir. Yazılım ve pazarlamayı birlikte yürüttüğümüz için altyapı, reklam ve ölçüm aynı hedefe hizmet eder.',
  },
  mersin: {
    cozumler: [
      'Lojistik kurumsal sitesinden çok dilli emlak portföyüne, hızlı açılan web siteleri ve uygulamalar.',
      'Yük durumu bildirimi, teklif takibi ve müşteri hatırlatmaları n8n ile kendiliğinden ilerler.',
      'Muhasebe, müşteri takip sistemi, ilan portalları ve takip ekranları arasında veri elle taşınmaz.',
      'Hangi güzergâhın, hangi ürünün ve hangi kanalın iş getirdiğini tek panoda görürsünüz.',
      'Çok dilli müşteri asistanı, ilan ve ürün metni taslağı, gelen taleplerin sınıflandırılması.',
      'SSL, yedekleme ve kesinti takibi; hasat ve yaz sezonunun yoğunluğunda sistemler ayakta kalır.',
    ],
    giris: 'Mersin’de liman ve lojistik, narenciye ihracatı ve kıyıdaki emlak-turizm işleri farklı tempolarda çalışır. Yazılımı bu iş akışlarına göre kuruyor, SEO ve reklamla aynı ekipte yürütüyoruz.',
    neden: 'Mersin’de bir yük takip ekranı ya da çok dilli emlak sitesi, müşteri tarafından bulunduğunda işe yarar. Yazılım ve pazarlamayı birlikte yürüttüğümüz için kurulan sistem aynı zamanda talep getiren bir kanala dönüşür.',
  },
}
