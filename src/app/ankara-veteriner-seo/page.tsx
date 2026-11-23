import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('ankara-veteriner-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="ankara-veteriner-seo" />
}
