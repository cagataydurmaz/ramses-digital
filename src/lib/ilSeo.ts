// Yeni il / ilçe SEO sayfaları (veri odaklı). Her kayıt bir sayfa üretir: /{slug}-seo
// İçerik o ilin genel, kamuya açık ekonomik ve coğrafi özelliklerine dayanır;
// müşteri, sonuç veya "orada ofisimiz var" gibi iddia içermez — hizmet uzaktan verilir.
// Yeni il eklemek için bu diziye bir kayıt eklemek ve src/app/{slug}-seo/page.tsx
// dosyasını (2 satır) oluşturmak yeterlidir; site haritası, footer, şehirler sayfası
// ve llms.txt listeyi buradan otomatik alır.

export interface IlSeoVeri {
  slug: string // url: /{slug}-seo
  ad: string // "Ağrı"
  bulunma: string // "Ağrı'da"
  icin: string // iyelik: "Ağrı'nın"
  yonelme: string // "Ağrı'ya"
  ust?: { ad: string; slug: string } // ilçe ise bağlı olduğu il (sayfası varsa)
  ozet: string // hero altı açıklama
  bolgeler: string[] // hero altında listelenen ilçe/bölgeler
  ilceler: { ad: string; not: string }[]
  sektorler: { ad: string; not: string }[]
  aramalar: { tur: string; ornek: string; rekabet: string; yaklasim: string }[]
  sss: { q: string; a: string }[]
  ilgili?: { label: string; href: string }[]
}

const soruSatiri = {
  tur: 'Soru odaklı',
  ornek: 'seo ne kadar sürede sonuç verir',
  rekabet: 'Değişken',
  yaklasim: 'Net cevap veren rehber içerikler; güven ve marka bilinirliği sağlar.',
}

