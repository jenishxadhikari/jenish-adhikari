import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface WorkCardProps {
  title: string
  company: string
  period: string
  location: string
  technologies: string[]
  points?: string[]
}

export function WorkCard({
  title,
  company,
  period,
  location,
  technologies,
  points
}: WorkCardProps) {
  return (
    <Card className="group hover:ring-primary transition-colors">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-base">{company}</CardDescription>
        <CardDescription className="text-muted-foreground space-x-2 text-xs">
          <span>{period}</span> <span>·</span> <span>{location}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-2">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="text-muted-foreground group-hover:border-primary group-hover:text-foreground transition-all"
          >
            {tech}
          </Badge>
        ))}
        {points && (
          <ul className="mt-2 space-y-2">
            {points.map((point, index) => (
              <div key={index} className="flex items-start space-x-2">
                <span>•</span>
                <li className="text-muted-foreground text-sm">{point}</li>
              </div>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
