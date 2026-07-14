import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Code2, ArrowRight, CheckCircle2, Zap, Globe, BarChart3, Shield, Layers, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kocaeli Yazılım Ajansı — Ramses Dijital',
  description:
    'Kocaeli\'nin yazılım ajansı. Web uygulaması, iş süreçleri otomasyonu, API entegrasyonu ve yapay zeka çözümleri. İzmit merkezli, Gebze, Darıca ve tüm Kocaeli\'ye hizmet.',
  alternates: { canonical: 'https://ramsesdigital.com/kocaeli-yazilim-ajansi' },
  openGraph: {
    title: 'Kocaeli Yazılım Ajansı | Ramses Dijital',
    description: 'Kocaeli işletmeleri için özel yazılım, web uygulaması ve otomasyon çözümleri.',
    url: 'https://ramsesdigital.com/kocaeli-yazilim-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const solutions = [
  { icon: Globe, title: 'Web Uygulaması & Site', desc: 'Next.js ile yüksek performanslı web siteleri. Kocaeli KOBİ\'lerinden sanayi kurumlarına.' },
  { icon: Zap, title: 'İş Süreçleri Otomasyonu', desc: 'n8n ile tedarik zinciri, sipariş yönetimi, fatura akışı ve CRM entegrasyonu.' },
  { icon: Layers, title: 'API & ERP Entegrasyonu', desc: 'Logo, SAP, Mikro, WooCommerce — Kocaeli\'deki sanayi firmalarının kullandığı sistemlerle entegrasyon.' },
  { icon: BarChart3, title: 'Veri & Raporlama', desc: 'GA4, Looker Studio ve özel dashboard\'larla Kocaeli operasyonlarınızı görsel olarak takip edin.' },
  { icon: Cpu, title: 'Yapay Zeka Entegrasyonu', desc: 'Müşteri destek botu, belge analizi, sınıflandırma ve öneri motorları. Claude & GPT-4 entegrasyonu.' },
  { icon: Shield, title: 'Güvenlik & Bakım', desc: 'SSL, yedekleme, güvenlik taraması ve uptime monitoring. Kocaeli operasyonlarınız kesintisiz.' },
]

const sektorler = [
  'Sanayi & Üretim B2B', 'Otomotiv & Servis', 'İnşaat & Müteahhit',
  'Sağlık & Klinik', 'Hukuk Bürosu', 'Lojistik & Depo', 'E-ticaret', 'Eğitim & Kurs',
]

