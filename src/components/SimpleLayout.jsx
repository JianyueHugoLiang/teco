import { Container } from '@/components/Container'

export function SimpleLayout({ children }) {
  return (
    <Container className="bg-white mt-16 sm:mt-32">
      <header className="max-w-2xl">
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}