import Link from 'next/link'
import { ArrowRight, Scale, Stethoscope, Brain, PawPrint, Calculator, ShoppingCart, Coffee, Briefcase, Hospital, Smile, Sparkles, Home, Car, MessageCircle, Star, Wallet, FileSearch } from 'lucide-react'
import { sektorler } from '@/lib/sektorler'
import { araclar } from '@/lib/araclar'

// Ana sayfa: Sektörler + Ücretsiz Araçlar bölümleri (hizmetlerin altında).
// Veri sektorler.ts ve araclar.ts'den gelir; yeni kayıt eklenince burası da güncellenir.
const sektorIkon: Record<string, typeof Briefcase> = {
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
const aracIkon: Record<string, typeof Briefcase> = {
  'whatsapp-link-olusturucu': MessageCircle,
  'google-yorum-linki': Star,
  'google-ads-butce-hesaplayici': Wallet,
  'meta-baslik-kontrol': FileSearch,
}

export default function AnaSayfaSektorAraclar() {
  return (
    <>
      <section aria-labelledby="sektorler-baslik" className="py-12 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">Sektörler</p>
            <h2 id="sektorler-baslik" className="text-3xl sm:text-4xl font-bold text-white mb-4">Sektörünüze Özel Dijital Pazarlama</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Her sektörün kuralları ve müşteri arama alışkanlıkları farklı. Sizinkine uygun planı görün.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {sektorler.map((s) => {
              const Icon = sektorIkon[s.slug] ?? Briefcase
              return (
                <Link key={s.slug} href={`/sektorler/${s.slug}`} prefetch={false} className="group flex items-center gap-3 bg-[#0D1225] border border-white/[0.14] hover:border-blue-500/40 rounded-xl p-4 transition-colors">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Icon size={17} className="text-blue-400" />
                  </span>
                  <span className="text-white text-sm font-medium leading-snug">{s.kisaAd}</span>
                </Link>
              )
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/sektorler" prefetch={false} className="group inline-flex items-center gap-2 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-blue-300 text-sm font-medium rounded-full px-6 py-3 transition-all">
              Tüm sektörleri görüntüle <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="araclar-baslik" className="py-12 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">Ücretsiz Araçlar</p>
            <h2 id="araclar-baslik" className="text-3xl sm:text-4xl font-bold text-white mb-4">Hemen Kullanabileceğiniz Ücretsiz Araçlar</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Üyelik yok, veri kaydı yok. Tarayıcınızda çalışır, saniyeler içinde sonuç verir.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {araclar.map((a) => {
              const Icon = aracIkon[a.slug] ?? FileSearch
              return (
                <Link key={a.slug} href={`/araclar/${a.slug}`} prefetch={false} className="group h-full bg-[#0D1225] border border-white/[0.14] hover:border-blue-500/40 rounded-2xl p-6 transition-colors">
                  <span className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-blue-400" />
                  </span>
                  <h3 className="text-white font-semibold mb-2">{a.ad}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{a.kisa}</p>
                  <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">Aracı kullan <ArrowRight size={13} /></span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
