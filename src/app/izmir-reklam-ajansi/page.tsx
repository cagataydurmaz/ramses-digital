import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, CheckCircle2, ArrowRight, Megaphone, Globe, BarChart3, Search, Mail, Zap, ShieldCheck, Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İzmir Reklam Ajansı — Ramses Dijital',
  description:
    'İzmir\'in dijital reklam ajansı. Google Ads, SEO, sosyal medya reklamları ve pazarlama otomasyonu. Konak, Karşıyaka, Bornova ve tüm İzmir\'e uzaktan hizmet. Ücretsiz danışmanlık.',
  alternates: { canonical: 'https://ramsesdigital.com/izmir-reklam-ajansi' },
  openGraph: {
    title: 'İzmir Reklam Ajansı | Ramses Dijital',
    description: 'İzmir işletmelerini büyüten dijital reklam ajansı. Google Ads, SEO ve pazarlama otomasyonu.',
    url: 'https://ramsesdigital.com/izmir-reklam-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İzmir Reklam Ajansı — Ramses Dijital',
    description: 'İzmir işletmeleri için Google Ads, SEO ve dijital reklam yönetimi.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  { icon: Megaphone, title: 'Google Ads Yönetimi', desc: 'İzmir\'de "hizmetiniz + ilçe" aramalarında tam doğru anda karşılarına çıkın. Turizm sezonunda bütçe optimizasyonu dahil.', href: '/hizmetler/google-ads-kocaeli' },
  { icon: Search, title: 'SEO & Yerel SEO', desc: 'Konak, Karşıyaka, Bornova gibi ilçe bazlı aramalarda Google Haritalar ve organik sonuçlarda üst sıralarda yer alın.', href: '/izmir-seo' },
  { icon: Globe, title: 'Dönüşüm Odaklı Web Sitesi', desc: 'Reklama gelen ziyaretçiyi kaçırmayan, hızlı ve mobil uyumlu iniş sayfaları.', href: '/izmir-web-tasarim' },
  { icon: Zap, title: 'Pazarlama Otomasyonu', desc: 'n8n ile lead\'leri otomatik takip edin, hiçbir talebi kaçırmayın. Sezonluk kampanyalarda özellikle değerli.', href: '/hizmetler/n8n-otomasyon' },
  { icon: Mail, title: 'E-posta Pazarlama', desc: 'Reklamdan gelen potansiyel müşteriyi satışa çeviren otomatik e-posta serileri.', href: '/hizmetler/eposta-otomasyon' },
  { icon: BarChart3, title: 'Veri Analizi & Raporlama', desc: 'GA4 ve Looker Studio ile hangi reklamın, hangi ilçede işe yaradığını net görün.', href: '/hizmetler/veri-analizi' },
]

const whyUs = [
  { icon: Compass, title: 'İzmir Ekonomisini Anlıyoruz', desc: 'İhracat, turizm, tarım ürünleri ve lojistik ağırlıklı bir ekonomi — reklam stratejimiz genel şablon değil, bu dinamiklere göre kurulur.' },
  { icon: ShieldCheck, title: 'Şeffaf Raporlama', desc: 'Reklam harcamanızın nereye gittiğini, hangi tıklamanın müşteriye dönüştüğünü her ay net şekilde görürsünüz.' },
  { icon: BarChart3, title: 'Dönüşüm Odaklı Yaklaşım', desc: 'Gösterim veya tıklama sayısı değil, arama/rezervasyon/satış gibi somut sonuçlar hedeflenir.' },
  { icon: MapPin, title: 'Dürüst Uzaktan Hizmet Modeli', desc: 'İzmir\'de fiziksel ofisimiz yok — bunu saklamıyoruz. Türkiye genelindeki müşterilerimize aynı süreçle, tamamen uzaktan hizmet veriyoruz.' },
]

