import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Search, ArrowRight, CheckCircle2, FileText, Link2, BarChart3, Zap, Award, TrendingUp, Globe2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Antalya SEO Ajansı — Ramses Dijital',
  description:
    'Antalya\'da SEO hizmeti. Otelcilik, gayrimenkul ve turizm sektörüne özel çok dilli SEO, yerel SEO ve GEO/AEO. Muratpaşa, Konyaaltı, Alanya, Manavgat ve tüm Antalya\'ya uzaktan hizmet. Ücretsiz SEO analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/antalya-seo' },
  openGraph: {
    title: 'Antalya SEO Ajansı | Ramses Dijital',
    description: 'Antalya işletmeleri için turizm ve gayrimenkul odaklı yerel SEO, teknik SEO ve GEO/AEO optimizasyonu.',
    url: 'https://ramsesdigital.com/antalya-seo',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Globe2, title: 'Çok Dilli Turizm SEO\'su', desc: 'Butik otel, tatil köyü ve tur operatörleri için İngilizce, Rusça ve Almanca hedefli sayfa yapısı — sezonluk arama hacmini organik trafiğe çevirin.' },
  { icon: Search, title: 'Antalya Yerel SEO', desc: '"Muratpaşa + hizmetiniz", "Alanya + hizmetiniz" gibi ilçe bazlı aramalarda Google harita paketine girin. Turizm sezonuna göre kampanyalı içerik takvimi.' },
  { icon: FileText, title: 'Gayrimenkul SEO İçeriği', desc: 'Yabancıya gayrimenkul satışı yapan ofisler için İngilizce/Rusça anahtar kelime araştırması ve emlak ilan sayfası SEO\'su.' },
  { icon: Zap, title: 'GEO & AEO', desc: 'ChatGPT, Gemini ve Perplexity\'de "Antalya\'da güvenilir X" veya "best real estate agency in Antalya" aramasında önerilmek için entity-based içerik.' },
  { icon: Link2, title: 'Sektörel Backlink İnşası', desc: 'Turizm dizinleri, seyahat blogları ve yerel ticaret odalarından yüksek otoriteli, sektöre özel link profili.' },
  { icon: Award, title: 'İlçe Bazlı Optimizasyon', desc: 'Muratpaşa, Konyaaltı, Kepez, Alanya, Manavgat, Serik, Kaş, Side — her ilçeye özel sayfa ve Google Business Profile stratejisi.' },
]

const ilceler = ['Muratpaşa', 'Konyaaltı', 'Kepez', 'Alanya', 'Manavgat', 'Serik', 'Döşemealtı', 'Aksu', 'Kaş', 'Side']

