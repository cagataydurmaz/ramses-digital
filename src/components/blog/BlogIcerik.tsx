import type { ReactNode } from 'react'
import { List, ChevronDown } from 'lucide-react'
import TembelGomulu, { type TembelAd } from './TembelGomulu'
import AdimHaritasi from './AdimHaritasi'
import { blogZenginlestirme } from '@/lib/blogZenginlestirme'

// Blog yazısı gövdesi. HTML içindeki <div data-bilesen="ad|parametre|açıklama"></div>
// işaretlerini animasyon, grafik ve videolarla değiştirir; blogZenginlestirme.ts'deki
// eşleştirmeye göre kısa cevap, içindekiler, konuya uygun bileşen ve video ekler.

const VIDEO_BASLIK: Record<string, { baslik: string; aciklama: string }> = {
  'seo-nedir': { baslik: 'SEO nedir? (kısa video)', aciklama: '25 saniyede SEO: işletmenize ne kazandırır?' },
  'google-ads': { baslik: 'Google Ads bütçeniz neden boşa gidiyor? (kısa video)', aciklama: '25 saniyede Google Ads: bütçeyi koruyan üç ayar.' },
  'web-sitesi-5-soru': { baslik: 'Web sitesi yaptırmadan önce 5 soru (kısa video)', aciklama: 'Teklif alırken sorulacak beş soru.' },
  'chatgpt-oneri': { baslik: 'ChatGPT işletmenizi önerir mi? (kısa video)', aciklama: 'Yapay zekâ hangi işletmeleri önerir, neden?' },
  'isletme-profili': { baslik: 'Google İşletme Profili (kısa video)', aciklama: 'Haritada öne çıkmanın temelleri.' },
  'aylik-rapor': { baslik: 'Aylık rapor neleri göstermeli? (kısa video)', aciklama: 'Ajansınızdan her ay görmeniz gerekenler.' },
}

const BILESEN_ACIKLAMA: Record<string, string> = {
  'ai-modu': 'Yapay zekâ cevabında işletmenin önerilmesi böyle görünür.',
  'chatgpt-reklam': 'Sponsorlu reklam, cevabın altında ayrı ve etiketli çıkar.',
  'reklam-etiketi': 'Menfaat karşılığı paylaşımda “Reklam” ibaresi zorunlu.',
  'google-arama': 'Müşteriniz Google’da tam olarak böyle arar.',
  harita: 'Yerel aramada önce harita ve işletme profili görünür.',
  'reklam-telefon': 'Doğru kurulmuş arama reklamı satın almaya yakın kişiye çıkar.',
  chatbot: 'Sitede yapay zekâ asistanı soruyu cevaplar, talebi işletmeye iletir.',
  eposta: 'Doğru konu satırı ve kişiselleştirme ile e-posta açılır.',
  'meta-reklam': 'Instagram ve Facebook’ta ürün odaklı reklam.',
  otomasyon: 'Tekrarlayan işler otomatik akışla kendiliğinden yürür.',
  rapor: 'İyi bir rapor; talep, maliyet ve kanal sonucunu tek bakışta gösterir.',
  'site-kaydirma': 'Hızlı, mobil uyumlu ve tek dokunuşla iletişim kurulan site.',
  'sosyal-medya': 'Düzenli ve kanca odaklı içerik akışı.',
  whatsapp: 'WhatsApp’tan gelen talebe hızlı ve düzenli dönüş.',
}

type Baslik = { id: string; metin: string }

