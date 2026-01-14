import { MaxWidthWrapper } from './max-width-wrapper'

export function Footer() {
  const currentDate = new Date().getFullYear()
  return (
    <footer className="border-accent mb-2 border-y">
      <MaxWidthWrapper className="border-accent flex h-12 items-center justify-center border-x">
        <p className="text-muted-foreground text-center text-xs">
          &copy; {currentDate} Jenish Adhikari
        </p>
      </MaxWidthWrapper>
    </footer>
  )
}
