import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import { TrendingUp, Target, BarChart3, ShoppingBag, Youtube, Repeat, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Google Ads Yönetimi | ROI Odaklı Performans Reklamcılığı — Ramses Dijital',
  description:
    'Profesyonel Google Ads kampanya yönetimi. Search, Display, YouTube, Shopping ve Remarketing kampanyalarıyla 4.2x ortalama ROAS. Şeffaf raporlama.',
  alternates: { canonical: 'https://ramsesdigital.com/hizmetler/google-ads-kocaeli' },
  openGraph: {
    title: 'Google Ads Kocaeli | Ramses Digital',
    description: 'Kocaeli\'de ROI odaklı Google Ads kampanya yönetimi. 4.2x ortalama ROAS.',
    url: 'https://ramsesdigital.com/hizmetler/google-ads-kocaeli',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Kocaeli — Ramses Digital',
    description: 'Search, Display, YouTube, Shopping. ROI odaklı reklam yönetimi.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const campaignTypes = [
  { icon: Target, title: 'Search Ads', desc: 'Google\'da aktif olarak hizmet/ürün arayan müşterilere ulaşın. En yüksek satın alma niyeti.' },
  { icon: TrendingUp, title: 'Display Ağı', desc: 'Milyonlarca web sitesinde marka bilinirliği ve retargeting kampanyaları.' },
  { icon: Youtube, title: 'YouTube Reklamları', desc: 'Video içerikle hedef kitleye duygusal bağ kurun. TrueView ve Bumper Ad formatları.' },
  { icon: ShoppingBag, title: 'Shopping Kampanyaları', desc: 'E-ticaret işletmeleri için ürün odaklı reklam. Görsel + fiyat + marka tek bakışta.' },
  { icon: Repeat, title: 'Remarketing', desc: 'Sitenizi ziyaret edip dönüşmeyen kullanıcıları geri kazanın. 3-5x dönüşüm artışı.' },
  { icon: BarChart3, title: 'Performance Max', desc: 'Google\'ın AI destekli yeni nesil kampanyaları. Tüm kanalları otomatik optimize eder.' },
]

const process = [
  { step: '01', title: 'Hesap Auditi', desc: 'Mevcut hesabınızın detaylı incelemesi: kayıp anahtar kelimeler, israf eden kampanyalar, kalite skorları ve dönüşüm takibi sağlığı.' },
  { step: '02', title: 'Strateji & Bütçe Planı', desc: 'Hedeflerinize göre kampanya yapısı, anahtar kelime listesi, bid stratejisi ve aylık bütçe dağılımı.' },
  { step: '03', title: 'Reklam Yazımı & Görsel', desc: 'A/B test edilebilir 4-6 ad varyasyonu, profesyonel görseller ve landing page önerileri.' },
  { step: '04', title: 'Conversion Tracking', desc: 'GA4, GTM ile temiz dönüşüm takibi. Mikro/makro dönüşümler ayrı ayrı izlenir.' },
  { step: '05', title: 'Optimizasyon Döngüsü', desc: 'Haftalık bid ayarları, negatif anahtar kelime listesi, ad performans analizi ve sürekli A/B test.' },
]

const faqs = [
  { q: 'Google Ads bütçem ne kadar olmalı?', a: 'KOBİ\'ler için aylık 8.000-25.000 TL test bütçesi, e-ticaret ve geniş kitleli işletmeler için 25.000-100.000 TL aralığı sağlıklıdır. İlk ay test ve kalibre, sonraki aylar ölçeklendirme aşamasıdır. Düşük bütçelerde anlamlı veri toplamak zorlaşır.' },
  { q: 'Yönetim ücretiniz nedir?', a: 'Reklam bütçenizin %10-20\'si arasında değişen aylık yönetim ücreti veya sabit aylık paket (5.000 TL\'den başlayan) iki seçenek de mevcuttur. Setup ücreti ilk ay tek seferlik 3.000-7.000 TL\'dir.' },
  { q: 'Ne kadar sürede sonuç alırım?', a: 'Search kampanyalarında ilk dönüşümler 1-7 gün içinde gelir. Optimal ROAS\'a ulaşmak için 30-60 günlük bir öğrenme süreci gerekir. Bu sürede algoritma anahtar kelime ve kitleyi öğrenir; üçüncü aydan itibaren ölçeklendirme başlar.' },
  { q: 'ROAS ne demek ve hedef ne olmalı?', a: 'ROAS = Gelir / Reklam Harcaması. Yani 4x ROAS, harcadığınız her 1 TL\'nin 4 TL gelir getirdiği anlamına gelir. Sektöre göre değişmekle birlikte: e-ticaret 3-5x, B2B SaaS 5-10x, profesyonel hizmetler 6-15x sağlıklı hedeflerdir.' },
  { q: 'Reklam metnini siz mi yazıyorsunuz?', a: 'Evet, tüm reklam metni ve görsel tasarımları biz hazırlıyoruz. Sektörünüze özel 4-6 ad varyasyonu yazıp A/B testle en iyi performans göstereni belirliyoruz. Görsel ihtiyacında profesyonel grafiker desteği sağlıyoruz.' },
  { q: 'Sözleşme süresi ne kadar?', a: 'Minimum 3 ay öneriyoruz. Google Ads algoritmasının öğrenme süresi nedeniyle daha kısa süreli çalışmalar yatırımınızı tam olarak değerlendiremez. 6 ay+ taahhüt verenlere %10 yönetim indirimi sağlıyoruz.' },
  { q: 'Raporlama nasıl yapılıyor?', a: 'Aylık detaylı performans raporu (PDF) + canlı Looker Studio dashboard erişimi sağlıyoruz. Harcama, dönüşüm, ROAS, CPC, CTR ve sektörel kıyaslamalar şeffaf şekilde takip edilir. Haftalık 15 dk\'lık check-in görüşmesi de pakete dahil.' },
  { q: 'Mevcut Google Ads hesabımı devralabilir misiniz?', a: 'Evet, mevcut hesabınızın sahipliğini değiştirmeden, manager (MCC) hesabımız üzerinden erişim alıyoruz. Hesabınız tamamen size ait kalır; istediğiniz an erişimi geri çekebilirsiniz. Geçmiş veriler ve dönüşüm geçmişi korunur.' },
]

export default function GoogleAdsKocaeliPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
            <TrendingUp size={14} className="text-orange-400" />
            <span className="text-orange-400 text-xs font-medium tracking-wider uppercase">Google Ads · Performance Marketing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
            ROI Odaklı
            <br />
            <span className="gradient-text">Google Ads Yönetimi</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Search&apos;ten YouTube&apos;a, Shopping&apos;den Remarketing&apos;e — bütçenizi en yüksek ROAS&apos;ı getirecek
            şekilde optimize ediyoruz. Şeffaf raporlama, gerçek sonuçlar.
          </p>
          <CalendlyButton label="Ücretsiz Hesap Auditi" variant="primary" />
        </div>
      </section>

      <section className="py-12 px-6 border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><div className="text-3xl md:text-4xl font-bold text-white">4.2x</div><div className="text-zinc-400 text-sm mt-1">Ortalama ROAS</div></div>
          <div><div className="text-3xl md:text-4xl font-bold text-white">%65</div><div className="text-zinc-400 text-sm mt-1">CPA Düşüşü</div></div>
          <div><div className="text-3xl md:text-4xl font-bold text-white">7 gün</div><div className="text-zinc-400 text-sm mt-1">İlk Dönüşüm Süresi</div></div>
          <div><div className="text-3xl md:text-4xl font-bold text-white">100+</div><div className="text-zinc-400 text-sm mt-1">Yönetilen Kampanya</div></div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-500 text-sm font-medium tracking-wider uppercase mb-3">Kampanya Türleri</p>
            <h2 className="text-4xl font-bold text-white mb-4">Tüm Google Ads Kanalları</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Her hedef için doğru kampanya türü. Tek bir formül değil, işletmenize özel strateji.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {campaignTypes.map((c) => {
              const Icon = c.icon
              return (
                <div key={c.title} className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-orange-500/30 transition-colors">
                  <div className="w-11 h-11 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-orange-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{c.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-500 text-sm font-medium tracking-wider uppercase mb-3">Süreç</p>
            <h2 className="text-4xl font-bold text-white mb-4">5 Adımda Google Ads</h2>
          </div>
          <div className="space-y-4">
            {process.map((p) => (
              <div key={p.step} className="flex gap-6 items-start bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6">
                <div className="text-3xl font-bold gradient-text shrink-0">{p.step}</div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{p.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Google Ads&apos;te Başarının Sırrı</h2>
          <div className="space-y-5 text-zinc-300 leading-relaxed">
            <p>Google Ads, doğru kurgulandığında <strong className="text-white">harcadığınızın 4-10 katını</strong> geri getirebilen en güçlü dijital pazarlama kanalıdır. Yanlış kurgulandığındaysa bütçenizi haftalar içinde tüketebilir. Aradaki fark: <strong className="text-white">veri ve disiplin</strong>.</p>
            <p>Birçok ajans &ldquo;set it and forget it&rdquo; mantığıyla çalışır: kampanyayı kurar ve aylarca dokunmaz. Biz aksine, haftalık bid optimizasyonu, negatif anahtar kelime ekleme, ad performans analizi ve A/B testlerle sürekli iyileştirme yaparız.</p>
            <p>Uzun kuyruklu anahtar kelimelerle düşük CPC&apos;li yüksek dönüşümlü kampanyalar kurabiliyoruz. Coğrafi hedefleme, saat ve cihaz optimizasyonları gibi mikro detaylar ROAS&apos;ınızı katlıyor.</p>
            <p>Ramses Dijital Reklam Ajansı&apos;nın Google Ads ekibi, sertifikalı uzmanlardan oluşuyor. Her ay milyonlarca TL reklam bütçesi yönetiyor ve sektörel kıyaslamalarda %35 daha düşük CPA elde ediyoruz.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-medium tracking-wider uppercase mb-3">SSS</p>
            <h2 className="text-4xl font-bold text-white mb-4">Sık Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] transition-colors">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <h3 className="text-white font-semibold text-base">{item.q}</h3>
                  <span className="text-orange-400 text-2xl leading-none group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="text-zinc-400 text-sm leading-relaxed mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">İlgili Rehberler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/google-ads-tam-rehberi-2024" className="group bg-[#0D1225] border border-white/[0.06] hover:border-orange-500/30 rounded-xl p-5 transition-all">
              <p className="text-orange-400 text-xs font-medium uppercase tracking-wider mb-2">Rehber</p>
              <h3 className="text-white font-medium leading-snug group-hover:text-orange-300 transition-colors">Google Ads Tam Rehberi 2024</h3>
            </Link>
            <Link href="/blog/yapay-zeka-ile-rakip-analizi" className="group bg-[#0D1225] border border-white/[0.06] hover:border-orange-500/30 rounded-xl p-5 transition-all">
              <p className="text-orange-400 text-xs font-medium uppercase tracking-wider mb-2">Strateji</p>
              <h3 className="text-white font-medium leading-snug group-hover:text-orange-300 transition-colors">Yapay Zeka ile Rakip Analizi</h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/20 rounded-3xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kampanyanızı Audit&apos;leyelim</h2>
          <p className="text-zinc-400 text-lg mb-8">Mevcut Google Ads hesabınızı ücretsiz inceleyip, israf eden alanları ve kazanç fırsatlarını çıkartalım.</p>
          <CalendlyButton label="Ücretsiz Hesap Auditi" variant="primary" />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Google Ads Yönetimi — Kocaeli',
        description: 'Kocaeli işletmeleri için Search, Display, YouTube, Shopping ve Remarketing kampanya yönetimi.',
        provider: { '@type': 'Organization', name: 'Ramses Digital', url: 'https://ramsesdigital.com' },
        areaServed: [{ '@type': 'City', name: 'İzmit' }, { '@type': 'City', name: 'Kocaeli' }, { '@type': 'Country', name: 'Türkiye' }],
        serviceType: 'Pay Per Click Advertising',
        url: 'https://ramsesdigital.com/hizmetler/google-ads-kocaeli',
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://ramsesdigital.com' },
          { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: 'https://ramsesdigital.com/hizmetler' },
          { '@type': 'ListItem', position: 3, name: 'Google Ads Kocaeli', item: 'https://ramsesdigital.com/hizmetler/google-ads-kocaeli' },
        ],
      })}} />
    </>
  )
}
