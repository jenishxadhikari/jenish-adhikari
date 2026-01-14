import { IconSvgElement } from '@hugeicons/react'

export type NavItem = {
  title: string
  href: string
}

export type Social = {
  href: string
  icon: IconSvgElement
  title: string
  username: string
}

export type Project = {
  href: string
  githubLink: string
  title: string
  description: string
  tags: string[]
}

export type Blog = {
  href: string
  title: string
  publishedAt: string
  timeToRead: string
}
