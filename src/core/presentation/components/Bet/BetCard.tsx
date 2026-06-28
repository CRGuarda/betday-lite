import { Card } from '@heroui/react'
import NextLink from 'next/link'
import { BetWithMatch } from '@/core/domain/entities/bet.entity'
import { getBetPick } from '@/core/application/use-cases/getBetPick'
import { BetStatusChip } from '@/core/presentation/components/ui/BetStatusChip'

type Props = {
  bet: BetWithMatch
}

export const BetCard = ({ bet }: Props) => {
  const { match, odd, status } = bet

  return (
    <NextLink href={`/bets/${bet.id}`} className='block'>
      <Card className='border border-transparent hover:border-default-200 transition-colors'>
        <Card.Content className='gap-3 p-4'>
          <div className='flex items-center justify-between'>
            <span className='text-tiny text-default-400'>{match.league.name}</span>
            <BetStatusChip status={status} />
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-sm font-medium text-right flex-1'>{match.homeTeam.name}</span>
            <span className='text-tiny text-default-400'>vs</span>
            <span className='text-sm font-medium flex-1'>{match.awayTeam.name}</span>
          </div>

          <div className='flex items-center justify-between border-t border-divider pt-3'>
            <div className='flex flex-col items-center'>
              <span className='text-tiny text-default-400'>Selección</span>
              <span className='text-sm font-bold'>{getBetPick(bet)}</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-tiny text-default-400'>Cuota</span>
              <span className='text-sm font-bold'>{odd.toFixed(2)}</span>
            </div>
          </div>
        </Card.Content>
      </Card>
    </NextLink>
  )
}
