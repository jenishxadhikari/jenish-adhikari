import Link from 'next/link'

import { Github01Icon, LinkSquare02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

interface ProjectCardProps {
  href: string
  githubLink: string
  title: string
  description: string
  tags: string[]
}

export function ProjectCard({ href, githubLink, title, description, tags }: ProjectCardProps) {
  return (
    <Card className="group hover:ring-primary transition-colors">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-muted-foreground group-hover:text-foreground tracking-wide">
          {description}
        </CardDescription>
        <CardAction className="flex items-center gap-2">
          <Link href={githubLink} target="_blank">
            <HugeiconsIcon icon={Github01Icon} className="size-6 transition-all hover:scale-110" />
          </Link>
          {href && (
            <Link href={href} target="_blank">
              <HugeiconsIcon
                icon={LinkSquare02Icon}
                className="size-6 transition-all hover:scale-110"
              />
            </Link>
          )}
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-2">
        {tags.map((tag, index) => (
          <Badge
            variant="outline"
            key={index}
            className="text-muted-foreground group-hover:border-primary group-hover:text-foreground transition-all"
          >
            {tag}
          </Badge>
        ))}
      </CardContent>
    </Card>
  )
}
