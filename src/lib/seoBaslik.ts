// Google'da kesilmemesi için başlığı ~60 karakterde tutar: önce "| Ramses Dijital",
// sığmazsa "| Ramses", o da sığmazsa yalnızca ana başlık.
export function seoBaslik(ana: string, sinir = 60) {
  for (const ek of [' | Ramses Dijital', ' | Ramses']) if ((ana + ek).length <= sinir) return ana + ek
  return ana
}

// Meta açıklamayı ~160 karakterde, mümkünse cümle sonunda keser (görünen metin değişmez).
export function seoAciklama(d: string, sinir = 160) {
  if (d.length <= sinir) return d
  let out = ''
  for (const p of d.split(/(?<=[.!?])\s+/)) {
    if ((out + ' ' + p).trim().length <= sinir) out = (out + ' ' + p).trim()
    else break
  }
  if (out.length >= 90) return out
  const s = d.slice(0, sinir - 3)
  return s.slice(0, s.lastIndexOf(' ')).replace(/[,;:–-]+$/, '') + '…'
}
