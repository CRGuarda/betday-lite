import { BetPick, BetStatus, BetWithMatch } from '@/core/domain/entities/bet.entity'
import { Match } from '@/core/domain/entities/match.entity'

type PlaceBetParams = {
  match: Match
  pick: BetPick
}

const ODD_KEY: Record<BetPick, 'home' | 'draw' | 'away'> = {
  HOME: 'home',
  DRAW: 'draw',
  AWAY: 'away',
}

export const placeBetUseCase = ({ match, pick }: PlaceBetParams): BetWithMatch => ({
  id: `bet_${Date.now()}`,
  matchId: match.id,
  placedAt: new Date().toISOString(),
  pick,
  odd: match.market.odds[ODD_KEY[pick]],
  stake: 10,
  status: BetStatus.Pending,
  return: match.market.odds[ODD_KEY[pick]] * 10,
  match,
})
