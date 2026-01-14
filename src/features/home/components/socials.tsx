import Link from 'next/link'

import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react'

import { SOCIALS } from '@/config/site'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'

export function Socials() {
  return (
    <section>
      <MaxWidthWrapper className="border-accent border-x">
        <div className="border-accent grid grid-cols-2 border-b md:grid-cols-3">
          {SOCIALS.map((item) => (
            <SocialLink
              key={item.href}
              href={item.href}
              icon={item.icon}
              title={item.title}
              username={item.username}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

interface SocialLinkProps {
  href: string
  icon: IconSvgElement
  title: string
  username: string
}

function SocialLink({ href, icon, title, username }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group border-accent hover:bg-primary/20 flex items-center gap-x-2 border-r border-b p-3 transition-colors last:border-b-0 md:border-b-0 md:last:border-r-0"
    >
      <HugeiconsIcon icon={icon} className="size-8" />
      <div className="text-sm">
        <h3 className="underline-offset-4 transition-transform group-hover:underline">{title}</h3>
        <p>{username}</p>
      </div>
    </Link>
  )
}
