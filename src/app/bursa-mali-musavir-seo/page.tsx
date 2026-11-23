import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('bursa-mali-musavir-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="bursa-mali-musavir-seo" />
}
