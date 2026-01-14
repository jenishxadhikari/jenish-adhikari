import { PROJECTS } from '@/config/site'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { ProjectCard } from '@/components/project-card'

export default function Projects() {
  return (
    <section className="flex flex-1 flex-col">
      <MaxWidthWrapper className="border-accent flex-1 border-x py-6">
        <div className="space-y-4">
          <h1 className="px-2 text-3xl font-semibold tracking-tight">Projects</h1>
          <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2">
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
