import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ServiceIcon } from '@/lib/service-icons'
import { getAllServices, getServiceBySlug } from '@/lib/services'

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

/** Pre-renders all service detail pages at build time. */
export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }))
}

/** Sets page title and description from service data. */
export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: `${service.title} — Zen Living Now`,
    description: service.summary,
    openGraph: {
      title: `${service.title} — Zen Living Now`,
      description: service.summary,
      type: 'website',
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-28 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-4" />
            All services
          </Link>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            <article>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <ServiceIcon icon={service.icon} className="size-7" />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {service.tagline}
              </p>
              <h1 className="mt-3 text-balance font-serif text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-5 text-pretty text-xl leading-relaxed text-muted-foreground">
                {service.summary}
              </p>

              <div className="mt-10 space-y-5">
                {service.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-pretty text-lg leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              <section className="mt-14">
                <h2 className="font-serif text-2xl font-semibold text-foreground">What to expect</h2>
                <ul className="mt-6 space-y-4">
                  {service.whatToExpect.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-14">
                <h2 className="font-serif text-2xl font-semibold text-foreground">Benefits</h2>
                <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="rounded-2xl border border-divider bg-surface px-5 py-4 text-sm leading-relaxed text-muted-foreground"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>
            </article>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-divider bg-secondary p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Experience this modality
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Every session is free, personalized, and online. {service.title} may be woven
                  into your visit alongside other practices that serve you.
                </p>
                <a
                  href="/#booking"
                  className="group mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gold text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-md"
                >
                  Book Your Free Session
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <div className="mt-6 rounded-3xl border border-divider bg-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Explore more
                </p>
                <ul className="mt-4 space-y-2">
                  {getAllServices()
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 4)
                    .map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/services/${related.slug}`}
                          className="text-sm font-medium text-foreground transition-colors hover:text-gold"
                        >
                          {related.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
