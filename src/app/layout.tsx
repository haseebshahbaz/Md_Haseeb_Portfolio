import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muhammad Haseeb - Full Stack Developer',
  description: 'Portfolio of Muhammad Haseeb, a Full Stack Developer specializing in React and Node.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-800`}>{children}</body>
    </html>
  )
}