import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Search, ArrowRight, CheckCircle2, FileText, Link2, BarChart3, Zap, Award, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kocaeli SEO Hizmeti — Ramses Dijital',
  description:
    'Kocaeli\'de SEO hizmeti. Yerel SEO, teknik SEO, GEO ve AEO ile Google\'da üst sıraya çıkın. İzmit, Gebze, Darıca, Körfez ve tüm Kocaeli\'ye hizmet. Ücretsiz SEO analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/kocaeli-seo' },
  openGraph: {
    title: 'Kocaeli SEO Hizmeti | Ramses Dijital',
    description: 'Kocaeli işletmeleri için yerel SEO, teknik SEO ve GEO/AEO optimizasyonu.',
    url: 'https://ramsesdigital.com/kocaeli-seo',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Search, title: 'Kocaeli Yerel SEO', desc: '"Kocaeli + hizmetiniz" ve "İzmit + hizmetiniz" aramalarında Google harita paketine girin. İlçe bazlı anahtar kelime stratejisi.' },
  { icon: FileText, title: 'Teknik SEO & Core Web Vitals', desc: 'Site hızı, mobil uyum, indexlenebilirlik ve Core Web Vitals optimizasyonu. Teknik engeller kaldırılır.' },
  { icon: Zap, title: 'GEO & AEO', desc: 'ChatGPT, Gemini ve Perplexity\'de Kocaeli\'deki sektörünüz aramasında önerilmek için entity-based içerik.' },
  { icon: Link2, title: 'Yerel Backlink İnşası', desc: 'Kocaeli ticaret odaları, yerel medya ve sektörel dizinlerden kaliteli link profili.' },
  { icon: BarChart3, title: 'Kocaeli İçerik Stratejisi', desc: '"Gebze\'de X nasıl yapılır", "Kocaeli en iyi Y" gibi yerel amaçlı içeriklerle uzun kuyruklu trafik.' },
  { icon: Award, title: 'İlçe Bazlı Optimizasyon', desc: 'İzmit, Gebze, Darıca, Körfez, Gölcük, Başiskele — her ilçeye özel sayfa ve GBP stratejisi.' },
]

const ilceler = ['İzmit', 'Gebze', 'Darıca', 'Körfez', 'Gölcük', 'Başiskele', 'Çayırova', 'Karamürsel', 'Kandıra', 'Dilovası']

