import SektorSehirSayfasi, { sektorSehirMetadata } from '@/components/SektorSehirSayfasi'

export const metadata = sektorSehirMetadata('izmir-veteriner-seo')
export default function Page() {
  return <SektorSehirSayfasi slug="izmir-veteriner-seo" />
}
