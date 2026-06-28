import { Card } from '@heroui/react'
import { getBetPick } from '@/core/application/use-cases/getBetPick'
import { BetWithMatch } from '@/core/domain/entities/bet.entity'
import { BetStatusChip } from '@/core/presentation/components/ui/BetStatusChip'

type Props = {
  bet: BetWithMatch
}

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className='flex items-center justify-between border-b border-divider py-3 last:border-b-0'>
    <span className='text-sm text-default-400'>{label}</span>
    <span className='text-sm font-semibold'>{value}</span>
  </div>
)

export const BetDetail = ({ bet }: Props) => {
  const { match, odd, stake, status, return: betReturn, placedAt } = bet

  return (
    <div className='mx-auto max-w-lg px-4 py-10 flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <span className='text-tiny text-default-400'>{match.league.name}</span>
        <h1 className='text-xl font-bold'>
          {match.homeTeam.name} vs {match.awayTeam.name}
        </h1>
        <span className='text-tiny text-default-400'>{new Date(match.startTime).toLocaleString()}</span>
      </div>

      <BetStatusChip status={status} className='self-start' />

      <Card>
        <Card.Content className='p-4'>
          <DetailRow label='Selección' value={getBetPick(bet)} />
          <DetailRow label='Cuota' value={odd.toFixed(2)} />
          <DetailRow label='Stake' value={`$${stake}`} />
          <DetailRow label='Retorno' value={betReturn !== null ? `$${betReturn}` : '—'} />
          <DetailRow label='Fecha' value={new Date(placedAt).toLocaleString()} />
        </Card.Content>
      </Card>
    </div>
  )
}
