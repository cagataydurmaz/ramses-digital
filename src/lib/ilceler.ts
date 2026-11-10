// Düşük rekabetli ilçe/bölge sayfaları için içerik verisi.
// Her kayıt o bölgeye özgü yazıldı — şablon metin kopyası değil (doorway sayfa riski).
export interface IlceSektor {
  ad: string
  oneri: string
}

export interface IlceFaq {
  q: string
  a: string
}

export interface Ilce {
  slug: string
  name: string
  il: 'Kocaeli' | 'Sakarya' | 'Yalova' | 'Düzce' | 'Tekirdağ'
  tur: string
  intro: string
  ekonomi: string
  sektorler: IlceSektor[]
  aramalar: string[]
  komsular: string[]
  sss: IlceFaq[]
}

export const ilceler: Ilce[] = [
  {
    slug: 'gebze',
    name: 'Gebze',
    il: 'Kocaeli',
    tur: 'Kocaeli ilçesi',
    intro:
      'Gebze, Kocaeli içinde sanayi ve teknoloji işletmesinin en yoğun olduğu ilçe. Arama hacmi yüksek ama aramaların çoğu "Gebze + sektör" biçiminde, yani doğru sayfayla küçük bir işletme bile görünür olabiliyor.',
    ekonomi:
      'Gebze Organize Sanayi Bölgesi, Gebze Teknik Üniversitesi ve TÜBİTAK Marmara Araştırma Merkezi çevresinde hem üretim firmaları hem de onlara hizmet veren yan sektör var. Bu yüzden aramaların bir kısmı kurumsal (tedarikçi, üretici arayan), bir kısmı da yerel esnaf niteliğinde.',
    sektorler: [
      { ad: 'Sanayi ve üretim firmaları', oneri: 'Ürün/hizmet başına ayrı sayfa, teknik özellik tabloları ve talep formu; "Gebze + ürün adı" aramalarına yönelik içerik.' },
      { ad: 'Yan sanayi ve tedarikçiler', oneri: 'Referans ve kapasite sayfası, İngilizce sayfa, PDF katalog; yurt dışı alıcıların da bulabileceği yapı.' },
      { ad: 'Klinik ve sağlık hizmetleri', oneri: 'Hekim ve tedavi sayfaları, Google Business Profile ve hasta yorumu stratejisi.' },
      { ad: 'Esnaf ve yerel hizmetler', oneri: 'Mahalle/semt bazlı kısa sayfalar ve telefonla tek dokunuşla arama düğmesi.' },
    ],
    aramalar: ['gebze web tasarım', 'gebze seo uzmanı', 'gebze kurumsal web sitesi', 'gebze sanayi firması web sitesi'],
    komsular: ['darica', 'dilovasi', 'cayirova'],
    sss: [
      { q: 'Gebze\'de rekabet çok yüksek, küçük işletme için SEO mantıklı mı?', a: 'Genel "Gebze web tasarım" gibi geniş aramalar rekabetli ama "Gebze + sektör + ihtiyaç" biçimindeki dar aramalar çok daha ulaşılabilir. Küçük işletme için doğru strateji geniş kelime yerine bu uzun kuyruklu aramaları hedeflemek.' },
      { q: 'Üretici firmam için web sitesi satış getirir mi?', a: 'B2B alıcılar genelde ürün adı + üretici + şehir diye arar. Ürün sayfaları, teknik bilgi ve teklif formu olan bir site bu aramalardan gelen talepleri toplar; sadece tanıtım broşürü gibi bir site getirmez.' },
      { q: 'Gebze\'de yüz yüze görüşmeden çalışabilir miyiz?', a: 'Evet. Tüm süreç video görüşme, WhatsApp ve ortak dokümanlarla uzaktan yürür, istersen yüz yüze görüşme de ayarlanabilir.' },
    ],
  },
  {
    slug: 'darica',
    name: 'Darıca',
    il: 'Kocaeli',
    tur: 'Kocaeli ilçesi',
    intro:
      'Darıca, sahili ve yoğun konut nüfusuyla Gebze\'ye komşu bir ilçe. Burada aramalar çoğunlukla bireysel ve yerel hizmet odaklı; büyük ajansların neredeyse hiç hedeflemediği bir alan.',
    ekonomi:
      'Darıca Botanik Parkı, sahil şeridi ve Farabi Eğitim ve Araştırma Hastanesi çevresinde sağlık, kafe-restoran, emlak ve güzellik işletmeleri yoğunlaşıyor. Nüfus Gebze ve İstanbul\'a da kolay ulaştığı için "Darıca" aramaları çoğu zaman mahalle düzeyinde yapılıyor.',
    sektorler: [
      { ad: 'Klinik, diş ve estetik', oneri: 'Tedavi başına sayfa, önce-sonra yerine süreç anlatan içerik, harita ve yorum yönetimi.' },
      { ad: 'Kafe, restoran ve sahil işletmeleri', oneri: 'Menü ve rezervasyon sayfası, mevsimsel içerik, Google harita fotoğraf ve yorum akışı.' },
      { ad: 'Emlak ve inşaat', oneri: 'Mahalle rehberi içerikleri ve ilan sayfaları; "Darıca satılık daire" tarzı aramalara yönelik yapı.' },
      { ad: 'Güzellik, spor ve eğitim', oneri: 'Randevu formu ve paket sayfaları, WhatsApp ile hızlı iletişim.' },
    ],
    aramalar: ['darıca web tasarım', 'darıca seo', 'darıca işletme web sitesi', 'darıca dijital ajans'],
    komsular: ['gebze', 'dilovasi', 'korfez'],
    sss: [
      { q: 'Darıca\'da bu kadar küçük bir arama hacmi var mı?', a: 'Hacim Gebze veya İzmit kadar değil, ama rekabet de çok az. Az sayıda rakip olduğu için birkaç iyi hazırlanmış sayfa ve doğru Google profili ile ilk sayfaya çıkmak mümkün.' },
      { q: 'Sadece Google haritada görünmek yeterli mi?', a: 'Yerel hizmetlerde haritadaki görünürlük çok önemli ama web sitesi olmadan harita sıralaması zayıf kalıyor. İkisi birlikte çalışınca etki artar.' },
      { q: 'Site ne kadar sürede yayına girer?', a: 'Kurumsal tanıtım sitesi genelde 2-3 hafta içinde yayına alınır, kapsama göre bu süre değişir.' },
    ],
  },
  {
    slug: 'dilovasi',
    name: 'Dilovası',
    il: 'Kocaeli',
    tur: 'Kocaeli ilçesi',
    intro:
      'Dilovası küçük bir ilçe ama sanayi ağırlığı yüksek. Burada aramalar nadiren "web tasarım" gibi genel kelimelerle yapılıyor; asıl fırsat firmaların kendi ürün ve hizmetleri için bulunabilir olmasında.',
    ekonomi:
      'Dilovası Organize Sanayi Bölgesi ve çevresindeki kimya, metal ve lojistik firmaları ağırlıkta. Alıcılar çoğu zaman şirket bulmak için "Dilovası + ürün/hizmet" yazıyor ve karşılarına çıkan ilk teknik, güvenilir görünen siteyle iletişime geçiyor.',
    sektorler: [
      { ad: 'Kimya ve metal üreticileri', oneri: 'Ürün gruplarına göre sayfalar, güvenlik/teknik doküman indirme alanı, talep formu.' },
      { ad: 'Lojistik ve nakliye', oneri: 'Hizmet bölgeleri ve kapasite sayfası, "Dilovası nakliye" gibi yerel aramalara yönelik içerik.' },
      { ad: 'Endüstriyel servis ve bakım', oneri: 'Acil servis çağrı sayfası, telefon ve WhatsApp düğmesi, harita kaydı.' },
      { ad: 'Yerel esnaf', oneri: 'Basit ama hızlı bir tanıtım sitesi, doğru Google profili.' },
    ],
    aramalar: ['dilovası web tasarım', 'dilovası kurumsal web sitesi', 'dilovası nakliye firması', 'dilovası sanayi seo'],
    komsular: ['gebze', 'cayirova', 'darica'],
    sss: [
      { q: 'Dilovası\'ndaki B2B firma için hangi sayfalar şart?', a: 'Ürün/hizmet sayfaları, kapasite ve sertifika bilgisi, referanslar ve talep formu. Alıcı karar vermeden önce firmanın gerçek ve kurumsal olduğunu görmek ister.' },
      { q: 'İngilizce sayfa gerekli mi?', a: 'İhracat yapıyorsan veya yabancı alıcıyla çalışıyorsan evet. Aksi halde önce Türkçe yapıyı oturtmak daha verimli.' },
      { q: 'Mevcut sitem var ama sonuç getirmiyor, ne yapmalıyım?', a: 'Önce sitenin Google\'da görünüp görünmediğine, hızına ve içeriğinin aranılan kelimelerle eşleşip eşleşmediğine bakılır. Çoğu zaman yeniden yazım yeterli, sıfırdan yapmak gerekmez.' },
    ],
  },
  {
    slug: 'korfez',
    name: 'Körfez',
    il: 'Kocaeli',
    tur: 'Kocaeli ilçesi',
    intro:
      'Körfez, hem sanayisi hem de Hereke gibi tarihî mahalleleriyle iki yüzü olan bir ilçe. Sanayi tarafı kurumsal aramalar, sahil ve Hereke tarafı turizm ve yerel esnaf aramaları getiriyor.',
    ekonomi:
      'Tüpraş İzmit Rafinerisi ve çevre sanayi tesisleri nedeniyle servis, nakliye ve teknik hizmet firmaları yoğun. Öte yandan Hereke\'nin halı ve ipek dokuma geçmişi, el sanatları ve butik üreticiler için bu ilçeye özgü bir marka hikâyesi sunuyor.',
    sektorler: [
      { ad: 'Endüstriyel servis ve tedarik', oneri: 'Hizmet kapsamı, sertifika ve referans sayfaları; "Körfez + hizmet" aramaları için yerel içerik.' },
      { ad: 'Hereke el sanatı ve butik üretim', oneri: 'Hikâye odaklı ürün sayfaları, e-ticaret altyapısı ve görsel ağırlıklı yapı.' },
      { ad: 'Nakliye ve liman ilişkili hizmetler', oneri: 'Hizmet bölgeleri, fiyat talep formu ve harita kaydı.' },
      { ad: 'Yerel esnaf ve sağlık', oneri: 'Hızlı tanıtım sitesi, randevu ve WhatsApp iletişimi.' },
    ],
    aramalar: ['körfez web tasarım', 'körfez seo', 'körfez kurumsal site', 'hereke halı online satış'],
    komsular: ['derince', 'gebze', 'darica'],
    sss: [
      { q: 'Hereke\'de el sanatı üretiyorum, internetten satış yapabilir miyim?', a: 'Evet. Ürün hikâyesi, kaliteli fotoğraf ve doğru anahtar kelimelerle hem Türkiye hem yurt dışı için e-ticaret kurulabilir. Başlangıçta küçük bir katalog ve talep formuyla da denemek mümkün.' },
      { q: 'Sanayi tarafındaki firmam için neden yerel SEO?', a: 'Alıcılar çoğu zaman "Körfez + ihtiyaç" diye arıyor. Yerel sayfa ve harita kaydı, genel ajans sitelerinin önüne geçmenin en kolay yolu.' },
      { q: 'Site yayına girdikten sonra destek var mı?', a: 'İçerik ve teknik güncellemeler için aylık bakım paketi sunuyoruz, ayrıca temel düzenlemeleri senin yapabileceğin bir panel kuruyoruz.' },
    ],
  },
  {
    slug: 'derince',
    name: 'Derince',
    il: 'Kocaeli',
    tur: 'Kocaeli ilçesi',
    intro:
      'Derince, İzmit ve Körfez arasında liman ve lojistik kimliğiyle öne çıkan bir ilçe. Arama kalabalığı az olduğu için bir işletmenin ilk sayfada yer alması çoğu zaman birkaç hafta içinde mümkün.',
    ekonomi:
      'Derince Limanı ve çevresindeki depolama, taşımacılık ve gümrük hizmetleri ilçenin ticari omurgası. Bunun yanında mahalle esnafı, sağlık ve eğitim işletmeleri de yerel aramalardan müşteri bulmak istiyor.',
    sektorler: [
      { ad: 'Lojistik, depolama ve gümrük', oneri: 'Hizmet türü ve kapasite sayfaları, fiyat/teklif talebi formu, "Derince nakliye" gibi aramalara yönelik içerik.' },
      { ad: 'Dış ticaret ve konteyner hizmetleri', oneri: 'İngilizce özet sayfa, sertifika ve referanslar, kurumsal güven unsurları.' },
      { ad: 'Yerel esnaf ve atölyeler', oneri: 'Hızlı tanıtım sitesi, harita kaydı ve WhatsApp düğmesi.' },
      { ad: 'Sağlık ve eğitim', oneri: 'Randevu sayfası ve yorum yönetimi.' },
    ],
    aramalar: ['derince web tasarım', 'derince lojistik firması', 'derince nakliyat', 'derince seo'],
    komsular: ['korfez', 'gebze', 'basiskele'],
    sss: [
      { q: 'Derince\'deki lojistik firmam için ne tür bir site uygun?', a: 'Hizmetleri, kapasiteyi ve çalışma bölgelerini net anlatan, teklif formu olan sade ve hızlı bir kurumsal site. Alıcı kısa sürede güven ve iletişim yolu görmek ister.' },
      { q: 'Rekabet az olduğuna göre bu kadar hızlı sonuç beklenir mi?', a: 'Az rekabetli aramalarda ilk sayfaya girmek genelde haftalar içinde olur, ama garantili bir süre veremeyiz. Sıralama sayfa kalitesine ve Google\'ın güvenine bağlı.' },
      { q: 'Dil seçeneği ekleyebilir miyiz?', a: 'Evet, Türkçe ile başlayıp İngilizce sayfaları sonradan ekleyebiliriz.' },
    ],
  },
  {
    slug: 'golcuk',
    name: 'Gölcük',
    il: 'Kocaeli',
    tur: 'Kocaeli ilçesi',
    intro:
      'Gölcük, bir yanda tersane ve otomotiv sanayisi, diğer yanda sahili ve Hisar bölgesiyle çift yönlü bir ilçe. Arama kalabalığı İzmit\'e göre çok daha az, yani yerel aramalarda öne çıkmak nispeten kolay.',
    ekonomi:
      'Donanma Komutanlığı ve Gölcük Tersanesi ile ilişkili yan sanayi, Ford Otosan Gölcük fabrikasının tedarik zinciri ve sahil şeridindeki işletmeler ilçenin ekonomisini belirliyor. Sahil ve yazlık nüfus sezonluk talep yaratıyor.',
    sektorler: [
      { ad: 'Yan sanayi ve atölyeler', oneri: 'Kapasite ve ürün sayfaları, kurumsal referans bölümü, talep formu.' },
      { ad: 'Sahil işletmeleri ve konaklama', oneri: 'Sezonluk içerikler, rezervasyon sayfası, harita fotoğrafları ve yorum akışı.' },
      { ad: 'Oto servis ve bakım', oneri: 'Hizmet ve fiyat sayfaları, "Gölcük oto servis" gibi aramaları hedefleyen yerel içerik.' },
      { ad: 'Emlak ve yazlık kiralama', oneri: 'Bölge rehberi içerikleri ve ilan sayfaları.' },
    ],
    aramalar: ['gölcük web tasarım', 'gölcük seo', 'gölcük oto servis', 'gölcük yazlık kiralama'],
    komsular: ['karamursel', 'basiskele', 'derince'],
    sss: [
      { q: 'Gölcük\'te yazlık/otel işletiyorum, sezon dışında da görünür olur muyum?', a: 'Evet, çünkü içerikler sezon öncesinde planlanır ve arama motorları bunları aylar öncesinden dizinler. Sezon başlamadan önce hazır olmak asıl fark yaratır.' },
      { q: 'Küçük bir işletme için tek sayfalık site yeter mi?', a: 'Çok küçük işletmeler için tek sayfa başlangıçta yeterli olabilir ama birkaç hizmet sayfası eklemek Google\'da daha fazla arama kapsıyor.' },
      { q: 'Google haritada kaydım yok, nereden başlayalım?', a: 'Önce Google İşletme Profilini oluşturup doğrularız, sonra web sitesini buna bağlarız.' },
    ],
  },
  {
    slug: 'basiskele',
    name: 'Başiskele',
    il: 'Kocaeli',
    tur: 'Kocaeli ilçesi',
    intro:
      'Başiskele, Kocaeli\'nin en hızlı konutlaşan ilçelerinden biri. Yeni mahallelere taşınan nüfus ilk kez doktor, kuaför, okul, emlakçı ve tamirci arıyor; yani yerel aramaların henüz "oturmadığı" bir alan.',
    ekonomi:
      'Seymen, Yuvacık ve Kullar çevresinde yeni siteler, küçük sanayi alanları ve hizmet işletmeleri büyüyor. Yuvacık ve çevresindeki doğa alanları da günübirlik turizm aramalarını destekliyor.',
    sektorler: [
      { ad: 'Emlak ve inşaat', oneri: 'Mahalle ve proje rehberi sayfaları, "Başiskele satılık" aramalarına yönelik yapı.' },
      { ad: 'Sağlık, eğitim ve çocuk hizmetleri', oneri: 'Randevu sayfası, yorum yönetimi ve Google profili.' },
      { ad: 'Kafe ve restoran', oneri: 'Menü, rezervasyon ve harita fotoğrafı akışı.' },
      { ad: 'Küçük sanayi ve atölyeler', oneri: 'Hizmet/ürün sayfaları ve telefon dönüşümü odaklı sade yapı.' },
    ],
    aramalar: ['başiskele web tasarım', 'başiskele seo', 'başiskele emlak sitesi', 'başiskele klinik web sitesi'],
    komsular: ['kartepe', 'derince', 'golcuk'],
    sss: [
      { q: 'Yeni açılan bir işletmeyim, Google beni nasıl bulur?', a: 'Önce Google İşletme Profili ve sitenin temel SEO yapısı kurulur. Yeni işletmelerde ilk 1-2 ay yorum ve içerik biriktirmek sıralamayı belirliyor.' },
      { q: 'Mahalle bazlı sayfa mantıklı mı?', a: 'Başiskele\'de nüfus yeni olduğu için insanlar mahalle adıyla arıyor. Gerçek içerik olduğu sürece mahalle bazlı kısa sayfalar işe yarıyor; boş şablon sayfalar yarar sağlamaz.' },
      { q: 'Reklam mı SEO mu?', a: 'Reklam hemen sonuç verir ama durduğunda biter, SEO ise zamanla birikir. Bütçe sınırlıysa önce SEO ve harita görünürlüğü, sonra gerekirse küçük bir reklam öneririz.' },
    ],
  },
  {
    slug: 'kartepe',
    name: 'Kartepe',
    il: 'Kocaeli',
    tur: 'Kocaeli ilçesi',
    intro:
      'Kartepe, kayak merkezi ve Maşukiye\'siyle mevsimsel arama patlamaları olan bir ilçe. Kış sezonunda yüzlerce kişi aynı kelimeleri arıyor; o dönemden önce hazır olan işletme büyük avantaj sağlıyor.',
    ekonomi:
      'Kartepe Kayak Merkezi, Maşukiye ve Sapanca Gölü çevresindeki otel, bungalov, restoran ve etkinlik işletmeleri turizm ağırlıklı. Ayrıca ilçe genelinde yeni konutlaşan bölgeler günlük hizmet aramalarını artırıyor.',
    sektorler: [
      { ad: 'Otel, bungalov ve butik konaklama', oneri: 'Rezervasyon sayfası, oda/paket sayfaları, sezon öncesi yayın ve yorum akışı.' },
      { ad: 'Restoran ve kahvaltı mekânları', oneri: 'Menü sayfası, harita fotoğrafları, hafta sonu ve kış sezonu içerikleri.' },
      { ad: 'Kayak ve etkinlik hizmetleri', oneri: 'Kiralama ve paket sayfaları, kış başlamadan önce hazır SEO yapısı.' },
      { ad: 'Yerel esnaf', oneri: 'Basit ve hızlı tanıtım sitesi, doğru Google profili.' },
    ],
    aramalar: ['kartepe web tasarım', 'kartepe otel web sitesi', 'maşukiye bungalov', 'kartepe kahvaltı'],
    komsular: ['basiskele', 'sapanca', 'derince'],
    sss: [
      { q: 'Sezon öncesi ne zaman başlamalıyız?', a: 'Kış sezonu için en geç yaz sonunda, yaz sezonu için kış sonunda başlamak gerekir. Google yeni içeriği dizinleyip güven kazanması için haftalar ister.' },
      { q: 'Rezervasyonu doğrudan sitemden almak mümkün mü?', a: 'Evet. Basit bir rezervasyon formu ve WhatsApp ile başlanıp, ihtiyaca göre online rezervasyon sistemine geçilebilir.' },
      { q: 'Sapanca ve Kartepe için tek site yeterli mi?', a: 'Bölge yakın olduğu için tek sitede iki ayrı bölüm tutulabilir, ama her biri için ayrı sayfa ve ayrı anahtar kelime çalışması yapılması daha iyi sonuç verir.' },
    ],
  },
  {
    slug: 'cayirova',
    name: 'Çayırova',
    il: 'Kocaeli',
    tur: 'Kocaeli ilçesi',
    intro:
      'Çayırova, organize sanayisi ve otomotiv tedarik firmalarıyla bilinen, aynı zamanda hızla büyüyen bir konut ilçesi. Hem kurumsal hem bireysel aramalar var ve ikisi de az rekabetli.',
    ekonomi:
      'TOSB (Otomotiv Tedarik Sanayicileri Organize Sanayi Bölgesi) ve çevresindeki fabrikalar iş arayan, tedarikçi arayan ve servis arayan firmaları çekiyor. Şekerpınar ve çevresindeki konut bölgelerinde ise hizmet işletmeleri büyüyor.',
    sektorler: [
      { ad: 'Otomotiv yan sanayi', oneri: 'Kapasite, sertifika ve ürün sayfaları, İngilizce özet, talep formu.' },
      { ad: 'Endüstriyel servis ve malzeme', oneri: 'Hizmet sayfaları ve acil servis çağrısı dönüşümü.' },
      { ad: 'Sağlık ve güzellik', oneri: 'Randevu sayfası, yorum yönetimi, harita profili.' },
      { ad: 'Emlak ve konut projeleri', oneri: 'Bölge rehberi ve proje sayfaları.' },
    ],
    aramalar: ['çayırova web tasarım', 'çayırova seo', 'tosb tedarikçi web sitesi', 'çayırova kurumsal site'],
    komsular: ['gebze', 'dilovasi', 'darica'],
    sss: [
      { q: 'Otomotiv tedarikçisiyim, web sitesi bana ne katar?', a: 'Alıcıların yeni tedarikçi araştırırken ilk baktığı yer web siteniz olur. Kapasiteniz, sertifikalarınız ve referanslarınız net görünürse görüşme daha kolay başlar.' },
      { q: 'Küçük bir atölyeyim, kurumsal site gereksiz mi?', a: 'Basit ama hızlı ve düzenli bir site yeterli. Önemli olan telefonunuzun ve hizmetinizin net görünmesi.' },
      { q: 'Bakım ve güncelleme nasıl yapılıyor?', a: 'Basit içerik değişikliklerini kendiniz yapabilirsiniz, teknik işler için aylık bakım paketi var.' },
    ],
  },
  {
    slug: 'karamursel',
    name: 'Karamürsel',
    il: 'Kocaeli',
    tur: 'Kocaeli ilçesi',
    intro:
      'Karamürsel, sahil kasabası havasıyla yaz aylarında nüfusu artan, kış aylarında sakin bir ilçe. Burada rekabet çok düşük; bu yüzden birkaç sayfalık bir site bile yerel aramalarda hızlıca görünür olabiliyor.',
    ekonomi:
      'Sahil şeridi, yazlık konutlar, küçük esnaf ve tarım ürünü işleyen işletmeler ekonominin ana parçası. Yaz sezonunda yazlıkçı ve günübirlikçi aramaları belirgin şekilde artıyor.',
    sektorler: [
      { ad: 'Yazlık kiralama ve emlak', oneri: 'Konum ve dönem bazlı ilan sayfaları, sezon öncesi yayın.' },
      { ad: 'Restoran ve sahil işletmeleri', oneri: 'Menü, rezervasyon ve harita fotoğrafları.' },
      { ad: 'Yöresel gıda ve üreticiler', oneri: 'Hikâye odaklı ürün sayfaları ve basit online sipariş akışı.' },
      { ad: 'Esnaf ve hizmet', oneri: 'Hızlı tanıtım sitesi ve telefon dönüşümü.' },
    ],
    aramalar: ['karamürsel web tasarım', 'karamürsel yazlık kiralık', 'karamürsel restoran', 'karamürsel seo'],
    komsular: ['golcuk', 'basiskele', 'yalova'],
    sss: [
      { q: 'Kış aylarında sakin olan bir ilçede site işe yarar mı?', a: 'Evet, çünkü yazlıkçılar ve sezon müşterileri kararlarını kış sonu/ilkbaharda vermeye başlıyor. Sezon öncesi yayında olmak asıl avantaj.' },
      { q: 'Yöresel ürünümü Türkiye geneline satabilir miyim?', a: 'Evet, ürün hikâyesi ve doğru kategori yapısıyla e-ticaret sitesi kurulabilir. Önce küçük bir katalogla başlayıp talebe göre genişletmek mantıklı.' },
      { q: 'Maliyet hakkında fikir alabilir miyim?', a: 'Kapsama göre değişir; ücretsiz görüşmede ihtiyacı konuşup net bir fiyat çıkarıyoruz.' },
    ],
  },
  {
    slug: 'kandira',
    name: 'Kandıra',
    il: 'Kocaeli',
    tur: 'Kocaeli ilçesi',
    intro:
      'Kandıra, Karadeniz kıyısı ve geniş kırsal alanıyla Kocaeli içinde en az dijital rekabet olan ilçelerden biri. Kerpe, Kefken ve Cebeci gibi sahiller yaz aylarında günübirlikçi ve kamp aramalarını yönlendiriyor.',
    ekonomi:
      'Turizm, tarım ve hayvancılık, ormancılık ve küçük gıda üretimi ilçenin başlıca gelir kalemleri. Birçok işletmenin hâlâ hiç web sitesi yok; bu da ilk hazırlayan için büyük avantaj demek.',
    sektorler: [
      { ad: 'Kamp, pansiyon ve günübirlik işletmeler', oneri: 'Rezervasyon sayfası, "Kerpe/Kefken/Cebeci" gibi yer adları üzerinden içerik, harita fotoğrafları.' },
      { ad: 'Yöresel gıda ve çiftlik ürünleri', oneri: 'Hikâye odaklı ürün sayfaları ve basit sipariş akışı.' },
      { ad: 'Restoran ve kahvaltı', oneri: 'Menü, konum ve yol tarifi sayfası.' },
      { ad: 'Küçük üretim ve esnaf', oneri: 'Tanıtım sitesi, WhatsApp iletişimi.' },
    ],
    aramalar: ['kandıra web tasarım', 'kerpe kamp', 'kandıra kahvaltı', 'kefken pansiyon'],
    komsular: ['karamursel', 'derince', 'duzce'],
    sss: [
      { q: 'Hiç sitem yok, sıfırdan başlamam gerekir mi?', a: 'Evet ama bu bir avantaj. Rekabet az olduğu için temiz kurulmuş basit bir site ve Google profili ile hızlı görünürlük kazanılabilir.' },
      { q: 'Kamp işletmemi sezon dışında da tanıtır mıyım?', a: 'İçerik ve harita profili yıl boyu görünür kalır, sezon başlamadan önce rezervasyon aramaları başlar.' },
      { q: 'İnternet altyapım zayıf, site yönetebilir miyim?', a: 'Site bulutta çalışır, sizin tarafınızda sadece telefon veya basit bir panelle içerik girmeniz yeterli.' },
    ],
  },
  {
    slug: 'sakarya',
    name: 'Sakarya',
    il: 'Sakarya',
    tur: 'Sakarya ili',
    intro:
      'Sakarya, Kocaeli ile Düzce arasında, sanayi, eğitim ve turizmin bir arada bulunduğu bir il. "Sakarya" ile başlayan aramalar il genelindeki hizmetleri, ilçe adlarıyla yapılan aramalar ise daha yerel ihtiyaçları ifade ediyor; iki arama biçimini birlikte ele almak gerekiyor.',
    ekonomi:
      'Otomotiv ve yan sanayi, makine ve metal işleme, gıda ve tarım ilin ekonomik omurgasını oluşturuyor. Sakarya Üniversitesi çevresindeki öğrenci ve akademik nüfus hizmet sektörünü canlı tutarken Sapanca Gölü ve Karadeniz kıyısı turizm talebi yaratıyor. Bu çeşitlilik, her sektör için ayrı bir dijital yaklaşım gerektiriyor.',
    sektorler: [
      { ad: 'Otomotiv yan sanayi ve üretim', oneri: 'Kapasite, sertifika ve ürün grubu sayfaları; teklif talep formu ve yurt dışı alıcılar için İngilizce özet.' },
      { ad: 'Sağlık ve klinikler', oneri: 'Tedavi ve hekim sayfaları, randevu akışı, Google İşletme Profili ve teşviksiz gerçek yorum stratejisi.' },
      { ad: 'Eğitim ve kurs merkezleri', oneri: 'Program, takvim ve kayıt sayfaları; öğrenci ve veli sorularına net cevaplar.' },
      { ad: 'Turizm ve konaklama', oneri: 'Sapanca ve kıyı bölgesi için rezervasyon odaklı sayfalar, sezon öncesi içerik planı.' },
      { ad: 'Perakende ve yerel hizmetler', oneri: 'Hizmet bölgesi bilgisi, hızlı iletişim ve doğrulanmış harita kaydı.' },
    ],
    aramalar: ['sakarya web tasarım', 'sakarya seo', 'sakarya dijital ajans', 'sakarya kurumsal web sitesi'],
    komsular: ['adapazari', 'serdivan', 'sapanca', 'duzce'],
    sss: [
      { q: 'Sakarya ve Adapazarı için ayrı sayfa gerekir mi?', a: '"Sakarya" il genelindeki, "Adapazarı" ise merkez ilçedeki aramaları karşılar. Hizmet alanınız ilin tamamını kapsıyorsa il sayfası, belirli ilçelerdeyse ilçe sayfaları öne çıkarılmalıdır.' },
      { q: 'Sakarya\'da dijital rekabet nasıl?', a: 'İstanbul ve Kocaeli ile karşılaştırıldığında belirgin şekilde daha düşük. Sektör ve ilçe odaklı aramalarda iyi kurgulanmış sayfalarla görece kısa sürede görünürlük elde etmek mümkündür; süre rekabete göre değişir.' },
      { q: 'Sanayi firması olarak sosyal medya mı, web sitesi mi öncelikli?', a: 'B2B alıcılar tedarikçi ararken çoğunlukla arama motorunu ve firma web sitesini kullanır. Bu nedenle kurumsal, ürün ve kapasite bilgisi net bir web sitesi önceliklidir; sosyal medya bunu destekleyen bir kanaldır.' },
    ],
  },
  {
    slug: 'adapazari',
    name: 'Adapazarı',
    il: 'Sakarya',
    tur: 'Sakarya merkez ilçesi',
    intro:
      'Adapazarı, Sakarya\'nın ticaret merkezi ve Kocaeli\'ne komşu. "Adapazarı" ve "Sakarya" aramaları farklı kullanıcı kitlelerine ait; ikisini birlikte hedeflemek mümkün ve rekabet İzmit ya da İstanbul\'a göre çok düşük.',
    ekonomi:
      'Otomotiv yan sanayi, ticaret, tarım ve gıda üretimi ile eğitim sektörü bölgenin önemli alanları. Sakarya Üniversitesi\'nin varlığı öğrenci ve akademik personelden gelen hizmet aramalarını da besliyor.',
    sektorler: [
      { ad: 'Otomotiv yan sanayi ve üretim', oneri: 'Kapasite ve sertifika sayfaları, talep formu, İngilizce özet.' },
      { ad: 'Klinik, diş ve sağlık', oneri: 'Tedavi sayfaları, randevu ve yorum yönetimi.' },
      { ad: 'Perakende ve e-ticaret', oneri: 'Kategori sayfaları ve yerel teslimat/mağaza bilgisi.' },
      { ad: 'Eğitim ve kurs merkezleri', oneri: 'Program sayfaları ve kayıt formu.' },
    ],
    aramalar: ['adapazarı web tasarım', 'sakarya seo', 'adapazarı kurumsal web sitesi', 'sakarya web tasarım ajansı'],
    komsular: ['sakarya', 'serdivan', 'sapanca', 'kartepe'],
    sss: [
      { q: 'Sakarya mı Adapazarı mı hedeflemeliyim?', a: 'İkisi de aranıyor. Genel şehir hedefi için "Sakarya", ilçe düzeyi için "Adapazarı" kullanılıyor; sayfa içeriğinde ikisi de doğal şekilde geçmeli.' },
      { q: 'Sakarya\'da rekabet nasıl?', a: 'İstanbul ve Kocaeli\'ye göre çok daha düşük. Az sayıda ajans yerel kelimelere odaklı çalışıyor, bu yüzden iyi hazırlanmış sayfalar kısa sürede öne çıkabiliyor.' },
      { q: 'Sakarya dışındaki müşterilere de ulaşabilir miyim?', a: 'Evet, sitenin yapısı bölgesel hedeflemeyi bozmadan Türkiye geneli aramaları da kapsayacak şekilde kurulabilir.' },
    ],
  },
  {
    slug: 'serdivan',
    name: 'Serdivan',
    il: 'Sakarya',
    tur: 'Sakarya ilçesi',
    intro:
      'Serdivan, üniversite kampüsü ve yeni alışveriş ve yaşam bölgeleriyle Sakarya\'nın en genç nüfuslu ilçesi. Burada aramaların büyük kısmı mobilden, öğrenci ve genç aile odaklı yapılıyor.',
    ekonomi:
      'Sakarya Üniversitesi çevresinde kafe, kırtasiye, stüdyo, kurs ve hızlı tüketim işletmeleri yoğunlaşmış. Genç nüfus yeni işletmeleri sosyal medya ve Google üzerinden keşfediyor.',
    sektorler: [
      { ad: 'Kafe, restoran ve eğlence', oneri: 'Menü ve kampanya sayfası, harita fotoğrafları ve Instagram bağlantısı.' },
      { ad: 'Kurs, dil ve eğitim merkezleri', oneri: 'Program ve fiyat sayfaları, kayıt formu, yorum yönetimi.' },
      { ad: 'Sağlık ve estetik', oneri: 'Randevu sayfası ve yerel harita profili.' },
      { ad: 'Emlak ve öğrenci evi', oneri: 'Bölge rehberi içerikleri ve ilan sayfaları.' },
    ],
    aramalar: ['serdivan web tasarım', 'serdivan kafe', 'serdivan kurs merkezi', 'serdivan seo'],
    komsular: ['sakarya', 'adapazari', 'sapanca', 'kartepe'],
    sss: [
      { q: 'Öğrenci hedef kitlesi için site tasarımı farklı mı?', a: 'Evet. Mobil öncelikli, hızlı yüklenen, fiyat ve konumu hemen gösteren bir yapı gerekir. Uzun metin yerine kısa ve net bilgi daha iyi çalışır.' },
      { q: 'Instagram varken site gerekli mi?', a: 'Sosyal medya keşif için iyi ama Google aramasından gelen müşteriyi sadece web sitesi ve harita profili yakalar. İkisi birbirini tamamlar.' },
      { q: 'Küçük bütçeyle nereden başlanır?', a: 'Önce sade bir tanıtım sitesi ve doğrulanmış Google profili. Sonra içerik ve yorumlarla büyütülür.' },
    ],
  },
  {
    slug: 'sapanca',
    name: 'Sapanca',
    il: 'Sakarya',
    tur: 'Sakarya ilçesi',
    intro:
      'Sapanca, göl manzaralı bungalov, butik otel ve villa kiralama aramalarının yoğun olduğu bir ilçe. Hafta sonu ve tatil dönemlerinde arama hacmi çok yükseliyor; doğrudan rezervasyon alan bir site büyük fark yaratıyor.',
    ekonomi:
      'Turizm ve konaklama ekonominin ana kalemi. Birçok işletme rezervasyon platformlarına komisyon veriyor; kendi sitesi ve Google profili güçlü olan işletme bu komisyonu azaltabiliyor.',
    sektorler: [
      { ad: 'Bungalov, butik otel ve villa', oneri: 'Oda/ev sayfaları, doğrudan rezervasyon formu, sezon öncesi kampanya içeriği, harita ve yorum yönetimi.' },
      { ad: 'Restoran ve kahvaltı mekânları', oneri: 'Menü, rezervasyon ve gölle ilgili aramalara yönelik içerik.' },
      { ad: 'Aktivite ve etkinlik hizmetleri', oneri: 'Paket sayfaları ve online talep akışı.' },
      { ad: 'Yerel gıda ve hediyelik ürünler', oneri: 'Hikâye odaklı ürün sayfaları ve basit sipariş akışı.' },
    ],
    aramalar: ['sapanca web tasarım', 'sapanca bungalov', 'sapanca otel web sitesi', 'sapanca villa kiralama'],
    komsular: ['sakarya', 'kartepe', 'serdivan', 'adapazari'],
    sss: [
      { q: 'Rezervasyon platformlarından bağımsız olabilir miyim?', a: 'Tamamen bağımsız olmak zor ama doğrudan rezervasyon payını artırmak mümkün. Site ve Google profili güçlendikçe komisyon veren aracılara bağımlılık azalır.' },
      { q: 'Rekabet ne kadar yüksek?', a: 'Sapanca\'da konaklama aramaları rekabetli, o yüzden dar ve özgün aramalar (mekân türü, özellik, konum) üzerinden başlamak daha mantıklı.' },
      { q: 'Sezon öncesi ne zaman başlamalıyız?', a: 'Yaz için ilkbahar başında, kış ve yılbaşı için yaz sonunda içerik yayında olmalı.' },
    ],
  },
  {
    slug: 'yalova',
    name: 'Yalova',
    il: 'Yalova',
    tur: 'Yalova ili',
    intro:
      'Yalova, termal turizmi ve İstanbul\'a deniz ulaşımıyla bilinen küçük bir il. Küçük olduğu için rekabet azdır ve yerel aramalarda ilk sayfaya girmek diğer büyük şehirlere göre çok daha ulaşılabilir.',
    ekonomi:
      'Termal, Çınarcık, Armutlu ve Altınova çevresinde otel, termal tesis, restoran ve emlak yoğun. Ayrıca bölgede çiçekçilik, fidancılık ve sera tarımı da öne çıkıyor.',
    sektorler: [
      { ad: 'Termal otel ve konaklama', oneri: 'Paket ve oda sayfaları, doğrudan rezervasyon, sağlık/dinlenme odaklı içerik.' },
      { ad: 'Emlak ve yazlık', oneri: 'Bölge rehberi (Çınarcık, Armutlu, Altınova) ve ilan sayfaları.' },
      { ad: 'Fidancılık, çiçekçilik ve tarım', oneri: 'Ürün sayfaları, katalog ve toptan satış talep formu.' },
      { ad: 'Restoran ve yerel esnaf', oneri: 'Menü, konum ve harita profili.' },
    ],
    aramalar: ['yalova web tasarım', 'yalova seo', 'çınarcık otel web sitesi', 'yalova termal otel'],
    komsular: ['cinarcik', 'armutlu', 'altinova', 'ciftlikkoy', 'yalova-termal', 'karamursel'],
    sss: [
      { q: 'Yalova\'da nüfus az, internetten müşteri bulunur mu?', a: 'Yerel nüfustan çok turist ve İstanbul\'dan gelen ziyaretçiyi hedeflemek gerekir. Bu kitle internetten arama yaparak karar veriyor.' },
      { q: 'Termal turizmde rakipler kimler?', a: 'Rezervasyon platformları ve büyük otel zincirleri. Ancak dar ve özgün aramalarda (örn. belirli bir hizmet veya konum) küçük işletmeler de öne çıkabiliyor.' },
      { q: 'Çınarcık, Armutlu ve Altınova için ayrı sayfa gerekir mi?', a: 'Her biri farklı bir arama kitlesine sahip: Çınarcık ve Armutlu tatil, Altınova sanayi, Termal ise sağlık ve dinlenme odaklı. Bu yüzden her ilçe için ayrı bir rehber sayfamız var, bu sayfalardan işletmenize uygun olanı inceleyebilirsiniz.' },
    ],
  },
  {
    slug: 'cinarcik',
    name: 'Çınarcık',
    il: 'Yalova',
    tur: 'Yalova ilçesi',
    intro:
      'Çınarcık, Marmara kıyısındaki sahil beldesi kimliğiyle yaz aylarında nüfusu belirgin biçimde artan bir ilçe. İstanbul ve çevre illerden gelen tatilciler karar vermeden önce internette arama yapıyor; rezervasyonu ve ilk izlenimi sitesi ve harita profili belirliyor.',
    ekonomi:
      'Otel, pansiyon, apart ve yazlık siteleri ilçenin ana gelir kaynağı. Bunlara kıyı restoranları, balık lokantaları, günübirlik tesisler ve emlak ofisleri eşlik ediyor. Talep sezonluk: ilkbaharda tatil kararı ve rezervasyon aramaları başlıyor, bu yüzden içeriklerin sezondan önce yayında olması gerekiyor.',
    sektorler: [
      { ad: 'Otel, pansiyon ve apart konaklama', oneri: 'Oda sayfaları, doğrudan rezervasyon formu, "çocuklu aileye uygun", "denize sıfır" gibi özelliklere göre içerik ve yorum akışı.' },
      { ad: 'Yazlık satış ve kiralama', oneri: 'Mahalle ve site bazlı ilan sayfaları, dönemsel kiralama bilgisi, sezon öncesi içerik yayını.' },
      { ad: 'Restoran, balık lokantası ve plaj işletmeleri', oneri: 'Menü ve rezervasyon sayfası, harita fotoğrafları, hafta sonu ve yaz sezonu için güncel içerik.' },
      { ad: 'Tekne turu, spor ve aktivite hizmetleri', oneri: 'Paket ve fiyat talep sayfaları, mevsimlik takvim, WhatsApp ile hızlı iletişim.' },
      { ad: 'Yerel esnaf ve hizmet', oneri: 'Hızlı açılan tanıtım sitesi, doğru Google profili, telefonla tek dokunuşla arama.' },
    ],
    aramalar: ['çınarcık web tasarım', 'çınarcık otel web sitesi', 'çınarcık emlak sitesi', 'çınarcık yazlık kiralama'],
    komsular: ['yalova', 'armutlu', 'yalova-termal'],
    sss: [
      { q: 'Çınarcık\'ta sezon dışında site gerekli mi?', a: 'Evet, çünkü tatil kararı ve rezervasyon aramaları sezondan aylar önce başlıyor. Sitenin ve Google profilinin ilkbahardan önce hazır olması, sezonun ilk haftasında dolu olmayı etkiliyor.' },
      { q: 'Rezervasyon platformlarına komisyon veriyorum, siteyle azalır mı?', a: 'Tamamen ortadan kalkmaz ama doğrudan rezervasyon payı artırılabilir. Güçlü bir site, doğru bilgi ve yorumlar misafirin sizi doğrudan aramasını kolaylaştırır.' },
      { q: 'Çınarcık için hangi aramaları hedeflemek mantıklı?', a: 'Geniş aramalar ("Çınarcık otel") rekabetli; özellik ve konum odaklı aramalar (denize sıfır, çocuklu aile, belirli bir mahalle) daha ulaşılabilir. Hedefler işletmenin gerçek özelliklerine göre seçilir.' },
      { q: 'Yazlık satan bir emlakçıyım, ne tür sayfalar işe yarar?', a: 'Mahalle ve site rehberleri, gerçek fotoğraflı ilanlar, ulaşım ve çevre bilgisi. Şablon metinle çoğaltılmış sayfalar yerine, her biri için gerçek bilgi içeren sayfalar tercih edilir.' },
    ],
  },
  {
    slug: 'armutlu',
    name: 'Armutlu',
    il: 'Yalova',
    tur: 'Yalova ilçesi',
    intro:
      'Armutlu, deniz ve ormanın bir arada olduğu, tatil ve yazlık odaklı bir yarımada ilçesi. Sakin ve doğa odaklı tatil arayanlar ilçeyi internetteki fotoğraflar, yorumlar ve rezervasyon bilgileriyle seçiyor.',
    ekonomi:
      'Yazlık siteler, butik otel ve pansiyonlar, kamp ve günübirlik alanlar, kıyıdaki restoranlar ve emlak ilçenin ekonomisini oluşturuyor. Yerel nüfus azken yaz nüfusu hızla artıyor; müşteri çoğunlukla ilçe dışından geliyor ve karar verirken internete güveniyor.',
    sektorler: [
      { ad: 'Butik otel, pansiyon ve kamp', oneri: 'Doğal ortamı öne çıkaran fotoğraf ağırlıklı sayfalar, rezervasyon formu, ulaşım ve çevre bilgisi.' },
      { ad: 'Yazlık satış ve kiralama', oneri: 'Mahalle ve site bazlı ilan sayfaları, dönemsel kiralama ve çevre rehberi.' },
      { ad: 'Restoran ve kıyı işletmeleri', oneri: 'Menü, konum ve rezervasyon, hafta sonu için güncel harita fotoğrafları.' },
      { ad: 'Doğa ve açık hava hizmetleri', oneri: 'Yürüyüş, tekne ve etkinlik paketleri için talep sayfaları ve mevsimlik içerik takvimi.' },
      { ad: 'Yerel esnaf ve hizmet', oneri: 'Basit ama hızlı bir tanıtım sitesi ve doğrulanmış Google profili.' },
    ],
    aramalar: ['armutlu web tasarım', 'armutlu otel web sitesi', 'armutlu emlak', 'armutlu yazlık kiralama'],
    komsular: ['cinarcik', 'yalova', 'karamursel'],
    sss: [
      { q: 'Armutlu gibi küçük bir ilçede internetten müşteri gelir mi?', a: 'Müşterinin büyük kısmı ilçe dışından geliyor: İstanbul, Bursa ve çevre iller. Bu kitle tatil yerini internette araştırarak seçtiği için ilçe adının geçtiği aramalarda görünmek doğrudan rezervasyona dönüşebilir.' },
      { q: 'Fotoğrafın önemi ne kadar?', a: 'Doğa odaklı tatilde fotoğraf kararın ana belirleyicisi. Gerçek, güncel ve işletmeye ait fotoğraflar hem site hem Google profili için önceliklidir; stok veya yapay zekâ görselleri güven kaybettirir.' },
      { q: 'Sezon öncesi ne zaman başlamalıyım?', a: 'Yaz sezonu için kış sonunda ya da ilkbahar başında. Arama motorlarının yeni içeriği indeksleyip güven kazanması haftalar sürebiliyor.' },
    ],
  },
  {
    slug: 'altinova',
    name: 'Altınova',
    il: 'Yalova',
    tur: 'Yalova ilçesi',
    intro:
      'Altınova, Yalova\'nın İstanbul tarafındaki kapısı ve ilin sanayi ile tersane faaliyetlerinin yoğun olduğu ilçesi. Burada aramalar tatilden çok iş odaklı: tedarikçi, servis ve kurumsal hizmet arayan firmalar ilçe adıyla arama yapıyor.',
    ekonomi:
      'Gemi inşa ve tersane faaliyetleri ile bunlara bağlı yan sanayi, metal işleme ve lojistik ilçenin iş yapısında öne çıkıyor. Hersek Lagünü çevresi günübirlik ziyaret ve doğa turizmi için de arama çekiyor. Tarım ve sera üretimi de ilçenin geleneksel gelir kalemleri arasında.',
    sektorler: [
      { ad: 'Tersane yan sanayi ve metal işleme', oneri: 'Hizmet ve kapasite sayfaları, referans ve sertifika bölümü, teklif talep formu; İngilizce özet sayfa ihracat için faydalı.' },
      { ad: 'Endüstriyel servis ve bakım', oneri: 'Acil servis ve çağrı sayfaları, telefon ve WhatsApp ile hızlı iletişim, harita kaydı.' },
      { ad: 'Lojistik ve nakliye', oneri: 'Hizmet bölgeleri, araç ve kapasite bilgisi, "Altınova nakliye" gibi yerel aramalara yönelik içerik.' },
      { ad: 'Tarım ve sera ürünleri', oneri: 'Ürün katalogu, toptan satış talep formu, hikâye odaklı üretici sayfası.' },
      { ad: 'Yerel esnaf ve hizmet', oneri: 'Hızlı tanıtım sitesi ve doğrulanmış Google profili.' },
    ],
    aramalar: ['altınova web tasarım', 'altınova kurumsal web sitesi', 'altınova nakliye firması', 'altınova sanayi seo'],
    komsular: ['yalova', 'ciftlikkoy', 'gebze'],
    sss: [
      { q: 'B2B bir firmayım, hangi sayfalar şart?', a: 'Hizmet ve ürün sayfaları, kapasite ve sertifika bilgisi, gerçek referanslar ve teklif formu. Alıcı karar vermeden önce firmanın gerçek ve kurumsal olduğunu görmek ister.' },
      { q: 'İngilizce sayfa gerekli mi?', a: 'Yurt dışı alıcıyla çalışıyorsanız evet. Aksi halde önce güçlü bir Türkçe yapı kurup sonra İngilizce özet ya da hizmet sayfaları eklemek daha verimli.' },
      { q: 'Gebze ve İstanbul tarafındaki rakiplerle nasıl yarışırım?', a: 'Genel aramalarda büyük şehirlerin rakipleriyle yarışmak zor; ama "Altınova + hizmet" gibi dar aramalarda daha az rekabet var. Hedef kitleniz Altınova çevresindeyse yerel sayfa ve harita kaydı en hızlı yol.' },
    ],
  },
  {
    slug: 'ciftlikkoy',
    name: 'Çiftlikköy',
    il: 'Yalova',
    tur: 'Yalova ilçesi',
    intro:
      'Çiftlikköy, Yalova merkeze komşu, konut, küçük sanayi ve tarımın bir arada olduğu ilçe. Yerel hizmet aramaları (usta, servis, klinik, kurs) mahalle düzeyinde yapılıyor ve bu aramalarda rekabet çok düşük.',
    ekonomi:
      'Konut bölgeleri büyüdükçe sağlık, eğitim, güzellik, oto servis ve ev hizmetleri gibi gündelik ihtiyaçlar için ilçe adıyla arama artıyor. Bunun yanında küçük üretim atölyeleri ve tarımsal faaliyetler de ilçenin ekonomisinde yer alıyor.',
    sektorler: [
      { ad: 'Sağlık, güzellik ve eğitim', oneri: 'Randevu sayfası, hizmet başına ayrı sayfa, yorum yönetimi ve harita profili.' },
      { ad: 'Oto servis ve teknik hizmetler', oneri: 'Hizmet ve fiyat bilgisi sayfaları, çalışma saatleri, WhatsApp ile hızlı randevu.' },
      { ad: 'Emlak ve inşaat', oneri: 'Mahalle rehberi, proje ve ilan sayfaları, gerçek fotoğraflar.' },
      { ad: 'Küçük üretim ve tarım', oneri: 'Ürün sayfaları, katalog ve toptan satış talep formu.' },
      { ad: 'Yerel esnaf', oneri: 'Hızlı tanıtım sitesi, doğrulanmış Google profili ve telefonla tek dokunuşla arama.' },
    ],
    aramalar: ['çiftlikköy web tasarım', 'çiftlikköy oto servis', 'çiftlikköy emlak', 'çiftlikköy klinik web sitesi'],
    komsular: ['yalova', 'altinova', 'yalova-termal'],
    sss: [
      { q: 'Küçük bir ilçede arama hacmi çok düşük değil mi?', a: 'Hacim büyük şehirlerden düşük, ama rekabet de çok az. Birkaç iyi hazırlanmış sayfa ve doğru Google profiliyle ilk sayfaya girmek, rekabetli ilçelere göre çok daha ulaşılabilir.' },
      { q: 'Sadece Google haritada görünmek yeter mi?', a: 'Yerel hizmetlerde haritadaki görünürlük önemli ama sitesi olmayan bir profil zayıf kalır. İkisi birlikte çalışınca ilçe aramalarında daha güçlü sonuç alınır.' },
      { q: 'Site ne kadar sürede yayına girer?', a: 'Basit bir kurumsal tanıtım sitesi genelde 2-3 hafta içinde yayına alınır; kapsama göre bu süre değişir.' },
    ],
  },
  {
    slug: 'yalova-termal',
    name: 'Yalova Termal',
    il: 'Yalova',
    tur: 'Yalova ilçesi',
    intro:
      'Termal, kaplıcaları ve sağlık-dinlenme turizmiyle Yalova\'nın en bilinen ilçelerinden biri. Misafirler genellikle "termal otel", "kaplıca" ve "spa" aramalarıyla geliyor; arama kararı fiyattan çok bilgi, fotoğraf ve yorumlara dayanıyor.',
    ekonomi:
      'Termal oteller, kaplıca tesisleri, spa merkezleri, restoranlar ve butik konaklama ilçenin ana iş kolları. İstanbul, Bursa, Kocaeli ve çevre illerden hafta sonu ve kış sezonunda gelen ziyaretçiler önemli bir talep yaratıyor; kış aylarında da arama hacmi yüksek kalıyor.',
    sektorler: [
      { ad: 'Termal otel ve kaplıca tesisleri', oneri: 'Paket, oda ve hizmet sayfaları, doğrudan rezervasyon, sağlık ve dinlenme odaklı bilgilendirici içerik, SSS.' },
      { ad: 'Spa ve masaj merkezleri', oneri: 'Hizmet başına ayrı sayfa, randevu formu, gerçek fotoğraflar ve yorum yönetimi.' },
      { ad: 'Restoran ve kafeler', oneri: 'Menü ve rezervasyon sayfası, harita fotoğrafları, hafta sonu kampanyalarının güncel yayını.' },
      { ad: 'Günübirlik ve etkinlik hizmetleri', oneri: 'Paket sayfaları, mevsimlik takvim ve WhatsApp ile hızlı iletişim.' },
      { ad: 'Emlak ve konaklama kiralama', oneri: 'Bölge rehberi, gerçek fotoğraflı ilan sayfaları ve ulaşım bilgisi.' },
    ],
    aramalar: ['yalova termal otel', 'termal otel web sitesi', 'yalova kaplıca', 'termal spa randevu'],
    komsular: ['yalova', 'cinarcik', 'ciftlikkoy'],
    sss: [
      { q: 'Termal bir otelin sitesinde ilk olarak ne olmalı?', a: 'Net oda ve paket bilgisi, gerçek fotoğraflar, konum ve ulaşım, rezervasyon yolu ve sık sorulan sorular. Misafir karar verirken bu bilgileri hızlıca bulabilmeli.' },
      { q: 'Kış sezonunda da arama oluyor mu?', a: 'Evet, termal turizm yıl boyu talep görür ve kış hafta sonlarında da arama hacmi yüksek kalır. İçerik sezonlara göre planlanmalı ve yıl boyunca güncel tutulmalı.' },
      { q: 'Rezervasyon platformları yerine doğrudan rezervasyon alabilir miyim?', a: 'Tamamen platformlardan bağımsız olmak zor ama doğrudan payı artırmak mümkün. Güçlü site, doğru bilgi ve Google profilindeki yorumlar misafirin sizi doğrudan aramasını sağlar.' },
    ],
  },
  {
    slug: 'tekirdag',
    name: 'Tekirdağ',
    il: 'Tekirdağ',
    tur: 'Tekirdağ ili',
    intro:
      'Tekirdağ, İstanbul\'a yakınlığı, organize sanayi bölgeleri, limanları ve kıyı turizmiyle Trakya\'nın en hareketli illerinden biri. Sanayi, lojistik ve hizmet sektöründeki işletmeler için hem kurumsal hem yerel aramalar önemli bir müşteri kaynağı.',
    ekonomi:
      'Çorlu ve Çerkezköy çevresindeki organize sanayi bölgeleri tekstil, gıda, makine ve kimya üretimiyle ilin sanayi kapasitesini oluşturuyor. Liman ve lojistik faaliyetleri, Süleymanpaşa merkezindeki ticaret ve hizmet sektörü, Şarköy ve Mürefte çevresindeki bağcılık ve kıyı turizmi ilin diğer önemli alanları.',
    sektorler: [
      { ad: 'Organize sanayi ve üretim', oneri: 'Ürün ve kapasite sayfaları, kalite belgeleri, teklif talep formu; ihracat için İngilizce sayfa yapısı.' },
      { ad: 'Lojistik, liman ve nakliye', oneri: 'Hizmet ve rota sayfaları, kapasite bilgisi, kurumsal referanslar ve hızlı teklif akışı.' },
      { ad: 'Bağcılık, gıda ve yöresel ürünler', oneri: 'Hikâye odaklı üretici sayfaları, ürün katalogu, toptan ve perakende satış ayrımı.' },
      { ad: 'Kıyı turizmi ve konaklama', oneri: 'Sezon öncesi yayınlanan rezervasyon odaklı sayfalar, gerçek fotoğraflar ve yorum yönetimi.' },
      { ad: 'Sağlık, eğitim ve yerel hizmetler', oneri: 'Randevu ve kayıt sayfaları, hizmet bölgesi bilgisi ve doğrulanmış Google İşletme Profili.' },
    ],
    aramalar: ['tekirdağ web tasarım', 'tekirdağ seo', 'tekirdağ dijital ajans', 'süleymanpaşa web tasarım'],
    komsular: ['corlu', 'cerkezkoy'],
    sss: [
      { q: 'Tekirdağ\'daki işletmelerle uzaktan çalışabilir misiniz?', a: 'Evet. Keşif görüşmesi, strateji sunumu ve aylık raporlar video görüşme ve yazılı raporlarla yürütülür; konum, çalışmanın kalitesini etkilemez.' },
      { q: 'Çorlu ve Çerkezköy için ayrı çalışma gerekir mi?', a: 'Bu ilçelerin sanayi yapısı ve arama davranışı Süleymanpaşa merkezden farklıdır. Hizmet bölgenize göre il sayfasının yanında ilçe sayfaları oluşturmak daha isabetli sonuç verir.' },
      { q: 'İstanbul\'daki ajanslar yerine neden yerel odaklı çalışmalıyım?', a: 'Genel İstanbul aramalarında rekabet çok yüksektir. Tekirdağ ve ilçe adlarıyla yapılan aramalara odaklanmak, hedef müşteriye daha düşük maliyetle ulaşmayı sağlar.' },
    ],
  },
  {
    slug: 'corlu',
    name: 'Çorlu',
    il: 'Tekirdağ',
    tur: 'Tekirdağ ilçesi',
    intro:
      'Çorlu, Tekirdağ\'ın en kalabalık ve ticari açıdan en hareketli ilçelerinden biri. Sanayi işletmelerinin yanı sıra büyüyen kent nüfusu sağlık, eğitim, perakende ve hizmet sektörlerinde sürekli bir yerel arama talebi oluşturuyor.',
    ekonomi:
      'Tekstil başta olmak üzere imalat sanayi ilçenin ekonomik temelini oluşturuyor. Sanayi çalışanlarının oluşturduğu kent nüfusu, konut, sağlık, eğitim, oto servis ve perakende işletmelerine yönelik yerel aramaları artırıyor. Hem kurumsal (B2B) hem bireysel (B2C) talep bir arada bulunuyor.',
    sektorler: [
      { ad: 'Tekstil ve imalat', oneri: 'Üretim kapasitesi, ürün grupları ve kalite belgeleri sayfaları; fason üretim ve ihracat odaklı teklif formu.' },
      { ad: 'Sağlık ve klinikler', oneri: 'Tedavi ve uzman sayfaları, randevu akışı, harita profili ve gerçek hasta yorumları.' },
      { ad: 'Emlak ve inşaat', oneri: 'Mahalle ve proje rehberleri, gerçek fotoğraflı ilan sayfaları.' },
      { ad: 'Oto servis ve teknik hizmetler', oneri: 'Hizmet ve çalışma saatleri sayfaları, telefon ve WhatsApp ile hızlı randevu.' },
      { ad: 'Eğitim ve kurslar', oneri: 'Program ve kayıt sayfaları, veli ve öğrenci sorularına yönelik SSS.' },
    ],
    aramalar: ['çorlu web tasarım', 'çorlu seo', 'çorlu tekstil firması web sitesi', 'çorlu klinik web sitesi'],
    komsular: ['cerkezkoy', 'tekirdag'],
    sss: [
      { q: 'Çorlu\'da tekstil firması olarak web sitesi yeni müşteri getirir mi?', a: 'Yeni tedarikçi arayan alıcılar çoğunlukla arama motorunu kullanır. Kapasite, ürün grupları, belgeler ve referansları net sunan bir site, bu aramalardan teklif talebi almayı mümkün kılar.' },
      { q: 'Hem kurumsal hem bireysel müşterim var, tek site yeterli mi?', a: 'Tek site yeterli olabilir; ancak kurumsal ve bireysel müşteriye yönelik sayfaların ve iletişim yollarının ayrılması gerekir. Böylece her ziyaretçi aradığı bilgiye doğrudan ulaşır.' },
      { q: 'Çorlu\'da harita sonuçlarında görünmek için ne gerekir?', a: 'Doğrulanmış ve eksiksiz bir Google İşletme Profili, doğru kategori ve hizmet bölgesi, düzenli güncellemeler ve teşviksiz gerçek yorumlar. Web sitesi bu profili destekleyen temel unsurdur.' },
    ],
  },
  {
    slug: 'cerkezkoy',
    name: 'Çerkezköy',
    il: 'Tekirdağ',
    tur: 'Tekirdağ ilçesi',
    intro:
      'Çerkezköy, organize sanayi bölgesiyle Trakya\'nın önemli üretim merkezlerinden biri. İlçede aramaların önemli bir bölümü kurumsal nitelikte: tedarikçi, yan sanayi, servis ve lojistik hizmeti arayan firmalar ilçe adıyla arama yapıyor.',
    ekonomi:
      'Organize sanayi bölgesindeki tekstil, gıda, kimya, metal ve makine üreticileri ile bunlara hizmet veren yan sanayi, lojistik ve teknik servis firmaları ilçenin ekonomisini belirliyor. Kapaklı ile birlikte büyüyen konut bölgeleri ise yerel hizmet talebini artırıyor.',
    sektorler: [
      { ad: 'OSB üreticileri', oneri: 'Kurumsal tanıtım, ürün ve kapasite sayfaları, sertifikalar ve ihracat için çok dilli yapı.' },
      { ad: 'Yan sanayi ve tedarik', oneri: 'Hizmet kapsamı, referanslar ve hızlı teklif formu; "Çerkezköy + hizmet" aramalarına yönelik içerik.' },
      { ad: 'Endüstriyel servis ve bakım', oneri: 'Acil servis ve bakım sayfaları, telefon ve WhatsApp ile hızlı iletişim, harita kaydı.' },
      { ad: 'Lojistik ve depolama', oneri: 'Kapasite, araç ve hizmet bölgesi sayfaları, kurumsal referanslar.' },
      { ad: 'Yerel hizmetler ve perakende', oneri: 'Hızlı açılan tanıtım sitesi, doğrulanmış Google İşletme Profili ve yorum yönetimi.' },
    ],
    aramalar: ['çerkezköy web tasarım', 'çerkezköy osb firma web sitesi', 'çerkezköy seo', 'çerkezköy endüstriyel servis'],
    komsular: ['corlu', 'tekirdag'],
    sss: [
      { q: 'OSB\'deki bir üretici için hangi sayfalar önceliklidir?', a: 'Kurumsal tanıtım, ürün ve kapasite bilgisi, kalite belgeleri, referanslar ve teklif formu. Alıcı, firmanın gerçek ve güvenilir olduğunu kısa sürede görebilmelidir.' },
      { q: 'İhracat yapıyorum, çok dilli site gerekir mi?', a: 'Yurt dışı alıcılarla çalışıyorsanız en azından İngilizce ürün ve iletişim sayfaları gerekir. Dil sürümlerinin doğru teknik yapıyla (hreflang) kurulması arama motorlarının doğru sürümü göstermesini sağlar.' },
      { q: 'Çerkezköy\'de rekabet yüksek mi?', a: 'Genel sanayi aramalarında büyük firmalar öne çıkar; ancak "Çerkezköy + belirli hizmet ya da ürün" aramalarında rekabet görece düşüktür. Doğru hedeflenmiş sayfalarla bu aramalarda görünürlük kazanmak mümkündür.' },
    ],
  },
  {
    slug: 'duzce',
    name: 'Düzce',
    il: 'Düzce',
    tur: 'Düzce ili',
    intro:
      'Düzce, Kocaeli ve Sakarya\'ya komşu, Akçakoca sahili ve orman ürünleri sanayisiyle öne çıkan bir il. Dijital rekabet düşük, yerel aramalarda bir işletmenin ilk sıralara girmesi için fırsat var.',
    ekonomi:
      'Orman ürünleri, mobilya ve ahşap sanayi, fındık ve tarım, Akçakoca\'daki turizm ile Düzce Üniversitesi çevresindeki hizmet sektörü ilin ekonomisini oluşturuyor.',
    sektorler: [
      { ad: 'Mobilya, ahşap ve orman ürünleri', oneri: 'Ürün kataloğu, toptan satış talep formu, yurt içi ve yurt dışı alıcı için sayfa yapısı.' },
      { ad: 'Fındık ve gıda üreticileri', oneri: 'Hikâye odaklı ürün sayfaları, toptan ve perakende ayrımı.' },
      { ad: 'Akçakoca turizm ve konaklama', oneri: 'Rezervasyon sayfası, sezon içeriği, harita ve yorum yönetimi.' },
      { ad: 'Sağlık, eğitim ve hizmet', oneri: 'Randevu sayfası ve yerel harita profili.' },
    ],
    aramalar: ['düzce web tasarım', 'düzce seo', 'akçakoca otel web sitesi', 'düzce mobilya üreticisi'],
    komsular: ['kandira', 'adapazari', 'sapanca'],
    sss: [
      { q: 'Mobilya üreticisiyim, site ne işe yarar?', a: 'Hem toptan alıcıların hem de perakende müşterilerin sizi bulması için katalog, referans ve talep formu olan bir site gerekir.' },
      { q: 'Akçakoca için sezon dışı strateji var mı?', a: 'Evet. İçerik yıl boyu yayında kalır, rezervasyon aramaları sezondan aylar önce başlar.' },
      { q: 'Düzce\'de ajans seçeneği az, uzaktan çalışmak sorun olur mu?', a: 'Tüm süreç uzaktan yürür, toplantılar video ve WhatsApp ile yapılır. Düzce dışı bir ajansla çalışmak sürece engel olmuyor.' },
    ],
  },
]

