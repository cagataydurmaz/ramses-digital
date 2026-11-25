import type { Metadata } from 'next'
import BolgeMenusu from '@/components/BolgeMenusu'
import SiziArayalimFormu from '@/components/SiziArayalimFormu'
import ProjeGalerisi from '@/components/ProjeGalerisi'
import Link from 'next/link'
import CityServiceSections, { cityServiceFaqs } from '@/components/CityServiceSections'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Globe, ArrowRight, CheckCircle2, Zap, Smartphone, Search, ShieldCheck, BarChart3, Languages } from 'lucide-react'
import HeroGuvenSatiri from '@/components/HeroGuvenSatiri'
import SiteKaydirmaTelefon from '@/components/telefon/SiteKaydirmaTelefon'

export const metadata: Metadata = {
  title: 'Antalya Web Tasarım Ajansı — Ramses Dijital',
  description:
    'Antalya\'da web tasarım ve internet sitesi yapımı. Otel, tur operatörü, gayrimenkul ofisi ve klinikler için çok dilli, mobil öncelikli, SEO uyumlu web siteleri.',
  alternates: { canonical: 'https://ramsesdigital.com/antalya-web-tasarim' },
  openGraph: {
    title: 'Antalya Web Tasarım | Ramses Dijital',
    description: 'Antalya işletmeleri için dönüşüm odaklı, çok dilli, SEO hazır web siteleri.',
    url: 'https://ramsesdigital.com/antalya-web-tasarim',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Languages, title: 'Çok Dilli Site Altyapısı', desc: 'Otel, tatil köyü ve gayrimenkul ofisleri için Türkçe/İngilizce/Rusça dil seçenekli, hreflang uyumlu site mimarisi.' },
  { icon: Smartphone, title: 'Mobil Öncelikli Tasarım', desc: 'Turistlerin büyük çoğunluğu rezervasyon ve iletişim işlemlerini mobilden yapıyor. Tam responsive, hızlı ve parmak dostu tasarım.' },
  { icon: Search, title: 'SEO Hazır Altyapı', desc: 'Next.js ile oluşturulan siteler Antalya\'nın turizm sezonuna göre değişen rekabetli SEO ortamına hazır başlar. Schema markup, canonical, sitemap otomatik.' },
  { icon: Zap, title: 'Yüksek Performans', desc: 'Lighthouse 90+ puan. Sezon yoğunluğunda bile hızlı yüklenen site, rezervasyon kaybını önler.' },
  { icon: BarChart3, title: 'Dönüşüm Odaklı Tasarım', desc: 'Rezervasyon formu, WhatsApp butonu, Google Maps entegrasyonu, çoklu para birimi gösterimi — ziyaretçi kolayca iletişime geçsin.' },
  { icon: ShieldCheck, title: 'Güvenli & Bakımlı', desc: 'SSL, güvenlik güncellemeleri, yedekleme ve teknik destek. Sezon ortasında site çökmesi gibi bir risk almayın.' },
]

const ilceler = ['Muratpaşa', 'Konyaaltı', 'Kepez', 'Alanya', 'Manavgat', 'Serik', 'Döşemealtı', 'Kaş']

