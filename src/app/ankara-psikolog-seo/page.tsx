import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('ankara-psikolog-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="ankara-psikolog-seo" />
}
