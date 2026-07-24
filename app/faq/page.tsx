import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'FAQ — Zen Living Now',
  description: 'Mock frequently asked questions for Zen Living Now sessions and website.',
}

const FAQS = [
  {
    q: 'Are sessions really free?',
    a: 'Yes. Every 60-minute online session is offered at no cost. Donations are optional and never required.',
  },
  {
    q: 'How do I book?',
    a: 'Use the Book Free Session button to open the calendar, choose a time that works for you, and confirm with your name and email. No account is needed.',
  },
  {
    q: 'Where do sessions take place?',
    a: 'All sessions are online. You will receive a meeting link after booking so you can join from wherever you feel most at ease.',
  },
  {
    q: 'What should I prepare?',
    a: 'A quiet space, water, and an open intention are enough. Wear comfortable clothing and arrive a few minutes early if you can.',
  },
  {
    q: 'Is this medical or therapy advice?',
    a: 'No. Zen Living Now offers complementary wellness support and is not a substitute for licensed medical or mental-health care.',
  },
  {
    q: 'Can I cancel or reschedule?',
    a: 'Yes—please update your booking through the confirmation email whenever possible so the time can open for someone else.',
  },
]

export default function FaqPage() {
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
            FAQ
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Mock answers for common questions. Edit or expand this list anytime.
          </p>

          <div className="mt-12 space-y-4">
            {FAQS.map((item) => (
              <div
                key={item.q}
                className="rounded-3xl border border-divider bg-surface px-6 py-5 sm:px-8 sm:py-6"
              >
                <h2 className="font-serif text-xl font-medium text-foreground">{item.q}</h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
