import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import { BarChart3, TrendingUp, Target, Search, LineChart, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Veri Analizi & Stratejik Danışmanlık | GA4, Looker Studio, Büyüme Stratejisi — Ramses Dijital',
  description:
    'GA4 kurulumu, özel dashboard tasarımı ve dönüşüm huni analiziyle veriye dayalı büyüme stratejisi. Ramses Dijital Reklam Ajansı — ölçülemeyen büyüme olmaz.',
  alternates: { canonical: 'https://ramsesdigital.com/hizmetler/veri-analizi' },
  openGraph: {
    title: 'Veri Analizi & Danışmanlık | Ramses Dijital',
    description: 'GA4, Looker Studio ve dönüşüm huni optimizasyonuyla veriye dayalı büyüme stratejisi.',
    url: 'https://ramsesdigital.com/hizmetler/veri-analizi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veri Analizi & Danışmanlık — Ramses Dijital',
    description: 'GA4, Looker Studio, dönüşüm huni analizi. Veriyle büyüme stratejisi.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  {
    icon: BarChart3,
    title: 'GA4 Kurulum & Yapılandırma',
    desc: 'Google Analytics 4\'ün doğru kurulumu — event takibi, dönüşüm hedefleri, e-ticaret parametreleri ve cross-domain ölçümü.',
  },
  {
    icon: LineChart,
    title: 'Özel Dashboard Tasarımı',
    desc: 'Looker Studio (Data Studio) ile işletmenize özgü KPI panelleri. Tüm kanalları tek ekranda gerçek zamanlı izleyin.',
  },
  {
    icon: Target,
    title: 'Dönüşüm Huni Analizi',
    desc: 'Kullanıcıların nerede ayrıldığını tespit edin. Huni optimizasyonuyla mevcut trafikten daha fazla dönüşüm alın.',
  },
  {
    icon: Search,
    title: 'Kullanıcı Davranış Analizi',
    desc: 'Isı haritaları, oturum kayıtları ve scroll derinliği analiziyle kullanıcı niyetini anlayın. UX sorunlarını veriyle tespit edin.',
  },
  {
    icon: TrendingUp,
    title: 'Rekabet & Pazar Analizi',
    desc: 'SEMrush, Ahrefs ve SimilarWeb verileriyle rakiplerinizin trafik kaynaklarını, anahtar kelimelerini ve stratejilerini analiz edin.',
  },
  {
    icon: Lightbulb,
    title: 'Büyüme Stratejisi Danışmanlığı',
    desc: 'Veri ve sektör bilgisini birleştirerek büyüme fırsatlarını tespit edin. Öncelik matrisli, aksiyon odaklı strateji planı.',
  },
]

const process = [
  {
    step: '01',
    title: 'Analitik Altyapı Auditi',
    desc: 'GA4, GTM, Search Console ve reklam hesaplarınızın veri kalitesi incelenir. Eksik dönüşüm takibi, yanlış yapılandırmalar ve veri kayıpları tespit edilir. Doğru veri olmadan doğru karar alınamaz.',
  },
  {
    step: '02',
    title: 'KPI Çerçevesi Oluşturma',
    desc: 'İşletme hedeflerinize göre kuzey yıldızı metriği (North Star Metric) ve ikincil KPI\'lar belirlenir. Vanity metrikleri (saf ziyaretçi sayısı) değil, geliri etkileyen metrikler önceliklendirilir.',
  },
  {
    step: '03',
    title: 'Teknik Kurulum & Entegrasyon',
    desc: 'GA4 event yapısı, GTM container\'ı ve Looker Studio bağlantısı kurulur. CRM, reklam platformları ve e-ticaret sisteminizle veri akışları entegre edilir.',
  },
  {
    step: '04',
    title: 'Derin Analiz & İçgörü Üretimi',
    desc: 'Dönüşüm huni, kohort, segmentasyon ve atıf analizleri yapılır. "Hangi kanal, hangi müşteriyi, hangi değerle getiriyor?" sorusuna net cevap verilir.',
  },
  {
    step: '05',
    title: 'Aksiyon Planı & Sürekli Optimizasyon',
    desc: 'Analizlerden çıkan fırsatlar öncelik matrisine göre sıralanır. Aylık performans görüşmeleri ve strateji güncellemeleriyle büyüme döngüsü sürdürülür.',
  },
]

