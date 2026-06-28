import { Skeleton } from '@heroui/react'

export const NavbarSkeleton = () => {
  return (
    <div className='flex gap-2 items-center justify-between px-4 h-7'>
      <Skeleton />
      <Skeleton className='w-12 h-full rounded-lg' />
      <Skeleton className='w-12 h-full rounded-lg' />
      <Skeleton className='w-12 h-full rounded-lg' />
      <Skeleton className='w-20 h-full rounded-4xl' />
    </div>
  )
}