// İl düzeyindeki rehberler (ad = il adı) ile ilçe rehberlerini ayırt eder.
export function isIl(i: Ilce) {
  return i.name === i.il
}

// Bağlı olunan ilin rehber sayfası (varsa).
export function getIlRehberi(i: Ilce) {
  if (isIl(i)) return undefined
  return ilceler.find((x) => isIl(x) && x.il === i.il)
}

// Türkçe bulunma eki (-da/-de/-ta/-te), özel ad için kesme işaretiyle.
const BULUNMA_ISTISNA: Record<string, string> = {
  'Adapazarı': "Adapazarı'nda",
  'Dilovası': "Dilovası'nda",
  'Yalova Termal': "Yalova Termal'de",
}
export function bulunma(ad: string) {
  if (BULUNMA_ISTISNA[ad]) return BULUNMA_ISTISNA[ad]
  const kelime = ad.split(' ').pop() || ad
  const kucuk = kelime.toLocaleLowerCase('tr-TR')
  const unluler = kucuk.match(/[aeıioöuü]/g) || []
  const son = unluler[unluler.length - 1] || 'e'
  const kalin = 'aıou'.includes(son)
  const sert = 'fstkçşhp'.includes(kucuk[kucuk.length - 1])
  return `${ad}'${sert ? 't' : 'd'}${kalin ? 'a' : 'e'}`
}

export function getIlce(slug: string) {
  return ilceler.find((i) => i.slug === slug)
}
