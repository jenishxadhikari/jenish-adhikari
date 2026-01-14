import React from 'react'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'

export default function Work() {
  return (
    <section className="flex flex-1 flex-col">
      <MaxWidthWrapper className="border-accent flex-1 border-x py-6 text-center">
        <p>Looking for an internship.</p>
      </MaxWidthWrapper>
    </section>
  )
}
