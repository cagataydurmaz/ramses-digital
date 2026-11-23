import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('ankara-avukat-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="ankara-avukat-seo" />
}
