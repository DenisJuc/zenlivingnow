import { Gift, Globe, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const VALUES = [
  {
    icon: Gift,
    title: 'Always Free',
    body: 'Every 60-minute session is offered at no cost. Wellness should never carry a price tag.',
  },
  {
    icon: Globe,
    title: 'Online & Worldwide',
    body: 'Connect from anywhere. Sessions happen remotely, wherever you feel most at ease.',
  },
  {
    icon: Sparkles,
    title: 'Deeply Personalized',
    body: 'Multiple modalities blended into one experience, shaped entirely around you.',
  },
]

export function ValueProposition() {
  return (
    <section id="value" className="mx-auto max-w-[1280px] px-6 py-20 lg:py-28">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {VALUES.map((value, i) => (
          <Reveal key={value.title} delay={i * 100}>
            <article className="group h-full rounded-3xl border border-divider bg-surface p-8 shadow-[0_10px_40px_-24px_rgba(38,38,38,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(200,169,106,0.4)]">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-sage/12 text-sage transition-colors duration-300 group-hover:bg-sage group-hover:text-primary-foreground">
                <value.icon className="size-6" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{value.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
