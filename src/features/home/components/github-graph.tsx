'use client'

import { use } from 'react'

import { Loading03Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { cn } from '@/lib/utils'

import { Badge } from '@/components/ui/badge'
import type { Activity } from '@/components/kibo-ui/contribution-graph'
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount
} from '@/components/kibo-ui/contribution-graph'

export function GitHubContributionGraph({ contributions }: { contributions: Promise<Activity[]> }) {
  const data = use(contributions)

  return (
    <ContributionGraph
      className="mx-auto py-2"
      data={data}
      blockSize={11}
      blockMargin={3}
      blockRadius={0}
    >
      <ContributionGraphCalendar>
        {({ activity, dayIndex, weekIndex }) => (
          <ContributionGraphBlock
            activity={activity}
            className={cn(
              'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
              'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
              'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
              'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
              'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
            )}
            dayIndex={dayIndex}
            weekIndex={weekIndex}
          />
        )}
      </ContributionGraphCalendar>
      <ContributionGraphFooter>
        <ContributionGraphTotalCount>
          {({ totalCount }) => (
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm">Last Year:</span>
              <Badge variant="secondary">{totalCount.toLocaleString()} contributions</Badge>
            </div>
          )}
        </ContributionGraphTotalCount>
        <ContributionGraphLegend>
          {({ level }) => (
            <div
              className="group relative flex h-3 w-3 items-center justify-center"
              data-level={level}
            >
              <div
                className={`border-border h-full w-full rounded-sm border ${level === 0 ? 'bg-muted' : ''} ${level === 1 ? 'bg-emerald-200 dark:bg-emerald-900' : ''} ${level === 2 ? 'bg-emerald-400 dark:bg-emerald-700' : ''} ${level === 3 ? 'bg-emerald-600 dark:bg-emerald-500' : ''} ${level === 4 ? 'bg-emerald-800 dark:bg-emerald-300' : ''} `}
              />
              <span className="bg-popover text-popover-foreground absolute -top-8 hidden rounded px-2 py-1 text-xs shadow-md group-hover:block">
                Level {level}
              </span>
            </div>
          )}
        </ContributionGraphLegend>
      </ContributionGraphFooter>
    </ContributionGraph>
  )
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-[162px] w-full items-center justify-center">
      <HugeiconsIcon icon={Loading03Icon} className="text-muted-foreground animate-spin" />
    </div>
  )
}
