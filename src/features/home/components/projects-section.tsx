import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { ProjectMetadata } from '@/features/projects/components/project-metadata'
import { PROJECTS } from '@/features/projects/data'

import { ContentPreviewCard } from './content-preview-card'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="home-projects"
      className="border-border min-w-0 scroll-mt-24 border-b lg:border-r lg:border-b-0"
    >
      <header className="border-border flex items-center justify-between gap-4 border-b px-5 py-4 sm:px-8">
        <h2 id="home-projects" className="text-2xl font-semibold tracking-tight">
          Projects
        </h2>
        <Button
          render={<Link href="/projects" />}
          nativeButton={false}
          variant="outline"
          size="sm"
          className="text-muted-foreground"
        >
          All projects
        </Button>
      </header>
      {PROJECTS.slice(0, 3).map((project) => (
        <ContentPreviewCard
          key={project.slug}
          href={`/projects/${project.slug}`}
          title={project.title}
          description={project.description}
          cover={project.cover}
          metadata={
            <ProjectMetadata
              year={project.year}
              status={project.status}
              languages={project.languages}
            />
          }
        />
      ))}
    </section>
  )
}
