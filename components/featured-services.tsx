import {
  BookOpen,
  HandHeart,
  Stars,
  Infinity as InfinityIcon,
  Wind,
  Eye,
  Compass,
  Droplets,
  ArrowRight,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const SERVICES = [
  {
    icon: BookOpen,
    title: 'Akashic Records',
    summary: 'Access the soul-level insights that illuminate your path and patterns.',
  },
  {
    icon: HandHeart,
    title: 'Reiki',
    summary: 'Gentle energy work to release tension and restore natural balance.',
  },
  {
    icon: Stars,
    title: 'Star Magic Healing',
    summary: 'High-frequency healing that works with light and cosmic energy.',
  },
  {
    icon: InfinityIcon,
    title: 'Access Consciousness',
    summary: 'Powerful tools and questions that unlock ease and possibility.',
  },
  {
    icon: Wind,
    title: 'Breathwork',
    summary: 'Guided breathing to move stuck energy and quiet a busy mind.',
  },
  {
    icon: Eye,
    title: 'Iridology',
    summary: 'A reflective look at wellbeing through the story held in the eyes.',
  },
  {
    icon: Compass,
    title: 'Lifestyle Coaching',
    summary: 'Grounded guidance to align daily choices with your intentions.',
  },
  {
    icon: Droplets,
    title: 'Lymphatic Support',
    summary: 'Supportive practices that encourage flow, release, and renewal.',
  },
]

export function FeaturedServices() {
  return (
    <section id="services" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Modalities
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold text-foreground lg:text-5xl">
            Featured services
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Each session blends the practices that serve you most. Explore the modalities woven into
            your personalized experience.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 90}>
              <article className="group flex h-full flex-col rounded-3xl border border-divider bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(200,169,106,0.45)]">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-primary-foreground">
                  <service.icon className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                  Learn More
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
