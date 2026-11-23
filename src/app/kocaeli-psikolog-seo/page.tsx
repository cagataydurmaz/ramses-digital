import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('kocaeli-psikolog-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="kocaeli-psikolog-seo" />
}