export const ilSeo: IlSeoVeri[] = [
  {
    slug: 'agri',
    ad: 'Ağrı',
    bulunma: "Ağrı'da",
    icin: "Ağrı'nın",
    yonelme: "Ağrı'ya",
    ozet:
      "Doğubayazıt'tan Patnos'a Ağrı işletmeleri için yerel SEO. Rekabetin henüz düşük olduğu Ağrı aramalarında, doğru kurulmuş bir site ve işletme profiliyle Google'da öne çıkın.",
    bolgeler: ['Merkez', 'Doğubayazıt', 'Patnos', 'Diyadin', 'Eleşkirt', 'Tutak', 'Hamur', 'Taşlıçay'],
    ilceler: [
      { ad: 'Merkez', not: 'Kamu kurumları, üniversite, sağlık ve ticaret hizmetlerinin toplandığı merkez; avukat, klinik, kurs ve esnaf aramalarında harita görünürlüğü belirleyici.' },
      { ad: 'Doğubayazıt', not: "Ağrı Dağı ve İshak Paşa Sarayı'yla turizm, Gürbulak sınır kapısıyla ticaret ve lojistik. Konaklama, tur ve nakliye işletmeleri için çok dilli sayfalar fark yaratır." },
      { ad: 'Patnos', not: 'Tarım ve hayvancılık ağırlıklı, nüfusu yüksek ilçe; yem, veteriner, tarım ekipmanı ve yerel hizmet aramaları öne çıkar.' },
      { ad: 'Diyadin', not: 'Kaplıcalarıyla bilinen ilçe; termal tesis ve konaklama işletmeleri için gerçek fotoğraf, fiyat ve rezervasyon bilgisi içeren sayfalar.' },
    ],
    sektorler: [
      { ad: 'Turizm ve konaklama', not: "Ağrı Dağı tırmanışı, İshak Paşa Sarayı ve kaplıca turizmi için Türkçe ve İngilizce sayfalar, rezervasyon ve harita kaydı." },
      { ad: 'Sınır ticareti ve lojistik', not: 'Gürbulak üzerinden çalışan nakliye, gümrük ve ticaret firmaları için hizmet ve rota sayfaları, B2B iletişim formu.' },
      { ad: 'Hayvancılık ve tarım', not: 'Yem, besi, süt ürünleri ve tarım ekipmanı satan işletmeler için ürün sayfaları ve yerel arama görünürlüğü.' },
      { ad: 'Sağlık, eğitim ve hukuk', not: 'Klinik, kurs ve hukuk büroları için hizmet başına sayfa, sık sorulan sorular ve Google İşletme Profili yönetimi.' },
    ],
    aramalar: [
      { tur: 'Genel il araması', ornek: 'ağrı seo ajansı', rekabet: 'Düşük', yaklasim: 'Rekabet düşük; güçlü bir hizmet sayfasıyla kısa sürede ilk sayfa hedeflenebilir.' },
      { tur: 'İlçe + hizmet', ornek: 'doğubayazıt otel', rekabet: 'Düşük', yaklasim: 'İlçeye özel sayfa, gerçek fotoğraflar ve harita kaydı.' },
      { tur: 'Sektör + il', ornek: 'ağrı nakliye firması', rekabet: 'Düşük', yaklasim: 'Hizmet ve güzergâh sayfaları, hızlı iletişim (WhatsApp, telefon).' },
      soruSatiri,
    ],
    sss: [
      { q: "Ağrı'da SEO yapmak mantıklı mı, burada internetten arama yapılıyor mu?", a: "Evet. Ağrı'da da müşteriler hizmet ararken önce Google'a ve haritalara bakıyor. Büyük şehirlere göre rekabet çok daha düşük olduğu için, doğru kurulmuş bir site ve işletme profiliyle görece kısa sürede üst sıralara çıkmak mümkün." },
      { q: "Doğubayazıt'taki turizm işletmeleri için neler yapılmalı?", a: 'Türkçe ve İngilizce sayfalar, gerçek fotoğraflar, net fiyat ve rezervasyon yolu, Google İşletme Profili ve yorum yönetimi. Yabancı ziyaretçiler genellikle İngilizce arama yaptığı için ikinci dil önemlidir.' },
      { q: "Fiziksel olarak Ağrı'da mısınız?", a: "Hayır, Kocaeli kökenliyiz ve Ağrı'daki işletmelere tamamen uzaktan hizmet veriyoruz. Görüşme, onay ve raporlama online yürütülür. Canlı referanslarımızı portföyümüzde inceleyebilirsiniz." },
      { q: "Ağrı'da SEO sonuçları ne kadar sürede görülür?", a: 'Google İşletme Profili ve harita sonuçları birkaç hafta içinde görünür olabilir. Rekabet düşük olduğu için organik sıralamalar büyük şehirlere göre daha hızlı oturabilir; yine de sıralama garantisi verilemez.' },
    ],
  },
  {
    slug: 'sirnak',
    ad: 'Şırnak',
    bulunma: "Şırnak'ta",
    icin: "Şırnak'ın",
    yonelme: "Şırnak'a",
    ozet:
      "Cizre, Silopi ve İdil'den Şırnak merkeze, Şırnak işletmeleri için yerel SEO. Sınır ticareti, lojistik ve yerel hizmet aramalarında Google'da görünür olun.",
    bolgeler: ['Merkez', 'Cizre', 'Silopi', 'İdil', 'Uludere', 'Beytüşşebap', 'Güçlükonak'],
    ilceler: [
      { ad: 'Cizre', not: 'Bölgenin ticaret merkezlerinden; perakende, sağlık, eğitim ve hizmet işletmeleri yoğun. Harita görünürlüğü ve hizmet sayfaları belirleyici.' },
      { ad: 'Silopi', not: "Habur sınır kapısıyla dış ticaret, nakliye, gümrük müşavirliği ve lojistik firmaları; B2B iletişim ve hizmet sayfaları öne çıkar." },
      { ad: 'Merkez', not: 'Kamu kurumları ve üniversite çevresinde hizmet, sağlık ve eğitim işletmeleri.' },
      { ad: 'İdil', not: 'Tarım ve ticaret ağırlıklı ilçe; yerel esnaf ve hizmet aramaları için işletme profili ve basit, hızlı siteler.' },
    ],
    sektorler: [
      { ad: 'Dış ticaret ve lojistik', not: 'Habur üzerinden çalışan nakliye, gümrük ve ihracat firmaları için hizmet, güzergâh ve belge sayfaları; Arapça/İngilizce sürüm.' },
      { ad: 'Perakende ve toptan ticaret', not: 'Ürün grupları, toptan talep formu ve WhatsApp iletişimi; yerel aramalarda harita kaydı.' },
      { ad: 'Sağlık ve eğitim', not: 'Klinik, dershane ve kurslar için hizmet sayfaları, sık sorulan sorular ve yorum yönetimi.' },
      { ad: 'İnşaat ve yapı', not: 'Müteahhit, yapı malzemesi ve proje firmaları için referans projeler ve teklif formu.' },
    ],
    aramalar: [
      { tur: 'Genel il araması', ornek: 'şırnak seo ajansı', rekabet: 'Düşük', yaklasim: 'Rekabet çok düşük; tek bir güçlü sayfayla ilk sayfa hedeflenebilir.' },
      { tur: 'İlçe + hizmet', ornek: 'cizre web tasarım', rekabet: 'Düşük', yaklasim: 'İlçe adını doğal geçiren hizmet sayfası ve harita kaydı.' },
      { tur: 'Sektör + ilçe', ornek: 'silopi nakliye', rekabet: 'Düşük', yaklasim: 'Güzergâh, araç ve belge bilgisi içeren B2B sayfalar.' },
      soruSatiri,
    ],
    sss: [
      { q: "Şırnak'taki lojistik ve dış ticaret firmaları için SEO neden önemli?", a: 'Yurt içi ve yurt dışı müşteriler nakliye ve gümrük hizmetini çoğunlukla Google üzerinden arıyor. Hizmet, güzergâh ve belge bilgisini net veren, gerekirse Arapça/İngilizce sürümü olan bir site güven ve talep getirir.' },
      { q: "Cizre ve Silopi için ayrı çalışma yapılır mı?", a: "Evet. İnsanlar çoğu zaman il adı yerine doğrudan ilçe adıyla arar ('cizre ...', 'silopi ...'). İşletmenizin hizmet verdiği ilçeye göre sayfa ve anahtar kelime planı kuruyoruz." },
      { q: "Fiziksel olarak Şırnak'ta mısınız?", a: "Hayır, Kocaeli kökenliyiz ve Şırnak'taki işletmelere uzaktan hizmet veriyoruz. Tüm süreç online yürütülür." },
      { q: 'Ne kadar sürede sonuç alınır?', a: 'Harita ve işletme profili birkaç haftada, organik sıralamalar genellikle birkaç ayda oturur. Şırnak aramalarında rekabet düşük olduğu için süre kısalabilir; sıralama garantisi verilemez.' },
    ],
  },
  {
    slug: 'bingol',
    ad: 'Bingöl',
    bulunma: "Bingöl'de",
    icin: "Bingöl'ün",
    yonelme: "Bingöl'e",
    ozet:
      "Bingöl merkezden Solhan, Genç ve Karlıova'ya, Bingöl işletmeleri için yerel SEO. Bal, hayvancılık ve yerel hizmet aramalarında Google'da öne çıkın.",
    bolgeler: ['Merkez', 'Genç', 'Solhan', 'Karlıova', 'Kiğı', 'Adaklı', 'Yayladere', 'Yedisu'],
    ilceler: [
      { ad: 'Merkez', not: 'Üniversite, kamu kurumları ve ticaretin toplandığı merkez; sağlık, eğitim, hukuk ve esnaf aramalarında harita görünürlüğü önemli.' },
      { ad: 'Solhan', not: 'Yüzen adalarıyla bilinen doğa turizmi bölgesi; konaklama ve tur işletmeleri için gerçek fotoğraf ve harita kaydı.' },
      { ad: 'Genç', not: 'Tarım ve hayvancılık ağırlıklı ilçe; yerel üretici ve hizmet işletmeleri için basit, hızlı siteler.' },
      { ad: 'Karlıova', not: 'Hayvancılık ve yayla ekonomisi; besi, süt ürünleri ve tarım ekipmanı aramaları.' },
    ],
    sektorler: [
      { ad: 'Bal ve doğal ürünler', not: "Bingöl balı ve yöresel ürünler için online satış, ürün sayfaları ve Türkiye geneline satışta 'bingöl balı' gibi aramalarda görünürlük." },
      { ad: 'Hayvancılık ve tarım', not: 'Besi, yem ve tarım ekipmanı işletmeleri için ürün ve iletişim sayfaları.' },
      { ad: 'Doğa turizmi', not: 'Yüzen adalar ve yayla turizmi için konaklama ve tur sayfaları, rezervasyon bilgisi.' },
      { ad: 'Sağlık, eğitim ve hizmet', not: 'Klinik, kurs ve yerel hizmet işletmeleri için hizmet başına sayfa ve işletme profili.' },
    ],
    aramalar: [
      { tur: 'Genel il araması', ornek: 'bingöl seo', rekabet: 'Düşük', yaklasim: 'Rekabet düşük; güçlü bir hizmet sayfasıyla ilk sayfa hedeflenebilir.' },
      { tur: 'Ürün + il', ornek: 'bingöl balı satın al', rekabet: 'Orta', yaklasim: 'Ürün sayfası, gerçek fotoğraf, analiz/belge bilgisi ve online sipariş.' },
      { tur: 'Turizm', ornek: 'solhan yüzen adalar konaklama', rekabet: 'Düşük', yaklasim: 'Gerçek fotoğraflı tanıtım sayfası ve harita kaydı.' },
      soruSatiri,
    ],
    sss: [
      { q: 'Bingöl balı gibi yöresel ürünleri internetten satmak için ne gerekir?', a: 'Güven veren bir ürün sayfası (gerçek fotoğraf, menşe ve analiz bilgisi), kolay sipariş yolu (WhatsApp veya online ödeme) ve Türkiye genelindeki aramalarda görünürlük. Sahte ürün endişesi yüksek olduğu için belge ve şeffaflık en önemli satış argümanıdır.' },
      { q: "Fiziksel olarak Bingöl'de misiniz?", a: "Hayır, Kocaeli kökenliyiz ve Bingöl'deki işletmelere uzaktan hizmet veriyoruz. Tüm süreç online yürütülür." },
      { q: "Bingöl'de SEO ne kadar sürede sonuç verir?", a: 'Yerel aramalarda rekabet düşük olduğu için harita ve organik sonuçlar büyük şehirlere göre daha hızlı oturabilir. Türkiye geneline ürün satışında rekabet daha yüksektir ve süre uzar. Sıralama garantisi verilemez.' },
    ],
  },
  {
    slug: 'tunceli',
    ad: 'Tunceli',
    bulunma: "Tunceli'de",
    icin: "Tunceli'nin",
    yonelme: "Tunceli'ye",
    ozet:
      "Munzur Vadisi'nden Pertek ve Ovacık'a, Tunceli işletmeleri için yerel SEO. Doğa turizmi, yöresel ürün ve yerel hizmet aramalarında Google'da görünür olun.",
    bolgeler: ['Merkez', 'Ovacık', 'Pertek', 'Hozat', 'Mazgirt', 'Nazımiye', 'Pülümür', 'Çemişgezek'],
    ilceler: [
      { ad: 'Merkez', not: 'Üniversite ve kamu kurumları çevresinde hizmet, sağlık ve eğitim işletmeleri; harita görünürlüğü önemli.' },
      { ad: 'Ovacık', not: 'Munzur Vadisi ve doğa turizmi; kamp, pansiyon ve doğa aktivitesi işletmeleri için tanıtım ve rezervasyon sayfaları.' },
      { ad: 'Pertek', not: 'Keban Barajı kıyısında, tarım ve meyve üretimiyle öne çıkan ilçe; yerel üretici ve turizm işletmeleri.' },
      { ad: 'Pülümür', not: 'Yayla ve doğa turizmi; konaklama ve rehberli tur işletmeleri için gerçek fotoğraflı sayfalar.' },
    ],
    sektorler: [
      { ad: 'Doğa ve kültür turizmi', not: 'Munzur Vadisi, rafting, kamp ve yayla turizmi için konaklama/tur sayfaları, sezon bilgisi ve harita kaydı.' },
      { ad: 'Yöresel ürünler', not: 'Bal, peynir ve doğal ürünler için Türkiye geneline online satış ve ürün sayfaları.' },
      { ad: 'Eğitim ve öğrenci hizmetleri', not: 'Üniversite çevresindeki kurs, yurt, kafe ve hizmet işletmeleri için mobil öncelikli siteler.' },
      { ad: 'Sağlık ve yerel hizmetler', not: 'Klinik ve yerel hizmet işletmeleri için hizmet sayfası ve işletme profili yönetimi.' },
    ],
    aramalar: [
      { tur: 'Genel il araması', ornek: 'tunceli seo', rekabet: 'Düşük', yaklasim: 'Rekabet düşük; güçlü bir hizmet sayfasıyla ilk sayfa hedeflenebilir.' },
      { tur: 'Turizm', ornek: 'munzur vadisi kamp', rekabet: 'Orta', yaklasim: 'Sezon bilgisi, gerçek fotoğraf ve rezervasyon yolu içeren sayfa.' },
      { tur: 'İlçe + hizmet', ornek: 'ovacık pansiyon', rekabet: 'Düşük', yaklasim: 'İlçeye özel sayfa ve harita kaydı.' },
      soruSatiri,
    ],
    sss: [
      { q: "Tunceli'deki turizm işletmeleri internette nasıl öne çıkar?", a: 'Ziyaretçiler Munzur Vadisi, kamp ve rafting gibi aktiviteleri sezon öncesinde araştırır. Gerçek fotoğraflı, fiyat ve rezervasyon bilgisi net bir site, Google İşletme Profili ve düzenli yorumlar bu aramalarda belirleyicidir.' },
      { q: "Fiziksel olarak Tunceli'de misiniz?", a: "Hayır, Kocaeli kökenliyiz ve Tunceli'deki işletmelere uzaktan hizmet veriyoruz. Tüm süreç online yürütülür." },
      { q: 'Sonuç ne kadar sürede alınır?', a: 'Yerel aramalarda rekabet düşük olduğu için harita ve organik görünürlük görece hızlı oluşabilir. Turizm aramalarında sezondan önce başlamak önemlidir. Sıralama garantisi verilemez.' },
    ],
  },
  {
    slug: 'osmaniye',
    ad: 'Osmaniye',
    bulunma: "Osmaniye'de",
    icin: "Osmaniye'nin",
    yonelme: "Osmaniye'ye",
    ozet:
      "Osmaniye merkezden Kadirli ve Düziçi'ne, Osmaniye işletmeleri için yerel SEO. Yer fıstığı, sanayi ve yerel hizmet aramalarında Google'da öne çıkın.",
    bolgeler: ['Merkez', 'Kadirli', 'Düziçi', 'Bahçe', 'Toprakkale', 'Sumbas', 'Hasanbeyli'],
    ilceler: [
      { ad: 'Merkez', not: 'Organize sanayi bölgesi, ticaret ve üniversite çevresi; üretici, hizmet ve sağlık işletmeleri yoğun.' },
      { ad: 'Kadirli', not: 'Tarım ve ticaretin güçlü olduğu, nüfusu yüksek ilçe; yerel esnaf ve hizmet aramalarında harita görünürlüğü belirleyici.' },
      { ad: 'Düziçi', not: 'Tarım ve yerel ticaret; üretici ve hizmet işletmeleri için basit, hızlı siteler.' },
      { ad: 'Toprakkale', not: 'Ulaşım ve lojistik güzergâhında; nakliye ve depolama işletmeleri için hizmet sayfaları.' },
    ],
    sektorler: [
      { ad: 'Yer fıstığı ve gıda', not: "Osmaniye yer fıstığı ve gıda ürünleri için Türkiye geneline online satış, toptan talep formu ve 'osmaniye fıstığı' gibi aramalarda görünürlük." },
      { ad: 'Sanayi ve üretim', not: 'OSB firmaları için ürün, kapasite ve belge sayfaları; B2B teklif formu ve ihracat için İngilizce sürüm.' },
      { ad: 'Lojistik ve nakliye', not: 'Çukurova ve liman güzergâhlarında çalışan nakliye firmaları için hizmet ve rota sayfaları.' },
      { ad: 'Sağlık, eğitim ve hizmet', not: 'Klinik, kurs ve yerel hizmet işletmeleri için hizmet başına sayfa ve işletme profili.' },
    ],
    aramalar: [
      { tur: 'Genel il araması', ornek: 'osmaniye seo ajansı', rekabet: 'Düşük', yaklasim: 'Rekabet düşük; güçlü bir hizmet sayfasıyla ilk sayfa hedeflenebilir.' },
      { tur: 'Ürün + il', ornek: 'osmaniye yer fıstığı toptan', rekabet: 'Orta', yaklasim: 'Ürün sayfası, toptan fiyat talebi ve kargo bilgisi.' },
      { tur: 'İlçe + hizmet', ornek: 'kadirli web tasarım', rekabet: 'Düşük', yaklasim: 'İlçeye özel sayfa ve harita kaydı.' },
      soruSatiri,
    ],
    sss: [
      { q: 'Osmaniye yer fıstığı üreticileri internetten nasıl satış yapabilir?', a: 'Menşe ve kalite bilgisini net veren ürün sayfaları, perakende için online sipariş, toptan alıcılar için ayrı teklif formu ve Türkiye geneli aramalarda görünürlük. Gerçek üretim fotoğrafları güveni ciddi şekilde artırır.' },
      { q: "Fiziksel olarak Osmaniye'de misiniz?", a: "Hayır, Kocaeli kökenliyiz ve Osmaniye'deki işletmelere uzaktan hizmet veriyoruz. Tüm süreç online yürütülür." },
      { q: "Osmaniye'de SEO ne kadar sürede sonuç verir?", a: 'Yerel aramalarda rekabet düşük olduğu için birkaç hafta ile birkaç ay arasında görünürlük oluşabilir. Türkiye geneline ürün satışında süre daha uzundur. Sıralama garantisi verilemez.' },
    ],
  },
  {
    slug: 'tarsus',
    ad: 'Tarsus',
    bulunma: "Tarsus'ta",
    icin: "Tarsus'un",
    yonelme: "Tarsus'a",
    ust: { ad: 'Mersin', slug: 'mersin' },
    ozet:
      "Tarsus işletmeleri için yerel SEO. Müşterileriniz 'Mersin' değil doğrudan 'Tarsus' diye arıyor; sanayi, tarım, turizm ve yerel hizmet aramalarında Tarsus'ta Google'da öne çıkın.",
    bolgeler: ['Tarsus merkez', 'Organize Sanayi Bölgesi', 'Gülek', 'Kazanlı yolu', 'Yenice'],
    ilceler: [
      { ad: 'Tarsus merkez', not: 'Tarihi çarşı, ticaret ve hizmet işletmeleri; sağlık, hukuk, eğitim ve esnaf aramalarında harita görünürlüğü belirleyici.' },
      { ad: 'Organize Sanayi Bölgesi', not: 'Üretim ve sanayi firmaları; ürün, kapasite ve belge bilgisi sunan kurumsal sayfalar ve B2B teklif formu.' },
      { ad: 'Tarım bölgeleri', not: 'Narenciye ve sebze üretimi; üretici, ihracatçı ve tarım ekipmanı işletmeleri için ürün sayfaları.' },
      { ad: 'Tarihi ve turistik alanlar', not: "Saint Paul Kuyusu, Kleopatra Kapısı ve Tarsus Şelalesi çevresinde yeme-içme ve turizm işletmeleri; gerçek fotoğraf ve harita kaydı." },
    ],
    sektorler: [
      { ad: 'Sanayi ve üretim', not: 'OSB firmaları için ürün kataloğu, belge sayfaları ve ihracat için İngilizce sürüm.' },
      { ad: 'Tarım ve narenciye', not: 'Üretici ve ihracatçılar için ürün, sezon ve kapasite bilgisi; toptan talep formu.' },
      { ad: 'İnanç ve kültür turizmi', not: 'Tarihi alanları ziyaret eden yerli ve yabancı turistlere yönelik restoran, otel ve tur işletmeleri için çok dilli sayfalar.' },
      { ad: 'Yerel hizmetler', not: 'Klinik, kurs, hukuk ve esnaf için hizmet başına sayfa ve Google İşletme Profili.' },
    ],
    aramalar: [
      { tur: 'İlçe araması', ornek: 'tarsus dijital ajans', rekabet: 'Düşük', yaklasim: "İnsanlar 'mersin' yerine 'tarsus' diye arıyor; Tarsus'a özel sayfa doğrudan bu aramayı hedefler." },
      { tur: 'İlçe + hizmet', ornek: 'tarsus reklam ajansı', rekabet: 'Düşük', yaklasim: 'Hizmet sayfası ve harita kaydı.' },
      { tur: 'Sektör + ilçe', ornek: 'tarsus narenciye ihracat', rekabet: 'Düşük', yaklasim: 'Ürün ve kapasite sayfaları, İngilizce sürüm.' },
      soruSatiri,
    ],
    sss: [
      { q: 'Tarsus için neden ayrı bir SEO çalışması gerekiyor, Mersin yetmez mi?', a: "Tarsus'taki müşteriler çoğunlukla doğrudan 'tarsus ...' diye arıyor. Mersin geneline yönelik bir sayfa bu aramalarda geride kalabilir. Tarsus'a özel sayfa ve işletme profili, yakındaki müşteriyi doğrudan hedefler." },
      { q: 'Fiziksel olarak Tarsus\'ta mısınız?', a: "Hayır, Kocaeli kökenliyiz ve Tarsus'taki işletmelere uzaktan hizmet veriyoruz. Tüm süreç online yürütülür." },
      { q: 'Sonuç ne kadar sürede alınır?', a: "Tarsus aramalarında rekabet düşük olduğu için harita ve organik görünürlük birkaç hafta ile birkaç ay içinde oluşabilir. Sıralama garantisi verilemez." },
    ],
    ilgili: [
      { label: 'Mersin SEO', href: '/mersin-seo' },
      { label: 'Mersin Web Tasarım', href: '/mersin-web-tasarim' },
      { label: 'Mersin Google Ads', href: '/mersin-google-ads' },
    ],
  },
  {
    slug: 'manavgat',
    ad: 'Manavgat',
    bulunma: "Manavgat'ta",
    icin: "Manavgat'ın",
    yonelme: "Manavgat'a",
    ust: { ad: 'Antalya', slug: 'antalya' },
    ozet:
      "Side'den Kumköy'e, Manavgat'taki otel, restoran ve turizm işletmeleri için yerel SEO. Hem Türkçe hem yabancı dilde, sezon başlamadan Google'da görünür olun.",
    bolgeler: ['Manavgat merkez', 'Side', 'Kumköy', 'Kızılağaç', 'Evrenseki', 'Çolaklı', 'Titreyengöl'],
    ilceler: [
      { ad: 'Side', not: 'Antik kenti ve sahil otelleriyle turizmin kalbi; otel, restoran ve tur işletmeleri için çok dilli sayfalar ve yorum yönetimi.' },
      { ad: 'Manavgat merkez', not: 'Ticaret, sağlık ve hizmet işletmeleri; yerel halkın ve sezonluk çalışanların aramalarında harita görünürlüğü.' },
      { ad: 'Kumköy, Çolaklı, Kızılağaç', not: 'Otel ve tatil köyü yoğun sahil bölgeleri; rent a car, transfer, tur ve alışveriş işletmeleri için yabancı dil sayfaları.' },
      { ad: 'Manavgat Şelalesi ve nehir çevresi', not: 'Tekne turu, restoran ve günübirlik turizm işletmeleri; gerçek fotoğraf ve rezervasyon bilgisi.' },
    ],
    sektorler: [
      { ad: 'Otel ve konaklama', not: 'Almanca, Rusça ve İngilizce sayfalar, gerçek fotoğraflar, rezervasyon yolu ve Google İşletme Profili yorum yönetimi.' },
      { ad: 'Tur, transfer ve rent a car', not: "Turistlerin 'side boat trip', 'manavgat transfer' gibi aramaları için yabancı dilde hizmet sayfaları ve WhatsApp iletişimi." },
      { ad: 'Restoran ve yeme-içme', not: 'Menü, konum ve yorumların öne çıktığı mobil öncelikli sayfalar; harita sonuçlarında görünürlük.' },
      { ad: 'Emlak ve yatırım', not: 'Yerli ve yabancı alıcılara yönelik çok dilli ilan ve bölge rehberi sayfaları.' },
    ],
    aramalar: [
      { tur: 'İlçe araması', ornek: 'manavgat seo', rekabet: 'Düşük', yaklasim: "İnsanlar 'antalya' yerine doğrudan 'manavgat' ya da 'side' diye arıyor; ilçeye özel sayfa bu aramayı hedefler." },
      { tur: 'Yabancı dil + bölge', ornek: 'side boat trip', rekabet: 'Orta', yaklasim: 'İngilizce/Almanca/Rusça hizmet sayfaları ve yorum yönetimi.' },
      { tur: 'İlçe + hizmet', ornek: 'side otel web sitesi', rekabet: 'Düşük', yaklasim: 'Hızlı, mobil uyumlu, rezervasyon odaklı site.' },
      soruSatiri,
    ],
    sss: [
      { q: 'Manavgat ve Side\'deki turizm işletmeleri için hangi dillerde site gerekir?', a: 'Misafir profiline göre değişmekle birlikte bölgede Almanca, Rusça ve İngilizce en sık ihtiyaç duyulan dillerdir. Her dil için ayrı sayfa ve o dilde aranan kelimeler planlanmalıdır; otomatik çeviri yerine düzgün çeviri güven verir.' },
      { q: 'Sezonluk işletmeler SEO\'ya ne zaman başlamalı?', a: 'Sezon başlamadan en az 2–3 ay önce. Ziyaretçiler tatil ve aktiviteleri haftalar öncesinden araştırır; sayfaların o zamana kadar Google\'da yer edinmiş olması gerekir.' },
      { q: "Fiziksel olarak Manavgat'ta mısınız?", a: "Hayır, Kocaeli kökenliyiz ve Manavgat'taki işletmelere uzaktan hizmet veriyoruz. Tüm süreç online yürütülür." },
    ],
    ilgili: [
      { label: 'Antalya SEO', href: '/antalya-seo' },
      { label: 'Antalya Web Tasarım', href: '/antalya-web-tasarim' },
      { label: 'Antalya Google Ads', href: '/antalya-google-ads' },
    ],
  },
]

export const ilSeoBul = (slug: string) => ilSeo.find((i) => i.slug === slug)
