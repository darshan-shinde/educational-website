import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Togglehead',
  description: 'Created by Darshan',
  generator: 'darshan',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
