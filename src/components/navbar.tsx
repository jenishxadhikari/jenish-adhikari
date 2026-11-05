'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MAIN_NAV } from '@/config/site'

import { MaxWidthWrapper } from './max-width-wrapper'
import { MobileNav } from './mobile-nav'
import { ModeToggle } from './theme/mode-toogle'
import { buttonVariants } from './ui/button'

export function Navbar() {
  const pathName = usePathname()
  return (
    <>
      <div aria-hidden="true" className="bg-background fixed inset-x-0 top-0 z-10 h-2" />
      <nav className="border-accent bg-background/80 sticky inset-x-0 top-2 z-10 mb-2 border-collapse border-y backdrop-blur-lg transition-all">
        <MaxWidthWrapper className="border-accent flex h-12 items-center justify-between border-x px-1">
          <Link
            href="/"
            className={buttonVariants({
              size: 'sm',
              variant: 'link',
              className: 'text-foreground! font-mono text-xl font-semibold'
            })}
          >
            JENISH
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {MAIN_NAV.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className={buttonVariants({
                  size: 'sm',
                  variant: 'link',
                  className:
                    pathName !== item.href
                      ? 'text-primary-foreground/80! decoration-wavy decoration-2 underline-offset-4'
                      : 'text-foreground! underline decoration-wavy decoration-2 underline-offset-4'
                })}
              >
                {item.title}
              </Link>
            ))}

            <div className="bg-accent h-6 w-px" />
            <ModeToggle />
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  )
}
