'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

const TESTIMONIALS = [
  {
    quote:
      'I arrived feeling completely stuck and left with a lightness I had not felt in years. FJ has a rare gift for holding space.',
    name: 'Amara T.',
    location: 'Lisbon, Portugal',
  },
  {
    quote:
      'The session was calm, professional, and deeply personal. It felt like someone finally understood what I needed.',
    name: 'Daniel R.',
    location: 'Toronto, Canada',
  },
  {
    quote:
      'I was skeptical at first, but the experience was grounding and genuine. My mind has been quieter ever since.',
    name: 'Priya S.',
    location: 'Melbourne, Australia',
  },
  {
    quote:
      'Free, thoughtful, and life-affirming. I have recommended Zen Living Now to everyone I love.',
    name: 'Marcus L.',
    location: 'Berlin, Germany',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = (dir: number) =>
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length)

  useEffect(() => {
    if (paused) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          The Glow Report
        </span>
        <h2 className="mt-4 text-balance font-serif text-4xl font-semibold text-foreground lg:text-5xl">
          Stories of transformation
        </h2>

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="w-full shrink-0 px-2">
                  <div className="mx-auto flex flex-col items-center rounded-3xl border border-divider bg-surface p-10 shadow-[0_20px_60px_-36px_rgba(38,38,38,0.3)]">
                    <Quote className="size-8 text-gold/50" />
                    <blockquote className="mt-6 text-pretty font-serif text-2xl leading-snug text-foreground lg:text-[1.75rem]">
                      {`\u201C${t.quote}\u201D`}
                    </blockquote>
                    <figcaption className="mt-8">
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.location}</p>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex size-11 items-center justify-center rounded-full border border-divider bg-surface text-foreground transition-colors hover:bg-gold hover:text-primary-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-5" />
            </button>

            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Testimonial navigation"
            >
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-selected={i === index}
                  role="tab"
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    i === index ? 'w-6 bg-gold' : 'w-2 bg-divider hover:bg-muted-foreground/40',
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              className="flex size-11 items-center justify-center rounded-full border border-divider bg-surface text-foreground transition-colors hover:bg-gold hover:text-primary-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
