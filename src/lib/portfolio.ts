export interface Testimonial {
  quote: string
  author: string
  role: string
}

export type ProjectColor = 'blue' | 'violet' | 'pink' | 'emerald' | 'orange' | 'cyan' | 'fuchsia'

export interface CaseStudy {
  slug: string
  name: string
  title: string
  url: string
  displayUrl: string
  category: string
  industry: string
  desc: string
  tags: string[]
  thumb: string
  mobil?: string // telefon görünümü (390×844)
  color: ProjectColor
  challenge: string
  approach: string[]
  outcome: string
  testimonial?: Testimonial
  veri?: VakaVerisi // Google Search Console'dan alınmış gerçek veri (müşteri onaylı)
}

// Başarı hikâyesi verisi: rakamlar Search Console'dan birebir alınır, yuvarlama dışında değiştirilmez.
export interface VakaVerisi {
  aralik: string // ör. "Haziran–Kasım 2026"
  baslangic: string // ör. "Site Haziran 2026'da sıfırdan yayına alındı"
  ozet: { deger: string; etiket: string }[]
  aylik: [string, number, number][] // [ay etiketi, tıklama, gösterim]
  dagilim: { onceEtiket: string; sonraEtiket: string; once: { ilk3: number; ilk10: number; toplam: number }; sonra: { ilk3: number; ilk10: number; toplam: number; toplamArti?: boolean } }
  aramalar: { sorgu: string; gosterim: string; sira: string }[]
  aramaAraligi: string
  dersler: string[]
  notlar?: string
}

