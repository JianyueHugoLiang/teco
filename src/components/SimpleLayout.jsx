import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}