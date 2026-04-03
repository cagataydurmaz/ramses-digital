import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Ramses Digital',
  description: 'Ramses Digital KVKK ve Gizlilik Politikası',
}

export default function GizlilikPolitikasiPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Gizlilik Politikası</h1>
        <p className="text-zinc-500 text-sm mb-10">Son güncelleme: Ocak 2025</p>

        <div className="space-y-8 text-zinc-400 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-lg mb-3">1. Veri Sorumlusu</h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında veri sorumlusu sıfatıyla
              Ramses Digital (&quot;Şirket&quot;), kişisel verilerinizin işlenmesine ilişkin bu Gizlilik Politikasını
              yayımlamaktadır.
            </p>
            <div className="mt-3 bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
              <p><strong className="text-white">Ticaret Unvanı:</strong> Ramses Digital</p>
              <p className="mt-1"><strong className="text-white">Adres:</strong> Telsizler Mahallesi, Boğazkale Sokak, No:2, Kağıthane / İstanbul</p>
              <p className="mt-1"><strong className="text-white">E-posta:</strong> contact@ramsesdigital.com</p>
              <p className="mt-1"><strong className="text-white">Telefon:</strong> +90 (535) 560 19 36</p>
            </div>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">2. İşlenen Kişisel Veriler</h2>
            <p className="mb-3">Web sitemizi ziyaret ettiğinizde veya hizmetlerimizden yararlandığınızda aşağıdaki kişisel veriler işlenebilmektedir:</p>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>Ad, soyad</li>
              <li>E-posta adresi</li>
              <li>Telefon numarası</li>
              <li>Web sitesi URL&apos;si (opsiyonel)</li>
              <li>IP adresi ve tarayıcı bilgileri (çerezler aracılığıyla)</li>
              <li>Mesaj içerikleri (iletişim formu aracılığıyla)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">3. Kişisel Verilerin İşlenme Amaçları</h2>
            <p className="mb-3">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>Talep ve sorularınızın yanıtlanması</li>
              <li>Hizmetlerimizin sunulması ve geliştirilmesi</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Pazarlama faaliyetlerinin yürütülmesi (açık rızanız dahilinde)</li>
              <li>Web sitesi güvenliğinin sağlanması</li>
              <li>İstatistiksel analizlerin yapılması</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">4. Kişisel Verilerin İşlenme Hukuki Sebepleri</h2>
            <p>Kişisel verileriniz KVKK&apos;nın 5. ve 6. maddeleri kapsamında aşağıdaki hukuki sebepler doğrultusunda işlenmektedir:</p>
            <ul className="space-y-1.5 list-disc list-inside mt-3">
              <li>Açık rızanızın bulunması</li>
              <li>Sözleşmenin kurulması veya ifası için zorunlu olması</li>
              <li>Veri sorumlusunun hukuki yükümlülüklerini yerine getirebilmesi</li>
              <li>Meşru menfaatlerimizin korunması</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">5. Kişisel Verilerin Aktarılması</h2>
            <p>
              Kişisel verileriniz, KVKK&apos;nın 8. ve 9. maddeleri kapsamında ve gerekli güvenlik önlemleri
              alınarak; hizmet aldığımız yurt içi ve yurt dışı üçüncü taraflarla (bulut hizmet sağlayıcıları,
              e-posta platformları vb.) paylaşılabilmektedir. Veri aktarımı her durumda yasal güvenceler
              çerçevesinde gerçekleştirilmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">6. Kişisel Verilerin Saklanma Süresi</h2>
            <p>
              Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca ve yasal saklama yükümlülükleri
              çerçevesinde saklanmaktadır. Amacın ortadan kalkması halinde verileriniz silinmekte, yok
              edilmekte veya anonim hale getirilmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">7. KVKK Kapsamındaki Haklarınız</h2>
            <p className="mb-3">KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
              <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
            </ul>
            <p className="mt-3">
              Bu haklarınızı kullanmak için{' '}
              <a href="mailto:contact@ramsesdigital.com" className="text-blue-400 hover:text-blue-300">
                contact@ramsesdigital.com
              </a>{' '}
              adresine yazılı başvuruda bulunabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">8. Çerezler</h2>
            <p>
              Web sitemizde çerezler kullanılmaktadır. Çerez kullanımı hakkında detaylı bilgi için{' '}
              <a href="/cerez-politikasi" className="text-blue-400 hover:text-blue-300">
                Çerez Politikamızı
              </a>{' '}
              inceleyebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">9. Güvenlik</h2>
            <p>
              Kişisel verilerinizin güvenliğini sağlamak amacıyla uygun teknik ve idari tedbirler
              alınmaktadır. Verileriniz yetkisiz erişim, ifşa, değiştirme veya imhaya karşı
              korunmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">10. Politika Güncellemeleri</h2>
            <p>
              Bu Gizlilik Politikası zaman zaman güncellenebilir. Değişiklikler web sitemizde
              yayımlanacaktır. Politikayı düzenli olarak incelemenizi öneririz.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
