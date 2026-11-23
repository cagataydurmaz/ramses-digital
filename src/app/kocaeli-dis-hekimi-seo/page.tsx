import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('kocaeli-dis-hekimi-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="kocaeli-dis-hekimi-seo" />
}
