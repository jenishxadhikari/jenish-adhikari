import { MaxWidthWrapper } from '@/components/max-width-wrapper'

import { GitHubContributions } from './github'

export function GithubActivity() {
  return (
    <section>
      <MaxWidthWrapper className="border-accent border-x border-b">
        <div className="border-accent space-y-2 px-2 py-3">
          <h2 className="text-2xl font-semibold tracking-tight">Github Activity</h2>
          <GitHubContributions />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
