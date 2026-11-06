import type { BlogPost } from './types'

export const POSTS: BlogPost[] = [
  {
    slug: 'api-gateway',
    title: 'I built a api gateway, and it’s kinda cool',
    description:
      'A centralized entry point that receives client requests and routes them to appropriate backend services.',
    publishedAt: '2026-11-28',
    readingTime: 10,
    cover: '/blog/api-gateway.svg'
  }
]
