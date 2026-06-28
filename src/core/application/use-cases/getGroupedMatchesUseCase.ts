import { MatchesSeed, Match } from '@/core/domain/entities/match.entity'
import { IMatchRepository } from '@/core/domain/repositories/matchRepository.type'

export const groupAndSortMatches = async (matchRepository: IMatchRepository): Promise<MatchesSeed[]> => {
  const matchesSeed = await matchRepository.getAll()
  const grouped = matchesSeed.matches.reduce(
    (acc, match) => {
      const dateKey = match.startTime.split('T')[0]

      if (!acc[dateKey]) {
        acc[dateKey] = []
      }
      acc[dateKey].push(match)
      return acc
    },
    {} as Record<string, Match[]>,
  )

  return Object.entries(grouped)
    .map(([date, matchesList]) => {
      const sortedMatches = [...matchesList].sort(
        (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
      )

      return {
        date,
        timezone: 'UTC',
        matches: sortedMatches,
      }
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}
