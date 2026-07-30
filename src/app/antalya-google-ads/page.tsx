import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Megaphone, ArrowRight, Target, BarChart3, Zap, TrendingUp, DollarSign, Clock, Globe2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Antalya Google Ads Yönetimi — Ramses Dijital',
  description:
    'Antalya\'da Google Ads yönetimi. Otel, tur operatörü ve gayrimenkul ofisleri için İngilizce/Rusça hedefli reklam kampanyaları. Muratpaşa, Alanya, Manavgat ve tüm Antalya\'ya uzaktan hizmet. Ücretsiz kampanya analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/antalya-google-ads' },
  openGraph: {
    title: 'Antalya Google Ads Yönetimi | Ramses Dijital',
    description: 'Antalya işletmeleri için çok dilli Google Ads kampanyası. Doğru kitleye, doğru zamanda ulaşın.',
    url: 'https://ramsesdigital.com/antalya-google-ads',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  { icon: Globe2, title: 'Çok Dilli Turizm Kampanyaları', desc: 'Otel ve tur operatörleri için İngilizce, Rusça ve Almanca dillerinde ayrı reklam grupları — sezon öncesi ve sezon içi bütçe planlaması.' },
  { icon: Target, title: 'Gayrimenkul Reklamları', desc: 'Yabancıya gayrimenkul satışı yapan ofisler için "property for sale in Antalya" gibi yabancı dil anahtar kelime hedeflemesi.' },
  { icon: Megaphone, title: 'Google Haritalar Reklamları', desc: 'Antalya\'da konuma dayalı "yakınımdaki X" aramalarında öne çıkın. Sezon yoğunluğunda en yüksek yerel dönüşüm.' },
  { icon: TrendingUp, title: 'Remarketing', desc: 'Rezervasyon sayfasına gelip ayrılan turisti veya ilan sayfasını inceleyip ayrılan alıcı adayını geri getirin.' },
  { icon: BarChart3, title: 'Dönüşüm İzleme', desc: 'Rezervasyon formu, telefon araması, WhatsApp tıklaması — her aksiyonu izliyoruz, hangi dilin hangi kanalın işe yaradığını görürsünüz.' },
  { icon: DollarSign, title: 'Sezonluk Bütçe Optimizasyonu', desc: 'Antalya\'nın yoğun turizm sezonuna göre bütçe artışı/azalışı planlanır, Quality Score odaklı teklif stratejisiyle CPA düşürülür.' },
]

