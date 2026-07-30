import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Search, ArrowRight, CheckCircle2, FileText, Link2, BarChart3, Zap, Award, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ankara SEO Ajansı — Ramses Dijital',
  description:
    'Ankara\'da SEO hizmeti. Yerel SEO, teknik SEO, GEO ve AEO ile Google\'da üst sıraya çıkın. Çankaya, Keçiören, Yenimahalle ve tüm Ankara\'ya uzaktan hizmet. Ücretsiz SEO analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/ankara-seo' },
  openGraph: {
    title: 'Ankara SEO Ajansı | Ramses Dijital',
    description: 'Ankara işletmeleri için yerel SEO, teknik SEO ve GEO/AEO optimizasyonu.',
    url: 'https://ramsesdigital.com/ankara-seo',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Search, title: 'Ankara Yerel SEO', desc: '"Çankaya + hizmetiniz", "Keçiören + hizmetiniz" gibi ilçe bazlı aramalarda Google harita paketine girin.' },
  { icon: FileText, title: 'Teknik SEO & Core Web Vitals', desc: 'Site hızı, mobil uyum, indexlenebilirlik ve Core Web Vitals optimizasyonu — kurumsal ve kamu odaklı ziyaretçi kitlesinde güven inşa eder.' },
  { icon: Zap, title: 'GEO & AEO', desc: 'ChatGPT, Gemini ve Perplexity\'de "Ankara\'da güvenilir X" aramasında önerilmek için entity-based, otorite odaklı içerik.' },
  { icon: Link2, title: 'Kurumsal Backlink İnşası', desc: 'Ankara merkezli sektörel dernekler, meslek odaları ve B2B dizinlerinden yüksek otoriteli link profili.' },
  { icon: BarChart3, title: 'B2B & Kurumsal İçerik Stratejisi', desc: 'Ankara\'nın kamu, savunma sanayi ve eğitim ağırlıklı ekonomisine uygun, otorite inşa eden içerik mimarisi.' },
  { icon: Award, title: 'İlçe Bazlı Optimizasyon', desc: 'Çankaya, Keçiören, Yenimahalle, Mamak, Etimesgut, Sincan — her ilçeye özel sayfa ve GBP stratejisi.' },
]

const ilceler = ['Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut', 'Sincan', 'Altındağ', 'Gölbaşı', 'Pursaklar', 'Polatlı']

