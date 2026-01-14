import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface BlogCardProps {
  href: string
  title: string
  publishedAt: string
  timeToRead: string
}

export function BlogCard({ href, title, publishedAt, timeToRead }: BlogCardProps) {
  return (
    <Link href={href}>
      <Card className="group hover:ring-primary transition-colors">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className="text-muted-foreground group-hover:border-primary group-hover:text-foreground transition-all"
          >
            {publishedAt}
          </Badge>
          <Badge
            variant="outline"
            className="text-muted-foreground group-hover:border-primary group-hover:text-foreground transition-all"
          >
            {timeToRead} min read
          </Badge>
        </CardContent>
      </Card>
    </Link>
  )
}
