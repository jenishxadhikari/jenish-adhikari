export type BlogPostMetadata = {
  title: string
  description: string
  publishedAt: string
  readingTime: number
  cover: string
}

export type BlogPost = BlogPostMetadata & { slug: string }
