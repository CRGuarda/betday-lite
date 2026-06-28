import { BetWithMatch } from '@/core/domain/entities/bet.entity'
import { IBetRepository } from '@/core/domain/repositories/betRepository.type'
import { IMatchRepository } from '@/core/domain/repositories/matchRepository.type'

export async function getBetsWithMatchUseCase(
  betRepository: IBetRepository,
  matchRepository: IMatchRepository,
): Promise<BetWithMatch[]> {
  const [{ bets }, { matches }] = await Promise.all([betRepository.getAll(), matchRepository.getAll()])

  const matchMap = new Map(matches.map((m) => [m.id, m]))

  return bets.reduce<BetWithMatch[]>((acc, bet) => {
    const match = matchMap.get(bet.matchId)
    if (!match) return acc
    return [...acc, { ...bet, match }]
  }, [])
}
