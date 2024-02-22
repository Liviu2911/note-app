import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] })

export const metadata: Metadata = {
  title: "Note App",
  description: "Ultimate note taking app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-stone-950`}>{children}</body>
    </html>
  )
}
