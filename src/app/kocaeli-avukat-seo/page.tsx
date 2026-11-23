import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('kocaeli-avukat-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="kocaeli-avukat-seo" />
}
