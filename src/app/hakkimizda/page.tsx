'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import { Target, Zap, Heart, Shield, ArrowRight, Users, Award, Globe, Code2 } from 'lucide-react'

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.3, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
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

const team = [
  {
    name: 'Çağatay Durmaz',
    role: 'Co-Founder & CEO',
    bio: 'Mühendislik altyapısıyla dijital pazarlama stratejisi geliştiriyor. Veri odaklı büyüme kampanyaları ve performans reklamcılığında uzman.',
    color: 'bg-blue-500/20',
    initials: 'ÇD',
    badge: 'Elektrik-Elektronik Mühendisi · Pazarlama Stratejisti',
  },
  {
    name: 'Atalay Durmaz',
    role: 'Co-Founder & CTO',
    bio: 'Yazılım mühendisliği ve AI entegrasyonlarında uzman. Ramses Digital\'in teknoloji altyapısını, otomasyon sistemlerini ve ürün vizyonunu yönetiyor.',
    color: 'bg-violet-500/20',
    initials: 'AD',
    badge: 'Yazılım Mühendisi & AI Uzmanı',
  },
]

const milestones = [
  { year: '2019', title: 'Kuruluş', desc: 'İstanbul\'da 2 kişilik bir ekiple dijital pazarlama yolculuğumuzu başlattık.' },
  { year: '2020', title: 'İlk 10 Müşteri', desc: 'KOBİ\'lere odaklanarak ilk 10 müşterimizle anlamlı sonuçlar elde ettik.' },
  { year: '2021', title: 'Ekip Büyümesi', desc: 'Uzman kadromuzu genişlettik, 6 kişilik güçlü bir ekip oluşturduk.' },
  { year: '2022', title: '50+ Proje', desc: 'Farklı sektörlerden 50\'den fazla projede başarılı sonuçlar elde ettik.' },
  { year: '2023', title: 'Uluslararası Müşteriler', desc: 'Yurt dışından müşterilerle çalışmaya başladık, global deneyim kazandık.' },
  { year: '2024', title: 'Bugün', desc: '200+ proje, 50+ mutlu müşteri ve büyümeye devam eden bir ekip.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3"
          >
            Hakkımızda
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Dijital Başarıya
            <br />
            <span className="gradient-text">Giden Yol</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Mühendislik disiplini ile dijital pazarlamayı birleştiren, veri odaklı ve sonuç garantili bir ekip.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="space-y-5">
                <p className="text-blue-500 text-sm font-medium tracking-wider uppercase">
                  Hikayemiz
                </p>
                <h2 className="text-4xl font-bold text-white">
                  Markalar İçin Değer Yaratıyoruz
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  Ramses Digital, iki mühendis tarafından kuruldu. Dijital pazarlamanın sezgiye
                  değil, mühendislik disiplinine dayanması gerektiğine inanıyoruz. Veri analizi,
                  teknik SEO, performans reklamcılığı ve otomasyon — hepsine bir mühendis gözüyle bakıyoruz.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  2019 yılında İstanbul&apos;da başladığımız yolculuğumuzda bugün 200&apos;den
                  fazla projeyi başarıyla tamamladık. Koddan kampanyaya, algoritmadan analitiğe
                  uzanan bu perspektif, müşterilerimize rakiplerinden farklı ve ölçülebilir bir avantaj sağlıyor.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  KOBİ&apos;lerden büyük ölçekli şirketlere, startup&apos;lardan köklü markalara kadar
                  geniş bir yelpazede hizmet veriyoruz. Ortak paydamız: mühendislik titizliğiyle
                  yürütülen, ölçülebilir sonuçlar ve sürdürülebilir büyüme.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: '50+ Mutlu Müşteri', value: 'Global & Yerel' },
                  { icon: Award, label: '200+ Başarılı Proje', value: 'Her Sektörden' },
                  { icon: Globe, label: '5+ Yıl Deneyim', value: 'Sürekli Gelişim' },
                  { icon: Target, label: '%98 Memnuniyet', value: 'Gerçek Sonuçlar' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-5"
                    >
                      <Icon size={20} className="text-blue-400 mb-3" />
                      <p className="text-white font-bold text-sm">{item.label}</p>
                      <p className="text-zinc-600 text-xs mt-0.5">{item.value}</p>
                    </div>
                  )
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
              Değerlerimiz
            </p>
            <h2 className="text-4xl font-bold text-white">
              Neden Ramses Digital?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <FadeIn key={value.title} delay={i * 0.1}>
                  <div className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 h-full">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={18} className="text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
              Yolculuğumuz
            </p>
            <h2 className="text-4xl font-bold text-white">Büyüme Hikayemiz</h2>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-[60px] top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 0.08}>
                  <div className="flex gap-6 items-start">
                    <div className="w-[60px] shrink-0 text-right">
                      <span className="text-blue-400 font-bold text-sm">{m.year}</span>
                    </div>
                    <div className="hidden md:flex items-center justify-center mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-[#0A0F1E] relative z-10" />
                    </div>
                    <div className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-5 flex-1">
                      <h3 className="text-white font-semibold mb-1">{m.title}</h3>
                      <p className="text-zinc-500 text-sm">{m.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
              Ekibimiz
            </p>
            <h2 className="text-4xl font-bold text-white mb-4">Uzman Kadromuz</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Dijital pazarlamanın her alanında uzmanlaşmış, tutkulu ve sonuç odaklı bir ekip.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.08}>
                <div className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6">
                  <div className={`w-14 h-14 ${member.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <span className="text-white font-bold text-lg">{member.initials}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-0.5">{member.name}</h3>
                  <p className="text-blue-400 text-xs font-medium mb-3">{member.role}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <span className="inline-block bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1 text-[11px] text-zinc-500">
                    🎓 {member.badge}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white mb-4">
              Birlikte Çalışalım
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Markanızı dijitalde büyütmek için güçlü bir ekiple tanışmaya hazır mısınız?
            </p>
            <CalendlyButton label="İletişime Geç" variant="primary" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
