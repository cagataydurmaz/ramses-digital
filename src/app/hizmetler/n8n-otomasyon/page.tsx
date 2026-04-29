import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'
import { Workflow, Bot, GitMerge, Webhook, Zap, Shield, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'n8n İş Akışı Otomasyonu | AI Entegrasyonlu No-Code Otomasyon — Ramses Digital',
  description:
    'n8n ile CRM, e-posta, AI ve sosyal medya araçlarını birbirine bağlayın. Self-hosted, KVKK uyumlu, sınırsız iş akışı. Lead capture\'dan AI agent\'lara kadar.',
  alternates: { canonical: 'https://ramsesdigital.com/hizmetler/n8n-otomasyon' },
  openGraph: {
    title: 'n8n İş Akışı Otomasyonu | Ramses Digital',
    description: 'No-Code/Low-Code AI entegrasyonlu iş akışı otomasyonu. Kocaeli\'den tüm Türkiye\'ye.',
    url: 'https://ramsesdigital.com/hizmetler/n8n-otomasyon',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n8n İş Akışı Otomasyonu — Ramses Digital',
    description: 'CRM, e-posta, AI entegrasyonu. Self-hosted, KVKK uyumlu.',
    images: ['https://ramsesdigital.com/og-image.png'],
  },
}

const useCases = [
  { icon: Bot, title: 'AI Agent & RAG', desc: 'OpenAI, Anthropic ve LangChain entegrasyonlarıyla müşteri destek bot\'ları, içerik üretimi ve veri analizi otomasyonları.' },
  { icon: GitMerge, title: 'CRM & Satış Pipeline', desc: 'Lead capture\'dan deal closing\'e kadar tüm satış sürecini otomatize edin. HubSpot, Salesforce, Pipedrive entegrasyonu.' },
  { icon: Webhook, title: 'Webhook & API Entegrasyonları', desc: 'Mevcut araçlarınızı birbirine bağlayın. Slack, WhatsApp, Telegram, Stripe, PayTR — sınırsız bağlantı.' },
  { icon: Zap, title: 'Lead Yakalama & Nurturing', desc: 'Form gönderimleri → CRM → e-posta sekansı → SMS bildirim. Sıfır manuel iş.' },
  { icon: Workflow, title: 'Çoklu Platform Senkronizasyonu', desc: 'Sosyal medya gönderileri, fatura sistemleri, e-ticaret stok takibi tek noktadan.' },
  { icon: Shield, title: 'Self-Hosted & KVKK Uyumlu', desc: 'Hassas veriler kendi sunucunuzdan asla çıkmaz. GDPR ve KVKK için ideal.' },
]

const process = [
  { step: '01', title: 'Keşif & İhtiyaç Analizi', desc: 'Mevcut iş akışlarınızı haritalandırıyor, otomatize edilebilecek tekrarlanan görevleri tespit ediyoruz.' },
  { step: '02', title: 'Akış Tasarımı', desc: 'Görsel diyagramla akış tasarımı, hata senaryoları ve geri dönüş mantığı (rollback) planlanır.' },
  { step: '03', title: 'Geliştirme & Test', desc: 'n8n üzerinde akışlar kurulur, test ortamında 50+ senaryoyla doğrulanır.' },
  { step: '04', title: 'Self-Hosted Deploy', desc: 'Kendi sunucunuza veya cloud\'a (AWS/Hetzner/DigitalOcean) güvenli deploy. SSL, backup, monitoring kurulumu.' },
  { step: '05', title: 'Bakım & Optimizasyon', desc: 'Aylık check-in, hata izleme, yeni akış ekleme ve performans optimizasyonu.' },
]

