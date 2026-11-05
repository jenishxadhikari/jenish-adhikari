import Image from 'next/image'
import Link from 'next/link'

import { formatPostDate, type BlogPost } from '@/lib/blog-types'

import { Card, CardContent } from '@/components/ui/card'

export function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="border-accent grid grid-cols-1 border-t sm:grid-cols-2">
      {posts.map((post) => (
        <article key={post.slug} className="border-accent border-b sm:odd:border-r">
          <Link
            href={`/blogs/${post.slug}`}
            className="group focus-visible:ring-ring block h-full outline-none focus-visible:ring-2 focus-visible:ring-inset"
          >
            <Card className="group-hover:bg-muted/40 h-full gap-0 bg-transparent py-0 ring-0 transition-colors motion-reduce:transition-none">
              <div className="border-accent relative aspect-video overflow-hidden border-b">
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
                  <h2 className="decoration-primary text-xl leading-snug font-semibold tracking-tight decoration-wavy decoration-2 underline-offset-4 group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-foreground/60 text-sm leading-relaxed">{post.description}</p>
                </div>
                <div className="text-foreground/50 pt-2 text-[11px]">
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
