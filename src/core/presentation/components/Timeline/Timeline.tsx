'use client'

import { Tabs } from '@heroui/react'
import { MatchesSeed } from '@/core/domain/entities/match.entity'
import { TimelineDayPanel } from '@/core/presentation/components/Timeline/TimelineDayPanel'

type Props = {
  groups: MatchesSeed[]
}

const formatTabDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' })
}

export const Timeline = ({ groups }: Props) => {
  if (groups.length === 0) return null

  return (
    <div className='flex flex-col gap-4'>
      <Tabs aria-label='Días de partidos' defaultSelectedKey={groups[0]?.date}>
        <Tabs.List className='gap-0 border-b border-divider'>
          {groups.map((group) => (
            <Tabs.Tab key={group.date} id={group.date} className='px-4 py-2'>
              {formatTabDate(group.date)}
              <Tabs.Indicator />
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {groups.map((group) => (
          <Tabs.Panel key={group.date} id={group.date}>
            <TimelineDayPanel matches={group.matches} />
          </Tabs.Panel>
        ))}
      </Tabs>
    </div>
  )
}
