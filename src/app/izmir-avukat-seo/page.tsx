import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('izmir-avukat-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="izmir-avukat-seo" />
}
