import type { Metadata } from 'next'
import BolgeMenusu from '@/components/BolgeMenusu'
import Link from 'next/link'
import CityServiceSections, { cityServiceFaqs } from '@/components/CityServiceSections'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Code2, ArrowRight, CheckCircle2, Zap, Globe, BarChart3, Shield, Layers, Cpu, Landmark } from 'lucide-react'
import HeroGuvenSatiri from '@/components/HeroGuvenSatiri'
import ChatbotTelefon from '@/components/telefon/ChatbotTelefon'

export const metadata: Metadata = {
  title: 'Ankara Yazılım Ajansı — Ramses Dijital',
  description:
    'Ankara\'da yazılım ajansı. Kurumsal web uygulaması, süreç otomasyonu, API entegrasyonu ve özel yazılım çözümleri.',
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
  { icon: BarChart3, title: 'Veri & Raporlama Panelleri', desc: 'GA4, Looker Studio ve özel rapor panosu\'larla kurumsal karar süreçlerinizi veriye dayandırın.' },
  { icon: Cpu, title: 'Yapay Zeka Entegrasyonu', desc: 'Belge analizi, müşteri ön görüşme botu, içerik üretimi ve sınıflandırma sistemleri. Claude API entegrasyonu.' },
  { icon: Shield, title: 'Güvenlik & Bakım', desc: 'SSL, düzenli güvenlik taraması, yedekleme ve kesintisiz çalışma takibi. Kurumsal veri hassasiyetine uygun standartlar.' },
]

const stack = ['Next.js', 'TypeScript', 'React', 'Node.js', 'n8n', 'PostgreSQL', 'Vercel', 'Supabase', 'Claude API', 'Stripe']

const faqs = [
  { q: 'Hukuk büroları ve klinikler için özel çözümleriniz var mı?', a: 'Evet. Randevu/dava takip panelleri, güvenli evrak paylaşım akışları, danışan/müşteri CRM entegrasyonları ve kurumsal kimliğe uygun web siteleri geliştiriyoruz. Sektörel reklam kısıtlarını (Avukatlık Kanunu, sağlık reklam yönetmeliği) da göz önünde bulundurarak tasarlıyoruz.' },
  { q: 'Fiyatlandırma nasıl yapılıyor?', a: 'Kapsamı netse proje bazlı sabit fiyat, değilse zaman & materyal modeli kullanıyoruz. Ücretsiz keşif görüşmesinde ihtiyaç analizi yaptıktan sonra size özel bir teklif çıkarıyoruz.' },
  { q: 'Ankara\'da fiziksel ofisiniz var mı?', a: 'Hayır. Kocaeli kökenliyiz ve Ankara\'ya tamamen uzaktan hizmet veriyoruz. Teknik şartname görüşmeleri, demo teslimleri ve destek süreçlerinin tamamı Google Meet/Zoom ve dijital araçlar üzerinden yürütülüyor.' },
  { q: 'Proje sonunda kaynak kod bize mi ait olur?', a: 'Evet. Kaynak kod ve tüm mülkiyet hakları teslimle birlikte tamamen size geçer. Kurumsal ve kamu kurumu müşterilerimiz için bu, denetim/uyum açısından da önemli bir güvence.' },
  ...cityServiceFaqs('ankara', 'yazilim'),
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
      <section className="tema-koyu tema-hero relative pt-24 md:pt-32 pb-12 md:pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full pointer-events-none" />
        <div data-hero-bolunmus className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Ankara — Tüm İlçeler</span>
          </div>
          <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ankara Yazılım Ajansı
            <br />
            <span className="gradient-text">Kurumsal Yazılım & Otomasyon</span>
          </h1>
          <p className="line-clamp-3 sm:line-clamp-none text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-4 leading-relaxed">
            Hukuk büroları, klinikler, danışmanlık firmaları ve B2B tedarikçiler için kurumsal web uygulaması, süreç otomasyonu, API entegrasyonu ve yapay zeka çözümleri.
          </p>
          <div className="mb-10"><BolgeMenusu liste={ilceler} /></div>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <CalendlyButton label="Ücretsiz Keşif Görüşmesi" variant="primary" />
            <Link href="/hizmetler/n8n-otomasyon" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Otomasyon Hizmetleri <ArrowRight size={14} />
            </Link>
          </div>
          <HeroGuvenSatiri />
          </div>
          <div className="mx-auto w-full max-w-[300px] lg:max-w-none">
            <ChatbotTelefon />
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-12 px-6">
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
      <section className="pb-14 md:pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ankara İçin Yazılım Çözümleri
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Ankara&apos;nın kurumsal ve kamu ağırlıklı iş dünyasında güvenlik ve süreklilik önceliğimiz — teknolojiyi buna göre seçiyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="kart-kompakt bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
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
      <section className="py-10 md:py-14 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
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
      <section className="py-12 md:py-16 px-6">
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
      <CityServiceSections city="ankara" hizmet="yazilim" />

      <section className="py-12 md:py-16 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
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
      <section className="py-12 md:py-16 px-6">
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
