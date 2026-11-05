import Link from 'next/link'

import { GITHUB_USERNAME } from '@/config/site'

import { Button } from '@/components/ui/button'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'

import { GitHubContributions } from './github'

export function GithubActivity() {
  return (
    <section aria-labelledby="home-github">
      <MaxWidthWrapper className="border-accent border-x">
        <div className="space-y-6 px-5 py-6 sm:px-8">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <h2 id="home-github" className="text-2xl font-semibold tracking-tight">
                GitHub activity
              </h2>
              <p className="text-foreground/60 text-sm">Contributions over the last year.</p>
            </div>
            <Button
              render={
                <Link
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
              variant="outline"
              size="sm"
              className="text-foreground/70 rounded-lg"
            >
              View GitHub
            </Button>
          </header>
          <GitHubContributions />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
