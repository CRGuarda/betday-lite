'use client'

import { Button } from '@heroui/react'
import { useEffect, useState } from 'react'
import { CaretUp } from '@phosphor-icons/react/dist/ssr'

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <Button
      isIconOnly
      variant='secondary'
      size='lg'
      className='fixed bottom-6 right-6 z-50 shadow-lg'
      onPress={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label='Volver al inicio'
    >
      <CaretUp />
    </Button>
  )
}
