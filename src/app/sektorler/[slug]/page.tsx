import { notFound } from 'next/navigation'
import SektorSayfasi, { sektorMetadata } from '@/components/SektorSayfasi'
import { sektorler } from '@/lib/sektorler'

export const dynamicParams = false

export function generateStaticParams() {
  return sektorler.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const v = sektorler.find((s) => s.slug === params.slug)
  return v ? sektorMetadata(v) : {}
}

export default function Page({ params }: { params: { slug: string } }) {
  const v = sektorler.find((s) => s.slug === params.slug)
  if (!v) notFound()
  return <SektorSayfasi v={v} />
}
