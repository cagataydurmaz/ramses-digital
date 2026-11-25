import type { Post } from './posts'

// Kasım 2026 gündem yazıları: Google AI Modu, ChatGPT reklamları, reklam yönetmeliği,
// İstanbul'un prestijli semtlerinde yerel SEO ve 2027 pazarlama takvimi.
// Sitede açık fiyat yazılmaz; uydurma istatistik, müşteri sonucu veya sıralama garantisi yok.
// Görseller telifsiz kaynaklardan (Unsplash, Pexels, Pixabay) alınıp sitede barındırılır.

const YAZAR = 'Çağatay Durmaz'
const ROL = 'Kurucu, Ramses Dijital'
const TARIH = '2026-11-25'

export const gundem2026Postlari: Post[] = [
  // ─── 1. GOOGLE AI MODU ───────────────────────────────────────────────────
  {
    slug: 'google-ai-modu-seo-rehberi',
    coverImage: '/gorseller/blog/google-ai-modu.webp',
    title: 'Google AI Modu Türkiye’de: SEO’nuzu Nasıl Etkiler, Ne Yapmalısınız?',
    excerpt:
      'Google’ın yapay zekâ destekli arama modu Türkiye’de kullanımda. AI Modu ile klasik arama arasındaki fark, işletmeniz için ne değiştiği ve AI Modu’nda kaynak olarak gösterilmek için yapılacaklar.',
    category: 'SEO',
    categoryColor: 'blue',
    emoji: '🤖',
    coverGradient: 'from-blue-500/10 to-blue-900/5',
    readTime: 7,
    date: TARIH,
    author: YAZAR,
    authorRole: ROL,
    tags: ['Google AI Modu', 'SEO', 'Yapay Zekâ Arama', 'AI Bakışı', 'Yerel SEO'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>Google AI Modu, soruya web sayfalarından derlenmiş bir yapay zekâ cevabı veren yeni bir arama görünümü. Türkiye’de Şubat 2026’dan beri kademeli olarak kullanımda. Bu modda öne çıkmanın ayrı bir “düğmesi” yok: <strong>net cevap veren sayfalar, eksiksiz bir Google İşletme Profili ve her yerde tutarlı işletme bilgisi</strong> hem klasik aramada hem AI Modu’nda kaynak gösterilme şansınızı artırır.</p>
      </div>

      <div class="stat-grid">
        <div class="stat-card"><span class="stat-number">Şubat 2026</span><span class="stat-label">AI Modu ve AI Bakışı Türkiye’de kademeli olarak açıldı</span></div>
        <div class="stat-card"><span class="stat-number">3</span><span class="stat-label">Arama görünümü: klasik sonuçlar, AI Bakışı, AI Modu</span></div>
        <div class="stat-card"><span class="stat-number emerald">Aynı temel</span><span class="stat-label">Üçünde de görünmenin yolu iyi SEO’dan geçer</span></div>
      </div>

      <h2>AI Modu Nedir, Klasik Aramadan Farkı Ne?</h2>
      <p>Klasik aramada Google size on mavi bağlantı ve bir harita gösterir; seçimi siz yaparsınız. AI Modu’nda ise sorunuzu sohbet eder gibi yazarsınız, Google birden fazla sayfayı tarayıp derli toplu bir cevap hazırlar ve cevabın yanında kaynak sitelere bağlantı verir. Ek sorular sorarak aramayı daraltabilirsiniz.</p>
      <table>
        <thead><tr><th></th><th>Klasik arama</th><th>AI Bakışı</th><th>AI Modu</th></tr></thead>
        <tbody>
          <tr><td>Nerede çıkar?</td><td>Arama sonuçları</td><td>Sonuçların en üstünde kısa özet</td><td>Ayrı sekme / sohbet görünümü</td></tr>
          <tr><td>Kullanıcı ne görür?</td><td>Bağlantılar, harita, reklamlar</td><td>Birkaç paragraflık özet + kaynaklar</td><td>Ayrıntılı cevap, takip soruları, kaynaklar</td></tr>
          <tr><td>Siteniz nasıl görünür?</td><td>Sıralamadaki yeriyle</td><td>Kaynak bağlantısı olarak</td><td>Kaynak bağlantısı veya önerilen işletme olarak</td></tr>
          <tr><td>Belirleyici olan</td><td>İçerik, teknik SEO, bağlantılar</td><td>Soruya net cevap veren içerik</td><td>Net cevap + güvenilir, tutarlı bilgi</td></tr>
        </tbody>
      </table>

      <h2>İşletmeniz İçin Ne Değişiyor?</h2>
      <ul>
        <li><strong>Bilgi aramalarında tıklama azalabilir:</strong> “SEO nedir”, “kira artışı nasıl hesaplanır” gibi sorulara kullanıcı cevabı sayfada okuyabilir. Bu tür içeriklerde amaç, kaynak olarak anılmak ve marka bilinirliğidir.</li>
        <li><strong>Karar aramaları hâlâ size gelir:</strong> “Beşiktaş’ta randevulu diş kliniği”, “İzmit’te web tasarım ajansı” gibi aramalarda kullanıcı sonunda bir işletme seçer. AI Modu burada seçenekleri karşılaştırır; sizin bilginiz net değilse listeye girmezsiniz.</li>
        <li><strong>Yerel aramalarda harita ve işletme profili belirleyici kalır:</strong> Adres, çalışma saati, yorumlar ve fotoğraflar AI cevaplarında da kullanılır.</li>
        <li><strong>Tutarsız bilgi zarar verir:</strong> Sitede bir telefon, haritada başka bir telefon, sosyal medyada eski adres… Yapay zekâ çelişkili bilgiyi olan işletmeyi önermekte çekingen davranır.</li>
      </ul>

      <h2>AI Modu’nda Kaynak Gösterilmek İçin 8 Adım</h2>
      <table>
        <thead><tr><th>Yapılacak</th><th>Neden?</th><th>Kendiniz nasıl kontrol edersiniz?</th></tr></thead>
        <tbody>
          <tr><td>Her hizmet için ayrı, net bir sayfa</td><td>Yapay zekâ “hangi işletme ne yapıyor” sorusunu sayfalardan okur</td><td>Sitede her hizmetin kendi adresi var mı?</td></tr>
          <tr><td>Sayfanın başında 2–3 cümlelik kısa cevap</td><td>Özetlerde en kolay alıntılanan kısım budur</td><td>İlk paragraf tek başına soruyu cevaplıyor mu?</td></tr>
          <tr><td>Gerçek müşteri sorularıyla SSS</td><td>AI Modu takip sorularıyla çalışır</td><td>WhatsApp’ta en sık gelen 5 soru sitede cevaplı mı?</td></tr>
          <tr><td>Eksiksiz Google İşletme Profili</td><td>Yerel önerilerin ana veri kaynağı</td><td>Kategori, saat, fotoğraf, hizmetler dolu mu?</td></tr>
          <tr><td>Yorumlara düzenli yanıt</td><td>Güven sinyali; yorum içerikleri cevaplarda özetlenebilir</td><td>Son 10 yoruma cevap verilmiş mi?</td></tr>
          <tr><td>Her yerde aynı ad, adres, telefon</td><td>Çelişkili bilgi önerilme şansını düşürür</td><td>Site, harita, sosyal medya ve rehber siteleri aynı mı?</td></tr>
          <tr><td>Yapılandırılmış veri (schema)</td><td>İşletme bilgisini makinenin okuyacağı biçimde verir</td><td><a href="/blog/schema-markup-jsonld-rehberi">Schema rehberimizdeki</a> testle bakın</td></tr>
          <tr><td>Uzman ve yazar bilgisi</td><td>Kimin söylediği, ne söylendiği kadar önemli</td><td>İçeriklerde yazar ve uzmanlık bilgisi var mı?</td></tr>
        </tbody>
      </table>

      <div data-bilesen="video|chatgpt-oneri|Kısa video: Yapay zekâ işletmenizi önerir mi? (Aynı mantık Google AI Modu için de geçerli.)"></div>

      <div data-bilesen="ai-modu"></div>

      <h2>5 Dakikalık Test: AI Modu Sizi Görüyor mu?</h2>
      <ol>
        <li>Telefonda Google uygulamasını açın, AI Modu sekmesine geçin.</li>
        <li>Müşterinizin soracağı gibi yazın: “Ataşehir’de çocuklar için iyi bir diş kliniği önerir misin?”</li>
        <li>Önerilen işletmelere ve kaynak gösterilen sitelere bakın. Siz var mısınız?</li>
        <li>Varsanız hangi bilginizi kullanmış (yorum, hizmet sayfası, harita)? Yoksa öne çıkanların sizden farkı ne?</li>
        <li>Aynı soruyu ilçe ve hizmet değiştirerek 3–4 kez tekrarlayın; not alın.</li>
      </ol>

      <h2>Sonucu Nasıl Ölçersiniz?</h2>
      <p>Search Console’da AI Modu için ayrı bir rapor bulunmuyor; bu görünümden gelen tıklama ve gösterimler genel arama verisinin içinde yer alıyor. Bu yüzden üç kaynağa birlikte bakmak gerekir:</p>
      <ul>
        <li><strong>Search Console:</strong> Soru biçimindeki ve uzun aramalardaki gösterim artışı.</li>
        <li><strong>Google İşletme Profili:</strong> Arama, yol tarifi ve web sitesi tıklamaları.</li>
        <li><strong>Müşteriye sormak:</strong> “Bizi nereden buldunuz?” sorusuna “Google’a sordum” veya “yapay zekâ önerdi” cevabı gelmeye başladı mı?</li>
      </ul>

      <h2>Sık Sorulan Sorular</h2>
      <h3>AI Modu SEO’yu bitirir mi?</h3>
      <p>Hayır. AI Modu cevaplarını web sayfalarından derliyor; iyi yapılandırılmış, güvenilir ve güncel sayfalar kaynak olmaya devam ediyor. Değişen, sadece sıralamaya değil, kaynak gösterilmeye de odaklanmak gerektiği.</p>
      <h3>AI Modu’na ayrıca başvurmak veya kayıt olmak gerekir mi?</h3>
      <p>Gerekmez. Google’ın dizininde olan ve kurallara uygun her sayfa kaynak olabilir. Sayfalarınızın dizinde olduğunu <a href="/blog/google-search-console-rehberi">Search Console</a> ile kontrol edin.</p>
      <h3>Küçük bir yerel işletme için de önemli mi?</h3>
      <p>Evet, özellikle yerel aramalarda. Kullanıcı “yakınımda”, “en iyi”, “randevulu” gibi sorularla seçenek istediğinde işletme profili ve yorumlar doğrudan cevabın parçası olur. Kontrol listesi için <a href="/blog/yerel-isletme-aeo-geo-kontrol-listesi">yerel işletmeler için Google ve yapay zekâ kontrol listemize</a> bakın.</p>
      <h3>AI Bakışı ile AI Modu aynı şey mi?</h3>
      <p>İkisi de yapay zekâ ile cevap üretir; AI Bakışı normal arama sonuçlarının üstünde kısa bir özet, AI Modu ise ayrı ve sohbet şeklinde bir arama görünümüdür. AI Bakışı için ayrıntılar <a href="/blog/google-ai-overviews-nasil-gorunulur">bu yazımızda</a>.</p>

      <h3>Sonuç</h3>
      <p>AI Modu’nda öne çıkmak için yeni bir hile yok; net, güvenilir ve tutarlı bilgi her zamankinden daha değerli. Sitenizin bugünkü durumunu görmek için <a href="/seo-analiz">ücretsiz SEO analizi</a> ile başlayabilir, yerel ve yapay zekâ aramalarına uygun bir plan için <a href="/hizmetler/seo">SEO hizmetimizi</a> inceleyebilirsiniz.</p>
    `,
  },

  // ─── 2. CHATGPT REKLAMLARI ───────────────────────────────────────────────
  {
    slug: 'chatgpt-reklamlari-turkiye',
    coverImage: '/gorseller/blog/chatgpt-reklamlari.webp',
    title: 'ChatGPT Reklamları Türkiye’de: Nasıl Çalışır, Kimler Denemeli?',
    excerpt:
      'ChatGPT’de “Sponsorlu” etiketli reklamlar Türkiye’de de gösterilmeye başladı. Reklamların nerede çıktığı, Google Ads’ten farkı, hangi işletmelerin denemesi mantıklı ve başlamadan önce kontrol edilecekler.',
    category: 'Strateji',
    categoryColor: 'violet',
    emoji: '💬',
    coverGradient: 'from-violet-500/10 to-violet-900/5',
    readTime: 6,
    date: TARIH,
    author: YAZAR,
    authorRole: ROL,
    tags: ['ChatGPT Reklamları', 'ChatGPT Ads', 'Dijital Reklam', 'Yapay Zekâ', 'Google Ads'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>OpenAI, ChatGPT’de reklam göstermeye başladı ve sektör kaynaklarına göre Türkiye’deki işletmeler Eylül 2026’dan beri reklam hesabı açabiliyor. Reklamlar cevabın altında <strong>“Sponsorlu”</strong> etiketiyle çıkıyor. Yeni bir kanal olduğu için en mantıklısı <strong>küçük bir test bütçesi ve net ölçümle</strong> başlamak; ana bütçeyi kanıtlanmış kanallardan (Google Ads, Meta) çekmemek.</p>
      </div>

      <div class="stat-grid">
        <div class="stat-card"><span class="stat-number">Eylül 2026</span><span class="stat-label">Türkiye’nin reklam paneline eklendiği bildirildi</span></div>
        <div class="stat-card"><span class="stat-number">Sponsorlu</span><span class="stat-label">Reklamlar cevabın altında, etiketli gösterilir</span></div>
        <div class="stat-card"><span class="stat-number violet">Test</span><span class="stat-label">Yeni kanal: önce küçük deneme, sonra karar</span></div>
      </div>

      <h2>ChatGPT Reklamları Nasıl Çalışıyor?</h2>
      <p>Kullanıcı ChatGPT’ye bir soru sorduğunda, konuşmayla ilgili bir reklam cevabın altında ayrı bir kutuda gösterilebiliyor. OpenAI’ın açıklamasına göre reklamlar cevabın içeriğini etkilemiyor; reklam, cevaptan ayrı ve “Sponsorlu” olarak işaretli duruyor. Kaynaklara göre reklamlar ücretsiz ve düşük ücretli paketleri kullananlara gösteriliyor; ücretli üst paketlerde reklam yok.</p>

      <h2>Google Ads ile ChatGPT Reklamları Arasındaki Fark</h2>
      <table>
        <thead><tr><th></th><th>Google Ads</th><th>ChatGPT reklamları</th></tr></thead>
        <tbody>
          <tr><td>Kullanıcının niyeti</td><td>Arıyor; çoğu zaman satın almaya yakın</td><td>Soru soruyor, araştırıyor, karşılaştırıyor</td></tr>
          <tr><td>Hedefleme</td><td>Anahtar kelime, konum, saat, kitle</td><td>Konuşmanın konusu ve bağlamı</td></tr>
          <tr><td>Kanal olgunluğu</td><td>Yıllardır oturmuş, verisi bol</td><td>Yeni; araçlar ve raporlar gelişiyor</td></tr>
          <tr><td>Ölçüm</td><td>Telefon, form, WhatsApp, satış takibi oturmuş</td><td>Siteye gelen trafik ve dönüşümler ayrıca kurulmalı</td></tr>
          <tr><td>En uygun kullanım</td><td>Hemen müşteri, yerel talep</td><td>Araştırma süreci uzun ürün ve hizmetler, marka bilinirliği</td></tr>
        </tbody>
      </table>


      <div data-bilesen="chatgpt-reklam"></div>

      <h2>Kimler Denemeli, Kimler Beklemeli?</h2>
      <table>
        <thead><tr><th>İşletme türü</th><th>Öneri</th><th>Neden?</th></tr></thead>
        <tbody>
          <tr><td>E-ticaret, karşılaştırılarak alınan ürünler</td><td>Küçük testle deneyin</td><td>İnsanlar ChatGPT’ye “hangi model daha iyi” diye soruyor</td></tr>
          <tr><td>Eğitim, kurs, yazılım hizmetleri</td><td>Deneyin</td><td>Karar süreci uzun; araştırma aşamasında görünmek değerli</td></tr>
          <tr><td>Turizm ve konaklama</td><td>Sezon öncesi test edin</td><td>Tatil planı yapan kullanıcı sorularla ilerliyor</td></tr>
          <tr><td>Mahalle esnafı, acil yerel hizmet</td><td>Şimdilik bekleyin</td><td>Google Haritalar ve yerel arama reklamı çok daha doğrudan sonuç verir</td></tr>
          <tr><td>Sağlık, hukuk, finans</td><td>Önce politikayı okuyun</td><td>Bu sektörler reklam platformlarında genelde kısıtlı; avukatlar için zaten mesleki reklam yasağı var</td></tr>
        </tbody>
      </table>

      <h2>Başlamadan Önce 6 Kontrol</h2>
      <ol>
        <li><strong>İşletme doğrulaması ve fatura bilgisi:</strong> Reklam hakkı, faturalandırılan şirketin kayıtlı olduğu ülkeye göre belirleniyor.</li>
        <li><strong>Açılış sayfası:</strong> Reklamın götürdüğü sayfa, kullanıcının sorduğu soruya doğrudan cevap vermeli.</li>
        <li><strong>Ölçüm:</strong> Bu kanaldan gelen ziyaretçiyi ayrı takip edin (UTM etiketi, form ve WhatsApp dönüşümleri).</li>
        <li><strong>Test bütçesi:</strong> Ana bütçenin küçük bir kısmıyla, süresi belli bir deneme yapın.</li>
        <li><strong>Karşılaştırma ölçütü:</strong> Talep başına maliyeti Google Ads ve Meta reklamlarınızla aynı ölçüyle kıyaslayın.</li>
        <li><strong>Güncel politika:</strong> Sektörünüzün reklam kurallarını OpenAI’ın reklam politikası sayfasından kontrol edin; kurallar yeni kanal olduğu için sık güncelleniyor.</li>
      </ol>

      <div class="callout">
        <span class="callout-title">Reklam vermeden ChatGPT’de görünmek</span>
        <p>ChatGPT’nin cevaplarında reklamsız, doğal olarak önerilmek de mümkün; bunun yolu net, güvenilir ve tutarlı işletme bilgisinden geçer. Ayrıntılar: <a href="/blog/geo-nedir-chatgpt-yapay-zeka-aramalarda-gorunurluk">GEO rehberi: ChatGPT aramalarında görünür olmak</a>.</p>
      </div>

      <div data-bilesen="video|chatgpt-oneri|Kısa video: ChatGPT işletmenizi reklamsız önerir mi?"></div>

      <h2>Sık Sorulan Sorular</h2>
      <h3>ChatGPT reklamları cevabı etkiliyor mu?</h3>
      <p>OpenAI’ın açıklamasına göre hayır; reklam cevaptan ayrı gösteriliyor ve etiketli. Yine de kullanıcıların reklamla cevabı ayırt edebileceği net ve dürüst bir reklam metni yazmak önemli.</p>
      <h3>Ajans olmadan reklam verilebilir mi?</h3>
      <p>Evet, aracı zorunlu değil. Ajans desteği daha çok ölçüm kurulumu, açılış sayfası ve diğer kanallarla karşılaştırma için faydalı olur.</p>
      <h3>Google Ads’i bırakıp ChatGPT’ye mi geçmeliyim?</h3>
      <p>Hayır. Şu an için ChatGPT reklamları tamamlayıcı bir deneme kanalı. Hemen müşteri getiren arama ve harita reklamlarınızı koruyun; bütçe planı için <a href="/blog/google-ads-fiyatlari-2026">Google Ads fiyatları 2026</a> yazımıza bakın.</p>

      <h3>Sonuç</h3>
      <p>ChatGPT reklamları, araştırma aşamasındaki müşteriye ulaşmak için yeni ve henüz olgunlaşmakta olan bir kanal. Denemek isterseniz önce ölçümü kurun, küçük bir testle başlayın ve sonuçları diğer kanallarınızla aynı ölçüyle kıyaslayın. Kanal seçimi ve kurulum için <a href="/teklif-al">AI teklif hesaplayıcı</a> ile ihtiyacınızı belirleyebilir ya da bize WhatsApp’tan yazabilirsiniz.</p>
    `,
  },

  // ─── 3. REKLAM YÖNETMELİĞİ 2026 ──────────────────────────────────────────
  {
    slug: 'reklam-yonetmeligi-2026-isletmeler',
    coverImage: '/gorseller/blog/reklam-yonetmeligi-influencer.webp',
    title: 'Yeni Reklam Yönetmeliği 2026: Influencer, Yapay Zekâ ve Kampanya Kuralları',
    excerpt:
      '1 Ağustos 2026’da yürürlüğe giren reklam yönetmeliği değişiklikleri: influencer paylaşımlarında “reklam” ibaresi, yapay zekâ ile üretilen kişiler, çevre iddiaları ve işletmelerin sosyal medyada dikkat etmesi gerekenler.',
    category: 'Strateji',
    categoryColor: 'violet',
    emoji: '⚖️',
    coverGradient: 'from-violet-500/10 to-violet-900/5',
    readTime: 7,
    date: TARIH,
    author: YAZAR,
    authorRole: ROL,
    tags: ['Reklam Yönetmeliği', 'Influencer', 'Ticaret Bakanlığı', 'Yapay Zekâ', 'Sosyal Medya'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>Ticari Reklam ve Haksız Ticari Uygulamalar Yönetmeliği’nde yapılan değişiklik <strong>1 Temmuz 2026</strong> tarihli Resmî Gazete’de (sayı 33297) yayımlandı ve <strong>1 Ağustos 2026</strong>’da yürürlüğe girdi. İşletmeler için en önemli üç başlık: influencer iş birliklerinde açık <strong>“reklam” veya “tanıtım”</strong> ibaresi, yapay zekâ ile üretilmiş gerçek kişi görüntülerine yasak ve açıklamasız genel “çevre dostu” iddialarına sınır.</p>
      </div>
      <p><em>Bu yazı bilgilendirme amaçlıdır, hukuki danışmanlık değildir. Kampanya öncesi Resmî Gazete’deki güncel metni kontrol edin veya bir hukukçuya danışın.</em></p>

      <div class="stat-grid">
        <div class="stat-card"><span class="stat-number">1 Temmuz 2026</span><span class="stat-label">Resmî Gazete’de yayım (sayı 33297)</span></div>
        <div class="stat-card"><span class="stat-number">1 Ağustos 2026</span><span class="stat-label">Yeni kuralların yürürlük tarihi</span></div>
        <div class="stat-card"><span class="stat-number violet">“Reklam”</span><span class="stat-label">Menfaat karşılığı paylaşımlarda açık ibare zorunlu</span></div>
      </div>

      <h2>Ne Değişti? Özet Tablo</h2>
      <table>
        <thead><tr><th>Değişiklik</th><th>Ne anlama geliyor?</th><th>İşletme ne yapmalı?</th></tr></thead>
        <tbody>
          <tr><td>Influencer paylaşımlarında “reklam” veya “tanıtım” ibaresi</td><td>Para, hediye ürün, indirim, ücretsiz hizmet ya da etkinlik daveti gibi her türlü menfaat karşılığı paylaşım reklam sayılır</td><td>İş birliği anlaşmasına ibarenin nasıl ve nerede kullanılacağını yazın; paylaşımı yayından önce kontrol edin</td></tr>
          <tr><td>Yapay zekâ ile üretilmiş gerçek kişi kopyaları</td><td>Gerçek bir kişinin yapay zekâ ile üretilmiş görüntüsüyle “ürünü kullandı, tavsiye ediyor” izlenimi vermek yasak</td><td>Ünlü veya müşteri yüzü taklit eden yapay zekâ görselleri kullanmayın</td></tr>
          <tr><td>Yapay zekâ karakterleri</td><td>Gerçek kişi sanılabilecek yapay zekâ karakterlerinin yapay olduğu açıkça belirtilmeli</td><td>Yapay zekâ ile üretilen sunucu, model veya “müşteri” varsa bunu reklamda yazın</td></tr>
          <tr><td>Çevre iddiaları</td><td>“Çevre dostu”, “doğa dostu” gibi genel ifadeler açıklamasız kullanılamaz</td><td>İddianın neye dayandığını (belge, ölçüm, malzeme) reklamda veya bağlantılı sayfada açıklayın</td></tr>
          <tr><td>İndirim ve kampanya duyuruları</td><td>İndirim duyurularına ilişkin kurallar da güncellendi; indirimden önceki fiyatın doğru gösterilmesi zaten zorunluydu</td><td>Kampanya metinlerinde “önceki fiyat” ve süre bilgisini güncel kurallara göre kontrol edin</td></tr>
        </tbody>
      </table>


      <h2>Sektörünüze Göre Dikkat Edilecekler</h2>
      <table>
        <thead><tr><th>Sektör</th><th>En sık risk</th><th>Önerimiz</th></tr></thead>
        <tbody>
          <tr><td>Restoran ve kafe</td><td>Davetle gelen fenomenin paylaşımında ibare olmaması</td><td>Davet mesajında “paylaşımda reklam ibaresi kullanılacaktır” notu</td></tr>
          <tr><td>Güzellik ve estetik</td><td>Yapay zekâ ile düzenlenmiş “önce-sonra” görselleri, gerçek sanılan yapay modeller</td><td>Gerçek ve onaylı görseller; sağlık reklam kurallarına ayrıca uyum</td></tr>
          <tr><td>E-ticaret</td><td>İndirim duyuruları, “çevre dostu ürün” gibi genel iddialar</td><td>Fiyat geçmişini ve iddiaların dayanağını kayıt altında tutun</td></tr>
          <tr><td>Sağlık kuruluşları</td><td>Tanıtım ile reklam yasağı arasındaki sınır</td><td>Sağlık mevzuatı ayrıca bağlayıcı; iddiasız, bilgilendirici dil</td></tr>
          <tr><td>Avukatlar</td><td>Influencer veya ücretli tanıtım</td><td>Avukatlık mevzuatı reklamı yasaklar; görünürlük içerik ve SEO ile kurulur (<a href="/blog/avukatlar-icin-dijital-pazarlama-seo-rehberi">rehber</a>)</td></tr>
        </tbody>
      </table>

      <div data-bilesen="reklam-etiketi"></div>

      <h2>Paylaşım Öncesi Kontrol Listesi</h2>
      <ul>
        <li>Bu paylaşım karşılığında para, ürün, indirim veya davet verildi mi? Evetse <strong>“reklam” veya “tanıtım”</strong> ibaresi var mı ve ilk bakışta görünüyor mu?</li>
        <li>Görselde veya videoda yapay zekâ ile üretilmiş bir kişi var mı? Varsa bu açıkça belirtilmiş mi?</li>
        <li>Gerçek bir kişinin (ünlü, müşteri, çalışan) izni olmadan yapay zekâ ile üretilmiş görüntüsü kullanılıyor mu?</li>
        <li>“En iyi”, “çevre dostu”, “garantili” gibi iddiaların dayanağı açıklanmış mı?</li>
        <li>İndirim varsa önceki fiyat ve kampanya süresi doğru mu?</li>
        <li>Sağlık veya hukuk gibi ayrıca düzenlenen bir sektördeyseniz kendi meslek kurallarınıza uygun mu?</li>
      </ul>

      <div class="callout">
        <span class="callout-title">Neden önemli?</span>
        <p>Kurallara aykırı reklamlar için Reklam Kurulu durdurma ve idari para cezası kararı verebilir. Influencer iş birliklerinde sorumluluk yalnızca içerik üreticisinde değil, reklamı veren işletmede de olabilir.</p>
      </div>

      <h2>Sık Sorulan Sorular</h2>
      <h3>Ücret ödemedim, sadece ürün gönderdim. Yine reklam mı?</h3>
      <p>Haberlere yansıyan düzenlemeye göre evet; hediye ürün, indirim veya etkinlik daveti gibi menfaatler de kapsamda. Paylaşımda ibare kullanılmalı.</p>
      <h3>Kendi hesabımızdan yaptığımız paylaşımlar da kapsamda mı?</h3>
      <p>İşletmenin kendi hesabındaki tanıtım zaten reklamdır ve genel reklam kurallarına (doğruluk, kanıtlanabilir iddia) uymalıdır. Yeni değişiklik özellikle üçüncü kişilerin menfaat karşılığı yaptığı paylaşımları netleştiriyor.</p>
      <h3>Yapay zekâ ile ürettiğimiz ürün görsellerini kullanabilir miyiz?</h3>
      <p>Ürün görselinin kendisi değil, gerçek kişi taklidi ve yanıltıcılık sorun. Yapay zekâ ile üretilmiş kişi kullanıyorsanız bunu belirtin; gerçek bir kişinin izinsiz kopyasını hiç kullanmayın.</p>

      <h3>Sonuç</h3>
      <p>Yeni kurallar şeffaflığı öne çıkarıyor: kimin para aldığı, neyin yapay zekâ ile üretildiği ve iddiaların neye dayandığı açık olmalı. Influencer seçimi ve iş birliği süreci için <a href="/blog/influencer-ile-calismak-2026">Influencer ile Çalışmak 2026</a> rehberimize bakabilir, kurallara uygun içerik planı için <a href="/hizmetler/sosyal-medya">sosyal medya yönetimi</a> ve <a href="/hizmetler/meta-reklam">Instagram & Facebook reklamları</a> hizmetlerimizi inceleyebilirsiniz.</p>
    `,
  },

  // ─── 4. İSTANBUL PRESTİJLİ SEMTLER YEREL SEO ─────────────────────────────
  {
    slug: 'istanbul-prestijli-semtler-yerel-seo',
    coverImage: '/gorseller/blog/istanbul-ortakoy.webp',
    title: 'Beşiktaş, Sarıyer, Göktürk: İstanbul’un Prestijli Semtlerinde Yerel SEO',
    excerpt:
      'Bebek, Etiler, Nişantaşı, Zekeriyaköy, Göktürk… İstanbul’un prestijli semtlerinde müşteri nasıl arıyor, neye bakıyor? Klinik, butik, restoran ve emlak işletmeleri için semt bazında yerel SEO rehberi.',
    category: 'SEO',
    categoryColor: 'blue',
    emoji: '🌉',
    coverGradient: 'from-blue-500/10 to-blue-900/5',
    readTime: 7,
    date: TARIH,
    author: YAZAR,
    authorRole: ROL,
    tags: ['İstanbul SEO', 'Yerel SEO', 'Beşiktaş', 'Sarıyer', 'Göktürk', 'Google Haritalar'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>İstanbul’un prestijli semtlerinde müşteri çoğu zaman ilçe adıyla değil <strong>semt adıyla</strong> arar: “etiler diş kliniği”, “zekeriyaköy veteriner”, “nişantaşı estetik”. Bu semtlerde öne çıkmak için işletme profilinde ve sitede semtin adı, net hizmet sayfaları, kaliteli fotoğraflar ve düzenli yanıtlanmış yorumlar belirleyicidir.</p>
      </div>

      <figure>
        <video src="/video/blog/bogaz-fsm-koprusu.mp4" poster="/video/blog/bogaz-fsm-koprusu.jpg" autoplay muted loop playsinline preload="none"></video>
        <figcaption>Boğaz kıyısı, Fatih Sultan Mehmet Köprüsü çevresi. Video: Pexels</figcaption>
      </figure>

      <h2>Bu Semtlerde Arama Neden Farklı?</h2>
      <ul>
        <li><strong>Semt adı ilçeden güçlü:</strong> Beşiktaş’ta yaşayan biri “bebek kahvaltı”, Sarıyer’de yaşayan “tarabya balık restoranı” diye arar.</li>
        <li><strong>Beklenti yüksek:</strong> Fotoğraf kalitesi, yorumların içeriği ve hızlı cevap, fiyattan önce değerlendirilir.</li>
        <li><strong>Aramaların çoğu telefondan ve yoldan:</strong> Konum, park imkânı, çalışma saati ve tek dokunuşla arama ya da WhatsApp önemlidir.</li>
        <li><strong>Randevu ve rezervasyon beklentisi:</strong> Klinik, kuaför ve restoranlarda “randevu al” veya “rezervasyon” butonu tercih sebebidir.</li>
      </ul>

      <h2>Semt Semt Arama Örnekleri</h2>
      <table>
        <thead><tr><th>İlçe</th><th>Öne çıkan semtler</th><th>Örnek arama</th><th>Ayrıntılı rehber</th></tr></thead>
        <tbody>
          <tr><td>Beşiktaş</td><td>Bebek, Etiler, Levent, Ortaköy, Ulus</td><td>“etiler diş kliniği”</td><td><a href="/besiktas-seo">Beşiktaş SEO</a></td></tr>
          <tr><td>Sarıyer</td><td>Tarabya, Yeniköy, İstinye, Zekeriyaköy</td><td>“zekeriyaköy veteriner”</td><td><a href="/sariyer-seo">Sarıyer SEO</a></td></tr>
          <tr><td>Şişli</td><td>Nişantaşı, Teşvikiye, Fulya, Bomonti</td><td>“nişantaşı cilt bakımı”</td><td><a href="/sisli-seo">Şişli SEO</a></td></tr>
          <tr><td>Eyüpsultan</td><td>Göktürk, Kemerburgaz</td><td>“göktürk anaokulu”</td><td><a href="/gokturk-seo">Göktürk SEO</a></td></tr>
          <tr><td>Kadıköy</td><td>Moda, Caddebostan, Suadiye, Fenerbahçe</td><td>“caddebostan pilates”</td><td><a href="/kadikoy-seo">Kadıköy SEO</a></td></tr>
          <tr><td>Bakırköy</td><td>Yeşilköy, Florya, Ataköy</td><td>“yeşilköy fizyoterapist”</td><td><a href="/bakirkoy-seo">Bakırköy SEO</a></td></tr>
        </tbody>
      </table>
      <p>Diğer ilçe rehberlerimiz için <a href="/istanbul-seo">İstanbul SEO</a> sayfamıza bakabilirsiniz.</p>

      <figure>
        <img src="/gorseller/blog/istanbul-bogaz-yali.webp" alt="Boğaz kıyısında tarihi bir yalı" loading="lazy" width="1280" height="853" />
        <figcaption>Boğaz kıyısındaki semtlerde müşteri, ilçeden çok semt adıyla arar. Görsel: Pexels</figcaption>
      </figure>

      <div data-bilesen="google-arama|etiler diş kliniği;zekeriyaköy veteriner;nişantaşı cilt bakımı;göktürk anaokulu|Prestijli semtlerde müşteri ilçe değil semt adıyla arar."></div>

      <h2>Müşteri Profilinize Neye Bakıyor?</h2>
      <table>
        <thead><tr><th>Unsur</th><th>Neden önemli?</th><th>Yapılacak</th></tr></thead>
        <tbody>
          <tr><td>Fotoğraflar</td><td>İlk izlenim; mekânın kalitesi fotoğraftan anlaşılır</td><td>Gerçek, aydınlık, güncel iç ve dış mekân fotoğrafları</td></tr>
          <tr><td>Yorumlar ve yanıtlar</td><td>Yorumların içeriği ve işletmenin cevabı birlikte okunur</td><td>Her yoruma kişisel ve kısa yanıt (<a href="/blog/google-yorumlari-nasil-artirilir">nasıl artırılır?</a>)</td></tr>
          <tr><td>Randevu / rezervasyon</td><td>Google artık bu butonların hangisinin görüneceğini seçmenize izin veriyor</td><td>Kullandığınız randevu veya rezervasyon bağlantısını profilde güncel tutun</td></tr>
          <tr><td>Ulaşım ve park</td><td>Bu semtlerde en sık sorulan pratik soru</td><td>Profilde ve sitede park, vale veya toplu taşıma bilgisi</td></tr>
          <tr><td>Semt adı</td><td>Arama semt adıyla yapılıyor</td><td>Adres, açıklama ve hizmet sayfalarında semti doğal biçimde anın</td></tr>
          <tr><td>Yabancı dil</td><td>Bazı semtlerde yabancı müşteri oranı yüksek</td><td>Gerekiyorsa İngilizce kısa bir hizmet sayfası</td></tr>
        </tbody>
      </table>

      <h2>Semt Sayfası mı, İlçe Sayfası mı?</h2>
      <p>Her semt için ayrı sayfa açmak çoğu zaman gerekmez; kopya metinli onlarca sayfa Google’da işe yaramaz ve güveni düşürür. Doğru yöntem: Hizmet verdiğiniz ilçe için özgün bir sayfa, içinde gerçekten hizmet verdiğiniz semtlerin adı ve o semtlere özgü bilgi. Semt adıyla ciddi arama hacmi varsa ve gerçekten farklı bir şey söyleyebiliyorsanız ayrı sayfa açılır. Ayrıntılar: <a href="/blog/ilce-bazli-seo-sablon-sayfa-mi-gercek-icerik-mi">İlçe bazlı SEO: şablon sayfa mı, gerçek içerik mi?</a></p>

      <div data-bilesen="video|isletme-profili|Kısa video: Google İşletme Profili’nde öne çıkmanın temelleri."></div>

      <h2>4 Haftalık Başlangıç Planı</h2>
      <table>
        <thead><tr><th>Hafta</th><th>Yapılacaklar</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Google İşletme Profili: kategori, hizmetler, saatler, semt bilgisi, randevu bağlantısı</td></tr>
          <tr><td>2</td><td>Fotoğraf yenileme; son 3 ayın yorumlarına yanıt</td></tr>
          <tr><td>3</td><td>Sitede hizmet sayfaları ve ilçe sayfası; sayfa başında kısa cevap, SSS</td></tr>
          <tr><td>4</td><td>Rehber siteler ve sosyal medyada ad-adres-telefon birliği; ölçümün kurulması</td></tr>
        </tbody>
      </table>

      <h2>Sık Sorulan Sorular</h2>
      <h3>Bu semtlerde Google Ads mi, SEO mu?</h3>
      <p>Rekabetin yüksek olduğu sektörlerde (estetik, diş, emlak) ikisi birlikte en iyi sonucu verir: Reklam hemen görünürlük sağlar, SEO ve işletme profili zamanla birikir. Reklam için konum hedefini semt çevresine daraltmak bütçeyi korur.</p>
      <h3>Adresim Beşiktaş’ta ama Sarıyer’den de müşteri istiyorum. Ne yapmalıyım?</h3>
      <p>Harita sonuçlarında fiziksel konum belirleyicidir; Sarıyer için sitede o bölgeye hizmetinizi anlatan özgün bir bölüm ve gerekirse konum hedefli reklam en doğru yoldur. Profilde gerçek dışı adres kullanmak kurallara aykırıdır.</p>

      <h3>Sonuç</h3>
      <p>İstanbul’un prestijli semtlerinde yerel SEO, semt adını doğru kullanmak ve beklentiyi karşılayan bir profil sunmakla başlar. İşletmenize özel bir plan için <a href="/istanbul-seo">İstanbul SEO</a> sayfamızı inceleyebilir veya <a href="/seo-analiz">ücretsiz SEO analizi</a> isteyebilirsiniz.</p>
    `,
  },

  // ─── 5. 2027 DİJİTAL PAZARLAMA TAKVİMİ ───────────────────────────────────
  {
    slug: 'dijital-pazarlama-takvimi-2027',
    coverImage: '/gorseller/blog/pazarlama-takvimi-2027.webp',
    title: '2027 Dijital Pazarlama Takvimi: Bayramlar, Özel Günler ve Sezonlar',
    excerpt:
      '2027’de Ramazan Bayramı, Kurban Bayramı, Anneler Günü, Efsane Cuma ve okul dönemleri ne zaman? Ay ay pazarlama takvimi, sektöre göre kritik dönemler ve kampanya hazırlığının ne zaman başlaması gerektiği.',
    category: 'Strateji',
    categoryColor: 'violet',
    emoji: '📅',
    coverGradient: 'from-violet-500/10 to-violet-900/5',
    readTime: 6,
    date: TARIH,
    author: YAZAR,
    authorRole: ROL,
    tags: ['Pazarlama Takvimi 2027', 'Kampanya Planlama', 'Ramazan', 'Bayram', 'Efsane Cuma'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>2027’de <strong>Ramazan Bayramı 9–11 Mart</strong>, <strong>Kurban Bayramı 16–19 Mayıs</strong> (Diyanet takvimine göre), <strong>Anneler Günü 9 Mayıs</strong>, <strong>Efsane Cuma 26 Kasım</strong>. Reklam ve içerik hazırlığına bu tarihlerden en az <strong>3–4 hafta önce</strong> başlamak gerekir; Google ve Meta’da yeni kampanyaların öğrenme dönemi vardır.</p>
      </div>

      <div class="stat-grid">
        <div class="stat-card"><span class="stat-number">9–11 Mart</span><span class="stat-label">Ramazan Bayramı (arefe 8 Mart)</span></div>
        <div class="stat-card"><span class="stat-number">16–19 Mayıs</span><span class="stat-label">Kurban Bayramı (arefe 15 Mayıs)</span></div>
        <div class="stat-card"><span class="stat-number violet">26 Kasım</span><span class="stat-label">Efsane Cuma / Black Friday</span></div>
      </div>

      <div data-bilesen="takvim-2027"></div>

      <h2>Ay Ay 2027 Pazarlama Takvimi</h2>
      <table>
        <thead><tr><th>Ay</th><th>Tarih</th><th>Gün / dönem</th><th>Hazırlık ne zaman?</th></tr></thead>
        <tbody>
          <tr><td>Ocak</td><td>1 Ocak · Ocak ortası</td><td>Yılbaşı · Yarıyıl tatili (kurs, kayak, aile tatili)</td><td>Aralık başı</td></tr>
          <tr><td>Şubat</td><td>Şubat başı · 14 Şubat</td><td>Ramazan ayının başlangıcı · Sevgililer Günü</td><td>Ocak ortası</td></tr>
          <tr><td>Mart</td><td>8 Mart · 9–11 Mart</td><td>Dünya Kadınlar Günü (aynı gün arefe) · Ramazan Bayramı</td><td>Şubat ortası</td></tr>
          <tr><td>Nisan</td><td>23 Nisan</td><td>Ulusal Egemenlik ve Çocuk Bayramı · Bahar kampanyaları</td><td>Mart sonu</td></tr>
          <tr><td>Mayıs</td><td>9 Mayıs · 16–19 Mayıs</td><td>Anneler Günü · Kurban Bayramı (19 Mayıs ile birleşir)</td><td>Nisan ortası</td></tr>
          <tr><td>Haziran</td><td>20 Haziran · Haziran</td><td>Babalar Günü · Mezuniyet, sınav dönemi, yaz sezonu açılışı</td><td>Mayıs sonu</td></tr>
          <tr><td>Temmuz–Ağustos</td><td>Yaz boyu · Ağustos sonu</td><td>Tatil sezonu · Okula dönüş alışverişi</td><td>Haziran</td></tr>
          <tr><td>Eylül</td><td>Eylül</td><td>Okulların ve üniversitelerin açılışı, kurs kayıtları</td><td>Ağustos başı</td></tr>
          <tr><td>Ekim</td><td>29 Ekim · Ekim sonu</td><td>Cumhuriyet Bayramı · Kış sezonu hazırlığı</td><td>Eylül sonu</td></tr>
          <tr><td>Kasım</td><td>11 Kasım · 24 Kasım · 26 Kasım</td><td>11.11 indirimleri · Öğretmenler Günü · Efsane Cuma</td><td>Ekim ortası</td></tr>
          <tr><td>Aralık</td><td>Aralık boyu</td><td>Yılbaşı kampanyaları, kış turizmi</td><td>Kasım ortası</td></tr>
        </tbody>
      </table>
      <p><em>Dini bayram tarihleri Diyanet’in 2027 takvimine göredir; resmî tatil süreleri ve olası uzatmalar ayrıca ilan edilir. Okulların açılış ve yarıyıl tarihleri için Millî Eğitim Bakanlığı’nın çalışma takvimine bakın.</em></p>

      <figure>
        <img src="/gorseller/blog/ramazan-feneri.webp" alt="Pencere önünde Ramazan feneri" loading="lazy" width="1600" height="900" />
        <figcaption>2027’de Ramazan Şubat başında başlıyor; iftar menüleri ve bayram kampanyaları için hazırlık Ocak’ta başlamalı. Görsel: Pixabay</figcaption>
      </figure>

      <h2>Sektörünüz İçin Kritik Dönemler</h2>
      <table>
        <thead><tr><th>Sektör</th><th>En kritik dönemler</th><th>Not</th></tr></thead>
        <tbody>
          <tr><td>E-ticaret</td><td>Kasım indirimleri, yılbaşı, bayram öncesi, Anneler Günü</td><td>Kargo son sipariş tarihini reklamda yazın</td></tr>
          <tr><td>Restoran ve kafe</td><td>Ramazan (iftar), Anneler ve Babalar Günü, yılbaşı</td><td>Rezervasyon bağlantısını işletme profilinde güncelleyin</td></tr>
          <tr><td>Kurs ve eğitim</td><td>Eylül kayıtları, yarıyıl, sınav öncesi</td><td>Kayıt dönemi reklamları 4–6 hafta önceden</td></tr>
          <tr><td>Turizm ve konaklama</td><td>Kış sezonu, bayram tatilleri, yaz</td><td>Rezervasyon kararı aylar önce verilir; içerik ve reklam erken başlar</td></tr>
          <tr><td>Kuyum, çiçek, hediye</td><td>Sevgililer Günü, Anneler Günü, bayramlar</td><td>Sosyal medya reklamlarında görselleri önceden hazırlayın</td></tr>
          <tr><td>Klinik ve güzellik</td><td>Bayram ve tatil öncesi, yaz öncesi</td><td>Sağlık reklam kurallarına uygun, iddiasız dil</td></tr>
          <tr><td>Tarım ve sanayi</td><td>Ekim–hasat öncesi, fuar dönemleri</td><td>B2B kampanyaları iş günlerine yoğunlaştırın</td></tr>
        </tbody>
      </table>

      <h2>Kampanya Hazırlık Takvimi (Her Özel Gün İçin)</h2>
      <ol>
        <li><strong>4 hafta önce:</strong> Teklif ve mesajı netleştirin; açılış sayfası veya ürün sayfalarını güncelleyin.</li>
        <li><strong>3 hafta önce:</strong> Görselleri ve videoları hazırlayın; reklam kampanyalarını kurun.</li>
        <li><strong>2 hafta önce:</strong> Reklamları düşük bütçeyle başlatın (öğrenme dönemi), Google İşletme Profili’ne gönderi ekleyin.</li>
        <li><strong>Son hafta:</strong> Bütçeyi en iyi çalışan reklamlara kaydırın; son sipariş/rezervasyon tarihini duyurun.</li>
        <li><strong>Sonrası:</strong> Sonuçları kaydedin; bir sonraki yılın planı bu veriyle yapılır.</li>
      </ol>

      <div class="callout">
        <span class="callout-title">Kurallara dikkat</span>
        <p>İndirim duyuruları, influencer iş birlikleri ve yapay zekâ ile üretilen görseller için 2026’da güncellenen reklam kurallarını kampanya öncesi kontrol edin: <a href="/blog/reklam-yonetmeligi-2026-isletmeler">Yeni Reklam Yönetmeliği 2026</a>.</p>
      </div>

      <h2>Sık Sorulan Sorular</h2>
      <h3>Bayram dönemlerinde reklam bütçesi artırılmalı mı?</h3>
      <p>Sektöre göre değişir. Hediye, yeme-içme ve seyahat işletmelerinde bayram öncesi talep artar; B2B firmalarda ise bayram haftası talep düşer ve bütçe azaltılabilir. Bütçe planı için <a href="/blog/google-ads-fiyatlari-2026">Google Ads fiyatları</a> yazımıza bakın.</p>
      <h3>Efsane Cuma her yıl aynı gün mü?</h3>
      <p>Hayır. ABD’deki Şükran Günü’nün ertesi cumasına denk gelir; 2027’de 26 Kasım’dır. Türkiye’de birçok mağaza kampanyayı tüm haftaya veya aya yayıyor.</p>

      <h3>Sonuç</h3>
      <p>Takvimi yılın başında görmek, son dakika kampanyalarının yüksek maliyetinden kurtarır. Yıllık reklam ve içerik planınızı birlikte çıkarmak için <a href="/teklif-al">AI teklif hesaplayıcı</a> ile ihtiyacınızı belirleyebilir veya <a href="/hizmetler/meta-reklam">Instagram & Facebook reklamları</a> ve <a href="/hizmetler/google-ads">Google Ads</a> hizmetlerimizi inceleyebilirsiniz.</p>
    `,
  },
]
