import type { Metadata } from 'next'
import '../styles/globals.css'
import { Footer } from '@/components/organisms/Footer'
import { Navbar } from '@/components/organisms'
import AOSProvider from '../lib/aos'

export const metadata: Metadata = {
  title: 'Associação Araras - ONG na Favela do Arará',
  description:
    'A Associação Araras é uma ONG que atua com voluntários para promover melhorias sociais, educacionais e culturais na Favela do Arará, impulsionando o desenvolvimento comunitário.',
  keywords:
    'Associação Araras, ONG, Favela do Arará, voluntariado, desenvolvimento comunitário, educação, cultura',
  openGraph: {
    title: 'Associação Araras - Transformando Vidas na Favela do Arará',
    description:
      'Conheça a Associação Araras, uma ONG dedicada a promover melhorias sociais, educacionais e culturais na Favela do Arará através do trabalho voluntário.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://araras.ong.br',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <AOSProvider>
          <div className="flex min-h-screen flex-col bg-primary-100">
            <main className="relative flex-1 overflow-hidden">
              <Navbar />
              {children}
              <Footer />
            </main>
          </div>
        </AOSProvider>
      </body>
    </html>
  )
}
