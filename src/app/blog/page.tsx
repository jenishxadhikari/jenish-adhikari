import type { Metadata } from 'next'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'

import { BlogList } from '@/features/blog/components/blog-list'
import { getPosts } from '@/features/blog/lib/posts'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes on building for the web, understanding the internals, and learning by doing.',
  alternates: { canonical: '/blogs' }
}

export default function Blogs() {
  const posts = getPosts()

  return (
    <section className="flex flex-1 flex-col">
      <MaxWidthWrapper className="border-border flex flex-1 flex-col border-x">
        <header className="flex flex-col items-center gap-5 px-5 py-10 text-center sm:py-12">
          <h1 className="font-mono text-5xl leading-[1.02] tracking-tighter sm:text-7xl">
            The dev blog
          </h1>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed text-balance">
            Notes on building for the web, understanding the internals, and learning by doing.
          </p>
        </header>
        <BlogList posts={posts} />
      </MaxWidthWrapper>
    </section>
  )
}
