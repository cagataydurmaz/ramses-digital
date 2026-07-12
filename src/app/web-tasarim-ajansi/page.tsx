import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { Globe2, Globe, ArrowRight, CheckCircle2, Zap, Smartphone, Search, ShieldCheck, BarChart3, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Tasarım Ajansı — Ramses Dijital',
  description:
    'Türkiye genelinde web tasarım ajansı. SEO uyumlu, mobil öncelikli, hızlı yüklenen kurumsal web siteleri. Türkiye\'nin her şehrindeki işletmeler için tamamen online süreç. Ücretsiz teklif alın.',
  alternates: { canonical: 'https://ramsesdigital.com/web-tasarim-ajansi' },
  openGraph: {
    title: 'Web Tasarım Ajansı | Ramses Dijital',
    description: 'Türkiye genelinde online çalışan web tasarım ajansı. Dönüşüm odaklı, SEO hazır siteler.',
    url: 'https://ramsesdigital.com/web-tasarim-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Smartphone, title: 'Mobil Öncelikli Tasarım', desc: 'Kullanıcıların büyük çoğunluğu mobil cihazdan geliyor. Responsive, hızlı, parmak dostu tasarım.' },
  { icon: Search, title: 'SEO Hazır Altyapı', desc: 'Teknik SEO, schema markup, hızlı yükleme — sitesi yayına girer girmez Google\'a hazır başlar.' },
  { icon: Zap, title: 'Yüksek Performans', desc: 'Next.js ile Lighthouse\'da 90+ puan. Yavaş sitelerin rakibinizden geride kalmasına izin vermeyin.' },
  { icon: Palette, title: 'Kurumsal Tasarım', desc: 'Markanıza özgü, şablon olmayan, güven veren profesyonel tasarım.' },
  { icon: BarChart3, title: 'Dönüşüm Odaklı', desc: 'Form, WhatsApp entegrasyonu, stratejik CTA yerleşimi — ziyaretçiyi müşteriye çeviren yapı.' },
  { icon: ShieldCheck, title: 'Güvenli & Bakımlı', desc: 'SSL, düzenli güncellemeler ve teknik destek. Siteniz her zaman çalışır durumda.' },
]

const faqs = [
  { q: 'Farklı bir şehirdeyim, uzaktan web sitesi yaptırabilir miyim?', a: 'Evet, tüm sürecimiz dijital: brifing görüşmesi (Zoom/Meet), tasarım onayı, geliştirme ve teslim — hiçbiri fiziksel görüşme gerektirmiyor. İstanbul, Ankara, İzmir, Antalya dahil Türkiye\'nin her yerinden müşterimiz var.' },
  { q: 'Web sitesi ne kadar sürede teslim edilir?', a: 'Başlangıç paketleri 2-3 hafta, kurumsal projeler 4-6 hafta, e-ticaret ve özel platform projeleri 8-12 hafta sürer. Süreç: brifing → tasarım onayı → geliştirme → test → yayın.' },
  { q: 'Hangi teknolojiyi kullanıyorsunuz?', a: 'Next.js (React tabanlı) kullanıyoruz. WordPress gibi eski sistemlere kıyasla 3-5 kat daha hızlı, güvenlik açıklarına karşı daha dayanıklı ve SEO performansı çok daha yüksek siteler ortaya çıkıyor.' },
  { q: 'Web sitesi fiyatları ne kadar?', a: 'Başlangıç paketleri 15.000 TL\'den, kurumsal 25.000 TL\'den, e-ticaret 40.000 TL\'den başlıyor. Sektör, sayfa sayısı ve özel özelliklere göre değişir — ücretsiz danışmanlıkta net fiyat alırsınız.' },
  { q: 'Mevcut sitemi yeniden tasarlatabilir miyim?', a: 'Evet. Mevcut sitenizin SEO değerini (backlink, sıralama) koruyarak modern bir platforma taşıyoruz. 301 yönlendirmeler ve içerik migrasyonuyla kayıpsız geçiş sağlanır.' },
  { q: 'Web sitem yapıldıktan sonra kim günceller?', a: 'İçerik güncellemeleri için basit bir yönetim paneli kuruyoruz — teknik bilgi gerekmeden blog/ürün ekleyebilirsiniz. Tasarım değişiklikleri için aylık bakım paketi de sunuyoruz.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Web Tasarım Ajansı Hizmeti',
      description: 'Türkiye genelinde online web tasarım ve geliştirme hizmeti.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: { '@type': 'Country', name: 'Türkiye' },
      url: 'https://ramsesdigital.com/web-tasarim-ajansi',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Web Tasarım Ajansı', item: 'https://ramsesdigital.com/web-tasarim-ajansi' },
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

export default function WebTasarimAjansiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Globe2 size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Türkiye Geneli — %100 Online</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Web Tasarım Ajansı
            <br />
            <span className="gradient-text">Dönüşüm Odaklı Siteler</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Türkiye&apos;nin her şehrindeki işletmeler için hızlı, mobil uyumlu ve SEO hazır web siteleri tasarlıyoruz. Tüm süreç dijital yürütülmektedir, fiziksel görüşme gerekmemektedir.
          </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Neden Ramses Dijital?</h2>
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Yaptığımız Çalışmalar</h2>
          <p className="text-zinc-400 text-sm mb-8 max-w-xl mx-auto">
            Portföyümüzdeki her site canlı — ziyaret edip kendiniz görebilirsiniz.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { name: 'nurcelen.com', desc: 'Kocaeli psikolog sitesi' },
              { name: 'mertanilguler.av.tr', desc: 'İstanbul hukuk bürosu' },
              { name: 'gamzelidermokozmetik.com', desc: 'E-ticaret sitesi' },
            ].map(({ name, desc }) => (
              <div key={name} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-4 text-left">
                <Globe size={16} className="text-blue-400 mb-2" />
                <p className="text-white text-sm font-medium">{name}</p>
                <p className="text-zinc-500 text-xs">{desc}</p>
              </div>
            ))}
          </div>
          <Link href="/portfolyo" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
            Tüm Portföyü Gör <ArrowRight size={13} />
          </Link>
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
          { label: 'SEO Ajansı', href: '/seo-ajansi' },
          { label: 'Google Ads Ajansı', href: '/google-ads-ajansi' },
          { label: 'Yazılım Ajansı', href: '/yazilim-ajansi' },
          { label: 'İzmit Web Tasarım', href: '/izmit-web-tasarim' },
          { label: 'Kocaeli Web Tasarım', href: '/kocaeli-web-tasarim' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Profesyonel Web Siteniz Hazır Olsun
          </h2>
          <p className="text-zinc-400 text-lg mb-8">30 dakikalık ücretsiz görüşmede ihtiyaçlarınızı netleştirelim.</p>
          <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Ücretsiz danışmanlık</p>
        </div>
      </section>
    </>
  )
}
