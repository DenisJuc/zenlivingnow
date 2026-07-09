import { Reveal } from '@/components/reveal'

export function Newsletter() {
  return (
    <section id="resources" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Stay Connected
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold text-foreground lg:text-5xl">
            Receive a little glow
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Gentle reflections, wellness practices, and updates—delivered with care. No noise, ever.
          </p>

          <form
            className="mx-auto mt-9 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            aria-label="Newsletter signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="h-12 flex-1 rounded-[14px] border border-divider bg-surface px-5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/30"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-gold px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-hover"
            >
              Send Me the Glow
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
