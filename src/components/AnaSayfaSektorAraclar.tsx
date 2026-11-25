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
// Sektöre özel renk tonu (ikon kutusu + hover çerçevesi)
const renk: Record<string, string> = {
  'avukat-hukuk-burolari': 'bg-amber-500/10 text-amber-400 group-hover:border-amber-500/40',
  'dis-hekimleri-klinikler': 'bg-cyan-500/10 text-cyan-400 group-hover:border-cyan-500/40',
  'psikolog-terapistler': 'bg-violet-500/10 text-violet-400 group-hover:border-violet-500/40',
  'veteriner-klinikleri': 'bg-emerald-500/10 text-emerald-400 group-hover:border-emerald-500/40',
  'mali-musavirler': 'bg-blue-500/10 text-blue-400 group-hover:border-blue-500/40',
  'e-ticaret': 'bg-pink-500/10 text-pink-400 group-hover:border-pink-500/40',
  'restoran-kafe': 'bg-orange-500/10 text-orange-400 group-hover:border-orange-500/40',
  'ozel-hastane-poliklinik': 'bg-sky-500/10 text-sky-400 group-hover:border-sky-500/40',
  'agiz-dis-sagligi-merkezleri': 'bg-teal-500/10 text-teal-400 group-hover:border-teal-500/40',
  'guzellik-merkezleri': 'bg-fuchsia-500/10 text-fuchsia-400 group-hover:border-fuchsia-500/40',
  'emlak-ofisleri': 'bg-lime-500/10 text-lime-400 group-hover:border-lime-500/40',
  'oto-servis': 'bg-red-500/10 text-red-400 group-hover:border-red-500/40',
}
const ayrac = <div aria-hidden className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

const aracIkon: Record<string, typeof Briefcase> = {
  'whatsapp-link-olusturucu': MessageCircle,
  'google-yorum-linki': Star,
  'google-ads-butce-hesaplayici': Wallet,
  'meta-baslik-kontrol': FileSearch,
}

export default function AnaSayfaSektorAraclar() {
  return (
    <>
      {ayrac}
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
              const [bg, text, hb] = (renk[s.slug] ?? 'bg-blue-500/10 text-blue-400 group-hover:border-blue-500/40').split(' ')
              return (
                <Link key={s.slug} href={`/sektorler/${s.slug}`} prefetch={false} className="group flex items-center gap-3 bg-[#0D1225] border border-white/[0.14] hover:-translate-y-0.5 hover:bg-[#10162c] rounded-xl p-4 transition-all duration-200">
                  <span className={`w-9 h-9 shrink-0 rounded-lg border border-transparent ${bg} ${hb} flex items-center justify-center transition-colors`}>
                    <Icon size={17} className={text} />
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

      {ayrac}
      <section aria-labelledby="araclar-baslik" className="py-12 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">Ücretsiz Araçlar</p>
            <h2 id="araclar-baslik" className="text-3xl sm:text-4xl font-bold text-white mb-4">Hemen Kullanabileceğiniz Ücretsiz Araçlar</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Üyelik yok, veri kaydı yok. Tarayıcınızda çalışır, saniyeler içinde sonuç verir.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {araclar.map((a) => {
              const Icon = aracIkon[a.slug] ?? FileSearch
              return (
                <Link key={a.slug} href={`/araclar/${a.slug}`} prefetch={false} className="group h-full bg-[#0D1225] border border-white/[0.14] hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(59,130,246,0.35)] rounded-2xl p-4 sm:p-6 transition-all duration-300">
                  {/* Mobilde ikon ve başlık yan yana, kart kısa; geniş ekranda dikey düzen */}
                  <div className="flex items-center gap-3 sm:block">
                    <span className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center sm:mb-5">
                      <Icon size={20} className="text-blue-400" />
                    </span>
                    <h3 className="text-white font-semibold text-base sm:mb-2 flex-1">{a.ad}</h3>
                    <ArrowRight size={16} className="text-blue-400 shrink-0 sm:hidden" />
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-2 sm:mt-0 sm:mb-4 line-clamp-2 sm:line-clamp-none">{a.kisa}</p>
                  <span className="hidden sm:inline-flex text-blue-400 text-sm font-medium items-center gap-1.5 group-hover:gap-2.5 transition-all">Aracı kullan <ArrowRight size={13} /></span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      {ayrac}
    </>
  )
}