const faqs = [
  {
    q: 'GA4 ile Universal Analytics arasındaki fark ne?',
    a: 'Universal Analytics (UA) Temmuz 2023\'te kapatıldı ve artık veri toplamıyor. GA4, event bazlı veri modeli, cross-device ölçüm, makine öğrenmesi tahminleri ve daha güçlü dönüşüm modelleme ile geliştirildi. UA\'ya alışkın kullanıcılar için GA4 ilk başta karmaşık görünebilir; doğru yapılandırma kritik önem taşıyor.',
  },
  {
    q: 'Veri analitiği olmadan dijital pazarlama yapılabilir mi?',
    a: 'Yapılabilir, ama kör uçuşla aynı şey. Hangi reklamın dönüşüm getirdiğini, hangi sayfanın ziyaretçi kaçırdığını, hangi kanalın en değerli müşteriyi çektiğini bilmeden bütçe optimizasyonu yapamazsınız. Analitik altyapısı olmayan firmaların %60-70\'i reklam bütçesini israf ediyor.',
  },
  {
    q: 'Looker Studio dashboard ne zaman hazır olur?',
    a: 'Standart bir dashboard (trafik, dönüşüm, kanal performansı, açılış sayfaları) 3-5 iş günü. CRM verisi ve reklam hesaplarını birleştiren kapsamlı bir multi-kaynak dashboard ise 1-2 hafta sürer. Dashboard tesliminden sonra sizi bağımsız kullanabilmeniz için eğitim de yapılıyor.',
  },
  {
    q: 'Veri analizi SEO ve Google Ads\'i nasıl etkiliyor?',
    a: 'SEO için: hangi anahtar kelimelerin dönüşüm getirdiğini, hangi içeriklerin bounce rate\'i yüksek tuttuğunu görmek içerik stratejisini köklü şekilde değiştirebilir. Google Ads için: dönüşüm hattındaki micro-dönüşümleri (form görüntüleme, fiyat sayfası ziyareti) Google\'a sinyal olarak göndermek Quality Score\'u artırır ve CPC\'yi düşürür. Veri, her kanalın performansını amplifiye eder.',
  },
  {
    q: 'Hangi araçları kullanıyorsunuz?',
    a: 'GA4, Google Tag Manager, Looker Studio (Data Studio), Google Search Console, Microsoft Clarity, Hotjar, SEMrush, Ahrefs, SimilarWeb ve özel BigQuery analizleri. İhtiyaca göre Mixpanel, Amplitude veya PostHog gibi ürün analitiği araçlarını da kullanıyoruz.',
  },
  {
    q: 'Küçük işletmeler için veri analizi gerekli mi?',
    a: 'Kesinlikle. KOBİ\'ler büyük firmalar kadar veri analitikçisi çalıştıramaz, bu yüzden her TL\'nin nereye gittiğini bilmek daha kritik. Küçük bir işletme için aylık 30 dakikalık doğru dashboard incelemesi, yanlış kanala giden bütçeyi kurtarabilir ve yıllık büyüme hedefini tutturabilir.',
  },
  {
    q: 'Danışmanlık hizmeti neleri kapsıyor?',
    a: 'Aylık strateji görüşmesi (60-90 dk), haftalık performans dashboard güncellemesi, sektör kıyaslaması (benchmarking), rakip izleme ve öne çıkan fırsatların haftalık özeti. Büyüme sürecinizde veri temelli karar almak için sürekli bir danışman olarak yanınızdayız.',
  },
  {
    q: 'Atıf modeli (attribution model) nedir ve neden önemli?',
    a: 'Atıf modeli, bir dönüşüme hangi pazarlama kanalının/dokunuşunun katkısını belirleme yöntemidir. "Son tıklama" modeli, Google Ads\'e çok fazla kredi verirken organik aramanın gerçek katkısını gizler. Doğru data-driven attribution modeliyle hangi kanalın gerçek katkıyı yaptığını görür, bütçeyi buna göre dağıtırsınız.',
  },
]

