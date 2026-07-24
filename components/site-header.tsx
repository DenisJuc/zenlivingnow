'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const RESOURCE_LINKS = [
  { label: 'Blogs', href: '/blogs' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Certifications', href: '/certifications' },
]

const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Resources', href: '/#resources', children: RESOURCE_LINKS },
  { label: 'Donation', href: '/#donation' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const light = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) setResourcesOpen(false)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        light
          ? 'bg-transparent py-4'
          : 'border-b border-divider bg-background/90 py-2.5 shadow-[0_1px_20px_rgba(38,38,38,0.04)] backdrop-blur-md',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-6">
        <a
          href="/#home"
          className="flex min-w-0 shrink-0 items-center gap-3.5"
          aria-label="Zen Living Now home"
        >
          <span
            className={cn(
              'relative flex size-14 shrink-0 items-center justify-center rounded-full sm:size-16',
              'ring-2 ring-gold/80 shadow-[0_0_24px_rgba(200,169,106,0.55)]',
              light ? 'bg-black/50' : 'bg-foreground/90',
            )}
          >
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={72}
              height={72}
              className="size-full rounded-full object-cover brightness-125 contrast-110"
              priority
              aria-hidden
            />
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span
              className={cn(
                'font-serif text-base font-medium tracking-[0.08em] uppercase sm:text-lg',
                light ? 'text-white' : 'text-foreground',
              )}
            >
              Zen Living Now
            </span>
            <span className="mt-1 font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-gold sm:text-[11px]">
              Shift and Glow
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex lg:gap-9">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <li key={link.label} className="group relative">
                <button
                  type="button"
                  className={cn(
                    'inline-flex items-center gap-1.5 font-sans text-sm font-medium tracking-[0.1em] uppercase transition-colors',
                    light
                      ? 'text-white/90 hover:text-white'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                  aria-haspopup="menu"
                >
                  {link.label}
                  <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul
                    role="menu"
                    className="rounded-2xl border border-divider bg-surface py-2 shadow-[0_20px_50px_-24px_rgba(38,38,38,0.35)]"
                  >
                    {link.children.map((child) => (
                      <li key={child.href} role="none">
                        <a
                          role="menuitem"
                          href={child.href}
                          className="block px-4 py-2.5 font-sans text-sm font-medium tracking-[0.08em] uppercase text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'font-sans text-sm font-medium tracking-[0.1em] uppercase transition-colors',
                    light
                      ? 'text-white/90 hover:text-white'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ),
          )}
        </ul>

        <div className="hidden shrink-0 md:block">
          <a
            href="/#booking"
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-gold px-6 font-sans text-xs font-semibold tracking-[0.1em] uppercase text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-md"
          >
            Book Free Session
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            'flex size-11 shrink-0 items-center justify-center rounded-xl md:hidden',
            light ? 'text-white' : 'text-foreground',
          )}
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </nav>

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
            <div className="flex items-center gap-3">
              <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground/90 ring-2 ring-gold/70">
                <Image
                  src="/images/logo-mark.png"
                  alt=""
                  width={40}
                  height={40}
                  className="size-full rounded-full object-cover brightness-125"
                  aria-hidden
                />
              </span>
              <span className="font-serif text-base font-medium tracking-wide uppercase">
                Menu
              </span>
            </div>
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
            {NAV_LINKS.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => setResourcesOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 font-sans text-sm font-medium tracking-[0.1em] uppercase text-foreground transition-colors hover:bg-muted"
                    aria-expanded={resourcesOpen}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        'size-4 transition-transform duration-200',
                        resourcesOpen && 'rotate-180',
                      )}
                    />
                  </button>
                  <ul
                    className={cn(
                      'overflow-hidden transition-all duration-200',
                      resourcesOpen ? 'mt-1 max-h-48 opacity-100' : 'max-h-0 opacity-0',
                    )}
                  >
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <a
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-xl px-5 py-2.5 font-sans text-sm font-medium tracking-[0.08em] uppercase text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 font-sans text-sm font-medium tracking-[0.1em] uppercase text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
          <a
            href="/#booking"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex h-12 items-center justify-center rounded-2xl bg-gold px-6 font-sans text-xs font-semibold tracking-[0.1em] uppercase text-primary-foreground transition-colors hover:bg-gold-hover"
          >
            Book Free Session
          </a>
        </div>
      </div>
    </header>
  )
}
