// Sayfa başında hero'nun hemen altında duran 2–3 cümlelik net özet kutusu.
// Blog yazılarındaki "Kısa cevap" kutusuyla aynı dilde (mavi kenarlı kart).
export default function KisaOzet({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-6 pb-12">
      <div className="max-w-3xl mx-auto rounded-xl border border-blue-500/25 bg-blue-500/[0.06] px-5 py-4">
        <span className="block text-blue-400 text-xs font-bold uppercase tracking-wider mb-1.5">Kısa özet</span>
        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">{children}</p>
      </div>
    </section>
  )
}