const sectors = [
  'Hukuk Bürosu', 'Psikolog & Terapist', 'Diş Hekimi & Diş Kliniği', 'Güzellik Merkezi & Estetik',
  'Turizm & Konaklama', 'Restoran & Kafe', 'E-ticaret', 'İhracat & Dış Ticaret',
]

const faqs = [
  { q: 'İzmir\'de reklam ajansı seçerken nelere dikkat etmeliyim?', a: 'Şeffaf raporlama yapan, somut sonuçları gösterebilen ve reklam bütçenizin nereye gittiğini net anlatabilen bir ajans seçin. Canlı referanslara bakmak, ajansın gerçekten sonuç üretip üretmediğini anlamanın en iyi yoludur.' },
  { q: 'İzmir\'de Google Ads reklamı vermenin maliyeti nedir?', a: 'Reklam bütçesi tamamen sektörünüze, hedef kitlenize ve rekabet yoğunluğuna göre değişir. Turizm ve hizmet sektöründe tıklama maliyetleri farklılık gösterir. Ücretsiz danışmanlıkta işletmenize özel bir bütçe planı çıkarıyoruz.' },
  { q: 'İzmir\'in hangi ilçelerine hizmet veriyorsunuz?', a: 'Konak, Karşıyaka, Bornova, Buca, Çiğli, Bayraklı, Balçova, Gaziemir, Menemen, Urla dahil İzmir\'in tüm ilçelerine hizmet veriyoruz. Reklam hedeflemesi ilçe bazlı yapılabilir, böylece bütçenizi doğru bölgeye yönlendirirsiniz.' },
  { q: 'İzmir\'de hangi sektörlere reklam hizmeti veriyorsunuz?', a: 'Hukuk bürosu, psikolog/terapist, diş hekimi ve diş klinikleri, güzellik merkezi/estetik, turizm ve konaklama, restoran & kafe, e-ticaret ve ihracat/dış ticaret sektörlerinde aktif çalışmalarımız var. İzmir\'in ihracat ve turizm ağırlıklı yapısına özellikle hakimiz.' },
  { q: 'Reklam kampanyamın sonuçlarını ne zaman görmeye başlarım?', a: 'Google Ads genellikle ilk 1-2 hafta içinde trafik ve talep getirmeye başlar. İlk 4-6 hafta veri toplama ve optimizasyon dönemidir; bu süreçte kampanya sürekli iyileştirilir. Turizm sektöründe sezon öncesi başlamak kritik önem taşır.' },
  { q: 'İzmir\'de fiziksel ofisiniz var mı?', a: 'Hayır. Merkezimiz Kocaeli\'dedir ve İzmir\'e tamamen uzaktan hizmet veriyoruz. Toplantılar Google Meet/Zoom üzerinden yapılır, raporlar dijital olarak paylaşılır. Bunu saklamıyoruz çünkü uzaktan çalışma modelimiz Türkiye genelinde gerçek sonuçlar üretiyor.' },
  { q: 'Canlı referanslarınızı nereden görebilirim?', a: 'İzmir\'de henüz canlı bir referansımız bulunmuyor ancak Türkiye genelinde farklı sektörlerden gerçek, aktif müşterilerimiz var. Portföy sayfamızdan tüm projelerimizi ve canlı sitelerimizi inceleyebilirsiniz.' },
  { q: 'Reklam yönetimi için minimum sözleşme süresi var mı?', a: 'Google Ads için anlamlı verinin toplanması ve optimizasyonun oturması adına minimum 3 ay öneriyoruz. Sezonluk kampanyalar için daha kısa süreli anlaşmalar da değerlendirilebilir — ihtiyacınıza göre esnek çözüm sunuyoruz.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://ramsesdigital.com/#business',
      name: 'Ramses Dijital',
      description: 'İzmir\'in dijital reklam ajansı. Google Ads, SEO ve pazarlama otomasyonu.',
      url: 'https://ramsesdigital.com',
      areaServed: [
        { '@type': 'City', name: 'İzmir' },
        { '@type': 'City', name: 'Konak' },
        { '@type': 'City', name: 'Karşıyaka' },
        { '@type': 'City', name: 'Bornova' },
        { '@type': 'City', name: 'Buca' },
        { '@type': 'City', name: 'Çiğli' },
        { '@type': 'City', name: 'Bayraklı' },
        { '@type': 'City', name: 'Urla' },
      ],
      telephone: '+905355601936',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'İzmit',
        addressRegion: 'Kocaeli',
        addressCountry: 'TR',
      },
      knowsAbout: ['Google Ads', 'SEO', 'Dijital Reklam', 'Pazarlama Otomasyonu', 'E-posta Pazarlama'],
      sameAs: ['https://ramsesdigital.com'],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'İzmir Reklam Ajansı', item: 'https://ramsesdigital.com/izmir-reklam-ajansi' },
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

