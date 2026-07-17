import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'About FJ — Zen Living Now',
  description:
    'Meet FJ, founder of Zen Living Now. A mock about page — replace this copy with the full story when ready.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-28 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <Link
            href="/#about"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>

          <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <article>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                About
              </span>
              <h1 className="mt-4 text-balance font-serif text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">
                Hello, I&apos;m FJ
              </h1>
              <p className="mt-4 text-lg italic text-muted-foreground">
                Placeholder story page — swap this content when you&apos;re ready.
              </p>

              <div className="mt-10 space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                <p>
                  For over a decade I&apos;ve walked alongside people navigating stress, burnout,
                  and life&apos;s quiet turning points. My work blends complementary wellness
                  modalities into sessions that meet you exactly where you are.
                </p>
                <p>
                  I offer these sessions freely because I believe clarity, calm, and self-awareness
                  belong to everyone—not just those who can pay for them.
                </p>
                <p>
                  This is mock about-page copy. Add your fuller biography, journey, training, and
                  philosophy here later. Keep the layout; replace the words.
                </p>
              </div>

              <blockquote className="mt-10 border-l-2 border-gold pl-5">
                <p className="font-serif text-2xl leading-snug text-foreground">
                  &ldquo;Move the energy, and life begins to move with you.&rdquo;
                </p>
              </blockquote>

              <a
                href="/#booking"
                className="group mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gold px-7 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-md"
              >
                Book Your Free Session
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>

            <div className="relative overflow-hidden rounded-[28px] border border-divider shadow-[0_30px_80px_-36px_rgba(38,38,38,0.3)]">
              <Image
                src="/images/fj-about.png"
                alt="FJ sitting peacefully in a warm, sunlit room"
                width={900}
                height={720}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
