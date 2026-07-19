import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden md:h-screen md:min-h-screen"
    >
      <Image
        src="/images/astral-hero.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center brightness-125 contrast-105 saturate-110"
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 py-28 text-center md:max-w-4xl md:py-32">
        <h1 className="text-balance font-serif text-[2.35rem] font-medium uppercase leading-[1.15] tracking-[0.06em] text-white sm:text-5xl md:text-6xl lg:text-[4rem]">
          Move the energy. Master your life.{' '}
          <span className="text-gold">Shift and Glow.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty font-sans text-base font-light leading-relaxed text-white/90 sm:text-lg md:mt-8 md:text-xl">
          Free online holistic wellness sessions that weave together complementary modalities into
          one personalized experience—guiding you toward growth, emotional balance, and deeper
          self-awareness.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10">
          <a
            href="#booking"
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gold px-7 font-sans text-sm font-semibold tracking-[0.08em] uppercase text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-md sm:w-auto"
          >
            Book Your Free Session
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="inline-flex h-12 w-full items-center justify-center rounded-2xl border border-white/50 bg-white/15 px-7 font-sans text-sm font-semibold tracking-[0.08em] uppercase text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold hover:text-primary-foreground sm:w-auto"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  )
}
