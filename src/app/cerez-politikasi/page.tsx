import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Çerez Politikası | Ramses Digital',
  description: 'Ramses Digital Çerez Politikası',
}

export default function CerezPolitikasiPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Çerez Politikası</h1>
        <p className="text-zinc-500 text-sm mb-10">Son güncelleme: Ocak 2025</p>

        <div className="space-y-8 text-zinc-400 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-lg mb-3">1. Çerez Nedir?</h2>
            <p>
              Çerezler, web sitelerinin tarayıcınıza yerleştirdiği küçük metin dosyalarıdır. Ziyaret
              ettiğiniz web sitelerinin sizi hatırlamasına yardımcı olur; böylece site bir sonraki
              ziyaretinizde tercihlerinizi hatırlayabilir.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">2. Kullandığımız Çerez Türleri</h2>

            <div className="space-y-4 mt-3">
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                <h3 className="text-white font-medium mb-2">Zorunlu Çerezler</h3>
                <p>
                  Web sitesinin temel işlevlerini yerine getirmesi için gerekli olan çerezlerdir.
                  Bu çerezler olmadan site düzgün çalışamaz ve devre dışı bırakılamazlar.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                <h3 className="text-white font-medium mb-2">Analitik / Performans Çerezleri</h3>
                <p>
                  Ziyaretçilerin web sitemizle nasıl etkileşime geçtiğini anlamamıza yardımcı olur.
                  Bu çerezler sayesinde hangi sayfaların en çok ziyaret edildiğini, hata mesajları
                  alıp almadığınızı ve siteye nasıl ulaştığınızı öğrenebiliriz. Tüm bilgiler
                  anonim olarak toplanır.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                <h3 className="text-white font-medium mb-2">İşlevsel Çerezler</h3>
                <p>
                  Web sitesinin tercihlerinizi hatırlamasına olanak tanır (örn. dil seçiminiz,
                  bölgeniz). Bu çerezlerin topladığı bilgiler anonimleştirilebilir; diğer web
                  sitelerindeki gezinti etkinliğinizi izleyemezler.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                <h3 className="text-white font-medium mb-2">Hedefleme / Reklam Çerezleri</h3>
                <p>
                  İlgi alanlarınıza yönelik reklamlar sunmak amacıyla kullanılır. Aynı zamanda
                  bir reklam görme sıklığınızı sınırlamak ve reklam kampanyasının etkinliğini
                  ölçmek için de kullanılabilir.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">3. Kullandığımız Üçüncü Taraf Çerezleri</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left text-white py-2 pr-4">Hizmet</th>
                    <th className="text-left text-white py-2 pr-4">Amaç</th>
                    <th className="text-left text-white py-2">Tür</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  <tr>
                    <td className="py-2 pr-4 text-zinc-300">Plausible Analytics</td>
                    <td className="py-2 pr-4">Anonim ziyaretçi istatistikleri</td>
                    <td className="py-2">Analitik</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-zinc-300">Calendly</td>
                    <td className="py-2 pr-4">Randevu planlama widget&apos;ı</td>
                    <td className="py-2">İşlevsel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">4. Çerezleri Kontrol Etme</h2>
            <p className="mb-4">
              Çerezleri tarayıcı ayarlarınızdan yönetebilirsiniz. Çerezleri silmek veya engellemek
              için tarayıcınızın yardım bölümüne başvurun. Aşağıdaki bağlantılar popüler tarayıcılar
              için çerez yönetimi sayfalarına yönlendirir:
            </p>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>Google Chrome — Ayarlar &gt; Gizlilik ve güvenlik &gt; Çerezler</li>
              <li>Mozilla Firefox — Seçenekler &gt; Gizlilik ve Güvenlik</li>
              <li>Safari — Tercihler &gt; Gizlilik</li>
              <li>Microsoft Edge — Ayarlar &gt; Gizlilik, arama ve hizmetler</li>
            </ul>
            <p className="mt-4">
              Çerezleri devre dışı bırakmanız durumunda web sitemizin bazı özellikleri düzgün
              çalışmayabilir.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">5. Onayınız</h2>
            <p>
              Web sitemizi ilk ziyaretinizde çerez kullanımına ilişkin bir bildirim gösterilmektedir.
              &quot;Kabul Et&quot; butonuna tıklayarak analitik ve işlevsel çerezlerin kullanımına onay
              vermiş olursunuz. Onayınızı dilediğiniz zaman tarayıcı ayarlarından geri alabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">6. İletişim</h2>
            <p>
              Çerez politikamız hakkında sorularınız için{' '}
              <a href="mailto:contact@ramsesdigital.com" className="text-blue-400 hover:text-blue-300">
                contact@ramsesdigital.com
              </a>{' '}
              adresine ulaşabilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
