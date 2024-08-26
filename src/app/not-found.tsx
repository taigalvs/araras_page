'use client'

import { Button } from '@/components/atoms'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter()

  return (
    <main>
      <section className="container flex h-[70vh] flex-col items-center justify-center gap-8">
        <h1 className="h1-bold">Opps.. Parece que essa página não existe!</h1>
        <h3 className="h3-bold">4 0 4</h3>
        <Button onClick={() => router.push('/')}>Ir para o início</Button>
      </section>
    </main>
  )
}

export default NotFound
