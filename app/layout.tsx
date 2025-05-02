import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Samir Tamang',
  description: 'hey, its me Samir Ghishing ',
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
