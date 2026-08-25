import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import { Share2, Image as ImageIcon, Video, Calendar, Palette, Hash, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sosyal Medya İçerik Üretimi | Post, Story, Video Tasarımı — Ramses Dijital',
  description:
    'Instagram, LinkedIn ve diğer platformlar için post, story ve video içerik üretimi. Marka kimliğinize uygun tasarım, içerik takvimi ve strateji. Ramses Dijital Yazılım ve Dijital Pazarlama Ajansı.',
  alternates: { canonical: 'https://ramsesdigital.com/hizmetler/sosyal-medya' },
  openGraph: {
    title: 'Sosyal Medya İçerik Üretimi | Ramses Dijital',
    description: 'Post, story ve video tasarımı, içerik takvimi ve marka sesiyle sosyal medyada tutarlı bir görünüm kurun.',
    url: 'https://ramsesdigital.com/hizmetler/sosyal-medya',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sosyal Medya İçerik Üretimi — Ramses Dijital',
    description: 'Post, story, video tasarımı ve içerik takvimi. Marka kimliğinize uygun sosyal medya içeriği.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  {
    icon: ImageIcon,
    title: 'Feed Post Tasarımı',
    desc: 'Marka renklerinize ve tipografinize uygun, Instagram/LinkedIn feed formatında (1080×1350) özgün post tasarımları.',
  },
  {
    icon: Video,
    title: 'Story & Video İçerik',
    desc: 'Dikey format (1080×1920) story tasarımları ve kısa video/reels içerikleri. Sticker ve etkileşim önerileriyle birlikte.',
  },
  {
    icon: Calendar,
    title: 'İçerik Takvimi & Planlama',
    desc: 'Haftalık/aylık içerik takvimi — hangi gün, hangi konu, hangi format. Sektörünüze uygun konu başlıkları önceden planlanır.',
  },
  {
    icon: Palette,
    title: 'Marka Sesi & Görsel Kimlik',
    desc: 'Sosyal medyada tutarlı bir marka dili kurulur — renk paleti, tipografi, görsel stil tüm içeriklerde aynı kalır.',
  },
  {
    icon: Hash,
    title: 'Caption & Hashtag Stratejisi',
    desc: 'Her içerik için özgün metin, sektörünüze ve hedef kitlenize uygun hashtag seti hazırlanır.',
  },
  {
    icon: Share2,
    title: 'Platform Optimizasyonu',
    desc: 'Instagram, LinkedIn, Facebook gibi platformların kendi format ve boyut gereksinimlerine uygun üretim.',
  },
]

const process = [
  {
    step: '01',
    title: 'Marka & Hedef Kitle Analizi',
    desc: 'Marka kimliğiniz, hedef kitleniz ve rakipleriniz analiz edilir. Hangi platformda, hangi içerik türünün öne çıkacağı belirlenir.',
  },
  {
    step: '02',
    title: 'İçerik Stratejisi & Takvim',
    desc: 'Aylık içerik takvimi hazırlanır — konu başlıkları, format dağılımı (post/story/video) ve yayın sıklığı netleştirilir.',
  },
  {
    step: '03',
    title: 'Tasarım & Üretim',
    desc: 'Post, story ve video içerikleri marka kimliğinize uygun olarak tasarlanır ve üretilir. Caption ve hashtag setleriyle birlikte teslim edilir.',
  },
  {
    step: '04',
    title: 'Revizyon & Onay',
    desc: 'Teslim edilen içerikler üzerinde revizyon turu yapılır, onaylanan içerikler yayın için hazır hale getirilir.',
  },
  {
    step: '05',
    title: 'Teslim & Sonraki Döngü',
    desc: 'İçerikler yayınlanmaya hazır formatta teslim edilir. Bir sonraki dönem için performansa göre strateji güncellenir.',
  },
]

