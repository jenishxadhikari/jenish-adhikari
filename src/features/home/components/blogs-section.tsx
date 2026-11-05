import Link from 'next/link'

import { getPosts } from '@/lib/blog'
import { formatPostDate } from '@/lib/blog-types'

import { Button } from '@/components/ui/button'

import { ContentPreviewCard } from './content-preview-card'

export async function BlogsSection() {
  const posts = (await getPosts()).slice(0, 3)

  return (
    <section id="blogs" aria-labelledby="home-blogs" className="min-w-0 scroll-mt-24">
      <header className="border-accent flex items-center justify-between gap-4 border-b px-5 py-4 sm:px-8">
        <h2 id="home-blogs" className="text-2xl font-semibold tracking-tight">
          From the blog
        </h2>
        <Button
          render={<Link href="/blogs" />}
          nativeButton={false}
          variant="outline"
          size="sm"
          className="text-foreground/70 rounded-lg"
        >
          All posts
        </Button>
      </header>
      {posts.map((post) => (
        <ContentPreviewCard
          key={post.slug}
          href={`/blogs/${post.slug}`}
          title={post.title}
          description={post.description}
          cover={post.cover}
          metadata={`${formatPostDate(post.publishedAt)} · ${post.readingTime} min read`}
        />
      ))}
    </section>
  )
}
