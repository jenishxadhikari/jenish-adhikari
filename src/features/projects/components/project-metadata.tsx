import { Badge } from '@/components/ui/badge'

import type { Project } from '@/features/projects/types'

type ProjectMetadataProps = Pick<Project, 'year' | 'status'> & Partial<Pick<Project, 'languages'>>

export function ProjectMetadata({ year, status, languages = [] }: ProjectMetadataProps) {
  return (
    <div
      className="text-muted-foreground flex flex-wrap items-center gap-2 text-[11px]"
      aria-label="Project details"
    >
      <time dateTime={String(year)} className="mr-1">
        {year}
      </time>
      {status === 'In progress' && (
        <Badge
          variant="outline"
          className="border-primary/40 bg-primary/10 text-foreground/80 h-auto rounded-md px-1.5 py-0.5 text-[10px]"
        >
          In progress
        </Badge>
      )}
      {languages.map((language) => (
        <Badge
          key={language}
          variant="outline"
          className="text-muted-foreground h-auto rounded-md px-1.5 py-0.5 text-[10px]"
        >
          {language}
        </Badge>
      ))}
    </div>
  )
}
