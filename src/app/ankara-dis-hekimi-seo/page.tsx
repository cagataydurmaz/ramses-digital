import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('ankara-dis-hekimi-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="ankara-dis-hekimi-seo" />
}
