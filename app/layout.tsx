import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bridge Bound Academy',
  description: 'Discover top universities and their admission requirements',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}