const faqs = [
  { q: 'Ankara\'da SEO hizmeti diğer şehirlerden farklı mı?', a: 'Ankara\'nın ekonomisi kamu kurumları, savunma sanayi, eğitim (birçok büyük üniversite) ve profesyonel hizmetler etrafında şekilleniyor. Bu, İstanbul\'daki gibi e-ticaret/tüketici odaklı değil, daha çok B2B ve kurumsal kimliğe dayalı bir SEO stratejisi gerektiriyor — içerik ve otorite sinyalleri buna göre kurgulanıyor.' },
  { q: 'Ankara\'nın farklı ilçeleri için ayrı SEO çalışması gerekiyor mu?', a: 'Evet, özellikle Çankaya (iş merkezi, kurumsal firmalar) ile Keçiören veya Mamak (daha yerel/perakende odaklı) farklı arama davranışına sahip. İşinizin hedef kitlesine göre öncelikli ilçeleri belirleyip stratejiyi ona göre kuruyoruz.' },
  { q: 'Ankara\'da SEO sonuçları ne kadar sürede görülür?', a: 'Google Business Profile ve harita sonuçları 2-4 haftada görünür olabilir. Organik sıralamalar genellikle 3-6 ayda belirginleşir — Ankara\'nın rekabet seviyesi İstanbul\'a göre biraz daha yönetilebilir, bu da orta vadede daha hızlı sonuç almayı mümkün kılıyor.' },
  { q: 'Ankara\'da hangi sektörler SEO\'dan en çok fayda görüyor?', a: 'Hukuk ve danışmanlık büroları, sağlık (diş hekimi, fizyoterapi), eğitim/kurs merkezleri (üniversite şehri olması nedeniyle), B2B tedarikçiler ve kamu ihale danışmanlığı Ankara\'da yüksek arama hacmine sahip. Kurumsal güven sinyalleri bu sektörlerde belirleyici.' },
  { q: 'Ankara SEO paketi ne kadara mal olur?', a: 'Sektöre ve ilçe kapsamına göre değişir. Kapsam: teknik audit, anahtar kelime araştırması, aylık içerik üretimi, GBP yönetimi, backlink stratejisi ve raporlama. Ücretsiz danışmanlıkta işletmenize özel fiyat sunuyoruz.' },
  { q: 'Fiziksel olarak Ankara\'da mısınız?', a: 'Hayır, merkezimiz Kocaeli\'de — tüm çalışmalar uzaktan yürütülüyor. İstanbul Barosu\'na kayıtlı avukatlar için yürüttüğümüz canlı projeler (portföyümüzde), uzaktan çalışma modelimizin gerçek sonuç verdiğinin kanıtı. Ankara\'daki işletmeler için de aynı süreç ve aynı kalite geçerli.' },
  { q: 'GEO (Yapay Zeka Optimizasyonu) Ankara işletmesi için gerekli mi?', a: 'Evet, özellikle B2B ve kurumsal hizmetlerde. ChatGPT veya Gemini\'ye "Ankara\'da güvenilir bir X önerir misin?" diye sorulduğunda önerilmek için yapılandırılmış içerik ve otorite sinyalleri gerekiyor — bu kanal Ankara\'nın kurumsal pazarında henüz doymamış durumda.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Ankara SEO Hizmeti',
      description: 'Ankara ve tüm ilçeleri için yerel SEO, teknik SEO, GEO ve AEO optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'Ankara' },
        { '@type': 'City', name: 'Çankaya' },
        { '@type': 'City', name: 'Keçiören' },
        { '@type': 'City', name: 'Yenimahalle' },
      ],
      url: 'https://ramsesdigital.com/ankara-seo',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Ankara SEO', item: 'https://ramsesdigital.com/ankara-seo' },
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

export default function AnkaraSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Ankara — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ankara SEO Ajansı
            <br />
            <span className="gradient-text">Kurumsal Görünürlük İnşa Edin</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Çankaya&apos;dan Keçiören&apos;e, Yenimahalle&apos;den Etimesgut&apos;a Ankara&apos;nın her ilçesinde yerel SEO. GEO ve AEO ile yapay zeka aramalarında da görünün.
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
            { value: '25', label: 'Ankara ilçesi — hedeflenebilir' },
            { value: '3-6 Ay', label: 'Organik sıralama için süre' },
            { value: 'Kurumsal', label: 'B2B & kamu odaklı ekonomi' },
            { value: 'Organik', label: 'Reklam bütçesi gerektirmez' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ankara İçin Kapsamlı SEO</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Başkentin kurumsal ekonomisine uygun, ilçe bazlı farklılaştırılmış strateji.</p>
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
            <h2 className="text-xl font-bold text-white mb-2">Uzaktan Çalışma Kanıtımız</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              İstanbul Barosu&apos;na kayıtlı Av. Furkan Arıkan için tamamen uzaktan yürüttüğümüz SEO ve web tasarım çalışması,
              fiziksel varlık olmadan da gerçek sonuç aldığımızın kanıtı. Aynı süreç Ankara işletmeleri için de geçerli.
              Canlı görün: <a href="https://furkanarikan.av.tr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">furkanarikan.av.tr</a>
            </p>
            <Link href="/portfolyo" className="text-blue-400 text-sm font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all">
              Tüm Portföyü Gör <ArrowRight size={13} />
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

      <ReviewsMarquee />

      <RelatedPages
        pages={[
          { label: 'Ankara Dijital Pazarlama', href: '/ankara-dijital-pazarlama' },
          { label: 'Ankara Web Tasarım', href: '/ankara-web-tasarim' },
          { label: 'Ankara Google Ads', href: '/ankara-google-ads' },
          { label: 'İstanbul SEO', href: '/istanbul-seo' },
          { label: 'SEO Ajansı (Türkiye Geneli)', href: '/seo-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp size={40} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Ankara&apos;da Google&apos;ın Zirvesine Çıkın</h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz SEO analiziyle başlayalım.</p>
          <CalendlyButton label="Ücretsiz SEO Analizi Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
