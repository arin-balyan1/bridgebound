import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: 'Bridge Bound Academy',
  icons: {
    icon: '/favicon.ico',       // or '/favicon.png'
    apple: '/favicon.ico',      // optional
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}