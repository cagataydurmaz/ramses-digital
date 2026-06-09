'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import { TrendingUp, Users, Eye, ExternalLink, Globe } from 'lucide-react'

const liveProjects = [
  {
    name: 'Psk. Nur Çelen',
    title: 'Kocaeli Psikolog — Bireysel & Çift Terapi',
    url: 'https://nurcelen.com',
    displayUrl: 'nurcelen.com',
    category: 'Web Tasarımı + SEO',
    industry: 'Sağlık & Psikoloji',
    desc: 'Kocaeli\'nin en çok aranan psikologlarından biri için sıfırdan tasarladığımız, SEO odaklı, randevu dönüşümü yüksek web sitesi. Yerel SEO çalışmasıyla Google\'da 1. sayfaya taşındı.',
    tags: ['Web Tasarım', 'Yerel SEO', 'WhatsApp Entegrasyonu'],
    accentColor: 'rose',
    thumb: 'https://image.thum.io/get/width/1280/crop/720/noanimate/https://nurcelen.com',
  },
  {
    name: 'Av. Mert Anıl Güler, LL.M.',
    title: 'Bakırköy Avukat — Hukuk Bürosu',
    url: 'https://www.mertanilguler.av.tr',
    displayUrl: 'mertanilguler.av.tr',
    category: 'Web Tasarımı + SEO',
    industry: 'Hukuk',
    desc: 'İstanbul Barosu avukatı için premium kurumsal kimliğe sahip, içerik ağırlıklı hukuk bürosu sitesi. Blog ve makale altyapısıyla otorite inşası, Google Ads entegrasyonu.',
    tags: ['Web Tasarım', 'Kurumsal SEO', 'Google Ads'],
    accentColor: 'amber',
    thumb: 'https://image.thum.io/get/width/1280/crop/720/noanimate/https://www.mertanilguler.av.tr',
  },
]

const categories = ['Tümü', 'SEO', 'Google Ads', 'Sosyal Medya', 'Web Tasarımı', 'Veri Analizi']

