import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aleena - Full Stack Developer",
  description: "Passionate full stack developer building modern web applications with cutting-edge technologies",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Aleena" }],
  openGraph: {
    title: "Aleena - Full Stack Developer",
    description: "Passionate full stack developer building modern web applications",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aleena - Full Stack Developer",
    description: "Passionate full stack developer building modern web applications",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
