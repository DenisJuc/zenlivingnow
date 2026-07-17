import { Heart, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function DonationPreview() {
  return (
    <section id="donation" className="mx-auto max-w-[1280px] px-6 py-20 lg:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] border border-divider bg-surface px-8 py-14 text-center shadow-[0_24px_70px_-40px_rgba(38,38,38,0.3)] lg:px-16 lg:py-20">
          <div
            className="animate-glow pointer-events-none absolute -right-16 -top-16 size-64 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(199,140,114,0.25), transparent 70%)' }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-terracotta/12 text-terracotta">
              <Heart className="size-7" strokeWidth={1.6} />
            </div>
            <h2 className="mt-6 text-balance font-serif text-4xl font-semibold text-foreground lg:text-5xl">
              Support the mission
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Sessions will always be free. If you have felt the shift and wish to give back, your
              gift helps keep this work open and accessible to people around the world—no pressure,
              only gratitude.
            </p>
            <a
              href="https://donate.stripe.com/6oU28t2nufeT2pj4l02ZO00"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gold px-7 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-md"
            >
              Make a Donation
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
