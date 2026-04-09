import type { Metadata } from 'next'
import CalendlyButton from '@/components/CalendlyButton'
import { Target, Zap, Heart, Shield, Users, Award, Globe, Code2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hakkımızda | Ramses Digital Hikayesi ve Ekibi — Kocaeli & İstanbul',
  description:
    'Ramses Digital kimdir? 2019\'dan bu yana Kocaeli ve İstanbul\'daki işletmelere SEO, Google Ads ve dijital pazarlama alanında gerçek büyüme sağlayan ajans ekibimizi tanıyın.',
  alternates: { canonical: 'https://ramsesdigital.com/hakkimizda' },
  openGraph: {
    title: 'Hakkımızda | Ramses Digital',
    description: 'Performans odaklı dijital pazarlama ajansı. Ekibimiz, değerlerimiz ve başarı hikayemiz.',
    url: 'https://ramsesdigital.com/hakkimizda',
  },
}

const values = [
  {
    icon: Code2,
    title: 'Mühendislik Temelli',
    desc: 'İki mühendis kurucu olarak her kararı veriyle, her stratejiyi teknik disiplinle alıyoruz. Tahmin yok, analiz var.',
  },
  {
    icon: Target,
    title: 'Sonuç Odaklılık',
    desc: 'Her strateji, ölçülebilir ve anlamlı sonuçlar doğurmalıdır. Vanity metrikler değil, gerçek büyüme peşindeyiz.',
  },
  {
    icon: Zap,
    title: 'Hız & Çeviklik',
    desc: 'Dijital dünya hızla değişiyor. Trendlere hızlı adapte olarak müşterilerimize rekabet avantajı sağlıyoruz.',
  },
  {
    icon: Heart,
    title: 'Gerçek Ortaklık',
    desc: 'Müşterilerimizi sadece birer hesap olarak değil, uzun vadeli iş ortakları olarak görüyoruz.',
  },
  {
    icon: Shield,
    title: 'Şeffaflık',
    desc: 'Her adımda açık iletişim. Ne yaptığımızı, neden yaptığımızı ve nasıl sonuç aldığımızı her zaman paylaşıyoruz.',
  },
]


const milestones = [
  { year: '2019', title: 'Kuruluş', desc: 'İstanbul\'da 2 kişilik bir ekiple dijital pazarlama yolculuğumuzu başlattık.' },
  { year: '2020', title: 'İlk 10 Müşteri', desc: 'KOBİ\'lere odaklanarak ilk 10 müşterimizle anlamlı sonuçlar elde ettik.' },
  { year: '2021', title: 'Ekip Büyümesi', desc: 'Uzman kadromuzu genişlettik, 6 kişilik güçlü bir ekip oluşturduk.' },
  { year: '2022', title: '50+ Proje', desc: 'Farklı sektörlerden 50\'den fazla projede başarılı sonuçlar elde ettik.' },
  { year: '2023', title: 'Uluslararası Müşteriler', desc: 'Yurt dışından müşterilerle çalışmaya başladık, global deneyim kazandık.' },
  { year: '2024', title: 'Bugün', desc: '100+ proje, 50+ mutlu müşteri ve büyümeye devam eden bir ekip.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
            Hakkımızda
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Dijital Başarıya
            <br />
            <span className="gradient-text">Giden Yol</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Mühendislik disiplini ile dijital pazarlamayı birleştiren, veri odaklı ve sonuç garantili bir ekip.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-5">
              <p className="text-blue-500 text-sm font-medium tracking-wider uppercase">
                Hikayemiz
              </p>
              <h2 className="text-4xl font-bold text-white">
                Markalar İçin Değer Yaratıyoruz
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Ramses Digital, iki mühendis tarafından kuruldu. Dijital pazarlamanın sezgiye
                değil, mühendislik disiplinine dayanması gerektiğine inanıyoruz.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                2019 yılında İstanbul&apos;da başladığımız yolculuğumuzda bugün 100&apos;den
                fazla projeyi başarıyla tamamladık.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                KOBİ&apos;lerden büyük ölçekli şirketlere, startup&apos;lardan köklü markalara kadar
                geniş bir yelpazede hizmet veriyoruz.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: '50+ Mutlu Müşteri', value: 'Global & Yerel' },
                { icon: Award, label: '100+ Başarılı Proje', value: 'Her Sektörden' },
                { icon: Globe, label: '5+ Yıl Deneyim', value: 'Sürekli Gelişim' },
                { icon: Target, label: '%94 Memnuniyet', value: 'Gerçek Sonuçlar' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-5">
                    <Icon size={20} className="text-blue-400 mb-3" />
                    <p className="text-white font-bold text-sm">{item.label}</p>
                    <p className="text-zinc-600 text-xs mt-0.5">{item.value}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
              Değerlerimiz
            </p>
            <h2 className="text-4xl font-bold text-white">
              Neden Ramses Digital?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 h-full">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
              Yolculuğumuz
            </p>
            <h2 className="text-4xl font-bold text-white">Büyüme Hikayemiz</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[60px] top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />
            <div className="space-y-6">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="w-[60px] shrink-0 text-right">
                    <span className="text-blue-400 font-bold text-sm">{m.year}</span>
                  </div>
                  <div className="hidden md:flex items-center justify-center mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-[#0A0F1E] relative z-10" />
                  </div>
                  <div className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-5 flex-1">
                    <h3 className="text-white font-semibold mb-1">{m.title}</h3>
                    <p className="text-zinc-400 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Birlikte Çalışalım
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Markanızı dijitalde büyütmek için güçlü bir ekiple tanışmaya hazır mısınız?
          </p>
          <CalendlyButton label="İletişime Geç" variant="primary" />
        </div>
      </section>
    </>
  )
}
