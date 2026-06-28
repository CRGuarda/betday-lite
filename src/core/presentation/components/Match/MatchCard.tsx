'use client'

import { Card } from '@heroui/react'
import { BetPick } from '@/core/domain/entities/bet.entity'
import { Match } from '@/core/domain/entities/match.entity'
import { formatHour } from '@/core/helpers/dates'
import { BetPickButton } from '@/core/presentation/components/Timeline/BetPickButton'
import { usePlaceBet } from '@/core/presentation/hooks/usePlaceBet'

type Props = {
  match: Match
}

export const MatchCard = ({ match }: Props) => {
  const { handlePick } = usePlaceBet({ match })

  return (
    <Card>
      <Card.Content className='p-2 grid grid-cols-[1fr_auto] gap-2 items-center'>
        <span className='text-xs text-default-400'>{match.league.name}</span>
        <span className='text-xs text-default-400 text-right'>{formatHour(match.startTime)}</span>

        <div className='text-lg sm:text-2xl flex md:flex-col justify-center md:justify-between gap-2 col-span-2 md:col-span-1 '>
          <span className='font-medium'>{match.homeTeam.name}</span>
          <span className='text-xs md:hidden place-self-center'>vs</span>
          <span className='font-medium'>{match.awayTeam.name}</span>
        </div>

        <div className='flex justify-center md:justify-end gap-2 col-span-2 md:col-span-1'>
          <BetPickButton
            label={match.homeTeam.shortName}
            odd={match.market.odds.home}
            onClick={() => handlePick(BetPick.Home)}
          />
          <BetPickButton label='Empate' odd={match.market.odds.draw} onClick={() => handlePick(BetPick.Draw)} />
          <BetPickButton
            label={match.awayTeam.shortName}
            odd={match.market.odds.away}
            onClick={() => handlePick(BetPick.Away)}
          />
        </div>
      </Card.Content>
    </Card>
  )
}
