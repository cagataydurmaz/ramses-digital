// Büyük şehir SEO sayfaları için ek, şehre özgü içerik: bölge × sektör × arama tablosu ve ek SSS.
// Uydurma sonuç, sıralama garantisi veya fiyat içermez.
export interface SehirSeoEk {
  tabloBaslik: string
  satirlar: { bolge: string; sektor: string; arama: string }[]
  sss: { q: string; a: string }[]
}

export const sehirSeoEk: Record<string, SehirSeoEk> = {
  istanbul: {
    tabloBaslik: "İstanbul'da Bölgeye Göre SEO Fırsatları",
    satirlar: [
      { bolge: 'Şişli, Mecidiyeköy, Maslak', sektor: 'Kurumsal hizmet, hukuk, finans, yazılım', arama: 'şişli kurumsal web tasarım' },
      { bolge: 'Kadıköy, Ataşehir, Üsküdar', sektor: 'Sağlık, eğitim, kafe-restoran, güzellik', arama: 'kadıköy diş kliniği' },
      { bolge: 'Beylikdüzü, Esenyurt, Başakşehir', sektor: 'Emlak, inşaat, oto servis, kurs', arama: 'beylikdüzü emlak ofisi' },
      { bolge: 'İkitelli, Tuzla, Pendik', sektor: 'Sanayi, üretim, lojistik, tersane', arama: 'tuzla tersane yan sanayi' },
    ],
    sss: [
      { q: "İstanbul'da SEO'ya ilçe sayfalarıyla mı başlamalıyım?", a: 'Hizmet verdiğiniz ve müşterinizin gerçekten bulunduğu birkaç ilçeyle başlamak en sağlıklısıdır. Her ilçe sayfasında o bölgeye özgü bilgi olmalı; aynı metni ilçe adı değiştirerek çoğaltmak Google tarafından düşük kaliteli içerik sayılabilir.' },
      { q: "İstanbul SEO çalışmasında ilk hangi sonuçları görürüm?", a: 'Genellikle önce dar aramalarda (ilçe + hizmet + soru) görünürlük ve Google İşletme Profili etkileşimi artar. Rekabetli genel aramalar daha uzun sürer; ilerleme aylık raporda görünme, tıklama ve gelen taleplerle izlenir.' },
    ],
  },
  izmir: {
    tabloBaslik: "İzmir'de Bölgeye Göre SEO Fırsatları",
    satirlar: [
      { bolge: 'Alsancak, Konak, Bayraklı', sektor: 'Kurumsal hizmet, hukuk, mali müşavir, kafe-restoran', arama: 'alsancak kafe' },
      { bolge: 'Karşıyaka, Bostanlı, Çiğli', sektor: 'Sağlık, eğitim, güzellik, emlak', arama: 'karşıyaka diş kliniği' },
      { bolge: 'Bornova, Buca', sektor: 'Öğrenciye yönelik hizmetler, kurs, yurt, sağlık', arama: 'bornova kurs merkezi' },
      { bolge: 'Kemalpaşa, Torbalı, Atatürk OSB', sektor: 'Üretim, ihracat, lojistik', arama: 'izmir ihracatçı üretici' },
      { bolge: 'Urla, Çeşme, Seferihisar', sektor: 'Turizm, konaklama, bağ ve yerel ürün', arama: 'urla butik otel' },
    ],
    sss: [
      { q: "İzmir'de turizm işletmeleri için SEO nasıl planlanır?", a: 'Sezondan önce, ilkbaharda aranan konaklama, etkinlik ve rota sorularına cevap veren sayfalar hazırlanır. Gerçek fotoğraflar, ulaşım bilgisi ve doğrudan rezervasyon yolu, platform komisyonlarına bağımlılığı azaltır.' },
      { q: 'İhracat yapan İzmir firmaları için İngilizce SEO gerekir mi?', a: 'Yurt dışı alıcıları hedefliyorsanız evet. Ürün ve kapasite sayfalarının İngilizce sürümü, yabancı satın almacıların firmanızı aramalarda bulmasını sağlar.' },
    ],
  },
  bursa: {
    tabloBaslik: "Bursa'da Bölgeye Göre SEO Fırsatları",
    satirlar: [
      { bolge: 'Nilüfer, FSM Bulvarı', sektor: 'Sağlık, estetik, eğitim, kurumsal hizmet', arama: 'nilüfer diş kliniği' },
      { bolge: 'Osmangazi, Yıldırım', sektor: 'Esnaf, tekstil, ticaret, hukuk', arama: 'osmangazi avukat' },
      { bolge: 'Nilüfer OSB, DOSAB', sektor: 'Otomotiv yan sanayi, makine, metal', arama: 'bursa otomotiv yan sanayi' },
      { bolge: 'İnegöl', sektor: 'Mobilya üretimi ve ihracatı', arama: 'inegöl mobilya imalatçısı' },
      { bolge: 'Mudanya, Gemlik', sektor: 'Turizm, restoran, liman ve lojistik', arama: 'mudanya balık restoranı' },
    ],
    sss: [
      { q: "Bursa'daki otomotiv tedarikçileri için SEO nasıl yapılır?", a: 'Parça, süreç ve malzeme adlarına göre ayrılmış sayfalar; kapasite, kalite belgeleri ve teklif formu. Satın almacılar genel kelimelerle değil ürün adlarıyla arama yaptığı için içerik buna göre kurulur.' },
      { q: "İnegöl'deki mobilya firması Bursa dışına SEO ile satış yapabilir mi?", a: 'Ürün kategorisi sayfaları, gerçek fotoğraflar, ölçü ve malzeme bilgisi ile teslimat bölgeleri anlatıldığında il dışındaki bayi ve son kullanıcı aramalarında görünmek mümkündür. Sonuç garanti edilmez, zamanla birikir.' },
    ],
  },
  kayseri: {
    tabloBaslik: "Kayseri'de Bölgeye Göre SEO Fırsatları",
    satirlar: [
      { bolge: 'Melikgazi, Kocasinan merkez', sektor: 'Sağlık, hukuk, eğitim, esnaf', arama: 'kayseri diş kliniği' },
      { bolge: 'Kayseri OSB, Mimarsinan OSB', sektor: 'Mobilya, metal, makine, tekstil', arama: 'kayseri mobilya imalatçısı' },
      { bolge: 'Talas', sektor: 'Üniversite çevresi: kafe, kurs, yurt, sağlık', arama: 'talas kafe' },
      { bolge: 'Erciyes çevresi', sektor: 'Kış turizmi, otel, ekipman kiralama', arama: 'erciyes kayak oteli' },
    ],
    sss: [
      { q: "Kayseri'deki mobilya üreticileri için SEO neden önemli?", a: 'Bayi ve toptan alıcılar yeni üreticiyi çoğunlukla internette araştırır. Ürün kataloğu, üretim kapasitesi ve iletişim yolu net olan bir site, fuar ve tanıdık dışında da talep almayı sağlar.' },
      { q: 'Erciyes çevresindeki turizm işletmeleri ne zaman hazırlık yapmalı?', a: 'Kış sezonundan önce, sonbaharda. Konaklama, ekipman kiralama ve ulaşım aramaları sezondan önce yükseldiği için sayfaların o dönemde hazır ve güncel olması gerekir.' },
    ],
  },
  gaziantep: {
    tabloBaslik: "Gaziantep'te Bölgeye Göre SEO Fırsatları",
    satirlar: [
      { bolge: 'Şahinbey, Şehitkamil merkez', sektor: 'Sağlık, hukuk, eğitim, esnaf', arama: 'şehitkamil diş kliniği' },
      { bolge: 'Gaziantep OSB', sektor: 'Halı, tekstil, plastik, gıda üretimi', arama: 'gaziantep makine halısı üreticisi' },
      { bolge: 'Merkez çarşı ve ticaret', sektor: 'Baklava, fıstık, yöresel gıda', arama: 'gaziantep baklava sipariş' },
      { bolge: 'Nizip, İslahiye', sektor: 'Tarım, zeytin, fıstık, yerel üretim', arama: 'nizip fıstık toptan' },
    ],
    sss: [
      { q: 'Gaziantep gıda üreticileri için SEO nasıl kurulur?', a: 'Ürün sayfaları, üretim hikâyesi, kargo ve paketleme bilgisi ile sipariş yolu öne çıkar. Toptan ve perakende alıcılar için ayrı sayfalar, iki farklı kitlenin aramalarını karşılar.' },
      { q: 'İhracat yapan Gaziantep firmaları için hangi dillerde içerik gerekir?', a: 'Hedef pazara göre değişir; çoğu firma için İngilizce, bazı pazarlarda Arapça sürüm faydalıdır. Önce en çok satış yapılan pazarın diliyle başlamak doğru olur.' },
    ],
  },
  eskisehir: {
    tabloBaslik: "Eskişehir'de Bölgeye Göre SEO Fırsatları",
    satirlar: [
      { bolge: 'Odunpazarı, Tepebaşı merkez', sektor: 'Sağlık, hukuk, eğitim, esnaf', arama: 'eskişehir diş kliniği' },
      { bolge: 'Üniversite çevreleri', sektor: 'Kafe, kurs, yurt, öğrenci hizmetleri', arama: 'eskişehir öğrenci yurdu' },
      { bolge: 'Eskişehir OSB', sektor: 'Havacılık yan sanayi, makine, beyaz eşya tedarikçileri', arama: 'eskişehir makine imalatı' },
      { bolge: 'Odunpazarı tarihi bölge, Porsuk', sektor: 'Turizm, butik otel, restoran, müze çevresi', arama: 'odunpazarı butik otel' },
    ],
    sss: [
      { q: "Eskişehir'de öğrenciye yönelik işletmeler SEO'dan nasıl yararlanır?", a: 'Öğrenciler yurt, kurs, kafe ve hizmetleri çoğunlukla telefonla ve semt adıyla arar. Mobilde hızlı bir site, eksiksiz Google İşletme Profili ve dönem başlarına göre güncellenen içerik öne çıkmayı kolaylaştırır.' },
      { q: 'Eskişehir sanayi firmaları için SEO mu, Google Ads mi?', a: 'Ürün adlarıyla yapılan tedarikçi aramalarında SEO kalıcı görünürlük sağlar; hızlı talep gerekiyorsa küçük bütçeli, ürün adlarıyla kurulan Google Ads kampanyası birlikte kullanılabilir.' },
    ],
  },
}
