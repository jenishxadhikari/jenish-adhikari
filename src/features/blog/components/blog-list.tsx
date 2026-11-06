import Image from 'next/image'
import Link from 'next/link'

import { Card, CardContent } from '@/components/ui/card'

import { formatPostDate } from '@/features/blog/lib/format-post-date'
import type { BlogPost } from '@/features/blog/types'

export function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="border-border grid flex-1 grid-cols-1 border-t sm:grid-cols-2">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="border-border border-b last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
        >
          <Link
            href={`/blog/${post.slug}`}
            className="group focus-visible:ring-ring block h-full outline-none focus-visible:ring-2 focus-visible:ring-inset"
          >
            <Card className="group-hover:bg-muted/40 h-full gap-0 bg-transparent py-0 ring-0 transition-colors motion-reduce:transition-none">
              <div className="border-border relative aspect-video overflow-hidden border-b">
                <Image
                  src={post.cover}
                  alt=""
                  fill
                  sizes="(max-width: 639px) 100vw, 384px"
                  className="object-cover"
                />
              </div>
              <CardContent className="flex flex-1 flex-col items-start gap-4 p-5 sm:p-6">
                <div className="flex-1 space-y-2">
                  <h2 className="decoration-primary text-xl leading-snug font-semibold tracking-tight decoration-wavy decoration-2 underline-offset-6 [text-decoration-skip-ink:none] group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.description}
                  </p>
                </div>
                <div className="text-muted-foreground pt-2 text-[11px]">
                  <span>
                    <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                    <span className="mx-2" aria-hidden="true">
                      ·
                    </span>
                    {post.readingTime} min read
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </article>
      ))}
    </div>
  )
}
