'use client'

import { NextAuthProvider } from '@/core/presentation/components/providers/SessionProvider'
import { ThemeProvider } from '@/core/presentation/components/providers/ThemeProvider'

type Props = {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => (
  <ThemeProvider>
    <NextAuthProvider>{children}</NextAuthProvider>
  </ThemeProvider>
)
