import { unstable_cache } from 'next/cache'

import { GITHUB_USERNAME } from '@/config/site'

import type { Activity } from '@/components/kibo-ui/contribution-graph'

type GitHubContributionsResponse = {
  contributions: Activity[]
}

export const getGitHubContributions = unstable_cache(
  async () => {
    const url = new URL(
      `/v4/${GITHUB_USERNAME}?y=last`,
      'https://github-contributions-api.jogruber.de'
    )
    const response = await fetch(url)
    const data = (await response.json()) as GitHubContributionsResponse
    return data.contributions
  },
  ['github-contributions'],
  { revalidate: 60 * 60 * 24 }
)
