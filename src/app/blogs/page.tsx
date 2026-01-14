// import { BLOGS } from '@/config/site'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'

// import { BlogCard } from '@/components/blog-card'

export default function Blogs() {
  return (
    <section className="flex flex-1 flex-col">
      {/* <MaxWidthWrapper className="border-x-1 flex-1 border-accent py-6">
        <div className='space-y-4'>
          <h1 className="px-2 text-3xl font-semibold tracking-tight">Blogs</h1>
          <div className='flex flex-col gap-y-4 px-4'>
            {
              BLOGS.map((item, index) => (
                <BlogCard
                  key={index}
                  href={item.href}
                  title={item.title}
                  publishedAt={item.publishedAt}
                  timeToRead={item.timeToRead}
                />
              ))
            }
          </div>
        </div>
      </MaxWidthWrapper> */}
      <MaxWidthWrapper className="border-accent flex-1 border-x py-6 text-center">
        <p>Work in progress.</p>
      </MaxWidthWrapper>
    </section>
  )
}
