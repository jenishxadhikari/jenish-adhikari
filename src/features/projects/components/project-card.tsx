import Image from 'next/image'
import Link from 'next/link'

import { LinkSquare02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import type { Project } from '@/features/projects/types'

import { ProjectMetadata } from './project-metadata'

export function ProjectCard({
  slug,
  href,
  title,
  description,
  cover,
  year,
  status,
  languages
}: Project) {
  return (
    <Card className="group hover:bg-muted/40 h-full gap-0 bg-transparent py-0 ring-0 transition-colors motion-reduce:transition-none">
      <Link
        href={`/projects/${slug}`}
        aria-label={`Read about ${title}`}
        className="border-border focus-visible:ring-ring relative block aspect-video overflow-hidden border-b outline-none focus-visible:ring-2 focus-visible:ring-inset"
      >
        <Image
          src={cover}
          alt=""
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1152px) 50vw, 576px"
          className="object-cover"
        />
      </Link>
      <CardContent className="flex flex-1 flex-col items-start gap-4 p-5 sm:p-6">
        <div className="flex-1 space-y-2">
          <h2 className="decoration-primary text-xl leading-snug font-semibold tracking-tight decoration-wavy decoration-2 underline-offset-6 [text-decoration-skip-ink:none] group-hover:underline">
            <Link
              href={`/projects/${slug}`}
              className="focus-visible:outline-ring rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {title}
            </Link>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        <ProjectMetadata year={year} status={status} languages={languages} />
        {href && (
          <div className="flex flex-wrap gap-2 pt-2">
            <Button
              render={<Link href={href} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              variant="outline"
              size="sm"
              aria-label={`Open ${title} live site`}
              className="text-muted-foreground gap-2"
            >
              <HugeiconsIcon icon={LinkSquare02Icon} aria-hidden="true" />
              Visit site
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
