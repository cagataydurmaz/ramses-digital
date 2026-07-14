import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Code2, ArrowRight, CheckCircle2, Zap, Globe, BarChart3, Shield, Layers, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İzmit Yazılım Ajansı — Ramses Dijital',
  description:
    'İzmit\'te yazılım ajansı. Web uygulaması, otomasyon, API entegrasyonu ve dijital pazarlama yazılımları. KOBİ ve kurumsal firmalar için özel yazılım çözümleri.',
  alternates: { canonical: 'https://ramsesdigital.com/izmit-yazilim-ajansi' },
  openGraph: {
    title: 'İzmit Yazılım Ajansı | Ramses Dijital',
    description: 'İzmit işletmeleri için özel yazılım, web uygulaması ve otomasyon çözümleri.',
    url: 'https://ramsesdigital.com/izmit-yazilim-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const solutions = [
  { icon: Globe, title: 'Web Uygulaması & Site', desc: 'Next.js ile yüksek performanslı web siteleri ve uygulamalar. KOBİ\'den kurumsal ölçeğe.' },
  { icon: Zap, title: 'İş Süreçleri Otomasyonu', desc: 'n8n ile tekrarlayan operasyonları otomatikleştirin. CRM, e-posta, bildirim, fatura akışları.' },
  { icon: Layers, title: 'API Entegrasyonu', desc: 'Muhasebe yazılımı, ERP, e-ticaret altyapısı, ödeme sistemleri — mevcut araçlarınızı birbirine bağlayın.' },
  { icon: BarChart3, title: 'Veri & Analitik', desc: 'GA4, Looker Studio ve özel dashboard\'lar. İşletme verinizi görsel ve anlaşılır hale getirin.' },
  { icon: Cpu, title: 'Yapay Zeka Entegrasyonu', desc: 'Müşteri destek botu, içerik üretimi, sınıflandırma ve öneri sistemleri. Claude & GPT-4 entegrasyonu.' },
  { icon: Shield, title: 'Güvenlik & Bakım', desc: 'SSL, düzenli güvenlik taraması, yedekleme ve uptime monitoring. Teknik sorun yaşamadan büyüyün.' },
]

const stack = ['Next.js', 'TypeScript', 'React', 'Node.js', 'n8n', 'PostgreSQL', 'Vercel', 'Supabase', 'Claude API', 'Stripe']

