import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('izmir-psikolog-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="izmir-psikolog-seo" />
}