const projects = [
  {
    title: 'Global Elektronik Pazaryeri',
    category: 'SEO',
    industry: 'E-Ticaret',
    duration: '6 Ay',
    results: [
      { icon: TrendingUp, label: 'Organik Trafik Artışı', value: '+%340' },
      { icon: Eye, label: 'Sıralama Kazanımı', value: '280+ Keyword' },
      { icon: Users, label: 'Yeni Kullanıcı Artışı', value: '+%210' },
    ],
    desc: 'E-ticaret kategorilerini kapsamlı teknik SEO ve içerik stratejisiyle optimize ettik. 6 ay içinde organik trafiği 3.4 kat artırdık.',
    gradient: 'from-blue-900/30 via-blue-800/10 to-transparent',
    tag: 'bg-blue-500/10 text-blue-400',
  },
  {
    title: 'Lüks Otel Zinciri (Konaklama)',
    category: 'Google Ads',
    industry: 'Turizm & Konaklama',
    duration: '12 Ay',
    results: [
      { icon: TrendingUp, label: 'ROAS', value: '4.2x' },
      { icon: Eye, label: 'Tıklama Başı Maliyet', value: '-%38' },
      { icon: Users, label: 'Rezervasyon Artışı', value: '+%165' },
    ],
    desc: 'Google Ads kampanyalarını yeniden yapılandırdık, akıllı teklif stratejileri uyguladık ve ROAS\'ı 4.2\'ye çıkardık.',
    gradient: 'from-violet-900/30 via-violet-800/10 to-transparent',
    tag: 'bg-violet-500/10 text-violet-400',
  },
  {
    title: 'Yeni Nesil Ödeme Sistemleri',
    category: 'Sosyal Medya',
    industry: 'Fintek',
    duration: '9 Ay',
    results: [
      { icon: Users, label: 'Yeni Takipçi', value: '120K+' },
      { icon: TrendingUp, label: 'Etkileşim Artışı', value: '+%520' },
      { icon: Eye, label: 'Organik Erişim', value: '2.5M/Ay' },
    ],
    desc: 'Fintech nişine özgün içerik stratejisi geliştirdik. 9 ayda 120K gerçek takipçi ve viral içeriklerle milyonlara ulaştık.',
    gradient: 'from-emerald-900/30 via-emerald-800/10 to-transparent',
    tag: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    title: 'SaaS & Kurumsal Yazılım Çözümleri',
    category: 'Web Tasarımı',
    industry: 'B2B Yazılım',
    duration: '3 Ay',
    results: [
      { icon: TrendingUp, label: 'Lead Artışı', value: '+%280' },
      { icon: Eye, label: 'Hemen Çıkma Oranı', value: '-%45' },
      { icon: Users, label: 'Sayfa Hızı Skoru', value: '98/100' },
    ],
    desc: 'Eski siteyi modern, hızlı ve dönüşüm odaklı yeni bir platforma taşıdık. Demo talepleri 3 kat arttı.',
    gradient: 'from-orange-900/30 via-orange-800/10 to-transparent',
    tag: 'bg-orange-500/10 text-orange-400',
  },
  {
    title: 'Medikal Klinik Zinciri',
    category: 'SEO',
    industry: 'Sağlık',
    duration: '8 Ay',
    results: [
      { icon: TrendingUp, label: 'Yerel SEO Artışı', value: '+%290' },
      { icon: Eye, label: 'Google Maps Görünürlüğü', value: 'Top 3' },
      { icon: Users, label: 'Online Randevu Artışı', value: '+%180' },
    ],
    desc: 'Yerel SEO stratejisiyle 12 şubeyi Google aramalarda öne çıkardık. Online randevu sayısı neredeyse 2 katına çıktı.',
    gradient: 'from-cyan-900/30 via-cyan-800/10 to-transparent',
    tag: 'bg-cyan-500/10 text-cyan-400',
  },
  {
    title: 'Kozmetik Markası',
    category: 'Sosyal Medya',
    industry: 'Güzellik & Kozmetik',
    duration: '6 Ay',
    results: [
      { icon: Users, label: 'Instagram Büyümesi', value: '+85K' },
      { icon: TrendingUp, label: 'Satış Dönüşümü', value: '+%230' },
      { icon: Eye, label: 'TikTok Görüntülenme', value: '15M+' },
    ],
    desc: 'Instagram ve TikTok odaklı influencer pazarlama + organik içerik stratejisiyle markayı büyük kitlelere tanıttık.',
    gradient: 'from-pink-900/30 via-pink-800/10 to-transparent',
    tag: 'bg-pink-500/10 text-pink-400',
  },
  {
    title: 'Lojistik Şirketi',
    category: 'Google Ads',
    industry: 'Lojistik',
    duration: '4 Ay',
    results: [
      { icon: TrendingUp, label: 'Teklif Başarı Oranı', value: '+%95' },
      { icon: Eye, label: 'Maliyet Düşüşü', value: '-%42' },
      { icon: Users, label: 'Yeni Müşteri Kazanımı', value: '85+' },
    ],
    desc: 'B2B Google Ads kampanyalarını yeniden yapılandırdık. Reklam maliyetlerini düşürürken kaliteli müşteri sayısını artırdık.',
    gradient: 'from-amber-900/30 via-amber-800/10 to-transparent',
    tag: 'bg-amber-500/10 text-amber-400',
  },
  {
    title: 'Eğitim Platformu',
    category: 'Veri Analizi',
    industry: 'EdTech',
    duration: '3 Ay',
    results: [
      { icon: TrendingUp, label: 'Dönüşüm Artışı', value: '+%175' },
      { icon: Eye, label: 'Terk Oranı Düşüşü', value: '-%55' },
      { icon: Users, label: 'Yeni Üye Artışı', value: '+%140' },
    ],
    desc: 'GA4 ve Hotjar ile kullanıcı davranışlarını analiz ettik, funnel optimizasyonlarıyla üyelik dönüşümlerini 2.7 kat artırdık.',
    gradient: 'from-teal-900/30 via-teal-800/10 to-transparent',
    tag: 'bg-teal-500/10 text-teal-400',
  },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Tümü')

  const filtered =
    activeFilter === 'Tümü'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
            Portföy
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Gerçek Sonuçlar,
            <br />
            <span className="gradient-text">Gerçek Büyüme</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Farklı sektörlerde elde ettiğimiz somut başarılar ve ölçülebilir sonuçlar.
          </p>
        </div>
      </section>

      {/* Live Projects — Real Clients */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">Canlı Referanslar</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Gerçek Müşteri Projeleri</h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm">Tasarladığımız ve büyüttüğümüz siteler — canlı olarak ziyaret edebilirsiniz.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {liveProjects.map((project) => (
              <div
                key={project.name}
                className="group bg-[#0D1225] border border-white/[0.06] hover:border-white/[0.14] rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Browser Chrome Mockup */}
                <div className="bg-[#080D18] border-b border-white/[0.06] px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 bg-white/[0.05] rounded-md px-3 py-1 flex items-center gap-2">
                    <Globe size={10} className="text-zinc-500 shrink-0" />
                    <span className="text-zinc-400 text-xs font-mono truncate">{project.displayUrl}</span>
                  </div>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-blue-400 transition-colors"
                    aria-label="Siteyi ziyaret et"
                  >
                    <ExternalLink size={13} />
                  </Link>
                </div>

                {/* Screenshot */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={project.thumb}
                    alt={`${project.name} web sitesi ekran görüntüsü`}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1225] via-transparent to-transparent opacity-60" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">{project.industry} · {project.category}</p>
                      <h3 className="text-white font-bold text-lg leading-snug">{project.name}</h3>
                      <p className="text-zinc-400 text-sm">{project.title}</p>
                    </div>
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-full px-3 py-1.5 transition-all"
                    >
                      Siteyi Gör <ExternalLink size={11} />
                    </Link>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white/[0.04] border border-white/[0.08] text-zinc-400 rounded-full px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-blue-500 text-white'
                    : 'bg-[#0D1225] border border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-8 h-full card-hover"
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${project.tag}`}>
                        {project.category}
                      </span>
                      <span className="text-zinc-600 text-xs">{project.industry}</span>
                    </div>
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                  </div>
                  <span className="text-zinc-600 text-xs shrink-0 ml-4">{project.duration}</span>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.desc}</p>

                <div className="grid grid-cols-3 gap-3">
                  {project.results.map((result) => {
                    const Icon = result.icon
                    return (
                      <div key={result.label} className="bg-white/[0.03] rounded-xl p-3">
                        <Icon size={14} className={project.tag.split(' ')[1]} />
                        <p className="text-white font-bold text-base mt-1">{result.value}</p>
                        <p className="text-zinc-600 text-[10px] leading-tight mt-0.5">
                          {result.label}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Sıradaki Başarı Hikayesi Sizin
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Markanız için ne yapabileceğimizi konuşalım. Ücretsiz danışmanlık seansı için iletişime geçin.
          </p>
          <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
        </div>
      </section>
    </>
  )
}
