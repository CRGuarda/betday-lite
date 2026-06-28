import { BetPick, BetWithMatch } from '@/core/domain/entities/bet.entity'

export const getBetPick = (bet: BetWithMatch): string => {
  if (bet.pick === BetPick.Home) return bet.match.homeTeam.shortName
  if (bet.pick === BetPick.Away) return bet.match.awayTeam.shortName
  if (bet.pick === BetPick.Draw) return 'Empate'
  return 'Unknown'
}
