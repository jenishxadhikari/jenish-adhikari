import Link from 'next/link'

import { BLOGS } from '@/config/site'

import { BlogCard } from '@/components/blog-card'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'

export function BlogsSection() {
  return (
    <section>
      <MaxWidthWrapper className="border-accent border-x border-b py-3">
        <div className="space-y-2 py-3">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-2xl font-semibold tracking-tight">Blogs</h2>
            <Link href="/blogs" className="text-sm underline-offset-2 hover:underline">
              See all
            </Link>
          </div>
          <div className="flex flex-col gap-y-2 px-2">
            {BLOGS.map((item, index) => (
              <BlogCard
                key={index}
                href={item.href}
                title={item.title}
                publishedAt={item.publishedAt}
                timeToRead={item.timeToRead}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
