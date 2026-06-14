import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import { ExternalLink, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portföy | Gerçek Projeler, Gerçek Sonuçlar — Ramses Dijital',
  description: 'Ramses Dijital\'in gerçek müşteri projeleri. Kocaeli psikolog, İstanbul avukat, e-ticaret ve platform projelerimizi inceleyin. Canlı siteler, doğrulanabilir sonuçlar.',
  alternates: { canonical: 'https://ramsesdigital.com/portfolyo' },
  openGraph: {
    title: 'Portföy — Ramses Dijital',
    description: 'Tasarladığımız ve büyüttüğümüz gerçek projeler. Ziyaret edebilirsiniz.',
    url: 'https://ramsesdigital.com/portfolyo',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

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
    thumb: '/portfolio/nurcelen.png',
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
    thumb: '/portfolio/mertanilguler.png',
  },
  {
    name: 'Gamzeli Eczanem',
    title: 'Online Eczane & Güzellik — E-Ticaret',
    url: 'https://gamzelidermokozmetik.com',
    displayUrl: 'gamzelidermokozmetik.com',
    category: 'E-Ticaret + SEO',
    industry: 'Sağlık & Güzellik',
    desc: 'Eczacı güvencesiyle makyaj, yüz, cilt ve saç bakım ürünleri sunan e-ticaret platformu. Cilt analizi aracı ve kişiselleştirilmiş ürün öneri sistemi ile dönüşüm odaklı tasarım.',
    tags: ['E-Ticaret', 'SEO', 'Cilt Analizi Aracı'],
    thumb: '/portfolio/gamzelieczanem.png',
  },
  {
    name: 'Veterineri Bul',
    title: 'Yapay Zeka Destekli Veteriner Platformu',
    url: 'https://www.veterineribul.com',
    displayUrl: 'veterineribul.com',
    category: 'Platform + Yapay Zeka',
    industry: 'Veterinerlik & Pet',
    desc: 'Türkiye\'nin ilk YZ destekli veteriner bulma ve online randevu platformu. Doğrulanan diplomalı veterinerler, video görüşme ve 7/24 yapay zeka asistan ile evcil hayvan sahiplerine ulaşır.',
    tags: ['Platform', 'Yapay Zeka', 'Online Randevu'],
    thumb: '/portfolio/veterineribul.png',
  },
  {
    name: 'TerapistBul',
    title: 'Yapay Zeka Eşleştirmeli Terapist Platformu',
    url: 'https://terapistibul.com',
    displayUrl: 'terapistibul.com',
    category: 'Platform + Yapay Zeka',
    industry: 'Psikoloji & Sağlık',
    desc: 'Yapay zeka ile 81 ilden seçilmiş uzman psikolog ve terapistler arasından kişiye özel eşleştirme yapan platform. KVKK uyumlu, güvenli terapi altyapısı ve psikoloji blog sistemi.',
    tags: ['Platform', 'YZ Eşleştirme', 'Online Terapi'],
    thumb: '/portfolio/terapistbul.png',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://ramsesdigital.com/portfolyo#page',
      name: 'Ramses Dijital Portföy',
      description: 'Ramses Dijital tarafından tasarlanan ve büyütülen gerçek müşteri projeleri.',
      url: 'https://ramsesdigital.com/portfolyo',
      publisher: { '@id': 'https://ramsesdigital.com/#organization' },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: liveProjects.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: p.name,
          description: p.desc,
          url: p.url,
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://ramsesdigital.com' },
        { '@type': 'ListItem', position: 2, name: 'Portföy', item: 'https://ramsesdigital.com/portfolyo' },
      ],
    },
  ],
}

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
            Portföy
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Gerçek Projeler,
            <br />
            <span className="gradient-text">Gerçek Sonuçlar</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Tasarladığımız ve büyüttüğümüz siteler — canlı olarak ziyaret edebilirsiniz.
          </p>
        </div>
      </section>

      {/* Live Projects */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {liveProjects.map((project) => (
              <Link
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)]"
              >
                {/* Browser Chrome */}
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
                  <ExternalLink size={13} className="text-zinc-500 group-hover:text-blue-400 transition-colors shrink-0" />
                </div>

                {/* Screenshot */}
                <div className="relative overflow-hidden" style={{ height: '260px' }}>
                  <Image
                    src={project.thumb}
                    alt={`${project.name} web sitesi ekran görüntüsü`}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1225]/80 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">{project.industry} · {project.category}</p>
                      <h3 className="text-white font-bold text-lg leading-snug">{project.name}</h3>
                      <p className="text-zinc-400 text-sm">{project.title}</p>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 group-hover:text-blue-300 bg-blue-500/10 group-hover:bg-blue-500/20 border border-blue-500/20 rounded-full px-3 py-1.5 transition-all">
                      Siteyi Gör <ExternalLink size={11} />
                    </span>
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
              </Link>
            ))}
          </div>

          {/* Coming soon note */}
          <p className="text-center text-zinc-600 text-sm mt-10">
            Daha fazla referans yakında ekleniyor.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Sıradaki Proje Sizin Olsun
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Markanız için ne yapabileceğimizi konuşalım.
          </p>
          <CalendlyButton label="Ücretsiz Teklif Al" variant="primary" />
        </div>
      </section>
    </>
  )
}
