'use client'

import { Button } from '@heroui/react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import NextLink from 'next/link'
import { ThemeSwitcher } from '@/core/presentation/components/ui/ThemeSwitcher'
import { NAV_ITEMS, SESSION_PAGES } from '@/core/helpers/consts'
import { NavbarSkeleton } from '@/core/presentation/components/Navbar/NavbarSkeleton'
import imagenLogo from '@/app/icon.png'
import Image from 'next/image'

export const NavbarClient = () => {
  const pathname = usePathname()
  const { status } = useSession()
  const isLoggedIn = status === 'authenticated'
  const isLoading = status === 'loading'
  const [menuOpen, setMenuOpen] = useState(false)

  const visibleItems = NAV_ITEMS.filter((item) => {
    if (item.protected && !isLoggedIn) return false
    return true
  })

  const navLinkClass = (href: string) =>
    `px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
      pathname === href ? 'bg-danger/10 text-danger' : 'text-default-400 hover:text-default-700 hover:bg-default-100'
    }`

  return (
    <nav className='relative flex items-center justify-between border-b border-divider mb-4 px-4'>
      <NextLink href='/' className='text-lg font-bold text-danger py-4 flex items-center justify-center gap-2'>
        <Image src={imagenLogo} alt='Logo BetDay Lite' className='h-8 w-auto' />
        BetDay Lite
      </NextLink>

      {/* Desktop */}
      <div className='hidden md:flex items-center gap-1'>
        {isLoading ? (
          <NavbarSkeleton />
        ) : (
          <>
            {visibleItems.map((item) => (
              <NextLink key={item.href} href={item.href} className={navLinkClass(item.href)}>
                {item.label}
              </NextLink>
            ))}
            {isLoggedIn ? (
              <Button variant='ghost' size='sm' onPress={() => signOut({ callbackUrl: SESSION_PAGES.signIn })}>
                Salir
              </Button>
            ) : (
              <NextLink href={SESSION_PAGES.signIn} className={navLinkClass(SESSION_PAGES.signIn)}>
                Iniciar sesión
              </NextLink>
            )}
            <ThemeSwitcher />
          </>
        )}
      </div>

      {/* Hamburger */}
      <button
        className='md:hidden p-2 rounded-lg hover:bg-default-100 transition-colors'
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {menuOpen ? <XIcon /> : <HamburgerIcon />}
      </button>

      {/* Mobile menu */}
      {menuOpen && !isLoading && (
        <div className='absolute top-full left-0 right-0 bg-background border-b border-divider p-4 flex flex-col gap-2 md:hidden z-50 shadow-lg'>
          {visibleItems.map((item) => (
            <NextLink
              key={item.href}
              href={item.href}
              className={navLinkClass(item.href)}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NextLink>
          ))}
          {isLoggedIn ? (
            <Button
              variant='ghost'
              size='sm'
              onPress={() => signOut({ callbackUrl: SESSION_PAGES.signIn })}
            >
              Salir
            </Button>
          ) : (
            <NextLink
              href={SESSION_PAGES.signIn}
              className={navLinkClass(SESSION_PAGES.signIn)}
              onClick={() => setMenuOpen(false)}
            >
              Iniciar sesión
            </NextLink>
          )}
          <ThemeSwitcher />
        </div>
      )}
    </nav>
  )
}

const HamburgerIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
    <line x1='3' y1='6' x2='21' y2='6' />
    <line x1='3' y1='12' x2='21' y2='12' />
    <line x1='3' y1='18' x2='21' y2='18' />
  </svg>
)

const XIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
    <line x1='6' y1='6' x2='18' y2='18' />
    <line x1='6' y1='18' x2='18' y2='6' />
  </svg>
)
