import { Github01Icon, Linkedin02Icon, NewTwitterIcon } from '@hugeicons/core-free-icons'

import { Blog, NavItem, Project, Social } from '@/types'

export const GITHUB_USERNAME = 'jenishxadhikari'

export const SITE_INFO = {
  name: 'Jenish Adhikari',
  jobTitle: 'Backend Developer',
  url: process.env.APP_URL || 'https://www.jenish-adhikari.com.np',
  ogImage: '/og-image.png',
  description: 'Backend developer building stuff.',
  keywords: ['portfolio', 'backend', 'developer']
}

export const MAIN_NAV: NavItem[] = [
  {
    title: 'Projects',
    href: '/projects'
  },
  {
    title: 'Work',
    href: '/work'
  },
  {
    title: 'Blogs',
    href: '/blogs'
  }
]

export const SOCIALS: Social[] = [
  {
    href: 'https://github.com/jenishxadhikari',
    icon: Github01Icon,
    title: 'Github',
    username: '@jenishxadhikari'
  },
  {
    href: 'https://x.com/jenishxadhikari',
    icon: NewTwitterIcon,
    title: 'X',
    username: '@jenishxadhikari'
  },
  {
    href: 'https://www.linkedin.com/in/jenishxadhikari/',
    icon: Linkedin02Icon,
    title: 'Linked In',
    username: '@jenishxadhikari'
  }
]

export const PROJECTS: Project[] = [
  {
    href: '',
    githubLink: 'https://github.com/jenishxadhikari/chatx',
    title: 'ChatX',
    description:
      'A real-time chat application with instant messaging, built using WebSockets for low-latency communication and a scalable backend architecture.',
    tags: ['TypeScript', 'Node.js', 'React', 'WebSocket', 'MongoDB']
  },
  {
    href: '',
    githubLink: 'https://github.com/jenishxadhikari/zaplink',
    title: 'Zaplink',
    description:
      'A full-featured URL shortener system supporting custom short links, click analytics, and link management, designed with a RESTful API and secure authentication.',
    tags: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'REST API']
  },
  {
    href: '',
    githubLink: 'https://github.com/jenishxadhikari/neptune',
    title: 'Neptune',
    description:
      'A song recognition and recommendation system inspired by Shazam, utilizing audio fingerprinting, FFT-based signal processing, and efficient hashing to identify songs and suggest similar tracks.',
    tags: ['TypeScript', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL']
  }
]

export const BLOGS: Blog[] = [
  {
    href: 'https://localhost:3000/blogs/rate-limiting',
    title: 'Rate Limiting and Token Bucket Algorithm',
    publishedAt: 'November 29, 2025',
    timeToRead: '11'
  },
  {
    href: 'https://localhost:3000/blogs/interpreter',
    title: "i built my own interpreter and it's kinda cool",
    publishedAt: 'November 29, 2025',
    timeToRead: '11'
  },
  {
    href: 'https://localhost:3000/blogs/rate-limiting',
    title: 'Rate Limiting and Token Bucket Algorithm',
    publishedAt: 'November 29, 2025',
    timeToRead: '11'
  },
  {
    href: 'https://localhost:3000/blogs/interpreter',
    title: "i built my own interpreter and it's kinda cool",
    publishedAt: 'November 29, 2025',
    timeToRead: '11'
  }
]
