import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/core/presentation/components/Navbar/Navbar'
import { Providers } from '@/core/presentation/components/providers'
import { ScrollToTop } from '@/core/presentation/components/ui/ScrollToTop'
import { Toaster } from 'sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'BetDay Lite',
  description:
    'Casa de apuestas deportivas líder en Latinoamérica. Apuesta en tus deportes favoritos y gana a lo grande.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className='min-h-full flex flex-col bg-background text-foreground'>
        <Providers>
          <Toaster position='bottom-right' richColors />
          <ScrollToTop />
          <div className='mx-auto max-w-5xl px-4 py-8 w-full'>
            <Navbar />
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
