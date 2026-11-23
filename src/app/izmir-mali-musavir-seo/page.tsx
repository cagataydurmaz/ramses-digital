import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('izmir-mali-musavir-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="izmir-mali-musavir-seo" />
}
