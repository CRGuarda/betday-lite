import { Card, Skeleton } from '@heroui/react'

const MatchCardSkeleton = () => (
  <Card>
    <Card.Content className='gap-3 p-4'>
      <div className='flex items-center justify-between'>
        <Skeleton className='h-3 w-24 rounded-full' />
        <Skeleton className='h-3 w-12 rounded-full' />
      </div>

      <div className='flex items-center justify-between gap-2'>
        <Skeleton className='h-4 flex-1 rounded-full' />
        <Skeleton className='h-3 w-5 rounded-full' />
        <Skeleton className='h-4 flex-1 rounded-full' />
      </div>

      <div className='flex justify-end gap-2'>
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className='h-9 w-16 rounded-lg' />
        ))}
      </div>
    </Card.Content>
  </Card>
)

export default function Loading() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-2 border-b border-divider pb-2'>
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className='h-8 w-28 rounded-lg' />
        ))}
      </div>

      <div className='flex items-center gap-4 px-4'>
        <Skeleton className='h-px flex-1' />
        <Skeleton className='h-3 w-12 rounded-full' />
        <Skeleton className='h-px flex-1' />
      </div>
      <div className='flex flex-col gap-3'>
        {Array.from({ length: 3 }).map((_, i) => (
          <MatchCardSkeleton key={i} />
        ))}
      </div>

      <div className='flex items-center gap-4 px-4'>
        <Skeleton className='h-px flex-1' />
        <Skeleton className='h-3 w-12 rounded-full' />
        <Skeleton className='h-px flex-1' />
      </div>
      <div className='flex flex-col gap-3'>
        {Array.from({ length: 2 }).map((_, i) => (
          <MatchCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}
