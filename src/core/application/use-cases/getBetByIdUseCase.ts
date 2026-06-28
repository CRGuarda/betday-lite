import { BetWithMatch } from '@/core/domain/entities/bet.entity'
import { IBetRepository } from '@/core/domain/repositories/betRepository.type'
import { IMatchRepository } from '@/core/domain/repositories/matchRepository.type'

export const getBetByIdUseCase = async (
  betId: string,
  betRepository: IBetRepository,
  matchRepository: IMatchRepository,
): Promise<BetWithMatch | null> => {
  const [{ bets }, { matches }] = await Promise.all([betRepository.getAll(), matchRepository.getAll()])

  const bet = bets.find((b) => b.id === betId)
  if (!bet) return null

  const match = matches.find((m) => m.id === bet.matchId)
  if (!match) return null

  return { ...bet, match }
}
