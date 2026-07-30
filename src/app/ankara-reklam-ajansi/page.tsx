import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, CheckCircle2, ArrowRight, Megaphone, Globe, BarChart3, Search, Mail, Zap, ShieldCheck, Landmark, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ankara Reklam Ajansı | 100+ Proje — Ramses Dijital',
  description:
    'Ankara\'nın dijital reklam ajansı — ölçülebilir büyüme, ücretsiz danışmanlık. Google Ads, SEO ve pazarlama otomasyonu ile başkentteki hukuk büroları, klinikler ve kurumsal firmalar için.',
  alternates: { canonical: 'https://ramsesdigital.com/ankara-reklam-ajansi' },
  openGraph: {
    title: 'Ankara Reklam Ajansı | Ramses Dijital',
    description: 'Ankara işletmeleri için Google Ads, SEO ve dijital reklam yönetimi.',
    url: 'https://ramsesdigital.com/ankara-reklam-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara Reklam Ajansı — Ramses Dijital',
    description: 'Başkentin kurumsal pazarına uygun dijital reklam ve pazarlama.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const ilceler = ['Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut', 'Sincan', 'Altındağ', 'Gölbaşı', 'Pursaklar', 'Polatlı']

const services = [
  { icon: Megaphone, title: 'Google Ads Yönetimi', desc: 'Ankara\'da hizmet arayan potansiyel müşteriye doğru anda ulaşın. Hukuk, sağlık ve danışmanlık sektörlerinde reklam kısıtlarını bilerek çalışıyoruz.', href: '/ankara-google-ads' },
  { icon: Search, title: 'SEO & Yerel SEO', desc: 'Çankaya, Keçiören, Yenimahalle gibi ilçe bazlı aramalarda ve Google Business Profile\'da üst sıralara çıkın.', href: '/ankara-seo' },
  { icon: Globe, title: 'Kurumsal Web Tasarım', desc: 'Hukuk bürosu, klinik veya danışmanlık firması kimliğine uygun, güven veren ve dönüşüm odaklı web siteleri.', href: '/ankara-web-tasarim' },
  { icon: Zap, title: 'Pazarlama Otomasyonu', desc: 'n8n ile randevu, teklif ve müşteri takip süreçlerinizi otomatikleştirin. Kurumsal ofis operasyonunuzu hafifletin.', href: '/hizmetler/n8n-otomasyon' },
  { icon: Mail, title: 'E-posta Pazarlama', desc: 'Mevcut müşteri ve potansiyel müşteri listenizi düzenli iletişimle sadık müşteriye dönüştürün.', href: '/hizmetler/eposta-otomasyon' },
  { icon: BarChart3, title: 'Veri Analizi & Raporlama', desc: 'GA4 ve Looker Studio ile hangi kanalın gerçekten randevu ve satış getirdiğini şeffafça görün.', href: '/hizmetler/veri-analizi' },
]

const whyUs = [
  { icon: Landmark, title: 'Başkentin Ekonomisini Biliyoruz', desc: 'Ankara e-ticaretten çok kamu, hukuk, danışmanlık ve profesyonel hizmetler etrafında dönüyor. Stratejimiz buna göre şekilleniyor — genel şablon değil.' },
  { icon: ShieldCheck, title: 'Sektöre Uygun, Kurallara Saygılı', desc: 'Avukatlık Kanunu\'nun reklam yasağı gibi sektörel kısıtları biliyor, buna göre SEO ve içerik ağırlıklı stratejiler kuruyoruz.' },
  { icon: TrendingUp, title: 'Şeffaf Raporlama', desc: 'Her ay gerçek verilerle raporluyoruz: trafik, randevu talebi, dönüşüm. Gösteriş metriği değil, iş sonucu.' },
  { icon: CheckCircle2, title: 'Kanıtlı Uzaktan Çalışma', desc: 'Fiziksel ofis olmadan da gerçek, canlı sonuçlar aldığımızı portföyümüzde görebilirsiniz.' },
]

const sectors = ['Hukuk Bürosu', 'Psikolog & Terapist', 'Diş Hekimi & Klinik', 'Güzellik Merkezi & Estetik', 'Danışmanlık', 'Eğitim & Kurs', 'B2B Tedarikçiler', 'İnşaat & Gayrimenkul']

const faqs = [
  { q: 'Ankara\'da reklam ajansı seçerken nelere dikkat etmeliyim?', a: 'Ankara\'nın kamu, hukuk ve kurumsal hizmet ağırlıklı ekonomisini anlayan bir ajans seçmek önemli. İstanbul\'daki e-ticaret şablonunu Ankara\'ya uygulamak genelde işe yaramaz. Referanslara, raporlama şeffaflığına ve sektörel deneyime bakın.' },
  { q: 'Ankara\'da dijital reklamın maliyeti nedir?', a: 'Google Ads bütçesi, SEO yönetimi ve web sitesi maliyeti sektörünüze ve hedeflerinize göre değişir. Ücretsiz danışmanlık seansında işletmenize özel bir plan çıkarıyoruz — rakam vermeden önce ihtiyacınızı netleştiriyoruz.' },
  { q: 'Ankara\'daki hukuk büroları ve klinikler için reklam kısıtı var mı?', a: 'Evet. Avukatlık Kanunu avukatların doğrudan reklam yapmasını yasaklıyor; bu sektörde SEO ve içerik otoritesi ağırlıklı bir strateji kuruyoruz. Sağlık sektöründe de Sağlık Bakanlığı reklam yönetmeliğine uygun, bilgilendirici içerik odaklı çalışıyoruz.' },
  { q: 'Ankara\'da hangi sektörlere hizmet veriyorsunuz?', a: 'Hukuk bürosu, psikolog & terapist, diş hekimi & klinik, güzellik merkezi & estetik, danışmanlık, eğitim & kurs, B2B tedarikçiler ve inşaat & gayrimenkul sektörlerinde çalışıyoruz. Başkentin kurumsal kimliğine uygun sektörlere odaklanıyoruz.' },
  { q: 'Sonuçları ne zaman görmeye başlarım?', a: 'Google Ads genelde 1-2 hafta içinde ilk talepleri getirir. SEO için Google Haritalar sonuçları 2-4 haftada, organik sıralamalar ise 3-6 ay içinde belirginleşir. Web sitesi yayına girdiği anda çalışmaya başlar.' },
  { q: 'Ankara\'nın hangi ilçelerine hizmet veriyorsunuz?', a: 'Çankaya, Keçiören, Yenimahalle, Mamak, Etimesgut, Sincan, Altındağ, Gölbaşı, Pursaklar ve Polatlı dahil Ankara\'nın tamamına hizmet veriyoruz. Tüm çalışma uzaktan yürütüldüğü için ilçe farketmiyor.' },
  { q: 'Ankara\'da fiziksel ofisiniz var mı?', a: 'Hayır. Merkezimiz Kocaeli\'de ve Ankara\'ya tamamen uzaktan hizmet veriyoruz. Toplantılar Google Meet/Zoom üzerinden yapılıyor, raporlar dijital olarak paylaşılıyor. Bu model portföyümüzdeki canlı projelerle kanıtlanmış durumda.' },
  { q: 'Yapay zeka aramalarında (ChatGPT, Gemini) da görünür olabilir miyim?', a: 'Evet, buna GEO (Generative Engine Optimization) deniyor. Ankara\'da sektörünüzü araştıran birinin yapay zekaya sorduğunda önerilmeniz için yapılandırılmış içerik ve otorite sinyalleri gerekiyor. Bu kanal Ankara\'nın kurumsal pazarında henüz doymadı — erken hareket avantaj sağlıyor.' },
  { q: 'Google Ads hesabının mülkiyeti kimde olur?', a: 'Tamamen sizde. Hesap kendi adınıza açılır, biz yönetici olarak bağlanırız. Kamu kurumu veya kurumsal firma müşterilerimiz için bu, hesap üzerinde tam denetim ve şeffaflık anlamına geliyor.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://ramsesdigital.com/#business',
      name: 'Ramses Dijital',
      description: 'Ankara\'nın dijital reklam ve pazarlama ajansı — SEO, Google Ads, web tasarım ve otomasyon.',
      url: 'https://ramsesdigital.com',
      areaServed: [
        { '@type': 'City', name: 'Ankara' },
        { '@type': 'City', name: 'Çankaya' },
        { '@type': 'City', name: 'Keçiören' },
        { '@type': 'City', name: 'Yenimahalle' },
        { '@type': 'City', name: 'Mamak' },
        { '@type': 'City', name: 'Etimesgut' },
      ],
      telephone: '+905355601936',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'İzmit',
        addressRegion: 'Kocaeli',
        addressCountry: 'TR',
      },
      knowsAbout: ['SEO', 'Google Ads', 'Web Tasarım', 'Dijital Pazarlama', 'E-posta Pazarlama', 'Pazarlama Otomasyonu'],
      sameAs: ['https://ramsesdigital.com'],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Ankara Reklam Ajansı', item: 'https://ramsesdigital.com/ankara-reklam-ajansi' },
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

export default function AnkaraReklamAjansiPage() {
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
            <span className="text-blue-400 text-sm font-medium">Ankara — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Başkentin Dijital
            <br />
            <span className="gradient-text">Reklam Ajansı</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Google Ads, SEO, kurumsal web tasarım ve pazarlama otomasyonuyla Ankara&apos;nın hukuk büroları, klinikleri ve kurumsal firmaları için ölçülebilir büyüme kuruyoruz.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            {ilceler.join(' · ')}
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
            { value: '5+', label: 'Türkiye Geneli Canlı Referans' },
            { value: '10', label: 'Hedeflenen Ankara İlçesi' },
            { value: 'Kurumsal', label: 'B2B & Profesyonel Hizmet Odağı' },
            { value: '6+', label: 'Hizmet Kategorisi' },
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
              Ankara İşletmeniz İçin Tüm Dijital Hizmetler
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

      {/* Sectors */}
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ankara&apos;da Odaklandığımız Sektörler</h2>
          <p className="text-zinc-500 text-sm mb-8">Başkentin profesyonel hizmet ağırlıklı ekonomisine uygun uzmanlık.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <span key={sector} className="bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-sm rounded-full px-4 py-2">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Neden Ankara&apos;daki İşletmeler Bizi Seçiyor?
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

      {/* Proof */}
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8 text-center">
            <CheckCircle2 size={32} className="text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">
              Ankara&apos;da Henüz Canlı Bir Referansımız Yok — Ama Dürüst Olalım
            </h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Sahte müşteri örneği göstermek yerine gerçeği söylüyoruz: Türkiye genelinde 5+ canlı referansımız var, çalışmalarımızı birebir portföyümüzde inceleyebilirsiniz. Aynı süreç ve aynı kalite Ankara işletmeleri için de geçerli.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/portfolyo" className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:text-blue-300 text-sm font-medium rounded-full px-5 py-2.5 transition-all">
                Portföyü Gör <ArrowRight size={13} />
              </Link>
              <CalendlyButton label="Görüşme Ayarla" variant="secondary" />
            </div>
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
              <div key={q} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
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
          { label: 'Ankara SEO', href: '/ankara-seo' },
          { label: 'Ankara Dijital Pazarlama', href: '/ankara-dijital-pazarlama' },
          { label: 'Ankara Yazılım Ajansı', href: '/ankara-yazilim-ajansi' },
          { label: 'Ankara Web Tasarım', href: '/ankara-web-tasarim' },
          { label: 'Ankara Google Ads', href: '/ankara-google-ads' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ankara&apos;da Dijitalde Öne Çıkmaya Hazır mısınız?
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
