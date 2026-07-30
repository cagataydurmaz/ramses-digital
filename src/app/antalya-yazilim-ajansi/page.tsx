import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Code2, ArrowRight, CheckCircle2, Zap, Globe, BarChart3, Shield, Layers, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Antalya Yazılım Ajansı — Ramses Dijital',
  description:
    'Antalya\'da yazılım ajansı. Rezervasyon sistemleri, çok dilli web uygulamaları, gayrimenkul ilan platformları ve otomasyon. Otelcilik, gayrimenkul ve tarım ihracatı sektörlerine özel yazılım çözümleri.',
  alternates: { canonical: 'https://ramsesdigital.com/antalya-yazilim-ajansi' },
  openGraph: {
    title: 'Antalya Yazılım Ajansı | Ramses Dijital',
    description: 'Antalya işletmeleri için özel yazılım, rezervasyon sistemi ve otomasyon çözümleri.',
    url: 'https://ramsesdigital.com/antalya-yazilim-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const solutions = [
  { icon: Globe, title: 'Çok Dilli Web Uygulaması & Site', desc: 'Next.js ile yüksek performanslı, çok dilli otel, tur operatörü ve gayrimenkul siteleri. KOBİ\'den kurumsal ölçeğe.' },
  { icon: Zap, title: 'Rezervasyon & Lead Otomasyonu', desc: 'n8n ile rezervasyon takibi, alıcı adayı bildirimleri, CRM entegrasyonu — sezon yoğunluğunda manuel işi azaltın.' },
  { icon: Layers, title: 'API Entegrasyonu', desc: 'Channel manager, ERP, ilan portalları, ödeme sistemleri — mevcut araçlarınızı birbirine bağlayın.' },
  { icon: BarChart3, title: 'Veri & Analitik', desc: 'GA4, Looker Studio ve özel dashboard\'lar. Hangi dilin, hangi kanalın rezervasyon/satış getirdiğini görsel hale getirin.' },
  { icon: Cpu, title: 'Yapay Zeka Entegrasyonu', desc: 'Çok dilli müşteri destek botu, ilan açıklaması üretimi, öneri sistemleri. Claude & GPT-4 entegrasyonu.' },
  { icon: Shield, title: 'Güvenlik & Bakım', desc: 'SSL, düzenli güvenlik taraması, yedekleme ve uptime monitoring. Sezon ortasında teknik sorun riski almayın.' },
]

const stack = ['Next.js', 'TypeScript', 'React', 'Node.js', 'n8n', 'PostgreSQL', 'Vercel', 'Supabase', 'Claude API', 'Stripe']

