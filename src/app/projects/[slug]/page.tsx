import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ArrowLeft01Icon, Github01Icon, LinkSquare02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { PROJECTS } from '@/config/site'

import { Button } from '@/components/ui/button'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { ProjectCard } from '@/components/project-card'
import { ProjectMetadata } from '@/components/project-metadata'

import { TableOfContents } from '@/features/blog/components/table-of-contents'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((project) => project.slug === slug)
  if (!project) notFound()

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      type: 'article',
      title: project.title,
      description: project.description,
      url: `/projects/${slug}`
    },
    twitter: { card: 'summary', title: project.title, description: project.description }
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = PROJECTS.find((project) => project.slug === slug)
  if (!project) notFound()
  const { default: Content } = await import(`@/content/projects/${project.slug}.mdx`)
  const relatedProjects = PROJECTS.filter((item) => item.slug !== slug).slice(0, 2)

  return (
    <MaxWidthWrapper className="border-accent flex-1 border-x">
      <article>
        <header className="border-accent mx-auto flex max-w-3xl flex-col items-center gap-5 border-b px-5 pt-8 pb-6 text-center sm:px-8 sm:pt-12 sm:pb-8">
          <Button
            render={<Link href="/projects" />}
            nativeButton={false}
            variant="outline"
            size="sm"
            className="mb-1 gap-2 rounded-lg"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} aria-hidden="true" />
            Back to projects
          </Button>
          <h1 className="font-mono text-3xl leading-[1.02] tracking-tighter text-balance sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-foreground/60 max-w-2xl text-base leading-relaxed text-balance sm:text-lg">
            {project.description}
          </p>
          <div className="flex justify-center">
            <ProjectMetadata
              year={project.year}
              status={project.status}
              languages={project.languages}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              render={<Link href={project.githubLink} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              variant="outline"
              size="sm"
              className="text-foreground/70 gap-2 rounded-lg"
            >
              <HugeiconsIcon icon={Github01Icon} aria-hidden="true" />
              View source
            </Button>
            {project.href && (
              <Button
                render={<Link href={project.href} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                variant="outline"
                size="sm"
                className="text-foreground/70 gap-2 rounded-lg"
              >
                <HugeiconsIcon icon={LinkSquare02Icon} aria-hidden="true" />
                Visit site
              </Button>
            )}
          </div>
        </header>
        <div className="grid items-start gap-8 px-5 py-4 sm:px-8 sm:py-8 md:grid-cols-[minmax(0,1fr)_180px] lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-12">
          <TableOfContents key={project.slug} />
          <div id="article-content" className="blog-prose min-w-0 md:order-1">
            <div className="border-accent relative aspect-video overflow-hidden rounded-lg border">
              <Image
                src={project.cover}
                alt=""
                fill
                priority
                sizes="(max-width: 767px) 100vw, (max-width: 1152px) 70vw, 800px"
                className="object-cover"
              />
            </div>
            <Content />
          </div>
        </div>
      </article>
      {relatedProjects.length > 0 && (
        <section aria-labelledby="more-projects" className="border-accent mt-8 border-t">
          <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
            <h2 id="more-projects" className="text-xl font-semibold tracking-tight">
              More projects
            </h2>
            <Button
              render={<Link href="/projects" />}
              nativeButton={false}
              variant="outline"
              size="sm"
              className="text-foreground/70 rounded-lg"
            >
              All projects
            </Button>
          </div>
          <div className="border-accent grid grid-cols-1 border-t sm:grid-cols-2">
            {relatedProjects.map((item) => (
              <article key={item.slug} className="border-accent border-b sm:odd:border-r">
                <ProjectCard {...item} />
              </article>
            ))}
          </div>
        </section>
      )}
    </MaxWidthWrapper>
  )
}
