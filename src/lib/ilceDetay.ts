import type { IlceFaq } from './ilceler'

// İl/ilçe rehberlerinin derinleştirilmiş bölümleri. Senaryolar gerçek müşteri
// değil; bölgedeki tipik bir işletme için yaklaşımı göstermek amacıyla yazıldı.
export interface IlceDetay {
  senaryo: {
    isletme: string
    durum: string
    adimlar: string[]
  }
  oncelikler: string[]
  ekSss: IlceFaq[]
}

export const ilceDetay: Record<string, IlceDetay> = {
  gebze: {
    senaryo: {
      isletme: 'Gebze\'de makine yedek parçası üreten, 30 kişilik bir imalat firması',
      durum: 'Firmanın sitesi yalnızca bir tanıtım sayfasından oluşuyor; ürün grupları, kapasite ve belgeler yer almıyor. Yeni müşterilerin neredeyse tamamı tanıdık tavsiyesiyle geliyor, aramalardan teklif talebi gelmiyor.',
      adimlar: [
        'Her ürün grubu için ayrı sayfa; teknik özellik tablosu, kullanılan malzeme ve tolerans bilgisi.',
        '"Gebze CNC işleme", "Gebze yedek parça imalatı" gibi ürün ve hizmet odaklı aramalara göre başlık ve içerik yapısı.',
        'Kalite belgeleri, makine parkı fotoğrafları ve teklif formuyla satın alma ekiplerinin aradığı bilgiyi tek yerde toplamak.',
      ],
    },
    oncelikler: [
      'Genel "Gebze web tasarım" aramaları yerine ürün ve hizmet adlarıyla birleşen dar aramaları hedefleyin.',
      'Organize sanayi bölgesindeki satın alma birimlerinin aradığı kapasite, belge ve referans bilgisini görünür kılın.',
      'Google İşletme Profili\'nde doğru kategori ve hizmet listesiyle harita sonuçlarında yer alın.',
    ],
    ekSss: [
      { q: 'Gebze\'deki bir üretici için kaç sayfalık site yeterli?', a: 'Ürün grubu sayısına göre değişir. Genellikle ana sayfa, kurumsal, her ürün grubu için bir sayfa, kalite ve belgeler, referanslar ve iletişim yeterli bir başlangıçtır; ihracat varsa İngilizce sürümler eklenir.' },
      { q: 'B2B müşteriler gerçekten Google\'dan tedarikçi arıyor mu?', a: 'Yeni tedarikçi araştırmasında arama motoru ve firmanın web sitesi ilk başvurulan kaynaklardandır. Bilgisi eksik bir site, görüşme aşamasına gelmeden elenmenize yol açabilir.' },
    ],
  },
  darica: {
    senaryo: {
      isletme: 'Darıca sahil şeridine yakın, yeni açılmış bir diş kliniği',
      durum: 'Klinik sosyal medyada aktif, ancak web sitesi yok ve Google İşletme Profili eksik bilgilerle duruyor. "Darıca diş hekimi" aramalarında harita sonuçlarına girmiyor.',
      adimlar: [
        'Tedavi başına ayrı sayfa (implant, ortodonti, diş beyazlatma) ve her biri için sık sorulan sorular.',
        'Google İşletme Profili\'nin çalışma saatleri, hizmetler ve gerçek fotoğraflarla eksiksiz hale getirilmesi.',
        'Online randevu ve WhatsApp ile tek dokunuşla iletişim; tedavi sonrası teşviksiz yorum isteme düzeni.',
      ],
    },
    oncelikler: [
      'Mahalle ve sahil çevresiyle birleşen aramalara göre içerik hazırlayın.',
      'Sağlık hizmetlerinde güven belirleyicidir: hekim bilgisi, belgeler ve gerçek fotoğraflar sitede yer almalı.',
      'Yorumları teşvik vermeden, hizmetten memnun kalan hastalardan düzenli olarak isteyin.',
    ],
    ekSss: [
      { q: 'Klinik sitesinde fiyat yazmalı mıyım?', a: 'Sağlık hizmetlerinde kesin fiyat yazmak çoğu zaman uygun değildir. Fiyatı etkileyen etkenleri anlatmak ve ön muayene veya iletişim yolunu net göstermek, hem bilgi arayanı hem kararsız hastayı karşılar.' },
      { q: 'Darıca\'daki bir işletme Gebze aramalarında da çıkabilir mi?', a: 'Komşu ilçelerden de hasta ve müşteri geliyorsa bunu sayfa içeriğinde ve Google İşletme Profili\'nin hizmet bölgesinde belirtmek gerekir. Yine de en güçlü sonuç işletmenin bulunduğu ilçede alınır.' },
    ],
  },
  dilovasi: {
    senaryo: {
      isletme: 'Dilovası\'nda endüstriyel kimyasal dağıtımı yapan bir tedarikçi',
      durum: 'Firmanın sitesi eski, mobilde düzgün açılmıyor ve ürün listesi PDF olarak duruyor. Satın alma birimleri ürün adıyla arama yaptığında firma görünmüyor.',
      adimlar: [
        'PDF\'te kalan ürün listesinin aranabilir ürün sayfalarına dönüştürülmesi.',
        'Güvenlik bilgi formları ve teknik dokümanların ilgili ürün sayfalarına bağlanması.',
        'Mobil uyumlu, hızlı bir altyapı ve teklif talep formu.',
      ],
    },
    oncelikler: [
      'Ürün ve hizmet adlarını "Dilovası" ve "Kocaeli" ile birleştiren aramalara yönelik sayfa yapısı kurun.',
      'Teknik dokümanları PDF\'e hapsetmeyin; temel bilgiyi sayfa metni olarak da yayınlayın.',
      'Kurumsal güven unsurlarını (belgeler, referanslar, kuruluş bilgisi) ana sayfada görünür tutun.',
    ],
    ekSss: [
      { q: 'Ürün kataloğu PDF olarak yeterli değil mi?', a: 'PDF dosyaları indekslenebilir ama arama sonuçlarında ve mobil cihazlarda zayıf bir deneyim sunar. Ürün bilgisini sayfa olarak yayınlayıp PDF\'i indirilebilir ek olarak sunmak daha etkilidir.' },
      { q: 'Dilovası gibi sanayi ilçelerinde yerel SEO işe yarar mı?', a: 'Evet, ancak bireysel tüketici aramalarından farklı çalışır. Burada hedef, ürün ve hizmet adıyla arama yapan firmalara görünmektir; kurumsal bilgi ve teknik içerik belirleyicidir.' },
    ],
  },
  korfez: {
    senaryo: {
      isletme: 'Hereke\'de el dokuması halı ve ipek ürünleri üreten bir atölye',
      durum: 'Atölye ürünlerini yalnızca yüz yüze ve tanıdık çevresi üzerinden satıyor. İnternette bulunamıyor, yurt dışından gelen talepleri yanıtlayacak bir sayfa yok.',
      adimlar: [
        'Atölyenin hikâyesini, üretim sürecini ve ustalığını anlatan sayfalar; gerçek fotoğraf ve kısa videolar.',
        'Ürün ve koleksiyon sayfaları; boyut, malzeme ve bakım bilgisiyle birlikte talep formu.',
        'Türkçe ve İngilizce sürüm ile yurt dışı talepler için iletişim akışı.',
      ],
    },
    oncelikler: [
      'Körfez\'in sanayi tarafı ile Hereke\'nin el sanatı kimliğini ayrı sayfalarda ele alın; ikisi farklı arama kitlelerine hitap eder.',
      'Sanayiye hizmet veren firmalarda belgeler ve referanslar, el sanatlarında hikâye ve fotoğraf öne çıkmalı.',
      'Yurt dışı müşteri hedefleniyorsa dil sürümlerini doğru teknik yapıyla (hreflang) kurun.',
    ],
    ekSss: [
      { q: 'Hereke ürünleri için e-ticaret mi kurmalıyım, talep formu mu?', a: 'Yüksek fiyatlı ve kişiye özel ürünlerde genellikle talep formu ve birebir iletişim daha uygundur. Standart ürünleriniz varsa küçük bir online satış bölümü eklenebilir.' },
      { q: 'Körfez\'de liman ve sanayiye hizmet veriyorum, nasıl öne çıkarım?', a: 'Hizmet verdiğiniz sektörleri, belgelerinizi ve çalıştığınız kurumları net gösteren sayfalar ve "Körfez + hizmet" aramalarına yönelik içerik, kurumsal alıcıların sizi bulmasını kolaylaştırır.' },
    ],
  },
  derince: {
    senaryo: {
      isletme: 'Derince Limanı çevresinde gümrük müşavirliği ve lojistik hizmeti veren bir firma',
      durum: 'Firma uzun süredir faaliyette ama sitesinde hizmetlerin yalnızca adları yazıyor. Yeni ithalatçı ve ihracatçılar firmayı aramalarda bulamıyor.',
      adimlar: [
        'Her hizmet için (gümrükleme, depolama, taşımacılık) süreç, gerekli belgeler ve süreyi anlatan ayrı sayfalar.',
        'İthalat ve ihracat yapanların sık sorduğu sorulara net cevaplar veren bir bilgi bölümü.',
        'Hızlı teklif formu ve doğrudan telefon ile WhatsApp bağlantısı.',
      ],
    },
    oncelikler: [
      'Hizmet adlarını Derince ve Kocaeli ile birleştiren aramalara göre sayfa başlıkları oluşturun.',
      'Süreçleri anlatan içerik, karar aşamasındaki müşteriye güven verir ve soru odaklı aramalarda görünürlük sağlar.',
      'Kurumsal referansları ve belgeleri öne çıkarın.',
    ],
    ekSss: [
      { q: 'Hizmet süreçlerini sitede anlatmak rakiplere bilgi vermek olmaz mı?', a: 'Genel süreç bilgisi rekabet avantajınızı ortadan kaldırmaz; aksine müşterinin sizi uzman olarak görmesini sağlar. Fiyat ve özel çalışma koşulları görüşmeye bırakılabilir.' },
      { q: 'Derince\'de birkaç rakibim var, fark nasıl yaratılır?', a: 'Hızlı açılan, mobil uyumlu, net bilgi veren bir site ve eksiksiz bir Google İşletme Profili, eski ve bilgisi eksik sitelere karşı belirgin bir fark yaratır.' },
    ],
  },
  golcuk: {
    senaryo: {
      isletme: 'Gölcük sahilinde 12 odalı bir butik otel',
      durum: 'Otel rezervasyonlarının büyük kısmını komisyonlu platformlardan alıyor. Kendi sitesi var ama oda bilgisi eksik, fotoğraflar eski ve doğrudan rezervasyon seçeneği yok.',
      adimlar: [
        'Her oda tipi için güncel fotoğraflı sayfa, net imkânlar listesi ve doğrudan rezervasyon formu.',
        'Gölcük ve çevresini anlatan rehber içerik; misafirlerin sık sorduğu ulaşım ve konum soruları.',
        'Google İşletme Profili\'nde güncel fotoğraflar ve teşviksiz misafir yorumlarının düzenli takibi.',
      ],
    },
    oncelikler: [
      'Sezon başlamadan içerik ve profil güncellemelerini tamamlayın.',
      'Tersane ve sanayi kaynaklı iş seyahati talebini de hedefleyen bir sayfa düşünün.',
      'Doğrudan rezervasyon yolunu her sayfada görünür tutun.',
    ],
    ekSss: [
      { q: 'Kendi sitemden rezervasyon almak için ödeme altyapısı şart mı?', a: 'Başlangıçta şart değil. Talep formu ve hızlı telefon/WhatsApp dönüşüyle başlayıp, talep arttığında online ödeme ve rezervasyon sistemi eklenebilir.' },
      { q: 'Gölcük\'e iş için gelen misafirleri nasıl hedeflerim?', a: 'İş seyahatine uygun imkânları (çalışma alanı, erken kahvaltı, fatura kolaylığı) anlatan bir sayfa ve buna uygun başlıklar, bu kitlenin sizi bulmasını kolaylaştırır.' },
    ],
  },
  basiskele: {
    senaryo: {
      isletme: 'Başiskele\'de yeni sitelere hizmet veren bir emlak ofisi',
      durum: 'Ofis ilanlarını yalnızca ilan platformlarında yayınlıyor. Kendi sitesi yok; bölgeye taşınmayı düşünen aileler ofisi aramalarda bulamıyor.',
      adimlar: [
        'Seymen, Yuvacık ve Kullar gibi bölgeler için mahalle rehberleri: ulaşım, okul, sosyal imkânlar.',
        'Gerçek fotoğraflı ilan sayfaları ve bölgeye özgü sık sorulan sorular.',
        'Danışmanlarla tek dokunuşla iletişim ve ilan bildirimi için talep formu.',
      ],
    },
    oncelikler: [
      'Yeni yerleşim bölgelerinde insanlar mahalle adıyla arıyor; mahalle odaklı gerçek içerik hazırlayın.',
      'İlan platformlarına bağımlılığı azaltmak için kendi sitenizde rehber içeriğe yatırım yapın.',
      'Google İşletme Profili\'ni hizmet verdiğiniz mahallelerle güncel tutun.',
    ],
    ekSss: [
      { q: 'İlan sitelerinde zaten varım, ayrıca kendi sitem gerekir mi?', a: 'İlan siteleri müşteriyi platformda tutar; kendi siteniz ise markanızı ve uzmanlığınızı gösterir. Bölge rehberleri gibi içerikler, ilan platformlarında rekabet edemeyeceğiniz aramalarda sizi görünür kılar.' },
      { q: 'Mahalle rehberi yazmak satışa nasıl katkı sağlar?', a: 'Taşınmayı düşünen aileler önce bölgeyi araştırır. Bu aşamada karşılarına çıkan rehber, sizi bölgeyi tanıyan danışman olarak konumlandırır ve ilk iletişimi kolaylaştırır.' },
    ],
  },
  kartepe: {
    senaryo: {
      isletme: 'Kartepe\'de kayak sezonunda yoğun çalışan bir bungalov işletmesi',
      durum: 'İşletme kış aylarında dolu, yaz aylarında ise boş kalıyor. Sitesi yalnızca kış görselleri içeriyor ve yaz aktivitelerinden hiç bahsetmiyor.',
      adimlar: [
        'Kış ve yaz için ayrı içerikler: kayak, doğa yürüyüşü, Maşukiye ve Sapanca Gölü çevresi.',
        'Her bungalov tipi için güncel fotoğraflar, imkânlar ve doğrudan rezervasyon formu.',
        'Sezon başlamadan önce yayınlanan kampanya ve paket sayfaları.',
      ],
    },
    oncelikler: [
      'Kış sezonu içeriğini yaz sonunda, yaz içeriğini ilkbahar başında yayında tutun.',
      'Maşukiye ve Sapanca Gölü gibi yakın noktalarla birleşen aramaları değerlendirin.',
      'Yorum ve fotoğraf akışını mevsimlere göre güncel tutun.',
    ],
    ekSss: [
      { q: 'Sezon dışı dönemde doluluğu artırmak için ne yapabilirim?', a: 'Sezon dışına özel aktiviteleri, hafta içi paketlerini ve doğa odaklı deneyimleri anlatan içerikler, kış dışında da arama yapan ziyaretçilere ulaşmanızı sağlar.' },
      { q: 'Kartepe ve Sapanca için tek sayfa mı, ayrı sayfa mı?', a: 'Her bölge farklı arama kitlesine sahiptir. Gerçek ve özgün bilgi sunabiliyorsanız ayrı sayfalar daha isabetli sonuç verir.' },
    ],
  },
  cayirova: {
    senaryo: {
      isletme: 'Çayırova\'da otomotiv yan sanayiye metal işleme hizmeti veren bir atölye',
      durum: 'Atölye büyük üreticilerle çalışıyor ancak yeni müşteri bulmakta zorlanıyor. Sitesinde yalnızca iletişim bilgileri var.',
      adimlar: [
        'Yapılan işlemlerin (kesim, büküm, kaynak, yüzey işlem) ayrı ayrı anlatıldığı hizmet sayfaları.',
        'Makine parkı, kapasite ve kalite belgelerinin sunulduğu kurumsal sayfa.',
        'Satın alma ekiplerine yönelik hızlı teklif formu ve teknik çizim yükleme imkânı.',
      ],
    },
    oncelikler: [
      'Otomotiv tedarik zincirinde alıcıların aradığı belge ve kapasite bilgisini öne çıkarın.',
      'Yeni konut bölgelerine hizmet veren işletmeler için mahalle ve hizmet odaklı ayrı sayfalar hazırlayın.',
      'Hem kurumsal hem bireysel müşteriye hizmet veriyorsanız iletişim yollarını ayırın.',
    ],
    ekSss: [
      { q: 'Teknik çizim yükleme özelliği gerekli mi?', a: 'Fason üretim ve metal işleme gibi işlerde müşteri teklif için çizim gönderir. Bu özelliği formda sunmak, teklif sürecini hızlandırır ve gelen talebin kalitesini artırır.' },
      { q: 'Çayırova\'da bireysel müşteriye hizmet veren işletmeler için ne öneriyorsunuz?', a: 'Klinik, kurs, oto servis gibi işletmeler için doğrulanmış Google İşletme Profili, hizmet başına sayfa ve teşviksiz gerçek yorumlar en etkili başlangıçtır.' },
    ],
  },
  karamursel: {
    senaryo: {
      isletme: 'Karamürsel sahilinde aile işletmesi bir balık restoranı',
      durum: 'Restoran yaz aylarında yoğun, ancak hafta içi ve kış aylarında boş kalıyor. İnternette yalnızca eksik bilgili bir harita kaydı var.',
      adimlar: [
        'Menü, çalışma saatleri, konum ve rezervasyon bilgisinin yer aldığı sade ve hızlı bir site.',
        'Google İşletme Profili\'nde güncel menü, fotoğraflar ve özel gün duyuruları.',
        'Hafta içi ve kış dönemine özel menü ya da etkinlik duyuruları.',
      ],
    },
    oncelikler: [
      'Az rekabetli bir bölgede doğru ve eksiksiz harita kaydı tek başına büyük fark yaratır.',
      'Yazlıkçıların karar verdiği ilkbahar döneminde içeriği güncelleyin.',
      'Menü ve fiyat bilgisini güncel tutun; güncel olmayan bilgi kötü deneyime yol açar.',
    ],
    ekSss: [
      { q: 'Küçük bir restoran için web sitesi gerekli mi, harita kaydı yetmez mi?', a: 'Harita kaydı en önemli başlangıçtır. Basit bir site ise menüyü, rezervasyonu ve özel günleri daha net anlatır; ikisi birlikte daha güçlü sonuç verir.' },
      { q: 'Kış aylarında müşteri çekmek için ne yapabilirim?', a: 'Kış menüsü, hafta sonu kahvaltısı veya özel etkinlikleri hem sitede hem harita profilinde duyurmak, bölgeye gelen ziyaretçilerin sizi bulmasını kolaylaştırır.' },
    ],
  },
  kandira: {
    senaryo: {
      isletme: 'Kerpe çevresinde kamp alanı ve pansiyon işleten bir aile',
      durum: 'İşletmenin web sitesi yok, rezervasyonlar telefonla alınıyor. Yaz aylarında doluluk iyi ama ziyaretçiler işletmeyi yol üzerinde fark ederek geliyor.',
      adimlar: [
        'Kamp alanı ve pansiyon için ayrı sayfalar; imkânlar, fiyat aralığı ve kurallar.',
        'Kerpe, Kefken ve Cebeci gibi yakın noktalar için rehber içerik ve yol tarifi.',
        'Telefon ve WhatsApp ile hızlı rezervasyon, doğrulanmış harita kaydı.',
      ],
    },
    oncelikler: [
      'Yer adlarıyla (Kerpe, Kefken, Cebeci) birleşen aramalara göre içerik hazırlayın.',
      'İlk kez gelecek ziyaretçiler için ulaşım ve yol tarifi bilgisini net verin.',
      'Rekabet düşük olduğundan temel adımlar bile hızlı görünürlük sağlayabilir.',
    ],
    ekSss: [
      { q: 'İnternet altyapısı zayıf bir bölgedeyim, siteyi nasıl yöneteceğim?', a: 'Site bulut üzerinde çalışır. Rezervasyon talepleri telefonunuza veya e-postanıza gelir; temel güncellemeleri telefondan yapabileceğiniz basit bir panel kurulabilir.' },
      { q: 'Kamp alanı için fiyat yazmalı mıyım?', a: 'Kamp ve pansiyon gibi hizmetlerde fiyat aralığı vermek karar sürecini hızlandırır ve gereksiz soruları azaltır. Sezonluk değişiklikleri güncel tutmak önemlidir.' },
    ],
  },
  sakarya: {
    senaryo: {
      isletme: 'Sakarya genelinde birden fazla ilçeye hizmet veren bir klima ve ısıtma servisi',
      durum: 'Firma Adapazarı, Serdivan ve Arifiye\'ye hizmet veriyor ama sitesi yalnızca "Sakarya" geçen tek bir sayfadan oluşuyor. İlçe adıyla yapılan aramalarda görünmüyor.',
      adimlar: [
        'İl geneli için bir ana hizmet sayfası ve gerçek hizmet verilen ilçeler için ayrı, özgün sayfalar.',
        'Hizmet türleri (montaj, bakım, arıza) için ayrı sayfalar ve sık sorulan sorular.',
        'Google İşletme Profili\'nde hizmet bölgelerinin doğru tanımlanması.',
      ],
    },
    oncelikler: [
      'Hizmet alanınız ilin tamamını kapsıyorsa il sayfasını, belirli ilçeleri kapsıyorsa ilçe sayfalarını öne çıkarın.',
      'Sanayi, eğitim ve turizm sektörleri için farklı içerik yaklaşımları kullanın.',
      'İlçe sayfalarını yalnızca ilçe adını değiştirerek çoğaltmayın; her birine o ilçeye özgü bilgi ekleyin.',
    ],
    ekSss: [
      { q: 'Sakarya\'nın tüm ilçeleri için sayfa açmalı mıyım?', a: 'Yalnızca gerçekten hizmet verdiğiniz ve özgün bilgi sunabildiğiniz ilçeler için sayfa açmanızı öneririz. Aynı metnin ilçe adı değiştirilerek çoğaltılması arama motorlarında değer kaybına yol açabilir.' },
      { q: 'Sakarya\'da hangi sektörler dijitalde öne çıkıyor?', a: 'Otomotiv yan sanayi, sağlık, eğitim ve Sapanca çevresindeki turizm işletmeleri arama kaynaklı talepten en çok yararlanan sektörler arasındadır.' },
    ],
  },
  adapazari: {
    senaryo: {
      isletme: 'Adapazarı merkezde hizmet veren bir hukuk bürosu',
      durum: 'Büronun sitesi kişisel bir tanıtım sayfası niteliğinde. Çalışma alanları ayrıntılı anlatılmamış, "Adapazarı avukat" aramalarında görünmüyor.',
      adimlar: [
        'Her çalışma alanı (aile, iş, ceza, gayrimenkul hukuku) için bilgilendirici ayrı sayfalar.',
        'Sık sorulan hukuki sorulara genel bilgilendirme içerikleri; meslek kurallarına uygun, reklam niteliği taşımayan dil.',
        'Randevu ve iletişim akışı ile doğrulanmış Google İşletme Profili.',
      ],
    },
    oncelikler: [
      'Hukuk ve sağlık gibi alanlarda meslek kurallarına uygun, bilgilendirici bir dil kullanın.',
      '"Sakarya" ve "Adapazarı" aramalarını birlikte değerlendirin.',
      'Çalışma alanı başına ayrı sayfa, tek sayfaya göre çok daha fazla aramada görünürlük sağlar.',
    ],
    ekSss: [
      { q: 'Avukatlar web sitesinde reklam yapabilir mi?', a: 'Avukatlık mesleğinde reklam yasağı bulunur; bu nedenle site içeriği tanıtım değil bilgilendirme amacı taşımalıdır. Çalışma alanlarını ve genel hukuki bilgileri anlatan içerik bu çerçevede hazırlanır.' },
      { q: 'Adapazarı merkezdeki bir işletme Serdivan aramalarında da çıkabilir mi?', a: 'Serdivan\'dan da müşteri geliyorsa bunu içerikte ve Google İşletme Profili\'nde belirtmek gerekir. Ancak en güçlü görünürlük işletmenin bulunduğu ilçede sağlanır.' },
    ],
  },
  serdivan: {
    senaryo: {
      isletme: 'Serdivan\'da üniversite öğrencilerine yönelik bir dil kursu',
      durum: 'Kurs Instagram\'da aktif ama web sitesi yok. Öğrenciler ve veliler program, takvim ve ücret bilgisine ulaşamıyor.',
      adimlar: [
        'Program sayfaları: seviye, süre, ders saatleri ve kayıt koşulları.',
        'Öğrenci ve velilerin sık sorduğu sorulara net cevaplar.',
        'Mobil öncelikli tasarım, hızlı kayıt formu ve WhatsApp ile iletişim.',
      ],
    },
    oncelikler: [
      'Genç kitle çoğunlukla mobilden arama yapar; hız ve mobil kullanım önceliklidir.',
      'Sosyal medyayı siteyle birlikte kullanın; biri keşif, diğeri karar aşaması içindir.',
      'Akademik takvime göre içerik güncellemesi yapın.',
    ],
    ekSss: [
      { q: 'Instagram hesabım varken web sitesine neden ihtiyacım var?', a: 'Instagram keşif için güçlüdür, ancak Google\'dan "Serdivan dil kursu" gibi arama yapan biri sitenize ya da harita kaydınıza ulaşır. Program ve ücret gibi bilgiler de sitede daha düzenli sunulur.' },
      { q: 'Kayıt dönemlerinde nasıl öne çıkarım?', a: 'Kayıt döneminden birkaç hafta önce program ve takvim sayfalarını güncellemek, arama motorlarının yeni bilgiyi zamanında görmesini sağlar.' },
    ],
  },
  sapanca: {
    senaryo: {
      isletme: 'Sapanca\'da göl manzaralı 8 bungalovdan oluşan bir tesis',
      durum: 'Tesis rezervasyonlarının çoğunu komisyonlu platformlardan alıyor. Kendi sitesindeki fotoğraflar eski ve her bungalovun özellikleri ayrıntılı anlatılmıyor.',
      adimlar: [
        'Her bungalov için ayrı sayfa: manzara, kapasite, jakuzi veya şömine gibi özellikler ve güncel fotoğraflar.',
        'Doğrudan rezervasyon formu ve platformlara göre avantajların açıkça belirtilmesi.',
        'Sapanca Gölü çevresindeki aktiviteleri anlatan rehber içerik.',
      ],
    },
    oncelikler: [
      'Geniş "Sapanca bungalov" aramaları yerine özellik odaklı aramaları (jakuzili, göl manzaralı) hedefleyin.',
      'Doğrudan rezervasyon yolunu her sayfada görünür tutun.',
      'Fotoğraf ve yorumları düzenli olarak güncelleyin.',
    ],
    ekSss: [
      { q: 'Platformlardaki fiyatımdan farklı fiyat verebilir miyim?', a: 'Bu, platformlarla yaptığınız sözleşmenin koşullarına bağlıdır. Fiyat yerine doğrudan rezervasyona özel ek hizmetler (geç çıkış, kahvaltı gibi) sunmak çoğu zaman daha uygun bir yöntemdir.' },
      { q: 'Sapanca\'da rekabet çok yüksek, küçük tesis nasıl görünür olur?', a: 'Özellik ve konum odaklı dar aramalara yönelik sayfalar, eksiksiz Google İşletme Profili ve düzenli gerçek yorumlar, küçük tesislerin büyük rakiplerle aynı sonuçlarda yer almasını kolaylaştırır.' },
    ],
  },
  yalova: {
    senaryo: {
      isletme: 'Yalova merkezde fidan ve süs bitkisi üretimi yapan bir işletme',
      durum: 'İşletme toptan satış yapıyor ama alıcılar ürün çeşitlerini yalnızca telefonla öğrenebiliyor. İnternette bir ürün kataloğu yok.',
      adimlar: [
        'Ürün kategorileri ve çeşitler için katalog sayfaları; boy, saksı ve sezon bilgisi.',
        'Toptan alıcılar için teklif formu ve sevkiyat bölgeleri bilgisi.',
        'Üretim alanını ve süreci gösteren gerçek fotoğraflar.',
      ],
    },
    oncelikler: [
      'Yalova\'da turizm ve tarım/fidancılık farklı arama kitlelerine hitap eder; içerikleri ayrı planlayın.',
      'İlçeye özgü aramalarda (Çınarcık, Armutlu, Termal) ilgili ilçe rehberlerini kullanın.',
      'İstanbul\'dan gelen ziyaretçi ve alıcıyı hedefleyen içerik hazırlayın.',
    ],
    ekSss: [
      { q: 'Toptan satış yapan bir üretici için katalog sitesi mi, e-ticaret mi?', a: 'Toptan satışta fiyat ve miktar değişken olduğundan genellikle katalog ve teklif formu daha uygundur. Perakende satış da yapıyorsanız küçük bir online satış bölümü eklenebilir.' },
      { q: 'Yalova\'nın tamamına mı, ilçelere mi odaklanmalıyım?', a: 'İşletmenizin müşterisi il genelinden geliyorsa il odaklı, belirli bir ilçeden geliyorsa ilçe odaklı sayfalar daha isabetlidir. Turizm işletmeleri genellikle bulundukları ilçe adıyla aranır.' },
    ],
  },
  cinarcik: {
    senaryo: {
      isletme: 'Çınarcık\'ta yazlık satışı ve kiralaması yapan bir emlak ofisi',
      durum: 'Ofis yalnızca yaz aylarında aktif, ilanlarını platformlarda yayınlıyor. Kış ve ilkbaharda karar veren alıcılar ofise ulaşamıyor.',
      adimlar: [
        'Mahalle ve site rehberleri: denize uzaklık, ulaşım, çevre imkânları.',
        'Gerçek fotoğraflı ilan sayfaları ve dönemsel kiralama bilgisi.',
        'Kış ve ilkbahar döneminde güncellenen içerik ile yıl boyu iletişim.',
      ],
    },
    oncelikler: [
      'Kararların sezondan önce verildiğini dikkate alarak içerikleri ilkbahar başında güncelleyin.',
      'Mahalle ve özellik odaklı aramaları (denize sıfır, site içi) hedefleyin.',
      'İstanbul\'dan gelen alıcılar için ulaşım bilgisini net verin.',
    ],
    ekSss: [
      { q: 'Yazlık alıcıları ne zaman araştırma yapıyor?', a: 'Alım ve kiralama kararları genellikle sezondan birkaç ay önce verilir. Bu nedenle içeriklerin kış sonu ve ilkbahar başında güncel olması önemlidir.' },
      { q: 'İlan platformlarından farklı olarak sitemde ne sunmalıyım?', a: 'Bölge rehberleri, mahalle karşılaştırmaları ve gerçek fotoğraflar, platformlarda bulunmayan bir değer sunar ve sizi bölgeyi tanıyan danışman olarak konumlandırır.' },
    ],
  },
  armutlu: {
    senaryo: {
      isletme: 'Armutlu\'da orman içinde konumlanan butik bir pansiyon',
      durum: 'Pansiyonun sitesinde yalnızca birkaç fotoğraf ve telefon numarası var. Doğa tatili arayan ziyaretçiler pansiyonun imkânlarını öğrenemiyor.',
      adimlar: [
        'Doğa ve sessizlik vurgusunu öne çıkaran, gerçek fotoğraf ağırlıklı sayfalar.',
        'Yürüyüş rotaları, deniz ve çevredeki aktiviteleri anlatan rehber içerik.',
        'Oda sayfaları ve doğrudan rezervasyon formu.',
      ],
    },
    oncelikler: [
      'Doğa tatili arayan kitlenin karar kriterlerine (sessizlik, manzara, aktivite) göre içerik hazırlayın.',
      'Stok veya yapay zekâ görselleri yerine gerçek fotoğraf kullanın.',
      'Ulaşım bilgisini, özellikle ilk kez gelecekler için net verin.',
    ],
    ekSss: [
      { q: 'Küçük bir pansiyon için hangi sayfalar yeterli?', a: 'Ana sayfa, oda sayfaları, çevre rehberi, sık sorulan sorular ve iletişim/rezervasyon sayfası çoğu küçük pansiyon için yeterli bir yapı sunar.' },
      { q: 'Armutlu\'ya gelenler hangi bilgileri arıyor?', a: 'Genellikle konaklama seçenekleri, deniz ve doğa aktiviteleri, ulaşım ve yeme-içme bilgileri. Bu soruları cevaplayan içerik hem misafire yardımcı olur hem de aramalarda görünürlük sağlar.' },
    ],
  },
  altinova: {
    senaryo: {
      isletme: 'Altınova\'da tersanelere boya ve yüzey işlem hizmeti veren bir firma',
      durum: 'Firma tersanelerle doğrudan bağlantılarla çalışıyor; sitesi eski ve yalnızca firma adını içeriyor. Yeni projeler için firmayı arayan tersane ve armatörler bilgi bulamıyor.',
      adimlar: [
        'Yapılan işlerin (yüzey hazırlama, boya, kaplama) ayrıntılı anlatıldığı hizmet sayfaları.',
        'Tamamlanan proje türleri, kapasite ve belgelerin sunulduğu kurumsal sayfa.',
        'Türkçe ve İngilizce sürüm ile teklif formu.',
      ],
    },
    oncelikler: [
      'Tersane yan sanayisinde yabancı müşteri olabileceğinden çok dilli yapıyı baştan planlayın.',
      'Proje ve kapasite bilgisini görünür tutun.',
      'Hersek çevresine yönelik turizm ve doğa içeriğini sanayi içeriğinden ayırın.',
    ],
    ekSss: [
      { q: 'Tersane yan sanayi firmaları için İngilizce site şart mı?', a: 'Yabancı armatör veya tersanelerle çalışıyorsanız İngilizce hizmet ve iletişim sayfaları büyük önem taşır. Dil sürümlerinin doğru teknik yapıyla kurulması gerekir.' },
      { q: 'Proje fotoğraflarını paylaşmak sorun olur mu?', a: 'Müşteri izni alınması gereken durumlar olabilir. İzin alınmış projeler veya genel süreç fotoğrafları, müşteri bilgisi paylaşmadan uzmanlığınızı göstermenin güvenli bir yoludur.' },
    ],
  },
  ciftlikkoy: {
    senaryo: {
      isletme: 'Çiftlikköy\'de hizmet veren bir fizik tedavi merkezi',
      durum: 'Merkezin sitesi yok, Google İşletme Profili\'nde çalışma saatleri ve hizmetler eksik. Hastalar merkezi yalnızca doktor yönlendirmesiyle buluyor.',
      adimlar: [
        'Tedavi ve hizmet başına sayfalar, uzman bilgisi ve sık sorulan sorular.',
        'Google İşletme Profili\'nin eksiksiz hale getirilmesi ve gerçek fotoğraflar.',
        'Online randevu talebi ve telefonla tek dokunuşla arama.',
      ],
    },
    oncelikler: [
      'Az rekabetli ilçelerde eksiksiz bir harita kaydı ve basit bir site hızlı sonuç verebilir.',
      'Sağlık hizmetlerinde güven unsurlarını (uzman bilgisi, belgeler) öne çıkarın.',
      'Yalova merkezden gelen hastaları da hedefliyorsanız bunu içerikte belirtin.',
    ],
    ekSss: [
      { q: 'Çiftlikköy\'de bir sağlık merkezi için en önemli adım nedir?', a: 'Doğrulanmış ve eksiksiz bir Google İşletme Profili. Ardından hizmetleri ve uzmanları anlatan sade bir site ve teşviksiz gerçek hasta yorumları gelir.' },
      { q: 'Hasta yorumlarını sitede paylaşabilir miyim?', a: 'Hasta gizliliğine dikkat ederek ve izin alarak paylaşılabilir. Yorumların doğrudan Google İşletme Profili\'nde toplanması daha güvenilir ve yönetilebilir bir yöntemdir.' },
    ],
  },
  'yalova-termal': {
    senaryo: {
      isletme: 'Termal\'de kaplıca ve spa hizmeti sunan orta ölçekli bir otel',
      durum: 'Otel rezervasyonlarının çoğunu platformlardan alıyor. Sitesinde kaplıca ve spa hizmetleri ayrıntılı anlatılmıyor, paket bilgileri güncel değil.',
      adimlar: [
        'Kaplıca, spa ve oda paketleri için ayrı sayfalar; içerik, süre ve güncel fiyat bilgisi.',
        'Termal turizme özgü sık sorulan sorular: kür süresi, uygun mevsim, ulaşım.',
        'Doğrudan rezervasyon formu ve hafta sonu ile kış paketlerinin düzenli duyurusu.',
      ],
    },
    oncelikler: [
      'Termal turizm yıl boyu talep görür; içeriği mevsimlere göre güncel tutun.',
      'Sağlık iddialarında dikkatli olun; tıbbi fayda vaat eden ifadelerden kaçının.',
      'İstanbul, Bursa ve Kocaeli\'den gelen hafta sonu ziyaretçilerini hedefleyen paketleri öne çıkarın.',
    ],
    ekSss: [
      { q: 'Termal suyun sağlığa faydalarını sitede yazabilir miyim?', a: 'Kanıtlanmamış tıbbi fayda iddiaları hem güven hem mevzuat açısından risklidir. Termal suyun özelliklerini ve hizmeti tarafsız bir dille anlatmak, gerekirse uzman görüşüne yönlendirmek daha doğrudur.' },
      { q: 'Kış aylarında doluluğu nasıl artırabilirim?', a: 'Kış ve hafta sonu paketlerini zamanında yayınlamak, Google İşletme Profili\'nde duyurmak ve doğrudan rezervasyona özel avantajlar sunmak etkili yöntemlerdir.' },
    ],
  },
  tekirdag: {
    senaryo: {
      isletme: 'Süleymanpaşa\'da ticari araç ve filo kiralama hizmeti veren bir firma',
      durum: 'Firma Tekirdağ genelinde ve OSB\'lerde hizmet veriyor ama sitesi yalnızca araç listesinden oluşuyor. Kurumsal müşteriler hizmet koşullarını öğrenemiyor.',
      adimlar: [
        'Kurumsal filo kiralama, kısa ve uzun dönem kiralama için ayrı hizmet sayfaları.',
        'Hizmet verilen bölgeler (Süleymanpaşa, Çorlu, Çerkezköy) ve teslim koşulları.',
        'Kurumsal teklif formu ve sık sorulan sorular.',
      ],
    },
    oncelikler: [
      'İl merkezi ile sanayi ilçelerinin farklı arama davranışlarını ayrı sayfalarla karşılayın.',
      'İstanbul\'a yakınlıktan kaynaklanan rekabeti, Tekirdağ ve ilçe adlarına odaklanarak azaltın.',
      'Kurumsal müşteriler için belge ve referans bilgisini öne çıkarın.',
    ],
    ekSss: [
      { q: 'Tekirdağ\'da hem il merkezine hem OSB\'lere hizmet veriyorum, tek site yeterli mi?', a: 'Tek site yeterlidir; ancak il merkezi ve sanayi ilçeleri için ayrı hizmet bölgesi sayfaları, her kitlenin kendi aramasında sizi bulmasını kolaylaştırır.' },
      { q: 'Trakya\'daki diğer illere de hizmet veriyorum, bunu nasıl belirtmeliyim?', a: 'Hizmet verdiğiniz illeri hizmet sayfalarında ve Google İşletme Profili\'nin hizmet bölgesinde belirtin. Gerçek ve özgün bilgi sunabildiğiniz bölgeler için ayrı sayfa açmak daha etkilidir.' },
    ],
  },
  corlu: {
    senaryo: {
      isletme: 'Çorlu\'da fason üretim yapan orta ölçekli bir tekstil firması',
      durum: 'Firma yeni marka müşterileri bulmak için yalnızca fuarlara ve tanıdıklara güveniyor. Sitesi eski ve üretim kapasitesi hakkında bilgi içermiyor.',
      adimlar: [
        'Üretim kapasitesi, ürün grupları ve makine parkını anlatan sayfalar.',
        'Kalite belgeleri, sürdürülebilirlik uygulamaları ve çalışılan pazarlar.',
        'Türkçe ve İngilizce sürüm ile numune ve teklif talep formu.',
      ],
    },
    oncelikler: [
      'Fason üretim arayan markalar kapasite, belge ve teslim süresi bilgisini arar; bunları görünür kılın.',
      'Yurt dışı alıcılar için İngilizce sürümü öncelikli planlayın.',
      'Bireysel hizmet işletmeleri için mahalle ve hizmet odaklı sayfalar hazırlayın.',
    ],
    ekSss: [
      { q: 'Fuarlar varken web sitesine yatırım yapmalı mıyım?', a: 'Fuarda tanıştığınız alıcılar karar vermeden önce sitenizi inceler. Bilgisi eksik bir site güven kaybına yol açabilir; güncel bir site fuar görüşmelerini de destekler.' },
      { q: 'Çorlu\'da bireysel müşteriye hizmet veren bir işletme için ne öneriyorsunuz?', a: 'Doğrulanmış Google İşletme Profili, hizmet başına sayfa ve teşviksiz gerçek yorumlar, büyüyen kent nüfusundan gelen yerel aramalarda görünürlük sağlar.' },
    ],
  },
  cerkezkoy: {
    senaryo: {
      isletme: 'Çerkezköy OSB\'de fabrikalara bakım ve onarım hizmeti veren bir firma',
      durum: 'Firma acil arızalarda telefonla çağrılıyor ancak yeni fabrikalar firmayı bulamıyor. Sitesinde hizmet kapsamı ve müdahale süresi yazmıyor.',
      adimlar: [
        'Hizmet verilen ekipman türleri ve bakım/onarım hizmetlerinin ayrıntılı anlatıldığı sayfalar.',
        'Acil müdahale süresi ve çalışma saatlerinin net belirtilmesi.',
        'Telefon ve WhatsApp ile tek dokunuşla iletişim, kurumsal teklif formu.',
      ],
    },
    oncelikler: [
      'Acil hizmetlerde iletişim yolu her sayfada ve mobilde ilk ekranda görünür olmalı.',
      '"Çerkezköy + hizmet" aramalarına yönelik özgün içerik hazırlayın.',
      'OSB içindeki referansları ve belgeleri öne çıkarın.',
    ],
    ekSss: [
      { q: 'Acil servis veren bir firma için site nasıl kurgulanmalı?', a: 'Telefon ve WhatsApp düğmeleri her sayfada görünür olmalı, hizmet bölgesi ve müdahale süresi açıkça yazılmalıdır. Arıza anında arama yapan kişinin birkaç saniyede iletişime geçebilmesi önceliklidir.' },
      { q: 'OSB\'deki fabrikalara ulaşmak için yalnızca site yeterli mi?', a: 'Site ve Google İşletme Profili temel kanaldır; LinkedIn ve sektörel dizinler gibi kanallar bunu destekler. Hepsinde aynı ve güncel bilginin yer alması güveni artırır.' },
    ],
  },
  duzce: {
    senaryo: {
      isletme: 'Düzce\'de masif ahşap mobilya üreten bir atölye',
      durum: 'Atölye ürünlerini bölgedeki mağazalara satıyor, doğrudan müşteriye ulaşamıyor. İnternette ürünlerini gösteren bir katalog yok.',
      adimlar: [
        'Ürün ve koleksiyon sayfaları; ahşap türü, ölçü ve bakım bilgisi.',
        'Atölyeyi ve üretim sürecini anlatan hikâye odaklı içerik ve gerçek fotoğraflar.',
        'Özel sipariş için ölçü ve talep formu; toptan ve perakende iletişim yollarının ayrılması.',
      ],
    },
    oncelikler: [
      'Ürün adıyla ve "Düzce" ile birleşen aramaları hedefleyin; mobilya ve gıda üreticileri il dışına da satış yapabilir.',
      'Akçakoca\'daki turizm işletmeleri için sezona göre planlanan içerik hazırlayın.',
      'Üretici hikâyesini ve gerçek fotoğrafları öne çıkarın.',
    ],
    ekSss: [
      { q: 'Mobilya üreticisi olarak Türkiye geneline satış yapabilir miyim?', a: 'Evet. Ürün katalogu, nakliye bilgisi ve özel sipariş akışı içeren bir site, il dışındaki müşterilerin de sizi bulmasını ve sipariş vermesini sağlar.' },
      { q: 'Düzce\'de hangi işletmeler dijitalde öne çıkabilir?', a: 'Mobilya ve ahşap üreticileri, fındık ve gıda üreticileri, Akçakoca\'daki konaklama işletmeleri ve sağlık hizmetleri, rekabetin düşük olması nedeniyle görece hızlı görünürlük kazanabilir.' },
    ],
  },
}
