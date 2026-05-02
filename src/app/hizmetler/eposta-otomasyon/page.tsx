import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import { Mail, Zap, Users, BarChart3, RefreshCw, Target, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'E-Posta & Otomasyon Pazarlama | CRM Entegrasyonu, Drip Kampanyalar — Ramses Dijital',
  description:
    'Kişiselleştirilmiş e-posta kampanyaları ve otomatik pazarlama akışları. CRM entegrasyonu, segmentasyon ve A/B test ile açılma oranlarını %40 artırın. Ramses Dijital Reklam Ajansı.',
  alternates: { canonical: 'https://ramsesdigital.com/hizmetler/eposta-otomasyon' },
  openGraph: {
    title: 'E-Posta Pazarlama & Otomasyon | Ramses Dijital',
    description: 'CRM entegrasyonu, drip kampanyalar ve otomatik pazarlama akışlarıyla müşteri yaşam döngüsünü optimize edin.',
    url: 'https://ramsesdigital.com/hizmetler/eposta-otomasyon',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Posta Pazarlama & Otomasyon — Ramses Dijital',
    description: 'Drip kampanyalar, CRM entegrasyonu ve segmentasyon. Ölçülebilir e-posta pazarlama.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const services = [
  {
    icon: Mail,
    title: 'Kampanya Tasarımı',
    desc: 'Marka kimliğinize uygun, mobil responsive HTML e-posta tasarımları. Her kampanya öncesi A/B test varyasyonları hazırlanır.',
  },
  {
    icon: Zap,
    title: 'Otomasyon Akışları',
    desc: 'Hoş geldiniz serisi, sepet terk, doğum günü, yeniden aktivasyon gibi tetikleyici bazlı otomatik e-posta dizileri.',
  },
  {
    icon: Users,
    title: 'CRM Entegrasyonu',
    desc: 'HubSpot, Mailchimp, ActiveCampaign, Klaviyo ve özel CRM sistemlerinizle tam entegrasyon. Veri senkronizasyonu.',
  },
  {
    icon: Target,
    title: 'Segmentasyon & Kişiselleştirme',
    desc: 'Davranış, demografi ve satın alma geçmişine göre dinamik segmentler. Her alıcıya kişiselleştirilmiş içerik.',
  },
  {
    icon: RefreshCw,
    title: 'A/B Test & Optimizasyon',
    desc: 'Konu satırı, CTA butonu, gönderim saati ve içerik A/B testleri. Veriyle desteklenen sürekli iyileştirme.',
  },
  {
    icon: BarChart3,
    title: 'Performans Analizi',
    desc: 'Açılma oranı, tıklama oranı, dönüşüm ve gelir takibi. Aylık detaylı e-posta performans raporları.',
  },
]

const process = [
  {
    step: '01',
    title: 'Liste & Platform Analizi',
    desc: 'Mevcut e-posta listenizin sağlığı (deliverability, spam rate, unsubscribe) analiz edilir. Kullandığınız platform değerlendirilir, gerekirse geçiş önerilir.',
  },
  {
    step: '02',
    title: 'Strateji & Akış Haritası',
    desc: 'Müşteri yolculuğu (buyer journey) haritalanır. Hangi aşamada, hangi mesajın gönderileceği belirlenir. Lead nurturing, onboarding, upsell ve retention akışları tasarlanır.',
  },
  {
    step: '03',
    title: 'Segmentasyon & CRM Kurulumu',
    desc: 'Davranışsal ve demografik segmentler oluşturulur. CRM ile çift yönlü veri senkronizasyonu kurulur. Özel alanlar ve etiket sistemi yapılandırılır.',
  },
  {
    step: '04',
    title: 'Kampanya & Otomasyon Üretimi',
    desc: 'HTML şablonlar, kopya metinler ve görseller hazırlanır. Tetikleyici bazlı otomasyon dizileri kurulur ve test edilir. Spam testlerinden geçirilir.',
  },
  {
    step: '05',
    title: 'Analiz & Optimizasyon',
    desc: 'A/B testler sürekli yürütülür. Açılma, tıklama ve dönüşüm oranlarına göre optimizasyon yapılır. Aylık rapor ve strateji güncelleme toplantısı.',
  },
]

const faqs = [
  {
    q: 'E-posta pazarlama hâlâ işe yarıyor mu?',
    a: 'Evet — ve diğer kanalların çoğundan daha yüksek ROI sağlıyor. Her 1 TL\'lik e-posta yatırımının ortalama 38-42 TL geri döndürdüğü raporlanıyor (Litmus, 2023). Sosyal medya algoritmalarının organik erişimi sıfırladığı çağda, e-posta doğrudan müşteriye ulaşmanın en güvenilir yolu.',
  },
  {
    q: 'Hangi e-posta platformunu kullanıyorsunuz?',
    a: 'Müşteri altyapısına göre Mailchimp, ActiveCampaign, Klaviyo, HubSpot veya Brevo kullanıyoruz. E-ticaret için genellikle Klaviyo, B2B SaaS için ActiveCampaign veya HubSpot öneriyoruz. Platform değişikliği gerekirse veri migrasyonu dahil tam geçiş yapıyoruz.',
  },
  {
    q: 'E-posta listemi nasıl büyüteceğim?',
    a: 'Lead magnet (e-kitap, şablon, ücretsiz araç), pop-up formlar, web sitenize entegre abonelik kutucukları ve Google Ads ile landing page kombinasyonu en etkili yöntemler. Satın alınmış listeler kesinlikle önerilmez — hem yasaldışı hem de deliverability\'i mahveder.',
  },
  {
    q: 'Spam klasörüne düşmemek için ne yapılıyor?',
    a: 'SPF, DKIM ve DMARC DNS kayıtları doğru yapılandırılır. Gönderici domain ısınması (warming) yapılır. Temiz liste hijyeni (bounced, unsubscribed kaldırılır), doğal konu satırları ve %yüksek engagement oranı sağlanır. Her kampanya öncesi spam skoru kontrol edilir.',
  },
  {
    q: 'Otomasyon kurulumu ne kadar sürer?',
    a: 'Basit bir hoş geldiniz serisi 3-5 iş günü. Kapsamlı bir müşteri yaşam döngüsü otomasyonu (onboarding + nurturing + upsell + win-back) 3-4 hafta. CRM entegrasyonu ve özel segmentasyon ek 1-2 hafta sürebilir.',
  },
  {
    q: 'Açılma oranım çok düşük, neden?',
    a: 'Düşük açılma oranının başlıca nedenleri: zayıf konu satırı, yanlış gönderim zamanı, soğuk/satın alınmış liste, spam klasörüne düşme. Hesap auditimizde bu 4 faktörü analiz eder, hızlı kazanımlar (quick wins) belirleriz. Genellikle ilk optimizasyondan sonra %20-40 açılma oranı artışı görülüyor.',
  },
  {
    q: 'GDPR ve KVKK uyumu nasıl sağlanıyor?',
    a: 'Çift opt-in (double opt-in) akışları kurulur, abonelik tarihi ve kaynağı kayıt altına alınır. Çıkış mekanizmaları (unsubscribe) her e-postaya eklenir. Veri saklama ve silme prosedürleri tanımlanır. KVKK kapsamında veri işleme sözleşmesi imzalanır.',
  },
  {
    q: 'E-posta pazarlama SEO\'yu etkiler mi?',
    a: 'Doğrudan değil — ama dolaylı olarak güçlü bir SEO sinyali oluşturur. E-posta trafiği sitenizdeki sayfaları tekrar ziyaret ettirir (düşük bounce rate), yeni içeriklerinizi anında duyurarak erken backlink ve sosyal paylaşım kazandırır. Bunlar Google\'ın içerikleri daha hızlı keşfetmesini ve sıralamayı iyileştirmesini sağlar.',
  },
]

export default function EpostaOtomasyonPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
            <Mail size={14} className="text-orange-400" />
            <span className="text-orange-400 text-xs font-medium tracking-wider uppercase">E-Posta & Otomasyon Pazarlama</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
            Akıllı E-Posta
            <br />
            <span className="gradient-text">Pazarlama & Otomasyon</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            CRM entegrasyonu, davranışsal tetikleyiciler ve kişiselleştirilmiş içeriklerle
            e-posta kanalınızı en yüksek ROI&apos;lu pazarlama motoruna dönüştürün.
          </p>
          <CalendlyButton label="Ücretsiz Strateji Görüşmesi" variant="primary" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">42x</div>
            <div className="text-zinc-400 text-sm mt-1">Ortalama E-Posta ROI</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">%38</div>
            <div className="text-zinc-400 text-sm mt-1">Ortalama Açılma Oranı</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">5 gün</div>
            <div className="text-zinc-400 text-sm mt-1">İlk Otomasyon Kurulum</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">200+</div>
            <div className="text-zinc-400 text-sm mt-1">Entegrasyon Desteği</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-500 text-sm font-medium tracking-wider uppercase mb-3">Hizmetler</p>
            <h2 className="text-4xl font-bold text-white mb-4">E-Posta Pazarlama Kapsamı</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Kampanya tasarımından CRM entegrasyonuna, segmentasyondan gelir takibine kadar tam kapsamlı e-posta pazarlama yönetimi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-orange-500/30 transition-colors">
                  <div className="w-11 h-11 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-orange-400" />
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
            <p className="text-orange-500 text-sm font-medium tracking-wider uppercase mb-3">Süreç</p>
            <h2 className="text-4xl font-bold text-white mb-4">5 Adımda E-Posta Otomasyonu</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">E-Posta Pazarlama Neden Kritik?</h2>
          <div className="space-y-5 text-zinc-300 leading-relaxed">
            <p>
              Sosyal medya algoritmalarının organik erişimi neredeyse sıfırladığı günümüzde, <strong className="text-white">e-posta listeniz en değerli pazarlama varlığınızdır.</strong> Takipçileriniz bir platformun mülkü; e-posta aboneleriniz ise sizin. Hiçbir algoritma değişikliği onlara erişiminizi engelleyemez.
            </p>
            <p>
              Litmus&apos;un 2023 araştırmasına göre e-posta pazarlama, her 1 TL yatırım için ortalama 42 TL geri döndürüyor — Google Ads veya sosyal medya reklamlarının çok üzerinde. Bu rakamın sırrı: <strong className="text-white">zaten ilgi duyan kitleye doğru zamanda doğru mesaj gönderilmesi.</strong>
            </p>
            <p>
              Ramses Dijital&apos;in e-posta otomasyon yaklaşımı sadece kampanya göndermekle sınırlı değil. Müşteri yolculuğunun her aşamasına (farkındalık → değerlendirme → satın alma → sadakat) özgün, tetikleyici bazlı akışlar tasarlıyoruz. Bir kullanıcı sepetini terk ettiğinde, ürünü görüntülediğinde veya belirli bir sayfayı ziyaret ettiğinde otomatik devreye giren diziler kuruyoruz.
            </p>
            <p>
              <strong className="text-white">CRM entegrasyonu</strong>, e-posta pazarlamanın en kritik bileşeni. Satış ekibinizin HubSpot&apos;taki notları, pazarlama ekibinin Klaviyo kampanyalarını doğrudan etkilesin. Bir lead satışa dönüştüğünde nurturing e-postaları otomatik dursun, upsell dizisi başlasın — tüm bunları kurup yönetiyoruz.
            </p>
            <p>
              <strong className="text-white">Deliverability (teslim edilebilirlik)</strong> görmezden gelinen ama en önemli faktör. SPF, DKIM, DMARC kayıtları doğru yapılandırılmadan gönderilen e-postaların %30&apos;u spam kutusuna düşüyor. Bizimle çalışan müşterilerin spam oranı &lt;%0.1&apos;in altında kalıyor.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Score Note — Google Ads bağlantısı */}
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0D1225] border border-orange-500/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={18} className="text-orange-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">E-Posta & Google Ads Quality Score Bağlantısı</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  E-posta listenizdeki müşterileri Google Ads&apos;te Customer Match ile hedefleyerek <strong className="text-white">Quality Score&apos;unuzu doğrudan artırabilirsiniz.</strong> Marka isminizi tanıyan, e-postanızı açan kullanıcılar reklamınıza tıkladığında dönüşüm oranı yükselir → Google bu kitleyi &ldquo;kaliteli&rdquo; olarak değerlendirir → CPC düşer, Ad Rank artar. E-posta + Google Ads entegrasyonu, dijital pazarlama stratejinizin en güçlü kombo&apos;sudur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
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

      {/* Related Links */}
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">İlgili Hizmetler & Rehberler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hizmetler/n8n-otomasyon" className="group bg-[#0D1225] border border-white/[0.06] hover:border-orange-500/30 rounded-xl p-5 transition-all">
              <p className="text-orange-400 text-xs font-medium uppercase tracking-wider mb-2">Hizmet</p>
              <h3 className="text-white font-medium leading-snug group-hover:text-orange-300 transition-colors">n8n İş Akışı Otomasyonu <ArrowRight size={14} className="inline ml-1" /></h3>
            </Link>
            <Link href="/hizmetler/google-ads-kocaeli" className="group bg-[#0D1225] border border-white/[0.06] hover:border-orange-500/30 rounded-xl p-5 transition-all">
              <p className="text-orange-400 text-xs font-medium uppercase tracking-wider mb-2">Hizmet</p>
              <h3 className="text-white font-medium leading-snug group-hover:text-orange-300 transition-colors">Google Ads Yönetimi <ArrowRight size={14} className="inline ml-1" /></h3>
            </Link>
            <Link href="/blog/n8n-otomasyon-rehberi" className="group bg-[#0D1225] border border-white/[0.06] hover:border-orange-500/30 rounded-xl p-5 transition-all">
              <p className="text-orange-400 text-xs font-medium uppercase tracking-wider mb-2">Blog</p>
              <h3 className="text-white font-medium leading-snug group-hover:text-orange-300 transition-colors">n8n Otomasyon Rehberi <ArrowRight size={14} className="inline ml-1" /></h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/20 rounded-3xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">E-Posta Kanalınızı Gelir Motoruna Dönüştürün</h2>
          <p className="text-zinc-400 text-lg mb-8">Liste analizi, strateji önerisi ve ilk otomasyon kurulum planını ücretsiz hazırlayalım.</p>
          <CalendlyButton label="Ücretsiz Strateji Görüşmesi" variant="primary" />
        </div>
      </section>

      {/* Schema — Service */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'E-Posta Pazarlama & Otomasyon',
        description: 'CRM entegrasyonu, segmentasyon, drip kampanyalar ve davranışsal tetikleyicilerle e-posta pazarlama yönetimi.',
        provider: { '@type': 'Organization', name: 'Ramses Dijital Reklam Ajansı', url: 'https://ramsesdigital.com' },
        areaServed: [{ '@type': 'City', name: 'İzmit' }, { '@type': 'City', name: 'Kocaeli' }, { '@type': 'Country', name: 'Türkiye' }],
        serviceType: 'Email Marketing',
        url: 'https://ramsesdigital.com/hizmetler/eposta-otomasyon',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'E-Posta Pazarlama Hizmetleri',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Posta Kampanya Tasarımı' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Otomasyon Akışı Kurulumu' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM Entegrasyonu' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Segmentasyon & Kişiselleştirme' } },
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
          { '@type': 'ListItem', position: 3, name: 'E-Posta & Otomasyon Pazarlama', item: 'https://ramsesdigital.com/hizmetler/eposta-otomasyon' },
        ],
      })}} />
    </>
  )
}
