import { Github01Icon, Linkedin02Icon, NewTwitterIcon } from '@hugeicons/core-free-icons'

import { NavItem, Project, Social } from '@/types'

export const GITHUB_USERNAME = 'jenishxadhikari'

export const SITE_INFO = {
  name: 'Jenish Adhikari',
  jobTitle: 'Backend Engineer',
  url: process.env.APP_URL || 'https://www.jenish-adhikari.com.np',
  ogImage: '/og-image.png',
  description: 'Backend engineer building APIs, database-backed services, and real-time systems.',
  keywords: ['portfolio', 'backend engineer', 'TypeScript', 'Node.js', 'PostgreSQL']
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

export const WORKS = [
  {
    title: 'Full Stack Developer',
    company: 'Growth Pixels Pvt. Ltd.',
    employmentType: 'Full-time',
    period: 'Jun 2026 - Present',
    location: 'Remote, Nepal',
    technologies: ['Node.js', 'React'],
    points: [
      'Building and maintaining Node.js backend services and REST APIs for web applications.',
      'Working on data models, database queries, and the business logic behind application features.',
      'Adding input validation and consistent error handling to make API behavior predictable and easier to debug.',
      'Collaborating on React integrations, API contracts, and troubleshooting issues across the stack.'
    ]
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'DB Workshop And IT Support Pvt. Ltd.',
    period: 'Nov 2025 - Apr 2026',
    location: 'Remote, Kathmandu, Nepal',
    technologies: ['TypeScript', 'Next.js', 'PostgreSQL'],
    points: [
      'Refactored and developed modules in restaurant-management application with Next.js, TypeScript, and PostgreSQL.',
      'Built user creation and invitation flow also ERP location management end-to-end.',
      'Developed POS floorplan/table logic, quick ordering, and theme toggle while fixing state/rendering bugs.',
      'Maintained clean Git/GitHub workflow through reviews and production-ready deliveries.'
    ]
  }
]
