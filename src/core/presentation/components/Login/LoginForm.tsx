'use client'

import { SubmitEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@heroui/react'

type Field = {
  id: string
  label: string
  type: string
  placeholder: string
}

const FIELDS: Field[] = [
  { id: 'email', label: 'Email', type: 'email', placeholder: 'user@betday.com' },
  { id: 'password', label: 'Contraseña', type: 'password', placeholder: '123456' },
]

export const LoginForm = () => {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const form = new FormData(e.currentTarget)

    const result = await signIn('credentials', {
      email: form.get('email'),
      password: form.get('password'),
      redirect: false,
    })

    setLoading(false)

    if (result?.error) {
      setError('Email o contraseña incorrectos')
      return
    }

    router.push('/profile')
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      {FIELDS.map(({ id, label, type, placeholder }) => (
        <div key={id} className='flex flex-col gap-1'>
          <label htmlFor={id} className='text-sm font-medium text-default-700'>
            {label}
          </label>
          <input
            id={id}
            name={id}
            type={type}
            required
            placeholder={placeholder}
            className='rounded-lg border border-default-200 bg-background px-3 py-2 text-foreground outline-none focus:border-danger transition-colors'
          />
        </div>
      ))}

      {error && (
        <div className='rounded-lg bg-danger-50 px-3 py-2'>
          <p className='text-tiny text-danger'>{error}</p>
        </div>
      )}

      <Button type='submit' variant='danger' size='lg' isDisabled={loading} className='mt-2'>
        {loading ? 'Ingresando...' : 'Ingresar'}
      </Button>

      <p className='text-center text-tiny text-default-400'>
        Demo: <span className='font-medium text-default-600'>user@betday.com</span> /{' '}
        <span className='font-medium text-default-600'>123456</span>
      </p>
    </form>
  )
}
