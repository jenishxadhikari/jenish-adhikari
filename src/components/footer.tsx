import Link from 'next/link'

import { HugeiconsIcon } from '@hugeicons/react'

import { SOCIALS } from '@/config/site'

import { Button } from '@/components/ui/button'

import { MaxWidthWrapper } from './max-width-wrapper'

export function Footer() {
  const currentDate = new Date().getFullYear()
  return (
    <footer className="border-border mb-2 border-y">
      <MaxWidthWrapper className="border-border flex min-h-16 items-center justify-between gap-3 border-x px-5 py-3 sm:px-8">
        <p className="text-muted-foreground text-left text-xs">
          &copy; {currentDate} Jenish Adhikari
        </p>
        <nav aria-label="Social media" className="flex items-center gap-1">
          {SOCIALS.map((social) => (
            <Button
              key={social.href}
              render={<Link href={social.href} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              variant="outline"
              size="icon"
              aria-label={social.title}
              title={social.title}
            >
              <HugeiconsIcon icon={social.icon} aria-hidden="true" />
            </Button>
          ))}
        </nav>
      </MaxWidthWrapper>
    </footer>
  )
}
