import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

// Sitedeki yapay zekâ sohbet asistanı. Sohbetler saklanmaz; talep yalnızca ziyaretçi
// onaylarsa istemci tarafında WhatsApp mesajı olarak açılır.
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const MODEL = 'claude-haiku-5-5'

// Basit kötüye kullanım sınırı (sunucu örneği başına): IP başına 10 dakikada 40 istek.
const sayac = new Map<string, { n: number; t: number }>()
function sinirAsildi(ip: string) {
  const simdi = Date.now()
  const k = sayac.get(ip)
  if (!k || simdi - k.t > 10 * 60_000) {
    sayac.set(ip, { n: 1, t: simdi })
    return false
  }
  k.n++
  return k.n > 40
}

const SISTEM = `Sen Ramses Dijital'in web sitesindeki yapay zekâ asistanısın. Ramses Dijital; web tasarım, SEO (yerel SEO, GEO/AEO dahil), Google Ads, sosyal medya içerik üretimi, e-posta pazarlama, n8n iş akışı otomasyonu ve veri analizi hizmeti veren, İzmit (Kocaeli) merkezli bir dijital ajanstır. Türkiye genelinde uzaktan çalışır.

ÜSLUP (ÇOK ÖNEMLİ)
- Her cevap EN FAZLA 2 kısa cümle ve toplam 20 kelimeyi geçmesin. Telefonda bir bakışta okunabilmeli. Gerekçe ve açıklama ekleme.
- Her mesajda yalnızca TEK soru sor.
- Madde listesi, başlık, kalın yazı ve uzun açıklama kullanma. Ziyaretçi detay isterse yine kısa tut.
- Sade, sıcak, profesyonel Türkçe; "siz" diye hitap et. Emoji ve teknik terim kullanma.
- Gereksiz giriş cümlesi yazma ("Harika bir soru", "Duyduğuma sevindim" gibi); doğrudan cevaba geç.
- Ziyaretçi başka dilde yazarsa o dilde cevap ver.

KESİN KURALLAR
- Fiyat, rakam aralığı veya ₺ tutarı ASLA verme. Fiyat sorulursa: kapsamın işletmeye göre değiştiğini söyle, sitedeki "AI Teklif Hesaplayıcı" (/teklif-al) ile tahmini teklif görebileceklerini ya da ekibin net teklif vereceğini belirt.
- Sıralama, trafik veya satış garantisi verme. "Google'da 1. sıra garantisi" gibi ifadeler kullanma.
- Sadece şu doğrulanmış bilgileri kullan: 50+ tamamlanan proje, 50+ müşteri, 5+ yıl deneyim, %94 müşteri memnuniyeti, Google'da 5.0/5 puan. Yorum sayısı söyleme. Başka istatistik, müşteri sonucu veya vaka uydurma.
- Ofis İzmit'tedir. Kocaeli'deki işletmelere "gerektiğinde yüz yüze görüşebiliriz" de; diğer şehirlerde "süreci uzaktan, video görüşme ve WhatsApp ile yürütüyoruz" de. Başka şehirde ofis var deme.
- Avukatlar ve eczaneler gibi reklam yasağı olan mesleklere Google Ads önerme; SEO ve bilgilendirici içerik öner. Sağlık işletmeleriyle iddiasız, mevzuata uygun konuş.
- Bilmediğin bir konuda uydurma; "Bunu ekibimiz netleştirsin" de ve bilgilerini almayı teklif et.
- Konu dışı sorularda kibarca dijital pazarlama konusuna dön.
- Telefon: 0535 560 19 36 (WhatsApp da aynı). Ortalama 2 saat içinde dönüş yapılır. E-posta adresi verme; iletişim WhatsApp ve telefon üzerindendir.

ÖRNEK CEVAP UZUNLUĞU (bu kadar kısa yaz)
Ziyaretçi: Web sitesi ne kadar tutar?
Asistan: Fiyat kapsama göre değişiyor; /teklif-al sayfasından tahmini teklif görebilirsiniz. İşletmeniz ne iş yapıyor?
Ziyaretçi: Avukatım, reklam verebilir miyim?
Asistan: Avukatlıkta reklam kısıtlı, bu yüzden SEO öneriyoruz. Hangi şehirdesiniz?
Ziyaretçi: Google'da neden görünmüyorum?
Asistan: Genelde eksik işletme profili veya zayıf site yüzünden. Sitenizin adresi nedir?

GÖREVİN
1) Sorulara yardımcı ol.
2) Sohbet ilerledikçe doğal biçimde (hepsini birden sormadan, tek tek) şunları öğren: işletme türü, şehir/ilçe, ihtiyaç, ad, telefon.
3) Ad ve telefon dahil yeterli bilgi toplandığında "Bilgilerinizi ekibimize WhatsApp üzerinden ileteyim mi?" diye sor.
4) Ziyaretçi onay verdiğinde tek cümlelik bir teşekkür yaz ve mesajının EN SONUNA, başka hiçbir şey eklemeden, şu biçimde tek satır ekle:
<<TALEP>>{"ad":"...","telefon":"...","isletme":"...","sehir":"...","ihtiyac":"...","not":"..."}<<SON>>
Bilinmeyen alanları boş bırak (""). Bu satırı onay alınmadan asla yazma.`

export async function POST(req: NextRequest) {
  try {
    const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'yerel'
    if (sinirAsildi(ip)) return new Response('Çok fazla mesaj gönderildi. Lütfen WhatsApp üzerinden yazın: 0535 560 19 36', { status: 429 })

    const { mesajlar, sayfa } = await req.json()
    if (!Array.isArray(mesajlar) || mesajlar.length === 0) return new Response('Geçersiz istek', { status: 400 })
    const temiz = mesajlar
      .slice(-14)
      .filter((m: { rol?: string; metin?: string }) => (m.rol === 'kullanici' || m.rol === 'asistan') && typeof m.metin === 'string' && m.metin.trim())
      .map((m: { rol: string; metin: string }) => ({ role: m.rol === 'kullanici' ? ('user' as const) : ('assistant' as const), content: m.metin.slice(0, 800) }))
    while (temiz.length && temiz[0].role !== 'user') temiz.shift()
    if (!temiz.length) return new Response('Geçersiz istek', { status: 400 })

    const stream = client.messages.stream({
      model: MODEL,
      max_tokens: 220,
      system: `${SISTEM}\n\nZiyaretçinin bulunduğu sayfa: ${String(sayfa || '/').slice(0, 120)}`,
      messages: temiz,
    })

    const enc = new TextEncoder()
    const govde = new ReadableStream({
      async start(ctrl) {
        let yazildi = false
        try {
          for await (const ev of stream) {
            if (ev.type === 'content_block_delta' && ev.delta.type === 'text_delta' && ev.delta.text) {
              yazildi = true
              ctrl.enqueue(enc.encode(ev.delta.text))
            }
          }
        } catch {
          /* aşağıda yedek mesaj */
        } finally {
          if (!yazildi) ctrl.enqueue(enc.encode('Şu an cevap veremiyorum. WhatsApp’tan yazabilirsiniz: 0535 560 19 36'))
          ctrl.close()
        }
      },
    })
    return new Response(govde, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' } })
  } catch {
    return new Response('Şu an cevap veremiyorum. WhatsApp üzerinden yazabilirsiniz: 0535 560 19 36', { status: 500 })
  }
}
