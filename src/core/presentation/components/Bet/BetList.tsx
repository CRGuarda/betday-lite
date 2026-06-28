import { BetWithMatch } from '@/core/domain/entities/bet.entity'
import { BetCard } from './BetCard'

type Props = {
  bets: BetWithMatch[]
}

export const BetList = ({ bets }: Props) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {bets.toReversed().map(
        // Se utiliza reverse para mostrar las últimas apuestas primero
        (bet) => (
          <BetCard key={bet.id} bet={bet} />
        ),
      )}
    </div>
  )
}
