import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ValueProposition } from '@/components/value-proposition'
import { HowItWorks } from '@/components/how-it-works'
import { FrequencyAssessment } from '@/components/frequency-assessment'
import { FeaturedServices } from '@/components/featured-services'
import { MeetFj } from '@/components/meet-fj'
import { Testimonials } from '@/components/testimonials'
import { DonationPreview } from '@/components/donation-preview'
import { BookingCta } from '@/components/booking-cta'
import { Newsletter } from '@/components/newsletter'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ValueProposition />
        <HowItWorks />
        <FrequencyAssessment />
        <FeaturedServices />
        <MeetFj />
        <Testimonials />
        <DonationPreview />
        <BookingCta />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  )
}
