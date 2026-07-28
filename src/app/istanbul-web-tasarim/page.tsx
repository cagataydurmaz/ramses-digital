import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Globe, ArrowRight, CheckCircle2, Zap, Smartphone, Search, ShieldCheck, BarChart3, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İstanbul Web Tasarım Ajansı — Ramses Dijital',
  description:
    'İstanbul\'da profesyonel web tasarım hizmeti. Kadıköy, Beşiktaş, Şişli, Bakırköy ve tüm İstanbul ilçeleri için SEO uyumlu, mobil öncelikli kurumsal web siteleri. Ücretsiz teklif alın.',
  alternates: { canonical: 'https://ramsesdigital.com/istanbul-web-tasarim' },
  openGraph: {
    title: 'İstanbul Web Tasarım | Ramses Dijital',
    description: 'İstanbul işletmeleri için dönüşüm odaklı, SEO hazır web siteleri.',
    url: 'https://ramsesdigital.com/istanbul-web-tasarim',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Smartphone, title: 'Mobil Öncelikli', desc: 'İstanbul\'daki kullanıcıların büyük çoğunluğu mobil cihazdan geliyor. Tam responsive, hızlı ve parmak dostu tasarım.' },
  { icon: Search, title: 'SEO Hazır Altyapı', desc: 'Next.js ile oluşturulan siteler İstanbul\'un yoğun rekabetli yerel SEO ortamına hazır başlar. Schema markup, canonical, sitemap otomatik.' },
  { icon: Zap, title: 'Yüksek Performans', desc: 'Lighthouse 90+ puan. İstanbul\'daki rakiplerinizden hızlı yüklenin — Google bu metriği sıralamada kullanıyor.' },
  { icon: Palette, title: 'Kurumsal Tasarım', desc: 'İstanbul\'un kurumsal ve profesyonel hizmet standardına uygun, güven veren, premium görünümlü tasarım.' },
  { icon: BarChart3, title: 'Dönüşüm Odaklı', desc: 'Randevu formu, WhatsApp butonu, Google Maps entegrasyonu — İstanbul müşterisi kolayca ulaşsın.' },
  { icon: ShieldCheck, title: 'Güvenli & Bakımlı', desc: 'SSL, güvenlik güncellemeleri, yedekleme ve teknik destek. Rekabetçi İstanbul pazarında müşteri kaçırmayın.' },
]

const ilceler = ['Kadıköy', 'Beşiktaş', 'Şişli', 'Bakırköy', 'Ataşehir', 'Üsküdar', 'Beylikdüzü', 'Maltepe']

