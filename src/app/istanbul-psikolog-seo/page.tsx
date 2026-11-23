import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('istanbul-psikolog-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="istanbul-psikolog-seo" />
}
