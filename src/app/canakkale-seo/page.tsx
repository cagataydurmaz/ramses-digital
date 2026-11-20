import IlSeoSayfasi, { ilSeoMetadata } from '@/components/IlSeoSayfasi'
import { ilSeoBul } from '@/lib/ilSeo'

const v = ilSeoBul('canakkale')!
export const metadata = ilSeoMetadata(v)
export default function Page() {
  return <IlSeoSayfasi v={v} />
}
