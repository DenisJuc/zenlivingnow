'use client'

import { useState } from 'react'
import { Battery, Flame, Sun, ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

type FrequencyKey = 'static' | 'spark' | 'glow'

const FREQUENCIES: Record<
  FrequencyKey,
  {
    icon: typeof Battery
    label: string
    mood: string
    description: string
    recommended: string[]
    accent: string
  }
> = {
  static: {
    icon: Battery,
    label: 'Static',
    mood: 'Feeling stuck or depleted',
    description:
      'Energy feels low, heavy, or blocked. You are ready to release what no longer serves you.',
    recommended: ['Reiki', 'Lymphatic Support', 'Breathwork'],
    accent: 'terracotta',
  },
  spark: {
    icon: Flame,
    label: 'Spark',
    mood: 'Curious and awakening',
    description:
      'Something is stirring. You feel a pull toward change and want gentle momentum forward.',
    recommended: ['Access Consciousness', 'Lifestyle Coaching', 'Iridology'],
    accent: 'gold',
  },
  glow: {
    icon: Sun,
    label: 'Glow',
    mood: 'Expansive and ready',
    description:
      'You feel aligned and open. You are ready to elevate, expand, and step fully into your power.',
    recommended: ['Akashic Records', 'Star Magic Healing', 'Access Consciousness'],
    accent: 'sage',
  },
}

const ORDER: FrequencyKey[] = ['static', 'spark', 'glow']

export function FrequencyAssessment() {
  const [selected, setSelected] = useState<FrequencyKey | null>(null)
  const active = selected ? FREQUENCIES[selected] : null

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          Find Your Starting Point
        </span>
        <h2 className="mt-4 text-balance font-serif text-4xl font-semibold text-foreground lg:text-5xl">
          Where is your energy today?
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Choose the frequency that feels closest to home. We&apos;ll suggest where to begin.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {ORDER.map((key) => {
          const freq = FREQUENCIES[key]
          const isSelected = selected === key
          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelected(key)}
              aria-pressed={isSelected}
              className={cn(
                'group rounded-3xl border p-8 text-left transition-all duration-300',
                isSelected
                  ? 'border-transparent bg-surface shadow-[0_24px_60px_-28px_rgba(200,169,106,0.5)] ring-2 ring-gold'
                  : 'border-divider bg-surface hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(38,38,38,0.3)]',
              )}
            >
              <div
                className={cn(
                  'flex size-14 items-center justify-center rounded-2xl transition-colors duration-300',
                  freq.accent === 'terracotta' && 'bg-terracotta/12 text-terracotta',
                  freq.accent === 'gold' && 'bg-gold/12 text-gold',
                  freq.accent === 'sage' && 'bg-sage/12 text-sage',
                )}
              >
                <freq.icon className="size-7" strokeWidth={1.5} />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <h3 className="font-serif text-2xl font-semibold text-foreground">{freq.label}</h3>
                {isSelected && (
                  <span className="flex size-6 items-center justify-center rounded-full bg-gold text-primary-foreground">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{freq.mood}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {freq.description}
              </p>
            </button>
          )
        })}
      </div>

      {/* Recommendation reveal */}
      <div
        className={cn(
          'grid transition-all duration-500 ease-out',
          active ? 'mt-6 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          {active && (
            <div className="rounded-3xl border border-divider bg-secondary p-8 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Because you feel{' '}
                <span className="font-semibold text-foreground">{active.label.toLowerCase()}</span>,
                we suggest starting with:
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                {active.recommended.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-gold/40 bg-surface px-5 py-2 text-sm font-medium text-foreground"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <a
                href="#booking"
                className="group mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-gold px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-hover"
              >
                Book this journey
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
