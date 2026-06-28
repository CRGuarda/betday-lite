import { Match } from '@/core/domain/entities/match.entity'
import { getGroupedHour } from '@/core/helpers/dates'
import { MatchCard } from '@/core/presentation/components/Match/MatchCard'
import { HourSeparator } from '@/core/presentation/components/Timeline/HourSeparator'

type Props = {
  matches: Match[]
}

const groupMatchesByHour = (matches: Match[]): Record<string, Match[]> =>
  matches.reduce<Record<string, Match[]>>((acc, match) => {
    const hour = getGroupedHour(match.startTime)
    return { ...acc, [hour]: [...(acc[hour] ?? []), match] }
  }, {})

export const TimelineDayPanel = ({ matches }: Props) => {
  const grouped = groupMatchesByHour(matches)
  return (
    <div className='flex flex-col gap-6 h-full max-h-[calc(100vh-250px)] overflow-y-auto px-4'>
      {Object.entries(grouped).map(([hour, hourMatches]) => (
        <div key={hour} className='flex flex-col gap-2'>
          <HourSeparator label={hour} />
          {hourMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      ))}
    </div>
  )
}
