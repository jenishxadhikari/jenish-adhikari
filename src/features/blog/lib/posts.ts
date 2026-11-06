import { readdir } from 'node:fs/promises'
import path from 'node:path'
import { cache } from 'react'

import type { BlogPost } from '@/features/blog/types'

export const getPosts = cache(async (): Promise<BlogPost[]> => {
  const files = await readdir(path.join(process.cwd(), 'src/content/blog'))
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.slice(0, -4)
        const { post } = await import(`@/content/blog/${slug}.mdx`)
        return { ...post, slug } as BlogPost
      })
  )

  return posts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
})
