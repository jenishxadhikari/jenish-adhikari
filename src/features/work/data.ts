import type { Work } from './types'

export const WORKS: Work[] = [
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
