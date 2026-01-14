import { GithubActivity } from '@/features/home/components/github-activity'
import { Introduction } from '@/features/home/components/introduction'
import { ProjectsSection } from '@/features/home/components/projects-section'
// import { BlogsSection } from "@/features/home/components/blogs-section";
import { Socials } from '@/features/home/components/socials'

export default function Home() {
  return (
    <>
      <Introduction />
      <Socials />
      <ProjectsSection />
      <GithubActivity />
      {/* <BlogsSection /> */}
    </>
  )
}
