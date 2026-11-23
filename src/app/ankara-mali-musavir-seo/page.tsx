import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('ankara-mali-musavir-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="ankara-mali-musavir-seo" />
}
