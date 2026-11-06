import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'

import { WORKS } from '@/features/work/data'

export function WorkSection() {
  return (
    <section aria-labelledby="home-experience">
      <MaxWidthWrapper className="border-border grid border-x border-b md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[320px_minmax(0,1fr)]">
        <header className="border-border flex flex-col items-start gap-3 border-b px-5 py-6 sm:px-8 md:border-r md:border-b-0">
          <h2 id="home-experience" className="text-2xl font-semibold tracking-tight">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
            Building software with a team, one feature at a time.
          </p>
          <Button
            render={<Link href="/work" />}
            nativeButton={false}
            variant="outline"
            size="sm"
            className="text-muted-foreground mt-2"
          >
            View work
          </Button>
        </header>
        <div className="divide-border divide-y">
          {WORKS.slice(0, 1).map((work) => (
            <div key={`${work.company}-${work.period}`} className="space-y-3 px-5 py-6 sm:px-8">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold tracking-tight">{work.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {work.company}
                    {work.employmentType && (
                      <span className="text-muted-foreground"> · {work.employmentType}</span>
                    )}
                  </p>
                </div>
                <p className="text-muted-foreground pt-1 text-xs">{work.period}</p>
              </div>
              <p className="text-muted-foreground text-xs">{work.location}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