const faqs = [
  { q: 'Kocaeli\'deki sanayi firmalarına özel yazılım çözümleriniz var mı?', a: 'Evet. Kocaeli\'nin sanayi dokusunu tanıyoruz: tedarik zinciri yönetimi, saha operasyonu takibi, bayii portal sistemi, üretim raporlama ve kalite kontrol formları gibi B2B yazılım ihtiyaçları bize yabancı değil. Logo veya SAP gibi ERP sistemleriyle entegrasyon da yapıyoruz.' },
  { q: 'Gebze\'deki işletmem için de yazılım hizmeti veriyor musunuz?', a: 'Evet. Kocaeli\'nin tüm ilçelerine (Gebze, Darıca, Körfez, Gölcük, Başiskele vb.) hizmet veriyoruz. Tüm çalışmalar uzaktan yürütülür; fiziksel görüşme zorunluluğu yok. Kocaeli\'de yerel varlığımız olması yerel dinamikleri anlamamızı sağlıyor.' },
  { q: 'Kocaeli\'de hangi yazılım ajansıyla çalışmalıyım?', a: 'Dikkat etmeniz gereken kriterler: canlı referansları olan, teknoloji seçimini şeffaf açıklayan, proje sonrası destek veren ve dijital pazarlama da yapabilen ajans. Yalnızca kod yazan bir ajansla çalışmak web sitenizi canlı eder ama müşteri getirmez. Bizimle çalışırken hem yazılım hem SEO/Ads entegre yürütülür.' },
  { q: 'Kocaeli\'de n8n otomasyonu için hangi süreçleri otomatikleştirebilirim?', a: 'En yaygın Kocaeli B2B senaryoları: müşteri teklif akışı (CRM → PDF oluştur → mail gönder), stok uyarı sistemi, satış siparişi → muhasebe entegrasyonu, saha teknisyeni iş emri yönetimi, müşteri memnuniyet formu otomasyonu. Her süreç analiz edilerek fayda/maliyet hesabı yapılır.' },
  { q: 'Yapay zeka (AI) Kocaeli işletmesine nasıl katkı sağlar?', a: 'Pratik kullanım senaryoları: müşteri destek chatbotu (7/24 ön sorulara cevap), ürün açıklaması/teklif yazma asistanı, hukuk bürosu için belge analizi, sanayi firması için teknik şartname özeti, e-ticaret için ürün öneri motoru. Her proje için önce fizibilite analizi yapıyoruz.' },
  { q: 'Kocaeli\'de yazılım projesi için bütçe ne olmalı?', a: 'Küçük otomasyon projeleri 5.000-15.000 TL, kurumsal web uygulamaları 30.000-100.000+ TL. Kocaeli sanayi B2B projeleri genellikle orta-üst segmentte; yatırım geri dönüşü operasyonel verimlilikten gelir. Ücretsiz danışmanlıkta ihtiyaç analizi sonrası sabit fiyatlı teklif sunulur.' },
  { q: 'Proje teslimi ne kadar sürer?', a: 'Basit web sitesi 2-3 hafta, otomasyon entegrasyonu 3-6 hafta, kurumsal web uygulaması 6-12 hafta, karmaşık ERP entegrasyonu 3-6 ay. Kocaeli\'deki sanayi projelerinde şartname hazırlama süreci zaman zaman uzayabiliyor; esneklik gösteriyoruz.' },
  { q: 'Yazılım + dijital pazarlama birlikte çalışmak neden avantajlı?', a: 'Kocaeli\'deki çoğu yazılım ajansı siteyi kurar, bırakır. Biz aynı zamanda SEO, Google Ads ve otomasyon yapıyoruz. Web siteniz hem teknik açıdan sağlam hem de Google\'da bulunur hem de dönüşüm odaklı tasarlanır. Tek muhatap, entegre strateji, gereksiz koordinasyon yükü yok.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Kocaeli Yazılım Ajansı Hizmetleri',
      description: 'Kocaeli ve İzmit işletmeleri için web uygulaması, otomasyon, API entegrasyonu ve yapay zeka çözümleri.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'Kocaeli' }, { '@type': 'City', name: 'İzmit' },
        { '@type': 'City', name: 'Gebze' }, { '@type': 'City', name: 'Darıca' },
      ],
      url: 'https://ramsesdigital.com/kocaeli-yazilim-ajansi',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Kocaeli Yazılım Ajansı', item: 'https://ramsesdigital.com/kocaeli-yazilim-ajansi' },
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

export default function KocaeliYazilimAjansiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Kocaeli — İzmit Merkezli</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Kocaeli Yazılım Ajansı
            <br />
            <span className="gradient-text">Yazılım, Entegrasyon & Otomasyon</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Kocaeli sanayi ve ticaret firmalarına özel web uygulaması, iş süreçleri otomasyonu, ERP entegrasyonu ve yapay zeka çözümleri.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Keşif Görüşmesi" variant="primary" />
            <Link href="/hizmetler/n8n-otomasyon" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Otomasyon Hizmetleri <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kocaeli İçin Yazılım Çözümleri</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Sanayi ağırlıklı Kocaeli iş yapısına uygun, ölçeklenebilir teknoloji.</p>
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

      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto text-center">
          <Code2 size={28} className="text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Kocaeli&apos;de Hizmet Verdiğimiz Sektörler</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {sektorler.map((s) => (
              <span key={s} className="bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-sm rounded-full px-4 py-2">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <CheckCircle2 size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">Yazılım + Dijital Pazarlama — Tek Çatı</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Kocaeli&apos;deki çoğu yazılım ajansı sitenizi kurar ve bırakır. Biz aynı zamanda SEO, Google Ads ve e-posta otomasyonu yapıyoruz.
              Teknik altyapı ile pazarlama stratejisi aynı ekipten çıkınca koordinasyon kaybı olmaz, dönüşüm optimizasyonu daha hızlı olur.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Tek muhatap', desc: 'Yazılım + SEO + Ads' },
                { label: 'Kocaeli odaklı', desc: 'Yerel dinamikleri biliyoruz' },
                { label: 'Uzun vadeli', desc: 'Büyüdükçe sistemler de büyür' },
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
          { label: 'Kocaeli Dijital Pazarlama', href: '/kocaeli-dijital-pazarlama' },
          { label: 'Kocaeli SEO', href: '/kocaeli-seo' },
          { label: 'Kocaeli Web Tasarım', href: '/kocaeli-web-tasarim' },
          { label: 'Kocaeli Google Ads', href: '/kocaeli-google-ads' },
          { label: 'İzmit Yazılım Ajansı', href: '/izmit-yazilim-ajansi' },
        ]}
      />

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Kocaeli&apos;de Yazılım Projenizi Konuşalım</h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz keşif görüşmesinde ihtiyaçlarınızı dinleyip çözüm önerisi sunuyoruz.</p>
          <CalendlyButton label="Ücretsiz Görüşme Ayarla" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
