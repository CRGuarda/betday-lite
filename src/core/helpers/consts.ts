import { BetPick } from '@/core/domain/entities/bet.entity'

type NavItem = {
  label: string
  href: string
  protected: boolean
}

export const PICK_LABEL: Record<BetPick, string> = {
  HOME: '1',
  DRAW: 'X',
  AWAY: '2',
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/', protected: false },
  { label: 'Perfil', href: '/profile', protected: true },
]

export const SESSION_PAGES = {
  signIn: '/login',
}
