import { Suspense } from 'react'

import { getGitHubContributions } from '../action'
import { GitHubContributionFallback, GitHubContributionGraph } from './github-graph'

export function GitHubContributions() {
  const contributions = getGitHubContributions()

  return (
    <div>
      <h2 className="sr-only">GitHub Contributions</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>
    </div>
  )
}
