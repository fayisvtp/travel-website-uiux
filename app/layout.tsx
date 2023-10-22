import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Fotter from '@/components/Fotter'


export const metadata: Metadata = {
  title: 'road to heaven',
  description: 'travel ui/ux',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        <main className='relative 
        overflow-hidden'>
        {children}
        </main>
        <Fotter/>
        </body>
    </html>
  )
}
