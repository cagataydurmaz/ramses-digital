import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Code2, ArrowRight, CheckCircle2, Zap, Globe, BarChart3, Shield, Layers, Cpu, ShoppingBag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İzmir Yazılım Ajansı — Ramses Dijital',
  description:
    'İzmir\'de yazılım ajansı. Next.js ile web uygulaması, n8n otomasyonu, API entegrasyonu ve yapay zeka çözümleri. İhracatçı ve e-ticaret firmaları için özel yazılım. Ücretsiz keşif görüşmesi.',
  alternates: { canonical: 'https://ramsesdigital.com/izmir-yazilim-ajansi' },
  openGraph: {
    title: 'İzmir Yazılım Ajansı | Ramses Dijital',
    description: 'İzmir işletmeleri için özel yazılım, web uygulaması ve otomasyon çözümleri.',
    url: 'https://ramsesdigital.com/izmir-yazilim-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const solutions = [
  { icon: Globe, title: 'Web Uygulaması & Kurumsal Site', desc: 'Next.js ile hızlı, SEO uyumlu web siteleri. Çok dilli altyapı — ihracat yapan İzmir firmaları için özellikle önemli.' },
  { icon: Zap, title: 'İş Süreçleri Otomasyonu (n8n)', desc: 'Sipariş, sevkiyat, gümrük evrakı takibi gibi tekrarlayan süreçleri otomatikleştirin. Sezonluk yoğunlukta iş yükünü azaltır.' },
  { icon: ShoppingBag, title: 'E-ticaret Altyapısı', desc: 'Zeytinyağı, tekstil, tarım ürünü gibi ihraç kalemleri için çok dilli, ödeme entegrasyonlu e-ticaret siteleri.' },
  { icon: Layers, title: 'API & ERP Entegrasyonu', desc: 'Muhasebe yazılımı, gümrük/lojistik sistemleri, e-ticaret pazaryerleri — mevcut araçlarınızı birbirine bağlayın.' },
  { icon: Cpu, title: 'Yapay Zeka Entegrasyonu', desc: 'Çok dilli müşteri destek botu, belge/fatura analizi, ürün açıklaması üretimi. Claude & GPT-4 tabanlı çözümler.' },
  { icon: Shield, title: 'Güvenlik & Bakım', desc: 'SSL, düzenli güvenlik taraması, otomatik yedekleme ve uptime izleme. Sezon ortasında teknik sorun yaşamayın.' },
]

const stack = ['Next.js', 'TypeScript', 'React', 'Node.js', 'n8n', 'PostgreSQL', 'Vercel', 'Supabase', 'Claude API', 'Stripe']

const sectors = [
  'Hukuk Bürosu', 'Psikolog & Terapist', 'Diş Hekimi & Diş Kliniği', 'Güzellik Merkezi & Estetik',
  'İhracat & Dış Ticaret', 'E-ticaret', 'Turizm & Konaklama', 'Lojistik',
]

