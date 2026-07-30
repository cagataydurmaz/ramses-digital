import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Code2, ArrowRight, CheckCircle2, Zap, Globe, BarChart3, Shield, Layers, Cpu, Landmark } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ankara Yazılım Ajansı — Ramses Dijital',
  description:
    'Ankara\'da yazılım ajansı. Kurumsal web uygulaması, süreç otomasyonu, API entegrasyonu ve özel yazılım çözümleri. Hukuk büroları, klinikler ve B2B firmalar için Next.js ile geliştirme.',
  alternates: { canonical: 'https://ramsesdigital.com/ankara-yazilim-ajansi' },
  openGraph: {
    title: 'Ankara Yazılım Ajansı | Ramses Dijital',
    description: 'Ankara işletmeleri için özel yazılım, kurumsal web uygulaması ve otomasyon çözümleri.',
    url: 'https://ramsesdigital.com/ankara-yazilim-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const ilceler = ['Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut', 'Sincan', 'Altındağ', 'Gölbaşı', 'Pursaklar', 'Polatlı']

const solutions = [
  { icon: Globe, title: 'Kurumsal Web Uygulaması', desc: 'Next.js ile hızlı, güvenli ve kurumsal kimliğe uygun web siteleri. Hukuk bürosundan danışmanlık firmasına özel tasarım.' },
  { icon: Zap, title: 'Süreç Otomasyonu', desc: 'n8n ile randevu takibi, evrak akışı, teklif hazırlama ve müşteri bildirim süreçlerini otomatikleştirin.' },
  { icon: Layers, title: 'API & Sistem Entegrasyonu', desc: 'Muhasebe yazılımı, CRM, e-imza sistemleri ve ödeme altyapılarını mevcut iş akışınıza bağlayın.' },
  { icon: BarChart3, title: 'Veri & Raporlama Panelleri', desc: 'GA4, Looker Studio ve özel dashboard\'larla kurumsal karar süreçlerinizi veriye dayandırın.' },
  { icon: Cpu, title: 'Yapay Zeka Entegrasyonu', desc: 'Belge analizi, müşteri ön görüşme botu, içerik üretimi ve sınıflandırma sistemleri. Claude API entegrasyonu.' },
  { icon: Shield, title: 'Güvenlik & Bakım', desc: 'SSL, düzenli güvenlik taraması, yedekleme ve uptime izleme. Kurumsal veri hassasiyetine uygun standartlar.' },
]

const stack = ['Next.js', 'TypeScript', 'React', 'Node.js', 'n8n', 'PostgreSQL', 'Vercel', 'Supabase', 'Claude API', 'Stripe']

const faqs = [
  { q: 'Ankara\'da yazılım ajansı ile çalışmanın avantajı ne?', a: 'Uzaktan çalışıyoruz, dolayısıyla coğrafi mesafe sorun değil. Ancak Ankara\'nın kamu, hukuk ve profesyonel hizmetler ağırlıklı ekonomisini bilmek fark yaratıyor — hukuk bürosu için evrak/randevu akışı, danışmanlık firması için teklif yönetimi gibi ihtiyaçlar İstanbul merkezli e-ticaret odaklı ajansların standart çözümlerinden farklı.' },
  { q: 'Özel yazılım mı, hazır SaaS mi kullanmalıyım?', a: 'Genelde ikisinin kombinasyonu en verimlisi. Muhasebe, e-posta, randevu gibi standart ihtiyaçlar için Parasut, Google Calendar gibi hazır araçlar yeterli. Sektöre özgü süreçler (dava takibi, hasta/danışan yönetimi, teklif otomasyonu) için özel yazılım veya n8n otomasyonu daha verimli çalışır. Keşif görüşmesinde birlikte karar veriyoruz.' },
  { q: 'Hukuk büroları ve klinikler için özel çözümleriniz var mı?', a: 'Evet. Randevu/dava takip panelleri, güvenli evrak paylaşım akışları, danışan/müşteri CRM entegrasyonları ve kurumsal kimliğe uygun web siteleri geliştiriyoruz. Sektörel reklam kısıtlarını (Avukatlık Kanunu, sağlık reklam yönetmeliği) da göz önünde bulundurarak tasarlıyoruz.' },
  { q: 'Projeyi teslim ettikten sonra destek veriyor musunuz?', a: 'Evet. Proje sonrası 1-3 ay hata düzeltme garantisi veriyoruz. Uzun vadeli bakım için aylık destek paketi sunuyoruz: güncellemeler, küçük geliştirmeler, teknik izleme ve hızlı müdahale.' },
  { q: 'Proje süresi ve teslim takvimi nasıl belirleniyor?', a: 'Brifing → teknik şartname → onay → geliştirme → test → teslim süreciyle ilerliyoruz. Basit kurumsal web sitesi 2-3 hafta, orta ölçekli web uygulaması 6-10 hafta, karmaşık otomasyon veya platform projeleri 3-6 ay sürüyor. Şartname onaylandıktan sonra net bir takvime bağlı kalıyoruz.' },
  { q: 'Mevcut yazılımımla entegrasyon yapabilir misiniz?', a: 'Büyük ihtimalle evet. Mikro Yazılım, Logo, e-imza sistemleri, WooCommerce ve çeşitli CRM/ERP araçlarıyla entegrasyon deneyimimiz var. API\'si olan her sistemle entegrasyon mümkün; olmayanlarda webhook veya dosya bazlı çözümler geliştiriyoruz.' },
  { q: 'Fiyatlandırma nasıl yapılıyor?', a: 'Kapsamı netse proje bazlı sabit fiyat, değilse zaman & materyal modeli kullanıyoruz. Ücretsiz keşif görüşmesinde ihtiyaç analizi yaptıktan sonra size özel bir teklif çıkarıyoruz.' },
  { q: 'Ankara\'da fiziksel ofisiniz var mı?', a: 'Hayır. Merkezimiz Kocaeli\'de ve Ankara\'ya tamamen uzaktan hizmet veriyoruz. Teknik şartname görüşmeleri, demo teslimleri ve destek süreçlerinin tamamı Google Meet/Zoom ve dijital araçlar üzerinden yürütülüyor.' },
  { q: 'Proje sonunda kaynak kod bize mi ait olur?', a: 'Evet. Kaynak kod ve tüm mülkiyet hakları teslimle birlikte tamamen size geçer. Kurumsal ve kamu kurumu müşterilerimiz için bu, denetim/uyum açısından da önemli bir güvence.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Ankara Yazılım Ajansı Hizmetleri',
      description: 'Ankara işletmeleri için kurumsal web uygulaması, süreç otomasyonu, API entegrasyonu ve yapay zeka çözümleri.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'Ankara' },
        { '@type': 'City', name: 'Çankaya' },
        { '@type': 'City', name: 'Keçiören' },
        { '@type': 'City', name: 'Yenimahalle' },
      ],
      url: 'https://ramsesdigital.com/ankara-yazilim-ajansi',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Ankara Yazılım Ajansı', item: 'https://ramsesdigital.com/ankara-yazilim-ajansi' },
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

export default function AnkaraYazilimAjansiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Ankara — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ankara Yazılım Ajansı
            <br />
            <span className="gradient-text">Kurumsal Yazılım & Otomasyon</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Hukuk büroları, klinikler, danışmanlık firmaları ve B2B tedarikçiler için kurumsal web uygulaması, süreç otomasyonu, API entegrasyonu ve yapay zeka çözümleri.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            {ilceler.join(' · ')}
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
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl px-6 py-4 text-center flex items-start gap-3 text-left">
            <Landmark size={20} className="text-blue-400 shrink-0 mt-0.5" />
            <p className="text-zinc-400 text-sm leading-relaxed">
              Ankara e-ticaretten çok kamu kurumları, hukuk büroları, üniversiteler ve B2B kurumsal hizmetler etrafında şekilleniyor. Yazılım projelerimizi de bu gerçeğe göre kuruyoruz — sipariş sepeti yerine dava/randevu takibi, kampanya yerine evrak ve müşteri süreçleri önceliğimiz.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ankara İçin Yazılım Çözümleri
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
              Ankara&apos;da çoğu yazılım ajansı sadece teknik iş yapar — sitenizi kurar, sizi bırakır. Biz hem teknik altyapıyı hem
              SEO ve görünürlüğü birlikte yürütüyoruz. Böylece kurumsal web uygulamanız hem hızlı ve güvenli çalışır hem de
              Google&apos;da bulunur, hem de ziyaretçiyi randevuya veya teklife çeviren bir sistem üzerine kurulur.
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
          { label: 'Ankara Reklam Ajansı', href: '/ankara-reklam-ajansi' },
          { label: 'Ankara SEO', href: '/ankara-seo' },
          { label: 'Ankara Web Tasarım', href: '/ankara-web-tasarim' },
          { label: 'Ankara Dijital Pazarlama', href: '/ankara-dijital-pazarlama' },
          { label: 'Ankara Google Ads', href: '/ankara-google-ads' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ankara&apos;da Yazılım Projenizi Konuşalım
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Ücretsiz keşif görüşmesinde ihtiyaçlarınızı dinleyip çözüm önerisi paylaşıyoruz.
          </p>
          <CalendlyButton label="Ücretsiz Görüşme Ayarla" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
