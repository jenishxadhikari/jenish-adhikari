import type { Project } from './types'

export const PROJECTS: Project[] = [
  {
    slug: 'chatx',
    href: '',
    githubLink: 'https://github.com/jenishxadhikari/chatx',
    title: 'ChatX',
    year: 2025,
    status: 'In progress',
    languages: ['TypeScript'],
    cover: '/projects/chatx.svg',
    description:
      'A real-time chat application with instant messaging, built using WebSockets for low-latency communication and a scalable backend architecture.',
    tags: ['TypeScript', 'Node.js', 'React', 'WebSocket', 'MongoDB']
  },
  {
    slug: 'zaplink',
    href: '',
    githubLink: 'https://github.com/jenishxadhikari/zaplink',
    title: 'Zaplink',
    year: 2025,
    status: 'Completed',
    languages: ['TypeScript'],
    cover: '/projects/zaplink.svg',
    description:
      'A full-featured URL shortener system supporting custom short links, click analytics, and link management, designed with a RESTful API and secure authentication.',
    tags: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'REST API']
  },
  {
    slug: 'neptune',
    href: '',
    githubLink: 'https://github.com/jenishxadhikari/neptune',
    title: 'Neptune',
    year: 2026,
    status: 'In progress',
    languages: ['TypeScript', 'Python'],
    cover: '/projects/neptune.svg',
    description:
      'A song recognition and recommendation system inspired by Shazam, utilizing audio fingerprinting, FFT-based signal processing, and efficient hashing to identify songs and suggest similar tracks.',
    tags: ['TypeScript', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL']
  }
]
