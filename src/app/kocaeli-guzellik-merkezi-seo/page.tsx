import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('kocaeli-guzellik-merkezi-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="kocaeli-guzellik-merkezi-seo" />
}
