// Sektör × şehir SEO sayfaları: /{sehir}-{meslek}-seo (ör. /istanbul-avukat-seo)
// Ortak sektör bilgisi (ihtiyaçlar, kurallar, hizmetler) sektorler.ts'den gelir;
// şehre özgü kısımlar (özet, yerel not, bölge tablosu, SSS) burada her sayfa için ayrı yazıldı.
// Uydurma müşteri sonucu, fiyat, sıralama garantisi veya "orada ofisimiz var" yok.

export interface SehirBilgi { key: string; ad: string; de: string; deki: string; yerel: boolean; seoSlug: string }
export interface MeslekBilgi { key: string; sektorSlug: string; ad: string; baslik: string }
export interface SektorSehirIcerik {
  vurgu: string
  kisaOzet: string
  yerelBaslik: string
  yerelMetin: string
  tablo: { bolge: string; arama: string; oneri: string }[]
  sss: { q: string; a: string }[]
}
export interface SektorSehirVeri extends SektorSehirIcerik { slug: string; sehir: SehirBilgi; meslek: MeslekBilgi }

export const ssSehirler: SehirBilgi[] = [
  { key: 'istanbul', ad: 'İstanbul', de: "İstanbul'da", deki: "İstanbul'daki", yerel: false, seoSlug: 'istanbul-seo' },
  { key: 'ankara', ad: 'Ankara', de: "Ankara'da", deki: "Ankara'daki", yerel: false, seoSlug: 'ankara-seo' },
  { key: 'izmir', ad: 'İzmir', de: "İzmir'de", deki: "İzmir'deki", yerel: false, seoSlug: 'izmir-seo' },
  { key: 'kocaeli', ad: 'Kocaeli', de: "Kocaeli'de", deki: "Kocaeli'deki", yerel: true, seoSlug: 'kocaeli-seo' },
  { key: 'bursa', ad: 'Bursa', de: "Bursa'da", deki: "Bursa'daki", yerel: false, seoSlug: 'bursa-seo' },
]

export const ssMeslekler: MeslekBilgi[] = [
  { key: 'avukat', sektorSlug: 'avukat-hukuk-burolari', ad: 'Avukat', baslik: 'Avukat SEO' },
  { key: 'dis-hekimi', sektorSlug: 'dis-hekimleri-klinikler', ad: 'Diş Hekimi', baslik: 'Diş Hekimi SEO' },
  { key: 'psikolog', sektorSlug: 'psikolog-terapistler', ad: 'Psikolog', baslik: 'Psikolog SEO' },
  { key: 'veteriner', sektorSlug: 'veteriner-klinikleri', ad: 'Veteriner', baslik: 'Veteriner SEO' },
  { key: 'mali-musavir', sektorSlug: 'mali-musavirler', ad: 'Mali Müşavir', baslik: 'Mali Müşavir SEO' },
]

