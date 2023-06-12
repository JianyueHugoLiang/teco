import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="sm:mt-32 bg-white">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
          {title}
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="sm:mt-20">{children}</div>
    </Container>
  )
}