const faqs = [
  { q: 'Antalya\'da yazılım ajansı ile çalışmanın avantajı ne?', a: 'Uzaktan çalışıyoruz, dolayısıyla coğrafi mesafe kısıtımız yok. Ancak Antalya\'nın turizm sezonuna bağlı yoğunluk dalgalanmasını, gayrimenkulde yabancı alıcı süreçlerini ve tarım ihracatının B2B dinamiklerini bilmek fark yaratıyor. Bu sektörlere özel çözümler üretiyoruz, jenerik şablon uygulamıyoruz.' },
  { q: 'Otel veya tatil köyü için rezervasyon sistemi entegrasyonu yapıyor musunuz?', a: 'Evet. Mevcut channel manager\'ınızla (varsa) API entegrasyonu kuruyoruz veya sıfırdan basit bir rezervasyon formu/takvim sistemi geliştiriyoruz. Karmaşık oda bazlı fiyatlandırma ve stok yönetimi gerektiren projeler için ihtiyaç analizinden sonra kapsam netleştiriyoruz.' },
  { q: 'Gayrimenkul ofisleri için ilan platformu geliştirebiliyor musunuz?', a: 'Evet. Çok dilli, filtrelenebilir ilan listeleme sayfaları, WhatsApp üzerinden hızlı iletişim entegrasyonu ve isteğe bağlı CRM bağlantısı kuruyoruz. Yabancı alıcı odaklı ofisler için İngilizce/Rusça arayüz desteği standart.' },
  { q: 'Özel yazılım mı, hazır SaaS mi kullanmalıyım?', a: 'Çoğu durumda ikisinin kombinasyonu en akıllıcasıdır. Muhasebe, CRM, e-posta gibi alanlarda hazır SaaS araçları uygun maliyetli. Rezervasyon takibi, ilan yönetimi gibi operasyona özgü süreçler için özel yazılım veya otomasyon daha verimli. Brifing aşamasında birlikte karar veriyoruz.' },
  { q: 'Projeyi teslim ettikten sonra destek veriyor musunuz?', a: 'Evet. Proje sonrası 1-3 ay hata düzeltme garantisi veriyoruz. Uzun vadeli bakım için aylık destek paketi sunuyoruz: güncellemeler, küçük geliştirmeler, teknik izleme ve hızlı müdahale — özellikle sezon ortasında kritik.' },
  { q: 'Proje süresi ve teslim takvimi nasıl belirleniyor?', a: 'Brifing → teknik şartname → onay → geliştirme → test → teslim süreciyle ilerliyoruz. Basit çok dilli web sitesi 3-4 hafta, orta ölçekli rezervasyon/ilan sistemi 6-10 hafta, karmaşık otomasyon veya platform projeleri 3-6 ay. Turizm sektöründe sezon öncesi teslim için erken planlama öneriyoruz.' },
  { q: 'Mevcut yazılımımla entegrasyon yapabilir misiniz?', a: 'Büyük ihtimalle evet. Channel manager, muhasebe yazılımları, ilan portalları (Sahibinden, Emlakjet) ve e-ticaret altyapılarıyla entegrasyon deneyimimiz var. API\'si olan her yazılımla entegrasyon yapılabilir; API olmayanlarda webhook veya dosya bazlı çözümler geliştiriyoruz.' },
  { q: 'Yazılım projesine nasıl başlanıyor?', a: '30 dakikalık ücretsiz keşif görüşmesiyle başlıyoruz. İhtiyaçlarınızı dinliyor, teknik çözüm önerisi sunuyor ve ilk tahmini süreyi paylaşıyoruz. Devam kararı verirseniz detaylı teknik şartname hazırlıyoruz.' },
  { q: 'Kaynak kod bizim mi olur, sizde mi kalır?', a: 'Sizde kalmaz — size teslim edilir. Rezervasyon/ilan sistemi gibi sezonluk kritik yazılımlarda, kodun tamamen sizin mülkiyetinizde olması sezon ortasında herhangi bir ajans değişikliğinde riskinizi sıfırlar.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Antalya Yazılım Ajansı Hizmetleri',
      description: 'Antalya\'nın turizm, gayrimenkul ve tarım ihracatı sektörleri için çok dilli web uygulaması, rezervasyon otomasyonu, API entegrasyonu ve yapay zeka çözümleri.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: { '@type': 'City', name: 'Antalya' },
      url: 'https://ramsesdigital.com/antalya-yazilim-ajansi',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Antalya Yazılım Ajansı', item: 'https://ramsesdigital.com/antalya-yazilim-ajansi' },
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

export default function AntalyaYazilimAjansiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Antalya — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Antalya Yazılım Ajansı
            <br />
            <span className="gradient-text">Rezervasyon, Otomasyon & AI</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Otelcilik, gayrimenkul ve tarım ihracatı işletmeleri için çok dilli web uygulaması, rezervasyon/ilan otomasyonu, API entegrasyonu ve yapay zeka çözümleri.
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
              Antalya İçin Yazılım Çözümleri
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Her proje farklı — turizm, gayrimenkul veya tarım ihracatı ihtiyacınıza göre teknoloji seçiyoruz, şablona sizi uydurmuyoruz.
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
              Antalya&apos;da çoğu yazılım ajansı sadece teknik iş yapar — sitenizi kurar, sizi bırakır. Biz hem teknik altyapıyı hem de
              dijital pazarlamayı yürütüyoruz. Bu demek ki çok dilli siteniz hem hızlı çalışır hem de Google&apos;da bulunur,
              hem de ziyaretçiyi rezervasyona veya alıcıya çeviren bir sistem üzerine kurulur.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Tek muhatap', desc: 'Yazılım + SEO + Ads = tek ajans' },
                { label: 'Entegre strateji', desc: 'Teknik ve pazarlama uyumu' },
                { label: 'Sezona uygun planlama', desc: 'Turizm takvimine göre geliştirme' },
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
          { label: 'Antalya Reklam Ajansı', href: '/antalya-reklam-ajansi' },
          { label: 'Antalya SEO', href: '/antalya-seo' },
          { label: 'Antalya Web Tasarım', href: '/antalya-web-tasarim' },
          { label: 'Antalya Google Ads', href: '/antalya-google-ads' },
          { label: 'Antalya Dijital Pazarlama', href: '/antalya-dijital-pazarlama' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Antalya&apos;da Yazılım Projenizi Konuşalım
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Ücretsiz keşif görüşmesinde ihtiyaçlarınızı dinleyip çözüm önerisi ve ilk tahmini süreyi paylaşıyoruz.
          </p>
          <CalendlyButton label="Ücretsiz Görüşme Ayarla" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
