import { CalendarHeart, Video, Sun } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    icon: CalendarHeart,
    step: '01',
    title: 'Book',
    body: 'Choose a time that suits you and reserve your free 60-minute session in a few taps.',
  },
  {
    icon: Video,
    step: '02',
    title: 'Connect',
    body: 'Meet online from the comfort of your space. Share where you are and where you long to be.',
  },
  {
    icon: Sun,
    step: '03',
    title: 'Shift & Glow',
    body: 'Experience a personalized blend of modalities designed to move energy and restore clarity.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            The Journey
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold text-foreground lg:text-5xl">
            How it works
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Three gentle steps from where you are now to how it gets even better.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-divider md:block"
            aria-hidden
          />
          <ol className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 120} className="relative text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-divider bg-surface text-gold shadow-sm">
                  <step.icon className="size-7" strokeWidth={1.5} />
                </div>
                <p className="mt-5 font-serif text-sm font-semibold tracking-widest text-gold">
                  {step.step}
                </p>
                <h3 className="mt-1 font-serif text-2xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
