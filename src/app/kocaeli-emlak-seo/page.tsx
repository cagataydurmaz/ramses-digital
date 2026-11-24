import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('kocaeli-emlak-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="kocaeli-emlak-seo" />
}
