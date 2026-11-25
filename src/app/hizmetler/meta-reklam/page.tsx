import type { Metadata } from 'next'
import Link from 'next/link'
import KurucuKutusu from '@/components/KurucuKutusu'
import KisaOzet from '@/components/KisaOzet'
import CalendlyButton from '@/components/CalendlyButton'
import MetaReklamTelefon from '@/components/telefon/MetaReklamTelefon'
import { MessageCircle, FileText, MousePointerClick, Repeat, Clapperboard, ShoppingBag, Search, Users, CheckCircle2, XCircle, ArrowRight } from 'lucide-react'

const URL = 'https://ramsesdigital.com/hizmetler/meta-reklam'

export const metadata: Metadata = {
  title: 'Instagram ve Facebook Reklam Yönetimi | Ramses Dijital',
  description:
    'Instagram ve Facebook reklamlarınızı kuruyor ve yönetiyoruz: WhatsApp mesaj, form ve yeniden hedefleme kampanyaları, Pixel ve dönüşüm ölçümü, aylık şeffaf rapor.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Instagram ve Facebook Reklam Yönetimi | Ramses Dijital',
    description: 'Meta reklamlarıyla doğru kitleye ulaşın; gelen her talep ölçülsün.',
    url: URL,
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const kampanyalar = [
  { icon: MessageCircle, title: 'WhatsApp ve DM reklamları', desc: 'Reklamı gören kişi tek dokunuşla size WhatsApp’tan ya da Instagram’dan yazar. Yerel hizmet işletmeleri için en hızlı talep yolu.' },
  { icon: FileText, title: 'Form (potansiyel müşteri) reklamları', desc: 'Ad ve telefon bilgisi Instagram’dan çıkmadan, önceden doldurulmuş formla toplanır.' },
  { icon: MousePointerClick, title: 'Site trafiği ve dönüşüm', desc: 'Ziyaretçiyi doğru sayfaya getirir; Pixel ve dönüşüm ölçümüyle hangi reklamın talep getirdiği görülür.' },
  { icon: Repeat, title: 'Yeniden hedefleme', desc: 'Sitenize gelip yazmadan ayrılan ya da Instagram hesabınızla etkileşime giren kişilere yeniden görünürsünüz.' },
  { icon: Clapperboard, title: 'Reels ve story reklamları', desc: 'Dikey video ve story formatları; içerik üretim ekibimizle birlikte hazırlanır.' },
  { icon: ShoppingBag, title: 'Katalog ve e-ticaret', desc: 'Ürün kataloğunuz Instagram ve Facebook’ta reklam olarak gösterilir; sepete ekleme ve satış ölçülür.' },
]

const karsilastirma = [
  { konu: 'Müşteri ne yapıyor?', google: 'Hizmeti arıyor', meta: 'Akışta geziniyor, sizi keşfediyor' },
  { konu: 'En güçlü olduğu yer', google: 'Acil ve net ihtiyaç (“yakınımda tesisatçı”)', meta: 'Görsel ürün, kampanya, yeni marka tanıtımı' },
  { konu: 'Hedefleme', google: 'Anahtar kelime ve konum', meta: 'Konum, yaş, ilgi alanı ve benzer kitleler' },
  { konu: 'Talep yolu', google: 'Arama, site, form', meta: 'WhatsApp, DM, form, site' },
]

const surec = [
  { step: '01', title: 'Hesap ve ölçüm kurulumu', desc: 'Reklam hesabı ve işletme portföyü düzenlenir; Pixel ve dönüşüm ölçümü kurulur. Hesaplar sizin adınıza kalır.' },
  { step: '02', title: 'Kitle ve teklif planı', desc: 'Hizmet bölgeniz, müşteri profiliniz ve bütçenize göre kampanya yapısı ve hedef kitleler belirlenir.' },
  { step: '03', title: 'Reklam içeriği', desc: 'Görsel, video ve metin varyasyonları hazırlanır; sağlık gibi hassas alanlarda mevzuata ve Meta kurallarına uygun dil kullanılır.' },
  { step: '04', title: 'Test ve iyileştirme', desc: 'Farklı içerik ve kitleler karşılaştırılır; talep getirmeyen reklamlar durdurulur, işe yarayanlara bütçe kaydırılır.' },
  { step: '05', title: 'Aylık rapor', desc: 'Harcama, gelen mesaj ve form sayısı, talep başı maliyet ve gelecek ayın planı sade bir raporla paylaşılır.' },
]

const uygun = ['Restoran, kafe, güzellik ve bakım salonları', 'Emlak, inşaat ve proje satışları', 'E-ticaret ve butik mağazalar', 'Eğitim, kurs ve etkinlikler', 'Yerel hizmet işletmeleri (WhatsApp ile talep)']
const dikkat = ['Avukatlık ve eczane gibi reklam yasağı olan meslekler için reklam önermiyoruz; SEO ve içerik öneriyoruz.', 'Sağlık hizmetlerinde iddiasız, mevzuata uygun dil şart; bazı ifadeler Meta tarafından da kısıtlanır.']

const faqs = [
  { q: 'Instagram reklamı mı Google Ads mi?', a: 'Müşteriniz hizmeti arıyorsa (acil ihtiyaç) Google Ads, sizi henüz tanımıyorsa ve ürününüz görsel olarak anlatılabiliyorsa Instagram ve Facebook reklamları daha verimlidir. Çoğu işletmede ikisi birlikte en iyi sonucu verir; ücretsiz görüşmede işletmenize uygun dağılımı öneriyoruz.' },
  { q: 'Reklam bütçesi ve yönetim ücreti nasıl ayrılıyor?', a: 'Reklam bütçesi doğrudan Meta’ya, sizin kartınızdan ödenir; bize ödenmez. Yönetim ücretimiz ayrıdır ve işletmenizin büyüklüğüne göre belirlenir. Tahmini teklif için AI teklif hesaplayıcıyı kullanabilirsiniz.' },
  { q: 'Reklam görsellerini ve videolarını siz mi hazırlıyorsunuz?', a: 'Evet. Reklam görselleri ve kısa videolar ekibimiz tarafından hazırlanır. Düzenli içerik de istiyorsanız sosyal medya içerik üretimi hizmetimizle birlikte planlanır.' },
  { q: 'Sonuçları nasıl ölçüyorsunuz?', a: 'Pixel ve dönüşüm ölçümüyle reklamdan gelen WhatsApp mesajı, form ve site talebi ayrı ayrı izlenir. Beğeni ve takipçi değil, gelen talep ve talep başı maliyet raporlanır.' },
  { q: 'Mevcut reklam hesabımı devralabilir misiniz?', a: 'Evet. İşletme portföyünüze iş ortağı olarak erişim alırız; hesap ve sayfalar sizin adınıza kalır, istediğiniz an erişimi geri alabilirsiniz.' },
  { q: 'Ne kadar sürede sonuç alırım?', a: 'Mesaj ve form reklamlarında ilk talepler genellikle kampanya açıldıktan sonraki birkaç gün içinde gelir. Kitlelerin ve içeriklerin oturması için ilk 2–4 hafta test dönemidir; sonuç garantisi verilmez.' },
]

export default function MetaReklamPage() {
  return (
    <>
      <section className="tema-koyu tema-hero relative pt-24 md:pt-32 pb-12 md:pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.16)_0%,rgba(236,72,153,0.05)_40%,transparent_70%)] rounded-full pointer-events-none" />
        <div data-hero-bolunmus className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-1.5 mb-6">
              <Users size={14} className="text-pink-400" />
              <span className="text-pink-400 text-xs font-medium tracking-wider uppercase">Instagram · Facebook · Meta Ads</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Instagram ve Facebook
              <br />
              <span className="gradient-text">Reklam Yönetimi</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto lg:mx-0 mb-10">
              Hizmet bölgenizdeki doğru kişilere ulaşın; reklamı gören müşteri tek dokunuşla size WhatsApp’tan yazsın. Kurulum, içerik, test ve aylık rapor bizden.
            </p>
            <CalendlyButton label="Ücretsiz Reklam Görüşmesi" variant="primary" />
          </div>
          <div className="order-first lg:order-none mx-auto w-full max-w-[300px] lg:max-w-none">
            <MetaReklamTelefon />
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 px-6 border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          <div><div className="text-2xl md:text-4xl font-bold text-white">50+</div><div className="text-zinc-400 text-xs md:text-sm mt-1">Tamamlanan Proje</div></div>
          <div><div className="text-2xl md:text-4xl font-bold text-white">%96</div><div className="text-zinc-400 text-xs md:text-sm mt-1">Müşteri Memnuniyeti</div></div>
          <div><div className="text-2xl md:text-4xl font-bold text-white">Aylık</div><div className="text-zinc-400 text-xs md:text-sm mt-1">Şeffaf Rapor</div></div>
          <div><div className="text-2xl md:text-4xl font-bold text-white">5.0/5</div><div className="text-zinc-400 text-xs md:text-sm mt-1">Google Puanı</div></div>
        </div>
      </section>

      <KisaOzet>
        Instagram ve Facebook reklamları, sizi henüz aramayan ama hizmet bölgenizde yaşayan ve ilgisi uyan kişilere görünmenizi sağlar. Hesap ve ölçüm kurulumunu, reklam içeriğini, testleri ve aylık raporu biz yürütüyoruz; reklam bütçesi doğrudan Meta’ya ödenir, yönetim ücretimiz ayrıdır.
      </KisaOzet>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-pink-400 text-sm font-medium tracking-wider uppercase mb-3">Kampanya türleri</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hedefinize Uygun Meta Reklamı</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Beğeni ve takipçi değil, talep hedefliyoruz. Her işletmeye uygun kampanya türü farklıdır.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {kampanyalar.map((c) => {
              const Icon = c.icon
              return (
                <div key={c.title} className="kart-kompakt bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-pink-500/30 transition-colors">
                  <div className="w-11 h-11 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4"><Icon size={20} className="text-pink-400" /></div>
                  <h3 className="text-white font-semibold text-lg mb-2">{c.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-[#080D18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Google Ads mi, Instagram Reklamı mı?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">İkisi farklı anda devreye girer. Çoğu işletmede birlikte kullanıldığında en verimli sonucu verir.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="px-4 py-3 bg-white/[0.03] text-zinc-400 font-medium"> </th>
                  <th className="px-4 py-3 bg-orange-500/10 text-orange-300 font-semibold"><span className="inline-flex items-center gap-1.5"><Search size={14} /> Google Ads</span></th>
                  <th className="px-4 py-3 bg-pink-500/10 text-pink-300 font-semibold"><span className="inline-flex items-center gap-1.5"><Users size={14} /> Instagram ve Facebook</span></th>
                </tr>
              </thead>
              <tbody>
                {karsilastirma.map((r) => (
                  <tr key={r.konu} className="border-t border-white/[0.05] text-zinc-300 align-top">
                    <td className="px-4 py-3 text-zinc-400 whitespace-nowrap">{r.konu}</td>
                    <td className="px-4 py-3 min-w-[180px]">{r.google}</td>
                    <td className="px-4 py-3 min-w-[180px]">{r.meta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6">
            <Link href="/hizmetler/google-ads" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 text-sm font-medium">Google Ads hizmetimiz <ArrowRight size={13} /></Link>
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-pink-400 text-sm font-medium tracking-wider uppercase mb-3">Süreç</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">5 Adımda Meta Reklamları</h2>
          </div>
          <div className="space-y-4">
            {surec.map((p) => (
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

      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          <div className="bg-emerald-500/[0.05] border border-emerald-500/15 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-4">Kimler için en verimli?</h2>
            <ul className="space-y-2.5">
              {uygun.map((u) => <li key={u} className="flex items-start gap-2.5 text-zinc-300 text-sm"><CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />{u}</li>)}
            </ul>
          </div>
          <div className="bg-amber-500/[0.05] border border-amber-500/15 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-4">Dikkat ettiğimiz noktalar</h2>
            <ul className="space-y-2.5">
              {dikkat.map((u) => <li key={u} className="flex items-start gap-2.5 text-zinc-300 text-sm"><XCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />{u}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <KurucuKutusu yerel />

      <section className="py-16 md:py-20 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-pink-400 text-sm font-medium tracking-wider uppercase mb-3">SSS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sık Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] transition-colors">
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

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-pink-500/10 to-transparent border border-pink-500/20 rounded-3xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Reklamlarınızı Birlikte Planlayalım</h2>
          <p className="text-zinc-400 text-lg mb-8">Mevcut reklam hesabınızı ücretsiz inceleyelim ya da sıfırdan doğru kurulumla başlayalım.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Reklam Görüşmesi" variant="primary" />
            <Link href="/teklif-al" className="text-zinc-400 hover:text-white text-sm font-medium inline-flex items-center gap-1.5">AI teklif hesaplayıcı <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'Service', name: 'Instagram ve Facebook Reklam Yönetimi', serviceType: 'Social Media Advertising', description: 'Meta (Instagram ve Facebook) reklam kampanyalarının kurulumu, yönetimi ve dönüşüm ölçümü.', provider: { '@type': 'Organization', name: 'Ramses Dijital', url: 'https://ramsesdigital.com' }, areaServed: { '@type': 'Country', name: 'Türkiye' }, url: URL },
          { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
          { '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://ramsesdigital.com' },
            { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: 'https://ramsesdigital.com/hizmetler' },
            { '@type': 'ListItem', position: 3, name: 'Instagram ve Facebook Reklam Yönetimi', item: URL },
          ] },
        ],
      })}} />
    </>
  )
}
