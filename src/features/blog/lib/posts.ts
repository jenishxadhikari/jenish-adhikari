import { POSTS } from '../data'

export function getPosts() {
  return [...POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}
