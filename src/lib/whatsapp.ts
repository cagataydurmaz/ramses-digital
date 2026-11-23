// Tüm WhatsApp mesajları tek biçimde: kısa selam, *kalın* konu başlığı, maddeler ve gelinen sayfa.
// Böylece gelen mesajda müşterinin ne istediği ve hangi sayfadan geldiği ilk bakışta görülür.
export const WHATSAPP_NO = '905355601936'

export function waMesaj(konu: string, maddeler: (string | null | false | undefined)[] = [], kapanis?: string) {
  const sayfa = typeof window !== 'undefined' ? window.location.pathname : ''
  const satirlar = [
    'Merhaba Ramses Dijital,',
    '',
    `*${konu}*`,
    ...maddeler.filter(Boolean).map((m) => `• ${m}`),
    kapanis ? `\n${kapanis}` : null,
    sayfa && sayfa !== '/' ? `\n(Sayfa: ramsesdigital.com${sayfa})` : null,
  ].filter((s) => s !== null)
  return satirlar.join('\n')
}

export function waLink(metin: string) {
  return `https://wa.me/${WHATSAPP_NO}?text=${encodeURIComponent(metin)}`
}
