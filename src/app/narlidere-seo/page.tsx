import IlSeoSayfasi, { ilSeoMetadata } from '@/components/IlSeoSayfasi'
import { ilSeoBul } from '@/lib/ilSeo'

const v = ilSeoBul('narlidere')!
export const metadata = ilSeoMetadata(v)
export default function Page() {
  return <IlSeoSayfasi v={v} />
}
