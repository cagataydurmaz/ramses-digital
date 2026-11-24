import type { Post } from './posts'

// Halkın kendi diliyle sorduğu sorulara cevap veren rehberler (24 Kasım 2026).
// "internet sitesi", "Google'da çıkmıyorum", "işletme profili açma" gibi aramalar için.
// Açık fiyat yazılmaz; istatistik veya müşteri sonucu uydurulmaz.

const YAZAR = 'Çağatay Durmaz'
const TARIH = '2026-11-24'

export const soruRehberleri: Post[] = [
  // ─── 1. İNTERNET SİTESİ YAPTIRMAK ───────────────────────────────────────
  {
    slug: 'internet-sitesi-yaptirmak',
    coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80&fit=crop',
    title: 'İnternet Sitesi Yaptırmak İstiyorum: Nereden Başlamalı? (Adım Adım)',
    excerpt:
      'İşletmeniz için internet sitesi yaptırmak istiyorsanız önce neye karar vermelisiniz? Alan adı, sayfa sayısı, hazırlanacak bilgiler, süre ve teklif alırken sorulacak sorular tek yazıda.',
    category: 'Web Tasarım',
    categoryColor: 'indigo',
    emoji: '🌐',
    coverGradient: 'from-indigo-500/10 to-indigo-900/5',
    readTime: 6,
    date: TARIH,
    author: YAZAR,
    authorRole: 'Kurucu, Ramses Dijital',
    tags: ['İnternet Sitesi', 'Web Sitesi Yaptırmak', 'Web Tasarım', 'Küçük İşletme'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>İnternet sitesi yaptırmak için önce sitenin amacını (telefon mu, WhatsApp mı, satış mı) belirleyin, sonra alan adınızı kendi adınıza alın, sayfa listesini ve içerikleri hazırlayın, ardından canlı örnek gösterebilen bir ekipten yazılı teklif isteyin. Tahmini fiyatı <a href="/teklif-al">AI Teklif Hesaplayıcı</a> ile hemen görebilirsiniz.</p>
      </div>

      <h2>Web sitesi, internet sitesi, web sayfası: Aynı şey mi?</h2>
      <p>Evet, günlük dilde aynı şeyi anlatır. "Web sitesi" ve "internet sitesi" işletmenizin internetteki adresinin tamamıdır; "web sayfası" ise o sitenin içindeki tek bir sayfadır (örneğin iletişim sayfası). "Web tasarım" da sitenin tasarlanıp yapılması işinin adıdır.</p>
      <table>
        <thead><tr><th>Duyduğunuz ifade</th><th>Anlamı</th></tr></thead>
        <tbody>
          <tr><td>İnternet sitesi / web sitesi</td><td>Alan adınızla açılan sitenin tamamı (ornekfirma.com)</td></tr>
          <tr><td>Web sayfası</td><td>Sitenin içindeki tek bir sayfa (hizmetler, iletişim gibi)</td></tr>
          <tr><td>Web tasarım</td><td>Sitenin planlanması, tasarlanması ve yapılması işi</td></tr>
          <tr><td>Alan adı (domain)</td><td>Sitenin adresi; yıllık olarak kiralanır</td></tr>
          <tr><td>Barındırma (hosting)</td><td>Sitenin dosyalarının durduğu sunucu</td></tr>
        </tbody>
      </table>

      <h2>Adım Adım: İnternet Sitesi Yaptırma Süreci</h2>
      <table>
        <thead><tr><th>Adım</th><th>Ne yapılır?</th><th>Sizden ne gerekir?</th></tr></thead>
        <tbody>
          <tr><td>1. Amaç</td><td>Site ne işe yarayacak: arama, WhatsApp, randevu, satış?</td><td>Müşterinin sizi nasıl aramasını istediğiniz</td></tr>
          <tr><td>2. Alan adı</td><td>firmaadi.com veya .com.tr seçilir</td><td>Alan adının <strong>sizin adınıza</strong> kayıtlı olması</td></tr>
          <tr><td>3. Sayfa listesi</td><td>Ana sayfa, hizmetler, hakkımızda, iletişim vb.</td><td>Verdiğiniz hizmetlerin listesi</td></tr>
          <tr><td>4. İçerik</td><td>Metinler ve görseller hazırlanır</td><td>Logo, gerçek fotoğraflar, kısa tanıtım</td></tr>
          <tr><td>5. Tasarım ve yapım</td><td>Mobil öncelikli, hızlı açılan site kurulur</td><td>Taslak üzerinde onay ve geri bildirim</td></tr>
          <tr><td>6. Yayın ve ölçüm</td><td>Site yayına alınır, Google'a tanıtılır, tıklamalar ölçülür</td><td>Google hesabı erişimi</td></tr>
        </tbody>
      </table>

      <h2>Küçük Bir İşletme İçin Kaç Sayfa Yeter?</h2>
      <table>
        <thead><tr><th>İşletme</th><th>Başlangıç için yeterli sayfalar</th></tr></thead>
        <tbody>
          <tr><td>Esnaf / tek hizmet</td><td>Ana sayfa, hizmet, hakkımızda, iletişim</td></tr>
          <tr><td>Klinik, ofis, kurs</td><td>Ana sayfa, her hizmet için ayrı sayfa, ekip, sık sorulan sorular, iletişim</td></tr>
          <tr><td>Üretici / B2B</td><td>Ürün grubu sayfaları, belgeler, referanslar, teklif formu, gerekirse İngilizce</td></tr>
          <tr><td>Online satış</td><td>Ürün sayfaları, sepet ve ödeme, kargo ve iade bilgisi</td></tr>
        </tbody>
      </table>
      <p>Her hizmet için ayrı sayfa açmak, Google'da o hizmeti arayan kişiye doğrudan görünmenizi sağlar. Bu konuda ayrıntılı bilgi için <a href="/blog/donusum-odakli-web-tasarimi-ilkeleri">dönüşüm odaklı web tasarımı</a> yazımıza bakabilirsiniz.</p>

      <h2>Teklif Almadan Önce Hazırlayın</h2>
      <ul>
        <li><strong>Logonuz</strong> (yoksa yazı olarak işletme adınız da başlangıç için yeter)</li>
        <li><strong>Gerçek fotoğraflar:</strong> dükkân, ekip, ürün; hazır görsel yerine gerçek fotoğraf güven verir</li>
        <li><strong>Hizmet listesi</strong> ve her biri için iki-üç cümle</li>
        <li><strong>İletişim bilgileri:</strong> telefon, WhatsApp, adres, çalışma saatleri</li>
        <li><strong>Beğendiğiniz 2-3 site</strong> (rakip olması gerekmez)</li>
      </ul>

      <h2>Teklif Alırken Sorulacak 5 Soru</h2>
      <ul>
        <li><strong>Alan adı ve site kimin adına olacak?</strong> Cevap "sizin" olmalı.</li>
        <li><strong>Site telefondan hızlı açılıyor mu?</strong> Ziyaretçilerin çoğu telefondan gelir.</li>
        <li><strong>Google'a uygun altyapı (SEO) dahil mi?</strong> Başlıklar, açıklamalar, site haritası.</li>
        <li><strong>Teslimden sonra değişiklikleri kim yapacak?</strong></li>
        <li><strong>Canlı örnek var mı?</strong> Ziyaret edebileceğiniz gerçek siteler isteyin; bizim işlerimiz <a href="/portfolyo">portföyde</a>.</li>
      </ul>

      <h2>Sık Sorulan Sorular</h2>

      <h3>İnternet sitesi yaptırmak ne kadar sürer?</h3>
      <p>İçerikler hazırsa küçük bir tanıtım sitesi birkaç hafta içinde yayına alınabilir. Sayfa sayısı, dil ve entegrasyonlar arttıkça süre uzar; kesin süre teklifte yazılı verilir.</p>

      <h3>İnternet sitesi fiyatları neye göre değişir?</h3>
      <p>Sayfa sayısı, özel tasarım ihtiyacı, dil sayısı ve randevu, ödeme gibi eklemeler fiyatı belirler. Ayrıntılar için <a href="/blog/web-sitesi-fiyatlari-2026">Web Sitesi Fiyatları 2026</a> yazımıza bakın.</p>

      <h3>Site yaptırınca Google'da hemen çıkar mıyım?</h3>
      <p>Hayır, hemen değil. Google'ın siteyi bulup değerlendirmesi zaman alır; işletme profili ve doğru kurulmuş sayfalar bu süreci hızlandırır. Bkz. <a href="/blog/google-da-neden-cikmiyorum">Google'da neden çıkmıyorum?</a></p>

      <h3>Instagram sayfam var, yine de internet sitesi gerekir mi?</h3>
      <p>Instagram tanıtım için iyidir ama Google'da "şehir + hizmet" diye arayan kişiye çoğu zaman bir site ve işletme profili görünür. İkisi birbirinin yerine değil, birlikte çalışır.</p>

      <h3>Sonuç</h3>
      <p>İnternet sitesi yaptırmanın en kolay yolu, amacı ve sayfa listesini baştan netleştirmektir. Şehrinize özel bilgi için <a href="/kocaeli-web-tasarim">Kocaeli</a>, <a href="/istanbul-web-tasarim">İstanbul</a> ve <a href="/ankara-web-tasarim">Ankara</a> web tasarım sayfalarımıza ya da <a href="/hizmetler/web-tasarim">web tasarım hizmetimize</a> göz atın.</p>
    `,
  },

  // ─── 2. GOOGLE'DA NEDEN ÇIKMIYORUM ──────────────────────────────────────
  {
    slug: 'google-da-neden-cikmiyorum',
    coverImage: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&q=80&fit=crop',
    title: "İşletmem Google'da Neden Çıkmıyor? 9 Sebep ve Çözümü",
    excerpt:
      "Kendi işletme adınızı ya da hizmetinizi aradığınızda Google'da çıkmıyor musunuz? En sık 9 sebep, nasıl kontrol edeceğiniz ve her birinin çözümü.",
    category: 'SEO',
    categoryColor: 'blue',
    emoji: '🔍',
    coverGradient: 'from-blue-500/10 to-blue-900/5',
    readTime: 7,
    date: TARIH,
    author: YAZAR,
    authorRole: 'Kurucu, Ramses Dijital',
    tags: ["Google'da Çıkmak", 'SEO', 'Yerel SEO', 'Google İşletme Profili'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>En sık sebepler: Google İşletme Profili olmaması, sitenin Google'a hiç tanıtılmamış olması, sitenin çok yeni olması, hizmet sayfası eksikliği ve telefonda yavaş açılan bir site. Sitenizin durumunu <a href="/seo-analiz">ücretsiz SEO analizi</a> ile hemen görebilirsiniz.</p>
      </div>

      <h2>Önce Doğru Soruyu Sorun: Neyle Çıkmıyorsunuz?</h2>
      <table>
        <thead><tr><th>Aradığınız şey</th><th>Çıkmıyorsanız büyük ihtimalle</th></tr></thead>
        <tbody>
          <tr><td>İşletmenizin tam adı</td><td>Site Google'a hiç tanıtılmamış veya işletme profili yok</td></tr>
          <tr><td>"Şehir + hizmet" (ör. gebze diş kliniği)</td><td>Rekabet, eksik hizmet sayfası veya zayıf işletme profili</td></tr>
          <tr><td>Haritada "yakınımdaki ..."</td><td>İşletme profili eksik, kategori yanlış ya da yorum az</td></tr>
          <tr><td>ChatGPT / yapay zekâ önerileri</td><td>Sitenizde soru-cevap biçiminde net bilgi yok</td></tr>
        </tbody>
      </table>
      <p>Kendi adınızla çıkmamak teknik bir sorundur ve genelde hızlı çözülür. "Şehir + hizmet" aramasında çıkmamak ise rekabet meselesidir ve zaman ister.</p>

      <h2>9 Sebep ve Çözümü</h2>
      <table>
        <thead><tr><th>Sebep</th><th>Nasıl anlarsınız?</th><th>Çözüm</th></tr></thead>
        <tbody>
          <tr><td>1. İşletme profili yok</td><td>Haritada adınızı aratınca çıkmıyorsunuz</td><td><a href="/blog/google-isletme-profili-nasil-acilir">Google İşletme Profili açın</a> ve doğrulayın</td></tr>
          <tr><td>2. Site Google'a tanıtılmamış</td><td>Google'da <code>site:alanadiniz.com</code> yazınca sonuç gelmiyor</td><td>Search Console kurulur, site haritası gönderilir</td></tr>
          <tr><td>3. Site çok yeni</td><td>Birkaç haftalık site</td><td>Sabır; bu sürede işletme profili ve yorumlar hızlandırır</td></tr>
          <tr><td>4. Google'a kapalı ayar</td><td>Site yapımında açılan "arama motorlarına gizle" ayarı unutulmuş</td><td>Ayar kapatılır, sayfalar yeniden gönderilir</td></tr>
          <tr><td>5. Hizmet sayfası yok</td><td>Tüm hizmetler tek sayfada iki satır</td><td>Her ana hizmete ayrı, açıklayıcı sayfa</td></tr>
          <tr><td>6. Şehir/ilçe yazmıyor</td><td>Sitede nerede hizmet verdiğiniz belli değil</td><td>Hizmet bölgesini başlıklarda ve içerikte açıkça yazın</td></tr>
          <tr><td>7. Telefonda yavaş</td><td>Site telefondan 3-4 saniyede açılmıyor</td><td>Görseller küçültülür, gereksiz eklentiler kaldırılır</td></tr>
          <tr><td>8. Yorum az veya yok</td><td>Rakiplerin onlarca yorumu var</td><td>Memnun müşteriden düzenli yorum isteyin; bkz. <a href="/blog/google-yorumlari-nasil-artirilir">yorum rehberi</a></td></tr>
          <tr><td>9. Bilgiler tutarsız</td><td>Adres ve telefon farklı yerlerde farklı yazıyor</td><td>Site, profil ve rehberlerde aynı bilgiyi kullanın</td></tr>
        </tbody>
      </table>

      <h2>5 Dakikalık Kendi Kendine Kontrol</h2>
      <ul>
        <li>Google'da <code>site:alanadiniz.com</code> yazın. Hiç sonuç yoksa site Google'da kayıtlı değil.</li>
        <li>Google Haritalar'da işletme adınızı arayın. Çıkmıyorsanız profiliniz yok veya doğrulanmamış.</li>
        <li>Sitenizi telefondan, Wi-Fi kapalıyken açın. Uzun süre beyaz ekran görüyorsanız hız sorunu var.</li>
        <li>Rakibinizin sitesine bakın: her hizmet için ayrı sayfası var mı, sizde var mı?</li>
        <li>Sitenizin başlığında şehir veya ilçe adı geçiyor mu? Kontrol için <a href="/araclar/meta-baslik-kontrol">başlık kontrol aracını</a> kullanabilirsiniz.</li>
      </ul>

      <h2>Ne Kadar Sürede Çıkarım?</h2>
      <table>
        <thead><tr><th>Durum</th><th>Genel beklenti</th></tr></thead>
        <tbody>
          <tr><td>Kendi işletme adınızla çıkmak</td><td>Teknik sorun çözülünce genelde birkaç gün ile birkaç hafta</td></tr>
          <tr><td>Haritada görünmek</td><td>Profil doğrulandıktan sonra kısa sürede; üst sıralar yorum ve yakınlığa bağlı</td></tr>
          <tr><td>"Şehir + hizmet" aramasında üst sıralar</td><td>Rekabete göre aylar sürebilir; garanti verilemez</td></tr>
        </tbody>
      </table>
      <p>Google, kimsenin sıralama garantisi veremeyeceğini açıkça belirtir. "1. sıra garantisi" veren tekliflere temkinli yaklaşın.</p>

      <h2>Sık Sorulan Sorular</h2>

      <h3>Google'a para verirsem üstte çıkar mıyım?</h3>
      <p>Google Ads ile "Sponsorlu" bölümde hemen görünebilirsiniz, ama bu organik sıralamayı etkilemez. Reklam durunca görünürlük de durur. Ayrıntılar için <a href="/blog/google-ads-fiyatlari-2026">Google Ads Fiyatları 2026</a> yazımıza bakın.</p>

      <h3>Sitem var ama hiç ziyaretçi gelmiyor, neden?</h3>
      <p>Çoğu zaman site Google'a tanıtılmamıştır ya da insanların aradığı kelimelerle yazılmamıştır. Örneğin siz "kurumsal çözümler" yazarken müşteri "gebze muhasebeci" diye arıyordur.</p>

      <h3>ChatGPT'de işletmem neden önerilmiyor?</h3>
      <p>Yapay zekâ araçları güvenilir ve net bilgi veren kaynakları tercih eder. Sık sorulan sorulara açık cevap veren sayfalar ve tutarlı işletme bilgisi şansınızı artırır; bkz. <a href="/blog/geo-nedir-chatgpt-yapay-zeka-aramalarda-gorunurluk">GEO rehberi</a>.</p>

      <h3>Sonuç</h3>
      <p>Google'da çıkmamanın sebebi çoğu zaman tek bir eksiktir ve bulunduğunda çözülebilir. Hangi eksiğin sizde olduğunu öğrenmek için <a href="/seo-analiz">ücretsiz SEO analizi</a> yapabilir ya da <a href="/hizmetler/seo">SEO hizmetimizi</a> inceleyebilirsiniz.</p>
    `,
  },

  // ─── 3. GOOGLE İŞLETME PROFİLİ NASIL AÇILIR ─────────────────────────────
  {
    slug: 'google-isletme-profili-nasil-acilir',
    coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&fit=crop',
    title: 'Google İşletme Profili Nasıl Açılır? Haritada Görünmek İçin Adım Adım',
    excerpt:
      "İşletmenizi Google Haritalar'a eklemek ücretsiz. Google İşletme Profili nasıl açılır, nasıl doğrulanır, hangi bilgiler doldurulmalı ve en sık yapılan hatalar.",
    category: 'SEO',
    categoryColor: 'emerald',
    emoji: '📍',
    coverGradient: 'from-emerald-500/10 to-emerald-900/5',
    readTime: 6,
    date: TARIH,
    author: YAZAR,
    authorRole: 'Kurucu, Ramses Dijital',
    tags: ['Google İşletme Profili', 'Google Haritalar', 'Yerel SEO', 'Haritaya Ekleme'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>Google İşletme Profili ücretsizdir. Bir Google hesabıyla <strong>business.google.com</strong> adresine girip işletme adınızı, kategorinizi, adresinizi veya hizmet bölgenizi ve iletişim bilgilerinizi eklersiniz. Ardından Google'ın sunduğu yöntemle doğrularsınız. Doğrulanan profil Google Arama ve Haritalar'da görünmeye başlar.</p>
      </div>

      <h2>Adım Adım Profil Açma</h2>
      <table>
        <thead><tr><th>Adım</th><th>Ne yaparsınız?</th><th>İpucu</th></tr></thead>
        <tbody>
          <tr><td>1. Hesap</td><td>İşletmeye ait bir Google hesabıyla giriş yapın</td><td>Kişisel hesap yerine işletme hesabı, ileride devir kolaylığı sağlar</td></tr>
          <tr><td>2. İşletme adı</td><td>Tabeladaki gerçek adı yazın</td><td>Ada şehir veya hizmet kelimesi eklemeyin; kurallara aykırıdır</td></tr>
          <tr><td>3. Kategori</td><td>Ana işinizi en iyi anlatan kategoriyi seçin</td><td>Birincil kategori görünürlükte en etkili alandır</td></tr>
          <tr><td>4. Konum</td><td>Müşteri geliyorsa adres, gitmiyorsanız hizmet bölgesi</td><td>Evden hizmet verenler adresi gizleyip bölge seçebilir</td></tr>
          <tr><td>5. İletişim</td><td>Telefon ve web sitesi</td><td>Sitedeki telefonla aynı olsun</td></tr>
          <tr><td>6. Doğrulama</td><td>Google'ın sunduğu yöntemi tamamlayın</td><td>Yöntem işletmeye göre değişir (video, telefon, e-posta vb.)</td></tr>
        </tbody>
      </table>

      <h2>Doğrulamadan Sonra Mutlaka Doldurun</h2>
      <table>
        <thead><tr><th>Alan</th><th>Neden önemli?</th></tr></thead>
        <tbody>
          <tr><td>Çalışma saatleri</td><td>"Şu an açık" aramalarında görünmek için</td></tr>
          <tr><td>Gerçek fotoğraflar</td><td>Dış cephe, iç mekân, ekip ve iş örnekleri; müşteri seçimini fotoğrafa bakarak yapar</td></tr>
          <tr><td>Hizmetler / ürünler</td><td>Hangi işi yaptığınızı Google'a ve müşteriye net anlatır</td></tr>
          <tr><td>İşletme açıklaması</td><td>Ne yaptığınızı, nerede hizmet verdiğinizi sade dille anlatın</td></tr>
          <tr><td>Ek kategoriler</td><td>Ana iş dışında gerçekten yaptığınız işler için</td></tr>
          <tr><td>Soru-cevap ve gönderiler</td><td>Profilin canlı ve güncel görünmesini sağlar</td></tr>
        </tbody>
      </table>

      <h2>En Sık Yapılan 6 Hata</h2>
      <ul>
        <li><strong>İşletme adına anahtar kelime eklemek:</strong> "Ahmet Usta Gebze Kombi Servisi En Ucuz" gibi adlar profilin askıya alınmasına yol açabilir.</li>
        <li><strong>Sanal ofis veya posta kutusu adresi kullanmak:</strong> Google gerçek konum ister.</li>
        <li><strong>Aynı işletme için iki profil açmak:</strong> Görünürlüğü böler, sorun çıkarır.</li>
        <li><strong>Yorumlara hiç cevap vermemek:</strong> Kısa ve kibar cevaplar güven verir.</li>
        <li><strong>Telefonun sitede farklı yazması:</strong> Bilgiler her yerde aynı olmalı.</li>
        <li><strong>Profili açıp bırakmak:</strong> Fotoğraf ve bilgileri düzenli güncelleyin.</li>
      </ul>

      <h2>Haritada Üst Sıraya Ne Etki Eder?</h2>
      <table>
        <thead><tr><th>Etken</th><th>Açıklama</th></tr></thead>
        <tbody>
          <tr><td>Alaka</td><td>Profilinizin aranan işe ne kadar uyduğu: kategori, hizmetler, açıklama</td></tr>
          <tr><td>Mesafe</td><td>Arayan kişinin konumuna yakınlık; bunu değiştiremezsiniz</td></tr>
          <tr><td>Bilinirlik</td><td>Yorum sayısı ve puanı, web sitesi, internetteki diğer bahsedilmeler</td></tr>
        </tbody>
      </table>
      <p>Google bu üç etkeni kendi yardım sayfalarında açıkça belirtir. Yorum toplamak için pratik yollar <a href="/blog/google-yorumlari-nasil-artirilir">Google yorumları rehberimizde</a>, müşteriye gönderebileceğiniz yorum bağlantısı ise <a href="/araclar/google-yorum-linki">ücretsiz yorum linki aracımızda</a>.</p>

      <h2>Sık Sorulan Sorular</h2>

      <h3>Google İşletme Profili ücretli mi?</h3>
      <p>Hayır, tamamen ücretsizdir. "Haritaya ekleme ücreti" isteyen telefon aramalarına dikkat edin; Google bu hizmet için arayıp ücret talep etmez.</p>

      <h3>Dükkânım yok, evden hizmet veriyorum. Profil açabilir miyim?</h3>
      <p>Evet. Adresinizi gizleyip hizmet verdiğiniz ilçe ve şehirleri seçebilirsiniz. Tesisatçı, temizlik, özel ders gibi işler için uygundur.</p>

      <h3>Profilim açıldı ama haritada çıkmıyorum, neden?</h3>
      <p>Doğrulama tamamlanmamış olabilir, kategori yanlış seçilmiş olabilir ya da yakınınızda çok sayıda rakip vardır. Diğer sebepler için <a href="/blog/google-da-neden-cikmiyorum">Google'da neden çıkmıyorum?</a> yazımıza bakın.</p>

      <h3>Profili ajansa açtırırsam kimin olur?</h3>
      <p>Profil her zaman sizin Google hesabınızda olmalı; ajans yalnızca yönetici olarak eklenmelidir. Ayrılsanız bile profil sizde kalır.</p>

      <h3>Sonuç</h3>
      <p>İşletme profili, yerel müşterinin sizi bulmasının en hızlı ve ücretsiz yoludur. Profil kurulumu ve yönetimini de kapsayan yerel SEO için <a href="/kocaeli-seo">Kocaeli SEO</a> ve <a href="/hizmetler/seo">SEO hizmeti</a> sayfalarımıza göz atabilirsiniz.</p>
    `,
  },
]
