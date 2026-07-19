import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Terms of Service — Zen Living Now',
  description: 'Mock terms of service for Zen Living Now. Replace with final legal copy before launch.',
}

const SECTIONS = [
  {
    title: '1. Agreement',
    body: 'These Terms of Service are a placeholder draft for Zen Living Now. By using this website, booking a free session, or making a donation, you agree to these terms as currently published. Replace this document with final legal terms before treating it as binding.',
  },
  {
    title: '2. Our Services',
    body: 'Zen Living Now offers free, online holistic wellness sessions and related educational content. Sessions may include complementary modalities such as energy work, breathwork, coaching-style guidance, and other wellness practices described on the site. Services are informational and supportive in nature.',
  },
  {
    title: '3. Not Medical Advice',
    body: 'Zen Living Now does not provide medical, psychological, or licensed therapeutic diagnosis or treatment. Content and sessions are not a substitute for professional healthcare. Always consult a qualified provider for medical or mental-health concerns. Do not delay seeking care because of something you read or experienced here.',
  },
  {
    title: '4. Booking & Conduct',
    body: 'Free sessions may be booked through our scheduling partner. Please arrive on time, participate respectfully, and cancel or reschedule with reasonable notice when needed. We reserve the right to decline or end a session if conduct is inappropriate or unsafe.',
  },
  {
    title: '5. Donations',
    body: 'Sessions remain free. Donations are voluntary gifts that support keeping this work accessible. Unless otherwise stated by law or a registered charity status, donations are not tax-deductible. Payment processing is handled by third parties such as Stripe.',
  },
  {
    title: '6. Intellectual Property',
    body: 'Website content, branding, logos, and materials are owned by Zen Living Now or used with permission. You may not copy, redistribute, or commercialize site materials without prior written consent.',
  },
  {
    title: '7. Limitation of Liability',
    body: 'To the fullest extent permitted by law, Zen Living Now is not liable for indirect, incidental, or consequential damages arising from use of the website or participation in sessions. You use the services at your own discretion and risk.',
  },
  {
    title: '8. Changes',
    body: 'We may update these Terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised terms. This mock page will be updated with governing law and contact details.',
  },
]

export default function TermsPage() {
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
            Terms of Service
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
