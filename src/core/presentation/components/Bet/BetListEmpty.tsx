import NextLink from 'next/link'

export const BetListEmpty = () => (
  <div className='flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-divider py-16 text-center'>
    <div className='flex flex-col gap-1'>
      <p className='text-base font-medium text-default-700'>No has realizado apuestas aún</p>
      <p className='text-sm text-default-400'>Explora los partidos de hoy y realiza tu primera apuesta</p>
    </div>
    <NextLink
      href='/'
      className='inline-flex items-center justify-center rounded-lg bg-danger px-5 py-2 text-sm font-semibold text-white transition-colors hover:opacity-90'
    >
      Ver partidos
    </NextLink>
  </div>
)
