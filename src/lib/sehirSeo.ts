// Şehir SEO sayfalarının yerel bölümleri. Bilgiler genel ve kamuya açık
// bölgesel özelliklere dayanır; müşteri veya sonuç iddiası içermez.
export interface SehirSeoVeri {
  sehir: string
  bulunma: string // "Ankara'da"
  ilceler: { ad: string; not: string }[]
  aramalar: { tur: string; ornek: string; rekabet: string; yaklasim: string }[]
  ekSss: { q: string; a: string }[]
}

const soruSatiri = { tur: 'Soru odaklı', ornek: 'seo ne kadar sürede sonuç verir', rekabet: 'Değişken', yaklasim: 'Net cevap veren rehber içerikler; güven ve marka bilinirliği sağlar.' }

export const sehirSeo: Record<string, SehirSeoVeri> = {
  izmit: {
    sehir: 'İzmit',
    bulunma: "İzmit'te",
    ilceler: [],
    aramalar: [
      { tur: 'Genel şehir araması', ornek: 'izmit seo ajansı', rekabet: 'Orta-yüksek', yaklasim: 'Güçlü hizmet sayfası, gerçek referanslar ve düzenli içerikle orta vadeli hedef.' },
      { tur: 'İlçe + hizmet', ornek: 'kartepe seo', rekabet: 'Düşük', yaklasim: 'Komşu ilçeler için özgün rehber sayfalarıyla kısa sürede ulaşılabilir.' },
      { tur: 'Sektör + şehir', ornek: 'izmit psikolog web sitesi', rekabet: 'Orta', yaklasim: 'Sektöre özgü hizmet sayfaları ve Google İşletme Profili.' },
      soruSatiri,
    ],
    ekSss: [
      { q: 'İzmit dışında Kocaeli ilçelerine de hizmet veriyor musunuz?', a: 'Evet. Gebze, Darıca, Körfez, Gölcük, Başiskele, Kartepe ve diğer ilçeler için ayrı rehber sayfalarımız var; işletmenizin hizmet verdiği bölgeye göre ilçe bazlı strateji kuruyoruz.' },
      { q: 'İzmit\'te yerel SEO için en hızlı sonuç veren adım nedir?', a: 'Doğrulanmış ve eksiksiz bir Google İşletme Profili, hizmet başına ayrı sayfalar ve teşviksiz gerçek müşteri yorumları. Bu üçü birlikte harita ve yerel aramalarda en hızlı etkiyi gösterir.' },
    ],
  },
  kocaeli: {
    sehir: 'Kocaeli',
    bulunma: "Kocaeli'de",
    ilceler: [],
    aramalar: [
      { tur: 'Genel şehir araması', ornek: 'kocaeli seo ajansı', rekabet: 'Orta-yüksek', yaklasim: 'Kapsamlı hizmet sayfası, gerçek referanslar ve bağlantı birikimiyle orta vadeli hedef.' },
      { tur: 'İlçe + hizmet', ornek: 'gebze seo', rekabet: 'Orta', yaklasim: 'İlçeye özgü rehber sayfaları ve doğru harita kaydı.' },
      { tur: 'Sektör + şehir', ornek: 'kocaeli sanayi firması web sitesi', rekabet: 'Düşük-orta', yaklasim: 'Ürün, kapasite ve belge bilgisini sunan kurumsal sayfalar.' },
      soruSatiri,
    ],
    ekSss: [
      { q: 'Kocaeli\'de sanayi firmaları için SEO nasıl farklı?', a: 'Sanayi firmalarında alıcılar genellikle ürün veya hizmet adını şehir ya da ilçe adıyla birlikte arar. Ürün grubu sayfaları, kapasite ve kalite belgeleri, referanslar ve teklif formu belirleyicidir.' },
    ],
  },
  ankara: {
    sehir: 'Ankara',
    bulunma: "Ankara'da",
    ilceler: [
      { ad: 'Çankaya', not: 'Kamu kurumları, hukuk büroları, danışmanlık ve sağlık hizmetlerinin yoğun olduğu merkez ilçe. Kızılay, Kavaklıdere, Çayyolu gibi semt adlarıyla yapılan aramalar daha ulaşılabilir; güven unsurları belirleyici.' },
      { ad: 'Yenimahalle & OSTİM', not: 'OSTİM çevresindeki sanayi ve savunma yan sanayi firmaları için ürün, kapasite ve belge odaklı kurumsal sayfalar öne çıkıyor; aramalar çoğunlukla ürün ve hizmet adıyla yapılıyor.' },
      { ad: 'Keçiören', not: 'Yoğun konut nüfusu nedeniyle esnaf, sağlık, eğitim ve ev hizmetleri aramaları ağırlıkta. Doğru Google İşletme Profili ve mahalle odaklı içerik hızlı sonuç verebiliyor.' },
      { ad: 'Etimesgut & Sincan', not: 'Hızla büyüyen konut bölgeleri ve sanayi alanları bir arada. Yeni yerleşim bölgelerinde aramalar henüz oturmadığı için erken görünür olan işletme avantaj sağlıyor.' },
      { ad: 'Gölbaşı', not: 'Villa ve site yaşamının yaygın olduğu, peyzaj, inşaat ve ev hizmetleri aramalarının belirgin olduğu bir ilçe; rekabet merkez ilçelere göre daha düşük.' },
      { ad: 'Mamak', not: 'Konut ağırlıklı bir ilçe; yerel esnaf, sağlık ve eğitim işletmeleri için harita kaydı ve hizmet sayfaları temel adımlar.' },
    ],
    aramalar: [
      { tur: 'Genel şehir araması', ornek: 'ankara seo ajansı', rekabet: 'Yüksek', yaklasim: 'Uzun vadeli hedef; güçlü içerik, güven unsurları ve bağlantı birikimi gerekir.' },
      { tur: 'İlçe + hizmet', ornek: 'çankaya seo', rekabet: 'Orta', yaklasim: 'İlçe ve semt odaklı içerik, doğru harita kaydı.' },
      { tur: 'Sektör + şehir', ornek: 'ankara avukat web sitesi', rekabet: 'Orta', yaklasim: 'Uzmanlık alanı başına sayfalar ve mesleki kurallara uygun içerik.' },
      soruSatiri,
    ],
    ekSss: [
      { q: 'Ankara\'da kurumsal ve kamuya hizmet veren firmalar için SEO\'da neye dikkat edilmeli?', a: 'Bu firmalarda karar süreci uzun ve birden fazla kişiden geçer. Kurumsal bilgiler, belgeler, referanslar, net hizmet tanımları ve indirilebilir dokümanlar güven oluşturur; içerik dili kurumsal ve tutarlı olmalıdır.' },
      { q: 'Çankaya, Yenimahalle gibi ilçeler için ayrı çalışma gerekir mi?', a: 'İşletmeniz belirli ilçelere hizmet veriyorsa evet. İlçe ve semt adlarıyla yapılan aramalarda rekabet genel Ankara aramalarına göre daha düşüktür.' },
    ],
  },
  izmir: {
    sehir: 'İzmir',
    bulunma: "İzmir'de",
    ilceler: [
      { ad: 'Konak', not: 'Kemeraltı ve Alsancak çevresiyle ticaret, hizmet ve kurumsal ofislerin merkezi. Rekabet yüksek; semt ve hizmet adıyla daraltılmış aramalar daha ulaşılabilir.' },
      { ad: 'Karşıyaka', not: 'Köklü konut ve esnaf yapısıyla sağlık, eğitim, güzellik ve yeme-içme aramaları öne çıkıyor. Harita kaydı ve gerçek yorumlar belirleyici.' },
      { ad: 'Bornova', not: 'Üniversite çevresi ve sanayi alanları bir arada. Öğrenciye yönelik hizmetler ile kurumsal B2B firmalar için ayrı içerik yaklaşımları gerekiyor.' },
      { ad: 'Buca', not: 'Yoğun konut ve öğrenci nüfusu; kurs, sağlık, emlak ve yerel hizmet aramaları ağırlıkta. Mobil öncelikli ve hızlı açılan siteler öne çıkıyor.' },
      { ad: 'Çiğli', not: 'Organize sanayi bölgesi çevresinde üretim ve tedarik firmaları yoğun. Ürün, kapasite ve belge bilgisi sunan kurumsal sayfalar alıcıların aradığı içerik.' },
      { ad: 'Urla & Çeşme', not: 'Turizm, butik konaklama, bağcılık ve yeme-içme işletmeleri. Sezon öncesi yayınlanan içerik, gerçek fotoğraflar ve yabancı dilde sayfalar önemli.' },
    ],
    aramalar: [
      { tur: 'Genel şehir araması', ornek: 'izmir seo ajansı', rekabet: 'Yüksek', yaklasim: 'Uzun vadeli hedef; güçlü içerik ve güven unsurları gerekir.' },
      { tur: 'İlçe + hizmet', ornek: 'bornova web tasarım', rekabet: 'Orta', yaklasim: 'İlçeye özgü içerik ve doğru harita kaydı.' },
      { tur: 'Sektör + şehir', ornek: 'çeşme otel web sitesi', rekabet: 'Orta', yaklasim: 'Sezon öncesi içerik, rezervasyon odaklı sayfalar.' },
      soruSatiri,
    ],
    ekSss: [
      { q: 'Konak, Karşıyaka, Bornova gibi ilçeler için ayrı SEO çalışması gerekir mi?', a: 'Hizmet verdiğiniz ilçeler belirliyse evet. İlçe adıyla yapılan aramalarda rekabet genel İzmir aramalarına göre daha düşüktür ve ilçeye özgü içerik bu aramalarda daha hızlı sonuç verir.' },
    ],
  },
  bursa: {
    sehir: 'Bursa',
    bulunma: "Bursa'da",
    ilceler: [
      { ad: 'Osmangazi', not: 'Tarihi merkez, çarşılar ve ticaretin yoğun olduğu ilçe. Esnaf, sağlık ve hizmet işletmeleri için harita görünürlüğü ve semt odaklı içerik belirleyici.' },
      { ad: 'Nilüfer', not: 'Konut, üniversite ve sanayi bölgelerinin bir arada bulunduğu ilçe. Hem bireysel hem kurumsal aramalar güçlü; hedef kitleye göre ayrı sayfa yapısı gerekiyor.' },
      { ad: 'Yıldırım', not: 'Yoğun konut nüfusu ve küçük sanayi işletmeleri; yerel hizmet ve esnaf aramalarında rekabet görece düşük.' },
      { ad: 'İnegöl', not: 'Mobilya üretimiyle bilinen ilçe. Ürün katalogu, toptan satış talep formu ve ihracat için çok dilli sayfalar mobilya üreticilerinin öncelikleri arasında.' },
      { ad: 'Gürsu & Kestel', not: 'Organize sanayi bölgeleri çevresinde otomotiv ve tekstil yan sanayi firmaları; kapasite, belge ve referans bilgisi öne çıkıyor.' },
      { ad: 'Mudanya & Gemlik', not: 'Kıyı, liman ve turizm faaliyetleri; konaklama, yeme-içme ve lojistik işletmeleri için sezon ve hizmet odaklı içerik.' },
    ],
    aramalar: [
      { tur: 'Genel şehir araması', ornek: 'bursa seo ajansı', rekabet: 'Orta-yüksek', yaklasim: 'Orta-uzun vadeli hedef; güçlü içerik ve bağlantı birikimi gerekir.' },
      { tur: 'İlçe + hizmet', ornek: 'nilüfer web tasarım', rekabet: 'Orta', yaklasim: 'İlçeye özgü içerik ve doğru harita kaydı.' },
      { tur: 'Sektör + şehir', ornek: 'inegöl mobilya üreticisi', rekabet: 'Orta', yaklasim: 'Ürün katalogu, toptan talep formu ve çok dilli yapı.' },
      soruSatiri,
    ],
    ekSss: [
      { q: 'Bursa\'daki otomotiv ve tekstil yan sanayi firmaları SEO\'dan nasıl yararlanır?', a: 'Yeni tedarikçi arayan alıcılar ürün ve hizmet adıyla arama yapar. Kapasite, kalite belgeleri, ürün grupları ve referansları net sunan sayfalar bu aramalarda görünürlük ve teklif talebi sağlar.' },
      { q: 'Nilüfer, Osmangazi, İnegöl için ayrı sayfalar mı açmalıyım?', a: 'Gerçekten hizmet verdiğiniz ve özgün bilgi sunabildiğiniz ilçeler için evet. Aynı metnin ilçe adı değiştirilerek çoğaltılması değer kaybına yol açabilir.' },
    ],
  },
  antalya: {
    sehir: 'Antalya',
    bulunma: "Antalya'da",
    ilceler: [
      { ad: 'Muratpaşa', not: 'Şehir merkezi; sağlık, hukuk, eğitim ve kurumsal hizmetler yoğun. Lara çevresinde turizm ve konaklama aramaları da güçlü.' },
      { ad: 'Konyaaltı', not: 'Sahil şeridi, konut ve turizm bir arada; emlak, yeme-içme ve konaklama aramaları öne çıkıyor.' },
      { ad: 'Kepez', not: 'Yoğun konut nüfusu ve sanayi alanları; esnaf, servis ve yerel hizmet aramalarında rekabet görece düşük.' },
      { ad: 'Alanya', not: 'Yabancı turist ve yerleşik yabancı nüfus nedeniyle çok dilli içerik önemli; emlak, sağlık turizmi ve konaklama aramaları güçlü.' },
      { ad: 'Manavgat & Side', not: 'Otel ve tur işletmeleri ağırlıkta; sezon öncesi içerik, rezervasyon odaklı sayfalar ve yabancı dilde sürümler belirleyici.' },
      { ad: 'Kemer', not: 'Kıyı turizmi, butik oteller ve aktivite işletmeleri; doğrudan rezervasyon yolu ve gerçek fotoğraflar güven sağlıyor.' },
    ],
    aramalar: [
      { tur: 'Genel şehir araması', ornek: 'antalya seo ajansı', rekabet: 'Yüksek', yaklasim: 'Uzun vadeli hedef; güçlü içerik ve güven unsurları gerekir.' },
      { tur: 'İlçe + hizmet', ornek: 'alanya web tasarım', rekabet: 'Orta', yaklasim: 'İlçeye özgü ve gerekiyorsa çok dilli içerik.' },
      { tur: 'Sektör + şehir', ornek: 'antalya otel web sitesi', rekabet: 'Yüksek', yaklasim: 'Özellik ve konum odaklı dar aramalarla başlamak.' },
      soruSatiri,
    ],
    ekSss: [
      { q: 'Antalya\'daki turizm işletmeleri için çok dilli site gerekli mi?', a: 'Yabancı misafir hedefliyorsanız evet. Dil sürümlerinin doğru teknik yapıyla (hreflang) kurulması, her dilde arama yapan kullanıcının doğru sayfayı görmesini sağlar.' },
      { q: 'Sezon dışında da SEO çalışması gerekir mi?', a: 'Evet. Tatil ve rezervasyon kararları sezondan aylar önce verilir; içeriklerin ve profillerin sezon başlamadan hazır ve indekslenmiş olması gerekir.' },
    ],
  },
  gaziantep: {
    sehir: 'Gaziantep',
    bulunma: "Gaziantep'te",
    ilceler: [
      { ad: 'Şahinbey', not: 'Tarihi çarşılar, ticaret ve yoğun konut nüfusu; esnaf, gıda ve perakende işletmeleri için harita görünürlüğü ve ürün odaklı içerik öne çıkıyor.' },
      { ad: 'Şehitkamil', not: 'Organize sanayi bölgeleri, kurumsal ofisler ve yeni konut alanları. Tekstil, halı ve gıda üreticileri için ürün ve kapasite sayfaları belirleyici.' },
      { ad: 'Nizip', not: 'Tarım ve gıda üretiminin öne çıktığı ilçe; üretici hikâyesi, ürün katalogu ve toptan satış talep formu önemli.' },
      { ad: 'Organize sanayi bölgeleri', not: 'İhracat yapan üreticiler için İngilizce ve gerekiyorsa Arapça sayfalar, kalite belgeleri ve referanslar alıcıların aradığı bilgiler.' },
    ],
    aramalar: [
      { tur: 'Genel şehir araması', ornek: 'gaziantep seo ajansı', rekabet: 'Orta', yaklasim: 'Güçlü hizmet sayfası ve düzenli içerikle orta vadeli hedef.' },
      { tur: 'İlçe + hizmet', ornek: 'şehitkamil web tasarım', rekabet: 'Düşük-orta', yaklasim: 'İlçeye özgü içerik ve doğru harita kaydı.' },
      { tur: 'Sektör + şehir', ornek: 'gaziantep halı üreticisi', rekabet: 'Orta', yaklasim: 'Ürün katalogu ve ihracat için çok dilli yapı.' },
      soruSatiri,
    ],
    ekSss: [
      { q: 'İhracat yapan bir Gaziantep firması için hangi diller önceliklidir?', a: 'Hedef pazarınıza bağlıdır. Genellikle İngilizce temel dildir; Orta Doğu pazarına satış yapıyorsanız Arapça sürüm de değerlendirilebilir. Her dil sürümü doğru teknik yapıyla kurulmalıdır.' },
    ],
  },
  konya: {
    sehir: 'Konya',
    bulunma: "Konya'da",
    ilceler: [
      { ad: 'Selçuklu', not: 'Yoğun konut, kurumsal ofis ve üniversite çevresi; sağlık, eğitim ve hizmet aramaları güçlü.' },
      { ad: 'Meram', not: 'Köklü konut bölgeleri ve sağlık hizmetleri; yerel esnaf ve klinikler için harita kaydı ve hizmet sayfaları temel adımlar.' },
      { ad: 'Karatay', not: 'Sanayi ve ticaret alanları ile tarihi merkez bir arada; makine ve yedek parça firmaları için ürün odaklı kurumsal sayfalar.' },
      { ad: 'Ereğli', not: 'Tarım ve sanayinin öne çıktığı ilçe; üretici ve tedarikçi firmalar için ürün katalogu ve teklif formu.' },
      { ad: 'Beyşehir & Akşehir', not: 'Göl ve doğa turizmi ile yerel esnaf; konaklama ve yeme-içme işletmeleri için sezon odaklı içerik.' },
    ],
    aramalar: [
      { tur: 'Genel şehir araması', ornek: 'konya seo ajansı', rekabet: 'Orta', yaklasim: 'Güçlü hizmet sayfası ve düzenli içerikle orta vadeli hedef.' },
      { tur: 'İlçe + hizmet', ornek: 'selçuklu web tasarım', rekabet: 'Düşük-orta', yaklasim: 'İlçeye özgü içerik ve doğru harita kaydı.' },
      { tur: 'Sektör + şehir', ornek: 'konya tarım makineleri üreticisi', rekabet: 'Orta', yaklasim: 'Ürün ve bayi sayfaları, teknik doküman ve teklif formu.' },
      soruSatiri,
    ],
    ekSss: [
      { q: 'Konya\'daki tarım makineleri ve yedek parça firmaları için SEO nasıl kurgulanır?', a: 'Alıcılar çoğunlukla ürün adı, model veya parça adıyla arar. Ürün sayfaları, teknik özellikler, bayi ve servis bilgisi ile teklif formu bu aramalarda görünürlüğü artırır.' },
    ],
  },
  mersin: {
    sehir: 'Mersin',
    bulunma: "Mersin'de",
    ilceler: [
      { ad: 'Yenişehir', not: 'Kurumsal ofisler, sağlık ve eğitim hizmetleri ile yoğun konut; hizmet aramalarında güven unsurları ve harita görünürlüğü belirleyici.' },
      { ad: 'Mezitli', not: 'Sahil şeridi ve konut alanları; emlak, yeme-içme ve yerel hizmet aramaları öne çıkıyor.' },
      { ad: 'Akdeniz', not: 'Liman ve ticaret merkezi; lojistik, gümrük ve dış ticaret firmaları için hizmet ve süreç anlatan kurumsal sayfalar.' },
      { ad: 'Toroslar', not: 'Konut ve sanayi alanları; esnaf, servis ve küçük üretim işletmeleri için harita kaydı ve hizmet sayfaları.' },
      { ad: 'Tarsus', not: 'Sanayi, tarım ve tarihi turizm bir arada; üretici firmalar ve turizm işletmeleri için farklı içerik yaklaşımları gerekiyor.' },
      { ad: 'Erdemli & Silifke', not: 'Tarım, narenciye ve kıyı turizmi; üretici hikâyesi, ürün katalogu ve sezon odaklı içerik.' },
    ],
    aramalar: [
      { tur: 'Genel şehir araması', ornek: 'mersin seo ajansı', rekabet: 'Orta', yaklasim: 'Güçlü hizmet sayfası ve düzenli içerikle orta vadeli hedef.' },
      { tur: 'İlçe + hizmet', ornek: 'mezitli web tasarım', rekabet: 'Düşük-orta', yaklasim: 'İlçeye özgü içerik ve doğru harita kaydı.' },
      { tur: 'Sektör + şehir', ornek: 'mersin lojistik firması', rekabet: 'Orta', yaklasim: 'Hizmet ve süreç sayfaları, kurumsal referanslar.' },
      soruSatiri,
    ],
    ekSss: [
      { q: 'Mersin\'deki lojistik ve dış ticaret firmaları için SEO\'da öncelik nedir?', a: 'Hizmetleri, süreçleri, gerekli belgeleri ve çalışılan rotaları net anlatan sayfalar ile hızlı teklif formu. Yurt dışı müşteriler için İngilizce sürüm de değerlendirilmelidir.' },
    ],
  },
  kayseri: {
    sehir: 'Kayseri',
    bulunma: "Kayseri'de",
    ilceler: [
      { ad: 'Melikgazi', not: 'Şehir merkezi; ticaret, sağlık ve eğitim hizmetleri yoğun. Hizmet başına sayfa ve harita görünürlüğü yerel aramalarda belirleyici.' },
      { ad: 'Kocasinan', not: 'Organize sanayi bölgesi çevresinde mobilya, metal ve tekstil üreticileri; ürün, kapasite ve belge bilgisi sunan kurumsal sayfalar öne çıkıyor.' },
      { ad: 'Talas', not: 'Konut ve öğrenci nüfusunun yoğun olduğu ilçe; kurs, sağlık, kafe ve yerel hizmet aramaları güçlü.' },
      { ad: 'Erciyes çevresi', not: 'Kış turizmi ve konaklama işletmeleri; sezon öncesi yayınlanan içerik, rezervasyon odaklı sayfalar ve gerçek fotoğraflar.' },
    ],
    aramalar: [
      { tur: 'Genel şehir araması', ornek: 'kayseri seo ajansı', rekabet: 'Orta', yaklasim: 'Güçlü hizmet sayfası ve düzenli içerikle orta vadeli hedef.' },
      { tur: 'İlçe + hizmet', ornek: 'talas web tasarım', rekabet: 'Düşük', yaklasim: 'İlçeye özgü içerik ve doğru harita kaydı.' },
      { tur: 'Sektör + şehir', ornek: 'kayseri mobilya üreticisi', rekabet: 'Orta', yaklasim: 'Ürün katalogu, toptan talep formu ve ihracat için çok dilli yapı.' },
      soruSatiri,
    ],
    ekSss: [
      { q: 'Kayseri\'deki mobilya üreticileri için web sitesi nasıl olmalı?', a: 'Koleksiyon ve ürün sayfaları, ölçü ve malzeme bilgisi, toptan ve perakende iletişim yollarının ayrılması ve ihracat yapılıyorsa İngilizce sürüm. Gerçek ürün fotoğrafları güvenin temelidir.' },
    ],
  },
  eskisehir: {
    sehir: 'Eskişehir',
    bulunma: "Eskişehir'de",
    ilceler: [
      { ad: 'Odunpazarı', not: 'Tarihi evleri, müzeleri ve kültür turizmiyle bilinen ilçe; yeme-içme, butik konaklama ve hediyelik işletmeler için gerçek fotoğraf ve harita görünürlüğü önemli.' },
      { ad: 'Tepebaşı', not: 'Üniversiteler çevresinde yoğun öğrenci nüfusu; kurs, kafe, sağlık ve emlak aramaları ağırlıkta, mobil öncelikli siteler öne çıkıyor.' },
      { ad: 'Sanayi bölgeleri', not: 'Organize sanayi bölgesi çevresinde makine, seramik ve gıda üreticileri; ürün, kapasite ve belge odaklı kurumsal sayfalar.' },
    ],
    aramalar: [
      { tur: 'Genel şehir araması', ornek: 'eskişehir seo ajansı', rekabet: 'Orta', yaklasim: 'Güçlü hizmet sayfası ve düzenli içerikle orta vadeli hedef.' },
      { tur: 'İlçe + hizmet', ornek: 'tepebaşı web tasarım', rekabet: 'Düşük', yaklasim: 'İlçeye özgü içerik ve doğru harita kaydı.' },
      { tur: 'Sektör + şehir', ornek: 'eskişehir dil kursu', rekabet: 'Orta', yaklasim: 'Program ve kayıt sayfaları, öğrenci sorularına net cevaplar.' },
      soruSatiri,
    ],
    ekSss: [
      { q: 'Öğrenci kitlesine hizmet veren Eskişehir işletmeleri için SEO\'da neye dikkat edilmeli?', a: 'Genç kitle çoğunlukla mobilden ve hızlı karar vererek arama yapar. Hızlı açılan, fiyat ve konum bilgisini hemen gösteren, akademik takvime göre güncellenen sayfalar öne çıkar.' },
    ],
  },
}
