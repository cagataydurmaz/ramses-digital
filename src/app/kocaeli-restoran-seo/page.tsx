import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('kocaeli-restoran-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="kocaeli-restoran-seo" />
}
