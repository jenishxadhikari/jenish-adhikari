import React from 'react'

import { cn } from '@/lib/utils'

type MaxWidthWrapperProps = {
  children: React.ReactNode
  className?: string
}

export function MaxWidthWrapper({ className, children }: MaxWidthWrapperProps) {
  return <div className={cn('mx-auto h-full w-full max-w-3xl', className)}>{children}</div>
}