const faqs = [
  { q: 'İzmir\'de yazılım ajansı ile çalışmanın avantajı ne?', a: 'Uzaktan çalışıyoruz; coğrafi mesafe teknik açıdan bir kısıt değil. Ancak İzmir\'in ihracat, liman/lojistik ve turizm ağırlıklı ekonomisinin getirdiği ihtiyaçları — çok dilli altyapı, gümrük/lojistik entegrasyonları, sezonluk trafik dalgalanmaları — biliyoruz. Bu, İstanbul veya Ankara odaklı bir ajanstan farklı bir bakış açısı sağlıyor.' },
  { q: 'İhracat yapan bir firma için hangi yazılım ihtiyaçları öne çıkar?', a: 'Çok dilli web sitesi (İngilizce, Almanca gibi hedef pazar dilleri), ürün kataloğu yönetimi, gümrük evrakı ve sevkiyat takibinde otomasyon, ve uluslararası müşterilerle iletişimi kolaylaştıran CRM entegrasyonları en sık talep ettiğimiz çözümler arasında.' },
  { q: 'Özel yazılım mı, hazır SaaS mi kullanmalıyım?', a: 'Genellikle ikisinin kombinasyonu en verimlisi. Muhasebe, CRM gibi standart alanlarda hazır SaaS araçları yeterli olabilir. Sevkiyat takibi, ürün kataloğu senkronizasyonu gibi operasyona özgü süreçlerde özel yazılım veya otomasyon daha etkili sonuç verir. Keşif görüşmesinde birlikte karar veriyoruz.' },
  { q: 'Proje süresi ve teslim takvimi nasıl belirleniyor?', a: 'Brifing → teknik şartname → onay → geliştirme → test → teslim sürecini izliyoruz. Basit kurumsal site 2-3 hafta, orta ölçekli web uygulaması veya e-ticaret altyapısı 6-10 hafta, karmaşık otomasyon/entegrasyon projeleri 3-6 ay sürebilir. Şartname onaylandıktan sonra net takvime bağlı kalıyoruz.' },
  { q: 'Projeyi teslim ettikten sonra destek veriyor musunuz?', a: 'Evet. Teslim sonrası 1-3 ay hata düzeltme garantisi sunuyoruz. Uzun vadeli ihtiyaçlar için aylık bakım paketi mevcut: güncellemeler, küçük geliştirmeler, teknik izleme. Projeniz teslim sonrası sahipsiz kalmaz.' },
  { q: 'Mevcut yazılımımla (ERP, muhasebe, pazaryeri) entegrasyon yapabilir misiniz?', a: 'Büyük ihtimalle evet. Logo, Mikro Yazılım, WooCommerce, Shopify, Trendyol, Etsy gibi platformlarla entegrasyon deneyimimiz var. API sunan her sistemle entegrasyon mümkün; API olmayan durumlarda webhook veya dosya bazlı çözümler geliştiriyoruz.' },
  { q: 'İzmir\'de fiziksel olarak bulunuyor musunuz?', a: 'Hayır, merkezimiz Kocaeli\'de ve İzmir\'e tamamen uzaktan hizmet veriyoruz. Teknik şartname görüşmeleri, demo ve teslimler dijital ortamda (Google Meet/Zoom, ekran paylaşımı) yürütülür. Bunu saklamıyoruz — uzaktan geliştirme sürecimiz aynı titizlikle işliyor.' },
  { q: 'Yazılım projesine nasıl başlanıyor?', a: '30 dakikalık ücretsiz keşif görüşmesiyle başlıyoruz. İhtiyacınızı dinliyor, teknik çözüm önerisi ve tahmini süreyi paylaşıyoruz. Devam kararı verirseniz detaylı teknik şartname hazırlanır. Herhangi bir taahhüt olmadan görüşme yapabilirsiniz.' },
  { q: 'Kaynak kodu bize teslim ediyor musunuz?', a: 'Evet, tamamen. Kaynak kod ve mülkiyet hakları size ait olur; ihracat odaklı firmalar için bu, yazılımı istediğiniz gibi genişletme veya başka bir ekibe devretme özgürlüğü demek.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'İzmir Yazılım Ajansı Hizmetleri',
      description: 'İzmir işletmeleri için web uygulaması, e-ticaret, otomasyon, API entegrasyonu ve yapay zeka çözümleri.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'İzmir' },
        { '@type': 'City', name: 'Konak' },
        { '@type': 'City', name: 'Karşıyaka' },
        { '@type': 'City', name: 'Bornova' },
        { '@type': 'City', name: 'Urla' },
      ],
      url: 'https://ramsesdigital.com/izmir-yazilim-ajansi',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'İzmir Yazılım Ajansı', item: 'https://ramsesdigital.com/izmir-yazilim-ajansi' },
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

export default function IzmirYazilimAjansiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">İzmir — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            İzmir Yazılım Ajansı
            <br />
            <span className="gradient-text">Web, Otomasyon & AI</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            İzmir&apos;in ihracat, e-ticaret ve turizm ağırlıklı işletmeleri için web uygulaması, iş süreçleri otomasyonu, API entegrasyonu ve yapay zeka çözümleri.
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
              İzmir İçin Yazılım Çözümleri
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
          <h2 className="text-2xl font-bold text-white mb-3">İzmir&apos;de Yazılım Çözümü Sunduğumuz Sektörler</h2>
          <p className="text-zinc-500 text-sm mb-8">Her sektörün teknik ihtiyacı farklı — genel şablon değil, özel çözüm.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <span key={sector} className="bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-sm rounded-full px-4 py-2">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why digital + software */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <CheckCircle2 size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">
              Neden Yazılım + Dijital Pazarlama Birlikte?
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              İzmir&apos;de çoğu yazılım ajansı sadece teknik iş yapar — sitenizi kurar, sizi bırakır. Biz hem teknik altyapıyı hem de
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

      {/* Honest proof / portfolio redirect */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 text-center">
            <BarChart3 size={28} className="text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">İzmir&apos;de Henüz Canlı Bir Yazılım Referansımız Yok</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xl mx-auto">
              Uydurma vaka çalışması sunmuyoruz. Türkiye genelinde farklı sektörlerden gerçek, canlı yazılım ve web
              projelerimiz var — hepsi ziyaret edilebilir. Aynı mühendislik disiplinini İzmir işletmeleri için de uyguluyoruz.
            </p>
            <Link href="/portfolyo" className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:text-blue-300 text-sm font-medium rounded-full px-5 py-2.5 transition-all">
              Portföyümüzü İnceleyin <ArrowRight size={13} />
            </Link>
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
          { label: 'İzmir Reklam Ajansı', href: '/izmir-reklam-ajansi' },
          { label: 'İzmir SEO', href: '/izmir-seo' },
          { label: 'İzmir Web Tasarım', href: '/izmir-web-tasarim' },
          { label: 'İzmir Dijital Pazarlama', href: '/izmir-dijital-pazarlama' },
          { label: 'İzmit Yazılım Ajansı', href: '/izmit-yazilim-ajansi' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            İzmir&apos;de Yazılım Projenizi Konuşalım
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Ücretsiz keşif görüşmesinde ihtiyaçlarınızı dinleyip çözüm önerisi ve tahmini süreyi paylaşıyoruz.
          </p>
          <CalendlyButton label="Ücretsiz Görüşme Ayarla" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
