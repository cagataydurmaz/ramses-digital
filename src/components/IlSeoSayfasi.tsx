import type { Metadata } from 'next'
import { HaritaTelefonBolumu } from '@/components/telefon/TelefonBolumleri'
import { seoBaslik } from '@/lib/seoBaslik'
import Link from 'next/link'
import { MapPin, Search, ArrowRight, CheckCircle2, TrendingUp, Briefcase } from 'lucide-react'
import SehirTeklifBolumu from '@/components/SehirTeklifBolumu'
import SeoChecklist from '@/components/SeoChecklist'
import CalendlyButton from '@/components/CalendlyButton'
import ReviewsMarquee from '@/components/ReviewsMarquee'
import RelatedPages from '@/components/RelatedPages'
import KisaOzet from '@/components/KisaOzet'
import type { IlSeoVeri } from '@/lib/ilSeo'
import HeroGuvenSatiri from '@/components/HeroGuvenSatiri'
import GoogleAramaAnimasyonu from '@/components/GoogleAramaAnimasyonu'
import { ilSeoYakindan } from '@/lib/ilSeoYakindan'
import KurucuKutusu from '@/components/KurucuKutusu'
import { Lightbulb } from 'lucide-react'

// Veri odaklı il/ilçe SEO sayfası (src/lib/ilSeo.ts). Görünüm mevcut şehir SEO
// sayfalarıyla (ör. /kayseri-seo) aynı bileşen ve sınıfları kullanır.
const SITE = 'https://ramsesdigital.com'

// Şablon cümleleri sayfadan sayfaya değişsin diye: slug'a göre sabit (her derlemede aynı) varyant seçimi.
function secici(slug: string) {
  let h = 0
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) >>> 0
  return <T,>(secenekler: T[], kaydir = 0): T => secenekler[(h + kaydir) % secenekler.length]
}

export function ilSeoMetadata(v: IlSeoVeri): Metadata {
  const title = seoBaslik(`${v.ad} SEO Ajansı – Ücretsiz Site Analizi`)
  const description = `${v.bulunma} Google'da müşteri bulmak isteyen işletmelere SEO hizmeti. Ücretsiz site analizi, net fiyat, aylık rapor, taahhüt yok. Google'da 5.0 puan.`
  const url = `${SITE}/${v.slug}-seo`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [`${SITE}/og-image.png`] },
  }
}

