import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, CheckCircle2, ArrowRight, Megaphone, Globe, BarChart3, Search, Mail, Zap, Star, Users, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İstanbul Reklam Ajansı | 100+ Proje — Ramses Dijital',
  description:
    'İstanbul\'un dijital reklam ajansı — gerçek müşteri, gerçek sonuç. Google Ads, SEO ve sosyal medya danışmanlığı. Kadıköy, Beşiktaş, Şişli dahil tüm İstanbul\'a hizmet. Ücretsiz danışmanlık alın.',
  alternates: { canonical: 'https://ramsesdigital.com/istanbul-reklam-ajansi' },
  openGraph: {
    title: 'İstanbul Reklam Ajansı | Ramses Dijital',
    description: 'İstanbul\'da işletmenizi büyüten dijital reklam ajansı. Google Ads, SEO ve pazarlama danışmanlığı.',
    url: 'https://ramsesdigital.com/istanbul-reklam-ajansi',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İstanbul Reklam Ajansı — Ramses Dijital',
    description: 'İstanbul işletmeleri için dijital reklam, Google Ads, SEO ve pazarlama danışmanlığı.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  { icon: Megaphone, title: 'Google Ads Yönetimi', desc: 'İstanbul\'un yüksek CPC ortamında bütçenizi doğru kitleye yönlendiriyoruz. Boşa harcama yok, sadece dönüşüm odaklı hedefleme.', href: '/istanbul-google-ads' },
  { icon: Search, title: 'SEO & Yerel SEO', desc: '39 ilçeye özel anahtar kelime stratejisiyle Google\'da ve yapay zeka aramalarında görünün.', href: '/istanbul-seo' },
  { icon: Users, title: 'Sosyal Medya Danışmanlığı', desc: 'Hangi platformda, hangi mesajla, hangi sıklıkla — stratejik planlama ve içerik yönlendirmesi.', href: '/hizmetler/veri-analizi' },
  { icon: Mail, title: 'E-posta Pazarlama', desc: 'İstanbul müşteri listenizi satışa dönüştüren hoşgeldin serisi ve kampanya akışları. Ortalama %42 ROI.', href: '/hizmetler/eposta-otomasyon' },
  { icon: Zap, title: 'Pazarlama Otomasyonu', desc: 'n8n ile lead nurturing ve bildirim akışlarını otomatikleştirin. Uyurken de potansiyel müşteri toplayın.', href: '/hizmetler/n8n-otomasyon' },
  { icon: BarChart3, title: 'Veri Analizi & Raporlama', desc: 'GA4 ve Looker Studio\'yla hangi kanalın gerçekten işe yaradığını netleştirin.', href: '/hizmetler/veri-analizi' },
]

const whyUs = [
  { icon: MapPin, title: 'İstanbul\'un Rekabetini Biliyoruz', desc: 'Yüksek CPC, yoğun ajans rekabeti ve 39 ilçenin farklı dinamikleri — genel şablon değil, ilçe bazlı strateji uyguluyoruz.' },
  { icon: Star, title: 'Kanıtlanmış İstanbul Referansları', desc: 'İstanbul Barosu\'na kayıtlı avukatlar dahil, canlı ve ziyaret edilebilir gerçek müşterilerimiz var.' },
  { icon: TrendingUp, title: 'ROI Odaklı Yönetim', desc: 'Her reklam kuruşunun nereye gittiğini raporluyoruz. Gösteriş metrikleri değil, satış ve dönüşüm önceliğimiz.' },
  { icon: CheckCircle2, title: 'Uzaktan Ama Uzak Değil', desc: 'Kocaeli merkezli ekibimiz, İstanbul\'un trafiğine takılmadan aynı hızda ve şeffaflıkla hizmet veriyor.' },
]

const sectors = [
  'Hukuk Bürosu', 'Psikolog & Terapist', 'Diş Hekimi & Diş Kliniği', 'Güzellik Merkezi & Estetik',
  'E-ticaret', 'Gayrimenkul', 'Kurumsal B2B Hizmetler', 'Finans & Danışmanlık',
]

const clients = [
  { name: 'Av. Furkan Arıkan', detail: 'İstanbul Barosu — Beşiktaş, Web & SEO', url: 'https://furkanarikan.av.tr' },
  { name: 'Av. Mert Anıl Güler, LL.M.', detail: 'Bakırköy avukat — Web & SEO', url: 'https://www.mertanilguler.av.tr' },
]