const icerik: Record<string, SektorSehirIcerik> = {
  // ───────── AVUKAT ─────────
  'istanbul-avukat': {
    vurgu: 'Hukuk Bürosu Sitesi ve Organik Görünürlük',
    kisaOzet: "İstanbul'da müvekkil adayları avukatı çoğu zaman 'ilçe + çalışma alanı' diye arar: 'kadıköy boşanma avukatı', 'şişli iş hukuku avukatı' gibi. Reklam yasağı nedeniyle Google Ads kullanmıyoruz; büronuz için çalışma alanı sayfaları, bilgilendirici rehberler ve Google İşletme Profili ile organik görünürlük kuruyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Üç adliye, üç farklı arama alışkanlığı',
    yerelMetin: "İstanbul'da dava ve takip işleri ağırlıklı olarak Çağlayan, Kartal (Anadolu) ve Bakırköy adliyeleri çevresinde yoğunlaşır. Avrupa ve Anadolu yakasındaki aramalar birbirinden ayrışır; Anadolu yakasındaki bir kişi genellikle 'kadıköy', 'ataşehir' veya 'kartal' adıyla arar. Büronuzun bulunduğu ve fiilen takip ettiğiniz bölgeyi sayfalarda açıkça belirtmek, ilgisiz aramalar yerine doğru müvekkil adayını getirir.",
    tablo: [
      { bolge: 'Şişli / Mecidiyeköy (Çağlayan çevresi)', arama: 'şişli ceza avukatı', oneri: 'Ceza ve ticaret hukuku sayfaları; ulaşım ve büro adresi net.' },
      { bolge: 'Kadıköy / Ataşehir / Kartal', arama: 'kadıköy boşanma avukatı', oneri: 'Aile hukuku rehberleri, sade dilli süreç anlatımı.' },
      { bolge: 'Bakırköy / Beylikdüzü', arama: 'bakırköy iş hukuku avukatı', oneri: 'İşçi-işveren uyuşmazlıkları için soru-cevap içerikleri.' },
    ],
    sss: [
      { q: "İstanbul'da her ilçe için ayrı sayfa açmalı mıyım?", a: 'Hayır. Fiilen hizmet verdiğiniz ve büronuza yakın birkaç bölge için özgün içerikli sayfa yeterlidir. Kopya metinli onlarca ilçe sayfası hem meslek kurallarına hem Google kurallarına aykırı görülebilir.' },
      { q: "İstanbul'da rekabet çok yüksek, avukat sitesi yine de görünür olur mu?", a: "Genel 'istanbul avukat' aramaları çok rekabetli; ama 'ilçe + çalışma alanı + soru' biçimindeki aramalar daha ulaşılabilirdir. Bu aramalara cevap veren rehber içerikler zamanla birikerek görünürlük sağlar." },
    ],
  },
  'ankara-avukat': {
    vurgu: 'Reklamsız, Kurallara Uygun Görünürlük',
    kisaOzet: "Ankara'da hukuki destek arayan kişiler Kızılay, Çankaya ve Sincan gibi bölge adlarıyla ve idare hukuku gibi başkente özgü konularla arama yapar. Reklam yasağına uygun şekilde, çalışma alanı sayfaları ve bilgilendirici içerikle büronuzun organik görünürlüğünü artırıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Başkentte idare hukuku ve kamu personeli aramaları',
    yerelMetin: "Ankara'da yargı işlerinin önemli kısmı Sıhhiye'deki Ankara Adliyesi ve Sincan'daki Ankara Batı Adliyesi çevresinde yürür. Kamu kurumlarının yoğunluğu nedeniyle idare hukuku, memur disiplin işlemleri ve atama-tayin itirazları gibi konular diğer şehirlere göre daha sık aranır. Bu konulara sade dille cevap veren rehberler, büronuzu doğru müvekkil adayıyla buluşturur.",
    tablo: [
      { bolge: 'Kızılay / Sıhhiye', arama: 'ankara idare hukuku avukatı', oneri: 'İptal davası ve süreler üzerine bilgilendirici sayfalar.' },
      { bolge: 'Çankaya / Çayyolu', arama: 'çankaya boşanma avukatı', oneri: 'Aile hukuku süreç rehberi, randevu ve iletişim kolaylığı.' },
      { bolge: 'Sincan / Etimesgut (Batı Adliyesi)', arama: 'sincan ceza avukatı', oneri: 'Bölge ve adliye bilgisini içeren ceza hukuku sayfası.' },
    ],
    sss: [
      { q: 'Memur ve kamu personeli konularında içerik üretmek mantıklı mı?', a: "Ankara için evet. Disiplin cezası, atama itirazı gibi başlıklarda net ve güncel bilgi veren içerikler hem Google'da hem yapay zekâ aramalarında kaynak olarak öne çıkma şansı taşır." },
      { q: "Ankara Barosu'na bağlıyım, sitede hangi bilgiler zorunlu ya da yasak?", a: 'Kimlik ve iletişim bilgileri, baro sicil bilgisi ve çalışma alanları yer alabilir; ücret, başarı oranı ve müvekkil yorumları yer almamalıdır. Kesin kural için baronuzun güncel düzenlemesini kontrol edin.' },
    ],
  },
  'izmir-avukat': {
    vurgu: 'Hukuk Bürosu İçin Web Sitesi ve SEO',
    kisaOzet: "İzmir'de müvekkil adayları Bayraklı, Alsancak, Karşıyaka ve Bornova gibi semt adlarıyla avukat arar. Reklam yasağı nedeniyle ücretli reklam önermiyoruz; çalışma alanı sayfaları, rehber içerikler ve Google İşletme Profili ile organik görünürlük kuruyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: "Bayraklı merkezli adli yapı ve körfezin iki yakası",
    yerelMetin: "İzmir'de adli işler büyük ölçüde Bayraklı'daki İzmir Adliyesi ve Karşıyaka Adliyesi çevresinde yürür. Körfezin karşı yakaları arasındaki ulaşım alışkanlığı nedeniyle insanlar genellikle kendi yakasındaki büroyu tercih eder. Büronuzun konumunu, ulaşımını ve hangi adliyede takip yaptığınızı açıkça yazmak bu tercihi kolaylaştırır.",
    tablo: [
      { bolge: 'Bayraklı / Alsancak / Konak', arama: 'izmir ticaret hukuku avukatı', oneri: 'Şirket ve sözleşme uyuşmazlıkları için hizmet sayfaları.' },
      { bolge: 'Karşıyaka / Bostanlı', arama: 'karşıyaka boşanma avukatı', oneri: 'Aile hukuku rehberi ve kolay iletişim.' },
      { bolge: 'Bornova / Buca', arama: 'bornova kira avukatı', oneri: 'Kira tespiti ve tahliye konularında soru-cevap içerikleri.' },
    ],
    sss: [
      { q: 'Karşıyaka ve Bayraklı için ayrı sayfa gerekir mi?', a: 'Her iki adliyede de düzenli iş takip ediyorsanız, her biri için özgün bilgi içeren kısa bir bölüm faydalı olur. Aynı metni kopyalamak yerine her bölgeye özgü bilgiyi (adliye, ulaşım) yazmak gerekir.' },
      { q: 'Avukat sitesine müvekkil yorumu ekleyebilir miyim?', a: 'Meslek kuralları gereği müvekkil yorumları ve başarı iddiaları sitede yer almamalıdır. Bunun yerine yayınlar, eğitim bilgisi ve bilgilendirici içerikler güven oluşturur.' },
    ],
  },
  'kocaeli-avukat': {
    vurgu: 'İzmit ve Gebze İçin Hukuk Bürosu SEO',
    kisaOzet: "Kocaeli'de hukuki destek aramaları İzmit ve Gebze çevresinde yoğunlaşır; sanayi bölgesi nedeniyle iş hukuku ve iş kazası konuları öne çıkar. İzmit merkezli ekibimizle reklam yasağına uygun web sitesi ve SEO çalışması yapıyoruz; gerektiğinde yüz yüze görüşebiliriz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Sanayi bölgesinde iş hukuku ağırlıklı aramalar',
    yerelMetin: "Kocaeli'de adli işler İzmit'teki Kocaeli Adliyesi ve Gebze Adliyesi çevresinde yürür. İlde çok sayıda fabrika ve organize sanayi bölgesi bulunduğu için işçilik alacakları, iş kazası ve tazminat konuları diğer şehirlere göre daha sık aranır. Bu konularda süreci ve hakları sade dille anlatan içerikler, büronuzu doğru kişiyle buluşturur.",
    tablo: [
      { bolge: 'İzmit merkez', arama: 'izmit iş hukuku avukatı', oneri: 'İşçilik alacakları ve iş kazası rehberleri.' },
      { bolge: 'Gebze / Darıca / Çayırova', arama: 'gebze avukat', oneri: 'Gebze Adliyesi bilgisini içeren çalışma alanı sayfaları.' },
      { bolge: 'Gölcük / Körfez / Derince', arama: 'gölcük boşanma avukatı', oneri: 'Aile hukuku sayfası ve kolay iletişim.' },
    ],
    sss: [
      { q: 'Kocaeli için yüz yüze çalışabiliyor musunuz?', a: "Evet. İzmit merkezli bir ekibiz; Kocaeli'deki hukuk bürolarıyla gerektiğinde yüz yüze görüşebiliyor, süreci WhatsApp ve video görüşmeyle de yürütebiliyoruz." },
      { q: 'İş kazası gibi konularda içerik yazmak reklam sayılır mı?', a: 'Bilgilendirici, iddiasız ve genel bilgi veren içerikler reklam niteliği taşımaz. "Kesin tazminat", "en iyi avukat" gibi ifadeler ise kullanılmamalıdır.' },
    ],
  },
  'bursa-avukat': {
    vurgu: 'Hukuk Bürosu İçin Web Sitesi ve SEO',
    kisaOzet: "Bursa'da müvekkil adayları Osmangazi, Nilüfer ve İnegöl gibi bölge adlarıyla avukat arar; sanayi ve ticaret yoğunluğu nedeniyle iş ve ticaret hukuku konuları öne çıkar. Reklam yasağına uygun web sitesi, çalışma alanı sayfaları ve rehber içerikle uzaktan çalışıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Sanayi, ticaret ve ilçe adliyeleri',
    yerelMetin: "Bursa'da adli işlerin büyük kısmı Bursa Adliyesi'nde yürürken İnegöl gibi büyük ilçelerin kendi adliyeleri de bulunur. Otomotiv, tekstil ve mobilya sanayisi nedeniyle iş hukuku, ticari alacak ve sözleşme uyuşmazlıkları sık aranır. İlçe adını ve çalışma alanını birlikte kullanan sayfalar, aramayla gelen müvekkil adayını doğru yere yönlendirir.",
    tablo: [
      { bolge: 'Osmangazi / Yıldırım', arama: 'bursa ceza avukatı', oneri: 'Ceza hukuku süreç rehberi, büro adresi ve ulaşım.' },
      { bolge: 'Nilüfer', arama: 'nilüfer boşanma avukatı', oneri: 'Aile hukuku sayfası ve randevu kolaylığı.' },
      { bolge: 'İnegöl', arama: 'inegöl ticaret hukuku avukatı', oneri: 'Mobilya sektörüne yönelik ticari alacak içerikleri.' },
    ],
    sss: [
      { q: 'İnegöl için ayrı sayfa açmak mantıklı mı?', a: 'İnegöl Adliyesi\'nde düzenli iş takip ediyorsanız evet. İnegöl\'e özgü bilgiler (adliye, ilçenin ticari yapısı) içeren kısa ama özgün bir sayfa, ilçe aramalarında görünürlüğü artırır.' },
      { q: 'Bursa dışından çalışmanız sorun olur mu?', a: 'Hayır. Tüm süreç video görüşme ve WhatsApp ile yürür; içerik onayı ve raporlama çevrim içi yapılır.' },
    ],
  },

  // ───────── DİŞ HEKİMİ ─────────
  'istanbul-dis-hekimi': {
    vurgu: 'Klinik Sitesi, Harita ve Tedavi Sayfaları',
    kisaOzet: "İstanbul'da hastalar diş kliniğini çoğunlukla 'semt + tedavi' diye arar: 'kadıköy implant', 'şişli ortodonti' gibi. Mevzuata uygun, iddiasız dille tedavi sayfaları, Google İşletme Profili ve randevuya yönlendiren hızlı bir siteyle görünürlüğünüzü artırıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Semt bazlı aramalar ve yabancı hasta ilgisi',
    yerelMetin: "İstanbul'da diş aramaları büyük ölçüde semt düzeyinde yapılır; insanlar trafik nedeniyle evine veya işine yakın kliniği tercih eder. Bunun yanında şehre tedavi için gelen yabancı hastalar da İngilizce arama yapar. Semt ve ulaşım bilgisini net veren sayfalar ile gerekiyorsa İngilizce sürüm, iki kitleyi de karşılar.",
    tablo: [
      { bolge: 'Şişli / Nişantaşı / Beşiktaş', arama: 'nişantaşı diş kliniği', oneri: 'Hekim profilleri, tedavi sayfaları, otopark ve ulaşım bilgisi.' },
      { bolge: 'Kadıköy / Ataşehir / Bağdat Caddesi', arama: 'kadıköy implant', oneri: 'İmplant süreç rehberi, sık sorulan sorular, online randevu.' },
      { bolge: 'Bakırköy / Beylikdüzü / Başakşehir', arama: 'beylikdüzü çocuk diş hekimi', oneri: 'Pedodonti sayfası, aile odaklı sade dil.' },
    ],
    sss: [
      { q: 'Yabancı hastalar için İngilizce site gerekir mi?', a: 'Kliniğiniz yabancı hasta kabul ediyorsa evet. Tedavi sayfalarının İngilizce sürümü ve WhatsApp iletişimi yeterli bir başlangıçtır; sağlık turizmi mevzuatına uygun dil kullanılmalıdır.' },
      { q: 'Önce-sonra fotoğrafı paylaşabilir miyim?', a: 'Sağlık hizmetlerinde tanıtım kuralları gereği önce-sonra görselleri ve sonuç vaadi risklidir. Süreci anlatan bilgilendirici içerik ve klinik fotoğrafları daha güvenli bir yoldur.' },
    ],
  },
  'ankara-dis-hekimi': {
    vurgu: 'Klinik Sitesi ve Yerel Görünürlük',
    kisaOzet: "Ankara'da hastalar diş kliniğini Çankaya, Kızılay, Ümitköy ve Keçiören gibi semt adlarıyla arar. Tedavi başına bilgilendirici sayfalar, eksiksiz Google İşletme Profili ve randevuyu kolaylaştıran mobil siteyle kliniğinizi bu aramalarda görünür kılıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Merkez ve yeni yerleşim alanları farklı aranıyor',
    yerelMetin: "Ankara'da Kızılay ve Çankaya merkezde iş çıkışı randevu arayanlar, Ümitköy, Çayyolu ve İncek gibi batı yerleşimlerinde ise aileler ve çocuk diş hekimi arayanlar öne çıkar. Çalışma saatlerini, otoparkı ve semti açıkça belirten sayfalar, hastanın 'bana yakın ve uygun' kararını hızlandırır.",
    tablo: [
      { bolge: 'Kızılay / Çankaya', arama: 'kızılay diş kliniği', oneri: 'Akşam randevu saatleri, kolay ulaşım bilgisi.' },
      { bolge: 'Ümitköy / Çayyolu / İncek', arama: 'çayyolu çocuk diş hekimi', oneri: 'Pedodonti sayfası, aileye yönelik sade içerik.' },
      { bolge: 'Keçiören / Etimesgut', arama: 'etimesgut implant', oneri: 'İmplant ve protez süreç rehberleri.' },
    ],
    sss: [
      { q: 'Klinik sitesinde tedavi fiyatı yazmalı mıyım?', a: 'Kesin fiyat yazmak çoğu zaman uygun değildir; fiyatı etkileyen etkenleri anlatmak ve muayene yolunu net göstermek daha doğru bir yaklaşımdır.' },
      { q: 'Google yorumları sıralamayı etkiler mi?', a: 'Harita sonuçlarında yorum sayısı ve güncelliği etkili sinyallerdendir. Yorumlar teşvik verilmeden, memnun kalan hastalardan istenmelidir.' },
    ],
  },
  'izmir-dis-hekimi': {
    vurgu: 'Klinik Sitesi, Harita ve Tedavi Sayfaları',
    kisaOzet: "İzmir'de hastalar diş kliniğini Alsancak, Karşıyaka, Bornova ve Buca gibi semt adlarıyla arar. Mevzuata uygun tedavi sayfaları, Google İşletme Profili ve randevu odaklı mobil siteyle kliniğinizin görünürlüğünü artırıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Körfezin iki yakası ve öğrenci nüfusu',
    yerelMetin: "İzmir'de hastalar genellikle körfezin kendi yakasındaki kliniği tercih eder; Karşıyaka'daki biri Alsancak'a gitmek yerine yakınında arama yapar. Bornova ve Buca çevresindeki öğrenci nüfusu ise acil diş ağrısı ve uygun saatli randevu aramalarını artırır. Semti ve çalışma saatlerini öne çıkaran sayfalar bu farkı karşılar.",
    tablo: [
      { bolge: 'Alsancak / Konak', arama: 'alsancak diş kliniği', oneri: 'Hekim profilleri, merkezi konum ve ulaşım bilgisi.' },
      { bolge: 'Karşıyaka / Bostanlı', arama: 'karşıyaka ortodonti', oneri: 'Ortodonti süreç rehberi, aile odaklı içerik.' },
      { bolge: 'Bornova / Buca', arama: 'bornova acil diş hekimi', oneri: 'Acil başvuru bilgisi, çalışma saatleri, tek dokunuşla arama.' },
    ],
    sss: [
      { q: 'Acil diş aramalarında görünmek için ne gerekir?', a: 'Google İşletme Profili\'nde güncel çalışma saatleri, sitede açık bir acil başvuru bölümü ve mobilde tek dokunuşla arama düğmesi en önemli adımlardır.' },
      { q: 'Kliniğim tek hekimli, site yine de gerekir mi?', a: 'Evet. Tek hekimli kliniklerde hekimin kendisi markadır; özgeçmiş, uzmanlık alanları ve sade bir tedavi listesi güven oluşturur.' },
    ],
  },
  'kocaeli-dis-hekimi': {
    vurgu: 'İzmit, Gebze ve İlçeler İçin Klinik SEO',
    kisaOzet: "Kocaeli'de hastalar diş kliniğini İzmit, Gebze, Darıca ve Gölcük gibi ilçe adlarıyla arar. İzmit merkezli ekibimizle tedavi sayfaları, Google İşletme Profili ve randevu odaklı siteyi birlikte kuruyoruz; gerektiğinde yüz yüze görüşebiliriz. Sıralama garantisi verilmez.",
    yerelBaslik: 'İlçe adıyla yapılan aramalar belirleyici',
    yerelMetin: "Kocaeli geniş bir il olduğu için hastalar genellikle 'kocaeli' yerine kendi ilçesinin adını yazar. Gebze ve Darıca'da İstanbul'a yakınlık nedeniyle rekabet daha yüksekken Kartepe, Başiskele ve Gölcük gibi ilçelerde birkaç iyi sayfa ve eksiksiz harita kaydı fark yaratabilir.",
    tablo: [
      { bolge: 'İzmit merkez', arama: 'izmit diş kliniği', oneri: 'Hekim ve tedavi sayfaları, merkezi konum bilgisi.' },
      { bolge: 'Gebze / Darıca / Çayırova', arama: 'gebze implant', oneri: 'İmplant rehberi, online randevu, WhatsApp iletişim.' },
      { bolge: 'Kartepe / Başiskele / Gölcük', arama: 'kartepe diş hekimi', oneri: 'Eksiksiz Google İşletme Profili ve kısa hizmet sayfaları.' },
    ],
    sss: [
      { q: 'Kocaeli için yüz yüze çalışabiliyor musunuz?', a: "Evet. İzmit merkezli bir ekibiz; Kocaeli'deki kliniklerle gerektiğinde yüz yüze görüşebiliyor, fotoğraf ve içerik sürecini birlikte planlayabiliyoruz." },
      { q: 'Kliniğim Gebze\'de, İzmit aramalarında da çıkar mıyım?', a: 'En güçlü görünürlüğü kliniğinizin bulunduğu ilçede alırsınız. Diğer ilçelerden de hasta geliyorsa bunu içerikte belirtmek faydalıdır, ancak her ilçede üst sırada çıkmak garanti edilemez.' },
    ],
  },
  'bursa-dis-hekimi': {
    vurgu: 'Klinik Sitesi ve Yerel Görünürlük',
    kisaOzet: "Bursa'da hastalar diş kliniğini Nilüfer, Osmangazi, Yıldırım ve Mudanya gibi bölge adlarıyla arar. Tedavi başına bilgilendirici sayfalar, Google İşletme Profili ve randevu odaklı mobil siteyle kliniğinizi bu aramalarda görünür kılıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Nilüfer ve merkez ilçelerde farklı beklentiler',
    yerelMetin: "Bursa'da Nilüfer ve FSM Bulvarı çevresinde estetik diş hekimliği ve ortodonti aramaları öne çıkarken Osmangazi ve Yıldırım'da genel diş tedavisi ve uygun saatli randevu aramaları yoğundur. Mudanya ve Gemlik gibi ilçelerde ise az sayıda klinik olduğu için iyi bir harita kaydı hızlı fark yaratır.",
    tablo: [
      { bolge: 'Nilüfer / FSM Bulvarı', arama: 'nilüfer ortodonti', oneri: 'Ortodonti ve estetik diş hekimliği sayfaları, iddiasız dil.' },
      { bolge: 'Osmangazi / Yıldırım', arama: 'osmangazi diş kliniği', oneri: 'Genel tedavi listesi, çalışma saatleri, kolay randevu.' },
      { bolge: 'Mudanya / Gemlik', arama: 'mudanya diş hekimi', oneri: 'Eksiksiz Google İşletme Profili ve kısa hizmet sayfası.' },
    ],
    sss: [
      { q: 'Diş kliniği için Google Ads kullanılabilir mi?', a: 'Sağlık hizmetlerinde reklam, mevzuata uygun ve bilgilendirici metinlerle sınırlı şekilde mümkündür. Önce SEO ve Google İşletme Profili temelini kurmak, reklamı daha verimli hale getirir.' },
      { q: 'Bursa dışından çalışmanız sorun olur mu?', a: 'Hayır. Tüm süreç video görüşme ve WhatsApp ile yürür; fotoğraf çekimi için yerel bir fotoğrafçıyla birlikte planlama yapabiliriz.' },
    ],
  },

  // ───────── PSİKOLOG ─────────
  'istanbul-psikolog': {
    vurgu: 'Danışan Bulan, Güven Veren Kişisel Site',
    kisaOzet: "İstanbul'da danışanlar psikoloğu 'semt + konu' veya 'online terapi' diye arar: 'kadıköy çift terapisi', 'beşiktaş kaygı terapisi' gibi. Etik kurallara uygun, sakin ve güven veren bir site, uzmanlık sayfaları ve bilgilendirici içerikle görünürlüğünüzü artırıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Yüz yüze seans ve online terapi birlikte aranıyor',
    yerelMetin: "İstanbul'da trafik ve zaman sıkıntısı nedeniyle danışanların önemli kısmı hem yakın bir ofis hem de online seans seçeneği arar. Kadıköy, Beşiktaş, Şişli ve Ataşehir gibi semtlerde yoğunlaşan aramalarda, ofis konumunu ve online seans seçeneğini birlikte anlatan sayfalar daha fazla danışan adayına ulaşır.",
    tablo: [
      { bolge: 'Kadıköy / Moda / Ataşehir', arama: 'kadıköy çift terapisi', oneri: 'Çift ve aile terapisi sayfası, ilk görüşme süreci.' },
      { bolge: 'Beşiktaş / Şişli / Nişantaşı', arama: 'beşiktaş psikolog', oneri: 'Uzmanlık alanları ve yaklaşım sayfası.' },
      { bolge: 'Tüm İstanbul (online)', arama: 'online terapi istanbul', oneri: 'Online seansın nasıl işlediğini anlatan sade rehber.' },
    ],
    sss: [
      { q: 'Danışan yorumlarını sitemde paylaşabilir miyim?', a: 'Gizlilik ve etik kurallar nedeniyle danışan yorumları ve sonuç iddiaları paylaşılmamalıdır. Eğitim, uzmanlık alanı ve yaklaşımınızı anlatan içerik güven oluşturur.' },
      { q: 'Online terapi aramalarında İstanbul dışından danışan gelir mi?', a: 'Evet, online seans sunuyorsanız şehir dışından da danışan gelebilir. Bunu sitede açıkça belirtmek ve seans sürecini anlatmak bu aramalarda görünürlüğü destekler.' },
    ],
  },
  'ankara-psikolog': {
    vurgu: 'Etik Kurallara Uygun Görünürlük',
    kisaOzet: "Ankara'da danışanlar psikoloğu Çankaya, Kızılay ve Çayyolu gibi semt adlarıyla ve 'öğrenci', 'sınav kaygısı' gibi konularla arar. Sakin ve güven veren bir site, uzmanlık sayfaları ve bilgilendirici içerikle danışan adaylarının sizi bulmasını kolaylaştırıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Üniversite şehri: öğrenci ve sınav dönemi aramaları',
    yerelMetin: "Ankara'da çok sayıda üniversite bulunduğu için genç yetişkinlerin kaygı, sınav stresi ve uyum sorunlarıyla ilgili aramaları belirgindir. Çankaya ve Kızılay merkezde ofis arayanların yanında, batı yerleşimlerinde aile ve çocuk-ergen terapisi aramaları öne çıkar.",
    tablo: [
      { bolge: 'Kızılay / Çankaya', arama: 'çankaya psikolog', oneri: 'Uzmanlık alanları, ilk görüşme süreci, ulaşım bilgisi.' },
      { bolge: 'Çayyolu / Ümitköy', arama: 'çayyolu çocuk psikoloğu', oneri: 'Çocuk ve ergen çalışmaları için ebeveyne yönelik sade içerik.' },
      { bolge: 'Kampüs çevreleri (online)', arama: 'sınav kaygısı terapi ankara', oneri: 'Sınav dönemlerine göre güncellenen bilgilendirici yazılar.' },
    ],
    sss: [
      { q: 'Psikolog sitesinde hangi bilgiler mutlaka olmalı?', a: 'Eğitim ve uzmanlık bilgisi, çalıştığınız konular, seans biçimi (yüz yüze/online), gizlilik ilkeleri ve kolay iletişim yolu. Abartılı iddialar yerine sade ve sıcak bir dil tercih edilmelidir.' },
      { q: 'Sınav dönemi içerikleri ne zaman yayınlanmalı?', a: 'Arama ilgisi sınav dönemlerinden önce artar. İçeriklerin birkaç hafta önce yayında ve Google tarafından taranmış olması gerekir.' },
    ],
  },
  'izmir-psikolog': {
    vurgu: 'Danışan Bulan, Güven Veren Kişisel Site',
    kisaOzet: "İzmir'de danışanlar psikoloğu Alsancak, Karşıyaka ve Bornova gibi semt adlarıyla ya da online seans seçeneğiyle arar. Etik kurallara uygun, sakin bir site, uzmanlık sayfaları ve bilgilendirici içerikle görünürlüğünüzü artırıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Semt yakınlığı ve online seans dengesi',
    yerelMetin: "İzmir'de danışanlar genellikle kendi yakasındaki ofisi tercih eder; Karşıyaka'daki biri Alsancak yerine yakınında arar. Bornova çevresindeki üniversite nüfusu ise genç yetişkin ve öğrenci odaklı aramaları artırır. Ofis konumunu ve online seans seçeneğini birlikte anlatmak iki kitleyi de karşılar.",
    tablo: [
      { bolge: 'Alsancak / Konak', arama: 'alsancak psikolog', oneri: 'Uzmanlık ve yaklaşım sayfası, merkezi ofis bilgisi.' },
      { bolge: 'Karşıyaka / Bostanlı', arama: 'karşıyaka aile danışmanı', oneri: 'Aile ve çift çalışmaları için bilgilendirici sayfa.' },
      { bolge: 'Bornova (öğrenci nüfusu)', arama: 'bornova online terapi', oneri: 'Online seans süreci ve öğrencilere yönelik sade içerik.' },
    ],
    sss: [
      { q: 'Psikologlar Google Ads kullanabilir mi?', a: 'Sağlıkla ilgili alanlarda reklam politikaları ve meslek etiği nedeniyle temkinli olunmalıdır. Çoğu psikolog için SEO, bilgilendirici içerik ve Google İşletme Profili daha uygun ve sürdürülebilir bir yoldur.' },
      { q: 'Blog yazmak gerçekten danışan getirir mi?', a: 'Danışanların aklındaki soruları sade dille yanıtlayan yazılar, sizi tanımadan önce güven oluşturur ve yapay zekâ aramalarında kaynak gösterilme şansı yaratır. Etkisi zamanla birikir.' },
    ],
  },
  'kocaeli-psikolog': {
    vurgu: 'İzmit ve Gebze İçin Psikolog SEO',
    kisaOzet: "Kocaeli'de danışanlar psikoloğu İzmit ve Gebze gibi ilçe adlarıyla ya da online seans seçeneğiyle arar. İzmit merkezli ekibimizle etik kurallara uygun, sakin bir site ve bilgilendirici içerik hazırlıyoruz; gerektiğinde yüz yüze görüşebiliriz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Az rakip, yüksek güven ihtiyacı',
    yerelMetin: "Kocaeli'de büyük şehirlere göre daha az psikolog dijitalde aktif olduğu için iyi hazırlanmış bir site ve eksiksiz harita kaydı fark yaratabilir. Sanayi çalışanlarının yoğun olduğu ilçelerde iş stresi ve tükenmişlik, Gebze ve Darıca'da ise aile ve çocuk-ergen çalışmalarıyla ilgili aramalar öne çıkar.",
    tablo: [
      { bolge: 'İzmit merkez', arama: 'izmit psikolog', oneri: 'Uzmanlık alanları, ilk görüşme süreci ve ofis bilgisi.' },
      { bolge: 'Gebze / Darıca', arama: 'gebze çocuk psikoloğu', oneri: 'Ebeveyne yönelik sade, güven veren içerik.' },
      { bolge: 'Sanayi ilçeleri (online)', arama: 'tükenmişlik terapi online', oneri: 'İş stresi ve tükenmişlik üzerine bilgilendirici yazılar.' },
    ],
    sss: [
      { q: 'Kocaeli için yüz yüze çalışabiliyor musunuz?', a: "Evet. İzmit merkezli bir ekibiz; Kocaeli'deki psikologlarla gerektiğinde yüz yüze görüşebiliyor, süreci WhatsApp ve video görüşmeyle de yürütebiliyoruz." },
      { q: 'Ofisim yok, sadece online çalışıyorum; site yine de faydalı mı?', a: 'Evet. Online çalışan psikologlar için site, danışan adayının sizi tanıdığı tek yer olabilir. Uzmanlık, yaklaşım ve seans sürecini anlatan sade bir site güven oluşturur.' },
    ],
  },
  'bursa-psikolog': {
    vurgu: 'Etik Kurallara Uygun Görünürlük',
    kisaOzet: "Bursa'da danışanlar psikoloğu Nilüfer, Osmangazi ve Görükle çevresi gibi bölge adlarıyla ya da online seans seçeneğiyle arar. Sakin ve güven veren bir site, uzmanlık sayfaları ve bilgilendirici içerikle görünürlüğünüzü artırıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Nilüfer merkezli aramalar ve üniversite çevresi',
    yerelMetin: "Bursa'da psikolog aramaları Nilüfer ve Osmangazi'de yoğunlaşır. Görükle çevresindeki üniversite nüfusu genç yetişkin ve öğrenci odaklı aramaları artırırken, merkez ilçelerde aile, çift ve çocuk-ergen çalışmaları öne çıkar.",
    tablo: [
      { bolge: 'Nilüfer / FSM Bulvarı', arama: 'nilüfer psikolog', oneri: 'Uzmanlık ve yaklaşım sayfası, ofis bilgisi.' },
      { bolge: 'Osmangazi / Yıldırım', arama: 'bursa aile danışmanlığı', oneri: 'Aile ve çift çalışmaları için bilgilendirici içerik.' },
      { bolge: 'Görükle (öğrenci nüfusu)', arama: 'görükle psikolog', oneri: 'Öğrencilere yönelik online seans bilgisi.' },
    ],
    sss: [
      { q: 'Psikolog sitesi ne kadar sürede yayına girer?', a: 'Kapsama göre değişmekle birlikte sade bir kişisel site genellikle birkaç hafta içinde yayına alınır. İçeriklerin sizin onayınızla hazırlanması süreyi etkileyen en önemli etkendir.' },
      { q: 'Bursa dışından çalışmanız sorun olur mu?', a: 'Hayır. Tüm süreç video görüşme ve WhatsApp ile yürür; içerik onayı ve raporlama çevrim içi yapılır.' },
    ],
  },

  // ───────── VETERİNER ─────────
  'istanbul-veteriner': {
    vurgu: 'Klinik Sitesi, Harita ve Acil Aramalar',
    kisaOzet: "İstanbul'da evcil hayvan sahipleri veterineri çoğunlukla 'semt + veteriner' veya 'nöbetçi veteriner' diye arar. Mobilde hızlı, acil iletişimi öne çıkaran bir site, Google İşletme Profili ve hizmet sayfalarıyla kliniğinizi bu aramalarda görünür kılıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Acil ve gece aramaları belirleyici',
    yerelMetin: "İstanbul'da veteriner aramalarının önemli kısmı acil durumlarda, çoğu zaman gece ve telefondan yapılır. Kadıköy, Beşiktaş ve Ataşehir gibi evcil hayvan sahiplerinin yoğun olduğu semtlerde, çalışma saatlerini ve acil durum bilgisini net gösteren klinikler öne çıkar.",
    tablo: [
      { bolge: 'Kadıköy / Moda / Ataşehir', arama: 'kadıköy veteriner', oneri: 'Hizmet listesi, çalışma saatleri, tek dokunuşla arama.' },
      { bolge: 'Beşiktaş / Şişli / Sarıyer', arama: 'gece açık veteriner beşiktaş', oneri: 'Acil başvuru bilgisi ve güncel saatler.' },
      { bolge: 'Beylikdüzü / Başakşehir', arama: 'beylikdüzü kedi kısırlaştırma', oneri: 'İşlem öncesi-sonrası bilgilendirici sayfa.' },
    ],
    sss: [
      { q: '7/24 açık değilim, acil aramalarda nasıl görünürüm?', a: 'Gerçek çalışma saatlerinizi doğru göstermek en önemlisidir. Saat dışında başvurulabilecek yolu (telefon, yönlendirme) sitede açıkça belirtmek güven oluşturur; açık olmadığınız saatlerde açık görünmek ise yanıltıcıdır.' },
      { q: 'Veteriner kliniği için sosyal medya yeterli değil mi?', a: "Sosyal medya bağ kurmak için iyidir ama acil ve 'yakınımdaki' aramalar Google'da yapılır. Google İşletme Profili ve hızlı bir site bu aramaları karşılar." },
    ],
  },
  'ankara-veteriner': {
    vurgu: 'Klinik Sitesi ve Yerel Görünürlük',
    kisaOzet: "Ankara'da evcil hayvan sahipleri veterineri Çankaya, Ümitköy, Etimesgut ve Keçiören gibi semt adlarıyla arar. Hizmet sayfaları, Google İşletme Profili ve acil iletişimi öne çıkaran mobil siteyle kliniğinizi bu aramalarda görünür kılıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Bahçeli konut bölgelerinde köpek sahipleri',
    yerelMetin: "Ankara'nın batısındaki Ümitköy, Çayyolu ve İncek gibi bahçeli konut bölgelerinde köpek sahiplerinin aşı, parazit ve davranış danışmanlığı aramaları öne çıkar. Merkez semtlerde ise kedi sahiplerinin kısırlaştırma ve genel muayene aramaları yoğundur.",
    tablo: [
      { bolge: 'Ümitköy / Çayyolu / İncek', arama: 'çayyolu veteriner', oneri: 'Aşı takvimi ve köpek bakımı rehberleri.' },
      { bolge: 'Çankaya / Kızılay', arama: 'çankaya kedi veteriner', oneri: 'Kısırlaştırma ve genel muayene sayfaları.' },
      { bolge: 'Etimesgut / Keçiören', arama: 'etimesgut acil veteriner', oneri: 'Acil başvuru bilgisi, güncel saatler, kolay arama.' },
    ],
    sss: [
      { q: 'Aşı takvimi gibi içerikler neden önemli?', a: 'Evcil hayvan sahipleri bu soruları sık arar. Sade ve doğru bilgi veren içerik hem güven oluşturur hem de kliniğinizi bu aramalarda görünür kılar.' },
      { q: 'Google yorumları veteriner seçimini etkiler mi?', a: 'Evet, harita sonuçlarında yorumlar önemli bir güven sinyalidir. Yorumlar teşvik verilmeden, memnun kalan hayvan sahiplerinden istenmelidir.' },
    ],
  },
  'izmir-veteriner': {
    vurgu: 'Klinik Sitesi, Harita ve Acil Aramalar',
    kisaOzet: "İzmir'de evcil hayvan sahipleri veterineri Karşıyaka, Bornova, Buca ve Urla gibi semt adlarıyla arar. Mobilde hızlı, acil iletişimi öne çıkaran site, hizmet sayfaları ve Google İşletme Profili ile kliniğinizin görünürlüğünü artırıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Sahil yerleşimleri ve yaz nüfusu',
    yerelMetin: "İzmir'de merkez semtlerin yanında Urla, Çeşme ve Seferihisar gibi sahil yerleşimlerinde yaz aylarında evcil hayvanıyla gelen nüfus artar. Bu dönemde 'yakınımdaki veteriner' ve acil aramaları yükselir; güncel saatleri ve konumu doğru gösteren klinikler bu talebi karşılar.",
    tablo: [
      { bolge: 'Karşıyaka / Bostanlı', arama: 'karşıyaka veteriner', oneri: 'Hizmet listesi, saatler, tek dokunuşla arama.' },
      { bolge: 'Bornova / Buca', arama: 'bornova kedi kısırlaştırma', oneri: 'İşlem rehberi ve randevu kolaylığı.' },
      { bolge: 'Urla / Çeşme / Seferihisar', arama: 'urla veteriner', oneri: 'Yaz dönemi saatleri ve acil başvuru bilgisi.' },
    ],
    sss: [
      { q: 'Yaz döneminde saatlerimi değiştiriyorum, bunu nasıl göstermeliyim?', a: 'Google İşletme Profili\'nde özel çalışma saatlerini güncelleyin ve sitede dönemsel saat bilgisini açıkça yazın. Yanlış saat bilgisi kötü deneyim ve olumsuz yoruma yol açabilir.' },
      { q: 'Pet shop ürünlerini de siteye ekleyebilir miyim?', a: 'Evet; ancak klinik hizmetleri ile ürün satışını ayrı bölümlerde sunmak, hem kullanıcı hem arama motoru için daha anlaşılır bir yapı sağlar.' },
    ],
  },
  'kocaeli-veteriner': {
    vurgu: 'İzmit, Kartepe ve Gebze İçin Klinik SEO',
    kisaOzet: "Kocaeli'de evcil hayvan sahipleri veterineri İzmit, Kartepe, Başiskele ve Gebze gibi ilçe adlarıyla arar. İzmit merkezli ekibimizle hizmet sayfaları, Google İşletme Profili ve acil iletişimi öne çıkaran siteyi birlikte kuruyoruz; gerektiğinde yüz yüze görüşebiliriz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Bahçeli evler ve geniş ilçe yapısı',
    yerelMetin: "Kartepe ve Başiskele gibi bahçeli konutların yoğun olduğu ilçelerde köpek sahiplerinin aramaları öne çıkar; uzak mesafeler nedeniyle 'eve gelen veteriner' ve acil aramaları da belirgindir. Gebze ve Darıca'da ise apartman yaşamına bağlı kedi sahiplerinin aramaları yoğundur.",
    tablo: [
      { bolge: 'İzmit merkez', arama: 'izmit veteriner', oneri: 'Hizmet listesi, saatler ve merkezi konum bilgisi.' },
      { bolge: 'Kartepe / Başiskele', arama: 'kartepe veteriner', oneri: 'Köpek bakımı içerikleri, varsa evde muayene bilgisi.' },
      { bolge: 'Gebze / Darıca', arama: 'gebze kedi veteriner', oneri: 'Kısırlaştırma ve aşı sayfaları, kolay randevu.' },
    ],
    sss: [
      { q: 'Kocaeli için yüz yüze çalışabiliyor musunuz?', a: "Evet. İzmit merkezli bir ekibiz; Kocaeli'deki kliniklerle gerektiğinde yüz yüze görüşebiliyor, fotoğraf ve içerik sürecini birlikte planlayabiliyoruz." },
      { q: 'Evde muayene hizmetimi sitede nasıl anlatmalıyım?', a: 'Hangi ilçelere gittiğinizi, hangi işlemlerin evde yapılabildiğini ve randevu yolunu net yazın. Gidemediğiniz bölgeleri hizmet bölgesi olarak göstermemek gerekir.' },
    ],
  },
  'bursa-veteriner': {
    vurgu: 'Klinik Sitesi ve Yerel Görünürlük',
    kisaOzet: "Bursa'da evcil hayvan sahipleri veterineri Nilüfer, Osmangazi, Mudanya ve Görükle gibi bölge adlarıyla arar. Hizmet sayfaları, Google İşletme Profili ve acil iletişimi öne çıkaran mobil siteyle kliniğinizin görünürlüğünü artırıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Nilüfer ve sahil ilçelerinde farklı talepler',
    yerelMetin: "Bursa'da Nilüfer ve Görükle çevresindeki site yaşamı kedi ve köpek sahiplerinin genel muayene, aşı ve kısırlaştırma aramalarını artırır. Mudanya ve Gemlik gibi sahil ilçelerinde ise yaz aylarında acil ve 'yakınımdaki veteriner' aramaları yükselir.",
    tablo: [
      { bolge: 'Nilüfer / Görükle', arama: 'nilüfer veteriner', oneri: 'Hizmet listesi, aşı ve kısırlaştırma sayfaları.' },
      { bolge: 'Osmangazi / Yıldırım', arama: 'osmangazi acil veteriner', oneri: 'Acil başvuru bilgisi, güncel saatler.' },
      { bolge: 'Mudanya / Gemlik', arama: 'mudanya veteriner', oneri: 'Eksiksiz harita kaydı ve dönemsel saat bilgisi.' },
    ],
    sss: [
      { q: 'Veteriner kliniği Google Ads kullanabilir mi?', a: 'Kullanabilir; ancak kampanya klinik çevresiyle sınırlanmalı ve acil/hizmet aramalarına odaklanmalıdır. Önce Google İşletme Profili ve sitenin hazır olması reklamı daha verimli hale getirir.' },
      { q: 'Bursa dışından çalışmanız sorun olur mu?', a: 'Hayır. Tüm süreç video görüşme ve WhatsApp ile yürür; içerik onayı ve raporlama çevrim içi yapılır.' },
    ],
  },

  // ───────── MALİ MÜŞAVİR ─────────
  'istanbul-mali-musavir': {
    vurgu: 'Muhasebe Bürosu İçin Web Sitesi ve SEO',
    kisaOzet: "İstanbul'da girişimciler ve KOBİ'ler mali müşaviri 'semt + muhasebe' veya 'şirket kuruluşu' diye arar. Meslek kurallarına uygun, bilgilendirici hizmet sayfaları ve rehber içeriklerle büronuzun organik görünürlüğünü artırıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Girişimci ve e-ticaret yoğunluğu',
    yerelMetin: "İstanbul'da yeni şirket kuranlar, e-ticaret satıcıları ve serbest meslek sahipleri mali müşaviri çoğunlukla internetten bulur. Şişli, Ataşehir ve Maslak gibi iş merkezlerinin yanında İkitelli ve Beylikdüzü çevresindeki sanayi ve ticaret firmaları da yerel arama yapar. Hedef kitleye göre ayrılmış hizmet sayfaları doğru müşteriyi getirir.",
    tablo: [
      { bolge: 'Şişli / Mecidiyeköy / Maslak', arama: 'şişli şirket kuruluşu', oneri: 'Şirket kuruluş süreci rehberi, belge listesi.' },
      { bolge: 'Ataşehir / Kadıköy', arama: 'ataşehir mali müşavir', oneri: 'Hizmet sayfaları ve kolay iletişim.' },
      { bolge: 'Tüm İstanbul (online)', arama: 'e-ticaret muhasebe istanbul', oneri: 'E-ticaret ve pazaryeri satıcılarına yönelik sayfa.' },
    ],
    sss: [
      { q: 'Mali müşavirler reklam verebilir mi?', a: 'Meslek kuralları iş elde etmeye yönelik reklamı sınırlar. Bu nedenle bilgilendirici içerik, hizmet sayfaları ve Google İşletme Profili daha uygun yollardır; kesin kural için meslek odanızın güncel düzenlemesini kontrol edin.' },
      { q: 'E-ticaret satıcılarına yönelik ayrı sayfa açmalı mıyım?', a: 'Bu alanda hizmet veriyorsanız evet. Pazaryeri satıcılarının sık sorduğu konuları (şirket türü, e-fatura, vergi yükümlülükleri) sade dille anlatan bir sayfa doğru müşteriyi getirir.' },
    ],
  },
  'ankara-mali-musavir': {
    vurgu: 'Muhasebe Bürosu İçin Web Sitesi ve SEO',
    kisaOzet: "Ankara'da işletmeler mali müşaviri Ostim, İvedik, Çankaya ve Kızılay gibi bölge adlarıyla arar. Meslek kurallarına uygun hizmet sayfaları ve bilgilendirici rehberlerle büronuzun organik görünürlüğünü artırıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Sanayi bölgeleri ve kamu ihaleleriyle çalışan firmalar',
    yerelMetin: "Ankara'da Ostim ve İvedik organize sanayi bölgelerindeki üretici ve tedarikçi firmalar ile kamu ihalelerine giren şirketler, sektörü bilen mali müşavir arar. Merkez semtlerde ise serbest meslek sahipleri ve yeni girişimler öne çıkar. Hedef kitleye göre hazırlanmış sayfalar doğru müşteriyle buluşmayı kolaylaştırır.",
    tablo: [
      { bolge: 'Ostim / İvedik OSB', arama: 'ostim muhasebe bürosu', oneri: 'Üretim ve sanayi firmalarına yönelik hizmet sayfası.' },
      { bolge: 'Çankaya / Kızılay', arama: 'çankaya mali müşavir', oneri: 'Serbest meslek ve şirket kuruluşu rehberleri.' },
      { bolge: 'Tüm Ankara', arama: 'ihale dosyası muhasebe ankara', oneri: 'İhaleye giren firmaların ihtiyaçlarını anlatan sayfa.' },
    ],
    sss: [
      { q: 'Sitemde hizmet fiyatlarını yazmalı mıyım?', a: 'Mali müşavirlik ücretleri işin kapsamına göre değiştiği için kesin fiyat yazmak yerine kapsamı anlatmak ve teklif yolunu net göstermek daha doğrudur.' },
      { q: 'Rehber yazılar müşteri getirir mi?', a: 'İşletmelerin sık sorduğu konuları sade dille anlatan yazılar güven oluşturur, aramalarda görünürlüğü artırır ve yapay zekâ aramalarında kaynak gösterilme şansı yaratır.' },
    ],
  },
  'izmir-mali-musavir': {
    vurgu: 'Muhasebe Bürosu İçin Web Sitesi ve SEO',
    kisaOzet: "İzmir'de işletmeler mali müşaviri Bayraklı, Konak, Çiğli ve Kemalpaşa gibi bölge adlarıyla arar. Meslek kurallarına uygun hizmet sayfaları ve rehber içeriklerle büronuzun organik görünürlüğünü artırıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'İhracatçılar, sanayi ve iş merkezleri',
    yerelMetin: "İzmir'de Bayraklı ve Konak'taki iş merkezlerinin yanında Çiğli ve Kemalpaşa çevresindeki organize sanayi bölgeleri ile ihracat yapan firmalar mali müşavir arar. Dış ticaret işlemleri ve ihracat konularında bilgi veren sayfalar bu firmalara ulaşmayı kolaylaştırır.",
    tablo: [
      { bolge: 'Bayraklı / Konak', arama: 'bayraklı mali müşavir', oneri: 'Kurumsal hizmet sayfaları ve şirket kuruluşu rehberi.' },
      { bolge: 'Çiğli / Atatürk OSB', arama: 'çiğli muhasebe bürosu', oneri: 'Sanayi firmalarına yönelik hizmet sayfası.' },
      { bolge: 'Kemalpaşa / Torbalı', arama: 'ihracat muhasebesi izmir', oneri: 'Dış ticaret işlemleri üzerine bilgilendirici içerik.' },
    ],
    sss: [
      { q: 'İhracat yapan firmalara yönelik içerik nasıl olmalı?', a: 'Firmaların sık sorduğu işlemleri (ihracat faturası, KDV iadesi süreci gibi) genel çerçevede, sade dille anlatan içerikler güven oluşturur. Kesin vergi tavsiyesi yerine sürecin ana hatlarını anlatmak gerekir.' },
      { q: 'İzmir dışından çalışmanız sorun olur mu?', a: 'Hayır. Tüm süreç video görüşme ve WhatsApp ile yürür; içerik onayı ve raporlama çevrim içi yapılır.' },
    ],
  },
  'kocaeli-mali-musavir': {
    vurgu: 'İzmit ve Gebze İçin Muhasebe Bürosu SEO',
    kisaOzet: "Kocaeli'de işletmeler mali müşaviri İzmit, Gebze ve Dilovası gibi ilçe adlarıyla arar; sanayi firmaları ve tedarikçiler öne çıkar. İzmit merkezli ekibimizle meslek kurallarına uygun site ve SEO çalışması yapıyoruz; gerektiğinde yüz yüze görüşebiliriz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Organize sanayi bölgeleri ve tedarikçi firmalar',
    yerelMetin: "Kocaeli'de Gebze, Dilovası ve TOSB gibi organize sanayi bölgelerindeki üretici ve tedarikçi firmalar, sektörü bilen mali müşavir arar. İzmit merkezde ise esnaf, serbest meslek sahipleri ve yeni kurulan şirketler öne çıkar. Bu iki kitleye ayrı hizmet sayfaları hazırlamak doğru müşteriyi getirir.",
    tablo: [
      { bolge: 'İzmit merkez', arama: 'izmit mali müşavir', oneri: 'Esnaf ve şirket kuruluşu rehberleri, kolay iletişim.' },
      { bolge: 'Gebze / Dilovası / Çayırova', arama: 'gebze muhasebe bürosu', oneri: 'Sanayi ve tedarikçi firmalara yönelik hizmet sayfası.' },
      { bolge: 'Körfez / Derince', arama: 'derince mali müşavir', oneri: 'Lojistik ve liman çevresi firmalarına yönelik içerik.' },
    ],
    sss: [
      { q: 'Kocaeli için yüz yüze çalışabiliyor musunuz?', a: "Evet. İzmit merkezli bir ekibiz; Kocaeli'deki mali müşavirlik bürolarıyla gerektiğinde yüz yüze görüşebiliyor, süreci WhatsApp ve video görüşmeyle de yürütebiliyoruz." },
      { q: 'Sanayi firmalarına yönelik sayfa neden ayrı olmalı?', a: 'Sanayi firmalarının ihtiyaçları (maliyet muhasebesi, teşvikler, dış ticaret) esnafın ihtiyaçlarından farklıdır. Ayrı sayfa, hem aramada hem görüşmede doğru beklentiyi kurar.' },
    ],
  },
  'bursa-mali-musavir': {
    vurgu: 'Muhasebe Bürosu İçin Web Sitesi ve SEO',
    kisaOzet: "Bursa'da işletmeler mali müşaviri Nilüfer, Osmangazi ve İnegöl gibi bölge adlarıyla arar; otomotiv, tekstil ve mobilya firmaları öne çıkar. Meslek kurallarına uygun hizmet sayfaları ve rehber içeriklerle büronuzun görünürlüğünü artırıyoruz. Sıralama garantisi verilmez.",
    yerelBaslik: 'Otomotiv, tekstil ve mobilya sanayisi',
    yerelMetin: "Bursa'da Nilüfer OSB ve DOSAB çevresindeki otomotiv yan sanayi, Osmangazi ve Yıldırım'daki tekstil firmaları ve İnegöl'deki mobilya üreticileri, sektörünü bilen mali müşavir arar. Sektörlere göre ayrılmış hizmet sayfaları ve ihracat konularında bilgilendirici içerik doğru müşteriyi getirir.",
    tablo: [
      { bolge: 'Nilüfer / DOSAB', arama: 'nilüfer mali müşavir', oneri: 'Sanayi firmalarına yönelik hizmet sayfası.' },
      { bolge: 'Osmangazi / Yıldırım', arama: 'osmangazi muhasebe bürosu', oneri: 'Esnaf ve şirket kuruluşu rehberleri.' },
      { bolge: 'İnegöl', arama: 'inegöl mali müşavir', oneri: 'Mobilya üreticileri ve ihracat işlemleri içeriği.' },
    ],
    sss: [
      { q: 'İnegöl için ayrı sayfa açmak mantıklı mı?', a: 'İnegöl\'deki firmalarla düzenli çalışıyorsanız evet. İlçenin ticari yapısına özgü bilgiler içeren kısa ama özgün bir sayfa, ilçe aramalarında görünürlüğü artırır.' },
      { q: 'Bursa dışından çalışmanız sorun olur mu?', a: 'Hayır. Tüm süreç video görüşme ve WhatsApp ile yürür; içerik onayı ve raporlama çevrim içi yapılır.' },
    ],
  },
}

export const sektorSehir: SektorSehirVeri[] = ssMeslekler.flatMap((meslek) =>
  ssSehirler.map((sehir) => ({
    slug: `${sehir.key}-${meslek.key}-seo`,
    sehir,
    meslek,
    ...icerik[`${sehir.key}-${meslek.key}`],
  })),
)

export function sektorSehirBul(slug: string) {
  return sektorSehir.find((s) => s.slug === slug)
}
