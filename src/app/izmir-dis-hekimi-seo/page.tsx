import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('izmir-dis-hekimi-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="izmir-dis-hekimi-seo" />
}
