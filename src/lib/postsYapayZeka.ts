import type { Post } from './posts'

// "Yapay zekâyı işinizde nasıl kullanırsınız" yazıları (24 Kasım 2026).
// Her yazı bir hizmete bağlanır. Açık fiyat, uydurma istatistik veya müşteri sonucu yok.
// Araçların özellikleri sık değiştiği için sürüm/fiyat bilgisi verilmez.

const YAZAR = 'Çağatay Durmaz'
const TARIH = '2026-11-24'

export const yapayZekaPostlari: Post[] = [
  // ─── 1. SİTEYE YAPAY ZEKÂ ASİSTANI ───────────────────────────────────────
  {
    slug: 'web-sitesine-yapay-zeka-asistani-chatbot',
    coverImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80&fit=crop',
    title: 'Web Sitenize Yapay Zekâ Asistanı (Chatbot) Koymak: Ne İşe Yarar, Nasıl Kurulur?',
    excerpt:
      'Gece yarısı gelen soruyu kim cevaplıyor? Web sitesine yapay zekâ asistanı koymanın faydaları, eski tip chatbot ile farkı, kurulum adımları ve dikkat edilmesi gerekenler.',
    category: 'AI & Strateji',
    categoryColor: 'fuchsia',
    emoji: '🤖',
    coverGradient: 'from-fuchsia-500/10 to-fuchsia-900/5',
    readTime: 7,
    date: TARIH,
    author: YAZAR,
    authorRole: 'Kurucu, Ramses Dijital',
    tags: ['Chatbot', 'Yapay Zekâ Asistanı', 'Web Sitesi', 'Müşteri Talebi', 'WhatsApp'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>Yapay zekâ asistanı, sitenize gelen ziyaretçinin sorularını sizin bilgilerinize göre 7/24 cevaplar, ihtiyacını öğrenir ve iletişim bilgisini toplayıp size (örneğin WhatsApp'a) iletir. Bu sitedeki sağ alttaki asistan da böyle çalışıyor; dilerseniz şimdi deneyebilirsiniz.</p>
      </div>

      <h2>Eski Tip Chatbot ile Yapay Zekâ Asistanı Arasındaki Fark</h2>
      <table>
        <thead><tr><th></th><th>Eski tip (butonlu) chatbot</th><th>Yapay zekâ asistanı</th></tr></thead>
        <tbody>
          <tr><td>Nasıl çalışır?</td><td>Hazır menü: "1'e basın, 2'ye basın"</td><td>Ziyaretçi kendi cümlesiyle yazar, asistan anlar</td></tr>
          <tr><td>Beklenmeyen soru</td><td>"Anlayamadım" der</td><td>Size ait bilgilerden cevap üretir, bilmiyorsa ekibe yönlendirir</td></tr>
          <tr><td>Kurulum</td><td>Her soru-cevap tek tek girilir</td><td>İşletme bilgileri ve kurallar bir kez yazılır</td></tr>
          <tr><td>Müşteri bilgisi toplama</td><td>Form gibi, soğuk</td><td>Sohbetin içinde, doğal biçimde</td></tr>
          <tr><td>Dil</td><td>Genelde tek dil</td><td>Ziyaretçi hangi dilde yazarsa o dilde cevap verebilir</td></tr>
        </tbody>
      </table>

      <h2>Hangi İşletmeye Ne Kazandırır?</h2>
      <table>
        <thead><tr><th>İşletme</th><th>Asistanın üstlendiği iş</th></tr></thead>
        <tbody>
          <tr><td>Klinik, güzellik merkezi</td><td>Hizmetler, çalışma saatleri, randevu ön bilgisi; tıbbi iddia olmadan</td></tr>
          <tr><td>Hukuk bürosu, mali müşavir</td><td>Hangi konularda çalışıldığı, görüşme için gerekli belgeler</td></tr>
          <tr><td>Üretici / B2B</td><td>Ürün grupları, minimum sipariş, teklif için gereken bilgiler</td></tr>
          <tr><td>Otel, turizm</td><td>Oda tipleri, ulaşım, yabancı dilde soru cevaplama</td></tr>
          <tr><td>Hizmet esnafı</td><td>Hizmet bölgesi, yaklaşık süre, iletişim bilgisi toplama</td></tr>
        </tbody>
      </table>

      <h2>Kurulum Adım Adım</h2>
      <table>
        <thead><tr><th>Adım</th><th>Ne yapılır?</th></tr></thead>
        <tbody>
          <tr><td>1. Bilgi metni</td><td>Hizmetler, bölge, çalışma saatleri, sık sorulan sorular tek bir belgede toplanır</td></tr>
          <tr><td>2. Kurallar</td><td>Neyi söylemeyeceği belirlenir: fiyat vermemek, garanti vaat etmemek, tıbbi tavsiye vermemek gibi</td></tr>
          <tr><td>3. Üslup</td><td>Kısa, sıcak, "siz" diye hitap eden; telefonda bir bakışta okunan cevaplar</td></tr>
          <tr><td>4. Talep aktarımı</td><td>Ziyaretçi onay verince ad, telefon ve ihtiyacı WhatsApp'a veya e-postaya gönderilir</td></tr>
          <tr><td>5. Test</td><td>Zor ve yanıltıcı sorularla denenir; yanlış cevaplar kurallarla düzeltilir</td></tr>
          <tr><td>6. Ölçüm</td><td>Kaç sohbetin talebe dönüştüğü takip edilir</td></tr>
        </tbody>
      </table>

      <h2>Dikkat Edilmesi Gerekenler</h2>
      <ul>
        <li><strong>Uydurmaması için sınır koyun:</strong> Asistan yalnızca verdiğiniz bilgilerle konuşmalı, bilmediğinde "ekibimiz netleştirsin" demeli.</li>
        <li><strong>Kişisel veriler (KVKK):</strong> Ad ve telefon toplanıyorsa aydınlatma metni gösterilmeli; bilgi ancak ziyaretçi onaylarsa iletilmeli.</li>
        <li><strong>Sağlık ve hukuk:</strong> Teşhis, tedavi önerisi veya hukuki görüş vermemeli; mevzuata uygun, iddiasız dil kullanmalı.</li>
        <li><strong>Kötüye kullanım sınırı:</strong> Aynı kişiden çok sayıda mesaj gelirse yavaşlatma konmalı; maliyet kontrol altında kalır.</li>
        <li><strong>İnsan her zaman bir tık uzakta olmalı:</strong> Telefon ve WhatsApp butonu asistanın yanında durmalı.</li>
      </ul>

      <h2>Sık Sorulan Sorular</h2>

      <h3>Yapay zekâ asistanı müşteri temsilcisinin yerini alır mı?</h3>
      <p>Hayır, ön karşılamayı yapar. Tekrar eden soruları cevaplar ve hazır bilgiyle size gelir; satışı ve özel durumları yine siz yürütürsünüz.</p>

      <h3>Hangi yapay zekâ modeli kullanılıyor?</h3>
      <p>İhtiyaca göre seçilir. Bu sitedeki asistan Anthropic'in Claude modeliyle çalışıyor. Modellerin farkları için <a href="/blog/chatgpt-claude-gemini-isletmeler-icin-karsilastirma">ChatGPT, Claude ve Gemini karşılaştırmamıza</a> bakabilirsiniz.</p>

      <h3>WordPress sitesine de kurulur mu?</h3>
      <p>Evet. Asistan sitenin altyapısından bağımsız bir pencere olarak eklenebilir.</p>

      <h3>Sonuç</h3>
      <p>Doğru kurallarla kurulmuş bir yapay zekâ asistanı, kaçırdığınız soruları talebe çevirir. Kurulum ve diğer otomasyonlar için <a href="/hizmetler/n8n-otomasyon">otomasyon hizmetimize</a> göz atabilir ya da <a href="/teklif-al">AI Teklif Hesaplayıcı</a> ile tahmini teklif alabilirsiniz.</p>
    `,
  },

  // ─── 2. YAPAY ZEKÂ İLE REELS ─────────────────────────────────────────────
  {
    slug: 'yapay-zeka-ile-reels-hazirlama',
    coverImage: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=1200&q=80&fit=crop',
    title: 'Yapay Zekâ ile Reels Nasıl Hazırlanır? Fikir, Senaryo, Altyazı ve Seslendirme',
    excerpt:
      'İşletmeniz için Reels çekmek istiyorsunuz ama ne çekeceğinizi bilmiyor musunuz? Yapay zekâ ile fikir bulma, 30 saniyelik senaryo, altyazı ve seslendirme adım adım; hazır komut örnekleriyle.',
    category: 'Sosyal Medya',
    categoryColor: 'pink',
    emoji: '🎬',
    coverGradient: 'from-pink-500/10 to-pink-900/5',
    readTime: 7,
    date: TARIH,
    author: YAZAR,
    authorRole: 'Kurucu, Ramses Dijital',
    tags: ['Reels', 'Instagram', 'Yapay Zekâ', 'Video İçerik', 'Sosyal Medya'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>Yapay zekâ Reels'i sizin yerinize çekmez ama işin en zor kısmını hızlandırır: ne çekeceğinize karar vermek, ilk 3 saniyelik kancayı ve kısa senaryoyu yazmak, altyazı ve açıklama metnini hazırlamak. Çekimi telefonla siz yaparsınız; gerçek mekân ve gerçek insanlar hâlâ en çok güven veren içeriktir.</p>
      </div>

      <h2>Akış: Fikirden Paylaşıma 6 Adım</h2>
      <table>
        <thead><tr><th>Adım</th><th>Yapay zekâ ne yapar?</th><th>Siz ne yaparsınız?</th></tr></thead>
        <tbody>
          <tr><td>1. Fikir</td><td>Sektörünüze göre 20-30 video fikri listeler</td><td>Çekebileceklerinizi seçersiniz</td></tr>
          <tr><td>2. Kanca</td><td>İlk 3 saniye için dikkat çeken cümleler önerir</td><td>Size en doğal geleni seçersiniz</td></tr>
          <tr><td>3. Senaryo</td><td>15-30 saniyelik sahne sahne metin yazar</td><td>Kendi dilinize göre düzeltirsiniz</td></tr>
          <tr><td>4. Çekim</td><td>Çekim listesi (hangi açı, hangi sahne) çıkarır</td><td>Telefonla dikey çekersiniz</td></tr>
          <tr><td>5. Altyazı ve kurgu</td><td>Video düzenleme uygulamaları sesi otomatik yazıya çevirir</td><td>Hataları düzeltirsiniz</td></tr>
          <tr><td>6. Açıklama</td><td>Açıklama metni ve harekete geçirici cümle yazar</td><td>Konum ve iletişim bilgisini eklersiniz</td></tr>
        </tbody>
      </table>

      <h2>Sektöre Göre Reels Fikirleri</h2>
      <table>
        <thead><tr><th>Sektör</th><th>Fikir örnekleri</th></tr></thead>
        <tbody>
          <tr><td>Kafe, restoran</td><td>Günün ürününün hazırlanışı, menüde az bilinen ürün, "bu hafta yeni"</td></tr>
          <tr><td>Güzellik, kuaför</td><td>Öncesi-sonrası (müşteri izniyle), sık sorulan bir soruya 15 saniyelik cevap</td></tr>
          <tr><td>Klinik</td><td>Hekimden kısa bilgilendirme, kliniğin içi; iddia ve garanti içermeden</td></tr>
          <tr><td>Oto servis</td><td>"Bu ses neden gelir?", bakımda kontrol edilen 3 şey</td></tr>
          <tr><td>Emlak</td><td>Ev turu, mahalle tanıtımı, "bu bölgede ev alırken nelere bakılır"</td></tr>
          <tr><td>Üretici</td><td>Üretim hattından kısa görüntü, ürünün nerede kullanıldığı</td></tr>
        </tbody>
      </table>

      <h2>Hazır Komut Örnekleri</h2>
      <p>Aşağıdaki komutları ChatGPT, Claude veya Gemini'ye olduğu gibi yazabilirsiniz; köşeli parantezleri kendi bilginizle doldurun.</p>
      <blockquote><strong>Fikir için:</strong> "[İzmit]'te [kahvaltı salonu] işletiyorum. Müşterilerim çoğunlukla [aileler]. Telefonla çekebileceğim, yüzümü göstermem gerekmeyen 20 Reels fikri yaz. Her biri tek cümle olsun."</blockquote>
      <blockquote><strong>Senaryo için:</strong> "Şu fikir için 20 saniyelik Reels senaryosu yaz: [fikir]. İlk 3 saniyede dikkat çeken bir cümle olsun. Sahne sahne yaz; her sahnede ekranda ne görüneceğini ve ekrana yazılacak kısa metni belirt. Samimi, abartısız bir dil kullan."</blockquote>
      <blockquote><strong>Açıklama için:</strong> "Bu video için Instagram açıklaması yaz: [kısa özet]. En fazla 3 cümle, sonunda konumu ve WhatsApp'tan yazmalarını hatırlat. Emoji en fazla 2 tane olsun."</blockquote>

      <h2>Yapay Zekâ ile Seslendirme ve Görüntü: Dikkat</h2>
      <table>
        <thead><tr><th>Konu</th><th>Öneri</th></tr></thead>
        <tbody>
          <tr><td>Yapay ses</td><td>Bilgilendirme videolarında işe yarar; ama kendi sesiniz çoğu zaman daha samimi durur</td></tr>
          <tr><td>Yapay görüntü</td><td>Ürün veya mekânınızı yapay görüntüyle "olduğundan farklı" göstermeyin; müşteri geldiğinde hayal kırıklığı yaşar</td></tr>
          <tr><td>Etiketleme</td><td>Platformlar gerçekçi yapay zekâ içeriği için etiket isteyebilir; kurallarına uyun</td></tr>
          <tr><td>Müzik</td><td>Uygulamanın kendi müzik kütüphanesini kullanın; telifli müzik video kaldırmaya yol açabilir</td></tr>
          <tr><td>İzin</td><td>Videoda görünen müşteri ve çalışanlardan izin alın</td></tr>
        </tbody>
      </table>

      <h2>Sık Sorulan Sorular</h2>

      <h3>Reels ne kadar uzun olmalı?</h3>
      <p>Tek bir mesaj veren 15-30 saniyelik videolar işletmeler için iyi bir başlangıçtır. Uzunluktan çok ilk 3 saniye ve videonun sonuna kadar izlenmesi önemlidir.</p>

      <h3>Haftada kaç Reels paylaşmalıyım?</h3>
      <p>Sürdürebileceğiniz kadar. Düzenli paylaşım, ara ara yapılan yoğun paylaşımdan daha iyi sonuç verir. Planlama için <a href="/blog/sifirdan-instagram-isletme-hesabi-buyutme">Instagram'da ilk 30 gün planımıza</a> bakabilirsiniz.</p>

      <h3>Yüzümü göstermeden Reels yapılır mı?</h3>
      <p>Evet. Ürün, el çekimi, mekân ve ekrana yazı ile anlatım çok sayıda işletme için yeterlidir.</p>

      <h3>Sonuç</h3>
      <p>Yapay zekâ ile fikir ve metin işi dakikalara iner; size kalan, gerçek işinizi çekmektir. İçerik planı ve video üretimini bize bırakmak isterseniz <a href="/hizmetler/sosyal-medya">sosyal medya hizmetimize</a> göz atın.</p>
    `,
  },

  // ─── 3. CHATGPT / CLAUDE / GEMINI ────────────────────────────────────────
  {
    slug: 'chatgpt-claude-gemini-isletmeler-icin-karsilastirma',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&fit=crop',
    title: 'ChatGPT, Claude, Gemini: İşletmeniz İçin Hangisi, Ne İşe Yarar?',
    excerpt:
      'Üç popüler yapay zekâ asistanının işletmeler açısından farkları: hangisi hangi iş için uygun, ücretsiz sürümler, veri güvenliği ve üçünü birlikte kullanmanın pratik yolu.',
    category: 'AI & Strateji',
    categoryColor: 'fuchsia',
    emoji: '🧠',
    coverGradient: 'from-fuchsia-500/10 to-fuchsia-900/5',
    readTime: 6,
    date: TARIH,
    author: YAZAR,
    authorRole: 'Kurucu, Ramses Dijital',
    tags: ['ChatGPT', 'Claude', 'Gemini', 'Yapay Zekâ', 'Karşılaştırma'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>Üçü de metin yazma, özetleme ve fikir üretmede iş görür. Kabaca: <strong>ChatGPT</strong> geniş özellik yelpazesiyle her işe uygun bir başlangıç; <strong>Claude</strong> uzun belgeleri okumak ve doğal, düzgün Türkçe metin yazmakta öne çıkar; <strong>Gemini</strong> Google hizmetlerini (Gmail, Drive, Dokümanlar) kullananlar için pratiktir. En doğrusu, aynı işi ikisinde deneyip size uyanı seçmek.</p>
      </div>

      <h2>Kim Yapıyor, Nerede Kullanılır?</h2>
      <table>
        <thead><tr><th></th><th>ChatGPT</th><th>Claude</th><th>Gemini</th></tr></thead>
        <tbody>
          <tr><td>Geliştiren</td><td>OpenAI</td><td>Anthropic</td><td>Google</td></tr>
          <tr><td>Ücretsiz sürüm</td><td>Var</td><td>Var</td><td>Var</td></tr>
          <tr><td>Telefon uygulaması</td><td>Var</td><td>Var</td><td>Var</td></tr>
          <tr><td>Türkçe</td><td>Destekliyor</td><td>Destekliyor</td><td>Destekliyor</td></tr>
          <tr><td>Öne çıkan yanı</td><td>Çok yönlülük, görsel üretme</td><td>Uzun belge, akıcı metin, kod</td><td>Google hizmetleriyle bağlantı</td></tr>
        </tbody>
      </table>
      <p>Özellikler ve ücretli paketler sık değiştiği için güncel bilgiyi her aracın kendi sitesinden kontrol edin.</p>

      <h2>Hangi İş İçin Hangisi? (Deneyimimize Göre)</h2>
      <table>
        <thead><tr><th>İş</th><th>İyi başlangıç</th><th>Not</th></tr></thead>
        <tbody>
          <tr><td>Sosyal medya metni, Reels senaryosu</td><td>Üçü de</td><td>Kendi üslubunuzu örnek olarak verin</td></tr>
          <tr><td>Uzun sözleşme, şartname, rapor özetleme</td><td>Claude</td><td>Gizli belgeleri yüklemeden önce veri ayarlarına bakın</td></tr>
          <tr><td>Teklif ve e-posta metni</td><td>Claude, ChatGPT</td><td>Rakam ve tarihleri mutlaka kendiniz kontrol edin</td></tr>
          <tr><td>Görsel taslak, afiş fikri</td><td>ChatGPT, Gemini</td><td>Gerçek ürün fotoğrafının yerine kullanmayın</td></tr>
          <tr><td>Gmail ve Drive içinde çalışma</td><td>Gemini</td><td>Google Workspace kullanıyorsanız pratik</td></tr>
          <tr><td>Web sitesi asistanı (chatbot)</td><td>İhtiyaca göre</td><td>Bkz. <a href="/blog/web-sitesine-yapay-zeka-asistani-chatbot">chatbot rehberi</a></td></tr>
        </tbody>
      </table>

      <h2>İşletmeler İçin 5 Altın Kural</h2>
      <ul>
        <li><strong>Kontrol etmeden yayınlamayın:</strong> Yapay zekâ emin görünerek yanlış bilgi yazabilir.</li>
        <li><strong>Müşteri verisini dikkatli paylaşın:</strong> T.C. kimlik, sağlık bilgisi gibi verileri sohbete yapıştırmayın.</li>
        <li><strong>Bağlam verin:</strong> "Metin yaz" yerine "İzmit'te diş kliniği için, ailelere hitap eden, 3 cümlelik metin yaz" deyin.</li>
        <li><strong>Kendi sesinizi koruyun:</strong> Eski yazılarınızdan örnek verin, üslubunuzu taklit etsin.</li>
        <li><strong>Tek araca bağlanmayın:</strong> Önemli işlerde iki aracın cevabını karşılaştırın.</li>
      </ul>

      <h2>Bir de Ters Taraf Var: Yapay Zekâ Sizi Öneriyor mu?</h2>
      <p>Müşterileriniz de bu araçlara "İzmit'te iyi bir diş kliniği önerir misin?" diye soruyor. Bu cevaplarda görünmek ayrı bir çalışma gerektirir; buna GEO ve AEO deniyor. Ayrıntılar: <a href="/blog/geo-nedir-chatgpt-yapay-zeka-aramalarda-gorunurluk">ChatGPT'de nasıl görünür olunur?</a></p>

      <h2>Sık Sorulan Sorular</h2>

      <h3>Ücretsiz sürüm işletme için yeterli mi?</h3>
      <p>Ara sıra metin yazmak için çoğu zaman yeterli. Her gün yoğun kullanıyor veya uzun belgelerle çalışıyorsanız ücretli sürümlerin kullanım sınırları daha geniştir.</p>

      <h3>Yazdırdığım metin Google'da cezalandırılır mı?</h3>
      <p>Google, içeriğin nasıl üretildiğinden çok faydalı ve özgün olup olmadığına bakar. Yapay zekâ ile yazılmış ama kontrol edilmemiş, kopya gibi metinler ise değer üretmez.</p>

      <h3>Sonuç</h3>
      <p>Doğru araç, yapacağınız işe göre değişir; asıl fark onu nasıl kullandığınızda. İşletmenizde yapay zekâyı sürekli çalışan otomasyonlara dönüştürmek isterseniz <a href="/hizmetler/n8n-otomasyon">otomasyon hizmetimize</a> göz atın.</p>
    `,
  },

  // ─── 4. CLAUDE İLE 10 KULLANIM ───────────────────────────────────────────
  {
    slug: 'claude-ile-isletme-icin-10-pratik-kullanim',
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&fit=crop',
    title: 'Claude ile İşletmeniz İçin 10 Pratik Kullanım (Hazır Komutlarla)',
    excerpt:
      "Claude nedir, işletme sahibi olarak ne işinize yarar? Teklif metninden Google yorumlarına cevaba, ürün açıklamasından sözleşme özetine 10 pratik kullanım ve kopyalayıp kullanabileceğiniz komutlar.",
    category: 'AI & Strateji',
    categoryColor: 'fuchsia',
    emoji: '✍️',
    coverGradient: 'from-fuchsia-500/10 to-fuchsia-900/5',
    readTime: 8,
    date: TARIH,
    author: YAZAR,
    authorRole: 'Kurucu, Ramses Dijital',
    tags: ['Claude', 'Yapay Zekâ', 'Verimlilik', 'Küçük İşletme', 'Komut Örnekleri'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>Claude, Anthropic'in geliştirdiği bir yapay zekâ asistanıdır; claude.ai adresinden veya telefon uygulamasından kullanılır. İşletmeler için en çok işe yaradığı alanlar: metin yazmak, uzun belgeleri özetlemek, müşteriye cevap taslağı hazırlamak ve fikir üretmek. Aşağıdaki komutları kendi bilgilerinizle doldurup kullanabilirsiniz.</p>
      </div>

      <h2>10 Kullanım Bir Bakışta</h2>
      <table>
        <thead><tr><th>#</th><th>İş</th><th>Kazanılan</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Teklif metni</td><td>Düzenli, anlaşılır teklif taslağı</td></tr>
          <tr><td>2</td><td>Google yorumlarına cevap</td><td>Her yoruma kişisel, kibar cevap</td></tr>
          <tr><td>3</td><td>Ürün / hizmet açıklaması</td><td>Sitede ve profilde net anlatım</td></tr>
          <tr><td>4</td><td>Sosyal medya takvimi</td><td>Bir aylık paylaşım planı</td></tr>
          <tr><td>5</td><td>Sözleşme ve şartname özeti</td><td>Uzun metinde dikkat edilecek maddeler</td></tr>
          <tr><td>6</td><td>Sık sorulan sorular</td><td>Sitede soru-cevap bölümü</td></tr>
          <tr><td>7</td><td>Zor müşteriye cevap</td><td>Sakin, profesyonel bir taslak</td></tr>
          <tr><td>8</td><td>İş ilanı</td><td>Net görev tanımı ve aranan nitelikler</td></tr>
          <tr><td>9</td><td>Toplantı notlarından görev listesi</td><td>Kim, neyi, ne zaman yapacak</td></tr>
          <tr><td>10</td><td>Rakip sitesi analizi</td><td>Kendi sitenizde eksik olan konular</td></tr>
        </tbody>
      </table>

      <h2>Kopyalayıp Kullanabileceğiniz Komutlar</h2>

      <h3>1. Teklif metni</h3>
      <blockquote>"[Gebze]'de [endüstriyel temizlik] firmasıyım. [Fabrika] müşterisine teklif metni yazacağım. Kapsam: [maddeler]. Fiyatı ben yazacağım, sen yer bırak. Kısa, kurumsal ve anlaşılır olsun."</blockquote>

      <h3>2. Google yorumuna cevap</h3>
      <blockquote>"Şu Google yorumuna işletme sahibi olarak cevap yaz: '[yorum]'. 2-3 cümle, samimi ve teşekkür eden bir dil; müşterinin bahsettiği detaya değin. Abartılı övgü ve emoji kullanma."</blockquote>
      <p>Olumsuz yorumlar için ayrı bir rehberimiz var: <a href="/blog/yapay-zeka-ile-google-yorumlarina-cevap">yapay zekâ ile yorumlara cevap</a>.</p>

      <h3>3. Hizmet açıklaması</h3>
      <blockquote>"[Kartal]'da [çocuk diş hekimliği] hizmeti veriyorum. Web sitem için bu hizmeti anlatan 120 kelimelik bir metin yaz. Ailelerin en çok merak ettiği 3 soruyu da cevapla. Tıbbi iddia ve garanti ifadesi kullanma."</blockquote>

      <h3>4. Sosyal medya takvimi</h3>
      <blockquote>"[Kuaför] işletmem için önümüzdeki 4 hafta, haftada 3 paylaşımlık Instagram planı çıkar. Tablo olarak: tarih, içerik türü (Reels/gönderi/hikâye), konu, kısa açıklama."</blockquote>

      <h3>5. Sözleşme özeti</h3>
      <blockquote>"Ekteki sözleşmeyi oku. Benim aleyhime olabilecek maddeleri, ödeme ve fesih koşullarını madde madde, sade Türkçe ile özetle."</blockquote>
      <p><em>Not: Özet, hukuki görüş yerine geçmez; önemli sözleşmelerde avukatınıza danışın. Gizli belgeleri yüklemeden önce veri ayarlarını kontrol edin.</em></p>

      <h3>6. Sık sorulan sorular</h3>
      <blockquote>"[Emlak ofisi] için müşterilerin en sık sorduğu 8 soruyu ve kısa cevaplarını yaz. Cevaplar 2 cümleyi geçmesin."</blockquote>

      <h3>7. Zor müşteriye cevap</h3>
      <blockquote>"Müşteri şunu yazdı: '[mesaj]'. Sakin, profesyonel, suçlamayan bir cevap taslağı yaz; çözüm önerisi sun."</blockquote>

      <h3>8. İş ilanı</h3>
      <blockquote>"[İzmit]'te [ön muhasebe elemanı] arıyorum. Görevleri: [maddeler]. Sade, ayrımcı ifade içermeyen bir iş ilanı yaz."</blockquote>

      <h3>9. Toplantı notları</h3>
      <blockquote>"Şu dağınık notlardan görev listesi çıkar: kim, ne yapacak, son tarih. Belirsiz olanları ayrıca listele: [notlar]"</blockquote>

      <h3>10. Rakip analizi</h3>
      <blockquote>"Bu iki sayfanın metnini karşılaştır: [benim sayfam] ve [rakip sayfası]. Rakipte olup bende olmayan konuları ve müşterinin aklına gelebilecek cevapsız soruları listele."</blockquote>
      <p>Bu konuyu daha ayrıntılı anlattığımız yazı: <a href="/blog/yapay-zeka-ile-rakip-analizi">yapay zekâ ile rakip analizi</a>.</p>

      <h2>İyi Sonuç İçin 4 İpucu</h2>
      <ul>
        <li><strong>Kim olduğunuzu söyleyin:</strong> şehir, sektör, müşteri kitlesi.</li>
        <li><strong>Biçimi belirtin:</strong> "tablo", "3 madde", "120 kelime".</li>
        <li><strong>Örnek verin:</strong> beğendiğiniz eski bir metninizi yapıştırın.</li>
        <li><strong>Düzelttirin:</strong> "daha kısa", "daha samimi", "teknik terim olmasın" diyerek ikinci tur isteyin.</li>
      </ul>

      <h2>Sık Sorulan Sorular</h2>

      <h3>Claude Türkçe biliyor mu?</h3>
      <p>Evet, Türkçe yazıp Türkçe cevap alabilirsiniz.</p>

      <h3>Claude mu ChatGPT mi?</h3>
      <p>İkisi de işinizi görür; farkları için <a href="/blog/chatgpt-claude-gemini-isletmeler-icin-karsilastirma">karşılaştırma yazımıza</a> bakın.</p>

      <h3>Sonuç</h3>
      <p>Bu komutlarla haftada saatler kazanabilirsiniz. Tekrar eden işleri tamamen otomatik hâle getirmek (örneğin her yeni yoruma cevap taslağının kendiliğinden hazırlanması) isterseniz <a href="/hizmetler/n8n-otomasyon">otomasyon hizmetimizi</a> inceleyin.</p>
    `,
  },

  // ─── 5. YAPAY ZEKÂ İLE GOOGLE YORUMLARINA CEVAP ─────────────────────────
  {
    slug: 'yapay-zeka-ile-google-yorumlarina-cevap',
    coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80&fit=crop',
    title: 'Yapay Zekâ ile Google Yorumlarına Cevap Vermek: Örneklerle Rehber',
    excerpt:
      'Olumlu, olumsuz ve haksız Google yorumlarına yapay zekâ yardımıyla hızlı ve kişisel cevap vermek. Hazır komutlar, örnek cevaplar ve kaçınılması gereken hatalar.',
    category: 'SEO',
    categoryColor: 'emerald',
    emoji: '⭐',
    coverGradient: 'from-emerald-500/10 to-emerald-900/5',
    readTime: 5,
    date: TARIH,
    author: YAZAR,
    authorRole: 'Kurucu, Ramses Dijital',
    tags: ['Google Yorumları', 'Yapay Zekâ', 'Google İşletme Profili', 'Müşteri İlişkileri'],
    content: `
      <div class="callout">
        <span class="callout-title">Kısa cevap</span>
        <p>Yorumlara cevap vermek hem yeni müşteriye güven verir hem de profilinizin canlı olduğunu gösterir. Yapay zekâ cevap taslağını saniyeler içinde hazırlar; siz yalnızca okuyup kişiselleştirirsiniz. Ama her cevap birbirinin kopyası olmamalı ve müşteriye ait kişisel bilgi asla yazılmamalı.</p>
      </div>

      <h2>Yorum Türüne Göre Cevap Yaklaşımı</h2>
      <table>
        <thead><tr><th>Yorum</th><th>Cevapta olması gereken</th><th>Uzunluk</th></tr></thead>
        <tbody>
          <tr><td>Olumlu, detaylı</td><td>Teşekkür + bahsedilen detaya değinmek</td><td>2-3 cümle</td></tr>
          <tr><td>Sadece yıldız, metin yok</td><td>Kısa teşekkür</td><td>1 cümle</td></tr>
          <tr><td>Olumsuz ama haklı</td><td>Özür, sorumluluk, çözüm ve iletişim yolu</td><td>3-4 cümle</td></tr>
          <tr><td>Olumsuz ve haksız</td><td>Sakin açıklama, tartışmaya girmemek, iletişime davet</td><td>2-3 cümle</td></tr>
          <tr><td>Müşteriniz olmayan / sahte</td><td>Kibar not + Google'a bildirme</td><td>1-2 cümle</td></tr>
        </tbody>
      </table>

      <h2>Hazır Komutlar</h2>
      <blockquote><strong>Olumlu yorum:</strong> "İşletme sahibi olarak şu Google yorumuna 2-3 cümlelik, samimi bir teşekkür cevabı yaz: '[yorum]'. Müşterinin bahsettiği detaya değin, abartılı övgü ve emoji kullanma, her cümle farklı olsun."</blockquote>
      <blockquote><strong>Olumsuz yorum:</strong> "Şu olumsuz yoruma cevap yaz: '[yorum]'. Savunmaya geçme, özür dile, yaşanan sorunu kabul et ve telefon veya WhatsApp üzerinden görüşmeye davet et. Müşterinin adını ve sipariş detayını yazma. En fazla 4 cümle."</blockquote>
      <blockquote><strong>Haksız yorum:</strong> "Şu yorum bence haksız: '[yorum]'. Gerçek durum şu: [kısa açıklama]. Sakin, kibar, tartışmaya girmeyen ve diğer okuyanlara güven veren bir cevap yaz."</blockquote>

      <h2>Örnek: Aynı Yoruma Kötü ve İyi Cevap</h2>
      <p>Yorum: <em>"Randevu saatinde 40 dakika bekledim, kimse bilgi vermedi."</em></p>
      <table>
        <thead><tr><th>Kötü cevap</th><th>İyi cevap</th></tr></thead>
        <tbody>
          <tr><td>"O gün çok yoğunduk, anlayışınız için teşekkürler."</td><td>"Beklettiğimiz ve bilgi vermediğimiz için özür dileriz; haklısınız. Gecikme olduğunda artık bekleyen danışanlarımıza hemen bilgi veriyoruz. Yaşadığınızı dinlemek isteriz, 0xxx numaramızdan bize ulaşabilirsiniz."</td></tr>
        </tbody>
      </table>
      <p><em>Not: İyi cevaptaki "artık bilgi veriyoruz" gibi bir taahhüdü ancak gerçekten uyguluyorsanız yazın.</em></p>

      <h2>Kaçınılması Gereken 5 Hata</h2>
      <ul>
        <li><strong>Her yoruma aynı cevap:</strong> Kopyala-yapıştır cevaplar ilgisiz görünür.</li>
        <li><strong>Kişisel bilgi:</strong> Müşterinin adı soyadı, tedavisi, sipariş içeriği yazılmaz; özellikle sağlık sektöründe.</li>
        <li><strong>Tartışmak:</strong> Cevabı yorum sahibi değil, gelecekteki müşteriler okur.</li>
        <li><strong>Kontrolsüz yayın:</strong> Yapay zekâ olmayan bir şeyi vaat edebilir; okumadan yayınlamayın.</li>
        <li><strong>Yorum karşılığı hediye:</strong> Yorum için indirim veya hediye vermek Google kurallarına aykırıdır.</li>
      </ul>

      <h2>Sık Sorulan Sorular</h2>

      <h3>Yorumlara cevap vermek sıralamayı etkiler mi?</h3>
      <p>Google, yorumlara cevap vermenin müşterilere değer verdiğinizi gösterdiğini belirtir. Asıl etkisi yeni müşterinin güvenidir; cevaplanmış profil daha güvenilir görünür.</p>

      <h3>Eski yorumlara da cevap vermeli miyim?</h3>
      <p>Evet, özellikle cevapsız olumsuz yorumlara. Geç verilen kibar bir cevap, hiç cevap vermemekten iyidir.</p>

      <h3>Sonuç</h3>
      <p>Yapay zekâ ile yorum cevabı birkaç saniyelik iş; önemli olan her cevabın kişisel ve dürüst olması. Yorum sayınızı artırmak için <a href="/blog/google-yorumlari-nasil-artirilir">yorum rehberimize</a>, müşterilerinize gönderebileceğiniz yorum bağlantısı için <a href="/araclar/google-yorum-linki">ücretsiz aracımıza</a> göz atın.</p>
    `,
  },
]