const faqs = [
  { q: 'Antalya\'da otel veya tatil köyü için web sitesi ne kadar sürede teslim edilir?', a: 'Tek dilli kurumsal tanıtım siteleri 2-3 haftada teslim edilir. Çok dilli, rezervasyon formu ve galeri içeren otel/tatil köyü siteleri 4-6 hafta, oda bazlı rezervasyon sistemi entegre platformlar 8-12 hafta alır. Sezon başlamadan önce yayına almak için erken planlama öneriyoruz.' },
  { q: 'Gayrimenkul ofisleri için özel bir site yapısı sunuyor musunuz?', a: 'Evet. Yabancı alıcıya (Rus, Alman, Orta Doğulu) yönelik gayrimenkul ofisleri için çok dilli ilan sayfaları, filtre altyapısı, WhatsApp üzerinden hızlı iletişim ve bölge bazlı SEO odaklı sayfa mimarisi kuruyoruz.' },
  { q: 'Sera sebzeciliği veya tarım ihracatı yapan işletmeler için web sitesi nasıl farklılaşır?', a: 'Bu işletmeler için kurumsal güven inşa eden, ürün kataloğu, üretim kapasitesi ve ihracat sertifikaları gibi bilgileri öne çıkaran, çoğunlukla İngilizce ağırlıklı B2B odaklı bir tasarım yaklaşımı uyguluyoruz.' },
  { q: 'Antalya\'daki hukuk bürosu, diş kliniği veya güzellik merkezi gibi yerel işletmeler için de web tasarım yapıyor musunuz?', a: 'Evet. Turizm ve gayrimenkul dışında hukuk bürosu, psikolog/terapist, diş hekimi/diş kliniği ve güzellik merkezi gibi yerel hizmet sektörleri için de güven odaklı, randevu formu entegre kurumsal siteler tasarlıyoruz.' },
  ...cityServiceFaqs('antalya', 'web'),
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Antalya Web Tasarım Hizmeti',
      description: 'Antalya\'nın tüm ilçeleri için profesyonel, çok dilli, SEO uyumlu ve dönüşüm odaklı web sitesi tasarım ve geliştirme.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: ilceler.map((name) => ({ '@type': 'City', name })),
      url: 'https://ramsesdigital.com/antalya-web-tasarim',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Antalya Web Tasarım', item: 'https://ramsesdigital.com/antalya-web-tasarim' },
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

export default function AntalyaWebTasarimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full pointer-events-none" />
        <div data-hero-bolunmus className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Antalya — Tüm İlçeler</span>
          </div>
          <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Antalya Web Tasarım
            <br />
            <span className="gradient-text">Çok Dilli, Hızlı, SEO Hazır</span>
          </h1>
          <p className="line-clamp-3 sm:line-clamp-none text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-4 leading-relaxed">
            Otel ve tatil köyü işletmeniz için çok dilli site, gayrimenkul ofisiniz için yabancı alıcı odaklı tasarım. Muratpaşa&apos;dan Alanya&apos;ya tüm ilçelere uzaktan hizmet.
          </p>
          <div className="mb-10"><BolgeMenusu liste={ilceler} /></div>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
            <Link href="/portfolyo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Örnek Çalışmalar <ArrowRight size={14} />
            </Link>
          </div>
          <HeroGuvenSatiri />
          </div>
          <div className="mx-auto w-full max-w-[300px] lg:max-w-none">
            <SiteKaydirmaTelefon />
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Antalya İşletmeniz İçin Neden Biz?</h2>
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

      <section className="py-10 md:py-14 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <CheckCircle2 size={24} className="text-blue-400 mb-3" />
            <h2 className="text-xl font-bold text-white mb-2">Portföyümüzü İnceleyin</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Antalya&apos;da henüz canlı bir referansımız yok, ama Türkiye genelinde ziyaret edilebilir gerçek
              müşteri projelerimizi portföyümüzde görebilirsiniz — kurumsal site, e-ticaret ve platform projeleri dahil.
            </p>
            <div className="flex items-center gap-1.5 text-xs bg-white/[0.04] border border-white/[0.06] text-zinc-400 rounded-full px-3 py-1 w-fit mb-4">
              <Globe size={10} className="text-blue-400" /> ramsesdigital.com/portfolyo
            </div>
            <Link href="/portfolyo" className="text-blue-400 text-sm font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all">
              Tüm Portföyü Gör <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <CityServiceSections city="antalya" hizmet="web" />

      <section className="py-12 md:py-16 px-6">
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

      <ProjeGalerisi />
      <SiziArayalimFormu />
      <ReviewsMarquee />

      <RelatedPages
        pages={[
          { label: 'Antalya Dijital Pazarlama', href: '/antalya-dijital-pazarlama' },
          { label: 'Antalya SEO', href: '/antalya-seo' },
          { label: 'Antalya Google Ads', href: '/antalya-google-ads' },
          { label: 'Antalya Yazılım Ajansı', href: '/antalya-yazilim-ajansi' },
          { label: 'Web Tasarım Ajansı (Türkiye Geneli)', href: '/web-tasarim-ajansi' },
        ]}
      />

      <section className="py-12 md:py-16 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Antalya&apos;da Web Siteniz Hazır Olsun</h2>
          <p className="text-zinc-400 text-lg mb-8">30 dakikalık ücretsiz görüşmede ihtiyaçlarınızı netleştirelim.</p>
          <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
