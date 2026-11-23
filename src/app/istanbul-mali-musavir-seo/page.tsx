import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('istanbul-mali-musavir-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="istanbul-mali-musavir-seo" />
}