const faqs = [
  { q: 'İstanbul\'da reklam ajansı seçerken nelere dikkat etmeliyim?', a: 'En önemli kriter gerçek referanslar ve şeffaf raporlamadır. İstanbul\'da onlarca ajans var, ancak çoğu şablon strateji uyguluyor. Ajansın canlı müşteri sitelerini gösterip gösteremediğini, aylık raporlama yapıp yapmadığını ve ilçe bazlı strateji kurup kurmadığını sorgulayın.' },
  { q: 'İstanbul\'da Google Ads maliyeti neden daha yüksek?', a: 'İstanbul, Türkiye\'nin en yüksek CPC (tıklama başı maliyet) seviyesine sahip pazarı — çünkü rekabet ve arama hacmi en yüksek. Bu, bütçe yönetiminin daha kritik olduğu anlamına gelir. Doğru anahtar kelime seçimi, negatif kelime filtreleme ve ilçe bazlı hedeflemeyle bütçenizi verimli kullanıyoruz.' },
  { q: 'İstanbul\'da hangi sektörlere hizmet veriyorsunuz?', a: 'Hukuk bürosu, psikolog ve terapist, diş hekimi ve diş kliniği, güzellik merkezi ve estetik, e-ticaret, gayrimenkul, kurumsal B2B hizmetler ve finans/danışmanlık sektörlerinde aktif deneyimimiz var. Her sektörün reklam dinamiği farklı; örneğin hukuk sektöründe Avukatlık Kanunu\'nun reklam kısıtları nedeniyle SEO ağırlıklı strateji uyguluyoruz.' },
  { q: 'Fiziksel olarak İstanbul\'da bir ofisiniz var mı?', a: 'Hayır, merkezimiz Kocaeli\'de — İstanbul\'a tamamen uzaktan hizmet veriyoruz. Ancak gerçek, canlı İstanbul müşterilerimiz var: İstanbul Barosu\'na kayıtlı Av. Furkan Arıkan (Beşiktaş) ve Bakırköy\'de Av. Mert Anıl Güler için web tasarım ve SEO çalışması yürüttük. Süreç tamamen dijital: görüşmeler Google Meet/Zoom, raporlar dashboard üzerinden.' },
  { q: 'Sonuçları ne zaman görmeye başlarım?', a: 'Google Ads 1-2 hafta içinde trafik ve potansiyel müşteri getirir. SEO için yerel/harita sonuçları 2-4 haftada, organik sıralamalar İstanbul\'un rekabet yoğunluğu nedeniyle 4-8 ay içinde belirginleşir. Hızlı sonuç istiyorsanız Google Ads\'i başlangıç stratejisi olarak öneriyoruz.' },
  { q: 'Hangi İstanbul ilçelerine hizmet veriyorsunuz?', a: 'Kadıköy, Beşiktaş, Şişli, Bakırköy, Ataşehir, Üsküdar, Beylikdüzü, Maltepe, Kartal, Pendik dahil İstanbul\'un tüm ilçelerine hizmet veriyoruz. Stratejiyi işletmenizin gerçek hizmet alanına göre önceliklendiriyoruz, 39 ilçeye aynı anda yayılmıyoruz.' },
  { q: 'Sözleşme şartlarınız nedir?', a: 'Google Ads ve SEO için minimum 3 ay, ideal olarak 6 ay öneriyoruz — dijital pazarlama birikimli sonuç verir. Tek seferlik projeler (web tasarım gibi) ayrı sözleşmeyle teslim edilir. Uzun vadeli iş birliklerinde anlamlı avantajlar sunuyoruz.' },
  { q: 'Sosyal medya hesaplarımı da yönetiyor musunuz?', a: 'Stratejik danışmanlık ve içerik planlaması sunuyoruz — hangi platformda, hangi mesajla, hangi sıklıkla paylaşım yapmanız gerektiğini netleştiriyoruz. Ancak günlük gönderi hazırlama ve moderasyon hizmetlerimiz arasında değil; odağımız ölçülebilir ROI getiren kanallar.' },
  { q: 'Reklam hesabım kimin adına açılıyor?', a: 'Sizin adınıza. Google Ads hesabı size ait olur, biz sadece yönetici erişimiyle çalışırız. Bizimle yollarınız ayrılsa bile geçmiş verileriniz ve kampanya öğrenmeleriniz sizde kalır.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://ramsesdigital.com/#business',
      name: 'Ramses Dijital',
      description: 'İstanbul\'un dijital reklam ajansı. Google Ads, SEO ve pazarlama danışmanlığı.',
      url: 'https://ramsesdigital.com',
      areaServed: [
        { '@type': 'City', name: 'İstanbul' },
        { '@type': 'City', name: 'Kadıköy' },
        { '@type': 'City', name: 'Beşiktaş' },
        { '@type': 'City', name: 'Şişli' },
        { '@type': 'City', name: 'Bakırköy' },
        { '@type': 'City', name: 'Ataşehir' },
        { '@type': 'City', name: 'Üsküdar' },
        { '@type': 'City', name: 'Beylikdüzü' },
      ],
      telephone: '+905355601936',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'İzmit',
        addressRegion: 'Kocaeli',
        addressCountry: 'TR',
      },
      knowsAbout: ['Google Ads', 'SEO', 'Sosyal Medya Pazarlama', 'E-posta Pazarlama', 'Pazarlama Otomasyonu'],
      sameAs: ['https://ramsesdigital.com'],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'İstanbul Reklam Ajansı', item: 'https://ramsesdigital.com/istanbul-reklam-ajansi' },
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

