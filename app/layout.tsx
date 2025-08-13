import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: "Transforme Seu Futuro Hoje | Landing Page",
  description: "Descubra oportunidades que mudam vidas. Comece sua transformação hoje mesmo.",
  keywords: "transformação, oportunidades, futuro, crescimento pessoal",
  authors: [{ name: "Sua Empresa" }],
  openGraph: {
    title: "Transforme Seu Futuro Hoje",
    description: "Descubra oportunidades que mudam vidas",
    type: "website",
    locale: "pt_BR",
  },
  robots: "index, follow",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${sourceSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
