import Link from 'next/link'

// Ana sayfa SSS bölümü + FAQPage JSON-LD. Cevaplar sade; açık fiyat ve garanti içermez.
const sss: { q: string; a: string; link?: { href: string; label: string } }[] = [
  { q: 'Ramses Dijital ne iş yapar?', a: 'İşletmelerin internette bulunmasını ve müşteri kazanmasını sağlıyoruz: SEO, Google Ads yönetimi, web tasarım, sosyal medya içerik üretimi, e-posta ve n8n otomasyonu ile veri analizi.', link: { href: '/hizmetler', label: 'Tüm hizmetler' } },
  { q: 'Hangi şehirlere hizmet veriyorsunuz?', a: 'Tüm hizmetlerimizi uzaktan yürütüyoruz; Türkiye’nin her yerindeki işletmelerle çevrim içi görüşmelerle çalışabiliyoruz.', link: { href: '/sehirler', label: 'Şehir sayfaları' } },
  { q: 'SEO ne kadar sürede sonuç verir?', a: 'Google’ın kendi açıklamasına göre SEO çalışmalarının etkisini görmek genellikle 4 ay ile 1 yıl arasında sürer. Süre rekabete ve sitenin mevcut durumuna göre değişir; hiçbir ajans sıralama garantisi veremez.' },
  { q: 'Fiyatlarınız ne kadar?', a: 'Fiyat; hizmetin kapsamına, sektörünüze ve hedeflediğiniz bölgeye göre değişir. AI teklif hesaplayıcımızla birkaç adımda işletmenize özel tahmini teklifi görebilirsiniz.', link: { href: '/teklif-al', label: 'AI teklif hesaplayıcı' } },
  { q: 'Google Ads ile SEO arasındaki fark nedir?', a: 'Google Ads ücretli reklamdır; hemen görünür olursunuz ama bütçe bitince görünürlük de durur. SEO ise organik sonuçlarda kalıcı görünürlük için yapılan çalışmadır; daha geç sonuç verir ama reklam bağımlılığını azaltır. Çoğu işletme için ikisi birlikte iyi çalışır.' },
  { q: 'Sözleşme veya taahhüt var mı?', a: 'Uzun süreli taahhüt istemiyoruz. Çalışmanın kapsamını baştan net yazıyor, aylık ilerliyoruz.' },
  { q: 'ChatGPT gibi yapay zekâ aramalarında görünebilir miyim?', a: 'GEO ve AEO çalışmalarıyla içeriğinizi yapay zekâ araçlarının ve Google’ın cevap kutularının kolayca anlayıp alıntılayabileceği şekilde düzenliyoruz. Bu görünürlük olasılığını artırır; ancak yapay zekâ cevaplarında yer almak garanti edilemez.', link: { href: '/geo-ajansi', label: 'GEO hakkında' } },
  { q: 'Nasıl başlarız?', a: 'Ücretsiz bir ön görüşmeyle başlıyoruz: işletmenizi ve hedeflerinizi dinliyor, mevcut durumunuza bakıp size uygun planı öneriyoruz. WhatsApp’tan yazmanız ya da iletişim formunu doldurmanız yeterli.', link: { href: '/iletisim', label: 'İletişim' } },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: sss.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
}

export default function AnaSayfaSss() {
  return (
    <section aria-labelledby="sss-baslik" className="py-12 sm:py-16 px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">SSS</p>
          <h2 id="sss-baslik" className="text-3xl sm:text-4xl font-bold text-white mb-4">Sık Sorulan Sorular</h2>
        </div>
        <div className="space-y-3">
          {sss.map(({ q, a, link }) => (
            <details key={q} className="group bg-[#0D1225] border border-white/[0.06] rounded-xl p-5 open:border-blue-500/20">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-white font-semibold text-sm md:text-base">
                {q}
                <span className="text-blue-400 text-lg leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="text-zinc-400 text-sm leading-relaxed mt-3">
                {a}
                {link && (
                  <>
                    {' '}
                    <Link href={link.href} prefetch={false} className="text-blue-400 hover:text-blue-300">{link.label} →</Link>
                  </>
                )}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
