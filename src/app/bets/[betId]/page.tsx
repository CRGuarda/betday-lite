import { betRepository } from '@/core/infrastructure/api/bet.repository.impl'
import { matchRepository } from '@/core/infrastructure/api/match.repository.impl'
import { getBetByIdUseCase } from '@/core/application/use-cases/getBetByIdUseCase'
import { BetDetailView } from '@/core/presentation/components/Bet/BetDetailView'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ betId: string }>
}

export default async function BetDetailPage({ params }: Props) {
  const { betId } = await params
  const serverBet = await getBetByIdUseCase(betId, betRepository, matchRepository)

  return <BetDetailView betId={betId} serverBet={serverBet} />
}