export const projects: CaseStudy[] = [
  {
    slug: 'depodez',
    name: 'DepoDez',
    title: 'İstanbul Su Deposu Temizliği — Uçtan Uca Dijital Dönüşüm',
    url: 'https://www.depodez.com',
    displayUrl: 'depodez.com',
    category: 'Web Tasarımı + SEO + Google Ads',
    industry: 'Su Deposu Temizliği & Hijyen',
    desc: 'İstanbul\'da su deposu temizliği, dezenfeksiyonu ve izolasyonu yapan firma için eski WordPress sitesinden yeni nesil, hızlı bir siteye geçiş. Web tasarım, SEO, ilçe sayfaları ve Google Ads bakımı tek elden.',
    tags: ['Web Tasarım', 'Yerel SEO', 'İlçe Sayfaları', 'Google Ads', 'İçerik'],
    thumb: '/portfolio/masaustu/depodez.webp',
    mobil: '/portfolio/mobil/depodez.webp',
    color: 'cyan',
    challenge:
      'Firma eski bir WordPress temasıyla çalışıyordu; site yavaştı, hizmetler ve hizmet bölgeleri net ayrışmıyordu ve İSKİ ile Sağlık Bakanlığı onayları, kurumsal referanslar gibi güven unsurları ziyaretçiye yeterince gösterilmiyordu. Rekabetin yoğun olduğu İstanbul aramalarında hizmet ve ilçe bazında görünür olmak gerekiyordu.',
    approach: [
      'Sıfırdan, hızlı ve mobil öncelikli Next.js web sitesi; telefon, WhatsApp ve teklif formu her ekranda erişilebilir',
      'Eski site yapısından yeni yapıya kayıpsız geçiş: URL eşleştirmesi ve yönlendirmeler',
      '9 ana hizmet ve tamir, fiyat, sektör (otel, okul, site) odaklı ayrı sayfalar',
      'İstanbul\'un 16 ilçesi/semti için özgün içerikli hizmet bölgesi sayfaları',
      'Blog altyapısı ve 40\'ı aşkın bilgilendirici içerik, yapılandırılmış veri ve teknik SEO',
      'İSKİ ve Sağlık Bakanlığı belgeleri, kurumsal referanslar ve Google yorumlarıyla güven bölümleri',
      'Mevcut Google Ads hesabının bakımı ve optimizasyonu',
    ],
    outcome:
      'Firma artık hizmet ve ilçe bazında ayrı sayfalarla aranabilen, belgeleri ve referanslarıyla güven veren, telefon ve WhatsApp üzerinden doğrudan talep toplayan modern bir dijital altyapıya sahip.',
    veri: {
      aralik: 'Temmuz 2025–Kasım 2026',
      baslangic: 'Yeni site Temmuz 2025’te yayına alındı; Search Console verisi bu tarihten itibaren gösteriliyor.',
      ozet: [
        { deger: '33.200', etiket: 'Google’da görünme (gösterim)' },
        { deger: '595', etiket: 'Google’dan gelen tıklama' },
        { deger: '2 → 24', etiket: 'İlk 3 sırada çıkan arama sayısı' },
        { deger: '21 → 150', etiket: 'Google’da çıkılan farklı arama sayısı' },
      ],
      aylik: [['Tem', 0, 71], ['Ağu', 4, 335], ['Eyl', 9, 241], ['Eki', 27, 254], ['Kas', 30, 452], ['Ara', 18, 808], ['Oca', 51, 2338], ['Şub', 61, 3224], ['Mar', 39, 3122], ['Nis', 53, 3932], ['May', 37, 3234], ['Haz', 58, 2894], ['Tem', 42, 2572], ['Ağu', 27, 2379], ['Eyl', 23, 1939], ['Eki', 25, 1856], ['Kas*', 91, 3499]],
      dagilim: { onceEtiket: 'İlk 90 gün', sonraEtiket: 'Son 90 gün', once: { ilk3: 2, ilk10: 3, toplam: 21 }, sonra: { ilk3: 24, ilk10: 58, toplam: 150 } },
      aramalar: [
        { sorgu: 'iski su deposu temizliği fiyatları', gosterim: '210', sira: '6,0' },
        { sorgu: 'demir su deposu delik tamiri', gosterim: '145', sira: '5,4' },
        { sorgu: 'metal su deposu delik tamiri', gosterim: '59', sira: '5,7' },
        { sorgu: 'su deposu temizliği yapan firmalar', gosterim: '94', sira: '11,0' },
        { sorgu: 'galvaniz su deposu delik tamiri', gosterim: '323', sira: '13,5' },
      ],
      aramaAraligi: 'Son 90 gün',
      dersler: [
        'Ana hizmetin yanında tamir ve fiyat gibi yan konulara ayrı sayfa açmak, rekabeti daha düşük aramalarda ilk sıraları getirdi.',
        'Organik trafik mevsime göre dalgalanıyor; bu yüzden SEO ve Google Ads birlikte yönetildiğinde talep daha dengeli kalıyor.',
        'İSKİ ve Sağlık Bakanlığı belgeleri gibi güven unsurları, fiyat araştıran ziyaretçiyi talebe dönüştürmede belirleyici.',
      ],
      notlar: 'Kasım 2026 verisi 23 Kasım’a kadardır. Kaynak: Google Search Console.',
    },
  },
  {
    slug: 'nur-celen',
    name: 'Psk. Nur Çelen',
    title: 'Kocaeli Psikolog — Bireysel & Çift Terapi',
    url: 'https://nurcelen.com',
    displayUrl: 'nurcelen.com',
    category: 'Web Tasarımı + SEO',
    industry: 'Sağlık & Psikoloji',
    desc: 'Kocaeli\'de bireysel ve çift terapisi veren psikolog için sıfırdan tasarladığımız SEO odaklı web sitesi. 11 ayda Google\'da 161 bin gösterim; “izmit psikolog” ve “kocaeli psikolog” aramalarında ilk sayfa.',
    tags: ['Web Tasarım', 'Yerel SEO', 'WhatsApp Entegrasyonu'],
    thumb: '/portfolio/masaustu/nur-celen.webp',
    mobil: '/portfolio/mobil/nur-celen.webp',
    color: 'blue',
    challenge:
      'Kocaeli\'de bireysel ve çift terapisi veren bir psikolog olarak dijital bir varlığı yoktu; potansiyel danışanlar "Kocaeli psikolog" gibi aramalarda onu bulamıyordu ve randevu talebi tamamen mevcut hasta yönlendirmelerine bağımlıydı.',
    approach: [
      'Sıfırdan, randevu dönüşümünü önceliklendiren bir web sitesi tasarımı',
      'Yerel SEO çalışması: Google Business Profile optimizasyonu ve "Kocaeli + hizmet" odaklı anahtar kelime stratejisi',
      'WhatsApp entegrasyonu ile randevu talebindeki sürtünmeyi azaltma',
    ],
    outcome:
      'Yerel SEO çalışmasıyla site Google\'da 1. sayfaya taşındı; site artık hem hasta yönlendirmelerinden bağımsız yeni randevu talebi hem de dijital bir profesyonel kimlik sağlıyor.',
    veri: {
      aralik: 'Ocak–Kasım 2026',
      baslangic: 'Site Ocak 2026’da sıfırdan yayına alındı.',
      ozet: [
        { deger: '161.000', etiket: 'Google’da görünme (gösterim)' },
        { deger: '1.093', etiket: 'Google’dan gelen tıklama' },
        { deger: '25 → 368', etiket: 'İlk sayfada çıkan arama sayısı' },
        { deger: '9,4', etiket: '“izmit psikolog” ortalama sırası (son 28 gün)' },
      ],
      aylik: [['Oca', 29, 243], ['Şub', 20, 488], ['Mar', 14, 356], ['Nis', 37, 815], ['May', 64, 2708], ['Haz', 138, 5310], ['Tem', 190, 13013], ['Ağu', 152, 11484], ['Eyl', 165, 32992], ['Eki', 137, 51769], ['Kas*', 147, 41998]],
      dagilim: { onceEtiket: 'İlk 90 gün', sonraEtiket: 'Son 90 gün', once: { ilk3: 22, ilk10: 25, toplam: 27 }, sonra: { ilk3: 31, ilk10: 368, toplam: 1000, toplamArti: true } },
      aramalar: [
        { sorgu: 'izmit psikolog', gosterim: '750', sira: '9,4' },
        { sorgu: 'kocaeli psikolog', gosterim: '765', sira: '9,7' },
        { sorgu: 'izmit çift terapisi', gosterim: '102', sira: '8,8' },
        { sorgu: 'kocaeli çift terapisi', gosterim: '76', sira: '9,3' },
        { sorgu: 'manipülasyon nedir', gosterim: '7.413', sira: '7,8' },
      ],
      aramaAraligi: 'Son 28 gün',
      dersler: [
        'Bilgilendirici yazılar (manipülasyon, gaslighting gibi) gösterimi katlayarak sitenin otoritesini büyüttü; yerel aramalar da bundan güç aldı.',
        'Sağlık alanında iddiasız, mevzuata uygun bir dil hem güven veriyor hem de Google’ın kalite beklentisini karşılıyor.',
        'Hem “izmit” hem “kocaeli” ile yapılan aramaları ayrı ayrı hedeflemek, aynı ilde iki ayrı müşteri kitlesine ulaşmayı sağladı.',
      ],
      notlar: 'Kasım verisi 23 Kasım’a kadardır. Son 90 günde Search Console en fazla 1.000 arama listeler. Kaynak: Google Search Console.',
    },
  },
  {
    slug: 'mert-anil-guler',
    name: 'Av. Mert Anıl Güler, LL.M.',
    title: 'Bakırköy Avukat — Hukuk Bürosu',
    url: 'https://www.mertanilguler.av.tr',
    displayUrl: 'mertanilguler.av.tr',
    category: 'Web Tasarımı + SEO',
    industry: 'Hukuk',
    desc: 'İstanbul Barosu avukatı için premium kurumsal kimliğe sahip, içerik ağırlıklı hukuk bürosu sitesi. Blog ve makale altyapısıyla otorite inşası.',
    tags: ['Web Tasarım', 'Kurumsal SEO', 'İçerik Stratejisi'],
    thumb: '/portfolio/masaustu/mert-anil-guler.webp',
    mobil: '/portfolio/mobil/mert-anil-guler.webp',
    color: 'violet',
    challenge:
      'Avukatlık Kanunu, avukatların Google Ads gibi ücretli reklam yöntemlerini kullanmasını yasaklıyor — bu yüzden görünürlük tamamen organik SEO ve içerik otoritesi üzerinden inşa edilmek zorundaydı, kurumsal kimliğe yakışan bir tasarımla birlikte.',
    approach: [
      'Premium, kurumsal kimliğe uygun web tasarımı',
      'Blog ve makale altyapısı kurarak uzmanlık alanlarında içerik otoritesi inşası',
      'Reklam yerine tamamen SEO ve içerik stratejisine dayalı görünürlük planı (mevzuata uyumlu)',
    ],
    outcome: 'SEO çalışmasıyla birlikte dijitaldeki görünürlüğü belirgin şekilde arttı.',
    testimonial: {
      quote:
        'Ramses Dijital, kurumsal kimliğimize uygun, içerik odaklı bir site tasarladı. SEO çalışmasıyla birlikte dijitaldeki görünürlüğümüz belirgin şekilde arttı.',
      author: 'Av. Mert Anıl Güler, LL.M.',
      role: 'Kurucu Avukat, Mert Anıl Güler Hukuk Bürosu',
    },
    veri: {
      aralik: 'Haziran–Kasım 2026',
      baslangic: 'Site Haziran 2026’da sıfırdan yayına alındı; ücretli reklam kullanılmadı.',
      ozet: [
        { deger: '1.271', etiket: 'Google’dan gelen tıklama (5,5 ay)' },
        { deger: '50.500', etiket: 'Google’da görünme (gösterim)' },
        { deger: '24 → 78', etiket: 'İlk 3 sırada çıkan arama sayısı' },
        { deger: '69 → 181', etiket: 'İlk sayfada çıkan arama sayısı' },
      ],
      aylik: [['Haz', 126, 2043], ['Tem', 250, 8622], ['Ağu', 227, 9795], ['Eyl', 205, 8921], ['Eki', 219, 10261], ['Kas*', 244, 10873]],
      dagilim: { onceEtiket: 'İlk 30 gün', sonraEtiket: 'Son 28 gün', once: { ilk3: 24, ilk10: 69, toplam: 347 }, sonra: { ilk3: 78, ilk10: 181, toplam: 394 } },
      aramalar: [
        { sorgu: 'iş sözleşmesi yazılı olmak zorunda mı', gosterim: '77', sira: '4,9' },
        { sorgu: 'esenler avukat', gosterim: '162', sira: '10,0' },
        { sorgu: 'arnavutköy avukat', gosterim: '347', sira: '10,6' },
        { sorgu: 'küçükçekmece boşanma avukatı', gosterim: '69', sira: '11,0' },
        { sorgu: 'bakırköy avukat', gosterim: '166', sira: '12,0' },
      ],
      aramaAraligi: 'Son 28 gün',
      dersler: [
        'Reklam yasağı olan mesleklerde görünürlüğün yolu, her uzmanlık alanı için ayrı ve bilgilendirici sayfalardan geçiyor.',
        'Soru biçimindeki aramalar (“… zorunda mı?”) genel “avukat” aramalarından daha hızlı ilk sıralara çıkıyor ve güven inşa ediyor.',
        'Çevre ilçe aramaları (Esenler, Arnavutköy, Küçükçekmece) Bakırköy’deki bir büro için de anlamlı talep kaynağı.',
      ],
      notlar: 'Kasım verisi 23 Kasım’a kadardır. Kaynak: Google Search Console.',
    },
  },
  {
    slug: 'gamzeli-dermokozmetik',
    name: 'Gamzeli Eczanem',
    title: 'Online Eczane & Güzellik — E-Ticaret',
    url: 'https://gamzelidermokozmetik.com',
    displayUrl: 'gamzelidermokozmetik.com',
    category: 'E-Ticaret + SEO',
    industry: 'Sağlık & Güzellik',
    desc: 'Eczacı güvencesiyle makyaj, yüz, cilt ve saç bakım ürünleri sunan e-ticaret platformu. Cilt analizi aracı ve kişiselleştirilmiş ürün öneri sistemi ile dönüşüm odaklı tasarım.',
    tags: ['E-Ticaret', 'SEO', 'Cilt Analizi Aracı'],
    thumb: '/portfolio/masaustu/gamzeli-dermokozmetik.webp',
    mobil: '/portfolio/mobil/gamzeli-dermokozmetik.webp',
    color: 'pink',
    challenge:
      'Eczacı güvencesiyle satılan cilt ve güzellik ürünlerinin geniş kataloğunda, müşterilerin kendi cilt tipine uygun ürünü bulması zordu — bu da sepet terk oranını artıran ve dönüşümü düşüren bir sürtünme noktasıydı.',
    approach: [
      'Dönüşüm odaklı e-ticaret altyapısı kurulumu',
      'Kişiselleştirilmiş ürün önerisi sunan bir cilt analizi aracı geliştirme',
      'Ürün ve kategori sayfalarında SEO optimizasyonu',
    ],
    outcome:
      'Cilt analizi aracı sayesinde müşteriler kendilerine en uygun ürünü kolayca buluyor; eczacı güvencesiyle sunulan ürünler doğru kitleye ulaşıyor.',
    testimonial: {
      quote:
        'Ramses Dijital, eczacı güvencesiyle sunduğumuz ürünleri doğru kitleye ulaştıran bir e-ticaret sitesi kurdu. Cilt analizi aracı sayesinde müşterilerimiz kendilerine en uygun ürünü kolayca buluyor.',
      author: 'Gamzeli Dermokozmetik',
      role: 'E-Ticaret Ekibi',
    },
  },
  {
    slug: 'veterineri-bul',
    name: 'Veterineri Bul',
    title: 'Yapay Zeka Destekli Veteriner Platformu',
    url: 'https://www.veterineribul.com',
    displayUrl: 'veterineribul.com',
    category: 'Platform + Yapay Zeka',
    industry: 'Veterinerlik & Pet',
    desc: 'Türkiye\'nin ilk YZ destekli veteriner bulma ve online randevu platformu. Doğrulanan diplomalı veterinerler, video görüşme ve 7/24 yapay zeka asistan ile evcil hayvan sahiplerine ulaşır.',
    tags: ['Platform', 'Yapay Zeka', 'Online Randevu'],
    thumb: '/portfolio/veterineribul.png',
    color: 'emerald',
    challenge:
      'Evcil hayvan sahiplerinin güvenilir, diplomalı bir veterineri bulup randevu alması dağınık bir süreçti; pazarda bunu tek bir platformda, yapay zeka destekli bir asistanla birleştiren bir çözüm yoktu.',
    approach: [
      'Sıfırdan platform mimarisi: veteriner doğrulama, online randevu ve video görüşme altyapısı',
      '7/24 yanıt verebilen yapay zeka asistanı entegrasyonu',
      'Diplomalı veterinerlerin doğrulama sürecini yöneten bir sistem tasarımı',
    ],
    outcome:
      'Platform canlıya alındı — doğrulanan diplomalı veterinerler, video görüşme ve yapay zeka asistanıyla evcil hayvan sahiplerine Türkiye\'de bir ilk olan bir hizmet sunuyor.',
  },
  {
    slug: 'terapisti-bul',
    name: 'TerapistiBul',
    title: 'Yapay Zeka Eşleştirmeli Terapist Platformu',
    url: 'https://terapistibul.com',
    displayUrl: 'terapistibul.com',
    category: 'Platform + Yapay Zeka',
    industry: 'Psikoloji & Sağlık',
    desc: 'Yapay zeka ile 81 ilden seçilmiş uzman psikolog ve terapistler arasından kişiye özel eşleştirme yapan platform. KVKK uyumlu, güvenli terapi altyapısı ve psikoloji blog sistemi.',
    tags: ['Platform', 'YZ Eşleştirme', 'Online Terapi'],
    thumb: '/portfolio/masaustu/terapisti-bul.webp',
    mobil: '/portfolio/mobil/terapisti-bul.webp',
    color: 'cyan',
    challenge:
      'Terapi arayan kullanıcılar için 81 ildeki uzman havuzundan kendi ihtiyacına en uygun terapisti bulmak zaman alıcı ve rastgele bir süreçti; ayrıca ruh sağlığı verisi taşıyan bir platformun KVKK uyumu baştan tasarlanmak zorundaydı.',
    approach: [
      'Yapay zeka destekli kişiye özel terapist eşleştirme algoritması',
      'KVKK uyumlu, güvenli terapi altyapısı kurulumu',
      'Kullanıcı güvenini destekleyen bir psikoloji blog sistemi entegrasyonu',
    ],
    outcome:
      'Platform canlıya alındı — 81 ilden seçilmiş uzman psikolog ve terapistler arasından yapay zeka ile kişiye özel eşleştirme sunan, KVKK uyumlu bir hizmet olarak hizmet veriyor.',
  },
  {
    slug: 'furkan-arikan',
    name: 'Av. Furkan Arıkan',
    title: 'İstanbul Avukat — Hukuk Bürosu',
    url: 'https://furkanarikan.av.tr',
    displayUrl: 'furkanarikan.av.tr',
    category: 'Web Tasarımı + SEO',
    industry: 'Hukuk',
    desc: 'İstanbul Barosu avukatı için ceza, iş ve gayrimenkul hukuku alanlarında dava takibi ve danışmanlık odaklı kurumsal web sitesi. WhatsApp ve telefon entegrasyonuyla hızlı iletişim.',
    tags: ['Web Tasarım', 'Kurumsal SEO', 'WhatsApp Entegrasyonu'],
    thumb: '/portfolio/masaustu/furkan-arikan.webp',
    mobil: '/portfolio/mobil/furkan-arikan.webp',
    color: 'violet',
    challenge:
      'Ceza, iş ve gayrimenkul hukuku alanlarında hizmet veren bir avukat için mevcut dijital varlık yoktu; danışanların hızlıca iletişime geçebileceği, profesyonel ve hızlı bir site gerekiyordu.',
    approach: [
      'Hızlı ve profesyonel görünümlü kurumsal web tasarımı',
      'Uzmanlık alanlarına (ceza, iş, gayrimenkul hukuku) göre yapılandırılmış içerik',
      'WhatsApp ve telefon entegrasyonuyla hızlı danışan iletişimi',
    ],
    outcome: 'Site hem hızlı hem de profesyonel bir görünüme kavuştu; süreç boyunca net ve hızlı iletişim sağlandı.',
    testimonial: {
      quote:
        'Sitemin hem hızlı hem de profesyonel bir görünüme kavuşmasını sağladılar. Süreç boyunca iletişim çok net ve hızlıydı.',
      author: 'Av. Furkan Arıkan',
      role: 'Kurucu Avukat, Furkan Arıkan Hukuk Bürosu',
    },
  },
  {
    slug: 'tenvor-springs',
    name: 'Tenvor Springs',
    title: 'Endüstriyel Yay Üreticisi İçin Kurumsal Web Sitesi',
    url: 'https://www.tenvorsprings.com.tr/',
    displayUrl: 'tenvorsprings.com.tr',
    category: 'Web Tasarımı',
    industry: 'Üretim / Mühendislik',
    desc: '1989\'dan beri faaliyet gösteren, 60.000 m² tesise sahip bir yay (spring) üreticisi için sıfırdan tasarlanmış kurumsal web sitesi. ISO 9001 ve IATF 16949 gibi mühendislik/kalite sertifikalarını, üretim sürecini ve kapasiteyi B2B alıcılara net şekilde anlatan, İngilizce/Türkçe çok dilli bir yapı.',
    tags: ['Web Tasarım', 'Kurumsal Kimlik', 'B2B', 'Çok Dilli'],
    thumb: '/portfolio/masaustu/tenvor-springs.webp',
    mobil: '/portfolio/mobil/tenvor-springs.webp',
    color: 'orange',
    challenge:
      'Tenvor Springs, 35 yılı aşkın mühendislik geçmişine ve ISO 9001/IATF 16949 sertifikalarına sahip olmasına rağmen, bu teknik güvenilirliği dijitalde yansıtan bir web sitesine sahip değildi. B2B alıcıların (özellikle otomotiv ve sanayi sektöründen) tedarikçi değerlendirirken aradığı somut bilgiler — üretim süreci, kapasite, sertifikalar, kalite kontrol — sitede net ve profesyonel bir şekilde sunulmalıydı.',
    approach: [
      'Sıfırdan, mühendislik odaklı bir kurumsal kimlik ve web tasarımı',
      'Üretim sürecinin (hammadde kontrolünden sevkiyata kadar) adım adım, görsel olarak anlatılması',
      'ISO 9001, IATF 16949 sertifikaları ve kapasite verilerinin (60.000 m² tesis, CNC kontrollü hatlar) güven sinyali olarak öne çıkarılması',
      'İngilizce/Türkçe çok dilli yapı ile hem yerel hem uluslararası B2B alıcılara hitap',
    ],
    outcome:
      'Tenvor Springs, teknik yetkinliğini ve kalite güvencesini dijitalde de somut şekilde gösterebilen, B2B alıcıların güven duyacağı bir kurumsal web sitesine kavuştu.',
  },
  {
    slug: 'ieyp-international',
    name: 'IEYP International',
    title: 'Yapay Zeka Destekli Erken Çocukluk Eğitimi Platformu',
    url: 'https://eypeducation.com/tr/',
    displayUrl: 'eypeducation.com',
    category: 'Web Tasarımı + SEO + GEO/AEO',
    industry: 'Eğitim Teknolojisi',
    desc: '2-6 yaş erken çocukluk eğitimi için yapay zeka destekli, çok dilli müfredat platformu. Okullar, öğretmenler ve ailelere yönelik dijital varlık; hem Google\'da hem ChatGPT/Gemini gibi AI arama motorlarında görünürlük odaklı.',
    tags: ['Web Tasarım', 'SEO', 'GEO & AEO'],
    thumb: '/portfolio/masaustu/ieyp-international.webp',
    mobil: '/portfolio/mobil/ieyp-international.webp',
    color: 'fuchsia',
    challenge:
      'AI destekli bir eğitim platformu olarak IEYP\'nin hedef kitlesi (okullar, öğretmenler, aileler) hem klasik Google aramasında hem de artan oranda ChatGPT/Gemini gibi AI motorlarında araştırma yapıyor. Sadece geleneksel SEO yeterli değildi — platformun kendisi AI-native olduğu için görünürlük stratejisinin de aynı çağa uygun kurulması gerekiyordu.',
    approach: [
      'Çok dilli müfredat ve ürün yapısını yansıtan web tasarımı',
      'Eğitim teknolojisi alanına özel SEO çalışması (anahtar kelime stratejisi, teknik optimizasyon)',
      'GEO & AEO çalışmasıyla ChatGPT, Gemini ve Perplexity gibi AI motorlarında platformun kaynak olarak gösterilmesini hedefleyen yapılandırılmış veri ve içerik stratejisi',
    ],
    outcome:
      'Platform hem geleneksel arama motorlarında hem de yeni nesil AI arama kanallarında görünürlük kazanacak şekilde konumlandırıldı.',
  },
]
