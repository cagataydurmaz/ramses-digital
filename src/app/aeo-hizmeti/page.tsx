import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import SeoChecklist from '@/components/SeoChecklist'
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'

const URL = 'https://ramsesdigital.com/aeo-hizmeti'

export const metadata: Metadata = {
  title: 'AEO Hizmeti | Cevap Kutuları ve Soru Odaklı SEO — Ramses Dijital',
  description:
    'AEO hizmeti: cevap kutuları, sesli arama ve yapay zekâ özetlerinde cevabın sizden gelme olasılığını artıran soru odaklı içerik çalışması. Güncel Google bilgileriyle şeffaf süreç.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'AEO Hizmeti | Ramses Dijital',
    description: 'Soru odaklı aramalarda cevabın sizden gelme olasılığını artıran içerik çalışması.',
    url: URL,
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const faqs = [
  { q: 'AEO ile GEO arasındaki fark nedir?', a: 'AEO, soru cevap formatındaki aramalarda (cevap kutuları, sesli aramalar) cevabın sizden gelmesine odaklanır. GEO, yapay zekâ araçlarının ve özetlerinin sizi kaynak olarak kullanmasına odaklanır. İkisi birbirini besler; temel iş net ve güvenilir cevap içeriğidir.' },
  { q: 'SSS şeması hâlâ işe yarıyor mu?', a: 'Google SSS zengin sonucunu artık göstermiyor (resmî değişiklik günlüğüne göre). Şemanın arama sonucunda görünüm faydası yok, ama sayfadaki görünür soru-cevap içeriği değerini koruyor. Şema ekleyip eklememe tercihi sizindir, bir görünüm vaat etmiyoruz.' },
  { q: 'Sesli arama için ayrı bir çalışma gerekir mi?', a: 'Sesli aramalar çoğunlukla aynı net cevap içeriğinden beslenir. Ayrı bir teknik gereklilik yok; kısa, doğrudan cevaplar ve doğru yerel bilgi (Google İşletme Profili) en önemli unsurlardır.' },
  { q: 'Cevap kutusunda çıkmayı garanti ediyor musunuz?', a: 'Hayır. Cevap kutuları Google\'ın kararına bağlı ve değişken. Garanti içeren tekliflere temkinli yaklaşmanızı öneririz. Biz sayfalarınızı bu kutulara aday olacak biçimde hazırlıyoruz.' },
  { q: 'Kaç soru için içerik hazırlanır?', a: 'Sektöre ve rekabete göre değişir. Önce gerçek müşteri sorularını topluyoruz, en çok aranan ve işinize en çok değer katan soruları önceliklendirip sayfalara dağıtıyoruz.' },
  { q: 'Mevcut sitemde nasıl uygulanır?', a: 'Çoğunlukla yeni sayfa yazmak yerine mevcut sayfalara net soru-cevap bölümleri eklemek ve tekrar eden sayfaları birleştirmek yeterli olur. Bunu ücretsiz ön görüşmede sitenize bakarak netleştiririz.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'AEO (Answer Engine Optimization) Hizmeti',
      description: 'Soru odaklı aramalarda cevap kutuları, sesli arama ve özetlerde alıntılanma olasılığını artıran içerik çalışması.',
      provider: { '@type': 'ProfessionalService', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: { '@type': 'Country', name: 'Türkiye' },
      url: URL,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'AEO Hizmeti', item: URL },
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Cevap Odaklı Arama</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AEO Hizmeti
            <br />
            <span className="gradient-text">Sorulara Cevap Veren Sayfalar</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">İnsanlar artık soru sorarak arıyor. Sorulara net, doğru ve güncel cevap veren sayfalar hazırlıyoruz; cevap kutularında yer alma olasılığınızı artırmayı hedefliyoruz, garanti vermeden.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Ön Görüşme" variant="primary" />
            <Link href="/teklif-al" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              Tahmini Fiyat Hesapla <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">AEO Nedir?</h2>
          <p className="text-zinc-400 leading-relaxed">AEO (Answer Engine Optimization), insanların soru sorarak arama yaptığı durumlarda cevap kutuları, öne çıkan snippet&apos;ler, sesli asistanlar ve yapay zekâ özetlerinde cevabın sizin sayfanızdan gelme olasılığını artırmaya yönelik içerik çalışmasıdır. Örneğin "su deposu ne sıklıkla temizlenir?" ya da "Kocaeli&apos;de SEO fiyatları ne kadar?" gibi sorulara net cevap veren sayfalar hazırlamak.</p>
        </div>
      </section>
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
          <ShieldCheck size={24} className="text-blue-400 mb-3" />
          <h2 className="text-xl font-bold text-white mb-2">Güncel Bir Google Değişikliği</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">Soru-cevap (FAQ) işaretlemesinin arama sonuçlarında zengin sonuç olarak gösterilmesi Google tarafından sonlandırıldı (değişiklik günlüğüne göre 7 Mayıs 2026). Bu yüzden SSS şeması artık sonuçlarda görünüm vaat etmez; ama soru-cevap formatındaki görünür içerik hem kullanıcı hem arama özetleri için hâlâ değerlidir. Kaynak: <a href="https://developers.google.com/search/updates" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google arama dokümantasyonu güncellemeleri</a></p>
        </div>
      </section>
      <SeoChecklist
        title="AEO Çalışmasında Neler Yapıyoruz?"
        intro="Odak, gerçek soruları bulup net cevaplayan sayfalar hazırlamak."
        rows={[
          { kriter: 'Soru araştırması', bakin: 'Müşterilerin gerçekten sorduğu soruları Search Console, müşteri görüşmeleri ve arama önerilerinden toplamak', dikkat: 'Uydurma soru değil, gerçek soru' },
          { kriter: 'Kısa ve net cevap', bakin: 'Soruya ilk 1-2 cümlede doğrudan cevap, devamında ayrıntı ve örnek', dikkat: 'Uzun girişler cevabı gizler' },
          { kriter: 'Sayfa yapısı', bakin: 'Soru başlıkları (H2/H3), tablolar, listeler; her sayfanın tek bir amacı', dikkat: 'Birbirini tekrar eden sayfalar yarışır' },
          { kriter: 'Görünür içerik ile uyum', bakin: 'Varsa şema, sayfada görünen soru ve cevapla birebir uyumlu', dikkat: 'Görünmeyen içeriği işaretlemek yasak' },
          { kriter: 'Güncellik ve kaynak', bakin: 'Tarih, yazar, kaynak; içerik değişince güncelleme', dikkat: 'Eski bilgi alıntı kaybettirir' },
          { kriter: 'Ölçüm', bakin: 'Search Console sorgu raporunda soru kalıplı aramaların gösterim ve tıklaması', dikkat: 'Cevap kutusu görünümü sabit değildir' },
        ]}
      />
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Süreç ve Beklentiler</h2>
          <p className="text-zinc-400 leading-relaxed">AEO sonuçları değişkendir: cevap kutuları ve özetler Google&apos;ın kararlarına göre ortaya çıkar ya da kaybolur. İlk 2-3 ayda soru kalıplı aramalarda gösterim ve tıklama artışını ve sayfaların indekslenip cevaplanan soruların çeşitlenmesini izliyoruz. Belirli bir kutuda yer alacağınızı garanti etmiyoruz.</p>
        </div>
      </section>


      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Çalışma Süreci</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
              <p className="text-blue-400 text-sm font-semibold mb-2">01</p>
              <h3 className="text-white font-semibold mb-2">Soru Envanteri</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Search Console sorgu verileri, müşteri görüşmeleri ve arama önerilerinden hedef kitlenizin gerçekten sorduğu sorular derlenir ve iş değerine göre önceliklendirilir.</p>
            </div>
            <div className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
              <p className="text-blue-400 text-sm font-semibold mb-2">02</p>
              <h3 className="text-white font-semibold mb-2">İçerik Mimarisi</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Her soru için hangi sayfanın yanıt vereceği belirlenir. Birbirini tekrar eden sayfalar birleştirilir, her sayfaya tek ve net bir amaç verilir.</p>
            </div>
            <div className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
              <p className="text-blue-400 text-sm font-semibold mb-2">03</p>
              <h3 className="text-white font-semibold mb-2">Cevap Odaklı İçerik</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Her soruya ilk bir iki cümlede doğrudan yanıt, ardından ayrıntı, tablo ve örneklerle destekleyen içerik hazırlanır; gerekiyorsa görünür içerikle uyumlu şema eklenir.</p>
            </div>
            <div className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
              <p className="text-blue-400 text-sm font-semibold mb-2">04</p>
              <h3 className="text-white font-semibold mb-2">Ölçüm ve Güncelleme</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Soru kalıplı aramalardaki gösterim ve tıklamalar izlenir; içerikler güncel bilgiye göre düzenli olarak yenilenir.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
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
          { label: 'GEO Ajansı', href: '/geo-ajansi' },
          { label: 'SEO Ajansı', href: '/seo-ajansi' },
          { label: 'Kocaeli SEO', href: '/kocaeli-seo' },
          { label: 'Blog', href: '/blog' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Müşterilerinizin Sorduğu Sorulara Birlikte Bakalım</h2>
          <p className="text-zinc-400 text-lg mb-8">30 dakikalık ücretsiz görüşmede mevcut durumunuza birlikte bakalım.</p>
          <CalendlyButton label="Ücretsiz Ön Görüşme" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Sonuç garantisi verilmez</p>
        </div>
      </section>
    </>
  )
}
