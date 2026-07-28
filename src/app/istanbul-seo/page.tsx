import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Search, ArrowRight, CheckCircle2, FileText, Link2, BarChart3, Zap, Award, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İstanbul SEO Ajansı — Ramses Dijital',
  description:
    'İstanbul\'da SEO hizmeti. Yerel SEO, teknik SEO, GEO ve AEO ile Google\'da üst sıraya çıkın. Kadıköy, Beşiktaş, Şişli, Bakırköy ve tüm İstanbul\'a uzaktan hizmet. Ücretsiz SEO analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/istanbul-seo' },
  openGraph: {
    title: 'İstanbul SEO Ajansı | Ramses Dijital',
    description: 'İstanbul işletmeleri için yerel SEO, teknik SEO ve GEO/AEO optimizasyonu.',
    url: 'https://ramsesdigital.com/istanbul-seo',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Search, title: 'İstanbul Yerel SEO', desc: '"Kadıköy + hizmetiniz", "Beşiktaş + hizmetiniz" gibi ilçe bazlı aramalarda Google harita paketine girin. 39 ilçeye özel anahtar kelime stratejisi.' },
  { icon: FileText, title: 'Teknik SEO & Core Web Vitals', desc: 'Site hızı, mobil uyum, indexlenebilirlik ve Core Web Vitals optimizasyonu — İstanbul\'un yoğun rekabetinde teknik fark belirleyici.' },
  { icon: Zap, title: 'GEO & AEO', desc: 'ChatGPT, Gemini ve Perplexity\'de "İstanbul\'da güvenilir X" aramasında önerilmek için entity-based, otorite odaklı içerik.' },
  { icon: Link2, title: 'Kurumsal Backlink İnşası', desc: 'İstanbul merkezli sektörel medya, ticaret odaları ve dizinlerden yüksek otoriteli link profili.' },
  { icon: BarChart3, title: 'Yüksek Hacimli İçerik Stratejisi', desc: 'İstanbul\'un arama hacmi Türkiye\'nin en yükseği — doğru içerik mimarisiyle bu hacmi organik trafiğe çevirin.' },
  { icon: Award, title: 'İlçe Bazlı Optimizasyon', desc: 'Kadıköy, Beşiktaş, Şişli, Bakırköy, Ataşehir, Üsküdar, Beylikdüzü — her ilçeye özel sayfa ve GBP stratejisi.' },
]

const ilceler = ['Kadıköy', 'Beşiktaş', 'Şişli', 'Bakırköy', 'Ataşehir', 'Üsküdar', 'Beylikdüzü', 'Maltepe', 'Kartal', 'Pendik']

