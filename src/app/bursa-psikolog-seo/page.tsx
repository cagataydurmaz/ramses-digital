import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('bursa-psikolog-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="bursa-psikolog-seo" />
}
