import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function BookingCta() {
  return (
    <section id="booking" className="mx-auto max-w-[1280px] px-6 py-20 lg:py-28">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[32px] px-8 py-16 text-center lg:px-16 lg:py-24"
          style={{
            background: 'linear-gradient(135deg, #f4efe8 0%, #faf8f4 100%)',
          }}
        >
          <div
            className="animate-glow pointer-events-none absolute left-1/2 top-0 size-[420px] -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(200,169,106,0.22), transparent 70%)' }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground lg:text-6xl">
              Ready to shift and glow?
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Your free 60-minute session is waiting. Take the first gentle step toward clarity,
              calm, and a life that moves with you.
            </p>
            <a
              href="#booking"
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-2xl bg-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-lg"
            >
              Book Your Free Session
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
