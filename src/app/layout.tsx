import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/organisms/Footer'
import { Navbar } from '@/components/organisms'

export const metadata: Metadata = {
  title: 'Araras',
  description: 'Instituto Araras',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main id="root" className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
