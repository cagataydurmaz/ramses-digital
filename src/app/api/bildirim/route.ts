import { NextRequest } from 'next/server'
import { whatsappBildir, sayfaYolu } from '@/lib/bildirim'

// Tarayıcıdaki kullanım etkinliklerini (araç kullanımı, arama/WhatsApp tıklaması) site sahibine
// WhatsApp bildirimi olarak iletir. Yalnızca aşağıdaki sabit etkinlikler kabul edilir; serbest metin yok.
const ETIKET: Record<string, string> = {
  'arac:whatsapp-link-olusturucu': 'Ücretsiz araç: WhatsApp link oluşturucu kullanıldı',
  'arac:google-yorum-linki': 'Ücretsiz araç: Google yorum linki kullanıldı',
  'arac:meta-baslik-kontrol': 'Ücretsiz araç: Meta başlık kontrolü kullanıldı',
  'arac:google-onizleme': '"Google\'da nasıl görünür" önizlemesi kullanıldı',
  'arac:google-ads-butce-hesaplayici': 'Ücretsiz araç: Google Ads bütçe hesaplayıcı kullanıldı',
  'lead:telefon': '📞 Sitede telefon numarasına tıklandı',
  'lead:whatsapp': '💬 Sitede WhatsApp düğmesine tıklandı',
}

const sayac = new Map<string, { n: number; t: number }>()
function sinirAsildi(ip: string) {
  const simdi = Date.now()
  const k = sayac.get(ip)
  if (!k || simdi - k.t > 30 * 60_000) {
    sayac.set(ip, { n: 1, t: simdi })
    return false
  }
  return ++k.n > 6
}

export async function POST(req: NextRequest) {
  try {
    const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'yerel'
    const { olay, sayfa } = JSON.parse(await req.text())
    const etiket = ETIKET[String(olay)]
    if (!etiket || sinirAsildi(ip)) return new Response(null, { status: 204 })
    await whatsappBildir(etiket, [`Sayfa: ${sayfaYolu(sayfa)}`])
  } catch {
    /* sessizce geç */
  }
  return new Response(null, { status: 204 })
}
