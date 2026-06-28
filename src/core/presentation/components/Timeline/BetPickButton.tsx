'use client'

import { Button } from '@heroui/react'
import { useState } from 'react'

type Props = {
  label: string
  odd: number
  onClick: () => void
}

export const BetPickButton = ({ label, odd, onClick }: Props) => {
  const [clicked, setClicked] = useState(false)

  const handlePress = () => {
    setClicked(true)
    onClick()
    setTimeout(() => setClicked(false), 650)
  }

  return (
    <Button
      onPress={handlePress}
      variant={clicked ? 'danger' : 'secondary'}
      size='md'
      className='min-w-16 flex-col h-auto py-1.5 data-[pressed=true]:scale-95 rounded-lg'
    >
      <span className='font-semibold text-sm'>{odd.toFixed(2)}</span>
      <span className='text-[10px] opacity-60'>{label}</span>
    </Button>
  )
}