export default function IlSeoSayfasi({ v }: { v: IlSeoVeri }) {
  const url = `${SITE}/${v.slug}-seo`
  const sec = secici(v.slug)
  const yakindan = ilSeoYakindan[v.slug]
  const genelSss = [
    { q: `${v.ad} SEO fiyatları ne kadar?`, a: 'Fiyat, sektörünüzdeki rekabete ve hedeflediğiniz bölgeye göre değişir. Aşağıdaki AI teklif hesaplayıcı ile işletmenize özel tahmini teklifi hemen görebilirsiniz; kesin fiyat ücretsiz site analizinden sonra netleşir.' },
    { q: 'GEO ve AEO nedir, işletmeme ne kazandırır?', a: `GEO ve AEO, ChatGPT ve Gemini gibi yapay zekâ araçlarında ve Google'ın cevap kutularında kaynak olarak gösterilme olasılığını artırmaya yönelik içerik ve yapı çalışmasıdır. "${v.bulunma} güvenilir X önerir misin?" gibi sorularda görünürlük hedeflenir; sonuç garanti edilmez.` },
  ]
  const faqs = [...v.sss, ...genelSss]
  const sektorListe = v.sektorler.slice(0, 3).map((s) => s.ad.toLocaleLowerCase('tr-TR'))
  const hizmetSekli = v.yerel ? 'İzmit merkezli ekibimizle veriyoruz; gerektiğinde yüz yüze görüşebiliriz' : 'uzaktan veriyoruz'
  const ilkIlceler = v.ilceler.slice(0, 2).map((i) => i.ad).join(', ')
  const kisaOzet = sec([
    `${v.bulunma} Google'da ve haritalarda bulunmak isteyen işletmelere yerel SEO, teknik SEO ve GEO/AEO hizmetini ${hizmetSekli}. ${v.icin} öne çıkan alanlarını (${sektorListe.join(', ')}) ve ${ilkIlceler} gibi bölgeleri ayrı ele alıyoruz. Fiyat için aşağıdaki AI teklif hesaplayıcıyı kullanabilirsiniz; sıralama garantisi verilmez.`,
    `Bu sayfa ${v.bulunma} müşteri arayan işletmeler için: ${sektorListe.join(', ')} gibi alanlarda Google aramalarında ve haritada görünür olmanın yolunu anlatıyor. Hizmeti ${hizmetSekli}. ${ilkIlceler} gibi bölgeler için ayrı plan yapıyor, sonuçları aylık raporla paylaşıyoruz. Sıralama garantisi verilmez; tahmini fiyat için sayfadaki AI teklif hesaplayıcıyı kullanabilirsiniz.`,
    `${v.ad} için SEO çalışmamız üç ayağa dayanır: harita görünürlüğü, ilçe ve sektör odaklı sayfalar, yapay zekâ aramalarına uygun içerik. ${v.icin} ${sektorListe.join(', ')} alanlarında ve ${ilkIlceler} gibi bölgelerinde bu planı işletmenize göre kuruyoruz; hizmeti ${hizmetSekli}. Garanti vaadi yok, aylık şeffaf rapor var. Fiyat için AI teklif hesaplayıcıyı deneyebilirsiniz.`,
  ])

  // Ajans seçme kriterleri: 8'lik havuzdan sayfaya göre 5'i seçilir (sıra da değişir).
  const kriterHavuzu = [
    { kriter: 'Gerçek referans', bakin: 'Canlı sitesini ziyaret edebileceğiniz örnek işler var mı', dikkat: 'Ekran görüntüsü yerine canlı site ve ölçülebilir çıktı isteyin' },
    { kriter: 'Harita görünürlüğü', bakin: 'Google İşletme Profili yönetimi pakete dahil mi', dikkat: 'Yerel aramalarda harita sonuçları belirleyicidir' },
    { kriter: 'Bölge hedefi', bakin: `Sadece "${v.ad}" değil, ilçe ve sektör aramalarını da planlıyor mu`, dikkat: 'Dar ve ulaşılabilir aramalar daha hızlı sonuç verir' },
    { kriter: 'Garanti iddiası', bakin: 'Sıralama garantisi veriyor mu', dikkat: 'Google, sıralama garantisi verilemeyeceğini açıkça belirtir' },
    { kriter: 'Raporlama', bakin: 'Search Console verisiyle düzenli rapor sunuyor mu', dikkat: 'Raporlar gösterim, tıklama ve dönüşüm içermeli' },
    { kriter: 'Sözleşme süresi', bakin: 'Uzun taahhüt ve cayma bedeli var mı', dikkat: 'Esnek, aylık ilerleyen çalışma riski azaltır' },
    { kriter: 'Hesap sahipliği', bakin: 'Site, alan adı ve Google hesapları sizin adınıza mı', dikkat: 'Ajans değişse bile tüm hesaplar sizde kalmalı' },
    { kriter: 'İçerik kalitesi', bakin: `${v.ad} için özgün içerik mi yazılıyor, kopya sayfa mı açılıyor`, dikkat: 'Kopya ve içi boş sayfalar Google’da fayda yerine zarar getirir' },
  ]
  const bas = sec([0, 1, 2, 3, 4, 5, 6, 7], 6)
  const kriterler = [2, ...[0, 1, 3, 4, 5, 6, 7].map((_, i, arr) => arr[(bas + i) % arr.length])].slice(0, 5).map((i) => kriterHavuzu[i])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${v.ad} SEO Hizmeti`,
        description: `${v.ad} ve çevresi için yerel SEO, teknik SEO, GEO ve AEO optimizasyonu.`,
        provider: { '@type': 'LocalBusiness', name: 'Ramses Dijital', url: SITE },
        areaServed: [{ '@type': 'City', name: v.ad }, ...v.ilceler.slice(0, 3).map((i) => ({ '@type': 'Place', name: i.ad }))],
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Şehirler', item: `${SITE}/sehirler` },
          { '@type': 'ListItem', position: 3, name: `${v.ad} SEO`, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  }

  const ilgili = [
    ...(v.rehber ? [{ label: `${v.ad} Web Tasarım`, href: `/ilceler/${v.rehber}` }] : []),
    ...(v.ilgili ?? []),
    { label: 'Google Yorumları Nasıl Artırılır?', href: '/blog/google-yorumlari-nasil-artirilir' },
    { label: 'Tüm Şehirler', href: '/sehirler' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full pointer-events-none" />
        <div data-hero-bolunmus className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">
              {v.ust ? `${v.ad}, ${v.ust.ad}` : `${v.ad} — Tüm İlçeler`}
            </span>
          </div>
          <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {v.ad} SEO Ajansı
            <br />
            <span className="gradient-text">Google&apos;da Müşteri Bulun</span>
          </h1>
          <p className="hidden sm:block text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-4 leading-relaxed">{v.ozet}</p>
          <p className="hidden sm:block text-zinc-500 text-sm mb-10">{v.bolgeler.join(' · ')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <CalendlyButton label="Ücretsiz SEO Analizi" variant="primary" />
            <Link href="/hizmetler/seo" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
              SEO Hizmet Detayları <ArrowRight size={14} />
            </Link>
          </div>
          <HeroGuvenSatiri />
          </div>
          <div className="mx-auto w-full max-w-[300px] lg:max-w-none">
            <GoogleAramaAnimasyonu aramalar={[`${v.ad} diş kliniği`, `${v.ad} oto servis`, `${v.ad} emlak ofisi`].map((x) => x.toLocaleLowerCase('tr-TR'))} />
          </div>
        </div>
      </section>

      <KisaOzet>{kisaOzet}</KisaOzet>

      <section className="pb-14 md:pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{v.bulunma} Hangi Sektörler İçin SEO?</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">{sec([`${v.icin} ekonomik yapısına göre farklılaştırılmış strateji; şablon değil, sektöre özel plan.`, `${v.bulunma} en çok aranan iş kollarında öne çıkmak için her sektöre ayrı yaklaşım.`, `Her sektörün müşterisi Google'da farklı arar; ${v.ad} için plan bu farka göre kurulur.`], 1)}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {v.sektorler.map(({ ad, not }) => (
              <div key={ad} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Briefcase size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{ad}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{not}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bölgelere Göre {v.ad} SEO</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              {sec([
                'Her bölgenin iş yapısı ve arama alışkanlığı farklı; stratejiyi işletmenizin gerçekten hizmet verdiği yere göre kuruyoruz.',
                `${v.ad} tek parça bir pazar değil; müşteri çoğu zaman bulunduğu semtin adıyla arar.`,
                `Hizmet verdiğiniz bölgeyi net tanımlamak, ${v.bulunma} doğru müşteriye görünmenin ilk adımı.`,
              ], 2)}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {v.ilceler.map(({ ad, not }) => (
              <div key={ad} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={15} className="text-blue-400" />
                  <h3 className="text-white font-semibold">{ad}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{not}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {yakindan && (
        <section className="pb-12 md:pb-14 px-6">
          <div className="max-w-5xl mx-auto bg-[#0D1225] border border-white/[0.08] rounded-2xl p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{yakindan.baslik}</h2>
            <p className="text-zinc-300 leading-relaxed mb-8">{yakindan.paragraf}</p>
            <div className="grid md:grid-cols-3 gap-4">
              {yakindan.ipuclari.map((ip) => (
                <div key={ip.baslik} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb size={15} className="text-amber-400 shrink-0" />
                    <h3 className="text-white font-semibold text-sm">{ip.baslik}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{ip.metin}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <KurucuKutusu yerel={!!v.yerel} />

      <section className="pb-10 md:pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{v.bulunma} Hangi Aramalarla Başlamalı?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">{sec(['Sonucu en hızlı getiren, ilçe ve sektör odaklı aramalarla başlamak gerekir.', 'Genel aramalardan önce dar ve ulaşılabilir aramaları hedeflemek daha hızlı sonuç verir.', `${v.ad} için örnek arama türleri ve her birinde izlenecek yol.`], 3)}</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-500/10 text-blue-300 text-left">
                  <th className="px-4 py-3 font-semibold">Arama türü</th>
                  <th className="px-4 py-3 font-semibold">Örnek</th>
                  <th className="px-4 py-3 font-semibold">Rekabet</th>
                  <th className="px-4 py-3 font-semibold">Yaklaşım</th>
                </tr>
              </thead>
              <tbody>
                {v.aramalar.map((a) => (
                  <tr key={a.ornek} className="border-t border-white/[0.05] text-zinc-300 align-top">
                    <td className="px-4 py-3 whitespace-nowrap">{a.tur}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5"><Search size={12} className="text-zinc-500" />{a.ornek}</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{a.rekabet}</td>
                    <td className="px-4 py-3 min-w-[220px]">{a.yaklasim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-8">
            <CheckCircle2 size={24} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">{v.yerel ? 'Kocaeli Merkezli Bir Ekibiz' : 'Türkiye Genelinde Canlı Referanslarımız Var'}</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              {v.yerel ? (
                <>İzmit merkezli bir ekibiz; {v.yonelme} yakınız ve gerektiğinde yüz yüze görüşme ayarlayabiliriz. Kocaeli&apos;de ve Türkiye genelinde ziyaret edilebilir, canlı SEO ve web tasarım projelerimizi portföyümüzde inceleyebilirsiniz.</>
              ) : (
                <>{sec([
                  `${v.yonelme} özel bir vaka çalışmamız henüz yok; ${v.ad} işletmelerine uzaktan hizmet veriyoruz. Türkiye genelinde ziyaret edilebilir, canlı SEO ve web tasarım projelerimizi portföyümüzde inceleyebilirsiniz.`,
                  `${v.ad} işletmeleriyle süreci uzaktan, video görüşme ve WhatsApp üzerinden yürütüyoruz. ${v.bulunma} henüz yayınlanmış bir vaka çalışmamız yok; farklı şehirlerdeki canlı projelerimizi portföyde görebilirsiniz.`,
                ], 7)}</>
              )}
            </p>
            <Link href="/portfolyo" className="text-blue-400 text-sm font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all">
              Portföyü İncele <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
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

      <HaritaTelefonBolumu yer={v.ad} arama={`${v.ad.toLocaleLowerCase('tr-TR')} diş kliniği`} />
      <ReviewsMarquee />

      <SehirTeklifBolumu place={v.ad} />

      <SeoChecklist
        title={`${v.bulunma} SEO Firması Seçerken Neye Bakmalı?`}
        intro={sec(['Uzaktan çalışan ya da yerel bir ajansla görüşürken şu kriterleri sorun.', `${v.ad} için ajans seçerken bu beş soruyu sormanız yeterli.`, 'Teklifleri karşılaştırırken aşağıdaki kriterlere bakın.'], 5)}
        rows={kriterler}
      />

      <RelatedPages pages={ilgili} />

      <section className="py-12 md:py-16 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp size={40} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">{v.bulunma} Google&apos;da Öne Çıkın</h2>
          <p className="text-zinc-400 text-lg mb-8">{sec(['Ücretsiz SEO analiziyle başlayalım.', 'Önce sitenizi ücretsiz inceleyelim, sonra birlikte karar verelim.', 'Sitenizin bugünkü durumunu ücretsiz analiz edelim.'], 4)}</p>
          <CalendlyButton label="Ücretsiz SEO Analizi Al" variant="primary" />
          <p className="text-zinc-600 text-xs mt-4">Kredi kartı gerekmez · Taahhüt yok</p>
        </div>
      </section>
    </>
  )
}
