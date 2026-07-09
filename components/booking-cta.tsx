'use client'

import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import { Reveal } from '@/components/reveal'

const CAL_LINK = 'denis-jucan-tawgmj/free-60-minute-wellness-session'
const CAL_NAMESPACE = 'free-60-minute-wellness-session'

export function BookingCta() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

  return (
    <section id="booking" className="mx-auto max-w-[1280px] px-6 py-20 lg:py-28">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground lg:text-5xl">
            Ready to shift and glow?
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Your free 60-minute session is waiting. Choose a time below—no account needed.
          </p>
        </div>

        <div
          id="my-cal-inline-free-60-minute-wellness-session"
          className="mt-12 min-h-[580px] w-full overflow-auto rounded-3xl border border-divider bg-surface p-2 shadow-[0_24px_70px_-40px_rgba(38,38,38,0.2)] sm:p-4"
        >
          <Cal
            namespace={CAL_NAMESPACE}
            calLink={CAL_LINK}
            config={{
              layout: 'month_view',
              useSlotsViewOnSmallScreen: 'true',
            }}
            style={{ width: '100%', height: '100%', overflow: 'scroll' }}
          />
        </div>
      </Reveal>
    </section>
  )
}
