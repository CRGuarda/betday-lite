import { SESSION_PAGES } from '@/core/helpers/consts'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

const MOCK_USER = {
  id: '1',
  name: 'betday-demo',
  email: 'user@betday.com',
  password: '123456',
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Contraseña', type: 'password' },
      },
      authorize: (credentials) => {
        if (credentials?.email === MOCK_USER.email && credentials?.password === MOCK_USER.password) {
          return {
            id: MOCK_USER.id,
            name: MOCK_USER.name,
            email: MOCK_USER.email,
          }
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: SESSION_PAGES.signIn,
  },
  session: {
    strategy: 'jwt',
  },
})
