import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Quran Learn Academy - Online Quran Classes",
  description:
    "Learn the Holy Quran from experienced teachers with flexible schedules and personalized attention. Join our online Quran academy today.",
  keywords: "Quran, online classes, Islamic education, Tajweed, Arabic, Quran learning",
  authors: [{ name: "Quran Learn Academy" }],
  openGraph: {
    title: "Quran Learn Academy - Online Quran Classes",
    description: "Learn the Holy Quran from experienced teachers with flexible schedules and personalized attention.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
