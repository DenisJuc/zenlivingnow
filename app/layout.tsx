import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Poppins } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zen Living Now — Free Online Holistic Wellness Sessions',
  description:
    'Move the energy. Master your life. Shift and Glow. Zen Living Now offers free, personalized online holistic wellness sessions with FJ, available worldwide.',
  generator: 'v0.app',
  openGraph: {
    title: 'Zen Living Now — Shift and Glow',
    description:
      'Free, personalized online holistic wellness sessions focused on personal growth, emotional wellbeing, and self-awareness.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf8f4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${oswald.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
