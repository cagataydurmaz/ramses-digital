import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('istanbul-avukat-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="istanbul-avukat-seo" />
}
