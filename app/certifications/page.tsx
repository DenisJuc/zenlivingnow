import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Award } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Certifications — Zen Living Now',
  description: 'Mock certifications and training credentials for Zen Living Now.',
}

const CERTS = [
  {
    title: 'Reiki Practitioner',
    detail: 'Placeholder credential — replace with your actual level, lineage, and year.',
  },
  {
    title: 'Access Consciousness Tools',
    detail: 'Placeholder training note. Add classes, facilitators, and dates when ready.',
  },
  {
    title: 'Breathwork Facilitation',
    detail: 'Mock certification entry for guided breathwork and nervous-system support.',
  },
  {
    title: 'Holistic Lifestyle Coaching',
    detail: 'Placeholder for coaching or wellness mentoring credentials.',
  },
]

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-28 pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Resources
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium uppercase tracking-wide text-foreground sm:text-5xl">
            Certifications
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Mock credentials for layout only. Swap in your real training and certificates later.
          </p>

          <ul className="mt-12 space-y-4">
            {CERTS.map((cert) => (
              <li
                key={cert.title}
                className="flex gap-4 rounded-3xl border border-divider bg-surface p-6 sm:p-7"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                  <Award className="size-6" strokeWidth={1.5} />
                </span>
                <div>
                  <h2 className="font-serif text-xl font-medium text-foreground">{cert.title}</h2>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                    {cert.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
