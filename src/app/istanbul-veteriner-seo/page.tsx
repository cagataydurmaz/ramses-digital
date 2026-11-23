import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('istanbul-veteriner-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="istanbul-veteriner-seo" />
}
