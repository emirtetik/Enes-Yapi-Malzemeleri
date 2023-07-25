'use client'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Providers from "./providers"
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        <Providers>
        <Header />
           <main className='max-w-6xl px-5 mx-auto'>{children}</main>
        <Footer/>
        </Providers>
        </body>
    </html>
  )
}
