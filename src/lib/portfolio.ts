export interface Testimonial {
  quote: string
  author: string
  role: string
}

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
  challenge: string
  approach: string[]
  outcome: string
  testimonial?: Testimonial
}

export const projects: CaseStudy[] = [
  {
    slug: 'nur-celen',
    name: 'Psk. Nur Çelen',
    title: 'Kocaeli Psikolog — Bireysel & Çift Terapi',
    url: 'https://nurcelen.com',
    displayUrl: 'nurcelen.com',
    category: 'Web Tasarımı + SEO',
    industry: 'Sağlık & Psikoloji',
    desc: 'Kocaeli\'nin en çok aranan psikologlarından biri için sıfırdan tasarladığımız, SEO odaklı, randevu dönüşümü yüksek web sitesi. Yerel SEO çalışmasıyla Google\'da 1. sayfaya taşındı.',
    tags: ['Web Tasarım', 'Yerel SEO', 'WhatsApp Entegrasyonu'],
    thumb: '/portfolio/nurcelen.png',
    challenge:
      'Kocaeli\'de bireysel ve çift terapisi veren bir psikolog olarak dijital bir varlığı yoktu; potansiyel danışanlar "Kocaeli psikolog" gibi aramalarda onu bulamıyordu ve randevu talebi tamamen mevcut hasta yönlendirmelerine bağımlıydı.',
    approach: [
      'Sıfırdan, randevu dönüşümünü önceliklendiren bir web sitesi tasarımı',
      'Yerel SEO çalışması: Google Business Profile optimizasyonu ve "Kocaeli + hizmet" odaklı anahtar kelime stratejisi',
      'WhatsApp entegrasyonu ile randevu talebindeki sürtünmeyi azaltma',
    ],
    outcome:
      'Yerel SEO çalışmasıyla site Google\'da 1. sayfaya taşındı; site artık hem hasta yönlendirmelerinden bağımsız yeni randevu talebi hem de dijital bir profesyonel kimlik sağlıyor.',
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
    thumb: '/portfolio/mertanilguler.png',
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
        'Ramses Digital, kurumsal kimliğimize uygun, içerik odaklı bir site tasarladı. SEO çalışmasıyla birlikte dijitaldeki görünürlüğümüz belirgin şekilde arttı.',
      author: 'Av. Mert Anıl Güler, LL.M.',
      role: 'Kurucu Avukat, Mert Anıl Güler Hukuk Bürosu',
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
    thumb: '/portfolio/gamzelieczanem.png',
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
        'Ramses Digital, eczacı güvencesiyle sunduğumuz ürünleri doğru kitleye ulaştıran bir e-ticaret sitesi kurdu. Cilt analizi aracı sayesinde müşterilerimiz kendilerine en uygun ürünü kolayca buluyor.',
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
    thumb: '/portfolio/terapistbul.png',
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
    thumb: '/portfolio/furkanarikan.png',
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
]
