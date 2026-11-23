import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('kocaeli-veteriner-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="kocaeli-veteriner-seo" />
}
