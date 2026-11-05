import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ArrowLeft01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { SITE_INFO } from '@/config/site'

import { getPosts } from '@/lib/blog'
import { formatPostDate } from '@/lib/blog-types'

import { Button } from '@/components/ui/button'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'

import { BlogList } from '@/features/blog/components/blog-list'
import { TableOfContents } from '@/features/blog/components/table-of-contents'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return (await getPosts()).map(({ slug }) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = (await getPosts()).find((post) => post.slug === slug)
  if (!post) notFound()

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      authors: [SITE_INFO.name],
      url: `/blogs/${slug}`
    },
    twitter: { card: 'summary', title: post.title, description: post.description }
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const posts = await getPosts()
  const post = posts.find((post) => post.slug === slug)
  if (!post) notFound()
  const { default: Content } = await import(`@/content/blog/${post.slug}.mdx`)
  const relatedPosts = posts.filter((item) => item.slug !== slug).slice(0, 2)

  return (
    <MaxWidthWrapper className="border-accent flex-1 border-x">
      <article>
        <header className="border-accent mx-auto flex max-w-3xl flex-col items-center gap-5 border-b px-5 pt-8 pb-6 text-center sm:px-8 sm:pt-12 sm:pb-8">
          <Button
            render={<Link href="/blogs" />}
            nativeButton={false}
            variant="outline"
            size="sm"
            className="mb-1 gap-2 rounded-lg"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} aria-hidden="true" />
            Back to blog
          </Button>
          <h1 className="font-mono text-3xl leading-[1.02] tracking-tighter text-balance sm:text-5xl">
            {post.title}
          </h1>
          <p className="text-foreground/60 max-w-2xl text-base leading-relaxed text-balance sm:text-lg">
            {post.description}
          </p>
          <div className="text-foreground/55 flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs">
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </header>
        <div className="grid items-start gap-8 px-5 py-4 sm:px-8 sm:py-8 md:grid-cols-[minmax(0,1fr)_180px] lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-12">
          <TableOfContents key={post.slug} />
          <div id="article-content" className="blog-prose min-w-0 md:order-1">
            <Content />
          </div>
        </div>
      </article>
      {relatedPosts.length > 0 && (
        <section aria-labelledby="related-posts" className="border-accent mt-8 border-t">
          <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
            <h2 id="related-posts" className="text-xl font-semibold tracking-tight">
              More to read
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
          </div>
          <BlogList posts={relatedPosts} />
        </section>
      )}
    </MaxWidthWrapper>
  )
}
