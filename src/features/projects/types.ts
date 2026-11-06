export type Project = {
  year: number
  status: 'In progress' | 'Completed'
  languages: string[]
  slug: string
  cover: string
  href?: string
  githubLink: string
  title: string
  description: string
  tags: string[]
}