export default function IzmirReklamAjansiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">İzmir — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            İzmir&apos;in Dijital
            <br />
            <span className="gradient-text">Reklam Ajansı</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Google Ads, SEO ve pazarlama otomasyonuyla İzmir işletmelerini dijitalde büyütüyoruz. Ege&apos;nin ihracat, turizm ve tarım ağırlıklı ekonomisine uygun, ölçülebilir kampanyalar.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            Konak · Karşıyaka · Bornova · Buca · Çiğli · Bayraklı · Balçova · Gaziemir · Menemen · Urla
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Danışmanlık Al" variant="primary" />
            <Link href="/portfolyo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Portföyümüzü İnceleyin <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10', label: 'İzmir İlçesi' },
            { value: 'İhracat', label: '& Turizm Odaklı Strateji' },
            { value: '6+', label: 'Hizmet Kategorisi' },
            { value: 'Uzaktan', label: 'Tam Şeffaf Süreç' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
              <p className="text-3xl font-bold text-white mb-1">{value}</p>
              <p className="text-zinc-500 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              İzmir İşletmeniz İçin Reklam & Pazarlama Hizmetleri
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Tek çatı altında her ihtiyacınız — parçaları bir araya getiren strateji bizde.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-6 transition-all hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3">{desc}</p>
                <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Detaylı İncele <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Neden İzmir&apos;deki İşletmeler Bizi Seçmeli?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">İzmir&apos;de Hizmet Verdiğimiz Sektörler</h2>
          <p className="text-zinc-500 text-sm mb-8">Her sektörün reklam dinamikleri farklı — uzmanlık önemli.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <span key={sector} className="bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-sm rounded-full px-4 py-2">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Honest proof / portfolio redirect */}
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8 text-center">
            <CheckCircle2 size={28} className="text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Dürüst Olalım: İzmir&apos;de Henüz Canlı Referansımız Yok</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xl mx-auto">
              Sahte müşteri veya uydurma vaka çalışması sunmuyoruz. Ancak Türkiye genelinde farklı sektörlerden
              gerçek, aktif müşterilerimiz var — hepsi ziyaret edilebilir, canlı sitelerdir. Aynı süreç ve kaliteyi
              İzmir işletmeleri için de uyguluyoruz.
            </p>
            <Link href="/portfolyo" className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:text-blue-300 text-sm font-medium rounded-full px-5 py-2.5 transition-all">
              Portföyümüzü İnceleyin <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Sık Sorulan Sorular
          </h2>
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
          { label: 'İzmir SEO', href: '/izmir-seo' },
          { label: 'İzmir Web Tasarım', href: '/izmir-web-tasarim' },
          { label: 'İzmir Google Ads', href: '/izmir-google-ads' },
          { label: 'İzmir Dijital Pazarlama', href: '/izmir-dijital-pazarlama' },
          { label: 'İzmir Yazılım Ajansı', href: '/izmir-yazilim-ajansi' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            İzmir&apos;de Dijitalde Öne Çıkmaya Hazır mısınız?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            30 dakikalık ücretsiz danışmanlık seansında işletmenize özel yol haritası çıkaralım.
          </p>
          <CalendlyButton label="Ücretsiz Danışmanlık Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
