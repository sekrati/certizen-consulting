import { notFound } from 'next/navigation'
import { getSecteurBySlug, secteurs } from '@/lib/secteurs'
import SecteurPageClient from './SecteurPageClient'

export function generateStaticParams() {
  return secteurs.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const secteur = getSecteurBySlug(params.slug)
  if (!secteur) return {}
  return {
    title: `${secteur.title} | CERTIZEN Consulting`,
    description: secteur.description,
  }
}

export default function SecteurPage({ params }: { params: { slug: string } }) {
  const secteur = getSecteurBySlug(params.slug)
  if (!secteur) notFound()
  return <SecteurPageClient secteur={secteur} />
}
