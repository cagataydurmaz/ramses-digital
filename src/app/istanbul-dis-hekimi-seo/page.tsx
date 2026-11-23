import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('istanbul-dis-hekimi-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="istanbul-dis-hekimi-seo" />
}
