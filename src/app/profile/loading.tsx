import { Card, Skeleton } from '@heroui/react'

const CardSkeleton = () => (
  <Card>
    <Card.Content className='gap-3 p-4'>
      <div className='flex items-center justify-between'>
        <Skeleton className='h-3 w-20 rounded-full' />
        <Skeleton className='h-5 w-14 rounded-full' />
      </div>

      <div className='flex items-center gap-2'>
        <Skeleton className='h-4 flex-1 rounded-full' />
        <Skeleton className='h-3 w-5 rounded-full' />
        <Skeleton className='h-4 flex-1 rounded-full' />
      </div>

      <div className='flex items-center justify-between border-t border-divider pt-3'>
        <div className='flex flex-col items-center gap-1'>
          <Skeleton className='h-3 w-14 rounded-full' />
          <Skeleton className='h-4 w-8 rounded-full' />
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Skeleton className='h-3 w-10 rounded-full' />
          <Skeleton className='h-4 w-12 rounded-full' />
        </div>
      </div>
    </Card.Content>
  </Card>
)

export default function Loading() {
  return (
    <div className='flex flex-col gap-10'>
      <section className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4'>
          <Skeleton className='h-5 w-40 rounded-full' />
          <Skeleton className='h-3 w-52 rounded-full' />
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {Array.from({ length: 3 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </section>

      <section className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <Skeleton className='h-5 w-24 rounded-full' />
          <Skeleton className='h-3 w-36 rounded-full' />
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {Array.from({ length: 3 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
