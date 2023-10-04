import './globals.css'
import type { Metadata } from 'next'
import { Electrolize } from 'next/font/google'


const electrolize = Electrolize({
  weight: ['400', ],
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'Código Kid Campo Formoso',
  description: 'Links de apresentação Código kid.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={electrolize.className}>{children}</body>
    </html>
  )
}
