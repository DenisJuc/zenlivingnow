import Image from 'next/image'
import { Camera, Send, Play, Mail } from 'lucide-react'

const FOOTER_NAV = [
  {
    heading: 'Explore',
    links: [
      { label: 'Home', href: '/#home' },
      { label: 'About', href: '/#about' },
      { label: 'Services', href: '/#services' },
      { label: 'Preparation & FAQ', href: '/faq' },
      { label: 'Blogs', href: '/blogs' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Resources', href: '/#resources' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Book a Session', href: '/#booking' },
      { label: 'Donation', href: '/#donation' },
      { label: 'Newsletter', href: '/#resources' },
      { label: 'Contact', href: '/#booking' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-divider bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-foreground/90 ring-2 ring-gold/70 shadow-[0_0_18px_rgba(200,169,106,0.35)]">
                <Image
                  src="/images/logo-mark.png"
                  alt="Zen Living Now logo"
                  width={48}
                  height={48}
                  className="size-full rounded-full object-cover brightness-125"
                />
              </span>
              <span className="font-serif text-xl font-medium tracking-[0.08em] uppercase text-foreground">
                Zen Living Now
              </span>
            </div>
            <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
              Move the energy. Master your life. Shift and Glow. Free online holistic wellness,
              worldwide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Camera, label: 'Instagram' },
                { icon: Send, label: 'Telegram' },
                { icon: Play, label: 'YouTube' },
                { icon: Mail, label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-divider bg-surface text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <social.icon className="size-4" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_NAV.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-divider pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Zen Living Now. All rights reserved.
          </p>
          <p className="font-serif text-base italic text-gold">
            How does it get any better than this?
          </p>
        </div>
      </div>
    </footer>
  )
}
