import Link from 'next/link'

import { WORKS } from '@/config/site'

import { Button } from '@/components/ui/button'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'

export function WorkSection() {
  return (
    <section aria-labelledby="home-experience">
      <MaxWidthWrapper className="border-accent grid border-x border-b md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[320px_minmax(0,1fr)]">
        <header className="border-accent flex flex-col items-start gap-3 border-b px-5 py-6 sm:px-8 md:border-r md:border-b-0">
          <h2 id="home-experience" className="text-2xl font-semibold tracking-tight">
            Experience
          </h2>
          <p className="text-foreground/60 max-w-xs text-sm leading-relaxed">
            Building software with a team, one feature at a time.
          </p>
          <Button
            render={<Link href="/work" />}
            nativeButton={false}
            variant="outline"
            size="sm"
            className="text-foreground/70 mt-2 rounded-lg"
          >
            View work
          </Button>
        </header>
        <div className="divide-accent divide-y">
          {WORKS.slice(0, 1).map((work) => (
            <div key={`${work.company}-${work.period}`} className="space-y-3 px-5 py-6 sm:px-8">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold tracking-tight">{work.title}</h3>
                  <p className="text-foreground/70 text-sm">
                    {work.company}
                    {work.employmentType && (
                      <span className="text-foreground/50"> · {work.employmentType}</span>
                    )}
                  </p>
                </div>
                <p className="text-foreground/50 pt-1 text-xs">{work.period}</p>
              </div>
              <p className="text-foreground/50 text-xs">{work.location}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
