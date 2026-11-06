import type { Metadata } from 'next'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'

import { ProjectCard } from '@/features/projects/components/project-card'
import { PROJECTS } from '@/features/projects/data'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of things I have built, from real-time chat to music recognition.',
  alternates: { canonical: '/projects' }
}

export default function Projects() {
  return (
    <section className="flex flex-1 flex-col">
      <MaxWidthWrapper className="border-border flex flex-1 flex-col border-x">
        <header className="flex flex-col items-center gap-5 px-5 py-10 text-center sm:py-12">
          <h1 className="font-mono text-5xl leading-[1.02] tracking-tighter sm:text-7xl">
            Projects
          </h1>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed text-balance">
            A few things I’ve built, from real-time chat to finding a song from a few seconds of
            audio.
          </p>
        </header>
        <div className="border-border grid flex-1 grid-cols-1 border-t sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.githubLink}
              className="border-border border-b last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
            >
              <ProjectCard {...project} />
            </article>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