export default function IstanbulReklamAjansiPage() {
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
            <span className="text-blue-400 text-sm font-medium">İstanbul — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            İstanbul&apos;un Dijital
            <br />
            <span className="gradient-text">Reklam Ajansı</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Google Ads, SEO ve pazarlama danışmanlığıyla İstanbul işletmelerini büyütüyoruz. Yüksek rekabetli pazarda bütçenizi doğru yere yönlendiriyoruz — gerçek müşteriler, ölçülebilir sonuçlar.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            Kadıköy · Beşiktaş · Şişli · Bakırköy · Ataşehir · Üsküdar · Beylikdüzü · Maltepe · Kartal · Pendik
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
            <Link href="/portfolyo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Referanslarımızı Gör <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '2', label: 'Canlı İstanbul Referansı' },
            { value: 'En Yüksek', label: 'Türkiye\'deki Arama Hacmi' },
            { value: '39', label: 'İlçe — Hedeflenebilir' },
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
              İstanbul İşletmeniz İçin Reklam & Pazarlama Hizmetleri
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
              Neden İstanbul&apos;daki İşletmeler Bizi Seçiyor?
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
          <h2 className="text-2xl font-bold text-white mb-3">İstanbul&apos;da Hizmet Verdiğimiz Sektörler</h2>
          <p className="text-zinc-500 text-sm mb-8">Her sektörün reklam dinamiği farklı — uzmanlık önemli.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <span key={sector} className="bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-sm rounded-full px-4 py-2">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Real Clients */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Gerçek İstanbul Müşterileri, Canlı Siteler</h2>
            <p className="text-zinc-400 text-sm">Boş iddia yok — her birini ziyaret edebilirsiniz.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {clients.map(({ name, detail, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/25 rounded-xl p-4 transition-all"
              >
                <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                <div className="min-w-0">
                  <p className="text-white text-sm font-medium truncate">{name}</p>
                  <p className="text-zinc-500 text-xs">{detail}</p>
                </div>
                <ArrowRight size={13} className="text-zinc-600 group-hover:text-blue-400 ml-auto shrink-0 transition-colors" />
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portfolyo" className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center justify-center gap-1.5 transition-colors">
              Tüm Portföyü Gör <ArrowRight size={13} />
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
          { label: 'İstanbul SEO', href: '/istanbul-seo' },
          { label: 'İstanbul Dijital Pazarlama', href: '/istanbul-dijital-pazarlama' },
          { label: 'İstanbul Web Tasarım', href: '/istanbul-web-tasarim' },
          { label: 'İstanbul Google Ads', href: '/istanbul-google-ads' },
          { label: 'İstanbul Yazılım Ajansı', href: '/istanbul-yazilim-ajansi' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            İstanbul&apos;da Dijitalde Öne Çıkmaya Hazır mısınız?
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
