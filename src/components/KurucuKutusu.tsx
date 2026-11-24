import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const KURUCU = {
  ad: 'Çağatay Durmaz',
  rol: 'Kurucu, Ramses Dijital',
  unvan: 'Kurucu · Elektrik-Elektronik Mühendisi',
  foto: '/ekip/cagatay-durmaz-kare.webp',
  kisaBio:
    'Elektrik-elektronik mühendisi. 2019’dan beri işletmelerin Google’da, haritada ve yapay zekâ aramalarında bulunması için SEO, Google Ads ve web projeleri yürütüyor.',
}

// "Kurucudan" güven kutusu: kurucunun fotoğrafı ve kısa notu. Şirket ekip olarak anlatılır, kişi sayısı verilmez.
export default function KurucuKutusu({ yerel = false }: { yerel?: boolean }) {
  return (
    <section aria-label="Kurucudan" className="py-8 md:py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-5 sm:gap-7 bg-[#0D1225] border border-white/[0.08] rounded-2xl p-6 md:p-7">
        <div className="relative shrink-0">
          <Image src={KURUCU.foto} alt={`${KURUCU.ad}, Ramses Dijital kurucusu`} width={96} height={96} className="w-24 h-24 rounded-full object-cover ring-2 ring-blue-500/40" />
          <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-[#0D1225]" aria-hidden />
        </div>
        <div className="text-center sm:text-left">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">Kurucudan</p>
          <p className="text-white text-lg font-semibold">
            {KURUCU.ad} <span className="text-zinc-500 text-sm font-normal">· {KURUCU.unvan}</span>
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-1.5">
            “Ramses Dijital’i, işletmelerin dijital kanallarda ölçülebilir biçimde büyümesi amacıyla kurdum. Ekibimiz her projeyi planlı ve şeffaf bir süreçle yürütür; sorularınızı doğrudan projeyi yürüten ekip yanıtlar.
            {yerel ? ' Kocaeli’deki işletmelerle yüz yüze de görüşebiliriz.' : ' Süreci görüntülü görüşme ve WhatsApp üzerinden yürütüyoruz.'}”
          </p>
          <Link href="/hakkimizda" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium mt-2">
            Hakkımızda <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  )
}
