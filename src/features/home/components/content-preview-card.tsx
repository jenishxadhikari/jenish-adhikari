import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Card, CardContent } from '@/components/ui/card'

type ContentPreviewCardProps = {
  href: string
  title: string
  description: string
  cover: string
  metadata?: ReactNode
}

export function ContentPreviewCard({
  href,
  title,
  description,
  cover,
  metadata
}: ContentPreviewCardProps) {
  return (
    <article className="border-border border-b last:border-b-0">
      <Link
        href={href}
        className="group focus-visible:ring-ring block outline-none focus-visible:ring-2 focus-visible:ring-inset"
      >
        <Card className="group-hover:bg-muted/40 min-h-36 flex-row items-center gap-4 bg-transparent p-5 ring-0 transition-colors motion-reduce:transition-none sm:gap-5 sm:px-8">
          <div className="border-border relative aspect-square w-20 shrink-0 overflow-hidden rounded-md border sm:aspect-[4/3] sm:w-28">
            <Image
              src={cover}
              alt=""
              fill
              sizes="(max-width: 639px) 80px, 112px"
              className="object-cover"
            />
          </div>
          <CardContent className="min-w-0 flex-1 space-y-1.5 p-0">
            <h3 className="decoration-primary text-base leading-snug font-semibold tracking-tight decoration-wavy decoration-2 underline-offset-6 [text-decoration-skip-ink:none] group-hover:underline">
              {title}
            </h3>
            <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
              {description}
            </p>
            {metadata && (
              <div className="text-muted-foreground pt-1 text-[10px] leading-relaxed">
                {metadata}
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </article>
  )
}
