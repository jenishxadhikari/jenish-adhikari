import { Github01Icon, Linkedin02Icon, NewTwitterIcon } from '@hugeicons/core-free-icons'

export const GITHUB_USERNAME = 'jenishxadhikari'

export const SITE_INFO = {
  name: 'Jenish Adhikari',
  jobTitle: 'Backend Engineer',
  url: process.env.APP_URL || 'https://www.jenish-adhikari.com.np',
  ogImage: '/og-image.png',
  description: 'Backend engineer building APIs, database-backed services, and real-time systems.',
  keywords: ['portfolio', 'backend engineer', 'TypeScript', 'Node.js', 'PostgreSQL']
}

export const MAIN_NAV = [
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

export const SOCIALS = [
  {
    href: 'https://github.com/jenishxadhikari',
    icon: Github01Icon,
    title: 'GitHub',
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
    title: 'LinkedIn',
    username: '@jenishxadhikari'
  }
]
