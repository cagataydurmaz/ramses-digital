import Image from 'next/image'

// Portföy görsellerinde masaüstü ekran görüntüsünün üstüne binen telefon görünümü.
export default function TelefonCercevesi({ src, alt, className = '', sizes = '140px', priority }: { src: string; alt: string; className?: string; sizes?: string; priority?: boolean }) {
  return (
    <div className={`tema-koyu absolute z-10 rounded-[1.1rem] sm:rounded-[1.6rem] bg-[#05070d] p-[3px] sm:p-[5px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] ring-1 ring-white/15 ${className}`}>
      <div className="relative w-full aspect-[390/844] overflow-hidden rounded-[0.9rem] sm:rounded-[1.25rem] bg-black">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
        <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 w-1/3 h-1.5 sm:h-3 rounded-full bg-black" />
      </div>
    </div>
  )
}
