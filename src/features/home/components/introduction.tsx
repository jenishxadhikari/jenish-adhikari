import { MaxWidthWrapper } from '@/components/max-width-wrapper'

export function Introduction() {
  return (
    <section aria-labelledby="introduction">
      <MaxWidthWrapper className="border-border border-x border-b">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-5 py-12 text-center sm:gap-5 sm:px-8 sm:py-14 lg:py-16">
          <h1
            id="introduction"
            className="font-mono text-4xl leading-[1.02] tracking-tighter text-balance sm:text-6xl lg:text-7xl"
          >
            Hi, I’m Jenish.
            <br />A backend engineer.
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed text-pretty sm:text-lg">
            I build APIs and backend services with TypeScript, Node.js, and PostgreSQL. I’m
            interested in real-time systems, performance, and how things work under the hood.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
