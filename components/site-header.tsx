'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Resources', href: '/#resources' },
  { label: 'Donation', href: '/#donation' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-divider py-3 shadow-[0_1px_20px_rgba(38,38,38,0.04)]'
          : 'bg-transparent py-5',
      )}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6">
        <a href="/#home" className="flex items-center gap-2" aria-label="Zen Living Now home">
          <span className="flex size-9 items-center justify-center rounded-full bg-gold/15">
            <span className="size-3 rounded-full bg-gold" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
              Zen Living Now
            </span>
            <span className="mt-1 font-serif text-sm font-medium italic tracking-wide text-gold">
              Shift and Glow
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="/#booking"
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-gold px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-md"
          >
            Book Free Session
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex size-10 items-center justify-center rounded-xl text-foreground md:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </nav>

      {/* Mobile slide-in drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 md:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            'absolute inset-0 bg-foreground/30 backdrop-blur-sm transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            'absolute right-0 top-0 flex h-full w-80 max-w-[85%] flex-col bg-background p-6 shadow-xl transition-transform duration-300',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-lg font-semibold">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex size-10 items-center justify-center rounded-xl text-foreground"
              aria-label="Close menu"
            >
              <X className="size-6" />
            </button>
          </div>
          <ul className="mt-8 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#booking"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex h-12 items-center justify-center rounded-2xl bg-gold px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-hover"
          >
            Book Free Session
          </a>
        </div>
      </div>
    </header>
  )
}
