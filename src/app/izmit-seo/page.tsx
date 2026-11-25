import type { Metadata } from 'next'
import { HaritaTelefonBolumu } from '@/components/telefon/TelefonBolumleri'
import RaporOrnegi from '@/components/RaporOrnegi'
import KurumsalSeoBolumu from '@/components/KurumsalSeoBolumu'
import ProjeGalerisi from '@/components/ProjeGalerisi'
import KisaOzet from '@/components/KisaOzet'
import Link from 'next/link'
import CitySeoSections from '@/components/CitySeoSections'
import { sehirSeo } from '@/lib/sehirSeo'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import SeoChecklist from '@/components/SeoChecklist'
import SehirTeklifBolumu from '@/components/SehirTeklifBolumu'
import { MapPin, Search, ArrowRight, CheckCircle2, FileText, Link2, BarChart3, Zap, Award, TrendingUp } from 'lucide-react'
import HeroGuvenSatiri from '@/components/HeroGuvenSatiri'
import GoogleAramaAnimasyonu from '@/components/GoogleAramaAnimasyonu'

export const metadata: Metadata = {
  title: 'İzmit SEO Ajansı | SEO Hizmeti ve Fiyatları — Ramses Dijital',
  description:
    'İzmit SEO ajansı: yerel ve kurumsal SEO, SEO firması hizmetleri, paketler ve fiyat aralıkları.',
  alternates: { canonical: 'https://ramsesdigital.com/izmit-seo' },
  openGraph: {
    title: 'İzmit SEO Hizmeti | Ramses Dijital',
    description: 'İzmit işletmeleri için yerel SEO, teknik SEO ve GEO. Google\'da 1. sayfaya çıkın.',
    url: 'https://ramsesdigital.com/izmit-seo',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}


const features = [
  { icon: Search, title: 'Yerel SEO & Google Business', desc: '"İzmit + hizmetiniz" aramalarında harita paketine girin. GBP optimizasyonu, yerel dizinler, müşteri yorum stratejisi.' },
  { icon: FileText, title: 'Teknik SEO Denetimi', desc: 'Site hızı, Core Web Vitals, mobil uyum, crawlability ve index optimizasyonu. Teknik engelleri kaldırın.' },
  { icon: Zap, title: 'GEO & AEO Optimizasyonu', desc: 'ChatGPT, Gemini ve Perplexity\'de "İzmit\'teki [sektörünüz]" aramasında alıntılanma olasılığını artıran yapılandırılmış içerik.' },
  { icon: Link2, title: 'Backlink İnşası', desc: 'İzmit ve Kocaeli\'deki yerel kaynaklardan, sektörel sitelerden kaliteli backlink. Spam yok, organik otorite.' },
  { icon: BarChart3, title: 'İçerik Stratejisi', desc: 'İzmit\'teki potansiyel müşterilerin aradığı sorulara cevap veren blog ve pillar content. Aylık 4-8 yazı.' },
  { icon: Award, title: 'Rakip Analizi', desc: 'İzmit\'teki rakiplerinizin neden üstte olduğunu analiz edip açıklarını dolduruyoruz.' },
]

const results = [
  { metric: '3-6 Ay', label: 'Organik sıralama için gerçekçi süre' },
  { metric: '2-4 Hafta', label: 'Yerel harita sonuçları için' },
  { metric: 'Aylık', label: 'Şeffaf raporlama' },
  { metric: 'Organik', label: 'Reklam bütçesi gerektirmez' },
]

const faqs = [
  { q: 'İzmit SEO fiyatları ve SEO paketleri nelerdir?', a: 'Fiyat işletme büyüklüğüne, sektördeki rekabete ve hedeflenen bölgeye göre değişir. Sayfadaki AI teklif hesaplayıcı ile işletmenize özel tahmini teklifi hemen görebilirsiniz; kesin fiyat ücretsiz site analizinden sonra netleşir.' },
  { q: 'İzmit\'te kurumsal SEO ile yerel SEO arasındaki fark nedir?', a: 'Yerel SEO, "İzmit + hizmet" aramalarında Google haritasında ve sonuçlarda görünmeyi hedefler; psikolog, avukat, klinik ya da oto servis gibi tek lokasyonlu işletmeler için uygundur. Kurumsal SEO ise çok hizmetli, B2B ya da çok lokasyonlu firmalarda ürün/hizmet sayfası mimarisi, teknik altyapı ve güven içeriklerine odaklanır.' },
  { q: 'İzmit\'te SEO ne kadar sürede sonuç verir?', a: 'Google Business Profile ve yerel harita için 2-4 hafta içinde iyileşme görülür. Organik web sitesi sıralamaları 3-6 ay içinde belirginleşir. Rakibinize ve anahtar kelime rekabetine göre tam etki 6-12 ayda ortaya çıkar. Sabırsızlar için Google Ads\'i paralelde yürütmek önerilir.' },
  { q: 'İzmit\'te SEO maliyeti ne kadar?', a: 'İşletme büyüklüğüne ve kapsama göre değişir. Her paket: teknik denetim, anahtar kelime stratejisi, aylık içerik üretimi, backlink çalışması, GBP yönetimi ve aylık raporlama içerir. Ücretsiz danışmanlıkta işletmenize özel fiyat sunulur.' },
  { q: 'İzmit\'te hangi işletmeler SEO\'dan en çok fayda görür?', a: 'Yerel hizmet veren işletmeler (psikolog, avukat, diş hekimi, oto servis, güzellik salonu, muhasebe bürosu) yerel SEO\'dan en yüksek ROI alır. E-ticaret siteleri ulusal SEO\'dan faydalanır. B2B sanayi firmaları için içerik ve teknik SEO kombinasyonu en etkili yaklaşımdır.' },
  { q: 'Google Business Profile (GBP) ile web sitesi SEO\'su farkı nedir?', a: 'GBP harita paketini (Google Maps alanı) etkiler — yerel aramalarda üst üç işletmeden biri olmak için şart. Web sitesi SEO\'su ise organik arama sonuçlarındaki sıralamayı hedefler. İzmit\'te tam görünürlük için her ikisi birlikte yürütülmelidir.' },
  { q: 'İzmit\'teki rakiplerim çok güçlü, SEO işe yarar mı?', a: 'Güçlü rakiplerin çoğu aslında yerel SEO\'yu doğru yapmıyor — GBP eksik dolu, site yavaş, içerik yüzeysel. Rakip analizi yapıp açıklarını buluyoruz. Ayrıca rakiplerin olmadığı uzun kuyruklu anahtar kelimelerde hızlı kazanımlar mümkün.' },
  { q: 'SEO çalışmanızı nasıl raporluyorsunuz?', a: 'Aylık detaylı rapor (PDF) + canlı Looker Studio rapor panosu erişimi. Organik trafik, anahtar kelime sıralamaları, backlink kazanımları, teknik SEO sağlığı ve dönüşümler şeffaf şekilde paylaşılır. Gizli bir şey yok.' },
  { q: 'GEO (yapay zeka optimizasyonu) nedir, neden önemli?', a: 'GEO, ChatGPT veya Gemini\'ye "İzmit\'te SEO ajansı önerir misin?" denildiğinde sizi kaynak göstermesi olasılığını artıran içerik çalışmasıdır. Citation-worthy içerik, entity-based yazı ve otoriter backlink profili gerektirir. 2025\'te aramaların önemli bir kısmı AI motorlarına kayıyor.' },
  { q: 'Sözleşme süresi ve iptal koşulları nedir?', a: 'Minimum 3 ay, ideal 6 ay öneriyoruz — SEO kısa vadede değil birikimiyle çalışır. 12 aylık sözleşmelerde %15 indirim sunuyoruz. İptal için 30 gün önceden bildirim yeterli; ceza yok.' },
  ...sehirSeo['izmit'].ekSss,
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'İzmit SEO Hizmeti',
      description: 'İzmit ve Kocaeli işletmeleri için yerel SEO, teknik SEO, GEO ve AEO optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: { '@type': 'City', name: 'İzmit' },
      url: 'https://ramsesdigital.com/izmit-seo',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'İzmit SEO', item: 'https://ramsesdigital.com/izmit-seo' },
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

export default function IzmitSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="tema-koyu tema-hero relative pt-24 md:pt-32 pb-12 md:pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full pointer-events-none" />
        <div data-hero-bolunmus className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">İzmit & Kocaeli</span>
          </div>
          <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            İzmit SEO Hizmeti
            <br />
            <span className="gradient-text">Google&apos;da Üst Sıra</span>
          </h1>
          <p className="hidden sm:block text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            İzmit merkez ve çevresindeki işletmeler için yerel SEO: Google Haritalar, hizmet sayfaları ve gerçek müşteri yorumlarıyla müşterileriniz sizi bulsun. Tüm Kocaeli ilçeleri için <Link href="/kocaeli-seo" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">Kocaeli SEO</Link>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <CalendlyButton label="Ücretsiz SEO Analizi" variant="primary" />
            <Link href="/hizmetler/seo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              SEO Hizmet Detayları <ArrowRight size={14} />
            </Link>
          </div>
          <HeroGuvenSatiri />
          </div>
          <div className="mx-auto w-full max-w-[300px] lg:max-w-none">
            <GoogleAramaAnimasyonu aramalar={['izmit diş kliniği', 'izmit oto servis', 'izmit emlak ofisi']} />
          </div>
        </div>
      </section>

      <KisaOzet>
        İzmit merkezde müşteriler çoğunlukla Google Haritalar’dan ve “yakınımdaki” aramalarından gelir; işletme profili, hizmet sayfaları ve gerçek yorumlar burada belirleyicidir. Kocaeli kökenli bir ekip olarak yerel SEO çalışmasını sade ve ölçülebilir biçimde yürütüyoruz.
      </KisaOzet>

      {/* Results */}
      <section className="pb-10 md:pb-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {results.map(({ metric, label }) => (
            <div key={label} className="text-center bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
              <p className="text-3xl font-bold text-white mb-1">{metric}</p>
              <p className="text-zinc-500 text-xs leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="pb-14 md:pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              İzmit İçin Kapsamlı SEO Stratejisi
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Tek bir teknik düzeltme değil, bütünsel bir büyüme stratejisi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="kart-kompakt bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
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

      {/* Local proof */}
      <section className="py-10 md:py-14 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 size={24} className="text-blue-400 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Kocaeli&apos;den Gerçek SEO Sonucu</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Psk. Nur Çelen (Kocaeli psikolog) için yaptığımız web ve yerel SEO çalışması sonrası site
                  Google&apos;da 1. sayfaya taşındı ve yeni randevu talepleri getirmeye başladı.
                  İddia değil — <a href="https://nurcelen.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">nurcelen.com</a> adresini ziyaret edebilirsiniz.
                </p>
                <Link href="/portfolyo" className="text-blue-400 text-sm font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all">
                  Tüm Referanslar <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">İzmit SEO Sürecimiz</h2>
          <div className="space-y-4">
            {[
              { step: '01', title: 'Ücretsiz SEO Denetimi', desc: 'Sitenizin teknik durumu, mevcut sıralamalar, rakip analizi. Nerede durduğunuzu netleştiriyoruz.' },
              { step: '02', title: 'İzmit\'e Özel Strateji', desc: 'Hedef anahtar kelimeler, içerik planı, teknik öncelikler ve GBP optimizasyonu. 30/60/90 günlük yol haritası.' },
              { step: '03', title: 'Uygulama', desc: 'Teknik düzeltmeler, içerik üretimi, on-page optimizasyon, schema markup ve backlink inşası.' },
              { step: '04', title: 'Ölçüm & Raporlama', desc: 'Aylık detaylı rapor + canlı rapor panosu. Trafik, sıralama, dönüşüm — şeffaf ve anlaşılır.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-5 bg-[#0D1225] border border-white/[0.06] rounded-xl p-5">
                <span className="text-3xl font-bold text-blue-500/30 shrink-0 w-10">{step}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <CitySeoSections city="izmit" />

      <section className="py-12 md:py-16 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Sık Sorulan Sorular</h2>
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

      <SehirTeklifBolumu place="İzmit" />

      <SeoChecklist
        title="İzmit'te SEO Firması Seçerken Neye Bakmalı?"
        intro="İzmit merkezde yoğun rekabet var; doğru ortağı seçmek için şu kriterlere bakın."
        rows={[
          { kriter: 'Harita görünürlüğü', bakin: 'Google İşletme Profili yönetimi ve yorum stratejisi paket içinde mi', dikkat: 'İzmit\'te yerel aramalarda harita paketi belirleyicidir' },
          { kriter: 'Gerçek yorum', bakin: 'Yorum toplama düzeni var mı, sahte yorum teklif ediyor mu', dikkat: 'Sahte yorum profilinizi askıya aldırabilir' },
          { kriter: 'Sektör örneği', bakin: 'Sağlık, hukuk ya da hizmet sektöründe canlı sonuç gösterebiliyor mu', dikkat: 'Örnek sektörünüze yakın olmalı' },
          { kriter: 'Mahalle/semt hedefi', bakin: 'Sadece "İzmit" değil, semt ve ilçe bazlı aramaları da planlıyor mu', dikkat: 'Geniş kelime yerine dar ve ulaşılabilir aramalar daha hızlı sonuç verir' },
          { kriter: 'Şeffaf fiyat', bakin: 'Paket kapsamı ve fiyat aralığı yazılı mı', dikkat: 'Aylık sürpriz ek ücret olmamalı' },
        ]}
      />

      <HaritaTelefonBolumu yer="İzmit" arama="izmit diş kliniği" />
      <RaporOrnegi />
      <KurumsalSeoBolumu yer="İzmit" />
      <ProjeGalerisi baslik="SEO Çalıştığımız Sitelerden Örnekler" />
      <ReviewsMarquee />

      <RelatedPages
        pages={[
          { label: 'İzmit Reklam Ajansı', href: '/izmit-reklam-ajansi' },
          { label: 'İzmit Web Tasarım', href: '/izmit-web-tasarim' },
          { label: 'İzmit Google Ads', href: '/izmit-google-ads' },
          { label: 'İzmit Yazılım Ajansı', href: '/izmit-yazilim-ajansi' },
          { label: 'Kocaeli SEO', href: '/kocaeli-seo' },
          { label: 'Kocaeli’de Yerel SEO Rehberi', href: '/blog/kocaeli-seo-yerel-isletmeler-rehberi' },
          { label: 'SEO Ajansı mı Freelancer mı?', href: '/blog/seo-ajansi-mi-freelancer-mi' },
        ]}
      />

      {/* CTA */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp size={40} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            İzmit&apos;te Google&apos;ın Zirvesine Çıkın
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Ücretsiz SEO analiziyle başlayalım — ne durumda olduğunuzu ve ne yapılabileceğini netleştirelim.
          </p>
          <CalendlyButton label="Ücretsiz SEO Analizi Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
