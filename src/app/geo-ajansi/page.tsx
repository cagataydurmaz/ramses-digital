import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import RelatedPages from '@/components/RelatedPages'
import SeoChecklist from '@/components/SeoChecklist'
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'

const URL = 'https://ramsesdigital.com/geo-ajansi'

export const metadata: Metadata = {
  title: 'GEO Ajansı | Yapay Zekâ Aramalarında Görünürlük — Ramses Dijital',
  description:
    'GEO ajansı: ChatGPT, Gemini ve Google yapay zekâ özetlerinde alıntılanma olasılığını artıran içerik ve yapı çalışması. Dürüst çerçeve, ölçüm ve sonuç garantisi verilmeyen şeffaf süreç.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'GEO Ajansı | Ramses Dijital',
    description: 'Yapay zekâ aramalarında alıntılanma olasılığını artıran içerik ve yapı çalışması.',
    url: URL,
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const faqs = [
  { q: 'GEO ile SEO arasındaki fark nedir?', a: 'SEO, arama sonuçlarında sıralanmaya odaklanır. GEO, yapay zekâ araçlarının ve özetlerinin kaynak olarak sizi kullanma olasılığına odaklanır. İkisi büyük ölçüde örtüşür: indeksli, hızlı, güvenilir ve net içerik her ikisi için de temeldir.' },
  { q: 'llms.txt dosyası gerekli mi?', a: 'Google\'ın AI özellikleri sayfası ek bir yapay zekâ metin dosyası gerekmediğini söylüyor. Diğer araçların bu dosyayı kullanıp kullanmadığına dair elimizde doğrulanmış bir bilgi yok. Eklemek düşük maliyetli olduğu için bazı sitelerde yapıyoruz ama sonuç getireceğini söylemiyoruz.' },
  { q: 'ChatGPT\'de önerilmeyi garanti ediyor musunuz?', a: 'Hayır. Hiçbir ajans bunu garanti edemez. Yaptığımız şey, içeriğinizi ve bilgilerinizi bu araçların doğru okuyup güvenebileceği şekilde hazırlamak.' },
  { q: 'Küçük bir yerel işletme için GEO gerekli mi?', a: 'Çoğu yerel işletme için önce Google İşletme Profili, net hizmet sayfaları ve gerçek yorumlar yeterli bir temeldir. GEO, bu temelin üzerine eklenen bir katmandır; temel eksikse önce onu tamamlamak daha verimli.' },
  { q: 'GEO çalışmasının sonucunu nasıl görürüm?', a: 'Search Console\'da gösterim ve tıklama, belirlediğimiz sorgularda yapay zekâ araçlarının cevaplarının düzenli kontrolü ve aylık raporla. Resmî bir GEO sıralama raporu olmadığı için bu kısım kısmen elle ve örnekleme ile yapılır.' },
  { q: 'GEO için ne kadar süre gerekir?', a: 'Teknik temel ve içerik için 1-2 ay, görünür etkiler için genellikle 3 ay ve üzeri. İçeriğin yapay zekâ cevaplarında yer alması ise tahmin edilemez ve zaman alabilir.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'GEO (Generative Engine Optimization) Hizmeti',
      description: 'Yapay zekâ araçları ve arama özetlerinde alıntılanma olasılığını artıran içerik, teknik ve güven çalışması.',
      provider: { '@type': 'ProfessionalService', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: { '@type': 'Country', name: 'Türkiye' },
      url: URL,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'GEO Ajansı', item: URL },
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
            <span className="text-blue-400 text-sm font-medium">Yapay Zekâ Aramaları</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            GEO Ajansı
            <br />
            <span className="gradient-text">Yapay Zekâ Aramalarında Görünürlük</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">ChatGPT, Gemini ve Google özetleri cevap verirken kaynak kullanıyor. İçeriğinizi bu kaynaklara girme olasılığınızı artıracak şekilde hazırlıyoruz; dürüst bir çerçevede, sonuç vaat etmeden.</p>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">GEO Nedir?</h2>
          <p className="text-zinc-400 leading-relaxed">GEO (Generative Engine Optimization), ChatGPT, Gemini, Perplexity gibi yapay zekâ araçlarının ve Google&apos;ın yapay zekâ özetlerinin cevap üretirken hangi kaynakları kullandığına yönelik içerik ve yapı çalışmasıdır. Amaç, işletmenizin bilgilerinin bu araçlar tarafından doğru anlaşılması ve kaynak olarak alıntılanma olasılığının artmasıdır. Bir sıralama değil, bir olasılık artırma çalışmasıdır.</p>
        </div>
      </section>
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
          <ShieldCheck size={24} className="text-blue-400 mb-3" />
          <h2 className="text-xl font-bold text-white mb-2">Google&apos;ın Resmî Yaklaşımı</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">Google&apos;ın resmî sayfasına göre AI Overviews ve AI Mode&apos;da yer almak için ek bir gereklilik yok; yeni makine okunur dosya, AI metin dosyası ya da özel işaretleme gerekmiyor. Sayfanın indekslenmiş ve snippet ile gösterilebilir olması gerekiyor ve gösterimin garantisi yok. Bu yüzden GEO çalışmamızın büyük kısmı iyi SEO temeli, net ve doğru içerik ve güvenilir bilgidir; sonuç vaat etmiyoruz. Kaynak: <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google AI özellikleri sayfası</a></p>
        </div>
      </section>
      <SeoChecklist
        title="GEO Çalışmasında Neler Yapıyoruz?"
        intro="Her madde, hem klasik aramada hem yapay zekâ özetlerinde işe yarayan temel işlerdir."
        rows={[
          { kriter: 'Teknik temel', bakin: 'Sayfaların taranabilir, indekslenebilir ve hızlı olması, robots ve sitemap düzeni', dikkat: 'Yapay zekâ özetleri de indekslenmiş sayfalardan beslenir' },
          { kriter: 'Net cevap içeriği', bakin: 'Gerçek müşteri sorularına kısa, doğrudan cevaplar ve altında ayrıntı', dikkat: 'Dolgu metin ve kopya içerik alıntılanmaz' },
          { kriter: 'Güven ve kaynak', bakin: 'Gerçek yazar, referans, yorum ve belgeler; iddiaların kanıtlanabilir olması', dikkat: 'Kanıtsız vaatler güveni düşürür' },
          { kriter: 'Tutarlı işletme bilgisi', bakin: 'Ad, bölge, iletişim ve hizmetlerin site, Google profili ve diğer profillerde aynı olması', dikkat: 'Çelişkili bilgi yanlış alıntıya yol açar' },
          { kriter: 'Yapılandırılmış veri', bakin: 'Görünür içerikle uyumlu şema (işletme, hizmet, SSS, makale)', dikkat: 'Görünmeyen ya da uydurma veri politika ihlalidir' },
          { kriter: 'Ölçüm', bakin: 'Search Console ve belirli sorguların yapay zekâ araçlarında elle düzenli testi', dikkat: 'Resmî bir GEO raporu yok, ölçüm kısmen elle yapılır' },
        ]}
      />
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Süreç ve Beklentiler</h2>
          <p className="text-zinc-400 leading-relaxed">Yapay zekâ görünürlüğü ölçmesi zor bir alandır. İlk 2-3 ayda teknik temelin, içeriğin ve profillerin oturmasını ve Search Console&apos;da gösterim ve tıklamaların artmasını izliyoruz. Bir yapay zekâ aracının sizi mutlaka önereceğini söylemek mümkün değil; bunu vaat eden tekliflere temkinli yaklaşmanızı öneririz.</p>
        </div>
      </section>


      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Çalışma Süreci</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
              <p className="text-blue-400 text-sm font-semibold mb-2">01</p>
              <h3 className="text-white font-semibold mb-2">Mevcut Durum Analizi</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Sitenizin indekslenme durumu, teknik altyapısı, içerik kalitesi ve işletme bilgilerinin web genelindeki tutarlılığı incelenir. Hedef sorgular yapay zekâ araçlarında test edilerek başlangıç kaydı oluşturulur.</p>
            </div>
            <div className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
              <p className="text-blue-400 text-sm font-semibold mb-2">02</p>
              <h3 className="text-white font-semibold mb-2">Strateji ve Önceliklendirme</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Müşterilerinizin sorduğu sorular ve karar aşamaları belirlenir. Hangi sayfaların güçlendirileceği, hangi içeriklerin oluşturulacağı ve hangi teknik düzeltmelerin öncelikli olduğu planlanır.</p>
            </div>
            <div className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
              <p className="text-blue-400 text-sm font-semibold mb-2">03</p>
              <h3 className="text-white font-semibold mb-2">Uygulama</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Teknik düzeltmeler, net cevap odaklı içerik, görünür içerikle uyumlu yapılandırılmış veri ve işletme profillerinin (Google İşletme Profili, sosyal profiller) tutarlı hale getirilmesi.</p>
            </div>
            <div className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
              <p className="text-blue-400 text-sm font-semibold mb-2">04</p>
              <h3 className="text-white font-semibold mb-2">Ölçüm ve Raporlama</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Search Console verileri ve belirlenen sorguların yapay zekâ araçlarında düzenli olarak test edilmesiyle aylık rapor hazırlanır; strateji sonuçlara göre güncellenir.</p>
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
          { label: 'AEO Hizmeti', href: '/aeo-hizmeti' },
          { label: 'SEO Ajansı', href: '/seo-ajansi' },
          { label: 'Kocaeli SEO', href: '/kocaeli-seo' },
          { label: 'SEO Analizi', href: '/seo-analiz' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Yapay Zekâ Aramalarında Yerinizi Birlikte Kontrol Edelim</h2>
          <p className="text-zinc-400 text-lg mb-8">30 dakikalık ücretsiz görüşmede mevcut durumunuza birlikte bakalım.</p>
          <CalendlyButton label="Ücretsiz Ön Görüşme" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Taahhüt yok · Sonuç garantisi verilmez</p>
        </div>
      </section>
    </>
  )
}