const faqs = [
  { q: 'İstanbul\'da SEO hizmeti neden bu kadar rekabetçi?', a: 'İstanbul, Türkiye\'nin en yüksek arama hacmine ve en yoğun ajans rekabetine sahip pazarı. Hemen her sektörde onlarca köklü rakip zaten SEO\'ya yatırım yapıyor. Bu, tek kelimelik genel terimlerde (örn. "SEO ajansı") hızlı sonuç almayı zorlaştırır — ama ilçe bazlı ve niş odaklı stratejilerle hâlâ gerçek fırsatlar var.' },
  { q: 'İstanbul\'un 39 ilçesinin hepsi için mi çalışma yapılır?', a: 'Hayır, işletmenizin gerçek hizmet alanına göre önceliklendirme yapıyoruz. Bir hukuk bürosu için Bakırköy veya Kadıköy adliyesine yakınlık önemliyken, bir e-ticaret markası için ilçe fark etmeksizin genel İstanbul/Türkiye hedeflemesi daha mantıklı olabilir. Stratejiyi işinize göre kuruyoruz, şablon uygulamıyoruz.' },
  { q: 'İstanbul\'da SEO sonuçları ne kadar sürede görülür?', a: 'Google Business Profile ve harita sonuçları 2-4 haftada görünür olabilir. Organik web sitesi sıralamaları rekabetin yoğunluğuna göre 4-8 ay arasında belirginleşir — İstanbul\'daki rekabet Kocaeli\'ye göre daha uzun bir ufuk gerektirebilir, özellikle "İstanbul SEO ajansı" gibi genel terimlerde.' },
  { q: 'İstanbul\'da hangi sektörler SEO\'dan en çok fayda görüyor?', a: 'Hukuk (özellikle Avukatlık Kanunu nedeniyle reklam veremeyen büyük bürolar), finans ve danışmanlık, kurumsal B2B hizmetleri, e-ticaret ve sağlık sektörü İstanbul\'da yüksek arama hacmine ve yüksek müşteri değerine sahip. Rekabet yüksek olduğu için niş uzmanlık alanlarında (örn. "gayrimenkul hukuku Kadıköy") içerik üretmek daha hızlı sonuç verir.' },
  { q: 'İstanbul SEO paketi ne kadara mal olur?', a: 'İstanbul\'daki rekabet seviyesi nedeniyle paketler genellikle Kocaeli\'ye göre daha kapsamlı kurgulanır. Kapsam: teknik audit, anahtar kelime araştırması, aylık içerik üretimi, GBP yönetimi, backlink stratejisi ve raporlama. Ücretsiz danışmanlıkta net fiyat sunuyoruz.' },
  { q: 'Fiziksel olarak İstanbul\'da mısınız?', a: 'Hayır, merkezimiz Kocaeli\'de — ama gerçek İstanbul müşterilerimiz var. Bakırköy ve İstanbul Barosu\'na kayıtlı avukatlar için web tasarım ve SEO çalışması yürüttük (portföyümüzde canlı örnekleri var). Tüm süreç uzaktan yürütülüyor; Kadıköy\'den Beylikdüzü\'ne İstanbul\'un her ilçesinden müşterimiz olabilir.' },
  { q: 'Büyük İstanbul ajanslarıyla nasıl rekabet edebilirim?', a: 'Büyük ajansların çoğu şablon strateji uyguluyor ve küçük/orta ölçekli müşterilere düşük öncelik veriyor. Biz mühendislik disipliniyle çalışan, her müşteriye özel strateji kuran daha küçük bir ekibiz — bu da daha hızlı iletişim, daha esnek strateji ve şeffaf raporlama anlamına geliyor.' },
  { q: 'GEO (Yapay Zeka Optimizasyonu) İstanbul işletmesi için neden kritik?', a: 'İstanbul\'daki yoğun rekabet nedeniyle geleneksel Google SEO\'da üst sıraya çıkmak zaman alıyor. GEO, ChatGPT ve Gemini gibi araçlarda "İstanbul\'da güvenilir X önerir misin?" sorusuna cevap olarak çıkmayı hedefliyor — bu kanal henüz doymamış durumda, erken hareket edenler avantajlı.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'İstanbul SEO Hizmeti',
      description: 'İstanbul ve tüm ilçeleri için yerel SEO, teknik SEO, GEO ve AEO optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'İstanbul' },
        { '@type': 'City', name: 'Kadıköy' },
        { '@type': 'City', name: 'Beşiktaş' },
        { '@type': 'City', name: 'Şişli' },
        { '@type': 'City', name: 'Bakırköy' },
      ],
      url: 'https://ramsesdigital.com/istanbul-seo',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'İstanbul SEO', item: 'https://ramsesdigital.com/istanbul-seo' },
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

export default function IstanbulSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">İstanbul — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            İstanbul SEO Ajansı
            <br />
            <span className="gradient-text">Organik Trafiğinizi Büyütün</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Kadıköy&apos;den Beşiktaş&apos;a, Bakırköy&apos;den Ataşehir&apos;e İstanbul&apos;un her ilçesinde yerel SEO. GEO ve AEO ile yapay zeka aramalarında da görünün.
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
            { value: '39', label: 'İstanbul ilçesi — hedeflenebilir' },
            { value: '4-8 Ay', label: 'Organik sıralama için süre' },
            { value: 'En Yüksek', label: 'Türkiye\'deki arama hacmi' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">İstanbul İçin Kapsamlı SEO</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Türkiye&apos;nin en rekabetçi pazarında, ilçe bazlı farklılaştırılmış strateji.</p>
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
            <h2 className="text-xl font-bold text-white mb-2">Gerçek İstanbul Referansı</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              İstanbul Barosu&apos;na kayıtlı Av. Furkan Arıkan için tasarladığımız web sitesi ve yürüttüğümüz
              SEO çalışması, ceza, iş ve gayrimenkul hukuku alanlarında organik görünürlük sağladı.
              Canlı görün: <a href="https://furkanarikan.av.tr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">furkanarikan.av.tr</a>
            </p>
            <Link href="/portfolyo/furkan-arikan" className="text-blue-400 text-sm font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all">
              Vaka Çalışmasını İncele <ArrowRight size={13} />
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
          { label: 'İstanbul Dijital Pazarlama', href: '/istanbul-dijital-pazarlama' },
          { label: 'İstanbul Web Tasarım', href: '/istanbul-web-tasarim' },
          { label: 'İstanbul Google Ads', href: '/istanbul-google-ads' },
          { label: 'Kocaeli SEO', href: '/kocaeli-seo' },
          { label: 'SEO Ajansı (Türkiye Geneli)', href: '/seo-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp size={40} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">İstanbul&apos;da Google&apos;ın Zirvesine Çıkın</h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz SEO analiziyle başlayalım.</p>
          <CalendlyButton label="Ücretsiz SEO Analizi Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