const faqs = [
  { q: 'Antalya\'da Google Ads için sezonluk bütçe planlaması nasıl yapılır?', a: 'Otel, tur operatörü ve transfer/rent a car firmaları için yaz sezonu öncesinde (Mart-Nisan) bütçe artışı, sezon dışında ise marka bilinirliği ve erken rezervasyon odaklı düşük bütçeli kampanyalar öneriyoruz. Gayrimenkul sektöründe ise sezonluk dalgalanma daha az, yıl boyunca istikrarlı bütçe daha etkili.' },
  { q: 'Yabancı dilde (İngilizce, Rusça) reklam kampanyası kurabiliyor musunuz?', a: 'Evet. Otel, tur operatörü ve gayrimenkul ofisleri için hedef pazara göre (İngiliz, Rus, Alman, Orta Doğulu alıcı/turist) ayrı dilde reklam metni, açılış sayfası ve anahtar kelime grupları oluşturuyoruz.' },
  { q: 'Antalya\'nın farklı ilçeleri için ayrı kampanya gerekir mi?', a: 'Sektöre bağlı. Bir gayrimenkul ofisi için Alanya, Kaş ve Side\'deki alıcı profili farklı olabileceğinden ilçe bazlı kampanya faydalı. Bir tur operatörü içinse genellikle "Antalya" genel hedeflemesi ve dil bazlı ayrım daha mantıklı. Stratejiyi işinize göre kuruyoruz.' },
  { q: 'Antalya\'da Google Ads ne zaman sonuç verir?', a: 'Kampanya aktifleşince 1-2 hafta içinde tıklama ve trafik başlar. Turizm sezonuna denk gelen kampanyalarda talep zaten yüksek olduğu için erken sonuç görülebilir; sezon dışı kampanyalarda optimizasyon biraz daha uzun sürebilir.' },
  { q: 'Google Ads ile SEO\'yu birlikte mi yapmalıyım?', a: 'Antalya\'nın sezonluk yapısında kesinlikle önerilir. Google Ads sezon öncesi ve sezon içi hemen trafik getirir; SEO ise uzun vadede reklam bağımlılığını azaltan, çok dilli organik görünürlük sağlayan kalıcı bir varlıktır.' },
  { q: 'Mevcut Google Ads kampanyam var ama sonuç almıyorum, ne yapmalıyım?', a: 'En yaygın sorunlar: geniş eşleme anahtar kelimeler, eksik negatif anahtar kelime listesi, dil hedeflemesinin doğru kurulmamış olması ve dönüşüm izlemenin eksik olması. Mevcut hesabınızı ücretsiz analiz edip sorunları tespit ediyoruz.' },
  { q: 'Raporlama nasıl yapılıyor?', a: 'Aylık Google Ads performans raporu: gösterim, tıklama, CPC, dönüşüm ve dil/kampanya bazlı kırılım. Canlı Google Ads dashboard erişimi veriyoruz, sezonluk bütçe kararlarınızı veriyle alabilirsiniz.' },
  { q: 'Antalya\'da Google Ads yönetimi için sözleşme şartı var mı?', a: 'Minimum 3 ay öneriyoruz. Google Ads öğrenme dönemi 30 gün sürer; turizm sektöründe sezonluk dalgalanmayı doğru değerlendirmek için en az bir sezon geçişini görmek faydalı olur.' },
  { q: 'Hesap bize mi ait olacak?', a: 'Evet. Google Ads hesabı sizin adınıza açılır, biz yönetici erişimiyle yönetiriz — sezon sonunda ajans değiştirmeyi düşünseniz bile kampanya geçmişiniz sizde kalır.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Antalya Google Ads Yönetimi',
      description: 'Antalya turizm, gayrimenkul ve yerel hizmet sektörleri için çok dilli Google Ads kampanya kurulumu, yönetimi ve optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'Antalya' }, { '@type': 'City', name: 'Muratpaşa' },
        { '@type': 'City', name: 'Alanya' }, { '@type': 'City', name: 'Manavgat' },
      ],
      url: 'https://ramsesdigital.com/antalya-google-ads',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Antalya Google Ads', item: 'https://ramsesdigital.com/antalya-google-ads' },
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

export default function AntalyaGoogleAdsPage() {
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
            Antalya Google Ads
            <br />
            <span className="gradient-text">Çok Dilli, Sezonluk Hedefleme</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Otel işletmeniz için İngilizce/Rusça hedefli reklam, gayrimenkul ofisiniz için yabancı alıcı odaklı kampanya. Muratpaşa&apos;dan Alanya&apos;ya tüm Antalya&apos;ya uzaktan hizmet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Kampanya Analizi" variant="primary" />
            <Link href="/hizmetler/google-ads-kocaeli" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Detaylı Hizmet Bilgisi <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: '10+', label: 'Antalya ilçesi — hedeflenebilir' },
            { value: '1-2 Hafta', label: 'Kampanya başlangıcı' },
            { value: '3 Dil', label: 'TR / EN / RU kampanya desteği' },
            { value: '7/24', label: 'Reklam izleme' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Antalya İçin Google Ads Hizmetlerimiz</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
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
            <Clock size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">Antalya&apos;da Sezonluk Bütçe Yönetimi Neden Kritik?</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Antalya&apos;nın turizm ağırlıklı ekonomisinde talep yıl boyunca sabit değil — yaz sezonunda rekabet ve CPC yükselirken,
              kış aylarında erken rezervasyon kampanyaları daha düşük maliyetle daha kaliteli tıklama getirebilir.
              <strong className="text-white"> Quality Score</strong> ve doğru dil hedeflemesi, sezon farkı gözetmeksizin
              rakibinizden daha az ödeyip daha üstte çıkmanızı sağlar.
            </p>
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
          { label: 'Antalya Dijital Pazarlama', href: '/antalya-dijital-pazarlama' },
          { label: 'Antalya SEO', href: '/antalya-seo' },
          { label: 'Antalya Web Tasarım', href: '/antalya-web-tasarim' },
          { label: 'Antalya Reklam Ajansı', href: '/antalya-reklam-ajansi' },
          { label: 'Google Ads Ajansı (Türkiye Geneli)', href: '/google-ads-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Antalya&apos;da Reklamlarınız Bugün Başlasın</h2>
          <p className="text-zinc-400 text-lg mb-8">Mevcut kampanyanızı ücretsiz analiz edelim ya da sıfırdan kuralım.</p>
          <CalendlyButton label="Ücretsiz Kampanya Analizi" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
