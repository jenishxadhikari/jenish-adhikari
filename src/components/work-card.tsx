import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface WorkCardProps {
  title: string
  company: string
  employmentType?: string
  period: string
  location: string
  technologies: string[]
  points?: string[]
}

export function WorkCard({
  title,
  company,
  employmentType,
  period,
  location,
  technologies,
  points
}: WorkCardProps) {
  return (
    <Card className="grid gap-0 bg-transparent py-0 ring-0 md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[320px_minmax(0,1fr)]">
      <CardHeader className="border-accent flex flex-col gap-3 border-b px-5 py-5 sm:px-8 md:border-r md:border-b-0 md:py-6">
        <p className="text-sm font-medium">{period}</p>
        <p className="text-foreground/50 text-xs leading-relaxed">{location}</p>
      </CardHeader>
      <CardContent className="min-w-0 space-y-7 px-5 py-6 sm:px-8">
        <header className="space-y-2">
          <h2 className="text-xl leading-snug font-semibold tracking-tight sm:text-2xl">{title}</h2>
          <p className="text-foreground/60 text-sm leading-relaxed">
            {company}
            {employmentType && <span className="text-foreground/50"> · {employmentType}</span>}
          </p>
        </header>
        {points && points.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium">What I worked on</h3>
            <ul className="text-foreground/65 marker:text-primary max-w-2xl list-disc space-y-3 pl-4 text-sm leading-relaxed">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        )}
        {technologies.length > 0 && (
          <div className="border-accent space-y-2 border-t pt-6">
            <h3 className="text-sm font-medium">Tools I used</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <Badge key={technology} variant="outline" className="text-foreground/70 rounded-md">
                  {technology}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
