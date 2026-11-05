declare module '*.mdx' {
  import type { ComponentType } from 'react'
  import type { MDXProps } from 'mdx/types'
  import type { BlogPostMetadata } from '@/lib/blog-types'

  export const post: BlogPostMetadata
  const MDXContent: ComponentType<MDXProps>
  export default MDXContent
}
