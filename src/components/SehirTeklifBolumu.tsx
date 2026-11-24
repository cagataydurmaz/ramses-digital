import TeklifAlCalculator from '@/components/TeklifAlCalculator'
import SiziArayalimFormu from '@/components/SiziArayalimFormu'

// Şehir sayfalarında açık fiyat tablosu yerine AI teklif hesaplayıcı: ziyaretçi
// kendi işletmesine göre tahmini teklifi görür, iletişime geçmeye yönlendirilir.
export default function SehirTeklifBolumu({ place }: { place: string }) {
  return (
    <>
    <section className="py-10 md:py-14 px-6 relative isolate before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:pointer-events-none before:bg-gradient-to-br before:from-blue-800/30 before:via-[#0c1330]/75 before:to-violet-800/30 before:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">AI Destekli Teklif Hesaplayıcı</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{place} İşletmeniz İçin Ücretsiz Teklif Alın</h2>
        <p className="text-zinc-400 max-w-xl mx-auto">4 adımda işletmenize özel dijital pazarlama paketi ve tahmini fiyat aralığı görün.</p>
      </div>
      <TeklifAlCalculator />
    </section>
    <SiziArayalimFormu />
    </>
  )
}
