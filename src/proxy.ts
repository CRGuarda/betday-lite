import { auth } from '@/auth'
import { NAV_ITEMS, SESSION_PAGES } from '@/core/helpers/consts'
import { NextResponse } from 'next/server'

const PROTECTED_PATHS = NAV_ITEMS.filter((item) => item.protected).map((item) => item.href)

export const proxy = auth(async (req) => {
  const isLoggedIn = !!req.auth

  const isProtected = PROTECTED_PATHS.some(
    (path) => req.nextUrl.pathname === path || req.nextUrl.pathname.startsWith(`${path}/`),
  )

  if (isProtected && !isLoggedIn) {
    return NextResponse.redirect(new URL(SESSION_PAGES.signIn, req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/profile/:path*'],
}
