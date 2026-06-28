import { groupAndSortMatches } from '@/core/application/use-cases/getGroupedMatchesUseCase'
import { matchRepository } from '@/core/infrastructure/api/match.repository.impl'
import { Timeline } from '@/core/presentation/components/Timeline/Timeline'
export const dynamic = 'force-dynamic'
export default async function HomePage() {
  const matchesGrouped = await groupAndSortMatches(matchRepository)
  return <Timeline groups={matchesGrouped} />
}