const faqs = [
  {
    q: 'Hesabımı da yönetiyor musunuz, paylaşımları siz mi yapıyorsunuz?',
    a: 'Hayır — biz post, story ve video içeriklerini tasarlayıp yayın için hazır şekilde teslim ediyoruz. Günlük paylaşım, yorum yanıtlama ve topluluk moderasyonu hizmet kapsamımızda değil. Bu şekilde odağımızı içerik kalitesine verebiliyoruz.',
  },
  {
    q: 'Ayda kaç içerik üretiyorsunuz?',
    a: 'İçerik hacmi platforma ve pakete göre değişir; ücretsiz danışmanlıkta ihtiyacınıza uygun bir aylık içerik takvimi netleştiriyoruz.',
  },
  {
    q: 'Video içerik prodüksiyonu neleri kapsıyor?',
    a: 'Kısa format (reels/story) video kurgu ve tasarımı sağlıyoruz. Sahne çekimi gerektiren video prodüksiyon talepleri proje bazında ayrıca değerlendirilir.',
  },
  {
    q: 'İçerikleri kim yayınlayacak?',
    a: 'Teslim ettiğimiz içerikleri siz veya ekibiniz platforma yükler. İsterseniz Meta Business Suite gibi araçlarda zamanlanmış paylaşım için dosyaları hazır formatta teslim ediyoruz.',
  },
  {
    q: 'Sadece Instagram için mi çalışıyorsunuz?',
    a: 'Instagram öncelikli çalışıyoruz; LinkedIn ve Facebook için de format uyarlaması yapıyoruz. B2B işletmeler için LinkedIn odaklı içerik stratejisi de kurabiliyoruz.',
  },
  {
    q: 'Marka kimliğim yoksa ne oluyor?',
    a: 'Renk paleti ve tipografi seçimiyle başlayan temel bir görsel kimlik kurulumu yapıyoruz, ardından tüm içerikler bu kimlik üzerinden üretiliyor.',
  },
  {
    q: 'Sosyal medya reklamı da veriyor musunuz?',
    a: 'Ücretli sosyal medya reklamları bu hizmetin kapsamı dışında; Google Ads ve arama odaklı reklam yönetimi sunuyoruz. Sosyal medya içeriklerinizi reklam materyali olarak kullanmak isterseniz üretilen tasarımlar buna uygun formatta hazırlanabilir.',
  },
]

