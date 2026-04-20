import Link from 'next/link'

import { WORKS } from '@/config/site'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { WorkCard } from '@/components/work-card'

export function WorkSection() {
  return (
    <section>
      <MaxWidthWrapper className="border-accent border-x border-b py-3">
        <div className="space-y-2 py-3">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-2xl font-semibold tracking-tight">Work</h2>
            <Link href="/work" className="text-sm underline-offset-2 hover:underline">
              See all
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-2 px-2">
            {WORKS.map((item, index) => (
              <WorkCard
                key={index}
                title={item.title}
                company={item.company}
                period={item.period}
                location={item.location}
                technologies={item.technologies}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
