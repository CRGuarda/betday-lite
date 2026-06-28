import { Card, Skeleton } from '@heroui/react'

export default function Loading() {
  return (
    <div className='mx-auto max-w-lg px-4 py-10 flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <Skeleton className='h-3 w-24 rounded-full' />
        <Skeleton className='h-7 w-full rounded-lg' />
        <Skeleton className='h-3 w-40 rounded-full' />
      </div>

      <Skeleton className='h-6 w-20 rounded-full' />

      <Card>
        <Card.Content className='flex flex-col gap-4 p-4'>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className='flex items-center justify-between'>
              <Skeleton className='h-4 w-16 rounded-full' />
              <Skeleton className='h-4 w-24 rounded-full' />
            </div>
          ))}
        </Card.Content>
      </Card>
    </div>
  )
}