const faqs = [
  { q: 'İzmit\'te yazılım ajansı ile çalışmanın avantajı ne?', a: 'Uzaktan çalışıyoruz, dolayısıyla coğrafi mesafe kısıtımız yok. Ancak İzmit ve Kocaeli\'deki B2B sanayi dinamiklerini, yerel rekabet yapısını ve KOBİ ihtiyaçlarını bilmek önemli bir fark yaratıyor. İzmit\'teki işletmelerin yazılım ihtiyaçları — tedarik zinciri, saha operasyonları, bayii yönetimi — İstanbul merkezli ajansların prototiplerinden farklı.' },
  { q: 'Özel yazılım mı, hazır SaaS mi kullanmalıyım?', a: 'Çoğu durumda ikisinin kombinasyonu en akıllıcasıdır. Muhasebe, CRM, e-posta gibi alanlarda Parasut, HubSpot, Mailchimp gibi SaaS araçları uygun maliyetli. Operasyona özgü süreçler (sipariş yönetimi, saha takibi, özel raporlama) için özel yazılım veya otomasyon daha verimli. Brifing aşamasında birlikte karar veriyoruz.' },
  { q: 'Projeyi teslim ettikten sonra destek veriyor musunuz?', a: 'Evet. Proje sonrası 1-3 ay hata düzeltme garantisi veriyoruz. Uzun vadeli bakım için aylık destek paketi sunuyoruz: güncellemeler, küçük geliştirmeler, teknik izleme ve hızlı müdahale. Projeniz sahipsiz kalmaz.' },
  { q: 'Proje süresi ve teslim takvimi nasıl belirleniyor?', a: 'Brifing→ teknik şartname → onay → geliştirme → test → teslim süreciyle ilerliyoruz. Basit web sitesi 2-3 hafta, orta ölçekli web uygulaması 6-10 hafta, karmaşık otomasyon veya platform projeleri 3-6 ay. Şartname onaylandıktan sonra net takvim sunuyoruz ve bağlı kalıyoruz.' },
  { q: 'Yapay zeka (AI) entegrasyonu yapıyor musunuz?', a: 'Evet. Müşteri destek chatbotu, içerik üretim asistanı, belge analizi, ürün öneri sistemi ve görüntü işleme projeleri yapıyoruz. Claude API ve GPT-4 entegrasyonlarında deneyimli ekibimiz var. AI projeleri için kullanım senaryosu netleştirip fizibilite analizi yapıyoruz.' },
  { q: 'Fiyatlandırma nasıl yapılıyor?', a: 'Proje bazlı sabit fiyat (kapsam netse) veya zaman & materyal modeli kullanıyoruz. Küçük otomasyon projeleri 5.000-15.000 TL, kurumsal web uygulamaları 30.000-100.000+ TL aralığında. Ücretsiz danışmanlıkta ihtiyaç analizi yaptıktan sonra sabit fiyatlı teklif sunuyoruz.' },
  { q: 'Mevcut yazılımımla entegrasyon yapabilir misiniz?', a: 'Büyük ihtimalle evet. Mikro Yazılım, Logo, SAP, WooCommerce, Shopify, Trendyol, Hepsiburada entegrasyonlarında deneyimimiz var. API\'si olan her yazılımla entegrasyon yapılabilir; API olmayanlarda webhook veya dosya bazlı çözümler geliştiriyoruz.' },
  { q: 'Yazılım projesine nasıl başlanıyor?', a: '30 dakikalık ücretsiz keşif görüşmesiyle başlıyoruz. İhtiyaçlarınızı dinliyor, teknik çözüm önerisi sunuyor ve ilk tahmini maliyet & süre paylaşıyoruz. Devam kararı verirseniz detaylı teknik şartname hazırlıyoruz. Herhangi bir taahhüt olmadan görüşme yapabilirsiniz.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'İzmit Yazılım Ajansı Hizmetleri',
      description: 'İzmit ve Kocaeli işletmeleri için web uygulaması, otomasyon, API entegrasyonu ve yapay zeka çözümleri.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: { '@type': 'City', name: 'İzmit' },
      url: 'https://ramsesdigital.com/izmit-yazilim-ajansi',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'İzmit Yazılım Ajansı', item: 'https://ramsesdigital.com/izmit-yazilim-ajansi' },
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

export default function IzmitYazilimAjansiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">İzmit & Kocaeli</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            İzmit Yazılım Ajansı
            <br />
            <span className="gradient-text">Web, Otomasyon & AI</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            İzmit ve Kocaeli işletmeleri için web uygulaması, iş süreçleri otomasyonu, API entegrasyonu ve yapay zeka çözümleri. Teknoloji karmaşıklığı olmadan, sadece sonuç.
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
              Ramses Dijital, reklam ajansı kimliğiyle başladı; bugün SEO ve Google Ads&apos;in yanında web ve yazılım geliştirme hizmetlerini de aynı mühendislik disipliniyle sunuyor.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              İzmit İçin Yazılım Çözümleri
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

      {/* Why digital + software */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <CheckCircle2 size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">
              Neden Yazılım + Dijital Pazarlama Birlikte?
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              İzmit&apos;te çoğu yazılım ajansı sadece teknik iş yapar — sitenizi kurar, sizi bırakır. Biz hem teknik altyapıyı hem de
              dijital pazarlamayı yürütüyoruz. Bu demek ki web siteniz hem hızlı çalışır hem de Google&apos;da bulunur, hem de
              ziyaretçiyi müşteriye çeviren bir sistem üzerine kurulur. Parçalar arasında koordinasyon kaybı olmaz.
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

      <RelatedPages
        pages={[
          { label: 'İzmit Reklam Ajansı', href: '/izmit-reklam-ajansi' },
          { label: 'İzmit SEO', href: '/izmit-seo' },
          { label: 'İzmit Web Tasarım', href: '/izmit-web-tasarim' },
          { label: 'İzmit Google Ads', href: '/izmit-google-ads' },
          { label: 'Kocaeli Yazılım Ajansı', href: '/kocaeli-yazilim-ajansi' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            İzmit&apos;te Yazılım Projenizi Konuşalım
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Ücretsiz keşif görüşmesinde ihtiyaçlarınızı dinleyip çözüm önerisi ve ilk tahmini bütçeyi paylaşıyoruz.
          </p>
          <CalendlyButton label="Ücretsiz Görüşme Ayarla" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