const faqs = [
  { q: 'Kocaeli\'de SEO hizmeti neden önemli?', a: 'Kocaeli, Türkiye\'nin en büyük sanayi ve ticaret merkezlerinden biri. İzmit, Gebze ve Darıca\'da yoğun ticari rekabet var. Google\'da "Kocaeli [hizmet]" veya "İzmit [hizmet]" aramasında üst sırada çıkmak, rakipler arası farkındalık yaratmanın en düşük maliyetli ve sürdürülebilir yolu.' },
  { q: 'Kocaeli\'nin farklı ilçeleri için ayrı SEO çalışması gerekiyor mu?', a: 'Kocaeli içinde ilçe bazlı arama hacimleri farklı. "Gebze avukat" ile "İzmit avukat" farklı kitleler ve farklı rekabet seviyeleri demek. Etki alanınıza göre her ilçe için ayrı açılış sayfası ve GBP girişi oluşturmak yerel SEO\'da büyük avantaj sağlar.' },
  { q: 'Kocaeli\'de SEO sonuçları ne kadar sürede görülür?', a: 'Google Business Profile ve yerel harita sonuçları 2-4 haftada görünür. Organik web sitesi sıralamaları 3-6 ayda belirginleşir. Gebze gibi rekabetçi ilçelerde tam etki 6-12 ay alabilir. Düzenli içerik üretimi ve backlink kazanımıyla süreç hızlanır.' },
  { q: 'Kocaeli\'de hangi sektörler en çok SEO\'dan fayda görüyor?', a: 'Sağlık (psikolog, diş hekimi, fizyoterapist), hukuk, otomotiv servisi, güzellik & estetik, inşaat & müteahhit, B2B sanayi tedarikçileri ve e-ticaret sektörleri Kocaeli\'de yüksek yerel arama hacmine sahip. Sanayi ağırlıklı B2B için içerik + teknik SEO kombinasyonu kritik.' },
  { q: 'Kocaeli SEO paketi ne kadara mal olur?', a: 'KOBİ yerel SEO paketleri aylık 6.000-15.000 TL. Çok ilçeli veya kurumsal projeler 20.000+ TL. Paket kapsamı: teknik audit, anahtar kelime araştırması, aylık içerik üretimi, GBP yönetimi, backlink stratejisi ve aylık raporlama. Sektör ve ilçeye göre ücretsiz danışmanlıkta netleşir.' },
  { q: 'GEO (Yapay Zeka Optimizasyonu) Kocaeli işletmesi için gerekli mi?', a: 'Evet, özellikle B2B ve profesyonel hizmetlerde. ChatGPT veya Gemini\'ye "Kocaeli\'de güvenilir muhasebe bürosu önerir misin?" diye sorulduğunda sizi önermesi için yapılandırılmış içerik, citation-worthy veri ve yerel otorite sinyalleri gerekiyor. Bu GEO çalışması, geleneksel SEO\'yla eş zamanlı yürütülür.' },
  { q: 'Kocaeli\'deki rakiplerim büyük firmaların bayisi, SEO nasıl işe yarar?', a: 'Büyük bayi zincirleri genellikle yerel içeriğe ve ilçe bazlı sayfaya yatırım yapmaz — şablon site kullanır. Bu sizin için büyük bir fırsat. "Gebze\'de güvenilir X" veya "İzmit\'te yerel Y" aramaları genellikle bağımsız yerel işletmelere kapı açar. Uzun kuyruklu yerel aramalar en yüksek dönüşüm oranına sahip.' },
  { q: 'Kocaeli\'de SEO çalışması için ofiste görüşme gerekiyor mu?', a: 'Hayır. Tüm çalışmalar uzaktan yürütülüyor. Keşif görüşmesi, strateji sunumu ve aylık raporlar Google Meet / Zoom üzerinden yapılır. Kocaeli\'de yerel varlığımız olmasına rağmen fiziksel görüşme zorunluluğu yok.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Kocaeli SEO Hizmeti',
      description: 'Kocaeli ve tüm ilçeleri için yerel SEO, teknik SEO, GEO ve AEO optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'Kocaeli' },
        { '@type': 'City', name: 'İzmit' },
        { '@type': 'City', name: 'Gebze' },
        { '@type': 'City', name: 'Darıca' },
        { '@type': 'City', name: 'Körfez' },
      ],
      url: 'https://ramsesdigital.com/kocaeli-seo',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Kocaeli SEO', item: 'https://ramsesdigital.com/kocaeli-seo' },
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

export default function KocaeliSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Kocaeli — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Kocaeli SEO Hizmeti
            <br />
            <span className="gradient-text">Google&apos;da Üst Sıra</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            İzmit&apos;ten Gebze&apos;ye, Darıca&apos;dan Körfez&apos;e tüm Kocaeli ilçelerinde yerel SEO. GEO ve AEO ile yapay zeka aramalarında da görünün.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            {ilceler.join(' · ')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz SEO Analizi" variant="primary" />
            <Link href="/hizmetler/seo-kocaeli" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              SEO Hizmet Detayları <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: '10', label: 'Kocaeli ilçesi — tam kapsam' },
            { value: '3-6 Ay', label: 'Organik sıralama için süre' },
            { value: '%300+', label: 'Ortalama trafik artışı' },
            { value: '0 TL', label: 'Reklam bütçesi — organik' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
              <p className="text-3xl font-bold text-white mb-1">{value}</p>
              <p className="text-zinc-500 text-xs leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kocaeli İçin Kapsamlı SEO</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Tüm ilçeleri kapsayan, ilçe bazlı farklılaştırılmış strateji.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <CheckCircle2 size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Gerçek Kocaeli Referansı</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Psk. Nur Çelen (Kocaeli psikolog) için yaptığımız yerel SEO ve web çalışması sonrası
              &quot;Kocaeli psikolog&quot; aramasında üst sıralara çıktı, organik randevu almaya başladı.
              Canlı görün: <a href="https://nurcelen.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">nurcelen.com</a>
            </p>
            <Link href="/portfolyo" className="text-blue-400 text-sm font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all">
              Tüm Referanslar <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
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
          { label: 'Kocaeli Web Tasarım', href: '/kocaeli-web-tasarim' },
          { label: 'Kocaeli Google Ads', href: '/kocaeli-google-ads' },
          { label: 'Kocaeli Yazılım Ajansı', href: '/kocaeli-yazilim-ajansi' },
          { label: 'İzmit SEO', href: '/izmit-seo' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp size={40} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Kocaeli&apos;de Google&apos;ın Zirvesine Çıkın</h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz SEO analiziyle başlayalım.</p>
          <CalendlyButton label="Ücretsiz SEO Analizi Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
