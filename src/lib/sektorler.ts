// Sektör sayfaları (veri odaklı). Her kayıt bir sayfa üretir: /sektorler/{slug}
// İçerik sektörün genel, kamuya açık özelliklerine dayanır. Uydurma müşteri sonucu,
// sıralama garantisi veya açık fiyat içermez. Mevzuat notları genel bilgilendirmedir;
// kesin kural için ilgili meslek örgütünün güncel düzenlemesine bakılmalıdır.

export interface SektorVeri {
  slug: string
  ad: string // "Avukatlar ve Hukuk Büroları"
  kisaAd: string // breadcrumb / kart için kısa ad
  teklifAd: string // SehirTeklifBolumu: "{teklifAd} İşletmeniz İçin..."
  baslikVurgu: string // h1 ikinci satır
  aciklama: string // meta description
  ozet: string // hero altı açıklama
  kisaOzet: string // "Kısa özet" kutusu
  ihtiyaclar: { baslik: string; not: string }[]
  kurallar: { baslik: string; maddeler: string[] }
  hizmetler: { ad: string; href: string; not: string }[]
  bloglar: { label: string; href: string }[]
  portfoy: string[] // src/lib/portfolio.ts slug'ları
  portfoyNot?: string
  sss: { q: string; a: string }[]
}

const SEO = '/hizmetler/seo'
const WEB = '/hizmetler/web-tasarim'
const ADS = '/hizmetler/google-ads'

