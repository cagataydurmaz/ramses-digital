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
  // ─── 24 Kasım 2026'da eklenen sektörler ───
  {
    slug: 'ozel-hastane-poliklinik',
    ad: 'Özel Hastaneler ve Poliklinikler',
    kisaAd: 'Hastaneler',
    teklifAd: 'Hastane / Poliklinik',
    baslikVurgu: 'Branş Branş Bulunabilir Olun',
    aciklama: 'Özel hastaneler ve poliklinikler için branş bazlı SEO, hızlı kurumsal site, hekim sayfaları ve sağlık mevzuatına uygun dijital görünürlük.',
    ozet: 'Hasta önce şikâyetini ve branşı, sonra hekimi ve hastaneyi araştırır. Branş ve hekim sayfalarıyla, harita görünürlüğü ve kolay randevu akışıyla hastanenizi bu aramalarda öne çıkarıyoruz.',
    kisaOzet: 'Özel hastane ve polikliniklerde hastalar çoğunlukla branş ve hekim adıyla arama yapar; bu yüzden her branş ve hekim için ayrı, bilgilendirici sayfa en güçlü kanaldır. Sağlık tanıtım kurallarına uygun, iddiasız bir dille SEO, web sitesi ve gerektiğinde Google Ads çalışması yapıyoruz; sıralama garantisi vermiyoruz.',
    ihtiyaclar: [
      { baslik: 'Branş sayfaları', not: 'Kardiyoloji, ortopedi, kadın doğum, çocuk sağlığı gibi her branş için ayrı sayfa; hasta aradığı bölüme doğrudan ulaşır.' },
      { baslik: 'Hekim profilleri', not: 'Uzmanlık, eğitim ve çalışma saatleri bilgisiyle hekim sayfaları; "doktor adı + branş" aramalarında görünürlük.' },
      { baslik: 'Randevu ve iletişim', not: 'Online randevu, telefon ve WhatsApp yönlendirmesi; acil ve poliklinik bilgisinin net ayrılması.' },
      { baslik: 'Anlaşmalı kurumlar ve SSS', not: 'SGK ve özel sigorta anlaşmaları, ziyaret saatleri, ulaşım gibi sık sorulan soruların net cevapları.' },
    ],
    kurallar: {
      baslik: 'Sağlık kuruluşlarında tanıtım kuralları',
      maddeler: [
        'Sağlık kuruluşlarının tanıtımı Sağlık Bakanlığı mevzuatıyla sınırlandırılmıştır; yanıltıcı, talep yaratmaya yönelik veya kesin sonuç vaat eden ifadeler kullanılmamalıdır.',
        '"En iyi hastane", fiyat kampanyası ve önce-sonra görselleri gibi içerikler risklidir; içerik bilgilendirici kalmalıdır.',
        'Google Ads kullanılacaksa reklam metinleri hem mevzuata hem Google’ın sağlık reklamı politikalarına uygun olmalıdır.',
        'Bu bilgiler genel çerçevedir, hukuki görüş değildir. Güncel kurallar için ilgili mevzuatı ve kurumunuzun hukuk birimini kontrol edin.',
      ],
    },
    hizmetler: [
      { ad: 'SEO', href: SEO, not: 'Branş ve hekim sayfaları, teknik SEO ve yerel görünürlük.' },
      { ad: 'Web Tasarım', href: WEB, not: 'Çok branşlı, hızlı ve randevuya yönlendiren kurumsal site.' },
      { ad: 'Google Ads (uygunsa)', href: ADS, not: 'Mevzuata uygun, bilgilendirici metinlerle branş bazlı kampanyalar.' },
    ],
    bloglar: [{ label: 'Google Yorumları Nasıl Artırılır?', href: '/blog/google-yorumlari-nasil-artirilir' }, { label: 'Diş Klinikleri ve Sağlık Sektörü', href: '/sektorler/dis-hekimleri-klinikler' }],
    portfoy: ['nur-celen', 'terapisti-bul'],
    portfoyNot: 'Hastaneye özel bir vaka çalışmamız henüz yok; sağlık alanından canlı projelerimizi inceleyebilirsiniz.',
    sss: [
      { q: 'Hastane sitesinde her branş için ayrı sayfa gerekli mi?', a: 'Evet. Hastalar "ortopedi doktoru", "çocuk doktoru" gibi branş adıyla arar. Her branş için ayrı, bilgilendirici sayfa hem Google’da görünürlüğü hem hastanın doğru bölüme ulaşmasını kolaylaştırır.' },
      { q: 'Hekim sayfaları neden önemli?', a: 'Hastaların önemli bir kısmı hekimi adıyla arar ve yorumlara bakar. Uzmanlık ve deneyimi anlatan hekim sayfaları güven verir ve bu aramalarda hastanenizi öne çıkarır.' },
      { q: 'Hastaneler Google Ads kullanabilir mi?', a: 'Sağlık reklamlarında hem yasal hem Google politikası kaynaklı sınırlar vardır. Uygun durumlarda bilgilendirici, mevzuata uygun metinlerle kampanya kurulabilir; her kampanyayı bu açıdan kontrol ediyoruz.' },
      { q: 'Fiyatlarınız nedir?', a: 'Kapsam branş ve sayfa sayısına göre değişir. AI teklif hesaplayıcıyla tahmini teklifi görebilirsiniz.' },
    ],
  },
  {
    slug: 'agiz-dis-sagligi-merkezleri',
    ad: 'Ağız ve Diş Sağlığı Merkezleri',
    kisaAd: 'Diş Merkezleri',
    teklifAd: 'Diş Merkezi / Diş Hastanesi',
    baslikVurgu: 'Çok Hekimli Kliniklere Kurumsal Görünürlük',
    aciklama: 'Ağız ve diş sağlığı merkezleri ve diş hastaneleri için çok hekimli, tedavi bazlı SEO, kurumsal site, harita görünürlüğü ve sağlık turizmi için çok dilli yapı.',
    ozet: 'Birden fazla hekim ve uzmanlığı olan diş merkezlerinde hasta hem tedaviyi hem hekimi araştırır. Tedavi, hekim ve şube sayfalarıyla merkezinizi bu aramalarda öne çıkarıyoruz.',
    kisaOzet: 'Ağız ve diş sağlığı merkezleri tek hekimli kliniklerden farklıdır: çok sayıda tedavi, hekim ve bazen birden fazla şube vardır. Her biri için ayrı sayfa, güçlü harita görünürlüğü ve yabancı hasta alınıyorsa çok dilli içerik kuruyoruz; dil sağlık mevzuatına uygun ve iddiasızdır.',
    ihtiyaclar: [
      { baslik: 'Tedavi ve uzmanlık sayfaları', not: 'İmplant, ortodonti, pedodonti, çene cerrahisi gibi her uzmanlık için ayrı sayfa ve ilgili hekim bilgisi.' },
      { baslik: 'Şube ve ilçe sayfaları', not: 'Birden fazla şube varsa her şube için ayrı sayfa ve ayrı Google İşletme Profili; adres, saat ve ulaşım bilgisi.' },
      { baslik: 'Sağlık turizmi', not: 'Yurt dışından hasta alınıyorsa İngilizce ve gerekli diğer dillerde tedavi süreci, konaklama ve iletişim sayfaları.' },
      { baslik: 'Yorum ve itibar', not: 'Her şubede düzenli, gerçek hasta yorumları; olumsuz yorumlara ölçülü ve profesyonel cevap.' },
    ],
    kurallar: {
      baslik: 'Sağlık hizmetlerinde tanıtım kuralları',
      maddeler: [
        'Sağlık hizmetlerinin tanıtımı mevzuat ve meslek kurallarıyla sınırlandırılmıştır; kesin sonuç vaadi, yanıltıcı karşılaştırma ve talep yaratmaya yönelik ifadeler kullanılmamalıdır.',
        'Önce-sonra fotoğrafları ve fiyat kampanyaları risklidir; içerik bilgilendirici kalmalıdır.',
        'Bu bilgiler genel çerçevedir, hukuki görüş değildir. Güncel kurallar için Türk Diş Hekimleri Birliği ve ilgili mevzuatı kontrol edin.',
      ],
    },
    hizmetler: [
      { ad: 'SEO', href: SEO, not: 'Tedavi, hekim ve şube sayfaları; ilçe bazlı aramalarda görünürlük.' },
      { ad: 'Web Tasarım', href: WEB, not: 'Çok hekimli ve çok şubeli yapıya uygun kurumsal site, gerekiyorsa çok dilli.' },
      { ad: 'Google Ads (uygunsa)', href: ADS, not: 'Mevzuata uygun metinlerle tedavi bazlı kampanyalar.' },
    ],
    bloglar: [{ label: 'Diş Hekimleri İçin Sektör Sayfası', href: '/sektorler/dis-hekimleri-klinikler' }, { label: 'Google Yorumları Nasıl Artırılır?', href: '/blog/google-yorumlari-nasil-artirilir' }],
    portfoy: ['nur-celen', 'gamzeli-dermokozmetik'],
    portfoyNot: 'Diş merkezine özel bir vaka çalışmamız henüz yok; sağlık alanından canlı projelerimizi inceleyebilirsiniz.',
    sss: [
      { q: 'Birden fazla şubemiz var, her biri için ayrı sayfa gerekir mi?', a: 'Evet. Her şube için ayrı sayfa ve ayrı Google İşletme Profili, hastanın kendisine en yakın şubeyi bulmasını sağlar ve ilçe bazlı aramalarda görünürlüğü artırır.' },
      { q: 'Yabancı hastalara ulaşmak için ne gerekir?', a: 'Hastanın kendi dilinde tedavi süreci, süre, konaklama ve iletişim bilgisini veren sayfalar ve bu dillerde yapılan aramalara yönelik içerik. Otomatik çeviri yerine düzgün çeviri güven verir.' },
      { q: 'Tek hekimli kliniklerden farkınız ne?', a: 'Çok hekimli merkezlerde içerik ve site yapısı daha büyüktür: her uzmanlık, hekim ve şube için sayfa gerekir. Tek hekimli klinikler için Diş Hekimleri sektör sayfamıza bakabilirsiniz.' },
      { q: 'Fiyatlarınız nedir?', a: 'Kapsam şube ve sayfa sayısına göre değişir. AI teklif hesaplayıcıyla tahmini teklifi görebilirsiniz.' },
    ],
  },
  {
    slug: 'guzellik-merkezleri',
    ad: 'Güzellik ve Estetik Merkezleri',
    kisaAd: 'Güzellik Merkezleri',
    teklifAd: 'Güzellik Merkezi',
    baslikVurgu: 'Randevu Takvimini Dolduran Görünürlük',
    aciklama: 'Güzellik ve estetik merkezleri için SEO, hizmet bazlı web sitesi, Google haritaları, Instagram ve Google Ads ile randevu odaklı dijital pazarlama.',
    ozet: 'Cilt bakımı, lazer epilasyon, kalıcı makyaj veya saç bakımı arayan müşteri önce Google’a ve Instagram’a bakar. Hizmet sayfaları, yorumlar ve kolay randevuyla merkezinizi bu aramalarda öne çıkarıyoruz.',
    kisaOzet: 'Güzellik merkezlerinde müşteriler çoğunlukla "ilçe + hizmet" diye arar ve karar verirken yorumlara, fotoğraflara ve fiyat bilgisine bakar. Hizmet başına sayfa, güçlü harita görünürlüğü, Instagram ile uyumlu içerik ve uygun durumlarda Google Ads ile randevu getiren bir yapı kuruyoruz.',
    ihtiyaclar: [
      { baslik: 'Hizmet sayfaları', not: 'Lazer epilasyon, cilt bakımı, kalıcı makyaj, kirpik/kaş, saç bakımı gibi her hizmet için ayrı sayfa ve sık sorulan sorular.' },
      { baslik: 'Harita ve yorumlar', not: '"Yakınımdaki güzellik merkezi" aramalarında Google İşletme Profili, gerçek fotoğraflar ve düzenli yorumlar belirleyicidir.' },
      { baslik: 'Online randevu ve WhatsApp', not: 'Müşterinin tek dokunuşla randevu alabileceği ya da WhatsApp’tan yazabileceği sade akış.' },
      { baslik: 'Instagram ile uyum', not: 'Instagram’daki içerik ve kampanyaların siteye ve randevuya bağlanması; profil linkinin doğru sayfaya gitmesi.' },
    ],
    kurallar: {
      baslik: 'Dikkat edilmesi gereken kurallar',
      maddeler: [
        'Tıbbi estetik uygulamaları (ör. dolgu, botoks gibi hekim tarafından yapılan işlemler) sağlık hizmeti sayılır ve tanıtımı sağlık mevzuatıyla sınırlıdır; bu uygulamalarda kesin sonuç vaadi ve yanıltıcı ifade kullanılmamalıdır.',
        'Önce-sonra görselleri ve "garantili sonuç" gibi ifadeler hem mevzuat hem Google ve Meta reklam politikaları açısından risklidir.',
        'Kampanya ve indirim duyuruları tüketici mevzuatına uygun, açık ve doğru olmalıdır.',
        'Bu bilgiler genel çerçevedir, hukuki görüş değildir.',
      ],
    },
    hizmetler: [
      { ad: 'Yerel SEO', href: SEO, not: 'Hizmet sayfaları, Google İşletme Profili ve "ilçe + hizmet" aramalarında görünürlük.' },
      { ad: 'Web Tasarım', href: WEB, not: 'Hızlı, görsel ağırlıklı ve randevuya yönlendiren site.' },
      { ad: 'Google Ads', href: ADS, not: 'İlçe hedefli, politikalara uygun hizmet kampanyaları.' },
      { ad: 'Sosyal Medya İçerik Üretimi', href: '/hizmetler/sosyal-medya', not: 'Instagram için post, story ve reels tasarımı.' },
    ],
    bloglar: [{ label: "Sıfırdan Instagram'da İşletme Hesabı Büyütmek", href: '/blog/sifirdan-instagram-isletme-hesabi-buyutme' }, { label: 'Influencer ile Çalışmak', href: '/blog/influencer-ile-calismak-2026' }, { label: 'Google Yorumları Nasıl Artırılır?', href: '/blog/google-yorumlari-nasil-artirilir' }],
    portfoy: ['gamzeli-dermokozmetik'],
    portfoyNot: 'Güzellik ve kişisel bakım alanından canlı projemizi inceleyebilirsiniz.',
    sss: [
      { q: 'Güzellik merkezi için Instagram yeterli değil mi?', a: 'Instagram önemli ama müşterilerin büyük kısmı önce Google’da "ilçe + hizmet" diye arar ve haritaya bakar. Web sitesi ve Google İşletme Profili, Instagram’ı görmeyen bu müşterileri yakalar; ikisi birlikte en iyi sonucu verir.' },
      { q: 'Güzellik merkezleri Google Ads kullanabilir mi?', a: 'Evet, kozmetik ve bakım hizmetleri için Google Ads etkili olabilir. Tıbbi estetik uygulamalarında ise sağlık mevzuatı ve Google politikaları nedeniyle sınırlar vardır; kampanyaları bu açıdan kontrol ediyoruz.' },
      { q: 'Fiyatları sitede yazmalı mıyım?', a: 'Fiyat aralığı ya da "başlangıç fiyatı" göstermek müşterinin karar vermesini kolaylaştırabilir; kampanya duyurularının ise açık ve doğru olması gerekir. Hangisinin size uygun olduğunu birlikte değerlendiriyoruz.' },
      { q: 'Fiyatlarınız nedir?', a: 'Kapsam hizmet sayısına ve kanallara göre değişir. AI teklif hesaplayıcıyla tahmini teklifi görebilirsiniz.' },
    ],
  },
  {
    slug: 'emlak-ofisleri',
    ad: 'Emlak Ofisleri ve İnşaat Firmaları',
    kisaAd: 'Emlak ve İnşaat',
    teklifAd: 'Emlak Ofisi / İnşaat Firması',
    baslikVurgu: 'Portalların Dışında Kendi Müşteriniz',
    aciklama: 'Emlak ofisleri ve inşaat firmaları için bölge ve proje sayfaları, SEO, Google Ads ve portallara bağımlılığı azaltan kendi müşteri kanalı.',
    ozet: 'Alıcı ve kiracılar ilan portallarının yanında Google’da "bölge + satılık daire", proje adı ve emlakçı adıyla da arar. Bölge ve proje sayfalarıyla, portallara bağımlılığınızı azaltan kendi müşteri kanalınızı kuruyoruz.',
    kisaOzet: 'Emlak ofisleri ve inşaat firmaları için en değerli varlık, portallardan bağımsız kendi müşteri kanalıdır. Bölge rehberleri, proje sayfaları, Google İşletme Profili ve gerektiğinde Google Ads ile "bölge + emlak" aramalarında görünür olmanızı sağlıyoruz.',
    ihtiyaclar: [
      { baslik: 'Bölge sayfaları', not: 'Hizmet verdiğiniz mahalle ve ilçeler için yaşam, ulaşım ve fiyat eğilimi anlatan rehber sayfalar.' },
      { baslik: 'Proje sayfaları', not: 'İnşaat projeleri için kat planları, konum, teslim tarihi ve iletişim bilgisi içeren ayrı sayfalar.' },
      { baslik: 'Hızlı iletişim', not: 'İlan ve proje sayfalarından tek dokunuşla arama ve WhatsApp; ziyaret randevusu.' },
      { baslik: 'Güven ve referans', not: 'Tamamlanan projeler, belgeler ve gerçek müşteri yorumları.' },
    ],
    kurallar: {
      baslik: 'Dikkat edilmesi gereken kurallar',
      maddeler: [
        'Emlak ilanlarında ilan bilgilerinin doğru ve güncel olması, yetki belgesi gibi mevzuat şartlarına uyulması gerekir.',
        'Konut projelerinin tanıtımında teslim tarihi, metrekare ve fiyat gibi bilgilerin doğru verilmesi tüketici mevzuatı açısından önemlidir.',
        'Bu bilgiler genel çerçevedir, hukuki görüş değildir.',
      ],
    },
    hizmetler: [
      { ad: 'SEO', href: SEO, not: 'Bölge ve proje sayfaları, "bölge + emlak" aramalarında görünürlük.' },
      { ad: 'Web Tasarım', href: WEB, not: 'İlan ve proje sayfaları olan, hızlı ve mobil uyumlu site.' },
      { ad: 'Google Ads', href: ADS, not: 'Proje ve bölge hedefli kampanyalar, form ve telefon takibi.' },
    ],
    bloglar: [{ label: 'WhatsApp ile Satış Rehberi', href: '/blog/whatsapp-ile-satis-rehberi' }, { label: 'Google Yorumları Nasıl Artırılır?', href: '/blog/google-yorumlari-nasil-artirilir' }],
    portfoy: ['depodez'],
    portfoyNot: 'Emlak sektörüne özel bir vaka çalışmamız henüz yok; bölge sayfası yapısını kullandığımız canlı projemizi inceleyebilirsiniz.',
    sss: [
      { q: 'İlan portalları varken neden kendi sitem olsun?', a: 'Portallarda sizinle aynı ilana birçok rakip daha bakılır ve müşteri size değil portala aittir. Kendi siteniz ve Google görünürlüğünüz, sizi doğrudan bulan ve tekrar dönen müşteri kanalı oluşturur.' },
      { q: 'Bölge sayfaları neden önemli?', a: '"Kadıköy satılık daire", "Başiskele kiralık ev" gibi aramalar çok yapılır. Bölgeyi gerçekten anlatan sayfalar bu aramalarda görünmenizi sağlar ve uzmanlığınızı gösterir.' },
      { q: 'İnşaat projemiz için ayrı site mi gerekir?', a: 'Büyük projelerde ayrı proje sitesi ya da firma sitesinde güçlü bir proje sayfası kurulabilir. Proje adıyla yapılan aramalarda görünür olmak satış sürecinde önemlidir.' },
      { q: 'Fiyatlarınız nedir?', a: 'Kapsam sayfa ve kanal sayısına göre değişir. AI teklif hesaplayıcıyla tahmini teklifi görebilirsiniz.' },
    ],
  },
  {
    slug: 'oto-servis',
    ad: 'Oto Servis ve Ekspertiz',
    kisaAd: 'Oto Servis',
    teklifAd: 'Oto Servis',
    baslikVurgu: 'Arabası Bozulan Müşteri Sizi Bulsun',
    aciklama: 'Oto servis, oto elektrik, kaporta-boya ve ekspertiz işletmeleri için yerel SEO, Google haritaları ve acil aramalarda Google Ads.',
    ozet: 'Arabası arıza veren sürücü en yakın servisi telefonundan arar ve genellikle ilk çıkan birkaç işletmeden birini arar. Harita görünürlüğü, hizmet sayfaları ve doğru kurulmuş reklamla servisinizi bu aramalarda öne çıkarıyoruz.',
    kisaOzet: 'Oto servislerde müşteri çoğunlukla acil ve yakındaki işletmeyi arar: "yakınımdaki oto servis", "ilçe + kaporta boya", "ekspertiz" gibi. Google İşletme Profili, marka ve hizmet sayfaları ve bu acil aramalarda Google Ads en çok müşteri getiren kanallardır.',
    ihtiyaclar: [
      { baslik: 'Harita görünürlüğü', not: 'Doğru kategori, çalışma saatleri, fotoğraflar ve düzenli yorumlarla "yakınımdaki" aramalarında öne çıkmak.' },
      { baslik: 'Hizmet ve marka sayfaları', not: 'Periyodik bakım, kaporta-boya, oto elektrik, ekspertiz ve hizmet verilen markalar için ayrı sayfalar.' },
      { baslik: 'Tek dokunuşla arama', not: 'Mobilde arama ve WhatsApp düğmeleri, yol tarifi bağlantısı.' },
      { baslik: 'Güven', not: 'Gerçek atölye fotoğrafları, garanti koşulları ve müşteri yorumları.' },
    ],
    kurallar: {
      baslik: 'Dikkat edilmesi gereken kurallar',
      maddeler: [
        'Yetkili servis olmayan işletmelerin marka logolarını ve "yetkili servis" ifadesini kullanması marka hakları açısından risklidir; "özel servis" ifadesi doğru olur.',
        'Fiyat ve garanti bilgileri açık ve doğru verilmelidir.',
        'Bu bilgiler genel çerçevedir, hukuki görüş değildir.',
      ],
    },
    hizmetler: [
      { ad: 'Yerel SEO', href: SEO, not: 'Hizmet ve marka sayfaları, Google İşletme Profili ve "ilçe + hizmet" aramaları.' },
      { ad: 'Google Ads', href: ADS, not: 'Acil aramalarda telefon odaklı, yalnızca hizmet bölgesine gösterilen kampanyalar.' },
      { ad: 'Web Tasarım', href: WEB, not: 'Hızlı, mobil öncelikli ve aramaya yönlendiren site.' },
    ],
    bloglar: [{ label: 'Google Ads Fiyatları ve Bütçe Rehberi', href: '/blog/google-ads-fiyatlari-2026' }, { label: 'Google Yorumları Nasıl Artırılır?', href: '/blog/google-yorumlari-nasil-artirilir' }],
    portfoy: ['depodez'],
    portfoyNot: 'Oto servise özel bir vaka çalışmamız henüz yok; yerel hizmet alanından canlı projemizi inceleyebilirsiniz.',
    sss: [
      { q: 'Oto servis için Google Ads işe yarar mı?', a: 'Evet, özellikle acil aramalarda. Reklamlar yalnızca hizmet verdiğiniz bölgeye ve çalışma saatlerinizde gösterilir, mobilde doğrudan arama butonuyla müşteri telefonla ulaşır. Bütçe hesabı için ücretsiz Google Ads Bütçe Hesaplayıcımızı kullanabilirsiniz.' },
      { q: '"Yetkili servis" yazabilir miyim?', a: 'Markanın yetkili servisi değilseniz bu ifade ve marka logoları marka hakları açısından risklidir. "Özel servis" ve "X marka araçlara hizmet" gibi doğru ifadeler kullanılmalıdır.' },
      { q: 'Haritada nasıl öne çıkarım?', a: 'Doğru kategori ve hizmet bölgesi, güncel çalışma saatleri, gerçek atölye fotoğrafları ve düzenli müşteri yorumları en etkili adımlardır.' },
      { q: 'Fiyatlarınız nedir?', a: 'Kapsam hizmet ve kanal sayısına göre değişir. AI teklif hesaplayıcıyla tahmini teklifi görebilirsiniz.' },
    ],
  },
]

// Blog yazısı → ilgili sektör sayfası (blogIcLinkler.ts kullanır)
export const blogSektor: Record<string, string> = Object.fromEntries(
  sektorler.flatMap((s) => s.bloglar.filter((b) => b.href.startsWith('/blog/') && !b.href.includes('google-yorumlari')).map((b) => [b.href.slice(6), s.slug]))
)
