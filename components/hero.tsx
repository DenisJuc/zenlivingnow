import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Soft cream gradient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(120% 90% at 80% 10%, #f4efe8 0%, #faf8f4 55%, #faf8f4 100%)',
        }}
      />
      {/* Subtle animated glow */}
      <div
        className="animate-glow pointer-events-none absolute -right-20 top-24 -z-10 size-[520px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(200,169,106,0.28), transparent 70%)' }}
      />
      <div
        className="animate-glow pointer-events-none absolute -left-24 bottom-0 -z-10 size-[420px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(138,168,138,0.22), transparent 70%)',
          animationDelay: '2s',
        }}
      />

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div className="reveal max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-divider bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-sage" />
            Free · Online · Worldwide
          </span>

          <h1 className="mt-6 text-balance font-serif text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4rem]">
            Move the energy. Master your life.{' '}
            <span className="text-gold">Shift and Glow.</span>
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Free online holistic wellness sessions that weave together complementary modalities into
            one personalized experience—guiding you toward growth, emotional balance, and deeper
            self-awareness.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#booking"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gold px-7 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-md"
            >
              Book Your Free Session
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-gold px-7 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
            >
              Explore Services
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            60-minute sessions · No cost, ever · Booked in seconds
          </p>
        </div>

        {/* Right column — portrait */}
        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: '150ms' }}>
          <div className="relative overflow-hidden rounded-[28px] border border-divider bg-surface shadow-[0_30px_80px_-30px_rgba(38,38,38,0.25)]">
            <Image
              src="/images/fj-portrait.png"
              alt="FJ, holistic wellness practitioner and founder of Zen Living Now"
              width={720}
              height={860}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-divider bg-surface/90 px-5 py-4 shadow-lg backdrop-blur-sm sm:block">
            <p className="font-serif text-2xl font-semibold text-foreground">1000+</p>
            <p className="text-xs text-muted-foreground">sessions guided worldwide</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#value"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/70 transition-colors hover:text-foreground"
        aria-label="Scroll down"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </a>
    </section>
  )
}
