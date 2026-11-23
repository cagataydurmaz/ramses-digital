import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Scale, Stethoscope, Brain, PawPrint, Calculator, ShoppingCart, Coffee, Briefcase, Hospital, Smile, Sparkles, Home, Car } from 'lucide-react'
import { sektorler } from '@/lib/sektorler'
import RelatedPages from '@/components/RelatedPages'
import KisaOzet from '@/components/KisaOzet'
import CalendlyButton from '@/components/CalendlyButton'

const SITE = 'https://ramsesdigital.com'
const title = 'Sektörlere Göre SEO ve Dijital Pazarlama | Ramses Dijital'
const description = 'Avukatlar, diş hekimleri, psikologlar, veteriner klinikleri, mali müşavirler, e-ticaret, restoran ve kafeler için sektöre özel SEO, web tasarım ve Google Ads.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE}/sektorler` },
  openGraph: { title, description, url: `${SITE}/sektorler`, images: [`${SITE}/og-image.png`] },
}

const ikon: Record<string, typeof Briefcase> = {
  'avukat-hukuk-burolari': Scale,
  'dis-hekimleri-klinikler': Stethoscope,
  'psikolog-terapistler': Brain,
  'veteriner-klinikleri': PawPrint,
  'mali-musavirler': Calculator,
  'e-ticaret': ShoppingCart,
  'restoran-kafe': Coffee,
  'ozel-hastane-poliklinik': Hospital,
  'agiz-dis-sagligi-merkezleri': Smile,
  'guzellik-merkezleri': Sparkles,
  'emlak-ofisleri': Home,
  'oto-servis': Car,
}

const sss = [
  { q: 'Hangi sektörlerde Google reklamı verilemez?', a: 'Avukatlar meslek kuralları gereği reklam veremez; mali müşavirlikte de tanıtım sınırlıdır. Sağlıkta (diş hekimi, psikolog, klinik) reklam mümkün olsa da sağlık mevzuatına uygun, iddiasız bir dil zorunludur. Bu sektörlerde asıl kanal SEO, içerik ve Google İşletme Profili olur.' },
  { q: 'Hangi sektörler Google Ads\'ten en hızlı sonuç alır?', a: 'Müşterinin hemen ihtiyaç duyduğu ve aradığı hizmetler: veteriner klinikleri (acil aramalar), e-ticaret (ürün aramaları), restoran ve kafeler (yakınımdaki aramaları). Bu sektörlerde reklam ilk günden görünürlük sağlar; SEO ise zamanla maliyeti düşürür.' },
  { q: 'Sektöre özel SEO neden genel SEO\'dan farklı?', a: 'Her sektörde müşteri farklı kelimelerle arar, farklı sorular sorar ve farklı güven unsurlarına bakar: avukatta uzmanlık alanı ve makaleler, klinikte hekim bilgisi ve yorumlar, e-ticarette ürün ve kargo bilgisi. Sayfa yapısı ve içerik buna göre kurulmazsa sıralama da talep de zayıf kalır.' },
  { q: 'Sektörüm listede yok, yine çalışabilir miyiz?', a: 'Evet. Listelenen sektörler en çok çalıştığımız alanlar; farklı sektörlerden işletmelerle de çalışıyoruz. Ücretsiz görüşmede sektörünüzün kurallarını ve müşteri davranışını birlikte çıkarıyoruz.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'CollectionPage', name: 'Sektörlere Göre Dijital Pazarlama', description, url: `${SITE}/sektorler`,
      hasPart: sektorler.map((s) => ({ '@type': 'WebPage', name: s.ad, url: `${SITE}/sektorler/${s.slug}` })) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Sektörler', item: `${SITE}/sektorler` },
    ] },
    { '@type': 'FAQPage', mainEntity: sss.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ],
}

