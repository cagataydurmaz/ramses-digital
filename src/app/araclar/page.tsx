import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Star, Calculator, Type } from 'lucide-react'
import { araclar } from '@/lib/araclar'
import RelatedPages from '@/components/RelatedPages'
import KisaOzet from '@/components/KisaOzet'

const SITE = 'https://ramsesdigital.com'
const title = 'Ücretsiz Dijital Pazarlama Araçları | Ramses Dijital'
const description = 'WhatsApp link oluşturucu, Google yorum linki, Google Ads bütçe hesaplayıcı ve meta başlık kontrolü. Ücretsiz, kayıtsız, tarayıcıda çalışır.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE}/araclar` },
  openGraph: { title, description, url: `${SITE}/araclar`, images: [`${SITE}/og-image.png`] },
}

const ikon: Record<string, typeof MessageCircle> = {
  'whatsapp-link-olusturucu': MessageCircle,
  'google-yorum-linki': Star,
  'google-ads-butce-hesaplayici': Calculator,
  'meta-baslik-kontrol': Type,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'CollectionPage', name: 'Ücretsiz Dijital Pazarlama Araçları', description, url: `${SITE}/araclar`,
      hasPart: araclar.map((a) => ({ '@type': 'WebApplication', name: a.ad, url: `${SITE}/araclar/${a.slug}` })) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Ücretsiz Araçlar', item: `${SITE}/araclar` },
    ] },
  ],
}

export default function AraclarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="tema-koyu tema-hero relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.144)_0%,rgba(59,130,246,0.048)_40%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">Ücretsiz Araçlar</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Küçük İşletmeler İçin<br /><span className="gradient-text">Ücretsiz Araçlar</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Günlük dijital pazarlama işlerinizi hızlandıran pratik araçlar. Kayıt yok, ücret yok.</p>
        </div>
      </section>
      <KisaOzet>Bu sayfadaki araçlar tamamen tarayıcınızda çalışır ve girdiğiniz bilgileri kaydetmez. WhatsApp ve Google yorum bağlantısı oluşturabilir, Google Ads bütçenizi hesaplayabilir, SEO başlığınızı kontrol edebilirsiniz.</KisaOzet>
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-5">
          {araclar.map((a) => {
            const Icon = ikon[a.slug] ?? Calculator
            return (
              <Link key={a.slug} href={`/araclar/${a.slug}`} className="group bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-4 sm:p-6 transition-colors">
                {/* Mobilde ikon ve başlık yan yana, kart kısa */}
                <div className="flex items-center gap-3 sm:block">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-blue-500/10 flex items-center justify-center sm:mb-4">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-zinc-500 text-xs mb-0.5 sm:mb-1">{a.hizmet}</p>
                    <h2 className="text-white font-semibold text-base sm:text-lg sm:mb-2">{a.ad}</h2>
                  </div>
                  <ArrowRight size={16} className="text-blue-400 shrink-0 sm:hidden" />
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mt-2 sm:mt-0 sm:mb-4 line-clamp-2 sm:line-clamp-none">{a.kisa}</p>
                <span className="hidden sm:inline-flex text-blue-400 text-sm font-medium items-center gap-1.5 group-hover:gap-2.5 transition-all">Aracı aç <ArrowRight size={13} /></span>
              </Link>
            )
          })}
        </div>
      </section>
      <section className="py-16 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Daha Fazlasına mı İhtiyacınız Var?</h2>
          <p className="text-zinc-400 mb-6">SEO, Google Ads ve web sitesi işlerinizi birlikte planlayalım. İşletmenize özel tahmini teklifi AI teklif hesaplayıcıdan görebilirsiniz.</p>
          <Link href="/teklif-al" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg px-6 py-3 transition-colors">AI Teklif Hesaplayıcı <ArrowRight size={16} /></Link>
        </div>
      </section>
      <RelatedPages pages={[{ label: 'Hizmetler', href: '/hizmetler' }, { label: 'Sektörler', href: '/sektorler' }, { label: 'Ücretsiz SEO Analizi', href: '/seo-analiz' }, { label: 'Blog', href: '/blog' }]} />
    </>
  )
}
