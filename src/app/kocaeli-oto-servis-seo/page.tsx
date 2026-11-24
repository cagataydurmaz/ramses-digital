import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('kocaeli-oto-servis-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="kocaeli-oto-servis-seo" />
}
