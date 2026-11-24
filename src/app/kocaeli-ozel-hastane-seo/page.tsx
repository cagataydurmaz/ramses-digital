import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('kocaeli-ozel-hastane-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="kocaeli-ozel-hastane-seo" />
}
