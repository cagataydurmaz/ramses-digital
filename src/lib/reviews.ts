// Google yorumları + diğer müşteri referansları — tek kaynak.
// Hem anasayfadaki kayan yorum şeridi hem de layout.tsx'teki
// AggregateRating/Review şeması bu diziyi kullanır.
// Aynı müşterinin hem Google yorumu hem site referansı olduğu durumlarda
// (Furkan Arıkan, Mert Anıl Güler) sadece Google yorumu tutuldu.
export interface CustomerReview {
  name: string
  subtitle: string
  rating: number
  text: string
  source: 'google' | 'site'
  date: string // ISO — schema.org Review datePublished için
}

export const reviews: CustomerReview[] = [
  {
    name: 'Furkan Arıkan',
    subtitle: 'Kurucu Avukat, Furkan Arıkan Hukuk Bürosu · Bir hafta önce',
    rating: 5,
    text: 'Harika bir işletme, tüm süreçlerde çok yardımcı olan bir ekibe sahipler, her şey için teşekkürler!',
    source: 'google',
    date: '2026-07-19',
  },
  {
    name: 'furkan tanır',
    subtitle: 'Bir hafta önce',
    rating: 5,
    text: 'İşletmemizin reklam faaliyetlerini başarıyla yürütüyorlar. Çağatay bey çok yardımcı oldu, ilgili ve işini titizlikle yapıyor.',
    source: 'google',
    date: '2026-07-19',
  },
  {
    name: 'Atalay Durmaz',
    subtitle: '2 ay önce',
    rating: 5,
    text: 'İşini titizlikle yapan, vizyoner bir ekip.',
    source: 'google',
    date: '2026-05-26',
  },
  {
    name: 'Mert Anıl Güler',
    subtitle: 'Kurucu Avukat, Mert Anıl Güler Hukuk Bürosu · 2 gün önce',
    rating: 5,
    text: "Harika ötesi. Aldığım hizmetten çok memnun kaldım. Ramses'le yollarımızın kesişmesi büyük şans oldu. Kesinlikle tavsiye ediyorum. Çağatay Bey'e ne istediğinizi anlatmanız yeter. Tekrar teşekkürler.",
    source: 'google',
    date: '2026-07-24',
  },
  {
    name: 'Nur Çelen',
    subtitle: '2 gün önce',
    rating: 5,
    text: 'Web sitemi ve reklam süreçlerimi profesyonel bir şekilde yönetti. Süreç boyunca her konuda hızlı geri dönüş aldı, isteklerimi dikkate aldı ve ortaya tam istediğim gibi bir çalışma çıktı. Emeğiniz ve ilginiz için çok teşekkür ederim.',
    source: 'google',
    date: '2026-07-24',
  },
  {
    name: 'Gamzeli Dermokozmetik',
    subtitle: 'E-Ticaret Ekibi',
    rating: 5,
    text: 'Ramses Digital, eczacı güvencesiyle sunduğumuz ürünleri doğru kitleye ulaştıran bir e-ticaret sitesi kurdu. Cilt analizi aracı sayesinde müşterilerimiz kendilerine en uygun ürünü kolayca buluyor.',
    source: 'site',
    date: '2026-04-15',
  },
]

export const aggregateRating = {
  ratingValue: (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
  reviewCount: reviews.length,
  bestRating: '5',
}