export default function SektorlerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">Sektörler</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Sektörünüze Özel<br /><span className="gradient-text">SEO ve Dijital Pazarlama</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Her sektörün kuralları, müşteri davranışı ve rekabeti farklı. Stratejiyi buna göre kuruyoruz.</p>
        </div>
      </section>
      <KisaOzet>Avukatlık ve mali müşavirlik gibi mesleklerde reklam yasak, sağlıkta ise tanıtım kurallarla sınırlı; bu yüzden her sektörde aynı plan işe yaramaz. Aşağıdan sektörünüzü seçerek hangi kanalları önerdiğimizi, dikkat edilmesi gereken kuralları ve ilgili rehberlerimizi görebilirsiniz.</KisaOzet>
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sektorler.map((s) => {
            const Icon = ikon[s.slug] ?? Briefcase
            return (
              <Link key={s.slug} href={`/sektorler/${s.slug}`} className="group bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-6 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h2 className="text-white font-semibold text-lg mb-2">{s.ad}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{s.baslikVurgu}</p>
                <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">İncele <ArrowRight size={13} /></span>
              </Link>
            )
          })}
        </div>
      </section>
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Sektörlere Göre Öncelikli Kanallar</h2>
          <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-500/10 text-blue-300 text-left">
                  <th className="px-4 py-3 font-semibold">Sektör</th>
                  <th className="px-4 py-3 font-semibold">Google reklamı</th>
                  <th className="px-4 py-3 font-semibold">Öncelikli kanal</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                {[
                  ['Avukat ve hukuk büroları', 'Verilemez (meslek kuralı)', 'SEO, makale içerik, Google İşletme Profili'],
                  ['Diş hekimleri ve klinikler', 'Mevzuata uygun dille', 'Yerel SEO, yorumlar, hekim sayfaları'],
                  ['Psikolog ve terapistler', 'Mevzuata uygun dille', 'SEO, bilgilendirici içerik, online randevu'],
                  ['Veteriner klinikleri', 'Uygun (acil aramalar)', 'Google Ads + harita görünürlüğü'],
                  ['Mali müşavirler', 'Sınırlı', 'SEO, B2B içerik, LinkedIn'],
                  ['E-ticaret', 'Uygun (alışveriş reklamları)', 'Google Ads + ürün SEO'],
                  ['Restoran ve kafe', 'Uygun (yakınımdaki aramalar)', 'Google İşletme Profili, yorumlar, harita'],
                  ['Özel hastane ve poliklinik', 'Mevzuata uygun dille', 'Branş ve hekim sayfaları, SEO'],
                  ['Ağız ve diş sağlığı merkezi', 'Mevzuata uygun dille', 'Tedavi, hekim ve şube sayfaları'],
                  ['Güzellik ve estetik merkezi', 'Uygun (tıbbi estetikte sınırlı)', 'Yerel SEO, Instagram, Google Ads'],
                  ['Emlak ve inşaat', 'Uygun', 'Bölge ve proje sayfaları, Google Ads'],
                  ['Oto servis ve ekspertiz', 'Uygun (acil aramalar)', 'Harita görünürlüğü + Google Ads'],
                ].map(([a, b, c]) => (
                  <tr key={a} className="border-t border-white/[0.05]">
                    <td className="px-4 py-3 text-white">{a}</td>
                    <td className="px-4 py-3">{b}</td>
                    <td className="px-4 py-3">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {sss.map(({ q, a }) => (
              <div key={q} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2 text-sm md:text-base">{q}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Sektörünüz Listede Yok mu?</h2>
          <p className="text-zinc-400 mb-6">Farklı sektörlerden işletmelerle de çalışıyoruz. Ücretsiz görüşmede ihtiyacınızı konuşalım ya da AI teklif hesaplayıcıyla tahmini teklifi görün.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton label="Ücretsiz Görüşme" variant="primary" />
            <Link href="/teklif-al" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">AI Teklif Hesaplayıcı <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
      <RelatedPages pages={[{ label: 'Hizmetler', href: '/hizmetler' }, { label: 'Şehirler', href: '/sehirler' }, { label: 'Ücretsiz Araçlar', href: '/araclar' }, { label: 'Portföy', href: '/portfolyo' }]} />
    </>
  )
}
