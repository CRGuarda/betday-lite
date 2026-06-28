'use client'

import { notFound } from 'next/navigation'
import { useBetStore } from '@/core/presentation/store/bet.store'
import { BetWithMatch } from '@/core/domain/entities/bet.entity'
import { BetDetail } from './BetDetail'

type Props = {
  betId: string
  serverBet: BetWithMatch | null
}

export const BetDetailView = ({ betId, serverBet }: Props) => {
  const storedBet = useBetStore((s) => s.bets.find((b) => b.id === betId))
  const bet = serverBet ?? storedBet ?? null

  if (!bet) return notFound()

  return <BetDetail bet={bet} />
}
