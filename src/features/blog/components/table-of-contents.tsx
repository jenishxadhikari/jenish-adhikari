'use client'

import { useEffect, useState } from 'react'

type Heading = { id: string; title: string; level: number }

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLHeadingElement>('#article-content h2, #article-content h3')
    )
    const usedIds = new Set<string>()
    const items = elements.map((element) => {
      const title = element.textContent?.trim() || 'Section'
      const baseId =
        element.id ||
        title
          .toLowerCase()
          .replace(/[^\p{L}\p{N}\s-]/gu, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-') ||
        'section'
      let id = baseId
      let suffix = 1
      while (usedIds.has(id)) id = `${baseId}-${suffix++}`
      usedIds.add(id)
      element.id = id
      return { id, title, level: Number(element.tagName.slice(1)) }
    })
    setHeadings(items)

    const hash = window.location.hash.slice(1)
    if (hash) document.getElementById(hash)?.scrollIntoView()

    let frame = 0
    function updateActiveHeading() {
      frame = 0
      let active = elements[0]
      for (const element of elements) {
        if (element.getBoundingClientRect().top > 128) break
        active = element
      }
      setActiveId(active?.id || '')
    }
    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(updateActiveHeading)
    }
    updateActiveHeading()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [])

  if (!headings.length) return null

  return (
    <aside className="sticky top-24 order-2 hidden max-h-[calc(100dvh-8rem)] self-start overflow-y-auto pl-px md:block">
      <nav aria-label="Table of contents">
        <h2 className="text-foreground/50 mb-4 text-xs font-medium">On this page</h2>
        <ol className="border-accent space-y-1 border-l">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                aria-current={activeId === heading.id ? 'location' : undefined}
                onClick={() => setActiveId(heading.id)}
                className={`text-foreground/55 hover:text-foreground aria-[current=location]:border-primary aria-[current=location]:text-foreground focus-visible:outline-ring -ml-px block border-l-2 border-transparent py-1.5 pr-2 text-xs leading-relaxed focus-visible:outline-2 focus-visible:outline-offset-2 ${heading.level === 3 ? 'pl-6' : 'pl-4'}`}
              >
                {heading.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  )
}
