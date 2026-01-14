import Link from 'next/link'

import { PROJECTS } from '@/config/site'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { ProjectCard } from '@/components/project-card'

export function ProjectsSection() {
  return (
    <section>
      <MaxWidthWrapper className="border-accent border-x border-b py-3">
        <div className="space-y-2 py-3">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <Link href="/projects" className="text-sm underline-offset-2 hover:underline">
              See all
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-2 px-2 md:grid-cols-2">
            {PROJECTS.map((item, index) => (
              <ProjectCard
                key={index}
                href={item.href}
                githubLink={item.githubLink}
                title={item.title}
                description={item.description}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
