import Image from 'next/image'

// Sayfa başı altındaki geniş görsel (Unsplash, ticari kullanım serbest; kaynaklar: src/content/gorsel-kaynaklari.json).
export default function KapakGorseli({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="px-6 pb-12">
      <div className="relative max-w-5xl mx-auto aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/[0.08]">
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/70 via-[#0A0F1E]/10 to-transparent" />
      </div>
    </div>
  )
}
