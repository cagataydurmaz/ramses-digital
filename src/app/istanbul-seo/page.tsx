import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import SeoChecklist from '@/components/SeoChecklist'
import SeoPriceTable from '@/components/SeoPriceTable'
import { MapPin, Search, ArrowRight, CheckCircle2, FileText, Link2, BarChart3, Zap, Award, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'İstanbul SEO Ajansı | İstanbul SEO Hizmeti — Ramses Dijital',
  description:
    'İstanbul SEO ajansı: Kadıköy, Beşiktaş, Bakırköy, Pendik ve tüm ilçeler için yerel ve teknik SEO. Gerçek İstanbul referansları, şeffaf fiyat aralıkları ve ücretsiz SEO analizi.',
  alternates: { canonical: 'https://ramsesdigital.com/istanbul-seo' },
  openGraph: {
    title: 'İstanbul SEO Ajansı | Ramses Dijital',
    description: 'İstanbul işletmeleri için yerel SEO, teknik SEO ve GEO/AEO optimizasyonu.',
    url: 'https://ramsesdigital.com/istanbul-seo',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const features = [
  { icon: Search, title: 'İstanbul Yerel SEO', desc: '"Kadıköy + hizmetiniz", "Beşiktaş + hizmetiniz" gibi ilçe bazlı aramalarda Google harita paketine girin. 39 ilçeye özel anahtar kelime stratejisi.' },
  { icon: FileText, title: 'Teknik SEO & Core Web Vitals', desc: 'Site hızı, mobil uyum, indexlenebilirlik ve Core Web Vitals optimizasyonu — İstanbul\'un yoğun rekabetinde teknik fark belirleyici.' },
  { icon: Zap, title: 'GEO & AEO', desc: 'Yapay zekâ araçlarının ve arama özetlerinin alıntılayabileceği net, yapılandırılmış içerik. Sonuç garanti edilmez.' },
  { icon: Link2, title: 'Kurumsal Backlink İnşası', desc: 'İstanbul merkezli sektörel medya, ticaret odaları ve dizinlerden yüksek otoriteli link profili.' },
  { icon: BarChart3, title: 'Yüksek Hacimli İçerik Stratejisi', desc: 'İstanbul\'un arama hacmi Türkiye\'nin en yükseği — doğru içerik mimarisiyle bu hacmi organik trafiğe çevirin.' },
  { icon: Award, title: 'İlçe Bazlı Optimizasyon', desc: 'Kadıköy, Beşiktaş, Şişli, Bakırköy, Ataşehir, Üsküdar, Beylikdüzü — her ilçeye özel sayfa ve GBP stratejisi.' },
]

const ilceler = ['Kadıköy', 'Beşiktaş', 'Şişli', 'Bakırköy', 'Ataşehir', 'Üsküdar', 'Beylikdüzü', 'Maltepe', 'Kartal', 'Pendik']

const ilceRehberi = [
  { ad: 'Kadıköy', not: 'Hizmet, sağlık, eğitim ve yeme-içme işletmelerinin yoğun olduğu, yerel aramaların çok canlı olduğu ilçe. Harita sonuçları ve gerçek yorumlar belirleyici; Moda, Fenerbahçe, Göztepe gibi semt adlarıyla yapılan aramalar daha ulaşılabilir.' },
  { ad: 'Beşiktaş', not: 'Hukuk büroları, danışmanlık firmaları ve kurumsal hizmetler öne çıkıyor. Uzmanlık alanı başına ayrı sayfa ve güven unsurları (belgeler, referanslar, yazar bilgisi) sıralamada fark yaratıyor.' },
  { ad: 'Şişli', not: 'Ofis yoğunluğu nedeniyle B2B ve profesyonel hizmet aramaları ağırlıkta. Mecidiyeköy ve Nişantaşı gibi alt bölgeler ayrı arama kitleleri oluşturuyor; rekabet yüksek olduğu için dar ve hizmete özgü kelimelerle başlamak gerekiyor.' },
  { ad: 'Bakırköy', not: 'Adliye çevresi nedeniyle hukuk aramaları belirgin; sağlık ve perakende de güçlü. "Bakırköy + hizmet" aramalarında rekabet genel İstanbul aramalarına göre daha düşük.' },
  { ad: 'Ataşehir', not: 'Finans ve kurumsal ofislerin yanında yeni konut bölgeleri hizmet aramalarını artırıyor. Kurumsal sayfa yapısı ile yerel harita görünürlüğünün birlikte kurulması öneriliyor.' },
  { ad: 'Üsküdar', not: 'Köklü yerleşim ve aile odaklı nüfus; sağlık, eğitim, kurs ve esnaf aramaları öne çıkıyor. Semt adlarıyla yapılan aramalar ve doğru Google İşletme Profili hızlı sonuç verebiliyor.' },
  { ad: 'Pendik & Kartal', not: 'Anadolu yakasının doğusunda sanayi, lojistik ve hızla büyüyen konut bölgeleri bir arada. Kocaeli\'ye yakın olduğu için Gebze çevresiyle birlikte hedeflenebilecek, rekabeti merkez ilçelere göre daha düşük bir alan.' },
  { ad: 'Beylikdüzü & Esenyurt', not: 'Avrupa yakasının batısında yoğun konut ve hizmet işletmesi var. Mahalle ve site adlarıyla yapılan yerel aramalarda iyi kurgulanmış sayfalarla görünürlük kazanmak mümkün.' },
]

const aramaStratejisi = [
  { tur: 'Genel şehir araması', ornek: 'istanbul seo ajansı', rekabet: 'Çok yüksek', yaklasim: 'Uzun vadeli hedef; güçlü içerik, referans ve bağlantı birikimi gerektirir.' },
  { tur: 'İlçe + hizmet', ornek: 'bakırköy seo ajansı', rekabet: 'Orta', yaklasim: 'İlçeye özgü içerik ve doğru harita kaydıyla daha kısa sürede ulaşılabilir.' },
  { tur: 'Sektör + şehir', ornek: 'istanbul avukat web sitesi', rekabet: 'Orta', yaklasim: 'Sektörün aradığı bilgiyi veren, uzmanlık odaklı sayfalar.' },
  { tur: 'Soru odaklı', ornek: 'seo ne kadar sürede sonuç verir', rekabet: 'Değişken', yaklasim: 'Net cevap veren rehber içerikler; güven ve marka bilinirliği sağlar.' },
]

const faqs = [
  { q: 'Bakırköy, Pendik gibi ilçeler için ayrı SEO çalışması mı gerekir?', a: 'İşletmeniz belirli ilçelere hizmet veriyorsa evet. "İlçe + hizmet" aramalarında rekabet genel İstanbul aramalarına göre daha düşüktür; ilçeye özgü içerik ve doğru Google İşletme Profili ile bu aramalarda daha kısa sürede görünürlük kazanmak mümkündür.' },
  { q: 'Avukatlar ve hukuk büroları İstanbul\'da nasıl görünür olur?', a: 'Avukatlık mesleğinde reklam yasağı bulunduğu için görünürlük büyük ölçüde organik SEO ve bilgilendirici içerikle sağlanır. Çalışma alanı başına ayrı sayfalar, mesleki kurallara uygun bilgilendirici yazılar ve güven unsurları bu süreçte belirleyicidir.' },
  { q: 'İstanbul SEO ajansı seçerken büyük ve küçük ajans arasında fark var mı?', a: 'Büyük ajanslar çok sayıda müşteriyle çalıştığı için küçük ve orta ölçekli projelere çoğunlukla standart bir süreç uygular. Küçük ajanslarda strateji kişiye özel kurulabilir ama kapasite sınırlıdır. İki durumda da sorulması gereken aynı: işi kim yapacak, neyi ölçecek ve raporu nasıl verecek?' },
  { q: 'İstanbul SEO hizmetinin kapsamı nedir?', a: 'Teknik SEO denetimi ve düzeltmeleri, anahtar kelime ve ilçe önceliklendirmesi, sayfa içi optimizasyon, içerik üretimi, Google İşletme Profili, yorum stratejisi, bağlantı çalışması ve aylık raporlama. GEO ve AEO için sık sorulan sorular ve yapılandırılmış veri de kapsama girer.' },
  { q: 'İstanbul\'da SEO hizmeti neden bu kadar rekabetçi?', a: 'İstanbul, Türkiye\'nin en yüksek arama hacmine ve en yoğun ajans rekabetine sahip pazarı. Hemen her sektörde onlarca köklü rakip zaten SEO\'ya yatırım yapıyor. Bu, tek kelimelik genel terimlerde (örn. "SEO ajansı") hızlı sonuç almayı zorlaştırır — ama ilçe bazlı ve niş odaklı stratejilerle hâlâ gerçek fırsatlar var.' },
  { q: 'İstanbul\'un 39 ilçesinin hepsi için mi çalışma yapılır?', a: 'Hayır, işletmenizin gerçek hizmet alanına göre önceliklendirme yapıyoruz. Bir hukuk bürosu için Bakırköy veya Kadıköy adliyesine yakınlık önemliyken, bir e-ticaret markası için ilçe fark etmeksizin genel İstanbul/Türkiye hedeflemesi daha mantıklı olabilir. Stratejiyi işinize göre kuruyoruz, şablon uygulamıyoruz.' },
  { q: 'İstanbul\'da SEO sonuçları ne kadar sürede görülür?', a: 'Google Business Profile ve harita sonuçları 2-4 haftada görünür olabilir. Organik web sitesi sıralamaları rekabetin yoğunluğuna göre 4-8 ay arasında belirginleşir — İstanbul\'daki rekabet Kocaeli\'ye göre daha uzun bir ufuk gerektirebilir, özellikle "İstanbul SEO ajansı" gibi genel terimlerde.' },
  { q: 'İstanbul\'da hangi sektörler SEO\'dan en çok fayda görüyor?', a: 'Hukuk (özellikle Avukatlık Kanunu nedeniyle reklam veremeyen büyük bürolar), finans ve danışmanlık, kurumsal B2B hizmetleri, e-ticaret ve sağlık sektörü İstanbul\'da yüksek arama hacmine ve yüksek müşteri değerine sahip. Rekabet yüksek olduğu için niş uzmanlık alanlarında (örn. "gayrimenkul hukuku Kadıköy") içerik üretmek daha hızlı sonuç verir.' },
  { q: 'İstanbul SEO paketi ne kadara mal olur?', a: 'İstanbul\'daki rekabet seviyesi nedeniyle paketler genellikle Kocaeli\'ye göre daha kapsamlı kurgulanır. Kapsam: teknik audit, anahtar kelime araştırması, aylık içerik üretimi, GBP yönetimi, backlink stratejisi ve raporlama. Ücretsiz danışmanlıkta net fiyat sunuyoruz.' },
  { q: 'Fiziksel olarak İstanbul\'da mısınız?', a: 'Hayır, Kocaeli kökenliyiz — ama gerçek İstanbul müşterilerimiz var. Bakırköy ve İstanbul Barosu\'na kayıtlı avukatlar için web tasarım ve SEO çalışması yürüttük (portföyümüzde canlı örnekleri var). Tüm süreç uzaktan yürütülüyor; Kadıköy\'den Beylikdüzü\'ne İstanbul\'un her ilçesinden müşterimiz olabilir.' },
  { q: 'Büyük İstanbul ajanslarıyla nasıl rekabet edebilirim?', a: 'Büyük ajansların çoğu şablon strateji uyguluyor ve küçük/orta ölçekli müşterilere düşük öncelik veriyor. Biz mühendislik disipliniyle çalışan, her müşteriye özel strateji kuran daha küçük bir ekibiz — bu da daha hızlı iletişim, daha esnek strateji ve şeffaf raporlama anlamına geliyor.' },
  { q: 'GEO (Yapay Zeka Optimizasyonu) İstanbul işletmesi için neden kritik?', a: 'İstanbul\'daki yoğun rekabet nedeniyle geleneksel Google SEO\'da üst sıraya çıkmak zaman alıyor. GEO, ChatGPT ve Gemini gibi araçlarda "İstanbul\'da güvenilir X önerir misin?" sorusuna verilen cevaplarda kaynak olarak yer alma olasılığını artırmayı hedefler — bu kanal henüz doymamış durumda, erken hareket edenler avantajlı.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'İstanbul SEO Hizmeti',
      description: 'İstanbul ve tüm ilçeleri için yerel SEO, teknik SEO, GEO ve AEO optimizasyonu.',
      provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' },
      areaServed: [
        { '@type': 'City', name: 'İstanbul' },
        { '@type': 'City', name: 'Kadıköy' },
        { '@type': 'City', name: 'Beşiktaş' },
        { '@type': 'City', name: 'Şişli' },
        { '@type': 'City', name: 'Bakırköy' },
      ],
      url: 'https://ramsesdigital.com/istanbul-seo',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'İstanbul SEO', item: 'https://ramsesdigital.com/istanbul-seo' },
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

export default function IstanbulSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">İstanbul — Tüm İlçeler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            İstanbul SEO Ajansı
            <br />
            <span className="gradient-text">Organik Trafiğinizi Büyütün</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Kadıköy&apos;den Beşiktaş&apos;a, Bakırköy&apos;den Pendik&apos;e İstanbul işletmeleri için yerel ve teknik SEO. Google&apos;da ve yapay zekâ aramalarında görünürlüğünüzü artırmak için çalışıyoruz.
          </p>
          <p className="text-zinc-500 text-sm mb-10">
            {ilceler.join(' · ')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz SEO Analizi" variant="primary" />
            <Link href="/hizmetler/seo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              SEO Hizmet Detayları <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: '39', label: 'İstanbul ilçesi — hedeflenebilir' },
            { value: '4-8 Ay', label: 'Organik sıralama için süre' },
            { value: 'En Yüksek', label: 'Türkiye\'deki arama hacmi' },
            { value: 'Organik', label: 'Reklam bütçesi gerektirmez' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">İstanbul İçin Kapsamlı SEO</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Türkiye&apos;nin en rekabetçi pazarında, ilçe bazlı farklılaştırılmış strateji.</p>
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">İstanbul&apos;dan Gerçek Referanslar</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">İstanbul Barosu&apos;na kayıtlı iki hukuk bürosu için yürüttüğümüz web ve SEO çalışmaları. İki site de yayında, kendiniz inceleyebilirsiniz.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">Beşiktaş · Hukuk</p>
              <h3 className="text-white font-semibold text-lg mb-3">Av. Furkan Arıkan</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">Ceza, iş ve gayrimenkul hukuku alanlarında çalışan bir avukat için sıfırdan kurumsal web sitesi: uzmanlık alanlarına göre yapılandırılmış içerik, WhatsApp ve telefonla hızlı iletişim.</p>
              <p className="text-zinc-300 text-sm italic mb-4">&ldquo;Sitemin hem hızlı hem de profesyonel bir görünüme kavuşmasını sağladılar. Süreç boyunca iletişim çok net ve hızlıydı.&rdquo;</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="https://furkanarikan.av.tr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">furkanarikan.av.tr</a>
                <Link href="/portfolyo/furkan-arikan" prefetch={false} className="text-blue-400 hover:underline">Vaka çalışması</Link>
              </div>
            </div>
            <div className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">Bakırköy · Hukuk</p>
              <h3 className="text-white font-semibold text-lg mb-3">Av. Mert Anıl Güler, LL.M.</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">Reklam yasağı nedeniyle görünürlüğün tamamen organik SEO ve içerikle kurulması gereken bir hukuk bürosu: kurumsal tasarım, blog ve makale altyapısı, mevzuata uygun içerik stratejisi.</p>
              <p className="text-zinc-300 text-sm italic mb-4">&ldquo;Kurumsal kimliğimize uygun, içerik odaklı bir site tasarladı. SEO çalışmasıyla birlikte dijitaldeki görünürlüğümüz belirgin şekilde arttı.&rdquo;</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="https://www.mertanilguler.av.tr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">mertanilguler.av.tr</a>
                <Link href="/portfolyo/mert-anil-guler" prefetch={false} className="text-blue-400 hover:underline">Vaka çalışması</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">İlçelere Göre İstanbul SEO</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">İstanbul tek bir pazar değil. İlçelerin iş yapısı ve arama alışkanlıkları farklı; stratejiyi işletmenizin gerçekten hizmet verdiği bölgeye göre kuruyoruz.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {ilceRehberi.map(({ ad, not }) => (
              <div key={ad} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={15} className="text-blue-400" />
                  <h3 className="text-white font-semibold">{ad} SEO</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{not}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">İstanbul&apos;da Hangi Aramalarla Başlamalı?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Rekabetin en yüksek olduğu genel aramalar uzun vadeli hedeftir. Sonucu daha hızlı getiren, ilçe ve sektör odaklı aramalarla başlamak gerekir.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/[0.06] bg-[#0D1225]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] text-zinc-400">
                  <th className="p-4 font-medium">Arama türü</th>
                  <th className="p-4 font-medium">Örnek</th>
                  <th className="p-4 font-medium">Rekabet</th>
                  <th className="p-4 font-medium">Yaklaşım</th>
                </tr>
              </thead>
              <tbody>
                {aramaStratejisi.map((r) => (
                  <tr key={r.tur} className="border-b border-white/[0.04] last:border-0 align-top">
                    <td className="p-4 text-white font-medium">{r.tur}</td>
                    <td className="p-4 text-zinc-300">&ldquo;{r.ornek}&rdquo;</td>
                    <td className="p-4 text-zinc-300 whitespace-nowrap">{r.rekabet}</td>
                    <td className="p-4 text-zinc-400">{r.yaklasim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <SeoPriceTable place="İstanbul" />

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

      <SeoChecklist
        title="İstanbul'da SEO Ajansı Seçerken Kontrol Listesi"
        intro="İstanbul'da rekabet yüksek olduğu için gerçekçi beklenti ve şeffaf süreç en önemli ayrım noktası."
        rows={[
          { kriter: 'Gerçekçi süre', bakin: 'Rekabetli aramalarda 4-8 ay gibi dürüst bir takvim veriyor mu', dikkat: '"1 ayda ilk sayfa" vaadi şüpheli' },
          { kriter: 'İlçe önceliği', bakin: '39 ilçenin hepsi yerine gerçek hizmet alanınıza odaklanıyor mu', dikkat: 'Bakırköy ile Pendik farklı arama kitleleridir' },
          { kriter: 'Geniş ve dar kelime dengesi', bakin: '"İstanbul SEO" gibi geniş kelimeyle birlikte ilçe + sektör aramaları da hedefleniyor mu', dikkat: 'Geniş kelime tek başına maliyetli ve yavaştır' },
          { kriter: 'Ölçüm', bakin: 'İlçe bazlı gösterim, tıklama ve gelen arama raporu var mı', dikkat: 'Sadece sıralama raporu yeterli değildir' },
          { kriter: 'Şeffaflık', bakin: 'Kim çalışıyor, ne yapılıyor, erişimler kimde', dikkat: 'Alan adı ve analiz erişimi sizde kalmalı' },
        ]}
      />

      <ReviewsMarquee />

      <RelatedPages
        pages={[
          { label: 'Avukatlar İçin SEO Rehberi', href: '/blog/avukatlar-icin-dijital-pazarlama-seo-rehberi' },
          { label: 'İstanbul Dijital Pazarlama', href: '/istanbul-dijital-pazarlama' },
          { label: 'İstanbul Web Tasarım', href: '/istanbul-web-tasarim' },
          { label: 'İstanbul Google Ads', href: '/istanbul-google-ads' },
          { label: 'Kocaeli SEO', href: '/kocaeli-seo' },
          { label: 'SEO Ajansı (Türkiye Geneli)', href: '/seo-ajansi' },
        ]}
      />

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp size={40} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">İstanbul&apos;da Google&apos;ın Zirvesine Çıkın</h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz SEO analiziyle başlayalım.</p>
          <CalendlyButton label="Ücretsiz SEO Analizi Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