const slugla = (s: string) =>
  s
    .replace(/<[^>]+>/g, '')
    .toLocaleLowerCase('tr-TR')
    .replace(/[çğıöşü]/g, (h) => ({ ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u' })[h] as string)
    .replace(/&[a-z]+;/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60)

export function hazirla(slug: string, ham: string): { html: string; basliklar: Baslik[] } {
  let html = ham
  const z = blogZenginlestirme[slug] ?? {}
  const isaret = (ad: string) => `<div data-bilesen="${ad}"></div>`

  // Konuya uygun bileşen: üçüncü (yoksa ikinci) bölümden önce
  if (z.bilesen && !html.includes('data-bilesen=')) {
    const h2ler = Array.from(html.matchAll(/<h2[\s>]/g), (m) => m.index as number)
    const yer = h2ler[2] ?? h2ler[1] ?? -1
    html = yer >= 0 ? html.slice(0, yer) + isaret(z.bilesen) + html.slice(yer) : html + isaret(z.bilesen)
  }

  // Video: SSS'den (yoksa Sonuç'tan) önce
  if (z.video && !html.includes('<video') && !html.includes('data-bilesen="video')) {
    const m = html.search(/<h[23][^>]*>\s*Sık Sorulan Sorular/) >= 0 ? html.search(/<h[23][^>]*>\s*Sık Sorulan Sorular/) : html.search(/<h3[^>]*>\s*Sonuç/)
    html = m >= 0 ? html.slice(0, m) + isaret(`video|${z.video}`) + html.slice(m) : html + isaret(`video|${z.video}`)
  }

  // Başlıklara bağlantı kimliği ver, içindekiler listesini çıkar
  const basliklar: Baslik[] = []
  const kullanilan = new Set<string>()
  html = html.replace(/<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/g, (tam, attr: string | undefined, ic: string) => {
    if (attr && /\sid=/.test(attr)) return tam
    let id = slugla(ic) || 'bolum'
    while (kullanilan.has(id)) id += '-2'
    kullanilan.add(id)
    basliklar.push({ id, metin: ic.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim() })
    return `<h2${attr ?? ''} id="${id}">${ic}</h2>`
  })

  // Kısa cevap kutusu (yoksa) en başa; içindekiler kısa cevabın hemen ardına
  const kisaVar = /callout-title">\s*Kısa cevap/i.test(html)
  if (z.kisa && !kisaVar) {
    html = `<div class="callout"><span class="callout-title">Kısa cevap</span><p>${z.kisa}</p></div>` + html
  }
  // Numaralı yazılarda (1., 2., 3. …) hareketli yol haritası; diğerlerinde katlanır içindekiler
  const numarali = basliklar.filter((b) => /^\d+\.\s/.test(b.metin)).length >= 3
  if (numarali || basliklar.length >= 4) {
    const k = html.search(/callout-title">\s*Kısa cevap/i)
    const kisaSonu = k >= 0 ? html.indexOf('</div>', k) + 6 : 0
    html = html.slice(0, kisaSonu) + isaret(numarali ? 'adimlar' : 'icindekiler') + html.slice(kisaSonu)
  }
  return { html, basliklar }
}

function Cerceve({ children, aciklama }: { children: ReactNode; aciklama?: string }) {
  return (
    <figure className="my-10 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-blue-500/[0.05] to-transparent px-4 pt-8 pb-6">
      {children}
      {aciklama && <figcaption className="text-center text-zinc-400 text-sm mt-4 max-w-md mx-auto leading-relaxed">{aciklama}</figcaption>}
    </figure>
  )
}

function Gomulu({ tanim, basliklar }: { tanim: string; basliklar: Baslik[] }) {
  const [ad, p = '', a] = tanim.split('|')
  const liste = p ? p.split(';').map((x) => x.trim()).filter(Boolean) : undefined
  const aciklama = a ?? BILESEN_ACIKLAMA[ad]

  switch (ad) {
    case 'icindekiler':
      return (
        <details className="group my-8 rounded-xl border border-white/[0.08] bg-[#0D1225] lg:hidden">
          <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center gap-2 px-5 py-3.5 text-white font-semibold text-sm">
            <List size={16} className="text-blue-400" /> Bu yazıda ({basliklar.length} başlık)
            <ChevronDown size={16} className="ml-auto text-zinc-400 group-open:rotate-180 transition-transform" />
          </summary>
          <ol className="px-5 pb-4 space-y-1.5 text-sm list-decimal list-inside marker:text-zinc-600">
            {basliklar.map((b) => (
              <li key={b.id}><a href={`#${b.id}`} className="text-zinc-300 hover:text-blue-300 no-underline">{b.metin}</a></li>
            ))}
          </ol>
        </details>
      )
    case 'adimlar': {
      const adimlar = basliklar
        .map((b) => ({ b, m: b.metin.match(/^(\d+)\.\s*(.+)$/) }))
        .filter((x) => x.m)
        .map(({ b, m }) => ({ id: b.id, no: m![1], metin: m![2].split(/:\s/)[0] }))
      return <AdimHaritasi adimlar={adimlar} />
    }
    case 'video': {
      const v = VIDEO_BASLIK[p]
      if (!v) return null
      return <Cerceve aciklama={a ?? v.aciklama}><TembelGomulu ad="video" props={{ ad: p, baslik: v.baslik }} /></Cerceve>
    }
    case 'ads-butce':
    case 'seo-buyume':
      return <div className="my-6 -mx-4 sm:-mx-6"><TembelGomulu ad={ad} /></div>
    case 'takvim-2027':
      return <div className="my-10"><TembelGomulu ad={ad} /></div>
    case 'google-arama':
      return <Cerceve aciklama={aciklama}><TembelGomulu ad={ad} props={{ aramalar: liste }} /></Cerceve>
    case 'harita':
      return <Cerceve aciklama={aciklama}><TembelGomulu ad={ad} props={{ arama: liste?.[0] }} /></Cerceve>
    case 'reklam-telefon':
      return <Cerceve aciklama={aciklama}><TembelGomulu ad={ad} props={{ aramalar: liste }} /></Cerceve>
    case 'ai-modu':
    case 'chatgpt-reklam':
    case 'reklam-etiketi':
    case 'chatbot':
    case 'eposta':
    case 'meta-reklam':
    case 'otomasyon':
    case 'rapor':
    case 'site-kaydirma':
    case 'sosyal-medya':
    case 'whatsapp':
      return <Cerceve aciklama={aciklama}><TembelGomulu ad={ad as TembelAd} /></Cerceve>
    default:
      return null
  }
}

export default function BlogIcerik({ slug, html: ham }: { slug: string; html: string }) {
  const { html, basliklar } = hazirla(slug, ham)
  const parcalar = html.split(/<div data-bilesen="([^"]+)"><\/div>/)
  return (
    <article className="mb-16">
      {parcalar.map((x, i) =>
        i % 2 === 0 ? (
          x.trim() ? <div key={i} className="post-content" dangerouslySetInnerHTML={{ __html: x }} /> : null
        ) : (
          <Gomulu key={i} tanim={x} basliklar={basliklar} />
        ),
      )}
    </article>
  )
}
