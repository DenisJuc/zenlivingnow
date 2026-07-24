import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Blogs — Zen Living Now',
  description: 'Mock blog listing for Zen Living Now. Replace with real articles when ready.',
}

const POSTS = [
  {
    title: 'How does it get any better than this?',
    excerpt:
      'A gentle reflection on choosing curiosity over struggle—and how small energetic shifts open new possibilities.',
    date: 'Coming soon',
  },
  {
    title: 'Preparing for your first free session',
    excerpt:
      'What to expect, how to set a soft intention, and simple ways to arrive present for your online visit.',
    date: 'Coming soon',
  },
  {
    title: 'Breath, stillness, and the art of letting go',
    excerpt:
      'Placeholder post about breathwork and nervous-system calm. Swap this for your real writing later.',
    date: 'Coming soon',
  },
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-28 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>

          <div className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Resources</p>
            <h1 className="mt-3 font-serif text-4xl font-medium uppercase tracking-wide text-foreground sm:text-5xl">
              Blogs
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Mock articles for now—replace these cards with your real posts whenever you&apos;re
              ready.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5">
            {POSTS.map((post) => (
              <article
                key={post.title}
                className="rounded-3xl border border-divider bg-surface p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-30px_rgba(200,169,106,0.45)]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">
                  {post.date}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-medium text-foreground">{post.title}</h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                  Read more
                  <ArrowRight className="size-4" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