export const sektorler: SektorVeri[] = [
  {
    slug: 'avukat-hukuk-burolari',
    ad: 'Avukatlar ve Hukuk Büroları',
    kisaAd: 'Avukatlar',
    teklifAd: 'Hukuk Bürosu',
    baslikVurgu: 'Reklamsız, Kurallara Uygun Görünürlük',
    aciklama:
      'Avukatlar ve hukuk büroları için reklam yasağına uygun SEO ve web sitesi. Bilgilendirici içerik, Google İşletme Profili ve güven veren profesyonel site.',
    ozet:
      'Avukatlık mesleğinde reklam yasak; ama müvekkil adayı yine Google’da arıyor. Bilgilendirici içerik ve sade, güven veren bir siteyle bu aramalarda görünür olmanızı sağlıyoruz.',
    kisaOzet:
      'Avukatlar için ücretli reklam kapalı bir kapıdır; dijitalde görünürlük organik kanallardan, yani SEO ve bilgilendirici içerikten gelir. Biz hukuk bürolarına meslek kurallarına uygun web sitesi ve SEO çalışması yapıyoruz; sıralama garantisi vermiyoruz.',
    ihtiyaclar: [
      { baslik: 'Uzmanlık alanı sayfaları', not: 'Boşanma, iş hukuku, ceza hukuku gibi her çalışma alanı için ayrı, sade dille yazılmış bilgilendirme sayfası; arayan kişi doğru sayfaya iner.' },
      { baslik: 'Güven veren profesyonel site', not: 'Avukat özgeçmişi, baro sicil bilgisi, yayınlar ve iletişim bilgisi net olmalı. Abartılı ifade yerine ölçülü bir dil güven kazandırır.' },
      { baslik: 'Google İşletme Profili', not: '"Yakınımdaki avukat" gibi aramalarda harita sonuçları belirleyicidir; doğru kategori, çalışma saatleri ve güncel bilgiler gerekir.' },
      { baslik: 'Soru-cevap içerikleri', not: '"Tapu iptal davası ne kadar sürer?" gibi soruları yanıtlayan rehber yazılar hem Google’da hem yapay zekâ aramalarında kaynak olma şansı yaratır.' },
    ],
    kurallar: {
      baslik: 'Avukatlık mesleğinde reklam yasağı',
      maddeler: [
        'Avukatlık Kanunu ve Türkiye Barolar Birliği meslek kuralları, iş elde etmeye yönelik reklamı yasaklar; bu nedenle Google Ads ve ücretli sosyal medya reklamı önermiyoruz.',
        'Bilgilendirme amaçlı web sitesi ve tanıtım içerikleri mümkündür; ancak "kesin kazanırsınız", "en iyi avukat" gibi iddialı ve karşılaştırmalı ifadeler kullanılmamalıdır.',
        'Ücret, başarı oranı veya müvekkil yorumları sitede yer almamalıdır; içerik bilgilendirici kalmalıdır.',
        'Bu bilgiler genel çerçevedir, hukuki görüş değildir. Kesin kurallar için bağlı olduğunuz baronun güncel düzenlemesini kontrol edin.',
      ],
    },
    hizmetler: [
      { ad: 'SEO ve İçerik', href: SEO, not: 'Uzmanlık alanı sayfaları, rehber yazılar ve yerel SEO ile organik görünürlük.' },
      { ad: 'Web Tasarım', href: WEB, not: 'Hızlı, sade ve meslek kurallarına uygun dille hazırlanmış hukuk bürosu sitesi.' },
    ],
    bloglar: [{ label: 'Avukatlar İçin Dijital Pazarlama ve SEO Rehberi', href: '/blog/avukatlar-icin-dijital-pazarlama-seo-rehberi' }],
    portfoy: ['mert-anil-guler', 'furkan-arikan'],
    sss: [
      { q: 'Avukatlar Google Ads kullanabilir mi?', a: 'Meslek kuralları iş elde etmeye yönelik reklamı yasakladığı için Google Ads’i önermiyoruz. Görünürlüğü SEO, bilgilendirici içerik ve Google İşletme Profili ile kuruyoruz.' },
      { q: 'Hukuk bürosu web sitesinde neler olmalı?', a: 'Avukat bilgileri, çalışma alanları, bilgilendirici makaleler ve net iletişim bilgisi. Ücret, başarı vaadi ve müvekkil yorumları yer almamalıdır.' },
      { q: 'Avukatlar için SEO ne kadar sürede sonuç verir?', a: 'Google’ın kendi açıklamasına göre SEO çalışmalarının etkisini görmek genellikle 4 ay ile 1 yıl arasında sürer. Rekabete göre değişir ve sıralama garantisi verilemez.' },
      { q: 'Hangi şehirlerdeki avukatlarla çalışıyorsunuz?', a: 'Hizmeti uzaktan veriyoruz; Türkiye’nin her yerindeki hukuk bürolarıyla çevrim içi görüşmelerle çalışabiliyoruz.' },
    ],
  },
  {
    slug: 'dis-hekimleri-klinikler',
    ad: 'Diş Hekimleri ve Klinikler',
    kisaAd: 'Diş Hekimleri',
    teklifAd: 'Diş Kliniği',
    baslikVurgu: 'Randevu Getiren Dijital Görünürlük',
    aciklama:
      'Diş hekimleri ve diş klinikleri için SEO, web sitesi ve sağlık mevzuatına dikkat eden Google Ads. Tedavi sayfaları, harita görünürlüğü ve kolay randevu.',
    ozet:
      'Hasta, diş ağrısı başladığında ya da implant araştırırken Google’a bakar. Tedavi odaklı sayfalar, güçlü harita görünürlüğü ve kolay randevu akışıyla kliniğinizi bu aramalarda öne çıkarıyoruz.',
    kisaOzet:
      'Diş klinikleri için en çok hasta getiren kanallar yerel SEO, Google haritaları ve iyi kurgulanmış bir web sitesidir; uygun durumlarda Google Ads destek olur. Sağlık hizmetlerinde tanıtım kurallarla sınırlı olduğu için içerikleri bilgilendirici ve ölçülü bir dille hazırlıyoruz.',
    ihtiyaclar: [
      { baslik: 'Tedavi bazlı sayfalar', not: 'İmplant, ortodonti, kanal tedavisi, çocuk diş hekimliği gibi her tedavi için ayrı sayfa; hasta aradığı tedaviye doğrudan ulaşır.' },
      { baslik: 'Harita ve yorumlar', not: '"Yakınımdaki diş hekimi" aramalarında Google İşletme Profili ve gerçek hasta yorumları çok etkilidir.' },
      { baslik: 'Kolay randevu', not: 'Mobilde tek dokunuşla arama, WhatsApp ve randevu formu; acil durumda hastanın kaybolmaması için sade akış.' },
      { baslik: 'Güven unsurları', not: 'Hekim kadrosu, uzmanlıklar, klinik fotoğrafları ve sterilizasyon süreçlerinin anlatımı karar vermeyi kolaylaştırır.' },
    ],
    kurallar: {
      baslik: 'Sağlık hizmetlerinde tanıtım kuralları',
      maddeler: [
        'Sağlık hizmetlerinde reklam ve tanıtım, Sağlık Bakanlığı mevzuatı ve meslek kurallarıyla sınırlandırılmıştır; yanıltıcı, talep yaratmaya yönelik veya kesin sonuç vaat eden ifadeler kullanılmamalıdır.',
        'Önce-sonra fotoğrafları, fiyat kampanyaları ve "en iyi klinik" gibi karşılaştırmalı iddialar risklidir; içerik bilgilendirici kalmalıdır.',
        'Google Ads kullanılacaksa reklam metinleri hem mevzuata hem Google’ın sağlık reklamı politikalarına uygun hazırlanmalıdır.',
        'Bu bilgiler genel çerçevedir, hukuki görüş değildir. Güncel kurallar için Türk Diş Hekimleri Birliği ve ilgili mevzuatı kontrol edin.',
      ],
    },
    hizmetler: [
      { ad: 'Yerel SEO', href: SEO, not: 'Tedavi sayfaları, Google İşletme Profili ve ilçe bazlı aramalarda görünürlük.' },
      { ad: 'Web Tasarım', href: WEB, not: 'Hızlı, mobil uyumlu ve randevuya yönlendiren klinik sitesi.' },
      { ad: 'Google Ads (uygunsa)', href: ADS, not: 'Mevzuata uygun, bilgilendirici metinlerle arama kampanyaları.' },
    ],
    bloglar: [{ label: 'Diş Hekimleri İçin Dijital Pazarlama Rehberi', href: '/blog/dis-hekimleri-icin-dijital-pazarlama-rehberi' }],
    portfoy: ['nur-celen', 'gamzeli-dermokozmetik'],
    portfoyNot: 'Diş kliniğine özel bir vaka çalışmamız henüz yok; sağlık alanından canlı projelerimizi inceleyebilirsiniz.',
    sss: [
      { q: 'Diş klinikleri Google Ads kullanabilir mi?', a: 'Sağlık reklamlarında sınırlar vardır. Uygun durumlarda, bilgilendirici ve mevzuata uygun metinlerle arama kampanyası kurulabilir; her kampanyayı bu açıdan kontrol ediyoruz.' },
      { q: 'Diş kliniği için SEO mu, Google Ads mi?', a: 'SEO kalıcı ve uzun vadeli görünürlük sağlar; Google Ads daha hızlı başlar ama bütçe bitince durur. Çoğu klinik için önce web sitesi ve yerel SEO, ardından ihtiyaca göre Ads mantıklıdır.' },
      { q: 'Hasta yorumlarını nasıl artırabilirim?', a: 'Memnun hastalara tedavi sonrası Google yorum bağlantısı göndermek en kolay yoldur. Ücretsiz Google Yorum Linki aracımızla bu bağlantıyı oluşturabilirsiniz.' },
      { q: 'Fiyatlarınız nedir?', a: 'Fiyat kapsam ve rekabete göre değişir. AI teklif hesaplayıcıyla kliniğinize özel tahmini teklifi görebilirsiniz.' },
    ],
  },
  {
    slug: 'psikolog-terapistler',
    ad: 'Psikologlar ve Terapistler',
    kisaAd: 'Psikologlar',
    teklifAd: 'Terapi Pratiği',
    baslikVurgu: 'Danışana Güven Veren Dijital Varlık',
    aciklama:
      'Psikologlar, psikolojik danışmanlar ve terapistler için etik sınırlar içinde SEO ve web sitesi. Online terapi görünürlüğü, sakin ve güven veren tasarım.',
    ozet:
      'Danışan adayı genellikle sessizce araştırır: yaklaşımınızı, uzmanlık alanlarınızı ve size nasıl ulaşacağını. Sakin, güven veren bir site ve doğru içerikle bu araştırmada karşısına çıkmanızı sağlıyoruz.',
    kisaOzet:
      'Psikolog ve terapistler için dijital görünürlüğün temeli; güven veren bir web sitesi, uzmanlık alanlarını anlatan içerik ve yerel ya da online terapi aramalarında SEO’dur. Gizliliğe ve meslek etiğine uygun, abartısız bir dil kullanıyoruz.',
    ihtiyaclar: [
      { baslik: 'Yaklaşım ve uzmanlık sayfaları', not: 'BDT, EMDR, çift terapisi, çocuk ve ergen gibi alanlar için açık ve sakin bir dille yazılmış sayfalar.' },
      { baslik: 'Online terapi görünürlüğü', not: 'Online seans veriyorsanız şehirden bağımsız aramalarda görünmek için ayrı bir içerik kurgusu gerekir.' },
      { baslik: 'Gizliliğe saygılı iletişim', not: 'Form ve mesajlaşma süreçlerinde kişisel veriye dikkat; danışanın kendini güvende hissettiği basit bir ilk adım.' },
      { baslik: 'Bilgilendirici yazılar', not: 'Teşhis koymayan, farkındalık oluşturan yazılar hem Google’da hem yapay zekâ aramalarında kaynak olma şansı yaratır.' },
    ],
    kurallar: {
      baslik: 'Etik ve tanıtım sınırları',
      maddeler: [
        'Ruh sağlığı hizmetlerinde tanıtım, sağlık alanındaki reklam düzenlemeleri ve meslek örgütlerinin etik kurallarıyla sınırlıdır; sonuç vaadi ve yönlendirici dil kullanılmamalıdır.',
        'Danışan yorumları ve vaka anlatımları gizlilik açısından risklidir; sitede kullanılmamasını öneriyoruz.',
        'İçerikler teşhis koyar gibi değil, bilgilendirici olmalıdır.',
        'Bu bilgiler genel çerçevedir, hukuki görüş değildir. Güncel kurallar için bağlı olduğunuz meslek örgütünün düzenlemelerini kontrol edin.',
      ],
    },
    hizmetler: [
      { ad: 'SEO ve İçerik', href: SEO, not: 'Uzmanlık ve online terapi aramalarında görünürlük, bilgilendirici rehber içerikler.' },
      { ad: 'Web Tasarım', href: WEB, not: 'Sakin, güven veren ve mobilde kolay iletişim sağlayan kişisel site.' },
    ],
    bloglar: [{ label: 'Psikologlar ve Terapistler İçin Dijital Pazarlama Rehberi', href: '/blog/psikologlar-icin-dijital-pazarlama-rehberi' }],
    portfoy: ['nur-celen', 'terapisti-bul'],
    sss: [
      { q: 'Psikologlar reklam verebilir mi?', a: 'Sağlık alanındaki tanıtım kuralları ve meslek etiği ciddi sınırlar koyar. Bu yüzden ağırlıklı olarak SEO, içerik ve Google İşletme Profili ile organik görünürlük öneriyoruz.' },
      { q: 'Online terapi için ayrı bir strateji gerekir mi?', a: 'Evet. Online seans verdiğinizde rakipleriniz tüm Türkiye’deki uzmanlar olur; içerik ve sayfa yapısını şehirden bağımsız aramalara göre kurmak gerekir.' },
      { q: 'Danışan yorumlarını sitede kullanabilir miyim?', a: 'Gizlilik ve etik açısından önermiyoruz. Güveni uzmanlık bilgileri, eğitimler ve bilgilendirici içerikle oluşturmak daha doğru bir yoldur.' },
      { q: 'Ne kadar sürede sonuç alırım?', a: 'SEO’nun etkisini görmek genellikle 4 ay ile 1 yıl arasında sürer ve garanti edilemez. Google İşletme Profili düzenlemesi daha kısa sürede fark yaratabilir.' },
    ],
  },
  {
    slug: 'veteriner-klinikleri',
    ad: 'Veteriner Klinikleri',
    kisaAd: 'Veterinerler',
    teklifAd: 'Veteriner Kliniği',
    baslikVurgu: 'Acil Aramadan Düzenli Hastaya',
    aciklama:
      'Veteriner klinikleri için yerel SEO, Google haritalar görünürlüğü, web sitesi ve uygun durumlarda Google Ads. Acil aramalarda bulunur olun.',
    ozet:
      'Evcil hayvanı rahatsızlanan biri en yakın ve açık kliniği arar. Harita görünürlüğü, net çalışma saatleri ve hizmet sayfalarıyla bu anlarda bulunur olmanızı sağlıyoruz.',
    kisaOzet:
      'Veteriner klinikleri için en kritik kanal yerel aramalar ve Google haritalarıdır; acil durumda hasta sahibi en yakın açık kliniği arar. Doğru işletme profili, hizmet sayfaları ve gerektiğinde bölgesel Google Ads ile görünürlüğü artırıyoruz.',
    ihtiyaclar: [
      { baslik: 'Harita ve çalışma saatleri', not: 'Acil durumda doğru saat ve telefon bilgisi hayati; Google İşletme Profili her zaman güncel olmalı.' },
      { baslik: 'Hizmet sayfaları', not: 'Aşı, kısırlaştırma, cerrahi, diş bakımı, egzotik hayvanlar gibi hizmetler için ayrı sayfalar.' },
      { baslik: 'Hızlı iletişim', not: 'Mobilde tek dokunuşla arama ve WhatsApp; nöbetçi veya acil hizmet varsa açıkça belirtilmeli.' },
      { baslik: 'Bilgilendirici içerik', not: 'Aşı takvimi, mevsimsel parazit uyarıları gibi yazılar hasta sahiplerini kliniğe bağlar.' },
    ],
    kurallar: {
      baslik: 'Meslek kurallarına dikkat',
      maddeler: [
        'Veteriner hekimlik hizmetlerinin tanıtımı meslek kurallarıyla sınırlıdır; yanıltıcı, kesin sonuç vaat eden veya karşılaştırmalı ifadelerden kaçınılmalıdır.',
        'İlaç ve tedavi tanıtımı yerine hizmet ve bilgilendirme odaklı içerik daha güvenlidir.',
        'Bu bilgiler genel çerçevedir, hukuki görüş değildir. Güncel kurallar için Türk Veteriner Hekimleri Birliği ve bağlı olduğunuz odanın düzenlemelerini kontrol edin.',
      ],
    },
    hizmetler: [
      { ad: 'Yerel SEO', href: SEO, not: 'Harita görünürlüğü, hizmet sayfaları ve ilçe aramaları.' },
      { ad: 'Web Tasarım', href: WEB, not: 'Mobilde hızlı, acil iletişimi öne çıkaran klinik sitesi.' },
      { ad: 'Google Ads (uygunsa)', href: ADS, not: 'Klinik çevresine sınırlı, acil ve hizmet aramalarına yönelik kampanyalar.' },
    ],
    bloglar: [{ label: 'Veteriner Klinikleri İçin Dijital Pazarlama Rehberi', href: '/blog/veteriner-klinikleri-icin-dijital-pazarlama-rehberi' }],
    portfoy: ['veterineri-bul'],
    sss: [
      { q: 'Veteriner kliniği için en önemli dijital kanal hangisi?', a: 'Çoğu klinik için Google haritaları ve yerel arama sonuçlarıdır. Güncel işletme profili, gerçek yorumlar ve mobil uyumlu bir site temel yapı taşlarıdır.' },
      { q: 'Google Ads veteriner kliniği için mantıklı mı?', a: 'Kliniğin çevresiyle sınırlandırılmış arama kampanyaları özellikle acil hizmet ve yeni açılan kliniklerde işe yarayabilir. Uygun olup olmadığını ücretsiz görüşmede birlikte değerlendiriyoruz.' },
      { q: 'Kaç ilçeyi hedefleyebilirim?', a: 'Hasta sahipleri genellikle yakın kliniği tercih ettiği için gerçekten hizmet verdiğiniz bölgeye odaklanmak daha verimlidir.' },
      { q: 'Fiyatlarınız nedir?', a: 'Kapsama göre değişir. AI teklif hesaplayıcıyla kliniğinize özel tahmini teklifi görebilirsiniz.' },
    ],
  },
  {
    slug: 'mali-musavirler',
    ad: 'Mali Müşavirler ve Muhasebe Büroları',
    kisaAd: 'Mali Müşavirler',
    teklifAd: 'Mali Müşavirlik',
    baslikVurgu: 'Doğru Müşteriyi Bulan Dijital Varlık',
    aciklama:
      'Mali müşavirler ve muhasebe büroları için meslek kurallarına uygun SEO ve web sitesi. Şirket kuruluşu, e-dönüşüm gibi aramalarda görünürlük.',
    ozet:
      'Yeni şirket kuracak girişimci ya da muhasebecisini değiştirmek isteyen işletme önce Google’da araştırır. Bilgilendirici içerik ve profesyonel bir siteyle bu aramalarda güven veren bir seçenek olmanızı sağlıyoruz.',
    kisaOzet:
      'Mali müşavirler için dijital görünürlük, meslek kuralları nedeniyle büyük ölçüde SEO ve bilgilendirici içerikten gelir. Şirket kuruluşu, vergi takvimi ve e-dönüşüm gibi konularda faydalı içerik ve profesyonel bir siteyle doğru müşteriye ulaşmanıza yardım ediyoruz.',
    ihtiyaclar: [
      { baslik: 'Hizmet sayfaları', not: 'Şirket kuruluşu, defter tutma, bordro, e-fatura/e-defter geçişi gibi hizmetler için ayrı, anlaşılır sayfalar.' },
      { baslik: 'Rehber içerikler', not: '"Şahıs şirketi mi limited mi?" gibi sorulara verilen net cevaplar hem güven oluşturur hem arama trafiği getirir.' },
      { baslik: 'Profesyonel kurumsal kimlik', not: 'Ruhsat bilgileri, ekip ve uzmanlık alanlarını gösteren, sade ve güven veren site.' },
      { baslik: 'Kolay ilk görüşme', not: 'İletişim formu ve WhatsApp ile hızlı ilk adım; gerekli belgeler hakkında ön bilgilendirme.' },
    ],
    kurallar: {
      baslik: 'Meslek kurallarına uygun tanıtım',
      maddeler: [
        'Serbest muhasebeci mali müşavirlik mesleğinde reklam, meslek mevzuatı ve TÜRMOB meslek kurallarıyla sınırlıdır; iş elde etmeye yönelik reklam ve indirimli ücret vaadi yapılmamalıdır.',
        'Bilgilendirme amaçlı web sitesi ve içerik üretimi mümkündür; ifadeler ölçülü ve doğru olmalıdır.',
        'Bu nedenle ücretli reklam yerine SEO ve içerik odaklı bir yaklaşım öneriyoruz.',
        'Bu bilgiler genel çerçevedir, hukuki görüş değildir. Güncel kurallar için bağlı olduğunuz odanın ve TÜRMOB’un düzenlemelerini kontrol edin.',
      ],
    },
    hizmetler: [
      { ad: 'SEO ve İçerik', href: SEO, not: 'Hizmet sayfaları, rehber yazılar ve yerel aramalarda görünürlük.' },
      { ad: 'Web Tasarım', href: WEB, not: 'Kurumsal, hızlı ve güven veren büro sitesi.' },
    ],
    bloglar: [{ label: 'Mali Müşavirler İçin B2B Dijital Pazarlama Rehberi', href: '/blog/mali-musavirler-icin-dijital-pazarlama-rehberi' }],
    portfoy: ['mert-anil-guler', 'furkan-arikan'],
    portfoyNot: 'Mali müşavirliğe özel bir vaka çalışmamız henüz yok. Hukuk gibi yine meslek kurallarıyla çalışan sektörlerdeki canlı projelerimizi inceleyebilirsiniz.',
    sss: [
      { q: 'Mali müşavirler Google Ads kullanabilir mi?', a: 'Meslek kuralları reklamı sınırladığı için ücretli reklamı önermiyoruz. Görünürlüğü SEO, rehber içerik ve Google İşletme Profili ile kuruyoruz.' },
      { q: 'Hangi içerikler müşteri getirir?', a: 'Şirket kuruluşu, vergi takvimi, e-dönüşüm ve teşvikler gibi işletmelerin gerçekten araştırdığı konuları net yanıtlayan yazılar.' },
      { q: 'Sadece kendi şehrimdeki müşterilere mi ulaşırım?', a: 'Hizmetlerinizi uzaktan veriyorsanız içerik stratejisi şehirden bağımsız aramaları da hedefleyebilir. Bunu ilk görüşmede birlikte planlıyoruz.' },
      { q: 'Sonuç ne kadar sürer?', a: 'SEO’nun etkisini görmek genellikle 4 ay ile 1 yıl arasında sürer ve garanti edilemez.' },
    ],
  },
  {
    slug: 'e-ticaret',
    ad: 'E-Ticaret İşletmeleri',
    kisaAd: 'E-Ticaret',
    teklifAd: 'E-Ticaret',
    baslikVurgu: 'Daha Fazla Ziyaret, Daha Fazla Sipariş',
    aciklama:
      'E-ticaret siteleri için SEO, Google Ads (alışveriş ve arama), hızlı web altyapısı ve otomasyon. Kategori ve ürün sayfalarında görünürlük.',
    ozet:
      'E-ticarette rekabet ürün sayfası kalitesi, site hızı ve reklam verimliliğinde kazanılır. Kategori SEO’su, doğru kurgulanmış Google Ads ve otomasyonla satış hunisinin her adımını güçlendiriyoruz.',
    kisaOzet:
      'E-ticaret siteleri için büyüme; kategori ve ürün SEO’su, ölçülebilir Google Ads kampanyaları ve hızlı bir altyapının birlikte çalışmasından gelir. Sepet terk ve sipariş takibi gibi işleri otomasyonla kolaylaştırıyoruz; satış artışı garanti etmiyoruz.',
    ihtiyaclar: [
      { baslik: 'Kategori ve ürün SEO’su', not: 'Kategori sayfaları için özgün açıklamalar, ürün sayfalarında yapılandırılmış veri ve iç bağlantı yapısı.' },
      { baslik: 'Site hızı ve mobil deneyim', not: 'Ziyaretçilerin çoğu mobilden gelir; yavaş sayfa ve karmaşık ödeme adımı satış kaybettirir.' },
      { baslik: 'Ölçülebilir reklam', not: 'Doğru dönüşüm takibi kurulmadan reklam bütçesini yönetmek tahmine dayanır; önce ölçüm, sonra optimizasyon.' },
      { baslik: 'Otomasyon', not: 'Sepet terk e-postası, stok uyarısı, sipariş bildirimleri gibi tekrarlayan işler n8n ile otomatikleşir.' },
    ],
    kurallar: {
      baslik: 'E-ticarette dikkat edilmesi gerekenler',
      maddeler: [
        'Mesafeli satış sözleşmesi, ön bilgilendirme formu, iade koşulları ve KVKK aydınlatma metni sitede açıkça yer almalıdır.',
        'İndirim ve kampanya ifadeleri gerçeği yansıtmalı; ticari reklam ve haksız ticari uygulamalar mevzuatına uygun olmalıdır.',
        'Ticari elektronik ileti (e-posta, SMS) göndermek için alıcının önceden onayı gerekir.',
        'Bu bilgiler genel çerçevedir, hukuki görüş değildir; kendi durumunuz için bir hukukçuya danışın.',
      ],
    },
    hizmetler: [
      { ad: 'SEO', href: SEO, not: 'Kategori, ürün ve içerik SEO’su; teknik altyapı iyileştirmeleri.' },
      { ad: 'Google Ads', href: ADS, not: 'Alışveriş ve arama kampanyaları, dönüşüm takibi ve bütçe optimizasyonu.' },
      { ad: 'Web Tasarım', href: WEB, not: 'Hızlı, mobil öncelikli ve dönüşüm odaklı e-ticaret arayüzü.' },
      { ad: 'n8n Otomasyon', href: '/hizmetler/n8n-otomasyon', not: 'Sipariş, stok ve e-posta süreçlerinde otomasyon.' },
    ],
    bloglar: [
      { label: 'E-Ticaret İçin Dijital Pazarlama Rehberi', href: '/blog/e-ticaret-icin-dijital-pazarlama-rehberi' },
      { label: 'E-Ticaret İçin 7 n8n Otomasyon Örneği', href: '/blog/e-ticaret-icin-n8n-otomasyon-ornekleri' },
    ],
    portfoy: ['gamzeli-dermokozmetik'],
    sss: [
      { q: 'E-ticaret sitesi için önce SEO mu, Google Ads mi?', a: 'Google Ads hızlı satış verisi sağlar; SEO ise zamanla reklam bağımlılığını azaltır. Çoğu site için ikisini birlikte, ölçüm altyapısı kurulduktan sonra yürütmek mantıklıdır.' },
      { q: 'Reklam bütçemi nasıl hesaplarım?', a: 'Ücretsiz Google Ads Bütçe Hesaplayıcımızla hedef sipariş sayınıza göre gereken tıklamayı ve tahmini reklam harcamasını görebilirsiniz.' },
      { q: 'Mevcut e-ticaret altyapımla çalışabilir misiniz?', a: 'Evet; mevcut altyapınızı inceleyip SEO, reklam ve otomasyon tarafında neler yapılabileceğini ücretsiz görüşmede netleştiriyoruz.' },
      { q: 'Fiyatlarınız nedir?', a: 'Kapsama göre değişir. AI teklif hesaplayıcıyla işletmenize özel tahmini teklifi görebilirsiniz.' },
    ],
  },
  {
    slug: 'restoran-kafe',
    ad: 'Restoran ve Kafeler',
    kisaAd: 'Restoran ve Kafeler',
    teklifAd: 'Restoran ve Kafe',
    baslikVurgu: 'Haritada Bulunun, Masayı Doldurun',
    aciklama:
      'Restoran ve kafeler için Google haritalar görünürlüğü, yerel SEO, web sitesi ve menü sayfası. "Yakınımdaki restoran" aramalarında öne çıkın.',
    ozet:
      'Yemek yiyecek yer arayan kişi kararını çoğu zaman haritada, fotoğraflara ve yorumlara bakarak birkaç dakikada verir. İşletme profilinizi, menünüzü ve sitenizi bu kısa karara göre düzenliyoruz.',
    kisaOzet:
      'Restoran ve kafeler için en etkili dijital kanal Google haritaları ve işletme profilidir; güncel fotoğraflar, menü ve gerçek yorumlar kararı belirler. Yerel SEO, sade bir site ve uygun durumlarda bölgesel reklamla görünürlüğü artırıyoruz.',
    ihtiyaclar: [
      { baslik: 'Google İşletme Profili', not: 'Güncel saatler, menü, fotoğraflar ve yorumlara yanıt; "yakınımdaki kafe" aramalarının merkezinde bu profil var.' },
      { baslik: 'Mobil menü ve rezervasyon', not: 'Hızlı açılan, metin olarak okunabilen menü sayfası ve tek dokunuşla arama ya da rezervasyon.' },
      { baslik: 'Yorum yönetimi', not: 'Memnun misafirlerden düzenli yorum istemek ve yorumlara kibarca yanıt vermek haritada güveni artırır.' },
      { baslik: 'Yerel içerik', not: 'Semt, etkinlik ve özel menü sayfaları; turistik bölgelerde çok dilli kısa bilgiler.' },
    ],
    kurallar: {
      baslik: 'Dikkat edilmesi gerekenler',
      maddeler: [
        'Google, yorum karşılığında indirim veya hediye verilmesine izin vermez; teşvikli ve sahte yorumlar kaldırılabilir.',
        'Menüdeki ürün bilgileri ve kampanyalar gerçeği yansıtmalıdır.',
        'Alkollü içecek satan işletmelerde alkol reklamına ilişkin yasal kısıtlamalar göz önünde bulundurulmalıdır.',
        'Bu bilgiler genel çerçevedir, hukuki görüş değildir.',
      ],
    },
    hizmetler: [
      { ad: 'Yerel SEO', href: SEO, not: 'Google İşletme Profili, harita görünürlüğü ve semt aramaları.' },
      { ad: 'Web Tasarım', href: WEB, not: 'Mobilde hızlı menü ve rezervasyon sayfası.' },
      { ad: 'Sosyal Medya İçerik', href: '/hizmetler/sosyal-medya', not: 'Menü ve mekân odaklı post, story ve video tasarımı.' },
    ],
    bloglar: [
      { label: 'İzmit Restoranları İçin Dijital Pazarlama Rehberi', href: '/blog/izmit-restoran-dijital-pazarlama-rehberi' },
      { label: 'Google Yorumları Nasıl Artırılır?', href: '/blog/google-yorumlari-nasil-artirilir' },
    ],
    portfoy: ['depodez'],
    portfoyNot: 'Restoran veya kafeye özel bir vaka çalışmamız henüz yok. Yerel aramalarda görünürlük çalışması yaptığımız canlı projeyi inceleyebilirsiniz.',
    sss: [
      { q: 'Restoranın web sitesine ihtiyacı var mı?', a: 'Google İşletme Profili en önemli kanaldır; ancak hızlı bir menü ve rezervasyon sayfası, profilin güvenilirliğini ve aramalarda görünürlüğü destekler.' },
      { q: 'Google yorumlarını nasıl artırırım?', a: 'Hesapla birlikte ya da masada yorum bağlantısı içeren bir kart sunmak etkili olur. Ücretsiz Google Yorum Linki aracımızla bağlantınızı oluşturabilirsiniz.' },
      { q: 'Sosyal medya mı, Google mı?', a: 'İkisi farklı işler görür: sosyal medya mekânı tanıtır, Google ise o an yer arayan kişiyi size getirir. Yeni müşteri için Google haritaları genellikle önceliklidir.' },
      { q: 'Fiyatlarınız nedir?', a: 'Kapsama göre değişir. AI teklif hesaplayıcıyla işletmenize özel tahmini teklifi görebilirsiniz.' },
    ],
  },
]

// Blog yazısı → ilgili sektör sayfası (blogIcLinkler.ts kullanır)
export const blogSektor: Record<string, string> = Object.fromEntries(
  sektorler.flatMap((s) => s.bloglar.filter((b) => b.href.startsWith('/blog/') && !b.href.includes('google-yorumlari')).map((b) => [b.href.slice(6), s.slug]))
)
