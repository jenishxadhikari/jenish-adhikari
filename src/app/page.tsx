import { MaxWidthWrapper } from '@/components/max-width-wrapper'

import { BlogsSection } from '@/features/home/components/blogs-section'
import { GithubActivity } from '@/features/home/components/github-activity'
import { Introduction } from '@/features/home/components/introduction'
import { ProjectsSection } from '@/features/home/components/projects-section'
import { WorkSection } from '@/features/home/components/work-section'

export default function Home() {
  return (
    <>
      <Introduction />
      <MaxWidthWrapper className="border-accent grid border-x border-b lg:grid-cols-2">
        <ProjectsSection />
        <BlogsSection />
      </MaxWidthWrapper>
      <WorkSection />
      <GithubActivity />
    </>
  )
}
