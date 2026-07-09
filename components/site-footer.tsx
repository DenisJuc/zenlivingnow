import { Camera, Send, Play, Mail } from 'lucide-react'

const FOOTER_NAV = [
  {
    heading: 'Explore',
    links: ['Home', 'About', 'Services', 'Preparation & FAQ', 'Resources'],
  },
  {
    heading: 'Connect',
    links: ['Book a Session', 'Donation', 'Newsletter', 'Contact'],
  },
  {
    heading: 'Legal',
    links: ['Privacy Policy', 'Terms of Service'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-divider bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-gold/15">
                <span className="size-3 rounded-full bg-gold" />
              </span>
              <span className="font-serif text-xl font-semibold text-foreground">
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
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-gold"
                    >
                      {link}
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
