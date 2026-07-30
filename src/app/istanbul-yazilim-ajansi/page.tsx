import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Code2, ArrowRight, CheckCircle2, Zap, Globe, BarChart3, Shield, Layers, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İstanbul Yazılım Ajansı — Ramses Dijital',
  description:
    'İstanbul\'da yazılım ajansı. Next.js web uygulaması, özel yazılım, n8n otomasyonu ve API entegrasyonu. Kurumsal ve KOBİ firmalar için İstanbul\'a uzaktan teknik çözümler.',
  alternates: { canonical: 'https://ramsesdigital.com/istanbul-yazilim-ajansi' },
  openGraph: {
    title: 'İstanbul Yazılım Ajansı | Ramses Dijital',
    description: 'İstanbul işletmeleri için özel yazılım, web uygulaması, otomasyon ve API entegrasyon çözümleri.',
    url: 'https://ramsesdigital.com/istanbul-yazilim-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İstanbul Yazılım Ajansı — Ramses Dijital',
    description: 'İstanbul için Next.js, otomasyon ve API entegrasyonu odaklı yazılım geliştirme.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const solutions = [
  { icon: Globe, title: 'Web Uygulaması & Kurumsal Site', desc: 'Next.js ile yüksek performanslı, kurumsal standarda uygun web siteleri. İstanbul\'un rekabetçi dijital vitrinine hazır.' },
  { icon: Zap, title: 'İş Süreçleri Otomasyonu', desc: 'n8n ile tekrarlayan operasyonları otomatikleştirin. CRM senkronizasyonu, lead yönlendirme, bildirim ve fatura akışları.' },
  { icon: Layers, title: 'API & Sistem Entegrasyonu', desc: 'ERP, muhasebe yazılımı, e-ticaret altyapısı ve ödeme sistemleri — İstanbul\'daki kurumsal firmaların mevcut araçlarını birbirine bağlıyoruz.' },
  { icon: Cpu, title: 'Yapay Zeka Entegrasyonu', desc: 'Müşteri destek botu, belge analizi, içerik üretimi ve öneri sistemleri. Claude API ve GPT-4 entegrasyonu.' },
  { icon: BarChart3, title: 'Veri & Dashboard', desc: 'GA4, Looker Studio ve özel dashboard\'larla İstanbul operasyonunuzun verisini anlaşılır hale getirin.' },
  { icon: Shield, title: 'Güvenlik & Teknik Bakım', desc: 'SSL, güvenlik taraması, yedekleme ve uptime monitoring. Kurumsal firmaların güven ihtiyacına uygun altyapı.' },
]

const stack = ['Next.js', 'TypeScript', 'React', 'Node.js', 'n8n', 'PostgreSQL', 'Vercel', 'Supabase', 'Claude API', 'Stripe']

const sectors = [
  'Hukuk Bürosu', 'Psikolog & Terapist', 'Diş Hekimi & Diş Kliniği', 'Güzellik Merkezi & Estetik',
  'E-ticaret', 'Kurumsal B2B Hizmetler',
]

