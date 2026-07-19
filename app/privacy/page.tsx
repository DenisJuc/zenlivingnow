import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Zen Living Now',
  description: 'Mock privacy policy for Zen Living Now. Replace with final legal copy before launch.',
}

const SECTIONS = [
  {
    title: '1. Overview',
    body: 'This is a placeholder Privacy Policy for Zen Living Now. It describes, in draft form, how we may collect, use, and protect information when you visit our website, book a free session, subscribe to our newsletter, or make an optional donation. Replace this page with final legal language before relying on it publicly.',
  },
  {
    title: '2. Information We Collect',
    body: 'We may collect information you provide directly—such as your name, email address, booking details, and donation payment details processed by third parties (for example Stripe or Cal.com). We may also collect basic technical data like browser type, device information, and pages visited through analytics tools.',
  },
  {
    title: '3. How We Use Information',
    body: 'We use personal information to schedule and confirm sessions, send reminders and wellness updates you opt into, process voluntary donations, improve the website, and communicate about Zen Living Now services. We do not sell your personal information.',
  },
  {
    title: '4. Cookies & Analytics',
    body: 'Our site may use cookies or similar technologies (including Vercel Analytics) to understand traffic and improve performance. You can control cookies through your browser settings. Disabling cookies may affect some site features.',
  },
  {
    title: '5. Third-Party Services',
    body: 'Booking, payments, and email tools are provided by independent third parties. Their use of your information is governed by their own privacy policies. We encourage you to review those policies when you book, donate, or subscribe.',
  },
  {
    title: '6. Data Retention & Security',
    body: 'We retain information only as long as reasonably needed for the purposes described above, or as required by law. We take reasonable measures to protect your information, but no online system can be guaranteed fully secure.',
  },
  {
    title: '7. Your Choices',
    body: 'You may request access to, correction of, or deletion of personal information we hold about you, subject to applicable law. You may also unsubscribe from marketing emails at any time using the link in those messages.',
  },
  {
    title: '8. Contact',
    body: 'For privacy questions, contact Zen Living Now using the contact method listed on our website. This mock policy will be updated with a definitive contact email and jurisdiction details.',
  },
]

export default function PrivacyPage() {
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

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Legal</p>
          <h1 className="mt-3 font-serif text-4xl font-medium uppercase tracking-wide text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm italic text-muted-foreground">
            Placeholder page — last updated mock draft. Replace with attorney-reviewed content.
          </p>

          <div className="mt-12 space-y-10">
            {SECTIONS.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-xl font-medium uppercase tracking-wide text-foreground">
                  {section.title}
                </h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
