export type BlogPostMetadata = {
  title: string
  description: string
  publishedAt: string
  readingTime: number
  cover: string
}

export type BlogPost = BlogPostMetadata & { slug: string }

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(`${date}T00:00:00Z`))
}
