import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

type Servis = 'seo' | 'google-ads' | 'web-tasarim'

const SEHIRLER: { slug: string; ad: string; not: string }[] = [
  { slug: 'istanbul', ad: 'İstanbul', not: 'Yakaya ve ilçeye göre strateji' },
  { slug: 'ankara', ad: 'Ankara', not: 'Kurumsal ve kamu odaklı' },
  { slug: 'izmir', ad: 'İzmir', not: 'Turizm, sanayi ve perakende' },
  { slug: 'bursa', ad: 'Bursa', not: 'Otomotiv, tekstil, İnegöl mobilya' },
  { slug: 'kocaeli', ad: 'Kocaeli', not: 'Gebze, Darıca, Körfez ve sanayi' },
  { slug: 'izmit', ad: 'İzmit', not: 'İzmit merkez ve yakın çevre' },
  { slug: 'antalya', ad: 'Antalya', not: 'Turizm ve çok dilli yapı' },
  { slug: 'kayseri', ad: 'Kayseri', not: 'Mobilya ve metal sanayi' },
  { slug: 'konya', ad: 'Konya', not: 'Tarım makineleri ve yedek parça' },
  { slug: 'gaziantep', ad: 'Gaziantep', not: 'İhracat, halı ve gıda' },
  { slug: 'mersin', ad: 'Mersin', not: 'Lojistik ve dış ticaret' },
  { slug: 'eskisehir', ad: 'Eskişehir', not: 'Öğrenci kitlesi ve sanayi' },
]

const ETIKET: Record<Servis, { baslik: string; ek: string }> = {
  seo: { baslik: 'Şehirlere Göre SEO Hizmeti', ek: 'SEO' },
  'google-ads': { baslik: 'Şehirlere Göre Google Ads Yönetimi', ek: 'Google Ads' },
  'web-tasarim': { baslik: 'Şehirlere Göre Web Tasarım', ek: 'Web Tasarım' },
}

export default function CityLinksGrid({ servis }: { servis: Servis }) {
  const e = ETIKET[servis]
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{e.baslik}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Tüm Türkiye&apos;ye uzaktan hizmet veriyoruz. Her şehrin sektör yapısı ve arama alışkanlıkları farklı olduğu
            için şehre özel sayfalarımızda yerel stratejiyi ayrıntılı anlattık.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SEHIRLER.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}-${servis}`}
              className="group flex items-center gap-3 bg-[#0D1225] border border-white/[0.06] hover:border-blue-500/30 rounded-xl px-4 py-3.5 transition-colors"
            >
              <MapPin size={16} className="text-blue-400 shrink-0" />
              <span className="flex-1 min-w-0">
                <span className="block text-white text-sm font-medium">
                  {s.ad} {e.ek}
                </span>
                <span className="block text-zinc-500 text-xs truncate">{s.not}</span>
              </span>
              <ArrowRight size={14} className="text-zinc-500 group-hover:text-blue-400 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
