import { Separator } from '@heroui/react'

export const HourSeparator = ({ label }: { label: string }) => {
  return (
    <div className='flex items-center gap-4 px-4'>
      <Separator className='flex-1' />
      <span className='text-xs font-semibold text-default-400'>{label}</span>
      <Separator className='flex-1' />
    </div>
  )
}
