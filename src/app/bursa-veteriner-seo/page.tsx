import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('bursa-veteriner-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="bursa-veteriner-seo" />
}