const faqs = [
  { q: 'Antalya\'da SEO diğer şehirlerden neden farklı kurgulanmalı?', a: 'Antalya\'nın ekonomisi büyük ölçüde turizm, gayrimenkul ve tarım ihracatına dayanıyor. Bir otel işletmesinin SEO ihtiyacı sezonluk ve çok dilli iken, yabancıya gayrimenkul satan bir ofisin ihtiyacı İngilizce/Rusça anahtar kelime odaklı. Genel "SEO paketi" yerine sektöre göre kurgulanmış strateji uyguluyoruz.' },
  { q: 'Otel ve tatil köyü işletmeleri için çok dilli SEO nasıl işliyor?', a: 'Türkçe içeriğin yanına İngilizce, Rusça ve Almanca sayfa varyantları ekliyoruz — hreflang etiketleriyle doğru dil/ülke kombinasyonunu Google\'a bildiriyoruz. Rezervasyon sezonu öncesi (kış aylarında) içerik ve backlink çalışmasını yoğunlaştırıyoruz ki yaz sezonunda organik trafik hazır olsun.' },
  { q: 'Antalya\'da gayrimenkul sektörü için SEO ne kadar sürede sonuç verir?', a: 'Google Business Profile ve harita sonuçları 2-4 haftada görünür olabilir. Yabancı alıcı hedefli İngilizce/Rusça sayfalar için organik sıralama genellikle 4-6 ay içinde belirginleşir — rekabet düzeyi ilçeye ve fiyat segmentine göre değişir.' },
  { q: 'Antalya\'da hangi sektörler SEO\'dan en çok fayda görüyor?', a: 'Otelcilik ve tatil köyü işletmeciliği, tur operatörleri ve transfer/rent a car firmaları, yabancıya gayrimenkul satışı yapan ofisler, seracılık/tarım ihracatı yapan işletmeler (özellikle Kumluca ve Finike bölgesi), ayrıca hukuk bürosu, diş hekimi/diş kliniği, psikolog/terapist ve güzellik merkezi gibi yerel hizmet sektörleri.' },
  { q: 'Antalya SEO çalışmasının kapsamı ve fiyatı nasıl belirleniyor?', a: 'Kapsam sektöre göre değişir: turizm işletmeleri için çok dilli içerik ve sezonluk planlama, gayrimenkul için yabancı dil hedefleme, yerel hizmet sektörleri için ilçe bazlı içerik ağırlıklı olur. Net fiyat ve kapsamı ücretsiz danışmanlıkta işletmenize özel netleştiriyoruz.' },
  { q: 'Fiziksel olarak Antalya\'da ofisiniz var mı?', a: 'Hayır, merkezimiz Kocaeli\'de — Antalya\'ya tamamen uzaktan hizmet veriyoruz. Keşif görüşmesi, strateji sunumu ve aylık raporlama Google Meet/Zoom üzerinden yapılıyor; bu süreç fiziksel mesafeyi ortadan kaldırıyor.' },
  { q: 'Sera sebzeciliği ve tarım ihracatı yapan işletmeler için SEO anlamlı mı?', a: 'Evet, özellikle B2B alıcı bulma ve kurumsal görünürlük açısından. İngilizce ürün katalog sayfaları, ihracat sertifikaları ve üretim kapasitesi gibi bilgileri içeren kurumsal içerik, yurt dışından alıcıların ilk araştırma aşamasında bulunmanızı sağlıyor.' },
  { q: 'GEO (Yapay Zeka Optimizasyonu) Antalya turizm işletmesi için neden önemli?', a: 'Yabancı turistlerin bir kısmı artık ChatGPT veya Gemini\'ye "Antalya\'da güvenilir tur operatörü" gibi sorular soruyor. Bu kanal henüz doymamış durumda — erken hareket eden butik otel ve tur operatörleri rakiplerinden önce bu aramalarda önerilme şansı yakalıyor.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Antalya SEO Hizmeti',
      description: 'Antalya turizm, gayrimenkul ve tarım sektörleri için çok dilli SEO, yerel SEO, teknik SEO ve GEO/AEO optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'Antalya' },
        { '@type': 'City', name: 'Muratpaşa' },
        { '@type': 'City', name: 'Konyaaltı' },
        { '@type': 'City', name: 'Alanya' },
        { '@type': 'City', name: 'Manavgat' },
      ],
      url: 'https://ramsesdigital.com/antalya-seo',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Antalya SEO', item: 'https://ramsesdigital.com/antalya-seo' },
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

export default function AntalyaSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Antalya — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Antalya SEO Ajansı
            <br />
            <span className="gradient-text">Turizm ve Gayrimenkulde Görünür Olun</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Butik otel işletmeniz için çok dilli SEO, gayrimenkul ofisiniz için yabancı alıcı hedefli içerik. Muratpaşa&apos;dan Alanya&apos;ya tüm Antalya&apos;ya uzaktan hizmet.
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
            { value: '10+', label: 'Antalya ilçesi — hedeflenebilir' },
            { value: '3', label: 'Dil desteği — TR / EN / RU' },
            { value: 'Sezonluk', label: 'Turizm odaklı içerik takvimi' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Antalya İçin Sektöre Özel SEO</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Turizm, gayrimenkul ve tarım ihracatının ağırlıklı olduğu bir pazarda, jenerik değil sektöre özel strateji.</p>
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
            <h2 className="text-xl font-bold text-white mb-2">Portföyümüzü İnceleyin</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Antalya&apos;da henüz canlı bir referansımız yok, ama Türkiye genelinde ziyaret edilebilir, gerçek
              müşteri çalışmalarımızı portföyümüzde görebilirsiniz — hukuk bürosundan e-ticarete, platform
              projelerinden yerel hizmet işletmelerine kadar.
            </p>
            <Link href="/portfolyo" className="text-blue-400 text-sm font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all">
              Portföyü İncele <ArrowRight size={13} />
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
          { label: 'Antalya Dijital Pazarlama', href: '/antalya-dijital-pazarlama' },
          { label: 'Antalya Web Tasarım', href: '/antalya-web-tasarim' },
          { label: 'Antalya Google Ads', href: '/antalya-google-ads' },
          { label: 'Antalya Reklam Ajansı', href: '/antalya-reklam-ajansi' },
          { label: 'SEO Ajansı (Türkiye Geneli)', href: '/seo-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp size={40} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Antalya&apos;da Google&apos;ın Zirvesine Çıkın</h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz SEO analiziyle başlayalım.</p>
          <CalendlyButton label="Ücretsiz SEO Analizi Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
