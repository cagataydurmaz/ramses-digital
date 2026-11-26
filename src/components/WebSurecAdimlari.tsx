'use client'
import { useEffect, useRef, useState } from 'react'
import { MessagesSquare, LayoutList, Palette, Code2, ShieldCheck, LineChart, Check, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Web sitesi süreci: her adımda "Teslim ettiklerimiz" ve "Sizden beklediğimiz" yan yana.
// Sayfa kaydırıldıkça soldaki çizgi dolar, sıradaki adım yanar (SurecCizgisi ile aynı his).
type Adim = { icon: LucideIcon; baslik: string; ozet: string; teslim: string[]; sizden: string[] }

function adimlar(yuzYuze: boolean): Adim[] {
  return [
    {
      icon: MessagesSquare,
      baslik: 'Tanışma ve ihtiyaç',
      ozet: yuzYuze
        ? 'İşinizi, müşterinizi ve sitenin ne işe yarayacağını konuşuruz. Kocaeli’deyseniz yüz yüze, değilseniz online görüşürüz.'
        : 'İşinizi, müşterinizi ve sitenin ne işe yarayacağını online bir görüşmede konuşuruz.',
      teslim: ['Kapsam ve sayfa listesi', 'Takvim ve teklif'],
      sizden: ['Hedefinizi anlatmanız', 'Beğendiğiniz birkaç site'],
    },
    {
      icon: LayoutList,
      baslik: 'Sayfa planı ve içerik',
      ozet: 'Hangi sayfanın hangi aramayı karşılayacağını baştan planlarız; site daha yayına girmeden SEO’ya hazır olur.',
      teslim: ['Site haritası', 'Arama terimi planı', 'Sayfa başlıkları ve metin akışı'],
      sizden: ['Logo ve varsa fotoğraflar', 'Hizmet ve iletişim bilgileri'],
    },
    {
      icon: Palette,
      baslik: 'Tasarım',
      ozet: 'Önce telefon ekranı, sonra bilgisayar. Markanıza ait renk, yazı ve görsel dilini birlikte netleştiririz.',
      teslim: ['Mobil ve masaüstü taslak', 'Renk ve yazı sistemi'],
      sizden: ['Taslak üzerinde geri bildirim'],
    },
    {
      icon: Code2,
      baslik: 'Yazılım ve kurulum',
      ozet: 'Onaylanan tasarım hızlı açılan, mobil uyumlu bir siteye dönüşür; formlar ve iletişim düğmeleri çalışır hale gelir.',
      teslim: ['Hızlı, mobil uyumlu site', 'Form, WhatsApp ve arama düğmeleri', 'İçerik düzenleme imkânı'],
      sizden: ['Alan adı erişimi (varsa)'],
    },
    {
      icon: ShieldCheck,
      baslik: 'Test ve yayın',
      ozet: 'Site telefon, tablet ve bilgisayarda denenir; Google’a doğru şekilde tanıtılarak yayına alınır.',
      teslim: ['Cihaz ve hız testleri', 'Search Console ve Analytics kurulumu', 'Eski adreslerin yönlendirilmesi'],
      sizden: ['Son kontrol ve onay'],
    },
    {
      icon: LineChart,
      baslik: 'Yayından sonra',
      ozet: 'Yayın günü işin sonu değil. İsterseniz bakım, güncelleme ve SEO çalışmasıyla devam eder, her ay rapor alırsınız.',
      teslim: ['Aylık şeffaf rapor', 'Güncelleme ve bakım', 'SEO çalışması (isteğe bağlı)'],
      sizden: ['Yeni kampanya ve haber bilgisi'],
    },
  ]
}

export default function WebSurecAdimlari({ yuzYuze = false }: { yuzYuze?: boolean }) {
  const ref = useRef<HTMLOListElement>(null)
  const [ilerleme, setIlerleme] = useState(0)
  const liste = adimlar(yuzYuze)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIlerleme(1)
      return
    }
    let kare = 0
    const hesapla = () => {
      kare = 0
      const r = el.getBoundingClientRect()
      const p = (window.innerHeight * 0.6 - r.top) / r.height
      setIlerleme(Math.max(0, Math.min(1, p)))
    }
    const dinle = () => { if (!kare) kare = requestAnimationFrame(hesapla) }
    hesapla()
    window.addEventListener('scroll', dinle, { passive: true })
    window.addEventListener('resize', dinle)
    return () => {
      window.removeEventListener('scroll', dinle)
      window.removeEventListener('resize', dinle)
      if (kare) cancelAnimationFrame(kare)
    }
  }, [])

  const n = liste.length

  return (
    <ol ref={ref} className="relative max-w-4xl mx-auto">
      {/* Dikey çizgi: kaydırdıkça dolar */}
      <div aria-hidden className="absolute top-5 bottom-5 left-[19px] sm:left-[23px] w-[2px] bg-[#dbe4f3] rounded-full">
        <div className="w-full rounded-full bg-gradient-to-b from-blue-500 to-violet-500 transition-[height] duration-150 ease-out" style={{ height: `${ilerleme * 100}%` }} />
      </div>

      {liste.map((a, i) => {
        const Icon = a.icon
        const aktif = ilerleme >= i / n + 0.02
        return (
          <li key={a.baslik} className="relative pl-14 sm:pl-[72px] pb-5 last:pb-0">
            <div
              className={`absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                aktif ? 'bg-blue-600 border-blue-600 shadow-[0_8px_24px_-6px_rgba(37,99,235,0.55)]' : 'bg-white border-[#dbe4f3]'
              }`}
            >
              <Icon size={18} className={`transition-colors duration-500 ${aktif ? '!text-white' : 'text-zinc-500'}`} />
            </div>

            <div className={`rounded-2xl border bg-white p-4 sm:p-6 transition-all duration-500 ${aktif ? 'border-[#cfdcf3] shadow-[0_12px_32px_-20px_rgba(37,99,235,0.45)] opacity-100' : 'border-[#e3e8ef] opacity-70'}`}>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-xs font-semibold tracking-wider text-blue-600">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-semibold text-[#0F1B2D]">{a.baslik}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#475467] mb-4">{a.ozet}</p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                <div className="rounded-xl bg-[#F3F7FE] border border-[#e1eafa] p-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#1D4ED8] mb-2">Teslim ettiklerimiz</p>
                  <ul className="space-y-1.5">
                    {a.teslim.map((t) => (
                      <li key={t} className="flex gap-2 text-sm text-[#1D2939]"><Check size={15} className="text-blue-600 shrink-0 mt-0.5" />{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-[#F7F9FC] border border-[#e9edf3] p-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#667085] mb-2">Sizden beklediğimiz</p>
                  <ul className="space-y-1.5">
                    {a.sizden.map((t) => (
                      <li key={t} className="flex gap-2 text-sm text-[#1D2939]"><ArrowRight size={15} className="text-zinc-400 shrink-0 mt-0.5" />{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
