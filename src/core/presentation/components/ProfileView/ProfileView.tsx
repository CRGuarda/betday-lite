'use client'

import { Accordion } from '@heroui/react'
import { useBetStore } from '@/core/presentation/store/bet.store'
import { BetWithMatch } from '@/core/domain/entities/bet.entity'
import { BetList } from '@/core/presentation/components/Bet/BetList'
import { BetListEmpty } from '@/core/presentation/components/Bet/BetListEmpty'

type Props = {
  serverBets: BetWithMatch[]
}

export const ProfileView = ({ serverBets }: Props) => {
  const storeBets = useBetStore((s) => s.bets)

  return (
    <div className='flex flex-col gap-10'>
      <section className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-lg font-bold'>Apuestas recientes</h2>
          <p className='text-sm text-default-400'>Realizadas en esta sesión</p>
        </div>

        {storeBets.length === 0 ? <BetListEmpty /> : <BetList bets={storeBets} />}
      </section>

      <Accordion className='rounded-xl border border-divider bg-background shadow-sm'>
        <Accordion.Item>
          <Accordion.Heading>
            <Accordion.Trigger>
              Historial
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-default-400'>Tus apuestas anteriores</p>
                <BetList bets={serverBets} />
              </div>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
