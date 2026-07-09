import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function MeetFj() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] px-6 py-20 lg:py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Meet Your Guide
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold text-foreground lg:text-5xl">
            Hello, I&apos;m FJ
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            For over a decade I&apos;ve walked alongside people navigating stress, burnout, and
            life&apos;s quiet turning points. My work blends complementary wellness modalities into
            sessions that meet you exactly where you are.
          </p>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            I offer these sessions freely because I believe clarity, calm, and self-awareness belong
            to everyone—not just those who can pay for them.
          </p>

          <blockquote className="mt-8 border-l-2 border-gold pl-5">
            <p className="font-serif text-2xl leading-snug text-foreground">
              &ldquo;Move the energy, and life begins to move with you.&rdquo;
            </p>
          </blockquote>

          <a
            href="#about"
            className="group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-gold px-7 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
          >
            Read My Story
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={120}>
          <div className="relative overflow-hidden rounded-[28px] border border-divider shadow-[0_30px_80px_-36px_rgba(38,38,38,0.3)]">
            <Image
              src="/images/fj-about.png"
              alt="FJ sitting peacefully in a warm, sunlit room"
              width={900}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
