import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('bursa-dis-hekimi-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="bursa-dis-hekimi-seo" />
}
