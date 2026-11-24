import { MapPin, CalendarClock, Building2 } from 'lucide-react'
import { GoogleAdsVideoBolumu, WebSitesiVideoBolumu } from '@/components/telefon/TelefonBolumleri'
import KurucuKutusu from '@/components/KurucuKutusu'
import { sehirHizmet, type Hizmet } from '@/lib/sehirHizmet'

const basliklar: Record<Hizmet, (b: string) => { h: string; p: string }> = {
  web: (b) => ({ h: `${b} Sektöre Göre Web Sitesi İhtiyaçları`, p: 'Her sektörde ziyaretçinin aradığı bilgi farklıdır. Site yapısını işletmenizin sektörüne ve müşterisinin karar sürecine göre kuruyoruz.' }),
  ads: (b) => ({ h: `${b} Sektöre Göre Google Ads Yaklaşımı`, p: 'Aynı bütçe, farklı sektörlerde farklı kampanya yapısı gerektirir. Hedefleme, anahtar kelime ve bütçe dağılımını sektörünüze göre kuruyoruz.' }),
  pazarlama: (b) => ({ h: `${b} Sektöre Göre Dijital Pazarlama Kanalları`, p: 'Her kanal her sektörde aynı sonucu vermez. Bütçeyi müşterinizin gerçekten vakit geçirdiği kanallara yönlendiriyoruz.' }),
  reklam: (b) => ({ h: `${b} Hangi Sektör Hangi Reklam Kanalını Kullanmalı?`, p: 'Arama reklamı, sosyal medya ve harita görünürlüğü farklı ihtiyaçlara cevap verir. Kanal seçimini sektörünüzün satın alma sürecine göre yapıyoruz.' }),
  yazilim: (b) => ({ h: `${b} Sektöre Göre Yazılım ve Otomasyon İhtiyaçları`, p: 'Hazır bir araç yeterliyse onu öneriyor, gerçekten gerekiyorsa özel geliştirme yapıyoruz. İhtiyacı sektörünüzün iş akışına göre belirliyoruz.' }),
}

export function cityServiceFaqs(city: string, hizmet: Hizmet): { q: string; a: string }[] {
  const v = sehirHizmet[city]
  if (!v) return []
  const sektorListesi = v.sektorler.map((s) => s.ad.toLowerCase()).join(', ')
  switch (hizmet) {
    case 'web':
      return [{ q: `${v.bulunma} internet sitesi yaptırmak istiyorum, süreç nasıl işliyor?`, a: `Önce kısa bir görüşmede işinizi ve sitenin amacını konuşuyoruz (telefon, WhatsApp, randevu ya da satış). Ardından sayfa listesini ve yazılı teklifi çıkarıyor, tasarımı onayınıza sunuyor, siteyi mobil öncelikli ve Google'a hazır biçimde yayına alıyoruz. ${v.sehir} dışında olsanız bile süreç baştan sona online yürüyebilir.` }, { q: `${v.bulunma} hangi sektörler için web sitesi yapıyorsunuz?`, a: `${v.sehir} için öne çıkan ${sektorListesi} dahil her sektöre hizmet veriyoruz. Site yapısı sektöre göre değişir: ${v.sektorler[0].ad.toLowerCase()} için ${v.sektorler[0].web.charAt(0).toLowerCase() + v.sektorler[0].web.slice(1)}` }]
    case 'ads':
      return [{ q: `${v.bulunma} Google Ads bütçesi hangi dönemlerde artırılmalı?`, a: v.sezon }]
    case 'pazarlama':
      return [{ q: `${v.bulunma} dijital pazarlamada mevsimsellik önemli mi?`, a: v.sezon }]
    case 'reklam':
      return [{ q: `${v.bulunma} reklamlar hangi bölgelere hedeflenmeli?`, a: `İşletmenizin gerçekten hizmet verdiği bölgeye. ${v.sehir} için ${v.hedefBolgeler.slice(0, 5).join(', ')} gibi bölgeler genellikle ayrı reklam gruplarında ele alınır; böylece hem bütçe hem reklam metni bölgeye göre ayarlanabilir.` }]
    case 'yazilim':
      return [{ q: `${v.bulunma} küçük bir işletme için özel yazılım gerekli mi?`, a: `Çoğu zaman hayır. Önce hazır araçlarla çözülebilecek kısmı belirliyoruz; özel geliştirme yalnızca tekrarlayan ve işletmeye özgü bir iş akışı varsa anlamlıdır. Örneğin ${v.sektorler[0].ad.toLowerCase()} için: ${v.sektorler[0].yazilim.charAt(0).toLowerCase() + v.sektorler[0].yazilim.slice(1)}` }]
  }
}

export default function CityServiceSections({ city, hizmet }: { city: string; hizmet: Hizmet }) {
  const v = sehirHizmet[city]
  if (!v) return null
  const { h, p } = basliklar[hizmet](v.bulunma)
  const bolgeli = hizmet === 'ads' || hizmet === 'reklam'
  const sezonlu = hizmet === 'ads' || hizmet === 'pazarlama' || hizmet === 'reklam'
  return (
    <>
    <section className="py-10 md:py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{h}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">{p}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {v.sektorler.map((s) => (
            <div key={s.ad} className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Building2 size={16} className="text-blue-400 shrink-0" />
                <h3 className="text-white font-semibold">{s.ad}</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">{s[hizmet]}</p>
            </div>
          ))}
        </div>
        {(bolgeli || sezonlu) && (
          <div className="grid md:grid-cols-2 gap-5 mt-5">
            {bolgeli && (
              <div className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-blue-400" />
                  <h3 className="text-white font-semibold">Konum hedefleme</h3>
                </div>
                <p className="text-zinc-400 text-sm mb-3">
                  Tüm {v.sehir} yerine, hizmet verdiğiniz bölgelere ayrı hedefleme:
                </p>
                <div className="flex flex-wrap gap-2">
                  {v.hedefBolgeler.map((b) => (
                    <span key={b} className="text-xs text-zinc-300 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1">{b}</span>
                  ))}
                </div>
              </div>
            )}
            {sezonlu && (
              <div className="bg-[#0D1225] border border-white/[0.06] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CalendarClock size={16} className="text-blue-400" />
                  <h3 className="text-white font-semibold">Dönemsellik</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{v.sezon}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
    {hizmet === 'ads' && <GoogleAdsVideoBolumu />}
    {hizmet === 'web' && <WebSitesiVideoBolumu />}
    <KurucuKutusu yerel={['kocaeli', 'izmit'].includes(city)} />
    </>
  )
}