export default function VeriAnaliziPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
            <BarChart3 size={14} className="text-cyan-400" />
            <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">Veri Analizi & Stratejik Danışmanlık</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
            Veriyle Karar Ver,
            <br />
            <span className="gradient-text">Güvenle Büyü</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            GA4 kurulumundan Looker Studio dashboard tasarımına, dönüşüm huni analizinden
            rekabet istihbaratına — tüm büyüme kararlarınızı veriye dayandırın.
          </p>
          <CalendlyButton label="Ücretsiz Analitik Auditi" variant="primary" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">%35</div>
            <div className="text-zinc-400 text-sm mt-1">Ortalama Dönüşüm Artışı</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">%60</div>
            <div className="text-zinc-400 text-sm mt-1">Bütçe İsrafı Azalması</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">3 gün</div>
            <div className="text-zinc-400 text-sm mt-1">İlk Dashboard Teslimi</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
            <div className="text-zinc-400 text-sm mt-1">Analiz Edilen İşletme</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-cyan-500 text-sm font-medium tracking-wider uppercase mb-3">Hizmetler</p>
            <h2 className="text-4xl font-bold text-white mb-4">Veri Analizi Kapsamı</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">GA4 kurulumundan stratejik danışmanlığa, dönüşüm optimizasyonundan rekabet analizine tam kapsamlı veri servisi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-cyan-500/30 transition-colors">
                  <div className="w-11 h-11 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-cyan-500 text-sm font-medium tracking-wider uppercase mb-3">Süreç</p>
            <h2 className="text-4xl font-bold text-white mb-4">5 Adımda Veri Analizi</h2>
          </div>
          <div className="space-y-4">
            {process.map((p) => (
              <div key={p.step} className="flex gap-6 items-start bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6">
                <div className="text-3xl font-bold gradient-text shrink-0">{p.step}</div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{p.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Content — GEO/AEO */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Neden Veri Analitiği Kritik?</h2>
          <div className="space-y-5 text-zinc-300 leading-relaxed">
            <p>
              <strong className="text-white">Ölçülemeyen şey yönetilemez.</strong> Dijital pazarlamada bütçenizi doğru kanala yönlendirmek, müşteri yolculuğunun tıkandığı noktaları görmek ve rakiplerinizden önce fırsatları fark etmek için sağlam bir analitik altyapısına ihtiyacınız var.
            </p>
            <p>
              Google&apos;ın Universal Analytics&apos;ten GA4&apos;e geçişiyle birlikte veri toplama modeli kökten değişti. Event bazlı yapı, cross-device ölçüm ve makine öğrenmesi destekli dönüşüm modelleme artık standart. Ama doğru yapılandırılmamış bir GA4 hesabı, yanlış veri → yanlış karar anlamına geliyor.
            </p>
            <p>
              Ramses Dijital&apos;in mühendislik kökenli ekibi, veri analitiğini pazarlama stratejisiyle birleştiriyor. <strong className="text-white">Sadece raporlamıyor, içgörü üretiyoruz.</strong> &ldquo;Ziyaretçi sayısı arttı&rdquo; değil, &ldquo;X kanalından gelen kullanıcılar ürün sayfasında Y adımda ayrılıyor, Z değişikliğiyle dönüşüm %N artar&rdquo; diyoruz.
            </p>
            <p>
              <strong className="text-white">Quality Score ve veri analitiği doğrudan bağlantılı.</strong> Google Ads&apos;te dönüşüm takibi doğru kurulmadan Quality Score optimizasyonu yapılamaz. GA4 ve Google Ads hesabı arasındaki çift yönlü veri akışı, Google&apos;ın algoritmasına daha iyi sinyaller gönderir: Ad Rank yükselir, CPC düşer, bütçeniz daha verimli çalışır.
            </p>
            <p>
              SEO stratejisinde de veri analitiği belirleyici. Search Console verisi + GA4 davranış analizi kombinasyonu, hangi anahtar kelimelerin trafik çektiğini ama dönüşüm getirmediğini ortaya koyar. <strong className="text-white">İçerik stratejinizi bu içgörüyle yönlendirdiğinizde organik büyüme hız kazanır.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Quality Score Connection */}
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0D1225] border border-cyan-500/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={18} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Veri Analizi → Google Ads Quality Score Etkisi</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Quality Score üç faktöre dayanır: <strong className="text-white">beklenen tıklama oranı, reklam alaka düzeyi ve açılış sayfası deneyimi.</strong> Veri analitiğiyle hangi reklam metninin gerçekten tıklandığını, hangi landing page&apos;in bounce rate&apos;i düşük tuttuğunu ve hangi anahtar kelimenin dönüşüm getirdiğini bilirsiniz. Bu bilgilerle optimize edilen kampanyalar Quality Score&apos;unu artırır, rakiplerinizden daha düşük CPC ile daha üst sıralarda görünürsünüz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-500 text-sm font-medium tracking-wider uppercase mb-3">SSS</p>
            <h2 className="text-4xl font-bold text-white mb-4">Sık Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] transition-colors">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <h3 className="text-white font-semibold text-base">{item.q}</h3>
                  <span className="text-cyan-400 text-2xl leading-none group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="text-zinc-400 text-sm leading-relaxed mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">İlgili Hizmetler & Rehberler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hizmetler/seo-kocaeli" className="group bg-[#0D1225] border border-white/[0.06] hover:border-cyan-500/30 rounded-xl p-5 transition-all">
              <p className="text-cyan-400 text-xs font-medium uppercase tracking-wider mb-2">Hizmet</p>
              <h3 className="text-white font-medium leading-snug group-hover:text-cyan-300 transition-colors">SEO, GEO ve AEO <ArrowRight size={14} className="inline ml-1" /></h3>
            </Link>
            <Link href="/hizmetler/google-ads-kocaeli" className="group bg-[#0D1225] border border-white/[0.06] hover:border-cyan-500/30 rounded-xl p-5 transition-all">
              <p className="text-cyan-400 text-xs font-medium uppercase tracking-wider mb-2">Hizmet</p>
              <h3 className="text-white font-medium leading-snug group-hover:text-cyan-300 transition-colors">Google Ads Yönetimi <ArrowRight size={14} className="inline ml-1" /></h3>
            </Link>
            <Link href="/blog/yapay-zeka-ile-rakip-analizi" className="group bg-[#0D1225] border border-white/[0.06] hover:border-cyan-500/30 rounded-xl p-5 transition-all">
              <p className="text-cyan-400 text-xs font-medium uppercase tracking-wider mb-2">Blog</p>
              <h3 className="text-white font-medium leading-snug group-hover:text-cyan-300 transition-colors">Yapay Zeka ile Rakip Analizi <ArrowRight size={14} className="inline ml-1" /></h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-3xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Analitik Altyapınızı Denetleyelim</h2>
          <p className="text-zinc-400 text-lg mb-8">GA4 kurulumunuz, dönüşüm takibiniz ve veri kalitenizdeki açıkları ücretsiz tespit edelim.</p>
          <CalendlyButton label="Ücretsiz Analitik Auditi" variant="primary" />
        </div>
      </section>

      {/* Schema — Service */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Veri Analizi & Stratejik Danışmanlık',
        description: 'GA4 kurulumu, Looker Studio dashboard tasarımı, dönüşüm huni analizi ve büyüme stratejisi danışmanlığı.',
        provider: { '@type': 'Organization', name: 'Ramses Dijital Reklam Ajansı', url: 'https://ramsesdigital.com' },
        areaServed: [{ '@type': 'City', name: 'İzmit' }, { '@type': 'City', name: 'Kocaeli' }, { '@type': 'Country', name: 'Türkiye' }],
        serviceType: 'Data Analytics Consulting',
        url: 'https://ramsesdigital.com/hizmetler/veri-analizi',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Veri Analizi Hizmetleri',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GA4 Kurulum & Yapılandırma' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Looker Studio Dashboard Tasarımı' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dönüşüm Huni Analizi' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Büyüme Stratejisi Danışmanlığı' } },
          ],
        },
      })}} />

      {/* Schema — FAQ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })}} />

      {/* Schema — Breadcrumb */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://ramsesdigital.com' },
          { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: 'https://ramsesdigital.com/hizmetler' },
          { '@type': 'ListItem', position: 3, name: 'Veri Analizi & Danışmanlık', item: 'https://ramsesdigital.com/hizmetler/veri-analizi' },
        ],
      })}} />
    </>
  )
}