const faqs = [
  { q: 'n8n nedir, neden tercih edelim?', a: 'n8n, açık kaynaklı bir iş akışı otomasyon platformudur. Zapier ve Make alternatifidir. En büyük avantajı: self-hosted edilebilmesi (verileriniz kendi sunucunuzdan çıkmaz) ve sınırsız akış limit\'siz çalıştırma. JavaScript kodu desteği sayesinde karmaşık dönüşümler kolayca yapılabilir.' },
  { q: 'Self-hosted ne demek, bana faydası ne?', a: 'Self-hosted, n8n\'i kendi sunucunuzda çalıştırmanız demektir. Tüm veri akışı sizin kontrolünüzde kalır, üçüncü parti servislere gitmez. Bu KVKK, GDPR ve sektörel hassasiyetler (sağlık, finans) için zorunlu olabilir. Aylık 5-30$ arası bir VPS yeterlidir.' },
  { q: 'Zapier veya Make\'ten geçiş yapabilir miyim?', a: 'Evet. Mevcut Zap\'larınızı veya Make senaryolarınızı analiz edip n8n\'e taşıyoruz. Ortalama 30 akışlık bir geçiş 2-3 hafta sürer. Geçiş sonrası aylık $150-500 tasarruf etmek mümkündür (yüksek hacimli kullanımda).' },
  { q: 'AI entegrasyonu ne anlama geliyor?', a: 'n8n yerleşik OpenAI, Anthropic, Hugging Face ve LangChain node\'larıyla geliyor. Bu sayede: müşteri sorularını AI\'ye sordurabilir, gelen e-postaları otomatik kategorize ettirebilir, içerik üretimi yapabilir ve hatta tam fonksiyonel "AI agent"\'lar kurabilirsiniz. RAG (Retrieval Augmented Generation) yapıları için ideal.' },
  { q: 'Fiyatlandırma nasıl?', a: 'Proje bazlı: 15.000-75.000 TL aralığında (akış sayısı ve karmaşıklığa göre). Aylık bakım ve yeni akış: 4.000-12.000 TL aralığında retainer. Self-hosted sunucu maliyeti ek olarak aylık 5-30$ (sizin adınıza ödenir veya yönetebiliriz).' },
  { q: 'Hangi sektörler için uygun?', a: 'Her sektör. En çok değer kattığı alanlar: e-ticaret (sipariş yönetimi), B2B SaaS (lead ops), profesyonel hizmetler (müşteri onboarding), sağlık (randevu/hatırlatma), eğitim (kayıt akışı), pazarlama ajansları (raporlama).' },
  { q: 'Bakım ve sorunlarda kim destek veriyor?', a: 'Kurulum sonrası 90 günlük garantili destek dahildir. Sonrası için aylık retainer paketleri sunuyoruz: %99.5 uptime taahhüdü, hata bildirim sistemi, aylık check-in görüşmesi ve gerekirse acil müdahale.' },
  { q: 'AI agent\'lar nedir, ne işe yarar?', a: 'AI agent, belirli bir görevi (örn: müşteri destek, satış soruları cevaplama, içerik üretme) yapay zeka kullanarak otonom çalışan bir program. n8n + LangChain + RAG kombinasyonuyla şirket dokümanlarınızdan beslenen, sürekli çalışan asistanlar kuruyoruz.' },
]