const faqs = [
  { q: 'İstanbul\'da web sitesi yaptırmak ne kadar sürer?', a: 'Başlangıç kurumsal siteler 2-3 haftada teslim edilir. Orta ölçekli projeler 4-6 hafta, e-ticaret ve platform projeleri 8-12 hafta alır. İstanbul\'daki yoğun rekabet nedeniyle hızlı lansmanı öneriyoruz — her geçen hafta rakibiniz sizdeki müşteriyi alıyor olabilir.' },
  { q: 'İstanbul işletmem için web sitesinde yerel SEO nasıl kurulur?', a: 'İlçe bazlı anahtar kelimeler, Google Business Profile entegrasyonu, NAP (isim-adres-telefon) tutarlılığı, yerel schema markup ve "Kadıköy\'de X hizmeti" gibi sayfalar oluşturmak temel adımlardır. İstanbul\'un 39 ilçesi arasından işinize en uygun olanlara öncelik veriyoruz.' },
  { q: 'İstanbul\'daki kurumsal ve profesyonel hizmet firmaları için web sitesi farklı mı?', a: 'Evet. Hukuk büroları, danışmanlık firmaları ve finans sektörü için güven inşa eden, kurumsal kimliğe uygun, içerik ağırlıklı bir yaklaşım gerekiyor — reklam değil, otorite ve profesyonellik ön planda. Portföyümüzdeki İstanbul Barosu avukatları için tam olarak bu yaklaşımı uyguladık.' },
  { q: 'Mevcut sitem var, yenileme mi yoksa sıfırdan mı yapmalıyım?', a: 'Mevcut sitenizin Google\'daki birikimi (backlink, sıralama) varsa taşıma yaparız — SEO değeri korunur. Yavaş, eski altyapılı veya mobil uyumsuz siteler için sıfırdan Next.js geçişi İstanbul\'un rekabetçi ortamında çok daha etkili. Ücretsiz danışmanlıkta sitenizi inceleyip öneri sunarız.' },
  { q: 'İstanbul\'da web sitesi fiyatları ne kadar?', a: 'Sayfa sayısı, özel özellikler ve sektöre göre kapsam değişir. Domain ve hosting ayrıca ücretlendirilir. İstanbul\'daki büyük ajanslara göre daha esnek ve şeffaf fiyatlandırıyoruz — ücretsiz danışmanlıkta net fiyat alırsınız.' },
  { q: 'Fiziksel olarak İstanbul\'da ofisiniz var mı?', a: 'Hayır, merkezimiz Kocaeli\'de — ama gerçek İstanbul müşterilerimiz var: Bakırköy ve İstanbul Barosu\'na kayıtlı avukatlar için web tasarım yürüttük. Tüm süreç uzaktan yönetiliyor; keşif görüşmesi, tasarım onayı ve teslimat Google Meet/Zoom üzerinden yapılır.' },
  { q: 'Web sitem yapıldıktan sonra kim günceller?', a: 'İçerik güncellemeleri için basit panel kuruyoruz. Blog, ürün ve haber güncellemelerini kendiniz yapabilirsiniz. Tasarım ve teknik değişiklikler için aylık bakım paketi sunuyoruz. Projeyi teslim edip kaybolan bir ajans değiliz.' },
  { q: 'İstanbul\'daki büyük ajanslara kıyasla neden sizi tercih etmeliyim?', a: 'Büyük ajanslarda küçük/orta ölçekli projeler genellikle düşük öncelik alır, iletişim yavaşlar. Biz her projeye mühendislik disipliniyle, doğrudan kurucu ortak seviyesinde ilgi gösteriyoruz — daha hızlı iletişim, daha esnek süreç, aynı kalite.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'İstanbul Web Tasarım Hizmeti',
      description: 'İstanbul\'un tüm ilçeleri için profesyonel, SEO uyumlu ve dönüşüm odaklı web sitesi tasarım ve geliştirme.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: ilceler.map((name) => ({ '@type': 'City', name })),
      url: 'https://ramsesdigital.com/istanbul-web-tasarim',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'İstanbul Web Tasarım', item: 'https://ramsesdigital.com/istanbul-web-tasarim' },
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

export default function IstanbulWebTasarimPage() {
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
            İstanbul Web Tasarım
            <br />
            <span className="gradient-text">Hızlı, Modern, SEO Hazır</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            İstanbul işletmeniz için hızlı, mobil uyumlu ve yerel SEO hazır web siteleri. Kadıköy&apos;den Beşiktaş&apos;a tüm ilçelere uzaktan hizmet.
          </p>
          <p className="text-zinc-500 text-sm mb-10">{ilceler.join(' · ')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
            <Link href="/portfolyo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Örnek Çalışmalar <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">İstanbul İşletmeniz İçin Neden Biz?</h2>
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
            <CheckCircle2 size={24} className="text-blue-400 mb-3" />
            <h2 className="text-xl font-bold text-white mb-2">İstanbul Referanslarımız Canlı</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              İstanbul Barosu&apos;na kayıtlı Av. Furkan Arıkan ve Bakırköy&apos;de Av. Mert Anıl Güler için tasarladığımız
              kurumsal web siteleri hâlâ yayında. Hukuk bürosu, e-ticaret ve platform projelerimizi portföyden inceleyebilirsiniz.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['furkanarikan.av.tr', 'mertanilguler.av.tr'].map((url) => (
                <span key={url} className="flex items-center gap-1.5 text-xs bg-white/[0.04] border border-white/[0.06] text-zinc-400 rounded-full px-3 py-1">
                  <Globe size={10} className="text-blue-400" /> {url}
                </span>
              ))}
            </div>
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

      <RelatedPages
        pages={[
          { label: 'İstanbul Dijital Pazarlama', href: '/istanbul-dijital-pazarlama' },
          { label: 'İstanbul SEO', href: '/istanbul-seo' },
          { label: 'İstanbul Google Ads', href: '/istanbul-google-ads' },
          { label: 'Kocaeli Web Tasarım', href: '/kocaeli-web-tasarim' },
          { label: 'Web Tasarım Ajansı (Türkiye Geneli)', href: '/web-tasarim-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">İstanbul&apos;da Web Siteniz Hazır Olsun</h2>
          <p className="text-zinc-400 text-lg mb-8">30 dakikalık ücretsiz görüşmede ihtiyaçlarınızı netleştirelim.</p>
          <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