export default function SosyalMedyaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-1.5 mb-6">
            <Share2 size={14} className="text-pink-400" />
            <span className="text-pink-400 text-xs font-medium tracking-wider uppercase">Sosyal Medya İçerik Üretimi</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
            Marka Kimliğinize Uygun
            <br />
            <span className="gradient-text">Sosyal Medya İçeriği</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Post, story ve video içeriklerinizi tasarlıyor, içerik takvimi ve strateji kuruyoruz —
            siz sadece yayınlayın.
          </p>
          <CalendlyButton label="Ücretsiz Strateji Görüşmesi" variant="primary" />
        </div>
      </section>

      {/* Format bilgi şeridi */}
      <section className="py-12 px-6 border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white">1080×1350</div>
            <div className="text-zinc-400 text-sm mt-1">Feed Post Formatı</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white">1080×1920</div>
            <div className="text-zinc-400 text-sm mt-1">Story Formatı</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white">Aylık</div>
            <div className="text-zinc-400 text-sm mt-1">İçerik Takvimi</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white">IG · LI · FB</div>
            <div className="text-zinc-400 text-sm mt-1">Platform Desteği</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-3">Hizmetler</p>
            <h2 className="text-4xl font-bold text-white mb-4">Sosyal Medya İçerik Kapsamı</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Tasarımdan içerik takvimine, marka sesinden hashtag stratejisine kadar üretim odaklı sosyal medya içerik hizmeti.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-pink-500/30 transition-colors">
                  <div className="w-11 h-11 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-pink-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-3">Süreç</p>
            <h2 className="text-4xl font-bold text-white mb-4">5 Adımda İçerik Üretimi</h2>
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

      {/* Deep Content — GEO/AEO */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Sosyal Medyada Tutarlılık Neden Önemli?</h2>
          <div className="space-y-5 text-zinc-300 leading-relaxed">
            <p>
              Sosyal medya hesabınız, çoğu potansiyel müşterinin markanızla ilk temas noktası. <strong className="text-white">Düzensiz paylaşılan, marka kimliğinden uzak içerikler</strong> güven inşa etmek yerine güveni zedeler. Biz bu noktada devreye giriyoruz: her post, story ve video aynı görsel dilin, aynı marka sesinin parçası olacak şekilde tasarlanıyor.
            </p>
            <p>
              Hizmetimiz <strong className="text-white">üretim odaklı</strong> — içerikleri tasarlıyor, yazıyor ve teslim ediyoruz. Hesap yönetimi, günlük paylaşım ve yorum moderasyonu işini bilinçli olarak kapsam dışında tutuyoruz; çünkü bu iki iş farklı beceri ve zaman gerektiriyor. Sonuç: siz veya ekibiniz ne zaman, nasıl paylaşacağınıza karar veriyorsunuz, biz içeriğin kalitesinden sorumlu oluyoruz.
            </p>
            <p>
              İçerik takvimi hazırlarken sadece &ldquo;bugün ne paylaşalım&rdquo; sorusuna değil, <strong className="text-white">markanızın hedef kitlesine hangi mesajı hangi formatta iletmesi gerektiğine</strong> odaklanıyoruz — eğitici içerik, sektörel bilgi, müşteri hikayeleri gibi farklı içerik türlerini dengeli bir takvimde birleştiriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-3">SSS</p>
            <h2 className="text-4xl font-bold text-white mb-4">Sık Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] transition-colors">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <h3 className="text-white font-semibold text-base">{item.q}</h3>
                  <span className="text-pink-400 text-2xl leading-none group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="text-zinc-400 text-sm leading-relaxed mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">İlgili Hizmetler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hizmetler/eposta-otomasyon" className="group bg-[#0D1225] border border-white/[0.06] hover:border-pink-500/30 rounded-xl p-5 transition-all">
              <p className="text-pink-400 text-xs font-medium uppercase tracking-wider mb-2">Hizmet</p>
              <h3 className="text-white font-medium leading-snug group-hover:text-pink-300 transition-colors">E-Posta & Otomasyon Pazarlama <ArrowRight size={14} className="inline ml-1" /></h3>
            </Link>
            <Link href="/hizmetler/web-tasarim-kocaeli" className="group bg-[#0D1225] border border-white/[0.06] hover:border-pink-500/30 rounded-xl p-5 transition-all">
              <p className="text-pink-400 text-xs font-medium uppercase tracking-wider mb-2">Hizmet</p>
              <h3 className="text-white font-medium leading-snug group-hover:text-pink-300 transition-colors">Web Tasarımı & Geliştirme <ArrowRight size={14} className="inline ml-1" /></h3>
            </Link>
            <Link href="/hizmetler/veri-analizi" className="group bg-[#0D1225] border border-white/[0.06] hover:border-pink-500/30 rounded-xl p-5 transition-all">
              <p className="text-pink-400 text-xs font-medium uppercase tracking-wider mb-2">Hizmet</p>
              <h3 className="text-white font-medium leading-snug group-hover:text-pink-300 transition-colors">Veri Analizi & Stratejik Danışmanlık <ArrowRight size={14} className="inline ml-1" /></h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-pink-500/10 to-transparent border border-pink-500/20 rounded-3xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sosyal Medyanız Marka Kimliğinizi Yansıtsın</h2>
          <p className="text-zinc-400 text-lg mb-8">İçerik takvimi ve ilk tasarım önerilerini ücretsiz danışmanlıkta hazırlayalım.</p>
          <CalendlyButton label="Ücretsiz Strateji Görüşmesi" variant="primary" />
        </div>
      </section>

      {/* Schema — Service */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Sosyal Medya İçerik Üretimi',
        description: 'Post, story ve video içerik tasarımı, içerik takvimi ve marka sesi stratejisi ile sosyal medya içerik üretimi.',
        provider: { '@type': 'Organization', name: 'Ramses Dijital Yazılım ve Dijital Pazarlama Ajansı', url: 'https://ramsesdigital.com' },
        areaServed: [{ '@type': 'City', name: 'İzmit' }, { '@type': 'City', name: 'Kocaeli' }, { '@type': 'Country', name: 'Türkiye' }],
        serviceType: 'Social Media Content Production',
        url: 'https://ramsesdigital.com/hizmetler/sosyal-medya',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Sosyal Medya İçerik Hizmetleri',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Feed Post Tasarımı' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Story & Video İçerik' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'İçerik Takvimi & Planlama' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Caption & Hashtag Stratejisi' } },
          ],
        },
      })}} />

      {/* Schema — FAQ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })}} />

      {/* Schema — Breadcrumb */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://ramsesdigital.com' },
          { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: 'https://ramsesdigital.com/hizmetler' },
          { '@type': 'ListItem', position: 3, name: 'Sosyal Medya İçerik Üretimi', item: 'https://ramsesdigital.com/hizmetler/sosyal-medya' },
        ],
      })}} />
    </>
  )
}