export default function N8nOtomasyonPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full px-4 py-1.5 mb-6">
            <Workflow size={14} className="text-fuchsia-400" />
            <span className="text-fuchsia-400 text-xs font-medium tracking-wider uppercase">No-Code · AI Entegrasyonlu</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
            n8n ile İş Akışlarınızı
            <br />
            <span className="gradient-text">Otomatize Edin</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            CRM, e-posta, sosyal medya, AI araçlarını birbirine bağlıyoruz. Tekrar eden manuel işleri
            tamamen otomatize ediyor; ekibinizin zamanını ve enerjisini asıl işe harcamasını sağlıyoruz.
          </p>
          <CalendlyButton label="Otomasyon Danışmanlığı Al" variant="primary" />
        </div>
      </section>

      <section className="py-12 px-6 border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><div className="text-3xl md:text-4xl font-bold text-white">200+</div><div className="text-zinc-400 text-sm mt-1">Otomasyon Senaryosu</div></div>
          <div><div className="text-3xl md:text-4xl font-bold text-white">%70</div><div className="text-zinc-400 text-sm mt-1">Manuel İş Azalması</div></div>
          <div><div className="text-3xl md:text-4xl font-bold text-white">7/24</div><div className="text-zinc-400 text-sm mt-1">Çalışma Süresi</div></div>
          <div><div className="text-3xl md:text-4xl font-bold text-white">100%</div><div className="text-zinc-400 text-sm mt-1">KVKK Uyumlu</div></div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-fuchsia-500 text-sm font-medium tracking-wider uppercase mb-3">Kullanım Alanları</p>
            <h2 className="text-4xl font-bold text-white mb-4">Ne Tür Otomasyonlar Yapıyoruz?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">200+ otomasyon senaryosu deneyimimizle, işletmenizin tekrarlanan görevlerini bilgisayarlara devrediyoruz.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((c) => {
              const Icon = c.icon
              return (
                <div key={c.title} className="bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-fuchsia-500/30 transition-colors">
                  <div className="w-11 h-11 bg-fuchsia-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-fuchsia-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{c.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-fuchsia-500 text-sm font-medium tracking-wider uppercase mb-3">Süreç</p>
            <h2 className="text-4xl font-bold text-white mb-4">5 Adımda Otomasyon</h2>
          </div>
          <div className="space-y-4">
            {process.map((p) => (
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

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Neden n8n?</h2>
          <div className="space-y-5 text-zinc-300 leading-relaxed">
            <p>Otomasyon dünyasında üç büyük oyuncu var: <strong className="text-white">Zapier, Make ve n8n</strong>. Üçü de güçlü ama farklı kullanım senaryoları için tasarlandı. Biz <strong className="text-white">n8n&apos;i</strong> tercih ediyoruz çünkü açık kaynak, esnek ve maliyet açısından sürdürülebilir.</p>
            <p><strong className="text-white">Açık kaynak ve self-hosted:</strong> n8n&apos;i kendi sunucunuza kurabilirsiniz. Verileriniz Türkiye&apos;de, KVKK uyumlu kalır. Aylık $5-30 arası bir VPS, Zapier&apos;in $300+ planının yerine geçebilir.</p>
            <p><strong className="text-white">Sınırsız çalıştırma:</strong> Zapier görev başına ücretlendirme yapar (aylık 100 task = $30+). n8n&apos;de sınırsız çalıştırma vardır. Yüksek hacimli operasyonlarda dramatik tasarruf.</p>
            <p><strong className="text-white">JavaScript desteği:</strong> Karmaşık veri dönüşümleri için n8n&apos;de doğrudan kod yazabilirsiniz. Zapier&apos;de bu &ldquo;Code by Zapier&rdquo; eklentisi gerektirir ve ekstra ücretlidir.</p>
            <p><strong className="text-white">AI yerleşik geliyor:</strong> OpenAI, Anthropic, LangChain, Hugging Face node&apos;ları doğrudan kutuda mevcut. AI agent&apos;lar, RAG sistemleri ve LLM zincirleri kurmak çok daha doğal.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#080D18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-fuchsia-500 text-sm font-medium tracking-wider uppercase mb-3">SSS</p>
            <h2 className="text-4xl font-bold text-white mb-4">Sık Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group bg-[#0D1225] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] transition-colors">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <h3 className="text-white font-semibold text-base">{item.q}</h3>
                  <span className="text-fuchsia-400 text-2xl leading-none group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="text-zinc-400 text-sm leading-relaxed mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">İlgili Rehberler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/n8n-vs-zapier-vs-make-karsilastirmasi" className="group bg-[#0D1225] border border-white/[0.06] hover:border-fuchsia-500/30 rounded-xl p-5 transition-all">
              <p className="text-fuchsia-400 text-xs font-medium uppercase tracking-wider mb-2">Karşılaştırma</p>
              <h3 className="text-white font-medium leading-snug group-hover:text-fuchsia-300 transition-colors">n8n vs Zapier vs Make: 2026 Karşılaştırması</h3>
            </Link>
            <Link href="/blog/yapay-zeka-ile-rakip-analizi" className="group bg-[#0D1225] border border-white/[0.06] hover:border-fuchsia-500/30 rounded-xl p-5 transition-all">
              <p className="text-fuchsia-400 text-xs font-medium uppercase tracking-wider mb-2">AI</p>
              <h3 className="text-white font-medium leading-snug group-hover:text-fuchsia-300 transition-colors">Yapay Zeka ile Rakip Analizi</h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-fuchsia-500/10 to-transparent border border-fuchsia-500/20 rounded-3xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hangi İşleri Otomatize Etmeli?</h2>
          <p className="text-zinc-400 text-lg mb-8">Ücretsiz keşif görüşmesinde işletmenizin akışlarını analiz edip otomasyon haritası çıkartalım.</p>
          <CalendlyButton label="Ücretsiz Keşif Görüşmesi" variant="primary" />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'n8n İş Akışı Otomasyonu',
        description: 'n8n ile no-code/low-code AI entegrasyonlu iş akışı otomasyonu hizmeti.',
        provider: { '@type': 'Organization', name: 'Ramses Digital', url: 'https://ramsesdigital.com' },
        areaServed: [{ '@type': 'City', name: 'Kocaeli' }, { '@type': 'City', name: 'İstanbul' }, { '@type': 'Country', name: 'Türkiye' }],
        serviceType: 'Workflow Automation',
        url: 'https://ramsesdigital.com/hizmetler/n8n-otomasyon',
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://ramsesdigital.com' },
          { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: 'https://ramsesdigital.com/hizmetler' },
          { '@type': 'ListItem', position: 3, name: 'n8n Otomasyon', item: 'https://ramsesdigital.com/hizmetler/n8n-otomasyon' },
        ],
      })}} />
    </>
  )
}
