import type { Metadata } from 'next'

import { WORKS } from '@/config/site'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { WorkCard } from '@/components/work-card'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Experience building web applications and shipping features with a team.',
  alternates: { canonical: '/work' }
}

export default function Work() {
  return (
    <section className="flex flex-1 flex-col">
      <MaxWidthWrapper className="border-accent flex-1 border-x">
        <header className="flex flex-col items-center gap-5 px-5 py-10 text-center sm:py-12">
          <h1 className="font-mono text-5xl leading-[1.02] tracking-tighter sm:text-7xl">Work</h1>
          <p className="text-foreground/60 max-w-md text-base leading-relaxed text-balance">
            Experience building web applications, working through the details, and shipping with a
            team.
          </p>
        </header>
        <div className="border-accent border-t">
          {WORKS.map((work) => (
            <article
              key={`${work.company}-${work.period}`}
              className="border-accent border-b last:border-b-0"
            >
              <WorkCard {...work} />
            </article>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
