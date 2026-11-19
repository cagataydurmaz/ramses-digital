import type { Post } from './posts'
import { pricing, type BusinessSize } from './pricing'

// Kasım 2026 blog yazıları. Fiyatlar pricing.ts'den gelir — teklif hesaplayıcıyla
// her zaman aynı kalsın, fiyat değişince yazılar da kendiliğinden güncellensin.
const tl = (n: number) => n.toLocaleString('tr-TR')
const aralik = (hizmet: string, boy: BusinessSize) => {
  const p = pricing[hizmet][boy]
  return `${tl(p.min)}–${tl(p.max)}₺`
}

const YAZAR = 'Ramses Digital Ekibi'
const TARIH = '2026-11-19'

export const kasim2026Postlari: Post[] = [
  // ─── 1. SEO FİYATLARI ────────────────────────────────────────────────────
  {
    slug: 'seo-fiyatlari-2026',
    coverImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80&fit=crop',
    title: 'SEO Fiyatları 2026: Aylık SEO Hizmeti Ne Kadar?',
    excerpt:
      'Aylık SEO hizmeti fiyatları işletme büyüklüğüne göre ne kadar, fiyata neler dahil, tek seferlik SEO paketi ile aylık SEO arasındaki fark ne? Güncel fiyat aralıkları ve ucuz SEO tuzakları.',
    category: 'SEO',
    categoryColor: 'blue',
    emoji: '💰',
    coverGradient: 'from-blue-500/10 to-blue-900/5',
    readTime: 6,
    date: TARIH,
    author: YAZAR,
    authorRole: 'SEO Ekibi',
    tags: ['SEO Fiyatları', 'SEO', 'Fiyatlandırma', 'Yerel SEO', 'Şeffaflık'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>2026'da aylık SEO hizmeti bizde küçük işletmeler için <strong>${aralik('SEO', 'kucuk')}</strong>, orta ölçekli işletmeler için <strong>${aralik('SEO', 'orta')}</strong>, büyük/kurumsal firmalar için <strong>${aralik('SEO', 'buyuk')}</strong> aralığındadır (aylık, KDV hariç). Aylık takip istemeyenler için tek seferlik SEO Başlangıç Paketi ${aralik('SEO Başlangıç Paketi', 'kucuk')}'den başlar.</p>
      </div>

      <h2>SEO Fiyatları Neden Bu Kadar Farklı?</h2>
      <p>"SEO ne kadar?" diye aradığınızda aylık birkaç bin liradan on binlerce liraya kadar rakam görürsünüz. Bunun sebebi aynı adın çok farklı işleri anlatmasıdır: Bir ajans için SEO sadece başlık ve açıklama düzeltmektir, bir başkası için içerik üretimi, teknik altyapı, yerel SEO ve aylık raporlamanın tamamıdır. Bu yazıda kendi güncel fiyat aralıklarımızı ve bu aralığı neyin belirlediğini açıkça paylaşıyoruz.</p>

      <div class="stat-grid">
        <div class="stat-card">
          <span class="stat-number">${aralik('SEO', 'kucuk')}</span>
          <span class="stat-label">Küçük işletme, aylık</span>
        </div>
        <div class="stat-card">
          <span class="stat-number emerald">${aralik('SEO', 'orta')}</span>
          <span class="stat-label">Orta işletme, aylık</span>
        </div>
        <div class="stat-card">
          <span class="stat-number violet">${aralik('SEO', 'buyuk')}</span>
          <span class="stat-label">Büyük / kurumsal, aylık</span>
        </div>
      </div>

      <h2>Güncel SEO Fiyat Tablosu (2026)</h2>
      <table>
        <thead><tr><th>Paket</th><th>Küçük İşletme</th><th>Orta İşletme</th><th>Büyük / Kurumsal</th></tr></thead>
        <tbody>
          <tr><td><strong>Aylık SEO</strong> (sürekli takip)</td><td>${aralik('SEO', 'kucuk')}/ay</td><td>${aralik('SEO', 'orta')}/ay</td><td>${aralik('SEO', 'buyuk')}/ay</td></tr>
          <tr><td><strong>SEO Başlangıç Paketi</strong> (tek seferlik)</td><td>${aralik('SEO Başlangıç Paketi', 'kucuk')}</td><td>${aralik('SEO Başlangıç Paketi', 'orta')}</td><td>${aralik('SEO Başlangıç Paketi', 'buyuk')}</td></tr>
        </tbody>
      </table>
      <p>Rakamlar KDV hariçtir ve tek bir web sitesi içindir. Kesin fiyat, sitenizi inceleyip kapsamı netleştirdikten sonra verilir. Kendi işletmenize göre tahmini fiyatı <a href="/teklif-al">AI Teklif Hesaplayıcı</a> ile 30 saniyede görebilirsiniz.</p>

      <h2>Aylık SEO mu, Tek Seferlik Paket mi?</h2>
      <table>
        <thead><tr><th></th><th>Aylık SEO</th><th>SEO Başlangıç Paketi</th></tr></thead>
        <tbody>
          <tr><td>Ne yapılır?</td><td>Teknik düzeltmeler, içerik, yerel SEO, sıralama ve trafik takibi, her ay iyileştirme</td><td>Site denetimi + temel kurulum (teknik hatalar, başlıklar, yapı)</td></tr>
          <tr><td>Süre</td><td>Devam eden</td><td>Bir kez yapılır</td></tr>
          <tr><td>Aylık rapor</td><td>Var</td><td>Yok</td></tr>
          <tr><td>Kimin için?</td><td>Rekabetçi sektörler, büyümek isteyen işletmeler</td><td>Sitesini sağlam bir temele oturtup kendisi devam etmek isteyenler</td></tr>
        </tbody>
      </table>

      <h2>Fiyatı Asıl Belirleyen 5 Şey</h2>
      <table>
        <thead><tr><th>Faktör</th><th>Fiyatı neden etkiler?</th></tr></thead>
        <tbody>
          <tr><td>Sektördeki rekabet</td><td>"İstanbul avukat" ile "Talas kuaför" aynı emeği gerektirmez. Rekabet arttıkça daha fazla içerik ve bağlantı çalışması gerekir.</td></tr>
          <tr><td>Hedef bölge</td><td>Tek şehir mi, birkaç şehir mi, Türkiye geneli mi? Her yeni bölge yeni sayfa ve içerik demektir.</td></tr>
          <tr><td>Sitenin mevcut durumu</td><td>Teknik sorunları çok olan bir sitede ilk aylar onarımla geçer.</td></tr>
          <tr><td>İçerik ihtiyacı</td><td>Aylık kaç yeni sayfa/yazı üretileceği fiyatı doğrudan etkiler.</td></tr>
          <tr><td>Sayfa sayısı</td><td>Ürün veya hizmet sayısı yüksek e-ticaret siteleri daha fazla emek ister.</td></tr>
        </tbody>
      </table>

      <div class="callout">
        <span class="callout-title">Çok şehirli SEO ayrı fiyatlandırılır</span>
        <p>"İstanbul SEO", "İzmir SEO", "Bursa SEO" gibi her şehir veya ilçe için ayrı sayfa isteniyorsa (programatik SEO), bu tablodaki aralığın dışındadır ve kapsam netleşince ayrı teklif verilir. Örnek olarak kendi <a href="/istanbul-seo">İstanbul</a>, <a href="/izmir-seo">İzmir</a>, <a href="/bursa-seo">Bursa</a> ve <a href="/kayseri-seo">Kayseri</a> SEO sayfalarımıza bakabilirsiniz.</p>
      </div>

      <h2>SEO Ne Zaman Sonuç Verir?</h2>
      <p>Google'ın kendi açıklamasına göre SEO çalışmalarının etkisini görmek çoğu zaman <strong>4 ay ile 1 yıl</strong> arası sürer. Bu yüzden "1 ayda ilk sıra" vaadi gerçekçi değildir. Bizim önerimiz, ilk 3 ayı temel ve teknik işlere, sonraki ayları içerik ve görünürlüğe ayırmaktır. Tıklama, gösterim ve sıra değişimini her ay Search Console verisiyle raporlarız.</p>

      <h2>Ucuz SEO Teklifinde Dikkat Edilecek 6 İşaret</h2>
      <ul>
        <li><strong>"Garantili 1. sıra" vaadi:</strong> Google'da sıralamayı kimse garanti edemez. Bu vaadi veren ajanstan uzak durun.</li>
        <li><strong>Toplu backlink paketleri:</strong> "1.000 backlink" gibi paketler sitenize ceza getirebilir.</li>
        <li><strong>Rapor yok:</strong> Ne yapıldığını ve sonucunu her ay göremiyorsanız ne için ödediğinizi bilemezsiniz.</li>
        <li><strong>Search Console erişimi verilmiyor:</strong> Veriler sizin hesabınızda, sizin adınıza olmalı.</li>
        <li><strong>Uzun ve cezalı sözleşme:</strong> İyi iş, müşteriyi sözleşmeyle değil sonuçla tutar.</li>
        <li><strong>Herkese aynı paket:</strong> Siteniz incelenmeden verilen sabit fiyat, işin yüzeysel yapılacağının işaretidir.</li>
      </ul>

      <blockquote>
        <p>"SEO'da ucuz olan değil, ne yaptığını her ay gösterebilen tercih edilmeli."</p>
      </blockquote>

      <h2>Sık Sorulan Sorular</h2>

      <h3>SEO fiyatlarına KDV dahil mi?</h3>
      <p>Hayır, tablodaki tüm rakamlar KDV hariçtir.</p>

      <h3>Sadece birkaç ay SEO yaptırıp bırakabilir miyim?</h3>
      <p>Bırakabilirsiniz; yapılan teknik düzeltmeler ve içerikler sitenizde kalır. Ancak rakipler çalışmaya devam ettiği için sıralamalar zamanla gerileyebilir. Kısa süreli bir çalışma düşünüyorsanız tek seferlik SEO Başlangıç Paketi daha uygun olabilir.</p>

      <h3>SEO mu, Google Ads mi?</h3>
      <p>SEO zamanla birikir ve tıklama başına ödeme yapmazsınız; Google Ads ise hemen görünürlük sağlar ama reklam durunca trafik de durur. Çoğu işletme için en iyi sonuç ikisinin birlikte kullanılmasıdır. Reklam maliyetleri için <a href="/blog/google-ads-fiyatlari-2026">Google Ads Fiyatları 2026</a> yazımıza bakabilirsiniz.</p>

      <h3>Ajans mı, freelancer mı?</h3>
      <p>İkisinin artı ve eksilerini <a href="/blog/seo-ajansi-mi-freelancer-mi">SEO Ajansı mı Freelancer mı?</a> yazımızda karşılaştırdık.</p>

      <h3>Sonuç</h3>
      <p>SEO fiyatı tek bir rakam değil, işletmenizin rekabetine ve hedefine göre değişen bir aralıktır. Önce sitenizin bugünkü durumunu görmek isterseniz <a href="/seo-analiz">ücretsiz SEO analizi</a> ile başlayın; size özel fiyat için <a href="/teklif-al">AI Teklif Hesaplayıcı</a> ya da <a href="/iletisim">iletişim</a> sayfamızdan bize ulaşın. Tüm fiyatlarımızı topluca görmek için <a href="/blog/dijital-pazarlama-ajansi-fiyatlari-2026">Dijital Pazarlama Ajansı Fiyatları</a> yazısına bakabilirsiniz.</p>
    `,
  },

  // ─── 2. GOOGLE ADS FİYATLARI ─────────────────────────────────────────────
  {
    slug: 'google-ads-fiyatlari-2026',
    coverImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&q=80&fit=crop',
    title: 'Google Ads Fiyatları 2026: Tıklama Başı Maliyet ve Bütçe Rehberi',
    excerpt:
      'Google Ads reklam maliyeti nasıl oluşur, tıklama başı maliyet nasıl hesaplanır, aylık bütçe ne olmalı ve ajans ücreti ne kadar? Formüllü bütçe hesaplama ve boşa harcamayı önleme listesi.',
    category: 'Google Ads',
    categoryColor: 'orange',
    emoji: '📢',
    coverGradient: 'from-orange-500/10 to-orange-900/5',
    readTime: 7,
    date: TARIH,
    author: YAZAR,
    authorRole: 'Google Ads Ekibi',
    tags: ['Google Ads Fiyatları', 'Google Ads', 'Tıklama Başı Maliyet', 'Reklam Bütçesi', 'Fiyatlandırma'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>Google Ads'in toplam maliyeti üç parçadan oluşur: <strong>(1)</strong> doğrudan Google'a ödenen reklam bütçesi (tutarı siz belirlersiniz, Google'ın zorunlu bir alt sınırı yoktur), <strong>(2)</strong> ajansın aylık yönetim ücreti (bizde küçük işletmeler için ${aralik('Google Ads', 'kucuk')}/ay) ve <strong>(3)</strong> reklam bütçesinin %15'i oranında yönetim payı. İlk ay yönetim ücreti yerine tek seferlik kurulum ücreti alınır.</p>
      </div>

      <h2>Google Ads'te Para Nereye Gider?</h2>
      <p>Google Ads'te karışıklığın çoğu, iki ayrı ödemenin birbirine karıştırılmasından çıkar. Reklam bütçesi ajansa değil, doğrudan sizin Google Ads hesabınızdan Google'a ödenir. Ajansa ödediğiniz ücret ise kampanyayı kurma, yönetme ve iyileştirme emeğinin karşılığıdır.</p>

      <table>
        <thead><tr><th>Kalem</th><th>Kime ödenir?</th><th>Ne kadar?</th></tr></thead>
        <tbody>
          <tr><td>Reklam bütçesi</td><td>Google</td><td>Siz belirlersiniz; sadece tıklama (veya seçtiğiniz sonuç) için ödersiniz</td></tr>
          <tr><td>Kurulum (ilk ay, tek seferlik)</td><td>Ajans</td><td>Küçük: ${aralik('Google Ads Kurulum', 'kucuk')} · Orta: ${aralik('Google Ads Kurulum', 'orta')} · Büyük: ${aralik('Google Ads Kurulum', 'buyuk')}</td></tr>
          <tr><td>Aylık yönetim (2. aydan itibaren)</td><td>Ajans</td><td>Küçük: ${aralik('Google Ads', 'kucuk')} · Orta: ${aralik('Google Ads', 'orta')} · Büyük: ${aralik('Google Ads', 'buyuk')}</td></tr>
          <tr><td>Yönetim payı</td><td>Ajans</td><td>Reklam bütçesinin %15'i</td></tr>
        </tbody>
      </table>
      <p>Ajans ücretleri KDV hariçtir. Google'ın faturasına da yasal vergiler eklenir; güncel tutarları Google Ads hesabınızdaki <em>Faturalandırma</em> bölümünde görürsünüz.</p>

      <h2>Tıklama Başı Maliyet (TBM) Nasıl Belirlenir?</h2>
      <p>Google Ads bir açık artırma sistemidir. Biri bir kelimeyi her aradığında, o kelimeye reklam veren işletmeler arasında anlık bir sıralama yapılır. Ödediğiniz tıklama fiyatını belirleyen başlıca etkenler:</p>
      <ul>
        <li><strong>Rekabet:</strong> Aynı kelimeye ne kadar çok işletme reklam veriyorsa tıklama o kadar pahalıdır.</li>
        <li><strong>Kalite Puanı (1–10):</strong> Reklamınız ve açılış sayfanız aranan kelimeyle ne kadar ilgiliyse, rakibinizden daha düşük fiyatla daha üstte çıkabilirsiniz.</li>
        <li><strong>Konum ve saat:</strong> Hedeflediğiniz şehir ve reklamın gösterildiği saatler maliyeti değiştirir.</li>
        <li><strong>Cihaz:</strong> Mobil ve masaüstü tıklama fiyatları farklı olabilir.</li>
      </ul>

      <div class="callout">
        <span class="callout-title">Kendi sektörünüzün tıklama fiyatını nasıl öğrenirsiniz?</span>
        <p>Google Ads hesabınızda <strong>Araçlar → Anahtar Kelime Planlayıcı → Arama hacmi ve tahminleri</strong> bölümüne kelimelerinizi yazın, konumu kendi şehriniz seçin. Google size o kelimenin tahmini tıklama fiyat aralığını gösterir. İnternette gördüğünüz "ortalama tıklama fiyatı" tablolarından çok daha güvenilirdir, çünkü sizin şehrinize ve kelimenize özeldir.</p>
      </div>

      <h2>Aylık Bütçe Nasıl Hesaplanır? (Formül)</h2>
      <p>Bütçeyi "ne kadar harcayayım" diye değil, "kaç müşteri istiyorum" diye tersten hesaplamak en sağlıklısıdır:</p>
      <table>
        <thead><tr><th>Adım</th><th>Formül</th><th>Örnek (varsayımsal rakamlarla)</th></tr></thead>
        <tbody>
          <tr><td>1. Hedef</td><td>Ayda kaç müşteri adayı (telefon/WhatsApp/form) istiyorsunuz?</td><td>30 aday</td></tr>
          <tr><td>2. Dönüşüm oranı</td><td>Tıklayanların yüzde kaçı sizi arıyor?</td><td>%5 varsayalım</td></tr>
          <tr><td>3. Gereken tıklama</td><td>Aday ÷ dönüşüm oranı</td><td>30 ÷ 0,05 = 600 tıklama</td></tr>
          <tr><td>4. Tıklama fiyatı</td><td>Anahtar Kelime Planlayıcı'dan</td><td>20₺ varsayalım</td></tr>
          <tr><td>5. Aylık reklam bütçesi</td><td>Tıklama × tıklama fiyatı</td><td>600 × 20₺ = 12.000₺</td></tr>
          <tr><td>6. Günlük bütçe</td><td>Aylık ÷ 30,4</td><td>≈ 395₺/gün</td></tr>
        </tbody>
      </table>
      <p>Tablodaki %5 ve 20₺ sadece hesabın nasıl yapıldığını göstermek içindir; sizin rakamlarınız sektörünüze ve şehrinize göre farklı olacaktır. İlk 2–4 hafta gerçek veriyi toplar, sonra bütçeyi bu formülle yeniden ayarlarız.</p>

      <div class="callout">
        <span class="callout-title">Günlük bütçe neden bazen aşılıyor?</span>
        <p>Google, trafiğin yoğun olduğu günlerde günlük bütçenizin <strong>2 katına kadar</strong> harcayabilir; ancak bir ay içinde <strong>günlük bütçe × 30,4</strong> tutarından fazlasını faturalandırmaz. Yani bir gün fazla, bir gün az harcanır ama ay toplamı sabittir.</p>
      </div>

      <h2>Toplam Maliyet Örneği</h2>
      <p>Aylık 12.000₺ reklam bütçesiyle çalışan küçük bir işletme için:</p>
      <table>
        <thead><tr><th>Kalem</th><th>1. ay</th><th>2. aydan itibaren</th></tr></thead>
        <tbody>
          <tr><td>Google'a reklam bütçesi</td><td>12.000₺</td><td>12.000₺</td></tr>
          <tr><td>%15 yönetim payı</td><td>1.800₺</td><td>1.800₺</td></tr>
          <tr><td>Kurulum (tek seferlik)</td><td>${aralik('Google Ads Kurulum', 'kucuk')}</td><td>—</td></tr>
          <tr><td>Aylık yönetim ücreti</td><td>— (ilk ay alınmaz)</td><td>${aralik('Google Ads', 'kucuk')}</td></tr>
        </tbody>
      </table>

      <h2>Bütçenin Boşa Gitmemesi İçin Kontrol Listesi</h2>
      <ul>
        <li><strong>Dönüşüm izleme kurulu mu?</strong> Telefon, WhatsApp ve form tıklamaları ölçülmüyorsa hangi reklamın müşteri getirdiğini bilemezsiniz.</li>
        <li><strong>Negatif kelimeler eklendi mi?</strong> "Ücretsiz", "iş ilanı", "nasıl yapılır" gibi aramalarda reklam çıkmamalı.</li>
        <li><strong>Konum doğru mu?</strong> Sadece hizmet verdiğiniz şehir/ilçeler hedeflenmeli.</li>
        <li><strong>Reklam saatleri ayarlı mı?</strong> Telefona bakamadığınız saatlerde reklam göstermek parayı boşa harcatır.</li>
        <li><strong>Açılış sayfası hızlı ve net mi?</strong> Yavaş ya da karışık bir sayfa, tıklamayı müşteriye çevirmez.</li>
        <li><strong>Arama terimleri raporu haftalık inceleniyor mu?</strong> Gerçekte hangi aramalara para ödediğinizi buradan görürsünüz.</li>
      </ul>

      <div class="callout">
        <span class="callout-title">Her sektör reklam veremez</span>
        <p>Türkiye'de bazı meslekler için reklam kısıtları vardır. Örneğin avukatların reklam yasağı nedeniyle Google Ads yerine SEO ile görünür olması gerekir; ayrıntılar <a href="/blog/avukatlar-icin-dijital-pazarlama-seo-rehberi">avukatlar için dijital pazarlama</a> yazımızda.</p>
      </div>

      <h2>Sık Sorulan Sorular</h2>

      <h3>Google Ads için minimum bütçe ne kadar?</h3>
      <p>Google'ın zorunlu bir alt sınırı yoktur. Ancak bütçe çok düşük olursa günde birkaç tıklama alırsınız ve neyin işe yaradığını anlamak için yeterli veri birikmez. Yukarıdaki formülle, hedeflediğiniz müşteri sayısına göre gerçekçi bir başlangıç bütçesi çıkarabilirsiniz.</p>

      <h3>Reklam bütçesini ajansa mı ödüyorum?</h3>
      <p>Hayır. Reklam bütçesi kendi Google Ads hesabınızdan, kendi kartınızla doğrudan Google'a ödenir. Hesap sizin adınızadır ve tüm verilere her zaman erişebilirsiniz.</p>

      <h3>İlk ay neden yönetim ücreti alınmıyor?</h3>
      <p>İlk ay hesap yapısı, dönüşüm izleme ve ilk kampanyaların kurulumu yapılır; bu emek kurulum ücretiyle karşılanır. Aylık yönetim ücreti 2. aydan itibaren başlar.</p>

      <h3>Ne zaman sonuç alırım?</h3>
      <p>Reklamlar onaylandığı gün yayına girer ve tıklama almaya başlar. Ancak kampanyanın verimli hale gelmesi, yani boşa giden aramaların ayıklanıp en iyi çalışan kelimelerin bulunması, genelde ilk birkaç haftalık veriyle olur.</p>

      <h3>Sonuç</h3>
      <p>Google Ads maliyetini kontrol etmenin yolu, bütçeyi müşteri hedefinden geriye doğru hesaplamak ve her lirayı ölçmektir. Şehrinize özel hizmetlerimiz için <a href="/istanbul-google-ads">İstanbul</a>, <a href="/izmir-google-ads">İzmir</a>, <a href="/ankara-google-ads">Ankara</a> ve <a href="/kocaeli-google-ads">Kocaeli</a> Google Ads sayfalarımıza; ajans seçerken sormanız gerekenler için <a href="/blog/google-ads-ajansi-secerken-sorulacak-sorular">Google Ads Ajansı Seçerken 8 Soru</a> yazımıza bakabilirsiniz. Size özel tahmini fiyat için <a href="/teklif-al">AI Teklif Hesaplayıcı</a>'yı deneyin.</p>
    `,
  },

  // ─── 3. GOOGLE YORUMLARI ─────────────────────────────────────────────────
  {
    slug: 'google-yorumlari-nasil-artirilir',
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&fit=crop',
    title: 'Google Yorumları Nasıl Artırılır? Yasal ve Etkili 7 Yöntem',
    excerpt:
      'Google İşletme Profili yorumlarını kurallara uygun şekilde artırmanın 7 yolu: yorum linki, doğru zamanlama, hazır mesaj şablonları, olumsuz yoruma cevap ve Google\'ın yasakladığı yöntemler.',
    category: 'SEO',
    categoryColor: 'blue',
    emoji: '⭐',
    coverGradient: 'from-blue-500/10 to-blue-900/5',
    readTime: 6,
    date: TARIH,
    author: YAZAR,
    authorRole: 'Yerel SEO Ekibi',
    tags: ['Google Yorumları', 'Google İşletme Profili', 'Yerel SEO', 'Google Haritalar', 'İtibar Yönetimi'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>Google yorumlarını artırmanın en etkili yolu, işi teslim ettiğiniz anda memnun müşteriye <strong>tek tıkla açılan yorum linkinizi</strong> WhatsApp'tan göndermektir. Yorum karşılığında indirim/hediye vermek ve sadece memnun müşterilerden yorum istemek Google kurallarına aykırıdır.</p>
      </div>

      <h2>Google Yorumları Neden Bu Kadar Önemli?</h2>
      <p>"Yakınımdaki diş hekimi", "Kayseri reklam ajansı" gibi yerel aramalarda Google, harita sonuçlarını sıralarken işletmenin ne kadar <strong>ilgili</strong>, ne kadar <strong>yakın</strong> ve ne kadar <strong>bilinir</strong> olduğuna bakar. Google, bilinirliğin bir parçası olarak yorum sayısını ve puanını da hesaba kattığını açıkça belirtir. Üstelik yorumlar sadece Google için değil, sizi ilk kez gören müşteri için de en güçlü güven sinyalidir.</p>

      <h2>7 Yasal ve Etkili Yöntem</h2>
      <table>
        <thead><tr><th>#</th><th>Yöntem</th><th>Nasıl yapılır?</th></tr></thead>
        <tbody>
          <tr><td>1</td><td><strong>Yorum linkinizi alın</strong></td><td>Google İşletme Profili'nde "Yorum iste" / "Yorum formunu paylaş" seçeneğinden kısa linkinizi kopyalayın. Müşteri tıklayınca doğrudan yıldız verme ekranı açılır.</td></tr>
          <tr><td>2</td><td><strong>Doğru anda isteyin</strong></td><td>İş teslim edildiği, müşteri "çok teşekkürler" dediği an en iyi zamandır. Bir hafta sonra istenen yorumun gelme ihtimali çok düşer.</td></tr>
          <tr><td>3</td><td><strong>WhatsApp'tan gönderin</strong></td><td>E-postadan çok daha yüksek oranda açılır. Aşağıdaki hazır şablonu kullanabilirsiniz.</td></tr>
          <tr><td>4</td><td><strong>Fiziksel noktada QR kod</strong></td><td>Kasada, masada veya faturada yorum linkine giden bir QR kod koyun.</td></tr>
          <tr><td>5</td><td><strong>Ekibe görev verin</strong></td><td>Müşteriyle son temas eden kişi (teknisyen, kasiyer, proje yöneticisi) yorum isteğini rutin hale getirsin.</td></tr>
          <tr><td>6</td><td><strong>Her yoruma cevap verin</strong></td><td>Olumlu yorumlara teşekkür, olumsuzlara çözüm odaklı cevap. Cevap verilen profillere yorum yazmak daha cazip görünür.</td></tr>
          <tr><td>7</td><td><strong>Web sitenizde gösterin</strong></td><td>Yorumlarınızı sitenizde paylaşmak hem güven verir hem yeni yorumlar için örnek olur.</td></tr>
        </tbody>
      </table>

      <h2>Hazır WhatsApp Mesaj Şablonu</h2>
      <blockquote>
        <p>"Merhaba [İsim] Bey/Hanım, bizi tercih ettiğiniz için çok teşekkür ederiz. Memnun kaldıysanız Google'da birkaç cümlelik bir yorum yazmanız bizim için çok değerli olur: [yorum linki] İyi günler dileriz."</p>
      </blockquote>
      <p>Kısa, kişisel ve tek bir linkten oluşan mesajlar en iyi sonucu verir. Müşteriye ne yazacağını dikte etmeyin; kendi cümleleriyle yazılan yorumlar hem daha inandırıcıdır hem de kurallara uygundur.</p>

      <h2>Google'ın Yasakladığı Yöntemler</h2>
      <table>
        <thead><tr><th>Yapmayın</th><th>Neden?</th></tr></thead>
        <tbody>
          <tr><td>Yorum karşılığı indirim, hediye, çekiliş</td><td>Google teşvikli yorumları yasaklar; yorumlar silinebilir.</td></tr>
          <tr><td>Sadece memnun müşteriye yorum linki göndermek</td><td>"Seçici yorum isteme" de kurallara aykırıdır. Herkese aynı şekilde sorun.</td></tr>
          <tr><td>Çalışanlara, akrabalara yorum yazdırmak</td><td>Çıkar çatışması sayılır.</td></tr>
          <tr><td>Yorum satın almak</td><td>Sahte yorumlar tespit edildiğinde silinir, profil kısıtlanabilir.</td></tr>
          <tr><td>Aynı yerden toplu yorum</td><td>Aynı gün aynı cihaz/ağdan gelen çok sayıda yorum filtrelenebilir.</td></tr>
        </tbody>
      </table>

      <h2>Olumsuz Yoruma Nasıl Cevap Verilir?</h2>
      <ul>
        <li><strong>Hızlı olun:</strong> Mümkünse aynı gün cevap verin.</li>
        <li><strong>Savunmaya geçmeyin:</strong> Cevabınızı şikâyet edenden çok, onu okuyacak gelecekteki müşteriler için yazdığınızı unutmayın.</li>
        <li><strong>Sorunu kabul edin ve çözüm önerin:</strong> "Yaşadığınız aksaklık için özür dileriz, sizinle iletişime geçmek isteriz."</li>
        <li><strong>Konuşmayı özele taşıyın:</strong> Telefon veya WhatsApp numarası verin; detayları herkesin önünde tartışmayın.</li>
        <li><strong>Sahte veya kural dışı yorumu bildirin:</strong> Gerçek bir müşteriye ait olmadığını düşündüğünüz yorumu işletme profilinizden Google'a bildirebilirsiniz.</li>
      </ul>

      <div class="stat-grid">
        <div class="stat-card">
          <span class="stat-number">1</span>
          <span class="stat-label">Tek tıkla açılan yorum linki</span>
        </div>
        <div class="stat-card">
          <span class="stat-number emerald">0</span>
          <span class="stat-label">Yorum karşılığı hediye/indirim</span>
        </div>
        <div class="stat-card">
          <span class="stat-number violet">%100</span>
          <span class="stat-label">Cevaplanan yorum hedefi</span>
        </div>
      </div>

      <h2>Sık Sorulan Sorular</h2>

      <h3>Kaç yorum yeterli?</h3>
      <p>Sabit bir sayı yoktur; önemli olan rakiplerinize göre durumunuz ve yorumların düzenli gelmesidir. Ayda birkaç yeni yorum, bir anda gelen ve sonra kesilen onlarca yorumdan daha doğal görünür.</p>

      <h3>Kötü yorumu silebilir miyim?</h3>
      <p>Hayır, işletme sahibi yorumu kendisi silemez. Sadece Google kurallarını ihlal eden yorumları (sahte, hakaret içeren, alakasız) bildirebilirsiniz. Gerçek bir olumsuz yorumda en iyi çözüm, profesyonel bir cevap vermektir.</p>

      <h3>Yorum sayısı sıralamayı gerçekten etkiler mi?</h3>
      <p>Google yorumları yerel sıralamada dikkate alınan bilinirlik sinyallerinden biri olarak sayar; ama tek başına yeterli değildir. Eksiksiz bir profil, doğru kategori ve güçlü bir web sitesiyle birlikte çalışır. Yerel görünürlüğün tamamı için <a href="/blog/kayseri-yerel-isletmeler-google-haritalar-rehberi">Google Haritalar'da öne çıkma rehberimize</a> ve <a href="/blog/yerel-isletme-aeo-geo-kontrol-listesi">yerel işletme kontrol listemize</a> bakabilirsiniz.</p>

      <h3>Sonuç</h3>
      <p>Google yorumları bir kampanya değil, alışkanlıktır: her teslimden sonra aynı kısa mesaj, her yoruma bir cevap. Yerel SEO'nuzu bütün olarak güçlendirmek isterseniz <a href="/hizmetler/seo">SEO hizmetimize</a> göz atın veya <a href="/seo-analiz">ücretsiz SEO analizi</a> ile başlayın.</p>
    `,
  },

  // ─── 4. WHATSAPP İLE SATIŞ ───────────────────────────────────────────────
  {
    slug: 'whatsapp-ile-satis-rehberi',
    coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80&fit=crop',
    title: 'WhatsApp ile Satış: İşletmeler İçin Konuşarak Satış Rehberi (2026)',
    excerpt:
      'WhatsApp Business ile müşteri adayını satışa çevirmenin yolları: katalog, hızlı yanıtlar, etiketler, WhatsApp\'a yönlendiren reklamlar, otomasyon ve İYS/KVKK kuralları.',
    category: 'Strateji',
    categoryColor: 'emerald',
    emoji: '💬',
    coverGradient: 'from-emerald-500/10 to-emerald-900/5',
    readTime: 7,
    date: TARIH,
    author: YAZAR,
    authorRole: 'Strateji Ekibi',
    tags: ['WhatsApp ile Satış', 'WhatsApp Business', 'Konuşarak Satış', 'Otomasyon', 'Müşteri Adayı'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>WhatsApp ile satışın temeli üç şeydir: <strong>hızlı cevap</strong>, <strong>düzenli takip</strong> ve <strong>doğru yönlendirme</strong>. Ücretsiz WhatsApp Business uygulamasındaki katalog, hızlı yanıt ve etiket özellikleri çoğu küçük işletme için yeterlidir; mesaj hacmi büyüyünce WhatsApp Business Platform (API) ve otomasyon devreye girer. Reklam/kampanya mesajı göndermek için ise müşterinin önceden onayı ve İYS kaydı gerekir.</p>
      </div>

      <h2>Neden WhatsApp?</h2>
      <p>Türkiye'de müşteriler artık "formu doldurup beklemek" yerine doğrudan yazmayı tercih ediyor. 2026'da WhatsApp ve Instagram DM üzerinden yapılan "konuşarak satış" belirgin şekilde büyüyen bir eğilim. Kendi sitemizde de WhatsApp butonunu ayrı bir dönüşüm olarak ölçüyoruz; hangi sayfanın konuşma başlattığını bu şekilde görüyoruz.</p>

      <h2>WhatsApp Business Uygulaması mı, API mı?</h2>
      <table>
        <thead><tr><th></th><th>WhatsApp Business Uygulaması</th><th>WhatsApp Business Platform (API)</th></tr></thead>
        <tbody>
          <tr><td>Maliyet</td><td>Ücretsiz</td><td>Meta mesaj başına ücret alır (güncel fiyatlar Meta'nın sayfasında); çoğu zaman bir aracı yazılım gerekir</td></tr>
          <tr><td>Kim kullanır?</td><td>Tek kişi veya küçük ekip</td><td>Çok temsilcili ekipler, yüksek mesaj hacmi</td></tr>
          <tr><td>Otomasyon</td><td>Karşılama ve "uzaktayım" mesajı, hızlı yanıtlar</td><td>Chatbot, CRM entegrasyonu, otomatik bildirimler</td></tr>
          <tr><td>Kurulum</td><td>Dakikalar içinde</td><td>Meta onayı ve teknik kurulum gerekir</td></tr>
        </tbody>
      </table>

      <h2>Ücretsiz Uygulamada Mutlaka Kurulması Gereken 6 Özellik</h2>
      <ul>
        <li><strong>İşletme profili:</strong> Adres, çalışma saatleri, web sitesi ve kısa açıklama eksiksiz olsun.</li>
        <li><strong>Katalog:</strong> Ürün/hizmetlerinizi fiyat ve görselle ekleyin; müşteri "fiyat ne?" diye sormadan görsün.</li>
        <li><strong>Karşılama mesajı:</strong> İlk yazan kişiye otomatik "Merhaba, en geç X dakika içinde dönüyoruz" mesajı.</li>
        <li><strong>Uzaktayım mesajı:</strong> Mesai dışında yazana ne zaman döneceğinizi söyleyin.</li>
        <li><strong>Hızlı yanıtlar:</strong> Sık sorulan sorular için "/fiyat", "/adres" gibi kısayollar.</li>
        <li><strong>Etiketler:</strong> "Yeni aday", "Teklif verildi", "Ödeme bekliyor", "Müşteri" gibi etiketlerle kimin hangi aşamada olduğunu kaybetmeyin.</li>
      </ul>

      <h2>Mesajdan Satışa: 5 Adımlı Akış</h2>
      <table>
        <thead><tr><th>Adım</th><th>Ne yapılır?</th><th>Hedef süre</th></tr></thead>
        <tbody>
          <tr><td>1. İlk cevap</td><td>Selamlama + ihtiyacı anlamak için 1–2 soru</td><td>Mümkün olan en kısa sürede</td></tr>
          <tr><td>2. İhtiyaç netleştirme</td><td>Bütçe, zaman, konum gibi bilgileri sorun</td><td>Aynı gün</td></tr>
          <tr><td>3. Teklif</td><td>Net fiyat ve kapsam; mümkünse tek mesajda</td><td>24 saat içinde</td></tr>
          <tr><td>4. Takip</td><td>Cevap gelmezse nazik bir hatırlatma</td><td>2–3 gün sonra</td></tr>
          <tr><td>5. Sonrası</td><td>Teslimden sonra memnuniyet sorusu + yorum isteği</td><td>Teslim günü</td></tr>
        </tbody>
      </table>
      <p>Satışın en sık kaçırıldığı yer 4. adımdır: Teklifi gönderip hiç takip etmemek. Etiketler sayesinde "Teklif verildi" etiketli kişileri her gün tek ekranda görebilirsiniz. Teslimden sonra yorum istemenin doğru yolu için <a href="/blog/google-yorumlari-nasil-artirilir">Google yorumları rehberimize</a> bakabilirsiniz.</p>

      <h2>Müşteriyi WhatsApp'a Nasıl Getirirsiniz?</h2>
      <ul>
        <li><strong>Web sitenizde sabit WhatsApp butonu:</strong> Hazır mesajlı bir wa.me linki kullanın ("Merhaba, fiyat bilgisi almak istiyorum").</li>
        <li><strong>Google İşletme Profili:</strong> Profilinize mesajlaşma/WhatsApp bağlantınızı ekleyin.</li>
        <li><strong>Instagram ve Facebook:</strong> Profilinize WhatsApp butonu ekleyin.</li>
        <li><strong>WhatsApp'a yönlendiren reklamlar:</strong> Meta reklamlarında hedef olarak "mesaj" seçip kişiyi doğrudan WhatsApp sohbetine getirebilirsiniz.</li>
        <li><strong>Google Ads:</strong> Reklamlarınızdan WhatsApp'a gelen tıklamaları ayrı ayrı ölçün; hangi reklamın konuşma başlattığını görün.</li>
      </ul>

      <div class="callout">
        <span class="callout-title">Dikkat: Kampanya mesajı için onay ve İYS gerekir</span>
        <p>Türkiye'de müşteriye reklam, kampanya veya indirim içeren ticari mesaj göndermek için kişinin <strong>önceden onayı</strong> gerekir ve işletmenin <strong>İleti Yönetim Sistemi (İYS)</strong>'ne kayıtlı olması zorunludur. Müşterinin size yazıp sorduğu soruya cevap vermek ise ticari ileti sayılmaz. Toplu "kampanya" mesajı atmadan önce onay durumunu mutlaka kontrol edin; kişisel verileri de KVKK'ya uygun saklayın.</p>
      </div>

      <h2>Ne Zaman Otomasyona Geçmeli?</h2>
      <p>Günde onlarca mesaj gelmeye başladığında, aynı soruları cevaplamak ve kimin takipte olduğunu hatırlamak bir kişinin işi olmaktan çıkar. Bu noktada WhatsApp mesajlarını CRM'e kaydeden, yeni adayı ekibe bildiren ve takip hatırlatması yapan otomasyonlar kurulabilir. Örnekler için <a href="/blog/e-ticaret-icin-n8n-otomasyon-ornekleri">n8n otomasyon örnekleri</a> yazımıza ve <a href="/hizmetler/n8n-otomasyon">otomasyon hizmetimize</a> bakabilirsiniz.</p>

      <h2>Sık Sorulan Sorular</h2>

      <h3>Kişisel WhatsApp ile işletme hesabı aynı numarada olabilir mi?</h3>
      <p>Bir numara aynı anda yalnızca bir hesapta kullanılabilir. İş ve özel yazışmaları ayırmak için işletmeye ayrı bir numara almak en sağlıklısıdır.</p>

      <h3>Mesajlara ne kadar sürede dönmeliyim?</h3>
      <p>Ne kadar hızlı, o kadar iyi. Müşteri adayı aynı anda birkaç firmaya yazmış olabilir; ilk ve net cevap veren genelde işi alır. Mesai dışı için otomatik "uzaktayım" mesajı kurun.</p>

      <h3>WhatsApp'tan gelen müşterileri nasıl ölçerim?</h3>
      <p>Web sitenizdeki WhatsApp butonu tıklamalarını Google Analytics'te bir etkinlik olarak ölçebilir, Google Ads'te dönüşüm olarak tanımlayabilirsiniz. Böylece hangi sayfanın ve hangi reklamın konuşma başlattığını görürsünüz.</p>

      <h3>Sonuç</h3>
      <p>WhatsApp, iyi kurulduğunda en hızlı satış kanalınız olabilir: eksiksiz profil, hızlı ilk cevap, düzenli takip ve ölçüm. Sitenizdeki WhatsApp akışını ve ölçümünü birlikte kurmak için <a href="/iletisim">bize ulaşın</a>.</p>
    `,
  },

  // ─── 5. SIFIRDAN INSTAGRAM İŞLETME HESABI ────────────────────────────────
  {
    slug: 'sifirdan-instagram-isletme-hesabi-buyutme',
    coverImage: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80&fit=crop',
    title: 'Sıfırdan Instagram\'da İşletme Hesabı Büyütmek: İlk 30 Gün Planı',
    excerpt:
      'Yeni açılan veya hiç büyümemiş bir işletme Instagram hesabını sıfırdan büyütmek için profil kurulumu, içerik planı, Reels, yerel etkileşim ve ilk 30 günün gün gün planı.',
    category: 'Sosyal Medya',
    categoryColor: 'pink',
    emoji: '📈',
    coverGradient: 'from-pink-500/10 to-pink-900/5',
    readTime: 7,
    date: TARIH,
    author: YAZAR,
    authorRole: 'Sosyal Medya Ekibi',
    tags: ['Instagram', 'Sıfırdan Büyütme', 'İşletme Hesabı', 'Reels', 'Sosyal Medya'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>Sıfırdan bir işletme hesabını büyütmenin yolu takipçi satın almak değil; <strong>net bir profil</strong>, <strong>haftada en az 3 paylaşım (ağırlıkla Reels)</strong> ve <strong>yerel hesaplarla gerçek etkileşim</strong>dir. İlk 30 günde amaç büyük takipçi sayısı değil, düzenli paylaşım alışkanlığı ve hangi içeriğin işe yaradığını öğrenmektir.</p>
      </div>

      <h2>Influencer Olmak ile İşletme Hesabı Büyütmek Aynı Şey Değil</h2>
      <p>"Sıfırdan influencer olmak" son dönemin en çok merak edilen konularından biri. İşletmeler için de mantık benzer, ama hedef farklıdır: Influencer kitlesini büyütüp markalara reklam satar; işletme hesabı ise <strong>müşteri</strong> kazanmak için büyür. Bu yüzden 50 bin rastgele takipçi yerine, hizmet verdiğiniz şehirdeki 1.000 gerçek takipçi çok daha değerlidir.</p>

      <h2>1. Adım: Profili Doğru Kurun (1. Gün)</h2>
      <table>
        <thead><tr><th>Alan</th><th>Doğru kullanım</th></tr></thead>
        <tbody>
          <tr><td>Hesap türü</td><td>Profesyonel hesap → İşletme. Ücretsizdir; istatistikleri ve iletişim butonlarını açar.</td></tr>
          <tr><td>Kullanıcı adı</td><td>Kısa, akılda kalır, mümkünse marka adıyla aynı.</td></tr>
          <tr><td>İsim alanı</td><td>Aranabilir: "Marka Adı | Kayseri Diş Kliniği" gibi şehir + hizmet ekleyin.</td></tr>
          <tr><td>Biyografi</td><td>Ne yapıyorsunuz, kime, nerede + tek bir çağrı ("Randevu için WhatsApp 👇").</td></tr>
          <tr><td>Butonlar</td><td>Telefon, WhatsApp, adres; web sitenizin linki.</td></tr>
          <tr><td>Öne çıkanlar</td><td>Hizmetler, fiyatlar/kampanyalar, yorumlar, konum, ekip.</td></tr>
        </tbody>
      </table>

      <h2>2. Adım: 4 İçerik Türüyle Başlayın</h2>
      <table>
        <thead><tr><th>İçerik türü</th><th>Amacı</th><th>Örnek</th></tr></thead>
        <tbody>
          <tr><td>Öğretici</td><td>Uzman olduğunuzu göstermek</td><td>"Diş beyazlatmadan önce bilmeniz gereken 3 şey"</td></tr>
          <tr><td>Perde arkası</td><td>Güven ve samimiyet</td><td>Atölyede bir günün 15 saniyelik özeti</td></tr>
          <tr><td>Önce/sonra, sonuç</td><td>İkna</td><td>Teslim edilen bir işin önce-sonra hali</td></tr>
          <tr><td>Müşteri yorumu</td><td>Sosyal kanıt</td><td>Gerçek bir Google yorumunun görseli</td></tr>
        </tbody>
      </table>
      <p>Reels, takipçi olmayan kişilere ulaşmanın en güçlü yoludur; Instagram yeni hesapları da Keşfet ve Reels akışında gösterebilir. Algoritmanın detayları için <a href="/blog/instagram-algoritmasi-organik-buyume">Instagram algoritması</a> yazımıza bakabilirsiniz.</p>

      <h2>İlk 30 Gün Planı</h2>
      <table>
        <thead><tr><th>Hafta</th><th>Odak</th><th>Yapılacaklar</th></tr></thead>
        <tbody>
          <tr><td>1. hafta</td><td>Temel</td><td>Profili tamamlayın, 6–9 gönderiyle profil ızgarasını doldurun, öne çıkanları ekleyin, mevcut müşterilerinize ve rehberinize hesabı duyurun.</td></tr>
          <tr><td>2. hafta</td><td>Düzen</td><td>Haftada 3–4 Reels; her birinin ilk 2 saniyesinde net bir kanca ("Bunu yapıyorsanız para kaybediyorsunuz"). Yerel konum etiketi kullanın.</td></tr>
          <tr><td>3. hafta</td><td>Yerel etkileşim</td><td>Şehrinizdeki işletme, mahalle ve etkinlik hesaplarının gönderilerine her gün anlamlı yorumlar yapın; komşu işletmelerle ortak içerik konuşun.</td></tr>
          <tr><td>4. hafta</td><td>Ölçüm</td><td>İstatistiklerde en çok izlenen, kaydedilen ve paylaşılan 3 içeriği bulun; sonraki ayın planını onların benzerleri üzerine kurun.</td></tr>
        </tbody>
      </table>

      <h2>Hangi Rakamlara Bakmalı?</h2>
      <ul>
        <li><strong>Erişim ve takipçi olmayanlara ulaşma:</strong> İçeriğiniz yeni kişilere gidiyor mu?</li>
        <li><strong>Kaydetme ve paylaşma:</strong> Beğeniden daha değerli sinyallerdir; içeriğin işe yaradığını gösterir.</li>
        <li><strong>Profil ziyareti ve buton tıklaması:</strong> Asıl iş buradan gelir (WhatsApp, arama, yol tarifi).</li>
        <li><strong>DM sayısı:</strong> Bir işletme hesabının nihai amacı konuşma başlatmaktır. DM'leri satışa çevirmek için <a href="/blog/whatsapp-ile-satis-rehberi">WhatsApp ile satış rehberimize</a> bakın.</li>
      </ul>

      <h2>Yapılmaması Gerekenler</h2>
      <table>
        <thead><tr><th>Yapmayın</th><th>Neden?</th></tr></thead>
        <tbody>
          <tr><td>Takipçi/beğeni satın almak</td><td>Sahte hesaplar etkileşim oranınızı düşürür, gerçek kişilere erişimi azaltır.</td></tr>
          <tr><td>Takip et / takipten çık taktiği</td><td>Kısıtlamaya yol açabilir, kalıcı kitle getirmez.</td></tr>
          <tr><td>Sadece ürün fotoğrafı ve indirim afişi</td><td>Satış dili tek başına ilgi çekmez; öğretici ve samimi içerikle dengeleyin.</td></tr>
          <tr><td>2 hafta paylaşıp 1 ay kaybolmak</td><td>Düzensizlik, en büyük büyüme engelidir.</td></tr>
        </tbody>
      </table>

      <h2>Sık Sorulan Sorular</h2>

      <h3>İlk 1.000 takipçiye ne kadar sürede ulaşılır?</h3>
      <p>Sektöre, şehre ve içerik kalitesine göre çok değişir; kimse kesin bir süre garanti edemez. Önemli olan, takipçinin gerçek ve hedef kitlenizden olmasıdır.</p>

      <h3>Reklam vermeli miyim?</h3>
      <p>Organik içerik oturduktan sonra, en iyi performans gösteren Reels'i küçük bir bütçeyle şehrinize öne çıkarmak etkili olabilir. Reklamı, işe yaradığını gördüğünüz içerik üzerine kurun.</p>

      <h3>Influencer ile çalışmak işe yarar mı?</h3>
      <p>Yerel ve doğru kitleye sahip küçük influencer'larla çalışmak hesabı hızla duyurabilir. Nasıl seçileceği ve ücretleri için <a href="/blog/influencer-ile-calismak-2026">Influencer ile Çalışmak</a> yazımıza bakın.</p>

      <h3>Sonuç</h3>
      <p>Sıfırdan büyüme, ilk ay sabır ve düzen ister. İçerik üretimini profesyonelleştirmek isterseniz <a href="/hizmetler/sosyal-medya">sosyal medya içerik üretimi</a> hizmetimize göz atabilirsiniz.</p>
    `,
  },

  // ─── 6. INFLUENCER İLE ÇALIŞMAK ──────────────────────────────────────────
  {
    slug: 'influencer-ile-calismak-2026',
    coverImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80&fit=crop',
    title: 'Influencer ile Çalışmak: 2026 Ücret Modelleri ve Doğru Influencer Seçimi',
    excerpt:
      'İşletmeler için influencer pazarlaması: nano, mikro ve makro influencer farkı, ücret modelleri, sahte takipçi kontrolü, reklam etiketi kuralları ve sonuç ölçümü.',
    category: 'Sosyal Medya',
    categoryColor: 'pink',
    emoji: '🤝',
    coverGradient: 'from-pink-500/10 to-pink-900/5',
    readTime: 7,
    date: TARIH,
    author: YAZAR,
    authorRole: 'Sosyal Medya Ekibi',
    tags: ['Influencer Pazarlaması', 'Influencer', 'Mikro Influencer', 'Instagram', 'TikTok'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>Yerel işletmeler için en verimli seçenek çoğu zaman <strong>nano (1–10 bin) ve mikro (10–100 bin) influencer</strong>lardır: Daha uygun ücretlidirler ve kitleleriyle daha yakındırlar. Seçerken takipçi sayısına değil, <strong>etkileşim oranına ve kitlenin şehrinize uyumuna</strong> bakın. Reklam içeriği, Türkiye'deki kurallar gereği açıkça "reklam" olarak belirtilmelidir.</p>
      </div>

      <h2>Neden Şimdi?</h2>
      <p>2026 bütçe planlamalarında markaların önemli bir kısmı influencer pazarlamasına ayırdığı payı artırıyor. Sebebi basit: İnsanlar markanın kendi söylediğinden çok, güvendikleri birinin önerisine inanıyor. Ancak doğru influencer seçilmezse bu bütçe kolayca boşa gidebilir.</p>

      <h2>Influencer Türleri</h2>
      <table>
        <thead><tr><th>Tür</th><th>Takipçi</th><th>Güçlü yanı</th><th>Kimin için?</th></tr></thead>
        <tbody>
          <tr><td>Nano</td><td>1–10 bin</td><td>Çok samimi, yüksek etkileşim, yerel</td><td>Kafe, kuaför, klinik gibi yerel işletmeler</td></tr>
          <tr><td>Mikro</td><td>10–100 bin</td><td>Belirli bir nişte güvenilir ses</td><td>Şehir veya sektör odaklı markalar</td></tr>
          <tr><td>Makro</td><td>100 bin–1 milyon</td><td>Geniş erişim</td><td>Türkiye geneline satan markalar</td></tr>
          <tr><td>Mega / ünlü</td><td>1 milyon+</td><td>Bilinirlik</td><td>Büyük bütçeli marka kampanyaları</td></tr>
        </tbody>
      </table>

      <h2>Ücret Modelleri</h2>
      <table>
        <thead><tr><th>Model</th><th>Nasıl çalışır?</th><th>Ne zaman uygun?</th></tr></thead>
        <tbody>
          <tr><td>Paylaşım başı sabit ücret</td><td>Belirli sayıda gönderi/Reels/hikâye için anlaşılan ücret</td><td>Bilinirlik ve duyuru kampanyaları</td></tr>
          <tr><td>Ürün / hizmet karşılığı</td><td>Ücret yerine ürün veya hizmet verilir</td><td>Nano influencer'lar, yeni açılan işletmeler</td></tr>
          <tr><td>Satış komisyonu (affiliate)</td><td>İndirim kodu veya özel link üzerinden gelen satıştan pay</td><td>E-ticaret, ölçülebilir satış hedefi</td></tr>
          <tr><td>Uzun dönem elçilik</td><td>Aylık sabit anlaşma, düzenli içerik</td><td>Markayla özdeşleşme istenen durumlar</td></tr>
        </tbody>
      </table>
      <p>Ücretler takipçi sayısıyla birlikte artar ama birebir orantılı değildir; etkileşim, niş ve içerik kalitesi fiyatı en az takipçi kadar etkiler. Yurt dışı kaynaklarda nano seviyesinde paylaşım başı ücretlerin 10–100 dolar aralığında gösterildiği görülür; Türkiye'de fiyatlar kişiye ve şehre göre çok değişir, bu yüzden her zaman birkaç influencer'dan teklif alıp karşılaştırın.</p>

      <h2>Doğru Influencer'ı Seçmek İçin Kontrol Listesi</h2>
      <ul>
        <li><strong>Etkileşim oranı:</strong> (Ortalama beğeni + yorum) ÷ takipçi. Yaygın kabul gören ölçüye göre Instagram'da %2, TikTok'ta %6'nın üzeri sağlıklı sayılır.</li>
        <li><strong>Kitle nerede?</strong> İstatistik ekran görüntüsü isteyin: Takipçilerin şehir ve yaş dağılımı sizinkine uyuyor mu?</li>
        <li><strong>Yorumlar gerçek mi?</strong> "Harika 🔥🔥" gibi tekrar eden kısa yorumlar sahte etkileşim işareti olabilir.</li>
        <li><strong>Ani takipçi sıçramaları:</strong> Bir günde binlerce takipçi kazanıp sonra durmak satın alınmış takipçiye işaret edebilir.</li>
        <li><strong>Marka uyumu:</strong> Daha önce hangi markalarla çalışmış, içerik tonu sizinkine uyuyor mu?</li>
        <li><strong>Rakiplerle çalışıyor mu?</strong> Aynı ay rakibinizi de öneren biri inandırıcı olmaz.</li>
      </ul>

      <div class="callout">
        <span class="callout-title">Reklam etiketi zorunludur</span>
        <p>Ticaret Bakanlığı Reklam Kurulu'nun sosyal medya etkileyicilerine yönelik kılavuzuna göre, ücret veya ürün karşılığı yapılan paylaşımlarda bunun reklam olduğu açıkça belirtilmelidir (ör. <strong>#reklam</strong>, <strong>#işbirliği</strong> gibi ifadeler ve platformun "ücretli ortaklık" etiketi). Gizli reklam hem influencer'ı hem markayı yaptırımla karşı karşıya bırakabilir; anlaşmanıza bu maddeyi ekleyin.</p>
      </div>

      <h2>Anlaşmada Netleştirilmesi Gerekenler</h2>
      <table>
        <thead><tr><th>Madde</th><th>Örnek</th></tr></thead>
        <tbody>
          <tr><td>İçerik sayısı ve türü</td><td>1 Reels + 3 hikâye</td></tr>
          <tr><td>Yayın tarihi ve süresi</td><td>Reels profilde en az 3 ay kalacak</td></tr>
          <tr><td>Onay süreci</td><td>Yayından önce içerik markaya gösterilecek</td></tr>
          <tr><td>Kullanım hakkı</td><td>Marka videoyu kendi hesabında ve reklamlarında kullanabilecek mi?</td></tr>
          <tr><td>Raporlama</td><td>Yayından 7 gün sonra erişim ve tıklama istatistikleri paylaşılacak</td></tr>
          <tr><td>Reklam etiketi</td><td>#reklam / ücretli ortaklık etiketi kullanılacak</td></tr>
        </tbody>
      </table>

      <h2>Sonucu Nasıl Ölçersiniz?</h2>
      <ul>
        <li><strong>Influencer'a özel indirim kodu:</strong> Kaç satışın o kişiden geldiğini net gösterir.</li>
        <li><strong>UTM'li link:</strong> Web sitenize gelen ziyaretleri Google Analytics'te kaynağıyla görürsünüz.</li>
        <li><strong>Takipçi ve DM artışı:</strong> Paylaşımdan sonraki 48 saatte hesabınıza gelen ilgi.</li>
        <li><strong>WhatsApp mesajları:</strong> "Nereden duydunuz?" sorusunu rutin hale getirin.</li>
      </ul>

      <h2>Sık Sorulan Sorular</h2>

      <h3>Az takipçili influencer'la çalışmak mantıklı mı?</h3>
      <p>Yerel işletmeler için çoğu zaman evet. Kendi şehrinizdeki 5 bin gerçek takipçiye hitap eden biri, Türkiye geneline dağılmış 200 bin takipçili birinden daha fazla müşteri getirebilir.</p>

      <h3>Influencer'ı nerede bulurum?</h3>
      <p>Şehrinizin konum etiketlerine, yerel hashtag'lere ve sektörünüzle ilgili içeriklere bakın. Sizi zaten takip eden ve içerik üreten müşterileriniz de en doğal adaylardır.</p>

      <h3>Kendi hesabım zayıfken influencer'la çalışmalı mıyım?</h3>
      <p>Önce kendi profilinizi toparlayın: Influencer'ın yönlendirdiği kişi boş veya düzensiz bir profille karşılaşırsa takip etmez. Önce <a href="/blog/sifirdan-instagram-isletme-hesabi-buyutme">sıfırdan işletme hesabı büyütme planına</a> göz atın.</p>

      <h3>Sonuç</h3>
      <p>Influencer pazarlamasında başarı; doğru kişi, net anlaşma ve ölçülebilir bir hedefle gelir. Kampanya için içerik üretimi ve takip kurgusunda destek almak isterseniz <a href="/hizmetler/sosyal-medya">sosyal medya hizmetimize</a> göz atın veya <a href="/iletisim">bize ulaşın</a>.</p>
    `,
  },

  // ─── 7. WEB SİTESİ FİYATLARI ─────────────────────────────────────────────
  {
    slug: 'web-sitesi-fiyatlari-2026',
    coverImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80&fit=crop',
    title: 'Web Sitesi Fiyatları 2026: Kurumsal Web Sitesi Ne Kadar?',
    excerpt:
      'Kurumsal web sitesi ve web tasarım fiyatları işletme büyüklüğüne göre ne kadar? Fiyata dahil olanlar, yıllık ek giderler, hazır şablon ile özel tasarım farkı ve teklif alırken sorulacak sorular.',
    category: 'Web Tasarım',
    categoryColor: 'indigo',
    emoji: '🖥️',
    coverGradient: 'from-indigo-500/10 to-indigo-900/5',
    readTime: 6,
    date: TARIH,
    author: YAZAR,
    authorRole: 'Web Geliştirme Ekibi',
    tags: ['Web Sitesi Fiyatları', 'Web Tasarım', 'Kurumsal Web Sitesi', 'Fiyatlandırma'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>2026'da web tasarım fiyatlarımız küçük işletmeler için <strong>${aralik('Web Tasarım', 'kucuk')}</strong>, orta ölçekli işletmeler için <strong>${aralik('Web Tasarım', 'orta')}</strong>, büyük/kurumsal projeler için <strong>${aralik('Web Tasarım', 'buyuk')}</strong> aralığındadır (tek seferlik, KDV hariç). Bunun dışında alan adı ve barındırma gibi yıllık giderler vardır.</p>
      </div>

      <h2>Web Sitesi Fiyat Tablosu (2026)</h2>
      <table>
        <thead><tr><th>Ölçek</th><th>Fiyat (tek seferlik)</th><th>Tipik kapsam</th></tr></thead>
        <tbody>
          <tr><td>Küçük işletme</td><td>${aralik('Web Tasarım', 'kucuk')}</td><td>Tanıtım sitesi: ana sayfa, hizmetler, hakkımızda, iletişim; mobil uyum, temel SEO</td></tr>
          <tr><td>Orta işletme</td><td>${aralik('Web Tasarım', 'orta')}</td><td>Çok sayfalı kurumsal site, hizmet/şehir sayfaları, blog, form ve ölçüm kurulumları</td></tr>
          <tr><td>Büyük / kurumsal</td><td>${aralik('Web Tasarım', 'buyuk')}</td><td>Çok dilli yapı, entegrasyonlar, özel modüller, yüksek trafik altyapısı</td></tr>
        </tbody>
      </table>
      <p>Kesin fiyat sayfa sayısı, tasarım ihtiyacı ve entegrasyonlara göre netleşir. Tahmini fiyatı <a href="/teklif-al">AI Teklif Hesaplayıcı</a> ile hemen görebilirsiniz.</p>

      <h2>Fiyatı Belirleyen 6 Etken</h2>
      <table>
        <thead><tr><th>Etken</th><th>Fiyatı nasıl etkiler?</th></tr></thead>
        <tbody>
          <tr><td>Sayfa sayısı</td><td>Her sayfa tasarım, içerik ve test emeği demektir.</td></tr>
          <tr><td>Hazır şablon / özel tasarım</td><td>Özel tasarım daha pahalıdır ama markanıza özgü olur ve gereksiz kod taşımaz.</td></tr>
          <tr><td>İçerik</td><td>Metinleri ve görselleri siz mi veriyorsunuz, biz mi hazırlıyoruz?</td></tr>
          <tr><td>Dil sayısı</td><td>Her yeni dil, çeviri ve ayrı SEO yapısı gerektirir.</td></tr>
          <tr><td>Entegrasyonlar</td><td>Randevu sistemi, ödeme, CRM, ERP gibi bağlantılar ek geliştirme ister.</td></tr>
          <tr><td>Hız ve SEO altyapısı</td><td>Hızlı açılan, Google'ın kolay okuduğu bir site için ek teknik çalışma yapılır.</td></tr>
        </tbody>
      </table>

      <h2>Hazır Şablon mu, Özel Tasarım mı?</h2>
      <table>
        <thead><tr><th></th><th>Hazır şablon</th><th>Özel tasarım / kodlama</th></tr></thead>
        <tbody>
          <tr><td>Başlangıç maliyeti</td><td>Düşük</td><td>Daha yüksek</td></tr>
          <tr><td>Benzersizlik</td><td>Binlerce sitede aynı görünüm</td><td>Markanıza özel</td></tr>
          <tr><td>Hız</td><td>Gereksiz eklentiler nedeniyle çoğu zaman yavaş</td><td>Sadece gereken kod, daha hızlı</td></tr>
          <tr><td>SEO</td><td>Şablonun sınırlarına bağlı</td><td>Baştan SEO'ya uygun kurgulanır</td></tr>
          <tr><td>Kimin için?</td><td>Çok kısıtlı bütçe, hızlı başlangıç</td><td>Google'dan müşteri bekleyen işletmeler</td></tr>
        </tbody>
      </table>
      <p>Sitenin hızı sadece kullanıcı deneyimi değil, dönüşüm meselesidir; ayrıntılar için <a href="/blog/core-web-vitals-donusum-orani">Core Web Vitals</a> ve <a href="/blog/donusum-odakli-web-tasarimi-ilkeleri">dönüşüm odaklı web tasarımı</a> yazılarımıza bakabilirsiniz.</p>

      <h2>Tasarım Ücreti Dışındaki Giderler</h2>
      <table>
        <thead><tr><th>Gider</th><th>Sıklık</th><th>Not</th></tr></thead>
        <tbody>
          <tr><td>Alan adı (.com, .com.tr)</td><td>Yıllık</td><td>Adınıza kayıtlı olmalı; ajansın adına kayıtlıysa sorun yaşayabilirsiniz.</td></tr>
          <tr><td>Barındırma (hosting)</td><td>Aylık / yıllık</td><td>Trafiğe ve altyapıya göre değişir.</td></tr>
          <tr><td>SSL sertifikası</td><td>Çoğu zaman ücretsiz</td><td>Modern barındırma hizmetlerinde genelde dahildir.</td></tr>
          <tr><td>Kurumsal e-posta</td><td>Kullanıcı başı aylık</td><td>info@firmaniz.com gibi adresler için.</td></tr>
          <tr><td>Bakım ve güncelleme</td><td>Opsiyonel, aylık</td><td>İçerik değişiklikleri, güvenlik güncellemeleri.</td></tr>
        </tbody>
      </table>

      <h2>Teklif Alırken Sorulacak 6 Soru</h2>
      <ul>
        <li><strong>Alan adı ve site kimin adına olacak?</strong> Cevap "sizin" olmalı.</li>
        <li><strong>Site mobilde ve hız testinde nasıl?</strong> Daha önce yaptıkları sitelerin hızını kendiniz test edin.</li>
        <li><strong>SEO altyapısı dahil mi?</strong> Başlıklar, açıklamalar, site haritası, yapısal veri kuruluyor mu?</li>
        <li><strong>Ölçüm kuruluyor mu?</strong> Google Analytics, Search Console, WhatsApp/telefon tıklama ölçümü.</li>
        <li><strong>Teslimden sonra değişiklikleri kim, hangi ücretle yapacak?</strong></li>
        <li><strong>Canlı örnek gösterebiliyorlar mı?</strong> Ekran görüntüsü değil, ziyaret edebileceğiniz gerçek siteler isteyin. Bizim yaptığımız işleri <a href="/portfolyo">portföyümüzde</a> ziyaret edebilirsiniz.</li>
      </ul>

      <h2>Sık Sorulan Sorular</h2>

      <h3>Web sitesi kaç günde hazır olur?</h3>
      <p>Küçük bir tanıtım sitesi, içerikler hazırsa birkaç hafta içinde yayına alınabilir; büyük ve entegrasyonlu projeler daha uzun sürer. Kesin süreyi teklifte yazılı olarak veriyoruz.</p>

      <h3>Fiyata SEO dahil mi?</h3>
      <p>Teknik SEO altyapısı (hızlı yapı, doğru başlıklar, site haritası) tasarıma dahildir. Sürekli içerik ve sıralama çalışması ise ayrı bir hizmettir; bkz. <a href="/blog/seo-fiyatlari-2026">SEO Fiyatları 2026</a>.</p>

      <h3>Mevcut sitemi yeniletmek de aynı fiyat mı?</h3>
      <p>Çoğu zaman benzer aralıktadır, ama mevcut içeriğin ve Google'daki sıralamaların korunması için ek planlama (yönlendirmeler gibi) gerekir.</p>

      <h3>Sonuç</h3>
      <p>Web sitesi bir masraf değil, 7/24 çalışan satış temsilcinizdir; ucuz ama yavaş ve Google'da görünmeyen bir site uzun vadede daha pahalıya gelir. Şehrinize özel web tasarım hizmeti için <a href="/istanbul-web-tasarim">İstanbul</a>, <a href="/izmir-web-tasarim">İzmir</a>, <a href="/kocaeli-web-tasarim">Kocaeli</a> sayfalarımıza veya <a href="/hizmetler/web-tasarim">web tasarım hizmetimize</a> göz atın.</p>
    `,
  },
]