const faqs = [
  { q: 'İstanbul\'da yazılım ajansı ile çalışmanın avantajı ne?', a: 'Tüm sürecimiz uzaktan yürütüldüğü için coğrafi kısıt yok — ama İstanbul\'un kurumsal beklentilerini, yoğun rekabet ortamını ve sektörel ihtiyaçlarını (özellikle hukuk, sağlık, kurumsal B2B) biliyoruz. İstanbul Barosu\'na kayıtlı avukatlar için geliştirdiğimiz projeler, kurumsal kimliğe uygun teknik standardı gösteriyor.' },
  { q: 'Özel yazılım mı, hazır SaaS mi kullanmalıyım?', a: 'Çoğu durumda ikisinin kombinasyonu en akıllıcasıdır. Muhasebe, CRM, e-posta pazarlaması gibi alanlarda hazır SaaS araçları uygun maliyetli. Operasyona özgü süreçler (özel raporlama, saha yönetimi, sipariş takibi) için özel yazılım veya n8n otomasyonu daha verimli. Keşif görüşmesinde birlikte karar veriyoruz.' },
  { q: 'İstanbul\'daki kurumsal firmalar için özel bir yaklaşımınız var mı?', a: 'Evet. Kurumsal B2B firmalar, hukuk büroları ve sağlık sektörü (diş kliniği, güzellik merkezi) için kimlik ve güven unsurunu ön planda tutan, teknik olarak sağlam ve hızlı yüklenen web uygulamaları geliştiriyoruz. İstanbul Barosu\'na kayıtlı avukatlar için yürüttüğümüz projeler canlı örnek olarak portföyümüzde.' },
  { q: 'Projeyi teslim ettikten sonra destek veriyor musunuz?', a: 'Evet. Teslim sonrası 1-3 ay hata düzeltme garantimiz var. İstanbul\'daki kurumsal müşterilerimizin çoğu aylık bakım paketine geçiyor: güncelleme, küçük geliştirme, teknik izleme ve öncelikli destek hattı. Ekip değişse de projenizin sahibi biz olmaya devam ediyoruz.' },
  { q: 'Proje süresi ve teslim takvimi nasıl belirleniyor?', a: 'Brifing → teknik şartname → onay → geliştirme → test → teslim süreciyle ilerliyoruz. Basit kurumsal web sitesi 2-3 hafta, orta ölçekli web uygulaması 6-10 hafta, karmaşık otomasyon veya platform projeleri 3-6 ay sürer. Şartname onaylandıktan sonra net takvim sunuyor ve bağlı kalıyoruz.' },
  { q: 'Yapay zeka (AI) entegrasyonu yapıyor musunuz?', a: 'Evet. Müşteri destek chatbotu, içerik üretim asistanı, belge analizi ve öneri sistemi projeleri yapıyoruz. Claude API ve GPT-4 entegrasyonlarında deneyimli ekibimiz var. İstanbul\'daki kurumsal firmalar için özellikle belge yoğun süreçlerde (hukuk, danışmanlık) AI entegrasyonu ciddi zaman tasarrufu sağlıyor.' },
  { q: 'Mevcut yazılımımla entegrasyon yapabilir misiniz?', a: 'Büyük ihtimalle evet. Mikro Yazılım, Logo, SAP, WooCommerce, Shopify, Trendyol, Hepsiburada entegrasyonlarında deneyimimiz var. API\'si olan her yazılımla entegrasyon yapılabilir; API olmayanlarda webhook veya dosya bazlı çözümler geliştiriyoruz.' },
  { q: 'Fiziksel olarak İstanbul\'da mısınız?', a: 'Hayır, merkezimiz Kocaeli\'de — İstanbul\'a tamamen uzaktan hizmet veriyoruz. Toplantılar Google Meet/Zoom üzerinden, teslimatlar dijital ortamda yapılıyor. Bu sayede İstanbul\'un trafiğine takılmadan hızlı ve şeffaf ilerliyoruz; gerçek İstanbul müşterilerimiz (İstanbul Barosu\'na kayıtlı avukatlar dahil) bunun kanıtı.' },
  { q: 'Kaynak kodun mülkiyeti kimde olur?', a: 'Sizde. Teslimle birlikte kaynak kodun ve tüm mülkiyet haklarının tamamı size devredilir — bizi bir daha görmek zorunda kalmayacağınız bir kilit sistem kurmuyoruz.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'İstanbul Yazılım Ajansı Hizmetleri',
      description: 'İstanbul işletmeleri için web uygulaması, otomasyon, API entegrasyonu ve yapay zeka çözümleri.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'İstanbul' },
        { '@type': 'City', name: 'Kadıköy' },
        { '@type': 'City', name: 'Beşiktaş' },
        { '@type': 'City', name: 'Şişli' },
        { '@type': 'City', name: 'Bakırköy' },
        { '@type': 'City', name: 'Ataşehir' },
        { '@type': 'City', name: 'Üsküdar' },
        { '@type': 'City', name: 'Beylikdüzü' },
      ],
      url: 'https://ramsesdigital.com/istanbul-yazilim-ajansi',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'İstanbul Yazılım Ajansı', item: 'https://ramsesdigital.com/istanbul-yazilim-ajansi' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
}

export default function IstanbulYazilimAjansiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">İstanbul — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            İstanbul Yazılım Ajansı
            <br />
            <span className="gradient-text">Web, Otomasyon & AI</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            İstanbul işletmeleri için Next.js web uygulaması, iş süreçleri otomasyonu, API entegrasyonu ve yapay zeka çözümleri. Kurumsal standart, teknik karmaşıklık olmadan.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            Kadıköy · Beşiktaş · Şişli · Bakırköy · Ataşehir · Üsküdar · Beylikdüzü
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Keşif Görüşmesi" variant="primary" />
            <Link href="/hizmetler/n8n-otomasyon" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Otomasyon Hizmetleri <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl px-6 py-4 text-center">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Ramses Dijital, reklam ajansı kimliğiyle başladı; bugün İstanbul&apos;daki müşterilerimize SEO ve Google Ads&apos;in
              yanında web ve yazılım geliştirme hizmetlerini de aynı mühendislik disipliniyle sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              İstanbul İçin Yazılım Çözümleri
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Her proje farklı — ihtiyacınıza göre teknoloji seçiyoruz, şablona sizi uydurmuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto text-center">
          <Code2 size={28} className="text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Kullandığımız Teknolojiler</h2>
          <p className="text-zinc-500 text-sm mb-8">Modern, ölçeklenebilir ve bakımı kolay tech stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((tech) => (
              <span key={tech} className="bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-sm rounded-full px-4 py-2 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">İstanbul&apos;da Yazılım Hizmeti Verdiğimiz Sektörler</h2>
          <p className="text-zinc-500 text-sm mb-8">Her sektörün teknik ihtiyacı farklı — uzmanlık önemli.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <span key={sector} className="bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-sm rounded-full px-4 py-2">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Real client proof */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <CheckCircle2 size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">
              Gerçek İstanbul Referansları
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              İstanbul Barosu&apos;na kayıtlı Av. Furkan Arıkan (Beşiktaş) için Next.js altyapılı bir web sitesi tasarladık;
              Bakırköy&apos;de Av. Mert Anıl Güler, LL.M. için de web ve SEO çalışması yürüttük. İkisi de canlı ve aktif —
              hukuk sektörünün kurumsal ciddiyetine uygun teknik standart, boş vaat değil.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://furkanarikan.av.tr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm font-medium">
                furkanarikan.av.tr
              </a>
              <a href="https://www.mertanilguler.av.tr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm font-medium">
                mertanilguler.av.tr
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why digital + software */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <CheckCircle2 size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">
              Neden Yazılım + Dijital Pazarlama Birlikte?
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              İstanbul&apos;da çoğu yazılım ajansı sadece teknik iş yapar — sitenizi kurar, sizi bırakır. Biz hem teknik altyapıyı
              hem de dijital pazarlamayı yürütüyoruz. Bu demek ki web uygulamanız hem hızlı çalışır hem de Google&apos;da bulunur,
              hem de ziyaretçiyi müşteriye çeviren bir sistem üzerine kurulur. İstanbul&apos;un yoğun rekabetinde parçalar
              arasında koordinasyon kaybı olmaz.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Tek muhatap', desc: 'Yazılım + SEO + Ads = tek ajans' },
                { label: 'Entegre strateji', desc: 'Teknik ve pazarlama uyumu' },
                { label: 'Uzun vadeli ortaklık', desc: 'Büyüdükçe sistemler de büyür' },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
                  <p className="text-white text-sm font-semibold mb-1">{label}</p>
                  <p className="text-zinc-500 text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2 text-sm md:text-base">{q}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsMarquee />

      <RelatedPages
        pages={[
          { label: 'İstanbul Reklam Ajansı', href: '/istanbul-reklam-ajansi' },
          { label: 'İstanbul SEO', href: '/istanbul-seo' },
          { label: 'İstanbul Web Tasarım', href: '/istanbul-web-tasarim' },
          { label: 'İstanbul Google Ads', href: '/istanbul-google-ads' },
          { label: 'İzmit Yazılım Ajansı', href: '/izmit-yazilim-ajansi' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            İstanbul&apos;da Yazılım Projenizi Konuşalım
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Ücretsiz keşif görüşmesinde ihtiyaçlarınızı dinleyip çözüm önerisi ve netleştirilmiş bir yol haritası paylaşıyoruz.
          </p>
          <CalendlyButton label="Ücretsiz Görüşme Ayarla" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
