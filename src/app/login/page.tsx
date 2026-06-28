import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { LoginForm } from '@/core/presentation/components/Login/LoginForm'

export default async function LoginPage() {
  const session = await auth()

  if (session?.user) redirect('/')

  return (
    <div className='min-h-[calc(100vh-65px)] flex items-center justify-center px-4'>
      <div className='w-full max-w-sm flex flex-col gap-8'>
        <div className='flex flex-col gap-1 text-center'>
          <h1 className='text-3xl font-bold text-danger'>BetDay Lite</h1>
          <p className='text-sm text-default-400'>Inicia sesión para continuar</p>
        </div>

        <LoginForm />
      </div>
    </div>
  )
}
