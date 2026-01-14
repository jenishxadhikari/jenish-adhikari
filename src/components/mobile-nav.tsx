import { useState } from 'react'
import Link from 'next/link'

import { Menu } from 'lucide-react'

import { MAIN_NAV } from '@/config/site'

import { buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import { ModeToggle } from './theme/mode-toogle'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <ModeToggle />
          </SheetTitle>
        </SheetHeader>
        {MAIN_NAV.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className={buttonVariants({
              size: 'sm',
              variant: 'link',
              className: 'text-primary-foreground/80!'
            })}
            onClick={() => setOpen(false)}
          >
            {item.title}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  )
}
